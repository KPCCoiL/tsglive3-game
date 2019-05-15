// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.object');
goog.require('sablono.core');
goog.require('rum.cursor');
goog.require('rum.util');
goog.require('rum.derived_atom');
/**
 * Given React component, returns Rum state associated with it.
 */
rum.core.state = (function rum$core$state(comp){
var G__15258 = comp.state;
var G__15259 = ":rum/state";
return goog.object.get(G__15258,G__15259);
});
rum.core.extend_BANG_ = (function rum$core$extend_BANG_(obj,props){
var seq__15260 = cljs.core.seq(props);
var chunk__15262 = null;
var count__15263 = (0);
var i__15264 = (0);
while(true){
if((i__15264 < count__15263)){
var vec__15278 = chunk__15262.cljs$core$IIndexed$_nth$arity$2(null,i__15264);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15278,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15278,(1),null);
if((!((v == null)))){
var G__15281_15290 = obj;
var G__15282_15291 = cljs.core.name(k);
var G__15283_15292 = cljs.core.clj__GT_js(v);
goog.object.set(G__15281_15290,G__15282_15291,G__15283_15292);


var G__15293 = seq__15260;
var G__15294 = chunk__15262;
var G__15295 = count__15263;
var G__15296 = (i__15264 + (1));
seq__15260 = G__15293;
chunk__15262 = G__15294;
count__15263 = G__15295;
i__15264 = G__15296;
continue;
} else {
var G__15297 = seq__15260;
var G__15298 = chunk__15262;
var G__15299 = count__15263;
var G__15300 = (i__15264 + (1));
seq__15260 = G__15297;
chunk__15262 = G__15298;
count__15263 = G__15299;
i__15264 = G__15300;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__15260);
if(temp__5720__auto__){
var seq__15260__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15260__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__15260__$1);
var G__15301 = cljs.core.chunk_rest(seq__15260__$1);
var G__15302 = c__4550__auto__;
var G__15303 = cljs.core.count(c__4550__auto__);
var G__15304 = (0);
seq__15260 = G__15301;
chunk__15262 = G__15302;
count__15263 = G__15303;
i__15264 = G__15304;
continue;
} else {
var vec__15284 = cljs.core.first(seq__15260__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15284,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15284,(1),null);
if((!((v == null)))){
var G__15287_15305 = obj;
var G__15288_15306 = cljs.core.name(k);
var G__15289_15307 = cljs.core.clj__GT_js(v);
goog.object.set(G__15287_15305,G__15288_15306,G__15289_15307);


var G__15308 = cljs.core.next(seq__15260__$1);
var G__15309 = null;
var G__15310 = (0);
var G__15311 = (0);
seq__15260 = G__15308;
chunk__15262 = G__15309;
count__15263 = G__15310;
i__15264 = G__15311;
continue;
} else {
var G__15312 = cljs.core.next(seq__15260__$1);
var G__15313 = null;
var G__15314 = (0);
var G__15315 = (0);
seq__15260 = G__15312;
chunk__15262 = G__15313;
count__15263 = G__15314;
i__15264 = G__15315;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.build_class = (function rum$core$build_class(render,mixins,display_name){
var init = rum.util.collect(cljs.core.cst$kw$init,mixins);
var will_mount = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$will_DASH_mount,cljs.core.cst$kw$before_DASH_render], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect(cljs.core.cst$kw$wrap_DASH_render,mixins);
var wrapped_render = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (init,will_mount,render__$1,wrap_render){
return (function (p1__15317_SHARP_,p2__15316_SHARP_){
return (p2__15316_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__15316_SHARP_.cljs$core$IFn$_invoke$arity$1(p1__15317_SHARP_) : p2__15316_SHARP_.call(null,p1__15317_SHARP_));
});})(init,will_mount,render__$1,wrap_render))
,render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$did_DASH_mount,cljs.core.cst$kw$after_DASH_render], null),mixins);
var did_remount = rum.util.collect(cljs.core.cst$kw$did_DASH_remount,mixins);
var should_update = rum.util.collect(cljs.core.cst$kw$should_DASH_update,mixins);
var will_update = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$will_DASH_update,cljs.core.cst$kw$before_DASH_render], null),mixins);
var did_update = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$did_DASH_update,cljs.core.cst$kw$after_DASH_render], null),mixins);
var did_catch = rum.util.collect(cljs.core.cst$kw$did_DASH_catch,mixins);
var will_unmount = rum.util.collect(cljs.core.cst$kw$will_DASH_unmount,mixins);
var child_context = rum.util.collect(cljs.core.cst$kw$child_DASH_context,mixins);
var class_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,rum.util.collect(cljs.core.cst$kw$class_DASH_properties,mixins));
var static_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,rum.util.collect(cljs.core.cst$kw$static_DASH_properties,mixins));
var ctor = ((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props){
return (function (props){
var this$ = this;
var G__15322_15359 = this$;
var G__15323_15360 = "state";
var G__15324_15361 = ({":rum/state": cljs.core.volatile_BANG_(rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(goog.object.get(props,":rum/initial-state"),cljs.core.cst$kw$rum_SLASH_react_DASH_component,this$),init,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0)))});
goog.object.set(G__15322_15359,G__15323_15360,G__15324_15361);

return React.Component.call(this$,props);
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props))
;
var _ = goog.inherits(ctor,React.Component);
var prototype = goog.object.get(ctor,"prototype");
if(cljs.core.empty_QMARK_(will_mount)){
} else {
var G__15325_15362 = prototype;
var G__15326_15363 = "componentWillMount";
var G__15327_15364 = ((function (G__15325_15362,G__15326_15363,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),will_mount));
});})(G__15325_15362,G__15326_15363,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__15325_15362,G__15326_15363,G__15327_15364);
}

if(cljs.core.empty_QMARK_(did_mount)){
} else {
var G__15328_15365 = prototype;
var G__15329_15366 = "componentDidMount";
var G__15330_15367 = ((function (G__15328_15365,G__15329_15366,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),did_mount));
});})(G__15328_15365,G__15329_15366,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__15328_15365,G__15329_15366,G__15330_15367);
}

var G__15331_15368 = prototype;
var G__15332_15369 = "componentWillReceiveProps";
var G__15333_15370 = ((function (G__15331_15368,G__15332_15369,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (next_props){
var this$ = this;
var old_state = cljs.core.deref(rum.core.state(this$));
var state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_state,goog.object.get(next_props,":rum/initial-state")], 0));
var next_state = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (old_state,state,this$,G__15331_15368,G__15332_15369,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__15319_SHARP_,p2__15318_SHARP_){
return (p2__15318_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p2__15318_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,p1__15319_SHARP_) : p2__15318_SHARP_.call(null,old_state,p1__15319_SHARP_));
});})(old_state,state,this$,G__15331_15368,G__15332_15369,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
,state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_(next_state)}));
});})(G__15331_15368,G__15332_15369,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__15331_15368,G__15332_15369,G__15333_15370);

if(cljs.core.empty_QMARK_(should_update)){
} else {
var G__15334_15371 = prototype;
var G__15335_15372 = "shouldComponentUpdate";
var G__15336_15373 = ((function (G__15334_15371,G__15335_15372,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref(rum.core.state(this$));
var new_state = cljs.core.deref(goog.object.get(next_state,":rum/state"));
var or__4131__auto__ = cljs.core.some(((function (old_state,new_state,this$,G__15334_15371,G__15335_15372,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__15320_SHARP_){
return (p1__15320_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__15320_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,new_state) : p1__15320_SHARP_.call(null,old_state,new_state));
});})(old_state,new_state,this$,G__15334_15371,G__15335_15372,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
,should_update);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return false;
}
});})(G__15334_15371,G__15335_15372,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__15334_15371,G__15335_15372,G__15336_15373);
}

if(cljs.core.empty_QMARK_(will_update)){
} else {
var G__15337_15374 = prototype;
var G__15338_15375 = "componentWillUpdate";
var G__15339_15376 = ((function (G__15337_15374,G__15338_15375,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (___$1,next_state){
var this$ = this;
var new_state = goog.object.get(next_state,":rum/state");
return cljs.core._vreset_BANG_(new_state,rum.util.call_all(cljs.core._deref(new_state),will_update));
});})(G__15337_15374,G__15338_15375,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__15337_15374,G__15338_15375,G__15339_15376);
}

var G__15340_15377 = prototype;
var G__15341_15378 = "render";
var G__15342_15379 = ((function (G__15340_15377,G__15341_15378,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
var state = rum.core.state(this$);
var vec__15343 = (function (){var G__15346 = cljs.core.deref(state);
return (wrapped_render.cljs$core$IFn$_invoke$arity$1 ? wrapped_render.cljs$core$IFn$_invoke$arity$1(G__15346) : wrapped_render.call(null,G__15346));
})();
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15343,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15343,(1),null);
cljs.core.vreset_BANG_(state,next_state);

return dom;
});})(G__15340_15377,G__15341_15378,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__15340_15377,G__15341_15378,G__15342_15379);

if(cljs.core.empty_QMARK_(did_update)){
} else {
var G__15347_15380 = prototype;
var G__15348_15381 = "componentDidUpdate";
var G__15349_15382 = ((function (G__15347_15380,G__15348_15381,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (___$1,___$2){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),did_update));
});})(G__15347_15380,G__15348_15381,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__15347_15380,G__15348_15381,G__15349_15382);
}

if(cljs.core.empty_QMARK_(did_catch)){
} else {
var G__15350_15383 = prototype;
var G__15351_15384 = "componentDidCatch";
var G__15352_15385 = ((function (G__15350_15383,G__15351_15384,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (error,info){
var this$ = this;
cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core._deref(rum.core.state(this$)),did_catch,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_component_DASH_stack,goog.object.get(info,"componentStack")], null)], 0)));

return this$.forceUpdate();
});})(G__15350_15383,G__15351_15384,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__15350_15383,G__15351_15384,G__15352_15385);
}

var G__15353_15386 = prototype;
var G__15354_15387 = "componentWillUnmount";
var G__15355_15388 = ((function (G__15353_15386,G__15354_15387,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
if(cljs.core.empty_QMARK_(will_unmount)){
} else {
cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),will_unmount));
}

return goog.object.set(this$,":rum/unmounted?",true);
});})(G__15353_15386,G__15354_15387,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__15353_15386,G__15354_15387,G__15355_15388);

if(cljs.core.empty_QMARK_(child_context)){
} else {
var G__15356_15389 = prototype;
var G__15357_15390 = "getChildContext";
var G__15358_15391 = ((function (G__15356_15389,G__15357_15390,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
var state = cljs.core.deref(rum.core.state(this$));
return cljs.core.clj__GT_js(cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (state,this$,G__15356_15389,G__15357_15390,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__15321_SHARP_){
return (p1__15321_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__15321_SHARP_.cljs$core$IFn$_invoke$arity$1(state) : p1__15321_SHARP_.call(null,state));
});})(state,this$,G__15356_15389,G__15357_15390,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(G__15356_15389,G__15357_15390,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__15356_15389,G__15357_15390,G__15358_15391);
}

rum.core.extend_BANG_(prototype,class_props);

goog.object.set(ctor,"displayName",display_name);

rum.core.extend_BANG_(ctor,static_props);

return ctor;
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class(render,mixins,display_name);
var key_fn = cljs.core.first(rum.util.collect(cljs.core.cst$kw$key_DASH_fn,mixins));
var ctor = (((!((key_fn == null))))?((function (class$,key_fn){
return (function() { 
var G__15392__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_args,args], null), "key": cljs.core.apply.cljs$core$IFn$_invoke$arity$2(key_fn,args)});
return React.createElement(class$,props);
};
var G__15392 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15393__i = 0, G__15393__a = new Array(arguments.length -  0);
while (G__15393__i < G__15393__a.length) {G__15393__a[G__15393__i] = arguments[G__15393__i + 0]; ++G__15393__i;}
  args = new cljs.core.IndexedSeq(G__15393__a,0,null);
} 
return G__15392__delegate.call(this,args);};
G__15392.cljs$lang$maxFixedArity = 0;
G__15392.cljs$lang$applyTo = (function (arglist__15394){
var args = cljs.core.seq(arglist__15394);
return G__15392__delegate(args);
});
G__15392.cljs$core$IFn$_invoke$arity$variadic = G__15392__delegate;
return G__15392;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__15395__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_args,args], null)});
return React.createElement(class$,props);
};
var G__15395 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15396__i = 0, G__15396__a = new Array(arguments.length -  0);
while (G__15396__i < G__15396__a.length) {G__15396__a[G__15396__i] = arguments[G__15396__i + 0]; ++G__15396__i;}
  args = new cljs.core.IndexedSeq(G__15396__a,0,null);
} 
return G__15395__delegate.call(this,args);};
G__15395.cljs$lang$maxFixedArity = 0;
G__15395.cljs$lang$applyTo = (function (arglist__15397){
var args = cljs.core.seq(arglist__15397);
return G__15395__delegate(args);
});
G__15395.cljs$core$IFn$_invoke$arity$variadic = G__15395__delegate;
return G__15395;
})()
;})(class$,key_fn))
);
return cljs.core.with_meta(ctor,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class$], null));
});
rum.core.build_defc = (function rum$core$build_defc(render_body,mixins,display_name){
if(cljs.core.empty_QMARK_(mixins)){
var class$ = (function (props){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var ctor = ((function (class$,_){
return (function() { 
var G__15398__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__15398 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15399__i = 0, G__15399__a = new Array(arguments.length -  0);
while (G__15399__i < G__15399__a.length) {G__15399__a[G__15399__i] = arguments[G__15399__i + 0]; ++G__15399__i;}
  args = new cljs.core.IndexedSeq(G__15399__a,0,null);
} 
return G__15398__delegate.call(this,args);};
G__15398.cljs$lang$maxFixedArity = 0;
G__15398.cljs$lang$applyTo = (function (arglist__15400){
var args = cljs.core.seq(arglist__15400);
return G__15398__delegate(args);
});
G__15398.cljs$core$IFn$_invoke$arity$variadic = G__15398__delegate;
return G__15398;
})()
;})(class$,_))
;
return cljs.core.with_meta(ctor,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class$], null));
} else {
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_body,cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor(render,mixins,display_name);
}
});
rum.core.build_defcs = (function rum$core$build_defcs(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(render_body,state,cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor(render,mixins,display_name);
});
rum.core.build_defcc = (function rum$core$build_defcc(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(render_body,cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor(render,mixins,display_name);
});
rum.core.schedule = (function (){var or__4131__auto__ = (function (){var and__4120__auto__ = (typeof window !== 'undefined');
if(and__4120__auto__){
var or__4131__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((function (or__4131__auto__){
return (function (p1__15401_SHARP_){
return setTimeout(p1__15401_SHARP_,(16));
});
;})(or__4131__auto__))
}
})();
rum.core.batch = (function (){var or__4131__auto__ = (((typeof ReactNative !== 'undefined'))?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (((typeof ReactDOM !== 'undefined'))?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return ((function (or__4131__auto____$1,or__4131__auto__){
return (function (f,a){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(a) : f.call(null,a));
});
;})(or__4131__auto____$1,or__4131__auto__))
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_(rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
var seq__15402 = cljs.core.seq(queue);
var chunk__15404 = null;
var count__15405 = (0);
var i__15406 = (0);
while(true){
if((i__15406 < count__15405)){
var comp = chunk__15404.cljs$core$IIndexed$_nth$arity$2(null,i__15406);
if(cljs.core.not(goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();


var G__15408 = seq__15402;
var G__15409 = chunk__15404;
var G__15410 = count__15405;
var G__15411 = (i__15406 + (1));
seq__15402 = G__15408;
chunk__15404 = G__15409;
count__15405 = G__15410;
i__15406 = G__15411;
continue;
} else {
var G__15412 = seq__15402;
var G__15413 = chunk__15404;
var G__15414 = count__15405;
var G__15415 = (i__15406 + (1));
seq__15402 = G__15412;
chunk__15404 = G__15413;
count__15405 = G__15414;
i__15406 = G__15415;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__15402);
if(temp__5720__auto__){
var seq__15402__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15402__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__15402__$1);
var G__15416 = cljs.core.chunk_rest(seq__15402__$1);
var G__15417 = c__4550__auto__;
var G__15418 = cljs.core.count(c__4550__auto__);
var G__15419 = (0);
seq__15402 = G__15416;
chunk__15404 = G__15417;
count__15405 = G__15418;
i__15406 = G__15419;
continue;
} else {
var comp = cljs.core.first(seq__15402__$1);
if(cljs.core.not(goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();


var G__15420 = cljs.core.next(seq__15402__$1);
var G__15421 = null;
var G__15422 = (0);
var G__15423 = (0);
seq__15402 = G__15420;
chunk__15404 = G__15421;
count__15405 = G__15422;
i__15406 = G__15423;
continue;
} else {
var G__15424 = cljs.core.next(seq__15402__$1);
var G__15425 = null;
var G__15426 = (0);
var G__15427 = (0);
seq__15402 = G__15424;
chunk__15404 = G__15425;
count__15405 = G__15426;
i__15406 = G__15427;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.render = (function rum$core$render(){
var queue = cljs.core.deref(rum.core.render_queue);
cljs.core.vreset_BANG_(rum.core.render_queue,rum.core.empty_queue);

return (rum.core.batch.cljs$core$IFn$_invoke$arity$2 ? rum.core.batch.cljs$core$IFn$_invoke$arity$2(rum.core.render_all,queue) : rum.core.batch.call(null,rum.core.render_all,queue));
});
/**
 * Schedules react component to be rendered on next animation frame.
 */
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_(cljs.core.deref(rum.core.render_queue))){
(rum.core.schedule.cljs$core$IFn$_invoke$arity$1 ? rum.core.schedule.cljs$core$IFn$_invoke$arity$1(rum.core.render) : rum.core.schedule.call(null,rum.core.render));
} else {
}

return rum.core.render_queue.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rum.core.render_queue.cljs$core$IDeref$_deref$arity$1(null),component));
});
/**
 * Add element to the DOM tree. Idempotent. Subsequent mounts will just update element.
 */
rum.core.mount = (function rum$core$mount(element,node){
ReactDOM.render(element,node);

return null;
});
/**
 * Removes component from the DOM tree.
 */
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
/**
 * Same as [[mount]] but must be called on DOM tree already rendered by a server via [[render-html]].
 */
rum.core.hydrate = (function rum$core$hydrate(element,node){
return ReactDOM.hydrate(element,node);
});
/**
 * Render `element` in a DOM `node` that is ouside of current DOM hierarchy.
 */
rum.core.portal = (function rum$core$portal(element,node){
return ReactDOM.createPortal(element,node);
});
/**
 * Adds React key to element.
 * 
 * ```
 * (rum/defc label [text] [:div text])
 * 
 * (-> (label)
 *     (rum/with-key "abc")
 *     (rum/mount js/document.body))
 * ```
 */
rum.core.with_key = (function rum$core$with_key(element,key){
return React.cloneElement(element,({"key": key}),null);
});
/**
 * Adds React ref (string or callback) to element.
 * 
 * ```
 * (rum/defc label [text] [:div text])
 * 
 * (-> (label)
 *     (rum/with-ref "abc")
 *     (rum/mount js/document.body))
 * ```
 */
rum.core.with_ref = (function rum$core$with_ref(element,ref){
return React.cloneElement(element,({"ref": ref}),null);
});
/**
 * Given state, returns top-level DOM node of component. Call it during lifecycle callbacks. Can’t be called during render.
 */
rum.core.dom_node = (function rum$core$dom_node(state){
return ReactDOM.findDOMNode(cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * Given state and ref handle, returns React component.
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name(key)]);
});
/**
 * Given state and ref handle, returns DOM node associated with ref.
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
return ReactDOM.findDOMNode(rum.core.ref(state,cljs.core.name(key)));
});
/**
 * Mixin. Will avoid re-render if none of component’s arguments have changed. Does equality check (`=`) on all arguments.
 *   
 * ```
 * (rum/defc label < rum/static
 *   [text]
 *   [:div text])
 *   
 * (rum/mount (label "abc") js/document.body)
 * 
 * ;; def != abc, will re-render
 * (rum/mount (label "def") js/document.body)
 * 
 * ;; def == def, won’t re-render
 * (rum/mount (label "def") js/document.body)
 * ```
 */
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$should_DASH_update,(function (old_state,new_state){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(old_state),cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Mixin constructor. Adds an atom to component’s state that can be used to keep stuff during component’s lifecycle. Component will be re-rendered if atom’s value changes. Atom is stored under user-provided key or under `:rum/local` by default.
 *   
 * ```
 * (rum/defcs counter < (rum/local 0 :cnt)
 *   [state label]
 *   (let [*cnt (:cnt state)]
 *     [:div {:on-click (fn [_] (swap! *cnt inc))}
 *       label @*cnt]))
 * 
 * (rum/mount (counter "Click count: "))
 * ```
 */
rum.core.local = (function rum$core$local(var_args){
var G__15429 = arguments.length;
switch (G__15429) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.core.local.cljs$core$IFn$_invoke$arity$1 = (function (initial){
return rum.core.local.cljs$core$IFn$_invoke$arity$2(initial,cljs.core.cst$kw$rum_SLASH_local);
});

rum.core.local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$will_DASH_mount,(function (state){
var local_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(initial);
var component = cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch(local_state,key,((function (local_state,component){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(component);
});})(local_state,component))
);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,key,local_state);
})], null);
});

rum.core.local.cljs$lang$maxFixedArity = 2;

/**
 * Mixin. Works in conjunction with [[react]].
 *   
 * ```
 * (rum/defc comp < rum/reactive
 *   [*counter]
 *   [:div (rum/react counter)])
 * 
 * (def *counter (atom 0))
 * (rum/mount (comp *counter) js/document.body)
 * (swap! *counter inc) ;; will force comp to re-render
 * ```
 */
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$init,(function (state,props){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$rum$reactive_SLASH_key,cljs.core.random_uuid());
}),cljs.core.cst$kw$wrap_DASH_render,(function (render_fn){
return (function (state){
var _STAR_reactions_STAR__orig_val__15431 = rum.core._STAR_reactions_STAR_;
var _STAR_reactions_STAR__temp_val__15432 = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR__temp_val__15432;

try{var comp = cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = cljs.core.cst$kw$rum$reactive_SLASH_refs.cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__15433 = (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(state) : render_fn.call(null,state));
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15433,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15433,(1),null);
var new_reactions = cljs.core.deref(rum.core._STAR_reactions_STAR_);
var key = cljs.core.cst$kw$rum$reactive_SLASH_key.cljs$core$IFn$_invoke$arity$1(state);
var seq__15436_15448 = cljs.core.seq(old_reactions);
var chunk__15437_15449 = null;
var count__15438_15450 = (0);
var i__15439_15451 = (0);
while(true){
if((i__15439_15451 < count__15438_15450)){
var ref_15452 = chunk__15437_15449.cljs$core$IIndexed$_nth$arity$2(null,i__15439_15451);
if(cljs.core.contains_QMARK_(new_reactions,ref_15452)){
} else {
cljs.core.remove_watch(ref_15452,key);
}


var G__15453 = seq__15436_15448;
var G__15454 = chunk__15437_15449;
var G__15455 = count__15438_15450;
var G__15456 = (i__15439_15451 + (1));
seq__15436_15448 = G__15453;
chunk__15437_15449 = G__15454;
count__15438_15450 = G__15455;
i__15439_15451 = G__15456;
continue;
} else {
var temp__5720__auto___15457 = cljs.core.seq(seq__15436_15448);
if(temp__5720__auto___15457){
var seq__15436_15458__$1 = temp__5720__auto___15457;
if(cljs.core.chunked_seq_QMARK_(seq__15436_15458__$1)){
var c__4550__auto___15459 = cljs.core.chunk_first(seq__15436_15458__$1);
var G__15460 = cljs.core.chunk_rest(seq__15436_15458__$1);
var G__15461 = c__4550__auto___15459;
var G__15462 = cljs.core.count(c__4550__auto___15459);
var G__15463 = (0);
seq__15436_15448 = G__15460;
chunk__15437_15449 = G__15461;
count__15438_15450 = G__15462;
i__15439_15451 = G__15463;
continue;
} else {
var ref_15464 = cljs.core.first(seq__15436_15458__$1);
if(cljs.core.contains_QMARK_(new_reactions,ref_15464)){
} else {
cljs.core.remove_watch(ref_15464,key);
}


var G__15465 = cljs.core.next(seq__15436_15458__$1);
var G__15466 = null;
var G__15467 = (0);
var G__15468 = (0);
seq__15436_15448 = G__15465;
chunk__15437_15449 = G__15466;
count__15438_15450 = G__15467;
i__15439_15451 = G__15468;
continue;
}
} else {
}
}
break;
}

var seq__15440_15469 = cljs.core.seq(new_reactions);
var chunk__15441_15470 = null;
var count__15442_15471 = (0);
var i__15443_15472 = (0);
while(true){
if((i__15443_15472 < count__15442_15471)){
var ref_15473 = chunk__15441_15470.cljs$core$IIndexed$_nth$arity$2(null,i__15443_15472);
if(cljs.core.contains_QMARK_(old_reactions,ref_15473)){
} else {
cljs.core.add_watch(ref_15473,key,((function (seq__15440_15469,chunk__15441_15470,count__15442_15471,i__15443_15472,ref_15473,comp,old_reactions,vec__15433,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__15431,_STAR_reactions_STAR__temp_val__15432){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(comp);
});})(seq__15440_15469,chunk__15441_15470,count__15442_15471,i__15443_15472,ref_15473,comp,old_reactions,vec__15433,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__15431,_STAR_reactions_STAR__temp_val__15432))
);
}


var G__15474 = seq__15440_15469;
var G__15475 = chunk__15441_15470;
var G__15476 = count__15442_15471;
var G__15477 = (i__15443_15472 + (1));
seq__15440_15469 = G__15474;
chunk__15441_15470 = G__15475;
count__15442_15471 = G__15476;
i__15443_15472 = G__15477;
continue;
} else {
var temp__5720__auto___15478 = cljs.core.seq(seq__15440_15469);
if(temp__5720__auto___15478){
var seq__15440_15479__$1 = temp__5720__auto___15478;
if(cljs.core.chunked_seq_QMARK_(seq__15440_15479__$1)){
var c__4550__auto___15480 = cljs.core.chunk_first(seq__15440_15479__$1);
var G__15481 = cljs.core.chunk_rest(seq__15440_15479__$1);
var G__15482 = c__4550__auto___15480;
var G__15483 = cljs.core.count(c__4550__auto___15480);
var G__15484 = (0);
seq__15440_15469 = G__15481;
chunk__15441_15470 = G__15482;
count__15442_15471 = G__15483;
i__15443_15472 = G__15484;
continue;
} else {
var ref_15485 = cljs.core.first(seq__15440_15479__$1);
if(cljs.core.contains_QMARK_(old_reactions,ref_15485)){
} else {
cljs.core.add_watch(ref_15485,key,((function (seq__15440_15469,chunk__15441_15470,count__15442_15471,i__15443_15472,ref_15485,seq__15440_15479__$1,temp__5720__auto___15478,comp,old_reactions,vec__15433,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__15431,_STAR_reactions_STAR__temp_val__15432){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(comp);
});})(seq__15440_15469,chunk__15441_15470,count__15442_15471,i__15443_15472,ref_15485,seq__15440_15479__$1,temp__5720__auto___15478,comp,old_reactions,vec__15433,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__15431,_STAR_reactions_STAR__temp_val__15432))
);
}


var G__15486 = cljs.core.next(seq__15440_15479__$1);
var G__15487 = null;
var G__15488 = (0);
var G__15489 = (0);
seq__15440_15469 = G__15486;
chunk__15441_15470 = G__15487;
count__15442_15471 = G__15488;
i__15443_15472 = G__15489;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(next_state,cljs.core.cst$kw$rum$reactive_SLASH_refs,new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR__orig_val__15431;
}});
}),cljs.core.cst$kw$will_DASH_unmount,(function (state){
var key_15490 = cljs.core.cst$kw$rum$reactive_SLASH_key.cljs$core$IFn$_invoke$arity$1(state);
var seq__15444_15491 = cljs.core.seq(cljs.core.cst$kw$rum$reactive_SLASH_refs.cljs$core$IFn$_invoke$arity$1(state));
var chunk__15445_15492 = null;
var count__15446_15493 = (0);
var i__15447_15494 = (0);
while(true){
if((i__15447_15494 < count__15446_15493)){
var ref_15495 = chunk__15445_15492.cljs$core$IIndexed$_nth$arity$2(null,i__15447_15494);
cljs.core.remove_watch(ref_15495,key_15490);


var G__15496 = seq__15444_15491;
var G__15497 = chunk__15445_15492;
var G__15498 = count__15446_15493;
var G__15499 = (i__15447_15494 + (1));
seq__15444_15491 = G__15496;
chunk__15445_15492 = G__15497;
count__15446_15493 = G__15498;
i__15447_15494 = G__15499;
continue;
} else {
var temp__5720__auto___15500 = cljs.core.seq(seq__15444_15491);
if(temp__5720__auto___15500){
var seq__15444_15501__$1 = temp__5720__auto___15500;
if(cljs.core.chunked_seq_QMARK_(seq__15444_15501__$1)){
var c__4550__auto___15502 = cljs.core.chunk_first(seq__15444_15501__$1);
var G__15503 = cljs.core.chunk_rest(seq__15444_15501__$1);
var G__15504 = c__4550__auto___15502;
var G__15505 = cljs.core.count(c__4550__auto___15502);
var G__15506 = (0);
seq__15444_15491 = G__15503;
chunk__15445_15492 = G__15504;
count__15446_15493 = G__15505;
i__15447_15494 = G__15506;
continue;
} else {
var ref_15507 = cljs.core.first(seq__15444_15501__$1);
cljs.core.remove_watch(ref_15507,key_15490);


var G__15508 = cljs.core.next(seq__15444_15501__$1);
var G__15509 = null;
var G__15510 = (0);
var G__15511 = (0);
seq__15444_15491 = G__15508;
chunk__15445_15492 = G__15509;
count__15446_15493 = G__15510;
i__15447_15494 = G__15511;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$rum$reactive_SLASH_refs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$rum$reactive_SLASH_key], 0));
})], null);
/**
 * Works in conjunction with [[reactive]] mixin. Use this function instead of `deref` inside render, and your component will subscribe to changes happening to the derefed atom.
 */
rum.core.react = (function rum$core$react(ref){
if(cljs.core.truth_(rum.core._STAR_reactions_STAR_)){
} else {
throw (new Error(["Assert failed: ","rum.core/react is only supported in conjunction with rum.core/reactive","\n","*reactions*"].join('')));
}

cljs.core._vreset_BANG_(rum.core._STAR_reactions_STAR_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref(ref);
});
/**
 * Use this to create “chains” and acyclic graphs of dependent atoms.
 * 
 *           [[derived-atom]] will:
 *        
 *           - Take N “source” refs.
 *           - Set up a watch on each of them.
 *           - Create “sink” atom.
 *           - When any of source refs changes:
 *              - re-run function `f`, passing N dereferenced values of source refs.
 *              - `reset!` result of `f` to the sink atom.
 *           - Return sink atom.
 * 
 *           Example:
 * 
 *           ```
 *           (def *a (atom 0))
 *           (def *b (atom 1))
 *           (def *x (derived-atom [*a *b] ::key
 *                     (fn [a b]
 *                       (str a ":" b))))
 *           
 *           (type *x) ;; => clojure.lang.Atom
 *           (deref *x) ;; => "0:1"
 *           
 *           (swap! *a inc)
 *           (deref *x) ;; => "1:1"
 *           
 *           (reset! *b 7)
 *           (deref *x) ;; => "1:7"
 *           ```
 * 
 *           Arguments:
 *        
 *           - `refs` - sequence of source refs,
 *           - `key`  - unique key to register watcher, same as in `clojure.core/add-watch`,
 *           - `f`    - function that must accept N arguments (same as number of source refs) and return a value to be written to the sink ref. Note: `f` will be called with already dereferenced values,
 *           - `opts` - optional. Map of:
 *             - `:ref` - use this as sink ref. By default creates new atom,
 *             - `:check-equals?` - Defaults to `true`. If equality check should be run on each source update: `(= @sink (f new-vals))`. When result of recalculating `f` equals to the old value, `reset!` won’t be called. Set to `false` if checking for equality can be expensive.
 */
rum.core.derived_atom = rum.derived_atom.derived_atom;
/**
 * Given atom with deep nested value and path inside it, creates an atom-like structure
 * that can be used separately from main atom, but will sync changes both ways:
 *   
 * ```
 * (def db (atom { :users { "Ivan" { :age 30 }}}))
 * 
 * (def ivan (rum/cursor db [:users "Ivan"]))
 * (deref ivan) ;; => { :age 30 }
 * 
 * (swap! ivan update :age inc) ;; => { :age 31 }
 * (deref db) ;; => { :users { "Ivan" { :age 31 }}}
 * 
 * (swap! db update-in [:users "Ivan" :age] inc)
 * ;; => { :users { "Ivan" { :age 32 }}}
 * 
 * (deref ivan) ;; => { :age 32 }
 * ```
 *   
 * Returned value supports `deref`, `swap!`, `reset!`, watches and metadata.
 *   
 * The only supported option is `:meta`
 */
rum.core.cursor_in = (function rum$core$cursor_in(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15518 = arguments.length;
var i__4731__auto___15519 = (0);
while(true){
if((i__4731__auto___15519 < len__4730__auto___15518)){
args__4736__auto__.push((arguments[i__4731__auto___15519]));

var G__15520 = (i__4731__auto___15519 + (1));
i__4731__auto___15519 = G__15520;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__15515){
var map__15516 = p__15515;
var map__15516__$1 = (((((!((map__15516 == null))))?(((((map__15516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15516):map__15516);
var options = map__15516__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.cljs$core$IFn$_invoke$arity$2(ref.path,path),cljs.core.cst$kw$meta.cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,cljs.core.cst$kw$meta.cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rum.core.cursor_in.cljs$lang$applyTo = (function (seq15512){
var G__15513 = cljs.core.first(seq15512);
var seq15512__$1 = cljs.core.next(seq15512);
var G__15514 = cljs.core.first(seq15512__$1);
var seq15512__$2 = cljs.core.next(seq15512__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15513,G__15514,seq15512__$2);
});

/**
 * Same as [[cursor-in]] but accepts single key instead of path vector.
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15524 = arguments.length;
var i__4731__auto___15525 = (0);
while(true){
if((i__4731__auto___15525 < len__4730__auto___15524)){
args__4736__auto__.push((arguments[i__4731__auto___15525]));

var G__15526 = (i__4731__auto___15525 + (1));
i__4731__auto___15525 = G__15526;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
});

rum.core.cursor.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rum.core.cursor.cljs$lang$applyTo = (function (seq15521){
var G__15522 = cljs.core.first(seq15521);
var seq15521__$1 = cljs.core.next(seq15521);
var G__15523 = cljs.core.first(seq15521__$1);
var seq15521__$2 = cljs.core.next(seq15521__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15522,G__15523,seq15521__$2);
});

