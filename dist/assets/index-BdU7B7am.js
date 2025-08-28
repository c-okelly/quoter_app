(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function $S(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Vf={exports:{}},Mo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ig;function tx(){if(ig)return Mo;ig=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Mo.Fragment=t,Mo.jsx=i,Mo.jsxs=i,Mo}var ag;function ex(){return ag||(ag=1,Vf.exports=tx()),Vf.exports}var un=ex(),kf={exports:{}},se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sg;function nx(){if(sg)return se;sg=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function S(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,R={};function M(U,tt,vt){this.props=U,this.context=tt,this.refs=R,this.updater=vt||y}M.prototype.isReactComponent={},M.prototype.setState=function(U,tt){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,tt,"setState")},M.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function g(){}g.prototype=M.prototype;function B(U,tt,vt){this.props=U,this.context=tt,this.refs=R,this.updater=vt||y}var L=B.prototype=new g;L.constructor=B,T(L,M.prototype),L.isPureReactComponent=!0;var w=Array.isArray,G={H:null,A:null,T:null,S:null,V:null},V=Object.prototype.hasOwnProperty;function z(U,tt,vt,xt,J,pt){return vt=pt.ref,{$$typeof:r,type:U,key:tt,ref:vt!==void 0?vt:null,props:pt}}function W(U,tt){return z(U.type,tt,void 0,void 0,void 0,U.props)}function D(U){return typeof U=="object"&&U!==null&&U.$$typeof===r}function C(U){var tt={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(vt){return tt[vt]})}var F=/\/+/g;function ot(U,tt){return typeof U=="object"&&U!==null&&U.key!=null?C(""+U.key):tt.toString(36)}function rt(){}function gt(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(rt,rt):(U.status="pending",U.then(function(tt){U.status==="pending"&&(U.status="fulfilled",U.value=tt)},function(tt){U.status==="pending"&&(U.status="rejected",U.reason=tt)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function ht(U,tt,vt,xt,J){var pt=typeof U;(pt==="undefined"||pt==="boolean")&&(U=null);var yt=!1;if(U===null)yt=!0;else switch(pt){case"bigint":case"string":case"number":yt=!0;break;case"object":switch(U.$$typeof){case r:case t:yt=!0;break;case _:return yt=U._init,ht(yt(U._payload),tt,vt,xt,J)}}if(yt)return J=J(U),yt=xt===""?"."+ot(U,0):xt,w(J)?(vt="",yt!=null&&(vt=yt.replace(F,"$&/")+"/"),ht(J,tt,vt,"",function(oe){return oe})):J!=null&&(D(J)&&(J=W(J,vt+(J.key==null||U&&U.key===J.key?"":(""+J.key).replace(F,"$&/")+"/")+yt)),tt.push(J)),1;yt=0;var At=xt===""?".":xt+":";if(w(U))for(var Ct=0;Ct<U.length;Ct++)xt=U[Ct],pt=At+ot(xt,Ct),yt+=ht(xt,tt,vt,pt,J);else if(Ct=S(U),typeof Ct=="function")for(U=Ct.call(U),Ct=0;!(xt=U.next()).done;)xt=xt.value,pt=At+ot(xt,Ct++),yt+=ht(xt,tt,vt,pt,J);else if(pt==="object"){if(typeof U.then=="function")return ht(gt(U),tt,vt,xt,J);throw tt=String(U),Error("Objects are not valid as a React child (found: "+(tt==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":tt)+"). If you meant to render a collection of children, use an array instead.")}return yt}function P(U,tt,vt){if(U==null)return U;var xt=[],J=0;return ht(U,xt,"","",function(pt){return tt.call(vt,pt,J++)}),xt}function K(U){if(U._status===-1){var tt=U._result;tt=tt(),tt.then(function(vt){(U._status===0||U._status===-1)&&(U._status=1,U._result=vt)},function(vt){(U._status===0||U._status===-1)&&(U._status=2,U._result=vt)}),U._status===-1&&(U._status=0,U._result=tt)}if(U._status===1)return U._result.default;throw U._result}var Z=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var tt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(tt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function Mt(){}return se.Children={map:P,forEach:function(U,tt,vt){P(U,function(){tt.apply(this,arguments)},vt)},count:function(U){var tt=0;return P(U,function(){tt++}),tt},toArray:function(U){return P(U,function(tt){return tt})||[]},only:function(U){if(!D(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},se.Component=M,se.Fragment=i,se.Profiler=l,se.PureComponent=B,se.StrictMode=s,se.Suspense=m,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,se.__COMPILER_RUNTIME={__proto__:null,c:function(U){return G.H.useMemoCache(U)}},se.cache=function(U){return function(){return U.apply(null,arguments)}},se.cloneElement=function(U,tt,vt){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var xt=T({},U.props),J=U.key,pt=void 0;if(tt!=null)for(yt in tt.ref!==void 0&&(pt=void 0),tt.key!==void 0&&(J=""+tt.key),tt)!V.call(tt,yt)||yt==="key"||yt==="__self"||yt==="__source"||yt==="ref"&&tt.ref===void 0||(xt[yt]=tt[yt]);var yt=arguments.length-2;if(yt===1)xt.children=vt;else if(1<yt){for(var At=Array(yt),Ct=0;Ct<yt;Ct++)At[Ct]=arguments[Ct+2];xt.children=At}return z(U.type,J,void 0,void 0,pt,xt)},se.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},se.createElement=function(U,tt,vt){var xt,J={},pt=null;if(tt!=null)for(xt in tt.key!==void 0&&(pt=""+tt.key),tt)V.call(tt,xt)&&xt!=="key"&&xt!=="__self"&&xt!=="__source"&&(J[xt]=tt[xt]);var yt=arguments.length-2;if(yt===1)J.children=vt;else if(1<yt){for(var At=Array(yt),Ct=0;Ct<yt;Ct++)At[Ct]=arguments[Ct+2];J.children=At}if(U&&U.defaultProps)for(xt in yt=U.defaultProps,yt)J[xt]===void 0&&(J[xt]=yt[xt]);return z(U,pt,void 0,void 0,null,J)},se.createRef=function(){return{current:null}},se.forwardRef=function(U){return{$$typeof:d,render:U}},se.isValidElement=D,se.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:K}},se.memo=function(U,tt){return{$$typeof:p,type:U,compare:tt===void 0?null:tt}},se.startTransition=function(U){var tt=G.T,vt={};G.T=vt;try{var xt=U(),J=G.S;J!==null&&J(vt,xt),typeof xt=="object"&&xt!==null&&typeof xt.then=="function"&&xt.then(Mt,Z)}catch(pt){Z(pt)}finally{G.T=tt}},se.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},se.use=function(U){return G.H.use(U)},se.useActionState=function(U,tt,vt){return G.H.useActionState(U,tt,vt)},se.useCallback=function(U,tt){return G.H.useCallback(U,tt)},se.useContext=function(U){return G.H.useContext(U)},se.useDebugValue=function(){},se.useDeferredValue=function(U,tt){return G.H.useDeferredValue(U,tt)},se.useEffect=function(U,tt,vt){var xt=G.H;if(typeof vt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return xt.useEffect(U,tt)},se.useId=function(){return G.H.useId()},se.useImperativeHandle=function(U,tt,vt){return G.H.useImperativeHandle(U,tt,vt)},se.useInsertionEffect=function(U,tt){return G.H.useInsertionEffect(U,tt)},se.useLayoutEffect=function(U,tt){return G.H.useLayoutEffect(U,tt)},se.useMemo=function(U,tt){return G.H.useMemo(U,tt)},se.useOptimistic=function(U,tt){return G.H.useOptimistic(U,tt)},se.useReducer=function(U,tt,vt){return G.H.useReducer(U,tt,vt)},se.useRef=function(U){return G.H.useRef(U)},se.useState=function(U){return G.H.useState(U)},se.useSyncExternalStore=function(U,tt,vt){return G.H.useSyncExternalStore(U,tt,vt)},se.useTransition=function(){return G.H.useTransition()},se.version="19.1.0",se}var rg;function _d(){return rg||(rg=1,kf.exports=nx()),kf.exports}var gv=_d();const og=$S(gv);var Xf={exports:{}},Eo={},Wf={exports:{}},qf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lg;function ix(){return lg||(lg=1,function(r){function t(P,K){var Z=P.length;P.push(K);t:for(;0<Z;){var Mt=Z-1>>>1,U=P[Mt];if(0<l(U,K))P[Mt]=K,P[Z]=U,Z=Mt;else break t}}function i(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var K=P[0],Z=P.pop();if(Z!==K){P[0]=Z;t:for(var Mt=0,U=P.length,tt=U>>>1;Mt<tt;){var vt=2*(Mt+1)-1,xt=P[vt],J=vt+1,pt=P[J];if(0>l(xt,Z))J<U&&0>l(pt,xt)?(P[Mt]=pt,P[J]=Z,Mt=J):(P[Mt]=xt,P[vt]=Z,Mt=vt);else if(J<U&&0>l(pt,Z))P[Mt]=pt,P[J]=Z,Mt=J;else break t}}return K}function l(P,K){var Z=P.sortIndex-K.sortIndex;return Z!==0?Z:P.id-K.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var m=[],p=[],_=1,v=null,S=3,y=!1,T=!1,R=!1,M=!1,g=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function w(P){for(var K=i(p);K!==null;){if(K.callback===null)s(p);else if(K.startTime<=P)s(p),K.sortIndex=K.expirationTime,t(m,K);else break;K=i(p)}}function G(P){if(R=!1,w(P),!T)if(i(m)!==null)T=!0,V||(V=!0,ot());else{var K=i(p);K!==null&&ht(G,K.startTime-P)}}var V=!1,z=-1,W=5,D=-1;function C(){return M?!0:!(r.unstable_now()-D<W)}function F(){if(M=!1,V){var P=r.unstable_now();D=P;var K=!0;try{t:{T=!1,R&&(R=!1,B(z),z=-1),y=!0;var Z=S;try{e:{for(w(P),v=i(m);v!==null&&!(v.expirationTime>P&&C());){var Mt=v.callback;if(typeof Mt=="function"){v.callback=null,S=v.priorityLevel;var U=Mt(v.expirationTime<=P);if(P=r.unstable_now(),typeof U=="function"){v.callback=U,w(P),K=!0;break e}v===i(m)&&s(m),w(P)}else s(m);v=i(m)}if(v!==null)K=!0;else{var tt=i(p);tt!==null&&ht(G,tt.startTime-P),K=!1}}break t}finally{v=null,S=Z,y=!1}K=void 0}}finally{K?ot():V=!1}}}var ot;if(typeof L=="function")ot=function(){L(F)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,gt=rt.port2;rt.port1.onmessage=F,ot=function(){gt.postMessage(null)}}else ot=function(){g(F,0)};function ht(P,K){z=g(function(){P(r.unstable_now())},K)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(P){P.callback=null},r.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<P?Math.floor(1e3/P):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_next=function(P){switch(S){case 1:case 2:case 3:var K=3;break;default:K=S}var Z=S;S=K;try{return P()}finally{S=Z}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(P,K){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var Z=S;S=P;try{return K()}finally{S=Z}},r.unstable_scheduleCallback=function(P,K,Z){var Mt=r.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?Mt+Z:Mt):Z=Mt,P){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=Z+U,P={id:_++,callback:K,priorityLevel:P,startTime:Z,expirationTime:U,sortIndex:-1},Z>Mt?(P.sortIndex=Z,t(p,P),i(m)===null&&P===i(p)&&(R?(B(z),z=-1):R=!0,ht(G,Z-Mt))):(P.sortIndex=U,t(m,P),T||y||(T=!0,V||(V=!0,ot()))),P},r.unstable_shouldYield=C,r.unstable_wrapCallback=function(P){var K=S;return function(){var Z=S;S=K;try{return P.apply(this,arguments)}finally{S=Z}}}}(qf)),qf}var cg;function ax(){return cg||(cg=1,Wf.exports=ix()),Wf.exports}var Yf={exports:{}},Cn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ug;function sx(){if(ug)return Cn;ug=1;var r=_d();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:_}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Cn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,_)},Cn.flushSync=function(m){var p=h.T,_=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=_,s.d.f()}},Cn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Cn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Cn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:S,fetchPriority:y}):_==="script"&&s.d.X(m,{crossOrigin:v,integrity:S,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Cn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Cn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Cn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Cn.requestFormReset=function(m){s.d.r(m)},Cn.unstable_batchedUpdates=function(m,p){return m(p)},Cn.useFormState=function(m,p,_){return h.H.useFormState(m,p,_)},Cn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Cn.version="19.1.0",Cn}var fg;function rx(){if(fg)return Yf.exports;fg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Yf.exports=sx(),Yf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hg;function ox(){if(hg)return Eo;hg=1;var r=ax(),t=_d(),i=rx();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(c(e)!==e)throw Error(s(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return d(u),e;if(f===o)return d(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var x=!1,b=u.child;b;){if(b===a){x=!0,a=u,o=f;break}if(b===o){x=!0,o=u,a=f;break}b=b.sibling}if(!x){for(b=f.child;b;){if(b===a){x=!0,a=f,o=u;break}if(b===o){x=!0,o=f,a=u;break}b=b.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),B=Symbol.for("react.consumer"),L=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function ot(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var rt=Symbol.for("react.client.reference");function gt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===rt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case M:return"Profiler";case R:return"StrictMode";case G:return"Suspense";case V:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case y:return"Portal";case L:return(e.displayName||"Context")+".Provider";case B:return(e._context.displayName||"Context")+".Consumer";case w:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:gt(e.type)||"Memo";case W:n=e._payload,e=e._init;try{return gt(e(n))}catch{}}return null}var ht=Array.isArray,P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},Mt=[],U=-1;function tt(e){return{current:e}}function vt(e){0>U||(e.current=Mt[U],Mt[U]=null,U--)}function xt(e,n){U++,Mt[U]=e.current,e.current=n}var J=tt(null),pt=tt(null),yt=tt(null),At=tt(null);function Ct(e,n){switch(xt(yt,n),xt(pt,e),xt(J,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?U_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=U_(n),e=L_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}vt(J),xt(J,e)}function oe(){vt(J),vt(pt),vt(yt)}function Qt(e){e.memoizedState!==null&&xt(At,e);var n=J.current,a=L_(n,e.type);n!==a&&(xt(pt,e),xt(J,a))}function Le(e){pt.current===e&&(vt(J),vt(pt)),At.current===e&&(vt(At),go._currentValue=Z)}var Fe=Object.prototype.hasOwnProperty,ge=r.unstable_scheduleCallback,I=r.unstable_cancelCallback,xn=r.unstable_shouldYield,ye=r.unstable_requestPaint,pe=r.unstable_now,Gt=r.unstable_getCurrentPriorityLevel,ve=r.unstable_ImmediatePriority,Zt=r.unstable_UserBlockingPriority,ae=r.unstable_NormalPriority,Ke=r.unstable_LowPriority,N=r.unstable_IdlePriority,E=r.log,et=r.unstable_setDisableYieldValue,ut=null,dt=null;function lt(e){if(typeof E=="function"&&et(e),dt&&typeof dt.setStrictMode=="function")try{dt.setStrictMode(ut,e)}catch{}}var Ot=Math.clz32?Math.clz32:Vt,Dt=Math.log,Ht=Math.LN2;function Vt(e){return e>>>=0,e===0?32:31-(Dt(e)/Ht|0)|0}var St=256,Pt=4194304;function qt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Yt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var b=o&134217727;return b!==0?(o=b&~f,o!==0?u=qt(o):(x&=b,x!==0?u=qt(x):a||(a=b&~e,a!==0&&(u=qt(a))))):(b=o&~f,b!==0?u=qt(b):x!==0?u=qt(x):a||(a=o&~e,a!==0&&(u=qt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Rt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ie(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k(){var e=St;return St<<=1,(St&4194048)===0&&(St=256),e}function Ut(){var e=Pt;return Pt<<=1,(Pt&62914560)===0&&(Pt=4194304),e}function Et(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function zt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function bt(e,n,a,o,u,f){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,O=e.expirationTimes,$=e.hiddenUpdates;for(a=x&~a;0<a;){var ct=31-Ot(a),mt=1<<ct;b[ct]=0,O[ct]=-1;var nt=$[ct];if(nt!==null)for($[ct]=null,ct=0;ct<nt.length;ct++){var it=nt[ct];it!==null&&(it.lane&=-536870913)}a&=~mt}o!==0&&_t(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(x&~n))}function _t(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Ot(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function It(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Ot(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function ne(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function we(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Me(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:Q_(e.type))}function Xn(e,n){var a=K.p;try{return K.p=e,n()}finally{K.p=a}}var dn=Math.random().toString(36).slice(2),sn="__reactFiber$"+dn,yn="__reactProps$"+dn,Nn="__reactContainer$"+dn,qa="__reactEvents$"+dn,Vo="__reactListeners$"+dn,ko="__reactHandles$"+dn,Ya="__reactResources$"+dn,la="__reactMarker$"+dn;function ca(e){delete e[sn],delete e[yn],delete e[qa],delete e[Vo],delete e[ko]}function Ui(e){var n=e[sn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Nn]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=z_(e);e!==null;){if(a=e[sn])return a;e=z_(e)}return n}e=a,a=e.parentNode}return null}function Li(e){if(e=e[sn]||e[Nn]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Za(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function ua(e){var n=e[Ya];return n||(n=e[Ya]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function tn(e){e[la]=!0}var Xo=new Set,Wo={};function Ni(e,n){A(e,n),A(e+"Capture",n)}function A(e,n){for(Wo[e]=n,e=0;e<n.length;e++)Xo.add(n[e])}var Y=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),at={},st={};function j(e){return Fe.call(st,e)?!0:Fe.call(at,e)?!1:Y.test(e)?st[e]=!0:(at[e]=!0,!1)}function Tt(e,n,a){if(j(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function wt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Nt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var Bt,te;function Kt(e){if(Bt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Bt=n&&n[1]||"",te=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Bt+e+te}var kt=!1;function le(e,n){if(!e||kt)return"";kt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(it){var nt=it}Reflect.construct(e,[],mt)}else{try{mt.call()}catch(it){nt=it}e.call(mt.prototype)}}else{try{throw Error()}catch(it){nt=it}(mt=e())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(it){if(it&&nt&&typeof it.stack=="string")return[it.stack,nt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),x=f[0],b=f[1];if(x&&b){var O=x.split(`
`),$=b.split(`
`);for(u=o=0;o<O.length&&!O[o].includes("DetermineComponentFrameRoot");)o++;for(;u<$.length&&!$[u].includes("DetermineComponentFrameRoot");)u++;if(o===O.length||u===$.length)for(o=O.length-1,u=$.length-1;1<=o&&0<=u&&O[o]!==$[u];)u--;for(;1<=o&&0<=u;o--,u--)if(O[o]!==$[u]){if(o!==1||u!==1)do if(o--,u--,0>u||O[o]!==$[u]){var ct=`
`+O[o].replace(" at new "," at ");return e.displayName&&ct.includes("<anonymous>")&&(ct=ct.replace("<anonymous>",e.displayName)),ct}while(1<=o&&0<=u);break}}}finally{kt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Kt(a):""}function Re(e){switch(e.tag){case 26:case 27:case 5:return Kt(e.type);case 16:return Kt("Lazy");case 13:return Kt("Suspense");case 19:return Kt("SuspenseList");case 0:case 15:return le(e.type,!1);case 11:return le(e.type.render,!1);case 1:return le(e.type,!0);case 31:return Kt("Activity");default:return""}}function Xe(e){try{var n="";do n+=Re(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function he(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ce(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function jt(e){var n=Ce(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){o=""+x,f.call(this,x)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(x){o=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ne(e){e._valueTracker||(e._valueTracker=jt(e))}function Se(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Ce(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function pn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var fa=/[\n"\\]/g;function Ve(e){return e.replace(fa,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Oi(e,n,a,o,u,f,x,b){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+he(n)):e.value!==""+he(n)&&(e.value=""+he(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?An(e,x,he(n)):a!=null?An(e,x,he(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+he(b):e.removeAttribute("name")}function He(e,n,a,o,u,f,x,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+he(a):"",n=n!=null?""+he(n):a,b||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=b?e.checked:!!o,e.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x)}function An(e,n,a){n==="number"&&pn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function rn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+he(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function mn(e,n,a){if(n!=null&&(n=""+he(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+he(a):""}function Mn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(ht(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=he(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function Si(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Pi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ud(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Pi.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Ld(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Ud(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Ud(e,f,n[f])}function Hc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Jv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function qo(e){return Jv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Gc=null;function Vc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var As=null,Rs=null;function Nd(e){var n=Li(e);if(n&&(e=n.stateNode)){var a=e[yn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Oi(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ve(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[yn]||null;if(!u)throw Error(s(90));Oi(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Se(o)}break t;case"textarea":mn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&rn(e,!!a.multiple,n,!1)}}}var kc=!1;function Od(e,n,a){if(kc)return e(n,a);kc=!0;try{var o=e(n);return o}finally{if(kc=!1,(As!==null||Rs!==null)&&(Ul(),As&&(n=As,e=Rs,Rs=As=null,Nd(n),e)))for(n=0;n<e.length;n++)Nd(e[n])}}function wr(e,n){var a=e.stateNode;if(a===null)return null;var o=a[yn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xc=!1;if(zi)try{var Dr={};Object.defineProperty(Dr,"passive",{get:function(){Xc=!0}}),window.addEventListener("test",Dr,Dr),window.removeEventListener("test",Dr,Dr)}catch{Xc=!1}var ha=null,Wc=null,Yo=null;function Pd(){if(Yo)return Yo;var e,n=Wc,a=n.length,o,u="value"in ha?ha.value:ha.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var x=a-e;for(o=1;o<=x&&n[a-o]===u[f-o];o++);return Yo=u.slice(e,1<o?1-o:void 0)}function Zo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function jo(){return!0}function zd(){return!1}function On(e){function n(a,o,u,f,x){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?jo:zd,this.isPropagationStopped=zd,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=jo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=jo)},persist:function(){},isPersistent:jo}),n}var ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ko=On(ja),Ur=_({},ja,{view:0,detail:0}),$v=On(Ur),qc,Yc,Lr,Qo=_({},Ur,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Lr&&(Lr&&e.type==="mousemove"?(qc=e.screenX-Lr.screenX,Yc=e.screenY-Lr.screenY):Yc=qc=0,Lr=e),qc)},movementY:function(e){return"movementY"in e?e.movementY:Yc}}),Bd=On(Qo),t0=_({},Qo,{dataTransfer:0}),e0=On(t0),n0=_({},Ur,{relatedTarget:0}),Zc=On(n0),i0=_({},ja,{animationName:0,elapsedTime:0,pseudoElement:0}),a0=On(i0),s0=_({},ja,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),r0=On(s0),o0=_({},ja,{data:0}),Id=On(o0),l0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},c0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},u0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function f0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=u0[e])?!!n[e]:!1}function jc(){return f0}var h0=_({},Ur,{key:function(e){if(e.key){var n=l0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Zo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?c0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jc,charCode:function(e){return e.type==="keypress"?Zo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),d0=On(h0),p0=_({},Qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fd=On(p0),m0=_({},Ur,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jc}),_0=On(m0),g0=_({},ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),v0=On(g0),S0=_({},Qo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),x0=On(S0),y0=_({},ja,{newState:0,oldState:0}),M0=On(y0),E0=[9,13,27,32],Kc=zi&&"CompositionEvent"in window,Nr=null;zi&&"documentMode"in document&&(Nr=document.documentMode);var T0=zi&&"TextEvent"in window&&!Nr,Hd=zi&&(!Kc||Nr&&8<Nr&&11>=Nr),Gd=" ",Vd=!1;function kd(e,n){switch(e){case"keyup":return E0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Cs=!1;function b0(e,n){switch(e){case"compositionend":return Xd(n);case"keypress":return n.which!==32?null:(Vd=!0,Gd);case"textInput":return e=n.data,e===Gd&&Vd?null:e;default:return null}}function A0(e,n){if(Cs)return e==="compositionend"||!Kc&&kd(e,n)?(e=Pd(),Yo=Wc=ha=null,Cs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Hd&&n.locale!=="ko"?null:n.data;default:return null}}var R0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!R0[e.type]:n==="textarea"}function qd(e,n,a,o){As?Rs?Rs.push(o):Rs=[o]:As=o,n=Bl(n,"onChange"),0<n.length&&(a=new Ko("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Or=null,Pr=null;function C0(e){A_(e,0)}function Jo(e){var n=Za(e);if(Se(n))return e}function Yd(e,n){if(e==="change")return n}var Zd=!1;if(zi){var Qc;if(zi){var Jc="oninput"in document;if(!Jc){var jd=document.createElement("div");jd.setAttribute("oninput","return;"),Jc=typeof jd.oninput=="function"}Qc=Jc}else Qc=!1;Zd=Qc&&(!document.documentMode||9<document.documentMode)}function Kd(){Or&&(Or.detachEvent("onpropertychange",Qd),Pr=Or=null)}function Qd(e){if(e.propertyName==="value"&&Jo(Pr)){var n=[];qd(n,Pr,e,Vc(e)),Od(C0,n)}}function w0(e,n,a){e==="focusin"?(Kd(),Or=n,Pr=a,Or.attachEvent("onpropertychange",Qd)):e==="focusout"&&Kd()}function D0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Jo(Pr)}function U0(e,n){if(e==="click")return Jo(n)}function L0(e,n){if(e==="input"||e==="change")return Jo(n)}function N0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Wn=typeof Object.is=="function"?Object.is:N0;function zr(e,n){if(Wn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Fe.call(n,u)||!Wn(e[u],n[u]))return!1}return!0}function Jd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $d(e,n){var a=Jd(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Jd(a)}}function tp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?tp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function ep(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=pn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=pn(e.document)}return n}function $c(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var O0=zi&&"documentMode"in document&&11>=document.documentMode,ws=null,tu=null,Br=null,eu=!1;function np(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;eu||ws==null||ws!==pn(o)||(o=ws,"selectionStart"in o&&$c(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Br&&zr(Br,o)||(Br=o,o=Bl(tu,"onSelect"),0<o.length&&(n=new Ko("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=ws)))}function Ka(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ds={animationend:Ka("Animation","AnimationEnd"),animationiteration:Ka("Animation","AnimationIteration"),animationstart:Ka("Animation","AnimationStart"),transitionrun:Ka("Transition","TransitionRun"),transitionstart:Ka("Transition","TransitionStart"),transitioncancel:Ka("Transition","TransitionCancel"),transitionend:Ka("Transition","TransitionEnd")},nu={},ip={};zi&&(ip=document.createElement("div").style,"AnimationEvent"in window||(delete Ds.animationend.animation,delete Ds.animationiteration.animation,delete Ds.animationstart.animation),"TransitionEvent"in window||delete Ds.transitionend.transition);function Qa(e){if(nu[e])return nu[e];if(!Ds[e])return e;var n=Ds[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in ip)return nu[e]=n[a];return e}var ap=Qa("animationend"),sp=Qa("animationiteration"),rp=Qa("animationstart"),P0=Qa("transitionrun"),z0=Qa("transitionstart"),B0=Qa("transitioncancel"),op=Qa("transitionend"),lp=new Map,iu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");iu.push("scrollEnd");function ui(e,n){lp.set(e,n),Ni(n,[e])}var cp=new WeakMap;function ti(e,n){if(typeof e=="object"&&e!==null){var a=cp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Xe(n)},cp.set(e,n),n)}return{value:e,source:n,stack:Xe(n)}}var ei=[],Us=0,au=0;function $o(){for(var e=Us,n=au=Us=0;n<e;){var a=ei[n];ei[n++]=null;var o=ei[n];ei[n++]=null;var u=ei[n];ei[n++]=null;var f=ei[n];if(ei[n++]=null,o!==null&&u!==null){var x=o.pending;x===null?u.next=u:(u.next=x.next,x.next=u),o.pending=u}f!==0&&up(a,u,f)}}function tl(e,n,a,o){ei[Us++]=e,ei[Us++]=n,ei[Us++]=a,ei[Us++]=o,au|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function su(e,n,a,o){return tl(e,n,a,o),el(e)}function Ls(e,n){return tl(e,null,null,n),el(e)}function up(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Ot(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function el(e){if(50<lo)throw lo=0,hf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ns={};function I0(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(e,n,a,o){return new I0(e,n,a,o)}function ru(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Bi(e,n){var a=e.alternate;return a===null?(a=qn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function fp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function nl(e,n,a,o,u,f){var x=0;if(o=e,typeof e=="function")ru(e)&&(x=1);else if(typeof e=="string")x=HS(e,a,J.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=qn(31,a,n,u),e.elementType=D,e.lanes=f,e;case T:return Ja(a.children,u,f,n);case R:x=8,u|=24;break;case M:return e=qn(12,a,n,u|2),e.elementType=M,e.lanes=f,e;case G:return e=qn(13,a,n,u),e.elementType=G,e.lanes=f,e;case V:return e=qn(19,a,n,u),e.elementType=V,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case g:case L:x=10;break t;case B:x=9;break t;case w:x=11;break t;case z:x=14;break t;case W:x=16,o=null;break t}x=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=qn(x,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function Ja(e,n,a,o){return e=qn(7,e,o,n),e.lanes=a,e}function ou(e,n,a){return e=qn(6,e,null,n),e.lanes=a,e}function lu(e,n,a){return n=qn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Os=[],Ps=0,il=null,al=0,ni=[],ii=0,$a=null,Ii=1,Fi="";function ts(e,n){Os[Ps++]=al,Os[Ps++]=il,il=e,al=n}function hp(e,n,a){ni[ii++]=Ii,ni[ii++]=Fi,ni[ii++]=$a,$a=e;var o=Ii;e=Fi;var u=32-Ot(o)-1;o&=~(1<<u),a+=1;var f=32-Ot(n)+u;if(30<f){var x=u-u%5;f=(o&(1<<x)-1).toString(32),o>>=x,u-=x,Ii=1<<32-Ot(n)+u|a<<u|o,Fi=f+e}else Ii=1<<f|a<<u|o,Fi=e}function cu(e){e.return!==null&&(ts(e,1),hp(e,1,0))}function uu(e){for(;e===il;)il=Os[--Ps],Os[Ps]=null,al=Os[--Ps],Os[Ps]=null;for(;e===$a;)$a=ni[--ii],ni[ii]=null,Fi=ni[--ii],ni[ii]=null,Ii=ni[--ii],ni[ii]=null}var Un=null,Ye=null,Ae=!1,es=null,xi=!1,fu=Error(s(519));function ns(e){var n=Error(s(418,""));throw Hr(ti(n,e)),fu}function dp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[sn]=e,n[yn]=o,a){case"dialog":_e("cancel",n),_e("close",n);break;case"iframe":case"object":case"embed":_e("load",n);break;case"video":case"audio":for(a=0;a<uo.length;a++)_e(uo[a],n);break;case"source":_e("error",n);break;case"img":case"image":case"link":_e("error",n),_e("load",n);break;case"details":_e("toggle",n);break;case"input":_e("invalid",n),He(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Ne(n);break;case"select":_e("invalid",n);break;case"textarea":_e("invalid",n),Mn(n,o.value,o.defaultValue,o.children),Ne(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||D_(n.textContent,a)?(o.popover!=null&&(_e("beforetoggle",n),_e("toggle",n)),o.onScroll!=null&&_e("scroll",n),o.onScrollEnd!=null&&_e("scrollend",n),o.onClick!=null&&(n.onclick=Il),n=!0):n=!1,n||ns(e)}function pp(e){for(Un=e.return;Un;)switch(Un.tag){case 5:case 13:xi=!1;return;case 27:case 3:xi=!0;return;default:Un=Un.return}}function Ir(e){if(e!==Un)return!1;if(!Ae)return pp(e),Ae=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Cf(e.type,e.memoizedProps)),a=!a),a&&Ye&&ns(e),pp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Ye=hi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Ye=null}}else n===27?(n=Ye,Ca(e.type)?(e=Lf,Lf=null,Ye=e):Ye=n):Ye=Un?hi(e.stateNode.nextSibling):null;return!0}function Fr(){Ye=Un=null,Ae=!1}function mp(){var e=es;return e!==null&&(Bn===null?Bn=e:Bn.push.apply(Bn,e),es=null),e}function Hr(e){es===null?es=[e]:es.push(e)}var hu=tt(null),is=null,Hi=null;function da(e,n,a){xt(hu,n._currentValue),n._currentValue=a}function Gi(e){e._currentValue=hu.current,vt(hu)}function du(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function pu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var x=u.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=u;for(var O=0;O<n.length;O++)if(b.context===n[O]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),du(f.return,a,e),o||(x=null);break t}f=b.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(s(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),du(x,a,e),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===e){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function Gr(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var b=u.type;Wn(u.pendingProps.value,x.value)||(e!==null?e.push(b):e=[b])}}else if(u===At.current){if(x=u.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(go):e=[go])}u=u.return}e!==null&&pu(n,e,a,o),n.flags|=262144}function sl(e){for(e=e.firstContext;e!==null;){if(!Wn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function as(e){is=e,Hi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Rn(e){return _p(is,e)}function rl(e,n){return is===null&&as(e),_p(e,n)}function _p(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Hi===null){if(e===null)throw Error(s(308));Hi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Hi=Hi.next=n;return a}var F0=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},H0=r.unstable_scheduleCallback,G0=r.unstable_NormalPriority,on={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function mu(){return{controller:new F0,data:new Map,refCount:0}}function Vr(e){e.refCount--,e.refCount===0&&H0(G0,function(){e.controller.abort()})}var kr=null,_u=0,zs=0,Bs=null;function V0(e,n){if(kr===null){var a=kr=[];_u=0,zs=Sf(),Bs={status:"pending",value:void 0,then:function(o){a.push(o)}}}return _u++,n.then(gp,gp),n}function gp(){if(--_u===0&&kr!==null){Bs!==null&&(Bs.status="fulfilled");var e=kr;kr=null,zs=0,Bs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function k0(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var vp=P.S;P.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&V0(e,n),vp!==null&&vp(e,n)};var ss=tt(null);function gu(){var e=ss.current;return e!==null?e:ke.pooledCache}function ol(e,n){n===null?xt(ss,ss.current):xt(ss,n.pool)}function Sp(){var e=gu();return e===null?null:{parent:on._currentValue,pool:e}}var Xr=Error(s(460)),xp=Error(s(474)),ll=Error(s(542)),vu={then:function(){}};function yp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function cl(){}function Mp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(cl,cl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Tp(e),e;default:if(typeof n.status=="string")n.then(cl,cl);else{if(e=ke,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Tp(e),e}throw Wr=n,Xr}}var Wr=null;function Ep(){if(Wr===null)throw Error(s(459));var e=Wr;return Wr=null,e}function Tp(e){if(e===Xr||e===ll)throw Error(s(483))}var pa=!1;function Su(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ma(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function _a(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(De&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=el(e),up(e,null,a),n}return tl(e,o,n,a),el(e)}function qr(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,It(e,a)}}function yu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Mu=!1;function Yr(){if(Mu){var e=Bs;if(e!==null)throw e}}function Zr(e,n,a,o){Mu=!1;var u=e.updateQueue;pa=!1;var f=u.firstBaseUpdate,x=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var O=b,$=O.next;O.next=null,x===null?f=$:x.next=$,x=O;var ct=e.alternate;ct!==null&&(ct=ct.updateQueue,b=ct.lastBaseUpdate,b!==x&&(b===null?ct.firstBaseUpdate=$:b.next=$,ct.lastBaseUpdate=O))}if(f!==null){var mt=u.baseState;x=0,ct=$=O=null,b=f;do{var nt=b.lane&-536870913,it=nt!==b.lane;if(it?(xe&nt)===nt:(o&nt)===nt){nt!==0&&nt===zs&&(Mu=!0),ct!==null&&(ct=ct.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var ee=e,Jt=b;nt=n;var ze=a;switch(Jt.tag){case 1:if(ee=Jt.payload,typeof ee=="function"){mt=ee.call(ze,mt,nt);break t}mt=ee;break t;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=Jt.payload,nt=typeof ee=="function"?ee.call(ze,mt,nt):ee,nt==null)break t;mt=_({},mt,nt);break t;case 2:pa=!0}}nt=b.callback,nt!==null&&(e.flags|=64,it&&(e.flags|=8192),it=u.callbacks,it===null?u.callbacks=[nt]:it.push(nt))}else it={lane:nt,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ct===null?($=ct=it,O=mt):ct=ct.next=it,x|=nt;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;it=b,b=it.next,it.next=null,u.lastBaseUpdate=it,u.shared.pending=null}}while(!0);ct===null&&(O=mt),u.baseState=O,u.firstBaseUpdate=$,u.lastBaseUpdate=ct,f===null&&(u.shared.lanes=0),Ta|=x,e.lanes=x,e.memoizedState=mt}}function bp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Ap(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)bp(a[e],n)}var Is=tt(null),ul=tt(0);function Rp(e,n){e=Zi,xt(ul,e),xt(Is,n),Zi=e|n.baseLanes}function Eu(){xt(ul,Zi),xt(Is,Is.current)}function Tu(){Zi=ul.current,vt(Is),vt(ul)}var ga=0,ue=null,Oe=null,en=null,fl=!1,Fs=!1,rs=!1,hl=0,jr=0,Hs=null,X0=0;function Qe(){throw Error(s(321))}function bu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Wn(e[a],n[a]))return!1;return!0}function Au(e,n,a,o,u,f){return ga=f,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=e===null||e.memoizedState===null?um:fm,rs=!1,f=a(o,u),rs=!1,Fs&&(f=wp(n,a,o,u)),Cp(e),f}function Cp(e){P.H=vl;var n=Oe!==null&&Oe.next!==null;if(ga=0,en=Oe=ue=null,fl=!1,jr=0,Hs=null,n)throw Error(s(300));e===null||_n||(e=e.dependencies,e!==null&&sl(e)&&(_n=!0))}function wp(e,n,a,o){ue=e;var u=0;do{if(Fs&&(Hs=null),jr=0,Fs=!1,25<=u)throw Error(s(301));if(u+=1,en=Oe=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=Q0,f=n(a,o)}while(Fs);return f}function W0(){var e=P.H,n=e.useState()[0];return n=typeof n.then=="function"?Kr(n):n,e=e.useState()[0],(Oe!==null?Oe.memoizedState:null)!==e&&(ue.flags|=1024),n}function Ru(){var e=hl!==0;return hl=0,e}function Cu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function wu(e){if(fl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}fl=!1}ga=0,en=Oe=ue=null,Fs=!1,jr=hl=0,Hs=null}function Pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?ue.memoizedState=en=e:en=en.next=e,en}function nn(){if(Oe===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var n=en===null?ue.memoizedState:en.next;if(n!==null)en=n,Oe=e;else{if(e===null)throw ue.alternate===null?Error(s(467)):Error(s(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},en===null?ue.memoizedState=en=e:en=en.next=e}return en}function Du(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Kr(e){var n=jr;return jr+=1,Hs===null&&(Hs=[]),e=Mp(Hs,e,n),n=ue,(en===null?n.memoizedState:en.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?um:fm),e}function dl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Kr(e);if(e.$$typeof===L)return Rn(e)}throw Error(s(438,String(e)))}function Uu(e){var n=null,a=ue.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ue.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Du(),ue.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=C;return n.index++,a}function Vi(e,n){return typeof n=="function"?n(e):n}function pl(e){var n=nn();return Lu(n,Oe,e)}function Lu(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var x=u.next;u.next=f.next,f.next=x}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var b=x=null,O=null,$=n,ct=!1;do{var mt=$.lane&-536870913;if(mt!==$.lane?(xe&mt)===mt:(ga&mt)===mt){var nt=$.revertLane;if(nt===0)O!==null&&(O=O.next={lane:0,revertLane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),mt===zs&&(ct=!0);else if((ga&nt)===nt){$=$.next,nt===zs&&(ct=!0);continue}else mt={lane:0,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},O===null?(b=O=mt,x=f):O=O.next=mt,ue.lanes|=nt,Ta|=nt;mt=$.action,rs&&a(f,mt),f=$.hasEagerState?$.eagerState:a(f,mt)}else nt={lane:mt,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},O===null?(b=O=nt,x=f):O=O.next=nt,ue.lanes|=mt,Ta|=mt;$=$.next}while($!==null&&$!==n);if(O===null?x=f:O.next=b,!Wn(f,e.memoizedState)&&(_n=!0,ct&&(a=Bs,a!==null)))throw a;e.memoizedState=f,e.baseState=x,e.baseQueue=O,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Nu(e){var n=nn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do f=e(f,x.action),x=x.next;while(x!==u);Wn(f,n.memoizedState)||(_n=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Dp(e,n,a){var o=ue,u=nn(),f=Ae;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!Wn((Oe||u).memoizedState,a);x&&(u.memoizedState=a,_n=!0),u=u.queue;var b=Np.bind(null,o,u,e);if(Qr(2048,8,b,[e]),u.getSnapshot!==n||x||en!==null&&en.memoizedState.tag&1){if(o.flags|=2048,Gs(9,ml(),Lp.bind(null,o,u,a,n),null),ke===null)throw Error(s(349));f||(ga&124)!==0||Up(o,n,a)}return a}function Up(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ue.updateQueue,n===null?(n=Du(),ue.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Lp(e,n,a,o){n.value=a,n.getSnapshot=o,Op(n)&&Pp(e)}function Np(e,n,a){return a(function(){Op(n)&&Pp(e)})}function Op(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Wn(e,a)}catch{return!0}}function Pp(e){var n=Ls(e,2);n!==null&&Qn(n,e,2)}function Ou(e){var n=Pn();if(typeof e=="function"){var a=e;if(e=a(),rs){lt(!0);try{a()}finally{lt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:e},n}function zp(e,n,a,o){return e.baseState=a,Lu(e,Oe,typeof o=="function"?o:Vi)}function q0(e,n,a,o,u){if(gl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};P.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Bp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Bp(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=P.T,x={};P.T=x;try{var b=a(u,o),O=P.S;O!==null&&O(x,b),Ip(e,n,b)}catch($){Pu(e,n,$)}finally{P.T=f}}else try{f=a(u,o),Ip(e,n,f)}catch($){Pu(e,n,$)}}function Ip(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Fp(e,n,o)},function(o){return Pu(e,n,o)}):Fp(e,n,a)}function Fp(e,n,a){n.status="fulfilled",n.value=a,Hp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Bp(e,a)))}function Pu(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Hp(n),n=n.next;while(n!==o)}e.action=null}function Hp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Gp(e,n){return n}function Vp(e,n){if(Ae){var a=ke.formState;if(a!==null){t:{var o=ue;if(Ae){if(Ye){e:{for(var u=Ye,f=xi;u.nodeType!==8;){if(!f){u=null;break e}if(u=hi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ye=hi(u.nextSibling),o=u.data==="F!";break t}}ns(o)}o=!1}o&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gp,lastRenderedState:n},a.queue=o,a=om.bind(null,ue,o),o.dispatch=a,o=Ou(!1),f=Hu.bind(null,ue,!1,o.queue),o=Pn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=q0.bind(null,ue,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function kp(e){var n=nn();return Xp(n,Oe,e)}function Xp(e,n,a){if(n=Lu(e,n,Gp)[0],e=pl(Vi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Kr(n)}catch(x){throw x===Xr?ll:x}else o=n;n=nn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ue.flags|=2048,Gs(9,ml(),Y0.bind(null,u,a),null)),[o,f,e]}function Y0(e,n){e.action=n}function Wp(e){var n=nn(),a=Oe;if(a!==null)return Xp(n,a,e);nn(),n=n.memoizedState,a=nn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Gs(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=ue.updateQueue,n===null&&(n=Du(),ue.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function ml(){return{destroy:void 0,resource:void 0}}function qp(){return nn().memoizedState}function _l(e,n,a,o){var u=Pn();o=o===void 0?null:o,ue.flags|=e,u.memoizedState=Gs(1|n,ml(),a,o)}function Qr(e,n,a,o){var u=nn();o=o===void 0?null:o;var f=u.memoizedState.inst;Oe!==null&&o!==null&&bu(o,Oe.memoizedState.deps)?u.memoizedState=Gs(n,f,a,o):(ue.flags|=e,u.memoizedState=Gs(1|n,f,a,o))}function Yp(e,n){_l(8390656,8,e,n)}function Zp(e,n){Qr(2048,8,e,n)}function jp(e,n){return Qr(4,2,e,n)}function Kp(e,n){return Qr(4,4,e,n)}function Qp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Jp(e,n,a){a=a!=null?a.concat([e]):null,Qr(4,4,Qp.bind(null,n,e),a)}function zu(){}function $p(e,n){var a=nn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&bu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function tm(e,n){var a=nn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&bu(n,o[1]))return o[0];if(o=e(),rs){lt(!0);try{e()}finally{lt(!1)}}return a.memoizedState=[o,n],o}function Bu(e,n,a){return a===void 0||(ga&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=i_(),ue.lanes|=e,Ta|=e,a)}function em(e,n,a,o){return Wn(a,n)?a:Is.current!==null?(e=Bu(e,a,o),Wn(e,n)||(_n=!0),e):(ga&42)===0?(_n=!0,e.memoizedState=a):(e=i_(),ue.lanes|=e,Ta|=e,n)}function nm(e,n,a,o,u){var f=K.p;K.p=f!==0&&8>f?f:8;var x=P.T,b={};P.T=b,Hu(e,!1,n,a);try{var O=u(),$=P.S;if($!==null&&$(b,O),O!==null&&typeof O=="object"&&typeof O.then=="function"){var ct=k0(O,o);Jr(e,n,ct,Kn(e))}else Jr(e,n,o,Kn(e))}catch(mt){Jr(e,n,{then:function(){},status:"rejected",reason:mt},Kn())}finally{K.p=f,P.T=x}}function Z0(){}function Iu(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=im(e).queue;nm(e,u,n,Z,a===null?Z0:function(){return am(e),a(o)})}function im(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:Z},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function am(e){var n=im(e).next.queue;Jr(e,n,{},Kn())}function Fu(){return Rn(go)}function sm(){return nn().memoizedState}function rm(){return nn().memoizedState}function j0(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Kn();e=ma(a);var o=_a(n,e,a);o!==null&&(Qn(o,n,a),qr(o,n,a)),n={cache:mu()},e.payload=n;return}n=n.return}}function K0(e,n,a){var o=Kn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},gl(e)?lm(n,a):(a=su(e,n,a,o),a!==null&&(Qn(a,e,o),cm(a,n,o)))}function om(e,n,a){var o=Kn();Jr(e,n,a,o)}function Jr(e,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(gl(e))lm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,b=f(x,a);if(u.hasEagerState=!0,u.eagerState=b,Wn(b,x))return tl(e,n,u,0),ke===null&&$o(),!1}catch{}finally{}if(a=su(e,n,u,o),a!==null)return Qn(a,e,o),cm(a,n,o),!0}return!1}function Hu(e,n,a,o){if(o={lane:2,revertLane:Sf(),action:o,hasEagerState:!1,eagerState:null,next:null},gl(e)){if(n)throw Error(s(479))}else n=su(e,a,o,2),n!==null&&Qn(n,e,2)}function gl(e){var n=e.alternate;return e===ue||n!==null&&n===ue}function lm(e,n){Fs=fl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function cm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,It(e,a)}}var vl={readContext:Rn,use:dl,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe},um={readContext:Rn,use:dl,useCallback:function(e,n){return Pn().memoizedState=[e,n===void 0?null:n],e},useContext:Rn,useEffect:Yp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,_l(4194308,4,Qp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return _l(4194308,4,e,n)},useInsertionEffect:function(e,n){_l(4,2,e,n)},useMemo:function(e,n){var a=Pn();n=n===void 0?null:n;var o=e();if(rs){lt(!0);try{e()}finally{lt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Pn();if(a!==void 0){var u=a(n);if(rs){lt(!0);try{a(n)}finally{lt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=K0.bind(null,ue,e),[o.memoizedState,e]},useRef:function(e){var n=Pn();return e={current:e},n.memoizedState=e},useState:function(e){e=Ou(e);var n=e.queue,a=om.bind(null,ue,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:zu,useDeferredValue:function(e,n){var a=Pn();return Bu(a,e,n)},useTransition:function(){var e=Ou(!1);return e=nm.bind(null,ue,e.queue,!0,!1),Pn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ue,u=Pn();if(Ae){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),ke===null)throw Error(s(349));(xe&124)!==0||Up(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Yp(Np.bind(null,o,f,e),[e]),o.flags|=2048,Gs(9,ml(),Lp.bind(null,o,f,a,n),null),a},useId:function(){var e=Pn(),n=ke.identifierPrefix;if(Ae){var a=Fi,o=Ii;a=(o&~(1<<32-Ot(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=hl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=X0++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Fu,useFormState:Vp,useActionState:Vp,useOptimistic:function(e){var n=Pn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Hu.bind(null,ue,!0,a),a.dispatch=n,[e,n]},useMemoCache:Uu,useCacheRefresh:function(){return Pn().memoizedState=j0.bind(null,ue)}},fm={readContext:Rn,use:dl,useCallback:$p,useContext:Rn,useEffect:Zp,useImperativeHandle:Jp,useInsertionEffect:jp,useLayoutEffect:Kp,useMemo:tm,useReducer:pl,useRef:qp,useState:function(){return pl(Vi)},useDebugValue:zu,useDeferredValue:function(e,n){var a=nn();return em(a,Oe.memoizedState,e,n)},useTransition:function(){var e=pl(Vi)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:Kr(e),n]},useSyncExternalStore:Dp,useId:sm,useHostTransitionStatus:Fu,useFormState:kp,useActionState:kp,useOptimistic:function(e,n){var a=nn();return zp(a,Oe,e,n)},useMemoCache:Uu,useCacheRefresh:rm},Q0={readContext:Rn,use:dl,useCallback:$p,useContext:Rn,useEffect:Zp,useImperativeHandle:Jp,useInsertionEffect:jp,useLayoutEffect:Kp,useMemo:tm,useReducer:Nu,useRef:qp,useState:function(){return Nu(Vi)},useDebugValue:zu,useDeferredValue:function(e,n){var a=nn();return Oe===null?Bu(a,e,n):em(a,Oe.memoizedState,e,n)},useTransition:function(){var e=Nu(Vi)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:Kr(e),n]},useSyncExternalStore:Dp,useId:sm,useHostTransitionStatus:Fu,useFormState:Wp,useActionState:Wp,useOptimistic:function(e,n){var a=nn();return Oe!==null?zp(a,Oe,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Uu,useCacheRefresh:rm},Vs=null,$r=0;function Sl(e){var n=$r;return $r+=1,Vs===null&&(Vs=[]),Mp(Vs,e,n)}function to(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function xl(e,n){throw n.$$typeof===v?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function hm(e){var n=e._init;return n(e._payload)}function dm(e){function n(q,H){if(e){var Q=q.deletions;Q===null?(q.deletions=[H],q.flags|=16):Q.push(H)}}function a(q,H){if(!e)return null;for(;H!==null;)n(q,H),H=H.sibling;return null}function o(q){for(var H=new Map;q!==null;)q.key!==null?H.set(q.key,q):H.set(q.index,q),q=q.sibling;return H}function u(q,H){return q=Bi(q,H),q.index=0,q.sibling=null,q}function f(q,H,Q){return q.index=Q,e?(Q=q.alternate,Q!==null?(Q=Q.index,Q<H?(q.flags|=67108866,H):Q):(q.flags|=67108866,H)):(q.flags|=1048576,H)}function x(q){return e&&q.alternate===null&&(q.flags|=67108866),q}function b(q,H,Q,ft){return H===null||H.tag!==6?(H=ou(Q,q.mode,ft),H.return=q,H):(H=u(H,Q),H.return=q,H)}function O(q,H,Q,ft){var Ft=Q.type;return Ft===T?ct(q,H,Q.props.children,ft,Q.key):H!==null&&(H.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===W&&hm(Ft)===H.type)?(H=u(H,Q.props),to(H,Q),H.return=q,H):(H=nl(Q.type,Q.key,Q.props,null,q.mode,ft),to(H,Q),H.return=q,H)}function $(q,H,Q,ft){return H===null||H.tag!==4||H.stateNode.containerInfo!==Q.containerInfo||H.stateNode.implementation!==Q.implementation?(H=lu(Q,q.mode,ft),H.return=q,H):(H=u(H,Q.children||[]),H.return=q,H)}function ct(q,H,Q,ft,Ft){return H===null||H.tag!==7?(H=Ja(Q,q.mode,ft,Ft),H.return=q,H):(H=u(H,Q),H.return=q,H)}function mt(q,H,Q){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=ou(""+H,q.mode,Q),H.return=q,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case S:return Q=nl(H.type,H.key,H.props,null,q.mode,Q),to(Q,H),Q.return=q,Q;case y:return H=lu(H,q.mode,Q),H.return=q,H;case W:var ft=H._init;return H=ft(H._payload),mt(q,H,Q)}if(ht(H)||ot(H))return H=Ja(H,q.mode,Q,null),H.return=q,H;if(typeof H.then=="function")return mt(q,Sl(H),Q);if(H.$$typeof===L)return mt(q,rl(q,H),Q);xl(q,H)}return null}function nt(q,H,Q,ft){var Ft=H!==null?H.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Ft!==null?null:b(q,H,""+Q,ft);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case S:return Q.key===Ft?O(q,H,Q,ft):null;case y:return Q.key===Ft?$(q,H,Q,ft):null;case W:return Ft=Q._init,Q=Ft(Q._payload),nt(q,H,Q,ft)}if(ht(Q)||ot(Q))return Ft!==null?null:ct(q,H,Q,ft,null);if(typeof Q.then=="function")return nt(q,H,Sl(Q),ft);if(Q.$$typeof===L)return nt(q,H,rl(q,Q),ft);xl(q,Q)}return null}function it(q,H,Q,ft,Ft){if(typeof ft=="string"&&ft!==""||typeof ft=="number"||typeof ft=="bigint")return q=q.get(Q)||null,b(H,q,""+ft,Ft);if(typeof ft=="object"&&ft!==null){switch(ft.$$typeof){case S:return q=q.get(ft.key===null?Q:ft.key)||null,O(H,q,ft,Ft);case y:return q=q.get(ft.key===null?Q:ft.key)||null,$(H,q,ft,Ft);case W:var de=ft._init;return ft=de(ft._payload),it(q,H,Q,ft,Ft)}if(ht(ft)||ot(ft))return q=q.get(Q)||null,ct(H,q,ft,Ft,null);if(typeof ft.then=="function")return it(q,H,Q,Sl(ft),Ft);if(ft.$$typeof===L)return it(q,H,Q,rl(H,ft),Ft);xl(H,ft)}return null}function ee(q,H,Q,ft){for(var Ft=null,de=null,Xt=H,$t=H=0,vn=null;Xt!==null&&$t<Q.length;$t++){Xt.index>$t?(vn=Xt,Xt=null):vn=Xt.sibling;var Ee=nt(q,Xt,Q[$t],ft);if(Ee===null){Xt===null&&(Xt=vn);break}e&&Xt&&Ee.alternate===null&&n(q,Xt),H=f(Ee,H,$t),de===null?Ft=Ee:de.sibling=Ee,de=Ee,Xt=vn}if($t===Q.length)return a(q,Xt),Ae&&ts(q,$t),Ft;if(Xt===null){for(;$t<Q.length;$t++)Xt=mt(q,Q[$t],ft),Xt!==null&&(H=f(Xt,H,$t),de===null?Ft=Xt:de.sibling=Xt,de=Xt);return Ae&&ts(q,$t),Ft}for(Xt=o(Xt);$t<Q.length;$t++)vn=it(Xt,q,$t,Q[$t],ft),vn!==null&&(e&&vn.alternate!==null&&Xt.delete(vn.key===null?$t:vn.key),H=f(vn,H,$t),de===null?Ft=vn:de.sibling=vn,de=vn);return e&&Xt.forEach(function(Na){return n(q,Na)}),Ae&&ts(q,$t),Ft}function Jt(q,H,Q,ft){if(Q==null)throw Error(s(151));for(var Ft=null,de=null,Xt=H,$t=H=0,vn=null,Ee=Q.next();Xt!==null&&!Ee.done;$t++,Ee=Q.next()){Xt.index>$t?(vn=Xt,Xt=null):vn=Xt.sibling;var Na=nt(q,Xt,Ee.value,ft);if(Na===null){Xt===null&&(Xt=vn);break}e&&Xt&&Na.alternate===null&&n(q,Xt),H=f(Na,H,$t),de===null?Ft=Na:de.sibling=Na,de=Na,Xt=vn}if(Ee.done)return a(q,Xt),Ae&&ts(q,$t),Ft;if(Xt===null){for(;!Ee.done;$t++,Ee=Q.next())Ee=mt(q,Ee.value,ft),Ee!==null&&(H=f(Ee,H,$t),de===null?Ft=Ee:de.sibling=Ee,de=Ee);return Ae&&ts(q,$t),Ft}for(Xt=o(Xt);!Ee.done;$t++,Ee=Q.next())Ee=it(Xt,q,$t,Ee.value,ft),Ee!==null&&(e&&Ee.alternate!==null&&Xt.delete(Ee.key===null?$t:Ee.key),H=f(Ee,H,$t),de===null?Ft=Ee:de.sibling=Ee,de=Ee);return e&&Xt.forEach(function(JS){return n(q,JS)}),Ae&&ts(q,$t),Ft}function ze(q,H,Q,ft){if(typeof Q=="object"&&Q!==null&&Q.type===T&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case S:t:{for(var Ft=Q.key;H!==null;){if(H.key===Ft){if(Ft=Q.type,Ft===T){if(H.tag===7){a(q,H.sibling),ft=u(H,Q.props.children),ft.return=q,q=ft;break t}}else if(H.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===W&&hm(Ft)===H.type){a(q,H.sibling),ft=u(H,Q.props),to(ft,Q),ft.return=q,q=ft;break t}a(q,H);break}else n(q,H);H=H.sibling}Q.type===T?(ft=Ja(Q.props.children,q.mode,ft,Q.key),ft.return=q,q=ft):(ft=nl(Q.type,Q.key,Q.props,null,q.mode,ft),to(ft,Q),ft.return=q,q=ft)}return x(q);case y:t:{for(Ft=Q.key;H!==null;){if(H.key===Ft)if(H.tag===4&&H.stateNode.containerInfo===Q.containerInfo&&H.stateNode.implementation===Q.implementation){a(q,H.sibling),ft=u(H,Q.children||[]),ft.return=q,q=ft;break t}else{a(q,H);break}else n(q,H);H=H.sibling}ft=lu(Q,q.mode,ft),ft.return=q,q=ft}return x(q);case W:return Ft=Q._init,Q=Ft(Q._payload),ze(q,H,Q,ft)}if(ht(Q))return ee(q,H,Q,ft);if(ot(Q)){if(Ft=ot(Q),typeof Ft!="function")throw Error(s(150));return Q=Ft.call(Q),Jt(q,H,Q,ft)}if(typeof Q.then=="function")return ze(q,H,Sl(Q),ft);if(Q.$$typeof===L)return ze(q,H,rl(q,Q),ft);xl(q,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,H!==null&&H.tag===6?(a(q,H.sibling),ft=u(H,Q),ft.return=q,q=ft):(a(q,H),ft=ou(Q,q.mode,ft),ft.return=q,q=ft),x(q)):a(q,H)}return function(q,H,Q,ft){try{$r=0;var Ft=ze(q,H,Q,ft);return Vs=null,Ft}catch(Xt){if(Xt===Xr||Xt===ll)throw Xt;var de=qn(29,Xt,null,q.mode);return de.lanes=ft,de.return=q,de}finally{}}}var ks=dm(!0),pm=dm(!1),ai=tt(null),yi=null;function va(e){var n=e.alternate;xt(ln,ln.current&1),xt(ai,e),yi===null&&(n===null||Is.current!==null||n.memoizedState!==null)&&(yi=e)}function mm(e){if(e.tag===22){if(xt(ln,ln.current),xt(ai,e),yi===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(yi=e)}}else Sa()}function Sa(){xt(ln,ln.current),xt(ai,ai.current)}function ki(e){vt(ai),yi===e&&(yi=null),vt(ln)}var ln=tt(0);function yl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Uf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Gu(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Vu={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Kn(),u=ma(o);u.payload=n,a!=null&&(u.callback=a),n=_a(e,u,o),n!==null&&(Qn(n,e,o),qr(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Kn(),u=ma(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=_a(e,u,o),n!==null&&(Qn(n,e,o),qr(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Kn(),o=ma(a);o.tag=2,n!=null&&(o.callback=n),n=_a(e,o,a),n!==null&&(Qn(n,e,a),qr(n,e,a))}};function _m(e,n,a,o,u,f,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,x):n.prototype&&n.prototype.isPureReactComponent?!zr(a,o)||!zr(u,f):!0}function gm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Vu.enqueueReplaceState(n,n.state,null)}function os(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var Ml=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function vm(e){Ml(e)}function Sm(e){console.error(e)}function xm(e){Ml(e)}function El(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function ym(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function ku(e,n,a){return a=ma(a),a.tag=3,a.payload={element:null},a.callback=function(){El(e,n)},a}function Mm(e){return e=ma(e),e.tag=3,e}function Em(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){ym(n,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){ym(n,a,o),typeof u!="function"&&(ba===null?ba=new Set([this]):ba.add(this));var b=o.stack;this.componentDidCatch(o.value,{componentStack:b!==null?b:""})})}function J0(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Gr(n,a,u,!0),a=ai.current,a!==null){switch(a.tag){case 13:return yi===null?pf():a.alternate===null&&Ze===0&&(Ze=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===vu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),_f(e,o,u)),!1;case 22:return a.flags|=65536,o===vu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),_f(e,o,u)),!1}throw Error(s(435,a.tag))}return _f(e,o,u),pf(),!1}if(Ae)return n=ai.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==fu&&(e=Error(s(422),{cause:o}),Hr(ti(e,a)))):(o!==fu&&(n=Error(s(423),{cause:o}),Hr(ti(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ti(o,a),u=ku(e.stateNode,o,u),yu(e,u),Ze!==4&&(Ze=2)),!1;var f=Error(s(520),{cause:o});if(f=ti(f,a),oo===null?oo=[f]:oo.push(f),Ze!==4&&(Ze=2),n===null)return!0;o=ti(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=ku(a.stateNode,o,e),yu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ba===null||!ba.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Mm(u),Em(u,e,a,o),yu(a,u),!1}a=a.return}while(a!==null);return!1}var Tm=Error(s(461)),_n=!1;function En(e,n,a,o){n.child=e===null?pm(n,null,a,o):ks(n,e.child,a,o)}function bm(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var x={};for(var b in o)b!=="ref"&&(x[b]=o[b])}else x=o;return as(n),o=Au(e,n,a,x,f,u),b=Ru(),e!==null&&!_n?(Cu(e,n,u),Xi(e,n,u)):(Ae&&b&&cu(n),n.flags|=1,En(e,n,o,u),n.child)}function Am(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!ru(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Rm(e,n,f,o,u)):(e=nl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Qu(e,u)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:zr,a(x,o)&&e.ref===n.ref)return Xi(e,n,u)}return n.flags|=1,e=Bi(f,o),e.ref=n.ref,e.return=n,n.child=e}function Rm(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(zr(f,o)&&e.ref===n.ref)if(_n=!1,n.pendingProps=o=f,Qu(e,u))(e.flags&131072)!==0&&(_n=!0);else return n.lanes=e.lanes,Xi(e,n,u)}return Xu(e,n,a,o,u)}function Cm(e,n,a){var o=n.pendingProps,u=o.children,f=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=f!==null?f.baseLanes|a:a,e!==null){for(u=n.child=e.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;n.childLanes=f&~o}else n.childLanes=0,n.child=null;return wm(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&ol(n,f!==null?f.cachePool:null),f!==null?Rp(n,f):Eu(),mm(n);else return n.lanes=n.childLanes=536870912,wm(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(ol(n,f.cachePool),Rp(n,f),Sa(),n.memoizedState=null):(e!==null&&ol(n,null),Eu(),Sa());return En(e,n,u,a),n.child}function wm(e,n,a,o){var u=gu();return u=u===null?null:{parent:on._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&ol(n,null),Eu(),mm(n),e!==null&&Gr(e,n,o,!0),null}function Tl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Xu(e,n,a,o,u){return as(n),a=Au(e,n,a,o,void 0,u),o=Ru(),e!==null&&!_n?(Cu(e,n,u),Xi(e,n,u)):(Ae&&o&&cu(n),n.flags|=1,En(e,n,a,u),n.child)}function Dm(e,n,a,o,u,f){return as(n),n.updateQueue=null,a=wp(n,o,a,u),Cp(e),o=Ru(),e!==null&&!_n?(Cu(e,n,f),Xi(e,n,f)):(Ae&&o&&cu(n),n.flags|=1,En(e,n,a,f),n.child)}function Um(e,n,a,o,u){if(as(n),n.stateNode===null){var f=Ns,x=a.contextType;typeof x=="object"&&x!==null&&(f=Rn(x)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Vu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Su(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?Rn(x):Ns,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Gu(n,a,x,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&Vu.enqueueReplaceState(f,f.state,null),Zr(n,o,f,u),Yr(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var b=n.memoizedProps,O=os(a,b);f.props=O;var $=f.context,ct=a.contextType;x=Ns,typeof ct=="object"&&ct!==null&&(x=Rn(ct));var mt=a.getDerivedStateFromProps;ct=typeof mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,ct||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||$!==x)&&gm(n,f,o,x),pa=!1;var nt=n.memoizedState;f.state=nt,Zr(n,o,f,u),Yr(),$=n.memoizedState,b||nt!==$||pa?(typeof mt=="function"&&(Gu(n,a,mt,o),$=n.memoizedState),(O=pa||_m(n,a,O,o,nt,$,x))?(ct||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=$),f.props=o,f.state=$,f.context=x,o=O):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,xu(e,n),x=n.memoizedProps,ct=os(a,x),f.props=ct,mt=n.pendingProps,nt=f.context,$=a.contextType,O=Ns,typeof $=="object"&&$!==null&&(O=Rn($)),b=a.getDerivedStateFromProps,($=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==mt||nt!==O)&&gm(n,f,o,O),pa=!1,nt=n.memoizedState,f.state=nt,Zr(n,o,f,u),Yr();var it=n.memoizedState;x!==mt||nt!==it||pa||e!==null&&e.dependencies!==null&&sl(e.dependencies)?(typeof b=="function"&&(Gu(n,a,b,o),it=n.memoizedState),(ct=pa||_m(n,a,ct,o,nt,it,O)||e!==null&&e.dependencies!==null&&sl(e.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,it,O),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,it,O)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=it),f.props=o,f.state=it,f.context=O,o=ct):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Tl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=ks(n,e.child,null,u),n.child=ks(n,null,a,u)):En(e,n,a,u),n.memoizedState=f.state,e=n.child):e=Xi(e,n,u),e}function Lm(e,n,a,o){return Fr(),n.flags|=256,En(e,n,a,o),n.child}var Wu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function qu(e){return{baseLanes:e,cachePool:Sp()}}function Yu(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=si),e}function Nm(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=e!==null&&e.memoizedState===null?!1:(ln.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ae){if(u?va(n):Sa(),Ae){var b=Ye,O;if(O=b){t:{for(O=b,b=xi;O.nodeType!==8;){if(!b){b=null;break t}if(O=hi(O.nextSibling),O===null){b=null;break t}}b=O}b!==null?(n.memoizedState={dehydrated:b,treeContext:$a!==null?{id:Ii,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},O=qn(18,null,null,0),O.stateNode=b,O.return=n,n.child=O,Un=n,Ye=null,O=!0):O=!1}O||ns(n)}if(b=n.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return Uf(b)?n.lanes=32:n.lanes=536870912,null;ki(n)}return b=o.children,o=o.fallback,u?(Sa(),u=n.mode,b=bl({mode:"hidden",children:b},u),o=Ja(o,u,a,null),b.return=n,o.return=n,b.sibling=o,n.child=b,u=n.child,u.memoizedState=qu(a),u.childLanes=Yu(e,x,a),n.memoizedState=Wu,o):(va(n),Zu(n,b))}if(O=e.memoizedState,O!==null&&(b=O.dehydrated,b!==null)){if(f)n.flags&256?(va(n),n.flags&=-257,n=ju(e,n,a)):n.memoizedState!==null?(Sa(),n.child=e.child,n.flags|=128,n=null):(Sa(),u=o.fallback,b=n.mode,o=bl({mode:"visible",children:o.children},b),u=Ja(u,b,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,ks(n,e.child,null,a),o=n.child,o.memoizedState=qu(a),o.childLanes=Yu(e,x,a),n.memoizedState=Wu,n=u);else if(va(n),Uf(b)){if(x=b.nextSibling&&b.nextSibling.dataset,x)var $=x.dgst;x=$,o=Error(s(419)),o.stack="",o.digest=x,Hr({value:o,source:null,stack:null}),n=ju(e,n,a)}else if(_n||Gr(e,n,a,!1),x=(a&e.childLanes)!==0,_n||x){if(x=ke,x!==null&&(o=a&-a,o=(o&42)!==0?1:ne(o),o=(o&(x.suspendedLanes|a))!==0?0:o,o!==0&&o!==O.retryLane))throw O.retryLane=o,Ls(e,o),Qn(x,e,o),Tm;b.data==="$?"||pf(),n=ju(e,n,a)}else b.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=O.treeContext,Ye=hi(b.nextSibling),Un=n,Ae=!0,es=null,xi=!1,e!==null&&(ni[ii++]=Ii,ni[ii++]=Fi,ni[ii++]=$a,Ii=e.id,Fi=e.overflow,$a=n),n=Zu(n,o.children),n.flags|=4096);return n}return u?(Sa(),u=o.fallback,b=n.mode,O=e.child,$=O.sibling,o=Bi(O,{mode:"hidden",children:o.children}),o.subtreeFlags=O.subtreeFlags&65011712,$!==null?u=Bi($,u):(u=Ja(u,b,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,b=e.child.memoizedState,b===null?b=qu(a):(O=b.cachePool,O!==null?($=on._currentValue,O=O.parent!==$?{parent:$,pool:$}:O):O=Sp(),b={baseLanes:b.baseLanes|a,cachePool:O}),u.memoizedState=b,u.childLanes=Yu(e,x,a),n.memoizedState=Wu,o):(va(n),a=e.child,e=a.sibling,a=Bi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function Zu(e,n){return n=bl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function bl(e,n){return e=qn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function ju(e,n,a){return ks(n,e.child,null,a),e=Zu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Om(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),du(e.return,n,a)}function Ku(e,n,a,o,u){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=a,f.tailMode=u)}function Pm(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;if(En(e,n,o.children,a),o=ln.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Om(e,a,n);else if(e.tag===19)Om(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(xt(ln,o),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&yl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Ku(n,!1,u,a,f);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&yl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Ku(n,!0,a,null,f);break;case"together":Ku(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Xi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ta|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Gr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Bi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Bi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Qu(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&sl(e)))}function $0(e,n,a){switch(n.tag){case 3:Ct(n,n.stateNode.containerInfo),da(n,on,e.memoizedState.cache),Fr();break;case 27:case 5:Qt(n);break;case 4:Ct(n,n.stateNode.containerInfo);break;case 10:da(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(va(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Nm(e,n,a):(va(n),e=Xi(e,n,a),e!==null?e.sibling:null);va(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Gr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Pm(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),xt(ln,ln.current),o)break;return null;case 22:case 23:return n.lanes=0,Cm(e,n,a);case 24:da(n,on,e.memoizedState.cache)}return Xi(e,n,a)}function zm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)_n=!0;else{if(!Qu(e,a)&&(n.flags&128)===0)return _n=!1,$0(e,n,a);_n=(e.flags&131072)!==0}else _n=!1,Ae&&(n.flags&1048576)!==0&&hp(n,al,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")ru(o)?(e=os(o,e),n.tag=1,n=Um(null,n,o,e,a)):(n.tag=0,n=Xu(null,n,o,e,a));else{if(o!=null){if(u=o.$$typeof,u===w){n.tag=11,n=bm(null,n,o,e,a);break t}else if(u===z){n.tag=14,n=Am(null,n,o,e,a);break t}}throw n=gt(o)||o,Error(s(306,n,""))}}return n;case 0:return Xu(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=os(o,n.pendingProps),Um(e,n,o,u,a);case 3:t:{if(Ct(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,xu(e,n),Zr(n,o,null,a);var x=n.memoizedState;if(o=x.cache,da(n,on,o),o!==f.cache&&pu(n,[on],a,!0),Yr(),o=x.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Lm(e,n,o,a);break t}else if(o!==u){u=ti(Error(s(424)),n),Hr(u),n=Lm(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ye=hi(e.firstChild),Un=n,Ae=!0,es=null,xi=!0,a=pm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Fr(),o===u){n=Xi(e,n,a);break t}En(e,n,o,a)}n=n.child}return n;case 26:return Tl(e,n),e===null?(a=H_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ae||(a=n.type,e=n.pendingProps,o=Fl(yt.current).createElement(a),o[sn]=n,o[yn]=e,bn(o,a,e),tn(o),n.stateNode=o):n.memoizedState=H_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Qt(n),e===null&&Ae&&(o=n.stateNode=B_(n.type,n.pendingProps,yt.current),Un=n,xi=!0,u=Ye,Ca(n.type)?(Lf=u,Ye=hi(o.firstChild)):Ye=u),En(e,n,n.pendingProps.children,a),Tl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ae&&((u=o=Ye)&&(o=RS(o,n.type,n.pendingProps,xi),o!==null?(n.stateNode=o,Un=n,Ye=hi(o.firstChild),xi=!1,u=!0):u=!1),u||ns(n)),Qt(n),u=n.type,f=n.pendingProps,x=e!==null?e.memoizedProps:null,o=f.children,Cf(u,f)?o=null:x!==null&&Cf(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=Au(e,n,W0,null,null,a),go._currentValue=u),Tl(e,n),En(e,n,o,a),n.child;case 6:return e===null&&Ae&&((e=a=Ye)&&(a=CS(a,n.pendingProps,xi),a!==null?(n.stateNode=a,Un=n,Ye=null,e=!0):e=!1),e||ns(n)),null;case 13:return Nm(e,n,a);case 4:return Ct(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=ks(n,null,o,a):En(e,n,o,a),n.child;case 11:return bm(e,n,n.type,n.pendingProps,a);case 7:return En(e,n,n.pendingProps,a),n.child;case 8:return En(e,n,n.pendingProps.children,a),n.child;case 12:return En(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,da(n,n.type,o.value),En(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,as(n),u=Rn(u),o=o(u),n.flags|=1,En(e,n,o,a),n.child;case 14:return Am(e,n,n.type,n.pendingProps,a);case 15:return Rm(e,n,n.type,n.pendingProps,a);case 19:return Pm(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=bl(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Bi(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Cm(e,n,a);case 24:return as(n),o=Rn(on),e===null?(u=gu(),u===null&&(u=ke,f=mu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Su(n),da(n,on,u)):((e.lanes&a)!==0&&(xu(e,n),Zr(n,null,null,a),Yr()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),da(n,on,o)):(o=f.cache,da(n,on,o),o!==u.cache&&pu(n,[on],a,!0))),En(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Wi(e){e.flags|=4}function Bm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!W_(n)){if(n=ai.current,n!==null&&((xe&4194048)===xe?yi!==null:(xe&62914560)!==xe&&(xe&536870912)===0||n!==yi))throw Wr=vu,xp;e.flags|=8192}}function Al(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ut():536870912,e.lanes|=n,Ys|=n)}function eo(e,n){if(!Ae)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function qe(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function tS(e,n,a){var o=n.pendingProps;switch(uu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(n),null;case 1:return qe(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Gi(on),oe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ir(n)?Wi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,mp())),qe(n),null;case 26:return a=n.memoizedState,e===null?(Wi(n),a!==null?(qe(n),Bm(n,a)):(qe(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Wi(n),qe(n),Bm(n,a)):(qe(n),n.flags&=-16777217):(e.memoizedProps!==o&&Wi(n),qe(n),n.flags&=-16777217),null;case 27:Le(n),a=yt.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Wi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return qe(n),null}e=J.current,Ir(n)?dp(n):(e=B_(u,o,a),n.stateNode=e,Wi(n))}return qe(n),null;case 5:if(Le(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Wi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return qe(n),null}if(e=J.current,Ir(n))dp(n);else{switch(u=Fl(yt.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}e[sn]=n,e[yn]=o;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(bn(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Wi(n)}}return qe(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Wi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=yt.current,Ir(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Un,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[sn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||D_(e.nodeValue,a)),e||ns(n)}else e=Fl(e).createTextNode(o),e[sn]=n,n.stateNode=e}return qe(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Ir(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[sn]=n}else Fr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),u=!1}else u=mp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ki(n),n):(ki(n),null)}if(ki(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Al(n,n.updateQueue),qe(n),null;case 4:return oe(),e===null&&Ef(n.stateNode.containerInfo),qe(n),null;case 10:return Gi(n.type),qe(n),null;case 19:if(vt(ln),u=n.memoizedState,u===null)return qe(n),null;if(o=(n.flags&128)!==0,f=u.rendering,f===null)if(o)eo(u,!1);else{if(Ze!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=yl(e),f!==null){for(n.flags|=128,eo(u,!1),e=f.updateQueue,n.updateQueue=e,Al(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)fp(a,e),a=a.sibling;return xt(ln,ln.current&1|2),n.child}e=e.sibling}u.tail!==null&&pe()>wl&&(n.flags|=128,o=!0,eo(u,!1),n.lanes=4194304)}else{if(!o)if(e=yl(f),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Al(n,e),eo(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!Ae)return qe(n),null}else 2*pe()-u.renderingStartTime>wl&&a!==536870912&&(n.flags|=128,o=!0,eo(u,!1),n.lanes=4194304);u.isBackwards?(f.sibling=n.child,n.child=f):(e=u.last,e!==null?e.sibling=f:n.child=f,u.last=f)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=pe(),n.sibling=null,e=ln.current,xt(ln,o?e&1|2:e&1),n):(qe(n),null);case 22:case 23:return ki(n),Tu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(qe(n),n.subtreeFlags&6&&(n.flags|=8192)):qe(n),a=n.updateQueue,a!==null&&Al(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&vt(ss),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Gi(on),qe(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function eS(e,n){switch(uu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Gi(on),oe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Le(n),null;case 13:if(ki(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Fr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return vt(ln),null;case 4:return oe(),null;case 10:return Gi(n.type),null;case 22:case 23:return ki(n),Tu(),e!==null&&vt(ss),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Gi(on),null;case 25:return null;default:return null}}function Im(e,n){switch(uu(n),n.tag){case 3:Gi(on),oe();break;case 26:case 27:case 5:Le(n);break;case 4:oe();break;case 13:ki(n);break;case 19:vt(ln);break;case 10:Gi(n.type);break;case 22:case 23:ki(n),Tu(),e!==null&&vt(ss);break;case 24:Gi(on)}}function no(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,x=a.inst;o=f(),x.destroy=o}a=a.next}while(a!==u)}}catch(b){Ge(n,n.return,b)}}function xa(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var x=o.inst,b=x.destroy;if(b!==void 0){x.destroy=void 0,u=n;var O=a,$=b;try{$()}catch(ct){Ge(u,O,ct)}}}o=o.next}while(o!==f)}}catch(ct){Ge(n,n.return,ct)}}function Fm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Ap(n,a)}catch(o){Ge(e,e.return,o)}}}function Hm(e,n,a){a.props=os(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ge(e,n,o)}}function io(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Ge(e,n,u)}}function Mi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ge(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ge(e,n,u)}else a.current=null}function Gm(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ge(e,e.return,u)}}function Ju(e,n,a){try{var o=e.stateNode;MS(o,e.type,a,n),o[yn]=n}catch(u){Ge(e,e.return,u)}}function Vm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ca(e.type)||e.tag===4}function $u(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Vm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ca(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Il));else if(o!==4&&(o===27&&Ca(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(tf(e,n,a),e=e.sibling;e!==null;)tf(e,n,a),e=e.sibling}function Rl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Ca(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Rl(e,n,a),e=e.sibling;e!==null;)Rl(e,n,a),e=e.sibling}function km(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);bn(n,o,a),n[sn]=e,n[yn]=a}catch(f){Ge(e,e.return,f)}}var qi=!1,Je=!1,ef=!1,Xm=typeof WeakSet=="function"?WeakSet:Set,gn=null;function nS(e,n){if(e=e.containerInfo,Af=Wl,e=ep(e),$c(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var x=0,b=-1,O=-1,$=0,ct=0,mt=e,nt=null;e:for(;;){for(var it;mt!==a||u!==0&&mt.nodeType!==3||(b=x+u),mt!==f||o!==0&&mt.nodeType!==3||(O=x+o),mt.nodeType===3&&(x+=mt.nodeValue.length),(it=mt.firstChild)!==null;)nt=mt,mt=it;for(;;){if(mt===e)break e;if(nt===a&&++$===u&&(b=x),nt===f&&++ct===o&&(O=x),(it=mt.nextSibling)!==null)break;mt=nt,nt=mt.parentNode}mt=it}a=b===-1||O===-1?null:{start:b,end:O}}else a=null}a=a||{start:0,end:0}}else a=null;for(Rf={focusedElem:e,selectionRange:a},Wl=!1,gn=n;gn!==null;)if(n=gn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,gn=e;else for(;gn!==null;){switch(n=gn,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var ee=os(a.type,u,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(ee,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(Jt){Ge(a,a.return,Jt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Df(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Df(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,gn=e;break}gn=n.return}}function Wm(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ya(e,a),o&4&&no(5,a);break;case 1:if(ya(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){Ge(a,a.return,x)}else{var u=os(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){Ge(a,a.return,x)}}o&64&&Fm(a),o&512&&io(a,a.return);break;case 3:if(ya(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Ap(e,n)}catch(x){Ge(a,a.return,x)}}break;case 27:n===null&&o&4&&km(a);case 26:case 5:ya(e,a),n===null&&o&4&&Gm(a),o&512&&io(a,a.return);break;case 12:ya(e,a);break;case 13:ya(e,a),o&4&&Zm(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=fS.bind(null,a),wS(e,a))));break;case 22:if(o=a.memoizedState!==null||qi,!o){n=n!==null&&n.memoizedState!==null||Je,u=qi;var f=Je;qi=o,(Je=n)&&!f?Ma(e,a,(a.subtreeFlags&8772)!==0):ya(e,a),qi=u,Je=f}break;case 30:break;default:ya(e,a)}}function qm(e){var n=e.alternate;n!==null&&(e.alternate=null,qm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ca(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var We=null,zn=!1;function Yi(e,n,a){for(a=a.child;a!==null;)Ym(e,n,a),a=a.sibling}function Ym(e,n,a){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(ut,a)}catch{}switch(a.tag){case 26:Je||Mi(a,n),Yi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Je||Mi(a,n);var o=We,u=zn;Ca(a.type)&&(We=a.stateNode,zn=!1),Yi(e,n,a),ho(a.stateNode),We=o,zn=u;break;case 5:Je||Mi(a,n);case 6:if(o=We,u=zn,We=null,Yi(e,n,a),We=o,zn=u,We!==null)if(zn)try{(We.nodeType===9?We.body:We.nodeName==="HTML"?We.ownerDocument.body:We).removeChild(a.stateNode)}catch(f){Ge(a,n,f)}else try{We.removeChild(a.stateNode)}catch(f){Ge(a,n,f)}break;case 18:We!==null&&(zn?(e=We,P_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),yo(e)):P_(We,a.stateNode));break;case 4:o=We,u=zn,We=a.stateNode.containerInfo,zn=!0,Yi(e,n,a),We=o,zn=u;break;case 0:case 11:case 14:case 15:Je||xa(2,a,n),Je||xa(4,a,n),Yi(e,n,a);break;case 1:Je||(Mi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Hm(a,n,o)),Yi(e,n,a);break;case 21:Yi(e,n,a);break;case 22:Je=(o=Je)||a.memoizedState!==null,Yi(e,n,a),Je=o;break;default:Yi(e,n,a)}}function Zm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{yo(e)}catch(a){Ge(n,n.return,a)}}function iS(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Xm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Xm),n;default:throw Error(s(435,e.tag))}}function nf(e,n){var a=iS(e);n.forEach(function(o){var u=hS.bind(null,e,o);a.has(o)||(a.add(o),o.then(u,u))})}function Yn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,x=n,b=x;t:for(;b!==null;){switch(b.tag){case 27:if(Ca(b.type)){We=b.stateNode,zn=!1;break t}break;case 5:We=b.stateNode,zn=!1;break t;case 3:case 4:We=b.stateNode.containerInfo,zn=!0;break t}b=b.return}if(We===null)throw Error(s(160));Ym(f,x,u),We=null,zn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)jm(n,e),n=n.sibling}var fi=null;function jm(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Yn(n,e),Zn(e),o&4&&(xa(3,e,e.return),no(3,e),xa(5,e,e.return));break;case 1:Yn(n,e),Zn(e),o&512&&(Je||a===null||Mi(a,a.return)),o&64&&qi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=fi;if(Yn(n,e),Zn(e),o&512&&(Je||a===null||Mi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[la]||f[sn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),bn(f,o,a),f[sn]=e,tn(f),o=f;break t;case"link":var x=k_("link","href",u).get(o+(a.href||""));if(x){for(var b=0;b<x.length;b++)if(f=x[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(b,1);break e}}f=u.createElement(o),bn(f,o,a),u.head.appendChild(f);break;case"meta":if(x=k_("meta","content",u).get(o+(a.content||""))){for(b=0;b<x.length;b++)if(f=x[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(b,1);break e}}f=u.createElement(o),bn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[sn]=e,tn(f),o=f}e.stateNode=o}else X_(u,e.type,e.stateNode);else e.stateNode=V_(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?X_(u,e.type,e.stateNode):V_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Ju(e,e.memoizedProps,a.memoizedProps)}break;case 27:Yn(n,e),Zn(e),o&512&&(Je||a===null||Mi(a,a.return)),a!==null&&o&4&&Ju(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Yn(n,e),Zn(e),o&512&&(Je||a===null||Mi(a,a.return)),e.flags&32){u=e.stateNode;try{Si(u,"")}catch(it){Ge(e,e.return,it)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Ju(e,u,a!==null?a.memoizedProps:u)),o&1024&&(ef=!0);break;case 6:if(Yn(n,e),Zn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(it){Ge(e,e.return,it)}}break;case 3:if(Vl=null,u=fi,fi=Hl(n.containerInfo),Yn(n,e),fi=u,Zn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{yo(n.containerInfo)}catch(it){Ge(e,e.return,it)}ef&&(ef=!1,Km(e));break;case 4:o=fi,fi=Hl(e.stateNode.containerInfo),Yn(n,e),Zn(e),fi=o;break;case 12:Yn(n,e),Zn(e);break;case 13:Yn(n,e),Zn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(cf=pe()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,nf(e,o)));break;case 22:u=e.memoizedState!==null;var O=a!==null&&a.memoizedState!==null,$=qi,ct=Je;if(qi=$||u,Je=ct||O,Yn(n,e),Je=ct,qi=$,Zn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||O||qi||Je||ls(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){O=a=n;try{if(f=O.stateNode,u)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{b=O.stateNode;var mt=O.memoizedProps.style,nt=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;b.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(it){Ge(O,O.return,it)}}}else if(n.tag===6){if(a===null){O=n;try{O.stateNode.nodeValue=u?"":O.memoizedProps}catch(it){Ge(O,O.return,it)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,nf(e,a))));break;case 19:Yn(n,e),Zn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,nf(e,o)));break;case 30:break;case 21:break;default:Yn(n,e),Zn(e)}}function Zn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Vm(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=$u(e);Rl(e,f,u);break;case 5:var x=a.stateNode;a.flags&32&&(Si(x,""),a.flags&=-33);var b=$u(e);Rl(e,b,x);break;case 3:case 4:var O=a.stateNode.containerInfo,$=$u(e);tf(e,$,O);break;default:throw Error(s(161))}}catch(ct){Ge(e,e.return,ct)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Km(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Km(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ya(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Wm(e,n.alternate,n),n=n.sibling}function ls(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:xa(4,n,n.return),ls(n);break;case 1:Mi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Hm(n,n.return,a),ls(n);break;case 27:ho(n.stateNode);case 26:case 5:Mi(n,n.return),ls(n);break;case 22:n.memoizedState===null&&ls(n);break;case 30:ls(n);break;default:ls(n)}e=e.sibling}}function Ma(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:Ma(u,f,a),no(4,f);break;case 1:if(Ma(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch($){Ge(o,o.return,$)}if(o=f,u=o.updateQueue,u!==null){var b=o.stateNode;try{var O=u.shared.hiddenCallbacks;if(O!==null)for(u.shared.hiddenCallbacks=null,u=0;u<O.length;u++)bp(O[u],b)}catch($){Ge(o,o.return,$)}}a&&x&64&&Fm(f),io(f,f.return);break;case 27:km(f);case 26:case 5:Ma(u,f,a),a&&o===null&&x&4&&Gm(f),io(f,f.return);break;case 12:Ma(u,f,a);break;case 13:Ma(u,f,a),a&&x&4&&Zm(u,f);break;case 22:f.memoizedState===null&&Ma(u,f,a),io(f,f.return);break;case 30:break;default:Ma(u,f,a)}n=n.sibling}}function af(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Vr(a))}function sf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Vr(e))}function Ei(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Qm(e,n,a,o),n=n.sibling}function Qm(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ei(e,n,a,o),u&2048&&no(9,n);break;case 1:Ei(e,n,a,o);break;case 3:Ei(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Vr(e)));break;case 12:if(u&2048){Ei(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,x=f.id,b=f.onPostCommit;typeof b=="function"&&b(x,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(O){Ge(n,n.return,O)}}else Ei(e,n,a,o);break;case 13:Ei(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?Ei(e,n,a,o):ao(e,n):f._visibility&2?Ei(e,n,a,o):(f._visibility|=2,Xs(e,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&af(x,n);break;case 24:Ei(e,n,a,o),u&2048&&sf(n.alternate,n);break;default:Ei(e,n,a,o)}}function Xs(e,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,x=n,b=a,O=o,$=x.flags;switch(x.tag){case 0:case 11:case 15:Xs(f,x,b,O,u),no(8,x);break;case 23:break;case 22:var ct=x.stateNode;x.memoizedState!==null?ct._visibility&2?Xs(f,x,b,O,u):ao(f,x):(ct._visibility|=2,Xs(f,x,b,O,u)),u&&$&2048&&af(x.alternate,x);break;case 24:Xs(f,x,b,O,u),u&&$&2048&&sf(x.alternate,x);break;default:Xs(f,x,b,O,u)}n=n.sibling}}function ao(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:ao(a,o),u&2048&&af(o.alternate,o);break;case 24:ao(a,o),u&2048&&sf(o.alternate,o);break;default:ao(a,o)}n=n.sibling}}var so=8192;function Ws(e){if(e.subtreeFlags&so)for(e=e.child;e!==null;)Jm(e),e=e.sibling}function Jm(e){switch(e.tag){case 26:Ws(e),e.flags&so&&e.memoizedState!==null&&VS(fi,e.memoizedState,e.memoizedProps);break;case 5:Ws(e);break;case 3:case 4:var n=fi;fi=Hl(e.stateNode.containerInfo),Ws(e),fi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=so,so=16777216,Ws(e),so=n):Ws(e));break;default:Ws(e)}}function $m(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function ro(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];gn=o,e_(o,e)}$m(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)t_(e),e=e.sibling}function t_(e){switch(e.tag){case 0:case 11:case 15:ro(e),e.flags&2048&&xa(9,e,e.return);break;case 3:ro(e);break;case 12:ro(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Cl(e)):ro(e);break;default:ro(e)}}function Cl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];gn=o,e_(o,e)}$m(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:xa(8,n,n.return),Cl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Cl(n));break;default:Cl(n)}e=e.sibling}}function e_(e,n){for(;gn!==null;){var a=gn;switch(a.tag){case 0:case 11:case 15:xa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Vr(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,gn=o;else t:for(a=e;gn!==null;){o=gn;var u=o.sibling,f=o.return;if(qm(o),o===a){gn=null;break t}if(u!==null){u.return=f,gn=u;break t}gn=f}}}var aS={getCacheForType:function(e){var n=Rn(on),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},sS=typeof WeakMap=="function"?WeakMap:Map,De=0,ke=null,me=null,xe=0,Ue=0,jn=null,Ea=!1,qs=!1,rf=!1,Zi=0,Ze=0,Ta=0,cs=0,of=0,si=0,Ys=0,oo=null,Bn=null,lf=!1,cf=0,wl=1/0,Dl=null,ba=null,Tn=0,Aa=null,Zs=null,js=0,uf=0,ff=null,n_=null,lo=0,hf=null;function Kn(){if((De&2)!==0&&xe!==0)return xe&-xe;if(P.T!==null){var e=zs;return e!==0?e:Sf()}return Me()}function i_(){si===0&&(si=(xe&536870912)===0||Ae?k():536870912);var e=ai.current;return e!==null&&(e.flags|=32),si}function Qn(e,n,a){(e===ke&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)&&(Ks(e,0),Ra(e,xe,si,!1)),zt(e,a),((De&2)===0||e!==ke)&&(e===ke&&((De&2)===0&&(cs|=a),Ze===4&&Ra(e,xe,si,!1)),Ti(e))}function a_(e,n,a){if((De&6)!==0)throw Error(s(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||Rt(e,n),u=o?lS(e,n):mf(e,n,!0),f=o;do{if(u===0){qs&&!o&&Ra(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!rS(a)){u=mf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var b=e;u=oo;var O=b.current.memoizedState.isDehydrated;if(O&&(Ks(b,x).flags|=256),x=mf(b,x,!1),x!==2){if(rf&&!O){b.errorRecoveryDisabledLanes|=f,cs|=f,u=4;break t}f=Bn,Bn=u,f!==null&&(Bn===null?Bn=f:Bn.push.apply(Bn,f))}u=x}if(f=!1,u!==2)continue}}if(u===1){Ks(e,0),Ra(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ra(o,n,si,!Ea);break t;case 2:Bn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=cf+300-pe(),10<u)){if(Ra(o,n,si,!Ea),Yt(o,0,!0)!==0)break t;o.timeoutHandle=N_(s_.bind(null,o,a,Bn,Dl,lf,n,si,cs,Ys,Ea,f,2,-0,0),u);break t}s_(o,a,Bn,Dl,lf,n,si,cs,Ys,Ea,f,0,-0,0)}}break}while(!0);Ti(e)}function s_(e,n,a,o,u,f,x,b,O,$,ct,mt,nt,it){if(e.timeoutHandle=-1,mt=n.subtreeFlags,(mt&8192||(mt&16785408)===16785408)&&(_o={stylesheets:null,count:0,unsuspend:GS},Jm(n),mt=kS(),mt!==null)){e.cancelPendingCommit=mt(h_.bind(null,e,n,f,a,o,u,x,b,O,ct,1,nt,it)),Ra(e,f,x,!$);return}h_(e,n,f,a,o,u,x,b,O)}function rS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!Wn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ra(e,n,a,o){n&=~of,n&=~cs,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-Ot(u),x=1<<f;o[f]=-1,u&=~x}a!==0&&_t(e,a,n)}function Ul(){return(De&6)===0?(co(0),!1):!0}function df(){if(me!==null){if(Ue===0)var e=me.return;else e=me,Hi=is=null,wu(e),Vs=null,$r=0,e=me;for(;e!==null;)Im(e.alternate,e),e=e.return;me=null}}function Ks(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,TS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),df(),ke=e,me=a=Bi(e.current,null),xe=n,Ue=0,jn=null,Ea=!1,qs=Rt(e,n),rf=!1,Ys=si=of=cs=Ta=Ze=0,Bn=oo=null,lf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Ot(o),f=1<<u;n|=e[u],o&=~f}return Zi=n,$o(),a}function r_(e,n){ue=null,P.H=vl,n===Xr||n===ll?(n=Ep(),Ue=3):n===xp?(n=Ep(),Ue=4):Ue=n===Tm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,jn=n,me===null&&(Ze=1,El(e,ti(n,e.current)))}function o_(){var e=P.H;return P.H=vl,e===null?vl:e}function l_(){var e=P.A;return P.A=aS,e}function pf(){Ze=4,Ea||(xe&4194048)!==xe&&ai.current!==null||(qs=!0),(Ta&134217727)===0&&(cs&134217727)===0||ke===null||Ra(ke,xe,si,!1)}function mf(e,n,a){var o=De;De|=2;var u=o_(),f=l_();(ke!==e||xe!==n)&&(Dl=null,Ks(e,n)),n=!1;var x=Ze;t:do try{if(Ue!==0&&me!==null){var b=me,O=jn;switch(Ue){case 8:df(),x=6;break t;case 3:case 2:case 9:case 6:ai.current===null&&(n=!0);var $=Ue;if(Ue=0,jn=null,Qs(e,b,O,$),a&&qs){x=0;break t}break;default:$=Ue,Ue=0,jn=null,Qs(e,b,O,$)}}oS(),x=Ze;break}catch(ct){r_(e,ct)}while(!0);return n&&e.shellSuspendCounter++,Hi=is=null,De=o,P.H=u,P.A=f,me===null&&(ke=null,xe=0,$o()),x}function oS(){for(;me!==null;)c_(me)}function lS(e,n){var a=De;De|=2;var o=o_(),u=l_();ke!==e||xe!==n?(Dl=null,wl=pe()+500,Ks(e,n)):qs=Rt(e,n);t:do try{if(Ue!==0&&me!==null){n=me;var f=jn;e:switch(Ue){case 1:Ue=0,jn=null,Qs(e,n,f,1);break;case 2:case 9:if(yp(f)){Ue=0,jn=null,u_(n);break}n=function(){Ue!==2&&Ue!==9||ke!==e||(Ue=7),Ti(e)},f.then(n,n);break t;case 3:Ue=7;break t;case 4:Ue=5;break t;case 7:yp(f)?(Ue=0,jn=null,u_(n)):(Ue=0,jn=null,Qs(e,n,f,7));break;case 5:var x=null;switch(me.tag){case 26:x=me.memoizedState;case 5:case 27:var b=me;if(!x||W_(x)){Ue=0,jn=null;var O=b.sibling;if(O!==null)me=O;else{var $=b.return;$!==null?(me=$,Ll($)):me=null}break e}}Ue=0,jn=null,Qs(e,n,f,5);break;case 6:Ue=0,jn=null,Qs(e,n,f,6);break;case 8:df(),Ze=6;break t;default:throw Error(s(462))}}cS();break}catch(ct){r_(e,ct)}while(!0);return Hi=is=null,P.H=o,P.A=u,De=a,me!==null?0:(ke=null,xe=0,$o(),Ze)}function cS(){for(;me!==null&&!xn();)c_(me)}function c_(e){var n=zm(e.alternate,e,Zi);e.memoizedProps=e.pendingProps,n===null?Ll(e):me=n}function u_(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Dm(a,n,n.pendingProps,n.type,void 0,xe);break;case 11:n=Dm(a,n,n.pendingProps,n.type.render,n.ref,xe);break;case 5:wu(n);default:Im(a,n),n=me=fp(n,Zi),n=zm(a,n,Zi)}e.memoizedProps=e.pendingProps,n===null?Ll(e):me=n}function Qs(e,n,a,o){Hi=is=null,wu(n),Vs=null,$r=0;var u=n.return;try{if(J0(e,u,n,a,xe)){Ze=1,El(e,ti(a,e.current)),me=null;return}}catch(f){if(u!==null)throw me=u,f;Ze=1,El(e,ti(a,e.current)),me=null;return}n.flags&32768?(Ae||o===1?e=!0:qs||(xe&536870912)!==0?e=!1:(Ea=e=!0,(o===2||o===9||o===3||o===6)&&(o=ai.current,o!==null&&o.tag===13&&(o.flags|=16384))),f_(n,e)):Ll(n)}function Ll(e){var n=e;do{if((n.flags&32768)!==0){f_(n,Ea);return}e=n.return;var a=tS(n.alternate,n,Zi);if(a!==null){me=a;return}if(n=n.sibling,n!==null){me=n;return}me=n=e}while(n!==null);Ze===0&&(Ze=5)}function f_(e,n){do{var a=eS(e.alternate,e);if(a!==null){a.flags&=32767,me=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){me=e;return}me=e=a}while(e!==null);Ze=6,me=null}function h_(e,n,a,o,u,f,x,b,O){e.cancelPendingCommit=null;do Nl();while(Tn!==0);if((De&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=au,bt(e,a,f,x,b,O),e===ke&&(me=ke=null,xe=0),Zs=n,Aa=e,js=a,uf=f,ff=u,n_=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,dS(ae,function(){return g_(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,u=K.p,K.p=2,x=De,De|=4;try{nS(e,n,a)}finally{De=x,K.p=u,P.T=o}}Tn=1,d_(),p_(),m_()}}function d_(){if(Tn===1){Tn=0;var e=Aa,n=Zs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var o=K.p;K.p=2;var u=De;De|=4;try{jm(n,e);var f=Rf,x=ep(e.containerInfo),b=f.focusedElem,O=f.selectionRange;if(x!==b&&b&&b.ownerDocument&&tp(b.ownerDocument.documentElement,b)){if(O!==null&&$c(b)){var $=O.start,ct=O.end;if(ct===void 0&&(ct=$),"selectionStart"in b)b.selectionStart=$,b.selectionEnd=Math.min(ct,b.value.length);else{var mt=b.ownerDocument||document,nt=mt&&mt.defaultView||window;if(nt.getSelection){var it=nt.getSelection(),ee=b.textContent.length,Jt=Math.min(O.start,ee),ze=O.end===void 0?Jt:Math.min(O.end,ee);!it.extend&&Jt>ze&&(x=ze,ze=Jt,Jt=x);var q=$d(b,Jt),H=$d(b,ze);if(q&&H&&(it.rangeCount!==1||it.anchorNode!==q.node||it.anchorOffset!==q.offset||it.focusNode!==H.node||it.focusOffset!==H.offset)){var Q=mt.createRange();Q.setStart(q.node,q.offset),it.removeAllRanges(),Jt>ze?(it.addRange(Q),it.extend(H.node,H.offset)):(Q.setEnd(H.node,H.offset),it.addRange(Q))}}}}for(mt=[],it=b;it=it.parentNode;)it.nodeType===1&&mt.push({element:it,left:it.scrollLeft,top:it.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<mt.length;b++){var ft=mt[b];ft.element.scrollLeft=ft.left,ft.element.scrollTop=ft.top}}Wl=!!Af,Rf=Af=null}finally{De=u,K.p=o,P.T=a}}e.current=n,Tn=2}}function p_(){if(Tn===2){Tn=0;var e=Aa,n=Zs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var o=K.p;K.p=2;var u=De;De|=4;try{Wm(e,n.alternate,n)}finally{De=u,K.p=o,P.T=a}}Tn=3}}function m_(){if(Tn===4||Tn===3){Tn=0,ye();var e=Aa,n=Zs,a=js,o=n_;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Tn=5:(Tn=0,Zs=Aa=null,__(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(ba=null),we(a),n=n.stateNode,dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(ut,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,u=K.p,K.p=2,P.T=null;try{for(var f=e.onRecoverableError,x=0;x<o.length;x++){var b=o[x];f(b.value,{componentStack:b.stack})}}finally{P.T=n,K.p=u}}(js&3)!==0&&Nl(),Ti(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===hf?lo++:(lo=0,hf=e):lo=0,co(0)}}function __(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Vr(n)))}function Nl(e){return d_(),p_(),m_(),g_()}function g_(){if(Tn!==5)return!1;var e=Aa,n=uf;uf=0;var a=we(js),o=P.T,u=K.p;try{K.p=32>a?32:a,P.T=null,a=ff,ff=null;var f=Aa,x=js;if(Tn=0,Zs=Aa=null,js=0,(De&6)!==0)throw Error(s(331));var b=De;if(De|=4,t_(f.current),Qm(f,f.current,x,a),De=b,co(0,!1),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(ut,f)}catch{}return!0}finally{K.p=u,P.T=o,__(e,n)}}function v_(e,n,a){n=ti(a,n),n=ku(e.stateNode,n,2),e=_a(e,n,2),e!==null&&(zt(e,2),Ti(e))}function Ge(e,n,a){if(e.tag===3)v_(e,e,a);else for(;n!==null;){if(n.tag===3){v_(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ba===null||!ba.has(o))){e=ti(a,e),a=Mm(2),o=_a(n,a,2),o!==null&&(Em(a,o,n,e),zt(o,2),Ti(o));break}}n=n.return}}function _f(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new sS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(rf=!0,u.add(a),e=uS.bind(null,e,n,a),n.then(e,e))}function uS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ke===e&&(xe&a)===a&&(Ze===4||Ze===3&&(xe&62914560)===xe&&300>pe()-cf?(De&2)===0&&Ks(e,0):of|=a,Ys===xe&&(Ys=0)),Ti(e)}function S_(e,n){n===0&&(n=Ut()),e=Ls(e,n),e!==null&&(zt(e,n),Ti(e))}function fS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),S_(e,a)}function hS(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),S_(e,a)}function dS(e,n){return ge(e,n)}var Ol=null,Js=null,gf=!1,Pl=!1,vf=!1,us=0;function Ti(e){e!==Js&&e.next===null&&(Js===null?Ol=Js=e:Js=Js.next=e),Pl=!0,gf||(gf=!0,mS())}function co(e,n){if(!vf&&Pl){vf=!0;do for(var a=!1,o=Ol;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var x=o.suspendedLanes,b=o.pingedLanes;f=(1<<31-Ot(42|e)+1)-1,f&=u&~(x&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,E_(o,f))}else f=xe,f=Yt(o,o===ke?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Rt(o,f)||(a=!0,E_(o,f));o=o.next}while(a);vf=!1}}function pS(){x_()}function x_(){Pl=gf=!1;var e=0;us!==0&&(ES()&&(e=us),us=0);for(var n=pe(),a=null,o=Ol;o!==null;){var u=o.next,f=y_(o,n);f===0?(o.next=null,a===null?Ol=u:a.next=u,u===null&&(Js=a)):(a=o,(e!==0||(f&3)!==0)&&(Pl=!0)),o=u}co(e)}function y_(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var x=31-Ot(f),b=1<<x,O=u[x];O===-1?((b&a)===0||(b&o)!==0)&&(u[x]=ie(b,n)):O<=n&&(e.expiredLanes|=b),f&=~b}if(n=ke,a=xe,a=Yt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&I(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Rt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&I(o),we(a)){case 2:case 8:a=Zt;break;case 32:a=ae;break;case 268435456:a=N;break;default:a=ae}return o=M_.bind(null,e),a=ge(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&I(o),e.callbackPriority=2,e.callbackNode=null,2}function M_(e,n){if(Tn!==0&&Tn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Nl()&&e.callbackNode!==a)return null;var o=xe;return o=Yt(e,e===ke?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(a_(e,o,n),y_(e,pe()),e.callbackNode!=null&&e.callbackNode===a?M_.bind(null,e):null)}function E_(e,n){if(Nl())return null;a_(e,n,!0)}function mS(){bS(function(){(De&6)!==0?ge(ve,pS):x_()})}function Sf(){return us===0&&(us=k()),us}function T_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:qo(""+e)}function b_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function _S(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=T_((u[yn]||null).action),x=o.submitter;x&&(n=(n=x[yn]||null)?T_(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var b=new Ko("action","action",null,o,u);e.push({event:b,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(us!==0){var O=x?b_(u,x):new FormData(u);Iu(a,{pending:!0,data:O,method:u.method,action:f},null,O)}}else typeof f=="function"&&(b.preventDefault(),O=x?b_(u,x):new FormData(u),Iu(a,{pending:!0,data:O,method:u.method,action:f},f,O))},currentTarget:u}]})}}for(var xf=0;xf<iu.length;xf++){var yf=iu[xf],gS=yf.toLowerCase(),vS=yf[0].toUpperCase()+yf.slice(1);ui(gS,"on"+vS)}ui(ap,"onAnimationEnd"),ui(sp,"onAnimationIteration"),ui(rp,"onAnimationStart"),ui("dblclick","onDoubleClick"),ui("focusin","onFocus"),ui("focusout","onBlur"),ui(P0,"onTransitionRun"),ui(z0,"onTransitionStart"),ui(B0,"onTransitionCancel"),ui(op,"onTransitionEnd"),A("onMouseEnter",["mouseout","mouseover"]),A("onMouseLeave",["mouseout","mouseover"]),A("onPointerEnter",["pointerout","pointerover"]),A("onPointerLeave",["pointerout","pointerover"]),Ni("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ni("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ni("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ni("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ni("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ni("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),SS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(uo));function A_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var x=o.length-1;0<=x;x--){var b=o[x],O=b.instance,$=b.currentTarget;if(b=b.listener,O!==f&&u.isPropagationStopped())break t;f=b,u.currentTarget=$;try{f(u)}catch(ct){Ml(ct)}u.currentTarget=null,f=O}else for(x=0;x<o.length;x++){if(b=o[x],O=b.instance,$=b.currentTarget,b=b.listener,O!==f&&u.isPropagationStopped())break t;f=b,u.currentTarget=$;try{f(u)}catch(ct){Ml(ct)}u.currentTarget=null,f=O}}}}function _e(e,n){var a=n[qa];a===void 0&&(a=n[qa]=new Set);var o=e+"__bubble";a.has(o)||(R_(n,e,2,!1),a.add(o))}function Mf(e,n,a){var o=0;n&&(o|=4),R_(a,e,o,n)}var zl="_reactListening"+Math.random().toString(36).slice(2);function Ef(e){if(!e[zl]){e[zl]=!0,Xo.forEach(function(a){a!=="selectionchange"&&(SS.has(a)||Mf(a,!1,e),Mf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[zl]||(n[zl]=!0,Mf("selectionchange",!1,n))}}function R_(e,n,a,o){switch(Q_(n)){case 2:var u=qS;break;case 8:u=YS;break;default:u=Bf}a=u.bind(null,n,a,e),u=void 0,!Xc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Tf(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var b=o.stateNode.containerInfo;if(b===u)break;if(x===4)for(x=o.return;x!==null;){var O=x.tag;if((O===3||O===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;b!==null;){if(x=Ui(b),x===null)return;if(O=x.tag,O===5||O===6||O===26||O===27){o=f=x;continue t}b=b.parentNode}}o=o.return}Od(function(){var $=f,ct=Vc(a),mt=[];t:{var nt=lp.get(e);if(nt!==void 0){var it=Ko,ee=e;switch(e){case"keypress":if(Zo(a)===0)break t;case"keydown":case"keyup":it=d0;break;case"focusin":ee="focus",it=Zc;break;case"focusout":ee="blur",it=Zc;break;case"beforeblur":case"afterblur":it=Zc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":it=Bd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":it=e0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":it=_0;break;case ap:case sp:case rp:it=a0;break;case op:it=v0;break;case"scroll":case"scrollend":it=$v;break;case"wheel":it=x0;break;case"copy":case"cut":case"paste":it=r0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":it=Fd;break;case"toggle":case"beforetoggle":it=M0}var Jt=(n&4)!==0,ze=!Jt&&(e==="scroll"||e==="scrollend"),q=Jt?nt!==null?nt+"Capture":null:nt;Jt=[];for(var H=$,Q;H!==null;){var ft=H;if(Q=ft.stateNode,ft=ft.tag,ft!==5&&ft!==26&&ft!==27||Q===null||q===null||(ft=wr(H,q),ft!=null&&Jt.push(fo(H,ft,Q))),ze)break;H=H.return}0<Jt.length&&(nt=new it(nt,ee,null,a,ct),mt.push({event:nt,listeners:Jt}))}}if((n&7)===0){t:{if(nt=e==="mouseover"||e==="pointerover",it=e==="mouseout"||e==="pointerout",nt&&a!==Gc&&(ee=a.relatedTarget||a.fromElement)&&(Ui(ee)||ee[Nn]))break t;if((it||nt)&&(nt=ct.window===ct?ct:(nt=ct.ownerDocument)?nt.defaultView||nt.parentWindow:window,it?(ee=a.relatedTarget||a.toElement,it=$,ee=ee?Ui(ee):null,ee!==null&&(ze=c(ee),Jt=ee.tag,ee!==ze||Jt!==5&&Jt!==27&&Jt!==6)&&(ee=null)):(it=null,ee=$),it!==ee)){if(Jt=Bd,ft="onMouseLeave",q="onMouseEnter",H="mouse",(e==="pointerout"||e==="pointerover")&&(Jt=Fd,ft="onPointerLeave",q="onPointerEnter",H="pointer"),ze=it==null?nt:Za(it),Q=ee==null?nt:Za(ee),nt=new Jt(ft,H+"leave",it,a,ct),nt.target=ze,nt.relatedTarget=Q,ft=null,Ui(ct)===$&&(Jt=new Jt(q,H+"enter",ee,a,ct),Jt.target=Q,Jt.relatedTarget=ze,ft=Jt),ze=ft,it&&ee)e:{for(Jt=it,q=ee,H=0,Q=Jt;Q;Q=$s(Q))H++;for(Q=0,ft=q;ft;ft=$s(ft))Q++;for(;0<H-Q;)Jt=$s(Jt),H--;for(;0<Q-H;)q=$s(q),Q--;for(;H--;){if(Jt===q||q!==null&&Jt===q.alternate)break e;Jt=$s(Jt),q=$s(q)}Jt=null}else Jt=null;it!==null&&C_(mt,nt,it,Jt,!1),ee!==null&&ze!==null&&C_(mt,ze,ee,Jt,!0)}}t:{if(nt=$?Za($):window,it=nt.nodeName&&nt.nodeName.toLowerCase(),it==="select"||it==="input"&&nt.type==="file")var Ft=Yd;else if(Wd(nt))if(Zd)Ft=L0;else{Ft=D0;var de=w0}else it=nt.nodeName,!it||it.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?$&&Hc($.elementType)&&(Ft=Yd):Ft=U0;if(Ft&&(Ft=Ft(e,$))){qd(mt,Ft,a,ct);break t}de&&de(e,nt,$),e==="focusout"&&$&&nt.type==="number"&&$.memoizedProps.value!=null&&An(nt,"number",nt.value)}switch(de=$?Za($):window,e){case"focusin":(Wd(de)||de.contentEditable==="true")&&(ws=de,tu=$,Br=null);break;case"focusout":Br=tu=ws=null;break;case"mousedown":eu=!0;break;case"contextmenu":case"mouseup":case"dragend":eu=!1,np(mt,a,ct);break;case"selectionchange":if(O0)break;case"keydown":case"keyup":np(mt,a,ct)}var Xt;if(Kc)t:{switch(e){case"compositionstart":var $t="onCompositionStart";break t;case"compositionend":$t="onCompositionEnd";break t;case"compositionupdate":$t="onCompositionUpdate";break t}$t=void 0}else Cs?kd(e,a)&&($t="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&($t="onCompositionStart");$t&&(Hd&&a.locale!=="ko"&&(Cs||$t!=="onCompositionStart"?$t==="onCompositionEnd"&&Cs&&(Xt=Pd()):(ha=ct,Wc="value"in ha?ha.value:ha.textContent,Cs=!0)),de=Bl($,$t),0<de.length&&($t=new Id($t,e,null,a,ct),mt.push({event:$t,listeners:de}),Xt?$t.data=Xt:(Xt=Xd(a),Xt!==null&&($t.data=Xt)))),(Xt=T0?b0(e,a):A0(e,a))&&($t=Bl($,"onBeforeInput"),0<$t.length&&(de=new Id("onBeforeInput","beforeinput",null,a,ct),mt.push({event:de,listeners:$t}),de.data=Xt)),_S(mt,e,$,a,ct)}A_(mt,n)})}function fo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Bl(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=wr(e,a),u!=null&&o.unshift(fo(e,u,f)),u=wr(e,n),u!=null&&o.push(fo(e,u,f))),e.tag===3)return o;e=e.return}return[]}function $s(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function C_(e,n,a,o,u){for(var f=n._reactName,x=[];a!==null&&a!==o;){var b=a,O=b.alternate,$=b.stateNode;if(b=b.tag,O!==null&&O===o)break;b!==5&&b!==26&&b!==27||$===null||(O=$,u?($=wr(a,f),$!=null&&x.unshift(fo(a,$,O))):u||($=wr(a,f),$!=null&&x.push(fo(a,$,O)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var xS=/\r\n?/g,yS=/\u0000|\uFFFD/g;function w_(e){return(typeof e=="string"?e:""+e).replace(xS,`
`).replace(yS,"")}function D_(e,n){return n=w_(n),w_(e)===n}function Il(){}function Pe(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Si(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Si(e,""+o);break;case"className":wt(e,"class",o);break;case"tabIndex":wt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":wt(e,a,o);break;case"style":Ld(e,o,f);break;case"data":if(n!=="object"){wt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=qo(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Pe(e,n,"name",u.name,u,null),Pe(e,n,"formEncType",u.formEncType,u,null),Pe(e,n,"formMethod",u.formMethod,u,null),Pe(e,n,"formTarget",u.formTarget,u,null)):(Pe(e,n,"encType",u.encType,u,null),Pe(e,n,"method",u.method,u,null),Pe(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=qo(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Il);break;case"onScroll":o!=null&&_e("scroll",e);break;case"onScrollEnd":o!=null&&_e("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=qo(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":_e("beforetoggle",e),_e("toggle",e),Tt(e,"popover",o);break;case"xlinkActuate":Nt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Nt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Nt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Nt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Nt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Nt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Tt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Qv.get(a)||a,Tt(e,a,o))}}function bf(e,n,a,o,u,f){switch(a){case"style":Ld(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Si(e,o):(typeof o=="number"||typeof o=="bigint")&&Si(e,""+o);break;case"onScroll":o!=null&&_e("scroll",e);break;case"onScrollEnd":o!=null&&_e("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Il);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Wo.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[yn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Tt(e,a,o)}}}function bn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",e),_e("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Pe(e,n,f,x,a,null)}}u&&Pe(e,n,"srcSet",a.srcSet,a,null),o&&Pe(e,n,"src",a.src,a,null);return;case"input":_e("invalid",e);var b=f=x=u=null,O=null,$=null;for(o in a)if(a.hasOwnProperty(o)){var ct=a[o];if(ct!=null)switch(o){case"name":u=ct;break;case"type":x=ct;break;case"checked":O=ct;break;case"defaultChecked":$=ct;break;case"value":f=ct;break;case"defaultValue":b=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:Pe(e,n,o,ct,a,null)}}He(e,f,b,O,$,x,u,!1),Ne(e);return;case"select":_e("invalid",e),o=x=f=null;for(u in a)if(a.hasOwnProperty(u)&&(b=a[u],b!=null))switch(u){case"value":f=b;break;case"defaultValue":x=b;break;case"multiple":o=b;default:Pe(e,n,u,b,a,null)}n=f,a=x,e.multiple=!!o,n!=null?rn(e,!!o,n,!1):a!=null&&rn(e,!!o,a,!0);return;case"textarea":_e("invalid",e),f=u=o=null;for(x in a)if(a.hasOwnProperty(x)&&(b=a[x],b!=null))switch(x){case"value":o=b;break;case"defaultValue":u=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Pe(e,n,x,b,a,null)}Mn(e,o,u,f),Ne(e);return;case"option":for(O in a)if(a.hasOwnProperty(O)&&(o=a[O],o!=null))switch(O){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Pe(e,n,O,o,a,null)}return;case"dialog":_e("beforetoggle",e),_e("toggle",e),_e("cancel",e),_e("close",e);break;case"iframe":case"object":_e("load",e);break;case"video":case"audio":for(o=0;o<uo.length;o++)_e(uo[o],e);break;case"image":_e("error",e),_e("load",e);break;case"details":_e("toggle",e);break;case"embed":case"source":case"link":_e("error",e),_e("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(o=a[$],o!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Pe(e,n,$,o,a,null)}return;default:if(Hc(n)){for(ct in a)a.hasOwnProperty(ct)&&(o=a[ct],o!==void 0&&bf(e,n,ct,o,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(o=a[b],o!=null&&Pe(e,n,b,o,a,null))}function MS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,x=null,b=null,O=null,$=null,ct=null;for(it in a){var mt=a[it];if(a.hasOwnProperty(it)&&mt!=null)switch(it){case"checked":break;case"value":break;case"defaultValue":O=mt;default:o.hasOwnProperty(it)||Pe(e,n,it,null,o,mt)}}for(var nt in o){var it=o[nt];if(mt=a[nt],o.hasOwnProperty(nt)&&(it!=null||mt!=null))switch(nt){case"type":f=it;break;case"name":u=it;break;case"checked":$=it;break;case"defaultChecked":ct=it;break;case"value":x=it;break;case"defaultValue":b=it;break;case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(s(137,n));break;default:it!==mt&&Pe(e,n,nt,it,o,mt)}}Oi(e,x,b,O,$,ct,f,u);return;case"select":it=x=b=nt=null;for(f in a)if(O=a[f],a.hasOwnProperty(f)&&O!=null)switch(f){case"value":break;case"multiple":it=O;default:o.hasOwnProperty(f)||Pe(e,n,f,null,o,O)}for(u in o)if(f=o[u],O=a[u],o.hasOwnProperty(u)&&(f!=null||O!=null))switch(u){case"value":nt=f;break;case"defaultValue":b=f;break;case"multiple":x=f;default:f!==O&&Pe(e,n,u,f,o,O)}n=b,a=x,o=it,nt!=null?rn(e,!!a,nt,!1):!!o!=!!a&&(n!=null?rn(e,!!a,n,!0):rn(e,!!a,a?[]:"",!1));return;case"textarea":it=nt=null;for(b in a)if(u=a[b],a.hasOwnProperty(b)&&u!=null&&!o.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Pe(e,n,b,null,o,u)}for(x in o)if(u=o[x],f=a[x],o.hasOwnProperty(x)&&(u!=null||f!=null))switch(x){case"value":nt=u;break;case"defaultValue":it=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Pe(e,n,x,u,o,f)}mn(e,nt,it);return;case"option":for(var ee in a)if(nt=a[ee],a.hasOwnProperty(ee)&&nt!=null&&!o.hasOwnProperty(ee))switch(ee){case"selected":e.selected=!1;break;default:Pe(e,n,ee,null,o,nt)}for(O in o)if(nt=o[O],it=a[O],o.hasOwnProperty(O)&&nt!==it&&(nt!=null||it!=null))switch(O){case"selected":e.selected=nt&&typeof nt!="function"&&typeof nt!="symbol";break;default:Pe(e,n,O,nt,o,it)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Jt in a)nt=a[Jt],a.hasOwnProperty(Jt)&&nt!=null&&!o.hasOwnProperty(Jt)&&Pe(e,n,Jt,null,o,nt);for($ in o)if(nt=o[$],it=a[$],o.hasOwnProperty($)&&nt!==it&&(nt!=null||it!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(s(137,n));break;default:Pe(e,n,$,nt,o,it)}return;default:if(Hc(n)){for(var ze in a)nt=a[ze],a.hasOwnProperty(ze)&&nt!==void 0&&!o.hasOwnProperty(ze)&&bf(e,n,ze,void 0,o,nt);for(ct in o)nt=o[ct],it=a[ct],!o.hasOwnProperty(ct)||nt===it||nt===void 0&&it===void 0||bf(e,n,ct,nt,o,it);return}}for(var q in a)nt=a[q],a.hasOwnProperty(q)&&nt!=null&&!o.hasOwnProperty(q)&&Pe(e,n,q,null,o,nt);for(mt in o)nt=o[mt],it=a[mt],!o.hasOwnProperty(mt)||nt===it||nt==null&&it==null||Pe(e,n,mt,nt,o,it)}var Af=null,Rf=null;function Fl(e){return e.nodeType===9?e:e.ownerDocument}function U_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function L_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Cf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var wf=null;function ES(){var e=window.event;return e&&e.type==="popstate"?e===wf?!1:(wf=e,!0):(wf=null,!1)}var N_=typeof setTimeout=="function"?setTimeout:void 0,TS=typeof clearTimeout=="function"?clearTimeout:void 0,O_=typeof Promise=="function"?Promise:void 0,bS=typeof queueMicrotask=="function"?queueMicrotask:typeof O_<"u"?function(e){return O_.resolve(null).then(e).catch(AS)}:N_;function AS(e){setTimeout(function(){throw e})}function Ca(e){return e==="head"}function P_(e,n){var a=n,o=0,u=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<o&&8>o){a=o;var x=e.ownerDocument;if(a&1&&ho(x.documentElement),a&2&&ho(x.body),a&4)for(a=x.head,ho(a),x=a.firstChild;x;){var b=x.nextSibling,O=x.nodeName;x[la]||O==="SCRIPT"||O==="STYLE"||O==="LINK"&&x.rel.toLowerCase()==="stylesheet"||a.removeChild(x),x=b}}if(u===0){e.removeChild(f),yo(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=f}while(a);yo(n)}function Df(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Df(a),ca(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function RS(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[la])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=hi(e.nextSibling),e===null)break}return null}function CS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=hi(e.nextSibling),e===null))return null;return e}function Uf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function wS(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function hi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Lf=null;function z_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function B_(e,n,a){switch(n=Fl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function ho(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ca(e)}var ri=new Map,I_=new Set;function Hl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ji=K.d;K.d={f:DS,r:US,D:LS,C:NS,L:OS,m:PS,X:BS,S:zS,M:IS};function DS(){var e=ji.f(),n=Ul();return e||n}function US(e){var n=Li(e);n!==null&&n.tag===5&&n.type==="form"?am(n):ji.r(e)}var tr=typeof document>"u"?null:document;function F_(e,n,a){var o=tr;if(o&&typeof n=="string"&&n){var u=Ve(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),I_.has(u)||(I_.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),bn(n,"link",e),tn(n),o.head.appendChild(n)))}}function LS(e){ji.D(e),F_("dns-prefetch",e,null)}function NS(e,n){ji.C(e,n),F_("preconnect",e,n)}function OS(e,n,a){ji.L(e,n,a);var o=tr;if(o&&e&&n){var u='link[rel="preload"][as="'+Ve(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ve(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ve(a.imageSizes)+'"]')):u+='[href="'+Ve(e)+'"]';var f=u;switch(n){case"style":f=er(e);break;case"script":f=nr(e)}ri.has(f)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ri.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(po(f))||n==="script"&&o.querySelector(mo(f))||(n=o.createElement("link"),bn(n,"link",e),tn(n),o.head.appendChild(n)))}}function PS(e,n){ji.m(e,n);var a=tr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ve(o)+'"][href="'+Ve(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=nr(e)}if(!ri.has(f)&&(e=_({rel:"modulepreload",href:e},n),ri.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(mo(f)))return}o=a.createElement("link"),bn(o,"link",e),tn(o),a.head.appendChild(o)}}}function zS(e,n,a){ji.S(e,n,a);var o=tr;if(o&&e){var u=ua(o).hoistableStyles,f=er(e);n=n||"default";var x=u.get(f);if(!x){var b={loading:0,preload:null};if(x=o.querySelector(po(f)))b.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ri.get(f))&&Nf(e,a);var O=x=o.createElement("link");tn(O),bn(O,"link",e),O._p=new Promise(function($,ct){O.onload=$,O.onerror=ct}),O.addEventListener("load",function(){b.loading|=1}),O.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Gl(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:b},u.set(f,x)}}}function BS(e,n){ji.X(e,n);var a=tr;if(a&&e){var o=ua(a).hoistableScripts,u=nr(e),f=o.get(u);f||(f=a.querySelector(mo(u)),f||(e=_({src:e,async:!0},n),(n=ri.get(u))&&Of(e,n),f=a.createElement("script"),tn(f),bn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function IS(e,n){ji.M(e,n);var a=tr;if(a&&e){var o=ua(a).hoistableScripts,u=nr(e),f=o.get(u);f||(f=a.querySelector(mo(u)),f||(e=_({src:e,async:!0,type:"module"},n),(n=ri.get(u))&&Of(e,n),f=a.createElement("script"),tn(f),bn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function H_(e,n,a,o){var u=(u=yt.current)?Hl(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=er(a.href),a=ua(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=er(a.href);var f=ua(u).hoistableStyles,x=f.get(e);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,x),(f=u.querySelector(po(e)))&&!f._p&&(x.instance=f,x.state.loading=5),ri.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ri.set(e,a),f||FS(u,e,a,x.state))),n&&o===null)throw Error(s(528,""));return x}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=nr(a),a=ua(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function er(e){return'href="'+Ve(e)+'"'}function po(e){return'link[rel="stylesheet"]['+e+"]"}function G_(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function FS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),bn(n,"link",a),tn(n),e.head.appendChild(n))}function nr(e){return'[src="'+Ve(e)+'"]'}function mo(e){return"script[async]"+e}function V_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Ve(a.href)+'"]');if(o)return n.instance=o,tn(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),tn(o),bn(o,"style",u),Gl(o,a.precedence,e),n.instance=o;case"stylesheet":u=er(a.href);var f=e.querySelector(po(u));if(f)return n.state.loading|=4,n.instance=f,tn(f),f;o=G_(a),(u=ri.get(u))&&Nf(o,u),f=(e.ownerDocument||e).createElement("link"),tn(f);var x=f;return x._p=new Promise(function(b,O){x.onload=b,x.onerror=O}),bn(f,"link",o),n.state.loading|=4,Gl(f,a.precedence,e),n.instance=f;case"script":return f=nr(a.src),(u=e.querySelector(mo(f)))?(n.instance=u,tn(u),u):(o=a,(u=ri.get(f))&&(o=_({},a),Of(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),tn(u),bn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Gl(o,a.precedence,e));return n.instance}function Gl(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,x=0;x<o.length;x++){var b=o[x];if(b.dataset.precedence===n)f=b;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Nf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Of(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Vl=null;function k_(e,n,a){if(Vl===null){var o=new Map,u=Vl=new Map;u.set(a,o)}else u=Vl,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[la]||f[sn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=e+x;var b=o.get(x);b?b.push(f):o.set(x,[f])}}return o}function X_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function HS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function W_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var _o=null;function GS(){}function VS(e,n,a){if(_o===null)throw Error(s(475));var o=_o;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=er(a.href),f=e.querySelector(po(u));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=kl.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=f,tn(f);return}f=e.ownerDocument||e,a=G_(a),(u=ri.get(u))&&Nf(a,u),f=f.createElement("link"),tn(f);var x=f;x._p=new Promise(function(b,O){x.onload=b,x.onerror=O}),bn(f,"link",a),n.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=kl.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function kS(){if(_o===null)throw Error(s(475));var e=_o;return e.stylesheets&&e.count===0&&Pf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Pf(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function kl(){if(this.count--,this.count===0){if(this.stylesheets)Pf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Xl=null;function Pf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Xl=new Map,n.forEach(XS,e),Xl=null,kl.call(e))}function XS(e,n){if(!(n.state.loading&4)){var a=Xl.get(e);if(a)var o=a.get(null);else{a=new Map,Xl.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var x=u[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}u=n.instance,x=u.getAttribute("data-precedence"),f=a.get(x)||o,f===o&&a.set(null,u),a.set(x,u),this.count++,o=kl.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var go={$$typeof:L,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function WS(e,n,a,o,u,f,x,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Et(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Et(0),this.hiddenUpdates=Et(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function q_(e,n,a,o,u,f,x,b,O,$,ct,mt){return e=new WS(e,n,a,x,b,O,$,mt),n=1,f===!0&&(n|=24),f=qn(3,null,null,n),e.current=f,f.stateNode=e,n=mu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Su(f),e}function Y_(e){return e?(e=Ns,e):Ns}function Z_(e,n,a,o,u,f){u=Y_(u),o.context===null?o.context=u:o.pendingContext=u,o=ma(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=_a(e,o,n),a!==null&&(Qn(a,e,n),qr(a,e,n))}function j_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function zf(e,n){j_(e,n),(e=e.alternate)&&j_(e,n)}function K_(e){if(e.tag===13){var n=Ls(e,67108864);n!==null&&Qn(n,e,67108864),zf(e,67108864)}}var Wl=!0;function qS(e,n,a,o){var u=P.T;P.T=null;var f=K.p;try{K.p=2,Bf(e,n,a,o)}finally{K.p=f,P.T=u}}function YS(e,n,a,o){var u=P.T;P.T=null;var f=K.p;try{K.p=8,Bf(e,n,a,o)}finally{K.p=f,P.T=u}}function Bf(e,n,a,o){if(Wl){var u=If(o);if(u===null)Tf(e,n,o,ql,a),J_(e,o);else if(jS(u,e,n,a,o))o.stopPropagation();else if(J_(e,o),n&4&&-1<ZS.indexOf(e)){for(;u!==null;){var f=Li(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=qt(f.pendingLanes);if(x!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;x;){var O=1<<31-Ot(x);b.entanglements[1]|=O,x&=~O}Ti(f),(De&6)===0&&(wl=pe()+500,co(0))}}break;case 13:b=Ls(f,2),b!==null&&Qn(b,f,2),Ul(),zf(f,2)}if(f=If(o),f===null&&Tf(e,n,o,ql,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Tf(e,n,o,null,a)}}function If(e){return e=Vc(e),Ff(e)}var ql=null;function Ff(e){if(ql=null,e=Ui(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return ql=e,null}function Q_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Gt()){case ve:return 2;case Zt:return 8;case ae:case Ke:return 32;case N:return 268435456;default:return 32}default:return 32}}var Hf=!1,wa=null,Da=null,Ua=null,vo=new Map,So=new Map,La=[],ZS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function J_(e,n){switch(e){case"focusin":case"focusout":wa=null;break;case"dragenter":case"dragleave":Da=null;break;case"mouseover":case"mouseout":Ua=null;break;case"pointerover":case"pointerout":vo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":So.delete(n.pointerId)}}function xo(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Li(n),n!==null&&K_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function jS(e,n,a,o,u){switch(n){case"focusin":return wa=xo(wa,e,n,a,o,u),!0;case"dragenter":return Da=xo(Da,e,n,a,o,u),!0;case"mouseover":return Ua=xo(Ua,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return vo.set(f,xo(vo.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,So.set(f,xo(So.get(f)||null,e,n,a,o,u)),!0}return!1}function $_(e){var n=Ui(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Xn(e.priority,function(){if(a.tag===13){var o=Kn();o=ne(o);var u=Ls(a,o);u!==null&&Qn(u,a,o),zf(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=If(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Gc=o,a.target.dispatchEvent(o),Gc=null}else return n=Li(a),n!==null&&K_(n),e.blockedOn=a,!1;n.shift()}return!0}function tg(e,n,a){Yl(e)&&a.delete(n)}function KS(){Hf=!1,wa!==null&&Yl(wa)&&(wa=null),Da!==null&&Yl(Da)&&(Da=null),Ua!==null&&Yl(Ua)&&(Ua=null),vo.forEach(tg),So.forEach(tg)}function Zl(e,n){e.blockedOn===n&&(e.blockedOn=null,Hf||(Hf=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,KS)))}var jl=null;function eg(e){jl!==e&&(jl=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){jl===e&&(jl=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Ff(o||a)===null)continue;break}var f=Li(a);f!==null&&(e.splice(n,3),n-=3,Iu(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function yo(e){function n(O){return Zl(O,e)}wa!==null&&Zl(wa,e),Da!==null&&Zl(Da,e),Ua!==null&&Zl(Ua,e),vo.forEach(n),So.forEach(n);for(var a=0;a<La.length;a++){var o=La[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<La.length&&(a=La[0],a.blockedOn===null);)$_(a),a.blockedOn===null&&La.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],x=u[yn]||null;if(typeof f=="function")x||eg(a);else if(x){var b=null;if(f&&f.hasAttribute("formAction")){if(u=f,x=f[yn]||null)b=x.formAction;else if(Ff(u)!==null)continue}else b=x.action;typeof b=="function"?a[o+1]=b:(a.splice(o,3),o-=3),eg(a)}}}function Gf(e){this._internalRoot=e}Kl.prototype.render=Gf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=Kn();Z_(a,o,e,n,null,null)},Kl.prototype.unmount=Gf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Z_(e.current,2,null,e,null,null),Ul(),n[Nn]=null}};function Kl(e){this._internalRoot=e}Kl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Me();e={blockedOn:null,target:e,priority:n};for(var a=0;a<La.length&&n!==0&&n<La[a].priority;a++);La.splice(a,0,e),a===0&&$_(e)}};var ng=t.version;if(ng!=="19.1.0")throw Error(s(527,ng,"19.1.0"));K.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var QS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ql.isDisabled&&Ql.supportsFiber)try{ut=Ql.inject(QS),dt=Ql}catch{}}return Eo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=vm,f=Sm,x=xm,b=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(b=n.unstable_transitionCallbacks)),n=q_(e,1,!1,null,null,a,o,u,f,x,b,null),e[Nn]=n.current,Ef(e),new Gf(n)},Eo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=vm,x=Sm,b=xm,O=null,$=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(O=a.unstable_transitionCallbacks),a.formState!==void 0&&($=a.formState)),n=q_(e,1,!0,n,a??null,o,u,f,x,b,O,$),n.context=Y_(null),a=n.current,o=Kn(),o=ne(o),u=ma(o),u.callback=null,_a(a,u,o),a=o,n.current.lanes=a,zt(n,a),Ti(n),e[Nn]=n.current,Ef(e),new Kl(n)},Eo.version="19.1.0",Eo}var dg;function lx(){if(dg)return Xf.exports;dg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Xf.exports=ox(),Xf.exports}var cx=lx();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gd="178",Sr={ROTATE:0,DOLLY:1,PAN:2},gr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ux=0,pg=1,fx=2,vv=1,hx=2,ea=3,Xa=0,Hn=1,Ai=2,Va=0,xr=1,mg=2,_g=3,gg=4,dx=5,vs=100,px=101,mx=102,_x=103,gx=104,vx=200,Sx=201,xx=202,yx=203,wh=204,Dh=205,Mx=206,Ex=207,Tx=208,bx=209,Ax=210,Rx=211,Cx=212,wx=213,Dx=214,Uh=0,Lh=1,Nh=2,Er=3,Oh=4,Ph=5,zh=6,Bh=7,Sv=0,Ux=1,Lx=2,ka=0,Nx=1,Ox=2,Px=3,zx=4,Bx=5,Ix=6,Fx=7,xv=300,Tr=301,br=302,Ih=303,Fh=304,zc=306,Hh=1e3,xs=1001,Gh=1002,vi=1003,Hx=1004,Jl=1005,Ri=1006,Zf=1007,ys=1008,sa=1009,yv=1010,Mv=1011,No=1012,vd=1013,Ms=1014,na=1015,Bo=1016,Sd=1017,xd=1018,Oo=1020,Ev=35902,Tv=1021,bv=1022,gi=1023,Po=1026,zo=1027,Av=1028,yd=1029,Rv=1030,Md=1031,Ed=1033,Tc=33776,bc=33777,Ac=33778,Rc=33779,Vh=35840,kh=35841,Xh=35842,Wh=35843,qh=36196,Yh=37492,Zh=37496,jh=37808,Kh=37809,Qh=37810,Jh=37811,$h=37812,td=37813,ed=37814,nd=37815,id=37816,ad=37817,sd=37818,rd=37819,od=37820,ld=37821,Cc=36492,cd=36494,ud=36495,Cv=36283,fd=36284,hd=36285,dd=36286,Gx=3200,Vx=3201,kx=0,Xx=1,Ga="",li="srgb",Ar="srgb-linear",Uc="linear",Be="srgb",ir=7680,vg=519,Wx=512,qx=513,Yx=514,wv=515,Zx=516,jx=517,Kx=518,Qx=519,Sg=35044,xg="300 es",ia=2e3,Lc=2001;class bs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wc=Math.PI/180,pd=180/Math.PI;function Io(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]+"-"+wn[t&255]+wn[t>>8&255]+"-"+wn[t>>16&15|64]+wn[t>>24&255]+"-"+wn[i&63|128]+wn[i>>8&255]+"-"+wn[i>>16&255]+wn[i>>24&255]+wn[s&255]+wn[s>>8&255]+wn[s>>16&255]+wn[s>>24&255]).toLowerCase()}function fe(r,t,i){return Math.max(t,Math.min(i,r))}function Jx(r,t){return(r%t+t)%t}function jf(r,t,i){return(1-i)*r+i*t}function To(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function In(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const $x={DEG2RAD:wc};class Wt{constructor(t=0,i=0){Wt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=fe(this.x,t.x,i.x),this.y=fe(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=fe(this.x,t,i),this.y=fe(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(fe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(fe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Es{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],_=s[l+2],v=s[l+3];const S=c[h+0],y=c[h+1],T=c[h+2],R=c[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=_,t[i+3]=v;return}if(d===1){t[i+0]=S,t[i+1]=y,t[i+2]=T,t[i+3]=R;return}if(v!==R||m!==S||p!==y||_!==T){let M=1-d;const g=m*S+p*y+_*T+v*R,B=g>=0?1:-1,L=1-g*g;if(L>Number.EPSILON){const G=Math.sqrt(L),V=Math.atan2(G,g*B);M=Math.sin(M*V)/G,d=Math.sin(d*V)/G}const w=d*B;if(m=m*M+S*w,p=p*M+y*w,_=_*M+T*w,v=v*M+R*w,M===1-d){const G=1/Math.sqrt(m*m+p*p+_*_+v*v);m*=G,p*=G,_*=G,v*=G}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=v}static multiplyQuaternionsFlat(t,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],_=s[l+3],v=c[h],S=c[h+1],y=c[h+2],T=c[h+3];return t[i]=d*T+_*v+m*y-p*S,t[i+1]=m*T+_*S+p*v-d*y,t[i+2]=p*T+_*y+d*S-m*v,t[i+3]=_*T-d*v-m*S-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),_=d(l/2),v=d(c/2),S=m(s/2),y=m(l/2),T=m(c/2);switch(h){case"XYZ":this._x=S*_*v+p*y*T,this._y=p*y*v-S*_*T,this._z=p*_*T+S*y*v,this._w=p*_*v-S*y*T;break;case"YXZ":this._x=S*_*v+p*y*T,this._y=p*y*v-S*_*T,this._z=p*_*T-S*y*v,this._w=p*_*v+S*y*T;break;case"ZXY":this._x=S*_*v-p*y*T,this._y=p*y*v+S*_*T,this._z=p*_*T+S*y*v,this._w=p*_*v-S*y*T;break;case"ZYX":this._x=S*_*v-p*y*T,this._y=p*y*v+S*_*T,this._z=p*_*T-S*y*v,this._w=p*_*v+S*y*T;break;case"YZX":this._x=S*_*v+p*y*T,this._y=p*y*v+S*_*T,this._z=p*_*T-S*y*v,this._w=p*_*v-S*y*T;break;case"XZY":this._x=S*_*v-p*y*T,this._y=p*y*v-S*_*T,this._z=p*_*T+S*y*v,this._w=p*_*v+S*y*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],_=i[6],v=i[10],S=s+d+v;if(S>0){const y=.5/Math.sqrt(S+1);this._w=.25/y,this._x=(_-m)*y,this._y=(c-p)*y,this._z=(h-l)*y}else if(s>d&&s>v){const y=2*Math.sqrt(1+s-d-v);this._w=(_-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(c+p)/y}else if(d>v){const y=2*Math.sqrt(1+d-s-v);this._w=(c-p)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+_)/y}else{const y=2*Math.sqrt(1+v-s-d);this._w=(h-l)/y,this._x=(c+p)/y,this._y=(m+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fe(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+h*d+l*p-c*m,this._y=l*_+h*m+c*d-s*p,this._z=c*_+h*p+s*m-l*d,this._w=h*_-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,c=this._z,h=this._w;let d=h*t._w+s*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=s,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const y=1-i;return this._w=y*h+i*this._w,this._x=y*s+i*this._x,this._y=y*l+i*this._y,this._z=y*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),_=Math.atan2(p,d),v=Math.sin((1-i)*_)/p,S=Math.sin(i*_)/p;return this._w=h*v+this._w*S,this._x=s*v+this._x*S,this._y=l*v+this._y*S,this._z=c*v+this._z*S,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(t=0,i=0,s=0){X.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(yg.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(yg.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),_=2*(d*i-c*l),v=2*(c*s-h*i);return this.x=i+m*p+h*v-d*_,this.y=s+m*_+d*p-c*v,this.z=l+m*v+c*_-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=fe(this.x,t.x,i.x),this.y=fe(this.y,t.y,i.y),this.z=fe(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=fe(this.x,t,i),this.y=fe(this.y,t,i),this.z=fe(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(fe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Kf.copy(this).projectOnVector(t),this.sub(Kf)}reflect(t){return this.sub(Kf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(fe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kf=new X,yg=new Es;class re{constructor(t,i,s,l,c,h,d,m,p){re.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p)}set(t,i,s,l,c,h,d,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],_=s[4],v=s[7],S=s[2],y=s[5],T=s[8],R=l[0],M=l[3],g=l[6],B=l[1],L=l[4],w=l[7],G=l[2],V=l[5],z=l[8];return c[0]=h*R+d*B+m*G,c[3]=h*M+d*L+m*V,c[6]=h*g+d*w+m*z,c[1]=p*R+_*B+v*G,c[4]=p*M+_*L+v*V,c[7]=p*g+_*w+v*z,c[2]=S*R+y*B+T*G,c[5]=S*M+y*L+T*V,c[8]=S*g+y*w+T*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8];return i*h*_-i*d*p-s*c*_+s*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],v=_*h-d*p,S=d*m-_*c,y=p*c-h*m,T=i*v+s*S+l*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/T;return t[0]=v*R,t[1]=(l*p-_*s)*R,t[2]=(d*s-l*h)*R,t[3]=S*R,t[4]=(_*i-l*m)*R,t[5]=(l*c-d*i)*R,t[6]=y*R,t[7]=(s*m-p*i)*R,t[8]=(h*i-s*c)*R,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Qf.makeScale(t,i)),this}rotate(t){return this.premultiply(Qf.makeRotation(-t)),this}translate(t,i){return this.premultiply(Qf.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Qf=new re;function Dv(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Nc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ty(){const r=Nc("canvas");return r.style.display="block",r}const Mg={};function yr(r){r in Mg||(Mg[r]=!0,console.warn(r))}function ey(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}function ny(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function iy(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Eg=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tg=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ay(){const r={enabled:!0,workingColorSpace:Ar,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Be&&(l.r=aa(l.r),l.g=aa(l.g),l.b=aa(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Be&&(l.r=Mr(l.r),l.g=Mr(l.g),l.b=Mr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ga?Uc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return yr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return yr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Ar]:{primaries:t,whitePoint:s,transfer:Uc,toXYZ:Eg,fromXYZ:Tg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:li},outputColorSpaceConfig:{drawingBufferColorSpace:li}},[li]:{primaries:t,whitePoint:s,transfer:Be,toXYZ:Eg,fromXYZ:Tg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:li}}}),r}const Te=ay();function aa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Mr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ar;class sy{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{ar===void 0&&(ar=Nc("canvas")),ar.width=t.width,ar.height=t.height;const l=ar.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=ar}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Nc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=aa(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(aa(i[s]/255)*255):i[s]=aa(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ry=0;class Td{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ry++}),this.uuid=Io(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Jf(l[h].image)):c.push(Jf(l[h]))}else c=Jf(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Jf(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?sy.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let oy=0;const $f=new X;class Gn extends bs{constructor(t=Gn.DEFAULT_IMAGE,i=Gn.DEFAULT_MAPPING,s=xs,l=xs,c=Ri,h=ys,d=gi,m=sa,p=Gn.DEFAULT_ANISOTROPY,_=Ga){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oy++}),this.uuid=Io(),this.name="",this.source=new Td(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize($f).x}get height(){return this.source.getSize($f).y}get depth(){return this.source.getSize($f).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Hh:t.x=t.x-Math.floor(t.x);break;case xs:t.x=t.x<0?0:1;break;case Gh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Hh:t.y=t.y-Math.floor(t.y);break;case xs:t.y=t.y<0?0:1;break;case Gh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=xv;Gn.DEFAULT_ANISOTROPY=1;class $e{constructor(t=0,i=0,s=0,l=1){$e.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],_=m[4],v=m[8],S=m[1],y=m[5],T=m[9],R=m[2],M=m[6],g=m[10];if(Math.abs(_-S)<.01&&Math.abs(v-R)<.01&&Math.abs(T-M)<.01){if(Math.abs(_+S)<.1&&Math.abs(v+R)<.1&&Math.abs(T+M)<.1&&Math.abs(p+y+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,w=(y+1)/2,G=(g+1)/2,V=(_+S)/4,z=(v+R)/4,W=(T+M)/4;return L>w&&L>G?L<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(L),l=V/s,c=z/s):w>G?w<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),s=V/l,c=W/l):G<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(G),s=z/c,l=W/c),this.set(s,l,c,i),this}let B=Math.sqrt((M-T)*(M-T)+(v-R)*(v-R)+(S-_)*(S-_));return Math.abs(B)<.001&&(B=1),this.x=(M-T)/B,this.y=(v-R)/B,this.z=(S-_)/B,this.w=Math.acos((p+y+g-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=fe(this.x,t.x,i.x),this.y=fe(this.y,t.y,i.y),this.z=fe(this.z,t.z,i.z),this.w=fe(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=fe(this.x,t,i),this.y=fe(this.y,t,i),this.z=fe(this.z,t,i),this.w=fe(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(fe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ly extends bs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new $e(0,0,t,i),this.scissorTest=!1,this.viewport=new $e(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new Gn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Ri,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Td(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ts extends ly{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Uv extends Gn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=vi,this.minFilter=vi,this.wrapR=xs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class cy extends Gn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=vi,this.minFilter=vi,this.wrapR=xs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fo{constructor(t=new X(1/0,1/0,1/0),i=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(di.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(di.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=di.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,di):di.fromBufferAttribute(c,h),di.applyMatrix4(t.matrixWorld),this.expandByPoint(di);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$l.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),$l.copy(s.boundingBox)),$l.applyMatrix4(t.matrixWorld),this.union($l)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,di),di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(bo),tc.subVectors(this.max,bo),sr.subVectors(t.a,bo),rr.subVectors(t.b,bo),or.subVectors(t.c,bo),Oa.subVectors(rr,sr),Pa.subVectors(or,rr),fs.subVectors(sr,or);let i=[0,-Oa.z,Oa.y,0,-Pa.z,Pa.y,0,-fs.z,fs.y,Oa.z,0,-Oa.x,Pa.z,0,-Pa.x,fs.z,0,-fs.x,-Oa.y,Oa.x,0,-Pa.y,Pa.x,0,-fs.y,fs.x,0];return!th(i,sr,rr,or,tc)||(i=[1,0,0,0,1,0,0,0,1],!th(i,sr,rr,or,tc))?!1:(ec.crossVectors(Oa,Pa),i=[ec.x,ec.y,ec.z],th(i,sr,rr,or,tc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(di).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ki),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ki=[new X,new X,new X,new X,new X,new X,new X,new X],di=new X,$l=new Fo,sr=new X,rr=new X,or=new X,Oa=new X,Pa=new X,fs=new X,bo=new X,tc=new X,ec=new X,hs=new X;function th(r,t,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){hs.fromArray(r,c);const d=l.x*Math.abs(hs.x)+l.y*Math.abs(hs.y)+l.z*Math.abs(hs.z),m=t.dot(hs),p=i.dot(hs),_=s.dot(hs);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const uy=new Fo,Ao=new X,eh=new X;class Bc{constructor(t=new X,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):uy.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ao.subVectors(t,this.center);const i=Ao.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Ao,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(eh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ao.copy(t.center).add(eh)),this.expandByPoint(Ao.copy(t.center).sub(eh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Qi=new X,nh=new X,nc=new X,za=new X,ih=new X,ic=new X,ah=new X;class bd{constructor(t=new X,i=new X(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qi)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Qi.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Qi.copy(this.origin).addScaledVector(this.direction,i),Qi.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){nh.copy(t).add(i).multiplyScalar(.5),nc.copy(i).sub(t).normalize(),za.copy(this.origin).sub(nh);const c=t.distanceTo(i)*.5,h=-this.direction.dot(nc),d=za.dot(this.direction),m=-za.dot(nc),p=za.lengthSq(),_=Math.abs(1-h*h);let v,S,y,T;if(_>0)if(v=h*m-d,S=h*d-m,T=c*_,v>=0)if(S>=-T)if(S<=T){const R=1/_;v*=R,S*=R,y=v*(v+h*S+2*d)+S*(h*v+S+2*m)+p}else S=c,v=Math.max(0,-(h*S+d)),y=-v*v+S*(S+2*m)+p;else S=-c,v=Math.max(0,-(h*S+d)),y=-v*v+S*(S+2*m)+p;else S<=-T?(v=Math.max(0,-(-h*c+d)),S=v>0?-c:Math.min(Math.max(-c,-m),c),y=-v*v+S*(S+2*m)+p):S<=T?(v=0,S=Math.min(Math.max(-c,-m),c),y=S*(S+2*m)+p):(v=Math.max(0,-(h*c+d)),S=v>0?c:Math.min(Math.max(-c,-m),c),y=-v*v+S*(S+2*m)+p);else S=h>0?-c:c,v=Math.max(0,-(h*S+d)),y=-v*v+S*(S+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(nh).addScaledVector(nc,S),y}intersectSphere(t,i){Qi.subVectors(t.center,this.origin);const s=Qi.dot(this.direction),l=Qi.dot(Qi)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,d,m;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,S=this.origin;return p>=0?(s=(t.min.x-S.x)*p,l=(t.max.x-S.x)*p):(s=(t.max.x-S.x)*p,l=(t.min.x-S.x)*p),_>=0?(c=(t.min.y-S.y)*_,h=(t.max.y-S.y)*_):(c=(t.max.y-S.y)*_,h=(t.min.y-S.y)*_),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),v>=0?(d=(t.min.z-S.z)*v,m=(t.max.z-S.z)*v):(d=(t.max.z-S.z)*v,m=(t.min.z-S.z)*v),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Qi)!==null}intersectTriangle(t,i,s,l,c){ih.subVectors(i,t),ic.subVectors(s,t),ah.crossVectors(ih,ic);let h=this.direction.dot(ah),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;za.subVectors(this.origin,t);const m=d*this.direction.dot(ic.crossVectors(za,ic));if(m<0)return null;const p=d*this.direction.dot(ih.cross(za));if(p<0||m+p>h)return null;const _=-d*za.dot(ah);return _<0?null:this.at(_/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(t,i,s,l,c,h,d,m,p,_,v,S,y,T,R,M){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p,_,v,S,y,T,R,M)}set(t,i,s,l,c,h,d,m,p,_,v,S,y,T,R,M){const g=this.elements;return g[0]=t,g[4]=i,g[8]=s,g[12]=l,g[1]=c,g[5]=h,g[9]=d,g[13]=m,g[2]=p,g[6]=_,g[10]=v,g[14]=S,g[3]=y,g[7]=T,g[11]=R,g[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/lr.setFromMatrixColumn(t,0).length(),c=1/lr.setFromMatrixColumn(t,1).length(),h=1/lr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const S=h*_,y=h*v,T=d*_,R=d*v;i[0]=m*_,i[4]=-m*v,i[8]=p,i[1]=y+T*p,i[5]=S-R*p,i[9]=-d*m,i[2]=R-S*p,i[6]=T+y*p,i[10]=h*m}else if(t.order==="YXZ"){const S=m*_,y=m*v,T=p*_,R=p*v;i[0]=S+R*d,i[4]=T*d-y,i[8]=h*p,i[1]=h*v,i[5]=h*_,i[9]=-d,i[2]=y*d-T,i[6]=R+S*d,i[10]=h*m}else if(t.order==="ZXY"){const S=m*_,y=m*v,T=p*_,R=p*v;i[0]=S-R*d,i[4]=-h*v,i[8]=T+y*d,i[1]=y+T*d,i[5]=h*_,i[9]=R-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const S=h*_,y=h*v,T=d*_,R=d*v;i[0]=m*_,i[4]=T*p-y,i[8]=S*p+R,i[1]=m*v,i[5]=R*p+S,i[9]=y*p-T,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const S=h*m,y=h*p,T=d*m,R=d*p;i[0]=m*_,i[4]=R-S*v,i[8]=T*v+y,i[1]=v,i[5]=h*_,i[9]=-d*_,i[2]=-p*_,i[6]=y*v+T,i[10]=S-R*v}else if(t.order==="XZY"){const S=h*m,y=h*p,T=d*m,R=d*p;i[0]=m*_,i[4]=-v,i[8]=p*_,i[1]=S*v+R,i[5]=h*_,i[9]=y*v-T,i[2]=T*v-y,i[6]=d*_,i[10]=R*v+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fy,t,hy)}lookAt(t,i,s){const l=this.elements;return Jn.subVectors(t,i),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Ba.crossVectors(s,Jn),Ba.lengthSq()===0&&(Math.abs(s.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Ba.crossVectors(s,Jn)),Ba.normalize(),ac.crossVectors(Jn,Ba),l[0]=Ba.x,l[4]=ac.x,l[8]=Jn.x,l[1]=Ba.y,l[5]=ac.y,l[9]=Jn.y,l[2]=Ba.z,l[6]=ac.z,l[10]=Jn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],_=s[1],v=s[5],S=s[9],y=s[13],T=s[2],R=s[6],M=s[10],g=s[14],B=s[3],L=s[7],w=s[11],G=s[15],V=l[0],z=l[4],W=l[8],D=l[12],C=l[1],F=l[5],ot=l[9],rt=l[13],gt=l[2],ht=l[6],P=l[10],K=l[14],Z=l[3],Mt=l[7],U=l[11],tt=l[15];return c[0]=h*V+d*C+m*gt+p*Z,c[4]=h*z+d*F+m*ht+p*Mt,c[8]=h*W+d*ot+m*P+p*U,c[12]=h*D+d*rt+m*K+p*tt,c[1]=_*V+v*C+S*gt+y*Z,c[5]=_*z+v*F+S*ht+y*Mt,c[9]=_*W+v*ot+S*P+y*U,c[13]=_*D+v*rt+S*K+y*tt,c[2]=T*V+R*C+M*gt+g*Z,c[6]=T*z+R*F+M*ht+g*Mt,c[10]=T*W+R*ot+M*P+g*U,c[14]=T*D+R*rt+M*K+g*tt,c[3]=B*V+L*C+w*gt+G*Z,c[7]=B*z+L*F+w*ht+G*Mt,c[11]=B*W+L*ot+w*P+G*U,c[15]=B*D+L*rt+w*K+G*tt,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],_=t[2],v=t[6],S=t[10],y=t[14],T=t[3],R=t[7],M=t[11],g=t[15];return T*(+c*m*v-l*p*v-c*d*S+s*p*S+l*d*y-s*m*y)+R*(+i*m*y-i*p*S+c*h*S-l*h*y+l*p*_-c*m*_)+M*(+i*p*v-i*d*y-c*h*v+s*h*y+c*d*_-s*p*_)+g*(-l*d*_-i*m*v+i*d*S+l*h*v-s*h*S+s*m*_)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],v=t[9],S=t[10],y=t[11],T=t[12],R=t[13],M=t[14],g=t[15],B=v*M*p-R*S*p+R*m*y-d*M*y-v*m*g+d*S*g,L=T*S*p-_*M*p-T*m*y+h*M*y+_*m*g-h*S*g,w=_*R*p-T*v*p+T*d*y-h*R*y-_*d*g+h*v*g,G=T*v*m-_*R*m-T*d*S+h*R*S+_*d*M-h*v*M,V=i*B+s*L+l*w+c*G;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/V;return t[0]=B*z,t[1]=(R*S*c-v*M*c-R*l*y+s*M*y+v*l*g-s*S*g)*z,t[2]=(d*M*c-R*m*c+R*l*p-s*M*p-d*l*g+s*m*g)*z,t[3]=(v*m*c-d*S*c-v*l*p+s*S*p+d*l*y-s*m*y)*z,t[4]=L*z,t[5]=(_*M*c-T*S*c+T*l*y-i*M*y-_*l*g+i*S*g)*z,t[6]=(T*m*c-h*M*c-T*l*p+i*M*p+h*l*g-i*m*g)*z,t[7]=(h*S*c-_*m*c+_*l*p-i*S*p-h*l*y+i*m*y)*z,t[8]=w*z,t[9]=(T*v*c-_*R*c-T*s*y+i*R*y+_*s*g-i*v*g)*z,t[10]=(h*R*c-T*d*c+T*s*p-i*R*p-h*s*g+i*d*g)*z,t[11]=(_*d*c-h*v*c-_*s*p+i*v*p+h*s*y-i*d*y)*z,t[12]=G*z,t[13]=(_*R*l-T*v*l+T*s*S-i*R*S-_*s*M+i*v*M)*z,t[14]=(T*d*l-h*R*l-T*s*m+i*R*m+h*s*M-i*d*M)*z,t[15]=(h*v*l-_*d*l+_*s*m-i*v*m-h*s*S+i*d*S)*z,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,d=t.y,m=t.z,p=c*h,_=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+s,_*m-l*h,0,p*m-l*d,_*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,_=h+h,v=d+d,S=c*p,y=c*_,T=c*v,R=h*_,M=h*v,g=d*v,B=m*p,L=m*_,w=m*v,G=s.x,V=s.y,z=s.z;return l[0]=(1-(R+g))*G,l[1]=(y+w)*G,l[2]=(T-L)*G,l[3]=0,l[4]=(y-w)*V,l[5]=(1-(S+g))*V,l[6]=(M+B)*V,l[7]=0,l[8]=(T+L)*z,l[9]=(M-B)*z,l[10]=(1-(S+R))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let c=lr.set(l[0],l[1],l[2]).length();const h=lr.set(l[4],l[5],l[6]).length(),d=lr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],pi.copy(this);const p=1/c,_=1/h,v=1/d;return pi.elements[0]*=p,pi.elements[1]*=p,pi.elements[2]*=p,pi.elements[4]*=_,pi.elements[5]*=_,pi.elements[6]*=_,pi.elements[8]*=v,pi.elements[9]*=v,pi.elements[10]*=v,i.setFromRotationMatrix(pi),s.x=c,s.y=h,s.z=d,this}makePerspective(t,i,s,l,c,h,d=ia){const m=this.elements,p=2*c/(i-t),_=2*c/(s-l),v=(i+t)/(i-t),S=(s+l)/(s-l);let y,T;if(d===ia)y=-(h+c)/(h-c),T=-2*h*c/(h-c);else if(d===Lc)y=-h/(h-c),T=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=_,m[9]=S,m[13]=0,m[2]=0,m[6]=0,m[10]=y,m[14]=T,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,s,l,c,h,d=ia){const m=this.elements,p=1/(i-t),_=1/(s-l),v=1/(h-c),S=(i+t)*p,y=(s+l)*_;let T,R;if(d===ia)T=(h+c)*v,R=-2*v;else if(d===Lc)T=c*v,R=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-S,m[1]=0,m[5]=2*_,m[9]=0,m[13]=-y,m[2]=0,m[6]=0,m[10]=R,m[14]=-T,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const lr=new X,pi=new je,fy=new X(0,0,0),hy=new X(1,1,1),Ba=new X,ac=new X,Jn=new X,bg=new je,Ag=new Es;class ra{constructor(t=0,i=0,s=0,l=ra.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],_=l[9],v=l[2],S=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(fe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-fe(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(fe(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-fe(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(S,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(fe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-fe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return bg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bg,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Ag.setFromEuler(this),this.setFromQuaternion(Ag,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ra.DEFAULT_ORDER="XYZ";class Lv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let dy=0;const Rg=new X,cr=new Es,Ji=new je,sc=new X,Ro=new X,py=new X,my=new Es,Cg=new X(1,0,0),wg=new X(0,1,0),Dg=new X(0,0,1),Ug={type:"added"},_y={type:"removed"},ur={type:"childadded",child:null},sh={type:"childremoved",child:null};class Vn extends bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dy++}),this.uuid=Io(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vn.DEFAULT_UP.clone();const t=new X,i=new ra,s=new Es,l=new X(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new je},normalMatrix:{value:new re}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=Vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return cr.setFromAxisAngle(t,i),this.quaternion.multiply(cr),this}rotateOnWorldAxis(t,i){return cr.setFromAxisAngle(t,i),this.quaternion.premultiply(cr),this}rotateX(t){return this.rotateOnAxis(Cg,t)}rotateY(t){return this.rotateOnAxis(wg,t)}rotateZ(t){return this.rotateOnAxis(Dg,t)}translateOnAxis(t,i){return Rg.copy(t).applyQuaternion(this.quaternion),this.position.add(Rg.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Cg,t)}translateY(t){return this.translateOnAxis(wg,t)}translateZ(t){return this.translateOnAxis(Dg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ji.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?sc.copy(t):sc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ji.lookAt(Ro,sc,this.up):Ji.lookAt(sc,Ro,this.up),this.quaternion.setFromRotationMatrix(Ji),l&&(Ji.extractRotation(l.matrixWorld),cr.setFromRotationMatrix(Ji),this.quaternion.premultiply(cr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ug),ur.child=t,this.dispatchEvent(ur),ur.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(_y),sh.child=t,this.dispatchEvent(sh),sh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ji.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ji.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ji),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ug),ur.child=t,this.dispatchEvent(ur),ur.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,t,py),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,my,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const v=m[p];c(t.shapes,v)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),_=h(t.images),v=h(t.shapes),S=h(t.skeletons),y=h(t.animations),T=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),v.length>0&&(s.shapes=v),S.length>0&&(s.skeletons=S),y.length>0&&(s.animations=y),T.length>0&&(s.nodes=T)}return s.object=l,s;function h(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Vn.DEFAULT_UP=new X(0,1,0);Vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mi=new X,$i=new X,rh=new X,ta=new X,fr=new X,hr=new X,Lg=new X,oh=new X,lh=new X,ch=new X,uh=new $e,fh=new $e,hh=new $e;class _i{constructor(t=new X,i=new X,s=new X){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),mi.subVectors(t,i),l.cross(mi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){mi.subVectors(l,i),$i.subVectors(s,i),rh.subVectors(t,i);const h=mi.dot(mi),d=mi.dot($i),m=mi.dot(rh),p=$i.dot($i),_=$i.dot(rh),v=h*p-d*d;if(v===0)return c.set(0,0,0),null;const S=1/v,y=(p*m-d*_)*S,T=(h*_-d*m)*S;return c.set(1-y-T,T,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,ta)===null?!1:ta.x>=0&&ta.y>=0&&ta.x+ta.y<=1}static getInterpolation(t,i,s,l,c,h,d,m){return this.getBarycoord(t,i,s,l,ta)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ta.x),m.addScaledVector(h,ta.y),m.addScaledVector(d,ta.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return uh.setScalar(0),fh.setScalar(0),hh.setScalar(0),uh.fromBufferAttribute(t,i),fh.fromBufferAttribute(t,s),hh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(uh,c.x),h.addScaledVector(fh,c.y),h.addScaledVector(hh,c.z),h}static isFrontFacing(t,i,s,l){return mi.subVectors(s,i),$i.subVectors(t,i),mi.cross($i).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mi.subVectors(this.c,this.b),$i.subVectors(this.a,this.b),mi.cross($i).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return _i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return _i.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return _i.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return _i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return _i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,d;fr.subVectors(l,s),hr.subVectors(c,s),oh.subVectors(t,s);const m=fr.dot(oh),p=hr.dot(oh);if(m<=0&&p<=0)return i.copy(s);lh.subVectors(t,l);const _=fr.dot(lh),v=hr.dot(lh);if(_>=0&&v<=_)return i.copy(l);const S=m*v-_*p;if(S<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(s).addScaledVector(fr,h);ch.subVectors(t,c);const y=fr.dot(ch),T=hr.dot(ch);if(T>=0&&y<=T)return i.copy(c);const R=y*p-m*T;if(R<=0&&p>=0&&T<=0)return d=p/(p-T),i.copy(s).addScaledVector(hr,d);const M=_*T-y*v;if(M<=0&&v-_>=0&&y-T>=0)return Lg.subVectors(c,l),d=(v-_)/(v-_+(y-T)),i.copy(l).addScaledVector(Lg,d);const g=1/(M+R+S);return h=R*g,d=S*g,i.copy(s).addScaledVector(fr,h).addScaledVector(hr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Nv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ia={h:0,s:0,l:0},rc={h:0,s:0,l:0};function dh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class be{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=li){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Te.workingColorSpace){return this.r=t,this.g=i,this.b=s,Te.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Te.workingColorSpace){if(t=Jx(t,1),i=fe(i,0,1),s=fe(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=dh(h,c,t+1/3),this.g=dh(h,c,t),this.b=dh(h,c,t-1/3)}return Te.colorSpaceToWorking(this,l),this}setStyle(t,i=li){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=li){const s=Nv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=aa(t.r),this.g=aa(t.g),this.b=aa(t.b),this}copyLinearToSRGB(t){return this.r=Mr(t.r),this.g=Mr(t.g),this.b=Mr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=li){return Te.workingToColorSpace(Dn.copy(this),t),Math.round(fe(Dn.r*255,0,255))*65536+Math.round(fe(Dn.g*255,0,255))*256+Math.round(fe(Dn.b*255,0,255))}getHexString(t=li){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Te.workingColorSpace){Te.workingToColorSpace(Dn.copy(this),i);const s=Dn.r,l=Dn.g,c=Dn.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const _=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=_<=.5?v/(h+d):v/(2-h-d),h){case s:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-s)/v+2;break;case c:m=(s-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=Te.workingColorSpace){return Te.workingToColorSpace(Dn.copy(this),i),t.r=Dn.r,t.g=Dn.g,t.b=Dn.b,t}getStyle(t=li){Te.workingToColorSpace(Dn.copy(this),t);const i=Dn.r,s=Dn.g,l=Dn.b;return t!==li?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Ia),this.setHSL(Ia.h+t,Ia.s+i,Ia.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Ia),t.getHSL(rc);const s=jf(Ia.h,rc.h,i),l=jf(Ia.s,rc.s,i),c=jf(Ia.l,rc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new be;be.NAMES=Nv;let gy=0;class Ho extends bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gy++}),this.uuid=Io(),this.name="",this.type="Material",this.blending=xr,this.side=Xa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wh,this.blendDst=Dh,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=Er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ir,this.stencilZFail=ir,this.stencilZPass=ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==xr&&(s.blending=this.blending),this.side!==Xa&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==wh&&(s.blendSrc=this.blendSrc),this.blendDst!==Dh&&(s.blendDst=this.blendDst),this.blendEquation!==vs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Er&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ir&&(s.stencilFail=this.stencilFail),this.stencilZFail!==ir&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==ir&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ad extends Ho{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ra,this.combine=Sv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const an=new X,oc=new Wt;let vy=0;class wi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vy++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=Sg,this.updateRanges=[],this.gpuType=na,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)oc.fromBufferAttribute(this,i),oc.applyMatrix3(t),this.setXY(i,oc.x,oc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)an.fromBufferAttribute(this,i),an.applyMatrix3(t),this.setXYZ(i,an.x,an.y,an.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)an.fromBufferAttribute(this,i),an.applyMatrix4(t),this.setXYZ(i,an.x,an.y,an.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)an.fromBufferAttribute(this,i),an.applyNormalMatrix(t),this.setXYZ(i,an.x,an.y,an.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)an.fromBufferAttribute(this,i),an.transformDirection(t),this.setXYZ(i,an.x,an.y,an.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=To(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=In(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=To(i,this.array)),i}setX(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=To(i,this.array)),i}setY(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=To(i,this.array)),i}setZ(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=To(i,this.array)),i}setW(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=In(i,this.array),s=In(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=In(i,this.array),s=In(s,this.array),l=In(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=In(i,this.array),s=In(s,this.array),l=In(l,this.array),c=In(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Sg&&(t.usage=this.usage),t}}class Ov extends wi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Pv extends wi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class kn extends wi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let Sy=0;const oi=new je,ph=new Vn,dr=new X,$n=new Fo,Co=new Fo,Sn=new X;class Di extends bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sy++}),this.uuid=Io(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Dv(t)?Pv:Ov)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new re().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return oi.makeRotationFromQuaternion(t),this.applyMatrix4(oi),this}rotateX(t){return oi.makeRotationX(t),this.applyMatrix4(oi),this}rotateY(t){return oi.makeRotationY(t),this.applyMatrix4(oi),this}rotateZ(t){return oi.makeRotationZ(t),this.applyMatrix4(oi),this}translate(t,i,s){return oi.makeTranslation(t,i,s),this.applyMatrix4(oi),this}scale(t,i,s){return oi.makeScale(t,i,s),this.applyMatrix4(oi),this}lookAt(t){return ph.lookAt(t),ph.updateMatrix(),this.applyMatrix4(ph.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(dr).negate(),this.translate(dr.x,dr.y,dr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new kn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];$n.setFromBufferAttribute(c),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(t){const s=this.boundingSphere.center;if($n.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Co.setFromBufferAttribute(d),this.morphTargetsRelative?(Sn.addVectors($n.min,Co.min),$n.expandByPoint(Sn),Sn.addVectors($n.max,Co.max),$n.expandByPoint(Sn)):($n.expandByPoint(Co.min),$n.expandByPoint(Co.max))}$n.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)Sn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Sn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)Sn.fromBufferAttribute(d,p),m&&(dr.fromBufferAttribute(t,p),Sn.add(dr)),l=Math.max(l,s.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let W=0;W<s.count;W++)d[W]=new X,m[W]=new X;const p=new X,_=new X,v=new X,S=new Wt,y=new Wt,T=new Wt,R=new X,M=new X;function g(W,D,C){p.fromBufferAttribute(s,W),_.fromBufferAttribute(s,D),v.fromBufferAttribute(s,C),S.fromBufferAttribute(c,W),y.fromBufferAttribute(c,D),T.fromBufferAttribute(c,C),_.sub(p),v.sub(p),y.sub(S),T.sub(S);const F=1/(y.x*T.y-T.x*y.y);isFinite(F)&&(R.copy(_).multiplyScalar(T.y).addScaledVector(v,-y.y).multiplyScalar(F),M.copy(v).multiplyScalar(y.x).addScaledVector(_,-T.x).multiplyScalar(F),d[W].add(R),d[D].add(R),d[C].add(R),m[W].add(M),m[D].add(M),m[C].add(M))}let B=this.groups;B.length===0&&(B=[{start:0,count:t.count}]);for(let W=0,D=B.length;W<D;++W){const C=B[W],F=C.start,ot=C.count;for(let rt=F,gt=F+ot;rt<gt;rt+=3)g(t.getX(rt+0),t.getX(rt+1),t.getX(rt+2))}const L=new X,w=new X,G=new X,V=new X;function z(W){G.fromBufferAttribute(l,W),V.copy(G);const D=d[W];L.copy(D),L.sub(G.multiplyScalar(G.dot(D))).normalize(),w.crossVectors(V,D);const F=w.dot(m[W])<0?-1:1;h.setXYZW(W,L.x,L.y,L.z,F)}for(let W=0,D=B.length;W<D;++W){const C=B[W],F=C.start,ot=C.count;for(let rt=F,gt=F+ot;rt<gt;rt+=3)z(t.getX(rt+0)),z(t.getX(rt+1)),z(t.getX(rt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new wi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,y=s.count;S<y;S++)s.setXYZ(S,0,0,0);const l=new X,c=new X,h=new X,d=new X,m=new X,p=new X,_=new X,v=new X;if(t)for(let S=0,y=t.count;S<y;S+=3){const T=t.getX(S+0),R=t.getX(S+1),M=t.getX(S+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,M),_.subVectors(h,c),v.subVectors(l,c),_.cross(v),d.fromBufferAttribute(s,T),m.fromBufferAttribute(s,R),p.fromBufferAttribute(s,M),d.add(_),m.add(_),p.add(_),s.setXYZ(T,d.x,d.y,d.z),s.setXYZ(R,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let S=0,y=i.count;S<y;S+=3)l.fromBufferAttribute(i,S+0),c.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),_.subVectors(h,c),v.subVectors(l,c),_.cross(v),s.setXYZ(S+0,_.x,_.y,_.z),s.setXYZ(S+1,_.x,_.y,_.z),s.setXYZ(S+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Sn.fromBufferAttribute(t,i),Sn.normalize(),t.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function t(d,m){const p=d.array,_=d.itemSize,v=d.normalized,S=new p.constructor(m.length*_);let y=0,T=0;for(let R=0,M=m.length;R<M;R++){d.isInterleavedBufferAttribute?y=m[R]*d.data.stride+d.offset:y=m[R]*_;for(let g=0;g<_;g++)S[T++]=p[y++]}return new wi(S,_,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Di,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let _=0,v=p.length;_<v;_++){const S=p[_],y=t(S,s);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let v=0,S=p.length;v<S;v++){const y=p[v];_.push(y.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=t.morphAttributes;for(const p in c){const _=[],v=c[p];for(let S=0,y=v.length;S<y;S++)_.push(v[S].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,_=h.length;p<_;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ng=new je,ds=new bd,lc=new Bc,Og=new X,cc=new X,uc=new X,fc=new X,mh=new X,hc=new X,Pg=new X,dc=new X;class Ci extends Vn{constructor(t=new Di,i=new Ad){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){hc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=d[m],v=c[m];_!==0&&(mh.fromBufferAttribute(v,t),h?hc.addScaledVector(mh,_):hc.addScaledVector(mh.sub(i),_))}i.add(hc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),lc.copy(s.boundingSphere),lc.applyMatrix4(c),ds.copy(t.ray).recast(t.near),!(lc.containsPoint(ds.origin)===!1&&(ds.intersectSphere(lc,Og)===null||ds.origin.distanceToSquared(Og)>(t.far-t.near)**2))&&(Ng.copy(c).invert(),ds.copy(t.ray).applyMatrix4(Ng),!(s.boundingBox!==null&&ds.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,ds)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,S=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(h))for(let T=0,R=S.length;T<R;T++){const M=S[T],g=h[M.materialIndex],B=Math.max(M.start,y.start),L=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let w=B,G=L;w<G;w+=3){const V=d.getX(w),z=d.getX(w+1),W=d.getX(w+2);l=pc(this,g,t,s,p,_,v,V,z,W),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,y.start),R=Math.min(d.count,y.start+y.count);for(let M=T,g=R;M<g;M+=3){const B=d.getX(M),L=d.getX(M+1),w=d.getX(M+2);l=pc(this,h,t,s,p,_,v,B,L,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let T=0,R=S.length;T<R;T++){const M=S[T],g=h[M.materialIndex],B=Math.max(M.start,y.start),L=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let w=B,G=L;w<G;w+=3){const V=w,z=w+1,W=w+2;l=pc(this,g,t,s,p,_,v,V,z,W),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,y.start),R=Math.min(m.count,y.start+y.count);for(let M=T,g=R;M<g;M+=3){const B=M,L=M+1,w=M+2;l=pc(this,h,t,s,p,_,v,B,L,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function xy(r,t,i,s,l,c,h,d){let m;if(t.side===Hn?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,t.side===Xa,d),m===null)return null;dc.copy(d),dc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(dc);return p<i.near||p>i.far?null:{distance:p,point:dc.clone(),object:r}}function pc(r,t,i,s,l,c,h,d,m,p){r.getVertexPosition(d,cc),r.getVertexPosition(m,uc),r.getVertexPosition(p,fc);const _=xy(r,t,i,s,cc,uc,fc,Pg);if(_){const v=new X;_i.getBarycoord(Pg,cc,uc,fc,v),l&&(_.uv=_i.getInterpolatedAttribute(l,d,m,p,v,new Wt)),c&&(_.uv1=_i.getInterpolatedAttribute(c,d,m,p,v,new Wt)),h&&(_.normal=_i.getInterpolatedAttribute(h,d,m,p,v,new X),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new X,materialIndex:0};_i.getNormal(cc,uc,fc,S.normal),_.face=S,_.barycoord=v}return _}class Go extends Di{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],_=[],v=[];let S=0,y=0;T("z","y","x",-1,-1,s,i,t,h,c,0),T("z","y","x",1,-1,s,i,-t,h,c,1),T("x","z","y",1,1,t,s,i,l,h,2),T("x","z","y",1,-1,t,s,-i,l,h,3),T("x","y","z",1,-1,t,i,s,l,c,4),T("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new kn(p,3)),this.setAttribute("normal",new kn(_,3)),this.setAttribute("uv",new kn(v,2));function T(R,M,g,B,L,w,G,V,z,W,D){const C=w/z,F=G/W,ot=w/2,rt=G/2,gt=V/2,ht=z+1,P=W+1;let K=0,Z=0;const Mt=new X;for(let U=0;U<P;U++){const tt=U*F-rt;for(let vt=0;vt<ht;vt++){const xt=vt*C-ot;Mt[R]=xt*B,Mt[M]=tt*L,Mt[g]=gt,p.push(Mt.x,Mt.y,Mt.z),Mt[R]=0,Mt[M]=0,Mt[g]=V>0?1:-1,_.push(Mt.x,Mt.y,Mt.z),v.push(vt/z),v.push(1-U/W),K+=1}}for(let U=0;U<W;U++)for(let tt=0;tt<z;tt++){const vt=S+tt+ht*U,xt=S+tt+ht*(U+1),J=S+(tt+1)+ht*(U+1),pt=S+(tt+1)+ht*U;m.push(vt,xt,pt),m.push(xt,J,pt),Z+=6}d.addGroup(y,Z,D),y+=Z,S+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Go(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Rr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Ln(r){const t={};for(let i=0;i<r.length;i++){const s=Rr(r[i]);for(const l in s)t[l]=s[l]}return t}function yy(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function zv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Te.workingColorSpace}const My={clone:Rr,merge:Ln};var Ey=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ty=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wa extends Ho{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ey,this.fragmentShader=Ty,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Rr(t.uniforms),this.uniformsGroups=yy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Bv extends Vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=ia}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fa=new X,zg=new Wt,Bg=new Wt;class ci extends Bv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=pd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(wc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return pd*2*Math.atan(Math.tan(wc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Fa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fa.x,Fa.y).multiplyScalar(-t/Fa.z),Fa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Fa.x,Fa.y).multiplyScalar(-t/Fa.z)}getViewSize(t,i){return this.getViewBounds(t,zg,Bg),i.subVectors(Bg,zg)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(wc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const pr=-90,mr=1;class by extends Vn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ci(pr,mr,t,i);l.layers=this.layers,this.add(l);const c=new ci(pr,mr,t,i);c.layers=this.layers,this.add(c);const h=new ci(pr,mr,t,i);h.layers=this.layers,this.add(h);const d=new ci(pr,mr,t,i);d.layers=this.layers,this.add(d);const m=new ci(pr,mr,t,i);m.layers=this.layers,this.add(m);const p=new ci(pr,mr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===ia)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Lc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,_]=this.children,v=t.getRenderTarget(),S=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const R=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=R,t.setRenderTarget(s,5,l),t.render(i,_),t.setRenderTarget(v,S,y),t.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class Iv extends Gn{constructor(t=[],i=Tr,s,l,c,h,d,m,p,_){super(t,i,s,l,c,h,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ay extends Ts{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Iv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Go(5,5,5),c=new Wa({name:"CubemapFromEquirect",uniforms:Rr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Hn,blending:Va});c.uniforms.tEquirect.value=i;const h=new Ci(l,c),d=i.minFilter;return i.minFilter===ys&&(i.minFilter=Ri),new by(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}class mc extends Vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ry={type:"move"};class _h{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const R of t.hand.values()){const M=i.getJointPose(R,s),g=this._getHandJoint(p,R);M!==null&&(g.matrix.fromArray(M.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=M.radius),g.visible=M!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],S=_.position.distanceTo(v.position),y=.02,T=.005;p.inputState.pinching&&S>y+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&S<=y-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Ry)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new mc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class Cy extends Vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ra,this.environmentIntensity=1,this.environmentRotation=new ra,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const gh=new X,wy=new X,Dy=new re;class Ha{constructor(t=new X(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=gh.subVectors(s,i).cross(wy.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(gh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||Dy.getNormalMatrix(t),l=this.coplanarPoint(gh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ps=new Bc,Uy=new Wt(.5,.5),_c=new X;class Fv{constructor(t=new Ha,i=new Ha,s=new Ha,l=new Ha,c=new Ha,h=new Ha){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=ia){const s=this.planes,l=t.elements,c=l[0],h=l[1],d=l[2],m=l[3],p=l[4],_=l[5],v=l[6],S=l[7],y=l[8],T=l[9],R=l[10],M=l[11],g=l[12],B=l[13],L=l[14],w=l[15];if(s[0].setComponents(m-c,S-p,M-y,w-g).normalize(),s[1].setComponents(m+c,S+p,M+y,w+g).normalize(),s[2].setComponents(m+h,S+_,M+T,w+B).normalize(),s[3].setComponents(m-h,S-_,M-T,w-B).normalize(),s[4].setComponents(m-d,S-v,M-R,w-L).normalize(),i===ia)s[5].setComponents(m+d,S+v,M+R,w+L).normalize();else if(i===Lc)s[5].setComponents(d,v,R,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ps.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(t){ps.center.set(0,0,0);const i=Uy.distanceTo(t.center);return ps.radius=.7071067811865476+i,ps.applyMatrix4(t.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(_c.x=l.normal.x>0?t.max.x:t.min.x,_c.y=l.normal.y>0?t.max.y:t.min.y,_c.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(_c)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Hv extends Ho{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Oc=new X,Pc=new X,Ig=new je,wo=new bd,gc=new Bc,vh=new X,Fg=new X;class Ly extends Vn{constructor(t=new Di,i=new Hv){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)Oc.fromBufferAttribute(i,l-1),Pc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Oc.distanceTo(Pc);t.setAttribute("lineDistance",new kn(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),gc.copy(s.boundingSphere),gc.applyMatrix4(l),gc.radius+=c,t.ray.intersectsSphere(gc)===!1)return;Ig.copy(l).invert(),wo.copy(t.ray).applyMatrix4(Ig);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,_=s.index,S=s.attributes.position;if(_!==null){const y=Math.max(0,h.start),T=Math.min(_.count,h.start+h.count);for(let R=y,M=T-1;R<M;R+=p){const g=_.getX(R),B=_.getX(R+1),L=vc(this,t,wo,m,g,B,R);L&&i.push(L)}if(this.isLineLoop){const R=_.getX(T-1),M=_.getX(y),g=vc(this,t,wo,m,R,M,T-1);g&&i.push(g)}}else{const y=Math.max(0,h.start),T=Math.min(S.count,h.start+h.count);for(let R=y,M=T-1;R<M;R+=p){const g=vc(this,t,wo,m,R,R+1,R);g&&i.push(g)}if(this.isLineLoop){const R=vc(this,t,wo,m,T-1,y,T-1);R&&i.push(R)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function vc(r,t,i,s,l,c,h){const d=r.geometry.attributes.position;if(Oc.fromBufferAttribute(d,l),Pc.fromBufferAttribute(d,c),i.distanceSqToSegment(Oc,Pc,vh,Fg)>s)return;vh.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(vh);if(!(p<t.near||p>t.far))return{distance:p,point:Fg.clone().applyMatrix4(r.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:r}}const Hg=new X,Gg=new X;class Ny extends Ly{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)Hg.fromBufferAttribute(i,l),Gg.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+Hg.distanceTo(Gg);t.setAttribute("lineDistance",new kn(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Gv extends Gn{constructor(t,i,s=Ms,l,c,h,d=vi,m=vi,p,_=Po,v=1){if(_!==Po&&_!==zo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:t,height:i,depth:v};super(S,l,c,h,d,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Td(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class oa{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,i){const s=this.getUtoTmapping(t);return this.getPoint(s,i)}getPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return i}getSpacedPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPointAt(s/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),c=0;i.push(0);for(let h=1;h<=t;h++)s=this.getPoint(h/t),c+=s.distanceTo(l),i.push(c),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const s=this.getLengths();let l=0;const c=s.length;let h;i?h=i:h=t*s[c-1];let d=0,m=c-1,p;for(;d<=m;)if(l=Math.floor(d+(m-d)/2),p=s[l]-h,p<0)d=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,s[l]===h)return l/(c-1);const _=s[l],S=s[l+1]-_,y=(h-_)/S;return(l+y)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const h=this.getPoint(l),d=this.getPoint(c),m=i||(h.isVector2?new Wt:new X);return m.copy(d).sub(h).normalize(),m}getTangentAt(t,i){const s=this.getUtoTmapping(t);return this.getTangent(s,i)}computeFrenetFrames(t,i=!1){const s=new X,l=[],c=[],h=[],d=new X,m=new je;for(let y=0;y<=t;y++){const T=y/t;l[y]=this.getTangentAt(T,new X)}c[0]=new X,h[0]=new X;let p=Number.MAX_VALUE;const _=Math.abs(l[0].x),v=Math.abs(l[0].y),S=Math.abs(l[0].z);_<=p&&(p=_,s.set(1,0,0)),v<=p&&(p=v,s.set(0,1,0)),S<=p&&s.set(0,0,1),d.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],d),h[0].crossVectors(l[0],c[0]);for(let y=1;y<=t;y++){if(c[y]=c[y-1].clone(),h[y]=h[y-1].clone(),d.crossVectors(l[y-1],l[y]),d.length()>Number.EPSILON){d.normalize();const T=Math.acos(fe(l[y-1].dot(l[y]),-1,1));c[y].applyMatrix4(m.makeRotationAxis(d,T))}h[y].crossVectors(l[y],c[y])}if(i===!0){let y=Math.acos(fe(c[0].dot(c[t]),-1,1));y/=t,l[0].dot(d.crossVectors(c[0],c[t]))>0&&(y=-y);for(let T=1;T<=t;T++)c[T].applyMatrix4(m.makeRotationAxis(l[T],y*T)),h[T].crossVectors(l[T],c[T])}return{tangents:l,normals:c,binormals:h}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Vv extends oa{constructor(t=0,i=0,s=1,l=1,c=0,h=Math.PI*2,d=!1,m=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=s,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=h,this.aClockwise=d,this.aRotation=m}getPoint(t,i=new Wt){const s=i,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const h=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(h?c=0:c=l),this.aClockwise===!0&&!h&&(c===l?c=-l:c=c-l);const d=this.aStartAngle+t*c;let m=this.aX+this.xRadius*Math.cos(d),p=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const _=Math.cos(this.aRotation),v=Math.sin(this.aRotation),S=m-this.aX,y=p-this.aY;m=S*_-y*v+this.aX,p=S*v+y*_+this.aY}return s.set(m,p)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Oy extends Vv{constructor(t,i,s,l,c,h){super(t,i,s,s,l,c,h),this.isArcCurve=!0,this.type="ArcCurve"}}function Rd(){let r=0,t=0,i=0,s=0;function l(c,h,d,m){r=c,t=d,i=-3*c+3*h-2*d-m,s=2*c-2*h+d+m}return{initCatmullRom:function(c,h,d,m,p){l(h,d,p*(d-c),p*(m-h))},initNonuniformCatmullRom:function(c,h,d,m,p,_,v){let S=(h-c)/p-(d-c)/(p+_)+(d-h)/_,y=(d-h)/_-(m-h)/(_+v)+(m-d)/v;S*=_,y*=_,l(h,d,S,y)},calc:function(c){const h=c*c,d=h*c;return r+t*c+i*h+s*d}}}const Sc=new X,Sh=new Rd,xh=new Rd,yh=new Rd;class kv extends oa{constructor(t=[],i=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=s,this.tension=l}getPoint(t,i=new X){const s=i,l=this.points,c=l.length,h=(c-(this.closed?0:1))*t;let d=Math.floor(h),m=h-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:m===0&&d===c-1&&(d=c-2,m=1);let p,_;this.closed||d>0?p=l[(d-1)%c]:(Sc.subVectors(l[0],l[1]).add(l[0]),p=Sc);const v=l[d%c],S=l[(d+1)%c];if(this.closed||d+2<c?_=l[(d+2)%c]:(Sc.subVectors(l[c-1],l[c-2]).add(l[c-1]),_=Sc),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let T=Math.pow(p.distanceToSquared(v),y),R=Math.pow(v.distanceToSquared(S),y),M=Math.pow(S.distanceToSquared(_),y);R<1e-4&&(R=1),T<1e-4&&(T=R),M<1e-4&&(M=R),Sh.initNonuniformCatmullRom(p.x,v.x,S.x,_.x,T,R,M),xh.initNonuniformCatmullRom(p.y,v.y,S.y,_.y,T,R,M),yh.initNonuniformCatmullRom(p.z,v.z,S.z,_.z,T,R,M)}else this.curveType==="catmullrom"&&(Sh.initCatmullRom(p.x,v.x,S.x,_.x,this.tension),xh.initCatmullRom(p.y,v.y,S.y,_.y,this.tension),yh.initCatmullRom(p.z,v.z,S.z,_.z,this.tension));return s.set(Sh.calc(m),xh.calc(m),yh.calc(m)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new X().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Vg(r,t,i,s,l){const c=(s-t)*.5,h=(l-i)*.5,d=r*r,m=r*d;return(2*i-2*s+c+h)*m+(-3*i+3*s-2*c-h)*d+c*r+i}function Py(r,t){const i=1-r;return i*i*t}function zy(r,t){return 2*(1-r)*r*t}function By(r,t){return r*r*t}function Uo(r,t,i,s){return Py(r,t)+zy(r,i)+By(r,s)}function Iy(r,t){const i=1-r;return i*i*i*t}function Fy(r,t){const i=1-r;return 3*i*i*r*t}function Hy(r,t){return 3*(1-r)*r*r*t}function Gy(r,t){return r*r*r*t}function Lo(r,t,i,s,l){return Iy(r,t)+Fy(r,i)+Hy(r,s)+Gy(r,l)}class Vy extends oa{constructor(t=new Wt,i=new Wt,s=new Wt,l=new Wt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new Wt){const s=i,l=this.v0,c=this.v1,h=this.v2,d=this.v3;return s.set(Lo(t,l.x,c.x,h.x,d.x),Lo(t,l.y,c.y,h.y,d.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ky extends oa{constructor(t=new X,i=new X,s=new X,l=new X){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new X){const s=i,l=this.v0,c=this.v1,h=this.v2,d=this.v3;return s.set(Lo(t,l.x,c.x,h.x,d.x),Lo(t,l.y,c.y,h.y,d.y),Lo(t,l.z,c.z,h.z,d.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Xy extends oa{constructor(t=new Wt,i=new Wt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=i}getPoint(t,i=new Wt){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new Wt){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Wy extends oa{constructor(t=new X,i=new X){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=i}getPoint(t,i=new X){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new X){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class qy extends oa{constructor(t=new Wt,i=new Wt,s=new Wt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new Wt){const s=i,l=this.v0,c=this.v1,h=this.v2;return s.set(Uo(t,l.x,c.x,h.x),Uo(t,l.y,c.y,h.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Xv extends oa{constructor(t=new X,i=new X,s=new X){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new X){const s=i,l=this.v0,c=this.v1,h=this.v2;return s.set(Uo(t,l.x,c.x,h.x),Uo(t,l.y,c.y,h.y),Uo(t,l.z,c.z,h.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Yy extends oa{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,i=new Wt){const s=i,l=this.points,c=(l.length-1)*t,h=Math.floor(c),d=c-h,m=l[h===0?h:h-1],p=l[h],_=l[h>l.length-2?l.length-1:h+1],v=l[h>l.length-3?l.length-1:h+2];return s.set(Vg(d,m.x,p.x,_.x,v.x),Vg(d,m.y,p.y,_.y,v.y)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new Wt().fromArray(l))}return this}}var Zy=Object.freeze({__proto__:null,ArcCurve:Oy,CatmullRomCurve3:kv,CubicBezierCurve:Vy,CubicBezierCurve3:ky,EllipseCurve:Vv,LineCurve:Xy,LineCurve3:Wy,QuadraticBezierCurve:qy,QuadraticBezierCurve3:Xv,SplineCurve:Yy});class Ic extends Di{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,_=m+1,v=t/d,S=i/m,y=[],T=[],R=[],M=[];for(let g=0;g<_;g++){const B=g*S-h;for(let L=0;L<p;L++){const w=L*v-c;T.push(w,-B,0),R.push(0,0,1),M.push(L/d),M.push(1-g/m)}}for(let g=0;g<m;g++)for(let B=0;B<d;B++){const L=B+p*g,w=B+p*(g+1),G=B+1+p*(g+1),V=B+1+p*g;y.push(L,w,V),y.push(w,G,V)}this.setIndex(y),this.setAttribute("position",new kn(T,3)),this.setAttribute("normal",new kn(R,3)),this.setAttribute("uv",new kn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ic(t.width,t.height,t.widthSegments,t.heightSegments)}}class Cd extends Di{constructor(t=new Xv(new X(-1,-1,0),new X(-1,1,0),new X(1,1,0)),i=64,s=1,l=8,c=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:s,radialSegments:l,closed:c};const h=t.computeFrenetFrames(i,c);this.tangents=h.tangents,this.normals=h.normals,this.binormals=h.binormals;const d=new X,m=new X,p=new Wt;let _=new X;const v=[],S=[],y=[],T=[];R(),this.setIndex(T),this.setAttribute("position",new kn(v,3)),this.setAttribute("normal",new kn(S,3)),this.setAttribute("uv",new kn(y,2));function R(){for(let L=0;L<i;L++)M(L);M(c===!1?i:0),B(),g()}function M(L){_=t.getPointAt(L/i,_);const w=h.normals[L],G=h.binormals[L];for(let V=0;V<=l;V++){const z=V/l*Math.PI*2,W=Math.sin(z),D=-Math.cos(z);m.x=D*w.x+W*G.x,m.y=D*w.y+W*G.y,m.z=D*w.z+W*G.z,m.normalize(),S.push(m.x,m.y,m.z),d.x=_.x+s*m.x,d.y=_.y+s*m.y,d.z=_.z+s*m.z,v.push(d.x,d.y,d.z)}}function g(){for(let L=1;L<=i;L++)for(let w=1;w<=l;w++){const G=(l+1)*(L-1)+(w-1),V=(l+1)*L+(w-1),z=(l+1)*L+w,W=(l+1)*(L-1)+w;T.push(G,V,W),T.push(V,z,W)}}function B(){for(let L=0;L<=i;L++)for(let w=0;w<=l;w++)p.x=L/i,p.y=w/l,y.push(p.x,p.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Cd(new Zy[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class jy extends Ho{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ky extends Ho{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Qy extends Bv{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Jy extends ci{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class kg{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=fe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(fe(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class $y extends Ny{constructor(t=10,i=10,s=4473924,l=8947848){s=new be(s),l=new be(l);const c=i/2,h=t/i,d=t/2,m=[],p=[];for(let S=0,y=0,T=-d;S<=i;S++,T+=h){m.push(-d,0,T,d,0,T),m.push(T,0,-d,T,0,d);const R=S===c?s:l;R.toArray(p,y),y+=3,R.toArray(p,y),y+=3,R.toArray(p,y),y+=3,R.toArray(p,y),y+=3}const _=new Di;_.setAttribute("position",new kn(m,3)),_.setAttribute("color",new kn(p,3));const v=new Hv({vertexColors:!0,toneMapped:!1});super(_,v),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class tM extends bs{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Xg(r,t,i,s){const l=eM(s);switch(i){case Tv:return r*t;case Av:return r*t/l.components*l.byteLength;case yd:return r*t/l.components*l.byteLength;case Rv:return r*t*2/l.components*l.byteLength;case Md:return r*t*2/l.components*l.byteLength;case bv:return r*t*3/l.components*l.byteLength;case gi:return r*t*4/l.components*l.byteLength;case Ed:return r*t*4/l.components*l.byteLength;case Tc:case bc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ac:case Rc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case kh:case Wh:return Math.max(r,16)*Math.max(t,8)/4;case Vh:case Xh:return Math.max(r,8)*Math.max(t,8)/2;case qh:case Yh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Zh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case jh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Kh:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Qh:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Jh:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case $h:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case td:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case ed:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case nd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case id:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case ad:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case sd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case rd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case od:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case ld:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Cc:case cd:case ud:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Cv:case fd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case hd:case dd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function eM(r){switch(r){case sa:case yv:return{byteLength:1,components:1};case No:case Mv:case Bo:return{byteLength:2,components:1};case Sd:case xd:return{byteLength:2,components:4};case Ms:case vd:case na:return{byteLength:4,components:1};case Ev:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Wv(){let r=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function nM(r){const t=new WeakMap;function i(d,m){const p=d.array,_=d.usage,v=p.byteLength,S=r.createBuffer();r.bindBuffer(m,S),r.bufferData(m,p,_),d.onUploadCallback();let y;if(p instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=r.SHORT;else if(p instanceof Uint32Array)y=r.UNSIGNED_INT;else if(p instanceof Int32Array)y=r.INT;else if(p instanceof Int8Array)y=r.BYTE;else if(p instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function s(d,m,p){const _=m.array,v=m.updateRanges;if(r.bindBuffer(p,d),v.length===0)r.bufferSubData(p,0,_);else{v.sort((y,T)=>y.start-T.start);let S=0;for(let y=1;y<v.length;y++){const T=v[S],R=v[y];R.start<=T.start+T.count+1?T.count=Math.max(T.count,R.start+R.count-T.start):(++S,v[S]=R)}v.length=S+1;for(let y=0,T=v.length;y<T;y++){const R=v[y];r.bufferSubData(p,R.start*_.BYTES_PER_ELEMENT,_,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var iM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,aM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,sM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,uM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,hM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_M=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,gM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,SM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,MM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,EM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,TM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,AM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,RM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,CM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,wM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,DM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,UM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,LM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,NM="gl_FragColor = linearToOutputTexel( gl_FragColor );",OM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,PM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,zM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,BM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,IM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,FM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,HM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,GM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,VM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,XM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,WM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,YM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ZM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,jM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,KM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,QM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,JM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$M=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,eE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,iE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,aE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_E=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,SE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,yE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ME=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,EE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,AE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,RE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,CE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,DE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,UE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,LE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,NE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,OE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,PE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,BE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,IE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,FE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,HE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,GE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,VE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,XE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,WE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,YE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ZE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,KE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,QE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,JE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,eT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,cT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,uT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,hT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_T=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,gT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ST=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,yT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ET=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,TT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,RT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,UT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,LT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,OT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,PT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ce={alphahash_fragment:iM,alphahash_pars_fragment:aM,alphamap_fragment:sM,alphamap_pars_fragment:rM,alphatest_fragment:oM,alphatest_pars_fragment:lM,aomap_fragment:cM,aomap_pars_fragment:uM,batching_pars_vertex:fM,batching_vertex:hM,begin_vertex:dM,beginnormal_vertex:pM,bsdfs:mM,iridescence_fragment:_M,bumpmap_pars_fragment:gM,clipping_planes_fragment:vM,clipping_planes_pars_fragment:SM,clipping_planes_pars_vertex:xM,clipping_planes_vertex:yM,color_fragment:MM,color_pars_fragment:EM,color_pars_vertex:TM,color_vertex:bM,common:AM,cube_uv_reflection_fragment:RM,defaultnormal_vertex:CM,displacementmap_pars_vertex:wM,displacementmap_vertex:DM,emissivemap_fragment:UM,emissivemap_pars_fragment:LM,colorspace_fragment:NM,colorspace_pars_fragment:OM,envmap_fragment:PM,envmap_common_pars_fragment:zM,envmap_pars_fragment:BM,envmap_pars_vertex:IM,envmap_physical_pars_fragment:jM,envmap_vertex:FM,fog_vertex:HM,fog_pars_vertex:GM,fog_fragment:VM,fog_pars_fragment:kM,gradientmap_pars_fragment:XM,lightmap_pars_fragment:WM,lights_lambert_fragment:qM,lights_lambert_pars_fragment:YM,lights_pars_begin:ZM,lights_toon_fragment:KM,lights_toon_pars_fragment:QM,lights_phong_fragment:JM,lights_phong_pars_fragment:$M,lights_physical_fragment:tE,lights_physical_pars_fragment:eE,lights_fragment_begin:nE,lights_fragment_maps:iE,lights_fragment_end:aE,logdepthbuf_fragment:sE,logdepthbuf_pars_fragment:rE,logdepthbuf_pars_vertex:oE,logdepthbuf_vertex:lE,map_fragment:cE,map_pars_fragment:uE,map_particle_fragment:fE,map_particle_pars_fragment:hE,metalnessmap_fragment:dE,metalnessmap_pars_fragment:pE,morphinstance_vertex:mE,morphcolor_vertex:_E,morphnormal_vertex:gE,morphtarget_pars_vertex:vE,morphtarget_vertex:SE,normal_fragment_begin:xE,normal_fragment_maps:yE,normal_pars_fragment:ME,normal_pars_vertex:EE,normal_vertex:TE,normalmap_pars_fragment:bE,clearcoat_normal_fragment_begin:AE,clearcoat_normal_fragment_maps:RE,clearcoat_pars_fragment:CE,iridescence_pars_fragment:wE,opaque_fragment:DE,packing:UE,premultiplied_alpha_fragment:LE,project_vertex:NE,dithering_fragment:OE,dithering_pars_fragment:PE,roughnessmap_fragment:zE,roughnessmap_pars_fragment:BE,shadowmap_pars_fragment:IE,shadowmap_pars_vertex:FE,shadowmap_vertex:HE,shadowmask_pars_fragment:GE,skinbase_vertex:VE,skinning_pars_vertex:kE,skinning_vertex:XE,skinnormal_vertex:WE,specularmap_fragment:qE,specularmap_pars_fragment:YE,tonemapping_fragment:ZE,tonemapping_pars_fragment:jE,transmission_fragment:KE,transmission_pars_fragment:QE,uv_pars_fragment:JE,uv_pars_vertex:$E,uv_vertex:tT,worldpos_vertex:eT,background_vert:nT,background_frag:iT,backgroundCube_vert:aT,backgroundCube_frag:sT,cube_vert:rT,cube_frag:oT,depth_vert:lT,depth_frag:cT,distanceRGBA_vert:uT,distanceRGBA_frag:fT,equirect_vert:hT,equirect_frag:dT,linedashed_vert:pT,linedashed_frag:mT,meshbasic_vert:_T,meshbasic_frag:gT,meshlambert_vert:vT,meshlambert_frag:ST,meshmatcap_vert:xT,meshmatcap_frag:yT,meshnormal_vert:MT,meshnormal_frag:ET,meshphong_vert:TT,meshphong_frag:bT,meshphysical_vert:AT,meshphysical_frag:RT,meshtoon_vert:CT,meshtoon_frag:wT,points_vert:DT,points_frag:UT,shadow_vert:LT,shadow_frag:NT,sprite_vert:OT,sprite_frag:PT},Lt={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},bi={basic:{uniforms:Ln([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:Ln([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new be(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:Ln([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:Ln([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:Ln([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new be(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:Ln([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:Ln([Lt.points,Lt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:Ln([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:Ln([Lt.common,Lt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:Ln([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:Ln([Lt.sprite,Lt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:Ln([Lt.common,Lt.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:Ln([Lt.lights,Lt.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};bi.physical={uniforms:Ln([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const xc={r:0,b:0,g:0},ms=new ra,zT=new je;function BT(r,t,i,s,l,c,h){const d=new be(0);let m=c===!0?0:1,p,_,v=null,S=0,y=null;function T(L){let w=L.isScene===!0?L.background:null;return w&&w.isTexture&&(w=(L.backgroundBlurriness>0?i:t).get(w)),w}function R(L){let w=!1;const G=T(L);G===null?g(d,m):G&&G.isColor&&(g(G,1),w=!0);const V=r.xr.getEnvironmentBlendMode();V==="additive"?s.buffers.color.setClear(0,0,0,1,h):V==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||w)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function M(L,w){const G=T(w);G&&(G.isCubeTexture||G.mapping===zc)?(_===void 0&&(_=new Ci(new Go(1,1,1),new Wa({name:"BackgroundCubeMaterial",uniforms:Rr(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(V,z,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),ms.copy(w.backgroundRotation),ms.x*=-1,ms.y*=-1,ms.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),_.material.uniforms.envMap.value=G,_.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(zT.makeRotationFromEuler(ms)),_.material.toneMapped=Te.getTransfer(G.colorSpace)!==Be,(v!==G||S!==G.version||y!==r.toneMapping)&&(_.material.needsUpdate=!0,v=G,S=G.version,y=r.toneMapping),_.layers.enableAll(),L.unshift(_,_.geometry,_.material,0,0,null)):G&&G.isTexture&&(p===void 0&&(p=new Ci(new Ic(2,2),new Wa({name:"BackgroundMaterial",uniforms:Rr(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:Xa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=G,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.toneMapped=Te.getTransfer(G.colorSpace)!==Be,G.matrixAutoUpdate===!0&&G.updateMatrix(),p.material.uniforms.uvTransform.value.copy(G.matrix),(v!==G||S!==G.version||y!==r.toneMapping)&&(p.material.needsUpdate=!0,v=G,S=G.version,y=r.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function g(L,w){L.getRGB(xc,zv(r)),s.buffers.color.setClear(xc.r,xc.g,xc.b,w,h)}function B(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,w=1){d.set(L),m=w,g(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,g(d,m)},render:R,addToRenderList:M,dispose:B}}function IT(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=S(null);let c=l,h=!1;function d(C,F,ot,rt,gt){let ht=!1;const P=v(rt,ot,F);c!==P&&(c=P,p(c.object)),ht=y(C,rt,ot,gt),ht&&T(C,rt,ot,gt),gt!==null&&t.update(gt,r.ELEMENT_ARRAY_BUFFER),(ht||h)&&(h=!1,w(C,F,ot,rt),gt!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(gt).buffer))}function m(){return r.createVertexArray()}function p(C){return r.bindVertexArray(C)}function _(C){return r.deleteVertexArray(C)}function v(C,F,ot){const rt=ot.wireframe===!0;let gt=s[C.id];gt===void 0&&(gt={},s[C.id]=gt);let ht=gt[F.id];ht===void 0&&(ht={},gt[F.id]=ht);let P=ht[rt];return P===void 0&&(P=S(m()),ht[rt]=P),P}function S(C){const F=[],ot=[],rt=[];for(let gt=0;gt<i;gt++)F[gt]=0,ot[gt]=0,rt[gt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:ot,attributeDivisors:rt,object:C,attributes:{},index:null}}function y(C,F,ot,rt){const gt=c.attributes,ht=F.attributes;let P=0;const K=ot.getAttributes();for(const Z in K)if(K[Z].location>=0){const U=gt[Z];let tt=ht[Z];if(tt===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(tt=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(tt=C.instanceColor)),U===void 0||U.attribute!==tt||tt&&U.data!==tt.data)return!0;P++}return c.attributesNum!==P||c.index!==rt}function T(C,F,ot,rt){const gt={},ht=F.attributes;let P=0;const K=ot.getAttributes();for(const Z in K)if(K[Z].location>=0){let U=ht[Z];U===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(U=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(U=C.instanceColor));const tt={};tt.attribute=U,U&&U.data&&(tt.data=U.data),gt[Z]=tt,P++}c.attributes=gt,c.attributesNum=P,c.index=rt}function R(){const C=c.newAttributes;for(let F=0,ot=C.length;F<ot;F++)C[F]=0}function M(C){g(C,0)}function g(C,F){const ot=c.newAttributes,rt=c.enabledAttributes,gt=c.attributeDivisors;ot[C]=1,rt[C]===0&&(r.enableVertexAttribArray(C),rt[C]=1),gt[C]!==F&&(r.vertexAttribDivisor(C,F),gt[C]=F)}function B(){const C=c.newAttributes,F=c.enabledAttributes;for(let ot=0,rt=F.length;ot<rt;ot++)F[ot]!==C[ot]&&(r.disableVertexAttribArray(ot),F[ot]=0)}function L(C,F,ot,rt,gt,ht,P){P===!0?r.vertexAttribIPointer(C,F,ot,gt,ht):r.vertexAttribPointer(C,F,ot,rt,gt,ht)}function w(C,F,ot,rt){R();const gt=rt.attributes,ht=ot.getAttributes(),P=F.defaultAttributeValues;for(const K in ht){const Z=ht[K];if(Z.location>=0){let Mt=gt[K];if(Mt===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(Mt=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(Mt=C.instanceColor)),Mt!==void 0){const U=Mt.normalized,tt=Mt.itemSize,vt=t.get(Mt);if(vt===void 0)continue;const xt=vt.buffer,J=vt.type,pt=vt.bytesPerElement,yt=J===r.INT||J===r.UNSIGNED_INT||Mt.gpuType===vd;if(Mt.isInterleavedBufferAttribute){const At=Mt.data,Ct=At.stride,oe=Mt.offset;if(At.isInstancedInterleavedBuffer){for(let Qt=0;Qt<Z.locationSize;Qt++)g(Z.location+Qt,At.meshPerAttribute);C.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let Qt=0;Qt<Z.locationSize;Qt++)M(Z.location+Qt);r.bindBuffer(r.ARRAY_BUFFER,xt);for(let Qt=0;Qt<Z.locationSize;Qt++)L(Z.location+Qt,tt/Z.locationSize,J,U,Ct*pt,(oe+tt/Z.locationSize*Qt)*pt,yt)}else{if(Mt.isInstancedBufferAttribute){for(let At=0;At<Z.locationSize;At++)g(Z.location+At,Mt.meshPerAttribute);C.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let At=0;At<Z.locationSize;At++)M(Z.location+At);r.bindBuffer(r.ARRAY_BUFFER,xt);for(let At=0;At<Z.locationSize;At++)L(Z.location+At,tt/Z.locationSize,J,U,tt*pt,tt/Z.locationSize*At*pt,yt)}}else if(P!==void 0){const U=P[K];if(U!==void 0)switch(U.length){case 2:r.vertexAttrib2fv(Z.location,U);break;case 3:r.vertexAttrib3fv(Z.location,U);break;case 4:r.vertexAttrib4fv(Z.location,U);break;default:r.vertexAttrib1fv(Z.location,U)}}}}B()}function G(){W();for(const C in s){const F=s[C];for(const ot in F){const rt=F[ot];for(const gt in rt)_(rt[gt].object),delete rt[gt];delete F[ot]}delete s[C]}}function V(C){if(s[C.id]===void 0)return;const F=s[C.id];for(const ot in F){const rt=F[ot];for(const gt in rt)_(rt[gt].object),delete rt[gt];delete F[ot]}delete s[C.id]}function z(C){for(const F in s){const ot=s[F];if(ot[C.id]===void 0)continue;const rt=ot[C.id];for(const gt in rt)_(rt[gt].object),delete rt[gt];delete ot[C.id]}}function W(){D(),h=!0,c!==l&&(c=l,p(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:W,resetDefaultState:D,dispose:G,releaseStatesOfGeometry:V,releaseStatesOfProgram:z,initAttributes:R,enableAttribute:M,disableUnusedAttributes:B}}function FT(r,t,i){let s;function l(p){s=p}function c(p,_){r.drawArrays(s,p,_),i.update(_,s,1)}function h(p,_,v){v!==0&&(r.drawArraysInstanced(s,p,_,v),i.update(_,s,v))}function d(p,_,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,v);let y=0;for(let T=0;T<v;T++)y+=_[T];i.update(y,s,1)}function m(p,_,v,S){if(v===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let T=0;T<p.length;T++)h(p[T],_[T],S[T]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,_,0,S,0,v);let T=0;for(let R=0;R<v;R++)T+=_[R]*S[R];i.update(T,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function HT(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(z){return!(z!==gi&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const W=z===Bo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==sa&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==na&&!W)}function m(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=i.logarithmicDepthBuffer===!0,S=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),B=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),w=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),G=T>0,V=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:S,maxTextures:y,maxVertexTextures:T,maxTextureSize:R,maxCubemapSize:M,maxAttributes:g,maxVertexUniforms:B,maxVaryings:L,maxFragmentUniforms:w,vertexTextures:G,maxSamples:V}}function GT(r){const t=this;let i=null,s=0,l=!1,c=!1;const h=new Ha,d=new re,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,S){const y=v.length!==0||S||s!==0||l;return l=S,s=v.length,y},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,S){i=_(v,S,0)},this.setState=function(v,S,y){const T=v.clippingPlanes,R=v.clipIntersection,M=v.clipShadows,g=r.get(v);if(!l||T===null||T.length===0||c&&!M)c?_(null):p();else{const B=c?0:s,L=B*4;let w=g.clippingState||null;m.value=w,w=_(T,S,L,y);for(let G=0;G!==L;++G)w[G]=i[G];g.clippingState=w,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=B}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(v,S,y,T){const R=v!==null?v.length:0;let M=null;if(R!==0){if(M=m.value,T!==!0||M===null){const g=y+R*4,B=S.matrixWorldInverse;d.getNormalMatrix(B),(M===null||M.length<g)&&(M=new Float32Array(g));for(let L=0,w=y;L!==R;++L,w+=4)h.copy(v[L]).applyMatrix4(B,d),h.normal.toArray(M,w),M[w+3]=h.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,M}}function VT(r){let t=new WeakMap;function i(h,d){return d===Ih?h.mapping=Tr:d===Fh&&(h.mapping=br),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Ih||d===Fh)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Ay(m.height);return p.fromEquirectangularTexture(r,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const vr=4,Wg=[.125,.215,.35,.446,.526,.582],Ss=20,Mh=new Qy,qg=new be;let Eh=null,Th=0,bh=0,Ah=!1;const gs=(1+Math.sqrt(5))/2,_r=1/gs,Yg=[new X(-gs,_r,0),new X(gs,_r,0),new X(-_r,0,gs),new X(_r,0,gs),new X(0,gs,-_r),new X(0,gs,_r),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)],kT=new X;class Zg{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=kT}=c;Eh=this._renderer.getRenderTarget(),Th=this._renderer.getActiveCubeFace(),bh=this._renderer.getActiveMipmapLevel(),Ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Eh,Th,bh),this._renderer.xr.enabled=Ah,t.scissorTest=!1,yc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Tr||t.mapping===br?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Eh=this._renderer.getRenderTarget(),Th=this._renderer.getActiveCubeFace(),bh=this._renderer.getActiveMipmapLevel(),Ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Ri,minFilter:Ri,generateMipmaps:!1,type:Bo,format:gi,colorSpace:Ar,depthBuffer:!1},l=jg(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jg(t,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=XT(c)),this._blurMaterial=WT(c,t,i)}return l}_compileMaterial(t){const i=new Ci(this._lodPlanes[0],t);this._renderer.compile(i,Mh)}_sceneToCubeUV(t,i,s,l,c){const m=new ci(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,S=v.autoClear,y=v.toneMapping;v.getClearColor(qg),v.toneMapping=ka,v.autoClear=!1;const T=new Ad({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1}),R=new Ci(new Go,T);let M=!1;const g=t.background;g?g.isColor&&(T.color.copy(g),t.background=null,M=!0):(T.color.copy(qg),M=!0);for(let B=0;B<6;B++){const L=B%3;L===0?(m.up.set(0,p[B],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[B],c.y,c.z)):L===1?(m.up.set(0,0,p[B]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[B],c.z)):(m.up.set(0,p[B],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[B]));const w=this._cubeSize;yc(l,L*w,B>2?w:0,w,w),v.setRenderTarget(l),M&&v.render(R,m),v.render(t,m)}R.geometry.dispose(),R.material.dispose(),v.toneMapping=y,v.autoClear=S,t.background=g}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Tr||t.mapping===br;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kg());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new Ci(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;yc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Mh)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=Yg[(l-c-1)%Yg.length];this._blur(t,c-1,c,h,d)}i.autoClear=s}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,v=new Ci(this._lodPlanes[l],p),S=p.uniforms,y=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Ss-1),R=c/T,M=isFinite(c)?1+Math.floor(_*R):Ss;M>Ss&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Ss}`);const g=[];let B=0;for(let z=0;z<Ss;++z){const W=z/R,D=Math.exp(-W*W/2);g.push(D),z===0?B+=D:z<M&&(B+=2*D)}for(let z=0;z<g.length;z++)g[z]=g[z]/B;S.envMap.value=t.texture,S.samples.value=M,S.weights.value=g,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:L}=this;S.dTheta.value=T,S.mipInt.value=L-s;const w=this._sizeLods[l],G=3*w*(l>L-vr?l-L+vr:0),V=4*(this._cubeSize-w);yc(i,G,V,3*w,2*w),m.setRenderTarget(i),m.render(v,Mh)}}function XT(r){const t=[],i=[],s=[];let l=r;const c=r-vr+1+Wg.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>r-vr?m=Wg[h-r+vr-1]:h===0&&(m=0),s.push(m);const p=1/(d-2),_=-p,v=1+p,S=[_,_,v,_,v,v,_,_,v,v,_,v],y=6,T=6,R=3,M=2,g=1,B=new Float32Array(R*T*y),L=new Float32Array(M*T*y),w=new Float32Array(g*T*y);for(let V=0;V<y;V++){const z=V%3*2/3-1,W=V>2?0:-1,D=[z,W,0,z+2/3,W,0,z+2/3,W+1,0,z,W,0,z+2/3,W+1,0,z,W+1,0];B.set(D,R*T*V),L.set(S,M*T*V);const C=[V,V,V,V,V,V];w.set(C,g*T*V)}const G=new Di;G.setAttribute("position",new wi(B,R)),G.setAttribute("uv",new wi(L,M)),G.setAttribute("faceIndex",new wi(w,g)),t.push(G),l>vr&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function jg(r,t,i){const s=new Ts(r,t,i);return s.texture.mapping=zc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function yc(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function WT(r,t,i){const s=new Float32Array(Ss),l=new X(0,1,0);return new Wa({name:"SphericalGaussianBlur",defines:{n:Ss,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:wd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function Kg(){return new Wa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function Qg(){return new Wa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function wd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qT(r){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===Ih||m===Fh,_=m===Tr||m===br;if(p||_){let v=t.get(d);const S=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new Zg(r)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),v.texture;if(v!==void 0)return v.texture;{const y=d.image;return p&&y&&y.height>0||_&&y&&l(y)?(i===null&&(i=new Zg(r)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),d.addEventListener("dispose",c),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function YT(r){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&yr("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function ZT(r,t,i,s){const l={},c=new WeakMap;function h(v){const S=v.target;S.index!==null&&t.remove(S.index);for(const T in S.attributes)t.remove(S.attributes[T]);S.removeEventListener("dispose",h),delete l[S.id];const y=c.get(S);y&&(t.remove(y),c.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(v,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(v){const S=v.attributes;for(const y in S)t.update(S[y],r.ARRAY_BUFFER)}function p(v){const S=[],y=v.index,T=v.attributes.position;let R=0;if(y!==null){const B=y.array;R=y.version;for(let L=0,w=B.length;L<w;L+=3){const G=B[L+0],V=B[L+1],z=B[L+2];S.push(G,V,V,z,z,G)}}else if(T!==void 0){const B=T.array;R=T.version;for(let L=0,w=B.length/3-1;L<w;L+=3){const G=L+0,V=L+1,z=L+2;S.push(G,V,V,z,z,G)}}else return;const M=new(Dv(S)?Pv:Ov)(S,1);M.version=R;const g=c.get(v);g&&t.remove(g),c.set(v,M)}function _(v){const S=c.get(v);if(S){const y=v.index;y!==null&&S.version<y.version&&p(v)}else p(v);return c.get(v)}return{get:d,update:m,getWireframeAttribute:_}}function jT(r,t,i){let s;function l(S){s=S}let c,h;function d(S){c=S.type,h=S.bytesPerElement}function m(S,y){r.drawElements(s,y,c,S*h),i.update(y,s,1)}function p(S,y,T){T!==0&&(r.drawElementsInstanced(s,y,c,S*h,T),i.update(y,s,T))}function _(S,y,T){if(T===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,S,0,T);let M=0;for(let g=0;g<T;g++)M+=y[g];i.update(M,s,1)}function v(S,y,T,R){if(T===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let g=0;g<S.length;g++)p(S[g]/h,y[g],R[g]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,c,S,0,R,0,T);let g=0;for(let B=0;B<T;B++)g+=y[B]*R[B];i.update(g,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function KT(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function QT(r,t,i){const s=new WeakMap,l=new $e;function c(h,d,m){const p=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let S=s.get(d);if(S===void 0||S.count!==v){let C=function(){W.dispose(),s.delete(d),d.removeEventListener("dispose",C)};var y=C;S!==void 0&&S.texture.dispose();const T=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],B=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let w=0;T===!0&&(w=1),R===!0&&(w=2),M===!0&&(w=3);let G=d.attributes.position.count*w,V=1;G>t.maxTextureSize&&(V=Math.ceil(G/t.maxTextureSize),G=t.maxTextureSize);const z=new Float32Array(G*V*4*v),W=new Uv(z,G,V,v);W.type=na,W.needsUpdate=!0;const D=w*4;for(let F=0;F<v;F++){const ot=g[F],rt=B[F],gt=L[F],ht=G*V*4*F;for(let P=0;P<ot.count;P++){const K=P*D;T===!0&&(l.fromBufferAttribute(ot,P),z[ht+K+0]=l.x,z[ht+K+1]=l.y,z[ht+K+2]=l.z,z[ht+K+3]=0),R===!0&&(l.fromBufferAttribute(rt,P),z[ht+K+4]=l.x,z[ht+K+5]=l.y,z[ht+K+6]=l.z,z[ht+K+7]=0),M===!0&&(l.fromBufferAttribute(gt,P),z[ht+K+8]=l.x,z[ht+K+9]=l.y,z[ht+K+10]=l.z,z[ht+K+11]=gt.itemSize===4?l.w:1)}}S={count:v,texture:W,size:new Wt(G,V)},s.set(d,S),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let T=0;for(let M=0;M<p.length;M++)T+=p[M];const R=d.morphTargetsRelative?1:1-T;m.getUniforms().setValue(r,"morphTargetBaseInfluence",R),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",S.size)}return{update:c}}function JT(r,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,_=m.geometry,v=t.get(m,_);if(l.get(v)!==p&&(t.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const qv=new Gn,Jg=new Gv(1,1),Yv=new Uv,Zv=new cy,jv=new Iv,$g=[],tv=[],ev=new Float32Array(16),nv=new Float32Array(9),iv=new Float32Array(4);function Cr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=$g[l];if(c===void 0&&(c=new Float32Array(l),$g[l]=c),t!==0){s.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,r[h].toArray(c,d)}return c}function fn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function hn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function Fc(r,t){let i=tv[t];i===void 0&&(i=new Int32Array(t),tv[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function $T(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function tb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;r.uniform2fv(this.addr,t),hn(i,t)}}function eb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(fn(i,t))return;r.uniform3fv(this.addr,t),hn(i,t)}}function nb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;r.uniform4fv(this.addr,t),hn(i,t)}}function ib(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(fn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),hn(i,t)}else{if(fn(i,s))return;iv.set(s),r.uniformMatrix2fv(this.addr,!1,iv),hn(i,s)}}function ab(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(fn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),hn(i,t)}else{if(fn(i,s))return;nv.set(s),r.uniformMatrix3fv(this.addr,!1,nv),hn(i,s)}}function sb(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(fn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),hn(i,t)}else{if(fn(i,s))return;ev.set(s),r.uniformMatrix4fv(this.addr,!1,ev),hn(i,s)}}function rb(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function ob(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;r.uniform2iv(this.addr,t),hn(i,t)}}function lb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(fn(i,t))return;r.uniform3iv(this.addr,t),hn(i,t)}}function cb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;r.uniform4iv(this.addr,t),hn(i,t)}}function ub(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function fb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;r.uniform2uiv(this.addr,t),hn(i,t)}}function hb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(fn(i,t))return;r.uniform3uiv(this.addr,t),hn(i,t)}}function db(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;r.uniform4uiv(this.addr,t),hn(i,t)}}function pb(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Jg.compareFunction=wv,c=Jg):c=qv,i.setTexture2D(t||c,l)}function mb(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Zv,l)}function _b(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||jv,l)}function gb(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Yv,l)}function vb(r){switch(r){case 5126:return $T;case 35664:return tb;case 35665:return eb;case 35666:return nb;case 35674:return ib;case 35675:return ab;case 35676:return sb;case 5124:case 35670:return rb;case 35667:case 35671:return ob;case 35668:case 35672:return lb;case 35669:case 35673:return cb;case 5125:return ub;case 36294:return fb;case 36295:return hb;case 36296:return db;case 35678:case 36198:case 36298:case 36306:case 35682:return pb;case 35679:case 36299:case 36307:return mb;case 35680:case 36300:case 36308:case 36293:return _b;case 36289:case 36303:case 36311:case 36292:return gb}}function Sb(r,t){r.uniform1fv(this.addr,t)}function xb(r,t){const i=Cr(t,this.size,2);r.uniform2fv(this.addr,i)}function yb(r,t){const i=Cr(t,this.size,3);r.uniform3fv(this.addr,i)}function Mb(r,t){const i=Cr(t,this.size,4);r.uniform4fv(this.addr,i)}function Eb(r,t){const i=Cr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function Tb(r,t){const i=Cr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function bb(r,t){const i=Cr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function Ab(r,t){r.uniform1iv(this.addr,t)}function Rb(r,t){r.uniform2iv(this.addr,t)}function Cb(r,t){r.uniform3iv(this.addr,t)}function wb(r,t){r.uniform4iv(this.addr,t)}function Db(r,t){r.uniform1uiv(this.addr,t)}function Ub(r,t){r.uniform2uiv(this.addr,t)}function Lb(r,t){r.uniform3uiv(this.addr,t)}function Nb(r,t){r.uniform4uiv(this.addr,t)}function Ob(r,t,i){const s=this.cache,l=t.length,c=Fc(i,l);fn(s,c)||(r.uniform1iv(this.addr,c),hn(s,c));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||qv,c[h])}function Pb(r,t,i){const s=this.cache,l=t.length,c=Fc(i,l);fn(s,c)||(r.uniform1iv(this.addr,c),hn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Zv,c[h])}function zb(r,t,i){const s=this.cache,l=t.length,c=Fc(i,l);fn(s,c)||(r.uniform1iv(this.addr,c),hn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||jv,c[h])}function Bb(r,t,i){const s=this.cache,l=t.length,c=Fc(i,l);fn(s,c)||(r.uniform1iv(this.addr,c),hn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Yv,c[h])}function Ib(r){switch(r){case 5126:return Sb;case 35664:return xb;case 35665:return yb;case 35666:return Mb;case 35674:return Eb;case 35675:return Tb;case 35676:return bb;case 5124:case 35670:return Ab;case 35667:case 35671:return Rb;case 35668:case 35672:return Cb;case 35669:case 35673:return wb;case 5125:return Db;case 36294:return Ub;case 36295:return Lb;case 36296:return Nb;case 35678:case 36198:case 36298:case 36306:case 35682:return Ob;case 35679:case 36299:case 36307:return Pb;case 35680:case 36300:case 36308:case 36293:return zb;case 36289:case 36303:case 36311:case 36292:return Bb}}class Fb{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=vb(i.type)}}class Hb{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Ib(i.type)}}class Gb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const Rh=/(\w+)(\])?(\[|\.)?/g;function av(r,t){r.seq.push(t),r.map[t.id]=t}function Vb(r,t,i){const s=r.name,l=s.length;for(Rh.lastIndex=0;;){const c=Rh.exec(s),h=Rh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){av(i,p===void 0?new Fb(d,r,t):new Hb(d,r,t));break}else{let v=i.map[d];v===void 0&&(v=new Gb(d),av(i,v)),i=v}}}class Dc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(i,l),h=t.getUniformLocation(i,c.name);Vb(c,h,this)}}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function sv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const kb=37297;let Xb=0;function Wb(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const rv=new re;function qb(r){Te._getMatrix(rv,Te.workingColorSpace,r);const t=`mat3( ${rv.elements.map(i=>i.toFixed(4))} )`;switch(Te.getTransfer(r)){case Uc:return[t,"LinearTransferOETF"];case Be:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function ov(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),l=r.getShaderInfoLog(t).trim();if(s&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const h=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+Wb(r.getShaderSource(t),h)}else return l}function Yb(r,t){const i=qb(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Zb(r,t){let i;switch(t){case Nx:i="Linear";break;case Ox:i="Reinhard";break;case Px:i="Cineon";break;case zx:i="ACESFilmic";break;case Ix:i="AgX";break;case Fx:i="Neutral";break;case Bx:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Mc=new X;function jb(){Te.getLuminanceCoefficients(Mc);const r=Mc.x.toFixed(4),t=Mc.y.toFixed(4),i=Mc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Kb(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Do).join(`
`)}function Qb(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function Jb(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),h=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:r.getAttribLocation(t,h),locationSize:d}}return i}function Do(r){return r!==""}function lv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function cv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const $b=/^[ \t]*#include +<([\w\d./]+)>/gm;function md(r){return r.replace($b,eA)}const tA=new Map;function eA(r,t){let i=ce[t];if(i===void 0){const s=tA.get(t);if(s!==void 0)i=ce[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return md(i)}const nA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uv(r){return r.replace(nA,iA)}function iA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function fv(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function aA(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===vv?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===hx?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ea&&(t="SHADOWMAP_TYPE_VSM"),t}function sA(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Tr:case br:t="ENVMAP_TYPE_CUBE";break;case zc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function rA(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case br:t="ENVMAP_MODE_REFRACTION";break}return t}function oA(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Sv:t="ENVMAP_BLENDING_MULTIPLY";break;case Ux:t="ENVMAP_BLENDING_MIX";break;case Lx:t="ENVMAP_BLENDING_ADD";break}return t}function lA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:s,maxMip:i}}function cA(r,t,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=aA(i),p=sA(i),_=rA(i),v=oA(i),S=lA(i),y=Kb(i),T=Qb(c),R=l.createProgram();let M,g,B=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Do).join(`
`),M.length>0&&(M+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Do).join(`
`),g.length>0&&(g+=`
`)):(M=[fv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Do).join(`
`),g=[fv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ka?"#define TONE_MAPPING":"",i.toneMapping!==ka?ce.tonemapping_pars_fragment:"",i.toneMapping!==ka?Zb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,Yb("linearToOutputTexel",i.outputColorSpace),jb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Do).join(`
`)),h=md(h),h=lv(h,i),h=cv(h,i),d=md(d),d=lv(d,i),d=cv(d,i),h=uv(h),d=uv(d),i.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,g=["#define varying in",i.glslVersion===xg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===xg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const L=B+M+h,w=B+g+d,G=sv(l,l.VERTEX_SHADER,L),V=sv(l,l.FRAGMENT_SHADER,w);l.attachShader(R,G),l.attachShader(R,V),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function z(F){if(r.debug.checkShaderErrors){const ot=l.getProgramInfoLog(R).trim(),rt=l.getShaderInfoLog(G).trim(),gt=l.getShaderInfoLog(V).trim();let ht=!0,P=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(ht=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,R,G,V);else{const K=ov(l,G,"vertex"),Z=ov(l,V,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+ot+`
`+K+`
`+Z)}else ot!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ot):(rt===""||gt==="")&&(P=!1);P&&(F.diagnostics={runnable:ht,programLog:ot,vertexShader:{log:rt,prefix:M},fragmentShader:{log:gt,prefix:g}})}l.deleteShader(G),l.deleteShader(V),W=new Dc(l,R),D=Jb(l,R)}let W;this.getUniforms=function(){return W===void 0&&z(this),W};let D;this.getAttributes=function(){return D===void 0&&z(this),D};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(R,kb)),C},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Xb++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=G,this.fragmentShader=V,this}let uA=0;class fA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new hA(t),i.set(t,s)),s}}class hA{constructor(t){this.id=uA++,this.code=t,this.usedTimes=0}}function dA(r,t,i,s,l,c,h){const d=new Lv,m=new fA,p=new Set,_=[],v=l.logarithmicDepthBuffer,S=l.vertexTextures;let y=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(D){return p.add(D),D===0?"uv":`uv${D}`}function M(D,C,F,ot,rt){const gt=ot.fog,ht=rt.geometry,P=D.isMeshStandardMaterial?ot.environment:null,K=(D.isMeshStandardMaterial?i:t).get(D.envMap||P),Z=K&&K.mapping===zc?K.image.height:null,Mt=T[D.type];D.precision!==null&&(y=l.getMaxPrecision(D.precision),y!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",y,"instead."));const U=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,tt=U!==void 0?U.length:0;let vt=0;ht.morphAttributes.position!==void 0&&(vt=1),ht.morphAttributes.normal!==void 0&&(vt=2),ht.morphAttributes.color!==void 0&&(vt=3);let xt,J,pt,yt;if(Mt){const Me=bi[Mt];xt=Me.vertexShader,J=Me.fragmentShader}else xt=D.vertexShader,J=D.fragmentShader,m.update(D),pt=m.getVertexShaderID(D),yt=m.getFragmentShaderID(D);const At=r.getRenderTarget(),Ct=r.state.buffers.depth.getReversed(),oe=rt.isInstancedMesh===!0,Qt=rt.isBatchedMesh===!0,Le=!!D.map,Fe=!!D.matcap,ge=!!K,I=!!D.aoMap,xn=!!D.lightMap,ye=!!D.bumpMap,pe=!!D.normalMap,Gt=!!D.displacementMap,ve=!!D.emissiveMap,Zt=!!D.metalnessMap,ae=!!D.roughnessMap,Ke=D.anisotropy>0,N=D.clearcoat>0,E=D.dispersion>0,et=D.iridescence>0,ut=D.sheen>0,dt=D.transmission>0,lt=Ke&&!!D.anisotropyMap,Ot=N&&!!D.clearcoatMap,Dt=N&&!!D.clearcoatNormalMap,Ht=N&&!!D.clearcoatRoughnessMap,Vt=et&&!!D.iridescenceMap,St=et&&!!D.iridescenceThicknessMap,Pt=ut&&!!D.sheenColorMap,qt=ut&&!!D.sheenRoughnessMap,Yt=!!D.specularMap,Rt=!!D.specularColorMap,ie=!!D.specularIntensityMap,k=dt&&!!D.transmissionMap,Ut=dt&&!!D.thicknessMap,Et=!!D.gradientMap,zt=!!D.alphaMap,bt=D.alphaTest>0,_t=!!D.alphaHash,It=!!D.extensions;let ne=ka;D.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(ne=r.toneMapping);const we={shaderID:Mt,shaderType:D.type,shaderName:D.name,vertexShader:xt,fragmentShader:J,defines:D.defines,customVertexShaderID:pt,customFragmentShaderID:yt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:y,batching:Qt,batchingColor:Qt&&rt._colorsTexture!==null,instancing:oe,instancingColor:oe&&rt.instanceColor!==null,instancingMorph:oe&&rt.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:At===null?r.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:Ar,alphaToCoverage:!!D.alphaToCoverage,map:Le,matcap:Fe,envMap:ge,envMapMode:ge&&K.mapping,envMapCubeUVHeight:Z,aoMap:I,lightMap:xn,bumpMap:ye,normalMap:pe,displacementMap:S&&Gt,emissiveMap:ve,normalMapObjectSpace:pe&&D.normalMapType===Xx,normalMapTangentSpace:pe&&D.normalMapType===kx,metalnessMap:Zt,roughnessMap:ae,anisotropy:Ke,anisotropyMap:lt,clearcoat:N,clearcoatMap:Ot,clearcoatNormalMap:Dt,clearcoatRoughnessMap:Ht,dispersion:E,iridescence:et,iridescenceMap:Vt,iridescenceThicknessMap:St,sheen:ut,sheenColorMap:Pt,sheenRoughnessMap:qt,specularMap:Yt,specularColorMap:Rt,specularIntensityMap:ie,transmission:dt,transmissionMap:k,thicknessMap:Ut,gradientMap:Et,opaque:D.transparent===!1&&D.blending===xr&&D.alphaToCoverage===!1,alphaMap:zt,alphaTest:bt,alphaHash:_t,combine:D.combine,mapUv:Le&&R(D.map.channel),aoMapUv:I&&R(D.aoMap.channel),lightMapUv:xn&&R(D.lightMap.channel),bumpMapUv:ye&&R(D.bumpMap.channel),normalMapUv:pe&&R(D.normalMap.channel),displacementMapUv:Gt&&R(D.displacementMap.channel),emissiveMapUv:ve&&R(D.emissiveMap.channel),metalnessMapUv:Zt&&R(D.metalnessMap.channel),roughnessMapUv:ae&&R(D.roughnessMap.channel),anisotropyMapUv:lt&&R(D.anisotropyMap.channel),clearcoatMapUv:Ot&&R(D.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&R(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ht&&R(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Vt&&R(D.iridescenceMap.channel),iridescenceThicknessMapUv:St&&R(D.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&R(D.sheenColorMap.channel),sheenRoughnessMapUv:qt&&R(D.sheenRoughnessMap.channel),specularMapUv:Yt&&R(D.specularMap.channel),specularColorMapUv:Rt&&R(D.specularColorMap.channel),specularIntensityMapUv:ie&&R(D.specularIntensityMap.channel),transmissionMapUv:k&&R(D.transmissionMap.channel),thicknessMapUv:Ut&&R(D.thicknessMap.channel),alphaMapUv:zt&&R(D.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(pe||Ke),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:rt.isPoints===!0&&!!ht.attributes.uv&&(Le||zt),fog:!!gt,useFog:D.fog===!0,fogExp2:!!gt&&gt.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Ct,skinning:rt.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:vt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:ne,decodeVideoTexture:Le&&D.map.isVideoTexture===!0&&Te.getTransfer(D.map.colorSpace)===Be,decodeVideoTextureEmissive:ve&&D.emissiveMap.isVideoTexture===!0&&Te.getTransfer(D.emissiveMap.colorSpace)===Be,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Ai,flipSided:D.side===Hn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:It&&D.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&D.extensions.multiDraw===!0||Qt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return we.vertexUv1s=p.has(1),we.vertexUv2s=p.has(2),we.vertexUv3s=p.has(3),p.clear(),we}function g(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const F in D.defines)C.push(F),C.push(D.defines[F]);return D.isRawShaderMaterial===!1&&(B(C,D),L(C,D),C.push(r.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function B(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function L(D,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),C.gradientMap&&d.enable(22),D.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),D.push(d.mask)}function w(D){const C=T[D.type];let F;if(C){const ot=bi[C];F=My.clone(ot.uniforms)}else F=D.uniforms;return F}function G(D,C){let F;for(let ot=0,rt=_.length;ot<rt;ot++){const gt=_[ot];if(gt.cacheKey===C){F=gt,++F.usedTimes;break}}return F===void 0&&(F=new cA(r,C,D,c),_.push(F)),F}function V(D){if(--D.usedTimes===0){const C=_.indexOf(D);_[C]=_[_.length-1],_.pop(),D.destroy()}}function z(D){m.remove(D)}function W(){m.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:w,acquireProgram:G,releaseProgram:V,releaseShaderCache:z,programs:_,dispose:W}}function pA(){let r=new WeakMap;function t(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,m){r.get(h)[d]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function mA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function hv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function dv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(v,S,y,T,R,M){let g=r[t];return g===void 0?(g={id:v.id,object:v,geometry:S,material:y,groupOrder:T,renderOrder:v.renderOrder,z:R,group:M},r[t]=g):(g.id=v.id,g.object=v,g.geometry=S,g.material=y,g.groupOrder=T,g.renderOrder=v.renderOrder,g.z=R,g.group=M),t++,g}function d(v,S,y,T,R,M){const g=h(v,S,y,T,R,M);y.transmission>0?s.push(g):y.transparent===!0?l.push(g):i.push(g)}function m(v,S,y,T,R,M){const g=h(v,S,y,T,R,M);y.transmission>0?s.unshift(g):y.transparent===!0?l.unshift(g):i.unshift(g)}function p(v,S){i.length>1&&i.sort(v||mA),s.length>1&&s.sort(S||hv),l.length>1&&l.sort(S||hv)}function _(){for(let v=t,S=r.length;v<S;v++){const y=r[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:_,sort:p}}function _A(){let r=new WeakMap;function t(s,l){const c=r.get(s);let h;return c===void 0?(h=new dv,r.set(s,[h])):l>=c.length?(h=new dv,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function gA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new X,color:new be};break;case"SpotLight":i={position:new X,direction:new X,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new X,color:new be,distance:0,decay:0};break;case"HemisphereLight":i={direction:new X,skyColor:new be,groundColor:new be};break;case"RectAreaLight":i={color:new be,position:new X,halfWidth:new X,halfHeight:new X};break}return r[t.id]=i,i}}}function vA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let SA=0;function xA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function yA(r){const t=new gA,i=vA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new X);const l=new X,c=new je,h=new je;function d(p){let _=0,v=0,S=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let y=0,T=0,R=0,M=0,g=0,B=0,L=0,w=0,G=0,V=0,z=0;p.sort(xA);for(let D=0,C=p.length;D<C;D++){const F=p[D],ot=F.color,rt=F.intensity,gt=F.distance,ht=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)_+=ot.r*rt,v+=ot.g*rt,S+=ot.b*rt;else if(F.isLightProbe){for(let P=0;P<9;P++)s.probe[P].addScaledVector(F.sh.coefficients[P],rt);z++}else if(F.isDirectionalLight){const P=t.get(F);if(P.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const K=F.shadow,Z=i.get(F);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,s.directionalShadow[y]=Z,s.directionalShadowMap[y]=ht,s.directionalShadowMatrix[y]=F.shadow.matrix,B++}s.directional[y]=P,y++}else if(F.isSpotLight){const P=t.get(F);P.position.setFromMatrixPosition(F.matrixWorld),P.color.copy(ot).multiplyScalar(rt),P.distance=gt,P.coneCos=Math.cos(F.angle),P.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),P.decay=F.decay,s.spot[R]=P;const K=F.shadow;if(F.map&&(s.spotLightMap[G]=F.map,G++,K.updateMatrices(F),F.castShadow&&V++),s.spotLightMatrix[R]=K.matrix,F.castShadow){const Z=i.get(F);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,s.spotShadow[R]=Z,s.spotShadowMap[R]=ht,w++}R++}else if(F.isRectAreaLight){const P=t.get(F);P.color.copy(ot).multiplyScalar(rt),P.halfWidth.set(F.width*.5,0,0),P.halfHeight.set(0,F.height*.5,0),s.rectArea[M]=P,M++}else if(F.isPointLight){const P=t.get(F);if(P.color.copy(F.color).multiplyScalar(F.intensity),P.distance=F.distance,P.decay=F.decay,F.castShadow){const K=F.shadow,Z=i.get(F);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,Z.shadowCameraNear=K.camera.near,Z.shadowCameraFar=K.camera.far,s.pointShadow[T]=Z,s.pointShadowMap[T]=ht,s.pointShadowMatrix[T]=F.shadow.matrix,L++}s.point[T]=P,T++}else if(F.isHemisphereLight){const P=t.get(F);P.skyColor.copy(F.color).multiplyScalar(rt),P.groundColor.copy(F.groundColor).multiplyScalar(rt),s.hemi[g]=P,g++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Lt.LTC_FLOAT_1,s.rectAreaLTC2=Lt.LTC_FLOAT_2):(s.rectAreaLTC1=Lt.LTC_HALF_1,s.rectAreaLTC2=Lt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=v,s.ambient[2]=S;const W=s.hash;(W.directionalLength!==y||W.pointLength!==T||W.spotLength!==R||W.rectAreaLength!==M||W.hemiLength!==g||W.numDirectionalShadows!==B||W.numPointShadows!==L||W.numSpotShadows!==w||W.numSpotMaps!==G||W.numLightProbes!==z)&&(s.directional.length=y,s.spot.length=R,s.rectArea.length=M,s.point.length=T,s.hemi.length=g,s.directionalShadow.length=B,s.directionalShadowMap.length=B,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=B,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=w+G-V,s.spotLightMap.length=G,s.numSpotLightShadowsWithMaps=V,s.numLightProbes=z,W.directionalLength=y,W.pointLength=T,W.spotLength=R,W.rectAreaLength=M,W.hemiLength=g,W.numDirectionalShadows=B,W.numPointShadows=L,W.numSpotShadows=w,W.numSpotMaps=G,W.numLightProbes=z,s.version=SA++)}function m(p,_){let v=0,S=0,y=0,T=0,R=0;const M=_.matrixWorldInverse;for(let g=0,B=p.length;g<B;g++){const L=p[g];if(L.isDirectionalLight){const w=s.directional[v];w.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),v++}else if(L.isSpotLight){const w=s.spot[y];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(M),w.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),y++}else if(L.isRectAreaLight){const w=s.rectArea[T];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(M),h.identity(),c.copy(L.matrixWorld),c.premultiply(M),h.extractRotation(c),w.halfWidth.set(L.width*.5,0,0),w.halfHeight.set(0,L.height*.5,0),w.halfWidth.applyMatrix4(h),w.halfHeight.applyMatrix4(h),T++}else if(L.isPointLight){const w=s.point[S];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(M),S++}else if(L.isHemisphereLight){const w=s.hemi[R];w.direction.setFromMatrixPosition(L.matrixWorld),w.direction.transformDirection(M),R++}}}return{setup:d,setupView:m,state:s}}function pv(r){const t=new yA(r),i=[],s=[];function l(_){p.camera=_,i.length=0,s.length=0}function c(_){i.push(_)}function h(_){s.push(_)}function d(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function MA(r){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new pv(r),t.set(l,[d])):c>=h.length?(d=new pv(r),h.push(d)):d=h[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const EA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,TA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function bA(r,t,i){let s=new Fv;const l=new Wt,c=new Wt,h=new $e,d=new jy({depthPacking:Vx}),m=new Ky,p={},_=i.maxTextureSize,v={[Xa]:Hn,[Hn]:Xa,[Ai]:Ai},S=new Wa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:EA,fragmentShader:TA}),y=S.clone();y.defines.HORIZONTAL_PASS=1;const T=new Di;T.setAttribute("position",new wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Ci(T,S),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vv;let g=this.type;this.render=function(V,z,W){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||V.length===0)return;const D=r.getRenderTarget(),C=r.getActiveCubeFace(),F=r.getActiveMipmapLevel(),ot=r.state;ot.setBlending(Va),ot.buffers.color.setClear(1,1,1,1),ot.buffers.depth.setTest(!0),ot.setScissorTest(!1);const rt=g!==ea&&this.type===ea,gt=g===ea&&this.type!==ea;for(let ht=0,P=V.length;ht<P;ht++){const K=V[ht],Z=K.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;l.copy(Z.mapSize);const Mt=Z.getFrameExtents();if(l.multiply(Mt),c.copy(Z.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/Mt.x),l.x=c.x*Mt.x,Z.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/Mt.y),l.y=c.y*Mt.y,Z.mapSize.y=c.y)),Z.map===null||rt===!0||gt===!0){const tt=this.type!==ea?{minFilter:vi,magFilter:vi}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Ts(l.x,l.y,tt),Z.map.texture.name=K.name+".shadowMap",Z.camera.updateProjectionMatrix()}r.setRenderTarget(Z.map),r.clear();const U=Z.getViewportCount();for(let tt=0;tt<U;tt++){const vt=Z.getViewport(tt);h.set(c.x*vt.x,c.y*vt.y,c.x*vt.z,c.y*vt.w),ot.viewport(h),Z.updateMatrices(K,tt),s=Z.getFrustum(),w(z,W,Z.camera,K,this.type)}Z.isPointLightShadow!==!0&&this.type===ea&&B(Z,W),Z.needsUpdate=!1}g=this.type,M.needsUpdate=!1,r.setRenderTarget(D,C,F)};function B(V,z){const W=t.update(R);S.defines.VSM_SAMPLES!==V.blurSamples&&(S.defines.VSM_SAMPLES=V.blurSamples,y.defines.VSM_SAMPLES=V.blurSamples,S.needsUpdate=!0,y.needsUpdate=!0),V.mapPass===null&&(V.mapPass=new Ts(l.x,l.y)),S.uniforms.shadow_pass.value=V.map.texture,S.uniforms.resolution.value=V.mapSize,S.uniforms.radius.value=V.radius,r.setRenderTarget(V.mapPass),r.clear(),r.renderBufferDirect(z,null,W,S,R,null),y.uniforms.shadow_pass.value=V.mapPass.texture,y.uniforms.resolution.value=V.mapSize,y.uniforms.radius.value=V.radius,r.setRenderTarget(V.map),r.clear(),r.renderBufferDirect(z,null,W,y,R,null)}function L(V,z,W,D){let C=null;const F=W.isPointLight===!0?V.customDistanceMaterial:V.customDepthMaterial;if(F!==void 0)C=F;else if(C=W.isPointLight===!0?m:d,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const ot=C.uuid,rt=z.uuid;let gt=p[ot];gt===void 0&&(gt={},p[ot]=gt);let ht=gt[rt];ht===void 0&&(ht=C.clone(),gt[rt]=ht,z.addEventListener("dispose",G)),C=ht}if(C.visible=z.visible,C.wireframe=z.wireframe,D===ea?C.side=z.shadowSide!==null?z.shadowSide:z.side:C.side=z.shadowSide!==null?z.shadowSide:v[z.side],C.alphaMap=z.alphaMap,C.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,C.map=z.map,C.clipShadows=z.clipShadows,C.clippingPlanes=z.clippingPlanes,C.clipIntersection=z.clipIntersection,C.displacementMap=z.displacementMap,C.displacementScale=z.displacementScale,C.displacementBias=z.displacementBias,C.wireframeLinewidth=z.wireframeLinewidth,C.linewidth=z.linewidth,W.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ot=r.properties.get(C);ot.light=W}return C}function w(V,z,W,D,C){if(V.visible===!1)return;if(V.layers.test(z.layers)&&(V.isMesh||V.isLine||V.isPoints)&&(V.castShadow||V.receiveShadow&&C===ea)&&(!V.frustumCulled||s.intersectsObject(V))){V.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,V.matrixWorld);const rt=t.update(V),gt=V.material;if(Array.isArray(gt)){const ht=rt.groups;for(let P=0,K=ht.length;P<K;P++){const Z=ht[P],Mt=gt[Z.materialIndex];if(Mt&&Mt.visible){const U=L(V,Mt,D,C);V.onBeforeShadow(r,V,z,W,rt,U,Z),r.renderBufferDirect(W,null,rt,U,V,Z),V.onAfterShadow(r,V,z,W,rt,U,Z)}}}else if(gt.visible){const ht=L(V,gt,D,C);V.onBeforeShadow(r,V,z,W,rt,ht,null),r.renderBufferDirect(W,null,rt,ht,V,null),V.onAfterShadow(r,V,z,W,rt,ht,null)}}const ot=V.children;for(let rt=0,gt=ot.length;rt<gt;rt++)w(ot[rt],z,W,D,C)}function G(V){V.target.removeEventListener("dispose",G);for(const W in p){const D=p[W],C=V.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}const AA={[Uh]:Lh,[Nh]:zh,[Oh]:Bh,[Er]:Ph,[Lh]:Uh,[zh]:Nh,[Bh]:Oh,[Ph]:Er};function RA(r,t){function i(){let k=!1;const Ut=new $e;let Et=null;const zt=new $e(0,0,0,0);return{setMask:function(bt){Et!==bt&&!k&&(r.colorMask(bt,bt,bt,bt),Et=bt)},setLocked:function(bt){k=bt},setClear:function(bt,_t,It,ne,we){we===!0&&(bt*=ne,_t*=ne,It*=ne),Ut.set(bt,_t,It,ne),zt.equals(Ut)===!1&&(r.clearColor(bt,_t,It,ne),zt.copy(Ut))},reset:function(){k=!1,Et=null,zt.set(-1,0,0,0)}}}function s(){let k=!1,Ut=!1,Et=null,zt=null,bt=null;return{setReversed:function(_t){if(Ut!==_t){const It=t.get("EXT_clip_control");_t?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),Ut=_t;const ne=bt;bt=null,this.setClear(ne)}},getReversed:function(){return Ut},setTest:function(_t){_t?At(r.DEPTH_TEST):Ct(r.DEPTH_TEST)},setMask:function(_t){Et!==_t&&!k&&(r.depthMask(_t),Et=_t)},setFunc:function(_t){if(Ut&&(_t=AA[_t]),zt!==_t){switch(_t){case Uh:r.depthFunc(r.NEVER);break;case Lh:r.depthFunc(r.ALWAYS);break;case Nh:r.depthFunc(r.LESS);break;case Er:r.depthFunc(r.LEQUAL);break;case Oh:r.depthFunc(r.EQUAL);break;case Ph:r.depthFunc(r.GEQUAL);break;case zh:r.depthFunc(r.GREATER);break;case Bh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}zt=_t}},setLocked:function(_t){k=_t},setClear:function(_t){bt!==_t&&(Ut&&(_t=1-_t),r.clearDepth(_t),bt=_t)},reset:function(){k=!1,Et=null,zt=null,bt=null,Ut=!1}}}function l(){let k=!1,Ut=null,Et=null,zt=null,bt=null,_t=null,It=null,ne=null,we=null;return{setTest:function(Me){k||(Me?At(r.STENCIL_TEST):Ct(r.STENCIL_TEST))},setMask:function(Me){Ut!==Me&&!k&&(r.stencilMask(Me),Ut=Me)},setFunc:function(Me,Xn,dn){(Et!==Me||zt!==Xn||bt!==dn)&&(r.stencilFunc(Me,Xn,dn),Et=Me,zt=Xn,bt=dn)},setOp:function(Me,Xn,dn){(_t!==Me||It!==Xn||ne!==dn)&&(r.stencilOp(Me,Xn,dn),_t=Me,It=Xn,ne=dn)},setLocked:function(Me){k=Me},setClear:function(Me){we!==Me&&(r.clearStencil(Me),we=Me)},reset:function(){k=!1,Ut=null,Et=null,zt=null,bt=null,_t=null,It=null,ne=null,we=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let _={},v={},S=new WeakMap,y=[],T=null,R=!1,M=null,g=null,B=null,L=null,w=null,G=null,V=null,z=new be(0,0,0),W=0,D=!1,C=null,F=null,ot=null,rt=null,gt=null;const ht=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,K=0;const Z=r.getParameter(r.VERSION);Z.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Z)[1]),P=K>=1):Z.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),P=K>=2);let Mt=null,U={};const tt=r.getParameter(r.SCISSOR_BOX),vt=r.getParameter(r.VIEWPORT),xt=new $e().fromArray(tt),J=new $e().fromArray(vt);function pt(k,Ut,Et,zt){const bt=new Uint8Array(4),_t=r.createTexture();r.bindTexture(k,_t),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let It=0;It<Et;It++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(Ut,0,r.RGBA,1,1,zt,0,r.RGBA,r.UNSIGNED_BYTE,bt):r.texImage2D(Ut+It,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,bt);return _t}const yt={};yt[r.TEXTURE_2D]=pt(r.TEXTURE_2D,r.TEXTURE_2D,1),yt[r.TEXTURE_CUBE_MAP]=pt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[r.TEXTURE_2D_ARRAY]=pt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),yt[r.TEXTURE_3D]=pt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),At(r.DEPTH_TEST),h.setFunc(Er),ye(!1),pe(pg),At(r.CULL_FACE),I(Va);function At(k){_[k]!==!0&&(r.enable(k),_[k]=!0)}function Ct(k){_[k]!==!1&&(r.disable(k),_[k]=!1)}function oe(k,Ut){return v[k]!==Ut?(r.bindFramebuffer(k,Ut),v[k]=Ut,k===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=Ut),k===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=Ut),!0):!1}function Qt(k,Ut){let Et=y,zt=!1;if(k){Et=S.get(Ut),Et===void 0&&(Et=[],S.set(Ut,Et));const bt=k.textures;if(Et.length!==bt.length||Et[0]!==r.COLOR_ATTACHMENT0){for(let _t=0,It=bt.length;_t<It;_t++)Et[_t]=r.COLOR_ATTACHMENT0+_t;Et.length=bt.length,zt=!0}}else Et[0]!==r.BACK&&(Et[0]=r.BACK,zt=!0);zt&&r.drawBuffers(Et)}function Le(k){return T!==k?(r.useProgram(k),T=k,!0):!1}const Fe={[vs]:r.FUNC_ADD,[px]:r.FUNC_SUBTRACT,[mx]:r.FUNC_REVERSE_SUBTRACT};Fe[_x]=r.MIN,Fe[gx]=r.MAX;const ge={[vx]:r.ZERO,[Sx]:r.ONE,[xx]:r.SRC_COLOR,[wh]:r.SRC_ALPHA,[Ax]:r.SRC_ALPHA_SATURATE,[Tx]:r.DST_COLOR,[Mx]:r.DST_ALPHA,[yx]:r.ONE_MINUS_SRC_COLOR,[Dh]:r.ONE_MINUS_SRC_ALPHA,[bx]:r.ONE_MINUS_DST_COLOR,[Ex]:r.ONE_MINUS_DST_ALPHA,[Rx]:r.CONSTANT_COLOR,[Cx]:r.ONE_MINUS_CONSTANT_COLOR,[wx]:r.CONSTANT_ALPHA,[Dx]:r.ONE_MINUS_CONSTANT_ALPHA};function I(k,Ut,Et,zt,bt,_t,It,ne,we,Me){if(k===Va){R===!0&&(Ct(r.BLEND),R=!1);return}if(R===!1&&(At(r.BLEND),R=!0),k!==dx){if(k!==M||Me!==D){if((g!==vs||w!==vs)&&(r.blendEquation(r.FUNC_ADD),g=vs,w=vs),Me)switch(k){case xr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case mg:r.blendFunc(r.ONE,r.ONE);break;case _g:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case gg:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case xr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case mg:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case _g:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gg:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}B=null,L=null,G=null,V=null,z.set(0,0,0),W=0,M=k,D=Me}return}bt=bt||Ut,_t=_t||Et,It=It||zt,(Ut!==g||bt!==w)&&(r.blendEquationSeparate(Fe[Ut],Fe[bt]),g=Ut,w=bt),(Et!==B||zt!==L||_t!==G||It!==V)&&(r.blendFuncSeparate(ge[Et],ge[zt],ge[_t],ge[It]),B=Et,L=zt,G=_t,V=It),(ne.equals(z)===!1||we!==W)&&(r.blendColor(ne.r,ne.g,ne.b,we),z.copy(ne),W=we),M=k,D=!1}function xn(k,Ut){k.side===Ai?Ct(r.CULL_FACE):At(r.CULL_FACE);let Et=k.side===Hn;Ut&&(Et=!Et),ye(Et),k.blending===xr&&k.transparent===!1?I(Va):I(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),c.setMask(k.colorWrite);const zt=k.stencilWrite;d.setTest(zt),zt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ve(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?At(r.SAMPLE_ALPHA_TO_COVERAGE):Ct(r.SAMPLE_ALPHA_TO_COVERAGE)}function ye(k){C!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),C=k)}function pe(k){k!==ux?(At(r.CULL_FACE),k!==F&&(k===pg?r.cullFace(r.BACK):k===fx?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ct(r.CULL_FACE),F=k}function Gt(k){k!==ot&&(P&&r.lineWidth(k),ot=k)}function ve(k,Ut,Et){k?(At(r.POLYGON_OFFSET_FILL),(rt!==Ut||gt!==Et)&&(r.polygonOffset(Ut,Et),rt=Ut,gt=Et)):Ct(r.POLYGON_OFFSET_FILL)}function Zt(k){k?At(r.SCISSOR_TEST):Ct(r.SCISSOR_TEST)}function ae(k){k===void 0&&(k=r.TEXTURE0+ht-1),Mt!==k&&(r.activeTexture(k),Mt=k)}function Ke(k,Ut,Et){Et===void 0&&(Mt===null?Et=r.TEXTURE0+ht-1:Et=Mt);let zt=U[Et];zt===void 0&&(zt={type:void 0,texture:void 0},U[Et]=zt),(zt.type!==k||zt.texture!==Ut)&&(Mt!==Et&&(r.activeTexture(Et),Mt=Et),r.bindTexture(k,Ut||yt[k]),zt.type=k,zt.texture=Ut)}function N(){const k=U[Mt];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function et(){try{r.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ut(){try{r.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function dt(){try{r.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function lt(){try{r.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ot(){try{r.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Dt(){try{r.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ht(){try{r.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Vt(){try{r.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function St(){try{r.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pt(k){xt.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),xt.copy(k))}function qt(k){J.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),J.copy(k))}function Yt(k,Ut){let Et=p.get(Ut);Et===void 0&&(Et=new WeakMap,p.set(Ut,Et));let zt=Et.get(k);zt===void 0&&(zt=r.getUniformBlockIndex(Ut,k.name),Et.set(k,zt))}function Rt(k,Ut){const zt=p.get(Ut).get(k);m.get(Ut)!==zt&&(r.uniformBlockBinding(Ut,zt,k.__bindingPointIndex),m.set(Ut,zt))}function ie(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},Mt=null,U={},v={},S=new WeakMap,y=[],T=null,R=!1,M=null,g=null,B=null,L=null,w=null,G=null,V=null,z=new be(0,0,0),W=0,D=!1,C=null,F=null,ot=null,rt=null,gt=null,xt.set(0,0,r.canvas.width,r.canvas.height),J.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:At,disable:Ct,bindFramebuffer:oe,drawBuffers:Qt,useProgram:Le,setBlending:I,setMaterial:xn,setFlipSided:ye,setCullFace:pe,setLineWidth:Gt,setPolygonOffset:ve,setScissorTest:Zt,activeTexture:ae,bindTexture:Ke,unbindTexture:N,compressedTexImage2D:E,compressedTexImage3D:et,texImage2D:Vt,texImage3D:St,updateUBOMapping:Yt,uniformBlockBinding:Rt,texStorage2D:Dt,texStorage3D:Ht,texSubImage2D:ut,texSubImage3D:dt,compressedTexSubImage2D:lt,compressedTexSubImage3D:Ot,scissor:Pt,viewport:qt,reset:ie}}function CA(r,t,i,s,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Wt,_=new WeakMap;let v;const S=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(N,E){return y?new OffscreenCanvas(N,E):Nc("canvas")}function R(N,E,et){let ut=1;const dt=Ke(N);if((dt.width>et||dt.height>et)&&(ut=et/Math.max(dt.width,dt.height)),ut<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const lt=Math.floor(ut*dt.width),Ot=Math.floor(ut*dt.height);v===void 0&&(v=T(lt,Ot));const Dt=E?T(lt,Ot):v;return Dt.width=lt,Dt.height=Ot,Dt.getContext("2d").drawImage(N,0,0,lt,Ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+lt+"x"+Ot+")."),Dt}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),N;return N}function M(N){return N.generateMipmaps}function g(N){r.generateMipmap(N)}function B(N){return N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?r.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(N,E,et,ut,dt=!1){if(N!==null){if(r[N]!==void 0)return r[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let lt=E;if(E===r.RED&&(et===r.FLOAT&&(lt=r.R32F),et===r.HALF_FLOAT&&(lt=r.R16F),et===r.UNSIGNED_BYTE&&(lt=r.R8)),E===r.RED_INTEGER&&(et===r.UNSIGNED_BYTE&&(lt=r.R8UI),et===r.UNSIGNED_SHORT&&(lt=r.R16UI),et===r.UNSIGNED_INT&&(lt=r.R32UI),et===r.BYTE&&(lt=r.R8I),et===r.SHORT&&(lt=r.R16I),et===r.INT&&(lt=r.R32I)),E===r.RG&&(et===r.FLOAT&&(lt=r.RG32F),et===r.HALF_FLOAT&&(lt=r.RG16F),et===r.UNSIGNED_BYTE&&(lt=r.RG8)),E===r.RG_INTEGER&&(et===r.UNSIGNED_BYTE&&(lt=r.RG8UI),et===r.UNSIGNED_SHORT&&(lt=r.RG16UI),et===r.UNSIGNED_INT&&(lt=r.RG32UI),et===r.BYTE&&(lt=r.RG8I),et===r.SHORT&&(lt=r.RG16I),et===r.INT&&(lt=r.RG32I)),E===r.RGB_INTEGER&&(et===r.UNSIGNED_BYTE&&(lt=r.RGB8UI),et===r.UNSIGNED_SHORT&&(lt=r.RGB16UI),et===r.UNSIGNED_INT&&(lt=r.RGB32UI),et===r.BYTE&&(lt=r.RGB8I),et===r.SHORT&&(lt=r.RGB16I),et===r.INT&&(lt=r.RGB32I)),E===r.RGBA_INTEGER&&(et===r.UNSIGNED_BYTE&&(lt=r.RGBA8UI),et===r.UNSIGNED_SHORT&&(lt=r.RGBA16UI),et===r.UNSIGNED_INT&&(lt=r.RGBA32UI),et===r.BYTE&&(lt=r.RGBA8I),et===r.SHORT&&(lt=r.RGBA16I),et===r.INT&&(lt=r.RGBA32I)),E===r.RGB&&et===r.UNSIGNED_INT_5_9_9_9_REV&&(lt=r.RGB9_E5),E===r.RGBA){const Ot=dt?Uc:Te.getTransfer(ut);et===r.FLOAT&&(lt=r.RGBA32F),et===r.HALF_FLOAT&&(lt=r.RGBA16F),et===r.UNSIGNED_BYTE&&(lt=Ot===Be?r.SRGB8_ALPHA8:r.RGBA8),et===r.UNSIGNED_SHORT_4_4_4_4&&(lt=r.RGBA4),et===r.UNSIGNED_SHORT_5_5_5_1&&(lt=r.RGB5_A1)}return(lt===r.R16F||lt===r.R32F||lt===r.RG16F||lt===r.RG32F||lt===r.RGBA16F||lt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function w(N,E){let et;return N?E===null||E===Ms||E===Oo?et=r.DEPTH24_STENCIL8:E===na?et=r.DEPTH32F_STENCIL8:E===No&&(et=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ms||E===Oo?et=r.DEPTH_COMPONENT24:E===na?et=r.DEPTH_COMPONENT32F:E===No&&(et=r.DEPTH_COMPONENT16),et}function G(N,E){return M(N)===!0||N.isFramebufferTexture&&N.minFilter!==vi&&N.minFilter!==Ri?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function V(N){const E=N.target;E.removeEventListener("dispose",V),W(E),E.isVideoTexture&&_.delete(E)}function z(N){const E=N.target;E.removeEventListener("dispose",z),C(E)}function W(N){const E=s.get(N);if(E.__webglInit===void 0)return;const et=N.source,ut=S.get(et);if(ut){const dt=ut[E.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&D(N),Object.keys(ut).length===0&&S.delete(et)}s.remove(N)}function D(N){const E=s.get(N);r.deleteTexture(E.__webglTexture);const et=N.source,ut=S.get(et);delete ut[E.__cacheKey],h.memory.textures--}function C(N){const E=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ut=0;ut<6;ut++){if(Array.isArray(E.__webglFramebuffer[ut]))for(let dt=0;dt<E.__webglFramebuffer[ut].length;dt++)r.deleteFramebuffer(E.__webglFramebuffer[ut][dt]);else r.deleteFramebuffer(E.__webglFramebuffer[ut]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[ut])}else{if(Array.isArray(E.__webglFramebuffer))for(let ut=0;ut<E.__webglFramebuffer.length;ut++)r.deleteFramebuffer(E.__webglFramebuffer[ut]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ut=0;ut<E.__webglColorRenderbuffer.length;ut++)E.__webglColorRenderbuffer[ut]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[ut]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const et=N.textures;for(let ut=0,dt=et.length;ut<dt;ut++){const lt=s.get(et[ut]);lt.__webglTexture&&(r.deleteTexture(lt.__webglTexture),h.memory.textures--),s.remove(et[ut])}s.remove(N)}let F=0;function ot(){F=0}function rt(){const N=F;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),F+=1,N}function gt(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function ht(N,E){const et=s.get(N);if(N.isVideoTexture&&Zt(N),N.isRenderTargetTexture===!1&&N.version>0&&et.__version!==N.version){const ut=N.image;if(ut===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{yt(et,N,E);return}}i.bindTexture(r.TEXTURE_2D,et.__webglTexture,r.TEXTURE0+E)}function P(N,E){const et=s.get(N);if(N.version>0&&et.__version!==N.version){yt(et,N,E);return}i.bindTexture(r.TEXTURE_2D_ARRAY,et.__webglTexture,r.TEXTURE0+E)}function K(N,E){const et=s.get(N);if(N.version>0&&et.__version!==N.version){yt(et,N,E);return}i.bindTexture(r.TEXTURE_3D,et.__webglTexture,r.TEXTURE0+E)}function Z(N,E){const et=s.get(N);if(N.version>0&&et.__version!==N.version){At(et,N,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,et.__webglTexture,r.TEXTURE0+E)}const Mt={[Hh]:r.REPEAT,[xs]:r.CLAMP_TO_EDGE,[Gh]:r.MIRRORED_REPEAT},U={[vi]:r.NEAREST,[Hx]:r.NEAREST_MIPMAP_NEAREST,[Jl]:r.NEAREST_MIPMAP_LINEAR,[Ri]:r.LINEAR,[Zf]:r.LINEAR_MIPMAP_NEAREST,[ys]:r.LINEAR_MIPMAP_LINEAR},tt={[Wx]:r.NEVER,[Qx]:r.ALWAYS,[qx]:r.LESS,[wv]:r.LEQUAL,[Yx]:r.EQUAL,[Kx]:r.GEQUAL,[Zx]:r.GREATER,[jx]:r.NOTEQUAL};function vt(N,E){if(E.type===na&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Ri||E.magFilter===Zf||E.magFilter===Jl||E.magFilter===ys||E.minFilter===Ri||E.minFilter===Zf||E.minFilter===Jl||E.minFilter===ys)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(N,r.TEXTURE_WRAP_S,Mt[E.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,Mt[E.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,Mt[E.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,U[E.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,U[E.minFilter]),E.compareFunction&&(r.texParameteri(N,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(N,r.TEXTURE_COMPARE_FUNC,tt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===vi||E.minFilter!==Jl&&E.minFilter!==ys||E.type===na&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");r.texParameterf(N,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function xt(N,E){let et=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",V));const ut=E.source;let dt=S.get(ut);dt===void 0&&(dt={},S.set(ut,dt));const lt=gt(E);if(lt!==N.__cacheKey){dt[lt]===void 0&&(dt[lt]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,et=!0),dt[lt].usedTimes++;const Ot=dt[N.__cacheKey];Ot!==void 0&&(dt[N.__cacheKey].usedTimes--,Ot.usedTimes===0&&D(E)),N.__cacheKey=lt,N.__webglTexture=dt[lt].texture}return et}function J(N,E,et){return Math.floor(Math.floor(N/et)/E)}function pt(N,E,et,ut){const lt=N.updateRanges;if(lt.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,et,ut,E.data);else{lt.sort((St,Pt)=>St.start-Pt.start);let Ot=0;for(let St=1;St<lt.length;St++){const Pt=lt[Ot],qt=lt[St],Yt=Pt.start+Pt.count,Rt=J(qt.start,E.width,4),ie=J(Pt.start,E.width,4);qt.start<=Yt+1&&Rt===ie&&J(qt.start+qt.count-1,E.width,4)===Rt?Pt.count=Math.max(Pt.count,qt.start+qt.count-Pt.start):(++Ot,lt[Ot]=qt)}lt.length=Ot+1;const Dt=r.getParameter(r.UNPACK_ROW_LENGTH),Ht=r.getParameter(r.UNPACK_SKIP_PIXELS),Vt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let St=0,Pt=lt.length;St<Pt;St++){const qt=lt[St],Yt=Math.floor(qt.start/4),Rt=Math.ceil(qt.count/4),ie=Yt%E.width,k=Math.floor(Yt/E.width),Ut=Rt,Et=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ie),r.pixelStorei(r.UNPACK_SKIP_ROWS,k),i.texSubImage2D(r.TEXTURE_2D,0,ie,k,Ut,Et,et,ut,E.data)}N.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Dt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ht),r.pixelStorei(r.UNPACK_SKIP_ROWS,Vt)}}function yt(N,E,et){let ut=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ut=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ut=r.TEXTURE_3D);const dt=xt(N,E),lt=E.source;i.bindTexture(ut,N.__webglTexture,r.TEXTURE0+et);const Ot=s.get(lt);if(lt.version!==Ot.__version||dt===!0){i.activeTexture(r.TEXTURE0+et);const Dt=Te.getPrimaries(Te.workingColorSpace),Ht=E.colorSpace===Ga?null:Te.getPrimaries(E.colorSpace),Vt=E.colorSpace===Ga||Dt===Ht?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let St=R(E.image,!1,l.maxTextureSize);St=ae(E,St);const Pt=c.convert(E.format,E.colorSpace),qt=c.convert(E.type);let Yt=L(E.internalFormat,Pt,qt,E.colorSpace,E.isVideoTexture);vt(ut,E);let Rt;const ie=E.mipmaps,k=E.isVideoTexture!==!0,Ut=Ot.__version===void 0||dt===!0,Et=lt.dataReady,zt=G(E,St);if(E.isDepthTexture)Yt=w(E.format===zo,E.type),Ut&&(k?i.texStorage2D(r.TEXTURE_2D,1,Yt,St.width,St.height):i.texImage2D(r.TEXTURE_2D,0,Yt,St.width,St.height,0,Pt,qt,null));else if(E.isDataTexture)if(ie.length>0){k&&Ut&&i.texStorage2D(r.TEXTURE_2D,zt,Yt,ie[0].width,ie[0].height);for(let bt=0,_t=ie.length;bt<_t;bt++)Rt=ie[bt],k?Et&&i.texSubImage2D(r.TEXTURE_2D,bt,0,0,Rt.width,Rt.height,Pt,qt,Rt.data):i.texImage2D(r.TEXTURE_2D,bt,Yt,Rt.width,Rt.height,0,Pt,qt,Rt.data);E.generateMipmaps=!1}else k?(Ut&&i.texStorage2D(r.TEXTURE_2D,zt,Yt,St.width,St.height),Et&&pt(E,St,Pt,qt)):i.texImage2D(r.TEXTURE_2D,0,Yt,St.width,St.height,0,Pt,qt,St.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){k&&Ut&&i.texStorage3D(r.TEXTURE_2D_ARRAY,zt,Yt,ie[0].width,ie[0].height,St.depth);for(let bt=0,_t=ie.length;bt<_t;bt++)if(Rt=ie[bt],E.format!==gi)if(Pt!==null)if(k){if(Et)if(E.layerUpdates.size>0){const It=Xg(Rt.width,Rt.height,E.format,E.type);for(const ne of E.layerUpdates){const we=Rt.data.subarray(ne*It/Rt.data.BYTES_PER_ELEMENT,(ne+1)*It/Rt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,bt,0,0,ne,Rt.width,Rt.height,1,Pt,we)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,bt,0,0,0,Rt.width,Rt.height,St.depth,Pt,Rt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,bt,Yt,Rt.width,Rt.height,St.depth,0,Rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Et&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,bt,0,0,0,Rt.width,Rt.height,St.depth,Pt,qt,Rt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,bt,Yt,Rt.width,Rt.height,St.depth,0,Pt,qt,Rt.data)}else{k&&Ut&&i.texStorage2D(r.TEXTURE_2D,zt,Yt,ie[0].width,ie[0].height);for(let bt=0,_t=ie.length;bt<_t;bt++)Rt=ie[bt],E.format!==gi?Pt!==null?k?Et&&i.compressedTexSubImage2D(r.TEXTURE_2D,bt,0,0,Rt.width,Rt.height,Pt,Rt.data):i.compressedTexImage2D(r.TEXTURE_2D,bt,Yt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Et&&i.texSubImage2D(r.TEXTURE_2D,bt,0,0,Rt.width,Rt.height,Pt,qt,Rt.data):i.texImage2D(r.TEXTURE_2D,bt,Yt,Rt.width,Rt.height,0,Pt,qt,Rt.data)}else if(E.isDataArrayTexture)if(k){if(Ut&&i.texStorage3D(r.TEXTURE_2D_ARRAY,zt,Yt,St.width,St.height,St.depth),Et)if(E.layerUpdates.size>0){const bt=Xg(St.width,St.height,E.format,E.type);for(const _t of E.layerUpdates){const It=St.data.subarray(_t*bt/St.data.BYTES_PER_ELEMENT,(_t+1)*bt/St.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,_t,St.width,St.height,1,Pt,qt,It)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,Pt,qt,St.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Yt,St.width,St.height,St.depth,0,Pt,qt,St.data);else if(E.isData3DTexture)k?(Ut&&i.texStorage3D(r.TEXTURE_3D,zt,Yt,St.width,St.height,St.depth),Et&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,Pt,qt,St.data)):i.texImage3D(r.TEXTURE_3D,0,Yt,St.width,St.height,St.depth,0,Pt,qt,St.data);else if(E.isFramebufferTexture){if(Ut)if(k)i.texStorage2D(r.TEXTURE_2D,zt,Yt,St.width,St.height);else{let bt=St.width,_t=St.height;for(let It=0;It<zt;It++)i.texImage2D(r.TEXTURE_2D,It,Yt,bt,_t,0,Pt,qt,null),bt>>=1,_t>>=1}}else if(ie.length>0){if(k&&Ut){const bt=Ke(ie[0]);i.texStorage2D(r.TEXTURE_2D,zt,Yt,bt.width,bt.height)}for(let bt=0,_t=ie.length;bt<_t;bt++)Rt=ie[bt],k?Et&&i.texSubImage2D(r.TEXTURE_2D,bt,0,0,Pt,qt,Rt):i.texImage2D(r.TEXTURE_2D,bt,Yt,Pt,qt,Rt);E.generateMipmaps=!1}else if(k){if(Ut){const bt=Ke(St);i.texStorage2D(r.TEXTURE_2D,zt,Yt,bt.width,bt.height)}Et&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Pt,qt,St)}else i.texImage2D(r.TEXTURE_2D,0,Yt,Pt,qt,St);M(E)&&g(ut),Ot.__version=lt.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function At(N,E,et){if(E.image.length!==6)return;const ut=xt(N,E),dt=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+et);const lt=s.get(dt);if(dt.version!==lt.__version||ut===!0){i.activeTexture(r.TEXTURE0+et);const Ot=Te.getPrimaries(Te.workingColorSpace),Dt=E.colorSpace===Ga?null:Te.getPrimaries(E.colorSpace),Ht=E.colorSpace===Ga||Ot===Dt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);const Vt=E.isCompressedTexture||E.image[0].isCompressedTexture,St=E.image[0]&&E.image[0].isDataTexture,Pt=[];for(let _t=0;_t<6;_t++)!Vt&&!St?Pt[_t]=R(E.image[_t],!0,l.maxCubemapSize):Pt[_t]=St?E.image[_t].image:E.image[_t],Pt[_t]=ae(E,Pt[_t]);const qt=Pt[0],Yt=c.convert(E.format,E.colorSpace),Rt=c.convert(E.type),ie=L(E.internalFormat,Yt,Rt,E.colorSpace),k=E.isVideoTexture!==!0,Ut=lt.__version===void 0||ut===!0,Et=dt.dataReady;let zt=G(E,qt);vt(r.TEXTURE_CUBE_MAP,E);let bt;if(Vt){k&&Ut&&i.texStorage2D(r.TEXTURE_CUBE_MAP,zt,ie,qt.width,qt.height);for(let _t=0;_t<6;_t++){bt=Pt[_t].mipmaps;for(let It=0;It<bt.length;It++){const ne=bt[It];E.format!==gi?Yt!==null?k?Et&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,It,0,0,ne.width,ne.height,Yt,ne.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,It,ie,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Et&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,It,0,0,ne.width,ne.height,Yt,Rt,ne.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,It,ie,ne.width,ne.height,0,Yt,Rt,ne.data)}}}else{if(bt=E.mipmaps,k&&Ut){bt.length>0&&zt++;const _t=Ke(Pt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,zt,ie,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(St){k?Et&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Pt[_t].width,Pt[_t].height,Yt,Rt,Pt[_t].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ie,Pt[_t].width,Pt[_t].height,0,Yt,Rt,Pt[_t].data);for(let It=0;It<bt.length;It++){const we=bt[It].image[_t].image;k?Et&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,It+1,0,0,we.width,we.height,Yt,Rt,we.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,It+1,ie,we.width,we.height,0,Yt,Rt,we.data)}}else{k?Et&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Yt,Rt,Pt[_t]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ie,Yt,Rt,Pt[_t]);for(let It=0;It<bt.length;It++){const ne=bt[It];k?Et&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,It+1,0,0,Yt,Rt,ne.image[_t]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,It+1,ie,Yt,Rt,ne.image[_t])}}}M(E)&&g(r.TEXTURE_CUBE_MAP),lt.__version=dt.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function Ct(N,E,et,ut,dt,lt){const Ot=c.convert(et.format,et.colorSpace),Dt=c.convert(et.type),Ht=L(et.internalFormat,Ot,Dt,et.colorSpace),Vt=s.get(E),St=s.get(et);if(St.__renderTarget=E,!Vt.__hasExternalTextures){const Pt=Math.max(1,E.width>>lt),qt=Math.max(1,E.height>>lt);dt===r.TEXTURE_3D||dt===r.TEXTURE_2D_ARRAY?i.texImage3D(dt,lt,Ht,Pt,qt,E.depth,0,Ot,Dt,null):i.texImage2D(dt,lt,Ht,Pt,qt,0,Ot,Dt,null)}i.bindFramebuffer(r.FRAMEBUFFER,N),ve(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ut,dt,St.__webglTexture,0,Gt(E)):(dt===r.TEXTURE_2D||dt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ut,dt,St.__webglTexture,lt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function oe(N,E,et){if(r.bindRenderbuffer(r.RENDERBUFFER,N),E.depthBuffer){const ut=E.depthTexture,dt=ut&&ut.isDepthTexture?ut.type:null,lt=w(E.stencilBuffer,dt),Ot=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Dt=Gt(E);ve(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Dt,lt,E.width,E.height):et?r.renderbufferStorageMultisample(r.RENDERBUFFER,Dt,lt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,lt,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ot,r.RENDERBUFFER,N)}else{const ut=E.textures;for(let dt=0;dt<ut.length;dt++){const lt=ut[dt],Ot=c.convert(lt.format,lt.colorSpace),Dt=c.convert(lt.type),Ht=L(lt.internalFormat,Ot,Dt,lt.colorSpace),Vt=Gt(E);et&&ve(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Vt,Ht,E.width,E.height):ve(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Vt,Ht,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Ht,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Qt(N,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ut=s.get(E.depthTexture);ut.__renderTarget=E,(!ut.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ht(E.depthTexture,0);const dt=ut.__webglTexture,lt=Gt(E);if(E.depthTexture.format===Po)ve(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,dt,0,lt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,dt,0);else if(E.depthTexture.format===zo)ve(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,dt,0,lt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,dt,0);else throw new Error("Unknown depthTexture format")}function Le(N){const E=s.get(N),et=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){const ut=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ut){const dt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ut.removeEventListener("dispose",dt)};ut.addEventListener("dispose",dt),E.__depthDisposeCallback=dt}E.__boundDepthTexture=ut}if(N.depthTexture&&!E.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");const ut=N.texture.mipmaps;ut&&ut.length>0?Qt(E.__webglFramebuffer[0],N):Qt(E.__webglFramebuffer,N)}else if(et){E.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[ut]),E.__webglDepthbuffer[ut]===void 0)E.__webglDepthbuffer[ut]=r.createRenderbuffer(),oe(E.__webglDepthbuffer[ut],N,!1);else{const dt=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,lt=E.__webglDepthbuffer[ut];r.bindRenderbuffer(r.RENDERBUFFER,lt),r.framebufferRenderbuffer(r.FRAMEBUFFER,dt,r.RENDERBUFFER,lt)}}else{const ut=N.texture.mipmaps;if(ut&&ut.length>0?i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),oe(E.__webglDepthbuffer,N,!1);else{const dt=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,lt=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,lt),r.framebufferRenderbuffer(r.FRAMEBUFFER,dt,r.RENDERBUFFER,lt)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Fe(N,E,et){const ut=s.get(N);E!==void 0&&Ct(ut.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),et!==void 0&&Le(N)}function ge(N){const E=N.texture,et=s.get(N),ut=s.get(E);N.addEventListener("dispose",z);const dt=N.textures,lt=N.isWebGLCubeRenderTarget===!0,Ot=dt.length>1;if(Ot||(ut.__webglTexture===void 0&&(ut.__webglTexture=r.createTexture()),ut.__version=E.version,h.memory.textures++),lt){et.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(E.mipmaps&&E.mipmaps.length>0){et.__webglFramebuffer[Dt]=[];for(let Ht=0;Ht<E.mipmaps.length;Ht++)et.__webglFramebuffer[Dt][Ht]=r.createFramebuffer()}else et.__webglFramebuffer[Dt]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){et.__webglFramebuffer=[];for(let Dt=0;Dt<E.mipmaps.length;Dt++)et.__webglFramebuffer[Dt]=r.createFramebuffer()}else et.__webglFramebuffer=r.createFramebuffer();if(Ot)for(let Dt=0,Ht=dt.length;Dt<Ht;Dt++){const Vt=s.get(dt[Dt]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=r.createTexture(),h.memory.textures++)}if(N.samples>0&&ve(N)===!1){et.__webglMultisampledFramebuffer=r.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Dt=0;Dt<dt.length;Dt++){const Ht=dt[Dt];et.__webglColorRenderbuffer[Dt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,et.__webglColorRenderbuffer[Dt]);const Vt=c.convert(Ht.format,Ht.colorSpace),St=c.convert(Ht.type),Pt=L(Ht.internalFormat,Vt,St,Ht.colorSpace,N.isXRRenderTarget===!0),qt=Gt(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,qt,Pt,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Dt,r.RENDERBUFFER,et.__webglColorRenderbuffer[Dt])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&(et.__webglDepthRenderbuffer=r.createRenderbuffer(),oe(et.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(lt){i.bindTexture(r.TEXTURE_CUBE_MAP,ut.__webglTexture),vt(r.TEXTURE_CUBE_MAP,E);for(let Dt=0;Dt<6;Dt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ht=0;Ht<E.mipmaps.length;Ht++)Ct(et.__webglFramebuffer[Dt][Ht],N,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Ht);else Ct(et.__webglFramebuffer[Dt],N,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);M(E)&&g(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ot){for(let Dt=0,Ht=dt.length;Dt<Ht;Dt++){const Vt=dt[Dt],St=s.get(Vt);i.bindTexture(r.TEXTURE_2D,St.__webglTexture),vt(r.TEXTURE_2D,Vt),Ct(et.__webglFramebuffer,N,Vt,r.COLOR_ATTACHMENT0+Dt,r.TEXTURE_2D,0),M(Vt)&&g(r.TEXTURE_2D)}i.unbindTexture()}else{let Dt=r.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Dt=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Dt,ut.__webglTexture),vt(Dt,E),E.mipmaps&&E.mipmaps.length>0)for(let Ht=0;Ht<E.mipmaps.length;Ht++)Ct(et.__webglFramebuffer[Ht],N,E,r.COLOR_ATTACHMENT0,Dt,Ht);else Ct(et.__webglFramebuffer,N,E,r.COLOR_ATTACHMENT0,Dt,0);M(E)&&g(Dt),i.unbindTexture()}N.depthBuffer&&Le(N)}function I(N){const E=N.textures;for(let et=0,ut=E.length;et<ut;et++){const dt=E[et];if(M(dt)){const lt=B(N),Ot=s.get(dt).__webglTexture;i.bindTexture(lt,Ot),g(lt),i.unbindTexture()}}}const xn=[],ye=[];function pe(N){if(N.samples>0){if(ve(N)===!1){const E=N.textures,et=N.width,ut=N.height;let dt=r.COLOR_BUFFER_BIT;const lt=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ot=s.get(N),Dt=E.length>1;if(Dt)for(let Vt=0;Vt<E.length;Vt++)i.bindFramebuffer(r.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Vt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Ot.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Vt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer);const Ht=N.texture.mipmaps;Ht&&Ht.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let Vt=0;Vt<E.length;Vt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(dt|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(dt|=r.STENCIL_BUFFER_BIT)),Dt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ot.__webglColorRenderbuffer[Vt]);const St=s.get(E[Vt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,St,0)}r.blitFramebuffer(0,0,et,ut,0,0,et,ut,dt,r.NEAREST),m===!0&&(xn.length=0,ye.length=0,xn.push(r.COLOR_ATTACHMENT0+Vt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(xn.push(lt),ye.push(lt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ye)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,xn))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Dt)for(let Vt=0;Vt<E.length;Vt++){i.bindFramebuffer(r.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Vt,r.RENDERBUFFER,Ot.__webglColorRenderbuffer[Vt]);const St=s.get(E[Vt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Ot.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Vt,r.TEXTURE_2D,St,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const E=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function Gt(N){return Math.min(l.maxSamples,N.samples)}function ve(N){const E=s.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Zt(N){const E=h.render.frame;_.get(N)!==E&&(_.set(N,E),N.update())}function ae(N,E){const et=N.colorSpace,ut=N.format,dt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||et!==Ar&&et!==Ga&&(Te.getTransfer(et)===Be?(ut!==gi||dt!==sa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),E}function Ke(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=rt,this.resetTextureUnits=ot,this.setTexture2D=ht,this.setTexture2DArray=P,this.setTexture3D=K,this.setTextureCube=Z,this.rebindTextures=Fe,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=ve}function wA(r,t){function i(s,l=Ga){let c;const h=Te.getTransfer(l);if(s===sa)return r.UNSIGNED_BYTE;if(s===Sd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===xd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Ev)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===yv)return r.BYTE;if(s===Mv)return r.SHORT;if(s===No)return r.UNSIGNED_SHORT;if(s===vd)return r.INT;if(s===Ms)return r.UNSIGNED_INT;if(s===na)return r.FLOAT;if(s===Bo)return r.HALF_FLOAT;if(s===Tv)return r.ALPHA;if(s===bv)return r.RGB;if(s===gi)return r.RGBA;if(s===Po)return r.DEPTH_COMPONENT;if(s===zo)return r.DEPTH_STENCIL;if(s===Av)return r.RED;if(s===yd)return r.RED_INTEGER;if(s===Rv)return r.RG;if(s===Md)return r.RG_INTEGER;if(s===Ed)return r.RGBA_INTEGER;if(s===Tc||s===bc||s===Ac||s===Rc)if(h===Be)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Tc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===bc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ac)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Rc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Tc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===bc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ac)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Rc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Vh||s===kh||s===Xh||s===Wh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Vh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===kh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Xh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Wh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===qh||s===Yh||s===Zh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===qh||s===Yh)return h===Be?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Zh)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===jh||s===Kh||s===Qh||s===Jh||s===$h||s===td||s===ed||s===nd||s===id||s===ad||s===sd||s===rd||s===od||s===ld)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===jh)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Kh)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Qh)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Jh)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===$h)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===td)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ed)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===nd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===id)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ad)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===sd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===rd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===od)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ld)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Cc||s===cd||s===ud)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Cc)return h===Be?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===cd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ud)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Cv||s===fd||s===hd||s===dd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Cc)return c.COMPRESSED_RED_RGTC1_EXT;if(s===fd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===hd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===dd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Oo?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const DA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,UA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class LA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,s){if(this.texture===null){const l=new Gn,c=t.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!==s.depthNear||i.depthFar!==s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Wa({vertexShader:DA,fragmentShader:UA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ci(new Ic(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class NA extends bs{constructor(t,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,_=null,v=null,S=null,y=null,T=null;const R=new LA,M=i.getContextAttributes();let g=null,B=null;const L=[],w=[],G=new Wt;let V=null;const z=new ci;z.viewport=new $e;const W=new ci;W.viewport=new $e;const D=[z,W],C=new Jy;let F=null,ot=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let pt=L[J];return pt===void 0&&(pt=new _h,L[J]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(J){let pt=L[J];return pt===void 0&&(pt=new _h,L[J]=pt),pt.getGripSpace()},this.getHand=function(J){let pt=L[J];return pt===void 0&&(pt=new _h,L[J]=pt),pt.getHandSpace()};function rt(J){const pt=w.indexOf(J.inputSource);if(pt===-1)return;const yt=L[pt];yt!==void 0&&(yt.update(J.inputSource,J.frame,p||h),yt.dispatchEvent({type:J.type,data:J.inputSource}))}function gt(){l.removeEventListener("select",rt),l.removeEventListener("selectstart",rt),l.removeEventListener("selectend",rt),l.removeEventListener("squeeze",rt),l.removeEventListener("squeezestart",rt),l.removeEventListener("squeezeend",rt),l.removeEventListener("end",gt),l.removeEventListener("inputsourceschange",ht);for(let J=0;J<L.length;J++){const pt=w[J];pt!==null&&(w[J]=null,L[J].disconnect(pt))}F=null,ot=null,R.reset(),t.setRenderTarget(g),y=null,S=null,v=null,l=null,B=null,xt.stop(),s.isPresenting=!1,t.setPixelRatio(V),t.setSize(G.width,G.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){c=J,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){d=J,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(J){p=J},this.getBaseLayer=function(){return S!==null?S:y},this.getBinding=function(){return v},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(J){if(l=J,l!==null){if(g=t.getRenderTarget(),l.addEventListener("select",rt),l.addEventListener("selectstart",rt),l.addEventListener("selectend",rt),l.addEventListener("squeeze",rt),l.addEventListener("squeezestart",rt),l.addEventListener("squeezeend",rt),l.addEventListener("end",gt),l.addEventListener("inputsourceschange",ht),M.xrCompatible!==!0&&await i.makeXRCompatible(),V=t.getPixelRatio(),t.getSize(G),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,At=null,Ct=null;M.depth&&(Ct=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,yt=M.stencil?zo:Po,At=M.stencil?Oo:Ms);const oe={colorFormat:i.RGBA8,depthFormat:Ct,scaleFactor:c};v=new XRWebGLBinding(l,i),S=v.createProjectionLayer(oe),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),B=new Ts(S.textureWidth,S.textureHeight,{format:gi,type:sa,depthTexture:new Gv(S.textureWidth,S.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const yt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,yt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),B=new Ts(y.framebufferWidth,y.framebufferHeight,{format:gi,type:sa,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}B.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),xt.setContext(l),xt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function ht(J){for(let pt=0;pt<J.removed.length;pt++){const yt=J.removed[pt],At=w.indexOf(yt);At>=0&&(w[At]=null,L[At].disconnect(yt))}for(let pt=0;pt<J.added.length;pt++){const yt=J.added[pt];let At=w.indexOf(yt);if(At===-1){for(let oe=0;oe<L.length;oe++)if(oe>=w.length){w.push(yt),At=oe;break}else if(w[oe]===null){w[oe]=yt,At=oe;break}if(At===-1)break}const Ct=L[At];Ct&&Ct.connect(yt)}}const P=new X,K=new X;function Z(J,pt,yt){P.setFromMatrixPosition(pt.matrixWorld),K.setFromMatrixPosition(yt.matrixWorld);const At=P.distanceTo(K),Ct=pt.projectionMatrix.elements,oe=yt.projectionMatrix.elements,Qt=Ct[14]/(Ct[10]-1),Le=Ct[14]/(Ct[10]+1),Fe=(Ct[9]+1)/Ct[5],ge=(Ct[9]-1)/Ct[5],I=(Ct[8]-1)/Ct[0],xn=(oe[8]+1)/oe[0],ye=Qt*I,pe=Qt*xn,Gt=At/(-I+xn),ve=Gt*-I;if(pt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ve),J.translateZ(Gt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ct[10]===-1)J.projectionMatrix.copy(pt.projectionMatrix),J.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{const Zt=Qt+Gt,ae=Le+Gt,Ke=ye-ve,N=pe+(At-ve),E=Fe*Le/ae*Zt,et=ge*Le/ae*Zt;J.projectionMatrix.makePerspective(Ke,N,E,et,Zt,ae),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Mt(J,pt){pt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(pt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(l===null)return;let pt=J.near,yt=J.far;R.texture!==null&&(R.depthNear>0&&(pt=R.depthNear),R.depthFar>0&&(yt=R.depthFar)),C.near=W.near=z.near=pt,C.far=W.far=z.far=yt,(F!==C.near||ot!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),F=C.near,ot=C.far),z.layers.mask=J.layers.mask|2,W.layers.mask=J.layers.mask|4,C.layers.mask=z.layers.mask|W.layers.mask;const At=J.parent,Ct=C.cameras;Mt(C,At);for(let oe=0;oe<Ct.length;oe++)Mt(Ct[oe],At);Ct.length===2?Z(C,z,W):C.projectionMatrix.copy(z.projectionMatrix),U(J,C,At)};function U(J,pt,yt){yt===null?J.matrix.copy(pt.matrixWorld):(J.matrix.copy(yt.matrixWorld),J.matrix.invert(),J.matrix.multiply(pt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(pt.projectionMatrix),J.projectionMatrixInverse.copy(pt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=pd*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(S===null&&y===null))return m},this.setFoveation=function(J){m=J,S!==null&&(S.fixedFoveation=J),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=J)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(C)};let tt=null;function vt(J,pt){if(_=pt.getViewerPose(p||h),T=pt,_!==null){const yt=_.views;y!==null&&(t.setRenderTargetFramebuffer(B,y.framebuffer),t.setRenderTarget(B));let At=!1;yt.length!==C.cameras.length&&(C.cameras.length=0,At=!0);for(let Qt=0;Qt<yt.length;Qt++){const Le=yt[Qt];let Fe=null;if(y!==null)Fe=y.getViewport(Le);else{const I=v.getViewSubImage(S,Le);Fe=I.viewport,Qt===0&&(t.setRenderTargetTextures(B,I.colorTexture,I.depthStencilTexture),t.setRenderTarget(B))}let ge=D[Qt];ge===void 0&&(ge=new ci,ge.layers.enable(Qt),ge.viewport=new $e,D[Qt]=ge),ge.matrix.fromArray(Le.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(Le.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),Qt===0&&(C.matrix.copy(ge.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),At===!0&&C.cameras.push(ge)}const Ct=l.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const Qt=v.getDepthInformation(yt[0]);Qt&&Qt.isValid&&Qt.texture&&R.init(t,Qt,l.renderState)}}for(let yt=0;yt<L.length;yt++){const At=w[yt],Ct=L[yt];At!==null&&Ct!==void 0&&Ct.update(At,pt,p||h)}tt&&tt(J,pt),pt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:pt}),T=null}const xt=new Wv;xt.setAnimationLoop(vt),this.setAnimationLoop=function(J){tt=J},this.dispose=function(){}}}const _s=new ra,OA=new je;function PA(r,t){function i(M,g){M.matrixAutoUpdate===!0&&M.updateMatrix(),g.value.copy(M.matrix)}function s(M,g){g.color.getRGB(M.fogColor.value,zv(r)),g.isFog?(M.fogNear.value=g.near,M.fogFar.value=g.far):g.isFogExp2&&(M.fogDensity.value=g.density)}function l(M,g,B,L,w){g.isMeshBasicMaterial||g.isMeshLambertMaterial?c(M,g):g.isMeshToonMaterial?(c(M,g),v(M,g)):g.isMeshPhongMaterial?(c(M,g),_(M,g)):g.isMeshStandardMaterial?(c(M,g),S(M,g),g.isMeshPhysicalMaterial&&y(M,g,w)):g.isMeshMatcapMaterial?(c(M,g),T(M,g)):g.isMeshDepthMaterial?c(M,g):g.isMeshDistanceMaterial?(c(M,g),R(M,g)):g.isMeshNormalMaterial?c(M,g):g.isLineBasicMaterial?(h(M,g),g.isLineDashedMaterial&&d(M,g)):g.isPointsMaterial?m(M,g,B,L):g.isSpriteMaterial?p(M,g):g.isShadowMaterial?(M.color.value.copy(g.color),M.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function c(M,g){M.opacity.value=g.opacity,g.color&&M.diffuse.value.copy(g.color),g.emissive&&M.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(M.map.value=g.map,i(g.map,M.mapTransform)),g.alphaMap&&(M.alphaMap.value=g.alphaMap,i(g.alphaMap,M.alphaMapTransform)),g.bumpMap&&(M.bumpMap.value=g.bumpMap,i(g.bumpMap,M.bumpMapTransform),M.bumpScale.value=g.bumpScale,g.side===Hn&&(M.bumpScale.value*=-1)),g.normalMap&&(M.normalMap.value=g.normalMap,i(g.normalMap,M.normalMapTransform),M.normalScale.value.copy(g.normalScale),g.side===Hn&&M.normalScale.value.negate()),g.displacementMap&&(M.displacementMap.value=g.displacementMap,i(g.displacementMap,M.displacementMapTransform),M.displacementScale.value=g.displacementScale,M.displacementBias.value=g.displacementBias),g.emissiveMap&&(M.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,M.emissiveMapTransform)),g.specularMap&&(M.specularMap.value=g.specularMap,i(g.specularMap,M.specularMapTransform)),g.alphaTest>0&&(M.alphaTest.value=g.alphaTest);const B=t.get(g),L=B.envMap,w=B.envMapRotation;L&&(M.envMap.value=L,_s.copy(w),_s.x*=-1,_s.y*=-1,_s.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),M.envMapRotation.value.setFromMatrix4(OA.makeRotationFromEuler(_s)),M.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=g.reflectivity,M.ior.value=g.ior,M.refractionRatio.value=g.refractionRatio),g.lightMap&&(M.lightMap.value=g.lightMap,M.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,M.lightMapTransform)),g.aoMap&&(M.aoMap.value=g.aoMap,M.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,M.aoMapTransform))}function h(M,g){M.diffuse.value.copy(g.color),M.opacity.value=g.opacity,g.map&&(M.map.value=g.map,i(g.map,M.mapTransform))}function d(M,g){M.dashSize.value=g.dashSize,M.totalSize.value=g.dashSize+g.gapSize,M.scale.value=g.scale}function m(M,g,B,L){M.diffuse.value.copy(g.color),M.opacity.value=g.opacity,M.size.value=g.size*B,M.scale.value=L*.5,g.map&&(M.map.value=g.map,i(g.map,M.uvTransform)),g.alphaMap&&(M.alphaMap.value=g.alphaMap,i(g.alphaMap,M.alphaMapTransform)),g.alphaTest>0&&(M.alphaTest.value=g.alphaTest)}function p(M,g){M.diffuse.value.copy(g.color),M.opacity.value=g.opacity,M.rotation.value=g.rotation,g.map&&(M.map.value=g.map,i(g.map,M.mapTransform)),g.alphaMap&&(M.alphaMap.value=g.alphaMap,i(g.alphaMap,M.alphaMapTransform)),g.alphaTest>0&&(M.alphaTest.value=g.alphaTest)}function _(M,g){M.specular.value.copy(g.specular),M.shininess.value=Math.max(g.shininess,1e-4)}function v(M,g){g.gradientMap&&(M.gradientMap.value=g.gradientMap)}function S(M,g){M.metalness.value=g.metalness,g.metalnessMap&&(M.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,M.metalnessMapTransform)),M.roughness.value=g.roughness,g.roughnessMap&&(M.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,M.roughnessMapTransform)),g.envMap&&(M.envMapIntensity.value=g.envMapIntensity)}function y(M,g,B){M.ior.value=g.ior,g.sheen>0&&(M.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),M.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(M.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,M.sheenColorMapTransform)),g.sheenRoughnessMap&&(M.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,M.sheenRoughnessMapTransform))),g.clearcoat>0&&(M.clearcoat.value=g.clearcoat,M.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(M.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,M.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(M.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Hn&&M.clearcoatNormalScale.value.negate())),g.dispersion>0&&(M.dispersion.value=g.dispersion),g.iridescence>0&&(M.iridescence.value=g.iridescence,M.iridescenceIOR.value=g.iridescenceIOR,M.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(M.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,M.iridescenceMapTransform)),g.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),g.transmission>0&&(M.transmission.value=g.transmission,M.transmissionSamplerMap.value=B.texture,M.transmissionSamplerSize.value.set(B.width,B.height),g.transmissionMap&&(M.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,M.transmissionMapTransform)),M.thickness.value=g.thickness,g.thicknessMap&&(M.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=g.attenuationDistance,M.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(M.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(M.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=g.specularIntensity,M.specularColor.value.copy(g.specularColor),g.specularColorMap&&(M.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,M.specularColorMapTransform)),g.specularIntensityMap&&(M.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,M.specularIntensityMapTransform))}function T(M,g){g.matcap&&(M.matcap.value=g.matcap)}function R(M,g){const B=t.get(g).light;M.referencePosition.value.setFromMatrixPosition(B.matrixWorld),M.nearDistance.value=B.shadow.camera.near,M.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function zA(r,t,i,s){let l={},c={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(B,L){const w=L.program;s.uniformBlockBinding(B,w)}function p(B,L){let w=l[B.id];w===void 0&&(T(B),w=_(B),l[B.id]=w,B.addEventListener("dispose",M));const G=L.program;s.updateUBOMapping(B,G);const V=t.render.frame;c[B.id]!==V&&(S(B),c[B.id]=V)}function _(B){const L=v();B.__bindingPointIndex=L;const w=r.createBuffer(),G=B.__size,V=B.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,G,V),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,w),w}function v(){for(let B=0;B<d;B++)if(h.indexOf(B)===-1)return h.push(B),B;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(B){const L=l[B.id],w=B.uniforms,G=B.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let V=0,z=w.length;V<z;V++){const W=Array.isArray(w[V])?w[V]:[w[V]];for(let D=0,C=W.length;D<C;D++){const F=W[D];if(y(F,V,D,G)===!0){const ot=F.__offset,rt=Array.isArray(F.value)?F.value:[F.value];let gt=0;for(let ht=0;ht<rt.length;ht++){const P=rt[ht],K=R(P);typeof P=="number"||typeof P=="boolean"?(F.__data[0]=P,r.bufferSubData(r.UNIFORM_BUFFER,ot+gt,F.__data)):P.isMatrix3?(F.__data[0]=P.elements[0],F.__data[1]=P.elements[1],F.__data[2]=P.elements[2],F.__data[3]=0,F.__data[4]=P.elements[3],F.__data[5]=P.elements[4],F.__data[6]=P.elements[5],F.__data[7]=0,F.__data[8]=P.elements[6],F.__data[9]=P.elements[7],F.__data[10]=P.elements[8],F.__data[11]=0):(P.toArray(F.__data,gt),gt+=K.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,ot,F.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(B,L,w,G){const V=B.value,z=L+"_"+w;if(G[z]===void 0)return typeof V=="number"||typeof V=="boolean"?G[z]=V:G[z]=V.clone(),!0;{const W=G[z];if(typeof V=="number"||typeof V=="boolean"){if(W!==V)return G[z]=V,!0}else if(W.equals(V)===!1)return W.copy(V),!0}return!1}function T(B){const L=B.uniforms;let w=0;const G=16;for(let z=0,W=L.length;z<W;z++){const D=Array.isArray(L[z])?L[z]:[L[z]];for(let C=0,F=D.length;C<F;C++){const ot=D[C],rt=Array.isArray(ot.value)?ot.value:[ot.value];for(let gt=0,ht=rt.length;gt<ht;gt++){const P=rt[gt],K=R(P),Z=w%G,Mt=Z%K.boundary,U=Z+Mt;w+=Mt,U!==0&&G-U<K.storage&&(w+=G-U),ot.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),ot.__offset=w,w+=K.storage}}}const V=w%G;return V>0&&(w+=G-V),B.__size=w,B.__cache={},this}function R(B){const L={boundary:0,storage:0};return typeof B=="number"||typeof B=="boolean"?(L.boundary=4,L.storage=4):B.isVector2?(L.boundary=8,L.storage=8):B.isVector3||B.isColor?(L.boundary=16,L.storage=12):B.isVector4?(L.boundary=16,L.storage=16):B.isMatrix3?(L.boundary=48,L.storage=48):B.isMatrix4?(L.boundary=64,L.storage=64):B.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",B),L}function M(B){const L=B.target;L.removeEventListener("dispose",M);const w=h.indexOf(L.__bindingPointIndex);h.splice(w,1),r.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function g(){for(const B in l)r.deleteBuffer(l[B]);h=[],l={},c={}}return{bind:m,update:p,dispose:g}}class BA{constructor(t={}){const{canvas:i=ty(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:S=!1}=t;this.isWebGLRenderer=!0;let y;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=s.getContextAttributes().alpha}else y=h;const T=new Uint32Array(4),R=new Int32Array(4);let M=null,g=null;const B=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ka,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let G=!1;this._outputColorSpace=li;let V=0,z=0,W=null,D=-1,C=null;const F=new $e,ot=new $e;let rt=null;const gt=new be(0);let ht=0,P=i.width,K=i.height,Z=1,Mt=null,U=null;const tt=new $e(0,0,P,K),vt=new $e(0,0,P,K);let xt=!1;const J=new Fv;let pt=!1,yt=!1;const At=new je,Ct=new je,oe=new X,Qt=new $e,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function ge(){return W===null?Z:1}let I=s;function xn(A,Y){return i.getContext(A,Y)}try{const A={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${gd}`),i.addEventListener("webglcontextlost",zt,!1),i.addEventListener("webglcontextrestored",bt,!1),i.addEventListener("webglcontextcreationerror",_t,!1),I===null){const Y="webgl2";if(I=xn(Y,A),I===null)throw xn(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ye,pe,Gt,ve,Zt,ae,Ke,N,E,et,ut,dt,lt,Ot,Dt,Ht,Vt,St,Pt,qt,Yt,Rt,ie,k;function Ut(){ye=new YT(I),ye.init(),Rt=new wA(I,ye),pe=new HT(I,ye,t,Rt),Gt=new RA(I,ye),pe.reverseDepthBuffer&&S&&Gt.buffers.depth.setReversed(!0),ve=new KT(I),Zt=new pA,ae=new CA(I,ye,Gt,Zt,pe,Rt,ve),Ke=new VT(w),N=new qT(w),E=new nM(I),ie=new IT(I,E),et=new ZT(I,E,ve,ie),ut=new JT(I,et,E,ve),Pt=new QT(I,pe,ae),Ht=new GT(Zt),dt=new dA(w,Ke,N,ye,pe,ie,Ht),lt=new PA(w,Zt),Ot=new _A,Dt=new MA(ye),St=new BT(w,Ke,N,Gt,ut,y,m),Vt=new bA(w,ut,pe),k=new zA(I,ve,pe,Gt),qt=new FT(I,ye,ve),Yt=new jT(I,ye,ve),ve.programs=dt.programs,w.capabilities=pe,w.extensions=ye,w.properties=Zt,w.renderLists=Ot,w.shadowMap=Vt,w.state=Gt,w.info=ve}Ut();const Et=new NA(w,I);this.xr=Et,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=ye.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ye.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(A){A!==void 0&&(Z=A,this.setSize(P,K,!1))},this.getSize=function(A){return A.set(P,K)},this.setSize=function(A,Y,at=!0){if(Et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=A,K=Y,i.width=Math.floor(A*Z),i.height=Math.floor(Y*Z),at===!0&&(i.style.width=A+"px",i.style.height=Y+"px"),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(P*Z,K*Z).floor()},this.setDrawingBufferSize=function(A,Y,at){P=A,K=Y,Z=at,i.width=Math.floor(A*at),i.height=Math.floor(Y*at),this.setViewport(0,0,A,Y)},this.getCurrentViewport=function(A){return A.copy(F)},this.getViewport=function(A){return A.copy(tt)},this.setViewport=function(A,Y,at,st){A.isVector4?tt.set(A.x,A.y,A.z,A.w):tt.set(A,Y,at,st),Gt.viewport(F.copy(tt).multiplyScalar(Z).round())},this.getScissor=function(A){return A.copy(vt)},this.setScissor=function(A,Y,at,st){A.isVector4?vt.set(A.x,A.y,A.z,A.w):vt.set(A,Y,at,st),Gt.scissor(ot.copy(vt).multiplyScalar(Z).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(A){Gt.setScissorTest(xt=A)},this.setOpaqueSort=function(A){Mt=A},this.setTransparentSort=function(A){U=A},this.getClearColor=function(A){return A.copy(St.getClearColor())},this.setClearColor=function(){St.setClearColor(...arguments)},this.getClearAlpha=function(){return St.getClearAlpha()},this.setClearAlpha=function(){St.setClearAlpha(...arguments)},this.clear=function(A=!0,Y=!0,at=!0){let st=0;if(A){let j=!1;if(W!==null){const Tt=W.texture.format;j=Tt===Ed||Tt===Md||Tt===yd}if(j){const Tt=W.texture.type,wt=Tt===sa||Tt===Ms||Tt===No||Tt===Oo||Tt===Sd||Tt===xd,Nt=St.getClearColor(),Bt=St.getClearAlpha(),te=Nt.r,Kt=Nt.g,kt=Nt.b;wt?(T[0]=te,T[1]=Kt,T[2]=kt,T[3]=Bt,I.clearBufferuiv(I.COLOR,0,T)):(R[0]=te,R[1]=Kt,R[2]=kt,R[3]=Bt,I.clearBufferiv(I.COLOR,0,R))}else st|=I.COLOR_BUFFER_BIT}Y&&(st|=I.DEPTH_BUFFER_BIT),at&&(st|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",zt,!1),i.removeEventListener("webglcontextrestored",bt,!1),i.removeEventListener("webglcontextcreationerror",_t,!1),St.dispose(),Ot.dispose(),Dt.dispose(),Zt.dispose(),Ke.dispose(),N.dispose(),ut.dispose(),ie.dispose(),k.dispose(),dt.dispose(),Et.dispose(),Et.removeEventListener("sessionstart",sn),Et.removeEventListener("sessionend",yn),Nn.stop()};function zt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function bt(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const A=ve.autoReset,Y=Vt.enabled,at=Vt.autoUpdate,st=Vt.needsUpdate,j=Vt.type;Ut(),ve.autoReset=A,Vt.enabled=Y,Vt.autoUpdate=at,Vt.needsUpdate=st,Vt.type=j}function _t(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function It(A){const Y=A.target;Y.removeEventListener("dispose",It),ne(Y)}function ne(A){we(A),Zt.remove(A)}function we(A){const Y=Zt.get(A).programs;Y!==void 0&&(Y.forEach(function(at){dt.releaseProgram(at)}),A.isShaderMaterial&&dt.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,at,st,j,Tt){Y===null&&(Y=Le);const wt=j.isMesh&&j.matrixWorld.determinant()<0,Nt=Za(A,Y,at,st,j);Gt.setMaterial(st,wt);let Bt=at.index,te=1;if(st.wireframe===!0){if(Bt=et.getWireframeAttribute(at),Bt===void 0)return;te=2}const Kt=at.drawRange,kt=at.attributes.position;let le=Kt.start*te,Re=(Kt.start+Kt.count)*te;Tt!==null&&(le=Math.max(le,Tt.start*te),Re=Math.min(Re,(Tt.start+Tt.count)*te)),Bt!==null?(le=Math.max(le,0),Re=Math.min(Re,Bt.count)):kt!=null&&(le=Math.max(le,0),Re=Math.min(Re,kt.count));const Xe=Re-le;if(Xe<0||Xe===1/0)return;ie.setup(j,st,Nt,at,Bt);let he,Ce=qt;if(Bt!==null&&(he=E.get(Bt),Ce=Yt,Ce.setIndex(he)),j.isMesh)st.wireframe===!0?(Gt.setLineWidth(st.wireframeLinewidth*ge()),Ce.setMode(I.LINES)):Ce.setMode(I.TRIANGLES);else if(j.isLine){let jt=st.linewidth;jt===void 0&&(jt=1),Gt.setLineWidth(jt*ge()),j.isLineSegments?Ce.setMode(I.LINES):j.isLineLoop?Ce.setMode(I.LINE_LOOP):Ce.setMode(I.LINE_STRIP)}else j.isPoints?Ce.setMode(I.POINTS):j.isSprite&&Ce.setMode(I.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)yr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ce.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(ye.get("WEBGL_multi_draw"))Ce.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const jt=j._multiDrawStarts,Ne=j._multiDrawCounts,Se=j._multiDrawCount,pn=Bt?E.get(Bt).bytesPerElement:1,fa=Zt.get(st).currentProgram.getUniforms();for(let Ve=0;Ve<Se;Ve++)fa.setValue(I,"_gl_DrawID",Ve),Ce.render(jt[Ve]/pn,Ne[Ve])}else if(j.isInstancedMesh)Ce.renderInstances(le,Xe,j.count);else if(at.isInstancedBufferGeometry){const jt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Ne=Math.min(at.instanceCount,jt);Ce.renderInstances(le,Xe,Ne)}else Ce.render(le,Xe)};function Me(A,Y,at){A.transparent===!0&&A.side===Ai&&A.forceSinglePass===!1?(A.side=Hn,A.needsUpdate=!0,ca(A,Y,at),A.side=Xa,A.needsUpdate=!0,ca(A,Y,at),A.side=Ai):ca(A,Y,at)}this.compile=function(A,Y,at=null){at===null&&(at=A),g=Dt.get(at),g.init(Y),L.push(g),at.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),A!==at&&A.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),g.setupLights();const st=new Set;return A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Tt=j.material;if(Tt)if(Array.isArray(Tt))for(let wt=0;wt<Tt.length;wt++){const Nt=Tt[wt];Me(Nt,at,j),st.add(Nt)}else Me(Tt,at,j),st.add(Tt)}),g=L.pop(),st},this.compileAsync=function(A,Y,at=null){const st=this.compile(A,Y,at);return new Promise(j=>{function Tt(){if(st.forEach(function(wt){Zt.get(wt).currentProgram.isReady()&&st.delete(wt)}),st.size===0){j(A);return}setTimeout(Tt,10)}ye.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Xn=null;function dn(A){Xn&&Xn(A)}function sn(){Nn.stop()}function yn(){Nn.start()}const Nn=new Wv;Nn.setAnimationLoop(dn),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(A){Xn=A,Et.setAnimationLoop(A),A===null?Nn.stop():Nn.start()},Et.addEventListener("sessionstart",sn),Et.addEventListener("sessionend",yn),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Et.enabled===!0&&Et.isPresenting===!0&&(Et.cameraAutoUpdate===!0&&Et.updateCamera(Y),Y=Et.getCamera()),A.isScene===!0&&A.onBeforeRender(w,A,Y,W),g=Dt.get(A,L.length),g.init(Y),L.push(g),Ct.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),J.setFromProjectionMatrix(Ct),yt=this.localClippingEnabled,pt=Ht.init(this.clippingPlanes,yt),M=Ot.get(A,B.length),M.init(),B.push(M),Et.enabled===!0&&Et.isPresenting===!0){const Tt=w.xr.getDepthSensingMesh();Tt!==null&&qa(Tt,Y,-1/0,w.sortObjects)}qa(A,Y,0,w.sortObjects),M.finish(),w.sortObjects===!0&&M.sort(Mt,U),Fe=Et.enabled===!1||Et.isPresenting===!1||Et.hasDepthSensing()===!1,Fe&&St.addToRenderList(M,A),this.info.render.frame++,pt===!0&&Ht.beginShadows();const at=g.state.shadowsArray;Vt.render(at,A,Y),pt===!0&&Ht.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=M.opaque,j=M.transmissive;if(g.setupLights(),Y.isArrayCamera){const Tt=Y.cameras;if(j.length>0)for(let wt=0,Nt=Tt.length;wt<Nt;wt++){const Bt=Tt[wt];ko(st,j,A,Bt)}Fe&&St.render(A);for(let wt=0,Nt=Tt.length;wt<Nt;wt++){const Bt=Tt[wt];Vo(M,A,Bt,Bt.viewport)}}else j.length>0&&ko(st,j,A,Y),Fe&&St.render(A),Vo(M,A,Y);W!==null&&z===0&&(ae.updateMultisampleRenderTarget(W),ae.updateRenderTargetMipmap(W)),A.isScene===!0&&A.onAfterRender(w,A,Y),ie.resetDefaultState(),D=-1,C=null,L.pop(),L.length>0?(g=L[L.length-1],pt===!0&&Ht.setGlobalState(w.clippingPlanes,g.state.camera)):g=null,B.pop(),B.length>0?M=B[B.length-1]:M=null};function qa(A,Y,at,st){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)at=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||J.intersectsSprite(A)){st&&Qt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ct);const wt=ut.update(A),Nt=A.material;Nt.visible&&M.push(A,wt,Nt,at,Qt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||J.intersectsObject(A))){const wt=ut.update(A),Nt=A.material;if(st&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Qt.copy(A.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Qt.copy(wt.boundingSphere.center)),Qt.applyMatrix4(A.matrixWorld).applyMatrix4(Ct)),Array.isArray(Nt)){const Bt=wt.groups;for(let te=0,Kt=Bt.length;te<Kt;te++){const kt=Bt[te],le=Nt[kt.materialIndex];le&&le.visible&&M.push(A,wt,le,at,Qt.z,kt)}}else Nt.visible&&M.push(A,wt,Nt,at,Qt.z,null)}}const Tt=A.children;for(let wt=0,Nt=Tt.length;wt<Nt;wt++)qa(Tt[wt],Y,at,st)}function Vo(A,Y,at,st){const j=A.opaque,Tt=A.transmissive,wt=A.transparent;g.setupLightsView(at),pt===!0&&Ht.setGlobalState(w.clippingPlanes,at),st&&Gt.viewport(F.copy(st)),j.length>0&&Ya(j,Y,at),Tt.length>0&&Ya(Tt,Y,at),wt.length>0&&Ya(wt,Y,at),Gt.buffers.depth.setTest(!0),Gt.buffers.depth.setMask(!0),Gt.buffers.color.setMask(!0),Gt.setPolygonOffset(!1)}function ko(A,Y,at,st){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[st.id]===void 0&&(g.state.transmissionRenderTarget[st.id]=new Ts(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float")?Bo:sa,minFilter:ys,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace}));const Tt=g.state.transmissionRenderTarget[st.id],wt=st.viewport||F;Tt.setSize(wt.z*w.transmissionResolutionScale,wt.w*w.transmissionResolutionScale);const Nt=w.getRenderTarget(),Bt=w.getActiveCubeFace(),te=w.getActiveMipmapLevel();w.setRenderTarget(Tt),w.getClearColor(gt),ht=w.getClearAlpha(),ht<1&&w.setClearColor(16777215,.5),w.clear(),Fe&&St.render(at);const Kt=w.toneMapping;w.toneMapping=ka;const kt=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),g.setupLightsView(st),pt===!0&&Ht.setGlobalState(w.clippingPlanes,st),Ya(A,at,st),ae.updateMultisampleRenderTarget(Tt),ae.updateRenderTargetMipmap(Tt),ye.has("WEBGL_multisampled_render_to_texture")===!1){let le=!1;for(let Re=0,Xe=Y.length;Re<Xe;Re++){const he=Y[Re],Ce=he.object,jt=he.geometry,Ne=he.material,Se=he.group;if(Ne.side===Ai&&Ce.layers.test(st.layers)){const pn=Ne.side;Ne.side=Hn,Ne.needsUpdate=!0,la(Ce,at,st,jt,Ne,Se),Ne.side=pn,Ne.needsUpdate=!0,le=!0}}le===!0&&(ae.updateMultisampleRenderTarget(Tt),ae.updateRenderTargetMipmap(Tt))}w.setRenderTarget(Nt,Bt,te),w.setClearColor(gt,ht),kt!==void 0&&(st.viewport=kt),w.toneMapping=Kt}function Ya(A,Y,at){const st=Y.isScene===!0?Y.overrideMaterial:null;for(let j=0,Tt=A.length;j<Tt;j++){const wt=A[j],Nt=wt.object,Bt=wt.geometry,te=wt.group;let Kt=wt.material;Kt.allowOverride===!0&&st!==null&&(Kt=st),Nt.layers.test(at.layers)&&la(Nt,Y,at,Bt,Kt,te)}}function la(A,Y,at,st,j,Tt){A.onBeforeRender(w,Y,at,st,j,Tt),A.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(w,Y,at,st,A,Tt),j.transparent===!0&&j.side===Ai&&j.forceSinglePass===!1?(j.side=Hn,j.needsUpdate=!0,w.renderBufferDirect(at,Y,st,j,A,Tt),j.side=Xa,j.needsUpdate=!0,w.renderBufferDirect(at,Y,st,j,A,Tt),j.side=Ai):w.renderBufferDirect(at,Y,st,j,A,Tt),A.onAfterRender(w,Y,at,st,j,Tt)}function ca(A,Y,at){Y.isScene!==!0&&(Y=Le);const st=Zt.get(A),j=g.state.lights,Tt=g.state.shadowsArray,wt=j.state.version,Nt=dt.getParameters(A,j.state,Tt,Y,at),Bt=dt.getProgramCacheKey(Nt);let te=st.programs;st.environment=A.isMeshStandardMaterial?Y.environment:null,st.fog=Y.fog,st.envMap=(A.isMeshStandardMaterial?N:Ke).get(A.envMap||st.environment),st.envMapRotation=st.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,te===void 0&&(A.addEventListener("dispose",It),te=new Map,st.programs=te);let Kt=te.get(Bt);if(Kt!==void 0){if(st.currentProgram===Kt&&st.lightsStateVersion===wt)return Li(A,Nt),Kt}else Nt.uniforms=dt.getUniforms(A),A.onBeforeCompile(Nt,w),Kt=dt.acquireProgram(Nt,Bt),te.set(Bt,Kt),st.uniforms=Nt.uniforms;const kt=st.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(kt.clippingPlanes=Ht.uniform),Li(A,Nt),st.needsLights=tn(A),st.lightsStateVersion=wt,st.needsLights&&(kt.ambientLightColor.value=j.state.ambient,kt.lightProbe.value=j.state.probe,kt.directionalLights.value=j.state.directional,kt.directionalLightShadows.value=j.state.directionalShadow,kt.spotLights.value=j.state.spot,kt.spotLightShadows.value=j.state.spotShadow,kt.rectAreaLights.value=j.state.rectArea,kt.ltc_1.value=j.state.rectAreaLTC1,kt.ltc_2.value=j.state.rectAreaLTC2,kt.pointLights.value=j.state.point,kt.pointLightShadows.value=j.state.pointShadow,kt.hemisphereLights.value=j.state.hemi,kt.directionalShadowMap.value=j.state.directionalShadowMap,kt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,kt.spotShadowMap.value=j.state.spotShadowMap,kt.spotLightMatrix.value=j.state.spotLightMatrix,kt.spotLightMap.value=j.state.spotLightMap,kt.pointShadowMap.value=j.state.pointShadowMap,kt.pointShadowMatrix.value=j.state.pointShadowMatrix),st.currentProgram=Kt,st.uniformsList=null,Kt}function Ui(A){if(A.uniformsList===null){const Y=A.currentProgram.getUniforms();A.uniformsList=Dc.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function Li(A,Y){const at=Zt.get(A);at.outputColorSpace=Y.outputColorSpace,at.batching=Y.batching,at.batchingColor=Y.batchingColor,at.instancing=Y.instancing,at.instancingColor=Y.instancingColor,at.instancingMorph=Y.instancingMorph,at.skinning=Y.skinning,at.morphTargets=Y.morphTargets,at.morphNormals=Y.morphNormals,at.morphColors=Y.morphColors,at.morphTargetsCount=Y.morphTargetsCount,at.numClippingPlanes=Y.numClippingPlanes,at.numIntersection=Y.numClipIntersection,at.vertexAlphas=Y.vertexAlphas,at.vertexTangents=Y.vertexTangents,at.toneMapping=Y.toneMapping}function Za(A,Y,at,st,j){Y.isScene!==!0&&(Y=Le),ae.resetTextureUnits();const Tt=Y.fog,wt=st.isMeshStandardMaterial?Y.environment:null,Nt=W===null?w.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Ar,Bt=(st.isMeshStandardMaterial?N:Ke).get(st.envMap||wt),te=st.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,Kt=!!at.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),kt=!!at.morphAttributes.position,le=!!at.morphAttributes.normal,Re=!!at.morphAttributes.color;let Xe=ka;st.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Xe=w.toneMapping);const he=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,Ce=he!==void 0?he.length:0,jt=Zt.get(st),Ne=g.state.lights;if(pt===!0&&(yt===!0||A!==C)){const mn=A===C&&st.id===D;Ht.setState(st,A,mn)}let Se=!1;st.version===jt.__version?(jt.needsLights&&jt.lightsStateVersion!==Ne.state.version||jt.outputColorSpace!==Nt||j.isBatchedMesh&&jt.batching===!1||!j.isBatchedMesh&&jt.batching===!0||j.isBatchedMesh&&jt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&jt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&jt.instancing===!1||!j.isInstancedMesh&&jt.instancing===!0||j.isSkinnedMesh&&jt.skinning===!1||!j.isSkinnedMesh&&jt.skinning===!0||j.isInstancedMesh&&jt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&jt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&jt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&jt.instancingMorph===!1&&j.morphTexture!==null||jt.envMap!==Bt||st.fog===!0&&jt.fog!==Tt||jt.numClippingPlanes!==void 0&&(jt.numClippingPlanes!==Ht.numPlanes||jt.numIntersection!==Ht.numIntersection)||jt.vertexAlphas!==te||jt.vertexTangents!==Kt||jt.morphTargets!==kt||jt.morphNormals!==le||jt.morphColors!==Re||jt.toneMapping!==Xe||jt.morphTargetsCount!==Ce)&&(Se=!0):(Se=!0,jt.__version=st.version);let pn=jt.currentProgram;Se===!0&&(pn=ca(st,Y,j));let fa=!1,Ve=!1,Oi=!1;const He=pn.getUniforms(),An=jt.uniforms;if(Gt.useProgram(pn.program)&&(fa=!0,Ve=!0,Oi=!0),st.id!==D&&(D=st.id,Ve=!0),fa||C!==A){Gt.buffers.depth.getReversed()?(At.copy(A.projectionMatrix),ny(At),iy(At),He.setValue(I,"projectionMatrix",At)):He.setValue(I,"projectionMatrix",A.projectionMatrix),He.setValue(I,"viewMatrix",A.matrixWorldInverse);const Mn=He.map.cameraPosition;Mn!==void 0&&Mn.setValue(I,oe.setFromMatrixPosition(A.matrixWorld)),pe.logarithmicDepthBuffer&&He.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&He.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,Ve=!0,Oi=!0)}if(j.isSkinnedMesh){He.setOptional(I,j,"bindMatrix"),He.setOptional(I,j,"bindMatrixInverse");const mn=j.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),He.setValue(I,"boneTexture",mn.boneTexture,ae))}j.isBatchedMesh&&(He.setOptional(I,j,"batchingTexture"),He.setValue(I,"batchingTexture",j._matricesTexture,ae),He.setOptional(I,j,"batchingIdTexture"),He.setValue(I,"batchingIdTexture",j._indirectTexture,ae),He.setOptional(I,j,"batchingColorTexture"),j._colorsTexture!==null&&He.setValue(I,"batchingColorTexture",j._colorsTexture,ae));const rn=at.morphAttributes;if((rn.position!==void 0||rn.normal!==void 0||rn.color!==void 0)&&Pt.update(j,at,pn),(Ve||jt.receiveShadow!==j.receiveShadow)&&(jt.receiveShadow=j.receiveShadow,He.setValue(I,"receiveShadow",j.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(An.envMap.value=Bt,An.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&Y.environment!==null&&(An.envMapIntensity.value=Y.environmentIntensity),Ve&&(He.setValue(I,"toneMappingExposure",w.toneMappingExposure),jt.needsLights&&ua(An,Oi),Tt&&st.fog===!0&&lt.refreshFogUniforms(An,Tt),lt.refreshMaterialUniforms(An,st,Z,K,g.state.transmissionRenderTarget[A.id]),Dc.upload(I,Ui(jt),An,ae)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Dc.upload(I,Ui(jt),An,ae),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&He.setValue(I,"center",j.center),He.setValue(I,"modelViewMatrix",j.modelViewMatrix),He.setValue(I,"normalMatrix",j.normalMatrix),He.setValue(I,"modelMatrix",j.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const mn=st.uniformsGroups;for(let Mn=0,Si=mn.length;Mn<Si;Mn++){const Pi=mn[Mn];k.update(Pi,pn),k.bind(Pi,pn)}}return pn}function ua(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function tn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(A,Y,at){const st=Zt.get(A);st.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),Zt.get(A.texture).__webglTexture=Y,Zt.get(A.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:at,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Y){const at=Zt.get(A);at.__webglFramebuffer=Y,at.__useDefaultFramebuffer=Y===void 0};const Xo=I.createFramebuffer();this.setRenderTarget=function(A,Y=0,at=0){W=A,V=Y,z=at;let st=!0,j=null,Tt=!1,wt=!1;if(A){const Bt=Zt.get(A);if(Bt.__useDefaultFramebuffer!==void 0)Gt.bindFramebuffer(I.FRAMEBUFFER,null),st=!1;else if(Bt.__webglFramebuffer===void 0)ae.setupRenderTarget(A);else if(Bt.__hasExternalTextures)ae.rebindTextures(A,Zt.get(A.texture).__webglTexture,Zt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const kt=A.depthTexture;if(Bt.__boundDepthTexture!==kt){if(kt!==null&&Zt.has(kt)&&(A.width!==kt.image.width||A.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(A)}}const te=A.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(wt=!0);const Kt=Zt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Kt[Y])?j=Kt[Y][at]:j=Kt[Y],Tt=!0):A.samples>0&&ae.useMultisampledRTT(A)===!1?j=Zt.get(A).__webglMultisampledFramebuffer:Array.isArray(Kt)?j=Kt[at]:j=Kt,F.copy(A.viewport),ot.copy(A.scissor),rt=A.scissorTest}else F.copy(tt).multiplyScalar(Z).floor(),ot.copy(vt).multiplyScalar(Z).floor(),rt=xt;if(at!==0&&(j=Xo),Gt.bindFramebuffer(I.FRAMEBUFFER,j)&&st&&Gt.drawBuffers(A,j),Gt.viewport(F),Gt.scissor(ot),Gt.setScissorTest(rt),Tt){const Bt=Zt.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Bt.__webglTexture,at)}else if(wt){const Bt=Zt.get(A.texture),te=Y;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Bt.__webglTexture,at,te)}else if(A!==null&&at!==0){const Bt=Zt.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Bt.__webglTexture,at)}D=-1},this.readRenderTargetPixels=function(A,Y,at,st,j,Tt,wt,Nt=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=Zt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&wt!==void 0&&(Bt=Bt[wt]),Bt){Gt.bindFramebuffer(I.FRAMEBUFFER,Bt);try{const te=A.textures[Nt],Kt=te.format,kt=te.type;if(!pe.textureFormatReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pe.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-st&&at>=0&&at<=A.height-j&&(A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Nt),I.readPixels(Y,at,st,j,Rt.convert(Kt),Rt.convert(kt),Tt))}finally{const te=W!==null?Zt.get(W).__webglFramebuffer:null;Gt.bindFramebuffer(I.FRAMEBUFFER,te)}}},this.readRenderTargetPixelsAsync=async function(A,Y,at,st,j,Tt,wt,Nt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=Zt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&wt!==void 0&&(Bt=Bt[wt]),Bt)if(Y>=0&&Y<=A.width-st&&at>=0&&at<=A.height-j){Gt.bindFramebuffer(I.FRAMEBUFFER,Bt);const te=A.textures[Nt],Kt=te.format,kt=te.type;if(!pe.textureFormatReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pe.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const le=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,le),I.bufferData(I.PIXEL_PACK_BUFFER,Tt.byteLength,I.STREAM_READ),A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Nt),I.readPixels(Y,at,st,j,Rt.convert(Kt),Rt.convert(kt),0);const Re=W!==null?Zt.get(W).__webglFramebuffer:null;Gt.bindFramebuffer(I.FRAMEBUFFER,Re);const Xe=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await ey(I,Xe,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,le),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Tt),I.deleteBuffer(le),I.deleteSync(Xe),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Y=null,at=0){const st=Math.pow(2,-at),j=Math.floor(A.image.width*st),Tt=Math.floor(A.image.height*st),wt=Y!==null?Y.x:0,Nt=Y!==null?Y.y:0;ae.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,at,0,0,wt,Nt,j,Tt),Gt.unbindTexture()};const Wo=I.createFramebuffer(),Ni=I.createFramebuffer();this.copyTextureToTexture=function(A,Y,at=null,st=null,j=0,Tt=null){Tt===null&&(j!==0?(yr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=j,j=0):Tt=0);let wt,Nt,Bt,te,Kt,kt,le,Re,Xe;const he=A.isCompressedTexture?A.mipmaps[Tt]:A.image;if(at!==null)wt=at.max.x-at.min.x,Nt=at.max.y-at.min.y,Bt=at.isBox3?at.max.z-at.min.z:1,te=at.min.x,Kt=at.min.y,kt=at.isBox3?at.min.z:0;else{const rn=Math.pow(2,-j);wt=Math.floor(he.width*rn),Nt=Math.floor(he.height*rn),A.isDataArrayTexture?Bt=he.depth:A.isData3DTexture?Bt=Math.floor(he.depth*rn):Bt=1,te=0,Kt=0,kt=0}st!==null?(le=st.x,Re=st.y,Xe=st.z):(le=0,Re=0,Xe=0);const Ce=Rt.convert(Y.format),jt=Rt.convert(Y.type);let Ne;Y.isData3DTexture?(ae.setTexture3D(Y,0),Ne=I.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(ae.setTexture2DArray(Y,0),Ne=I.TEXTURE_2D_ARRAY):(ae.setTexture2D(Y,0),Ne=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,Y.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,Y.unpackAlignment);const Se=I.getParameter(I.UNPACK_ROW_LENGTH),pn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),fa=I.getParameter(I.UNPACK_SKIP_PIXELS),Ve=I.getParameter(I.UNPACK_SKIP_ROWS),Oi=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,he.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,he.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,te),I.pixelStorei(I.UNPACK_SKIP_ROWS,Kt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,kt);const He=A.isDataArrayTexture||A.isData3DTexture,An=Y.isDataArrayTexture||Y.isData3DTexture;if(A.isDepthTexture){const rn=Zt.get(A),mn=Zt.get(Y),Mn=Zt.get(rn.__renderTarget),Si=Zt.get(mn.__renderTarget);Gt.bindFramebuffer(I.READ_FRAMEBUFFER,Mn.__webglFramebuffer),Gt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Si.__webglFramebuffer);for(let Pi=0;Pi<Bt;Pi++)He&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Zt.get(A).__webglTexture,j,kt+Pi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Zt.get(Y).__webglTexture,Tt,Xe+Pi)),I.blitFramebuffer(te,Kt,wt,Nt,le,Re,wt,Nt,I.DEPTH_BUFFER_BIT,I.NEAREST);Gt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(j!==0||A.isRenderTargetTexture||Zt.has(A)){const rn=Zt.get(A),mn=Zt.get(Y);Gt.bindFramebuffer(I.READ_FRAMEBUFFER,Wo),Gt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ni);for(let Mn=0;Mn<Bt;Mn++)He?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,rn.__webglTexture,j,kt+Mn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,rn.__webglTexture,j),An?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,mn.__webglTexture,Tt,Xe+Mn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,mn.__webglTexture,Tt),j!==0?I.blitFramebuffer(te,Kt,wt,Nt,le,Re,wt,Nt,I.COLOR_BUFFER_BIT,I.NEAREST):An?I.copyTexSubImage3D(Ne,Tt,le,Re,Xe+Mn,te,Kt,wt,Nt):I.copyTexSubImage2D(Ne,Tt,le,Re,te,Kt,wt,Nt);Gt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else An?A.isDataTexture||A.isData3DTexture?I.texSubImage3D(Ne,Tt,le,Re,Xe,wt,Nt,Bt,Ce,jt,he.data):Y.isCompressedArrayTexture?I.compressedTexSubImage3D(Ne,Tt,le,Re,Xe,wt,Nt,Bt,Ce,he.data):I.texSubImage3D(Ne,Tt,le,Re,Xe,wt,Nt,Bt,Ce,jt,he):A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Tt,le,Re,wt,Nt,Ce,jt,he.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Tt,le,Re,he.width,he.height,Ce,he.data):I.texSubImage2D(I.TEXTURE_2D,Tt,le,Re,wt,Nt,Ce,jt,he);I.pixelStorei(I.UNPACK_ROW_LENGTH,Se),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,pn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,fa),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ve),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Oi),Tt===0&&Y.generateMipmaps&&I.generateMipmap(Ne),Gt.unbindTexture()},this.copyTextureToTexture3D=function(A,Y,at=null,st=null,j=0){return yr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,Y,at,st,j)},this.initRenderTarget=function(A){Zt.get(A).__webglFramebuffer===void 0&&ae.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ae.setTextureCube(A,0):A.isData3DTexture?ae.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ae.setTexture2DArray(A,0):ae.setTexture2D(A,0),Gt.unbindTexture()},this.resetState=function(){V=0,z=0,W=null,Gt.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ia}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Te._getDrawingBufferColorSpace(t),i.unpackColorSpace=Te._getUnpackColorSpace()}}const mv={type:"change"},Dd={type:"start"},Kv={type:"end"},Ec=new bd,_v=new Ha,IA=Math.cos(70*$x.DEG2RAD),cn=new X,Fn=2*Math.PI,Ie={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ch=1e-6;class FA extends tM{constructor(t,i=null){super(t,i),this.state=Ie.NONE,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Sr.ROTATE,MIDDLE:Sr.DOLLY,RIGHT:Sr.PAN},this.touches={ONE:gr.ROTATE,TWO:gr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new X,this._lastQuaternion=new Es,this._lastTargetPosition=new X,this._quat=new Es().setFromUnitVectors(t.up,new X(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new kg,this._sphericalDelta=new kg,this._scale=1,this._panOffset=new X,this._rotateStart=new Wt,this._rotateEnd=new Wt,this._rotateDelta=new Wt,this._panStart=new Wt,this._panEnd=new Wt,this._panDelta=new Wt,this._dollyStart=new Wt,this._dollyEnd=new Wt,this._dollyDelta=new Wt,this._dollyDirection=new X,this._mouse=new Wt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=GA.bind(this),this._onPointerDown=HA.bind(this),this._onPointerUp=VA.bind(this),this._onContextMenu=jA.bind(this),this._onMouseWheel=WA.bind(this),this._onKeyDown=qA.bind(this),this._onTouchStart=YA.bind(this),this._onTouchMove=ZA.bind(this),this._onMouseDown=kA.bind(this),this._onMouseMove=XA.bind(this),this._interceptControlDown=KA.bind(this),this._interceptControlUp=QA.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(mv),this.update(),this.state=Ie.NONE}update(t=null){const i=this.object.position;cn.copy(i).sub(this.target),cn.applyQuaternion(this._quat),this._spherical.setFromVector3(cn),this.autoRotate&&this.state===Ie.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Fn:s>Math.PI&&(s-=Fn),l<-Math.PI?l+=Fn:l>Math.PI&&(l-=Fn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(cn.setFromSpherical(this._spherical),cn.applyQuaternion(this._quatInverse),i.copy(this.target).add(cn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=cn.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const d=new X(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new X(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=cn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Ec.origin.copy(this.object.position),Ec.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ec.direction))<IA?this.object.lookAt(this.target):(_v.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ec.intersectPlane(_v,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Ch||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ch||this._lastTargetPosition.distanceToSquared(this.target)>Ch?(this.dispatchEvent(mv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Fn/60*this.autoRotateSpeed*t:Fn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){cn.setFromMatrixColumn(i,0),cn.multiplyScalar(-t),this._panOffset.add(cn)}_panUp(t,i){this.screenSpacePanning===!0?cn.setFromMatrixColumn(i,1):(cn.setFromMatrixColumn(i,0),cn.crossVectors(this.object.up,cn)),cn.multiplyScalar(t),this._panOffset.add(cn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;cn.copy(l).sub(this.target);let c=cn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Fn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Fn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Fn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Fn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new Wt,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function HA(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function GA(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function VA(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Kv),this.state=Ie.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function kA(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Sr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Ie.DOLLY;break;case Sr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ie.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ie.ROTATE}break;case Sr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ie.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ie.PAN}break;default:this.state=Ie.NONE}this.state!==Ie.NONE&&this.dispatchEvent(Dd)}function XA(r){switch(this.state){case Ie.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Ie.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Ie.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function WA(r){this.enabled===!1||this.enableZoom===!1||this.state!==Ie.NONE||(r.preventDefault(),this.dispatchEvent(Dd),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Kv))}function qA(r){this.enabled!==!1&&this._handleKeyDown(r)}function YA(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case gr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Ie.TOUCH_ROTATE;break;case gr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Ie.TOUCH_PAN;break;default:this.state=Ie.NONE}break;case 2:switch(this.touches.TWO){case gr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Ie.TOUCH_DOLLY_PAN;break;case gr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Ie.TOUCH_DOLLY_ROTATE;break;default:this.state=Ie.NONE}break;default:this.state=Ie.NONE}this.state!==Ie.NONE&&this.dispatchEvent(Dd)}function ZA(r){switch(this._trackPointer(r),this.state){case Ie.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Ie.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Ie.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Ie.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Ie.NONE}}function jA(r){this.enabled!==!1&&r.preventDefault()}function KA(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function QA(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class JA extends og.Component{mountRef=og.createRef();scene;camera;renderer;line;controls;state={lineLength:"20",bendRadius:"",bendLength:"",bendStart:""};componentDidMount(){this.initThree()}componentDidUpdate(t){(t.lineLength!==this.state.lineLength||t.bendRadius!==this.state.bendRadius||t.bendLength!==this.state.bendLength||t.bendStart!==this.state.bendStart)&&this.updateLine()}componentWillUnmount(){this.renderer&&this.mountRef.current&&this.mountRef.current.removeChild(this.renderer.domElement)}initThree(){this.scene=new Cy,this.scene.background=new be(16777215),this.camera=new ci(75,600/400,.1,1e3),this.renderer=new BA({antialias:!0}),this.renderer.setSize(600,400),this.mountRef.current&&this.mountRef.current.appendChild(this.renderer.domElement),this.controls=new FA(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05;const s=new $y(200,100,8947848,13421772);this.scene.add(s),this.camera.position.set(20,20,20),this.camera.lookAt(0,0,0),this.createLine(),this.animate()}animate=()=>{requestAnimationFrame(this.animate),this.controls?.update(),this.renderer?.render(this.scene,this.camera)};createLine(){const t=parseFloat(this.state.lineLength),i=parseFloat(this.state.bendRadius),s=parseFloat(this.state.bendLength),l=parseFloat(this.state.bendStart),c=[],h=100,d=Math.max(.2,Math.abs(t)*.002),m=!isNaN(i)&&!isNaN(s)&&!isNaN(l)&&i>0&&s>0&&l>=0&&l+s<=t,p=isNaN(t)?0:t/2,_=-p,v=p;if(m){const R=l;R>0?(c.push(new X(_,0,0)),c.push(new X(_+R,0,0))):c.push(new X(_,0,0));const g=s/i,B=320,L=new X(_+l,0,0),w=1,G=L.x,V=L.y;for(let z=0;z<=B;z++){const D=z/B*g,C=G+i*Math.sin(D),F=V+i*(1-Math.cos(D))*w;c.push(new X(C,F,0))}if(l+s<t){const z=c[c.length-1],W=g,D=Math.cos(W),C=w*Math.sin(W),F=t-(l+s),ot=z.x+F*D,rt=z.y+F*C;c.push(new X(ot,rt,0))}}else c.push(new X(_,0,0),new X(v,0,0));this.line&&this.scene&&(this.scene.remove(this.line),this.line.geometry.dispose(),this.line.material.dispose&&this.line.material.dispose(),this.line=void 0);const S=new kv(c),y=new Cd(S,320,d,h,!1),T=new Ad({color:8421504,side:Ai});this.line=new Ci(y,T),this.scene?.add(this.line)}updateLine(){this.line&&this.scene&&(this.scene.remove(this.line),this.line.geometry.dispose(),this.line.material.dispose&&this.line.material.dispose(),this.line=void 0),this.createLine();const t=parseFloat(this.state.lineLength);if(this.camera){const l=isNaN(t)?10:Math.max(10,t*1.2/(2*Math.tan(this.camera.fov*Math.PI/360)));this.camera.position.z=l,this.camera.updateProjectionMatrix()}}handleInputChange=t=>{const{name:i,value:s}=t.target;this.setState({[i]:s})};setRandomValues=()=>{const t=Math.floor(Math.random()*481)+20,i=Math.random()*98+2,s=t*.8,l=Math.random()*(s-5)+5,c=t*.05,h=t-l-5,d=Math.max(c,Math.random()*(h-c)+c);this.setState({lineLength:t.toFixed(2),bendRadius:i.toFixed(2),bendLength:l.toFixed(2),bendStart:d.toFixed(2)})};render(){const{lineLength:t,bendRadius:i,bendLength:s,bendStart:l}=this.state;return un.jsxs("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[un.jsx("h2",{children:"3D Line Simulation"}),un.jsxs("form",{style:{display:"flex",flexWrap:"wrap",gap:12,marginBottom:24,justifyContent:"center"},children:[un.jsx("div",{children:un.jsxs("label",{children:["Line Length: ",un.jsx("input",{type:"number",name:"lineLength",value:t,onChange:this.handleInputChange})]})}),un.jsx("div",{children:un.jsxs("label",{children:["Bend Radius: ",un.jsx("input",{type:"number",name:"bendRadius",value:i,onChange:this.handleInputChange})]})}),un.jsx("div",{children:un.jsxs("label",{children:["Bend Length: ",un.jsx("input",{type:"number",name:"bendLength",value:s,onChange:this.handleInputChange})]})}),un.jsx("div",{children:un.jsxs("label",{children:["Bend Start: ",un.jsx("input",{type:"number",name:"bendStart",value:l,onChange:this.handleInputChange})]})})]}),un.jsx("button",{onClick:this.setRandomValues,style:{marginBottom:24},children:"Randomize"}),un.jsx("div",{ref:this.mountRef})]})}}cx.createRoot(document.getElementById("root")).render(un.jsx(gv.StrictMode,{children:un.jsx(JA,{})}));
