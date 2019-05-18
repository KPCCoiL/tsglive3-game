(ns ^:figwheel-hooks tsglive-shooting.core
  (:require
   [goog.dom :as gdom]
   [rum.core :as rum]))


(defn get-app-element []
  (gdom/getElement "app"))

(rum/defc hello-world []
  [:div
   [:h1 "TSG LIVE! 3 live game coding"]
   [:h3 "Here comes the game!"]])

(defn mount [el]
  (rum/mount (hello-world) el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

(mount-app-element)

(defn ^:after-load on-reload []
  (mount-app-element)
)
