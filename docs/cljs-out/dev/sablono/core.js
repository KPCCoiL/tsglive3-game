// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__14674__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__14671 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__14672 = cljs.core.seq(vec__14671);
var first__14673 = cljs.core.first(seq__14672);
var seq__14672__$1 = cljs.core.next(seq__14672);
var tag = first__14673;
var body = seq__14672__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__14674 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14675__i = 0, G__14675__a = new Array(arguments.length -  0);
while (G__14675__i < G__14675__a.length) {G__14675__a[G__14675__i] = arguments[G__14675__i + 0]; ++G__14675__i;}
  args = new cljs.core.IndexedSeq(G__14675__a,0,null);
} 
return G__14674__delegate.call(this,args);};
G__14674.cljs$lang$maxFixedArity = 0;
G__14674.cljs$lang$applyTo = (function (arglist__14676){
var args = cljs.core.seq(arglist__14676);
return G__14674__delegate(args);
});
G__14674.cljs$core$IFn$_invoke$arity$variadic = G__14674__delegate;
return G__14674;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4523__auto__ = (function sablono$core$update_arglists_$_iter__14677(s__14678){
return (new cljs.core.LazySeq(null,(function (){
var s__14678__$1 = s__14678;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__14678__$1);
if(temp__5720__auto__){
var s__14678__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14678__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__14678__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__14680 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__14679 = (0);
while(true){
if((i__14679 < size__4522__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__14679);
cljs.core.chunk_append(b__14680,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__14681 = (i__14679 + (1));
i__14679 = G__14681;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14680),sablono$core$update_arglists_$_iter__14677(cljs.core.chunk_rest(s__14678__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14680),null);
}
} else {
var args = cljs.core.first(s__14678__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__14677(cljs.core.rest(s__14678__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14687 = arguments.length;
var i__4731__auto___14688 = (0);
while(true){
if((i__4731__auto___14688 < len__4730__auto___14687)){
args__4736__auto__.push((arguments[i__4731__auto___14688]));

var G__14689 = (i__4731__auto___14688 + (1));
i__4731__auto___14688 = G__14689;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4523__auto__ = (function sablono$core$iter__14683(s__14684){
return (new cljs.core.LazySeq(null,(function (){
var s__14684__$1 = s__14684;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__14684__$1);
if(temp__5720__auto__){
var s__14684__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14684__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__14684__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__14686 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__14685 = (0);
while(true){
if((i__14685 < size__4522__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__14685);
cljs.core.chunk_append(b__14686,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__14690 = (i__14685 + (1));
i__14685 = G__14690;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14686),sablono$core$iter__14683(cljs.core.chunk_rest(s__14684__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14686),null);
}
} else {
var style = cljs.core.first(s__14684__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__14683(cljs.core.rest(s__14684__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
sablono.core.include_css.cljs$lang$applyTo = (function (seq14682){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14682));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__14691 = goog.dom.getDocument().body;
var G__14692 = (function (){var G__14693 = "script";
var G__14694 = ({"src": src});
return goog.dom.createDom(G__14693,G__14694);
})();
return goog.dom.appendChild(G__14691,G__14692);
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to14695 = (function sablono$core$link_to14695(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14698 = arguments.length;
var i__4731__auto___14699 = (0);
while(true){
if((i__4731__auto___14699 < len__4730__auto___14698)){
args__4736__auto__.push((arguments[i__4731__auto___14699]));

var G__14700 = (i__4731__auto___14699 + (1));
i__4731__auto___14699 = G__14700;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to14695.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

sablono.core.link_to14695.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
});

sablono.core.link_to14695.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.link_to14695.cljs$lang$applyTo = (function (seq14696){
var G__14697 = cljs.core.first(seq14696);
var seq14696__$1 = cljs.core.next(seq14696);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14697,seq14696__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to14695);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to14701 = (function sablono$core$mail_to14701(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14708 = arguments.length;
var i__4731__auto___14709 = (0);
while(true){
if((i__4731__auto___14709 < len__4730__auto___14708)){
args__4736__auto__.push((arguments[i__4731__auto___14709]));

var G__14710 = (i__4731__auto___14709 + (1));
i__4731__auto___14709 = G__14710;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to14701.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

sablono.core.mail_to14701.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__14704){
var vec__14705 = p__14704;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14705,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4131__auto__ = content;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to14701.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.mail_to14701.cljs$lang$applyTo = (function (seq14702){
var G__14703 = cljs.core.first(seq14702);
var seq14702__$1 = cljs.core.next(seq14702);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14703,seq14702__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to14701);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list14711 = (function sablono$core$unordered_list14711(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__4523__auto__ = (function sablono$core$unordered_list14711_$_iter__14712(s__14713){
return (new cljs.core.LazySeq(null,(function (){
var s__14713__$1 = s__14713;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__14713__$1);
if(temp__5720__auto__){
var s__14713__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14713__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__14713__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__14715 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__14714 = (0);
while(true){
if((i__14714 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__14714);
cljs.core.chunk_append(b__14715,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__14716 = (i__14714 + (1));
i__14714 = G__14716;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14715),sablono$core$unordered_list14711_$_iter__14712(cljs.core.chunk_rest(s__14713__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14715),null);
}
} else {
var x = cljs.core.first(s__14713__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list14711_$_iter__14712(cljs.core.rest(s__14713__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list14711);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list14717 = (function sablono$core$ordered_list14717(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__4523__auto__ = (function sablono$core$ordered_list14717_$_iter__14718(s__14719){
return (new cljs.core.LazySeq(null,(function (){
var s__14719__$1 = s__14719;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__14719__$1);
if(temp__5720__auto__){
var s__14719__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14719__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__14719__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__14721 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__14720 = (0);
while(true){
if((i__14720 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__14720);
cljs.core.chunk_append(b__14721,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__14722 = (i__14720 + (1));
i__14720 = G__14722;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14721),sablono$core$ordered_list14717_$_iter__14718(cljs.core.chunk_rest(s__14719__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14721),null);
}
} else {
var x = cljs.core.first(s__14719__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list14717_$_iter__14718(cljs.core.rest(s__14719__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list14717);
/**
 * Create an image element.
 */
sablono.core.image14723 = (function sablono$core$image14723(var_args){
var G__14725 = arguments.length;
switch (G__14725) {
case 1:
return sablono.core.image14723.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image14723.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image14723.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
});

sablono.core.image14723.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
});

sablono.core.image14723.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image14723);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__14727_SHARP_,p2__14728_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__14727_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__14728_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__14729_SHARP_,p2__14730_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__14729_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__14730_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__14732 = arguments.length;
switch (G__14732) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null)], null);
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Creates a color input field.
 */
sablono.core.color_field14734 = (function sablono$core$color_field14734(var_args){
var G__14736 = arguments.length;
switch (G__14736) {
case 1:
return sablono.core.color_field14734.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field14734.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field14734.cljs$core$IFn$_invoke$arity$1 = (function (name__14661__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$color),name__14661__auto__);
});

sablono.core.color_field14734.cljs$core$IFn$_invoke$arity$2 = (function (name__14661__auto__,value__14662__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$color),name__14661__auto__,value__14662__auto__);
});

sablono.core.color_field14734.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field14734);

/**
 * Creates a date input field.
 */
sablono.core.date_field14737 = (function sablono$core$date_field14737(var_args){
var G__14739 = arguments.length;
switch (G__14739) {
case 1:
return sablono.core.date_field14737.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field14737.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field14737.cljs$core$IFn$_invoke$arity$1 = (function (name__14661__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$date),name__14661__auto__);
});

sablono.core.date_field14737.cljs$core$IFn$_invoke$arity$2 = (function (name__14661__auto__,value__14662__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$date),name__14661__auto__,value__14662__auto__);
});

sablono.core.date_field14737.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field14737);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field14740 = (function sablono$core$datetime_field14740(var_args){
var G__14742 = arguments.length;
switch (G__14742) {
case 1:
return sablono.core.datetime_field14740.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field14740.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field14740.cljs$core$IFn$_invoke$arity$1 = (function (name__14661__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$datetime),name__14661__auto__);
});

sablono.core.datetime_field14740.cljs$core$IFn$_invoke$arity$2 = (function (name__14661__auto__,value__14662__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$datetime),name__14661__auto__,value__14662__auto__);
});

sablono.core.datetime_field14740.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field14740);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field14743 = (function sablono$core$datetime_local_field14743(var_args){
var G__14745 = arguments.length;
switch (G__14745) {
case 1:
return sablono.core.datetime_local_field14743.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field14743.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field14743.cljs$core$IFn$_invoke$arity$1 = (function (name__14661__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$datetime_DASH_local),name__14661__auto__);
});

sablono.core.datetime_local_field14743.cljs$core$IFn$_invoke$arity$2 = (function (name__14661__auto__,value__14662__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$datetime_DASH_local),name__14661__auto__,value__14662__auto__);
});

sablono.core.datetime_local_field14743.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field14743);

/**
 * Creates a email input field.
 */
sablono.core.email_field14746 = (function sablono$core$email_field14746(var_args){
var G__14748 = arguments.length;
switch (G__14748) {
case 1:
return sablono.core.email_field14746.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field14746.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field14746.cljs$core$IFn$_invoke$arity$1 = (function (name__14661__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$email),name__14661__auto__);
});

sablono.core.email_field14746.cljs$core$IFn$_invoke$arity$2 = (function (name__14661__auto__,value__14662__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$email),name__14661__auto__,value__14662__auto__);
});

sablono.core.email_field14746.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field14746);

/**
 * Creates a file input field.
 */
sablono.core.file_field14749 = (function sablono$core$file_field14749(var_args){
var G__14751 = arguments.length;
switch (G__14751) {
case 1:
return sablono.core.file_field14749.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field14749.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field14749.cljs$core$IFn$_invoke$arity$1 = (function (name__14661__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$file),name__14661__auto__);
});

sablono.core.file_field14749.cljs$core$IFn$_invoke$arity$2 = (function (name__14661__auto__,value__14662__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$file),name__14661__auto__,value__14662__auto__);
});

sablono.core.file_field14749.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field14749);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field14752 = (function sablono$core$hidden_field14752(var_args){
var G__14754 = arguments.length;
switch (G__14754) {
case 1:
return sablono.core.hidden_field14752.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field14752.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field14752.cljs$core$IFn$_invoke$arity$1 = (function (name__14661__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$hidden),name__14661__auto__);
});

sablono.core.hidden_field14752.cljs$core$IFn$_invoke$arity$2 = (function (name__14661__auto__,value__14662__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$hidden),name__14661__auto__,value__14662__auto__);
});

sablono.core.hidden_field14752.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field14752);

/**
 * Creates a month input field.
 */
sablono.core.month_field14755 = (function sablono$core$month_field14755(var_args){
var G__14757 = arguments.length;
switch (G__14757) {
case 1:
return sablono.core.month_field14755.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field14755.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field14755.cljs$core$IFn$_invoke$arity$1 = (function (name__14661__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$month),name__14661__auto__);
});

sablono.core.month_field14755.cljs$core$IFn$_invoke$arity$2 = (function (name__14661__auto__,value__14662__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$month),name__14661__auto__,value__14662__auto__);
});

sablono.core.month_field14755.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field14755);

/**
 * Creates a number input field.
 */
sablono.core.number_field14758 = (function sablono$core$number_field14758(var_args){
var G__14760 = arguments.length;
switch (G__14760) {
case 1:
return sablono.core.number_field14758.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field14758.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field14758.cljs$core$IFn$_invoke$arity$1 = (function (name__14661__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$number),name__14661__auto__);
});

sablono.core.number_field14758.cljs$core$IFn$_invoke$arity$2 = (function (name__14661__auto__,value__14662__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$number),name__14661__auto__,value__14662__auto__);
});

sablono.core.number_field14758.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field14758);

/**
 * Creates a password input field.
 */
sablono.core.password_field14761 = (function sablono$core$password_field14761(var_args){
var G__14763 = arguments.length;
switch (G__14763) {
case 1:
return sablono.core.password_field14761.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field14761.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field14761.cljs$core$IFn$_invoke$arity$1 = (function (name__14661__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$password),name__14661__auto__);
});

sablono.core.password_field14761.cljs$core$IFn$_invoke$arity$2 = (function (name__14661__auto__,value__14662__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$password),name__14661__auto__,value__14662__auto__);
});

sablono.core.password_field14761.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field14761);

/**
 * Creates a range input field.
 */
sablono.core.range_field14764 = (function sablono$core$range_field14764(var_args){
var G__14766 = arguments.length;
switch (G__14766) {
case 1:
return sablono.core.range_field14764.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field14764.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field14764.cljs$core$IFn$_invoke$arity$1 = (function (name__14661__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$range),name__14661__auto__);
});

sablono.core.range_field14764.cljs$core$IFn$_invoke$arity$2 = (function (name__14661__auto__,value__14662__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$range),name__14661__auto__,value__14662__auto__);
});

sablono.core.range_field14764.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field14764);

/**
 * Creates a search input field.
 */
sablono.core.search_field14767 = (function sablono$core$search_field14767(var_args){
var G__14769 = arguments.length;
switch (G__14769) {
case 1:
return sablono.core.search_field14767.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field14767.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field14767.cljs$core$IFn$_invoke$arity$1 = (function (name__14661__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$search),name__14661__auto__);
});

sablono.core.search_field14767.cljs$core$IFn$_invoke$arity$2 = (function (name__14661__auto__,value__14662__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$search),name__14661__auto__,value__14662__auto__);
});

sablono.core.search_field14767.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field14767);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field14770 = (function sablono$core$tel_field14770(var_args){
var G__14772 = arguments.length;
switch (G__14772) {
case 1:
return sablono.core.tel_field14770.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field14770.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field14770.cljs$core$IFn$_invoke$arity$1 = (function (name__14661__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$tel),name__14661__auto__);
});

sablono.core.tel_field14770.cljs$core$IFn$_invoke$arity$2 = (function (name__14661__auto__,value__14662__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$tel),name__14661__auto__,value__14662__auto__);
});

sablono.core.tel_field14770.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field14770);

/**
 * Creates a text input field.
 */
sablono.core.text_field14773 = (function sablono$core$text_field14773(var_args){
var G__14775 = arguments.length;
switch (G__14775) {
case 1:
return sablono.core.text_field14773.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field14773.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field14773.cljs$core$IFn$_invoke$arity$1 = (function (name__14661__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$text),name__14661__auto__);
});

sablono.core.text_field14773.cljs$core$IFn$_invoke$arity$2 = (function (name__14661__auto__,value__14662__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$text),name__14661__auto__,value__14662__auto__);
});

sablono.core.text_field14773.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field14773);

/**
 * Creates a time input field.
 */
sablono.core.time_field14776 = (function sablono$core$time_field14776(var_args){
var G__14778 = arguments.length;
switch (G__14778) {
case 1:
return sablono.core.time_field14776.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field14776.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field14776.cljs$core$IFn$_invoke$arity$1 = (function (name__14661__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$time),name__14661__auto__);
});

sablono.core.time_field14776.cljs$core$IFn$_invoke$arity$2 = (function (name__14661__auto__,value__14662__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$time),name__14661__auto__,value__14662__auto__);
});

sablono.core.time_field14776.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field14776);

/**
 * Creates a url input field.
 */
sablono.core.url_field14779 = (function sablono$core$url_field14779(var_args){
var G__14781 = arguments.length;
switch (G__14781) {
case 1:
return sablono.core.url_field14779.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field14779.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field14779.cljs$core$IFn$_invoke$arity$1 = (function (name__14661__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$url),name__14661__auto__);
});

sablono.core.url_field14779.cljs$core$IFn$_invoke$arity$2 = (function (name__14661__auto__,value__14662__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$url),name__14661__auto__,value__14662__auto__);
});

sablono.core.url_field14779.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field14779);

/**
 * Creates a week input field.
 */
sablono.core.week_field14782 = (function sablono$core$week_field14782(var_args){
var G__14784 = arguments.length;
switch (G__14784) {
case 1:
return sablono.core.week_field14782.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field14782.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field14782.cljs$core$IFn$_invoke$arity$1 = (function (name__14661__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$week),name__14661__auto__);
});

sablono.core.week_field14782.cljs$core$IFn$_invoke$arity$2 = (function (name__14661__auto__,value__14662__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$week),name__14661__auto__,value__14662__auto__);
});

sablono.core.week_field14782.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field14782);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box14802 = (function sablono$core$check_box14802(var_args){
var G__14804 = arguments.length;
switch (G__14804) {
case 1:
return sablono.core.check_box14802.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box14802.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box14802.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box14802.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null)], null);
});

sablono.core.check_box14802.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box14802.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box14802.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box14802);
/**
 * Creates a radio button.
 */
sablono.core.radio_button14806 = (function sablono$core$radio_button14806(var_args){
var G__14808 = arguments.length;
switch (G__14808) {
case 1:
return sablono.core.radio_button14806.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button14806.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button14806.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button14806.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
});

sablono.core.radio_button14806.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button14806.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)))].join('')),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button14806.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button14806);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__14810 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
return goog.string.hashCode(G__14810);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options14811 = (function sablono$core$select_options14811(coll){
var iter__4523__auto__ = (function sablono$core$select_options14811_$_iter__14812(s__14813){
return (new cljs.core.LazySeq(null,(function (){
var s__14813__$1 = s__14813;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__14813__$1);
if(temp__5720__auto__){
var s__14813__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14813__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__14813__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__14815 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__14814 = (0);
while(true){
if((i__14814 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__14814);
cljs.core.chunk_append(b__14815,((cljs.core.sequential_QMARK_(x))?(function (){var vec__14816 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14816,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14816,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14816,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),(sablono.core.select_options14811.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options14811.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options14811.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__14822 = (i__14814 + (1));
i__14814 = G__14822;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14815),sablono$core$select_options14811_$_iter__14812(cljs.core.chunk_rest(s__14813__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14815),null);
}
} else {
var x = cljs.core.first(s__14813__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__14819 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14819,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14819,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14819,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),(sablono.core.select_options14811.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options14811.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options14811.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options14811_$_iter__14812(cljs.core.rest(s__14813__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options14811);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down14823 = (function sablono$core$drop_down14823(var_args){
var G__14825 = arguments.length;
switch (G__14825) {
case 2:
return sablono.core.drop_down14823.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down14823.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down14823.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down14823.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down14823.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down14823.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down14823);
/**
 * Creates a text area element.
 */
sablono.core.text_area14827 = (function sablono$core$text_area14827(var_args){
var G__14829 = arguments.length;
switch (G__14829) {
case 1:
return sablono.core.text_area14827.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area14827.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area14827.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null)], null);
});

sablono.core.text_area14827.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area14827.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area14827);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label14831 = (function sablono$core$label14831(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label14831);
/**
 * Creates a submit button.
 */
sablono.core.submit_button14832 = (function sablono$core$submit_button14832(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button14832);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button14833 = (function sablono$core$reset_button14833(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button14833);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to14834 = (function sablono$core$form_to14834(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14844 = arguments.length;
var i__4731__auto___14845 = (0);
while(true){
if((i__4731__auto___14845 < len__4730__auto___14844)){
args__4736__auto__.push((arguments[i__4731__auto___14845]));

var G__14846 = (i__4731__auto___14845 + (1));
i__4731__auto___14845 = G__14846;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to14834.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

sablono.core.form_to14834.cljs$core$IFn$_invoke$arity$variadic = (function (p__14837,body){
var vec__14838 = p__14837;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14838,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14838,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__14841 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__14842 = "_method";
var G__14843 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__14841,G__14842,G__14843) : sablono.core.hidden_field.call(null,G__14841,G__14842,G__14843));
})()], null)),body));
});

sablono.core.form_to14834.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.form_to14834.cljs$lang$applyTo = (function (seq14835){
var G__14836 = cljs.core.first(seq14835);
var seq14835__$1 = cljs.core.next(seq14835);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14836,seq14835__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to14834);
