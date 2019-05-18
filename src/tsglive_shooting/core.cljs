(ns ^:figwheel-hooks tsglive-shooting.core
  (:require
   [goog.dom :as gdom]
   [rum.core :as rum]))

(def width 300)
(def height 600)
(def ship-size 30)
(def center [(/ width 2) (/ height 2)])
(def speed 1)
(def initial-state
  {::position center
   ::velocity [0 0]})

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
          #(map + velocity %)))

(defn next-frame [state]
  (-> state
      move-ship
      update-velocity))

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
          :on-mouse-up #(swap! state dissoc ::mouse)}
    [:rect {:x 0
            :y 0
            :width width
            :height height
            :stroke "black"
            :fill "white"
            :stroke-width 2}]
    [:image {:x (- (first (::position (rum/react state)))
                   (/ ship-size 2))
             :y (- (second (::position (rum/react state)))
                   (/ ship-size 2))
             :href "images/spaceship.svg"
             :width ship-size
             :height ship-size}]]])

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
