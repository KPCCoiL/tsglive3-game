(ns ^:figwheel-hooks tsglive-shooting.core
  (:require
   [goog.dom :as gdom]
   [rum.core :as rum]))

(def width 300)
(def height 600)
(def ship-size 30)
(def sradius (/ ship-size 2))
(def center [(/ width 2) (/ height 2)])
(def speed 1)
(def bradius 5)
(def rate 0.03)
(def initial-state
  {::position center
   ::velocity [0 0]
   ::bullets []
   ::game-over false})

(defn clamp [llim x rlim]
  (-> x
      (max llim)
      (min rlim)))

(defn normalize [v]
  (let [norm (apply Math/hypot v)]
    (if (= v [0 0])
      [0 0]
      (mapv #(/ % norm) v))))

(defn velocity-of [{mouse ::mouse}]
  (if-not mouse
    [0 0]
    (let [unit (normalize (map - mouse center))]
      (map #(* speed %) unit))))

(defn update-velocity [{mouse ::mouse :as state}]
  (assoc state ::velocity (velocity-of state)))

(defn move-ship [{velocity ::velocity :as state}]
  (update state ::position 
          #(map (fn [x y] (clamp 0 x y))
                (map + velocity %)
                [width height])))

(defn move-bullet [{position ::position velocity ::velocity :as state}]
  (assoc state ::position
         (map + position velocity)))

(defn move-bullets [state]
  (update state ::bullets
          #(map move-bullet %)))

(defn produce-bullets [state]
  (cond-> state
    (< (rand) rate)
    (update ::bullets #(cons {::position [(rand width) (- (* 2 bradius))]
                              ::velocity [0 2]}
                             %))))

(defn in-screen? [{[x y] ::position}]
  (let [bsize (* 2 bradius)]
    (and
      (<= (- bsize) x (+ width bsize))
      (<= (- bsize) y (+ height bsize)))))

(defn erase-bullets [state]
  (update state ::bullets
          #(filter in-screen? %)))

(defn collide? [[x y] {[bx by] ::position}]
  (<= (Math/hypot (- x bx) (- y by))
      (+ bradius sradius)))

(defn game-over? [{position ::position bullets ::bullets}]
  (some #(collide? position %) bullets))

(defn check-game-over [state]
  (cond-> state
    (game-over? state) (assoc ::game-over true)))

(defn next-frame [state]
  (-> state
      move-ship
      update-velocity
      produce-bullets
      move-bullets
      erase-bullets
      check-game-over))

(defn mouse-of [mouse-event]
  [(.-pageX mouse-event) (.-pageY mouse-event)])

(rum/defc screen < rum/reactive [state]
  [:div
   [:svg {:x 0
          :y 0
          :width width
          :height height
          :on-mouse-down #(swap! state assoc ::mouse (mouse-of %))
          :on-mouse-move #(when (::mouse @state)
                            (swap! state assoc ::mouse (mouse-of %)))
          :on-mouse-up #(swap! state dissoc ::mouse)
          :on-touch-start #(swap! state assoc ::mouse
                                  (mouse-of
                                    (aget (.-changedTouches %) 0)))
          :on-touch-move #(when (::mouse @state)
                            (swap! state assoc ::mouse
                                   (mouse-of
                                     (aget (.-changedTouches %) 0))))
          :on-touch-end #(swap! state dissoc ::mouse)}
    [:rect {:x 0
            :y 0
            :width width
            :height height
            :stroke "black"
            :fill "white"
            :stroke-width 2}]
    (when-not (::game-over (rum/react state))
      [:image {:x (- (first (::position (rum/react state)))
                     (/ ship-size 2))
               :y (- (second (::position (rum/react state)))
                     (/ ship-size 2))
               :href "images/spaceship.svg"
               :width ship-size
               :height ship-size}])
    (for [{[x y] ::position} (::bullets (rum/react state))]
      [:circle {:cx x
                :cy y
                :r bradius}])
    (when (::game-over (rum/react state))
      [:text {:x (first center)
              :y (second center)
              :fill "red"
              :font-weight "bold"
              :font-size 30
              :text-anchor "middle"}
       "Game Over"])]])

(def game-state
  (atom initial-state))

(defonce initialization
  (js/setInterval
    #(swap! game-state next-frame)
    (/ 1000 200)))

(defn get-app-element []
  (gdom/getElement "app"))

(defn mount [el]
  (rum/mount (screen game-state) el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

(mount-app-element)

(defn ^:after-load on-reload []
  (mount-app-element)
)
