(ns ^:figwheel-hooks tsglive-shooting.core
  (:require
   [goog.dom :as gdom]
   [rum.core :as rum]))

(def width 300)
(def height 600)
(def ship-size 30)

(rum/defc screen []
  [:div
   [:svg {:x 0
          :y 0
          :width width
          :height height}
    [:rect {:x 0
            :y 0
            :width width
            :height height
            :stroke "black"
            :fill "white"
            :stroke-width 2}]
    [:image {:x 150
             :y 300
             :href "images/spaceship.svg"
             :width ship-size
             :height ship-size}]]])

(defn get-app-element []
  (gdom/getElement "app"))

(defn mount [el]
  (rum/mount (screen) el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

(mount-app-element)

(defn ^:after-load on-reload []
  (mount-app-element)
)
