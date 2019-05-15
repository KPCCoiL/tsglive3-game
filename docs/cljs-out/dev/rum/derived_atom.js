// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__12757 = arguments.length;
switch (G__12757) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4(refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__12758 = opts;
var map__12758__$1 = (((((!((map__12758 == null))))?(((((map__12758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12758):map__12758);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12758__$1,cljs.core.cst$kw$ref);
var check_equals_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12758__$1,cljs.core.cst$kw$check_DASH_equals_QMARK_,true);
var recalc = (function (){var G__12760 = cljs.core.count(refs);
switch (G__12760) {
case (1):
var vec__12761 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12761,(0),null);
return ((function (vec__12761,a,G__12760,map__12758,map__12758__$1,ref,check_equals_QMARK_){
return (function (){
var G__12764 = cljs.core.deref(a);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12764) : f.call(null,G__12764));
});
;})(vec__12761,a,G__12760,map__12758,map__12758__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__12765 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12765,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12765,(1),null);
return ((function (vec__12765,a,b,G__12760,map__12758,map__12758__$1,ref,check_equals_QMARK_){
return (function (){
var G__12768 = cljs.core.deref(a);
var G__12769 = cljs.core.deref(b);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12768,G__12769) : f.call(null,G__12768,G__12769));
});
;})(vec__12765,a,b,G__12760,map__12758,map__12758__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__12770 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12770,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12770,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12770,(2),null);
return ((function (vec__12770,a,b,c,G__12760,map__12758,map__12758__$1,ref,check_equals_QMARK_){
return (function (){
var G__12773 = cljs.core.deref(a);
var G__12774 = cljs.core.deref(b);
var G__12775 = cljs.core.deref(c);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__12773,G__12774,G__12775) : f.call(null,G__12773,G__12774,G__12775));
});
;})(vec__12770,a,b,c,G__12760,map__12758,map__12758__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__12760,map__12758,map__12758__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,refs));
});
;})(G__12760,map__12758,map__12758__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__12776 = ref;
cljs.core.reset_BANG_(G__12776,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));

return G__12776;
})():cljs.core.atom.cljs$core$IFn$_invoke$arity$1((recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null))));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__12758,map__12758__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = (recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sink),new_val)){
return cljs.core.reset_BANG_(sink,new_val);
} else {
return null;
}
});})(map__12758,map__12758__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__12758,map__12758__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_(sink,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));
});})(map__12758,map__12758__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__12777_12783 = cljs.core.seq(refs);
var chunk__12778_12784 = null;
var count__12779_12785 = (0);
var i__12780_12786 = (0);
while(true){
if((i__12780_12786 < count__12779_12785)){
var ref_12787__$1 = chunk__12778_12784.cljs$core$IIndexed$_nth$arity$2(null,i__12780_12786);
cljs.core.add_watch(ref_12787__$1,key,watch);


var G__12788 = seq__12777_12783;
var G__12789 = chunk__12778_12784;
var G__12790 = count__12779_12785;
var G__12791 = (i__12780_12786 + (1));
seq__12777_12783 = G__12788;
chunk__12778_12784 = G__12789;
count__12779_12785 = G__12790;
i__12780_12786 = G__12791;
continue;
} else {
var temp__5720__auto___12792 = cljs.core.seq(seq__12777_12783);
if(temp__5720__auto___12792){
var seq__12777_12793__$1 = temp__5720__auto___12792;
if(cljs.core.chunked_seq_QMARK_(seq__12777_12793__$1)){
var c__4550__auto___12794 = cljs.core.chunk_first(seq__12777_12793__$1);
var G__12795 = cljs.core.chunk_rest(seq__12777_12793__$1);
var G__12796 = c__4550__auto___12794;
var G__12797 = cljs.core.count(c__4550__auto___12794);
var G__12798 = (0);
seq__12777_12783 = G__12795;
chunk__12778_12784 = G__12796;
count__12779_12785 = G__12797;
i__12780_12786 = G__12798;
continue;
} else {
var ref_12799__$1 = cljs.core.first(seq__12777_12793__$1);
cljs.core.add_watch(ref_12799__$1,key,watch);


var G__12800 = cljs.core.next(seq__12777_12793__$1);
var G__12801 = null;
var G__12802 = (0);
var G__12803 = (0);
seq__12777_12783 = G__12800;
chunk__12778_12784 = G__12801;
count__12779_12785 = G__12802;
i__12780_12786 = G__12803;
continue;
}
} else {
}
}
break;
}

return sink;
});

rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4;

