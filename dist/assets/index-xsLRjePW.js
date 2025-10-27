(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();var g_={exports:{}},hc={},y_={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ua=Symbol.for("react.element"),zI=Symbol.for("react.portal"),BI=Symbol.for("react.fragment"),WI=Symbol.for("react.strict_mode"),HI=Symbol.for("react.profiler"),qI=Symbol.for("react.provider"),KI=Symbol.for("react.context"),GI=Symbol.for("react.forward_ref"),QI=Symbol.for("react.suspense"),YI=Symbol.for("react.memo"),XI=Symbol.for("react.lazy"),ey=Symbol.iterator;function JI(t){return t===null||typeof t!="object"?null:(t=ey&&t[ey]||t["@@iterator"],typeof t=="function"?t:null)}var v_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},__=Object.assign,w_={};function Xi(t,e,n){this.props=t,this.context=e,this.refs=w_,this.updater=n||v_}Xi.prototype.isReactComponent={};Xi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Xi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function x_(){}x_.prototype=Xi.prototype;function Qf(t,e,n){this.props=t,this.context=e,this.refs=w_,this.updater=n||v_}var Yf=Qf.prototype=new x_;Yf.constructor=Qf;__(Yf,Xi.prototype);Yf.isPureReactComponent=!0;var ty=Array.isArray,E_=Object.prototype.hasOwnProperty,Xf={current:null},T_={key:!0,ref:!0,__self:!0,__source:!0};function I_(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)E_.call(e,r)&&!T_.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:Ua,type:t,key:i,ref:o,props:s,_owner:Xf.current}}function ZI(t,e){return{$$typeof:Ua,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Jf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ua}function eb(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ny=/\/+/g;function Sd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?eb(""+t.key):e.toString(36)}function ql(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ua:case zI:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Sd(o,0):r,ty(s)?(n="",t!=null&&(n=t.replace(ny,"$&/")+"/"),ql(s,e,n,"",function(c){return c})):s!=null&&(Jf(s)&&(s=ZI(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(ny,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",ty(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+Sd(i,l);o+=ql(i,e,n,u,s)}else if(u=JI(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+Sd(i,l++),o+=ql(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function vl(t,e,n){if(t==null)return t;var r=[],s=0;return ql(t,r,"","",function(i){return e.call(n,i,s++)}),r}function tb(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var bt={current:null},Kl={transition:null},nb={ReactCurrentDispatcher:bt,ReactCurrentBatchConfig:Kl,ReactCurrentOwner:Xf};function b_(){throw Error("act(...) is not supported in production builds of React.")}oe.Children={map:vl,forEach:function(t,e,n){vl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return vl(t,function(){e++}),e},toArray:function(t){return vl(t,function(e){return e})||[]},only:function(t){if(!Jf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};oe.Component=Xi;oe.Fragment=BI;oe.Profiler=HI;oe.PureComponent=Qf;oe.StrictMode=WI;oe.Suspense=QI;oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nb;oe.act=b_;oe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=__({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Xf.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)E_.call(e,u)&&!T_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Ua,type:t.type,key:s,ref:i,props:r,_owner:o}};oe.createContext=function(t){return t={$$typeof:KI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:qI,_context:t},t.Consumer=t};oe.createElement=I_;oe.createFactory=function(t){var e=I_.bind(null,t);return e.type=t,e};oe.createRef=function(){return{current:null}};oe.forwardRef=function(t){return{$$typeof:GI,render:t}};oe.isValidElement=Jf;oe.lazy=function(t){return{$$typeof:XI,_payload:{_status:-1,_result:t},_init:tb}};oe.memo=function(t,e){return{$$typeof:YI,type:t,compare:e===void 0?null:e}};oe.startTransition=function(t){var e=Kl.transition;Kl.transition={};try{t()}finally{Kl.transition=e}};oe.unstable_act=b_;oe.useCallback=function(t,e){return bt.current.useCallback(t,e)};oe.useContext=function(t){return bt.current.useContext(t)};oe.useDebugValue=function(){};oe.useDeferredValue=function(t){return bt.current.useDeferredValue(t)};oe.useEffect=function(t,e){return bt.current.useEffect(t,e)};oe.useId=function(){return bt.current.useId()};oe.useImperativeHandle=function(t,e,n){return bt.current.useImperativeHandle(t,e,n)};oe.useInsertionEffect=function(t,e){return bt.current.useInsertionEffect(t,e)};oe.useLayoutEffect=function(t,e){return bt.current.useLayoutEffect(t,e)};oe.useMemo=function(t,e){return bt.current.useMemo(t,e)};oe.useReducer=function(t,e,n){return bt.current.useReducer(t,e,n)};oe.useRef=function(t){return bt.current.useRef(t)};oe.useState=function(t){return bt.current.useState(t)};oe.useSyncExternalStore=function(t,e,n){return bt.current.useSyncExternalStore(t,e,n)};oe.useTransition=function(){return bt.current.useTransition()};oe.version="18.3.1";y_.exports=oe;var R=y_.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rb=R,sb=Symbol.for("react.element"),ib=Symbol.for("react.fragment"),ob=Object.prototype.hasOwnProperty,ab=rb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,lb={key:!0,ref:!0,__self:!0,__source:!0};function k_(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)ob.call(e,r)&&!lb.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:sb,type:t,key:i,ref:o,props:s,_owner:ab.current}}hc.Fragment=ib;hc.jsx=k_;hc.jsxs=k_;g_.exports=hc;var d=g_.exports,S_={exports:{}},Wt={},C_={exports:{}},N_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,G){var X=z.length;z.push(G);e:for(;0<X;){var L=X-1>>>1,Q=z[L];if(0<s(Q,G))z[L]=G,z[X]=Q,X=L;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var G=z[0],X=z.pop();if(X!==G){z[0]=X;e:for(var L=0,Q=z.length,se=Q>>>1;L<se;){var he=2*(L+1)-1,at=z[he],lt=he+1,et=z[lt];if(0>s(at,X))lt<Q&&0>s(et,at)?(z[L]=et,z[lt]=X,L=lt):(z[L]=at,z[he]=X,L=he);else if(lt<Q&&0>s(et,X))z[L]=et,z[lt]=X,L=lt;else break e}}return G}function s(z,G){var X=z.sortIndex-G.sortIndex;return X!==0?X:z.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,m=null,g=3,E=!1,N=!1,S=!1,I=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(z){for(var G=n(c);G!==null;){if(G.callback===null)r(c);else if(G.startTime<=z)r(c),G.sortIndex=G.expirationTime,e(u,G);else break;G=n(c)}}function D(z){if(S=!1,_(z),!N)if(n(u)!==null)N=!0,Mt(M);else{var G=n(c);G!==null&&q(D,G.startTime-z)}}function M(z,G){N=!1,S&&(S=!1,v(x),x=-1),E=!0;var X=g;try{for(_(G),m=n(u);m!==null&&(!(m.expirationTime>G)||z&&!b());){var L=m.callback;if(typeof L=="function"){m.callback=null,g=m.priorityLevel;var Q=L(m.expirationTime<=G);G=t.unstable_now(),typeof Q=="function"?m.callback=Q:m===n(u)&&r(u),_(G)}else r(u);m=n(u)}if(m!==null)var se=!0;else{var he=n(c);he!==null&&q(D,he.startTime-G),se=!1}return se}finally{m=null,g=X,E=!1}}var U=!1,k=null,x=-1,C=5,A=-1;function b(){return!(t.unstable_now()-A<C)}function P(){if(k!==null){var z=t.unstable_now();A=z;var G=!0;try{G=k(!0,z)}finally{G?T():(U=!1,k=null)}}else U=!1}var T;if(typeof y=="function")T=function(){y(P)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,_e=te.port2;te.port1.onmessage=P,T=function(){_e.postMessage(null)}}else T=function(){I(P,0)};function Mt(z){k=z,U||(U=!0,T())}function q(z,G){x=I(function(){z(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){N||E||(N=!0,Mt(M))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(g){case 1:case 2:case 3:var G=3;break;default:G=g}var X=g;g=G;try{return z()}finally{g=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,G){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var X=g;g=z;try{return G()}finally{g=X}},t.unstable_scheduleCallback=function(z,G,X){var L=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?L+X:L):X=L,z){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=X+Q,z={id:f++,callback:G,priorityLevel:z,startTime:X,expirationTime:Q,sortIndex:-1},X>L?(z.sortIndex=X,e(c,z),n(u)===null&&z===n(c)&&(S?(v(x),x=-1):S=!0,q(D,X-L))):(z.sortIndex=Q,e(u,z),N||E||(N=!0,Mt(M))),z},t.unstable_shouldYield=b,t.unstable_wrapCallback=function(z){var G=g;return function(){var X=g;g=G;try{return z.apply(this,arguments)}finally{g=X}}}})(N_);C_.exports=N_;var ub=C_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cb=R,Bt=ub;function $(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var A_=new Set,ua={};function Ks(t,e){Li(t,e),Li(t+"Capture",e)}function Li(t,e){for(ua[t]=e,t=0;t<e.length;t++)A_.add(e[t])}var ir=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Eh=Object.prototype.hasOwnProperty,db=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ry={},sy={};function hb(t){return Eh.call(sy,t)?!0:Eh.call(ry,t)?!1:db.test(t)?sy[t]=!0:(ry[t]=!0,!1)}function fb(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function pb(t,e,n,r){if(e===null||typeof e>"u"||fb(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function kt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var it={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){it[t]=new kt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];it[e]=new kt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){it[t]=new kt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){it[t]=new kt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){it[t]=new kt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){it[t]=new kt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){it[t]=new kt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){it[t]=new kt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){it[t]=new kt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Zf=/[\-:]([a-z])/g;function ep(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Zf,ep);it[e]=new kt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Zf,ep);it[e]=new kt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Zf,ep);it[e]=new kt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){it[t]=new kt(t,1,!1,t.toLowerCase(),null,!1,!1)});it.xlinkHref=new kt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){it[t]=new kt(t,1,!1,t.toLowerCase(),null,!0,!0)});function tp(t,e,n,r){var s=it.hasOwnProperty(e)?it[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(pb(e,n,s,r)&&(n=null),r||s===null?hb(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var gr=cb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_l=Symbol.for("react.element"),di=Symbol.for("react.portal"),hi=Symbol.for("react.fragment"),np=Symbol.for("react.strict_mode"),Th=Symbol.for("react.profiler"),R_=Symbol.for("react.provider"),P_=Symbol.for("react.context"),rp=Symbol.for("react.forward_ref"),Ih=Symbol.for("react.suspense"),bh=Symbol.for("react.suspense_list"),sp=Symbol.for("react.memo"),Sr=Symbol.for("react.lazy"),D_=Symbol.for("react.offscreen"),iy=Symbol.iterator;function Co(t){return t===null||typeof t!="object"?null:(t=iy&&t[iy]||t["@@iterator"],typeof t=="function"?t:null)}var Ae=Object.assign,Cd;function Vo(t){if(Cd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Cd=e&&e[1]||""}return`
`+Cd+t}var Nd=!1;function Ad(t,e){if(!t||Nd)return"";Nd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Nd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Vo(t):""}function mb(t){switch(t.tag){case 5:return Vo(t.type);case 16:return Vo("Lazy");case 13:return Vo("Suspense");case 19:return Vo("SuspenseList");case 0:case 2:case 15:return t=Ad(t.type,!1),t;case 11:return t=Ad(t.type.render,!1),t;case 1:return t=Ad(t.type,!0),t;default:return""}}function kh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case hi:return"Fragment";case di:return"Portal";case Th:return"Profiler";case np:return"StrictMode";case Ih:return"Suspense";case bh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case P_:return(t.displayName||"Context")+".Consumer";case R_:return(t._context.displayName||"Context")+".Provider";case rp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case sp:return e=t.displayName||null,e!==null?e:kh(t.type)||"Memo";case Sr:e=t._payload,t=t._init;try{return kh(t(e))}catch{}}return null}function gb(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return kh(e);case 8:return e===np?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Zr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function O_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function yb(t){var e=O_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function wl(t){t._valueTracker||(t._valueTracker=yb(t))}function j_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=O_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function yu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Sh(t,e){var n=e.checked;return Ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function oy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Zr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function M_(t,e){e=e.checked,e!=null&&tp(t,"checked",e,!1)}function Ch(t,e){M_(t,e);var n=Zr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Nh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Nh(t,e.type,Zr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ay(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Nh(t,e,n){(e!=="number"||yu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Fo=Array.isArray;function Ii(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Zr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Ah(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error($(91));return Ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ly(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error($(92));if(Fo(n)){if(1<n.length)throw Error($(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Zr(n)}}function L_(t,e){var n=Zr(e.value),r=Zr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function uy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function V_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?V_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var xl,F_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(xl=xl||document.createElement("div"),xl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=xl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ca(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ko={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vb=["Webkit","ms","Moz","O"];Object.keys(Ko).forEach(function(t){vb.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ko[e]=Ko[t]})});function U_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ko.hasOwnProperty(t)&&Ko[t]?(""+e).trim():e+"px"}function $_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=U_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var _b=Ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ph(t,e){if(e){if(_b[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error($(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error($(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error($(61))}if(e.style!=null&&typeof e.style!="object")throw Error($(62))}}function Dh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oh=null;function ip(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var jh=null,bi=null,ki=null;function cy(t){if(t=Ba(t)){if(typeof jh!="function")throw Error($(280));var e=t.stateNode;e&&(e=yc(e),jh(t.stateNode,t.type,e))}}function z_(t){bi?ki?ki.push(t):ki=[t]:bi=t}function B_(){if(bi){var t=bi,e=ki;if(ki=bi=null,cy(t),e)for(t=0;t<e.length;t++)cy(e[t])}}function W_(t,e){return t(e)}function H_(){}var Rd=!1;function q_(t,e,n){if(Rd)return t(e,n);Rd=!0;try{return W_(t,e,n)}finally{Rd=!1,(bi!==null||ki!==null)&&(H_(),B_())}}function da(t,e){var n=t.stateNode;if(n===null)return null;var r=yc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error($(231,e,typeof n));return n}var Mh=!1;if(ir)try{var No={};Object.defineProperty(No,"passive",{get:function(){Mh=!0}}),window.addEventListener("test",No,No),window.removeEventListener("test",No,No)}catch{Mh=!1}function wb(t,e,n,r,s,i,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Go=!1,vu=null,_u=!1,Lh=null,xb={onError:function(t){Go=!0,vu=t}};function Eb(t,e,n,r,s,i,o,l,u){Go=!1,vu=null,wb.apply(xb,arguments)}function Tb(t,e,n,r,s,i,o,l,u){if(Eb.apply(this,arguments),Go){if(Go){var c=vu;Go=!1,vu=null}else throw Error($(198));_u||(_u=!0,Lh=c)}}function Gs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function K_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function dy(t){if(Gs(t)!==t)throw Error($(188))}function Ib(t){var e=t.alternate;if(!e){if(e=Gs(t),e===null)throw Error($(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return dy(s),t;if(i===r)return dy(s),e;i=i.sibling}throw Error($(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error($(189))}}if(n.alternate!==r)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?t:e}function G_(t){return t=Ib(t),t!==null?Q_(t):null}function Q_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Q_(t);if(e!==null)return e;t=t.sibling}return null}var Y_=Bt.unstable_scheduleCallback,hy=Bt.unstable_cancelCallback,bb=Bt.unstable_shouldYield,kb=Bt.unstable_requestPaint,Le=Bt.unstable_now,Sb=Bt.unstable_getCurrentPriorityLevel,op=Bt.unstable_ImmediatePriority,X_=Bt.unstable_UserBlockingPriority,wu=Bt.unstable_NormalPriority,Cb=Bt.unstable_LowPriority,J_=Bt.unstable_IdlePriority,fc=null,Dn=null;function Nb(t){if(Dn&&typeof Dn.onCommitFiberRoot=="function")try{Dn.onCommitFiberRoot(fc,t,void 0,(t.current.flags&128)===128)}catch{}}var un=Math.clz32?Math.clz32:Pb,Ab=Math.log,Rb=Math.LN2;function Pb(t){return t>>>=0,t===0?32:31-(Ab(t)/Rb|0)|0}var El=64,Tl=4194304;function Uo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function xu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=Uo(l):(i&=o,i!==0&&(r=Uo(i)))}else o=n&~s,o!==0?r=Uo(o):i!==0&&(r=Uo(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-un(e),s=1<<n,r|=t[n],e&=~s;return r}function Db(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ob(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-un(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=Db(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function Vh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Z_(){var t=El;return El<<=1,!(El&4194240)&&(El=64),t}function Pd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function $a(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-un(e),t[e]=n}function jb(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-un(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function ap(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-un(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var me=0;function ew(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var tw,lp,nw,rw,sw,Fh=!1,Il=[],Ur=null,$r=null,zr=null,ha=new Map,fa=new Map,Nr=[],Mb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fy(t,e){switch(t){case"focusin":case"focusout":Ur=null;break;case"dragenter":case"dragleave":$r=null;break;case"mouseover":case"mouseout":zr=null;break;case"pointerover":case"pointerout":ha.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":fa.delete(e.pointerId)}}function Ao(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Ba(e),e!==null&&lp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function Lb(t,e,n,r,s){switch(e){case"focusin":return Ur=Ao(Ur,t,e,n,r,s),!0;case"dragenter":return $r=Ao($r,t,e,n,r,s),!0;case"mouseover":return zr=Ao(zr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return ha.set(i,Ao(ha.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,fa.set(i,Ao(fa.get(i)||null,t,e,n,r,s)),!0}return!1}function iw(t){var e=ks(t.target);if(e!==null){var n=Gs(e);if(n!==null){if(e=n.tag,e===13){if(e=K_(n),e!==null){t.blockedOn=e,sw(t.priority,function(){nw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Gl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Uh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Oh=r,n.target.dispatchEvent(r),Oh=null}else return e=Ba(n),e!==null&&lp(e),t.blockedOn=n,!1;e.shift()}return!0}function py(t,e,n){Gl(t)&&n.delete(e)}function Vb(){Fh=!1,Ur!==null&&Gl(Ur)&&(Ur=null),$r!==null&&Gl($r)&&($r=null),zr!==null&&Gl(zr)&&(zr=null),ha.forEach(py),fa.forEach(py)}function Ro(t,e){t.blockedOn===e&&(t.blockedOn=null,Fh||(Fh=!0,Bt.unstable_scheduleCallback(Bt.unstable_NormalPriority,Vb)))}function pa(t){function e(s){return Ro(s,t)}if(0<Il.length){Ro(Il[0],t);for(var n=1;n<Il.length;n++){var r=Il[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ur!==null&&Ro(Ur,t),$r!==null&&Ro($r,t),zr!==null&&Ro(zr,t),ha.forEach(e),fa.forEach(e),n=0;n<Nr.length;n++)r=Nr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Nr.length&&(n=Nr[0],n.blockedOn===null);)iw(n),n.blockedOn===null&&Nr.shift()}var Si=gr.ReactCurrentBatchConfig,Eu=!0;function Fb(t,e,n,r){var s=me,i=Si.transition;Si.transition=null;try{me=1,up(t,e,n,r)}finally{me=s,Si.transition=i}}function Ub(t,e,n,r){var s=me,i=Si.transition;Si.transition=null;try{me=4,up(t,e,n,r)}finally{me=s,Si.transition=i}}function up(t,e,n,r){if(Eu){var s=Uh(t,e,n,r);if(s===null)zd(t,e,r,Tu,n),fy(t,r);else if(Lb(s,t,e,n,r))r.stopPropagation();else if(fy(t,r),e&4&&-1<Mb.indexOf(t)){for(;s!==null;){var i=Ba(s);if(i!==null&&tw(i),i=Uh(t,e,n,r),i===null&&zd(t,e,r,Tu,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else zd(t,e,r,null,n)}}var Tu=null;function Uh(t,e,n,r){if(Tu=null,t=ip(r),t=ks(t),t!==null)if(e=Gs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=K_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Tu=t,null}function ow(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Sb()){case op:return 1;case X_:return 4;case wu:case Cb:return 16;case J_:return 536870912;default:return 16}default:return 16}}var Lr=null,cp=null,Ql=null;function aw(){if(Ql)return Ql;var t,e=cp,n=e.length,r,s="value"in Lr?Lr.value:Lr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Ql=s.slice(t,1<r?1-r:void 0)}function Yl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function bl(){return!0}function my(){return!1}function Ht(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?bl:my,this.isPropagationStopped=my,this}return Ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=bl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=bl)},persist:function(){},isPersistent:bl}),e}var Ji={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dp=Ht(Ji),za=Ae({},Ji,{view:0,detail:0}),$b=Ht(za),Dd,Od,Po,pc=Ae({},za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Po&&(Po&&t.type==="mousemove"?(Dd=t.screenX-Po.screenX,Od=t.screenY-Po.screenY):Od=Dd=0,Po=t),Dd)},movementY:function(t){return"movementY"in t?t.movementY:Od}}),gy=Ht(pc),zb=Ae({},pc,{dataTransfer:0}),Bb=Ht(zb),Wb=Ae({},za,{relatedTarget:0}),jd=Ht(Wb),Hb=Ae({},Ji,{animationName:0,elapsedTime:0,pseudoElement:0}),qb=Ht(Hb),Kb=Ae({},Ji,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Gb=Ht(Kb),Qb=Ae({},Ji,{data:0}),yy=Ht(Qb),Yb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zb(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Jb[t])?!!e[t]:!1}function hp(){return Zb}var ek=Ae({},za,{key:function(t){if(t.key){var e=Yb[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Yl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Xb[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hp,charCode:function(t){return t.type==="keypress"?Yl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Yl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),tk=Ht(ek),nk=Ae({},pc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vy=Ht(nk),rk=Ae({},za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hp}),sk=Ht(rk),ik=Ae({},Ji,{propertyName:0,elapsedTime:0,pseudoElement:0}),ok=Ht(ik),ak=Ae({},pc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),lk=Ht(ak),uk=[9,13,27,32],fp=ir&&"CompositionEvent"in window,Qo=null;ir&&"documentMode"in document&&(Qo=document.documentMode);var ck=ir&&"TextEvent"in window&&!Qo,lw=ir&&(!fp||Qo&&8<Qo&&11>=Qo),_y=" ",wy=!1;function uw(t,e){switch(t){case"keyup":return uk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var fi=!1;function dk(t,e){switch(t){case"compositionend":return cw(e);case"keypress":return e.which!==32?null:(wy=!0,_y);case"textInput":return t=e.data,t===_y&&wy?null:t;default:return null}}function hk(t,e){if(fi)return t==="compositionend"||!fp&&uw(t,e)?(t=aw(),Ql=cp=Lr=null,fi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return lw&&e.locale!=="ko"?null:e.data;default:return null}}var fk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!fk[t.type]:e==="textarea"}function dw(t,e,n,r){z_(r),e=Iu(e,"onChange"),0<e.length&&(n=new dp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Yo=null,ma=null;function pk(t){Ew(t,0)}function mc(t){var e=gi(t);if(j_(e))return t}function mk(t,e){if(t==="change")return e}var hw=!1;if(ir){var Md;if(ir){var Ld="oninput"in document;if(!Ld){var Ey=document.createElement("div");Ey.setAttribute("oninput","return;"),Ld=typeof Ey.oninput=="function"}Md=Ld}else Md=!1;hw=Md&&(!document.documentMode||9<document.documentMode)}function Ty(){Yo&&(Yo.detachEvent("onpropertychange",fw),ma=Yo=null)}function fw(t){if(t.propertyName==="value"&&mc(ma)){var e=[];dw(e,ma,t,ip(t)),q_(pk,e)}}function gk(t,e,n){t==="focusin"?(Ty(),Yo=e,ma=n,Yo.attachEvent("onpropertychange",fw)):t==="focusout"&&Ty()}function yk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return mc(ma)}function vk(t,e){if(t==="click")return mc(e)}function _k(t,e){if(t==="input"||t==="change")return mc(e)}function wk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var fn=typeof Object.is=="function"?Object.is:wk;function ga(t,e){if(fn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Eh.call(e,s)||!fn(t[s],e[s]))return!1}return!0}function Iy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function by(t,e){var n=Iy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Iy(n)}}function pw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?pw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function mw(){for(var t=window,e=yu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=yu(t.document)}return e}function pp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function xk(t){var e=mw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&pw(n.ownerDocument.documentElement,n)){if(r!==null&&pp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=by(n,i);var o=by(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ek=ir&&"documentMode"in document&&11>=document.documentMode,pi=null,$h=null,Xo=null,zh=!1;function ky(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zh||pi==null||pi!==yu(r)||(r=pi,"selectionStart"in r&&pp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xo&&ga(Xo,r)||(Xo=r,r=Iu($h,"onSelect"),0<r.length&&(e=new dp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=pi)))}function kl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var mi={animationend:kl("Animation","AnimationEnd"),animationiteration:kl("Animation","AnimationIteration"),animationstart:kl("Animation","AnimationStart"),transitionend:kl("Transition","TransitionEnd")},Vd={},gw={};ir&&(gw=document.createElement("div").style,"AnimationEvent"in window||(delete mi.animationend.animation,delete mi.animationiteration.animation,delete mi.animationstart.animation),"TransitionEvent"in window||delete mi.transitionend.transition);function gc(t){if(Vd[t])return Vd[t];if(!mi[t])return t;var e=mi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in gw)return Vd[t]=e[n];return t}var yw=gc("animationend"),vw=gc("animationiteration"),_w=gc("animationstart"),ww=gc("transitionend"),xw=new Map,Sy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ls(t,e){xw.set(t,e),Ks(e,[t])}for(var Fd=0;Fd<Sy.length;Fd++){var Ud=Sy[Fd],Tk=Ud.toLowerCase(),Ik=Ud[0].toUpperCase()+Ud.slice(1);ls(Tk,"on"+Ik)}ls(yw,"onAnimationEnd");ls(vw,"onAnimationIteration");ls(_w,"onAnimationStart");ls("dblclick","onDoubleClick");ls("focusin","onFocus");ls("focusout","onBlur");ls(ww,"onTransitionEnd");Li("onMouseEnter",["mouseout","mouseover"]);Li("onMouseLeave",["mouseout","mouseover"]);Li("onPointerEnter",["pointerout","pointerover"]);Li("onPointerLeave",["pointerout","pointerover"]);Ks("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ks("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ks("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ks("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ks("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ks("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bk=new Set("cancel close invalid load scroll toggle".split(" ").concat($o));function Cy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Tb(r,e,void 0,t),t.currentTarget=null}function Ew(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;Cy(s,l,c),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;Cy(s,l,c),i=u}}}if(_u)throw t=Lh,_u=!1,Lh=null,t}function xe(t,e){var n=e[Kh];n===void 0&&(n=e[Kh]=new Set);var r=t+"__bubble";n.has(r)||(Tw(e,t,2,!1),n.add(r))}function $d(t,e,n){var r=0;e&&(r|=4),Tw(n,t,r,e)}var Sl="_reactListening"+Math.random().toString(36).slice(2);function ya(t){if(!t[Sl]){t[Sl]=!0,A_.forEach(function(n){n!=="selectionchange"&&(bk.has(n)||$d(n,!1,t),$d(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Sl]||(e[Sl]=!0,$d("selectionchange",!1,e))}}function Tw(t,e,n,r){switch(ow(e)){case 1:var s=Fb;break;case 4:s=Ub;break;default:s=up}n=s.bind(null,e,n,t),s=void 0,!Mh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function zd(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=ks(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}q_(function(){var c=i,f=ip(n),m=[];e:{var g=xw.get(t);if(g!==void 0){var E=dp,N=t;switch(t){case"keypress":if(Yl(n)===0)break e;case"keydown":case"keyup":E=tk;break;case"focusin":N="focus",E=jd;break;case"focusout":N="blur",E=jd;break;case"beforeblur":case"afterblur":E=jd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=gy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=Bb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=sk;break;case yw:case vw:case _w:E=qb;break;case ww:E=ok;break;case"scroll":E=$b;break;case"wheel":E=lk;break;case"copy":case"cut":case"paste":E=Gb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=vy}var S=(e&4)!==0,I=!S&&t==="scroll",v=S?g!==null?g+"Capture":null:g;S=[];for(var y=c,_;y!==null;){_=y;var D=_.stateNode;if(_.tag===5&&D!==null&&(_=D,v!==null&&(D=da(y,v),D!=null&&S.push(va(y,D,_)))),I)break;y=y.return}0<S.length&&(g=new E(g,N,null,n,f),m.push({event:g,listeners:S}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",E=t==="mouseout"||t==="pointerout",g&&n!==Oh&&(N=n.relatedTarget||n.fromElement)&&(ks(N)||N[or]))break e;if((E||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,E?(N=n.relatedTarget||n.toElement,E=c,N=N?ks(N):null,N!==null&&(I=Gs(N),N!==I||N.tag!==5&&N.tag!==6)&&(N=null)):(E=null,N=c),E!==N)){if(S=gy,D="onMouseLeave",v="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(S=vy,D="onPointerLeave",v="onPointerEnter",y="pointer"),I=E==null?g:gi(E),_=N==null?g:gi(N),g=new S(D,y+"leave",E,n,f),g.target=I,g.relatedTarget=_,D=null,ks(f)===c&&(S=new S(v,y+"enter",N,n,f),S.target=_,S.relatedTarget=I,D=S),I=D,E&&N)t:{for(S=E,v=N,y=0,_=S;_;_=ii(_))y++;for(_=0,D=v;D;D=ii(D))_++;for(;0<y-_;)S=ii(S),y--;for(;0<_-y;)v=ii(v),_--;for(;y--;){if(S===v||v!==null&&S===v.alternate)break t;S=ii(S),v=ii(v)}S=null}else S=null;E!==null&&Ny(m,g,E,S,!1),N!==null&&I!==null&&Ny(m,I,N,S,!0)}}e:{if(g=c?gi(c):window,E=g.nodeName&&g.nodeName.toLowerCase(),E==="select"||E==="input"&&g.type==="file")var M=mk;else if(xy(g))if(hw)M=_k;else{M=yk;var U=gk}else(E=g.nodeName)&&E.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(M=vk);if(M&&(M=M(t,c))){dw(m,M,n,f);break e}U&&U(t,g,c),t==="focusout"&&(U=g._wrapperState)&&U.controlled&&g.type==="number"&&Nh(g,"number",g.value)}switch(U=c?gi(c):window,t){case"focusin":(xy(U)||U.contentEditable==="true")&&(pi=U,$h=c,Xo=null);break;case"focusout":Xo=$h=pi=null;break;case"mousedown":zh=!0;break;case"contextmenu":case"mouseup":case"dragend":zh=!1,ky(m,n,f);break;case"selectionchange":if(Ek)break;case"keydown":case"keyup":ky(m,n,f)}var k;if(fp)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else fi?uw(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(lw&&n.locale!=="ko"&&(fi||x!=="onCompositionStart"?x==="onCompositionEnd"&&fi&&(k=aw()):(Lr=f,cp="value"in Lr?Lr.value:Lr.textContent,fi=!0)),U=Iu(c,x),0<U.length&&(x=new yy(x,t,null,n,f),m.push({event:x,listeners:U}),k?x.data=k:(k=cw(n),k!==null&&(x.data=k)))),(k=ck?dk(t,n):hk(t,n))&&(c=Iu(c,"onBeforeInput"),0<c.length&&(f=new yy("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:c}),f.data=k))}Ew(m,e)})}function va(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Iu(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=da(t,n),i!=null&&r.unshift(va(t,i,s)),i=da(t,e),i!=null&&r.push(va(t,i,s))),t=t.return}return r}function ii(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ny(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,s?(u=da(n,i),u!=null&&o.unshift(va(n,u,l))):s||(u=da(n,i),u!=null&&o.push(va(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var kk=/\r\n?/g,Sk=/\u0000|\uFFFD/g;function Ay(t){return(typeof t=="string"?t:""+t).replace(kk,`
`).replace(Sk,"")}function Cl(t,e,n){if(e=Ay(e),Ay(t)!==e&&n)throw Error($(425))}function bu(){}var Bh=null,Wh=null;function Hh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var qh=typeof setTimeout=="function"?setTimeout:void 0,Ck=typeof clearTimeout=="function"?clearTimeout:void 0,Ry=typeof Promise=="function"?Promise:void 0,Nk=typeof queueMicrotask=="function"?queueMicrotask:typeof Ry<"u"?function(t){return Ry.resolve(null).then(t).catch(Ak)}:qh;function Ak(t){setTimeout(function(){throw t})}function Bd(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),pa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);pa(e)}function Br(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Py(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Zi=Math.random().toString(36).slice(2),bn="__reactFiber$"+Zi,_a="__reactProps$"+Zi,or="__reactContainer$"+Zi,Kh="__reactEvents$"+Zi,Rk="__reactListeners$"+Zi,Pk="__reactHandles$"+Zi;function ks(t){var e=t[bn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[or]||n[bn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Py(t);t!==null;){if(n=t[bn])return n;t=Py(t)}return e}t=n,n=t.parentNode}return null}function Ba(t){return t=t[bn]||t[or],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function gi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error($(33))}function yc(t){return t[_a]||null}var Gh=[],yi=-1;function us(t){return{current:t}}function Te(t){0>yi||(t.current=Gh[yi],Gh[yi]=null,yi--)}function ve(t,e){yi++,Gh[yi]=t.current,t.current=e}var es={},yt=us(es),Rt=us(!1),Os=es;function Vi(t,e){var n=t.type.contextTypes;if(!n)return es;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Pt(t){return t=t.childContextTypes,t!=null}function ku(){Te(Rt),Te(yt)}function Dy(t,e,n){if(yt.current!==es)throw Error($(168));ve(yt,e),ve(Rt,n)}function Iw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error($(108,gb(t)||"Unknown",s));return Ae({},n,r)}function Su(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||es,Os=yt.current,ve(yt,t),ve(Rt,Rt.current),!0}function Oy(t,e,n){var r=t.stateNode;if(!r)throw Error($(169));n?(t=Iw(t,e,Os),r.__reactInternalMemoizedMergedChildContext=t,Te(Rt),Te(yt),ve(yt,t)):Te(Rt),ve(Rt,n)}var Qn=null,vc=!1,Wd=!1;function bw(t){Qn===null?Qn=[t]:Qn.push(t)}function Dk(t){vc=!0,bw(t)}function cs(){if(!Wd&&Qn!==null){Wd=!0;var t=0,e=me;try{var n=Qn;for(me=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Qn=null,vc=!1}catch(s){throw Qn!==null&&(Qn=Qn.slice(t+1)),Y_(op,cs),s}finally{me=e,Wd=!1}}return null}var vi=[],_i=0,Cu=null,Nu=0,qt=[],Kt=0,js=null,Xn=1,Jn="";function Es(t,e){vi[_i++]=Nu,vi[_i++]=Cu,Cu=t,Nu=e}function kw(t,e,n){qt[Kt++]=Xn,qt[Kt++]=Jn,qt[Kt++]=js,js=t;var r=Xn;t=Jn;var s=32-un(r)-1;r&=~(1<<s),n+=1;var i=32-un(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Xn=1<<32-un(e)+s|n<<s|r,Jn=i+t}else Xn=1<<i|n<<s|r,Jn=t}function mp(t){t.return!==null&&(Es(t,1),kw(t,1,0))}function gp(t){for(;t===Cu;)Cu=vi[--_i],vi[_i]=null,Nu=vi[--_i],vi[_i]=null;for(;t===js;)js=qt[--Kt],qt[Kt]=null,Jn=qt[--Kt],qt[Kt]=null,Xn=qt[--Kt],qt[Kt]=null}var zt=null,Ft=null,Ie=!1,an=null;function Sw(t,e){var n=Yt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function jy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,zt=t,Ft=Br(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,zt=t,Ft=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=js!==null?{id:Xn,overflow:Jn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Yt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,zt=t,Ft=null,!0):!1;default:return!1}}function Qh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Yh(t){if(Ie){var e=Ft;if(e){var n=e;if(!jy(t,e)){if(Qh(t))throw Error($(418));e=Br(n.nextSibling);var r=zt;e&&jy(t,e)?Sw(r,n):(t.flags=t.flags&-4097|2,Ie=!1,zt=t)}}else{if(Qh(t))throw Error($(418));t.flags=t.flags&-4097|2,Ie=!1,zt=t}}}function My(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;zt=t}function Nl(t){if(t!==zt)return!1;if(!Ie)return My(t),Ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Hh(t.type,t.memoizedProps)),e&&(e=Ft)){if(Qh(t))throw Cw(),Error($(418));for(;e;)Sw(t,e),e=Br(e.nextSibling)}if(My(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error($(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ft=Br(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ft=null}}else Ft=zt?Br(t.stateNode.nextSibling):null;return!0}function Cw(){for(var t=Ft;t;)t=Br(t.nextSibling)}function Fi(){Ft=zt=null,Ie=!1}function yp(t){an===null?an=[t]:an.push(t)}var Ok=gr.ReactCurrentBatchConfig;function Do(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error($(309));var r=n.stateNode}if(!r)throw Error($(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error($(284));if(!n._owner)throw Error($(290,t))}return t}function Al(t,e){throw t=Object.prototype.toString.call(e),Error($(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ly(t){var e=t._init;return e(t._payload)}function Nw(t){function e(v,y){if(t){var _=v.deletions;_===null?(v.deletions=[y],v.flags|=16):_.push(y)}}function n(v,y){if(!t)return null;for(;y!==null;)e(v,y),y=y.sibling;return null}function r(v,y){for(v=new Map;y!==null;)y.key!==null?v.set(y.key,y):v.set(y.index,y),y=y.sibling;return v}function s(v,y){return v=Kr(v,y),v.index=0,v.sibling=null,v}function i(v,y,_){return v.index=_,t?(_=v.alternate,_!==null?(_=_.index,_<y?(v.flags|=2,y):_):(v.flags|=2,y)):(v.flags|=1048576,y)}function o(v){return t&&v.alternate===null&&(v.flags|=2),v}function l(v,y,_,D){return y===null||y.tag!==6?(y=Xd(_,v.mode,D),y.return=v,y):(y=s(y,_),y.return=v,y)}function u(v,y,_,D){var M=_.type;return M===hi?f(v,y,_.props.children,D,_.key):y!==null&&(y.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Sr&&Ly(M)===y.type)?(D=s(y,_.props),D.ref=Do(v,y,_),D.return=v,D):(D=ru(_.type,_.key,_.props,null,v.mode,D),D.ref=Do(v,y,_),D.return=v,D)}function c(v,y,_,D){return y===null||y.tag!==4||y.stateNode.containerInfo!==_.containerInfo||y.stateNode.implementation!==_.implementation?(y=Jd(_,v.mode,D),y.return=v,y):(y=s(y,_.children||[]),y.return=v,y)}function f(v,y,_,D,M){return y===null||y.tag!==7?(y=Ps(_,v.mode,D,M),y.return=v,y):(y=s(y,_),y.return=v,y)}function m(v,y,_){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Xd(""+y,v.mode,_),y.return=v,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case _l:return _=ru(y.type,y.key,y.props,null,v.mode,_),_.ref=Do(v,null,y),_.return=v,_;case di:return y=Jd(y,v.mode,_),y.return=v,y;case Sr:var D=y._init;return m(v,D(y._payload),_)}if(Fo(y)||Co(y))return y=Ps(y,v.mode,_,null),y.return=v,y;Al(v,y)}return null}function g(v,y,_,D){var M=y!==null?y.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return M!==null?null:l(v,y,""+_,D);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case _l:return _.key===M?u(v,y,_,D):null;case di:return _.key===M?c(v,y,_,D):null;case Sr:return M=_._init,g(v,y,M(_._payload),D)}if(Fo(_)||Co(_))return M!==null?null:f(v,y,_,D,null);Al(v,_)}return null}function E(v,y,_,D,M){if(typeof D=="string"&&D!==""||typeof D=="number")return v=v.get(_)||null,l(y,v,""+D,M);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case _l:return v=v.get(D.key===null?_:D.key)||null,u(y,v,D,M);case di:return v=v.get(D.key===null?_:D.key)||null,c(y,v,D,M);case Sr:var U=D._init;return E(v,y,_,U(D._payload),M)}if(Fo(D)||Co(D))return v=v.get(_)||null,f(y,v,D,M,null);Al(y,D)}return null}function N(v,y,_,D){for(var M=null,U=null,k=y,x=y=0,C=null;k!==null&&x<_.length;x++){k.index>x?(C=k,k=null):C=k.sibling;var A=g(v,k,_[x],D);if(A===null){k===null&&(k=C);break}t&&k&&A.alternate===null&&e(v,k),y=i(A,y,x),U===null?M=A:U.sibling=A,U=A,k=C}if(x===_.length)return n(v,k),Ie&&Es(v,x),M;if(k===null){for(;x<_.length;x++)k=m(v,_[x],D),k!==null&&(y=i(k,y,x),U===null?M=k:U.sibling=k,U=k);return Ie&&Es(v,x),M}for(k=r(v,k);x<_.length;x++)C=E(k,v,x,_[x],D),C!==null&&(t&&C.alternate!==null&&k.delete(C.key===null?x:C.key),y=i(C,y,x),U===null?M=C:U.sibling=C,U=C);return t&&k.forEach(function(b){return e(v,b)}),Ie&&Es(v,x),M}function S(v,y,_,D){var M=Co(_);if(typeof M!="function")throw Error($(150));if(_=M.call(_),_==null)throw Error($(151));for(var U=M=null,k=y,x=y=0,C=null,A=_.next();k!==null&&!A.done;x++,A=_.next()){k.index>x?(C=k,k=null):C=k.sibling;var b=g(v,k,A.value,D);if(b===null){k===null&&(k=C);break}t&&k&&b.alternate===null&&e(v,k),y=i(b,y,x),U===null?M=b:U.sibling=b,U=b,k=C}if(A.done)return n(v,k),Ie&&Es(v,x),M;if(k===null){for(;!A.done;x++,A=_.next())A=m(v,A.value,D),A!==null&&(y=i(A,y,x),U===null?M=A:U.sibling=A,U=A);return Ie&&Es(v,x),M}for(k=r(v,k);!A.done;x++,A=_.next())A=E(k,v,x,A.value,D),A!==null&&(t&&A.alternate!==null&&k.delete(A.key===null?x:A.key),y=i(A,y,x),U===null?M=A:U.sibling=A,U=A);return t&&k.forEach(function(P){return e(v,P)}),Ie&&Es(v,x),M}function I(v,y,_,D){if(typeof _=="object"&&_!==null&&_.type===hi&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case _l:e:{for(var M=_.key,U=y;U!==null;){if(U.key===M){if(M=_.type,M===hi){if(U.tag===7){n(v,U.sibling),y=s(U,_.props.children),y.return=v,v=y;break e}}else if(U.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Sr&&Ly(M)===U.type){n(v,U.sibling),y=s(U,_.props),y.ref=Do(v,U,_),y.return=v,v=y;break e}n(v,U);break}else e(v,U);U=U.sibling}_.type===hi?(y=Ps(_.props.children,v.mode,D,_.key),y.return=v,v=y):(D=ru(_.type,_.key,_.props,null,v.mode,D),D.ref=Do(v,y,_),D.return=v,v=D)}return o(v);case di:e:{for(U=_.key;y!==null;){if(y.key===U)if(y.tag===4&&y.stateNode.containerInfo===_.containerInfo&&y.stateNode.implementation===_.implementation){n(v,y.sibling),y=s(y,_.children||[]),y.return=v,v=y;break e}else{n(v,y);break}else e(v,y);y=y.sibling}y=Jd(_,v.mode,D),y.return=v,v=y}return o(v);case Sr:return U=_._init,I(v,y,U(_._payload),D)}if(Fo(_))return N(v,y,_,D);if(Co(_))return S(v,y,_,D);Al(v,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,y!==null&&y.tag===6?(n(v,y.sibling),y=s(y,_),y.return=v,v=y):(n(v,y),y=Xd(_,v.mode,D),y.return=v,v=y),o(v)):n(v,y)}return I}var Ui=Nw(!0),Aw=Nw(!1),Au=us(null),Ru=null,wi=null,vp=null;function _p(){vp=wi=Ru=null}function wp(t){var e=Au.current;Te(Au),t._currentValue=e}function Xh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ci(t,e){Ru=t,vp=wi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(At=!0),t.firstContext=null)}function Jt(t){var e=t._currentValue;if(vp!==t)if(t={context:t,memoizedValue:e,next:null},wi===null){if(Ru===null)throw Error($(308));wi=t,Ru.dependencies={lanes:0,firstContext:t}}else wi=wi.next=t;return e}var Ss=null;function xp(t){Ss===null?Ss=[t]:Ss.push(t)}function Rw(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,xp(e)):(n.next=s.next,s.next=n),e.interleaved=n,ar(t,r)}function ar(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Cr=!1;function Ep(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Pw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function nr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Wr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,de&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,ar(t,n)}return s=r.interleaved,s===null?(e.next=e,xp(r)):(e.next=s.next,s.next=e),r.interleaved=e,ar(t,n)}function Xl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ap(t,n)}}function Vy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Pu(t,e,n,r){var s=t.updateQueue;Cr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?i=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(i!==null){var m=s.baseState;o=0,f=c=u=null,l=i;do{var g=l.lane,E=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:E,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var N=t,S=l;switch(g=e,E=n,S.tag){case 1:if(N=S.payload,typeof N=="function"){m=N.call(E,m,g);break e}m=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=S.payload,g=typeof N=="function"?N.call(E,m,g):N,g==null)break e;m=Ae({},m,g);break e;case 2:Cr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=s.effects,g===null?s.effects=[l]:g.push(l))}else E={eventTime:E,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=E,u=m):f=f.next=E,o|=g;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;g=l,l=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(f===null&&(u=m),s.baseState=u,s.firstBaseUpdate=c,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Ls|=o,t.lanes=o,t.memoizedState=m}}function Fy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error($(191,s));s.call(r)}}}var Wa={},On=us(Wa),wa=us(Wa),xa=us(Wa);function Cs(t){if(t===Wa)throw Error($(174));return t}function Tp(t,e){switch(ve(xa,e),ve(wa,t),ve(On,Wa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Rh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Rh(e,t)}Te(On),ve(On,e)}function $i(){Te(On),Te(wa),Te(xa)}function Dw(t){Cs(xa.current);var e=Cs(On.current),n=Rh(e,t.type);e!==n&&(ve(wa,t),ve(On,n))}function Ip(t){wa.current===t&&(Te(On),Te(wa))}var Ce=us(0);function Du(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Hd=[];function bp(){for(var t=0;t<Hd.length;t++)Hd[t]._workInProgressVersionPrimary=null;Hd.length=0}var Jl=gr.ReactCurrentDispatcher,qd=gr.ReactCurrentBatchConfig,Ms=0,Ne=null,Be=null,Je=null,Ou=!1,Jo=!1,Ea=0,jk=0;function ct(){throw Error($(321))}function kp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!fn(t[n],e[n]))return!1;return!0}function Sp(t,e,n,r,s,i){if(Ms=i,Ne=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Jl.current=t===null||t.memoizedState===null?Fk:Uk,t=n(r,s),Jo){i=0;do{if(Jo=!1,Ea=0,25<=i)throw Error($(301));i+=1,Je=Be=null,e.updateQueue=null,Jl.current=$k,t=n(r,s)}while(Jo)}if(Jl.current=ju,e=Be!==null&&Be.next!==null,Ms=0,Je=Be=Ne=null,Ou=!1,e)throw Error($(300));return t}function Cp(){var t=Ea!==0;return Ea=0,t}function Tn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?Ne.memoizedState=Je=t:Je=Je.next=t,Je}function Zt(){if(Be===null){var t=Ne.alternate;t=t!==null?t.memoizedState:null}else t=Be.next;var e=Je===null?Ne.memoizedState:Je.next;if(e!==null)Je=e,Be=t;else{if(t===null)throw Error($(310));Be=t,t={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},Je===null?Ne.memoizedState=Je=t:Je=Je.next=t}return Je}function Ta(t,e){return typeof e=="function"?e(t):e}function Kd(t){var e=Zt(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=Be,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,c=i;do{var f=c.lane;if((Ms&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var m={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,Ne.lanes|=f,Ls|=f}c=c.next}while(c!==null&&c!==i);u===null?o=r:u.next=l,fn(r,e.memoizedState)||(At=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Ne.lanes|=i,Ls|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Gd(t){var e=Zt(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);fn(i,e.memoizedState)||(At=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function Ow(){}function jw(t,e){var n=Ne,r=Zt(),s=e(),i=!fn(r.memoizedState,s);if(i&&(r.memoizedState=s,At=!0),r=r.queue,Np(Vw.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Je!==null&&Je.memoizedState.tag&1){if(n.flags|=2048,Ia(9,Lw.bind(null,n,r,s,e),void 0,null),Ze===null)throw Error($(349));Ms&30||Mw(n,e,s)}return s}function Mw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Lw(t,e,n,r){e.value=n,e.getSnapshot=r,Fw(e)&&Uw(t)}function Vw(t,e,n){return n(function(){Fw(e)&&Uw(t)})}function Fw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!fn(t,n)}catch{return!0}}function Uw(t){var e=ar(t,1);e!==null&&cn(e,t,1,-1)}function Uy(t){var e=Tn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:t},e.queue=t,t=t.dispatch=Vk.bind(null,Ne,t),[e.memoizedState,t]}function Ia(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function $w(){return Zt().memoizedState}function Zl(t,e,n,r){var s=Tn();Ne.flags|=t,s.memoizedState=Ia(1|e,n,void 0,r===void 0?null:r)}function _c(t,e,n,r){var s=Zt();r=r===void 0?null:r;var i=void 0;if(Be!==null){var o=Be.memoizedState;if(i=o.destroy,r!==null&&kp(r,o.deps)){s.memoizedState=Ia(e,n,i,r);return}}Ne.flags|=t,s.memoizedState=Ia(1|e,n,i,r)}function $y(t,e){return Zl(8390656,8,t,e)}function Np(t,e){return _c(2048,8,t,e)}function zw(t,e){return _c(4,2,t,e)}function Bw(t,e){return _c(4,4,t,e)}function Ww(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Hw(t,e,n){return n=n!=null?n.concat([t]):null,_c(4,4,Ww.bind(null,e,t),n)}function Ap(){}function qw(t,e){var n=Zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&kp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Kw(t,e){var n=Zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&kp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Gw(t,e,n){return Ms&21?(fn(n,e)||(n=Z_(),Ne.lanes|=n,Ls|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,At=!0),t.memoizedState=n)}function Mk(t,e){var n=me;me=n!==0&&4>n?n:4,t(!0);var r=qd.transition;qd.transition={};try{t(!1),e()}finally{me=n,qd.transition=r}}function Qw(){return Zt().memoizedState}function Lk(t,e,n){var r=qr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Yw(t))Xw(e,n);else if(n=Rw(t,e,n,r),n!==null){var s=Tt();cn(n,t,r,s),Jw(n,e,r)}}function Vk(t,e,n){var r=qr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Yw(t))Xw(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,fn(l,o)){var u=e.interleaved;u===null?(s.next=s,xp(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=Rw(t,e,s,r),n!==null&&(s=Tt(),cn(n,t,r,s),Jw(n,e,r))}}function Yw(t){var e=t.alternate;return t===Ne||e!==null&&e===Ne}function Xw(t,e){Jo=Ou=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Jw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ap(t,n)}}var ju={readContext:Jt,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useInsertionEffect:ct,useLayoutEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useMutableSource:ct,useSyncExternalStore:ct,useId:ct,unstable_isNewReconciler:!1},Fk={readContext:Jt,useCallback:function(t,e){return Tn().memoizedState=[t,e===void 0?null:e],t},useContext:Jt,useEffect:$y,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Zl(4194308,4,Ww.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Zl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Zl(4,2,t,e)},useMemo:function(t,e){var n=Tn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Tn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Lk.bind(null,Ne,t),[r.memoizedState,t]},useRef:function(t){var e=Tn();return t={current:t},e.memoizedState=t},useState:Uy,useDebugValue:Ap,useDeferredValue:function(t){return Tn().memoizedState=t},useTransition:function(){var t=Uy(!1),e=t[0];return t=Mk.bind(null,t[1]),Tn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ne,s=Tn();if(Ie){if(n===void 0)throw Error($(407));n=n()}else{if(n=e(),Ze===null)throw Error($(349));Ms&30||Mw(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,$y(Vw.bind(null,r,i,t),[t]),r.flags|=2048,Ia(9,Lw.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=Tn(),e=Ze.identifierPrefix;if(Ie){var n=Jn,r=Xn;n=(r&~(1<<32-un(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ea++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=jk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Uk={readContext:Jt,useCallback:qw,useContext:Jt,useEffect:Np,useImperativeHandle:Hw,useInsertionEffect:zw,useLayoutEffect:Bw,useMemo:Kw,useReducer:Kd,useRef:$w,useState:function(){return Kd(Ta)},useDebugValue:Ap,useDeferredValue:function(t){var e=Zt();return Gw(e,Be.memoizedState,t)},useTransition:function(){var t=Kd(Ta)[0],e=Zt().memoizedState;return[t,e]},useMutableSource:Ow,useSyncExternalStore:jw,useId:Qw,unstable_isNewReconciler:!1},$k={readContext:Jt,useCallback:qw,useContext:Jt,useEffect:Np,useImperativeHandle:Hw,useInsertionEffect:zw,useLayoutEffect:Bw,useMemo:Kw,useReducer:Gd,useRef:$w,useState:function(){return Gd(Ta)},useDebugValue:Ap,useDeferredValue:function(t){var e=Zt();return Be===null?e.memoizedState=t:Gw(e,Be.memoizedState,t)},useTransition:function(){var t=Gd(Ta)[0],e=Zt().memoizedState;return[t,e]},useMutableSource:Ow,useSyncExternalStore:jw,useId:Qw,unstable_isNewReconciler:!1};function sn(t,e){if(t&&t.defaultProps){e=Ae({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Jh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ae({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var wc={isMounted:function(t){return(t=t._reactInternals)?Gs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Tt(),s=qr(t),i=nr(r,s);i.payload=e,n!=null&&(i.callback=n),e=Wr(t,i,s),e!==null&&(cn(e,t,s,r),Xl(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Tt(),s=qr(t),i=nr(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Wr(t,i,s),e!==null&&(cn(e,t,s,r),Xl(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Tt(),r=qr(t),s=nr(n,r);s.tag=2,e!=null&&(s.callback=e),e=Wr(t,s,r),e!==null&&(cn(e,t,r,n),Xl(e,t,r))}};function zy(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!ga(n,r)||!ga(s,i):!0}function Zw(t,e,n){var r=!1,s=es,i=e.contextType;return typeof i=="object"&&i!==null?i=Jt(i):(s=Pt(e)?Os:yt.current,r=e.contextTypes,i=(r=r!=null)?Vi(t,s):es),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=wc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function By(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&wc.enqueueReplaceState(e,e.state,null)}function Zh(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Ep(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Jt(i):(i=Pt(e)?Os:yt.current,s.context=Vi(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Jh(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&wc.enqueueReplaceState(s,s.state,null),Pu(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function zi(t,e){try{var n="",r=e;do n+=mb(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function Qd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ef(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var zk=typeof WeakMap=="function"?WeakMap:Map;function ex(t,e,n){n=nr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Lu||(Lu=!0,df=r),ef(t,e)},n}function tx(t,e,n){n=nr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){ef(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){ef(t,e),typeof r!="function"&&(Hr===null?Hr=new Set([this]):Hr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Wy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new zk;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=nS.bind(null,t,e,n),e.then(t,t))}function Hy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function qy(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=nr(-1,1),e.tag=2,Wr(n,e,1))),n.lanes|=1),t)}var Bk=gr.ReactCurrentOwner,At=!1;function Et(t,e,n,r){e.child=t===null?Aw(e,null,n,r):Ui(e,t.child,n,r)}function Ky(t,e,n,r,s){n=n.render;var i=e.ref;return Ci(e,s),r=Sp(t,e,n,r,i,s),n=Cp(),t!==null&&!At?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,lr(t,e,s)):(Ie&&n&&mp(e),e.flags|=1,Et(t,e,r,s),e.child)}function Gy(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Vp(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,nx(t,e,i,r,s)):(t=ru(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:ga,n(o,r)&&t.ref===e.ref)return lr(t,e,s)}return e.flags|=1,t=Kr(i,r),t.ref=e.ref,t.return=e,e.child=t}function nx(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(ga(i,r)&&t.ref===e.ref)if(At=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(At=!0);else return e.lanes=t.lanes,lr(t,e,s)}return tf(t,e,n,r,s)}function rx(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(Ei,Vt),Vt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ve(Ei,Vt),Vt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ve(Ei,Vt),Vt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,ve(Ei,Vt),Vt|=r;return Et(t,e,s,n),e.child}function sx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function tf(t,e,n,r,s){var i=Pt(n)?Os:yt.current;return i=Vi(e,i),Ci(e,s),n=Sp(t,e,n,r,i,s),r=Cp(),t!==null&&!At?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,lr(t,e,s)):(Ie&&r&&mp(e),e.flags|=1,Et(t,e,n,s),e.child)}function Qy(t,e,n,r,s){if(Pt(n)){var i=!0;Su(e)}else i=!1;if(Ci(e,s),e.stateNode===null)eu(t,e),Zw(e,n,r),Zh(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Jt(c):(c=Pt(n)?Os:yt.current,c=Vi(e,c));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&By(e,o,r,c),Cr=!1;var g=e.memoizedState;o.state=g,Pu(e,r,o,s),u=e.memoizedState,l!==r||g!==u||Rt.current||Cr?(typeof f=="function"&&(Jh(e,n,f,r),u=e.memoizedState),(l=Cr||zy(e,n,l,r,g,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Pw(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:sn(e.type,l),o.props=c,m=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Jt(u):(u=Pt(n)?Os:yt.current,u=Vi(e,u));var E=n.getDerivedStateFromProps;(f=typeof E=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==u)&&By(e,o,r,u),Cr=!1,g=e.memoizedState,o.state=g,Pu(e,r,o,s);var N=e.memoizedState;l!==m||g!==N||Rt.current||Cr?(typeof E=="function"&&(Jh(e,n,E,r),N=e.memoizedState),(c=Cr||zy(e,n,c,r,g,N,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,N,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,N,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=N),o.props=r,o.state=N,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return nf(t,e,n,r,i,s)}function nf(t,e,n,r,s,i){sx(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&Oy(e,n,!1),lr(t,e,i);r=e.stateNode,Bk.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ui(e,t.child,null,i),e.child=Ui(e,null,l,i)):Et(t,e,l,i),e.memoizedState=r.state,s&&Oy(e,n,!0),e.child}function ix(t){var e=t.stateNode;e.pendingContext?Dy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Dy(t,e.context,!1),Tp(t,e.containerInfo)}function Yy(t,e,n,r,s){return Fi(),yp(s),e.flags|=256,Et(t,e,n,r),e.child}var rf={dehydrated:null,treeContext:null,retryLane:0};function sf(t){return{baseLanes:t,cachePool:null,transitions:null}}function ox(t,e,n){var r=e.pendingProps,s=Ce.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),ve(Ce,s&1),t===null)return Yh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Tc(o,r,0,null),t=Ps(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=sf(n),e.memoizedState=rf,t):Rp(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return Wk(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Kr(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=Kr(l,i):(i=Ps(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?sf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=rf,r}return i=t.child,t=i.sibling,r=Kr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Rp(t,e){return e=Tc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Rl(t,e,n,r){return r!==null&&yp(r),Ui(e,t.child,null,n),t=Rp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Wk(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=Qd(Error($(422))),Rl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Tc({mode:"visible",children:r.children},s,0,null),i=Ps(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Ui(e,t.child,null,o),e.child.memoizedState=sf(o),e.memoizedState=rf,i);if(!(e.mode&1))return Rl(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error($(419)),r=Qd(i,r,void 0),Rl(t,e,o,r)}if(l=(o&t.childLanes)!==0,At||l){if(r=Ze,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,ar(t,s),cn(r,t,s,-1))}return Lp(),r=Qd(Error($(421))),Rl(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=rS.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Ft=Br(s.nextSibling),zt=e,Ie=!0,an=null,t!==null&&(qt[Kt++]=Xn,qt[Kt++]=Jn,qt[Kt++]=js,Xn=t.id,Jn=t.overflow,js=e),e=Rp(e,r.children),e.flags|=4096,e)}function Xy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Xh(t.return,e,n)}function Yd(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function ax(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(Et(t,e,r.children,n),r=Ce.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Xy(t,n,e);else if(t.tag===19)Xy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ve(Ce,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Du(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Yd(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Du(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Yd(e,!0,n,null,i);break;case"together":Yd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function eu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function lr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ls|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error($(153));if(e.child!==null){for(t=e.child,n=Kr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Kr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Hk(t,e,n){switch(e.tag){case 3:ix(e),Fi();break;case 5:Dw(e);break;case 1:Pt(e.type)&&Su(e);break;case 4:Tp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;ve(Au,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ve(Ce,Ce.current&1),e.flags|=128,null):n&e.child.childLanes?ox(t,e,n):(ve(Ce,Ce.current&1),t=lr(t,e,n),t!==null?t.sibling:null);ve(Ce,Ce.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return ax(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ve(Ce,Ce.current),r)break;return null;case 22:case 23:return e.lanes=0,rx(t,e,n)}return lr(t,e,n)}var lx,of,ux,cx;lx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};of=function(){};ux=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Cs(On.current);var i=null;switch(n){case"input":s=Sh(t,s),r=Sh(t,r),i=[];break;case"select":s=Ae({},s,{value:void 0}),r=Ae({},r,{value:void 0}),i=[];break;case"textarea":s=Ah(t,s),r=Ah(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=bu)}Ph(n,r);var o;n=null;for(c in s)if(!r.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var l=s[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ua.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(l=s!=null?s[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ua.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&xe("scroll",t),i||l===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};cx=function(t,e,n,r){n!==r&&(e.flags|=4)};function Oo(t,e){if(!Ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function dt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function qk(t,e,n){var r=e.pendingProps;switch(gp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dt(e),null;case 1:return Pt(e.type)&&ku(),dt(e),null;case 3:return r=e.stateNode,$i(),Te(Rt),Te(yt),bp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Nl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,an!==null&&(pf(an),an=null))),of(t,e),dt(e),null;case 5:Ip(e);var s=Cs(xa.current);if(n=e.type,t!==null&&e.stateNode!=null)ux(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error($(166));return dt(e),null}if(t=Cs(On.current),Nl(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[bn]=e,r[_a]=i,t=(e.mode&1)!==0,n){case"dialog":xe("cancel",r),xe("close",r);break;case"iframe":case"object":case"embed":xe("load",r);break;case"video":case"audio":for(s=0;s<$o.length;s++)xe($o[s],r);break;case"source":xe("error",r);break;case"img":case"image":case"link":xe("error",r),xe("load",r);break;case"details":xe("toggle",r);break;case"input":oy(r,i),xe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},xe("invalid",r);break;case"textarea":ly(r,i),xe("invalid",r)}Ph(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Cl(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Cl(r.textContent,l,t),s=["children",""+l]):ua.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&xe("scroll",r)}switch(n){case"input":wl(r),ay(r,i,!0);break;case"textarea":wl(r),uy(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=bu)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=V_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[bn]=e,t[_a]=r,lx(t,e,!1,!1),e.stateNode=t;e:{switch(o=Dh(n,r),n){case"dialog":xe("cancel",t),xe("close",t),s=r;break;case"iframe":case"object":case"embed":xe("load",t),s=r;break;case"video":case"audio":for(s=0;s<$o.length;s++)xe($o[s],t);s=r;break;case"source":xe("error",t),s=r;break;case"img":case"image":case"link":xe("error",t),xe("load",t),s=r;break;case"details":xe("toggle",t),s=r;break;case"input":oy(t,r),s=Sh(t,r),xe("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Ae({},r,{value:void 0}),xe("invalid",t);break;case"textarea":ly(t,r),s=Ah(t,r),xe("invalid",t);break;default:s=r}Ph(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?$_(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&F_(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ca(t,u):typeof u=="number"&&ca(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(ua.hasOwnProperty(i)?u!=null&&i==="onScroll"&&xe("scroll",t):u!=null&&tp(t,i,u,o))}switch(n){case"input":wl(t),ay(t,r,!1);break;case"textarea":wl(t),uy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Zr(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Ii(t,!!r.multiple,i,!1):r.defaultValue!=null&&Ii(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=bu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return dt(e),null;case 6:if(t&&e.stateNode!=null)cx(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error($(166));if(n=Cs(xa.current),Cs(On.current),Nl(e)){if(r=e.stateNode,n=e.memoizedProps,r[bn]=e,(i=r.nodeValue!==n)&&(t=zt,t!==null))switch(t.tag){case 3:Cl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Cl(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[bn]=e,e.stateNode=r}return dt(e),null;case 13:if(Te(Ce),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ie&&Ft!==null&&e.mode&1&&!(e.flags&128))Cw(),Fi(),e.flags|=98560,i=!1;else if(i=Nl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error($(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error($(317));i[bn]=e}else Fi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;dt(e),i=!1}else an!==null&&(pf(an),an=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ce.current&1?qe===0&&(qe=3):Lp())),e.updateQueue!==null&&(e.flags|=4),dt(e),null);case 4:return $i(),of(t,e),t===null&&ya(e.stateNode.containerInfo),dt(e),null;case 10:return wp(e.type._context),dt(e),null;case 17:return Pt(e.type)&&ku(),dt(e),null;case 19:if(Te(Ce),i=e.memoizedState,i===null)return dt(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Oo(i,!1);else{if(qe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Du(t),o!==null){for(e.flags|=128,Oo(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ve(Ce,Ce.current&1|2),e.child}t=t.sibling}i.tail!==null&&Le()>Bi&&(e.flags|=128,r=!0,Oo(i,!1),e.lanes=4194304)}else{if(!r)if(t=Du(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Oo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Ie)return dt(e),null}else 2*Le()-i.renderingStartTime>Bi&&n!==1073741824&&(e.flags|=128,r=!0,Oo(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Le(),e.sibling=null,n=Ce.current,ve(Ce,r?n&1|2:n&1),e):(dt(e),null);case 22:case 23:return Mp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Vt&1073741824&&(dt(e),e.subtreeFlags&6&&(e.flags|=8192)):dt(e),null;case 24:return null;case 25:return null}throw Error($(156,e.tag))}function Kk(t,e){switch(gp(e),e.tag){case 1:return Pt(e.type)&&ku(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return $i(),Te(Rt),Te(yt),bp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ip(e),null;case 13:if(Te(Ce),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error($(340));Fi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Te(Ce),null;case 4:return $i(),null;case 10:return wp(e.type._context),null;case 22:case 23:return Mp(),null;case 24:return null;default:return null}}var Pl=!1,pt=!1,Gk=typeof WeakSet=="function"?WeakSet:Set,K=null;function xi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){De(t,e,r)}else n.current=null}function af(t,e,n){try{n()}catch(r){De(t,e,r)}}var Jy=!1;function Qk(t,e){if(Bh=Eu,t=mw(),pp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,m=t,g=null;t:for(;;){for(var E;m!==n||s!==0&&m.nodeType!==3||(l=o+s),m!==i||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(E=m.firstChild)!==null;)g=m,m=E;for(;;){if(m===t)break t;if(g===n&&++c===s&&(l=o),g===i&&++f===r&&(u=o),(E=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=E}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Wh={focusedElem:t,selectionRange:n},Eu=!1,K=e;K!==null;)if(e=K,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,K=t;else for(;K!==null;){e=K;try{var N=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var S=N.memoizedProps,I=N.memoizedState,v=e.stateNode,y=v.getSnapshotBeforeUpdate(e.elementType===e.type?S:sn(e.type,S),I);v.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(D){De(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,K=t;break}K=e.return}return N=Jy,Jy=!1,N}function Zo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&af(e,n,i)}s=s.next}while(s!==r)}}function xc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function lf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function dx(t){var e=t.alternate;e!==null&&(t.alternate=null,dx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[bn],delete e[_a],delete e[Kh],delete e[Rk],delete e[Pk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function hx(t){return t.tag===5||t.tag===3||t.tag===4}function Zy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||hx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function uf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=bu));else if(r!==4&&(t=t.child,t!==null))for(uf(t,e,n),t=t.sibling;t!==null;)uf(t,e,n),t=t.sibling}function cf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(cf(t,e,n),t=t.sibling;t!==null;)cf(t,e,n),t=t.sibling}var tt=null,on=!1;function Ir(t,e,n){for(n=n.child;n!==null;)fx(t,e,n),n=n.sibling}function fx(t,e,n){if(Dn&&typeof Dn.onCommitFiberUnmount=="function")try{Dn.onCommitFiberUnmount(fc,n)}catch{}switch(n.tag){case 5:pt||xi(n,e);case 6:var r=tt,s=on;tt=null,Ir(t,e,n),tt=r,on=s,tt!==null&&(on?(t=tt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):tt.removeChild(n.stateNode));break;case 18:tt!==null&&(on?(t=tt,n=n.stateNode,t.nodeType===8?Bd(t.parentNode,n):t.nodeType===1&&Bd(t,n),pa(t)):Bd(tt,n.stateNode));break;case 4:r=tt,s=on,tt=n.stateNode.containerInfo,on=!0,Ir(t,e,n),tt=r,on=s;break;case 0:case 11:case 14:case 15:if(!pt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&af(n,e,o),s=s.next}while(s!==r)}Ir(t,e,n);break;case 1:if(!pt&&(xi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){De(n,e,l)}Ir(t,e,n);break;case 21:Ir(t,e,n);break;case 22:n.mode&1?(pt=(r=pt)||n.memoizedState!==null,Ir(t,e,n),pt=r):Ir(t,e,n);break;default:Ir(t,e,n)}}function e0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Gk),e.forEach(function(r){var s=sS.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function rn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:tt=l.stateNode,on=!1;break e;case 3:tt=l.stateNode.containerInfo,on=!0;break e;case 4:tt=l.stateNode.containerInfo,on=!0;break e}l=l.return}if(tt===null)throw Error($(160));fx(i,o,s),tt=null,on=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(c){De(s,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)px(e,t),e=e.sibling}function px(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(rn(e,t),En(t),r&4){try{Zo(3,t,t.return),xc(3,t)}catch(S){De(t,t.return,S)}try{Zo(5,t,t.return)}catch(S){De(t,t.return,S)}}break;case 1:rn(e,t),En(t),r&512&&n!==null&&xi(n,n.return);break;case 5:if(rn(e,t),En(t),r&512&&n!==null&&xi(n,n.return),t.flags&32){var s=t.stateNode;try{ca(s,"")}catch(S){De(t,t.return,S)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&M_(s,i),Dh(l,o);var c=Dh(l,i);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?$_(s,m):f==="dangerouslySetInnerHTML"?F_(s,m):f==="children"?ca(s,m):tp(s,f,m,c)}switch(l){case"input":Ch(s,i);break;case"textarea":L_(s,i);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var E=i.value;E!=null?Ii(s,!!i.multiple,E,!1):g!==!!i.multiple&&(i.defaultValue!=null?Ii(s,!!i.multiple,i.defaultValue,!0):Ii(s,!!i.multiple,i.multiple?[]:"",!1))}s[_a]=i}catch(S){De(t,t.return,S)}}break;case 6:if(rn(e,t),En(t),r&4){if(t.stateNode===null)throw Error($(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(S){De(t,t.return,S)}}break;case 3:if(rn(e,t),En(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{pa(e.containerInfo)}catch(S){De(t,t.return,S)}break;case 4:rn(e,t),En(t);break;case 13:rn(e,t),En(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Op=Le())),r&4&&e0(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(pt=(c=pt)||f,rn(e,t),pt=c):rn(e,t),En(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(K=t,f=t.child;f!==null;){for(m=K=f;K!==null;){switch(g=K,E=g.child,g.tag){case 0:case 11:case 14:case 15:Zo(4,g,g.return);break;case 1:xi(g,g.return);var N=g.stateNode;if(typeof N.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,N.props=e.memoizedProps,N.state=e.memoizedState,N.componentWillUnmount()}catch(S){De(r,n,S)}}break;case 5:xi(g,g.return);break;case 22:if(g.memoizedState!==null){n0(m);continue}}E!==null?(E.return=g,K=E):n0(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{s=m.stateNode,c?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=U_("display",o))}catch(S){De(t,t.return,S)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(S){De(t,t.return,S)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:rn(e,t),En(t),r&4&&e0(t);break;case 21:break;default:rn(e,t),En(t)}}function En(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(hx(n)){var r=n;break e}n=n.return}throw Error($(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(ca(s,""),r.flags&=-33);var i=Zy(t);cf(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Zy(t);uf(t,l,o);break;default:throw Error($(161))}}catch(u){De(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Yk(t,e,n){K=t,mx(t)}function mx(t,e,n){for(var r=(t.mode&1)!==0;K!==null;){var s=K,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||Pl;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||pt;l=Pl;var c=pt;if(Pl=o,(pt=u)&&!c)for(K=s;K!==null;)o=K,u=o.child,o.tag===22&&o.memoizedState!==null?r0(s):u!==null?(u.return=o,K=u):r0(s);for(;i!==null;)K=i,mx(i),i=i.sibling;K=s,Pl=l,pt=c}t0(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,K=i):t0(t)}}function t0(t){for(;K!==null;){var e=K;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:pt||xc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!pt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:sn(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Fy(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Fy(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&pa(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}pt||e.flags&512&&lf(e)}catch(g){De(e,e.return,g)}}if(e===t){K=null;break}if(n=e.sibling,n!==null){n.return=e.return,K=n;break}K=e.return}}function n0(t){for(;K!==null;){var e=K;if(e===t){K=null;break}var n=e.sibling;if(n!==null){n.return=e.return,K=n;break}K=e.return}}function r0(t){for(;K!==null;){var e=K;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{xc(4,e)}catch(u){De(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){De(e,s,u)}}var i=e.return;try{lf(e)}catch(u){De(e,i,u)}break;case 5:var o=e.return;try{lf(e)}catch(u){De(e,o,u)}}}catch(u){De(e,e.return,u)}if(e===t){K=null;break}var l=e.sibling;if(l!==null){l.return=e.return,K=l;break}K=e.return}}var Xk=Math.ceil,Mu=gr.ReactCurrentDispatcher,Pp=gr.ReactCurrentOwner,Xt=gr.ReactCurrentBatchConfig,de=0,Ze=null,Fe=null,st=0,Vt=0,Ei=us(0),qe=0,ba=null,Ls=0,Ec=0,Dp=0,ea=null,Ct=null,Op=0,Bi=1/0,Kn=null,Lu=!1,df=null,Hr=null,Dl=!1,Vr=null,Vu=0,ta=0,hf=null,tu=-1,nu=0;function Tt(){return de&6?Le():tu!==-1?tu:tu=Le()}function qr(t){return t.mode&1?de&2&&st!==0?st&-st:Ok.transition!==null?(nu===0&&(nu=Z_()),nu):(t=me,t!==0||(t=window.event,t=t===void 0?16:ow(t.type)),t):1}function cn(t,e,n,r){if(50<ta)throw ta=0,hf=null,Error($(185));$a(t,n,r),(!(de&2)||t!==Ze)&&(t===Ze&&(!(de&2)&&(Ec|=n),qe===4&&Ar(t,st)),Dt(t,r),n===1&&de===0&&!(e.mode&1)&&(Bi=Le()+500,vc&&cs()))}function Dt(t,e){var n=t.callbackNode;Ob(t,e);var r=xu(t,t===Ze?st:0);if(r===0)n!==null&&hy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&hy(n),e===1)t.tag===0?Dk(s0.bind(null,t)):bw(s0.bind(null,t)),Nk(function(){!(de&6)&&cs()}),n=null;else{switch(ew(r)){case 1:n=op;break;case 4:n=X_;break;case 16:n=wu;break;case 536870912:n=J_;break;default:n=wu}n=Tx(n,gx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function gx(t,e){if(tu=-1,nu=0,de&6)throw Error($(327));var n=t.callbackNode;if(Ni()&&t.callbackNode!==n)return null;var r=xu(t,t===Ze?st:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Fu(t,r);else{e=r;var s=de;de|=2;var i=vx();(Ze!==t||st!==e)&&(Kn=null,Bi=Le()+500,Rs(t,e));do try{eS();break}catch(l){yx(t,l)}while(!0);_p(),Mu.current=i,de=s,Fe!==null?e=0:(Ze=null,st=0,e=qe)}if(e!==0){if(e===2&&(s=Vh(t),s!==0&&(r=s,e=ff(t,s))),e===1)throw n=ba,Rs(t,0),Ar(t,r),Dt(t,Le()),n;if(e===6)Ar(t,r);else{if(s=t.current.alternate,!(r&30)&&!Jk(s)&&(e=Fu(t,r),e===2&&(i=Vh(t),i!==0&&(r=i,e=ff(t,i))),e===1))throw n=ba,Rs(t,0),Ar(t,r),Dt(t,Le()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error($(345));case 2:Ts(t,Ct,Kn);break;case 3:if(Ar(t,r),(r&130023424)===r&&(e=Op+500-Le(),10<e)){if(xu(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){Tt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=qh(Ts.bind(null,t,Ct,Kn),e);break}Ts(t,Ct,Kn);break;case 4:if(Ar(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-un(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Xk(r/1960))-r,10<r){t.timeoutHandle=qh(Ts.bind(null,t,Ct,Kn),r);break}Ts(t,Ct,Kn);break;case 5:Ts(t,Ct,Kn);break;default:throw Error($(329))}}}return Dt(t,Le()),t.callbackNode===n?gx.bind(null,t):null}function ff(t,e){var n=ea;return t.current.memoizedState.isDehydrated&&(Rs(t,e).flags|=256),t=Fu(t,e),t!==2&&(e=Ct,Ct=n,e!==null&&pf(e)),t}function pf(t){Ct===null?Ct=t:Ct.push.apply(Ct,t)}function Jk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!fn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ar(t,e){for(e&=~Dp,e&=~Ec,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-un(e),r=1<<n;t[n]=-1,e&=~r}}function s0(t){if(de&6)throw Error($(327));Ni();var e=xu(t,0);if(!(e&1))return Dt(t,Le()),null;var n=Fu(t,e);if(t.tag!==0&&n===2){var r=Vh(t);r!==0&&(e=r,n=ff(t,r))}if(n===1)throw n=ba,Rs(t,0),Ar(t,e),Dt(t,Le()),n;if(n===6)throw Error($(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ts(t,Ct,Kn),Dt(t,Le()),null}function jp(t,e){var n=de;de|=1;try{return t(e)}finally{de=n,de===0&&(Bi=Le()+500,vc&&cs())}}function Vs(t){Vr!==null&&Vr.tag===0&&!(de&6)&&Ni();var e=de;de|=1;var n=Xt.transition,r=me;try{if(Xt.transition=null,me=1,t)return t()}finally{me=r,Xt.transition=n,de=e,!(de&6)&&cs()}}function Mp(){Vt=Ei.current,Te(Ei)}function Rs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Ck(n)),Fe!==null)for(n=Fe.return;n!==null;){var r=n;switch(gp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ku();break;case 3:$i(),Te(Rt),Te(yt),bp();break;case 5:Ip(r);break;case 4:$i();break;case 13:Te(Ce);break;case 19:Te(Ce);break;case 10:wp(r.type._context);break;case 22:case 23:Mp()}n=n.return}if(Ze=t,Fe=t=Kr(t.current,null),st=Vt=e,qe=0,ba=null,Dp=Ec=Ls=0,Ct=ea=null,Ss!==null){for(e=0;e<Ss.length;e++)if(n=Ss[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Ss=null}return t}function yx(t,e){do{var n=Fe;try{if(_p(),Jl.current=ju,Ou){for(var r=Ne.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Ou=!1}if(Ms=0,Je=Be=Ne=null,Jo=!1,Ea=0,Pp.current=null,n===null||n.return===null){qe=1,ba=e,Fe=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=st,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var E=Hy(o);if(E!==null){E.flags&=-257,qy(E,o,l,i,e),E.mode&1&&Wy(i,c,e),e=E,u=c;var N=e.updateQueue;if(N===null){var S=new Set;S.add(u),e.updateQueue=S}else N.add(u);break e}else{if(!(e&1)){Wy(i,c,e),Lp();break e}u=Error($(426))}}else if(Ie&&l.mode&1){var I=Hy(o);if(I!==null){!(I.flags&65536)&&(I.flags|=256),qy(I,o,l,i,e),yp(zi(u,l));break e}}i=u=zi(u,l),qe!==4&&(qe=2),ea===null?ea=[i]:ea.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var v=ex(i,u,e);Vy(i,v);break e;case 1:l=u;var y=i.type,_=i.stateNode;if(!(i.flags&128)&&(typeof y.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Hr===null||!Hr.has(_)))){i.flags|=65536,e&=-e,i.lanes|=e;var D=tx(i,l,e);Vy(i,D);break e}}i=i.return}while(i!==null)}wx(n)}catch(M){e=M,Fe===n&&n!==null&&(Fe=n=n.return);continue}break}while(!0)}function vx(){var t=Mu.current;return Mu.current=ju,t===null?ju:t}function Lp(){(qe===0||qe===3||qe===2)&&(qe=4),Ze===null||!(Ls&268435455)&&!(Ec&268435455)||Ar(Ze,st)}function Fu(t,e){var n=de;de|=2;var r=vx();(Ze!==t||st!==e)&&(Kn=null,Rs(t,e));do try{Zk();break}catch(s){yx(t,s)}while(!0);if(_p(),de=n,Mu.current=r,Fe!==null)throw Error($(261));return Ze=null,st=0,qe}function Zk(){for(;Fe!==null;)_x(Fe)}function eS(){for(;Fe!==null&&!bb();)_x(Fe)}function _x(t){var e=Ex(t.alternate,t,Vt);t.memoizedProps=t.pendingProps,e===null?wx(t):Fe=e,Pp.current=null}function wx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Kk(n,e),n!==null){n.flags&=32767,Fe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{qe=6,Fe=null;return}}else if(n=qk(n,e,Vt),n!==null){Fe=n;return}if(e=e.sibling,e!==null){Fe=e;return}Fe=e=t}while(e!==null);qe===0&&(qe=5)}function Ts(t,e,n){var r=me,s=Xt.transition;try{Xt.transition=null,me=1,tS(t,e,n,r)}finally{Xt.transition=s,me=r}return null}function tS(t,e,n,r){do Ni();while(Vr!==null);if(de&6)throw Error($(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error($(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(jb(t,i),t===Ze&&(Fe=Ze=null,st=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Dl||(Dl=!0,Tx(wu,function(){return Ni(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Xt.transition,Xt.transition=null;var o=me;me=1;var l=de;de|=4,Pp.current=null,Qk(t,n),px(n,t),xk(Wh),Eu=!!Bh,Wh=Bh=null,t.current=n,Yk(n),kb(),de=l,me=o,Xt.transition=i}else t.current=n;if(Dl&&(Dl=!1,Vr=t,Vu=s),i=t.pendingLanes,i===0&&(Hr=null),Nb(n.stateNode),Dt(t,Le()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Lu)throw Lu=!1,t=df,df=null,t;return Vu&1&&t.tag!==0&&Ni(),i=t.pendingLanes,i&1?t===hf?ta++:(ta=0,hf=t):ta=0,cs(),null}function Ni(){if(Vr!==null){var t=ew(Vu),e=Xt.transition,n=me;try{if(Xt.transition=null,me=16>t?16:t,Vr===null)var r=!1;else{if(t=Vr,Vr=null,Vu=0,de&6)throw Error($(331));var s=de;for(de|=4,K=t.current;K!==null;){var i=K,o=i.child;if(K.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(K=c;K!==null;){var f=K;switch(f.tag){case 0:case 11:case 15:Zo(8,f,i)}var m=f.child;if(m!==null)m.return=f,K=m;else for(;K!==null;){f=K;var g=f.sibling,E=f.return;if(dx(f),f===c){K=null;break}if(g!==null){g.return=E,K=g;break}K=E}}}var N=i.alternate;if(N!==null){var S=N.child;if(S!==null){N.child=null;do{var I=S.sibling;S.sibling=null,S=I}while(S!==null)}}K=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,K=o;else e:for(;K!==null;){if(i=K,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Zo(9,i,i.return)}var v=i.sibling;if(v!==null){v.return=i.return,K=v;break e}K=i.return}}var y=t.current;for(K=y;K!==null;){o=K;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,K=_;else e:for(o=y;K!==null;){if(l=K,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:xc(9,l)}}catch(M){De(l,l.return,M)}if(l===o){K=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,K=D;break e}K=l.return}}if(de=s,cs(),Dn&&typeof Dn.onPostCommitFiberRoot=="function")try{Dn.onPostCommitFiberRoot(fc,t)}catch{}r=!0}return r}finally{me=n,Xt.transition=e}}return!1}function i0(t,e,n){e=zi(n,e),e=ex(t,e,1),t=Wr(t,e,1),e=Tt(),t!==null&&($a(t,1,e),Dt(t,e))}function De(t,e,n){if(t.tag===3)i0(t,t,n);else for(;e!==null;){if(e.tag===3){i0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Hr===null||!Hr.has(r))){t=zi(n,t),t=tx(e,t,1),e=Wr(e,t,1),t=Tt(),e!==null&&($a(e,1,t),Dt(e,t));break}}e=e.return}}function nS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Tt(),t.pingedLanes|=t.suspendedLanes&n,Ze===t&&(st&n)===n&&(qe===4||qe===3&&(st&130023424)===st&&500>Le()-Op?Rs(t,0):Dp|=n),Dt(t,e)}function xx(t,e){e===0&&(t.mode&1?(e=Tl,Tl<<=1,!(Tl&130023424)&&(Tl=4194304)):e=1);var n=Tt();t=ar(t,e),t!==null&&($a(t,e,n),Dt(t,n))}function rS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),xx(t,n)}function sS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error($(314))}r!==null&&r.delete(e),xx(t,n)}var Ex;Ex=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Rt.current)At=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return At=!1,Hk(t,e,n);At=!!(t.flags&131072)}else At=!1,Ie&&e.flags&1048576&&kw(e,Nu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;eu(t,e),t=e.pendingProps;var s=Vi(e,yt.current);Ci(e,n),s=Sp(null,e,r,t,s,n);var i=Cp();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Pt(r)?(i=!0,Su(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Ep(e),s.updater=wc,e.stateNode=s,s._reactInternals=e,Zh(e,r,t,n),e=nf(null,e,r,!0,i,n)):(e.tag=0,Ie&&i&&mp(e),Et(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(eu(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=oS(r),t=sn(r,t),s){case 0:e=tf(null,e,r,t,n);break e;case 1:e=Qy(null,e,r,t,n);break e;case 11:e=Ky(null,e,r,t,n);break e;case 14:e=Gy(null,e,r,sn(r.type,t),n);break e}throw Error($(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:sn(r,s),tf(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:sn(r,s),Qy(t,e,r,s,n);case 3:e:{if(ix(e),t===null)throw Error($(387));r=e.pendingProps,i=e.memoizedState,s=i.element,Pw(t,e),Pu(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=zi(Error($(423)),e),e=Yy(t,e,r,n,s);break e}else if(r!==s){s=zi(Error($(424)),e),e=Yy(t,e,r,n,s);break e}else for(Ft=Br(e.stateNode.containerInfo.firstChild),zt=e,Ie=!0,an=null,n=Aw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fi(),r===s){e=lr(t,e,n);break e}Et(t,e,r,n)}e=e.child}return e;case 5:return Dw(e),t===null&&Yh(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Hh(r,s)?o=null:i!==null&&Hh(r,i)&&(e.flags|=32),sx(t,e),Et(t,e,o,n),e.child;case 6:return t===null&&Yh(e),null;case 13:return ox(t,e,n);case 4:return Tp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ui(e,null,r,n):Et(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:sn(r,s),Ky(t,e,r,s,n);case 7:return Et(t,e,e.pendingProps,n),e.child;case 8:return Et(t,e,e.pendingProps.children,n),e.child;case 12:return Et(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,ve(Au,r._currentValue),r._currentValue=o,i!==null)if(fn(i.value,o)){if(i.children===s.children&&!Rt.current){e=lr(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=nr(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Xh(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error($(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Xh(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Et(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Ci(e,n),s=Jt(s),r=r(s),e.flags|=1,Et(t,e,r,n),e.child;case 14:return r=e.type,s=sn(r,e.pendingProps),s=sn(r.type,s),Gy(t,e,r,s,n);case 15:return nx(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:sn(r,s),eu(t,e),e.tag=1,Pt(r)?(t=!0,Su(e)):t=!1,Ci(e,n),Zw(e,r,s),Zh(e,r,s,n),nf(null,e,r,!0,t,n);case 19:return ax(t,e,n);case 22:return rx(t,e,n)}throw Error($(156,e.tag))};function Tx(t,e){return Y_(t,e)}function iS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yt(t,e,n,r){return new iS(t,e,n,r)}function Vp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function oS(t){if(typeof t=="function")return Vp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===rp)return 11;if(t===sp)return 14}return 2}function Kr(t,e){var n=t.alternate;return n===null?(n=Yt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ru(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Vp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case hi:return Ps(n.children,s,i,e);case np:o=8,s|=8;break;case Th:return t=Yt(12,n,e,s|2),t.elementType=Th,t.lanes=i,t;case Ih:return t=Yt(13,n,e,s),t.elementType=Ih,t.lanes=i,t;case bh:return t=Yt(19,n,e,s),t.elementType=bh,t.lanes=i,t;case D_:return Tc(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case R_:o=10;break e;case P_:o=9;break e;case rp:o=11;break e;case sp:o=14;break e;case Sr:o=16,r=null;break e}throw Error($(130,t==null?t:typeof t,""))}return e=Yt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Ps(t,e,n,r){return t=Yt(7,t,r,e),t.lanes=n,t}function Tc(t,e,n,r){return t=Yt(22,t,r,e),t.elementType=D_,t.lanes=n,t.stateNode={isHidden:!1},t}function Xd(t,e,n){return t=Yt(6,t,null,e),t.lanes=n,t}function Jd(t,e,n){return e=Yt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function aS(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pd(0),this.expirationTimes=Pd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pd(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Fp(t,e,n,r,s,i,o,l,u){return t=new aS(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Yt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ep(i),t}function lS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:di,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Ix(t){if(!t)return es;t=t._reactInternals;e:{if(Gs(t)!==t||t.tag!==1)throw Error($(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Pt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error($(171))}if(t.tag===1){var n=t.type;if(Pt(n))return Iw(t,n,e)}return e}function bx(t,e,n,r,s,i,o,l,u){return t=Fp(n,r,!0,t,s,i,o,l,u),t.context=Ix(null),n=t.current,r=Tt(),s=qr(n),i=nr(r,s),i.callback=e??null,Wr(n,i,s),t.current.lanes=s,$a(t,s,r),Dt(t,r),t}function Ic(t,e,n,r){var s=e.current,i=Tt(),o=qr(s);return n=Ix(n),e.context===null?e.context=n:e.pendingContext=n,e=nr(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Wr(s,e,o),t!==null&&(cn(t,s,o,i),Xl(t,s,o)),o}function Uu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function o0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Up(t,e){o0(t,e),(t=t.alternate)&&o0(t,e)}function uS(){return null}var kx=typeof reportError=="function"?reportError:function(t){console.error(t)};function $p(t){this._internalRoot=t}bc.prototype.render=$p.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error($(409));Ic(t,e,null,null)};bc.prototype.unmount=$p.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Vs(function(){Ic(null,t,null,null)}),e[or]=null}};function bc(t){this._internalRoot=t}bc.prototype.unstable_scheduleHydration=function(t){if(t){var e=rw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Nr.length&&e!==0&&e<Nr[n].priority;n++);Nr.splice(n,0,t),n===0&&iw(t)}};function zp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function kc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function a0(){}function cS(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var c=Uu(o);i.call(c)}}var o=bx(e,r,t,0,null,!1,!1,"",a0);return t._reactRootContainer=o,t[or]=o.current,ya(t.nodeType===8?t.parentNode:t),Vs(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var c=Uu(u);l.call(c)}}var u=Fp(t,0,!1,null,null,!1,!1,"",a0);return t._reactRootContainer=u,t[or]=u.current,ya(t.nodeType===8?t.parentNode:t),Vs(function(){Ic(e,u,n,r)}),u}function Sc(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=Uu(o);l.call(u)}}Ic(e,o,t,s)}else o=cS(n,e,t,s,r);return Uu(o)}tw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Uo(e.pendingLanes);n!==0&&(ap(e,n|1),Dt(e,Le()),!(de&6)&&(Bi=Le()+500,cs()))}break;case 13:Vs(function(){var r=ar(t,1);if(r!==null){var s=Tt();cn(r,t,1,s)}}),Up(t,1)}};lp=function(t){if(t.tag===13){var e=ar(t,134217728);if(e!==null){var n=Tt();cn(e,t,134217728,n)}Up(t,134217728)}};nw=function(t){if(t.tag===13){var e=qr(t),n=ar(t,e);if(n!==null){var r=Tt();cn(n,t,e,r)}Up(t,e)}};rw=function(){return me};sw=function(t,e){var n=me;try{return me=t,e()}finally{me=n}};jh=function(t,e,n){switch(e){case"input":if(Ch(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=yc(r);if(!s)throw Error($(90));j_(r),Ch(r,s)}}}break;case"textarea":L_(t,n);break;case"select":e=n.value,e!=null&&Ii(t,!!n.multiple,e,!1)}};W_=jp;H_=Vs;var dS={usingClientEntryPoint:!1,Events:[Ba,gi,yc,z_,B_,jp]},jo={findFiberByHostInstance:ks,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hS={bundleType:jo.bundleType,version:jo.version,rendererPackageName:jo.rendererPackageName,rendererConfig:jo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=G_(t),t===null?null:t.stateNode},findFiberByHostInstance:jo.findFiberByHostInstance||uS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ol=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ol.isDisabled&&Ol.supportsFiber)try{fc=Ol.inject(hS),Dn=Ol}catch{}}Wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dS;Wt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zp(e))throw Error($(200));return lS(t,e,null,n)};Wt.createRoot=function(t,e){if(!zp(t))throw Error($(299));var n=!1,r="",s=kx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Fp(t,1,!1,null,null,n,!1,r,s),t[or]=e.current,ya(t.nodeType===8?t.parentNode:t),new $p(e)};Wt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error($(188)):(t=Object.keys(t).join(","),Error($(268,t)));return t=G_(e),t=t===null?null:t.stateNode,t};Wt.flushSync=function(t){return Vs(t)};Wt.hydrate=function(t,e,n){if(!kc(e))throw Error($(200));return Sc(null,t,e,!0,n)};Wt.hydrateRoot=function(t,e,n){if(!zp(t))throw Error($(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=kx;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=bx(e,null,t,1,n??null,s,!1,i,o),t[or]=e.current,ya(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new bc(e)};Wt.render=function(t,e,n){if(!kc(e))throw Error($(200));return Sc(null,t,e,!1,n)};Wt.unmountComponentAtNode=function(t){if(!kc(t))throw Error($(40));return t._reactRootContainer?(Vs(function(){Sc(null,null,t,!1,function(){t._reactRootContainer=null,t[or]=null})}),!0):!1};Wt.unstable_batchedUpdates=jp;Wt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!kc(n))throw Error($(200));if(t==null||t._reactInternals===void 0)throw Error($(38));return Sc(t,e,n,!1,r)};Wt.version="18.3.1-next-f1338f8080-20240426";function Sx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sx)}catch(t){console.error(t)}}Sx(),S_.exports=Wt;var fS=S_.exports,Cx,l0=fS;Cx=l0.createRoot,l0.hydrateRoot;/**
 * react-router v7.9.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var u0="popstate";function pS(t={}){function e(r,s){let{pathname:i,search:o,hash:l}=r.location;return mf("",{pathname:i,search:o,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:ka(s)}return gS(e,n,null,t)}function ke(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function pn(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function mS(){return Math.random().toString(36).substring(2,10)}function c0(t,e){return{usr:t.state,key:t.key,idx:e}}function mf(t,e,n=null,r){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?eo(e):e,state:n,key:e&&e.key||r||mS()}}function ka({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function eo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substring(r),t=t.substring(0,r)),t&&(e.pathname=t)}return e}function gS(t,e,n,r={}){let{window:s=document.defaultView,v5Compat:i=!1}=r,o=s.history,l="POP",u=null,c=f();c==null&&(c=0,o.replaceState({...o.state,idx:c},""));function f(){return(o.state||{idx:null}).idx}function m(){l="POP";let I=f(),v=I==null?null:I-c;c=I,u&&u({action:l,location:S.location,delta:v})}function g(I,v){l="PUSH";let y=mf(S.location,I,v);c=f()+1;let _=c0(y,c),D=S.createHref(y);try{o.pushState(_,"",D)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;s.location.assign(D)}i&&u&&u({action:l,location:S.location,delta:1})}function E(I,v){l="REPLACE";let y=mf(S.location,I,v);c=f();let _=c0(y,c),D=S.createHref(y);o.replaceState(_,"",D),i&&u&&u({action:l,location:S.location,delta:0})}function N(I){return yS(I)}let S={get action(){return l},get location(){return t(s,o)},listen(I){if(u)throw new Error("A history only accepts one active listener");return s.addEventListener(u0,m),u=I,()=>{s.removeEventListener(u0,m),u=null}},createHref(I){return e(s,I)},createURL:N,encodeLocation(I){let v=N(I);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:g,replace:E,go(I){return o.go(I)}};return S}function yS(t,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),ke(n,"No window.location.(origin|href) available to create URL");let r=typeof t=="string"?t:ka(t);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function Nx(t,e,n="/"){return vS(t,e,n,!1)}function vS(t,e,n,r){let s=typeof e=="string"?eo(e):e,i=ur(s.pathname||"/",n);if(i==null)return null;let o=Ax(t);_S(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=AS(i);l=CS(o[u],c,r)}return l}function Ax(t,e=[],n=[],r="",s=!1){let i=(o,l,u=s,c)=>{let f={relativePath:c===void 0?o.path||"":c,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};if(f.relativePath.startsWith("/")){if(!f.relativePath.startsWith(r)&&u)return;ke(f.relativePath.startsWith(r),`Absolute route path "${f.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),f.relativePath=f.relativePath.slice(r.length)}let m=rr([r,f.relativePath]),g=n.concat(f);o.children&&o.children.length>0&&(ke(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),Ax(o.children,e,g,m,u)),!(o.path==null&&!o.index)&&e.push({path:m,score:kS(m,o.index),routesMeta:g})};return t.forEach((o,l)=>{var u;if(o.path===""||!((u=o.path)!=null&&u.includes("?")))i(o,l);else for(let c of Rx(o.path))i(o,l,!0,c)}),e}function Rx(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,s=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let o=Rx(r.join("/")),l=[];return l.push(...o.map(u=>u===""?i:[i,u].join("/"))),s&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function _S(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:SS(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var wS=/^:[\w-]+$/,xS=3,ES=2,TS=1,IS=10,bS=-2,d0=t=>t==="*";function kS(t,e){let n=t.split("/"),r=n.length;return n.some(d0)&&(r+=bS),e&&(r+=ES),n.filter(s=>!d0(s)).reduce((s,i)=>s+(wS.test(i)?xS:i===""?TS:IS),r)}function SS(t,e){return t.length===e.length&&t.slice(0,-1).every((r,s)=>r===e[s])?t[t.length-1]-e[e.length-1]:0}function CS(t,e,n=!1){let{routesMeta:r}=t,s={},i="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,f=i==="/"?e:e.slice(i.length)||"/",m=$u({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},f),g=u.route;if(!m&&c&&n&&!r[r.length-1].route.index&&(m=$u({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},f)),!m)return null;Object.assign(s,m.params),o.push({params:s,pathname:rr([i,m.pathname]),pathnameBase:OS(rr([i,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(i=rr([i,m.pathnameBase]))}return o}function $u(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=NS(t.path,t.caseSensitive,t.end),s=e.match(n);if(!s)return null;let i=s[0],o=i.replace(/(.)\/+$/,"$1"),l=s.slice(1);return{params:r.reduce((c,{paramName:f,isOptional:m},g)=>{if(f==="*"){let N=l[g]||"";o=i.slice(0,i.length-N.length).replace(/(.)\/+$/,"$1")}const E=l[g];return m&&!E?c[f]=void 0:c[f]=(E||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:o,pattern:t}}function NS(t,e=!1,n=!0){pn(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let r=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(r.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function AS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return pn(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function ur(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function RS(t,e="/"){let{pathname:n,search:r="",hash:s=""}=typeof t=="string"?eo(t):t;return{pathname:n?n.startsWith("/")?n:PS(n,e):e,search:jS(r),hash:MS(s)}}function PS(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function Zd(t,e,n,r){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function DS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Bp(t){let e=DS(t);return e.map((n,r)=>r===e.length-1?n.pathname:n.pathnameBase)}function Wp(t,e,n,r=!1){let s;typeof t=="string"?s=eo(t):(s={...t},ke(!s.pathname||!s.pathname.includes("?"),Zd("?","pathname","search",s)),ke(!s.pathname||!s.pathname.includes("#"),Zd("#","pathname","hash",s)),ke(!s.search||!s.search.includes("#"),Zd("#","search","hash",s)));let i=t===""||s.pathname==="",o=i?"/":s.pathname,l;if(o==null)l=n;else{let m=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),m-=1;s.pathname=g.join("/")}l=m>=0?e[m]:"/"}let u=RS(s,l),c=o&&o!=="/"&&o.endsWith("/"),f=(i||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||f)&&(u.pathname+="/"),u}var rr=t=>t.join("/").replace(/\/\/+/g,"/"),OS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),jS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,MS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function LS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var Px=["POST","PUT","PATCH","DELETE"];new Set(Px);var VS=["GET",...Px];new Set(VS);var to=R.createContext(null);to.displayName="DataRouter";var Cc=R.createContext(null);Cc.displayName="DataRouterState";R.createContext(!1);var Dx=R.createContext({isTransitioning:!1});Dx.displayName="ViewTransition";var FS=R.createContext(new Map);FS.displayName="Fetchers";var US=R.createContext(null);US.displayName="Await";var vn=R.createContext(null);vn.displayName="Navigation";var Ha=R.createContext(null);Ha.displayName="Location";var Bn=R.createContext({outlet:null,matches:[],isDataRoute:!1});Bn.displayName="Route";var Hp=R.createContext(null);Hp.displayName="RouteError";function $S(t,{relative:e}={}){ke(no(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=R.useContext(vn),{hash:s,pathname:i,search:o}=qa(t,{relative:e}),l=i;return n!=="/"&&(l=i==="/"?n:rr([n,i])),r.createHref({pathname:l,search:o,hash:s})}function no(){return R.useContext(Ha)!=null}function tn(){return ke(no(),"useLocation() may be used only in the context of a <Router> component."),R.useContext(Ha).location}var Ox="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function jx(t){R.useContext(vn).static||R.useLayoutEffect(t)}function Wn(){let{isDataRoute:t}=R.useContext(Bn);return t?eC():zS()}function zS(){ke(no(),"useNavigate() may be used only in the context of a <Router> component.");let t=R.useContext(to),{basename:e,navigator:n}=R.useContext(vn),{matches:r}=R.useContext(Bn),{pathname:s}=tn(),i=JSON.stringify(Bp(r)),o=R.useRef(!1);return jx(()=>{o.current=!0}),R.useCallback((u,c={})=>{if(pn(o.current,Ox),!o.current)return;if(typeof u=="number"){n.go(u);return}let f=Wp(u,JSON.parse(i),s,c.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:rr([e,f.pathname])),(c.replace?n.replace:n.push)(f,c.state,c)},[e,n,i,s,t])}R.createContext(null);function qa(t,{relative:e}={}){let{matches:n}=R.useContext(Bn),{pathname:r}=tn(),s=JSON.stringify(Bp(n));return R.useMemo(()=>Wp(t,JSON.parse(s),r,e==="path"),[t,s,r,e])}function BS(t,e){return Mx(t,e)}function Mx(t,e,n,r,s){var y;ke(no(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=R.useContext(vn),{matches:o}=R.useContext(Bn),l=o[o.length-1],u=l?l.params:{},c=l?l.pathname:"/",f=l?l.pathnameBase:"/",m=l&&l.route;{let _=m&&m.path||"";Lx(c,!m||_.endsWith("*")||_.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${_}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${_}"> to <Route path="${_==="/"?"*":`${_}/*`}">.`)}let g=tn(),E;if(e){let _=typeof e=="string"?eo(e):e;ke(f==="/"||((y=_.pathname)==null?void 0:y.startsWith(f)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${f}" but pathname "${_.pathname}" was given in the \`location\` prop.`),E=_}else E=g;let N=E.pathname||"/",S=N;if(f!=="/"){let _=f.replace(/^\//,"").split("/");S="/"+N.replace(/^\//,"").split("/").slice(_.length).join("/")}let I=Nx(t,{pathname:S});pn(m||I!=null,`No routes matched location "${E.pathname}${E.search}${E.hash}" `),pn(I==null||I[I.length-1].route.element!==void 0||I[I.length-1].route.Component!==void 0||I[I.length-1].route.lazy!==void 0,`Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let v=GS(I&&I.map(_=>Object.assign({},_,{params:Object.assign({},u,_.params),pathname:rr([f,i.encodeLocation?i.encodeLocation(_.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?f:rr([f,i.encodeLocation?i.encodeLocation(_.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:_.pathnameBase])})),o,n,r,s);return e&&v?R.createElement(Ha.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...E},navigationType:"POP"}},v):v}function WS(){let t=ZS(),e=LS(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:r},i={padding:"2px 4px",backgroundColor:r},o=null;return console.error("Error handled by React Router default ErrorBoundary:",t),o=R.createElement(R.Fragment,null,R.createElement("p",null,"💿 Hey developer 👋"),R.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",R.createElement("code",{style:i},"ErrorBoundary")," or"," ",R.createElement("code",{style:i},"errorElement")," prop on your route.")),R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},e),n?R.createElement("pre",{style:s},n):null,o)}var HS=R.createElement(WS,null),qS=class extends R.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){this.props.unstable_onError?this.props.unstable_onError(t,e):console.error("React Router caught the following error during render",t)}render(){return this.state.error!==void 0?R.createElement(Bn.Provider,{value:this.props.routeContext},R.createElement(Hp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function KS({routeContext:t,match:e,children:n}){let r=R.useContext(to);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),R.createElement(Bn.Provider,{value:t},n)}function GS(t,e=[],n=null,r=null,s=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let i=t,o=n==null?void 0:n.errors;if(o!=null){let c=i.findIndex(f=>f.route.id&&(o==null?void 0:o[f.route.id])!==void 0);ke(c>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),i=i.slice(0,Math.min(i.length,c+1))}let l=!1,u=-1;if(n)for(let c=0;c<i.length;c++){let f=i[c];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=c),f.route.id){let{loaderData:m,errors:g}=n,E=f.route.loader&&!m.hasOwnProperty(f.route.id)&&(!g||g[f.route.id]===void 0);if(f.route.lazy||E){l=!0,u>=0?i=i.slice(0,u+1):i=[i[0]];break}}}return i.reduceRight((c,f,m)=>{let g,E=!1,N=null,S=null;n&&(g=o&&f.route.id?o[f.route.id]:void 0,N=f.route.errorElement||HS,l&&(u<0&&m===0?(Lx("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,S=null):u===m&&(E=!0,S=f.route.hydrateFallbackElement||null)));let I=e.concat(i.slice(0,m+1)),v=()=>{let y;return g?y=N:E?y=S:f.route.Component?y=R.createElement(f.route.Component,null):f.route.element?y=f.route.element:y=c,R.createElement(KS,{match:f,routeContext:{outlet:c,matches:I,isDataRoute:n!=null},children:y})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?R.createElement(qS,{location:n.location,revalidation:n.revalidation,component:N,error:g,children:v(),routeContext:{outlet:null,matches:I,isDataRoute:!0},unstable_onError:r}):v()},null)}function qp(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function QS(t){let e=R.useContext(to);return ke(e,qp(t)),e}function YS(t){let e=R.useContext(Cc);return ke(e,qp(t)),e}function XS(t){let e=R.useContext(Bn);return ke(e,qp(t)),e}function Kp(t){let e=XS(t),n=e.matches[e.matches.length-1];return ke(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function JS(){return Kp("useRouteId")}function ZS(){var r;let t=R.useContext(Hp),e=YS("useRouteError"),n=Kp("useRouteError");return t!==void 0?t:(r=e.errors)==null?void 0:r[n]}function eC(){let{router:t}=QS("useNavigate"),e=Kp("useNavigate"),n=R.useRef(!1);return jx(()=>{n.current=!0}),R.useCallback(async(s,i={})=>{pn(n.current,Ox),n.current&&(typeof s=="number"?t.navigate(s):await t.navigate(s,{fromRouteId:e,...i}))},[t,e])}var h0={};function Lx(t,e,n){!e&&!h0[t]&&(h0[t]=!0,pn(!1,n))}R.memo(tC);function tC({routes:t,future:e,state:n,unstable_onError:r}){return Mx(t,void 0,n,r,e)}function nC({to:t,replace:e,state:n,relative:r}){ke(no(),"<Navigate> may be used only in the context of a <Router> component.");let{static:s}=R.useContext(vn);pn(!s,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:i}=R.useContext(Bn),{pathname:o}=tn(),l=Wn(),u=Wp(t,Bp(i),o,r==="path"),c=JSON.stringify(u);return R.useEffect(()=>{l(JSON.parse(c),{replace:e,state:n,relative:r})},[l,c,r,e,n]),null}function qn(t){ke(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function rC({basename:t="/",children:e=null,location:n,navigationType:r="POP",navigator:s,static:i=!1}){ke(!no(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=t.replace(/^\/*/,"/"),l=R.useMemo(()=>({basename:o,navigator:s,static:i,future:{}}),[o,s,i]);typeof n=="string"&&(n=eo(n));let{pathname:u="/",search:c="",hash:f="",state:m=null,key:g="default"}=n,E=R.useMemo(()=>{let N=ur(u,o);return N==null?null:{location:{pathname:N,search:c,hash:f,state:m,key:g},navigationType:r}},[o,u,c,f,m,g,r]);return pn(E!=null,`<Router basename="${o}"> is not able to match the URL "${u}${c}${f}" because it does not start with the basename, so the <Router> won't render anything.`),E==null?null:R.createElement(vn.Provider,{value:l},R.createElement(Ha.Provider,{children:e,value:E}))}function sC({children:t,location:e}){return BS(gf(t),e)}function gf(t,e=[]){let n=[];return R.Children.forEach(t,(r,s)=>{if(!R.isValidElement(r))return;let i=[...e,s];if(r.type===R.Fragment){n.push.apply(n,gf(r.props.children,i));return}ke(r.type===qn,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ke(!r.props.index||!r.props.children,"An index route cannot have child routes.");let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=gf(r.props.children,i)),n.push(o)}),n}var su="get",iu="application/x-www-form-urlencoded";function Nc(t){return t!=null&&typeof t.tagName=="string"}function iC(t){return Nc(t)&&t.tagName.toLowerCase()==="button"}function oC(t){return Nc(t)&&t.tagName.toLowerCase()==="form"}function aC(t){return Nc(t)&&t.tagName.toLowerCase()==="input"}function lC(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function uC(t,e){return t.button===0&&(!e||e==="_self")&&!lC(t)}var jl=null;function cC(){if(jl===null)try{new FormData(document.createElement("form"),0),jl=!1}catch{jl=!0}return jl}var dC=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function eh(t){return t!=null&&!dC.has(t)?(pn(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${iu}"`),null):t}function hC(t,e){let n,r,s,i,o;if(oC(t)){let l=t.getAttribute("action");r=l?ur(l,e):null,n=t.getAttribute("method")||su,s=eh(t.getAttribute("enctype"))||iu,i=new FormData(t)}else if(iC(t)||aC(t)&&(t.type==="submit"||t.type==="image")){let l=t.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let u=t.getAttribute("formaction")||l.getAttribute("action");if(r=u?ur(u,e):null,n=t.getAttribute("formmethod")||l.getAttribute("method")||su,s=eh(t.getAttribute("formenctype"))||eh(l.getAttribute("enctype"))||iu,i=new FormData(l,t),!cC()){let{name:c,type:f,value:m}=t;if(f==="image"){let g=c?`${c}.`:"";i.append(`${g}x`,"0"),i.append(`${g}y`,"0")}else c&&i.append(c,m)}}else{if(Nc(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=su,r=null,s=iu,o=t}return i&&s==="text/plain"&&(o=i,i=void 0),{action:r,method:n.toLowerCase(),encType:s,formData:i,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Gp(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function fC(t,e,n){let r=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return r.pathname==="/"?r.pathname=`_root.${n}`:e&&ur(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${n}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${n}`,r}async function pC(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function mC(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function gC(t,e,n){let r=await Promise.all(t.map(async s=>{let i=e.routes[s.route.id];if(i){let o=await pC(i,n);return o.links?o.links():[]}return[]}));return wC(r.flat(1).filter(mC).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function f0(t,e,n,r,s,i){let o=(u,c)=>n[c]?u.route.id!==n[c].route.id:!0,l=(u,c)=>{var f;return n[c].pathname!==u.pathname||((f=n[c].route.path)==null?void 0:f.endsWith("*"))&&n[c].params["*"]!==u.params["*"]};return i==="assets"?e.filter((u,c)=>o(u,c)||l(u,c)):i==="data"?e.filter((u,c)=>{var m;let f=r.routes[u.route.id];if(!f||!f.hasLoader)return!1;if(o(u,c)||l(u,c))return!0;if(u.route.shouldRevalidate){let g=u.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:((m=n[0])==null?void 0:m.params)||{},nextUrl:new URL(t,window.origin),nextParams:u.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function yC(t,e,{includeHydrateFallback:n}={}){return vC(t.map(r=>{let s=e.routes[r.route.id];if(!s)return[];let i=[s.module];return s.clientActionModule&&(i=i.concat(s.clientActionModule)),s.clientLoaderModule&&(i=i.concat(s.clientLoaderModule)),n&&s.hydrateFallbackModule&&(i=i.concat(s.hydrateFallbackModule)),s.imports&&(i=i.concat(s.imports)),i}).flat(1))}function vC(t){return[...new Set(t)]}function _C(t){let e={},n=Object.keys(t).sort();for(let r of n)e[r]=t[r];return e}function wC(t,e){let n=new Set;return new Set(e),t.reduce((r,s)=>{let i=JSON.stringify(_C(s));return n.has(i)||(n.add(i),r.push({key:i,link:s})),r},[])}function Vx(){let t=R.useContext(to);return Gp(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function xC(){let t=R.useContext(Cc);return Gp(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Qp=R.createContext(void 0);Qp.displayName="FrameworkContext";function Fx(){let t=R.useContext(Qp);return Gp(t,"You must render this element inside a <HydratedRouter> element"),t}function EC(t,e){let n=R.useContext(Qp),[r,s]=R.useState(!1),[i,o]=R.useState(!1),{onFocus:l,onBlur:u,onMouseEnter:c,onMouseLeave:f,onTouchStart:m}=e,g=R.useRef(null);R.useEffect(()=>{if(t==="render"&&o(!0),t==="viewport"){let S=v=>{v.forEach(y=>{o(y.isIntersecting)})},I=new IntersectionObserver(S,{threshold:.5});return g.current&&I.observe(g.current),()=>{I.disconnect()}}},[t]),R.useEffect(()=>{if(r){let S=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(S)}}},[r]);let E=()=>{s(!0)},N=()=>{s(!1),o(!1)};return n?t!=="intent"?[i,g,{}]:[i,g,{onFocus:Mo(l,E),onBlur:Mo(u,N),onMouseEnter:Mo(c,E),onMouseLeave:Mo(f,N),onTouchStart:Mo(m,E)}]:[!1,g,{}]}function Mo(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function TC({page:t,...e}){let{router:n}=Vx(),r=R.useMemo(()=>Nx(n.routes,t,n.basename),[n.routes,t,n.basename]);return r?R.createElement(bC,{page:t,matches:r,...e}):null}function IC(t){let{manifest:e,routeModules:n}=Fx(),[r,s]=R.useState([]);return R.useEffect(()=>{let i=!1;return gC(t,e,n).then(o=>{i||s(o)}),()=>{i=!0}},[t,e,n]),r}function bC({page:t,matches:e,...n}){let r=tn(),{manifest:s,routeModules:i}=Fx(),{basename:o}=Vx(),{loaderData:l,matches:u}=xC(),c=R.useMemo(()=>f0(t,e,u,s,r,"data"),[t,e,u,s,r]),f=R.useMemo(()=>f0(t,e,u,s,r,"assets"),[t,e,u,s,r]),m=R.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let N=new Set,S=!1;if(e.forEach(v=>{var _;let y=s.routes[v.route.id];!y||!y.hasLoader||(!c.some(D=>D.route.id===v.route.id)&&v.route.id in l&&((_=i[v.route.id])!=null&&_.shouldRevalidate)||y.hasClientLoader?S=!0:N.add(v.route.id))}),N.size===0)return[];let I=fC(t,o,"data");return S&&N.size>0&&I.searchParams.set("_routes",e.filter(v=>N.has(v.route.id)).map(v=>v.route.id).join(",")),[I.pathname+I.search]},[o,l,r,s,c,e,t,i]),g=R.useMemo(()=>yC(f,s),[f,s]),E=IC(f);return R.createElement(R.Fragment,null,m.map(N=>R.createElement("link",{key:N,rel:"prefetch",as:"fetch",href:N,...n})),g.map(N=>R.createElement("link",{key:N,rel:"modulepreload",href:N,...n})),E.map(({key:N,link:S})=>R.createElement("link",{key:N,nonce:n.nonce,...S})))}function kC(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var Ux=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Ux&&(window.__reactRouterVersion="7.9.4")}catch{}function SC({basename:t,children:e,window:n}){let r=R.useRef();r.current==null&&(r.current=pS({window:n,v5Compat:!0}));let s=r.current,[i,o]=R.useState({action:s.action,location:s.location}),l=R.useCallback(u=>{R.startTransition(()=>o(u))},[o]);return R.useLayoutEffect(()=>s.listen(l),[s,l]),R.createElement(rC,{basename:t,children:e,location:i.location,navigationType:i.action,navigator:s})}var $x=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,zx=R.forwardRef(function({onClick:e,discover:n="render",prefetch:r="none",relative:s,reloadDocument:i,replace:o,state:l,target:u,to:c,preventScrollReset:f,viewTransition:m,...g},E){let{basename:N}=R.useContext(vn),S=typeof c=="string"&&$x.test(c),I,v=!1;if(typeof c=="string"&&S&&(I=c,Ux))try{let C=new URL(window.location.href),A=c.startsWith("//")?new URL(C.protocol+c):new URL(c),b=ur(A.pathname,N);A.origin===C.origin&&b!=null?c=b+A.search+A.hash:v=!0}catch{pn(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let y=$S(c,{relative:s}),[_,D,M]=EC(r,g),U=RC(c,{replace:o,state:l,target:u,preventScrollReset:f,relative:s,viewTransition:m});function k(C){e&&e(C),C.defaultPrevented||U(C)}let x=R.createElement("a",{...g,...M,href:I||y,onClick:v||i?e:k,ref:kC(E,D),target:u,"data-discover":!S&&n==="render"?"true":void 0});return _&&!S?R.createElement(R.Fragment,null,x,R.createElement(TC,{page:y})):x});zx.displayName="Link";var CC=R.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:r="",end:s=!1,style:i,to:o,viewTransition:l,children:u,...c},f){let m=qa(o,{relative:c.relative}),g=tn(),E=R.useContext(Cc),{navigator:N,basename:S}=R.useContext(vn),I=E!=null&&MC(m)&&l===!0,v=N.encodeLocation?N.encodeLocation(m).pathname:m.pathname,y=g.pathname,_=E&&E.navigation&&E.navigation.location?E.navigation.location.pathname:null;n||(y=y.toLowerCase(),_=_?_.toLowerCase():null,v=v.toLowerCase()),_&&S&&(_=ur(_,S)||_);const D=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let M=y===v||!s&&y.startsWith(v)&&y.charAt(D)==="/",U=_!=null&&(_===v||!s&&_.startsWith(v)&&_.charAt(v.length)==="/"),k={isActive:M,isPending:U,isTransitioning:I},x=M?e:void 0,C;typeof r=="function"?C=r(k):C=[r,M?"active":null,U?"pending":null,I?"transitioning":null].filter(Boolean).join(" ");let A=typeof i=="function"?i(k):i;return R.createElement(zx,{...c,"aria-current":x,className:C,ref:f,style:A,to:o,viewTransition:l},typeof u=="function"?u(k):u)});CC.displayName="NavLink";var NC=R.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:r,replace:s,state:i,method:o=su,action:l,onSubmit:u,relative:c,preventScrollReset:f,viewTransition:m,...g},E)=>{let N=OC(),S=jC(l,{relative:c}),I=o.toLowerCase()==="get"?"get":"post",v=typeof l=="string"&&$x.test(l),y=_=>{if(u&&u(_),_.defaultPrevented)return;_.preventDefault();let D=_.nativeEvent.submitter,M=(D==null?void 0:D.getAttribute("formmethod"))||o;N(D||_.currentTarget,{fetcherKey:e,method:M,navigate:n,replace:s,state:i,relative:c,preventScrollReset:f,viewTransition:m})};return R.createElement("form",{ref:E,method:I,action:S,onSubmit:r?u:y,...g,"data-discover":!v&&t==="render"?"true":void 0})});NC.displayName="Form";function AC(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Bx(t){let e=R.useContext(to);return ke(e,AC(t)),e}function RC(t,{target:e,replace:n,state:r,preventScrollReset:s,relative:i,viewTransition:o}={}){let l=Wn(),u=tn(),c=qa(t,{relative:i});return R.useCallback(f=>{if(uC(f,e)){f.preventDefault();let m=n!==void 0?n:ka(u)===ka(c);l(t,{replace:m,state:r,preventScrollReset:s,relative:i,viewTransition:o})}},[u,l,c,n,r,e,t,s,i,o])}var PC=0,DC=()=>`__${String(++PC)}__`;function OC(){let{router:t}=Bx("useSubmit"),{basename:e}=R.useContext(vn),n=JS();return R.useCallback(async(r,s={})=>{let{action:i,method:o,encType:l,formData:u,body:c}=hC(r,e);if(s.navigate===!1){let f=s.fetcherKey||DC();await t.fetch(f,n,s.action||i,{preventScrollReset:s.preventScrollReset,formData:u,body:c,formMethod:s.method||o,formEncType:s.encType||l,flushSync:s.flushSync})}else await t.navigate(s.action||i,{preventScrollReset:s.preventScrollReset,formData:u,body:c,formMethod:s.method||o,formEncType:s.encType||l,replace:s.replace,state:s.state,fromRouteId:n,flushSync:s.flushSync,viewTransition:s.viewTransition})},[t,e,n])}function jC(t,{relative:e}={}){let{basename:n}=R.useContext(vn),r=R.useContext(Bn);ke(r,"useFormAction must be used inside a RouteContext");let[s]=r.matches.slice(-1),i={...qa(t||".",{relative:e})},o=tn();if(t==null){i.search=o.search;let l=new URLSearchParams(i.search),u=l.getAll("index");if(u.some(f=>f==="")){l.delete("index"),u.filter(m=>m).forEach(m=>l.append("index",m));let f=l.toString();i.search=f?`?${f}`:""}}return(!t||t===".")&&s.route.index&&(i.search=i.search?i.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(i.pathname=i.pathname==="/"?n:rr([n,i.pathname])),ka(i)}function MC(t,{relative:e}={}){let n=R.useContext(Dx);ke(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Bx("useViewTransitionState"),s=qa(t,{relative:e});if(!n.isTransitioning)return!1;let i=ur(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=ur(n.nextLocation.pathname,r)||n.nextLocation.pathname;return $u(s.pathname,o)!=null||$u(s.pathname,i)!=null}const LC=()=>{};var p0={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wx=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},VC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Hx={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,c=u?t[s+2]:0,f=i>>2,m=(i&3)<<4|l>>4;let g=(l&15)<<2|c>>6,E=c&63;u||(E=64,o||(g=64)),r.push(n[f],n[m],n[g],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Wx(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):VC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||c==null||m==null)throw new FC;const g=i<<2|l>>4;if(r.push(g),c!==64){const E=l<<4&240|c>>2;if(r.push(E),m!==64){const N=c<<6&192|m;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class FC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const UC=function(t){const e=Wx(t);return Hx.encodeByteArray(e,!0)},zu=function(t){return UC(t).replace(/\./g,"")},qx=function(t){try{return Hx.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $C(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zC=()=>$C().__FIREBASE_DEFAULTS__,BC=()=>{if(typeof process>"u"||typeof p0>"u")return;const t=p0.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},WC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&qx(t[1]);return e&&JSON.parse(e)},Ac=()=>{try{return LC()||zC()||BC()||WC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Kx=t=>{var e,n;return(n=(e=Ac())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Gx=t=>{const e=Kx(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Qx=()=>{var t;return(t=Ac())==null?void 0:t.config},Yx=t=>{var e;return(e=Ac())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Yp(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xx(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[zu(JSON.stringify(n)),zu(JSON.stringify(o)),""].join(".")}const na={};function qC(){const t={prod:[],emulator:[]};for(const e of Object.keys(na))na[e]?t.emulator.push(e):t.prod.push(e);return t}function KC(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let m0=!1;function Xp(t,e){if(typeof window>"u"||typeof document>"u"||!ds(window.location.host)||na[t]===e||na[t]||m0)return;na[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=qC().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function u(g,E){g.setAttribute("width","24"),g.setAttribute("id",E),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function c(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{m0=!0,o()},g}function f(g,E){g.setAttribute("id",E),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function m(){const g=KC(r),E=n("text"),N=document.getElementById(E)||document.createElement("span"),S=n("learnmore"),I=document.getElementById(S)||document.createElement("a"),v=n("preprendIcon"),y=document.getElementById(v)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const _=g.element;l(_),f(I,S);const D=c();u(y,v),_.append(y,N,I,D),document.body.appendChild(_)}i?(N.innerText="Preview backend disconnected.",y.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(y.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,N.innerText="Preview backend running in this workspace."),N.setAttribute("id",E)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function GC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(vt())}function QC(){var e;const t=(e=Ac())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function YC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function XC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function JC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ZC(){const t=vt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function eN(){return!QC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Jx(){try{return typeof indexedDB=="object"}catch{return!1}}function Zx(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}function tN(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nN="FirebaseError";class _n extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=nN,Object.setPrototypeOf(this,_n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qs.prototype.create)}}class Qs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?rN(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new _n(s,l,r)}}function rN(t,e){return t.replace(sN,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const sN=/\{\$([^}]+)}/g;function iN(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Fs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(g0(i)&&g0(o)){if(!Fs(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function g0(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ka(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function zo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Bo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function oN(t,e){const n=new aN(t,e);return n.subscribe.bind(n)}class aN{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");lN(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=th),s.error===void 0&&(s.error=th),s.complete===void 0&&(s.complete=th);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function lN(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function th(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(t){return t&&t._delegate?t._delegate:t}class en{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new HC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(dN(e))try{this.getOrInitializeService({instanceIdentifier:Is})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Is){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Is){return this.instances.has(e)}getOptions(e=Is){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:cN(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Is){return this.component?this.component.multipleInstances?e:Is:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cN(t){return t===Is?void 0:t}function dN(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new uN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const fN={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},pN=ae.INFO,mN={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},gN=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=mN[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Jp{constructor(e){this.name=e,this._logLevel=pN,this._logHandler=gN,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fN[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const yN=(t,e)=>e.some(n=>t instanceof n);let y0,v0;function vN(){return y0||(y0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _N(){return v0||(v0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const eE=new WeakMap,yf=new WeakMap,tE=new WeakMap,nh=new WeakMap,Zp=new WeakMap;function wN(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(sr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&eE.set(n,t)}).catch(()=>{}),Zp.set(e,t),e}function xN(t){if(yf.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});yf.set(t,e)}let vf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return yf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||tE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return sr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function EN(t){vf=t(vf)}function TN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(rh(this),e,...n);return tE.set(r,e.sort?e.sort():[e]),sr(r)}:_N().includes(t)?function(...e){return t.apply(rh(this),e),sr(eE.get(this))}:function(...e){return sr(t.apply(rh(this),e))}}function IN(t){return typeof t=="function"?TN(t):(t instanceof IDBTransaction&&xN(t),yN(t,vN())?new Proxy(t,vf):t)}function sr(t){if(t instanceof IDBRequest)return wN(t);if(nh.has(t))return nh.get(t);const e=IN(t);return e!==t&&(nh.set(t,e),Zp.set(e,t)),e}const rh=t=>Zp.get(t);function Rc(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=sr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(sr(o.result),u.oldVersion,u.newVersion,sr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}function sh(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),sr(n).then(()=>{})}const bN=["get","getKey","getAll","getAllKeys","count"],kN=["put","add","delete","clear"],ih=new Map;function _0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ih.get(e))return ih.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=kN.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||bN.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),s&&u.done]))[0]};return ih.set(e,i),i}EN(t=>({...t,get:(e,n,r)=>_0(e,n)||t.get(e,n,r),has:(e,n)=>!!_0(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(CN(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function CN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _f="@firebase/app",w0="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr=new Jp("@firebase/app"),NN="@firebase/app-compat",AN="@firebase/analytics-compat",RN="@firebase/analytics",PN="@firebase/app-check-compat",DN="@firebase/app-check",ON="@firebase/auth",jN="@firebase/auth-compat",MN="@firebase/database",LN="@firebase/data-connect",VN="@firebase/database-compat",FN="@firebase/functions",UN="@firebase/functions-compat",$N="@firebase/installations",zN="@firebase/installations-compat",BN="@firebase/messaging",WN="@firebase/messaging-compat",HN="@firebase/performance",qN="@firebase/performance-compat",KN="@firebase/remote-config",GN="@firebase/remote-config-compat",QN="@firebase/storage",YN="@firebase/storage-compat",XN="@firebase/firestore",JN="@firebase/ai",ZN="@firebase/firestore-compat",eA="firebase",tA="12.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf="[DEFAULT]",nA={[_f]:"fire-core",[NN]:"fire-core-compat",[RN]:"fire-analytics",[AN]:"fire-analytics-compat",[DN]:"fire-app-check",[PN]:"fire-app-check-compat",[ON]:"fire-auth",[jN]:"fire-auth-compat",[MN]:"fire-rtdb",[LN]:"fire-data-connect",[VN]:"fire-rtdb-compat",[FN]:"fire-fn",[UN]:"fire-fn-compat",[$N]:"fire-iid",[zN]:"fire-iid-compat",[BN]:"fire-fcm",[WN]:"fire-fcm-compat",[HN]:"fire-perf",[qN]:"fire-perf-compat",[KN]:"fire-rc",[GN]:"fire-rc-compat",[QN]:"fire-gcs",[YN]:"fire-gcs-compat",[XN]:"fire-fst",[ZN]:"fire-fst-compat",[JN]:"fire-vertex","fire-js":"fire-js",[eA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu=new Map,rA=new Map,xf=new Map;function x0(t,e){try{t.container.addComponent(e)}catch(n){cr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function mn(t){const e=t.name;if(xf.has(e))return cr.debug(`There were multiple attempts to register component ${e}.`),!1;xf.set(e,t);for(const n of Bu.values())x0(n,t);for(const n of rA.values())x0(n,t);return!0}function Ys(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Gt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Gr=new Qs("app","Firebase",sA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new en("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xs=tA;function nE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:wf,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Gr.create("bad-app-name",{appName:String(s)});if(n||(n=Qx()),!n)throw Gr.create("no-options");const i=Bu.get(s);if(i){if(Fs(n,i.options)&&Fs(r,i.config))return i;throw Gr.create("duplicate-app",{appName:s})}const o=new hN(s);for(const u of xf.values())o.addComponent(u);const l=new iA(n,r,o);return Bu.set(s,l),l}function Pc(t=wf){const e=Bu.get(t);if(!e&&t===wf&&Qx())return nE();if(!e)throw Gr.create("no-app",{appName:t});return e}function Ot(t,e,n){let r=nA[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),cr.warn(o.join(" "));return}mn(new en(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oA="firebase-heartbeat-database",aA=1,Sa="firebase-heartbeat-store";let oh=null;function rE(){return oh||(oh=Rc(oA,aA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Sa)}catch(n){console.warn(n)}}}}).catch(t=>{throw Gr.create("idb-open",{originalErrorMessage:t.message})})),oh}async function lA(t){try{const n=(await rE()).transaction(Sa),r=await n.objectStore(Sa).get(sE(t));return await n.done,r}catch(e){if(e instanceof _n)cr.warn(e.message);else{const n=Gr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});cr.warn(n.message)}}}async function E0(t,e){try{const r=(await rE()).transaction(Sa,"readwrite");await r.objectStore(Sa).put(e,sE(t)),await r.done}catch(n){if(n instanceof _n)cr.warn(n.message);else{const r=Gr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});cr.warn(r.message)}}}function sE(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uA=1024,cA=30;class dA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new fA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=T0();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>cA){const o=pA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){cr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=T0(),{heartbeatsToSend:r,unsentEntries:s}=hA(this._heartbeatsCache.heartbeats),i=zu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return cr.warn(n),""}}}function T0(){return new Date().toISOString().substring(0,10)}function hA(t,e=uA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),I0(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),I0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class fA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Jx()?Zx().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await lA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return E0(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return E0(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function I0(t){return zu(JSON.stringify({version:2,heartbeats:t})).length}function pA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mA(t){mn(new en("platform-logger",e=>new SN(e),"PRIVATE")),mn(new en("heartbeat",e=>new dA(e),"PRIVATE")),Ot(_f,w0,t),Ot(_f,w0,"esm2020"),Ot("fire-js","")}mA("");function iE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gA=iE,oE=new Qs("auth","Firebase",iE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu=new Jp("@firebase/auth");function yA(t,...e){Wu.logLevel<=ae.WARN&&Wu.warn(`Auth (${Xs}): ${t}`,...e)}function ou(t,...e){Wu.logLevel<=ae.ERROR&&Wu.error(`Auth (${Xs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(t,...e){throw em(t,...e)}function jn(t,...e){return em(t,...e)}function aE(t,e,n){const r={...gA(),[e]:n};return new Qs("auth","Firebase",r).create(e,{appName:t.name})}function Qr(t){return aE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function em(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return oE.create(t,...e)}function Z(t,e,...n){if(!t)throw em(e,...n)}function Zn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ou(e),new Error(e)}function dr(t,e){t||Zn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ef(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function vA(){return b0()==="http:"||b0()==="https:"}function b0(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _A(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vA()||XC()||"connection"in navigator)?navigator.onLine:!0}function wA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,n){this.shortDelay=e,this.longDelay=n,dr(n>e,"Short delay should be less than long delay!"),this.isMobile=GC()||JC()}get(){return _A()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tm(t,e){dr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Zn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Zn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Zn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],TA=new Ga(3e4,6e4);function Js(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function hs(t,e,n,r,s={}){return uE(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Ka({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...i};return YC()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&ds(t.emulatorConfig.host)&&(c.credentials="include"),lE.fetch()(await cE(t,t.config.apiHost,n,l),c)})}async function uE(t,e,n){t._canInitEmulator=!1;const r={...xA,...e};try{const s=new bA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ml(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ml(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ml(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ml(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw aE(t,f,c);gn(t,f)}}catch(s){if(s instanceof _n)throw s;gn(t,"network-request-failed",{message:String(s)})}}async function Dc(t,e,n,r,s={}){const i=await hs(t,e,n,r,s);return"mfaPendingCredential"in i&&gn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function cE(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?tm(t.config,s):`${t.config.apiScheme}://${s}`;return EA.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function IA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class bA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(jn(this.auth,"network-request-failed")),TA.get())})}}function Ml(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=jn(t,e,r);return s.customData._tokenResponse=n,s}function k0(t){return t!==void 0&&t.enterprise!==void 0}class kA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return IA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function SA(t,e){return hs(t,"GET","/v2/recaptchaConfig",Js(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CA(t,e){return hs(t,"POST","/v1/accounts:delete",e)}async function Hu(t,e){return hs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function NA(t,e=!1){const n=Se(t),r=await n.getIdToken(e),s=nm(r);Z(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ra(ah(s.auth_time)),issuedAtTime:ra(ah(s.iat)),expirationTime:ra(ah(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ah(t){return Number(t)*1e3}function nm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ou("JWT malformed, contained fewer than 3 sections"),null;try{const s=qx(n);return s?JSON.parse(s):(ou("Failed to decode base64 JWT payload"),null)}catch(s){return ou("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function S0(t){const e=nm(t);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ca(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof _n&&AA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function AA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ra(this.lastLoginAt),this.creationTime=ra(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qu(t){var m;const e=t.auth,n=await t.getIdToken(),r=await Ca(t,Hu(e,{idToken:n}));Z(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(m=s.providerUserInfo)!=null&&m.length?dE(s.providerUserInfo):[],o=DA(t.providerData,i),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Tf(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function PA(t){const e=Se(t);await qu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function DA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function dE(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OA(t,e){const n=await uE(t,{},async()=>{const r=Ka({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await cE(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&ds(t.emulatorConfig.host)&&(u.credentials="include"),lE.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function jA(t,e){return hs(t,"POST","/v2/accounts:revokeToken",Js(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken<"u","internal-error"),Z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):S0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Z(e.length!==0,"internal-error");const n=S0(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await OA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ai;return r&&(Z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Z(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Z(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ai,this.toJSON())}_performRefresh(){return Zn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(t,e){Z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ln{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new RA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Tf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ca(this,this.stsTokenManager.getToken(this.auth,e));return Z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return NA(this,e)}reload(){return PA(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ln({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await qu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Gt(this.auth.app))return Promise.reject(Qr(this.auth));const e=await this.getIdToken();return await Ca(this,CA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:m,emailVerified:g,isAnonymous:E,providerData:N,stsTokenManager:S}=n;Z(m&&S,e,"internal-error");const I=Ai.fromJSON(this.name,S);Z(typeof m=="string",e,"internal-error"),br(r,e.name),br(s,e.name),Z(typeof g=="boolean",e,"internal-error"),Z(typeof E=="boolean",e,"internal-error"),br(i,e.name),br(o,e.name),br(l,e.name),br(u,e.name),br(c,e.name),br(f,e.name);const v=new ln({uid:m,auth:e,email:s,emailVerified:g,displayName:r,isAnonymous:E,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:I,createdAt:c,lastLoginAt:f});return N&&Array.isArray(N)&&(v.providerData=N.map(y=>({...y}))),u&&(v._redirectEventId=u),v}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ai;s.updateFromServerResponse(n);const i=new ln({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await qu(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];Z(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?dE(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Ai;l.updateFromIdToken(r);const u=new ln({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Tf(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0=new Map;function er(t){dr(t instanceof Function,"Expected a class definition");let e=C0.get(t);return e?(dr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,C0.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}hE.type="NONE";const N0=hE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(t,e,n){return`firebase:${t}:${e}:${n}`}class Ri{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=au(this.userKey,s.apiKey,i),this.fullPersistenceKey=au("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Hu(this.auth,{idToken:e}).catch(()=>{});return n?ln._fromGetAccountInfoResponse(this.auth,n,e):null}return ln._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ri(er(N0),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||er(N0);const o=au(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){let m;if(typeof f=="string"){const g=await Hu(e,{idToken:f}).catch(()=>{});if(!g)break;m=await ln._fromGetAccountInfoResponse(e,g,f)}else m=ln._fromJSON(e,f);c!==i&&(l=m),i=c;break}}catch{}const u=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Ri(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Ri(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(gE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(fE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vE(e))return"Blackberry";if(_E(e))return"Webos";if(pE(e))return"Safari";if((e.includes("chrome/")||mE(e))&&!e.includes("edge/"))return"Chrome";if(yE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function fE(t=vt()){return/firefox\//i.test(t)}function pE(t=vt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function mE(t=vt()){return/crios\//i.test(t)}function gE(t=vt()){return/iemobile/i.test(t)}function yE(t=vt()){return/android/i.test(t)}function vE(t=vt()){return/blackberry/i.test(t)}function _E(t=vt()){return/webos/i.test(t)}function rm(t=vt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function MA(t=vt()){var e;return rm(t)&&!!((e=window.navigator)!=null&&e.standalone)}function LA(){return ZC()&&document.documentMode===10}function wE(t=vt()){return rm(t)||yE(t)||_E(t)||vE(t)||/windows phone/i.test(t)||gE(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xE(t,e=[]){let n;switch(t){case"Browser":n=A0(vt());break;case"Worker":n=`${A0(vt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Xs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FA(t,e={}){return hs(t,"GET","/v2/passwordPolicy",Js(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA=6;class $A{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??UA,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new R0(this),this.idTokenSubscription=new R0(this),this.beforeStateQueue=new VA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=oE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=er(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Ri.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Hu(this,{idToken:e}),r=await ln._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Gt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await qu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=wA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Gt(this.app))return Promise.reject(Qr(this));const n=e?Se(e):null;return n&&Z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Gt(this.app)?Promise.reject(Qr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Gt(this.app)?Promise.reject(Qr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(er(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await FA(this),n=new $A(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Qs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await jA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&er(e)||this._popupRedirectResolver;Z(n,this,"argument-error"),this.redirectPersistenceManager=await Ri.create(this,[er(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Z(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Gt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&yA(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ro(t){return Se(t)}class R0{constructor(e){this.auth=e,this.observer=null,this.addObserver=oN(n=>this.observer=n)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function BA(t){Oc=t}function EE(t){return Oc.loadJS(t)}function WA(){return Oc.recaptchaEnterpriseScript}function HA(){return Oc.gapiScript}function qA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class KA{constructor(){this.enterprise=new GA}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class GA{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const QA="recaptcha-enterprise",TE="NO_RECAPTCHA";class YA{constructor(e){this.type=QA,this.auth=ro(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{SA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new kA(u);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function s(i,o,l){const u=window.grecaptcha;k0(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(TE)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new KA().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&k0(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=WA();u.length!==0&&(u+=l),EE(u).then(()=>{s(l,i,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function P0(t,e,n,r=!1,s=!1){const i=new YA(t);let o;if(s)o=TE;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function D0(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await P0(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await P0(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XA(t,e){const n=Ys(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Fs(i,e??{}))return s;gn(s,"already-initialized")}return n.initialize({options:e})}function JA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(er);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ZA(t,e,n){const r=ro(t);Z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=IE(e),{host:o,port:l}=eR(e),u=l===null?"":`:${l}`,c={url:`${i}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){Z(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Z(Fs(c,r.config.emulator)&&Fs(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,ds(o)?(Yp(`${i}//${o}${u}`),Xp("Auth",!0)):tR()}function IE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function eR(t){const e=IE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:O0(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:O0(o)}}}function O0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function tR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Zn("not implemented")}_getIdTokenResponse(e){return Zn("not implemented")}_linkToIdToken(e,n){return Zn("not implemented")}_getReauthenticationResolver(e){return Zn("not implemented")}}async function nR(t,e){return hs(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rR(t,e){return Dc(t,"POST","/v1/accounts:signInWithPassword",Js(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sR(t,e){return Dc(t,"POST","/v1/accounts:signInWithEmailLink",Js(t,e))}async function iR(t,e){return Dc(t,"POST","/v1/accounts:signInWithEmailLink",Js(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na extends sm{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Na(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Na(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return D0(e,n,"signInWithPassword",rR);case"emailLink":return sR(e,{email:this._email,oobCode:this._password});default:gn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return D0(e,r,"signUpPassword",nR);case"emailLink":return iR(e,{idToken:n,email:this._email,oobCode:this._password});default:gn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pi(t,e){return Dc(t,"POST","/v1/accounts:signInWithIdp",Js(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oR="http://localhost";class Us extends sm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Us(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):gn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Us(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Pi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Pi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Pi(e,n)}buildRequest(){const e={requestUri:oR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ka(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function lR(t){const e=zo(Bo(t)).link,n=e?zo(Bo(e)).deep_link_id:null,r=zo(Bo(t)).deep_link_id;return(r?zo(Bo(r)).link:null)||r||n||e||t}class im{constructor(e){const n=zo(Bo(e)),r=n.apiKey??null,s=n.oobCode??null,i=aR(n.mode??null);Z(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=lR(e);try{return new im(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(){this.providerId=so.PROVIDER_ID}static credential(e,n){return Na._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=im.parseLink(n);return Z(r,"argument-error"),Na._fromEmailAndCode(e,r.code,r.tenantId)}}so.PROVIDER_ID="password";so.EMAIL_PASSWORD_SIGN_IN_METHOD="password";so.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa extends bE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr extends Qa{constructor(){super("facebook.com")}static credential(e){return Us._fromParams({providerId:Rr.PROVIDER_ID,signInMethod:Rr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rr.credentialFromTaggedObject(e)}static credentialFromError(e){return Rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rr.credential(e.oauthAccessToken)}catch{return null}}}Rr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends Qa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Us._fromParams({providerId:Pr.PROVIDER_ID,signInMethod:Pr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Pr.credentialFromTaggedObject(e)}static credentialFromError(e){return Pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Pr.credential(n,r)}catch{return null}}}Pr.GOOGLE_SIGN_IN_METHOD="google.com";Pr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr extends Qa{constructor(){super("github.com")}static credential(e){return Us._fromParams({providerId:Dr.PROVIDER_ID,signInMethod:Dr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dr.credentialFromTaggedObject(e)}static credentialFromError(e){return Dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dr.credential(e.oauthAccessToken)}catch{return null}}}Dr.GITHUB_SIGN_IN_METHOD="github.com";Dr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or extends Qa{constructor(){super("twitter.com")}static credential(e,n){return Us._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Or.credentialFromTaggedObject(e)}static credentialFromError(e){return Or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Or.credential(n,r)}catch{return null}}}Or.TWITTER_SIGN_IN_METHOD="twitter.com";Or.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await ln._fromIdTokenResponse(e,r,s),o=j0(r);return new Wi({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=j0(r);return new Wi({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function j0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku extends _n{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ku.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ku(e,n,r,s)}}function kE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ku._fromErrorAndOperation(t,i,e,r):i})}async function uR(t,e,n=!1){const r=await Ca(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Wi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cR(t,e,n=!1){const{auth:r}=t;if(Gt(r.app))return Promise.reject(Qr(r));const s="reauthenticate";try{const i=await Ca(t,kE(r,s,e,t),n);Z(i.idToken,r,"internal-error");const o=nm(i.idToken);Z(o,r,"internal-error");const{sub:l}=o;return Z(t.uid===l,r,"user-mismatch"),Wi._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&gn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SE(t,e,n=!1){if(Gt(t.app))return Promise.reject(Qr(t));const r="signIn",s=await kE(t,r,e),i=await Wi._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function dR(t,e){return SE(ro(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hR(t){const e=ro(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function fR(t,e,n){return Gt(t.app)?Promise.reject(Qr(t)):dR(Se(t),so.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&hR(t),r})}function pR(t,e,n,r){return Se(t).onIdTokenChanged(e,n,r)}function mR(t,e,n){return Se(t).beforeAuthStateChanged(e,n)}function gR(t,e,n,r){return Se(t).onAuthStateChanged(e,n,r)}function yR(t){return Se(t).signOut()}const Gu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Gu,"1"),this.storage.removeItem(Gu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vR=1e3,_R=10;class NE extends CE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=wE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);LA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,_R):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},vR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}NE.type="LOCAL";const wR=NE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE extends CE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}AE.type="SESSION";const RE=AE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new jc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async c=>c(n.origin,i)),u=await xR(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function om(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const c=om("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const g=m;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(){return window}function TR(t){Mn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PE(){return typeof Mn().WorkerGlobalScope<"u"&&typeof Mn().importScripts=="function"}async function IR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function kR(){return PE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE="firebaseLocalStorageDb",SR=1,Qu="firebaseLocalStorage",OE="fbase_key";class Ya{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Mc(t,e){return t.transaction([Qu],e?"readwrite":"readonly").objectStore(Qu)}function CR(){const t=indexedDB.deleteDatabase(DE);return new Ya(t).toPromise()}function If(){const t=indexedDB.open(DE,SR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Qu,{keyPath:OE})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Qu)?e(r):(r.close(),await CR(),e(await If()))})})}async function M0(t,e,n){const r=Mc(t,!0).put({[OE]:e,value:n});return new Ya(r).toPromise()}async function NR(t,e){const n=Mc(t,!1).get(e),r=await new Ya(n).toPromise();return r===void 0?null:r.value}function L0(t,e){const n=Mc(t,!0).delete(e);return new Ya(n).toPromise()}const AR=800,RR=3;class jE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await If(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>RR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return PE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jc._getInstance(kR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await IR(),!this.activeServiceWorker)return;this.sender=new ER(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||bR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await If();return await M0(e,Gu,"1"),await L0(e,Gu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>M0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>NR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>L0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Mc(s,!1).getAll();return new Ya(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),AR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jE.type="LOCAL";const PR=jE;new Ga(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DR(t,e){return e?er(e):(Z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am extends sm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Pi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Pi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Pi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function OR(t){return SE(t.auth,new am(t),t.bypassAuthState)}function jR(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),cR(n,new am(t),t.bypassAuthState)}async function MR(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),uR(n,new am(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return OR;case"linkViaPopup":case"linkViaRedirect":return MR;case"reauthViaPopup":case"reauthViaRedirect":return jR;default:gn(this.auth,"internal-error")}}resolve(e){dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR=new Ga(2e3,1e4);class Ti extends ME{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ti.currentPopupAction&&Ti.currentPopupAction.cancel(),Ti.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){dr(this.filter.length===1,"Popup operations only handle one event");const e=om();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(jn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(jn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ti.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(jn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,LR.get())};e()}}Ti.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VR="pendingRedirect",lu=new Map;class FR extends ME{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=lu.get(this.auth._key());if(!e){try{const r=await UR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}lu.set(this.auth._key(),e)}return this.bypassAuthState||lu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function UR(t,e){const n=BR(e),r=zR(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function $R(t,e){lu.set(t._key(),e)}function zR(t){return er(t._redirectPersistence)}function BR(t){return au(VR,t.config.apiKey,t.name)}async function WR(t,e,n=!1){if(Gt(t.app))return Promise.reject(Qr(t));const r=ro(t),s=DR(r,e),o=await new FR(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HR=10*60*1e3;class qR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!KR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!LE(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(jn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=HR&&this.cachedEventUids.clear(),this.cachedEventUids.has(V0(e))}saveEventToCache(e){this.cachedEventUids.add(V0(e)),this.lastProcessedEventTime=Date.now()}}function V0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function LE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function KR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return LE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GR(t,e={}){return hs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,YR=/^https?/;async function XR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await GR(t);for(const n of e)try{if(JR(n))return}catch{}gn(t,"unauthorized-domain")}function JR(t){const e=Ef(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!YR.test(n))return!1;if(QR.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZR=new Ga(3e4,6e4);function F0(){const t=Mn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function eP(t){return new Promise((e,n)=>{var s,i,o;function r(){F0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{F0(),n(jn(t,"network-request-failed"))},timeout:ZR.get()})}if((i=(s=Mn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=Mn().gapi)!=null&&o.load)r();else{const l=qA("iframefcb");return Mn()[l]=()=>{gapi.load?r():n(jn(t,"network-request-failed"))},EE(`${HA()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw uu=null,e})}let uu=null;function tP(t){return uu=uu||eP(t),uu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nP=new Ga(5e3,15e3),rP="__/auth/iframe",sP="emulator/auth/iframe",iP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},oP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function aP(t){const e=t.config;Z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?tm(e,sP):`https://${t.config.authDomain}/${rP}`,r={apiKey:e.apiKey,appName:t.name,v:Xs},s=oP.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ka(r).slice(1)}`}async function lP(t){const e=await tP(t),n=Mn().gapi;return Z(n,t,"internal-error"),e.open({where:document.body,url:aP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:iP,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=jn(t,"network-request-failed"),l=Mn().setTimeout(()=>{i(o)},nP.get());function u(){Mn().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cP=500,dP=600,hP="_blank",fP="http://localhost";class U0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pP(t,e,n,r=cP,s=dP){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...uP,width:r.toString(),height:s.toString(),top:i,left:o},c=vt().toLowerCase();n&&(l=mE(c)?hP:n),fE(c)&&(e=e||fP,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[E,N])=>`${g}${E}=${N},`,"");if(MA(c)&&l!=="_self")return mP(e||"",l),new U0(null);const m=window.open(e||"",l,f);Z(m,t,"popup-blocked");try{m.focus()}catch{}return new U0(m)}function mP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gP="__/auth/handler",yP="emulator/auth/handler",vP=encodeURIComponent("fac");async function $0(t,e,n,r,s,i){Z(t.config.authDomain,t,"auth-domain-config-required"),Z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Xs,eventId:s};if(e instanceof bE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",iN(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof Qa){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),c=u?`#${vP}=${encodeURIComponent(u)}`:"";return`${_P(t)}?${Ka(l).slice(1)}${c}`}function _P({config:t}){return t.emulator?tm(t,yP):`https://${t.authDomain}/${gP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lh="webStorageSupport";class wP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=RE,this._completeRedirectFn=WR,this._overrideRedirectResult=$R}async _openPopup(e,n,r,s){var o;dr((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await $0(e,n,r,Ef(),s);return pP(e,i,om())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await $0(e,n,r,Ef(),s);return TR(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(dr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await lP(e),r=new qR(e);return n.register("authEvent",s=>(Z(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(lh,{type:lh},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[lh];i!==void 0&&n(!!i),gn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=XR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return wE()||pE()||rm()}}const xP=wP;var z0="@firebase/auth",B0="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function IP(t){mn(new en("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xE(t)},c=new zA(r,s,i,u);return JA(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),mn(new en("auth-internal",e=>{const n=ro(e.getProvider("auth").getImmediate());return(r=>new EP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ot(z0,B0,TP(t)),Ot(z0,B0,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bP=5*60,kP=Yx("authIdTokenMaxAge")||bP;let W0=null;const SP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>kP)return;const s=n==null?void 0:n.token;W0!==s&&(W0=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function CP(t=Pc()){const e=Ys(t,"auth");if(e.isInitialized())return e.getImmediate();const n=XA(t,{popupRedirectResolver:xP,persistence:[PR,wR,RE]}),r=Yx("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=SP(i.toString());mR(n,o,()=>o(n.currentUser)),pR(n,l=>o(l))}}const s=Kx("auth");return s&&ZA(n,`http://${s}`),n}function NP(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}BA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=jn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",NP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});IP("Browser");var AP="firebase",RP="12.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ot(AP,RP,"app");var H0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yr,VE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,x){function C(){}C.prototype=x.prototype,k.F=x.prototype,k.prototype=new C,k.prototype.constructor=k,k.D=function(A,b,P){for(var T=Array(arguments.length-2),te=2;te<arguments.length;te++)T[te-2]=arguments[te];return x.prototype[b].apply(A,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(k,x,C){C||(C=0);const A=Array(16);if(typeof x=="string")for(var b=0;b<16;++b)A[b]=x.charCodeAt(C++)|x.charCodeAt(C++)<<8|x.charCodeAt(C++)<<16|x.charCodeAt(C++)<<24;else for(b=0;b<16;++b)A[b]=x[C++]|x[C++]<<8|x[C++]<<16|x[C++]<<24;x=k.g[0],C=k.g[1],b=k.g[2];let P=k.g[3],T;T=x+(P^C&(b^P))+A[0]+3614090360&4294967295,x=C+(T<<7&4294967295|T>>>25),T=P+(b^x&(C^b))+A[1]+3905402710&4294967295,P=x+(T<<12&4294967295|T>>>20),T=b+(C^P&(x^C))+A[2]+606105819&4294967295,b=P+(T<<17&4294967295|T>>>15),T=C+(x^b&(P^x))+A[3]+3250441966&4294967295,C=b+(T<<22&4294967295|T>>>10),T=x+(P^C&(b^P))+A[4]+4118548399&4294967295,x=C+(T<<7&4294967295|T>>>25),T=P+(b^x&(C^b))+A[5]+1200080426&4294967295,P=x+(T<<12&4294967295|T>>>20),T=b+(C^P&(x^C))+A[6]+2821735955&4294967295,b=P+(T<<17&4294967295|T>>>15),T=C+(x^b&(P^x))+A[7]+4249261313&4294967295,C=b+(T<<22&4294967295|T>>>10),T=x+(P^C&(b^P))+A[8]+1770035416&4294967295,x=C+(T<<7&4294967295|T>>>25),T=P+(b^x&(C^b))+A[9]+2336552879&4294967295,P=x+(T<<12&4294967295|T>>>20),T=b+(C^P&(x^C))+A[10]+4294925233&4294967295,b=P+(T<<17&4294967295|T>>>15),T=C+(x^b&(P^x))+A[11]+2304563134&4294967295,C=b+(T<<22&4294967295|T>>>10),T=x+(P^C&(b^P))+A[12]+1804603682&4294967295,x=C+(T<<7&4294967295|T>>>25),T=P+(b^x&(C^b))+A[13]+4254626195&4294967295,P=x+(T<<12&4294967295|T>>>20),T=b+(C^P&(x^C))+A[14]+2792965006&4294967295,b=P+(T<<17&4294967295|T>>>15),T=C+(x^b&(P^x))+A[15]+1236535329&4294967295,C=b+(T<<22&4294967295|T>>>10),T=x+(b^P&(C^b))+A[1]+4129170786&4294967295,x=C+(T<<5&4294967295|T>>>27),T=P+(C^b&(x^C))+A[6]+3225465664&4294967295,P=x+(T<<9&4294967295|T>>>23),T=b+(x^C&(P^x))+A[11]+643717713&4294967295,b=P+(T<<14&4294967295|T>>>18),T=C+(P^x&(b^P))+A[0]+3921069994&4294967295,C=b+(T<<20&4294967295|T>>>12),T=x+(b^P&(C^b))+A[5]+3593408605&4294967295,x=C+(T<<5&4294967295|T>>>27),T=P+(C^b&(x^C))+A[10]+38016083&4294967295,P=x+(T<<9&4294967295|T>>>23),T=b+(x^C&(P^x))+A[15]+3634488961&4294967295,b=P+(T<<14&4294967295|T>>>18),T=C+(P^x&(b^P))+A[4]+3889429448&4294967295,C=b+(T<<20&4294967295|T>>>12),T=x+(b^P&(C^b))+A[9]+568446438&4294967295,x=C+(T<<5&4294967295|T>>>27),T=P+(C^b&(x^C))+A[14]+3275163606&4294967295,P=x+(T<<9&4294967295|T>>>23),T=b+(x^C&(P^x))+A[3]+4107603335&4294967295,b=P+(T<<14&4294967295|T>>>18),T=C+(P^x&(b^P))+A[8]+1163531501&4294967295,C=b+(T<<20&4294967295|T>>>12),T=x+(b^P&(C^b))+A[13]+2850285829&4294967295,x=C+(T<<5&4294967295|T>>>27),T=P+(C^b&(x^C))+A[2]+4243563512&4294967295,P=x+(T<<9&4294967295|T>>>23),T=b+(x^C&(P^x))+A[7]+1735328473&4294967295,b=P+(T<<14&4294967295|T>>>18),T=C+(P^x&(b^P))+A[12]+2368359562&4294967295,C=b+(T<<20&4294967295|T>>>12),T=x+(C^b^P)+A[5]+4294588738&4294967295,x=C+(T<<4&4294967295|T>>>28),T=P+(x^C^b)+A[8]+2272392833&4294967295,P=x+(T<<11&4294967295|T>>>21),T=b+(P^x^C)+A[11]+1839030562&4294967295,b=P+(T<<16&4294967295|T>>>16),T=C+(b^P^x)+A[14]+4259657740&4294967295,C=b+(T<<23&4294967295|T>>>9),T=x+(C^b^P)+A[1]+2763975236&4294967295,x=C+(T<<4&4294967295|T>>>28),T=P+(x^C^b)+A[4]+1272893353&4294967295,P=x+(T<<11&4294967295|T>>>21),T=b+(P^x^C)+A[7]+4139469664&4294967295,b=P+(T<<16&4294967295|T>>>16),T=C+(b^P^x)+A[10]+3200236656&4294967295,C=b+(T<<23&4294967295|T>>>9),T=x+(C^b^P)+A[13]+681279174&4294967295,x=C+(T<<4&4294967295|T>>>28),T=P+(x^C^b)+A[0]+3936430074&4294967295,P=x+(T<<11&4294967295|T>>>21),T=b+(P^x^C)+A[3]+3572445317&4294967295,b=P+(T<<16&4294967295|T>>>16),T=C+(b^P^x)+A[6]+76029189&4294967295,C=b+(T<<23&4294967295|T>>>9),T=x+(C^b^P)+A[9]+3654602809&4294967295,x=C+(T<<4&4294967295|T>>>28),T=P+(x^C^b)+A[12]+3873151461&4294967295,P=x+(T<<11&4294967295|T>>>21),T=b+(P^x^C)+A[15]+530742520&4294967295,b=P+(T<<16&4294967295|T>>>16),T=C+(b^P^x)+A[2]+3299628645&4294967295,C=b+(T<<23&4294967295|T>>>9),T=x+(b^(C|~P))+A[0]+4096336452&4294967295,x=C+(T<<6&4294967295|T>>>26),T=P+(C^(x|~b))+A[7]+1126891415&4294967295,P=x+(T<<10&4294967295|T>>>22),T=b+(x^(P|~C))+A[14]+2878612391&4294967295,b=P+(T<<15&4294967295|T>>>17),T=C+(P^(b|~x))+A[5]+4237533241&4294967295,C=b+(T<<21&4294967295|T>>>11),T=x+(b^(C|~P))+A[12]+1700485571&4294967295,x=C+(T<<6&4294967295|T>>>26),T=P+(C^(x|~b))+A[3]+2399980690&4294967295,P=x+(T<<10&4294967295|T>>>22),T=b+(x^(P|~C))+A[10]+4293915773&4294967295,b=P+(T<<15&4294967295|T>>>17),T=C+(P^(b|~x))+A[1]+2240044497&4294967295,C=b+(T<<21&4294967295|T>>>11),T=x+(b^(C|~P))+A[8]+1873313359&4294967295,x=C+(T<<6&4294967295|T>>>26),T=P+(C^(x|~b))+A[15]+4264355552&4294967295,P=x+(T<<10&4294967295|T>>>22),T=b+(x^(P|~C))+A[6]+2734768916&4294967295,b=P+(T<<15&4294967295|T>>>17),T=C+(P^(b|~x))+A[13]+1309151649&4294967295,C=b+(T<<21&4294967295|T>>>11),T=x+(b^(C|~P))+A[4]+4149444226&4294967295,x=C+(T<<6&4294967295|T>>>26),T=P+(C^(x|~b))+A[11]+3174756917&4294967295,P=x+(T<<10&4294967295|T>>>22),T=b+(x^(P|~C))+A[2]+718787259&4294967295,b=P+(T<<15&4294967295|T>>>17),T=C+(P^(b|~x))+A[9]+3951481745&4294967295,k.g[0]=k.g[0]+x&4294967295,k.g[1]=k.g[1]+(b+(T<<21&4294967295|T>>>11))&4294967295,k.g[2]=k.g[2]+b&4294967295,k.g[3]=k.g[3]+P&4294967295}r.prototype.v=function(k,x){x===void 0&&(x=k.length);const C=x-this.blockSize,A=this.C;let b=this.h,P=0;for(;P<x;){if(b==0)for(;P<=C;)s(this,k,P),P+=this.blockSize;if(typeof k=="string"){for(;P<x;)if(A[b++]=k.charCodeAt(P++),b==this.blockSize){s(this,A),b=0;break}}else for(;P<x;)if(A[b++]=k[P++],b==this.blockSize){s(this,A),b=0;break}}this.h=b,this.o+=x},r.prototype.A=function(){var k=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);k[0]=128;for(var x=1;x<k.length-8;++x)k[x]=0;x=this.o*8;for(var C=k.length-8;C<k.length;++C)k[C]=x&255,x/=256;for(this.v(k),k=Array(16),x=0,C=0;C<4;++C)for(let A=0;A<32;A+=8)k[x++]=this.g[C]>>>A&255;return k};function i(k,x){var C=l;return Object.prototype.hasOwnProperty.call(C,k)?C[k]:C[k]=x(k)}function o(k,x){this.h=x;const C=[];let A=!0;for(let b=k.length-1;b>=0;b--){const P=k[b]|0;A&&P==x||(C[b]=P,A=!1)}this.g=C}var l={};function u(k){return-128<=k&&k<128?i(k,function(x){return new o([x|0],x<0?-1:0)}):new o([k|0],k<0?-1:0)}function c(k){if(isNaN(k)||!isFinite(k))return m;if(k<0)return I(c(-k));const x=[];let C=1;for(let A=0;k>=C;A++)x[A]=k/C|0,C*=4294967296;return new o(x,0)}function f(k,x){if(k.length==0)throw Error("number format error: empty string");if(x=x||10,x<2||36<x)throw Error("radix out of range: "+x);if(k.charAt(0)=="-")return I(f(k.substring(1),x));if(k.indexOf("-")>=0)throw Error('number format error: interior "-" character');const C=c(Math.pow(x,8));let A=m;for(let P=0;P<k.length;P+=8){var b=Math.min(8,k.length-P);const T=parseInt(k.substring(P,P+b),x);b<8?(b=c(Math.pow(x,b)),A=A.j(b).add(c(T))):(A=A.j(C),A=A.add(c(T)))}return A}var m=u(0),g=u(1),E=u(16777216);t=o.prototype,t.m=function(){if(S(this))return-I(this).m();let k=0,x=1;for(let C=0;C<this.g.length;C++){const A=this.i(C);k+=(A>=0?A:4294967296+A)*x,x*=4294967296}return k},t.toString=function(k){if(k=k||10,k<2||36<k)throw Error("radix out of range: "+k);if(N(this))return"0";if(S(this))return"-"+I(this).toString(k);const x=c(Math.pow(k,6));var C=this;let A="";for(;;){const b=D(C,x).g;C=v(C,b.j(x));let P=((C.g.length>0?C.g[0]:C.h)>>>0).toString(k);if(C=b,N(C))return P+A;for(;P.length<6;)P="0"+P;A=P+A}},t.i=function(k){return k<0?0:k<this.g.length?this.g[k]:this.h};function N(k){if(k.h!=0)return!1;for(let x=0;x<k.g.length;x++)if(k.g[x]!=0)return!1;return!0}function S(k){return k.h==-1}t.l=function(k){return k=v(this,k),S(k)?-1:N(k)?0:1};function I(k){const x=k.g.length,C=[];for(let A=0;A<x;A++)C[A]=~k.g[A];return new o(C,~k.h).add(g)}t.abs=function(){return S(this)?I(this):this},t.add=function(k){const x=Math.max(this.g.length,k.g.length),C=[];let A=0;for(let b=0;b<=x;b++){let P=A+(this.i(b)&65535)+(k.i(b)&65535),T=(P>>>16)+(this.i(b)>>>16)+(k.i(b)>>>16);A=T>>>16,P&=65535,T&=65535,C[b]=T<<16|P}return new o(C,C[C.length-1]&-2147483648?-1:0)};function v(k,x){return k.add(I(x))}t.j=function(k){if(N(this)||N(k))return m;if(S(this))return S(k)?I(this).j(I(k)):I(I(this).j(k));if(S(k))return I(this.j(I(k)));if(this.l(E)<0&&k.l(E)<0)return c(this.m()*k.m());const x=this.g.length+k.g.length,C=[];for(var A=0;A<2*x;A++)C[A]=0;for(A=0;A<this.g.length;A++)for(let b=0;b<k.g.length;b++){const P=this.i(A)>>>16,T=this.i(A)&65535,te=k.i(b)>>>16,_e=k.i(b)&65535;C[2*A+2*b]+=T*_e,y(C,2*A+2*b),C[2*A+2*b+1]+=P*_e,y(C,2*A+2*b+1),C[2*A+2*b+1]+=T*te,y(C,2*A+2*b+1),C[2*A+2*b+2]+=P*te,y(C,2*A+2*b+2)}for(k=0;k<x;k++)C[k]=C[2*k+1]<<16|C[2*k];for(k=x;k<2*x;k++)C[k]=0;return new o(C,0)};function y(k,x){for(;(k[x]&65535)!=k[x];)k[x+1]+=k[x]>>>16,k[x]&=65535,x++}function _(k,x){this.g=k,this.h=x}function D(k,x){if(N(x))throw Error("division by zero");if(N(k))return new _(m,m);if(S(k))return x=D(I(k),x),new _(I(x.g),I(x.h));if(S(x))return x=D(k,I(x)),new _(I(x.g),x.h);if(k.g.length>30){if(S(k)||S(x))throw Error("slowDivide_ only works with positive integers.");for(var C=g,A=x;A.l(k)<=0;)C=M(C),A=M(A);var b=U(C,1),P=U(A,1);for(A=U(A,2),C=U(C,2);!N(A);){var T=P.add(A);T.l(k)<=0&&(b=b.add(C),P=T),A=U(A,1),C=U(C,1)}return x=v(k,b.j(x)),new _(b,x)}for(b=m;k.l(x)>=0;){for(C=Math.max(1,Math.floor(k.m()/x.m())),A=Math.ceil(Math.log(C)/Math.LN2),A=A<=48?1:Math.pow(2,A-48),P=c(C),T=P.j(x);S(T)||T.l(k)>0;)C-=A,P=c(C),T=P.j(x);N(P)&&(P=g),b=b.add(P),k=v(k,T)}return new _(b,k)}t.B=function(k){return D(this,k).h},t.and=function(k){const x=Math.max(this.g.length,k.g.length),C=[];for(let A=0;A<x;A++)C[A]=this.i(A)&k.i(A);return new o(C,this.h&k.h)},t.or=function(k){const x=Math.max(this.g.length,k.g.length),C=[];for(let A=0;A<x;A++)C[A]=this.i(A)|k.i(A);return new o(C,this.h|k.h)},t.xor=function(k){const x=Math.max(this.g.length,k.g.length),C=[];for(let A=0;A<x;A++)C[A]=this.i(A)^k.i(A);return new o(C,this.h^k.h)};function M(k){const x=k.g.length+1,C=[];for(let A=0;A<x;A++)C[A]=k.i(A)<<1|k.i(A-1)>>>31;return new o(C,k.h)}function U(k,x){const C=x>>5;x%=32;const A=k.g.length-C,b=[];for(let P=0;P<A;P++)b[P]=x>0?k.i(P+C)>>>x|k.i(P+C+1)<<32-x:k.i(P+C);return new o(b,k.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,VE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,Yr=o}).apply(typeof H0<"u"?H0:typeof self<"u"?self:typeof window<"u"?window:{});var Ll=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var FE,Wo,UE,cu,bf,$E,zE,BE;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ll=="object"&&Ll];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var p=r;a=a.split(".");for(var w=0;w<a.length-1;w++){var O=a[w];if(!(O in p))break e;p=p[O]}a=a[a.length-1],w=p[a],h=h(w),h!=w&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var p=[],w;for(w in h)Object.prototype.hasOwnProperty.call(h,w)&&p.push([w,h[w]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,p){return a.call.apply(a.bind,arguments)}function c(a,h,p){return c=u,c.apply(null,arguments)}function f(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var w=p.slice();return w.push.apply(w,arguments),a.apply(this,w)}}function m(a,h){function p(){}p.prototype=h.prototype,a.Z=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Ob=function(w,O,j){for(var B=Array(arguments.length-2),ie=2;ie<arguments.length;ie++)B[ie-2]=arguments[ie];return h.prototype[O].apply(w,B)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function E(a){const h=a.length;if(h>0){const p=Array(h);for(let w=0;w<h;w++)p[w]=a[w];return p}return[]}function N(a,h){for(let w=1;w<arguments.length;w++){const O=arguments[w];var p=typeof O;if(p=p!="object"?p:O?Array.isArray(O)?"array":p:"null",p=="array"||p=="object"&&typeof O.length=="number"){p=a.length||0;const j=O.length||0;a.length=p+j;for(let B=0;B<j;B++)a[p+B]=O[B]}else a.push(O)}}class S{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function I(a){o.setTimeout(()=>{throw a},0)}function v(){var a=k;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class y{constructor(){this.h=this.g=null}add(h,p){const w=_.get();w.set(h,p),this.h?this.h.next=w:this.g=w,this.h=w}}var _=new S(()=>new D,a=>a.reset());class D{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let M,U=!1,k=new y,x=()=>{const a=Promise.resolve(void 0);M=()=>{a.then(C)}};function C(){for(var a;a=v();){try{a.h.call(a.g)}catch(p){I(p)}var h=_;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}U=!1}function A(){this.u=this.u,this.C=this.C}A.prototype.u=!1,A.prototype.dispose=function(){this.u||(this.u=!0,this.N())},A.prototype[Symbol.dispose]=function(){this.dispose()},A.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function b(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}b.prototype.h=function(){this.defaultPrevented=!0};var P=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};o.addEventListener("test",p,h),o.removeEventListener("test",p,h)}catch{}return a}();function T(a){return/^[\s\xa0]*$/.test(a)}function te(a,h){b.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}m(te,b),te.prototype.init=function(a,h){const p=this.type=a.type,w=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&te.Z.h.call(this)},te.prototype.h=function(){te.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var _e="closure_listenable_"+(Math.random()*1e6|0),Mt=0;function q(a,h,p,w,O){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!w,this.ha=O,this.key=++Mt,this.da=this.fa=!1}function z(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function G(a,h,p){for(const w in a)h.call(p,a[w],w,a)}function X(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function L(a){const h={};for(const p in a)h[p]=a[p];return h}const Q="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function se(a,h){let p,w;for(let O=1;O<arguments.length;O++){w=arguments[O];for(p in w)a[p]=w[p];for(let j=0;j<Q.length;j++)p=Q[j],Object.prototype.hasOwnProperty.call(w,p)&&(a[p]=w[p])}}function he(a){this.src=a,this.g={},this.h=0}he.prototype.add=function(a,h,p,w,O){const j=a.toString();a=this.g[j],a||(a=this.g[j]=[],this.h++);const B=lt(a,h,w,O);return B>-1?(h=a[B],p||(h.fa=!1)):(h=new q(h,this.src,j,!!w,O),h.fa=p,a.push(h)),h};function at(a,h){const p=h.type;if(p in a.g){var w=a.g[p],O=Array.prototype.indexOf.call(w,h,void 0),j;(j=O>=0)&&Array.prototype.splice.call(w,O,1),j&&(z(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function lt(a,h,p,w){for(let O=0;O<a.length;++O){const j=a[O];if(!j.da&&j.listener==h&&j.capture==!!p&&j.ha==w)return O}return-1}var et="closure_lm_"+(Math.random()*1e6|0),ti={};function ng(a,h,p,w,O){if(Array.isArray(h)){for(let j=0;j<h.length;j++)ng(a,h[j],p,w,O);return null}return p=ig(p),a&&a[_e]?a.J(h,p,l(w)?!!w.capture:!1,O):fI(a,h,p,!1,w,O)}function fI(a,h,p,w,O,j){if(!h)throw Error("Invalid event type");const B=l(O)?!!O.capture:!!O;let ie=ld(a);if(ie||(a[et]=ie=new he(a)),p=ie.add(h,p,w,B,j),p.proxy)return p;if(w=pI(),p.proxy=w,w.src=a,w.listener=p,a.addEventListener)P||(O=B),O===void 0&&(O=!1),a.addEventListener(h.toString(),w,O);else if(a.attachEvent)a.attachEvent(sg(h.toString()),w);else if(a.addListener&&a.removeListener)a.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return p}function pI(){function a(p){return h.call(a.src,a.listener,p)}const h=mI;return a}function rg(a,h,p,w,O){if(Array.isArray(h))for(var j=0;j<h.length;j++)rg(a,h[j],p,w,O);else w=l(w)?!!w.capture:!!w,p=ig(p),a&&a[_e]?(a=a.i,j=String(h).toString(),j in a.g&&(h=a.g[j],p=lt(h,p,w,O),p>-1&&(z(h[p]),Array.prototype.splice.call(h,p,1),h.length==0&&(delete a.g[j],a.h--)))):a&&(a=ld(a))&&(h=a.g[h.toString()],a=-1,h&&(a=lt(h,p,w,O)),(p=a>-1?h[a]:null)&&ad(p))}function ad(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[_e])at(h.i,a);else{var p=a.type,w=a.proxy;h.removeEventListener?h.removeEventListener(p,w,a.capture):h.detachEvent?h.detachEvent(sg(p),w):h.addListener&&h.removeListener&&h.removeListener(w),(p=ld(h))?(at(p,a),p.h==0&&(p.src=null,h[et]=null)):z(a)}}}function sg(a){return a in ti?ti[a]:ti[a]="on"+a}function mI(a,h){if(a.da)a=!0;else{h=new te(h,this);const p=a.listener,w=a.ha||a.src;a.fa&&ad(a),a=p.call(w,h)}return a}function ld(a){return a=a[et],a instanceof he?a:null}var ud="__closure_events_fn_"+(Math.random()*1e9>>>0);function ig(a){return typeof a=="function"?a:(a[ud]||(a[ud]=function(h){return a.handleEvent(h)}),a[ud])}function ut(){A.call(this),this.i=new he(this),this.M=this,this.G=null}m(ut,A),ut.prototype[_e]=!0,ut.prototype.removeEventListener=function(a,h,p,w){rg(this,a,h,p,w)};function _t(a,h){var p,w=a.G;if(w)for(p=[];w;w=w.G)p.push(w);if(a=a.M,w=h.type||h,typeof h=="string")h=new b(h,a);else if(h instanceof b)h.target=h.target||a;else{var O=h;h=new b(w,a),se(h,O)}O=!0;let j,B;if(p)for(B=p.length-1;B>=0;B--)j=h.g=p[B],O=ol(j,w,!0,h)&&O;if(j=h.g=a,O=ol(j,w,!0,h)&&O,O=ol(j,w,!1,h)&&O,p)for(B=0;B<p.length;B++)j=h.g=p[B],O=ol(j,w,!1,h)&&O}ut.prototype.N=function(){if(ut.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const p=a.g[h];for(let w=0;w<p.length;w++)z(p[w]);delete a.g[h],a.h--}}this.G=null},ut.prototype.J=function(a,h,p,w){return this.i.add(String(a),h,!1,p,w)},ut.prototype.K=function(a,h,p,w){return this.i.add(String(a),h,!0,p,w)};function ol(a,h,p,w){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let O=!0;for(let j=0;j<h.length;++j){const B=h[j];if(B&&!B.da&&B.capture==p){const ie=B.listener,ze=B.ha||B.src;B.fa&&at(a.i,B),O=ie.call(ze,w)!==!1&&O}}return O&&!w.defaultPrevented}function gI(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function og(a){a.g=gI(()=>{a.g=null,a.i&&(a.i=!1,og(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class yI extends A{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:og(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ho(a){A.call(this),this.h=a,this.g={}}m(ho,A);var ag=[];function lg(a){G(a.g,function(h,p){this.g.hasOwnProperty(p)&&ad(h)},a),a.g={}}ho.prototype.N=function(){ho.Z.N.call(this),lg(this)},ho.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var cd=o.JSON.stringify,vI=o.JSON.parse,_I=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function ug(){}function cg(){}var fo={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function dd(){b.call(this,"d")}m(dd,b);function hd(){b.call(this,"c")}m(hd,b);var gs={},dg=null;function al(){return dg=dg||new ut}gs.Ia="serverreachability";function hg(a){b.call(this,gs.Ia,a)}m(hg,b);function po(a){const h=al();_t(h,new hg(h))}gs.STAT_EVENT="statevent";function fg(a,h){b.call(this,gs.STAT_EVENT,a),this.stat=h}m(fg,b);function wt(a){const h=al();_t(h,new fg(h,a))}gs.Ja="timingevent";function pg(a,h){b.call(this,gs.Ja,a),this.size=h}m(pg,b);function mo(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function go(){this.g=!0}go.prototype.ua=function(){this.g=!1};function wI(a,h,p,w,O,j){a.info(function(){if(a.g)if(j){var B="",ie=j.split("&");for(let ge=0;ge<ie.length;ge++){var ze=ie[ge].split("=");if(ze.length>1){const Ye=ze[0];ze=ze[1];const xn=Ye.split("_");B=xn.length>=2&&xn[1]=="type"?B+(Ye+"="+ze+"&"):B+(Ye+"=redacted&")}}}else B=null;else B=j;return"XMLHTTP REQ ("+w+") [attempt "+O+"]: "+h+`
`+p+`
`+B})}function xI(a,h,p,w,O,j,B){a.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+O+"]: "+h+`
`+p+`
`+j+" "+B})}function ni(a,h,p,w){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+TI(a,p)+(w?" "+w:"")})}function EI(a,h){a.info(function(){return"TIMEOUT: "+h})}go.prototype.info=function(){};function TI(a,h){if(!a.g)return h;if(!h)return null;try{const j=JSON.parse(h);if(j){for(a=0;a<j.length;a++)if(Array.isArray(j[a])){var p=j[a];if(!(p.length<2)){var w=p[1];if(Array.isArray(w)&&!(w.length<1)){var O=w[0];if(O!="noop"&&O!="stop"&&O!="close")for(let B=1;B<w.length;B++)w[B]=""}}}}return cd(j)}catch{return h}}var ll={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},mg={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},gg;function fd(){}m(fd,ug),fd.prototype.g=function(){return new XMLHttpRequest},gg=new fd;function yo(a){return encodeURIComponent(String(a))}function II(a){var h=1;a=a.split(":");const p=[];for(;h>0&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function vr(a,h,p,w){this.j=a,this.i=h,this.l=p,this.S=w||1,this.V=new ho(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new yg}function yg(){this.i=null,this.g="",this.h=!1}var vg={},pd={};function md(a,h,p){a.M=1,a.A=cl(wn(h)),a.u=p,a.R=!0,_g(a,null)}function _g(a,h){a.F=Date.now(),ul(a),a.B=wn(a.A);var p=a.B,w=a.S;Array.isArray(w)||(w=[String(w)]),Pg(p.i,"t",w),a.C=0,p=a.j.L,a.h=new yg,a.g=Yg(a.j,p?h:null,!a.u),a.P>0&&(a.O=new yI(c(a.Y,a,a.g),a.P)),h=a.V,p=a.g,w=a.ba;var O="readystatechange";Array.isArray(O)||(O&&(ag[0]=O.toString()),O=ag);for(let j=0;j<O.length;j++){const B=ng(p,O[j],w||h.handleEvent,!1,h.h||h);if(!B)break;h.g[B.key]=B}h=a.J?L(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),po(),wI(a.i,a.v,a.B,a.l,a.S,a.u)}vr.prototype.ba=function(a){a=a.target;const h=this.O;h&&xr(a)==3?h.j():this.Y(a)},vr.prototype.Y=function(a){try{if(a==this.g)e:{const ie=xr(this.g),ze=this.g.ya(),ge=this.g.ca();if(!(ie<3)&&(ie!=3||this.g&&(this.h.h||this.g.la()||Fg(this.g)))){this.K||ie!=4||ze==7||(ze==8||ge<=0?po(3):po(2)),gd(this);var h=this.g.ca();this.X=h;var p=bI(this);if(this.o=h==200,xI(this.i,this.v,this.B,this.l,this.S,ie,h),this.o){if(this.U&&!this.L){t:{if(this.g){var w,O=this.g;if((w=O.g?O.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(w)){var j=w;break t}}j=null}if(a=j)ni(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,yd(this,a);else{this.o=!1,this.m=3,wt(12),ys(this),vo(this);break e}}if(this.R){a=!0;let Ye;for(;!this.K&&this.C<p.length;)if(Ye=kI(this,p),Ye==pd){ie==4&&(this.m=4,wt(14),a=!1),ni(this.i,this.l,null,"[Incomplete Response]");break}else if(Ye==vg){this.m=4,wt(15),ni(this.i,this.l,p,"[Invalid Chunk]"),a=!1;break}else ni(this.i,this.l,Ye,null),yd(this,Ye);if(wg(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ie!=4||p.length!=0||this.h.h||(this.m=1,wt(16),a=!1),this.o=this.o&&a,!a)ni(this.i,this.l,p,"[Invalid Chunked Response]"),ys(this),vo(this);else if(p.length>0&&!this.W){this.W=!0;var B=this.j;B.g==this&&B.aa&&!B.P&&(B.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),bd(B),B.P=!0,wt(11))}}else ni(this.i,this.l,p,null),yd(this,p);ie==4&&ys(this),this.o&&!this.K&&(ie==4?qg(this.j,this):(this.o=!1,ul(this)))}else UI(this.g),h==400&&p.indexOf("Unknown SID")>0?(this.m=3,wt(12)):(this.m=0,wt(13)),ys(this),vo(this)}}}catch{}finally{}};function bI(a){if(!wg(a))return a.g.la();const h=Fg(a.g);if(h==="")return"";let p="";const w=h.length,O=xr(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return ys(a),vo(a),"";a.h.i=new o.TextDecoder}for(let j=0;j<w;j++)a.h.h=!0,p+=a.h.i.decode(h[j],{stream:!(O&&j==w-1)});return h.length=0,a.h.g+=p,a.C=0,a.h.g}function wg(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function kI(a,h){var p=a.C,w=h.indexOf(`
`,p);return w==-1?pd:(p=Number(h.substring(p,w)),isNaN(p)?vg:(w+=1,w+p>h.length?pd:(h=h.slice(w,w+p),a.C=w+p,h)))}vr.prototype.cancel=function(){this.K=!0,ys(this)};function ul(a){a.T=Date.now()+a.H,xg(a,a.H)}function xg(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=mo(c(a.aa,a),h)}function gd(a){a.D&&(o.clearTimeout(a.D),a.D=null)}vr.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(EI(this.i,this.B),this.M!=2&&(po(),wt(17)),ys(this),this.m=2,vo(this)):xg(this,this.T-a)};function vo(a){a.j.I==0||a.K||qg(a.j,a)}function ys(a){gd(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,lg(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function yd(a,h){try{var p=a.j;if(p.I!=0&&(p.g==a||vd(p.h,a))){if(!a.L&&vd(p.h,a)&&p.I==3){try{var w=p.Ba.g.parse(h)}catch{w=null}if(Array.isArray(w)&&w.length==3){var O=w;if(O[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<a.F)ml(p),fl(p);else break e;Id(p),wt(18)}}else p.xa=O[1],0<p.xa-p.K&&O[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=mo(c(p.Va,p),6e3));Ig(p.h)<=1&&p.ta&&(p.ta=void 0)}else _s(p,11)}else if((a.L||p.g==a)&&ml(p),!T(h))for(O=p.Ba.g.parse(h),h=0;h<O.length;h++){let ge=O[h];const Ye=ge[0];if(!(Ye<=p.K))if(p.K=Ye,ge=ge[1],p.I==2)if(ge[0]=="c"){p.M=ge[1],p.ba=ge[2];const xn=ge[3];xn!=null&&(p.ka=xn,p.j.info("VER="+p.ka));const ws=ge[4];ws!=null&&(p.za=ws,p.j.info("SVER="+p.za));const Er=ge[5];Er!=null&&typeof Er=="number"&&Er>0&&(w=1.5*Er,p.O=w,p.j.info("backChannelRequestTimeoutMs_="+w)),w=p;const Tr=a.g;if(Tr){const yl=Tr.g?Tr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(yl){var j=w.h;j.g||yl.indexOf("spdy")==-1&&yl.indexOf("quic")==-1&&yl.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(_d(j,j.h),j.h=null))}if(w.G){const kd=Tr.g?Tr.g.getResponseHeader("X-HTTP-Session-Id"):null;kd&&(w.wa=kd,we(w.J,w.G,kd))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-a.F,p.j.info("Handshake RTT: "+p.T+"ms")),w=p;var B=a;if(w.na=Qg(w,w.L?w.ba:null,w.W),B.L){bg(w.h,B);var ie=B,ze=w.O;ze&&(ie.H=ze),ie.D&&(gd(ie),ul(ie)),w.g=B}else Wg(w);p.i.length>0&&pl(p)}else ge[0]!="stop"&&ge[0]!="close"||_s(p,7);else p.I==3&&(ge[0]=="stop"||ge[0]=="close"?ge[0]=="stop"?_s(p,7):Td(p):ge[0]!="noop"&&p.l&&p.l.qa(ge),p.A=0)}}po(4)}catch{}}var SI=class{constructor(a,h){this.g=a,this.map=h}};function Eg(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Tg(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ig(a){return a.h?1:a.g?a.g.size:0}function vd(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function _d(a,h){a.g?a.g.add(h):a.h=h}function bg(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Eg.prototype.cancel=function(){if(this.i=kg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function kg(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.G);return h}return E(a.i)}var Sg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function CI(a,h){if(a){a=a.split("&");for(let p=0;p<a.length;p++){const w=a[p].indexOf("=");let O,j=null;w>=0?(O=a[p].substring(0,w),j=a[p].substring(w+1)):O=a[p],h(O,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function _r(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof _r?(this.l=a.l,_o(this,a.j),this.o=a.o,this.g=a.g,wo(this,a.u),this.h=a.h,wd(this,Dg(a.i)),this.m=a.m):a&&(h=String(a).match(Sg))?(this.l=!1,_o(this,h[1]||"",!0),this.o=xo(h[2]||""),this.g=xo(h[3]||"",!0),wo(this,h[4]),this.h=xo(h[5]||"",!0),wd(this,h[6]||"",!0),this.m=xo(h[7]||"")):(this.l=!1,this.i=new To(null,this.l))}_r.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Eo(h,Cg,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Eo(h,Cg,!0),"@"),a.push(yo(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&a.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Eo(p,p.charAt(0)=="/"?RI:AI,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Eo(p,DI)),a.join("")},_r.prototype.resolve=function(a){const h=wn(this);let p=!!a.j;p?_o(h,a.j):p=!!a.o,p?h.o=a.o:p=!!a.g,p?h.g=a.g:p=a.u!=null;var w=a.h;if(p)wo(h,a.u);else if(p=!!a.h){if(w.charAt(0)!="/")if(this.g&&!this.h)w="/"+w;else{var O=h.h.lastIndexOf("/");O!=-1&&(w=h.h.slice(0,O+1)+w)}if(O=w,O==".."||O==".")w="";else if(O.indexOf("./")!=-1||O.indexOf("/.")!=-1){w=O.lastIndexOf("/",0)==0,O=O.split("/");const j=[];for(let B=0;B<O.length;){const ie=O[B++];ie=="."?w&&B==O.length&&j.push(""):ie==".."?((j.length>1||j.length==1&&j[0]!="")&&j.pop(),w&&B==O.length&&j.push("")):(j.push(ie),w=!0)}w=j.join("/")}else w=O}return p?h.h=w:p=a.i.toString()!=="",p?wd(h,Dg(a.i)):p=!!a.m,p&&(h.m=a.m),h};function wn(a){return new _r(a)}function _o(a,h,p){a.j=p?xo(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function wo(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function wd(a,h,p){h instanceof To?(a.i=h,OI(a.i,a.l)):(p||(h=Eo(h,PI)),a.i=new To(h,a.l))}function we(a,h,p){a.i.set(h,p)}function cl(a){return we(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function xo(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Eo(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,NI),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function NI(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Cg=/[#\/\?@]/g,AI=/[#\?:]/g,RI=/[#\?]/g,PI=/[#\?@]/g,DI=/#/g;function To(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function vs(a){a.g||(a.g=new Map,a.h=0,a.i&&CI(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=To.prototype,t.add=function(a,h){vs(this),this.i=null,a=ri(this,a);let p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function Ng(a,h){vs(a),h=ri(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Ag(a,h){return vs(a),h=ri(a,h),a.g.has(h)}t.forEach=function(a,h){vs(this),this.g.forEach(function(p,w){p.forEach(function(O){a.call(h,O,w,this)},this)},this)};function Rg(a,h){vs(a);let p=[];if(typeof h=="string")Ag(a,h)&&(p=p.concat(a.g.get(ri(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)p=p.concat(a[h]);return p}t.set=function(a,h){return vs(this),this.i=null,a=ri(this,a),Ag(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=Rg(this,a),a.length>0?String(a[0]):h):h};function Pg(a,h,p){Ng(a,h),p.length>0&&(a.i=null,a.g.set(ri(a,h),E(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let w=0;w<h.length;w++){var p=h[w];const O=yo(p);p=Rg(this,p);for(let j=0;j<p.length;j++){let B=O;p[j]!==""&&(B+="="+yo(p[j])),a.push(B)}}return this.i=a.join("&")};function Dg(a){const h=new To;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function ri(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function OI(a,h){h&&!a.j&&(vs(a),a.i=null,a.g.forEach(function(p,w){const O=w.toLowerCase();w!=O&&(Ng(this,w),Pg(this,O,p))},a)),a.j=h}function jI(a,h){const p=new go;if(o.Image){const w=new Image;w.onload=f(wr,p,"TestLoadImage: loaded",!0,h,w),w.onerror=f(wr,p,"TestLoadImage: error",!1,h,w),w.onabort=f(wr,p,"TestLoadImage: abort",!1,h,w),w.ontimeout=f(wr,p,"TestLoadImage: timeout",!1,h,w),o.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=a}else h(!1)}function MI(a,h){const p=new go,w=new AbortController,O=setTimeout(()=>{w.abort(),wr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:w.signal}).then(j=>{clearTimeout(O),j.ok?wr(p,"TestPingServer: ok",!0,h):wr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(O),wr(p,"TestPingServer: error",!1,h)})}function wr(a,h,p,w,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),w(p)}catch{}}function LI(){this.g=new _I}function xd(a){this.i=a.Sb||null,this.h=a.ab||!1}m(xd,ug),xd.prototype.g=function(){return new dl(this.i,this.h)};function dl(a,h){ut.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(dl,ut),t=dl.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,bo(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Io(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,bo(this)),this.g&&(this.readyState=3,bo(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Og(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Og(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Io(this):bo(this),this.readyState==3&&Og(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Io(this))},t.Na=function(a){this.g&&(this.response=a,Io(this))},t.ga=function(){this.g&&Io(this)};function Io(a){a.readyState=4,a.l=null,a.j=null,a.B=null,bo(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function bo(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(dl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function jg(a){let h="";return G(a,function(p,w){h+=w,h+=":",h+=p,h+=`\r
`}),h}function Ed(a,h,p){e:{for(w in p){var w=!1;break e}w=!0}w||(p=jg(p),typeof a=="string"?p!=null&&yo(p):we(a,h,p))}function Pe(a){ut.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(Pe,ut);var VI=/^https?$/i,FI=["POST","PUT"];t=Pe.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,p,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():gg.g(),this.g.onreadystatechange=g(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(j){Mg(this,j);return}if(a=p||"",p=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var O in w)p.set(O,w[O]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const j of w.keys())p.set(j,w.get(j));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(p.keys()).find(j=>j.toLowerCase()=="content-type"),O=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(FI,h,void 0)>=0)||w||O||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,B]of p)this.g.setRequestHeader(j,B);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(j){Mg(this,j)}};function Mg(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,Lg(a),hl(a)}function Lg(a){a.A||(a.A=!0,_t(a,"complete"),_t(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,_t(this,"complete"),_t(this,"abort"),hl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),hl(this,!0)),Pe.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Vg(this):this.Xa())},t.Xa=function(){Vg(this)};function Vg(a){if(a.h&&typeof i<"u"){if(a.v&&xr(a)==4)setTimeout(a.Ca.bind(a),0);else if(_t(a,"readystatechange"),xr(a)==4){a.h=!1;try{const j=a.ca();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var w;if(w=j===0){let B=String(a.D).match(Sg)[1]||null;!B&&o.self&&o.self.location&&(B=o.self.location.protocol.slice(0,-1)),w=!VI.test(B?B.toLowerCase():"")}p=w}if(p)_t(a,"complete"),_t(a,"success");else{a.o=6;try{var O=xr(a)>2?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.ca()+"]",Lg(a)}}finally{hl(a)}}}}function hl(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const p=a.g;a.g=null,h||_t(a,"ready");try{p.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function xr(a){return a.g?a.g.readyState:0}t.ca=function(){try{return xr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),vI(h)}};function Fg(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function UI(a){const h={};a=(a.g&&xr(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<a.length;w++){if(T(a[w]))continue;var p=II(a[w]);const O=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const j=h[O]||[];h[O]=j,j.push(p)}X(h,function(w){return w.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ko(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function Ug(a){this.za=0,this.i=[],this.j=new go,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ko("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ko("baseRetryDelayMs",5e3,a),this.Za=ko("retryDelaySeedMs",1e4,a),this.Ta=ko("forwardChannelMaxRetries",2,a),this.va=ko("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Eg(a&&a.concurrentRequestLimit),this.Ba=new LI,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Ug.prototype,t.ka=8,t.I=1,t.connect=function(a,h,p,w){wt(0),this.W=a,this.H=h||{},p&&w!==void 0&&(this.H.OSID=p,this.H.OAID=w),this.F=this.X,this.J=Qg(this,null,this.W),pl(this)};function Td(a){if($g(a),a.I==3){var h=a.V++,p=wn(a.J);if(we(p,"SID",a.M),we(p,"RID",h),we(p,"TYPE","terminate"),So(a,p),h=new vr(a,a.j,h),h.M=2,h.A=cl(wn(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=h.A,p=!0),p||(h.g=Yg(h.j,null),h.g.ea(h.A)),h.F=Date.now(),ul(h)}Gg(a)}function fl(a){a.g&&(bd(a),a.g.cancel(),a.g=null)}function $g(a){fl(a),a.v&&(o.clearTimeout(a.v),a.v=null),ml(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function pl(a){if(!Tg(a.h)&&!a.m){a.m=!0;var h=a.Ea;M||x(),U||(M(),U=!0),k.add(h,a),a.D=0}}function $I(a,h){return Ig(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=mo(c(a.Ea,a,h),Kg(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const O=new vr(this,this.j,a);let j=this.o;if(this.U&&(j?(j=L(j),se(j,this.U)):j=this.U),this.u!==null||this.R||(O.J=j,j=null),this.S)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var w=this.i[p];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(h+=w,h>4096){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=Bg(this,O,h),p=wn(this.J),we(p,"RID",a),we(p,"CVER",22),this.G&&we(p,"X-HTTP-Session-Id",this.G),So(this,p),j&&(this.R?h="headers="+yo(jg(j))+"&"+h:this.u&&Ed(p,this.u,j)),_d(this.h,O),this.Ra&&we(p,"TYPE","init"),this.S?(we(p,"$req",h),we(p,"SID","null"),O.U=!0,md(O,p,null)):md(O,p,h),this.I=2}}else this.I==3&&(a?zg(this,a):this.i.length==0||Tg(this.h)||zg(this))};function zg(a,h){var p;h?p=h.l:p=a.V++;const w=wn(a.J);we(w,"SID",a.M),we(w,"RID",p),we(w,"AID",a.K),So(a,w),a.u&&a.o&&Ed(w,a.u,a.o),p=new vr(a,a.j,p,a.D+1),a.u===null&&(p.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Bg(a,p,1e3),p.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),_d(a.h,p),md(p,w,h)}function So(a,h){a.H&&G(a.H,function(p,w){we(h,w,p)}),a.l&&G({},function(p,w){we(h,w,p)})}function Bg(a,h,p){p=Math.min(a.i.length,p);const w=a.l?c(a.l.Ka,a.l,a):null;e:{var O=a.i;let ie=-1;for(;;){const ze=["count="+p];ie==-1?p>0?(ie=O[0].g,ze.push("ofs="+ie)):ie=0:ze.push("ofs="+ie);let ge=!0;for(let Ye=0;Ye<p;Ye++){var j=O[Ye].g;const xn=O[Ye].map;if(j-=ie,j<0)ie=Math.max(0,O[Ye].g-100),ge=!1;else try{j="req"+j+"_"||"";try{var B=xn instanceof Map?xn:Object.entries(xn);for(const[ws,Er]of B){let Tr=Er;l(Er)&&(Tr=cd(Er)),ze.push(j+ws+"="+encodeURIComponent(Tr))}}catch(ws){throw ze.push(j+"type="+encodeURIComponent("_badmap")),ws}}catch{w&&w(xn)}}if(ge){B=ze.join("&");break e}}B=void 0}return a=a.i.splice(0,p),h.G=a,B}function Wg(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;M||x(),U||(M(),U=!0),k.add(h,a),a.A=0}}function Id(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=mo(c(a.Da,a),Kg(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Hg(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=mo(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,wt(10),fl(this),Hg(this))};function bd(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Hg(a){a.g=new vr(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=wn(a.na);we(h,"RID","rpc"),we(h,"SID",a.M),we(h,"AID",a.K),we(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&we(h,"TO",a.ia),we(h,"TYPE","xmlhttp"),So(a,h),a.u&&a.o&&Ed(h,a.u,a.o),a.O&&(a.g.H=a.O);var p=a.g;a=a.ba,p.M=1,p.A=cl(wn(h)),p.u=null,p.R=!0,_g(p,a)}t.Va=function(){this.C!=null&&(this.C=null,fl(this),Id(this),wt(19))};function ml(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function qg(a,h){var p=null;if(a.g==h){ml(a),bd(a),a.g=null;var w=2}else if(vd(a.h,h))p=h.G,bg(a.h,h),w=1;else return;if(a.I!=0){if(h.o)if(w==1){p=h.u?h.u.length:0,h=Date.now()-h.F;var O=a.D;w=al(),_t(w,new pg(w,p)),pl(a)}else Wg(a);else if(O=h.m,O==3||O==0&&h.X>0||!(w==1&&$I(a,h)||w==2&&Id(a)))switch(p&&p.length>0&&(h=a.h,h.i=h.i.concat(p)),O){case 1:_s(a,5);break;case 4:_s(a,10);break;case 3:_s(a,6);break;default:_s(a,2)}}}function Kg(a,h){let p=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(p*=2),p*h}function _s(a,h){if(a.j.info("Error code "+h),h==2){var p=c(a.bb,a),w=a.Ua;const O=!w;w=new _r(w||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||_o(w,"https"),cl(w),O?jI(w.toString(),p):MI(w.toString(),p)}else wt(2);a.I=0,a.l&&a.l.pa(h),Gg(a),$g(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),wt(2)):(this.j.info("Failed to ping google.com"),wt(1))};function Gg(a){if(a.I=0,a.ja=[],a.l){const h=kg(a.h);(h.length!=0||a.i.length!=0)&&(N(a.ja,h),N(a.ja,a.i),a.h.i.length=0,E(a.i),a.i.length=0),a.l.oa()}}function Qg(a,h,p){var w=p instanceof _r?wn(p):new _r(p);if(w.g!="")h&&(w.g=h+"."+w.g),wo(w,w.u);else{var O=o.location;w=O.protocol,h=h?h+"."+O.hostname:O.hostname,O=+O.port;const j=new _r(null);w&&_o(j,w),h&&(j.g=h),O&&wo(j,O),p&&(j.h=p),w=j}return p=a.G,h=a.wa,p&&h&&we(w,p,h),we(w,"VER",a.ka),So(a,w),w}function Yg(a,h,p){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Pe(new xd({ab:p})):new Pe(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Xg(){}t=Xg.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function gl(){}gl.prototype.g=function(a,h){return new Lt(a,h)};function Lt(a,h){ut.call(this),this.g=new Ug(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!T(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!T(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new si(this)}m(Lt,ut),Lt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Lt.prototype.close=function(){Td(this.g)},Lt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.v&&(p={},p.__data__=cd(a),a=p);h.i.push(new SI(h.Ya++,a)),h.I==3&&pl(h)},Lt.prototype.N=function(){this.g.l=null,delete this.j,Td(this.g),delete this.g,Lt.Z.N.call(this)};function Jg(a){dd.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}m(Jg,dd);function Zg(){hd.call(this),this.status=1}m(Zg,hd);function si(a){this.g=a}m(si,Xg),si.prototype.ra=function(){_t(this.g,"a")},si.prototype.qa=function(a){_t(this.g,new Jg(a))},si.prototype.pa=function(a){_t(this.g,new Zg)},si.prototype.oa=function(){_t(this.g,"b")},gl.prototype.createWebChannel=gl.prototype.g,Lt.prototype.send=Lt.prototype.o,Lt.prototype.open=Lt.prototype.m,Lt.prototype.close=Lt.prototype.close,BE=function(){return new gl},zE=function(){return al()},$E=gs,bf={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ll.NO_ERROR=0,ll.TIMEOUT=8,ll.HTTP_ERROR=6,cu=ll,mg.COMPLETE="complete",UE=mg,cg.EventType=fo,fo.OPEN="a",fo.CLOSE="b",fo.ERROR="c",fo.MESSAGE="d",ut.prototype.listen=ut.prototype.J,Wo=cg,Pe.prototype.listenOnce=Pe.prototype.K,Pe.prototype.getLastError=Pe.prototype.Ha,Pe.prototype.getLastErrorCode=Pe.prototype.ya,Pe.prototype.getStatus=Pe.prototype.ca,Pe.prototype.getResponseJson=Pe.prototype.La,Pe.prototype.getResponseText=Pe.prototype.la,Pe.prototype.send=Pe.prototype.ea,Pe.prototype.setWithCredentials=Pe.prototype.Fa,FE=Pe}).apply(typeof Ll<"u"?Ll:typeof self<"u"?self:typeof window<"u"?window:{});const q0="@firebase/firestore",K0="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ft.UNAUTHENTICATED=new ft(null),ft.GOOGLE_CREDENTIALS=new ft("google-credentials-uid"),ft.FIRST_PARTY=new ft("first-party-uid"),ft.MOCK_USER=new ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let io="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s=new Jp("@firebase/firestore");function ai(){return $s.logLevel}function H(t,...e){if($s.logLevel<=ae.DEBUG){const n=e.map(lm);$s.debug(`Firestore (${io}): ${t}`,...n)}}function hr(t,...e){if($s.logLevel<=ae.ERROR){const n=e.map(lm);$s.error(`Firestore (${io}): ${t}`,...n)}}function Hi(t,...e){if($s.logLevel<=ae.WARN){const n=e.map(lm);$s.warn(`Firestore (${io}): ${t}`,...n)}}function lm(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,WE(t,r,n)}function WE(t,e,n){let r=`FIRESTORE (${io}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw hr(r),new Error(r)}function fe(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||WE(e,s,r)}function re(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends _n{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class PP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ft.UNAUTHENTICATED))}shutdown(){}}class DP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class OP{constructor(e){this.t=e,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){fe(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new Xr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Xr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Xr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(fe(typeof r.accessToken=="string",31837,{l:r}),new HE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return fe(e===null||typeof e=="string",2055,{h:e}),new ft(e)}}class jP{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=ft.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class MP{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new jP(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class G0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class LP{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Gt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){fe(this.o===void 0,3512);const r=i=>{i.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new G0(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(fe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new G0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=VP(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function le(t,e){return t<e?-1:t>e?1:0}function kf(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return uh(s)===uh(i)?le(s,i):uh(s)?1:-1}return le(t.length,e.length)}const FP=55296,UP=57343;function uh(t){const e=t.charCodeAt(0);return e>=FP&&e<=UP}function qi(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0="__name__";class In{constructor(e,n,r){n===void 0?n=0:n>e.length&&ee(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ee(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return In.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof In?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=In.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return le(e.length,n.length)}static compareSegments(e,n){const r=In.isNumericId(e),s=In.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?In.extractNumericId(e).compare(In.extractNumericId(n)):kf(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Yr.fromString(e.substring(4,e.length-2))}}class ye extends In{construct(e,n,r){return new ye(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new ye(n)}static emptyPath(){return new ye([])}}const $P=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rt extends In{construct(e,n,r){return new rt(e,n,r)}static isValidIdentifier(e){return $P.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Q0}static keyField(){return new rt([Q0])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new W(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new W(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new W(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rt(n)}static emptyPath(){return new rt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(ye.fromString(e))}static fromName(e){return new Y(ye.fromString(e).popFirst(5))}static empty(){return new Y(ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ye.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new ye(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qE(t,e,n){if(!n)throw new W(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function zP(t,e,n,r){if(e===!0&&r===!0)throw new W(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Y0(t){if(!Y.isDocumentKey(t))throw new W(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function X0(t){if(Y.isDocumentKey(t))throw new W(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function KE(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Lc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee(12329,{type:typeof t})}function zs(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Lc(t);throw new W(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(t,e){const n={typeString:t};return e&&(n.value=e),n}function Xa(t,e){if(!KE(t))throw new W(V.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new W(V.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J0=-62135596800,Z0=1e6;class Ee{static now(){return Ee.fromMillis(Date.now())}static fromDate(e){return Ee.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Z0);return new Ee(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<J0)throw new W(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Z0}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ee._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Xa(e,Ee._jsonSchema))return new Ee(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-J0;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ee._jsonSchemaVersion="firestore/timestamp/1.0",Ee._jsonSchema={type:$e("string",Ee._jsonSchemaVersion),seconds:$e("number"),nanoseconds:$e("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{static fromTimestamp(e){return new ne(e)}static min(){return new ne(new Ee(0,0))}static max(){return new ne(new Ee(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa=-1;function BP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ne.fromTimestamp(r===1e9?new Ee(n+1,0):new Ee(n,r));return new ts(s,Y.empty(),e)}function WP(t){return new ts(t.readTime,t.key,Aa)}class ts{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ts(ne.min(),Y.empty(),Aa)}static max(){return new ts(ne.max(),Y.empty(),Aa)}}function HP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Y.comparator(t.documentKey,e.documentKey),n!==0?n:le(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class KP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oo(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==qP)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(s=>s?F.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new F((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new F((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function GP(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ao(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Vc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cm=-1;function Fc(t){return t==null}function Yu(t){return t===0&&1/t==-1/0}function QP(t){return typeof t=="number"&&Number.isInteger(t)&&!Yu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GE="";function YP(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=ev(e)),e=XP(t.get(n),e);return ev(e)}function XP(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case GE:n+="";break;default:n+=i}}return n}function ev(t){return t+GE+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function fs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function QE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,n){this.comparator=e,this.root=n||nt.EMPTY}insert(e,n){return new Re(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,nt.BLACK,null,null))}remove(e){return new Re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,nt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Vl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Vl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Vl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Vl(this.root,e,this.comparator,!0)}}class Vl{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class nt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??nt.RED,this.left=s??nt.EMPTY,this.right=i??nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new nt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return nt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return nt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ee(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ee(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ee(27949);return e+(this.isRed()?0:1)}}nt.EMPTY=null,nt.RED=!0,nt.BLACK=!1;nt.EMPTY=new class{constructor(){this.size=0}get key(){throw ee(57766)}get value(){throw ee(16141)}get color(){throw ee(16727)}get left(){throw ee(29726)}get right(){throw ee(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new nt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.comparator=e,this.data=new Re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new nv(this.data.getIterator())}getIteratorFrom(e){return new nv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ge)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ge(this.comparator);return n.data=e,n}}class nv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.fields=e,e.sort(rt.comparator)}static empty(){return new Ut([])}unionWith(e){let n=new Ge(rt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ut(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return qi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new YE("Invalid base64 string: "+i):i}}(e);return new ot(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ot(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ot.EMPTY_BYTE_STRING=new ot("");const JP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ns(t){if(fe(!!t,39018),typeof t=="string"){let e=0;const n=JP.exec(t);if(fe(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Me(t.seconds),nanos:Me(t.nanos)}}function Me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function rs(t){return typeof t=="string"?ot.fromBase64String(t):ot.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE="server_timestamp",JE="__type__",ZE="__previous_value__",e1="__local_write_time__";function dm(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[JE])==null?void 0:r.stringValue)===XE}function Uc(t){const e=t.mapValue.fields[ZE];return dm(e)?Uc(e):e}function Ra(t){const e=ns(t.mapValue.fields[e1].timestampValue);return new Ee(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZP{constructor(e,n,r,s,i,o,l,u,c,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=f}}const Xu="(default)";class Pa{constructor(e,n){this.projectId=e,this.database=n||Xu}static empty(){return new Pa("","")}get isDefaultDatabase(){return this.database===Xu}isEqual(e){return e instanceof Pa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t1="__type__",e2="__max__",Fl={mapValue:{}},n1="__vector__",Ju="value";function ss(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?dm(t)?4:n2(t)?9007199254740991:t2(t)?10:11:ee(28295,{value:t})}function $n(t,e){if(t===e)return!0;const n=ss(t);if(n!==ss(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ra(t).isEqual(Ra(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=ns(s.timestampValue),l=ns(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return rs(s.bytesValue).isEqual(rs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Me(s.geoPointValue.latitude)===Me(i.geoPointValue.latitude)&&Me(s.geoPointValue.longitude)===Me(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Me(s.integerValue)===Me(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Me(s.doubleValue),l=Me(i.doubleValue);return o===l?Yu(o)===Yu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return qi(t.arrayValue.values||[],e.arrayValue.values||[],$n);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(tv(o)!==tv(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!$n(o[u],l[u])))return!1;return!0}(t,e);default:return ee(52216,{left:t})}}function Da(t,e){return(t.values||[]).find(n=>$n(n,e))!==void 0}function Ki(t,e){if(t===e)return 0;const n=ss(t),r=ss(e);if(n!==r)return le(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return le(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Me(i.integerValue||i.doubleValue),u=Me(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return rv(t.timestampValue,e.timestampValue);case 4:return rv(Ra(t),Ra(e));case 5:return kf(t.stringValue,e.stringValue);case 6:return function(i,o){const l=rs(i),u=rs(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const f=le(l[c],u[c]);if(f!==0)return f}return le(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=le(Me(i.latitude),Me(o.latitude));return l!==0?l:le(Me(i.longitude),Me(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return sv(t.arrayValue,e.arrayValue);case 10:return function(i,o){var g,E,N,S;const l=i.fields||{},u=o.fields||{},c=(g=l[Ju])==null?void 0:g.arrayValue,f=(E=u[Ju])==null?void 0:E.arrayValue,m=le(((N=c==null?void 0:c.values)==null?void 0:N.length)||0,((S=f==null?void 0:f.values)==null?void 0:S.length)||0);return m!==0?m:sv(c,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Fl.mapValue&&o===Fl.mapValue)return 0;if(i===Fl.mapValue)return 1;if(o===Fl.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const g=kf(u[m],f[m]);if(g!==0)return g;const E=Ki(l[u[m]],c[f[m]]);if(E!==0)return E}return le(u.length,f.length)}(t.mapValue,e.mapValue);default:throw ee(23264,{he:n})}}function rv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return le(t,e);const n=ns(t),r=ns(e),s=le(n.seconds,r.seconds);return s!==0?s:le(n.nanos,r.nanos)}function sv(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ki(n[s],r[s]);if(i)return i}return le(n.length,r.length)}function Gi(t){return Sf(t)}function Sf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ns(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return rs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Y.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Sf(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Sf(n.fields[o])}`;return s+"}"}(t.mapValue):ee(61005,{value:t})}function du(t){switch(ss(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Uc(t);return e?16+du(e):16;case 5:return 2*t.stringValue.length;case 6:return rs(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+du(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return fs(r.fields,(i,o)=>{s+=i.length+du(o)}),s}(t.mapValue);default:throw ee(13486,{value:t})}}function iv(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Cf(t){return!!t&&"integerValue"in t}function hm(t){return!!t&&"arrayValue"in t}function ov(t){return!!t&&"nullValue"in t}function av(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function hu(t){return!!t&&"mapValue"in t}function t2(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[t1])==null?void 0:r.stringValue)===n1}function sa(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return fs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=sa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=sa(t.arrayValue.values[n]);return e}return{...t}}function n2(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===e2}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.value=e}static empty(){return new Nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!hu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=sa(n)}setAll(e){let n=rt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=sa(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());hu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return $n(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];hu(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){fs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Nt(sa(this.value))}}function r1(t){const e=[];return fs(t.fields,(n,r)=>{const s=new rt([n]);if(hu(r)){const i=r1(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ut(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new mt(e,0,ne.min(),ne.min(),ne.min(),Nt.empty(),0)}static newFoundDocument(e,n,r,s){return new mt(e,1,n,ne.min(),r,s,0)}static newNoDocument(e,n){return new mt(e,2,n,ne.min(),ne.min(),Nt.empty(),0)}static newUnknownDocument(e,n){return new mt(e,3,n,ne.min(),ne.min(),Nt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e,n){this.position=e,this.inclusive=n}}function lv(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=Y.comparator(Y.fromName(o.referenceValue),n.key):r=Ki(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function uv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!$n(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,n="asc"){this.field=e,this.dir=n}}function r2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{}class Ue extends s1{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new i2(e,n,r):n==="array-contains"?new l2(e,r):n==="in"?new u2(e,r):n==="not-in"?new c2(e,r):n==="array-contains-any"?new d2(e,r):new Ue(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new o2(e,r):new a2(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ki(n,this.value)):n!==null&&ss(this.value)===ss(n)&&this.matchesComparison(Ki(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class yn extends s1{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new yn(e,n)}matches(e){return i1(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function i1(t){return t.op==="and"}function o1(t){return s2(t)&&i1(t)}function s2(t){for(const e of t.filters)if(e instanceof yn)return!1;return!0}function Nf(t){if(t instanceof Ue)return t.field.canonicalString()+t.op.toString()+Gi(t.value);if(o1(t))return t.filters.map(e=>Nf(e)).join(",");{const e=t.filters.map(n=>Nf(n)).join(",");return`${t.op}(${e})`}}function a1(t,e){return t instanceof Ue?function(r,s){return s instanceof Ue&&r.op===s.op&&r.field.isEqual(s.field)&&$n(r.value,s.value)}(t,e):t instanceof yn?function(r,s){return s instanceof yn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&a1(o,s.filters[l]),!0):!1}(t,e):void ee(19439)}function l1(t){return t instanceof Ue?function(n){return`${n.field.canonicalString()} ${n.op} ${Gi(n.value)}`}(t):t instanceof yn?function(n){return n.op.toString()+" {"+n.getFilters().map(l1).join(" ,")+"}"}(t):"Filter"}class i2 extends Ue{constructor(e,n,r){super(e,n,r),this.key=Y.fromName(r.referenceValue)}matches(e){const n=Y.comparator(e.key,this.key);return this.matchesComparison(n)}}class o2 extends Ue{constructor(e,n){super(e,"in",n),this.keys=u1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class a2 extends Ue{constructor(e,n){super(e,"not-in",n),this.keys=u1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function u1(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>Y.fromName(r.referenceValue))}class l2 extends Ue{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return hm(n)&&Da(n.arrayValue,this.value)}}class u2 extends Ue{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Da(this.value.arrayValue,n)}}class c2 extends Ue{constructor(e,n){super(e,"not-in",n)}matches(e){if(Da(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Da(this.value.arrayValue,n)}}class d2 extends Ue{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!hm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Da(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h2{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function cv(t,e=null,n=[],r=[],s=null,i=null,o=null){return new h2(t,e,n,r,s,i,o)}function fm(t){const e=re(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Nf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Fc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Gi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Gi(r)).join(",")),e.Te=n}return e.Te}function pm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!r2(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!a1(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!uv(t.startAt,e.startAt)&&uv(t.endAt,e.endAt)}function Af(t){return Y.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function f2(t,e,n,r,s,i,o,l){return new Ja(t,e,n,r,s,i,o,l)}function c1(t){return new Ja(t)}function dv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function d1(t){return t.collectionGroup!==null}function ia(t){const e=re(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ge(rt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new ec(i,r))}),n.has(rt.keyField().canonicalString())||e.Ie.push(new ec(rt.keyField(),r))}return e.Ie}function Ln(t){const e=re(t);return e.Ee||(e.Ee=p2(e,ia(t))),e.Ee}function p2(t,e){if(t.limitType==="F")return cv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ec(s.field,i)});const n=t.endAt?new Zu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Zu(t.startAt.position,t.startAt.inclusive):null;return cv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Rf(t,e){const n=t.filters.concat([e]);return new Ja(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Pf(t,e,n){return new Ja(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function $c(t,e){return pm(Ln(t),Ln(e))&&t.limitType===e.limitType}function h1(t){return`${fm(Ln(t))}|lt:${t.limitType}`}function li(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>l1(s)).join(", ")}]`),Fc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Gi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Gi(s)).join(",")),`Target(${r})`}(Ln(t))}; limitType=${t.limitType})`}function zc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Y.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ia(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const c=lv(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,ia(r),s)||r.endAt&&!function(o,l,u){const c=lv(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,ia(r),s))}(t,e)}function m2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function f1(t){return(e,n)=>{let r=!1;for(const s of ia(t)){const i=g2(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function g2(t,e,n){const r=t.field.isKeyField()?Y.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),c=l.data.field(i);return u!==null&&c!==null?Ki(u,c):ee(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ee(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){fs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return QE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y2=new Re(Y.comparator);function fr(){return y2}const p1=new Re(Y.comparator);function Ho(...t){let e=p1;for(const n of t)e=e.insert(n.key,n);return e}function m1(t){let e=p1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ns(){return oa()}function g1(){return oa()}function oa(){return new Zs(t=>t.toString(),(t,e)=>t.isEqual(e))}const v2=new Re(Y.comparator),_2=new Ge(Y.comparator);function ue(...t){let e=_2;for(const n of t)e=e.add(n);return e}const w2=new Ge(le);function x2(){return w2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yu(e)?"-0":e}}function y1(t){return{integerValue:""+t}}function E2(t,e){return QP(e)?y1(e):mm(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(){this._=void 0}}function T2(t,e,n){return t instanceof tc?function(s,i){const o={fields:{[JE]:{stringValue:XE},[e1]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&dm(i)&&(i=Uc(i)),i&&(o.fields[ZE]=i),{mapValue:o}}(n,e):t instanceof Oa?_1(t,e):t instanceof ja?w1(t,e):function(s,i){const o=v1(s,i),l=hv(o)+hv(s.Ae);return Cf(o)&&Cf(s.Ae)?y1(l):mm(s.serializer,l)}(t,e)}function I2(t,e,n){return t instanceof Oa?_1(t,e):t instanceof ja?w1(t,e):n}function v1(t,e){return t instanceof nc?function(r){return Cf(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class tc extends Bc{}class Oa extends Bc{constructor(e){super(),this.elements=e}}function _1(t,e){const n=x1(e);for(const r of t.elements)n.some(s=>$n(s,r))||n.push(r);return{arrayValue:{values:n}}}class ja extends Bc{constructor(e){super(),this.elements=e}}function w1(t,e){let n=x1(e);for(const r of t.elements)n=n.filter(s=>!$n(s,r));return{arrayValue:{values:n}}}class nc extends Bc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function hv(t){return Me(t.integerValue||t.doubleValue)}function x1(t){return hm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function b2(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Oa&&s instanceof Oa||r instanceof ja&&s instanceof ja?qi(r.elements,s.elements,$n):r instanceof nc&&s instanceof nc?$n(r.Ae,s.Ae):r instanceof tc&&s instanceof tc}(t.transform,e.transform)}class k2{constructor(e,n){this.version=e,this.transformResults=n}}class dn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new dn}static exists(e){return new dn(void 0,e)}static updateTime(e){return new dn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Wc{}function E1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new gm(t.key,dn.none()):new Za(t.key,t.data,dn.none());{const n=t.data,r=Nt.empty();let s=new Ge(rt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ps(t.key,r,new Ut(s.toArray()),dn.none())}}function S2(t,e,n){t instanceof Za?function(s,i,o){const l=s.value.clone(),u=pv(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof ps?function(s,i,o){if(!fu(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=pv(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(T1(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function aa(t,e,n,r){return t instanceof Za?function(i,o,l,u){if(!fu(i.precondition,o))return l;const c=i.value.clone(),f=mv(i.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof ps?function(i,o,l,u){if(!fu(i.precondition,o))return l;const c=mv(i.fieldTransforms,u,o),f=o.data;return f.setAll(T1(i)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(i,o,l){return fu(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function C2(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=v1(r.transform,s||null);i!=null&&(n===null&&(n=Nt.empty()),n.set(r.field,i))}return n||null}function fv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&qi(r,s,(i,o)=>b2(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Za extends Wc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ps extends Wc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function T1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function pv(t,e,n){const r=new Map;fe(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,I2(o,l,n[s]))}return r}function mv(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,T2(i,o,e))}return r}class gm extends Wc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class N2 extends Wc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A2{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&S2(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=aa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=aa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=g1();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=E1(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(ne.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ue())}isEqual(e){return this.batchId===e.batchId&&qi(this.mutations,e.mutations,(n,r)=>fv(n,r))&&qi(this.baseMutations,e.baseMutations,(n,r)=>fv(n,r))}}class ym{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){fe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return v2}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new ym(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ve,ce;function D2(t){switch(t){case V.OK:return ee(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return ee(15467,{code:t})}}function I1(t){if(t===void 0)return hr("GRPC error has no .code"),V.UNKNOWN;switch(t){case Ve.OK:return V.OK;case Ve.CANCELLED:return V.CANCELLED;case Ve.UNKNOWN:return V.UNKNOWN;case Ve.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Ve.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Ve.INTERNAL:return V.INTERNAL;case Ve.UNAVAILABLE:return V.UNAVAILABLE;case Ve.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Ve.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Ve.NOT_FOUND:return V.NOT_FOUND;case Ve.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Ve.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Ve.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Ve.ABORTED:return V.ABORTED;case Ve.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Ve.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Ve.DATA_LOSS:return V.DATA_LOSS;default:return ee(39323,{code:t})}}(ce=Ve||(Ve={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O2(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j2=new Yr([4294967295,4294967295],0);function gv(t){const e=O2().encode(t),n=new VE;return n.update(e),new Uint8Array(n.digest())}function yv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Yr([n,r],0),new Yr([s,i],0)]}class vm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new qo(`Invalid padding: ${n}`);if(r<0)throw new qo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new qo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new qo(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Yr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(Yr.fromNumber(r)));return s.compare(j2)===1&&(s=new Yr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=gv(e),[r,s]=yv(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new vm(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=gv(e),[r,s]=yv(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class qo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,el.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Hc(ne.min(),s,new Re(le),fr(),ue())}}class el{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new el(r,n,ue(),ue(),ue())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class b1{constructor(e,n){this.targetId=e,this.Ce=n}}class k1{constructor(e,n,r=ot.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class vv{constructor(){this.ve=0,this.Fe=_v(),this.Me=ot.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ue(),n=ue(),r=ue();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ee(38017,{changeType:i})}}),new el(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=_v()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,fe(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class M2{constructor(e){this.Ge=e,this.ze=new Map,this.je=fr(),this.Je=Ul(),this.He=Ul(),this.Ye=new Re(le)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:ee(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Af(i))if(r===0){const o=new Y(i.path);this.et(n,o,mt.newNoDocument(o,ne.min()))}else fe(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=rs(r).toUint8Array()}catch(u){if(u instanceof YE)return Hi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new vm(o,s,i)}catch(u){return Hi(u instanceof qo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&Af(l.target)){const u=new Y(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,mt.newNoDocument(u,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let r=ue();this.He.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new Hc(e,n,this.Ye,this.je,r);return this.je=fr(),this.Je=Ul(),this.He=Ul(),this.Ye=new Re(le),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new vv,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Ge(le),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Ge(le),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new vv),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Ul(){return new Re(Y.comparator)}function _v(){return new Re(Y.comparator)}const L2={asc:"ASCENDING",desc:"DESCENDING"},V2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},F2={and:"AND",or:"OR"};class U2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Df(t,e){return t.useProto3Json||Fc(e)?e:{value:e}}function rc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function S1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function $2(t,e){return rc(t,e.toTimestamp())}function Vn(t){return fe(!!t,49232),ne.fromTimestamp(function(n){const r=ns(n);return new Ee(r.seconds,r.nanos)}(t))}function _m(t,e){return Of(t,e).canonicalString()}function Of(t,e){const n=function(s){return new ye(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function C1(t){const e=ye.fromString(t);return fe(D1(e),10190,{key:e.toString()}),e}function jf(t,e){return _m(t.databaseId,e.path)}function ch(t,e){const n=C1(e);if(n.get(1)!==t.databaseId.projectId)throw new W(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Y(A1(n))}function N1(t,e){return _m(t.databaseId,e)}function z2(t){const e=C1(t);return e.length===4?ye.emptyPath():A1(e)}function Mf(t){return new ye(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function A1(t){return fe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function wv(t,e,n){return{name:jf(t,e),fields:n.value.mapValue.fields}}function B2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ee(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,f){return c.useProto3Json?(fe(f===void 0||typeof f=="string",58123),ot.fromBase64String(f||"")):(fe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),ot.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const f=c.code===void 0?V.UNKNOWN:I1(c.code);return new W(f,c.message||"")}(o);n=new k1(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ch(t,r.document.name),i=Vn(r.document.updateTime),o=r.document.createTime?Vn(r.document.createTime):ne.min(),l=new Nt({mapValue:{fields:r.document.fields}}),u=mt.newFoundDocument(s,i,o,l),c=r.targetIds||[],f=r.removedTargetIds||[];n=new pu(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ch(t,r.document),i=r.readTime?Vn(r.readTime):ne.min(),o=mt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new pu([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ch(t,r.document),i=r.removedTargetIds||[];n=new pu([],i,s,null)}else{if(!("filter"in e))return ee(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new P2(s,i),l=r.targetId;n=new b1(l,o)}}return n}function W2(t,e){let n;if(e instanceof Za)n={update:wv(t,e.key,e.value)};else if(e instanceof gm)n={delete:jf(t,e.key)};else if(e instanceof ps)n={update:wv(t,e.key,e.data),updateMask:Z2(e.fieldMask)};else{if(!(e instanceof N2))return ee(16599,{Vt:e.type});n={verify:jf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof tc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Oa)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ja)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof nc)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw ee(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:$2(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ee(27497)}(t,e.precondition)),n}function H2(t,e){return t&&t.length>0?(fe(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?Vn(s.updateTime):Vn(i);return o.isEqual(ne.min())&&(o=Vn(i)),new k2(o,s.transformResults||[])}(n,e))):[]}function q2(t,e){return{documents:[N1(t,e.path)]}}function K2(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=N1(t,s);const i=function(c){if(c.length!==0)return P1(yn.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(f=>function(g){return{field:ui(g.field),direction:Y2(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Df(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:s}}function G2(t){let e=z2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){fe(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(m){const g=R1(m);return g instanceof yn&&o1(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(N){return new ec(ci(N.field),function(I){switch(I){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,Fc(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,E=m.values||[];return new Zu(E,g)}(n.startAt));let c=null;return n.endAt&&(c=function(m){const g=!m.before,E=m.values||[];return new Zu(E,g)}(n.endAt)),f2(e,s,o,i,l,"F",u,c)}function Q2(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function R1(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ci(n.unaryFilter.field);return Ue.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ci(n.unaryFilter.field);return Ue.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ci(n.unaryFilter.field);return Ue.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ci(n.unaryFilter.field);return Ue.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ee(61313);default:return ee(60726)}}(t):t.fieldFilter!==void 0?function(n){return Ue.create(ci(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ee(58110);default:return ee(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return yn.create(n.compositeFilter.filters.map(r=>R1(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ee(1026)}}(n.compositeFilter.op))}(t):ee(30097,{filter:t})}function Y2(t){return L2[t]}function X2(t){return V2[t]}function J2(t){return F2[t]}function ui(t){return{fieldPath:t.canonicalString()}}function ci(t){return rt.fromServerFormat(t.fieldPath)}function P1(t){return t instanceof Ue?function(n){if(n.op==="=="){if(av(n.value))return{unaryFilter:{field:ui(n.field),op:"IS_NAN"}};if(ov(n.value))return{unaryFilter:{field:ui(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(av(n.value))return{unaryFilter:{field:ui(n.field),op:"IS_NOT_NAN"}};if(ov(n.value))return{unaryFilter:{field:ui(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ui(n.field),op:X2(n.op),value:n.value}}}(t):t instanceof yn?function(n){const r=n.getFilters().map(s=>P1(s));return r.length===1?r[0]:{compositeFilter:{op:J2(n.op),filters:r}}}(t):ee(54877,{filter:t})}function Z2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function D1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,n,r,s,i=ne.min(),o=ne.min(),l=ot.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Fr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Fr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Fr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Fr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{constructor(e){this.yt=e}}function tD(t){const e=G2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Pf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(){this.Cn=new rD}addToCollectionParentIndex(e,n){return this.Cn.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(ts.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(ts.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class rD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ge(ye.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ge(ye.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},O1=41943040;class St{static withCacheSize(e){return new St(e,St.DEFAULT_COLLECTION_PERCENTILE,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */St.DEFAULT_COLLECTION_PERCENTILE=10,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,St.DEFAULT=new St(O1,St.DEFAULT_COLLECTION_PERCENTILE,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),St.DISABLED=new St(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Qi(0)}static cr(){return new Qi(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ev="LruGarbageCollector",sD=1048576;function Tv([t,e],[n,r]){const s=le(t,n);return s===0?le(e,r):s}class iD{constructor(e){this.Ir=e,this.buffer=new Ge(Tv),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Tv(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class oD{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){H(Ev,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ao(n)?H(Ev,"Ignoring IndexedDB error during garbage collection: ",n):await oo(n)}await this.Vr(3e5)})}}class aD{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return F.resolve(Vc.ce);const r=new iD(n);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(xv)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),xv):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,l,u,c;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,o=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(i=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(c=Date.now(),ai()<=ae.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(c-u)+`ms
Total Duration: ${c-f}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function lD(t,e){return new aD(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uD{constructor(){this.changes=new Zs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,mt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dD{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&aa(r.mutation,s,Ut.empty(),Ee.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ue()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ue()){const s=Ns();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ho();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ns();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ue()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=fr();const o=oa(),l=function(){return oa()}();return n.forEach((u,c)=>{const f=r.get(c.key);s.has(c.key)&&(f===void 0||f.mutation instanceof ps)?i=i.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),aa(f.mutation,c,f.mutation.getFieldMask(),Ee.now())):o.set(c.key,Ut.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>l.set(c,new cD(f,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=oa();let s=new Re((o,l)=>o-l),i=ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||Ut.empty();f=l.applyToLocalView(c,f),r.set(u,f);const m=(s.get(l.batchId)||ue()).add(u);s=s.insert(l.batchId,m)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,f=u.value,m=g1();f.forEach(g=>{if(!i.has(g)){const E=E1(n.get(g),r.get(g));E!==null&&m.set(g,E),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,m))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return Y.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):d1(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):F.resolve(Ns());let l=Aa,u=i;return o.next(c=>F.forEach(c,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(f)?F.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,u,c,ue())).next(f=>({batchId:l,changes:m1(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Y(n)).next(r=>{let s=Ho();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ho();return this.indexManager.getCollectionParents(e,i).next(l=>F.forEach(l,u=>{const c=function(m,g){return new Ja(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(f=>{f.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,mt.newInvalidDocument(f)))});let l=Ho();return o.forEach((u,c)=>{const f=i.get(u);f!==void 0&&aa(f.mutation,c,Ut.empty(),Ee.now()),zc(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hD{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return F.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Vn(s.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(s){return{name:s.name,query:tD(s.bundledQuery),readTime:Vn(s.readTime)}}(n)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fD{constructor(){this.overlays=new Re(Y.comparator),this.qr=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ns();return F.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const s=Ns(),i=n.length+1,o=new Y(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return F.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Re((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=i.get(c.largestBatchId);f===null&&(f=Ns(),i=i.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const l=Ns(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>l.set(c,f)),!(l.size()>=s)););return F.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new R2(n,r));let i=this.qr.get(n);i===void 0&&(i=ue(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pD{constructor(){this.sessionToken=ot.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(){this.Qr=new Ge(Xe.$r),this.Ur=new Ge(Xe.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new Xe(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new Xe(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new Y(new ye([])),r=new Xe(n,e),s=new Xe(n,e+1),i=[];return this.Ur.forEachInRange([r,s],o=>{this.Gr(o),i.push(o.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new Y(new ye([])),r=new Xe(n,e),s=new Xe(n,e+1);let i=ue();return this.Ur.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Xe(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Xe{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return Y.comparator(e.key,n.key)||le(e.Yr,n.Yr)}static Kr(e,n){return le(e.Yr,n.Yr)||Y.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Ge(Xe.$r)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new A2(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Zr=this.Zr.add(new Xe(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return F.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?cm:this.tr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Xe(n,0),s=new Xe(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],o=>{const l=this.Xr(o.Yr);i.push(l)}),F.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ge(le);return n.forEach(s=>{const i=new Xe(s,0),o=new Xe(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],l=>{r=r.add(l.Yr)})}),F.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;Y.isDocumentKey(i)||(i=i.child(""));const o=new Xe(new Y(i),0);let l=new Ge(le);return this.Zr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(l=l.add(u.Yr)),!0)},o),F.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){fe(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return F.forEach(n.mutations,s=>{const i=new Xe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new Xe(n,0),s=this.Zr.firstAfterOrEqual(r);return F.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gD{constructor(e){this.ri=e,this.docs=function(){return new Re(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():mt.newInvalidDocument(n))}getEntries(e,n){let r=fr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():mt.newInvalidDocument(s))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=fr();const o=n.path,l=new Y(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||HP(WP(f),r)<=0||(s.has(f.key)||zc(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return F.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ee(9500)}ii(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new yD(this)}getSize(e){return F.resolve(this.size)}}class yD extends uD{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vD{constructor(e){this.persistence=e,this.si=new Zs(n=>fm(n),pm),this.lastRemoteSnapshotVersion=ne.min(),this.highestTargetId=0,this.oi=0,this._i=new wm,this.targetCount=0,this.ai=Qi.ur()}forEachTarget(e,n){return this.si.forEach((r,s)=>n(s)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),F.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Qi(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Pr(n),F.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),F.waitFor(i).next(()=>s)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),F.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{constructor(e,n){this.ui={},this.overlays={},this.ci=new Vc(0),this.li=!1,this.li=!0,this.hi=new pD,this.referenceDelegate=e(this),this.Pi=new vD(this),this.indexManager=new nD,this.remoteDocumentCache=function(s){return new gD(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new eD(n),this.Ii=new hD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new fD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new mD(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const s=new _D(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,n){return F.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class _D extends KP{constructor(e){super(),this.currentSequenceNumber=e}}class xm{constructor(e){this.persistence=e,this.Ri=new wm,this.Vi=null}static mi(e){return new xm(e)}get fi(){if(this.Vi)return this.Vi;throw ee(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),F.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.fi,r=>{const s=Y.fromPath(r);return this.gi(e,s).next(i=>{i||n.removeEntry(s,ne.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return F.or([()=>F.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class sc{constructor(e,n){this.persistence=e,this.pi=new Zs(r=>YP(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=lD(this,n)}static mi(e,n){return new sc(e,n)}Ei(){}di(e){return F.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return F.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?F.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,o=>this.br(e,o,n).next(l=>{l||(r++,i.removeEntry(o,ne.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),F.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),F.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),F.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=du(e.data.value)),n}br(e,n,r){return F.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return F.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=ue(),s=ue();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Em(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xD{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return eN()?8:GP(vt())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ws(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new wD;return this.Ss(e,n,o).next(l=>{if(i.result=l,this.Vs)return this.bs(e,n,o,l.size)})}).next(()=>i.result)}bs(e,n,r,s){return r.documentReadCount<this.fs?(ai()<=ae.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",li(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),F.resolve()):(ai()<=ae.DEBUG&&H("QueryEngine","Query:",li(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(ai()<=ae.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",li(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ln(n))):F.resolve())}ys(e,n){if(dv(n))return F.resolve(null);let r=Ln(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Pf(n,null,"F"),r=Ln(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ue(...i);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ds(n,l);return this.Cs(n,c,o,u.readTime)?this.ys(e,Pf(n,null,"F")):this.vs(e,c,n,u)}))})))}ws(e,n,r,s){return dv(n)||s.isEqual(ne.min())?F.resolve(null):this.ps.getDocuments(e,r).next(i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?F.resolve(null):(ai()<=ae.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),li(n)),this.vs(e,o,n,BP(s,Aa)).next(l=>l))})}Ds(e,n){let r=new Ge(f1(e));return n.forEach((s,i)=>{zc(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return ai()<=ae.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",li(n)),this.ps.getDocumentsMatchingQuery(e,n,ts.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm="LocalStore",ED=3e8;class TD{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new Re(le),this.xs=new Zs(i=>fm(i),pm),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new dD(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function ID(t,e,n,r){return new TD(t,e,n,r)}async function M1(t,e){const n=re(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=ue();for(const c of s){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of i){l.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ls:c,removedBatchIds:o,addedBatchIds:l}))})})}function bD(t,e){const n=re(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return function(l,u,c,f){const m=c.batch,g=m.keys();let E=F.resolve();return g.forEach(N=>{E=E.next(()=>f.getEntry(u,N)).next(S=>{const I=c.docVersions.get(N);fe(I!==null,48541),S.version.compareTo(I)<0&&(m.applyToRemoteDocument(S,c),S.isValidDocument()&&(S.setReadTime(c.commitVersion),f.addEntry(S)))})}),E.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ue();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function L1(t){const e=re(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function kD(t,e){const n=re(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const l=[];e.targetChanges.forEach((f,m)=>{const g=s.get(m);if(!g)return;l.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,m).next(()=>n.Pi.addMatchingKeys(i,f.addedDocuments,m)));let E=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?E=E.withResumeToken(ot.EMPTY_BYTE_STRING,ne.min()).withLastLimboFreeSnapshotVersion(ne.min()):f.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(f.resumeToken,r)),s=s.insert(m,E),function(S,I,v){return S.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=ED?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(g,E,f)&&l.push(n.Pi.updateTargetData(i,E))});let u=fr(),c=ue();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(SD(i,o,e.documentUpdates).next(f=>{u=f.ks,c=f.qs})),!r.isEqual(ne.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next(m=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return F.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(n.Ms=s,i))}function SD(t,e,n){let r=ue(),s=ue();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=fr();return n.forEach((l,u)=>{const c=i.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(ne.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):H(Tm,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{ks:o,qs:s}})}function CD(t,e){const n=re(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=cm),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ND(t,e){const n=re(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Pi.getTargetData(r,e).next(i=>i?(s=i,F.resolve(s)):n.Pi.allocateTargetId(r).next(o=>(s=new Fr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function Lf(t,e,n){const r=re(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ao(o))throw o;H(Tm,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function Iv(t,e,n){const r=re(t);let s=ne.min(),i=ue();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const m=re(u),g=m.xs.get(f);return g!==void 0?F.resolve(m.Ms.get(g)):m.Pi.getTargetData(c,f)}(r,o,Ln(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:ne.min(),n?i:ue())).next(l=>(AD(r,m2(e),l),{documents:l,Qs:i})))}function AD(t,e,n){let r=t.Os.get(e)||ne.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Os.set(e,r)}class bv{constructor(){this.activeTargetIds=x2()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class RD{constructor(){this.Mo=new bv,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new bv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PD{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kv="ConnectivityMonitor";class Sv{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){H(kv,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){H(kv,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $l=null;function Vf(){return $l===null?$l=function(){return 268435456+Math.round(2147483648*Math.random())}():$l++,"0x"+$l.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh="RestConnection",DD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class OD{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===Xu?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=Vf(),l=this.zo(e,n.toUriEncodedString());H(dh,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,s,i);const{host:c}=new URL(l),f=ds(c);return this.Jo(e,l,u,r,f).then(m=>(H(dh,`Received RPC '${e}' ${o}: `,m),m),m=>{throw Hi(dh,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",r),m})}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+io}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,n){const r=DD[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jD{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht="WebChannelConnection";class MD extends OD{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=Vf();return new Promise((l,u)=>{const c=new FE;c.setWithCredentials(!0),c.listenOnce(UE.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case cu.NO_ERROR:const m=c.getResponseJson();H(ht,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case cu.TIMEOUT:H(ht,`RPC '${e}' ${o} timed out`),u(new W(V.DEADLINE_EXCEEDED,"Request time out"));break;case cu.HTTP_ERROR:const g=c.getStatus();if(H(ht,`RPC '${e}' ${o} failed with status:`,g,"response text:",c.getResponseText()),g>0){let E=c.getResponseJson();Array.isArray(E)&&(E=E[0]);const N=E==null?void 0:E.error;if(N&&N.status&&N.message){const S=function(v){const y=v.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(y)>=0?y:V.UNKNOWN}(N.status);u(new W(S,N.message))}else u(new W(V.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new W(V.UNAVAILABLE,"Connection failed."));break;default:ee(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{H(ht,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);H(ht,`RPC '${e}' ${o} sending request:`,s),c.send(n,"POST",f,r,15)})}T_(e,n,r){const s=Vf(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=BE(),l=zE(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=i.join("");H(ht,`Creating RPC '${e}' stream ${s}: ${f}`,u);const m=o.createWebChannel(f,u);this.I_(m);let g=!1,E=!1;const N=new jD({Yo:I=>{E?H(ht,`Not sending because RPC '${e}' stream ${s} is closed:`,I):(g||(H(ht,`Opening RPC '${e}' stream ${s} transport.`),m.open(),g=!0),H(ht,`RPC '${e}' stream ${s} sending:`,I),m.send(I))},Zo:()=>m.close()}),S=(I,v,y)=>{I.listen(v,_=>{try{y(_)}catch(D){setTimeout(()=>{throw D},0)}})};return S(m,Wo.EventType.OPEN,()=>{E||(H(ht,`RPC '${e}' stream ${s} transport opened.`),N.o_())}),S(m,Wo.EventType.CLOSE,()=>{E||(E=!0,H(ht,`RPC '${e}' stream ${s} transport closed`),N.a_(),this.E_(m))}),S(m,Wo.EventType.ERROR,I=>{E||(E=!0,Hi(ht,`RPC '${e}' stream ${s} transport errored. Name:`,I.name,"Message:",I.message),N.a_(new W(V.UNAVAILABLE,"The operation could not be completed")))}),S(m,Wo.EventType.MESSAGE,I=>{var v;if(!E){const y=I.data[0];fe(!!y,16349);const _=y,D=(_==null?void 0:_.error)||((v=_[0])==null?void 0:v.error);if(D){H(ht,`RPC '${e}' stream ${s} received error:`,D);const M=D.status;let U=function(C){const A=Ve[C];if(A!==void 0)return I1(A)}(M),k=D.message;U===void 0&&(U=V.INTERNAL,k="Unknown error status: "+M+" with message "+D.message),E=!0,N.a_(new W(U,k)),m.close()}else H(ht,`RPC '${e}' stream ${s} received:`,y),N.u_(y)}}),S(l,$E.STAT_EVENT,I=>{I.stat===bf.PROXY?H(ht,`RPC '${e}' stream ${s} detected buffering proxy`):I.stat===bf.NOPROXY&&H(ht,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{N.__()},0),N}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function hh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(t){return new U2(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&H("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv="PersistentStream";class F1{constructor(e,n,r,s,i,o,l,u){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new V1(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(hr(n.toString()),hr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new W(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return H(Cv,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(H(Cv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class LD extends F1{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=B2(this.serializer,e),r=function(i){if(!("targetChange"in i))return ne.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ne.min():o.readTime?Vn(o.readTime):ne.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Mf(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=Af(u)?{documents:q2(i,u)}:{query:K2(i,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=S1(i,o.resumeToken);const c=Df(i,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(ne.min())>0){l.readTime=rc(i,o.snapshotVersion.toTimestamp());const c=Df(i,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=Q2(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Mf(this.serializer),n.removeTarget=e,this.q_(n)}}class VD extends F1{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return fe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,fe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){fe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=H2(e.writeResults,e.commitTime),r=Vn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Mf(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>W2(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FD{}class UD extends FD{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new W(V.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Go(e,Of(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W(V.UNKNOWN,i.toString())})}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,Of(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(V.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class $D{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(hr(n),this.aa=!1):H("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs="RemoteStore";class zD{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{ei(this)&&(H(Bs,"Restarting streams for network reachability change."),await async function(u){const c=re(u);c.Ea.add(4),await tl(c),c.Ra.set("Unknown"),c.Ea.delete(4),await Kc(c)}(this))})}),this.Ra=new $D(r,s)}}async function Kc(t){if(ei(t))for(const e of t.da)await e(!0)}async function tl(t){for(const e of t.da)await e(!1)}function U1(t,e){const n=re(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Sm(n)?km(n):lo(n).O_()&&bm(n,e))}function Im(t,e){const n=re(t),r=lo(n);n.Ia.delete(e),r.O_()&&$1(n,e),n.Ia.size===0&&(r.O_()?r.L_():ei(n)&&n.Ra.set("Unknown"))}function bm(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ne.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}lo(t).Y_(e)}function $1(t,e){t.Va.Ue(e),lo(t).Z_(e)}function km(t){t.Va=new M2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),lo(t).start(),t.Ra.ua()}function Sm(t){return ei(t)&&!lo(t).x_()&&t.Ia.size>0}function ei(t){return re(t).Ea.size===0}function z1(t){t.Va=void 0}async function BD(t){t.Ra.set("Online")}async function WD(t){t.Ia.forEach((e,n)=>{bm(t,e)})}async function HD(t,e){z1(t),Sm(t)?(t.Ra.ha(e),km(t)):t.Ra.set("Unknown")}async function qD(t,e,n){if(t.Ra.set("Online"),e instanceof k1&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ia.delete(l),s.Va.removeTarget(l))}(t,e)}catch(r){H(Bs,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ic(t,r)}else if(e instanceof pu?t.Va.Ze(e):e instanceof b1?t.Va.st(e):t.Va.tt(e),!n.isEqual(ne.min()))try{const r=await L1(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Va.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.Ia.get(c);f&&i.Ia.set(c,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const f=i.Ia.get(u);if(!f)return;i.Ia.set(u,f.withResumeToken(ot.EMPTY_BYTE_STRING,f.snapshotVersion)),$1(i,u);const m=new Fr(f.target,u,c,f.sequenceNumber);bm(i,m)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){H(Bs,"Failed to raise snapshot:",r),await ic(t,r)}}async function ic(t,e,n){if(!ao(e))throw e;t.Ea.add(1),await tl(t),t.Ra.set("Offline"),n||(n=()=>L1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H(Bs,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Kc(t)})}function B1(t,e){return e().catch(n=>ic(t,n,e))}async function Gc(t){const e=re(t),n=is(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:cm;for(;KD(e);)try{const s=await CD(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,GD(e,s)}catch(s){await ic(e,s)}W1(e)&&H1(e)}function KD(t){return ei(t)&&t.Ta.length<10}function GD(t,e){t.Ta.push(e);const n=is(t);n.O_()&&n.X_&&n.ea(e.mutations)}function W1(t){return ei(t)&&!is(t).x_()&&t.Ta.length>0}function H1(t){is(t).start()}async function QD(t){is(t).ra()}async function YD(t){const e=is(t);for(const n of t.Ta)e.ea(n.mutations)}async function XD(t,e,n){const r=t.Ta.shift(),s=ym.from(r,e,n);await B1(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Gc(t)}async function JD(t,e){e&&is(t).X_&&await async function(r,s){if(function(o){return D2(o)&&o!==V.ABORTED}(s.code)){const i=r.Ta.shift();is(r).B_(),await B1(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Gc(r)}}(t,e),W1(t)&&H1(t)}async function Nv(t,e){const n=re(t);n.asyncQueue.verifyOperationInProgress(),H(Bs,"RemoteStore received new credentials");const r=ei(n);n.Ea.add(3),await tl(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Kc(n)}async function ZD(t,e){const n=re(t);e?(n.Ea.delete(2),await Kc(n)):e||(n.Ea.add(2),await tl(n),n.Ra.set("Unknown"))}function lo(t){return t.ma||(t.ma=function(n,r,s){const i=re(n);return i.sa(),new LD(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:BD.bind(null,t),t_:WD.bind(null,t),r_:HD.bind(null,t),H_:qD.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),Sm(t)?km(t):t.Ra.set("Unknown")):(await t.ma.stop(),z1(t))})),t.ma}function is(t){return t.fa||(t.fa=function(n,r,s){const i=re(n);return i.sa(),new VD(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:QD.bind(null,t),r_:JD.bind(null,t),ta:YD.bind(null,t),na:XD.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await Gc(t)):(await t.fa.stop(),t.Ta.length>0&&(H(Bs,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Xr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Cm(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Nm(t,e){if(hr("AsyncQueue",`${e}: ${t}`),ao(t))return new W(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{static emptySet(e){return new Di(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||Y.comparator(n.key,r.key):(n,r)=>Y.comparator(n.key,r.key),this.keyedMap=Ho(),this.sortedSet=new Re(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Di)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Di;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(){this.ga=new Re(Y.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):ee(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Yi{constructor(e,n,r,s,i,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Yi(e,n,Di.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$c(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e4{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class t4{constructor(){this.queries=Rv(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=re(n),i=s.queries;s.queries=Rv(),i.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new W(V.ABORTED,"Firestore shutting down"))}}function Rv(){return new Zs(t=>h1(t),$c)}async function n4(t,e){const n=re(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new e4,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Nm(o,`Initialization of query '${li(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&Am(n)}async function r4(t,e){const n=re(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function s4(t,e){const n=re(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.Sa)l.Fa(s)&&(r=!0);o.wa=s}}r&&Am(n)}function i4(t,e,n){const r=re(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function Am(t){t.Ca.forEach(e=>{e.next()})}var Ff,Pv;(Pv=Ff||(Ff={})).Ma="default",Pv.Cache="cache";class o4{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Yi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Yi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Ff.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1{constructor(e){this.key=e}}class K1{constructor(e){this.key=e}}class a4{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=ue(),this.mutatedKeys=ue(),this.eu=f1(e),this.tu=new Di(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new Av,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,m)=>{const g=s.get(f),E=zc(this.query,m)?m:null,N=!!g&&this.mutatedKeys.has(g.key),S=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let I=!1;g&&E?g.data.isEqual(E.data)?N!==S&&(r.track({type:3,doc:E}),I=!0):this.su(g,E)||(r.track({type:2,doc:E}),I=!0,(u&&this.eu(E,u)>0||c&&this.eu(E,c)<0)&&(l=!0)):!g&&E?(r.track({type:0,doc:E}),I=!0):g&&!E&&(r.track({type:1,doc:g}),I=!0,(u||c)&&(l=!0)),I&&(E?(o=o.add(E),i=S?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:l,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,m)=>function(E,N){const S=I=>{switch(I){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee(20277,{Rt:I})}};return S(E)-S(N)}(f.type,m.type)||this.eu(f.doc,m.doc)),this.ou(r),s=s??!1;const l=n&&!s?this._u():[],u=this.Xa.size===0&&this.current&&!s?1:0,c=u!==this.Za;return this.Za=u,o.length!==0||c?{snapshot:new Yi(this.query,e.tu,i,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Av,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=ue(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new K1(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new q1(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=ue();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Yi.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Rm="SyncEngine";class l4{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class u4{constructor(e){this.key=e,this.hu=!1}}class c4{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Zs(l=>h1(l),$c),this.Iu=new Map,this.Eu=new Set,this.du=new Re(Y.comparator),this.Au=new Map,this.Ru=new wm,this.Vu={},this.mu=new Map,this.fu=Qi.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function d4(t,e,n=!0){const r=Z1(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await G1(r,e,n,!0),s}async function h4(t,e){const n=Z1(t);await G1(n,e,!0,!1)}async function G1(t,e,n,r){const s=await ND(t.localStore,Ln(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await f4(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&U1(t.remoteStore,s),l}async function f4(t,e,n,r,s){t.pu=(m,g,E)=>async function(S,I,v,y){let _=I.view.ru(v);_.Cs&&(_=await Iv(S.localStore,I.query,!1).then(({documents:k})=>I.view.ru(k,_)));const D=y&&y.targetChanges.get(I.targetId),M=y&&y.targetMismatches.get(I.targetId)!=null,U=I.view.applyChanges(_,S.isPrimaryClient,D,M);return Ov(S,I.targetId,U.au),U.snapshot}(t,m,g,E);const i=await Iv(t.localStore,e,!0),o=new a4(e,i.Qs),l=o.ru(i.documents),u=el.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(l,t.isPrimaryClient,u);Ov(t,n,c.au);const f=new l4(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),c.snapshot}async function p4(t,e,n){const r=re(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!$c(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Lf(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Im(r.remoteStore,s.targetId),Uf(r,s.targetId)}).catch(oo)):(Uf(r,s.targetId),await Lf(r.localStore,s.targetId,!0))}async function m4(t,e){const n=re(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Im(n.remoteStore,r.targetId))}async function g4(t,e,n){const r=T4(t);try{const s=await function(o,l){const u=re(o),c=Ee.now(),f=l.reduce((E,N)=>E.add(N.key),ue());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",E=>{let N=fr(),S=ue();return u.Ns.getEntries(E,f).next(I=>{N=I,N.forEach((v,y)=>{y.isValidDocument()||(S=S.add(v))})}).next(()=>u.localDocuments.getOverlayedDocuments(E,N)).next(I=>{m=I;const v=[];for(const y of l){const _=C2(y,m.get(y.key).overlayedDocument);_!=null&&v.push(new ps(y.key,_,r1(_.value.mapValue),dn.exists(!0)))}return u.mutationQueue.addMutationBatch(E,c,v,l)}).next(I=>{g=I;const v=I.applyToLocalDocumentSet(m,S);return u.documentOverlayCache.saveOverlays(E,I.batchId,v)})}).then(()=>({batchId:g.batchId,changes:m1(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let c=o.Vu[o.currentUser.toKey()];c||(c=new Re(le)),c=c.insert(l,u),o.Vu[o.currentUser.toKey()]=c}(r,s.batchId,n),await nl(r,s.changes),await Gc(r.remoteStore)}catch(s){const i=Nm(s,"Failed to persist write");n.reject(i)}}async function Q1(t,e){const n=re(t);try{const r=await kD(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(fe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?fe(o.hu,14607):s.removedDocuments.size>0&&(fe(o.hu,42227),o.hu=!1))}),await nl(n,r,e)}catch(r){await oo(r)}}function Dv(t,e,n){const r=re(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=re(o);u.onlineState=l;let c=!1;u.queries.forEach((f,m)=>{for(const g of m.Sa)g.va(l)&&(c=!0)}),c&&Am(u)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function y4(t,e,n){const r=re(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Re(Y.comparator);o=o.insert(i,mt.newNoDocument(i,ne.min()));const l=ue().add(i),u=new Hc(ne.min(),new Map,new Re(le),o,l);await Q1(r,u),r.du=r.du.remove(i),r.Au.delete(e),Pm(r)}else await Lf(r.localStore,e,!1).then(()=>Uf(r,e,n)).catch(oo)}async function v4(t,e){const n=re(t),r=e.batch.batchId;try{const s=await bD(n.localStore,e);X1(n,r,null),Y1(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await nl(n,s)}catch(s){await oo(s)}}async function _4(t,e,n){const r=re(t);try{const s=await function(o,l){const u=re(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,l).next(m=>(fe(m!==null,37113),f=m.keys(),u.mutationQueue.removeMutationBatch(c,m))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);X1(r,e,n),Y1(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await nl(r,s)}catch(s){await oo(s)}}function Y1(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function X1(t,e,n){const r=re(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Uf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||J1(t,r)})}function J1(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Im(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Pm(t))}function Ov(t,e,n){for(const r of n)r instanceof q1?(t.Ru.addReference(r.key,e),w4(t,r)):r instanceof K1?(H(Rm,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||J1(t,r.key)):ee(19791,{wu:r})}function w4(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(H(Rm,"New document in limbo: "+n),t.Eu.add(r),Pm(t))}function Pm(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new Y(ye.fromString(e)),r=t.fu.next();t.Au.set(r,new u4(n)),t.du=t.du.insert(n,r),U1(t.remoteStore,new Fr(Ln(c1(n.path)),r,"TargetPurposeLimboResolution",Vc.ce))}}async function nl(t,e,n){const r=re(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const m=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(c){s.push(c);const m=Em.As(u.targetId,c);i.push(m)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(u,c){const f=re(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>F.forEach(c,g=>F.forEach(g.Es,E=>f.persistence.referenceDelegate.addReference(m,g.targetId,E)).next(()=>F.forEach(g.ds,E=>f.persistence.referenceDelegate.removeReference(m,g.targetId,E)))))}catch(m){if(!ao(m))throw m;H(Tm,"Failed to update sequence numbers: "+m)}for(const m of c){const g=m.targetId;if(!m.fromCache){const E=f.Ms.get(g),N=E.snapshotVersion,S=E.withLastLimboFreeSnapshotVersion(N);f.Ms=f.Ms.insert(g,S)}}}(r.localStore,i))}async function x4(t,e){const n=re(t);if(!n.currentUser.isEqual(e)){H(Rm,"User change. New user:",e.toKey());const r=await M1(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(l=>{l.forEach(u=>{u.reject(new W(V.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await nl(n,r.Ls)}}function E4(t,e){const n=re(t),r=n.Au.get(e);if(r&&r.hu)return ue().add(r.key);{let s=ue();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const l=n.Tu.get(o);s=s.unionWith(l.view.nu)}return s}}function Z1(t){const e=re(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Q1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=E4.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=y4.bind(null,e),e.Pu.H_=s4.bind(null,e.eventManager),e.Pu.yu=i4.bind(null,e.eventManager),e}function T4(t){const e=re(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=v4.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=_4.bind(null,e),e}class oc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=qc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return ID(this.persistence,new xD,e.initialUser,this.serializer)}Cu(e){return new j1(xm.mi,this.serializer)}Du(e){return new RD}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}oc.provider={build:()=>new oc};class I4 extends oc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){fe(this.persistence.referenceDelegate instanceof sc,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new oD(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?St.withCacheSize(this.cacheSizeBytes):St.DEFAULT;return new j1(r=>sc.mi(r,n),this.serializer)}}class $f{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Dv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=x4.bind(null,this.syncEngine),await ZD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new t4}()}createDatastore(e){const n=qc(e.databaseInfo.databaseId),r=function(i){return new MD(i)}(e.databaseInfo);return function(i,o,l,u){return new UD(i,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new zD(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Dv(this.syncEngine,n,0),function(){return Sv.v()?new Sv:new PD}())}createSyncEngine(e,n){return function(s,i,o,l,u,c,f){const m=new c4(s,i,o,l,u,c);return f&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=re(s);H(Bs,"RemoteStore shutting down."),i.Ea.add(5),await tl(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}$f.provider={build:()=>new $f};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b4{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):hr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os="FirestoreClient";class k4{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ft.UNAUTHENTICATED,this.clientId=um.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{H(os,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H(os,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Xr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Nm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function fh(t,e){t.asyncQueue.verifyOperationInProgress(),H(os,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await M1(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function jv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await S4(t);H(os,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Nv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Nv(e.remoteStore,s)),t._onlineComponents=e}async function S4(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H(os,"Using user provided OfflineComponentProvider");try{await fh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Hi("Error using user provided cache. Falling back to memory cache: "+n),await fh(t,new oc)}}else H(os,"Using default OfflineComponentProvider"),await fh(t,new I4(void 0));return t._offlineComponents}async function eT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H(os,"Using user provided OnlineComponentProvider"),await jv(t,t._uninitializedComponentsProvider._online)):(H(os,"Using default OnlineComponentProvider"),await jv(t,new $f))),t._onlineComponents}function C4(t){return eT(t).then(e=>e.syncEngine)}async function N4(t){const e=await eT(t),n=e.eventManager;return n.onListen=d4.bind(null,e.syncEngine),n.onUnlisten=p4.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=h4.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=m4.bind(null,e.syncEngine),n}function A4(t,e,n={}){const r=new Xr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,c){const f=new b4({next:g=>{f.Nu(),o.enqueueAndForget(()=>r4(i,m)),g.fromCache&&u.source==="server"?c.reject(new W(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(g)},error:g=>c.reject(g)}),m=new o4(l,f,{includeMetadataChanges:!0,qa:!0});return n4(i,m)}(await N4(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nT="firestore.googleapis.com",Lv=!0;class Vv{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new W(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=nT,this.ssl=Lv}else this.host=e.host,this.ssl=e.ssl??Lv;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=O1;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<sD)throw new W(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}zP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=tT(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Qc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Vv({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Vv(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new PP;switch(r.type){case"firstParty":return new MP(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Mv.get(n);r&&(H("ComponentProvider","Removing Datastore"),Mv.delete(n),r.terminate())}(this),Promise.resolve()}}function R4(t,e,n,r={}){var c;t=zs(t,Qc);const s=ds(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&(Yp(`https://${l}`),Xp("Firestore",!0)),i.host!==nT&&i.host!==l&&Hi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!Fs(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=ft.MOCK_USER;else{f=Xx(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new W(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new ft(g)}t._authCredentials=new DP(new HE(f,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new uo(this.firestore,e,this._query)}}class Ke{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ke(this.firestore,e,this._key)}toJSON(){return{type:Ke._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Xa(n,Ke._jsonSchema))return new Ke(e,r||null,new Y(ye.fromString(n.referencePath)))}}Ke._jsonSchemaVersion="firestore/documentReference/1.0",Ke._jsonSchema={type:$e("string",Ke._jsonSchemaVersion),referencePath:$e("string")};class Jr extends uo{constructor(e,n,r){super(e,n,c1(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ke(this.firestore,null,new Y(e))}withConverter(e){return new Jr(this.firestore,e,this._path)}}function jt(t,e,...n){if(t=Se(t),qE("collection","path",e),t instanceof Qc){const r=ye.fromString(e,...n);return X0(r),new Jr(t,null,r)}{if(!(t instanceof Ke||t instanceof Jr))throw new W(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ye.fromString(e,...n));return X0(r),new Jr(t.firestore,null,r)}}function hn(t,e,...n){if(t=Se(t),arguments.length===1&&(e=um.newId()),qE("doc","path",e),t instanceof Qc){const r=ye.fromString(e,...n);return Y0(r),new Ke(t,null,new Y(r))}{if(!(t instanceof Ke||t instanceof Jr))throw new W(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ye.fromString(e,...n));return Y0(r),new Ke(t.firestore,t instanceof Jr?t.converter:null,new Y(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fv="AsyncQueue";class Uv{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new V1(this,"async_queue_retry"),this._c=()=>{const r=hh();r&&H(Fv,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=hh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=hh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Xr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!ao(e))throw e;H(Fv,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,hr("INTERNAL UNHANDLED ERROR: ",$v(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Cm.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&ee(47125,{Pc:$v(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function $v(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class rl extends Qc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Uv,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Uv(e),this._firestoreClient=void 0,await e}}}function P4(t,e){const n=typeof t=="object"?t:Pc(),r=typeof t=="string"?t:Xu,s=Ys(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Gx("firestore");i&&R4(s,...i)}return s}function rT(t){if(t._terminated)throw new W(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||D4(t),t._firestoreClient}function D4(t){var r,s,i;const e=t._freezeSettings(),n=function(l,u,c,f){return new ZP(l,u,c,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,tT(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new k4(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qt(ot.fromBase64String(e))}catch(n){throw new W(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Qt(ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Qt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Xa(e,Qt._jsonSchema))return Qt.fromBase64String(e.bytes)}}Qt._jsonSchemaVersion="firestore/bytes/1.0",Qt._jsonSchema={type:$e("string",Qt._jsonSchemaVersion),bytes:$e("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Fn._jsonSchemaVersion}}static fromJSON(e){if(Xa(e,Fn._jsonSchema))return new Fn(e.latitude,e.longitude)}}Fn._jsonSchemaVersion="firestore/geoPoint/1.0",Fn._jsonSchema={type:$e("string",Fn._jsonSchemaVersion),latitude:$e("number"),longitude:$e("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Un._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Xa(e,Un._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Un(e.vectorValues);throw new W(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Un._jsonSchemaVersion="firestore/vectorValue/1.0",Un._jsonSchema={type:$e("string",Un._jsonSchemaVersion),vectorValues:$e("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O4=/^__.*__$/;class j4{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ps(e,this.data,this.fieldMask,n,this.fieldTransforms):new Za(e,this.data,n,this.fieldTransforms)}}class sT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ps(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function iT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee(40011,{Ac:t})}}class Om{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Om({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return ac(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(iT(this.Ac)&&O4.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class M4{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||qc(e)}Cc(e,n,r,s=!1){return new Om({Ac:e,methodName:n,Dc:r,path:rt.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function jm(t){const e=t._freezeSettings(),n=qc(t._databaseId);return new M4(t._databaseId,!!e.ignoreUndefinedProperties,n)}function L4(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);Mm("Data must be an object, but it was:",o,r);const l=oT(r,o);let u,c;if(i.merge)u=new Ut(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const g=zf(e,m,n);if(!o.contains(g))throw new W(V.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);lT(f,g)||f.push(g)}u=new Ut(f),c=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,c=o.fieldTransforms;return new j4(new Nt(l),u,c)}class Xc extends Dm{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Xc}}function V4(t,e,n,r){const s=t.Cc(1,e,n);Mm("Data must be an object, but it was:",s,r);const i=[],o=Nt.empty();fs(r,(u,c)=>{const f=Lm(e,u,n);c=Se(c);const m=s.yc(f);if(c instanceof Xc)i.push(f);else{const g=sl(c,m);g!=null&&(i.push(f),o.set(f,g))}});const l=new Ut(i);return new sT(o,l,s.fieldTransforms)}function F4(t,e,n,r,s,i){const o=t.Cc(1,e,n),l=[zf(e,r,n)],u=[s];if(i.length%2!=0)throw new W(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(zf(e,i[g])),u.push(i[g+1]);const c=[],f=Nt.empty();for(let g=l.length-1;g>=0;--g)if(!lT(c,l[g])){const E=l[g];let N=u[g];N=Se(N);const S=o.yc(E);if(N instanceof Xc)c.push(E);else{const I=sl(N,S);I!=null&&(c.push(E),f.set(E,I))}}const m=new Ut(c);return new sT(f,m,o.fieldTransforms)}function U4(t,e,n,r=!1){return sl(n,t.Cc(r?4:3,e))}function sl(t,e){if(aT(t=Se(t)))return Mm("Unsupported field value:",e,t),oT(t,e);if(t instanceof Dm)return function(r,s){if(!iT(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=sl(l,s.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Se(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return E2(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ee.fromDate(r);return{timestampValue:rc(s.serializer,i)}}if(r instanceof Ee){const i=new Ee(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:rc(s.serializer,i)}}if(r instanceof Fn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Qt)return{bytesValue:S1(s.serializer,r._byteString)};if(r instanceof Ke){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:_m(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Un)return function(o,l){return{mapValue:{fields:{[t1]:{stringValue:n1},[Ju]:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Sc("VectorValues must only contain numeric values.");return mm(l.serializer,c)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${Lc(r)}`)}(t,e)}function oT(t,e){const n={};return QE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):fs(t,(r,s)=>{const i=sl(s,e.mc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function aT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ee||t instanceof Fn||t instanceof Qt||t instanceof Ke||t instanceof Dm||t instanceof Un)}function Mm(t,e,n){if(!aT(n)||!KE(n)){const r=Lc(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function zf(t,e,n){if((e=Se(e))instanceof Yc)return e._internalPath;if(typeof e=="string")return Lm(t,e);throw ac("Field path arguments must be of type string or ",t,!1,void 0,n)}const $4=new RegExp("[~\\*/\\[\\]]");function Lm(t,e,n){if(e.search($4)>=0)throw ac(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Yc(...e.split("."))._internalPath}catch{throw ac(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ac(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new W(V.INVALID_ARGUMENT,l+t+u)}function lT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ke(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new z4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Vm("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class z4 extends uT{data(){return super.data()}}function Vm(t,e){return typeof e=="string"?Lm(t,e):e instanceof Yc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B4(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Fm{}class W4 extends Fm{}function Ma(t,e,...n){let r=[];e instanceof Fm&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof Um).length,l=i.filter(u=>u instanceof Jc).length;if(o>1||o>0&&l>0)throw new W(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Jc extends W4{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Jc(e,n,r)}_apply(e){const n=this._parse(e);return cT(e._query,n),new uo(e.firestore,e.converter,Rf(e._query,n))}_parse(e){const n=jm(e.firestore);return function(i,o,l,u,c,f,m){let g;if(c.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new W(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Bv(m,f);const N=[];for(const S of m)N.push(zv(u,i,S));g={arrayValue:{values:N}}}else g=zv(u,i,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Bv(m,f),g=U4(l,o,m,f==="in"||f==="not-in");return Ue.create(c,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Zc(t,e,n){const r=e,s=Vm("where",t);return Jc._create(s,r,n)}class Um extends Fm{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Um(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:yn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const u of l)cT(o,u),o=Rf(o,u)}(e._query,n),new uo(e.firestore,e.converter,Rf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function zv(t,e,n){if(typeof(n=Se(n))=="string"){if(n==="")throw new W(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!d1(e)&&n.indexOf("/")!==-1)throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ye.fromString(n));if(!Y.isDocumentKey(r))throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return iv(t,new Y(r))}if(n instanceof Ke)return iv(t,n._key);throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Lc(n)}.`)}function Bv(t,e){if(!Array.isArray(t)||t.length===0)throw new W(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function cT(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class H4{convertValue(e,n="none"){switch(ss(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(rs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ee(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return fs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[Ju].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>Me(o.doubleValue));return new Un(n)}convertGeoPoint(e){return new Fn(Me(e.latitude),Me(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Uc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ra(e));default:return null}}convertTimestamp(e){const n=ns(e);return new Ee(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ye.fromString(e);fe(D1(r),9688,{name:e});const s=new Pa(r.get(1),r.get(3)),i=new Y(r.popFirst(5));return s.isEqual(n)||hr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q4(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class zl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Oi extends uT{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new mu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Vm("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new W(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Oi._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Oi._jsonSchemaVersion="firestore/documentSnapshot/1.0",Oi._jsonSchema={type:$e("string",Oi._jsonSchemaVersion),bundleSource:$e("string","DocumentSnapshot"),bundleName:$e("string"),bundle:$e("string")};class mu extends Oi{data(e={}){return super.data(e)}}class ji{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new zl(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new mu(this._firestore,this._userDataWriter,r.key,r,new zl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new mu(s._firestore,s._userDataWriter,l.doc.key,l.doc,new zl(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new mu(s._firestore,s._userDataWriter,l.doc.key,l.doc,new zl(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,f=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:K4(l.type),doc:u,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new W(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ji._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=um.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function K4(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee(61501,{type:t})}}ji._jsonSchemaVersion="firestore/querySnapshot/1.0",ji._jsonSchema={type:$e("string",ji._jsonSchemaVersion),bundleSource:$e("string","QuerySnapshot"),bundleName:$e("string"),bundle:$e("string")};class G4 extends H4{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ke(this.firestore,null,n)}}function zn(t){t=zs(t,uo);const e=zs(t.firestore,rl),n=rT(e),r=new G4(e);return B4(t._query),A4(n,t._query).then(s=>new ji(e,r,t,s))}function as(t,e,n,...r){t=zs(t,Ke);const s=zs(t.firestore,rl),i=jm(s);let o;return o=typeof(e=Se(e))=="string"||e instanceof Yc?F4(i,"updateDoc",t._key,e,n,r):V4(i,"updateDoc",t._key,e),$m(s,[o.toMutation(t._key,dn.exists(!0))])}function dT(t){return $m(zs(t.firestore,rl),[new gm(t._key,dn.none())])}function lc(t,e){const n=zs(t.firestore,rl),r=hn(t),s=q4(t.converter,e);return $m(n,[L4(jm(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,dn.exists(!1))]).then(()=>r)}function $m(t,e){return function(r,s){const i=new Xr;return r.asyncQueue.enqueueAndForget(async()=>g4(await C4(r),s,i)),i.promise}(rT(t),e)}(function(e,n=!0){(function(s){io=s})(Xs),mn(new en("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new rl(new OP(r.getProvider("auth-internal")),new LP(o,r.getProvider("app-check-internal")),function(c,f){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new W(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pa(c.options.projectId,f)}(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Ot(q0,K0,e),Ot(q0,K0,"esm2020")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hT="firebasestorage.googleapis.com",fT="storageBucket",Q4=2*60*1e3,Y4=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je extends _n{constructor(e,n,r=0){super(ph(e),`Firebase Storage: ${n} (${ph(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,je.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ph(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Oe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Oe||(Oe={}));function ph(t){return"storage/"+t}function zm(){const t="An unknown error occurred, please check the error payload for server response.";return new je(Oe.UNKNOWN,t)}function X4(t){return new je(Oe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function J4(t){return new je(Oe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Z4(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new je(Oe.UNAUTHENTICATED,t)}function eO(){return new je(Oe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function tO(t){return new je(Oe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function nO(){return new je(Oe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function rO(){return new je(Oe.CANCELED,"User canceled the upload/download.")}function sO(t){return new je(Oe.INVALID_URL,"Invalid URL '"+t+"'.")}function iO(t){return new je(Oe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function oO(){return new je(Oe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+fT+"' property when initializing the app?")}function aO(){return new je(Oe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function lO(){return new je(Oe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function uO(t){return new je(Oe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Bf(t){return new je(Oe.INVALID_ARGUMENT,t)}function pT(){return new je(Oe.APP_DELETED,"The Firebase app was deleted.")}function cO(t){return new je(Oe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function la(t,e){return new je(Oe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Lo(t){throw new je(Oe.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=$t.makeFromUrl(e,n)}catch{return new $t(e,"")}if(r.path==="")return r;throw iO(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function c(D){D.path_=decodeURIComponent(D.path)}const f="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",E=new RegExp(`^https?://${m}/${f}/b/${s}/o${g}`,"i"),N={bucket:1,path:3},S=n===hT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,I="([^?#]*)",v=new RegExp(`^https?://${S}/${s}/${I}`,"i"),_=[{regex:l,indices:u,postModify:i},{regex:E,indices:N,postModify:c},{regex:v,indices:{bucket:1,path:2},postModify:c}];for(let D=0;D<_.length;D++){const M=_[D],U=M.regex.exec(e);if(U){const k=U[M.indices.bucket];let x=U[M.indices.path];x||(x=""),r=new $t(k,x),M.postModify(r);break}}if(r==null)throw sO(e);return r}}class dO{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hO(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function u(){return l===2}let c=!1;function f(...I){c||(c=!0,e.apply(null,I))}function m(I){s=setTimeout(()=>{s=null,t(E,u())},I)}function g(){i&&clearTimeout(i)}function E(I,...v){if(c){g();return}if(I){g(),f.call(null,I,...v);return}if(u()||o){g(),f.call(null,I,...v);return}r<64&&(r*=2);let _;l===1?(l=2,_=0):_=(r+Math.random())*1e3,m(_)}let N=!1;function S(I){N||(N=!0,g(),!c&&(s!==null?(I||(l=2),clearTimeout(s),m(0)):I||(l=1)))}return m(0),i=setTimeout(()=>{o=!0,S(!0)},n),S}function fO(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pO(t){return t!==void 0}function mO(t){return typeof t=="object"&&!Array.isArray(t)}function Bm(t){return typeof t=="string"||t instanceof String}function Wv(t){return Wm()&&t instanceof Blob}function Wm(){return typeof Blob<"u"}function Hv(t,e,n,r){if(r<e)throw Bf(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Bf(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function mT(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Ds;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ds||(Ds={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gO(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yO{constructor(e,n,r,s,i,o,l,u,c,f,m,g=!0,E=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=f,this.connectionFactory_=m,this.retry=g,this.isUsingEmulator=E,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((N,S)=>{this.resolve_=N,this.reject_=S,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Bl(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===Ds.NO_ERROR,u=i.getStatus();if(!l||gO(u,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===Ds.ABORT;r(!1,new Bl(!1,null,f));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new Bl(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());pO(u)?i(u):i()}catch(u){o(u)}else if(l!==null){const u=zm();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(s.canceled){const u=this.appDelete_?pT():rO();o(u)}else{const u=nO();o(u)}};this.canceled_?n(!1,new Bl(!1,null,!0)):this.backoffId_=hO(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&fO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Bl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function vO(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function _O(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function wO(t,e){e&&(t["X-Firebase-GMPID"]=e)}function xO(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function EO(t,e,n,r,s,i,o=!0,l=!1){const u=mT(t.urlParams),c=t.url+u,f=Object.assign({},t.headers);return wO(f,e),vO(f,n),_O(f,i),xO(f,r),new yO(c,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TO(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function IO(...t){const e=TO();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Wm())return new Blob(t);throw new je(Oe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function bO(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kO(t){if(typeof atob>"u")throw uO("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class mh{constructor(e,n){this.data=e,this.contentType=n||null}}function SO(t,e){switch(t){case Cn.RAW:return new mh(gT(e));case Cn.BASE64:case Cn.BASE64URL:return new mh(yT(t,e));case Cn.DATA_URL:return new mh(NO(e),AO(e))}throw zm()}function gT(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function CO(t){let e;try{e=decodeURIComponent(t)}catch{throw la(Cn.DATA_URL,"Malformed data URL.")}return gT(e)}function yT(t,e){switch(t){case Cn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw la(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Cn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw la(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=kO(e)}catch(s){throw s.message.includes("polyfill")?s:la(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class vT{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw la(Cn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=RO(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function NO(t){const e=new vT(t);return e.base64?yT(Cn.BASE64,e.rest):CO(e.rest)}function AO(t){return new vT(t).contentType}function RO(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,n){let r=0,s="";Wv(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Wv(this.data_)){const r=this.data_,s=bO(r,e,n);return s===null?null:new jr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new jr(r,!0)}}static getBlob(...e){if(Wm()){const n=e.map(r=>r instanceof jr?r.data_:r);return new jr(IO.apply(null,n))}else{const n=e.map(o=>Bm(o)?SO(Cn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new jr(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _T(t){let e;try{e=JSON.parse(t)}catch{return null}return mO(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PO(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function DO(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function wT(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OO(t,e){return e}class xt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||OO}}let Wl=null;function jO(t){return!Bm(t)||t.length<2?t:wT(t)}function xT(){if(Wl)return Wl;const t=[];t.push(new xt("bucket")),t.push(new xt("generation")),t.push(new xt("metageneration")),t.push(new xt("name","fullPath",!0));function e(i,o){return jO(o)}const n=new xt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new xt("size");return s.xform=r,t.push(s),t.push(new xt("timeCreated")),t.push(new xt("updated")),t.push(new xt("md5Hash",null,!0)),t.push(new xt("cacheControl",null,!0)),t.push(new xt("contentDisposition",null,!0)),t.push(new xt("contentEncoding",null,!0)),t.push(new xt("contentLanguage",null,!0)),t.push(new xt("contentType",null,!0)),t.push(new xt("metadata","customMetadata",!0)),Wl=t,Wl}function MO(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new $t(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function LO(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return MO(r,t),r}function ET(t,e,n){const r=_T(e);return r===null?null:LO(t,r,n)}function VO(t,e,n,r){const s=_T(e);if(s===null||!Bm(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(c=>{const f=t.bucket,m=t.fullPath,g="/b/"+o(f)+"/o/"+o(m),E=ed(g,n,r),N=mT({alt:"media",token:c});return E+N})[0]}function FO(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Hm{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TT(t){if(!t)throw zm()}function UO(t,e){function n(r,s){const i=ET(t,s,e);return TT(i!==null),i}return n}function $O(t,e){function n(r,s){const i=ET(t,s,e);return TT(i!==null),VO(i,s,t.host,t._protocol)}return n}function IT(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=eO():s=Z4():n.getStatus()===402?s=J4(t.bucket):n.getStatus()===403?s=tO(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function bT(t){const e=IT(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=X4(t.path)),i.serverResponse=s.serverResponse,i}return n}function zO(t,e,n){const r=e.fullServerUrl(),s=ed(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new Hm(s,i,$O(t,n),o);return l.errorHandler=bT(e),l}function BO(t,e){const n=e.fullServerUrl(),r=ed(n,t.host,t._protocol),s="DELETE",i=t.maxOperationRetryTime;function o(u,c){}const l=new Hm(r,s,o,i);return l.successCodes=[200,204],l.errorHandler=bT(e),l}function WO(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function HO(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=WO(null,e)),r}function qO(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let _="";for(let D=0;D<2;D++)_=_+Math.random().toString().slice(2);return _}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const c=HO(e,r,s),f=FO(c,n),m="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,g=`\r
--`+u+"--",E=jr.getBlob(m,r,g);if(E===null)throw aO();const N={name:c.fullPath},S=ed(i,t.host,t._protocol),I="POST",v=t.maxUploadRetryTime,y=new Hm(S,I,UO(t,n),v);return y.urlParams=N,y.headers=o,y.body=E.uploadData(),y.errorHandler=IT(e),y}class KO{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ds.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ds.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ds.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s,i){if(this.sent_)throw Lo("cannot .send() more than once");if(ds(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Lo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Lo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Lo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Lo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class GO extends KO{initXhr(){this.xhr_.responseType="text"}}function qm(){return new GO}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e,n){this._service=e,n instanceof $t?this._location=n:this._location=$t.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ws(e,n)}get root(){const e=new $t(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return wT(this._location.path)}get storage(){return this._service}get parent(){const e=PO(this._location.path);if(e===null)return null;const n=new $t(this._location.bucket,e);return new Ws(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw cO(e)}}function QO(t,e,n){t._throwIfRoot("uploadBytes");const r=qO(t.storage,t._location,xT(),new jr(e,!0),n);return t.storage.makeRequestWithTokens(r,qm).then(s=>({metadata:s,ref:t}))}function YO(t){t._throwIfRoot("getDownloadURL");const e=zO(t.storage,t._location,xT());return t.storage.makeRequestWithTokens(e,qm).then(n=>{if(n===null)throw lO();return n})}function XO(t){t._throwIfRoot("deleteObject");const e=BO(t.storage,t._location);return t.storage.makeRequestWithTokens(e,qm)}function JO(t,e){const n=DO(t._location.path,e),r=new $t(t._location.bucket,n);return new Ws(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZO(t){return/^[A-Za-z]+:\/\//.test(t)}function ej(t,e){return new Ws(t,e)}function kT(t,e){if(t instanceof Km){const n=t;if(n._bucket==null)throw oO();const r=new Ws(n,n._bucket);return e!=null?kT(r,e):r}else return e!==void 0?JO(t,e):t}function tj(t,e){if(e&&ZO(e)){if(t instanceof Km)return ej(t,e);throw Bf("To use ref(service, url), the first argument must be a Storage instance.")}else return kT(t,e)}function qv(t,e){const n=e==null?void 0:e[fT];return n==null?null:$t.makeFromBucketSpec(n,t)}function nj(t,e,n,r={}){t.host=`${e}:${n}`;const s=ds(e);s&&(Yp(`https://${t.host}/b`),Xp("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Xx(i,t.app.options.projectId))}class Km{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=hT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Q4,this._maxUploadRetryTime=Y4,this._requests=new Set,s!=null?this._bucket=$t.makeFromBucketSpec(s,this._host):this._bucket=qv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=$t.makeFromBucketSpec(this._url,e):this._bucket=qv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Hv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Hv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Gt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ws(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new dO(pT());{const o=EO(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Kv="@firebase/storage",Gv="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ST="storage";function rj(t,e,n){return t=Se(t),QO(t,e,n)}function sj(t){return t=Se(t),YO(t)}function ij(t){return t=Se(t),XO(t)}function Qv(t,e){return t=Se(t),tj(t,e)}function oj(t=Pc(),e){t=Se(t);const r=Ys(t,ST).getImmediate({identifier:e}),s=Gx("storage");return s&&aj(r,...s),r}function aj(t,e,n,r={}){nj(t,e,n,r)}function lj(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Km(n,r,s,e,Xs)}function uj(){mn(new en(ST,lj,"PUBLIC").setMultipleInstances(!0)),Ot(Kv,Gv,""),Ot(Kv,Gv,"esm2020")}uj();const CT="@firebase/installations",Gm="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT=1e4,AT=`w:${Gm}`,RT="FIS_v2",cj="https://firebaseinstallations.googleapis.com/v1",dj=60*60*1e3,hj="installations",fj="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pj={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Hs=new Qs(hj,fj,pj);function PT(t){return t instanceof _n&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DT({projectId:t}){return`${cj}/projects/${t}/installations`}function OT(t){return{token:t.token,requestStatus:2,expiresIn:gj(t.expiresIn),creationTime:Date.now()}}async function jT(t,e){const r=(await e.json()).error;return Hs.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function MT({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function mj(t,{refreshToken:e}){const n=MT(t);return n.append("Authorization",yj(e)),n}async function LT(t){const e=await t();return e.status>=500&&e.status<600?t():e}function gj(t){return Number(t.replace("s","000"))}function yj(t){return`${RT} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vj({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=DT(t),s=MT(t),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={fid:n,authVersion:RT,appId:t.appId,sdkVersion:AT},l={method:"POST",headers:s,body:JSON.stringify(o)},u=await LT(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:OT(c.authToken)}}else throw await jT("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VT(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _j(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wj=/^[cdef][\w-]{21}$/,Wf="";function xj(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Ej(t);return wj.test(n)?n:Wf}catch{return Wf}}function Ej(t){return _j(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FT=new Map;function UT(t,e){const n=td(t);$T(n,e),Tj(n,e)}function $T(t,e){const n=FT.get(t);if(n)for(const r of n)r(e)}function Tj(t,e){const n=Ij();n&&n.postMessage({key:t,fid:e}),bj()}let As=null;function Ij(){return!As&&"BroadcastChannel"in self&&(As=new BroadcastChannel("[Firebase] FID Change"),As.onmessage=t=>{$T(t.data.key,t.data.fid)}),As}function bj(){FT.size===0&&As&&(As.close(),As=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kj="firebase-installations-database",Sj=1,qs="firebase-installations-store";let gh=null;function Qm(){return gh||(gh=Rc(kj,Sj,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(qs)}}})),gh}async function uc(t,e){const n=td(t),s=(await Qm()).transaction(qs,"readwrite"),i=s.objectStore(qs),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&UT(t,e.fid),e}async function zT(t){const e=td(t),r=(await Qm()).transaction(qs,"readwrite");await r.objectStore(qs).delete(e),await r.done}async function nd(t,e){const n=td(t),s=(await Qm()).transaction(qs,"readwrite"),i=s.objectStore(qs),o=await i.get(n),l=e(o);return l===void 0?await i.delete(n):await i.put(l,n),await s.done,l&&(!o||o.fid!==l.fid)&&UT(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ym(t){let e;const n=await nd(t.appConfig,r=>{const s=Cj(r),i=Nj(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===Wf?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Cj(t){const e=t||{fid:xj(),registrationStatus:0};return BT(e)}function Nj(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Hs.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Aj(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Rj(t)}:{installationEntry:e}}async function Aj(t,e){try{const n=await vj(t,e);return uc(t.appConfig,n)}catch(n){throw PT(n)&&n.customData.serverCode===409?await zT(t.appConfig):await uc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Rj(t){let e=await Yv(t.appConfig);for(;e.registrationStatus===1;)await VT(100),e=await Yv(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Ym(t);return r||n}return e}function Yv(t){return nd(t,e=>{if(!e)throw Hs.create("installation-not-found");return BT(e)})}function BT(t){return Pj(t)?{fid:t.fid,registrationStatus:0}:t}function Pj(t){return t.registrationStatus===1&&t.registrationTime+NT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dj({appConfig:t,heartbeatServiceProvider:e},n){const r=Oj(t,n),s=mj(t,n),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={installation:{sdkVersion:AT,appId:t.appId}},l={method:"POST",headers:s,body:JSON.stringify(o)},u=await LT(()=>fetch(r,l));if(u.ok){const c=await u.json();return OT(c)}else throw await jT("Generate Auth Token",u)}function Oj(t,{fid:e}){return`${DT(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xm(t,e=!1){let n;const r=await nd(t.appConfig,i=>{if(!WT(i))throw Hs.create("not-registered");const o=i.authToken;if(!e&&Lj(o))return i;if(o.requestStatus===1)return n=jj(t,e),i;{if(!navigator.onLine)throw Hs.create("app-offline");const l=Fj(i);return n=Mj(t,l),l}});return n?await n:r.authToken}async function jj(t,e){let n=await Xv(t.appConfig);for(;n.authToken.requestStatus===1;)await VT(100),n=await Xv(t.appConfig);const r=n.authToken;return r.requestStatus===0?Xm(t,e):r}function Xv(t){return nd(t,e=>{if(!WT(e))throw Hs.create("not-registered");const n=e.authToken;return Uj(n)?{...e,authToken:{requestStatus:0}}:e})}async function Mj(t,e){try{const n=await Dj(t,e),r={...e,authToken:n};return await uc(t.appConfig,r),n}catch(n){if(PT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await zT(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await uc(t.appConfig,r)}throw n}}function WT(t){return t!==void 0&&t.registrationStatus===2}function Lj(t){return t.requestStatus===2&&!Vj(t)}function Vj(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+dj}function Fj(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function Uj(t){return t.requestStatus===1&&t.requestTime+NT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $j(t){const e=t,{installationEntry:n,registrationPromise:r}=await Ym(e);return r?r.catch(console.error):Xm(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zj(t,e=!1){const n=t;return await Bj(n),(await Xm(n,e)).token}async function Bj(t){const{registrationPromise:e}=await Ym(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wj(t){if(!t||!t.options)throw yh("App Configuration");if(!t.name)throw yh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw yh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function yh(t){return Hs.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HT="installations",Hj="installations-internal",qj=t=>{const e=t.getProvider("app").getImmediate(),n=Wj(e),r=Ys(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Kj=t=>{const e=t.getProvider("app").getImmediate(),n=Ys(e,HT).getImmediate();return{getId:()=>$j(n),getToken:s=>zj(n,s)}};function Gj(){mn(new en(HT,qj,"PUBLIC")),mn(new en(Hj,Kj,"PRIVATE"))}Gj();Ot(CT,Gm);Ot(CT,Gm,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qj="/firebase-messaging-sw.js",Yj="/firebase-cloud-messaging-push-scope",qT="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Xj="https://fcmregistrations.googleapis.com/v1",KT="google.c.a.c_id",Jj="google.c.a.c_l",Zj="google.c.a.ts",eM="google.c.a.e",Jv=1e4;var Zv;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Zv||(Zv={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var La;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(La||(La={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function tM(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),s=new Uint8Array(r.length);for(let i=0;i<r.length;++i)s[i]=r.charCodeAt(i);return s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh="fcm_token_details_db",nM=5,e_="fcm_token_object_Store";async function rM(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(i=>i.name).includes(vh))return null;let e=null;return(await Rc(vh,nM,{upgrade:async(r,s,i,o)=>{if(s<2||!r.objectStoreNames.contains(e_))return;const l=o.objectStore(e_),u=await l.index("fcmSenderId").get(t);if(await l.clear(),!!u){if(s===2){const c=u;if(!c.auth||!c.p256dh||!c.endpoint)return;e={token:c.fcmToken,createTime:c.createTime??Date.now(),subscriptionOptions:{auth:c.auth,p256dh:c.p256dh,endpoint:c.endpoint,swScope:c.swScope,vapidKey:typeof c.vapidKey=="string"?c.vapidKey:Gn(c.vapidKey)}}}else if(s===3){const c=u;e={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:Gn(c.auth),p256dh:Gn(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:Gn(c.vapidKey)}}}else if(s===4){const c=u;e={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:Gn(c.auth),p256dh:Gn(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:Gn(c.vapidKey)}}}}}})).close(),await sh(vh),await sh("fcm_vapid_details_db"),await sh("undefined"),sM(e)?e:null}function sM(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iM="firebase-messaging-database",oM=1,Va="firebase-messaging-store";let _h=null;function GT(){return _h||(_h=Rc(iM,oM,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Va)}}})),_h}async function aM(t){const e=QT(t),r=await(await GT()).transaction(Va).objectStore(Va).get(e);if(r)return r;{const s=await rM(t.appConfig.senderId);if(s)return await Jm(t,s),s}}async function Jm(t,e){const n=QT(t),s=(await GT()).transaction(Va,"readwrite");return await s.objectStore(Va).put(e,n),await s.done,e}function QT({appConfig:t}){return t.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lM={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},It=new Qs("messaging","Messaging",lM);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uM(t,e){const n=await eg(t),r=YT(e),s={method:"POST",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(Zm(t.appConfig),s)).json()}catch(o){throw It.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw It.create("token-subscribe-failed",{errorInfo:o})}if(!i.token)throw It.create("token-subscribe-no-token");return i.token}async function cM(t,e){const n=await eg(t),r=YT(e.subscriptionOptions),s={method:"PATCH",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(`${Zm(t.appConfig)}/${e.token}`,s)).json()}catch(o){throw It.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw It.create("token-update-failed",{errorInfo:o})}if(!i.token)throw It.create("token-update-no-token");return i.token}async function dM(t,e){const r={method:"DELETE",headers:await eg(t)};try{const i=await(await fetch(`${Zm(t.appConfig)}/${e}`,r)).json();if(i.error){const o=i.error.message;throw It.create("token-unsubscribe-failed",{errorInfo:o})}}catch(s){throw It.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function Zm({projectId:t}){return`${Xj}/projects/${t}/registrations`}async function eg({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function YT({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const s={web:{endpoint:n,auth:e,p256dh:t}};return r!==qT&&(s.web.applicationPubKey=r),s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hM=7*24*60*60*1e3;async function fM(t){const e=await mM(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:Gn(e.getKey("auth")),p256dh:Gn(e.getKey("p256dh"))},r=await aM(t.firebaseDependencies);if(r){if(gM(r.subscriptionOptions,n))return Date.now()>=r.createTime+hM?pM(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await dM(t.firebaseDependencies,r.token)}catch(s){console.warn(s)}return t_(t.firebaseDependencies,n)}else return t_(t.firebaseDependencies,n)}async function pM(t,e){try{const n=await cM(t.firebaseDependencies,e),r={...e,token:n,createTime:Date.now()};return await Jm(t.firebaseDependencies,r),n}catch(n){throw n}}async function t_(t,e){const r={token:await uM(t,e),createTime:Date.now(),subscriptionOptions:e};return await Jm(t,r),r.token}async function mM(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:tM(e)})}function gM(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,s=e.auth===t.auth,i=e.p256dh===t.p256dh;return n&&r&&s&&i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n_(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return yM(e,t),vM(e,t),_M(e,t),e}function yM(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const s=e.notification.image;s&&(t.notification.image=s);const i=e.notification.icon;i&&(t.notification.icon=i)}function vM(t,e){e.data&&(t.data=e.data)}function _M(t,e){var s,i,o,l;if(!e.fcmOptions&&!((s=e.notification)!=null&&s.click_action))return;t.fcmOptions={};const n=((i=e.fcmOptions)==null?void 0:i.link)??((o=e.notification)==null?void 0:o.click_action);n&&(t.fcmOptions.link=n);const r=(l=e.fcmOptions)==null?void 0:l.analytics_label;r&&(t.fcmOptions.analyticsLabel=r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wM(t){return typeof t=="object"&&!!t&&KT in t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xM(t){if(!t||!t.options)throw wh("App Configuration Object");if(!t.name)throw wh("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw wh(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function wh(t){return It.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EM{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=xM(e);this.firebaseDependencies={app:e,appConfig:s,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TM(t){try{t.swRegistration=await navigator.serviceWorker.register(Qj,{scope:Yj}),t.swRegistration.update().catch(()=>{}),await IM(t.swRegistration)}catch(e){throw It.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function IM(t){return new Promise((e,n)=>{const r=setTimeout(()=>n(new Error(`Service worker not registered after ${Jv} ms`)),Jv),s=t.installing||t.waiting;t.active?(clearTimeout(r),e()):s?s.onstatechange=i=>{var o;((o=i.target)==null?void 0:o.state)==="activated"&&(s.onstatechange=null,clearTimeout(r),e())}:(clearTimeout(r),n(new Error("No incoming service worker found.")))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bM(t,e){if(!e&&!t.swRegistration&&await TM(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw It.create("invalid-sw-registration");t.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kM(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=qT)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SM(t,e){if(!navigator)throw It.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw It.create("permission-blocked");return await kM(t,e==null?void 0:e.vapidKey),await bM(t,e==null?void 0:e.serviceWorkerRegistration),fM(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CM(t,e,n){const r=NM(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[KT],message_name:n[Jj],message_time:n[Zj],message_device_time:Math.floor(Date.now()/1e3)})}function NM(t){switch(t){case La.NOTIFICATION_CLICKED:return"notification_open";case La.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AM(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===La.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(n_(n)):t.onMessageHandler.next(n_(n)));const r=n.data;wM(r)&&r[eM]==="1"&&await CM(t,n.messageType,r)}const r_="@firebase/messaging",s_="0.12.23";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RM=t=>{const e=new EM(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>AM(e,n)),e},PM=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>SM(e,r)}};function DM(){mn(new en("messaging",RM,"PUBLIC")),mn(new en("messaging-internal",PM,"PRIVATE")),Ot(r_,s_),Ot(r_,s_,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XT(){try{await Zx()}catch{return!1}return typeof window<"u"&&Jx()&&tN()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OM(t=Pc()){return XT().then(e=>{if(!e)throw It.create("unsupported-browser")},e=>{throw It.create("indexed-db-unsupported")}),Ys(Se(t),"messaging").getImmediate()}DM();const jM={apiKey:"AIzaSyBB8lfGEwxX18XWyvKn9KNT2Yt6rFVGwIo",authDomain:"coffee-delivery-app-b29f8.firebaseapp.com",projectId:"coffee-delivery-app-b29f8",storageBucket:"coffee-delivery-app-b29f8.firebasestorage.app",messagingSenderId:"545597275258",appId:"1:545597275258:web:b3eb28b65cc7b534fdcfc3"},rd=nE(jM),xh=CP(rd),be=P4(rd),i_=oj(rd);(async()=>await XT()&&OM(rd))();const JT=R.createContext(void 0);function MM({children:t}){const[e,n]=R.useState(null),[r,s]=R.useState(!0);R.useEffect(()=>gR(xh,c=>{n(c),s(!1)}),[]);const i=async(u,c)=>{await fR(xh,u,c)},o=async()=>{await yR(xh)},l=R.useMemo(()=>({user:e,loading:r,signIn:i,signOut:o}),[e,r]);return d.jsx(JT.Provider,{value:l,children:t})}function yr(){const t=R.useContext(JT);if(!t)throw new Error("useAuth must be used within AuthProvider");return t}let LM={data:""},VM=t=>{if(typeof window=="object"){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||LM},FM=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,UM=/\/\*[^]*?\*\/|  +/g,o_=/\n+/g,Mr=(t,e)=>{let n="",r="",s="";for(let i in t){let o=t[i];i[0]=="@"?i[1]=="i"?n=i+" "+o+";":r+=i[1]=="f"?Mr(o,i):i+"{"+Mr(o,i[1]=="k"?"":e)+"}":typeof o=="object"?r+=Mr(o,e?e.replace(/([^,])+/g,l=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,u=>/&/.test(u)?u.replace(/&/g,l):l?l+" "+u:u)):i):o!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=Mr.p?Mr.p(i,o):i+":"+o+";")}return n+(e&&s?e+"{"+s+"}":s)+r},Hn={},ZT=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+ZT(t[n]);return e}return t},$M=(t,e,n,r,s)=>{let i=ZT(t),o=Hn[i]||(Hn[i]=(u=>{let c=0,f=11;for(;c<u.length;)f=101*f+u.charCodeAt(c++)>>>0;return"go"+f})(i));if(!Hn[o]){let u=i!==t?t:(c=>{let f,m,g=[{}];for(;f=FM.exec(c.replace(UM,""));)f[4]?g.shift():f[3]?(m=f[3].replace(o_," ").trim(),g.unshift(g[0][m]=g[0][m]||{})):g[0][f[1]]=f[2].replace(o_," ").trim();return g[0]})(t);Hn[o]=Mr(s?{["@keyframes "+o]:u}:u,n?"":"."+o)}let l=n&&Hn.g?Hn.g:null;return n&&(Hn.g=Hn[o]),((u,c,f,m)=>{m?c.data=c.data.replace(m,u):c.data.indexOf(u)===-1&&(c.data=f?u+c.data:c.data+u)})(Hn[o],e,r,l),o},zM=(t,e,n)=>t.reduce((r,s,i)=>{let o=e[i];if(o&&o.call){let l=o(n),u=l&&l.props&&l.props.className||/^go/.test(l)&&l;o=u?"."+u:l&&typeof l=="object"?l.props?"":Mr(l,""):l===!1?"":l}return r+s+(o??"")},"");function sd(t){let e=this||{},n=t.call?t(e.p):t;return $M(n.unshift?n.raw?zM(n,[].slice.call(arguments,1),e.p):n.reduce((r,s)=>Object.assign(r,s&&s.call?s(e.p):s),{}):n,VM(e.target),e.g,e.o,e.k)}let eI,Hf,qf;sd.bind({g:1});let pr=sd.bind({k:1});function BM(t,e,n,r){Mr.p=e,eI=t,Hf=n,qf=r}function ms(t,e){let n=this||{};return function(){let r=arguments;function s(i,o){let l=Object.assign({},i),u=l.className||s.className;n.p=Object.assign({theme:Hf&&Hf()},l),n.o=/ *go\d+/.test(u),l.className=sd.apply(n,r)+(u?" "+u:"");let c=t;return t[0]&&(c=l.as||t,delete l.as),qf&&c[0]&&qf(l),eI(c,l)}return s}}var WM=t=>typeof t=="function",cc=(t,e)=>WM(t)?t(e):t,HM=(()=>{let t=0;return()=>(++t).toString()})(),tI=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),qM=20,tg="default",nI=(t,e)=>{let{toastLimit:n}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,n)};case 1:return{...t,toasts:t.toasts.map(o=>o.id===e.toast.id?{...o,...e.toast}:o)};case 2:let{toast:r}=e;return nI(t,{type:t.toasts.find(o=>o.id===r.id)?1:0,toast:r});case 3:let{toastId:s}=e;return{...t,toasts:t.toasts.map(o=>o.id===s||s===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let i=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+i}))}}},gu=[],rI={toasts:[],pausedAt:void 0,settings:{toastLimit:qM}},Nn={},sI=(t,e=tg)=>{Nn[e]=nI(Nn[e]||rI,t),gu.forEach(([n,r])=>{n===e&&r(Nn[e])})},iI=t=>Object.keys(Nn).forEach(e=>sI(t,e)),KM=t=>Object.keys(Nn).find(e=>Nn[e].toasts.some(n=>n.id===t)),id=(t=tg)=>e=>{sI(e,t)},GM={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},QM=(t={},e=tg)=>{let[n,r]=R.useState(Nn[e]||rI),s=R.useRef(Nn[e]);R.useEffect(()=>(s.current!==Nn[e]&&r(Nn[e]),gu.push([e,r]),()=>{let o=gu.findIndex(([l])=>l===e);o>-1&&gu.splice(o,1)}),[e]);let i=n.toasts.map(o=>{var l,u,c;return{...t,...t[o.type],...o,removeDelay:o.removeDelay||((l=t[o.type])==null?void 0:l.removeDelay)||(t==null?void 0:t.removeDelay),duration:o.duration||((u=t[o.type])==null?void 0:u.duration)||(t==null?void 0:t.duration)||GM[o.type],style:{...t.style,...(c=t[o.type])==null?void 0:c.style,...o.style}}});return{...n,toasts:i}},YM=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||HM()}),il=t=>(e,n)=>{let r=YM(e,t,n);return id(r.toasterId||KM(r.id))({type:2,toast:r}),r.id},We=(t,e)=>il("blank")(t,e);We.error=il("error");We.success=il("success");We.loading=il("loading");We.custom=il("custom");We.dismiss=(t,e)=>{let n={type:3,toastId:t};e?id(e)(n):iI(n)};We.dismissAll=t=>We.dismiss(void 0,t);We.remove=(t,e)=>{let n={type:4,toastId:t};e?id(e)(n):iI(n)};We.removeAll=t=>We.remove(void 0,t);We.promise=(t,e,n)=>{let r=We.loading(e.loading,{...n,...n==null?void 0:n.loading});return typeof t=="function"&&(t=t()),t.then(s=>{let i=e.success?cc(e.success,s):void 0;return i?We.success(i,{id:r,...n,...n==null?void 0:n.success}):We.dismiss(r),s}).catch(s=>{let i=e.error?cc(e.error,s):void 0;i?We.error(i,{id:r,...n,...n==null?void 0:n.error}):We.dismiss(r)}),t};var XM=1e3,JM=(t,e="default")=>{let{toasts:n,pausedAt:r}=QM(t,e),s=R.useRef(new Map).current,i=R.useCallback((m,g=XM)=>{if(s.has(m))return;let E=setTimeout(()=>{s.delete(m),o({type:4,toastId:m})},g);s.set(m,E)},[]);R.useEffect(()=>{if(r)return;let m=Date.now(),g=n.map(E=>{if(E.duration===1/0)return;let N=(E.duration||0)+E.pauseDuration-(m-E.createdAt);if(N<0){E.visible&&We.dismiss(E.id);return}return setTimeout(()=>We.dismiss(E.id,e),N)});return()=>{g.forEach(E=>E&&clearTimeout(E))}},[n,r,e]);let o=R.useCallback(id(e),[e]),l=R.useCallback(()=>{o({type:5,time:Date.now()})},[o]),u=R.useCallback((m,g)=>{o({type:1,toast:{id:m,height:g}})},[o]),c=R.useCallback(()=>{r&&o({type:6,time:Date.now()})},[r,o]),f=R.useCallback((m,g)=>{let{reverseOrder:E=!1,gutter:N=8,defaultPosition:S}=g||{},I=n.filter(_=>(_.position||S)===(m.position||S)&&_.height),v=I.findIndex(_=>_.id===m.id),y=I.filter((_,D)=>D<v&&_.visible).length;return I.filter(_=>_.visible).slice(...E?[y+1]:[0,y]).reduce((_,D)=>_+(D.height||0)+N,0)},[n]);return R.useEffect(()=>{n.forEach(m=>{if(m.dismissed)i(m.id,m.removeDelay);else{let g=s.get(m.id);g&&(clearTimeout(g),s.delete(m.id))}})},[n,i]),{toasts:n,handlers:{updateHeight:u,startPause:l,endPause:c,calculateOffset:f}}},ZM=pr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,eL=pr`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,tL=pr`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,nL=ms("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ZM} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${eL} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${tL} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,rL=pr`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,sL=ms("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${rL} 1s linear infinite;
`,iL=pr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,oL=pr`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,aL=ms("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${iL} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${oL} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,lL=ms("div")`
  position: absolute;
`,uL=ms("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,cL=pr`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,dL=ms("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${cL} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,hL=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?R.createElement(dL,null,e):e:n==="blank"?null:R.createElement(uL,null,R.createElement(sL,{...r}),n!=="loading"&&R.createElement(lL,null,n==="error"?R.createElement(nL,{...r}):R.createElement(aL,{...r})))},fL=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,pL=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,mL="0%{opacity:0;} 100%{opacity:1;}",gL="0%{opacity:1;} 100%{opacity:0;}",yL=ms("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,vL=ms("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,_L=(t,e)=>{let n=t.includes("top")?1:-1,[r,s]=tI()?[mL,gL]:[fL(n),pL(n)];return{animation:e?`${pr(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${pr(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},wL=R.memo(({toast:t,position:e,style:n,children:r})=>{let s=t.height?_L(t.position||e||"top-center",t.visible):{opacity:0},i=R.createElement(hL,{toast:t}),o=R.createElement(vL,{...t.ariaProps},cc(t.message,t));return R.createElement(yL,{className:t.className,style:{...s,...n,...t.style}},typeof r=="function"?r({icon:i,message:o}):R.createElement(R.Fragment,null,i,o))});BM(R.createElement);var xL=({id:t,className:e,style:n,onHeightUpdate:r,children:s})=>{let i=R.useCallback(o=>{if(o){let l=()=>{let u=o.getBoundingClientRect().height;r(t,u)};l(),new MutationObserver(l).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return R.createElement("div",{ref:i,className:e,style:n},s)},EL=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},s=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:tI()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...s}},TL=sd`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Hl=16,IL=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:s,toasterId:i,containerStyle:o,containerClassName:l})=>{let{toasts:u,handlers:c}=JM(n,i);return R.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:Hl,left:Hl,right:Hl,bottom:Hl,pointerEvents:"none",...o},className:l,onMouseEnter:c.startPause,onMouseLeave:c.endPause},u.map(f=>{let m=f.position||e,g=c.calculateOffset(f,{reverseOrder:t,gutter:r,defaultPosition:e}),E=EL(m,g);return R.createElement(xL,{id:f.id,key:f.id,onHeightUpdate:c.updateHeight,className:f.visible?TL:"",style:E},f.type==="custom"?cc(f.message,f):s?s(f):R.createElement(wL,{toast:f,position:m}))}))},J=We;function bL(){const[t,e]=R.useState(""),[n,r]=R.useState(""),[s,i]=R.useState(!1),{signIn:o}=yr(),l=Wn(),u=tn(),c=async f=>{var m,g;f.preventDefault(),i(!0);try{await o(t,n);const E=((g=(m=u.state)==null?void 0:m.from)==null?void 0:g.pathname)||"/";l(E,{replace:!0})}catch(E){J.error("Error al iniciar sesión. Verifica tus credenciales."),console.error(E)}finally{i(!1)}};return d.jsx("div",{className:"min-h-screen bg-gradient-to-b from-pink-400 to-pink-500 flex flex-col px-6 py-8",style:{fontFamily:"'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},children:d.jsxs("div",{className:"max-w-md mx-auto w-full flex-1 flex flex-col",children:[d.jsxs("div",{className:"text-center mb-16 mt-12",children:[d.jsx("div",{className:"mb-6",children:d.jsxs("div",{className:"inline-block",children:[d.jsx("div",{className:"flex items-center justify-center gap-1 mb-2",children:d.jsx("span",{className:"text-6xl sm:text-7xl font-bold text-white leading-none",children:"NS"})}),d.jsx("div",{className:"h-1 bg-white/80 rounded-full"})]})}),d.jsx("h2",{className:"text-2xl sm:text-3xl font-light text-white mb-2 tracking-wide",children:"Night Shift Assistant"}),d.jsx("p",{className:"text-white/90 text-sm tracking-wide",children:"Tu café, siempre listo"})]}),d.jsxs("div",{className:"flex-1 flex flex-col justify-center",children:[d.jsxs("div",{className:"mb-8",children:[d.jsx("h3",{className:"text-3xl font-semibold text-white mb-2",children:"Hola, Enfermera"}),d.jsx("p",{className:"text-white/90 text-base",children:"Ingresa tus credenciales para continuar"})]}),d.jsxs("form",{onSubmit:c,className:"space-y-4",children:[d.jsx("input",{type:"email",value:t,onChange:f=>e(f.target.value),placeholder:"User",className:"w-full px-6 py-4 bg-white/95 text-gray-800 placeholder-gray-500 rounded-full text-base focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all",required:!0}),d.jsx("input",{type:"password",value:n,onChange:f=>r(f.target.value),placeholder:"Password",className:"w-full px-6 py-4 bg-white/95 text-gray-800 placeholder-gray-500 rounded-full text-base focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all",required:!0}),d.jsx("button",{type:"submit",disabled:s,className:"w-full bg-white text-pink-600 py-4 px-6 rounded-full font-medium text-base hover:bg-white/90 active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-6",children:s?"Loading...":"Login"})]}),d.jsx("div",{className:"text-center mt-8",children:d.jsxs("p",{className:"text-white/90 text-sm",children:["Don't have an account?"," ",d.jsx("button",{className:"text-white underline hover:text-white/80 transition-colors",children:"Sign Up Here"})]})})]}),d.jsx("div",{className:"h-8"})]})})}const oI=6048e5,kL=864e5,a_=Symbol.for("constructDateFrom");function mr(t,e){return typeof t=="function"?t(e):t&&typeof t=="object"&&a_ in t?t[a_](e):t instanceof Date?new t.constructor(e):new Date(e)}function nn(t,e){return mr(e||t,t)}function l_(t,e,n){const r=nn(t,n==null?void 0:n.in);return isNaN(e)?mr(t,NaN):(r.setDate(r.getDate()+e),r)}let SL={};function od(){return SL}function Fa(t,e){var l,u,c,f;const n=od(),r=(e==null?void 0:e.weekStartsOn)??((u=(l=e==null?void 0:e.locale)==null?void 0:l.options)==null?void 0:u.weekStartsOn)??n.weekStartsOn??((f=(c=n.locale)==null?void 0:c.options)==null?void 0:f.weekStartsOn)??0,s=nn(t,e==null?void 0:e.in),i=s.getDay(),o=(i<r?7:0)+i-r;return s.setDate(s.getDate()-o),s.setHours(0,0,0,0),s}function dc(t,e){return Fa(t,{...e,weekStartsOn:1})}function aI(t,e){const n=nn(t,e==null?void 0:e.in),r=n.getFullYear(),s=mr(n,0);s.setFullYear(r+1,0,4),s.setHours(0,0,0,0);const i=dc(s),o=mr(n,0);o.setFullYear(r,0,4),o.setHours(0,0,0,0);const l=dc(o);return n.getTime()>=i.getTime()?r+1:n.getTime()>=l.getTime()?r:r-1}function u_(t){const e=nn(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function CL(t,...e){const n=mr.bind(null,e.find(r=>typeof r=="object"));return e.map(n)}function Yn(t,e){const n=nn(t,e==null?void 0:e.in);return n.setHours(0,0,0,0),n}function NL(t,e,n){const[r,s]=CL(n==null?void 0:n.in,t,e),i=Yn(r),o=Yn(s),l=+i-u_(i),u=+o-u_(o);return Math.round((l-u)/kL)}function AL(t,e){const n=aI(t,e),r=mr(t,0);return r.setFullYear(n,0,4),r.setHours(0,0,0,0),dc(r)}function RL(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function PL(t){return!(!RL(t)&&typeof t!="number"||isNaN(+nn(t)))}function DL(t,e){const n=nn(t,e==null?void 0:e.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}const OL={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},jL=(t,e,n)=>{let r;const s=OL[t];return typeof s=="string"?r=s:e===1?r=s.one:r=s.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function Mi(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const ML={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},LL={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},VL={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},FL={date:Mi({formats:ML,defaultWidth:"full"}),time:Mi({formats:LL,defaultWidth:"full"}),dateTime:Mi({formats:VL,defaultWidth:"full"})},UL={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},$L=(t,e,n,r)=>UL[t];function kn(t){return(e,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let s;if(r==="formatting"&&t.formattingValues){const o=t.defaultFormattingWidth||t.defaultWidth,l=n!=null&&n.width?String(n.width):o;s=t.formattingValues[l]||t.formattingValues[o]}else{const o=t.defaultWidth,l=n!=null&&n.width?String(n.width):t.defaultWidth;s=t.values[l]||t.values[o]}const i=t.argumentCallback?t.argumentCallback(e):e;return s[i]}}const zL={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},BL={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},WL={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},HL={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},qL={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},KL={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},GL=(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},QL={ordinalNumber:GL,era:kn({values:zL,defaultWidth:"wide"}),quarter:kn({values:BL,defaultWidth:"wide",argumentCallback:t=>t-1}),month:kn({values:WL,defaultWidth:"wide"}),day:kn({values:HL,defaultWidth:"wide"}),dayPeriod:kn({values:qL,defaultWidth:"wide",formattingValues:KL,defaultFormattingWidth:"wide"})};function Sn(t){return(e,n={})=>{const r=n.width,s=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],i=e.match(s);if(!i)return null;const o=i[0],l=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],u=Array.isArray(l)?XL(l,m=>m.test(o)):YL(l,m=>m.test(o));let c;c=t.valueCallback?t.valueCallback(u):u,c=n.valueCallback?n.valueCallback(c):c;const f=e.slice(o.length);return{value:c,rest:f}}}function YL(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function XL(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function lI(t){return(e,n={})=>{const r=e.match(t.matchPattern);if(!r)return null;const s=r[0],i=e.match(t.parsePattern);if(!i)return null;let o=t.valueCallback?t.valueCallback(i[0]):i[0];o=n.valueCallback?n.valueCallback(o):o;const l=e.slice(s.length);return{value:o,rest:l}}}const JL=/^(\d+)(th|st|nd|rd)?/i,ZL=/\d+/i,eV={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},tV={any:[/^b/i,/^(a|c)/i]},nV={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},rV={any:[/1/i,/2/i,/3/i,/4/i]},sV={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},iV={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},oV={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},aV={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},lV={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},uV={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},cV={ordinalNumber:lI({matchPattern:JL,parsePattern:ZL,valueCallback:t=>parseInt(t,10)}),era:Sn({matchPatterns:eV,defaultMatchWidth:"wide",parsePatterns:tV,defaultParseWidth:"any"}),quarter:Sn({matchPatterns:nV,defaultMatchWidth:"wide",parsePatterns:rV,defaultParseWidth:"any",valueCallback:t=>t+1}),month:Sn({matchPatterns:sV,defaultMatchWidth:"wide",parsePatterns:iV,defaultParseWidth:"any"}),day:Sn({matchPatterns:oV,defaultMatchWidth:"wide",parsePatterns:aV,defaultParseWidth:"any"}),dayPeriod:Sn({matchPatterns:lV,defaultMatchWidth:"any",parsePatterns:uV,defaultParseWidth:"any"})},dV={code:"en-US",formatDistance:jL,formatLong:FL,formatRelative:$L,localize:QL,match:cV,options:{weekStartsOn:0,firstWeekContainsDate:1}};function hV(t,e){const n=nn(t,e==null?void 0:e.in);return NL(n,DL(n))+1}function fV(t,e){const n=nn(t,e==null?void 0:e.in),r=+dc(n)-+AL(n);return Math.round(r/oI)+1}function uI(t,e){var f,m,g,E;const n=nn(t,e==null?void 0:e.in),r=n.getFullYear(),s=od(),i=(e==null?void 0:e.firstWeekContainsDate)??((m=(f=e==null?void 0:e.locale)==null?void 0:f.options)==null?void 0:m.firstWeekContainsDate)??s.firstWeekContainsDate??((E=(g=s.locale)==null?void 0:g.options)==null?void 0:E.firstWeekContainsDate)??1,o=mr((e==null?void 0:e.in)||t,0);o.setFullYear(r+1,0,i),o.setHours(0,0,0,0);const l=Fa(o,e),u=mr((e==null?void 0:e.in)||t,0);u.setFullYear(r,0,i),u.setHours(0,0,0,0);const c=Fa(u,e);return+n>=+l?r+1:+n>=+c?r:r-1}function pV(t,e){var l,u,c,f;const n=od(),r=(e==null?void 0:e.firstWeekContainsDate)??((u=(l=e==null?void 0:e.locale)==null?void 0:l.options)==null?void 0:u.firstWeekContainsDate)??n.firstWeekContainsDate??((f=(c=n.locale)==null?void 0:c.options)==null?void 0:f.firstWeekContainsDate)??1,s=uI(t,e),i=mr((e==null?void 0:e.in)||t,0);return i.setFullYear(s,0,r),i.setHours(0,0,0,0),Fa(i,e)}function mV(t,e){const n=nn(t,e==null?void 0:e.in),r=+Fa(n,e)-+pV(n,e);return Math.round(r/oI)+1}function pe(t,e){const n=t<0?"-":"",r=Math.abs(t).toString().padStart(e,"0");return n+r}const kr={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return pe(e==="yy"?r%100:r,e.length)},M(t,e){const n=t.getMonth();return e==="M"?String(n+1):pe(n+1,2)},d(t,e){return pe(t.getDate(),e.length)},a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(t,e){return pe(t.getHours()%12||12,e.length)},H(t,e){return pe(t.getHours(),e.length)},m(t,e){return pe(t.getMinutes(),e.length)},s(t,e){return pe(t.getSeconds(),e.length)},S(t,e){const n=e.length,r=t.getMilliseconds(),s=Math.trunc(r*Math.pow(10,n-3));return pe(s,e.length)}},oi={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},c_={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){const r=t.getFullYear(),s=r>0?r:1-r;return n.ordinalNumber(s,{unit:"year"})}return kr.y(t,e)},Y:function(t,e,n,r){const s=uI(t,r),i=s>0?s:1-s;if(e==="YY"){const o=i%100;return pe(o,2)}return e==="Yo"?n.ordinalNumber(i,{unit:"year"}):pe(i,e.length)},R:function(t,e){const n=aI(t);return pe(n,e.length)},u:function(t,e){const n=t.getFullYear();return pe(n,e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return pe(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return pe(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return kr.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return pe(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const s=mV(t,r);return e==="wo"?n.ordinalNumber(s,{unit:"week"}):pe(s,e.length)},I:function(t,e,n){const r=fV(t);return e==="Io"?n.ordinalNumber(r,{unit:"week"}):pe(r,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):kr.d(t,e)},D:function(t,e,n){const r=hV(t);return e==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):pe(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const s=t.getDay(),i=(s-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return pe(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(s,{width:"short",context:"formatting"});case"eeee":default:return n.day(s,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const s=t.getDay(),i=(s-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return pe(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(s,{width:"narrow",context:"standalone"});case"cccccc":return n.day(s,{width:"short",context:"standalone"});case"cccc":default:return n.day(s,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),s=r===0?7:r;switch(e){case"i":return String(s);case"ii":return pe(s,e.length);case"io":return n.ordinalNumber(s,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const s=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let s;switch(r===12?s=oi.noon:r===0?s=oi.midnight:s=r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let s;switch(r>=17?s=oi.evening:r>=12?s=oi.afternoon:r>=4?s=oi.morning:s=oi.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){let r=t.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return kr.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):kr.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return e==="Ko"?n.ordinalNumber(r,{unit:"hour"}):pe(r,e.length)},k:function(t,e,n){let r=t.getHours();return r===0&&(r=24),e==="ko"?n.ordinalNumber(r,{unit:"hour"}):pe(r,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):kr.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):kr.s(t,e)},S:function(t,e){return kr.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(r===0)return"Z";switch(e){case"X":return h_(r);case"XXXX":case"XX":return bs(r);case"XXXXX":case"XXX":default:return bs(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return h_(r);case"xxxx":case"xx":return bs(r);case"xxxxx":case"xxx":default:return bs(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+d_(r,":");case"OOOO":default:return"GMT"+bs(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+d_(r,":");case"zzzz":default:return"GMT"+bs(r,":")}},t:function(t,e,n){const r=Math.trunc(+t/1e3);return pe(r,e.length)},T:function(t,e,n){return pe(+t,e.length)}};function d_(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),s=Math.trunc(r/60),i=r%60;return i===0?n+String(s):n+String(s)+e+pe(i,2)}function h_(t,e){return t%60===0?(t>0?"-":"+")+pe(Math.abs(t)/60,2):bs(t,e)}function bs(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),s=pe(Math.trunc(r/60),2),i=pe(r%60,2);return n+s+e+i}const f_=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},cI=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},gV=(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],s=n[2];if(!s)return f_(t,e);let i;switch(r){case"P":i=e.dateTime({width:"short"});break;case"PP":i=e.dateTime({width:"medium"});break;case"PPP":i=e.dateTime({width:"long"});break;case"PPPP":default:i=e.dateTime({width:"full"});break}return i.replace("{{date}}",f_(r,e)).replace("{{time}}",cI(s,e))},yV={p:cI,P:gV},vV=/^D+$/,_V=/^Y+$/,wV=["D","DD","YY","YYYY"];function xV(t){return vV.test(t)}function EV(t){return _V.test(t)}function TV(t,e,n){const r=IV(t,e,n);if(console.warn(r),wV.includes(t))throw new RangeError(r)}function IV(t,e,n){const r=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const bV=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,kV=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,SV=/^'([^]*?)'?$/,CV=/''/g,NV=/[a-zA-Z]/;function gt(t,e,n){var f,m,g,E,N,S,I,v;const r=od(),s=(n==null?void 0:n.locale)??r.locale??dV,i=(n==null?void 0:n.firstWeekContainsDate)??((m=(f=n==null?void 0:n.locale)==null?void 0:f.options)==null?void 0:m.firstWeekContainsDate)??r.firstWeekContainsDate??((E=(g=r.locale)==null?void 0:g.options)==null?void 0:E.firstWeekContainsDate)??1,o=(n==null?void 0:n.weekStartsOn)??((S=(N=n==null?void 0:n.locale)==null?void 0:N.options)==null?void 0:S.weekStartsOn)??r.weekStartsOn??((v=(I=r.locale)==null?void 0:I.options)==null?void 0:v.weekStartsOn)??0,l=nn(t,n==null?void 0:n.in);if(!PL(l))throw new RangeError("Invalid time value");let u=e.match(kV).map(y=>{const _=y[0];if(_==="p"||_==="P"){const D=yV[_];return D(y,s.formatLong)}return y}).join("").match(bV).map(y=>{if(y==="''")return{isToken:!1,value:"'"};const _=y[0];if(_==="'")return{isToken:!1,value:AV(y)};if(c_[_])return{isToken:!0,value:y};if(_.match(NV))throw new RangeError("Format string contains an unescaped latin alphabet character `"+_+"`");return{isToken:!1,value:y}});s.localize.preprocessor&&(u=s.localize.preprocessor(l,u));const c={firstWeekContainsDate:i,weekStartsOn:o,locale:s};return u.map(y=>{if(!y.isToken)return y.value;const _=y.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&EV(_)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&xV(_))&&TV(_,e,String(t));const D=c_[_[0]];return D(l,_,s.localize,c)}).join("")}function AV(t){const e=t.match(SV);return e?e[1].replace(CV,"'"):t}const RV={lessThanXSeconds:{one:"menos de un segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"medio minuto",lessThanXMinutes:{one:"menos de un minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"alrededor de 1 hora",other:"alrededor de {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 día",other:"{{count}} días"},aboutXWeeks:{one:"alrededor de 1 semana",other:"alrededor de {{count}} semanas"},xWeeks:{one:"1 semana",other:"{{count}} semanas"},aboutXMonths:{one:"alrededor de 1 mes",other:"alrededor de {{count}} meses"},xMonths:{one:"1 mes",other:"{{count}} meses"},aboutXYears:{one:"alrededor de 1 año",other:"alrededor de {{count}} años"},xYears:{one:"1 año",other:"{{count}} años"},overXYears:{one:"más de 1 año",other:"más de {{count}} años"},almostXYears:{one:"casi 1 año",other:"casi {{count}} años"}},PV=(t,e,n)=>{let r;const s=RV[t];return typeof s=="string"?r=s:e===1?r=s.one:r=s.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"en "+r:"hace "+r:r},DV={full:"EEEE, d 'de' MMMM 'de' y",long:"d 'de' MMMM 'de' y",medium:"d MMM y",short:"dd/MM/y"},OV={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},jV={full:"{{date}} 'a las' {{time}}",long:"{{date}} 'a las' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},MV={date:Mi({formats:DV,defaultWidth:"full"}),time:Mi({formats:OV,defaultWidth:"full"}),dateTime:Mi({formats:jV,defaultWidth:"full"})},LV={lastWeek:"'el' eeee 'pasado a la' p",yesterday:"'ayer a la' p",today:"'hoy a la' p",tomorrow:"'mañana a la' p",nextWeek:"eeee 'a la' p",other:"P"},VV={lastWeek:"'el' eeee 'pasado a las' p",yesterday:"'ayer a las' p",today:"'hoy a las' p",tomorrow:"'mañana a las' p",nextWeek:"eeee 'a las' p",other:"P"},FV=(t,e,n,r)=>e.getHours()!==1?VV[t]:LV[t],UV={narrow:["AC","DC"],abbreviated:["AC","DC"],wide:["antes de cristo","después de cristo"]},$V={narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1º trimestre","2º trimestre","3º trimestre","4º trimestre"]},zV={narrow:["e","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"],wide:["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]},BV={narrow:["d","l","m","m","j","v","s"],short:["do","lu","ma","mi","ju","vi","sá"],abbreviated:["dom","lun","mar","mié","jue","vie","sáb"],wide:["domingo","lunes","martes","miércoles","jueves","viernes","sábado"]},WV={narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"mañana",afternoon:"tarde",evening:"tarde",night:"noche"},abbreviated:{am:"AM",pm:"PM",midnight:"medianoche",noon:"mediodia",morning:"mañana",afternoon:"tarde",evening:"tarde",night:"noche"},wide:{am:"a.m.",pm:"p.m.",midnight:"medianoche",noon:"mediodia",morning:"mañana",afternoon:"tarde",evening:"tarde",night:"noche"}},HV={narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"de la mañana",afternoon:"de la tarde",evening:"de la tarde",night:"de la noche"},abbreviated:{am:"AM",pm:"PM",midnight:"medianoche",noon:"mediodia",morning:"de la mañana",afternoon:"de la tarde",evening:"de la tarde",night:"de la noche"},wide:{am:"a.m.",pm:"p.m.",midnight:"medianoche",noon:"mediodia",morning:"de la mañana",afternoon:"de la tarde",evening:"de la tarde",night:"de la noche"}},qV=(t,e)=>Number(t)+"º",KV={ordinalNumber:qV,era:kn({values:UV,defaultWidth:"wide"}),quarter:kn({values:$V,defaultWidth:"wide",argumentCallback:t=>Number(t)-1}),month:kn({values:zV,defaultWidth:"wide"}),day:kn({values:BV,defaultWidth:"wide"}),dayPeriod:kn({values:WV,defaultWidth:"wide",formattingValues:HV,defaultFormattingWidth:"wide"})},GV=/^(\d+)(º)?/i,QV=/\d+/i,YV={narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,wide:/^(antes de cristo|antes de la era com[uú]n|despu[eé]s de cristo|era com[uú]n)/i},XV={any:[/^ac/i,/^dc/i],wide:[/^(antes de cristo|antes de la era com[uú]n)/i,/^(despu[eé]s de cristo|era com[uú]n)/i]},JV={narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](º)? trimestre/i},ZV={any:[/1/i,/2/i,/3/i,/4/i]},e6={narrow:/^[efmajsond]/i,abbreviated:/^(ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)/i,wide:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i},t6={narrow:[/^e/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^en/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i]},n6={narrow:/^[dlmjvs]/i,short:/^(do|lu|ma|mi|ju|vi|s[áa])/i,abbreviated:/^(dom|lun|mar|mi[ée]|jue|vie|s[áa]b)/i,wide:/^(domingo|lunes|martes|mi[ée]rcoles|jueves|viernes|s[áa]bado)/i},r6={narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^j/i,/^v/i,/^s/i],any:[/^do/i,/^lu/i,/^ma/i,/^mi/i,/^ju/i,/^vi/i,/^sa/i]},s6={narrow:/^(a|p|mn|md|(de la|a las) (mañana|tarde|noche))/i,any:/^([ap]\.?\s?m\.?|medianoche|mediodia|(de la|a las) (mañana|tarde|noche))/i},i6={any:{am:/^a/i,pm:/^p/i,midnight:/^mn/i,noon:/^md/i,morning:/mañana/i,afternoon:/tarde/i,evening:/tarde/i,night:/noche/i}},o6={ordinalNumber:lI({matchPattern:GV,parsePattern:QV,valueCallback:function(t){return parseInt(t,10)}}),era:Sn({matchPatterns:YV,defaultMatchWidth:"wide",parsePatterns:XV,defaultParseWidth:"any"}),quarter:Sn({matchPatterns:JV,defaultMatchWidth:"wide",parsePatterns:ZV,defaultParseWidth:"any",valueCallback:t=>t+1}),month:Sn({matchPatterns:e6,defaultMatchWidth:"wide",parsePatterns:t6,defaultParseWidth:"any"}),day:Sn({matchPatterns:n6,defaultMatchWidth:"wide",parsePatterns:r6,defaultParseWidth:"any"}),dayPeriod:Sn({matchPatterns:s6,defaultMatchWidth:"any",parsePatterns:i6,defaultParseWidth:"any"})},An={code:"es",formatDistance:PV,formatLong:MV,formatRelative:FV,localize:KV,match:o6,options:{weekStartsOn:1,firstWeekContainsDate:1}};/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a6=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l6=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase()),p_=t=>{const e=l6(t);return e.charAt(0).toUpperCase()+e.slice(1)},dI=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim(),u6=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var c6={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d6=R.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:s="",children:i,iconNode:o,...l},u)=>R.createElement("svg",{ref:u,...c6,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:dI("lucide",s),...!i&&!u6(l)&&{"aria-hidden":"true"},...l},[...o.map(([c,f])=>R.createElement(c,f)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qe=(t,e)=>{const n=R.forwardRef(({className:r,...s},i)=>R.createElement(d6,{ref:i,iconNode:e,className:dI(`lucide-${a6(p_(t))}`,`lucide-${t}`,r),...s}));return n.displayName=p_(t),n};/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h6=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],co=Qe("arrow-left",h6);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f6=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],tr=Qe("calendar",f6);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p6=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],m6=Qe("circle-alert",p6);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g6=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Rn=Qe("circle-check-big",g6);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y6=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],m_=Qe("circle-x",y6);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v6=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Pn=Qe("clock",v6);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _6=[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]],He=Qe("coffee",_6);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w6=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],x6=Qe("image",w6);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E6=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],T6=Qe("log-out",E6);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I6=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],b6=Qe("map-pin",I6);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k6=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],S6=Qe("menu",k6);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C6=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],N6=Qe("message-square",C6);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A6=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],hI=Qe("package",A6);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R6=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],P6=Qe("pen",R6);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D6=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Kf=Qe("plus",D6);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O6=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],j6=Qe("shopping-cart",O6);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M6=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],L6=Qe("trash-2",M6);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V6=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],F6=Qe("upload",V6);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U6=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Gf=Qe("x",U6);function $6(){const{user:t,signOut:e}=yr(),n=Wn(),[r,s]=R.useState(null),[i,o]=R.useState([]),[l,u]=R.useState([]),[c,f]=R.useState([]),[m,g]=R.useState(!0),[E,N]=R.useState(!1),[S,I]=R.useState(!1),[v,y]=R.useState(""),[_,D]=R.useState(""),[M,U]=R.useState("all");R.useEffect(()=>{k(),x(),C()},[t]);const k=()=>{const L=new Date,Q=Yn(L),se=L.getDay();s(se===1||se===3||se===6?Q:null)},x=async()=>{if(t)try{const L=jt(be,"orders"),Q=Ma(L,Zc("userId","==",t.uid)),he=(await zn(Q)).docs.map(et=>({id:et.id,...et.data()}));o(he);const at=Yn(new Date),lt=he.filter(et=>new Date(et.shiftDate)<at&&(et.status==="confirmed"||et.status==="delivered")).sort((et,ti)=>new Date(ti.shiftDate).getTime()-new Date(et.shiftDate).getTime()).slice(0,2);u(lt)}catch(L){console.error("Error loading orders:",L),J.error("Error al cargar pedidos")}finally{g(!1)}},C=async()=>{try{const L=jt(be,"menu"),se=(await zn(L)).docs.map(he=>({id:he.id,...he.data()}));f(se)}catch(L){console.error("Error loading menu:",L)}},A=L=>{const Q=gt(L,"yyyy-MM-dd");return i.find(se=>se.shiftDate===Q)},b=L=>{if(L.orderType==="surprise")return"Sorpresa seleccionada";if(L.selectedItems&&L.selectedItems.length>0){const Q=L.selectedItems.map(se=>{const he=c.find(at=>at.id===se);return he==null?void 0:he.name}).filter(Boolean);if(Q.length>0)return Q.join(", ")}return"Pedido registrado"},P=L=>i.some(Q=>{var se;return(se=Q.selectedItems)==null?void 0:se.includes(L)}),T=[{id:"all",label:"Todos",value:"all"},{id:"seasonal",label:"Temporada",value:"seasonal"},{id:"hot-coffee",label:"Café Caliente",value:"hot-coffee"},{id:"iced-coffee",label:"Café Frío",value:"iced-coffee"},{id:"cold-brew",label:"Cold Brew",value:"cold-brew"},{id:"frappuccino",label:"Frappuccino",value:"frappuccino-coffee"}],te=()=>{const L=c.filter(Q=>Q.available);return M==="all"?L.slice(0,4):L.filter(Q=>Q.category===M).slice(0,4)},_e=(L,Q)=>{Q==="selected"?n("/menu",{state:{shiftDate:gt(L,"yyyy-MM-dd")}}):Mt(L)},Mt=async L=>{if(t)try{const Q=gt(L,"yyyy-MM-dd"),se=L.getDay(),he=se===1||se===3||se===6,at=he?gt(L,"EEEE",{locale:An}).toLowerCase():void 0,lt={userId:t.uid,shiftDate:Q,isShiftDay:he,orderType:"surprise",status:"pending",createdAt:new Date,updatedAt:new Date};at&&(lt.shiftDay=at),await lc(jt(be,"orders"),lt),N(!0),x()}catch(Q){J.error("Error al crear el pedido"),console.error(Q)}},q=()=>{N(!1)},z=L=>{y(L),I(!0)},G=async()=>{if(v)try{const L=hn(be,"orders",v);await as(L,{status:"confirmed",confirmedAt:new Date,updatedAt:new Date,feedback:_||null}),J.success("¡Confirmado! Gracias por tu mensaje"),I(!1),D(""),y(""),x()}catch(L){J.error("Error al confirmar"),console.error(L)}},X=async()=>{if(v)try{const L=hn(be,"orders",v);await as(L,{status:"confirmed",confirmedAt:new Date,updatedAt:new Date}),J.success("¡Confirmado! Disfruta tu café"),I(!1),D(""),y(""),x()}catch(L){J.error("Error al confirmar"),console.error(L)}};return m?d.jsx("div",{className:"flex items-center justify-center min-h-screen bg-pink-50",children:d.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"})}):d.jsxs("div",{className:"min-h-screen bg-pink-50 pb-20",children:[d.jsx("header",{className:"bg-gradient-to-r from-pink-400 to-pink-500 shadow-lg sticky top-0 z-20 -mt-[env(safe-area-inset-top)] pt-[env(safe-area-inset-top)]",children:d.jsxs("div",{className:"max-w-4xl mx-auto px-6 py-5",children:[d.jsxs("div",{className:"flex items-center justify-between mb-4",children:[d.jsx("div",{className:"flex items-center gap-2",children:d.jsx("button",{className:"text-white",children:d.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:d.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})}),d.jsxs("div",{className:"text-center flex-1",children:[d.jsx("h1",{className:"text-xl font-bold text-white",children:"Night Shift"}),d.jsx("p",{className:"text-xs text-pink-100",children:"Home"})]}),d.jsxs("div",{className:"flex items-center gap-2",children:[(t==null?void 0:t.email)==="rosilesmarcos99@gmail.com"&&d.jsx("button",{className:"text-white p-2 hover:bg-white/20 rounded-full transition-all",onClick:()=>n("/admin"),title:"Admin",children:d.jsxs("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[d.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),d.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]})}),d.jsx("button",{className:"text-white p-2 hover:bg-white/20 rounded-full transition-all",onClick:()=>e(),title:"Cerrar sesión",children:d.jsx(T6,{className:"w-6 h-6"})})]})]}),d.jsxs("div",{className:"relative",children:[d.jsx("svg",{className:"absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:d.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),d.jsx("input",{type:"text",placeholder:"Search Coffee",className:"w-full pl-12 pr-4 py-3 bg-white rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-300"})]})]})}),d.jsxs("main",{className:"max-w-4xl mx-auto px-6 py-6",children:[d.jsxs("div",{className:"bg-white rounded-2xl shadow-lg p-8 mb-6 border border-pink-100",children:[d.jsxs("h2",{className:"text-3xl font-bold text-gray-800 mb-3",children:["¡Hola, ",d.jsx("span",{className:"text-pink-600",children:"Gabriela!"})]}),d.jsx("p",{className:"text-base text-gray-600",children:"Bienvenida a tu Asistente de Guardia. ¿Qué se te antoja hoy?"})]}),d.jsx("div",{className:"flex gap-3 mb-6 overflow-x-auto pb-2 scrollbar-hide",children:T.map(L=>d.jsx("button",{onClick:()=>U(L.value),className:`px-5 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all ${M===L.value?"bg-gradient-to-r from-pink-400 to-pink-500 text-white shadow-md":"bg-white text-gray-700 shadow-sm hover:shadow-md"}`,children:L.label},L.id))}),r&&d.jsxs("div",{className:"mb-6",children:[d.jsx("h3",{className:"text-xl font-bold text-gray-800 mb-4",children:"Tu Turno de Hoy"}),(()=>{const L=A(r);return d.jsxs("div",{className:"bg-white rounded-2xl shadow-lg p-6 border border-pink-100",children:[d.jsxs("div",{className:"flex items-center justify-between mb-4",children:[d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("div",{className:"p-2.5 bg-pink-100 rounded-xl",children:d.jsx(tr,{className:"w-5 h-5 text-pink-600"})}),d.jsxs("div",{children:[d.jsx("h3",{className:"font-bold text-gray-800 text-base",children:gt(r,"EEEE d 'de' MMMM",{locale:An})}),d.jsx("p",{className:"text-xs text-gray-500",children:"Turno nocturno"})]})]}),L&&(()=>{let Q="bg-yellow-100 text-yellow-700 border border-yellow-200",se="Pendiente";return L.status==="confirmed"?(Q="bg-green-100 text-green-700 border border-green-200",se="Confirmado"):L.status==="delivered"&&(Q="bg-blue-100 text-blue-700 border border-blue-200",se="Entregado"),d.jsx("span",{className:`px-3 py-1.5 rounded-full text-xs font-bold ${Q}`,children:se})})()]}),L&&d.jsxs("div",{className:"mb-4 p-4 bg-pink-50 rounded-xl",children:[d.jsx("p",{className:"text-xs text-pink-600 mb-1 font-medium uppercase tracking-wide",children:"Tu pedido:"}),d.jsx("p",{className:"text-sm font-medium text-gray-800",children:b(L)})]}),!L&&d.jsxs("div",{className:"space-y-3",children:[d.jsxs("button",{onClick:()=>_e(r,"surprise"),className:"w-full py-3.5 px-4 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-xl font-bold hover:from-pink-500 hover:to-pink-600 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-md",children:[d.jsx(He,{className:"w-5 h-5"}),"Sorpréndeme"]}),d.jsxs("button",{onClick:()=>_e(r,"selected"),className:"w-full py-3.5 px-4 bg-white text-pink-600 rounded-xl font-semibold hover:bg-pink-50 active:scale-95 transition-all flex items-center justify-center gap-2 border-2 border-pink-200",children:[d.jsx(tr,{className:"w-5 h-5"}),"Ver Menú"]})]}),L&&L.status==="delivered"&&d.jsxs("button",{onClick:()=>z(L.id),className:"w-full py-3.5 px-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-bold hover:from-green-600 hover:to-green-700 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-md",children:[d.jsx(Rn,{className:"w-5 h-5"}),"Confirmar que lo recibí"]}),L&&(L.status==="pending"||L.status==="ordered")&&d.jsxs("div",{className:"space-y-3",children:[d.jsx("div",{className:"bg-pink-100 rounded-xl overflow-hidden",children:d.jsx("div",{className:"h-2 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-400 animate-pulse"})}),d.jsxs("div",{className:"flex items-center gap-2 text-gray-600 bg-pink-50 px-4 py-3 rounded-xl",children:[d.jsx(Pn,{className:"w-5 h-5 animate-pulse"}),d.jsx("span",{className:"text-sm font-medium",children:L.orderType==="surprise"?"Sorpresa en camino":"Pedido en proceso"})]})]}),L&&L.status==="confirmed"&&d.jsxs("div",{className:"flex items-center gap-2 text-green-700 bg-green-50 px-4 py-3 rounded-xl border border-green-200",children:[d.jsx(Rn,{className:"w-5 h-5"}),d.jsx("span",{className:"text-sm font-medium",children:"Pedido Entregado"})]})]})})()]}),!r&&d.jsxs("div",{className:"mb-6 bg-white rounded-2xl shadow-lg p-8 text-center",children:[d.jsx(tr,{className:"w-16 h-16 text-gray-300 mx-auto mb-4"}),d.jsx("p",{className:"text-gray-700 font-semibold text-lg",children:"No hay turno programado para hoy"}),d.jsx("p",{className:"text-sm text-gray-500 mt-2",children:"Tus guardias son Lunes, Miércoles y Sábados"}),d.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"Sin embargo, siempre puedes hacer un pedido para cualquier día"}),d.jsx("button",{onClick:()=>n("/menu"),className:"mt-4 px-6 py-3 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-xl font-bold hover:from-pink-500 hover:to-pink-600 active:scale-95 transition-all shadow-md",children:"Hacer un pedido"})]}),d.jsxs("div",{className:"mb-6",children:[d.jsxs("div",{className:"flex items-center justify-between mb-4",children:[d.jsx("h3",{className:"text-xl font-bold text-gray-800",children:"Sugerencias Para Usted"}),d.jsx("button",{onClick:()=>n("/menu"),className:"text-pink-600 text-sm font-semibold hover:text-pink-700 transition-colors",children:"Ver todo →"})]}),d.jsx("div",{className:"grid grid-cols-2 gap-4",children:te().map(L=>d.jsxs("button",{className:"bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all text-left w-full",onClick:()=>n("/menu"),children:[d.jsx("div",{className:"aspect-square bg-gradient-to-br from-pink-100 to-pink-50 flex items-center justify-center relative overflow-hidden",children:L.imageUrl?d.jsx("img",{src:L.imageUrl,alt:L.name,className:"w-full h-full object-cover absolute inset-0",style:{objectPosition:"center",objectFit:"cover"}}):d.jsx(He,{className:"w-20 h-20 text-pink-400"})}),d.jsxs("div",{className:"p-5 h-[160px] flex flex-col",children:[P(L.id)?d.jsxs("div",{className:"flex items-center gap-1 mb-2 flex-shrink-0",children:[d.jsx(Rn,{className:"w-4 h-4 text-green-500"}),d.jsx("span",{className:"text-xs font-bold text-green-600",children:"Ya lo has probado"})]}):d.jsx("div",{className:"flex items-center gap-1 mb-2 flex-shrink-0",children:d.jsx("span",{className:"text-xs font-bold text-pink-600 bg-pink-100 px-2 py-1 rounded-full",children:"Nuevo para ti"})}),d.jsx("h4",{className:"font-bold text-gray-800 mb-2 text-base line-clamp-2 flex-shrink-0",children:L.name}),d.jsx("p",{className:"text-sm text-gray-500 mb-3 capitalize line-clamp-2 flex-1",children:L.category.split("-").join(" ")}),d.jsx("div",{className:"flex items-center justify-end flex-shrink-0",children:d.jsx("span",{className:"bg-gradient-to-r from-pink-400 to-pink-500 text-white p-2 rounded-lg shadow-md",children:d.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:d.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 4v16m8-8H4"})})})})]})]},L.id))})]}),l.length>0&&d.jsxs("div",{className:"mb-6",children:[d.jsx("h3",{className:"text-xl font-bold text-gray-800 mb-4",children:"Pedidos Anteriores"}),d.jsx("div",{className:"space-y-4",children:l.map(L=>d.jsxs("div",{className:"bg-white rounded-2xl shadow-lg p-5 border border-pink-100",children:[d.jsxs("div",{className:"flex items-start justify-between mb-3",children:[d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("div",{className:"p-2 bg-pink-100 rounded-xl",children:d.jsx(He,{className:"w-5 h-5 text-pink-600"})}),d.jsxs("div",{children:[d.jsx("h3",{className:"font-bold text-gray-800 text-sm",children:gt(new Date(L.shiftDate),"EEEE d 'de' MMMM",{locale:An})}),d.jsx("p",{className:"text-xs text-gray-500",children:"Turno nocturno"})]})]}),d.jsx("span",{className:"px-3 py-1.5 rounded-full text-xs font-bold bg-green-100 text-green-700 border border-green-200",children:"Completado"})]}),d.jsxs("div",{className:"p-3 bg-pink-50 rounded-xl",children:[d.jsx("p",{className:"text-xs text-pink-600 mb-1 font-medium uppercase tracking-wide",children:"Pedido:"}),d.jsx("p",{className:"text-sm font-medium text-gray-800",children:b(L)})]})]},L.id))})]}),d.jsxs("div",{className:"bg-gradient-to-r from-pink-100 to-pink-50 rounded-2xl p-6 mb-6 relative overflow-hidden shadow-sm",children:[d.jsxs("div",{className:"relative z-10",children:[d.jsxs("h2",{className:"text-2xl font-bold text-gray-800 mb-1",children:["Entrega ",d.jsx("span",{className:"text-pink-600",children:"Gratis!"})]}),d.jsx("p",{className:"text-sm text-gray-600 mb-1",children:"En todas sus órdenes"}),d.jsx("p",{className:"text-xs text-gray-500",children:"Solo por bonita"}),d.jsx("p",{className:"text-xs text-gray-500",children:"NO aplican términos ni condiciones"})]}),d.jsx("div",{className:"absolute right-4 top-1/2 transform -translate-y-1/2 opacity-20",children:d.jsx(He,{className:"w-32 h-32 text-pink-600"})})]})]}),d.jsx("nav",{className:"fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-30",children:d.jsx("div",{className:"max-w-4xl mx-auto px-6 py-4",children:d.jsxs("div",{className:"flex items-center justify-around",children:[d.jsx("button",{className:"flex flex-col items-center gap-1 text-pink-500",children:d.jsx("div",{className:"bg-gradient-to-r from-pink-400 to-pink-500 p-2.5 rounded-xl",children:d.jsx("svg",{className:"w-5 h-5 text-white",fill:"currentColor",viewBox:"0 0 20 20",children:d.jsx("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"})})})}),d.jsx("button",{onClick:()=>n("/order-history"),className:"flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600",children:d.jsx(Pn,{className:"w-6 h-6"})}),d.jsx("button",{onClick:()=>n("/shifts"),className:"flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600",children:d.jsx(tr,{className:"w-6 h-6"})})]})})}),E&&d.jsx("div",{className:"fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4",children:d.jsx("div",{className:"bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden",children:d.jsxs("div",{className:"p-8",children:[d.jsx("div",{className:"mb-6 flex justify-center",children:d.jsx("div",{className:"w-20 h-20 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg",children:d.jsx(He,{className:"w-12 h-12 text-white"})})}),d.jsx("h2",{className:"text-2xl font-bold text-gray-800 text-center mb-4",children:"¡Sorpresa en Camino!"}),d.jsxs("div",{className:"mb-6 p-5 bg-pink-50 rounded-2xl border border-pink-100",children:[d.jsx("h3",{className:"text-sm font-bold text-pink-600 mb-3 uppercase tracking-wide",children:"¿Qué sigue?"}),d.jsxs("ul",{className:"space-y-3 text-sm text-gray-700",children:[d.jsxs("li",{className:"flex items-start gap-3",children:[d.jsx("span",{className:"text-pink-500 font-bold mt-0.5",children:"1."}),d.jsx("span",{children:"Seleccionaremos algo especial para ti"})]}),d.jsxs("li",{className:"flex items-start gap-3",children:[d.jsx("span",{className:"text-pink-500 font-bold mt-0.5",children:"2."}),d.jsx("span",{children:"Recibirás tu café durante tu turno nocturno"})]}),d.jsxs("li",{className:"flex items-start gap-3",children:[d.jsx("span",{className:"text-pink-500 font-bold mt-0.5",children:"3."}),d.jsx("span",{children:"Te notificaremos cuando esté listo para recoger"})]}),d.jsxs("li",{className:"flex items-start gap-3",children:[d.jsx("span",{className:"text-pink-500 font-bold mt-0.5",children:"4."}),d.jsx("span",{children:"Confirma la recepción cuando lo tengas"})]})]})]}),d.jsx("button",{onClick:q,className:"w-full py-4 px-6 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-2xl font-bold text-lg hover:from-pink-500 hover:to-pink-600 active:scale-95 transition-all shadow-md",children:"Entendido"})]})})}),S&&d.jsx("div",{className:"fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4",children:d.jsx("div",{className:"bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden",children:d.jsxs("div",{className:"p-8",children:[d.jsx("div",{className:"mb-6 flex justify-center",children:d.jsx("div",{className:"w-20 h-20 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg",children:d.jsx(Rn,{className:"w-12 h-12 text-white"})})}),d.jsx("h2",{className:"text-2xl font-bold text-gray-800 text-center mb-2",children:"¿Cómo estuvo?"}),d.jsx("p",{className:"text-gray-600 text-center mb-6 text-sm",children:"Espero que le guste (yo)."}),d.jsxs("div",{className:"mb-6",children:[d.jsx("textarea",{value:_,onChange:L=>D(L.target.value),placeholder:"Deja un comentario...",className:"w-full h-32 px-4 py-3 bg-pink-50 border border-pink-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-200 transition-all resize-none",maxLength:500}),d.jsxs("p",{className:"text-xs text-gray-500 mt-2 text-right",children:[_.length,"/500 caracteres"]})]}),d.jsxs("div",{className:"space-y-3",children:[d.jsx("button",{onClick:G,className:"w-full py-4 px-6 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-2xl font-bold text-lg hover:from-pink-500 hover:to-pink-600 active:scale-95 transition-all shadow-md",children:"Enviar Comentario"}),d.jsx("button",{onClick:X,className:"w-full py-3 px-6 bg-pink-50 text-pink-600 rounded-2xl font-semibold hover:bg-pink-100 active:scale-95 transition-all border border-pink-200",children:"Omitir"})]})]})})})]})}function z6(){const{user:t}=yr(),e=Wn(),r=tn().state,s=r==null?void 0:r.shiftDate,i=r==null?void 0:r.orderId,o=(r==null?void 0:r.existingItems)||[],[l,u]=R.useState([]),[c,f]=R.useState(o),[m,g]=R.useState("all"),[E,N]=R.useState(!0),[S,I]=R.useState(!1),[v,y]=R.useState({item:null,isOpen:!1}),[_,D]=R.useState("grande"),[M,U]=R.useState("whole");R.useEffect(()=>{k()},[]);const k=async()=>{try{const q=jt(be,"menu"),X=(await zn(q)).docs.map(L=>({id:L.id,...L.data()})).map(L=>{const Q=["hot-coffee","iced-coffee","cold-brew","frappuccino-coffee","frappuccino-cream","shaken-espresso","hot-tea","iced-tea","seasonal"],se=["hot-coffee","iced-coffee","cold-brew","frappuccino-coffee","shaken-espresso","seasonal"];return{...L,hasSizeOptions:Q.includes(L.category),hasMilkOptions:se.includes(L.category)}});u(X.filter(L=>L.available))}catch(q){J.error("Error al cargar el menú"),console.error(q)}finally{N(!1)}},x=q=>{q.hasSizeOptions||q.hasMilkOptions?(D("grande"),U("whole"),y({item:q,isOpen:!0})):C(q.id)},C=(q,z,G)=>{f(X=>X.findIndex(Q=>Q.itemId===q)>=0?X.filter(Q=>Q.itemId!==q):[...X,{itemId:q,size:z,milkType:G}])},A=()=>{if(!v.item)return;const q=v.item;C(q.id,q.hasSizeOptions?_:void 0,q.hasMilkOptions?M:void 0),y({item:null,isOpen:!1})},b=q=>c.some(z=>z.itemId===q),P=async()=>{if(!t){J.error("Usuario no autenticado");return}if(!s){J.error("No se encontró la fecha del turno");return}if(c.length===0){J.error("Selecciona al menos un item");return}try{const q=new Date(s),z=q.getDay(),G=z===1||z===3||z===6,X=G?q.toLocaleDateString("es",{weekday:"long"}):void 0,L=c.map(se=>{const he={itemId:se.itemId};return se.size!==void 0&&(he.size=se.size),se.milkType!==void 0&&(he.milkType=se.milkType),he});let Q=i;if(i){const se=hn(be,"orders",i);await as(se,{itemSelections:L,selectedItems:c.map(he=>he.itemId),updatedAt:new Date}),J.success("Pedido actualizado")}else{const se={userId:t.uid,shiftDate:s,isShiftDay:G,orderType:"selected",itemSelections:L,selectedItems:c.map(at=>at.itemId),status:"pending",createdAt:new Date,updatedAt:new Date};X&&(se.shiftDay=X),Q=(await lc(jt(be,"orders"),se)).id}e("/order-summary",{state:{orderId:Q,selectedItems:L,shiftDate:s}})}catch(q){J.error("Error al crear el pedido"),console.error(q)}},T=async()=>{if(!t||!s){J.error("No se encontró la información del turno");return}try{const q=new Date(s),z=q.getDay(),G=z===1||z===3||z===6,X=G?q.toLocaleDateString("es",{weekday:"long"}):void 0,L={userId:t.uid,shiftDate:s,isShiftDay:G,orderType:"surprise",status:"pending",createdAt:new Date,updatedAt:new Date};X&&(L.shiftDay=X),await lc(jt(be,"orders"),L),J.success("¡Sorpresa creada! Prepárate para algo especial"),e("/")}catch(q){J.error("Error al crear el pedido"),console.error(q)}},te=()=>{I(!1),e("/")},_e=[{id:"all",label:"Todos",value:"all"},{id:"seasonal",label:"Temporada",value:"seasonal"},{id:"hot-coffee",label:"Café Caliente",value:"hot-coffee"},{id:"iced-coffee",label:"Café Frío",value:"iced-coffee"},{id:"cold-brew",label:"Cold Brew",value:"cold-brew"},{id:"frappuccino-coffee",label:"Frappuccino Café",value:"frappuccino-coffee"},{id:"frappuccino-cream",label:"Frappuccino Crema",value:"frappuccino-cream"},{id:"refreshers",label:"Refreshers",value:"refreshers"},{id:"shaken-espresso",label:"Shaken Espresso",value:"shaken-espresso"},{id:"hot-tea",label:"Té Caliente",value:"hot-tea"},{id:"iced-tea",label:"Té Frío",value:"iced-tea"},{id:"food",label:"Alimentos",value:"food"},{id:"combo",label:"Combos",value:"combo"}],Mt=()=>m==="all"?l:l.filter(q=>q.category===m);return E?d.jsx("div",{className:"flex items-center justify-center min-h-screen bg-pink-50",children:d.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"})}):d.jsxs("div",{className:"min-h-screen bg-pink-50",children:[d.jsx("header",{className:"bg-gradient-to-r from-pink-400 to-pink-500 shadow-lg sticky top-0 z-20",children:d.jsxs("div",{className:"max-w-4xl mx-auto px-6 py-5 flex items-center justify-between",children:[d.jsx("button",{onClick:()=>e(i?"/order-summary":"/",{state:i?{orderId:i,selectedItems:o,shiftDate:s}:void 0}),className:"p-2 hover:bg-white/20 rounded-full text-white transition-all active:scale-95",title:"Volver",children:d.jsx(co,{className:"w-6 h-6"})}),d.jsxs("div",{className:"text-center flex-1",children:[d.jsx("h1",{className:"text-xl font-bold text-white",children:i?"Agregar más items":"Menú Completo"}),d.jsx("p",{className:"text-xs text-pink-100",children:i?"Selecciona items adicionales":"Selecciona tus favoritos"})]}),d.jsx("div",{className:"w-10"})]})}),d.jsxs("main",{className:"max-w-4xl mx-auto px-6 py-6 pb-32",children:[d.jsxs("div",{className:"bg-gradient-to-r from-pink-100 to-pink-50 rounded-2xl p-6 mb-6 relative overflow-hidden shadow-lg border border-pink-200",children:[d.jsxs("div",{className:"relative z-10",children:[d.jsx("h3",{className:"text-2xl font-bold text-gray-800 mb-2",children:"¿No sabes qué elegir?"}),d.jsx("p",{className:"text-sm text-gray-600 mb-4",children:"Déjame sorprenderte con algo especial"}),d.jsxs("button",{onClick:()=>{if(!s){J.error("No se encontró la fecha del turno");return}T()},className:"px-6 py-3 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-xl font-bold hover:from-pink-500 hover:to-pink-600 active:scale-95 transition-all shadow-md flex items-center gap-2",children:[d.jsx(He,{className:"w-5 h-5"}),"Sorpréndeme"]})]}),d.jsx("div",{className:"absolute right-4 top-1/2 transform -translate-y-1/2 opacity-20",children:d.jsx(He,{className:"w-24 h-24 text-pink-600"})})]}),d.jsx("div",{className:"flex gap-3 mb-6 overflow-x-auto pb-2 scrollbar-hide",children:_e.map(q=>d.jsx("button",{onClick:()=>g(q.value),className:`px-5 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all ${m===q.value?"bg-gradient-to-r from-pink-400 to-pink-500 text-white shadow-md":"bg-white text-gray-700 shadow-sm hover:shadow-md"}`,children:q.label},q.id))}),c.length>0&&d.jsx("div",{className:"mb-6 p-4 bg-pink-100 border border-pink-200 rounded-xl",children:d.jsxs("p",{className:"text-sm text-pink-700 font-medium",children:["✓ ",c.length," items seleccionados"]})}),d.jsx("div",{className:"grid grid-cols-2 gap-4",children:Mt().map(q=>d.jsxs("button",{onClick:()=>x(q),className:`rounded-2xl overflow-hidden transition-all text-left w-full relative ${b(q.id)?"shadow-xl ring-2 ring-pink-400":"shadow-lg hover:shadow-xl"}`,children:[d.jsxs("div",{className:"aspect-square bg-[#00704A] flex items-center justify-center relative overflow-hidden",children:[q.imageUrl?d.jsx("div",{className:"absolute inset-0 w-full h-full",children:d.jsx("img",{src:q.imageUrl,alt:q.name,className:"w-full h-full",style:{objectFit:"cover",objectPosition:"center",display:"block"}},`img-${q.id}-${m}`)}):d.jsx(He,{className:"w-20 h-20 text-white"}),b(q.id)&&d.jsx("div",{className:"absolute top-2 right-2 w-8 h-8 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg",children:d.jsx("svg",{className:"w-5 h-5 text-white",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",stroke:"currentColor",children:d.jsx("path",{d:"M5 13l4 4L19 7"})})})]}),d.jsxs("div",{className:"p-4 bg-white h-[120px] flex flex-col",children:[d.jsx("h3",{className:"font-bold text-gray-800 mb-1 text-sm line-clamp-2 flex-shrink-0",children:q.name}),d.jsx("p",{className:"text-xs text-gray-500 line-clamp-3 flex-1",children:q.description})]})]},`${q.id}-${m}`))}),Mt().length===0&&d.jsxs("div",{className:"text-center py-12",children:[d.jsx(He,{className:"w-16 h-16 text-gray-300 mx-auto mb-4"}),d.jsx("p",{className:"text-gray-500",children:"No hay items en esta categoría"})]})]}),c.length>0&&d.jsx("div",{className:"fixed bottom-0 left-0 right-0 bg-white shadow-2xl z-50 border-t border-gray-200",style:{minHeight:"90px"},children:d.jsx("div",{className:"px-6 py-4",children:d.jsxs("button",{onClick:P,className:"w-full px-6 py-4 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-2xl font-bold text-lg hover:from-pink-500 hover:to-pink-600 active:scale-95 transition-all flex items-center justify-center gap-3 shadow-lg",children:[d.jsx(j6,{className:"w-6 h-6"}),d.jsx("span",{children:i?`Actualizar Pedido (${c.length})`:`Confirmar Pedido (${c.length})`})]})})}),S&&d.jsx("div",{className:"fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4",children:d.jsx("div",{className:"bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden",children:d.jsxs("div",{className:"p-8",children:[d.jsx("div",{className:"mb-6 flex justify-center",children:d.jsx("div",{className:"w-20 h-20 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg",children:d.jsx("svg",{className:"w-12 h-12 text-white",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"3",viewBox:"0 0 24 24",stroke:"currentColor",children:d.jsx("path",{d:"M5 13l4 4L19 7"})})})}),d.jsx("h2",{className:"text-2xl font-bold text-gray-800 text-center mb-4",children:"¡Pedido Confirmado!"}),d.jsxs("div",{className:"mb-6 p-5 bg-pink-50 rounded-2xl border border-pink-100",children:[d.jsx("h3",{className:"text-sm font-bold text-pink-600 mb-3 uppercase tracking-wide",children:"¿Qué sigue?"}),d.jsxs("ul",{className:"space-y-3 text-sm text-gray-700",children:[d.jsxs("li",{className:"flex items-start gap-3",children:[d.jsx("span",{className:"text-pink-500 font-bold mt-0.5",children:"1."}),d.jsx("span",{children:"Tu pedido ha sido registrado exitosamente"})]}),d.jsxs("li",{className:"flex items-start gap-3",children:[d.jsx("span",{className:"text-pink-500 font-bold mt-0.5",children:"2."}),d.jsx("span",{children:"El sistema hará tu pedido"})]}),d.jsxs("li",{className:"flex items-start gap-3",children:[d.jsx("span",{className:"text-pink-500 font-bold mt-0.5",children:"3."}),d.jsx("span",{children:"Recibirás una notificación cuando esté listo para recoger"})]}),d.jsxs("li",{className:"flex items-start gap-3",children:[d.jsx("span",{className:"text-pink-500 font-bold mt-0.5",children:"4."}),d.jsx("span",{children:"Confirma la recepción cuando lo tengas"})]})]})]}),d.jsx("button",{onClick:te,className:"w-full py-4 px-6 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-2xl font-bold text-lg hover:from-pink-500 hover:to-pink-600 active:scale-95 transition-all shadow-lg",children:"Entendido"})]})})}),v.isOpen&&v.item&&d.jsx("div",{className:"fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4",children:d.jsx("div",{className:"bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden",children:d.jsxs("div",{className:"p-6",children:[d.jsxs("div",{className:"flex items-center justify-between mb-6",children:[d.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:"Personaliza tu bebida"}),d.jsx("button",{onClick:()=>y({item:null,isOpen:!1}),className:"p-2 hover:bg-gray-100 rounded-full transition-all",children:d.jsx(Gf,{className:"w-6 h-6 text-gray-600"})})]}),d.jsxs("div",{className:"mb-6 p-4 bg-pink-50 rounded-xl border border-pink-100",children:[d.jsx("h3",{className:"font-bold text-gray-800",children:v.item.name}),d.jsx("p",{className:"text-sm text-gray-600 mt-1",children:v.item.description})]}),v.item.hasSizeOptions&&d.jsxs("div",{className:"mb-6",children:[d.jsx("h3",{className:"text-lg font-bold text-gray-800 mb-3",children:"Tamaño"}),d.jsx("div",{className:"grid grid-cols-3 gap-3",children:["tall","grande","venti"].map(q=>d.jsxs("button",{onClick:()=>D(q),className:`py-3 px-4 rounded-xl font-medium text-sm transition-all ${_===q?"bg-gradient-to-r from-pink-400 to-pink-500 text-white shadow-md":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:[q==="tall"&&"Tall (12 oz)",q==="grande"&&"Grande (16 oz)",q==="venti"&&"Venti (20 oz)"]},q))})]}),v.item.hasMilkOptions&&d.jsxs("div",{className:"mb-6",children:[d.jsx("h3",{className:"text-lg font-bold text-gray-800 mb-3",children:"Tipo de leche"}),d.jsx("div",{className:"grid grid-cols-2 gap-3",children:[{value:"whole",label:"Entera"},{value:"2%",label:"Deslactosada"},{value:"nonfat",label:"Descremada"},{value:"almond",label:"Almendra"},{value:"coconut",label:"Coco"},{value:"oat",label:"Avena"},{value:"soy",label:"Soya"},{value:"none",label:"Sin leche"}].map(q=>d.jsx("button",{onClick:()=>U(q.value),className:`py-3 px-4 rounded-xl font-medium text-sm transition-all ${M===q.value?"bg-gradient-to-r from-pink-400 to-pink-500 text-white shadow-md":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:q.label},q.value))})]}),d.jsxs("div",{className:"flex gap-3",children:[d.jsx("button",{onClick:()=>y({item:null,isOpen:!1}),className:"flex-1 py-3 px-4 bg-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-300 active:scale-95 transition-all",children:"Cancelar"}),d.jsx("button",{onClick:A,className:"flex-1 py-3 px-4 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-xl font-bold hover:from-pink-500 hover:to-pink-600 active:scale-95 transition-all shadow-lg",children:"Agregar"})]})]})})})]})}const B6=t=>{const n=new Date(t).getDay();return n===1||n===3||n===6};function W6(){yr();const t=Wn(),e=tn(),{orderId:n,selectedItems:r,shiftDate:s}=e.state||{},[i,o]=R.useState([]),[l,u]=R.useState(""),[c,f]=R.useState(""),[m,g]=R.useState(!0),[E,N]=R.useState(!1),[S,I]=R.useState(!1),[v,y]=R.useState(!1),_="Av. De Los Deportes 515, Deportivo, 36749 Salamanca, Gto.",D="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.1!2d-101.1968!3d20.5728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDM0JzIyLjEiTiAxMDHCsDExJzQ4LjUiVw!5e0!3m2!1sen!2smx!4v1234567890123",M=s?B6(s):!1;R.useEffect(()=>{if(!r||r.length===0){J.error("No hay items en el pedido"),t("/");return}U()},[r,t]);const U=async()=>{try{const T=jt(be,"menu"),_e=(await zn(T)).docs.map(Mt=>({id:Mt.id,...Mt.data()}));o(_e)}catch(T){console.error("Error loading menu items:",T),J.error("Error al cargar los detalles del pedido")}finally{g(!1)}},k=T=>i.find(te=>te.id===T),x=T=>{switch(T){case"tall":return"Tall (12 oz)";case"grande":return"Grande (16 oz)";case"venti":return"Venti (20 oz)";default:return""}},C=T=>{switch(T){case"whole":return"Leche entera";case"2%":return"Leche deslactosada";case"nonfat":return"Leche descremada";case"almond":return"Leche de almendra";case"coconut":return"Leche de coco";case"oat":return"Leche de avena";case"soy":return"Leche de soya";case"none":return"Sin leche";default:return""}},A=async()=>{if(!n){J.error("No se encontró el ID del pedido");return}if(l.trim().length>500){J.error("El comentario es muy largo (máximo 500 caracteres)");return}if(!M&&!c.trim()){J.error("Por favor ingresa una dirección de entrega");return}N(!0);try{const T=hn(be,"orders",n),te={courierComment:l.trim(),updatedAt:new Date};M||(te.customDeliveryAddress=c.trim()),await as(T,te),J.success("¡Pedido confirmado con éxito!"),t("/")}catch(T){console.error("Error updating order:",T),J.error("Error al actualizar el pedido")}finally{N(!1)}},b=()=>{if(!e.state)return;const T=e.state;t("/menu",{state:{shiftDate:T.shiftDate,orderId:T.orderId,existingItems:T.selectedItems}})},P=async()=>{if(!n){J.error("No se encontró el ID del pedido");return}y(!0);try{const T=hn(be,"orders",n);await dT(T),J.success("Pedido cancelado"),t("/")}catch(T){console.error("Error cancelling order:",T),J.error("Error al cancelar el pedido")}finally{y(!1),I(!1)}};return m?d.jsx("div",{className:"flex items-center justify-center min-h-screen bg-pink-50",children:d.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"})}):d.jsxs("div",{className:"min-h-screen bg-pink-50 pb-32",children:[d.jsx("header",{className:"bg-gradient-to-r from-pink-400 to-pink-500 shadow-lg sticky top-0 z-20",children:d.jsxs("div",{className:"max-w-4xl mx-auto px-6 py-5 flex items-center justify-between",children:[d.jsx("button",{onClick:()=>t("/"),className:"p-2 hover:bg-white/20 rounded-full text-white transition-all active:scale-95",title:"Volver",children:d.jsx(co,{className:"w-6 h-6"})}),d.jsxs("div",{className:"text-center flex-1",children:[d.jsx("h1",{className:"text-xl font-bold text-white",children:"Resumen del Pedido"}),d.jsx("p",{className:"text-xs text-pink-100",children:"Confirma los detalles"})]}),d.jsx("div",{className:"w-10"})]})}),d.jsxs("main",{className:"max-w-4xl mx-auto px-6 py-6 space-y-6",children:[d.jsx("div",{className:"bg-gradient-to-r from-green-400 to-green-500 rounded-2xl p-6 shadow-lg",children:d.jsxs("div",{className:"flex items-center gap-4",children:[d.jsx("div",{className:"w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg flex-shrink-0",children:d.jsx(Rn,{className:"w-10 h-10 text-green-500"})}),d.jsxs("div",{className:"text-white",children:[d.jsx("h2",{className:"text-2xl font-bold mb-1",children:"¡Pedido Confirmado!"}),d.jsx("p",{className:"text-sm text-green-50",children:"Tu pedido ha sido registrado exitosamente"})]})]})}),d.jsxs("div",{className:"bg-white rounded-2xl shadow-lg overflow-hidden",children:[d.jsx("div",{className:"bg-gradient-to-r from-pink-400 to-pink-500 px-6 py-4",children:d.jsx("h3",{className:"text-lg font-bold text-white",children:"Tu Pedido"})}),d.jsx("div",{className:"p-6 space-y-4",children:r.map(T=>{const te=k(T.itemId);if(!te)return null;const _e=`${T.itemId}-${T.size||"no-size"}-${T.milkType||"no-milk"}`;return d.jsxs("div",{className:"flex items-start gap-4 pb-4 border-b border-gray-200 last:border-b-0 last:pb-0",children:[d.jsx("div",{className:"w-20 h-20 bg-[#00704A] rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden",children:te.imageUrl?d.jsx("img",{src:te.imageUrl,alt:te.name,className:"w-full h-full object-cover"}):d.jsx("span",{className:"text-2xl",children:"☕"})}),d.jsxs("div",{className:"flex-1",children:[d.jsx("h4",{className:"font-bold text-gray-800 mb-1",children:te.name}),T.size&&d.jsxs("p",{className:"text-sm text-gray-600",children:["• ",x(T.size)]}),T.milkType&&d.jsxs("p",{className:"text-sm text-gray-600",children:["• ",C(T.milkType)]})]})]},_e)})})]}),d.jsxs("div",{className:"bg-white rounded-2xl shadow-lg overflow-hidden",children:[d.jsxs("div",{className:"bg-gradient-to-r from-pink-400 to-pink-500 px-6 py-4 flex items-center gap-3",children:[d.jsx(b6,{className:"w-5 h-5 text-white"}),d.jsx("h3",{className:"text-lg font-bold text-white",children:"Dirección de Entrega"})]}),d.jsx("div",{className:"p-6",children:M?d.jsxs(d.Fragment,{children:[d.jsx("p",{className:"text-gray-800 font-medium mb-4",children:_}),d.jsx("div",{className:"w-full h-64 rounded-xl overflow-hidden shadow-md",children:d.jsx("iframe",{src:D,width:"100%",height:"100%",style:{border:0},allowFullScreen:!0,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Mapa de ubicación de entrega"})})]}):d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"mb-4 p-4 bg-blue-50 border border-blue-200 rounded-xl",children:[d.jsx("p",{className:"text-sm text-blue-800 font-medium mb-1",children:"📍 Pedido fuera de día de guardia"}),d.jsx("p",{className:"text-xs text-blue-700",children:"Por favor ingresa la dirección donde deseas recibir tu pedido"})]}),d.jsx("textarea",{value:c,onChange:T=>f(T.target.value),placeholder:"Ingresa la dirección completa de entrega...",className:"w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-400 focus:ring-2 focus:ring-pink-200 transition-all resize-none",rows:3,maxLength:200}),d.jsxs("p",{className:"text-sm text-gray-500 mt-2 text-right",children:[c.length,"/200 caracteres"]})]})})]}),d.jsxs("div",{className:"bg-white rounded-2xl shadow-lg overflow-hidden",children:[d.jsxs("div",{className:"bg-gradient-to-r from-pink-400 to-pink-500 px-6 py-4 flex items-center gap-3",children:[d.jsx(N6,{className:"w-5 h-5 text-white"}),d.jsx("h3",{className:"text-lg font-bold text-white",children:"Mensaje para el Courier"})]}),d.jsxs("div",{className:"p-6",children:[d.jsx("textarea",{value:l,onChange:T=>u(T.target.value),placeholder:"Escribe un mensaje para el courier (opcional). Ejemplo: Dejar en la recepción, tocar el timbre, etc.",className:"w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-400 focus:ring-2 focus:ring-pink-200 transition-all resize-none",rows:4,maxLength:500}),d.jsxs("p",{className:"text-sm text-gray-500 mt-2 text-right",children:[l.length,"/500 caracteres"]})]})]}),d.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[d.jsxs("button",{onClick:b,className:"px-6 py-4 bg-white border-2 border-pink-400 text-pink-500 rounded-2xl font-bold hover:bg-pink-50 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg",children:[d.jsx(Kf,{className:"w-5 h-5"}),d.jsx("span",{children:"Agregar más"})]}),d.jsxs("button",{onClick:()=>I(!0),className:"px-6 py-4 bg-white border-2 border-red-400 text-red-500 rounded-2xl font-bold hover:bg-red-50 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg",children:[d.jsx(m_,{className:"w-5 h-5"}),d.jsx("span",{children:"Cancelar pedido"})]})]}),d.jsxs("div",{className:"bg-pink-50 border-2 border-pink-200 rounded-2xl p-6",children:[d.jsx("h3",{className:"text-sm font-bold text-pink-600 mb-3 uppercase tracking-wide",children:"¿Qué sigue?"}),d.jsxs("ul",{className:"space-y-3 text-sm text-gray-700",children:[d.jsxs("li",{className:"flex items-start gap-3",children:[d.jsx("span",{className:"text-pink-500 font-bold mt-0.5",children:"1."}),d.jsx("span",{children:"El sistema procesará tu pedido"})]}),d.jsxs("li",{className:"flex items-start gap-3",children:[d.jsx("span",{className:"text-pink-500 font-bold mt-0.5",children:"2."}),d.jsx("span",{children:"El courier recogerá tu pedido"})]}),d.jsxs("li",{className:"flex items-start gap-3",children:[d.jsx("span",{className:"text-pink-500 font-bold mt-0.5",children:"3."}),d.jsx("span",{children:"Recibirás tu pedido en la dirección indicada"})]}),d.jsxs("li",{className:"flex items-start gap-3",children:[d.jsx("span",{className:"text-pink-500 font-bold mt-0.5",children:"4."}),d.jsx("span",{children:"Confirma la recepción cuando lo tengas"})]})]})]})]}),d.jsx("div",{className:"fixed bottom-0 left-0 right-0 bg-white shadow-2xl z-50 border-t border-gray-200",children:d.jsx("div",{className:"px-6 py-4",children:d.jsx("button",{onClick:A,disabled:E,className:"w-full px-6 py-4 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-2xl font-bold text-lg hover:from-pink-500 hover:to-pink-600 active:scale-95 transition-all flex items-center justify-center gap-3 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed",children:E?d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"animate-spin rounded-full h-6 w-6 border-b-2 border-white"}),d.jsx("span",{children:"Guardando..."})]}):d.jsxs(d.Fragment,{children:[d.jsx(Rn,{className:"w-6 h-6"}),d.jsx("span",{children:"Confirmar y Finalizar"})]})})})}),S&&d.jsx("div",{className:"fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4",children:d.jsx("div",{className:"bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden",children:d.jsxs("div",{className:"p-8",children:[d.jsx("div",{className:"mb-6 flex justify-center",children:d.jsx("div",{className:"w-20 h-20 bg-red-100 rounded-full flex items-center justify-center",children:d.jsx(m_,{className:"w-12 h-12 text-red-500"})})}),d.jsx("h2",{className:"text-2xl font-bold text-gray-800 text-center mb-4",children:"¿Cancelar pedido?"}),d.jsx("p",{className:"text-gray-600 text-center mb-6",children:"Esta acción no se puede deshacer. Se eliminará tu pedido completo y tendrás que empezar de nuevo."}),d.jsxs("div",{className:"flex gap-3",children:[d.jsx("button",{onClick:()=>I(!1),disabled:v,className:"flex-1 py-3 px-4 bg-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-300 active:scale-95 transition-all disabled:opacity-50",children:"No, volver"}),d.jsx("button",{onClick:P,disabled:v,className:"flex-1 py-3 px-4 bg-gradient-to-r from-red-400 to-red-500 text-white rounded-xl font-bold hover:from-red-500 hover:to-red-600 active:scale-95 transition-all shadow-lg disabled:opacity-50",children:v?d.jsxs("div",{className:"flex items-center justify-center gap-2",children:[d.jsx("div",{className:"animate-spin rounded-full h-5 w-5 border-b-2 border-white"}),d.jsx("span",{children:"Cancelando..."})]}):"Sí, cancelar"})]})]})})})]})}function H6(){const{user:t}=yr(),e=Wn(),[n,r]=R.useState([]),[s,i]=R.useState([]),[o,l]=R.useState(!0),[u,c]=R.useState("all");R.useEffect(()=>{f(),m()},[t]);const f=async()=>{if(t)try{const S=jt(be,"orders"),I=Ma(S,Zc("userId","==",t.uid)),y=(await zn(I)).docs.map(_=>({id:_.id,..._.data()}));y.sort((_,D)=>{var k,x,C,A,b,P;const M=((C=(x=(k=_.createdAt)==null?void 0:k.toDate)==null?void 0:x.call(k))==null?void 0:C.getTime())||0;return(((P=(b=(A=D.createdAt)==null?void 0:A.toDate)==null?void 0:b.call(A))==null?void 0:P.getTime())||0)-M}),r(y)}catch(S){console.error("Error loading orders:",S),J.error("Error al cargar el historial")}finally{l(!1)}},m=async()=>{try{const S=jt(be,"menu"),v=(await zn(S)).docs.map(y=>({id:y.id,...y.data()}));i(v)}catch(S){console.error("Error loading menu:",S)}},g=S=>{if(S.orderType==="surprise")return"Sorpresa del courier";if(S.itemSelections&&S.itemSelections.length>0){const I=S.itemSelections.map(v=>{const y=s.find(_=>_.id===v.itemId);return y==null?void 0:y.name}).filter(Boolean);if(I.length>0)return I.join(", ")}if(S.selectedItems&&S.selectedItems.length>0){const I=S.selectedItems.map(v=>{const y=s.find(_=>_.id===v);return y==null?void 0:y.name}).filter(Boolean);if(I.length>0)return I.join(", ")}return"Pedido registrado"},E=S=>{switch(S){case"pending":return{label:"Pendiente",className:"bg-yellow-100 text-yellow-700 border-yellow-200",icon:Pn};case"ordered":return{label:"En proceso",className:"bg-blue-100 text-blue-700 border-blue-200",icon:hI};case"delivered":return{label:"Entregado",className:"bg-purple-100 text-purple-700 border-purple-200",icon:He};case"confirmed":return{label:"Confirmado",className:"bg-green-100 text-green-700 border-green-200",icon:Rn};default:return{label:"Desconocido",className:"bg-gray-100 text-gray-700 border-gray-200",icon:Pn}}},N=u==="all"?n:n.filter(S=>S.status===u);return o?d.jsx("div",{className:"flex items-center justify-center min-h-screen bg-pink-50",children:d.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"})}):d.jsxs("div",{className:"min-h-screen bg-pink-50 pb-24",children:[d.jsx("header",{className:"bg-gradient-to-r from-pink-400 to-pink-500 shadow-lg sticky top-0 z-20",children:d.jsxs("div",{className:"max-w-4xl mx-auto px-6 py-5 flex items-center justify-between",children:[d.jsx("button",{onClick:()=>e("/"),className:"p-2 hover:bg-white/20 rounded-full text-white transition-all active:scale-95",title:"Volver",children:d.jsx(co,{className:"w-6 h-6"})}),d.jsxs("div",{className:"text-center flex-1",children:[d.jsx("h1",{className:"text-xl font-bold text-white",children:"Historial de Pedidos"}),d.jsx("p",{className:"text-xs text-pink-100",children:"Tus pedidos anteriores"})]}),d.jsx("div",{className:"w-10"})]})}),d.jsxs("main",{className:"max-w-4xl mx-auto px-6 py-6",children:[d.jsxs("div",{className:"flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide",children:[d.jsxs("button",{onClick:()=>c("all"),className:`px-5 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all ${u==="all"?"bg-gradient-to-r from-pink-400 to-pink-500 text-white shadow-md":"bg-white text-gray-700 shadow-sm hover:shadow-md"}`,children:["Todos (",n.length,")"]}),d.jsxs("button",{onClick:()=>c("pending"),className:`px-5 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all ${u==="pending"?"bg-gradient-to-r from-pink-400 to-pink-500 text-white shadow-md":"bg-white text-gray-700 shadow-sm hover:shadow-md"}`,children:["Pendientes (",n.filter(S=>S.status==="pending").length,")"]}),d.jsxs("button",{onClick:()=>c("delivered"),className:`px-5 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all ${u==="delivered"?"bg-gradient-to-r from-pink-400 to-pink-500 text-white shadow-md":"bg-white text-gray-700 shadow-sm hover:shadow-md"}`,children:["Entregados (",n.filter(S=>S.status==="delivered").length,")"]}),d.jsxs("button",{onClick:()=>c("confirmed"),className:`px-5 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all ${u==="confirmed"?"bg-gradient-to-r from-pink-400 to-pink-500 text-white shadow-md":"bg-white text-gray-700 shadow-sm hover:shadow-md"}`,children:["Confirmados (",n.filter(S=>S.status==="confirmed").length,")"]})]}),N.length===0?d.jsxs("div",{className:"bg-white rounded-2xl shadow-lg p-12 text-center",children:[d.jsx(He,{className:"w-20 h-20 text-gray-300 mx-auto mb-4"}),d.jsx("h3",{className:"text-xl font-bold text-gray-800 mb-2",children:u==="all"?"No tienes pedidos":"No hay pedidos en esta categoría"}),d.jsx("p",{className:"text-gray-600 mb-6",children:u==="all"?"Empieza haciendo tu primer pedido":"Cambia de filtro para ver otros pedidos"}),u==="all"&&d.jsx("button",{onClick:()=>e("/"),className:"px-6 py-3 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-xl font-bold hover:from-pink-500 hover:to-pink-600 active:scale-95 transition-all shadow-md",children:"Ir al inicio"})]}):d.jsx("div",{className:"space-y-4",children:N.map(S=>{const I=E(S.status),v=I.icon;return d.jsx("div",{className:"bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow",children:d.jsxs("div",{className:"p-5",children:[d.jsxs("div",{className:"flex items-start justify-between mb-4",children:[d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("div",{className:"p-2.5 bg-pink-100 rounded-xl",children:d.jsx(tr,{className:"w-5 h-5 text-pink-600"})}),d.jsxs("div",{children:[d.jsx("h3",{className:"font-bold text-gray-800 text-base",children:gt(new Date(S.shiftDate),"EEEE d 'de' MMMM",{locale:An})}),d.jsxs("p",{className:"text-xs text-gray-500",children:["Creado: ",gt(S.createdAt.toDate(),"d MMM yyyy, HH:mm",{locale:An})]})]})]}),d.jsxs("span",{className:`px-3 py-1.5 rounded-full text-xs font-bold border ${I.className} flex items-center gap-1.5`,children:[d.jsx(v,{className:"w-3.5 h-3.5"}),I.label]})]}),d.jsx("div",{className:"p-4 bg-pink-50 rounded-xl mb-3",children:d.jsxs("div",{className:"flex items-start gap-3",children:[d.jsx(He,{className:"w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5"}),d.jsxs("div",{className:"flex-1",children:[d.jsx("p",{className:"text-xs text-pink-600 mb-1 font-medium uppercase tracking-wide",children:S.orderType==="surprise"?"Sorpresa":"Pedido personalizado"}),d.jsx("p",{className:"text-sm font-medium text-gray-800",children:g(S)})]})]})}),S.courierComment&&d.jsxs("div",{className:"p-3 bg-blue-50 rounded-xl mb-3 border border-blue-100",children:[d.jsx("p",{className:"text-xs text-blue-600 mb-1 font-medium uppercase tracking-wide",children:"Mensaje para courier:"}),d.jsx("p",{className:"text-sm text-gray-700",children:S.courierComment})]}),S.feedback&&d.jsxs("div",{className:"p-3 bg-green-50 rounded-xl border border-green-100",children:[d.jsx("p",{className:"text-xs text-green-600 mb-1 font-medium uppercase tracking-wide",children:"Tu comentario:"}),d.jsx("p",{className:"text-sm text-gray-700",children:S.feedback})]}),d.jsx("div",{className:"mt-4 pt-4 border-t border-gray-100",children:d.jsxs("div",{className:"grid grid-cols-2 gap-3 text-xs text-gray-500",children:[S.deliveryTime&&d.jsxs("div",{children:[d.jsx("p",{className:"font-medium text-gray-600",children:"Entregado:"}),d.jsx("p",{children:gt(S.deliveryTime.toDate(),"d MMM, HH:mm",{locale:An})})]}),S.confirmedAt&&d.jsxs("div",{children:[d.jsx("p",{className:"font-medium text-gray-600",children:"Confirmado:"}),d.jsx("p",{children:gt(S.confirmedAt.toDate(),"d MMM, HH:mm",{locale:An})})]})]})})]})},S.id)})})]}),d.jsx("nav",{className:"fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-30",children:d.jsx("div",{className:"max-w-4xl mx-auto px-6 py-4",children:d.jsxs("div",{className:"flex items-center justify-around",children:[d.jsx("button",{onClick:()=>e("/"),className:"flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600",children:d.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 20 20",children:d.jsx("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"})})}),d.jsx("button",{className:"flex flex-col items-center gap-1 text-pink-500",children:d.jsx("div",{className:"bg-gradient-to-r from-pink-400 to-pink-500 p-2.5 rounded-xl",children:d.jsx(Pn,{className:"w-5 h-5 text-white"})})}),d.jsx("button",{onClick:()=>e("/shifts"),className:"flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600",children:d.jsx(tr,{className:"w-6 h-6"})})]})})})]})}function q6(){const{user:t}=yr(),e=Wn(),[n,r]=R.useState([]),[s,i]=R.useState(!0),[o,l]=R.useState([]);R.useEffect(()=>{u(),c()},[t]);const u=()=>{const N=[];let S=Yn(new Date),I=0;const v=30;for(;N.length<3&&I<v;){const y=S.getDay();(y===1||y===3||y===6)&&N.push(new Date(S)),S=l_(S,1),I++}l(N)},c=async()=>{if(t)try{const N=jt(be,"orders"),S=Ma(N,Zc("userId","==",t.uid)),v=(await zn(S)).docs.map(y=>({id:y.id,...y.data()}));r(v)}catch(N){console.error("Error loading orders:",N),J.error("Error al cargar los turnos")}finally{i(!1)}},f=N=>{const S=gt(N,"yyyy-MM-dd");return n.find(I=>I.shiftDate===S)},m=N=>{if(!N)return{label:"Sin pedido",className:"bg-gray-100 text-gray-600 border-gray-200",icon:Pn};switch(N.status){case"pending":case"ordered":return{label:"Pedido activo",className:"bg-blue-100 text-blue-700 border-blue-200",icon:Pn};case"delivered":return{label:"Entregado",className:"bg-purple-100 text-purple-700 border-purple-200",icon:He};case"confirmed":return{label:"Confirmado",className:"bg-green-100 text-green-700 border-green-200",icon:Rn};default:return{label:"Sin pedido",className:"bg-gray-100 text-gray-600 border-gray-200",icon:Pn}}},g=N=>{const S=Yn(new Date),I=Yn(N);if(I.getTime()===S.getTime())return"Hoy";const v=l_(S,1);return I.getTime()===v.getTime()?"Mañana":gt(N,"EEEE",{locale:An})},E=N=>{f(N)||e("/menu",{state:{shiftDate:gt(N,"yyyy-MM-dd")}})};return s?d.jsx("div",{className:"flex items-center justify-center min-h-screen bg-pink-50",children:d.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"})}):d.jsxs("div",{className:"min-h-screen bg-pink-50 pb-24",children:[d.jsx("header",{className:"bg-gradient-to-r from-pink-400 to-pink-500 shadow-lg sticky top-0 z-20",children:d.jsxs("div",{className:"max-w-4xl mx-auto px-6 py-5 flex items-center justify-between",children:[d.jsx("button",{onClick:()=>e("/"),className:"p-2 hover:bg-white/20 rounded-full text-white transition-all active:scale-95",title:"Volver",children:d.jsx(co,{className:"w-6 h-6"})}),d.jsxs("div",{className:"text-center flex-1",children:[d.jsx("h1",{className:"text-xl font-bold text-white",children:"Próximos Turnos"}),d.jsx("p",{className:"text-xs text-pink-100",children:"Tus siguientes 3 guardias"})]}),d.jsx("div",{className:"w-10"})]})}),d.jsxs("main",{className:"max-w-4xl mx-auto px-6 py-6",children:[d.jsx("div",{className:"bg-white rounded-2xl shadow-lg p-6 mb-6 border border-pink-100",children:d.jsxs("div",{className:"flex items-start gap-4",children:[d.jsx("div",{className:"p-3 bg-pink-100 rounded-xl flex-shrink-0",children:d.jsx(tr,{className:"w-6 h-6 text-pink-600"})}),d.jsxs("div",{children:[d.jsx("h2",{className:"text-lg font-bold text-gray-800 mb-2",children:"Turnos Nocturnos"}),d.jsxs("p",{className:"text-sm text-gray-600",children:["Tus guardias son todos los ",d.jsx("span",{className:"font-semibold",children:"Lunes, Miércoles y Sábados"}),". Puedes hacer tu pedido con anticipación para cualquier turno."]})]})]})}),d.jsx("div",{className:"space-y-4",children:o.map(N=>{const S=f(N),I=m(S),v=I.icon,y=Yn(N).getTime()===Yn(new Date).getTime(),_=gt(N,"yyyy-MM-dd");return d.jsx("div",{className:`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all ${S?"":"cursor-pointer"}`,onClick:()=>!S&&E(N),onKeyDown:D=>{!S&&(D.key==="Enter"||D.key===" ")&&(D.preventDefault(),E(N))},role:S?void 0:"button",tabIndex:S?void 0:0,children:d.jsxs("div",{className:"p-6",children:[d.jsxs("div",{className:"flex items-start justify-between mb-4",children:[d.jsxs("div",{className:"flex items-center gap-4",children:[d.jsx("div",{className:`p-3 rounded-xl ${y?"bg-gradient-to-br from-pink-400 to-pink-500":"bg-pink-100"}`,children:d.jsx(tr,{className:`w-6 h-6 ${y?"text-white":"text-pink-600"}`})}),d.jsxs("div",{children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("h3",{className:"font-bold text-gray-800 text-lg capitalize",children:g(N)}),y&&d.jsx("span",{className:"px-2 py-1 rounded-full text-xs font-bold bg-pink-100 text-pink-600",children:"Hoy"})]}),d.jsx("p",{className:"text-sm text-gray-600",children:gt(N,"d 'de' MMMM, yyyy",{locale:An})}),d.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"Turno nocturno"})]})]}),d.jsxs("span",{className:`px-3 py-1.5 rounded-full text-xs font-bold border ${I.className} flex items-center gap-1.5 flex-shrink-0`,children:[d.jsx(v,{className:"w-3.5 h-3.5"}),I.label]})]}),S?d.jsx("div",{className:"p-4 bg-pink-50 rounded-xl border border-pink-100",children:d.jsxs("div",{className:"flex items-start gap-3",children:[d.jsx(He,{className:"w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5"}),d.jsxs("div",{className:"flex-1",children:[d.jsx("p",{className:"text-xs text-pink-600 mb-1 font-medium uppercase tracking-wide",children:S.orderType==="surprise"?"Sorpresa":"Pedido personalizado"}),d.jsx("p",{className:"text-sm font-medium text-gray-800",children:S.orderType==="surprise"?"El courier seleccionará algo especial para ti":"Pedido registrado"})]})]})}):d.jsx("div",{className:"p-4 bg-gradient-to-r from-pink-50 to-pink-100 rounded-xl border-2 border-dashed border-pink-300",children:d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsxs("div",{children:[d.jsx("p",{className:"text-sm font-semibold text-gray-800 mb-1",children:"Aún no has hecho tu pedido"}),d.jsx("p",{className:"text-xs text-gray-600",children:"Haz clic aquí para ordenar"})]}),d.jsx("div",{className:"p-2 bg-white rounded-lg shadow-sm",children:d.jsx("svg",{className:"w-5 h-5 text-pink-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:d.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]})})]})},_)})}),d.jsx("div",{className:"mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100",children:d.jsxs("p",{className:"text-sm text-gray-700 text-center",children:["💡 ",d.jsx("span",{className:"font-semibold",children:"Tip:"})," Puedes hacer tu pedido con anticipación para cualquier turno futuro"]})})]}),d.jsx("nav",{className:"fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-30",children:d.jsx("div",{className:"max-w-4xl mx-auto px-6 py-4",children:d.jsxs("div",{className:"flex items-center justify-around",children:[d.jsx("button",{onClick:()=>e("/"),className:"flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600",children:d.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 20 20",children:d.jsx("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"})})}),d.jsx("button",{onClick:()=>e("/order-history"),className:"flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600",children:d.jsx(Pn,{className:"w-6 h-6"})}),d.jsx("button",{className:"flex flex-col items-center gap-1 text-pink-500",children:d.jsx("div",{className:"bg-gradient-to-r from-pink-400 to-pink-500 p-2.5 rounded-xl",children:d.jsx(tr,{className:"w-5 h-5 text-white"})})})]})})})]})}function K6(){const{user:t}=yr(),e=Wn(),[n,r]=R.useState([]),[s,i]=R.useState({}),[o,l]=R.useState(!0),[u,c]=R.useState("pending");R.useEffect(()=>{if(!t||t.email!=="rosilesmarcos99@gmail.com"){J.error("Acceso denegado"),e("/");return}f(),m()},[u,t,e]);const f=async()=>{try{const I=jt(be,"menu"),v=await zn(I),y={};v.docs.forEach(_=>{y[_.id]={id:_.id,..._.data()}}),i(y)}catch(I){console.error("Error loading menu:",I)}},m=async()=>{l(!0);try{const I=jt(be,"orders");let v;u==="all"?v=Ma(I):v=Ma(I,Zc("status","==",u)),console.log("Fetching orders with filter:",u);const y=await zn(v);console.log("Found orders:",y.docs.length);const _=y.docs.map(D=>{const M=D.data();return console.log("Order data:",D.id,M),{id:D.id,...M}});_.sort((D,M)=>{const U=new Date(D.shiftDate).getTime(),k=new Date(M.shiftDate).getTime();return U-k}),console.log("Sorted orders:",_),r(_)}catch(I){console.error("Error loading orders:",I),console.error("Error details:",JSON.stringify(I,null,2)),J.error(`Error: ${I instanceof Error?I.message:"Desconocido"}`)}finally{l(!1)}},g=async I=>{try{await as(hn(be,"orders",I),{status:"ordered",updatedAt:new Date}),J.success("Marcado como ordenado"),m()}catch(v){J.error("Error al actualizar"),console.error(v)}},E=async I=>{try{await as(hn(be,"orders",I),{status:"delivered",deliveryTime:new Date,updatedAt:new Date}),J.success("Marcado como entregado - Gabriela recibirá notificación"),m()}catch(v){J.error("Error al actualizar"),console.error(v)}},N=I=>I.orderType==="surprise"?"Sorpresa":I.itemSelections&&I.itemSelections.length>0?I.itemSelections.map(v=>{const y=s[v.itemId];if(!y)return"Item desconocido";let _=y.name;const D=[];if(v.size&&D.push(v.size.charAt(0).toUpperCase()+v.size.slice(1)),v.milkType){const M={whole:"Leche entera","2%":"Leche 2%",nonfat:"Descremada",almond:"Almendra",coconut:"Coco",oat:"Avena",soy:"Soya",none:"Sin leche"};D.push(M[v.milkType]||v.milkType)}return D.length>0&&(_+=` (${D.join(", ")})`),_}).join(" • "):I.selectedItems&&I.selectedItems.length>0?I.selectedItems.map(v=>{var y;return((y=s[v])==null?void 0:y.name)||"Item desconocido"}).join(", "):"Sin detalles",S=I=>{const v={pending:{bg:"bg-yellow-900 border border-yellow-700",text:"text-yellow-300",label:"Pendiente"},ordered:{bg:"bg-blue-900 border border-blue-700",text:"text-blue-300",label:"Ordenado"},delivered:{bg:"bg-purple-900 border border-purple-700",text:"text-purple-300",label:"Entregado"},confirmed:{bg:"bg-green-900 border border-green-700",text:"text-green-300",label:"Confirmado"}},y=v[I]||v.pending;return d.jsx("span",{className:`px-3 py-1 rounded-full text-xs font-medium ${y.bg} ${y.text}`,children:y.label})};return o?d.jsx("div",{className:"flex items-center justify-center min-h-screen bg-gray-900",children:d.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-coffee-600"})}):d.jsxs("div",{className:"min-h-screen bg-gray-900",children:[d.jsx("header",{className:"bg-gradient-to-r from-gray-800 via-gray-800 to-gray-900 shadow-xl border-b border-gray-700/50 backdrop-blur-sm sticky top-0 z-20",children:d.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-5",children:[d.jsxs("div",{className:"flex items-center justify-between mb-4",children:[d.jsxs("div",{className:"flex items-center gap-4",children:[d.jsx("button",{onClick:()=>e("/"),className:"p-2.5 hover:bg-gray-700/50 rounded-xl text-gray-400 hover:text-gray-200 transition-all",title:"Volver",children:d.jsx(co,{className:"w-6 h-6"})}),d.jsx("div",{className:"p-2.5 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl shadow-lg",children:d.jsx(He,{className:"w-7 h-7 text-white"})}),d.jsxs("div",{children:[d.jsx("h1",{className:"text-2xl font-bold text-white",children:"Panel de Administración"}),d.jsx("p",{className:"text-sm text-gray-400 mt-0.5",children:"Gestión de pedidos"})]})]}),d.jsxs("button",{onClick:()=>e("/admin/menu"),className:"flex items-center gap-2 px-4 py-2.5 bg-pink-600 text-white rounded-xl font-semibold hover:bg-pink-700 transition-all shadow-lg",title:"Gestión de Menú",children:[d.jsx(S6,{className:"w-5 h-5"}),"Gestionar Menú"]})]}),d.jsxs("div",{className:"flex gap-2",children:[d.jsxs("button",{onClick:()=>c("pending"),className:`px-4 py-2 rounded-lg font-medium transition-colors ${u==="pending"?"bg-yellow-900 text-yellow-300 border border-yellow-700":"bg-gray-700 text-gray-300 hover:bg-gray-600 border border-gray-600"}`,children:["Pendientes (",n.filter(I=>I.status==="pending").length,")"]}),d.jsxs("button",{onClick:()=>c("ordered"),className:`px-4 py-2 rounded-lg font-medium transition-colors ${u==="ordered"?"bg-blue-900 text-blue-300 border border-blue-700":"bg-gray-700 text-gray-300 hover:bg-gray-600 border border-gray-600"}`,children:["Ordenados (",n.filter(I=>I.status==="ordered").length,")"]}),d.jsx("button",{onClick:()=>c("all"),className:`px-4 py-2 rounded-lg font-medium transition-colors ${u==="all"?"bg-coffee-900 text-coffee-300 border border-coffee-700":"bg-gray-700 text-gray-300 hover:bg-gray-600 border border-gray-600"}`,children:"Todos"})]})]})}),d.jsxs("main",{className:"max-w-6xl mx-auto px-4 py-8",children:[n.length===0?d.jsxs("div",{className:"bg-gray-800 rounded-xl p-12 text-center border border-gray-700",children:[d.jsx(m6,{className:"w-16 h-16 text-gray-500 mx-auto mb-4"}),d.jsxs("h3",{className:"text-xl font-semibold text-gray-300 mb-2",children:["No hay pedidos ",u!=="all"?`${u==="pending"?"pendientes":"ordenados"}`:""]}),d.jsx("p",{className:"text-gray-500",children:"Los pedidos aparecerán aquí cuando Gabriela los cree"})]}):d.jsx("div",{className:"space-y-4",children:n.map(I=>{var v,y,_;return d.jsxs("div",{className:"bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 hover:shadow-xl transition-shadow",children:[d.jsx("div",{className:"flex items-start justify-between mb-4",children:d.jsxs("div",{className:"flex-1",children:[d.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[d.jsx("h3",{className:"font-bold text-xl text-white",children:gt(new Date(I.shiftDate),"EEEE d 'de' MMMM",{locale:An})}),S(I.status)]}),d.jsxs("div",{className:"flex items-center gap-2 text-sm text-gray-400",children:[d.jsx(Pn,{className:"w-4 h-4"}),d.jsxs("span",{children:["Creado: ",((_=(y=(v=I.createdAt)==null?void 0:v.toDate)==null?void 0:y.call(v))==null?void 0:_.toLocaleString("es-MX",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"}))||"N/A"]})]})]})}),d.jsxs("div",{className:"mb-4 p-4 bg-gray-700 rounded-lg border border-gray-600",children:[d.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[d.jsxs("div",{children:[d.jsx("p",{className:"text-xs font-medium text-gray-400 uppercase mb-1",children:"Tipo de pedido"}),d.jsx("p",{className:"text-white font-medium",children:I.orderType==="surprise"?"Sorpresa":"Seleccionado"})]}),d.jsxs("div",{children:[d.jsx("p",{className:"text-xs font-medium text-gray-400 uppercase mb-1",children:"Detalles"}),d.jsx("p",{className:"text-white",children:N(I)})]})]}),I.feedback&&d.jsxs("div",{className:"mt-4 pt-4 border-t border-gray-600",children:[d.jsxs("p",{className:"text-xs font-medium text-coffee-400 uppercase mb-2 flex items-center gap-2",children:[d.jsx(He,{className:"w-4 h-4"}),"Comentario de Gabriela"]}),d.jsx("div",{className:"bg-gray-800/50 p-3 rounded-lg border border-coffee-700/30",children:d.jsxs("p",{className:"text-gray-300 text-sm italic",children:['"',I.feedback,'"']})})]})]}),d.jsxs("div",{className:"flex gap-3",children:[I.status==="pending"&&d.jsxs(d.Fragment,{children:[d.jsxs("button",{onClick:()=>g(I.id),className:"flex-1 py-3 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2",children:[d.jsx(hI,{className:"w-5 h-5"}),"Marcar como Ordenado"]}),d.jsxs("button",{onClick:()=>E(I.id),className:"flex-1 py-3 px-4 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2",children:[d.jsx(Rn,{className:"w-5 h-5"}),"Marcar como Entregado"]})]}),I.status==="ordered"&&d.jsxs("button",{onClick:()=>E(I.id),className:"flex-1 py-3 px-4 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2",children:[d.jsx(Rn,{className:"w-5 h-5"}),"Marcar como Entregado"]}),(I.status==="delivered"||I.status==="confirmed")&&d.jsx("div",{className:"flex-1 py-3 px-4 bg-gray-700 text-gray-300 rounded-lg font-medium text-center border border-gray-600",children:I.status==="delivered"?"Esperando confirmación de Gabriela":"Confirmado por Gabriela"})]})]},I.id)})}),n.length>0&&d.jsxs("div",{className:"mt-8 grid grid-cols-2 md:grid-cols-4 gap-4",children:[d.jsxs("div",{className:"bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700",children:[d.jsx("p",{className:"text-sm text-gray-400 mb-1",children:"Total Pedidos"}),d.jsx("p",{className:"text-3xl font-bold text-white",children:n.length})]}),d.jsxs("div",{className:"bg-yellow-900 rounded-xl shadow-lg p-6 border border-yellow-700",children:[d.jsx("p",{className:"text-sm text-yellow-300 mb-1",children:"Pendientes"}),d.jsx("p",{className:"text-3xl font-bold text-yellow-300",children:n.filter(I=>I.status==="pending").length})]}),d.jsxs("div",{className:"bg-blue-900 rounded-xl shadow-lg p-6 border border-blue-700",children:[d.jsx("p",{className:"text-sm text-blue-300 mb-1",children:"Ordenados"}),d.jsx("p",{className:"text-3xl font-bold text-blue-300",children:n.filter(I=>I.status==="ordered").length})]}),d.jsxs("div",{className:"bg-green-900 rounded-xl shadow-lg p-6 border border-green-700",children:[d.jsx("p",{className:"text-sm text-green-300 mb-1",children:"Confirmados"}),d.jsx("p",{className:"text-3xl font-bold text-green-300",children:n.filter(I=>I.status==="confirmed").length})]})]})]})]})}function G6(){const{user:t}=yr(),e=Wn(),[n,r]=R.useState([]),[s,i]=R.useState(!0),[o,l]=R.useState(!1),[u,c]=R.useState(null),[f,m]=R.useState(!1),[g,E]=R.useState(null),[N,S]=R.useState(""),[I,v]=R.useState({name:"",category:"hot-coffee",description:"",available:!0});R.useEffect(()=>{if(!t||t.email!=="rosilesmarcos99@gmail.com"){J.error("Acceso denegado"),e("/");return}y()},[t,e]);const y=async()=>{i(!0);try{const b=jt(be,"menu"),T=(await zn(b)).docs.map(te=>({id:te.id,...te.data()}));T.sort((te,_e)=>te.category===_e.category?te.name.localeCompare(_e.name):te.category.localeCompare(_e.category)),r(T)}catch(b){console.error("Error loading menu:",b),J.error("Error al cargar el menú")}finally{i(!1)}},_=()=>{c(null),v({name:"",category:"hot-coffee",description:"",available:!0}),E(null),S(""),l(!0)},D=b=>{c(b),v({name:b.name,category:b.category,description:b.description,available:b.available}),E(null),S(b.imageUrl||""),l(!0)},M=b=>{var T;const P=(T=b.target.files)==null?void 0:T[0];if(P){if(P.size>5*1024*1024){J.error("La imagen debe ser menor a 5MB");return}if(!P.type.startsWith("image/")){J.error("Solo se permiten imágenes");return}E(P);const te=new FileReader;te.onloadend=()=>{S(te.result)},te.readAsDataURL(P)}},U=async b=>{try{const T=`menu-items/${Date.now()}-${b.name}`,te=Qv(i_,T);console.log("Uploading image to:",T),await rj(te,b);const _e=await sj(te);return console.log("Image uploaded successfully:",_e),_e}catch(P){throw console.error("Error uploading image:",P),P instanceof Error?new Error(`Error al subir imagen: ${P.message}`):new Error("Error al subir la imagen")}},k=async b=>{if(b.preventDefault(),!I.name.trim()){J.error("El nombre es requerido");return}if(!I.description.trim()){J.error("La descripción es requerida");return}m(!0);try{let P=(u==null?void 0:u.imageUrl)||"";g&&(P=await U(g));const T={name:I.name.trim(),category:I.category,description:I.description.trim(),available:I.available,imageUrl:P||null,updatedAt:new Date};u?(await as(hn(be,"menu",u.id),T),J.success("Item actualizado exitosamente")):(await lc(jt(be,"menu"),{...T,createdAt:new Date}),J.success("Item creado exitosamente")),l(!1),y()}catch(P){console.error("Error saving item:",P),P instanceof Error?J.error(`Error: ${P.message}`):J.error("Error al guardar el item. Revisa la consola para más detalles.")}finally{m(!1)}},x=async b=>{if(confirm(`¿Estás seguro de eliminar "${b.name}"?`))try{if(b.imageUrl)try{const P=Qv(i_,b.imageUrl);await ij(P)}catch(P){console.error("Error deleting image:",P)}await dT(hn(be,"menu",b.id)),J.success("Item eliminado"),y()}catch(P){console.error("Error deleting item:",P),J.error("Error al eliminar")}},C=async b=>{try{await as(hn(be,"menu",b.id),{available:!b.available,updatedAt:new Date}),J.success(b.available?"Item deshabilitado":"Item habilitado"),y()}catch(P){console.error("Error toggling availability:",P),J.error("Error al actualizar")}},A=[{value:"seasonal",label:"Temporada"},{value:"hot-coffee",label:"Café Caliente"},{value:"iced-coffee",label:"Café Frío"},{value:"cold-brew",label:"Cold Brew"},{value:"frappuccino-coffee",label:"Frappuccino Café"},{value:"frappuccino-cream",label:"Frappuccino Crema"},{value:"refreshers",label:"Refreshers"},{value:"shaken-espresso",label:"Espresso Batido"},{value:"hot-tea",label:"Té Caliente"},{value:"iced-tea",label:"Té Frío"},{value:"coffee-beans",label:"Granos de Café"},{value:"coffee",label:"Café"},{value:"food",label:"Comida"},{value:"combo",label:"Combo"}];return s?d.jsx("div",{className:"flex items-center justify-center min-h-screen bg-gray-900",children:d.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"})}):d.jsxs("div",{className:"min-h-screen bg-gray-900 pb-20",children:[d.jsx("header",{className:"bg-gradient-to-r from-gray-800 via-gray-800 to-gray-900 shadow-xl border-b border-gray-700/50 sticky top-0 z-20",children:d.jsx("div",{className:"max-w-6xl mx-auto px-4 py-5",children:d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsxs("div",{className:"flex items-center gap-4",children:[d.jsx("button",{onClick:()=>e("/admin"),className:"p-2.5 hover:bg-gray-700/50 rounded-xl text-gray-400 hover:text-gray-200 transition-all",title:"Volver",children:d.jsx(co,{className:"w-6 h-6"})}),d.jsx("div",{className:"p-2.5 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl shadow-lg",children:d.jsx(He,{className:"w-7 h-7 text-white"})}),d.jsxs("div",{children:[d.jsx("h1",{className:"text-2xl font-bold text-white",children:"Gestión de Menú"}),d.jsxs("p",{className:"text-sm text-gray-400 mt-0.5",children:[n.length," items en total"]})]})]}),d.jsxs("button",{onClick:_,className:"flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-xl font-semibold hover:from-pink-600 hover:to-pink-700 transition-all shadow-lg",children:[d.jsx(Kf,{className:"w-5 h-5"}),"Agregar Item"]})]})})}),d.jsx("main",{className:"max-w-6xl mx-auto px-4 py-8",children:n.length===0?d.jsxs("div",{className:"bg-gray-800 rounded-xl p-12 text-center border border-gray-700",children:[d.jsx(He,{className:"w-16 h-16 text-gray-500 mx-auto mb-4"}),d.jsx("h3",{className:"text-xl font-semibold text-gray-300 mb-2",children:"No hay items en el menú"}),d.jsx("p",{className:"text-gray-500 mb-6",children:"Comienza agregando tu primer item"}),d.jsxs("button",{onClick:_,className:"inline-flex items-center gap-2 px-6 py-3 bg-pink-600 text-white rounded-xl font-semibold hover:bg-pink-700 transition-all",children:[d.jsx(Kf,{className:"w-5 h-5"}),"Agregar Primer Item"]})]}):d.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:n.map(b=>{var P;return d.jsxs("div",{className:`bg-gray-800 rounded-xl shadow-lg border transition-all ${b.available?"border-gray-700":"border-gray-600 opacity-60"}`,children:[d.jsx("div",{className:"aspect-square bg-gradient-to-br from-gray-700 to-gray-800 rounded-t-xl overflow-hidden",children:b.imageUrl?d.jsx("img",{src:b.imageUrl,alt:b.name,className:"w-full h-full object-cover"}):d.jsx("div",{className:"w-full h-full flex items-center justify-center",children:d.jsx(He,{className:"w-20 h-20 text-gray-600"})})}),d.jsxs("div",{className:"p-5",children:[d.jsxs("div",{className:"mb-3",children:[d.jsx("h3",{className:"font-bold text-white text-lg mb-1 line-clamp-2",children:b.name}),d.jsx("p",{className:"text-xs text-gray-400 uppercase tracking-wide font-medium",children:((P=A.find(T=>T.value===b.category))==null?void 0:P.label)||b.category})]}),d.jsx("p",{className:"text-sm text-gray-400 mb-4 line-clamp-2",children:b.description}),d.jsx("div",{className:"mb-4",children:b.available?d.jsxs("span",{className:"inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-green-900 text-green-300 border border-green-700",children:[d.jsx("div",{className:"w-2 h-2 bg-green-400 rounded-full"}),"Disponible"]}):d.jsxs("span",{className:"inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-red-900 text-red-300 border border-red-700",children:[d.jsx("div",{className:"w-2 h-2 bg-red-400 rounded-full"}),"No disponible"]})}),d.jsxs("div",{className:"flex gap-2",children:[d.jsx("button",{onClick:()=>C(b),className:"flex-1 py-2 px-3 bg-gray-700 text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-600 transition-colors",children:b.available?"Deshabilitar":"Habilitar"}),d.jsx("button",{onClick:()=>D(b),className:"p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",title:"Editar",children:d.jsx(P6,{className:"w-5 h-5"})}),d.jsx("button",{onClick:()=>x(b),className:"p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors",title:"Eliminar",children:d.jsx(L6,{className:"w-5 h-5"})})]})]})]},b.id)})})}),o&&d.jsx("div",{className:"fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto",children:d.jsx("div",{className:"bg-gray-800 rounded-3xl shadow-2xl max-w-2xl w-full border border-gray-700 my-8",children:d.jsxs("form",{onSubmit:k,children:[d.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-700",children:[d.jsx("h2",{className:"text-2xl font-bold text-white",children:u?"Editar Item":"Agregar Nuevo Item"}),d.jsx("button",{type:"button",onClick:()=>l(!1),className:"p-2 hover:bg-gray-700 rounded-lg transition-colors text-gray-400 hover:text-gray-200",children:d.jsx(Gf,{className:"w-6 h-6"})})]}),d.jsxs("div",{className:"p-6 space-y-6",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-300 mb-3",children:"Imagen del Producto"}),N?d.jsxs("div",{className:"relative",children:[d.jsx("img",{src:N,alt:"Preview",className:"w-full h-64 object-cover rounded-xl"}),d.jsx("button",{type:"button",onClick:()=>{E(null),S((u==null?void 0:u.imageUrl)||"")},className:"absolute top-3 right-3 p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors",children:d.jsx(Gf,{className:"w-5 h-5"})})]}):d.jsxs("label",{className:"flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-600 rounded-xl cursor-pointer hover:border-pink-500 transition-colors bg-gray-700/50",children:[d.jsxs("div",{className:"flex flex-col items-center justify-center pt-5 pb-6",children:[d.jsx(x6,{className:"w-12 h-12 text-gray-500 mb-3"}),d.jsxs("p",{className:"mb-2 text-sm text-gray-400",children:[d.jsx("span",{className:"font-semibold",children:"Click para subir"})," o arrastra y suelta"]}),d.jsx("p",{className:"text-xs text-gray-500",children:"PNG, JPG, WEBP (MAX. 5MB)"})]}),d.jsx("input",{type:"file",className:"hidden",accept:"image/*",onChange:M})]})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-300 mb-2",children:"Nombre *"}),d.jsx("input",{type:"text",value:I.name,onChange:b=>v({...I,name:b.target.value}),className:"w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all",placeholder:"Ej: Caramel Macchiato",required:!0})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-300 mb-2",children:"Categoría *"}),d.jsx("select",{value:I.category,onChange:b=>v({...I,category:b.target.value}),className:"w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all",required:!0,children:A.map(b=>d.jsx("option",{value:b.value,children:b.label},b.value))})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-300 mb-2",children:"Descripción *"}),d.jsx("textarea",{value:I.description,onChange:b=>v({...I,description:b.target.value}),rows:4,className:"w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all resize-none",placeholder:"Describe el producto...",required:!0})]}),d.jsxs("div",{className:"flex items-center justify-between p-4 bg-gray-700/50 rounded-xl",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-300 mb-1",children:"Disponibilidad"}),d.jsx("p",{className:"text-xs text-gray-500",children:"¿Este item está disponible para ordenar?"})]}),d.jsx("button",{type:"button",onClick:()=>v({...I,available:!I.available}),className:`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${I.available?"bg-green-600":"bg-gray-600"}`,children:d.jsx("span",{className:`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${I.available?"translate-x-7":"translate-x-1"}`})})]})]}),d.jsxs("div",{className:"flex gap-3 p-6 border-t border-gray-700",children:[d.jsx("button",{type:"button",onClick:()=>l(!1),className:"flex-1 py-3 px-4 bg-gray-700 text-gray-300 rounded-xl font-semibold hover:bg-gray-600 transition-colors",disabled:f,children:"Cancelar"}),d.jsx("button",{type:"submit",disabled:f,className:"flex-1 py-3 px-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-xl font-semibold hover:from-pink-600 hover:to-pink-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",children:f?d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"animate-spin rounded-full h-5 w-5 border-b-2 border-white"}),"Guardando..."]}):d.jsxs(d.Fragment,{children:[d.jsx(F6,{className:"w-5 h-5"}),u?"Actualizar":"Crear Item"]})})]})]})})})]})}function xs({children:t}){const{user:e,loading:n}=yr(),r=tn();return n?d.jsx("div",{className:"flex items-center justify-center min-h-screen",children:d.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-coffee-600"})}):e?d.jsx(d.Fragment,{children:t}):d.jsx(nC,{to:"/login",state:{from:r},replace:!0})}function Q6(){return d.jsx(MM,{children:d.jsxs(SC,{children:[d.jsx(IL,{position:"top-center"}),d.jsxs(sC,{children:[d.jsx(qn,{path:"/login",element:d.jsx(bL,{})}),d.jsx(qn,{path:"/",element:d.jsx(xs,{children:d.jsx($6,{})})}),d.jsx(qn,{path:"/menu",element:d.jsx(xs,{children:d.jsx(z6,{})})}),d.jsx(qn,{path:"/order-summary",element:d.jsx(xs,{children:d.jsx(W6,{})})}),d.jsx(qn,{path:"/order-history",element:d.jsx(xs,{children:d.jsx(H6,{})})}),d.jsx(qn,{path:"/shifts",element:d.jsx(xs,{children:d.jsx(q6,{})})}),d.jsx(qn,{path:"/admin",element:d.jsx(xs,{children:d.jsx(K6,{})})}),d.jsx(qn,{path:"/admin/menu",element:d.jsx(xs,{children:d.jsx(G6,{})})})]})]})})}Cx(document.getElementById("root")).render(d.jsx(R.StrictMode,{children:d.jsx(Q6,{})}));"serviceWorker"in navigator&&navigator.serviceWorker.register("/firebase-messaging-sw.js").then(t=>{console.log("Service Worker registered successfully:",t.scope)}).catch(t=>{console.error("Service Worker registration failed:",t)});
