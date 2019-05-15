// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('tsglive_shooting.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
goog.require('rum.core');
tsglive_shooting.core.get_app_element = (function tsglive_shooting$core$get_app_element(){
return goog.dom.getElement("app");
});
tsglive_shooting.core.hello_world = rum.core.build_defc((function (){
return React.createElement("div",null,React.createElement("h1",null,"TSG LIVE! 3 live game coding"),React.createElement("h3",null,"Here comes the game!"));
}),null,"hello-world");
tsglive_shooting.core.mount = (function tsglive_shooting$core$mount(el){
return rum.core.mount((tsglive_shooting.core.hello_world.cljs$core$IFn$_invoke$arity$0 ? tsglive_shooting.core.hello_world.cljs$core$IFn$_invoke$arity$0() : tsglive_shooting.core.hello_world.call(null)),el);
});
tsglive_shooting.core.mount_app_element = (function tsglive_shooting$core$mount_app_element(){
var temp__5720__auto__ = tsglive_shooting.core.get_app_element();
if(cljs.core.truth_(temp__5720__auto__)){
var el = temp__5720__auto__;
return tsglive_shooting.core.mount(el);
} else {
return null;
}
});
tsglive_shooting.core.mount_app_element();
tsglive_shooting.core.on_reload = (function tsglive_shooting$core$on_reload(){
return tsglive_shooting.core.mount_app_element();
});
