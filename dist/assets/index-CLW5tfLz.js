(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var hp={exports:{}},na={},dp={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ys=Symbol.for("react.element"),Rv=Symbol.for("react.portal"),Ov=Symbol.for("react.fragment"),Dv=Symbol.for("react.strict_mode"),xv=Symbol.for("react.profiler"),Lv=Symbol.for("react.provider"),Mv=Symbol.for("react.context"),Uv=Symbol.for("react.forward_ref"),bv=Symbol.for("react.suspense"),Fv=Symbol.for("react.memo"),jv=Symbol.for("react.lazy"),th=Symbol.iterator;function Vv(t){return t===null||typeof t!="object"?null:(t=th&&t[th]||t["@@iterator"],typeof t=="function"?t:null)}var pp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gp=Object.assign,mp={};function Zr(t,e,n){this.props=t,this.context=e,this.refs=mp,this.updater=n||pp}Zr.prototype.isReactComponent={};Zr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Zr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function yp(){}yp.prototype=Zr.prototype;function Fu(t,e,n){this.props=t,this.context=e,this.refs=mp,this.updater=n||pp}var ju=Fu.prototype=new yp;ju.constructor=Fu;gp(ju,Zr.prototype);ju.isPureReactComponent=!0;var nh=Array.isArray,vp=Object.prototype.hasOwnProperty,Vu={current:null},wp={key:!0,ref:!0,__self:!0,__source:!0};function _p(t,e,n){var r,i={},o=null,a=null;if(e!=null)for(r in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(o=""+e.key),e)vp.call(e,r)&&!wp.hasOwnProperty(r)&&(i[r]=e[r]);var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){for(var f=Array(c),h=0;h<c;h++)f[h]=arguments[h+2];i.children=f}if(t&&t.defaultProps)for(r in c=t.defaultProps,c)i[r]===void 0&&(i[r]=c[r]);return{$$typeof:ys,type:t,key:o,ref:a,props:i,_owner:Vu.current}}function $v(t,e){return{$$typeof:ys,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function $u(t){return typeof t=="object"&&t!==null&&t.$$typeof===ys}function zv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var rh=/\/+/g;function Ga(t,e){return typeof t=="object"&&t!==null&&t.key!=null?zv(""+t.key):e.toString(36)}function io(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case ys:case Rv:a=!0}}if(a)return a=t,i=i(a),t=r===""?"."+Ga(a,0):r,nh(i)?(n="",t!=null&&(n=t.replace(rh,"$&/")+"/"),io(i,e,n,"",function(h){return h})):i!=null&&($u(i)&&(i=$v(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(rh,"$&/")+"/")+t)),e.push(i)),1;if(a=0,r=r===""?".":r+":",nh(t))for(var c=0;c<t.length;c++){o=t[c];var f=r+Ga(o,c);a+=io(o,e,n,f,i)}else if(f=Vv(t),typeof f=="function")for(t=f.call(t),c=0;!(o=t.next()).done;)o=o.value,f=r+Ga(o,c++),a+=io(o,e,n,f,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Fs(t,e,n){if(t==null)return t;var r=[],i=0;return io(t,r,"","",function(o){return e.call(n,o,i++)}),r}function Bv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var be={current:null},so={transition:null},Hv={ReactCurrentDispatcher:be,ReactCurrentBatchConfig:so,ReactCurrentOwner:Vu};function Sp(){throw Error("act(...) is not supported in production builds of React.")}H.Children={map:Fs,forEach:function(t,e,n){Fs(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Fs(t,function(){e++}),e},toArray:function(t){return Fs(t,function(e){return e})||[]},only:function(t){if(!$u(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};H.Component=Zr;H.Fragment=Ov;H.Profiler=xv;H.PureComponent=Fu;H.StrictMode=Dv;H.Suspense=bv;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hv;H.act=Sp;H.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=gp({},t.props),i=t.key,o=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,a=Vu.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var c=t.type.defaultProps;for(f in e)vp.call(e,f)&&!wp.hasOwnProperty(f)&&(r[f]=e[f]===void 0&&c!==void 0?c[f]:e[f])}var f=arguments.length-2;if(f===1)r.children=n;else if(1<f){c=Array(f);for(var h=0;h<f;h++)c[h]=arguments[h+2];r.children=c}return{$$typeof:ys,type:t.type,key:i,ref:o,props:r,_owner:a}};H.createContext=function(t){return t={$$typeof:Mv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Lv,_context:t},t.Consumer=t};H.createElement=_p;H.createFactory=function(t){var e=_p.bind(null,t);return e.type=t,e};H.createRef=function(){return{current:null}};H.forwardRef=function(t){return{$$typeof:Uv,render:t}};H.isValidElement=$u;H.lazy=function(t){return{$$typeof:jv,_payload:{_status:-1,_result:t},_init:Bv}};H.memo=function(t,e){return{$$typeof:Fv,type:t,compare:e===void 0?null:e}};H.startTransition=function(t){var e=so.transition;so.transition={};try{t()}finally{so.transition=e}};H.unstable_act=Sp;H.useCallback=function(t,e){return be.current.useCallback(t,e)};H.useContext=function(t){return be.current.useContext(t)};H.useDebugValue=function(){};H.useDeferredValue=function(t){return be.current.useDeferredValue(t)};H.useEffect=function(t,e){return be.current.useEffect(t,e)};H.useId=function(){return be.current.useId()};H.useImperativeHandle=function(t,e,n){return be.current.useImperativeHandle(t,e,n)};H.useInsertionEffect=function(t,e){return be.current.useInsertionEffect(t,e)};H.useLayoutEffect=function(t,e){return be.current.useLayoutEffect(t,e)};H.useMemo=function(t,e){return be.current.useMemo(t,e)};H.useReducer=function(t,e,n){return be.current.useReducer(t,e,n)};H.useRef=function(t){return be.current.useRef(t)};H.useState=function(t){return be.current.useState(t)};H.useSyncExternalStore=function(t,e,n){return be.current.useSyncExternalStore(t,e,n)};H.useTransition=function(){return be.current.useTransition()};H.version="18.3.1";dp.exports=H;var le=dp.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wv=le,Kv=Symbol.for("react.element"),Gv=Symbol.for("react.fragment"),qv=Object.prototype.hasOwnProperty,Xv=Wv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Jv={key:!0,ref:!0,__self:!0,__source:!0};function Ep(t,e,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)qv.call(e,r)&&!Jv.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Kv,type:t,key:o,ref:a,props:i,_owner:Xv.current}}na.Fragment=Gv;na.jsx=Ep;na.jsxs=Ep;hp.exports=na;var Se=hp.exports,Ip={exports:{}},qe={},Tp={exports:{}},kp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(b,$){var z=b.length;b.push($);e:for(;0<z;){var ne=z-1>>>1,ue=b[ne];if(0<i(ue,$))b[ne]=$,b[z]=ue,z=ne;else break e}}function n(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var $=b[0],z=b.pop();if(z!==$){b[0]=z;e:for(var ne=0,ue=b.length,Un=ue>>>1;ne<Un;){var Je=2*(ne+1)-1,bn=b[Je],st=Je+1,Zt=b[st];if(0>i(bn,z))st<ue&&0>i(Zt,bn)?(b[ne]=Zt,b[st]=z,ne=st):(b[ne]=bn,b[Je]=z,ne=Je);else if(st<ue&&0>i(Zt,z))b[ne]=Zt,b[st]=z,ne=st;else break e}}return $}function i(b,$){var z=b.sortIndex-$.sortIndex;return z!==0?z:b.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var a=Date,c=a.now();t.unstable_now=function(){return a.now()-c}}var f=[],h=[],k=1,I=null,S=3,R=!1,O=!1,x=!1,j=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(b){for(var $=n(h);$!==null;){if($.callback===null)r(h);else if($.startTime<=b)r(h),$.sortIndex=$.expirationTime,e(f,$);else break;$=n(h)}}function N(b){if(x=!1,T(b),!O)if(n(f)!==null)O=!0,si(M);else{var $=n(h);$!==null&&oi(N,$.startTime-b)}}function M(b,$){O=!1,x&&(x=!1,E(p),p=-1),R=!0;var z=S;try{for(T($),I=n(f);I!==null&&(!(I.expirationTime>$)||b&&!_());){var ne=I.callback;if(typeof ne=="function"){I.callback=null,S=I.priorityLevel;var ue=ne(I.expirationTime<=$);$=t.unstable_now(),typeof ue=="function"?I.callback=ue:I===n(f)&&r(f),T($)}else r(f);I=n(f)}if(I!==null)var Un=!0;else{var Je=n(h);Je!==null&&oi(N,Je.startTime-$),Un=!1}return Un}finally{I=null,S=z,R=!1}}var U=!1,g=null,p=-1,m=5,v=-1;function _(){return!(t.unstable_now()-v<m)}function C(){if(g!==null){var b=t.unstable_now();v=b;var $=!0;try{$=g(!0,b)}finally{$?y():(U=!1,g=null)}}else U=!1}var y;if(typeof w=="function")y=function(){w(C)};else if(typeof MessageChannel<"u"){var _e=new MessageChannel,Dt=_e.port2;_e.port1.onmessage=C,y=function(){Dt.postMessage(null)}}else y=function(){j(C,0)};function si(b){g=b,U||(U=!0,y())}function oi(b,$){p=j(function(){b(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(b){b.callback=null},t.unstable_continueExecution=function(){O||R||(O=!0,si(M))},t.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):m=0<b?Math.floor(1e3/b):5},t.unstable_getCurrentPriorityLevel=function(){return S},t.unstable_getFirstCallbackNode=function(){return n(f)},t.unstable_next=function(b){switch(S){case 1:case 2:case 3:var $=3;break;default:$=S}var z=S;S=$;try{return b()}finally{S=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(b,$){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var z=S;S=b;try{return $()}finally{S=z}},t.unstable_scheduleCallback=function(b,$,z){var ne=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?ne+z:ne):z=ne,b){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=z+ue,b={id:k++,callback:$,priorityLevel:b,startTime:z,expirationTime:ue,sortIndex:-1},z>ne?(b.sortIndex=z,e(h,b),n(f)===null&&b===n(h)&&(x?(E(p),p=-1):x=!0,oi(N,z-ne))):(b.sortIndex=ue,e(f,b),O||R||(O=!0,si(M))),b},t.unstable_shouldYield=_,t.unstable_wrapCallback=function(b){var $=S;return function(){var z=S;S=$;try{return b.apply(this,arguments)}finally{S=z}}}})(kp);Tp.exports=kp;var Qv=Tp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yv=le,Ge=Qv;function D(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Cp=new Set,Xi={};function hr(t,e){Hr(t,e),Hr(t+"Capture",e)}function Hr(t,e){for(Xi[t]=e,t=0;t<e.length;t++)Cp.add(e[t])}var Ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ll=Object.prototype.hasOwnProperty,Zv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ih={},sh={};function e0(t){return Ll.call(sh,t)?!0:Ll.call(ih,t)?!1:Zv.test(t)?sh[t]=!0:(ih[t]=!0,!1)}function t0(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function n0(t,e,n,r){if(e===null||typeof e>"u"||t0(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Fe(t,e,n,r,i,o,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=a}var Te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Te[t]=new Fe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Te[e]=new Fe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Te[t]=new Fe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Te[t]=new Fe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Te[t]=new Fe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Te[t]=new Fe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Te[t]=new Fe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Te[t]=new Fe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Te[t]=new Fe(t,5,!1,t.toLowerCase(),null,!1,!1)});var zu=/[\-:]([a-z])/g;function Bu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(zu,Bu);Te[e]=new Fe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(zu,Bu);Te[e]=new Fe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(zu,Bu);Te[e]=new Fe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Te[t]=new Fe(t,1,!1,t.toLowerCase(),null,!1,!1)});Te.xlinkHref=new Fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Te[t]=new Fe(t,1,!1,t.toLowerCase(),null,!0,!0)});function Hu(t,e,n,r){var i=Te.hasOwnProperty(e)?Te[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(n0(e,n,i,r)&&(n=null),r||i===null?e0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Yt=Yv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,js=Symbol.for("react.element"),Sr=Symbol.for("react.portal"),Er=Symbol.for("react.fragment"),Wu=Symbol.for("react.strict_mode"),Ml=Symbol.for("react.profiler"),Ap=Symbol.for("react.provider"),Pp=Symbol.for("react.context"),Ku=Symbol.for("react.forward_ref"),Ul=Symbol.for("react.suspense"),bl=Symbol.for("react.suspense_list"),Gu=Symbol.for("react.memo"),un=Symbol.for("react.lazy"),Np=Symbol.for("react.offscreen"),oh=Symbol.iterator;function Ii(t){return t===null||typeof t!="object"?null:(t=oh&&t[oh]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Object.assign,qa;function Oi(t){if(qa===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);qa=e&&e[1]||""}return`
`+qa+t}var Xa=!1;function Ja(t,e){if(!t||Xa)return"";Xa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,c=o.length-1;1<=a&&0<=c&&i[a]!==o[c];)c--;for(;1<=a&&0<=c;a--,c--)if(i[a]!==o[c]){if(a!==1||c!==1)do if(a--,c--,0>c||i[a]!==o[c]){var f=`
`+i[a].replace(" at new "," at ");return t.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",t.displayName)),f}while(1<=a&&0<=c);break}}}finally{Xa=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Oi(t):""}function r0(t){switch(t.tag){case 5:return Oi(t.type);case 16:return Oi("Lazy");case 13:return Oi("Suspense");case 19:return Oi("SuspenseList");case 0:case 2:case 15:return t=Ja(t.type,!1),t;case 11:return t=Ja(t.type.render,!1),t;case 1:return t=Ja(t.type,!0),t;default:return""}}function Fl(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Er:return"Fragment";case Sr:return"Portal";case Ml:return"Profiler";case Wu:return"StrictMode";case Ul:return"Suspense";case bl:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Pp:return(t.displayName||"Context")+".Consumer";case Ap:return(t._context.displayName||"Context")+".Provider";case Ku:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Gu:return e=t.displayName||null,e!==null?e:Fl(t.type)||"Memo";case un:e=t._payload,t=t._init;try{return Fl(t(e))}catch{}}return null}function i0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fl(e);case 8:return e===Wu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Nn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Rp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function s0(t){var e=Rp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Vs(t){t._valueTracker||(t._valueTracker=s0(t))}function Op(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Rp(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Eo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function jl(t,e){var n=e.checked;return oe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ah(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Nn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Dp(t,e){e=e.checked,e!=null&&Hu(t,"checked",e,!1)}function Vl(t,e){Dp(t,e);var n=Nn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?$l(t,e.type,n):e.hasOwnProperty("defaultValue")&&$l(t,e.type,Nn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function lh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function $l(t,e,n){(e!=="number"||Eo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Di=Array.isArray;function Lr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Nn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function zl(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(D(91));return oe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function uh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(D(92));if(Di(n)){if(1<n.length)throw Error(D(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Nn(n)}}function xp(t,e){var n=Nn(e.value),r=Nn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ch(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Lp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bl(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Lp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var $s,Mp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for($s=$s||document.createElement("div"),$s.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=$s.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ji(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Mi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},o0=["Webkit","ms","Moz","O"];Object.keys(Mi).forEach(function(t){o0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Mi[e]=Mi[t]})});function Up(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Mi.hasOwnProperty(t)&&Mi[t]?(""+e).trim():e+"px"}function bp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Up(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var a0=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hl(t,e){if(e){if(a0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(D(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(D(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(D(61))}if(e.style!=null&&typeof e.style!="object")throw Error(D(62))}}function Wl(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kl=null;function qu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Gl=null,Mr=null,Ur=null;function fh(t){if(t=_s(t)){if(typeof Gl!="function")throw Error(D(280));var e=t.stateNode;e&&(e=aa(e),Gl(t.stateNode,t.type,e))}}function Fp(t){Mr?Ur?Ur.push(t):Ur=[t]:Mr=t}function jp(){if(Mr){var t=Mr,e=Ur;if(Ur=Mr=null,fh(t),e)for(t=0;t<e.length;t++)fh(e[t])}}function Vp(t,e){return t(e)}function $p(){}var Qa=!1;function zp(t,e,n){if(Qa)return t(e,n);Qa=!0;try{return Vp(t,e,n)}finally{Qa=!1,(Mr!==null||Ur!==null)&&($p(),jp())}}function Qi(t,e){var n=t.stateNode;if(n===null)return null;var r=aa(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(D(231,e,typeof n));return n}var ql=!1;if(Ht)try{var Ti={};Object.defineProperty(Ti,"passive",{get:function(){ql=!0}}),window.addEventListener("test",Ti,Ti),window.removeEventListener("test",Ti,Ti)}catch{ql=!1}function l0(t,e,n,r,i,o,a,c,f){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(k){this.onError(k)}}var Ui=!1,Io=null,To=!1,Xl=null,u0={onError:function(t){Ui=!0,Io=t}};function c0(t,e,n,r,i,o,a,c,f){Ui=!1,Io=null,l0.apply(u0,arguments)}function f0(t,e,n,r,i,o,a,c,f){if(c0.apply(this,arguments),Ui){if(Ui){var h=Io;Ui=!1,Io=null}else throw Error(D(198));To||(To=!0,Xl=h)}}function dr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Bp(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function hh(t){if(dr(t)!==t)throw Error(D(188))}function h0(t){var e=t.alternate;if(!e){if(e=dr(t),e===null)throw Error(D(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return hh(i),t;if(o===r)return hh(i),e;o=o.sibling}throw Error(D(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,c=i.child;c;){if(c===n){a=!0,n=i,r=o;break}if(c===r){a=!0,r=i,n=o;break}c=c.sibling}if(!a){for(c=o.child;c;){if(c===n){a=!0,n=o,r=i;break}if(c===r){a=!0,r=o,n=i;break}c=c.sibling}if(!a)throw Error(D(189))}}if(n.alternate!==r)throw Error(D(190))}if(n.tag!==3)throw Error(D(188));return n.stateNode.current===n?t:e}function Hp(t){return t=h0(t),t!==null?Wp(t):null}function Wp(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Wp(t);if(e!==null)return e;t=t.sibling}return null}var Kp=Ge.unstable_scheduleCallback,dh=Ge.unstable_cancelCallback,d0=Ge.unstable_shouldYield,p0=Ge.unstable_requestPaint,fe=Ge.unstable_now,g0=Ge.unstable_getCurrentPriorityLevel,Xu=Ge.unstable_ImmediatePriority,Gp=Ge.unstable_UserBlockingPriority,ko=Ge.unstable_NormalPriority,m0=Ge.unstable_LowPriority,qp=Ge.unstable_IdlePriority,ra=null,Ct=null;function y0(t){if(Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(ra,t,void 0,(t.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:_0,v0=Math.log,w0=Math.LN2;function _0(t){return t>>>=0,t===0?32:31-(v0(t)/w0|0)|0}var zs=64,Bs=4194304;function xi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Co(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,a=n&268435455;if(a!==0){var c=a&~i;c!==0?r=xi(c):(o&=a,o!==0&&(r=xi(o)))}else a=n&~i,a!==0?r=xi(a):o!==0&&(r=xi(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-dt(e),i=1<<n,r|=t[n],e&=~i;return r}function S0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function E0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var a=31-dt(o),c=1<<a,f=i[a];f===-1?(!(c&n)||c&r)&&(i[a]=S0(c,e)):f<=e&&(t.expiredLanes|=c),o&=~c}}function Jl(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Xp(){var t=zs;return zs<<=1,!(zs&4194240)&&(zs=64),t}function Ya(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function vs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-dt(e),t[e]=n}function I0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-dt(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function Ju(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-dt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var J=0;function Jp(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Qp,Qu,Yp,Zp,eg,Ql=!1,Hs=[],_n=null,Sn=null,En=null,Yi=new Map,Zi=new Map,fn=[],T0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ph(t,e){switch(t){case"focusin":case"focusout":_n=null;break;case"dragenter":case"dragleave":Sn=null;break;case"mouseover":case"mouseout":En=null;break;case"pointerover":case"pointerout":Yi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zi.delete(e.pointerId)}}function ki(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=_s(e),e!==null&&Qu(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function k0(t,e,n,r,i){switch(e){case"focusin":return _n=ki(_n,t,e,n,r,i),!0;case"dragenter":return Sn=ki(Sn,t,e,n,r,i),!0;case"mouseover":return En=ki(En,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return Yi.set(o,ki(Yi.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Zi.set(o,ki(Zi.get(o)||null,t,e,n,r,i)),!0}return!1}function tg(t){var e=Kn(t.target);if(e!==null){var n=dr(e);if(n!==null){if(e=n.tag,e===13){if(e=Bp(n),e!==null){t.blockedOn=e,eg(t.priority,function(){Yp(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function oo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Yl(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Kl=r,n.target.dispatchEvent(r),Kl=null}else return e=_s(n),e!==null&&Qu(e),t.blockedOn=n,!1;e.shift()}return!0}function gh(t,e,n){oo(t)&&n.delete(e)}function C0(){Ql=!1,_n!==null&&oo(_n)&&(_n=null),Sn!==null&&oo(Sn)&&(Sn=null),En!==null&&oo(En)&&(En=null),Yi.forEach(gh),Zi.forEach(gh)}function Ci(t,e){t.blockedOn===e&&(t.blockedOn=null,Ql||(Ql=!0,Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority,C0)))}function es(t){function e(i){return Ci(i,t)}if(0<Hs.length){Ci(Hs[0],t);for(var n=1;n<Hs.length;n++){var r=Hs[n];r.blockedOn===t&&(r.blockedOn=null)}}for(_n!==null&&Ci(_n,t),Sn!==null&&Ci(Sn,t),En!==null&&Ci(En,t),Yi.forEach(e),Zi.forEach(e),n=0;n<fn.length;n++)r=fn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<fn.length&&(n=fn[0],n.blockedOn===null);)tg(n),n.blockedOn===null&&fn.shift()}var br=Yt.ReactCurrentBatchConfig,Ao=!0;function A0(t,e,n,r){var i=J,o=br.transition;br.transition=null;try{J=1,Yu(t,e,n,r)}finally{J=i,br.transition=o}}function P0(t,e,n,r){var i=J,o=br.transition;br.transition=null;try{J=4,Yu(t,e,n,r)}finally{J=i,br.transition=o}}function Yu(t,e,n,r){if(Ao){var i=Yl(t,e,n,r);if(i===null)ll(t,e,r,Po,n),ph(t,r);else if(k0(i,t,e,n,r))r.stopPropagation();else if(ph(t,r),e&4&&-1<T0.indexOf(t)){for(;i!==null;){var o=_s(i);if(o!==null&&Qp(o),o=Yl(t,e,n,r),o===null&&ll(t,e,r,Po,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ll(t,e,r,null,n)}}var Po=null;function Yl(t,e,n,r){if(Po=null,t=qu(r),t=Kn(t),t!==null)if(e=dr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Bp(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Po=t,null}function ng(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(g0()){case Xu:return 1;case Gp:return 4;case ko:case m0:return 16;case qp:return 536870912;default:return 16}default:return 16}}var vn=null,Zu=null,ao=null;function rg(){if(ao)return ao;var t,e=Zu,n=e.length,r,i="value"in vn?vn.value:vn.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var a=n-t;for(r=1;r<=a&&e[n-r]===i[o-r];r++);return ao=i.slice(t,1<r?1-r:void 0)}function lo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ws(){return!0}function mh(){return!1}function Xe(t){function e(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(n=t[c],this[c]=n?n(o):o[c]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ws:mh,this.isPropagationStopped=mh,this}return oe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ws)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ws)},persist:function(){},isPersistent:Ws}),e}var ei={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ec=Xe(ei),ws=oe({},ei,{view:0,detail:0}),N0=Xe(ws),Za,el,Ai,ia=oe({},ws,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ai&&(Ai&&t.type==="mousemove"?(Za=t.screenX-Ai.screenX,el=t.screenY-Ai.screenY):el=Za=0,Ai=t),Za)},movementY:function(t){return"movementY"in t?t.movementY:el}}),yh=Xe(ia),R0=oe({},ia,{dataTransfer:0}),O0=Xe(R0),D0=oe({},ws,{relatedTarget:0}),tl=Xe(D0),x0=oe({},ei,{animationName:0,elapsedTime:0,pseudoElement:0}),L0=Xe(x0),M0=oe({},ei,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),U0=Xe(M0),b0=oe({},ei,{data:0}),vh=Xe(b0),F0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},j0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},V0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=V0[t])?!!e[t]:!1}function tc(){return $0}var z0=oe({},ws,{key:function(t){if(t.key){var e=F0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=lo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?j0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tc,charCode:function(t){return t.type==="keypress"?lo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?lo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),B0=Xe(z0),H0=oe({},ia,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wh=Xe(H0),W0=oe({},ws,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tc}),K0=Xe(W0),G0=oe({},ei,{propertyName:0,elapsedTime:0,pseudoElement:0}),q0=Xe(G0),X0=oe({},ia,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),J0=Xe(X0),Q0=[9,13,27,32],nc=Ht&&"CompositionEvent"in window,bi=null;Ht&&"documentMode"in document&&(bi=document.documentMode);var Y0=Ht&&"TextEvent"in window&&!bi,ig=Ht&&(!nc||bi&&8<bi&&11>=bi),_h=" ",Sh=!1;function sg(t,e){switch(t){case"keyup":return Q0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function og(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ir=!1;function Z0(t,e){switch(t){case"compositionend":return og(e);case"keypress":return e.which!==32?null:(Sh=!0,_h);case"textInput":return t=e.data,t===_h&&Sh?null:t;default:return null}}function ew(t,e){if(Ir)return t==="compositionend"||!nc&&sg(t,e)?(t=rg(),ao=Zu=vn=null,Ir=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ig&&e.locale!=="ko"?null:e.data;default:return null}}var tw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Eh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!tw[t.type]:e==="textarea"}function ag(t,e,n,r){Fp(r),e=No(e,"onChange"),0<e.length&&(n=new ec("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Fi=null,ts=null;function nw(t){vg(t,0)}function sa(t){var e=Cr(t);if(Op(e))return t}function rw(t,e){if(t==="change")return e}var lg=!1;if(Ht){var nl;if(Ht){var rl="oninput"in document;if(!rl){var Ih=document.createElement("div");Ih.setAttribute("oninput","return;"),rl=typeof Ih.oninput=="function"}nl=rl}else nl=!1;lg=nl&&(!document.documentMode||9<document.documentMode)}function Th(){Fi&&(Fi.detachEvent("onpropertychange",ug),ts=Fi=null)}function ug(t){if(t.propertyName==="value"&&sa(ts)){var e=[];ag(e,ts,t,qu(t)),zp(nw,e)}}function iw(t,e,n){t==="focusin"?(Th(),Fi=e,ts=n,Fi.attachEvent("onpropertychange",ug)):t==="focusout"&&Th()}function sw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return sa(ts)}function ow(t,e){if(t==="click")return sa(e)}function aw(t,e){if(t==="input"||t==="change")return sa(e)}function lw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var gt=typeof Object.is=="function"?Object.is:lw;function ns(t,e){if(gt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ll.call(e,i)||!gt(t[i],e[i]))return!1}return!0}function kh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ch(t,e){var n=kh(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=kh(n)}}function cg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?cg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function fg(){for(var t=window,e=Eo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Eo(t.document)}return e}function rc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function uw(t){var e=fg(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&cg(n.ownerDocument.documentElement,n)){if(r!==null&&rc(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=Ch(n,o);var a=Ch(n,r);i&&a&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var cw=Ht&&"documentMode"in document&&11>=document.documentMode,Tr=null,Zl=null,ji=null,eu=!1;function Ah(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;eu||Tr==null||Tr!==Eo(r)||(r=Tr,"selectionStart"in r&&rc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ji&&ns(ji,r)||(ji=r,r=No(Zl,"onSelect"),0<r.length&&(e=new ec("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Tr)))}function Ks(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var kr={animationend:Ks("Animation","AnimationEnd"),animationiteration:Ks("Animation","AnimationIteration"),animationstart:Ks("Animation","AnimationStart"),transitionend:Ks("Transition","TransitionEnd")},il={},hg={};Ht&&(hg=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);function oa(t){if(il[t])return il[t];if(!kr[t])return t;var e=kr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in hg)return il[t]=e[n];return t}var dg=oa("animationend"),pg=oa("animationiteration"),gg=oa("animationstart"),mg=oa("transitionend"),yg=new Map,Ph="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dn(t,e){yg.set(t,e),hr(e,[t])}for(var sl=0;sl<Ph.length;sl++){var ol=Ph[sl],fw=ol.toLowerCase(),hw=ol[0].toUpperCase()+ol.slice(1);Dn(fw,"on"+hw)}Dn(dg,"onAnimationEnd");Dn(pg,"onAnimationIteration");Dn(gg,"onAnimationStart");Dn("dblclick","onDoubleClick");Dn("focusin","onFocus");Dn("focusout","onBlur");Dn(mg,"onTransitionEnd");Hr("onMouseEnter",["mouseout","mouseover"]);Hr("onMouseLeave",["mouseout","mouseover"]);Hr("onPointerEnter",["pointerout","pointerover"]);Hr("onPointerLeave",["pointerout","pointerover"]);hr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hr("onBeforeInput",["compositionend","keypress","textInput","paste"]);hr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Li="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Li));function Nh(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,f0(r,e,void 0,t),t.currentTarget=null}function vg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var a=r.length-1;0<=a;a--){var c=r[a],f=c.instance,h=c.currentTarget;if(c=c.listener,f!==o&&i.isPropagationStopped())break e;Nh(i,c,h),o=f}else for(a=0;a<r.length;a++){if(c=r[a],f=c.instance,h=c.currentTarget,c=c.listener,f!==o&&i.isPropagationStopped())break e;Nh(i,c,h),o=f}}}if(To)throw t=Xl,To=!1,Xl=null,t}function ee(t,e){var n=e[su];n===void 0&&(n=e[su]=new Set);var r=t+"__bubble";n.has(r)||(wg(e,t,2,!1),n.add(r))}function al(t,e,n){var r=0;e&&(r|=4),wg(n,t,r,e)}var Gs="_reactListening"+Math.random().toString(36).slice(2);function rs(t){if(!t[Gs]){t[Gs]=!0,Cp.forEach(function(n){n!=="selectionchange"&&(dw.has(n)||al(n,!1,t),al(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Gs]||(e[Gs]=!0,al("selectionchange",!1,e))}}function wg(t,e,n,r){switch(ng(e)){case 1:var i=A0;break;case 4:i=P0;break;default:i=Yu}n=i.bind(null,e,n,t),i=void 0,!ql||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ll(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var c=r.stateNode.containerInfo;if(c===i||c.nodeType===8&&c.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var f=a.tag;if((f===3||f===4)&&(f=a.stateNode.containerInfo,f===i||f.nodeType===8&&f.parentNode===i))return;a=a.return}for(;c!==null;){if(a=Kn(c),a===null)return;if(f=a.tag,f===5||f===6){r=o=a;continue e}c=c.parentNode}}r=r.return}zp(function(){var h=o,k=qu(n),I=[];e:{var S=yg.get(t);if(S!==void 0){var R=ec,O=t;switch(t){case"keypress":if(lo(n)===0)break e;case"keydown":case"keyup":R=B0;break;case"focusin":O="focus",R=tl;break;case"focusout":O="blur",R=tl;break;case"beforeblur":case"afterblur":R=tl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=yh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=O0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=K0;break;case dg:case pg:case gg:R=L0;break;case mg:R=q0;break;case"scroll":R=N0;break;case"wheel":R=J0;break;case"copy":case"cut":case"paste":R=U0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=wh}var x=(e&4)!==0,j=!x&&t==="scroll",E=x?S!==null?S+"Capture":null:S;x=[];for(var w=h,T;w!==null;){T=w;var N=T.stateNode;if(T.tag===5&&N!==null&&(T=N,E!==null&&(N=Qi(w,E),N!=null&&x.push(is(w,N,T)))),j)break;w=w.return}0<x.length&&(S=new R(S,O,null,n,k),I.push({event:S,listeners:x}))}}if(!(e&7)){e:{if(S=t==="mouseover"||t==="pointerover",R=t==="mouseout"||t==="pointerout",S&&n!==Kl&&(O=n.relatedTarget||n.fromElement)&&(Kn(O)||O[Wt]))break e;if((R||S)&&(S=k.window===k?k:(S=k.ownerDocument)?S.defaultView||S.parentWindow:window,R?(O=n.relatedTarget||n.toElement,R=h,O=O?Kn(O):null,O!==null&&(j=dr(O),O!==j||O.tag!==5&&O.tag!==6)&&(O=null)):(R=null,O=h),R!==O)){if(x=yh,N="onMouseLeave",E="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(x=wh,N="onPointerLeave",E="onPointerEnter",w="pointer"),j=R==null?S:Cr(R),T=O==null?S:Cr(O),S=new x(N,w+"leave",R,n,k),S.target=j,S.relatedTarget=T,N=null,Kn(k)===h&&(x=new x(E,w+"enter",O,n,k),x.target=T,x.relatedTarget=j,N=x),j=N,R&&O)t:{for(x=R,E=O,w=0,T=x;T;T=_r(T))w++;for(T=0,N=E;N;N=_r(N))T++;for(;0<w-T;)x=_r(x),w--;for(;0<T-w;)E=_r(E),T--;for(;w--;){if(x===E||E!==null&&x===E.alternate)break t;x=_r(x),E=_r(E)}x=null}else x=null;R!==null&&Rh(I,S,R,x,!1),O!==null&&j!==null&&Rh(I,j,O,x,!0)}}e:{if(S=h?Cr(h):window,R=S.nodeName&&S.nodeName.toLowerCase(),R==="select"||R==="input"&&S.type==="file")var M=rw;else if(Eh(S))if(lg)M=aw;else{M=sw;var U=iw}else(R=S.nodeName)&&R.toLowerCase()==="input"&&(S.type==="checkbox"||S.type==="radio")&&(M=ow);if(M&&(M=M(t,h))){ag(I,M,n,k);break e}U&&U(t,S,h),t==="focusout"&&(U=S._wrapperState)&&U.controlled&&S.type==="number"&&$l(S,"number",S.value)}switch(U=h?Cr(h):window,t){case"focusin":(Eh(U)||U.contentEditable==="true")&&(Tr=U,Zl=h,ji=null);break;case"focusout":ji=Zl=Tr=null;break;case"mousedown":eu=!0;break;case"contextmenu":case"mouseup":case"dragend":eu=!1,Ah(I,n,k);break;case"selectionchange":if(cw)break;case"keydown":case"keyup":Ah(I,n,k)}var g;if(nc)e:{switch(t){case"compositionstart":var p="onCompositionStart";break e;case"compositionend":p="onCompositionEnd";break e;case"compositionupdate":p="onCompositionUpdate";break e}p=void 0}else Ir?sg(t,n)&&(p="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(p="onCompositionStart");p&&(ig&&n.locale!=="ko"&&(Ir||p!=="onCompositionStart"?p==="onCompositionEnd"&&Ir&&(g=rg()):(vn=k,Zu="value"in vn?vn.value:vn.textContent,Ir=!0)),U=No(h,p),0<U.length&&(p=new vh(p,t,null,n,k),I.push({event:p,listeners:U}),g?p.data=g:(g=og(n),g!==null&&(p.data=g)))),(g=Y0?Z0(t,n):ew(t,n))&&(h=No(h,"onBeforeInput"),0<h.length&&(k=new vh("onBeforeInput","beforeinput",null,n,k),I.push({event:k,listeners:h}),k.data=g))}vg(I,e)})}function is(t,e,n){return{instance:t,listener:e,currentTarget:n}}function No(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Qi(t,n),o!=null&&r.unshift(is(t,o,i)),o=Qi(t,e),o!=null&&r.push(is(t,o,i))),t=t.return}return r}function _r(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Rh(t,e,n,r,i){for(var o=e._reactName,a=[];n!==null&&n!==r;){var c=n,f=c.alternate,h=c.stateNode;if(f!==null&&f===r)break;c.tag===5&&h!==null&&(c=h,i?(f=Qi(n,o),f!=null&&a.unshift(is(n,f,c))):i||(f=Qi(n,o),f!=null&&a.push(is(n,f,c)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var pw=/\r\n?/g,gw=/\u0000|\uFFFD/g;function Oh(t){return(typeof t=="string"?t:""+t).replace(pw,`
`).replace(gw,"")}function qs(t,e,n){if(e=Oh(e),Oh(t)!==e&&n)throw Error(D(425))}function Ro(){}var tu=null,nu=null;function ru(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var iu=typeof setTimeout=="function"?setTimeout:void 0,mw=typeof clearTimeout=="function"?clearTimeout:void 0,Dh=typeof Promise=="function"?Promise:void 0,yw=typeof queueMicrotask=="function"?queueMicrotask:typeof Dh<"u"?function(t){return Dh.resolve(null).then(t).catch(vw)}:iu;function vw(t){setTimeout(function(){throw t})}function ul(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),es(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);es(e)}function In(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function xh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ti=Math.random().toString(36).slice(2),It="__reactFiber$"+ti,ss="__reactProps$"+ti,Wt="__reactContainer$"+ti,su="__reactEvents$"+ti,ww="__reactListeners$"+ti,_w="__reactHandles$"+ti;function Kn(t){var e=t[It];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Wt]||n[It]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=xh(t);t!==null;){if(n=t[It])return n;t=xh(t)}return e}t=n,n=t.parentNode}return null}function _s(t){return t=t[It]||t[Wt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Cr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(D(33))}function aa(t){return t[ss]||null}var ou=[],Ar=-1;function xn(t){return{current:t}}function te(t){0>Ar||(t.current=ou[Ar],ou[Ar]=null,Ar--)}function Y(t,e){Ar++,ou[Ar]=t.current,t.current=e}var Rn={},Ne=xn(Rn),$e=xn(!1),nr=Rn;function Wr(t,e){var n=t.type.contextTypes;if(!n)return Rn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ze(t){return t=t.childContextTypes,t!=null}function Oo(){te($e),te(Ne)}function Lh(t,e,n){if(Ne.current!==Rn)throw Error(D(168));Y(Ne,e),Y($e,n)}function _g(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(D(108,i0(t)||"Unknown",i));return oe({},n,r)}function Do(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Rn,nr=Ne.current,Y(Ne,t),Y($e,$e.current),!0}function Mh(t,e,n){var r=t.stateNode;if(!r)throw Error(D(169));n?(t=_g(t,e,nr),r.__reactInternalMemoizedMergedChildContext=t,te($e),te(Ne),Y(Ne,t)):te($e),Y($e,n)}var Ut=null,la=!1,cl=!1;function Sg(t){Ut===null?Ut=[t]:Ut.push(t)}function Sw(t){la=!0,Sg(t)}function Ln(){if(!cl&&Ut!==null){cl=!0;var t=0,e=J;try{var n=Ut;for(J=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ut=null,la=!1}catch(i){throw Ut!==null&&(Ut=Ut.slice(t+1)),Kp(Xu,Ln),i}finally{J=e,cl=!1}}return null}var Pr=[],Nr=0,xo=null,Lo=0,Ye=[],Ze=0,rr=null,Ft=1,jt="";function zn(t,e){Pr[Nr++]=Lo,Pr[Nr++]=xo,xo=t,Lo=e}function Eg(t,e,n){Ye[Ze++]=Ft,Ye[Ze++]=jt,Ye[Ze++]=rr,rr=t;var r=Ft;t=jt;var i=32-dt(r)-1;r&=~(1<<i),n+=1;var o=32-dt(e)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Ft=1<<32-dt(e)+i|n<<i|r,jt=o+t}else Ft=1<<o|n<<i|r,jt=t}function ic(t){t.return!==null&&(zn(t,1),Eg(t,1,0))}function sc(t){for(;t===xo;)xo=Pr[--Nr],Pr[Nr]=null,Lo=Pr[--Nr],Pr[Nr]=null;for(;t===rr;)rr=Ye[--Ze],Ye[Ze]=null,jt=Ye[--Ze],Ye[Ze]=null,Ft=Ye[--Ze],Ye[Ze]=null}var Ke=null,We=null,re=!1,ut=null;function Ig(t,e){var n=et(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Uh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ke=t,We=In(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ke=t,We=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=rr!==null?{id:Ft,overflow:jt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=et(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ke=t,We=null,!0):!1;default:return!1}}function au(t){return(t.mode&1)!==0&&(t.flags&128)===0}function lu(t){if(re){var e=We;if(e){var n=e;if(!Uh(t,e)){if(au(t))throw Error(D(418));e=In(n.nextSibling);var r=Ke;e&&Uh(t,e)?Ig(r,n):(t.flags=t.flags&-4097|2,re=!1,Ke=t)}}else{if(au(t))throw Error(D(418));t.flags=t.flags&-4097|2,re=!1,Ke=t}}}function bh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ke=t}function Xs(t){if(t!==Ke)return!1;if(!re)return bh(t),re=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ru(t.type,t.memoizedProps)),e&&(e=We)){if(au(t))throw Tg(),Error(D(418));for(;e;)Ig(t,e),e=In(e.nextSibling)}if(bh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(D(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){We=In(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}We=null}}else We=Ke?In(t.stateNode.nextSibling):null;return!0}function Tg(){for(var t=We;t;)t=In(t.nextSibling)}function Kr(){We=Ke=null,re=!1}function oc(t){ut===null?ut=[t]:ut.push(t)}var Ew=Yt.ReactCurrentBatchConfig;function Pi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(D(309));var r=n.stateNode}if(!r)throw Error(D(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(a){var c=i.refs;a===null?delete c[o]:c[o]=a},e._stringRef=o,e)}if(typeof t!="string")throw Error(D(284));if(!n._owner)throw Error(D(290,t))}return t}function Js(t,e){throw t=Object.prototype.toString.call(e),Error(D(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Fh(t){var e=t._init;return e(t._payload)}function kg(t){function e(E,w){if(t){var T=E.deletions;T===null?(E.deletions=[w],E.flags|=16):T.push(w)}}function n(E,w){if(!t)return null;for(;w!==null;)e(E,w),w=w.sibling;return null}function r(E,w){for(E=new Map;w!==null;)w.key!==null?E.set(w.key,w):E.set(w.index,w),w=w.sibling;return E}function i(E,w){return E=An(E,w),E.index=0,E.sibling=null,E}function o(E,w,T){return E.index=T,t?(T=E.alternate,T!==null?(T=T.index,T<w?(E.flags|=2,w):T):(E.flags|=2,w)):(E.flags|=1048576,w)}function a(E){return t&&E.alternate===null&&(E.flags|=2),E}function c(E,w,T,N){return w===null||w.tag!==6?(w=yl(T,E.mode,N),w.return=E,w):(w=i(w,T),w.return=E,w)}function f(E,w,T,N){var M=T.type;return M===Er?k(E,w,T.props.children,N,T.key):w!==null&&(w.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===un&&Fh(M)===w.type)?(N=i(w,T.props),N.ref=Pi(E,w,T),N.return=E,N):(N=mo(T.type,T.key,T.props,null,E.mode,N),N.ref=Pi(E,w,T),N.return=E,N)}function h(E,w,T,N){return w===null||w.tag!==4||w.stateNode.containerInfo!==T.containerInfo||w.stateNode.implementation!==T.implementation?(w=vl(T,E.mode,N),w.return=E,w):(w=i(w,T.children||[]),w.return=E,w)}function k(E,w,T,N,M){return w===null||w.tag!==7?(w=Yn(T,E.mode,N,M),w.return=E,w):(w=i(w,T),w.return=E,w)}function I(E,w,T){if(typeof w=="string"&&w!==""||typeof w=="number")return w=yl(""+w,E.mode,T),w.return=E,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case js:return T=mo(w.type,w.key,w.props,null,E.mode,T),T.ref=Pi(E,null,w),T.return=E,T;case Sr:return w=vl(w,E.mode,T),w.return=E,w;case un:var N=w._init;return I(E,N(w._payload),T)}if(Di(w)||Ii(w))return w=Yn(w,E.mode,T,null),w.return=E,w;Js(E,w)}return null}function S(E,w,T,N){var M=w!==null?w.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return M!==null?null:c(E,w,""+T,N);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case js:return T.key===M?f(E,w,T,N):null;case Sr:return T.key===M?h(E,w,T,N):null;case un:return M=T._init,S(E,w,M(T._payload),N)}if(Di(T)||Ii(T))return M!==null?null:k(E,w,T,N,null);Js(E,T)}return null}function R(E,w,T,N,M){if(typeof N=="string"&&N!==""||typeof N=="number")return E=E.get(T)||null,c(w,E,""+N,M);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case js:return E=E.get(N.key===null?T:N.key)||null,f(w,E,N,M);case Sr:return E=E.get(N.key===null?T:N.key)||null,h(w,E,N,M);case un:var U=N._init;return R(E,w,T,U(N._payload),M)}if(Di(N)||Ii(N))return E=E.get(T)||null,k(w,E,N,M,null);Js(w,N)}return null}function O(E,w,T,N){for(var M=null,U=null,g=w,p=w=0,m=null;g!==null&&p<T.length;p++){g.index>p?(m=g,g=null):m=g.sibling;var v=S(E,g,T[p],N);if(v===null){g===null&&(g=m);break}t&&g&&v.alternate===null&&e(E,g),w=o(v,w,p),U===null?M=v:U.sibling=v,U=v,g=m}if(p===T.length)return n(E,g),re&&zn(E,p),M;if(g===null){for(;p<T.length;p++)g=I(E,T[p],N),g!==null&&(w=o(g,w,p),U===null?M=g:U.sibling=g,U=g);return re&&zn(E,p),M}for(g=r(E,g);p<T.length;p++)m=R(g,E,p,T[p],N),m!==null&&(t&&m.alternate!==null&&g.delete(m.key===null?p:m.key),w=o(m,w,p),U===null?M=m:U.sibling=m,U=m);return t&&g.forEach(function(_){return e(E,_)}),re&&zn(E,p),M}function x(E,w,T,N){var M=Ii(T);if(typeof M!="function")throw Error(D(150));if(T=M.call(T),T==null)throw Error(D(151));for(var U=M=null,g=w,p=w=0,m=null,v=T.next();g!==null&&!v.done;p++,v=T.next()){g.index>p?(m=g,g=null):m=g.sibling;var _=S(E,g,v.value,N);if(_===null){g===null&&(g=m);break}t&&g&&_.alternate===null&&e(E,g),w=o(_,w,p),U===null?M=_:U.sibling=_,U=_,g=m}if(v.done)return n(E,g),re&&zn(E,p),M;if(g===null){for(;!v.done;p++,v=T.next())v=I(E,v.value,N),v!==null&&(w=o(v,w,p),U===null?M=v:U.sibling=v,U=v);return re&&zn(E,p),M}for(g=r(E,g);!v.done;p++,v=T.next())v=R(g,E,p,v.value,N),v!==null&&(t&&v.alternate!==null&&g.delete(v.key===null?p:v.key),w=o(v,w,p),U===null?M=v:U.sibling=v,U=v);return t&&g.forEach(function(C){return e(E,C)}),re&&zn(E,p),M}function j(E,w,T,N){if(typeof T=="object"&&T!==null&&T.type===Er&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case js:e:{for(var M=T.key,U=w;U!==null;){if(U.key===M){if(M=T.type,M===Er){if(U.tag===7){n(E,U.sibling),w=i(U,T.props.children),w.return=E,E=w;break e}}else if(U.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===un&&Fh(M)===U.type){n(E,U.sibling),w=i(U,T.props),w.ref=Pi(E,U,T),w.return=E,E=w;break e}n(E,U);break}else e(E,U);U=U.sibling}T.type===Er?(w=Yn(T.props.children,E.mode,N,T.key),w.return=E,E=w):(N=mo(T.type,T.key,T.props,null,E.mode,N),N.ref=Pi(E,w,T),N.return=E,E=N)}return a(E);case Sr:e:{for(U=T.key;w!==null;){if(w.key===U)if(w.tag===4&&w.stateNode.containerInfo===T.containerInfo&&w.stateNode.implementation===T.implementation){n(E,w.sibling),w=i(w,T.children||[]),w.return=E,E=w;break e}else{n(E,w);break}else e(E,w);w=w.sibling}w=vl(T,E.mode,N),w.return=E,E=w}return a(E);case un:return U=T._init,j(E,w,U(T._payload),N)}if(Di(T))return O(E,w,T,N);if(Ii(T))return x(E,w,T,N);Js(E,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,w!==null&&w.tag===6?(n(E,w.sibling),w=i(w,T),w.return=E,E=w):(n(E,w),w=yl(T,E.mode,N),w.return=E,E=w),a(E)):n(E,w)}return j}var Gr=kg(!0),Cg=kg(!1),Mo=xn(null),Uo=null,Rr=null,ac=null;function lc(){ac=Rr=Uo=null}function uc(t){var e=Mo.current;te(Mo),t._currentValue=e}function uu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Fr(t,e){Uo=t,ac=Rr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ve=!0),t.firstContext=null)}function rt(t){var e=t._currentValue;if(ac!==t)if(t={context:t,memoizedValue:e,next:null},Rr===null){if(Uo===null)throw Error(D(308));Rr=t,Uo.dependencies={lanes:0,firstContext:t}}else Rr=Rr.next=t;return e}var Gn=null;function cc(t){Gn===null?Gn=[t]:Gn.push(t)}function Ag(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,cc(e)):(n.next=i.next,i.next=n),e.interleaved=n,Kt(t,r)}function Kt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var cn=!1;function fc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Pg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function zt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Tn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Kt(t,n)}return i=r.interleaved,i===null?(e.next=e,cc(r)):(e.next=i.next,i.next=e),r.interleaved=e,Kt(t,n)}function uo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ju(t,n)}}function jh(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function bo(t,e,n,r){var i=t.updateQueue;cn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var f=c,h=f.next;f.next=null,a===null?o=h:a.next=h,a=f;var k=t.alternate;k!==null&&(k=k.updateQueue,c=k.lastBaseUpdate,c!==a&&(c===null?k.firstBaseUpdate=h:c.next=h,k.lastBaseUpdate=f))}if(o!==null){var I=i.baseState;a=0,k=h=f=null,c=o;do{var S=c.lane,R=c.eventTime;if((r&S)===S){k!==null&&(k=k.next={eventTime:R,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var O=t,x=c;switch(S=e,R=n,x.tag){case 1:if(O=x.payload,typeof O=="function"){I=O.call(R,I,S);break e}I=O;break e;case 3:O.flags=O.flags&-65537|128;case 0:if(O=x.payload,S=typeof O=="function"?O.call(R,I,S):O,S==null)break e;I=oe({},I,S);break e;case 2:cn=!0}}c.callback!==null&&c.lane!==0&&(t.flags|=64,S=i.effects,S===null?i.effects=[c]:S.push(c))}else R={eventTime:R,lane:S,tag:c.tag,payload:c.payload,callback:c.callback,next:null},k===null?(h=k=R,f=I):k=k.next=R,a|=S;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;S=c,c=S.next,S.next=null,i.lastBaseUpdate=S,i.shared.pending=null}}while(!0);if(k===null&&(f=I),i.baseState=f,i.firstBaseUpdate=h,i.lastBaseUpdate=k,e=i.shared.interleaved,e!==null){i=e;do a|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);sr|=a,t.lanes=a,t.memoizedState=I}}function Vh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(D(191,i));i.call(r)}}}var Ss={},At=xn(Ss),os=xn(Ss),as=xn(Ss);function qn(t){if(t===Ss)throw Error(D(174));return t}function hc(t,e){switch(Y(as,e),Y(os,t),Y(At,Ss),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Bl(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Bl(e,t)}te(At),Y(At,e)}function qr(){te(At),te(os),te(as)}function Ng(t){qn(as.current);var e=qn(At.current),n=Bl(e,t.type);e!==n&&(Y(os,t),Y(At,n))}function dc(t){os.current===t&&(te(At),te(os))}var ie=xn(0);function Fo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var fl=[];function pc(){for(var t=0;t<fl.length;t++)fl[t]._workInProgressVersionPrimary=null;fl.length=0}var co=Yt.ReactCurrentDispatcher,hl=Yt.ReactCurrentBatchConfig,ir=0,se=null,ge=null,ve=null,jo=!1,Vi=!1,ls=0,Iw=0;function Ce(){throw Error(D(321))}function gc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!gt(t[n],e[n]))return!1;return!0}function mc(t,e,n,r,i,o){if(ir=o,se=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,co.current=t===null||t.memoizedState===null?Aw:Pw,t=n(r,i),Vi){o=0;do{if(Vi=!1,ls=0,25<=o)throw Error(D(301));o+=1,ve=ge=null,e.updateQueue=null,co.current=Nw,t=n(r,i)}while(Vi)}if(co.current=Vo,e=ge!==null&&ge.next!==null,ir=0,ve=ge=se=null,jo=!1,e)throw Error(D(300));return t}function yc(){var t=ls!==0;return ls=0,t}function _t(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?se.memoizedState=ve=t:ve=ve.next=t,ve}function it(){if(ge===null){var t=se.alternate;t=t!==null?t.memoizedState:null}else t=ge.next;var e=ve===null?se.memoizedState:ve.next;if(e!==null)ve=e,ge=t;else{if(t===null)throw Error(D(310));ge=t,t={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},ve===null?se.memoizedState=ve=t:ve=ve.next=t}return ve}function us(t,e){return typeof e=="function"?e(t):e}function dl(t){var e=it(),n=e.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=t;var r=ge,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var c=a=null,f=null,h=o;do{var k=h.lane;if((ir&k)===k)f!==null&&(f=f.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var I={lane:k,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};f===null?(c=f=I,a=r):f=f.next=I,se.lanes|=k,sr|=k}h=h.next}while(h!==null&&h!==o);f===null?a=r:f.next=c,gt(r,e.memoizedState)||(Ve=!0),e.memoizedState=r,e.baseState=a,e.baseQueue=f,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,se.lanes|=o,sr|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function pl(t){var e=it(),n=e.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=t(o,a.action),a=a.next;while(a!==i);gt(o,e.memoizedState)||(Ve=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function Rg(){}function Og(t,e){var n=se,r=it(),i=e(),o=!gt(r.memoizedState,i);if(o&&(r.memoizedState=i,Ve=!0),r=r.queue,vc(Lg.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||ve!==null&&ve.memoizedState.tag&1){if(n.flags|=2048,cs(9,xg.bind(null,n,r,i,e),void 0,null),we===null)throw Error(D(349));ir&30||Dg(n,e,i)}return i}function Dg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=se.updateQueue,e===null?(e={lastEffect:null,stores:null},se.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function xg(t,e,n,r){e.value=n,e.getSnapshot=r,Mg(e)&&Ug(t)}function Lg(t,e,n){return n(function(){Mg(e)&&Ug(t)})}function Mg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!gt(t,n)}catch{return!0}}function Ug(t){var e=Kt(t,1);e!==null&&pt(e,t,1,-1)}function $h(t){var e=_t();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:us,lastRenderedState:t},e.queue=t,t=t.dispatch=Cw.bind(null,se,t),[e.memoizedState,t]}function cs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=se.updateQueue,e===null?(e={lastEffect:null,stores:null},se.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function bg(){return it().memoizedState}function fo(t,e,n,r){var i=_t();se.flags|=t,i.memoizedState=cs(1|e,n,void 0,r===void 0?null:r)}function ua(t,e,n,r){var i=it();r=r===void 0?null:r;var o=void 0;if(ge!==null){var a=ge.memoizedState;if(o=a.destroy,r!==null&&gc(r,a.deps)){i.memoizedState=cs(e,n,o,r);return}}se.flags|=t,i.memoizedState=cs(1|e,n,o,r)}function zh(t,e){return fo(8390656,8,t,e)}function vc(t,e){return ua(2048,8,t,e)}function Fg(t,e){return ua(4,2,t,e)}function jg(t,e){return ua(4,4,t,e)}function Vg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function $g(t,e,n){return n=n!=null?n.concat([t]):null,ua(4,4,Vg.bind(null,e,t),n)}function wc(){}function zg(t,e){var n=it();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&gc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Bg(t,e){var n=it();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&gc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Hg(t,e,n){return ir&21?(gt(n,e)||(n=Xp(),se.lanes|=n,sr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ve=!0),t.memoizedState=n)}function Tw(t,e){var n=J;J=n!==0&&4>n?n:4,t(!0);var r=hl.transition;hl.transition={};try{t(!1),e()}finally{J=n,hl.transition=r}}function Wg(){return it().memoizedState}function kw(t,e,n){var r=Cn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Kg(t))Gg(e,n);else if(n=Ag(t,e,n,r),n!==null){var i=Le();pt(n,t,r,i),qg(n,e,r)}}function Cw(t,e,n){var r=Cn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Kg(t))Gg(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var a=e.lastRenderedState,c=o(a,n);if(i.hasEagerState=!0,i.eagerState=c,gt(c,a)){var f=e.interleaved;f===null?(i.next=i,cc(e)):(i.next=f.next,f.next=i),e.interleaved=i;return}}catch{}finally{}n=Ag(t,e,i,r),n!==null&&(i=Le(),pt(n,t,r,i),qg(n,e,r))}}function Kg(t){var e=t.alternate;return t===se||e!==null&&e===se}function Gg(t,e){Vi=jo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function qg(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ju(t,n)}}var Vo={readContext:rt,useCallback:Ce,useContext:Ce,useEffect:Ce,useImperativeHandle:Ce,useInsertionEffect:Ce,useLayoutEffect:Ce,useMemo:Ce,useReducer:Ce,useRef:Ce,useState:Ce,useDebugValue:Ce,useDeferredValue:Ce,useTransition:Ce,useMutableSource:Ce,useSyncExternalStore:Ce,useId:Ce,unstable_isNewReconciler:!1},Aw={readContext:rt,useCallback:function(t,e){return _t().memoizedState=[t,e===void 0?null:e],t},useContext:rt,useEffect:zh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,fo(4194308,4,Vg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return fo(4194308,4,t,e)},useInsertionEffect:function(t,e){return fo(4,2,t,e)},useMemo:function(t,e){var n=_t();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=_t();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=kw.bind(null,se,t),[r.memoizedState,t]},useRef:function(t){var e=_t();return t={current:t},e.memoizedState=t},useState:$h,useDebugValue:wc,useDeferredValue:function(t){return _t().memoizedState=t},useTransition:function(){var t=$h(!1),e=t[0];return t=Tw.bind(null,t[1]),_t().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=se,i=_t();if(re){if(n===void 0)throw Error(D(407));n=n()}else{if(n=e(),we===null)throw Error(D(349));ir&30||Dg(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,zh(Lg.bind(null,r,o,t),[t]),r.flags|=2048,cs(9,xg.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=_t(),e=we.identifierPrefix;if(re){var n=jt,r=Ft;n=(r&~(1<<32-dt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ls++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Iw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Pw={readContext:rt,useCallback:zg,useContext:rt,useEffect:vc,useImperativeHandle:$g,useInsertionEffect:Fg,useLayoutEffect:jg,useMemo:Bg,useReducer:dl,useRef:bg,useState:function(){return dl(us)},useDebugValue:wc,useDeferredValue:function(t){var e=it();return Hg(e,ge.memoizedState,t)},useTransition:function(){var t=dl(us)[0],e=it().memoizedState;return[t,e]},useMutableSource:Rg,useSyncExternalStore:Og,useId:Wg,unstable_isNewReconciler:!1},Nw={readContext:rt,useCallback:zg,useContext:rt,useEffect:vc,useImperativeHandle:$g,useInsertionEffect:Fg,useLayoutEffect:jg,useMemo:Bg,useReducer:pl,useRef:bg,useState:function(){return pl(us)},useDebugValue:wc,useDeferredValue:function(t){var e=it();return ge===null?e.memoizedState=t:Hg(e,ge.memoizedState,t)},useTransition:function(){var t=pl(us)[0],e=it().memoizedState;return[t,e]},useMutableSource:Rg,useSyncExternalStore:Og,useId:Wg,unstable_isNewReconciler:!1};function at(t,e){if(t&&t.defaultProps){e=oe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function cu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:oe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ca={isMounted:function(t){return(t=t._reactInternals)?dr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Le(),i=Cn(t),o=zt(r,i);o.payload=e,n!=null&&(o.callback=n),e=Tn(t,o,i),e!==null&&(pt(e,t,i,r),uo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Le(),i=Cn(t),o=zt(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Tn(t,o,i),e!==null&&(pt(e,t,i,r),uo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Le(),r=Cn(t),i=zt(n,r);i.tag=2,e!=null&&(i.callback=e),e=Tn(t,i,r),e!==null&&(pt(e,t,r,n),uo(e,t,r))}};function Bh(t,e,n,r,i,o,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,a):e.prototype&&e.prototype.isPureReactComponent?!ns(n,r)||!ns(i,o):!0}function Xg(t,e,n){var r=!1,i=Rn,o=e.contextType;return typeof o=="object"&&o!==null?o=rt(o):(i=ze(e)?nr:Ne.current,r=e.contextTypes,o=(r=r!=null)?Wr(t,i):Rn),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ca,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function Hh(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ca.enqueueReplaceState(e,e.state,null)}function fu(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},fc(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=rt(o):(o=ze(e)?nr:Ne.current,i.context=Wr(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(cu(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ca.enqueueReplaceState(i,i.state,null),bo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Xr(t,e){try{var n="",r=e;do n+=r0(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function gl(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function hu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Rw=typeof WeakMap=="function"?WeakMap:Map;function Jg(t,e,n){n=zt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){zo||(zo=!0,Eu=r),hu(t,e)},n}function Qg(t,e,n){n=zt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){hu(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){hu(t,e),typeof r!="function"&&(kn===null?kn=new Set([this]):kn.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Wh(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Rw;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Hw.bind(null,t,e,n),e.then(t,t))}function Kh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Gh(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=zt(-1,1),e.tag=2,Tn(n,e,1))),n.lanes|=1),t)}var Ow=Yt.ReactCurrentOwner,Ve=!1;function De(t,e,n,r){e.child=t===null?Cg(e,null,n,r):Gr(e,t.child,n,r)}function qh(t,e,n,r,i){n=n.render;var o=e.ref;return Fr(e,i),r=mc(t,e,n,r,o,i),n=yc(),t!==null&&!Ve?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Gt(t,e,i)):(re&&n&&ic(e),e.flags|=1,De(t,e,r,i),e.child)}function Xh(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!Ac(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Yg(t,e,o,r,i)):(t=mo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:ns,n(a,r)&&t.ref===e.ref)return Gt(t,e,i)}return e.flags|=1,t=An(o,r),t.ref=e.ref,t.return=e,e.child=t}function Yg(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(ns(o,r)&&t.ref===e.ref)if(Ve=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(Ve=!0);else return e.lanes=t.lanes,Gt(t,e,i)}return du(t,e,n,r,i)}function Zg(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(Dr,He),He|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Y(Dr,He),He|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Y(Dr,He),He|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,Y(Dr,He),He|=r;return De(t,e,i,n),e.child}function em(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function du(t,e,n,r,i){var o=ze(n)?nr:Ne.current;return o=Wr(e,o),Fr(e,i),n=mc(t,e,n,r,o,i),r=yc(),t!==null&&!Ve?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Gt(t,e,i)):(re&&r&&ic(e),e.flags|=1,De(t,e,n,i),e.child)}function Jh(t,e,n,r,i){if(ze(n)){var o=!0;Do(e)}else o=!1;if(Fr(e,i),e.stateNode===null)ho(t,e),Xg(e,n,r),fu(e,n,r,i),r=!0;else if(t===null){var a=e.stateNode,c=e.memoizedProps;a.props=c;var f=a.context,h=n.contextType;typeof h=="object"&&h!==null?h=rt(h):(h=ze(n)?nr:Ne.current,h=Wr(e,h));var k=n.getDerivedStateFromProps,I=typeof k=="function"||typeof a.getSnapshotBeforeUpdate=="function";I||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(c!==r||f!==h)&&Hh(e,a,r,h),cn=!1;var S=e.memoizedState;a.state=S,bo(e,r,a,i),f=e.memoizedState,c!==r||S!==f||$e.current||cn?(typeof k=="function"&&(cu(e,n,k,r),f=e.memoizedState),(c=cn||Bh(e,n,c,r,S,f,h))?(I||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=f),a.props=r,a.state=f,a.context=h,r=c):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{a=e.stateNode,Pg(t,e),c=e.memoizedProps,h=e.type===e.elementType?c:at(e.type,c),a.props=h,I=e.pendingProps,S=a.context,f=n.contextType,typeof f=="object"&&f!==null?f=rt(f):(f=ze(n)?nr:Ne.current,f=Wr(e,f));var R=n.getDerivedStateFromProps;(k=typeof R=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(c!==I||S!==f)&&Hh(e,a,r,f),cn=!1,S=e.memoizedState,a.state=S,bo(e,r,a,i);var O=e.memoizedState;c!==I||S!==O||$e.current||cn?(typeof R=="function"&&(cu(e,n,R,r),O=e.memoizedState),(h=cn||Bh(e,n,h,r,S,O,f)||!1)?(k||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,O,f),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,O,f)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||c===t.memoizedProps&&S===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&S===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=O),a.props=r,a.state=O,a.context=f,r=h):(typeof a.componentDidUpdate!="function"||c===t.memoizedProps&&S===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&S===t.memoizedState||(e.flags|=1024),r=!1)}return pu(t,e,n,r,o,i)}function pu(t,e,n,r,i,o){em(t,e);var a=(e.flags&128)!==0;if(!r&&!a)return i&&Mh(e,n,!1),Gt(t,e,o);r=e.stateNode,Ow.current=e;var c=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&a?(e.child=Gr(e,t.child,null,o),e.child=Gr(e,null,c,o)):De(t,e,c,o),e.memoizedState=r.state,i&&Mh(e,n,!0),e.child}function tm(t){var e=t.stateNode;e.pendingContext?Lh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Lh(t,e.context,!1),hc(t,e.containerInfo)}function Qh(t,e,n,r,i){return Kr(),oc(i),e.flags|=256,De(t,e,n,r),e.child}var gu={dehydrated:null,treeContext:null,retryLane:0};function mu(t){return{baseLanes:t,cachePool:null,transitions:null}}function nm(t,e,n){var r=e.pendingProps,i=ie.current,o=!1,a=(e.flags&128)!==0,c;if((c=a)||(c=t!==null&&t.memoizedState===null?!1:(i&2)!==0),c?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Y(ie,i&1),t===null)return lu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=r.children,t=r.fallback,o?(r=e.mode,o=e.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=da(a,r,0,null),t=Yn(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=mu(n),e.memoizedState=gu,t):_c(e,a));if(i=t.memoizedState,i!==null&&(c=i.dehydrated,c!==null))return Dw(t,e,a,r,c,i,n);if(o){o=r.fallback,a=e.mode,i=t.child,c=i.sibling;var f={mode:"hidden",children:r.children};return!(a&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=f,e.deletions=null):(r=An(i,f),r.subtreeFlags=i.subtreeFlags&14680064),c!==null?o=An(c,o):(o=Yn(o,a,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,a=t.child.memoizedState,a=a===null?mu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=t.childLanes&~n,e.memoizedState=gu,r}return o=t.child,t=o.sibling,r=An(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function _c(t,e){return e=da({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Qs(t,e,n,r){return r!==null&&oc(r),Gr(e,t.child,null,n),t=_c(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Dw(t,e,n,r,i,o,a){if(n)return e.flags&256?(e.flags&=-257,r=gl(Error(D(422))),Qs(t,e,a,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=da({mode:"visible",children:r.children},i,0,null),o=Yn(o,i,a,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&Gr(e,t.child,null,a),e.child.memoizedState=mu(a),e.memoizedState=gu,o);if(!(e.mode&1))return Qs(t,e,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var c=r.dgst;return r=c,o=Error(D(419)),r=gl(o,r,void 0),Qs(t,e,a,r)}if(c=(a&t.childLanes)!==0,Ve||c){if(r=we,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Kt(t,i),pt(r,t,i,-1))}return Cc(),r=gl(Error(D(421))),Qs(t,e,a,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Ww.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,We=In(i.nextSibling),Ke=e,re=!0,ut=null,t!==null&&(Ye[Ze++]=Ft,Ye[Ze++]=jt,Ye[Ze++]=rr,Ft=t.id,jt=t.overflow,rr=e),e=_c(e,r.children),e.flags|=4096,e)}function Yh(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),uu(t.return,e,n)}function ml(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function rm(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(De(t,e,r.children,n),r=ie.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Yh(t,n,e);else if(t.tag===19)Yh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Y(ie,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Fo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ml(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Fo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ml(e,!0,n,null,o);break;case"together":ml(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ho(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Gt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),sr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(D(153));if(e.child!==null){for(t=e.child,n=An(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=An(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function xw(t,e,n){switch(e.tag){case 3:tm(e),Kr();break;case 5:Ng(e);break;case 1:ze(e.type)&&Do(e);break;case 4:hc(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Y(Mo,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Y(ie,ie.current&1),e.flags|=128,null):n&e.child.childLanes?nm(t,e,n):(Y(ie,ie.current&1),t=Gt(t,e,n),t!==null?t.sibling:null);Y(ie,ie.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return rm(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Y(ie,ie.current),r)break;return null;case 22:case 23:return e.lanes=0,Zg(t,e,n)}return Gt(t,e,n)}var im,yu,sm,om;im=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};yu=function(){};sm=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,qn(At.current);var o=null;switch(n){case"input":i=jl(t,i),r=jl(t,r),o=[];break;case"select":i=oe({},i,{value:void 0}),r=oe({},r,{value:void 0}),o=[];break;case"textarea":i=zl(t,i),r=zl(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ro)}Hl(n,r);var a;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var c=i[h];for(a in c)c.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Xi.hasOwnProperty(h)?o||(o=[]):(o=o||[]).push(h,null));for(h in r){var f=r[h];if(c=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&f!==c&&(f!=null||c!=null))if(h==="style")if(c){for(a in c)!c.hasOwnProperty(a)||f&&f.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in f)f.hasOwnProperty(a)&&c[a]!==f[a]&&(n||(n={}),n[a]=f[a])}else n||(o||(o=[]),o.push(h,n)),n=f;else h==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,c=c?c.__html:void 0,f!=null&&c!==f&&(o=o||[]).push(h,f)):h==="children"?typeof f!="string"&&typeof f!="number"||(o=o||[]).push(h,""+f):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Xi.hasOwnProperty(h)?(f!=null&&h==="onScroll"&&ee("scroll",t),o||c===f||(o=[])):(o=o||[]).push(h,f))}n&&(o=o||[]).push("style",n);var h=o;(e.updateQueue=h)&&(e.flags|=4)}};om=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ni(t,e){if(!re)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ae(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Lw(t,e,n){var r=e.pendingProps;switch(sc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(e),null;case 1:return ze(e.type)&&Oo(),Ae(e),null;case 3:return r=e.stateNode,qr(),te($e),te(Ne),pc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Xs(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ut!==null&&(ku(ut),ut=null))),yu(t,e),Ae(e),null;case 5:dc(e);var i=qn(as.current);if(n=e.type,t!==null&&e.stateNode!=null)sm(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(D(166));return Ae(e),null}if(t=qn(At.current),Xs(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[It]=e,r[ss]=o,t=(e.mode&1)!==0,n){case"dialog":ee("cancel",r),ee("close",r);break;case"iframe":case"object":case"embed":ee("load",r);break;case"video":case"audio":for(i=0;i<Li.length;i++)ee(Li[i],r);break;case"source":ee("error",r);break;case"img":case"image":case"link":ee("error",r),ee("load",r);break;case"details":ee("toggle",r);break;case"input":ah(r,o),ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ee("invalid",r);break;case"textarea":uh(r,o),ee("invalid",r)}Hl(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var c=o[a];a==="children"?typeof c=="string"?r.textContent!==c&&(o.suppressHydrationWarning!==!0&&qs(r.textContent,c,t),i=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(o.suppressHydrationWarning!==!0&&qs(r.textContent,c,t),i=["children",""+c]):Xi.hasOwnProperty(a)&&c!=null&&a==="onScroll"&&ee("scroll",r)}switch(n){case"input":Vs(r),lh(r,o,!0);break;case"textarea":Vs(r),ch(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ro)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Lp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=a.createElement(n,{is:r.is}):(t=a.createElement(n),n==="select"&&(a=t,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):t=a.createElementNS(t,n),t[It]=e,t[ss]=r,im(t,e,!1,!1),e.stateNode=t;e:{switch(a=Wl(n,r),n){case"dialog":ee("cancel",t),ee("close",t),i=r;break;case"iframe":case"object":case"embed":ee("load",t),i=r;break;case"video":case"audio":for(i=0;i<Li.length;i++)ee(Li[i],t);i=r;break;case"source":ee("error",t),i=r;break;case"img":case"image":case"link":ee("error",t),ee("load",t),i=r;break;case"details":ee("toggle",t),i=r;break;case"input":ah(t,r),i=jl(t,r),ee("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=oe({},r,{value:void 0}),ee("invalid",t);break;case"textarea":uh(t,r),i=zl(t,r),ee("invalid",t);break;default:i=r}Hl(n,i),c=i;for(o in c)if(c.hasOwnProperty(o)){var f=c[o];o==="style"?bp(t,f):o==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,f!=null&&Mp(t,f)):o==="children"?typeof f=="string"?(n!=="textarea"||f!=="")&&Ji(t,f):typeof f=="number"&&Ji(t,""+f):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Xi.hasOwnProperty(o)?f!=null&&o==="onScroll"&&ee("scroll",t):f!=null&&Hu(t,o,f,a))}switch(n){case"input":Vs(t),lh(t,r,!1);break;case"textarea":Vs(t),ch(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Nn(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?Lr(t,!!r.multiple,o,!1):r.defaultValue!=null&&Lr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ro)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ae(e),null;case 6:if(t&&e.stateNode!=null)om(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(D(166));if(n=qn(as.current),qn(At.current),Xs(e)){if(r=e.stateNode,n=e.memoizedProps,r[It]=e,(o=r.nodeValue!==n)&&(t=Ke,t!==null))switch(t.tag){case 3:qs(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&qs(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[It]=e,e.stateNode=r}return Ae(e),null;case 13:if(te(ie),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(re&&We!==null&&e.mode&1&&!(e.flags&128))Tg(),Kr(),e.flags|=98560,o=!1;else if(o=Xs(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(D(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(D(317));o[It]=e}else Kr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ae(e),o=!1}else ut!==null&&(ku(ut),ut=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ie.current&1?me===0&&(me=3):Cc())),e.updateQueue!==null&&(e.flags|=4),Ae(e),null);case 4:return qr(),yu(t,e),t===null&&rs(e.stateNode.containerInfo),Ae(e),null;case 10:return uc(e.type._context),Ae(e),null;case 17:return ze(e.type)&&Oo(),Ae(e),null;case 19:if(te(ie),o=e.memoizedState,o===null)return Ae(e),null;if(r=(e.flags&128)!==0,a=o.rendering,a===null)if(r)Ni(o,!1);else{if(me!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Fo(t),a!==null){for(e.flags|=128,Ni(o,!1),r=a.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,t=a.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Y(ie,ie.current&1|2),e.child}t=t.sibling}o.tail!==null&&fe()>Jr&&(e.flags|=128,r=!0,Ni(o,!1),e.lanes=4194304)}else{if(!r)if(t=Fo(a),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ni(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!re)return Ae(e),null}else 2*fe()-o.renderingStartTime>Jr&&n!==1073741824&&(e.flags|=128,r=!0,Ni(o,!1),e.lanes=4194304);o.isBackwards?(a.sibling=e.child,e.child=a):(n=o.last,n!==null?n.sibling=a:e.child=a,o.last=a)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=fe(),e.sibling=null,n=ie.current,Y(ie,r?n&1|2:n&1),e):(Ae(e),null);case 22:case 23:return kc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?He&1073741824&&(Ae(e),e.subtreeFlags&6&&(e.flags|=8192)):Ae(e),null;case 24:return null;case 25:return null}throw Error(D(156,e.tag))}function Mw(t,e){switch(sc(e),e.tag){case 1:return ze(e.type)&&Oo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return qr(),te($e),te(Ne),pc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return dc(e),null;case 13:if(te(ie),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(D(340));Kr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return te(ie),null;case 4:return qr(),null;case 10:return uc(e.type._context),null;case 22:case 23:return kc(),null;case 24:return null;default:return null}}var Ys=!1,Pe=!1,Uw=typeof WeakSet=="function"?WeakSet:Set,F=null;function Or(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ae(t,e,r)}else n.current=null}function vu(t,e,n){try{n()}catch(r){ae(t,e,r)}}var Zh=!1;function bw(t,e){if(tu=Ao,t=fg(),rc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,c=-1,f=-1,h=0,k=0,I=t,S=null;t:for(;;){for(var R;I!==n||i!==0&&I.nodeType!==3||(c=a+i),I!==o||r!==0&&I.nodeType!==3||(f=a+r),I.nodeType===3&&(a+=I.nodeValue.length),(R=I.firstChild)!==null;)S=I,I=R;for(;;){if(I===t)break t;if(S===n&&++h===i&&(c=a),S===o&&++k===r&&(f=a),(R=I.nextSibling)!==null)break;I=S,S=I.parentNode}I=R}n=c===-1||f===-1?null:{start:c,end:f}}else n=null}n=n||{start:0,end:0}}else n=null;for(nu={focusedElem:t,selectionRange:n},Ao=!1,F=e;F!==null;)if(e=F,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,F=t;else for(;F!==null;){e=F;try{var O=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(O!==null){var x=O.memoizedProps,j=O.memoizedState,E=e.stateNode,w=E.getSnapshotBeforeUpdate(e.elementType===e.type?x:at(e.type,x),j);E.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var T=e.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch(N){ae(e,e.return,N)}if(t=e.sibling,t!==null){t.return=e.return,F=t;break}F=e.return}return O=Zh,Zh=!1,O}function $i(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&vu(e,n,o)}i=i.next}while(i!==r)}}function fa(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function wu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function am(t){var e=t.alternate;e!==null&&(t.alternate=null,am(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[It],delete e[ss],delete e[su],delete e[ww],delete e[_w])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function lm(t){return t.tag===5||t.tag===3||t.tag===4}function ed(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||lm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _u(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ro));else if(r!==4&&(t=t.child,t!==null))for(_u(t,e,n),t=t.sibling;t!==null;)_u(t,e,n),t=t.sibling}function Su(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Su(t,e,n),t=t.sibling;t!==null;)Su(t,e,n),t=t.sibling}var Ee=null,lt=!1;function an(t,e,n){for(n=n.child;n!==null;)um(t,e,n),n=n.sibling}function um(t,e,n){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(ra,n)}catch{}switch(n.tag){case 5:Pe||Or(n,e);case 6:var r=Ee,i=lt;Ee=null,an(t,e,n),Ee=r,lt=i,Ee!==null&&(lt?(t=Ee,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ee.removeChild(n.stateNode));break;case 18:Ee!==null&&(lt?(t=Ee,n=n.stateNode,t.nodeType===8?ul(t.parentNode,n):t.nodeType===1&&ul(t,n),es(t)):ul(Ee,n.stateNode));break;case 4:r=Ee,i=lt,Ee=n.stateNode.containerInfo,lt=!0,an(t,e,n),Ee=r,lt=i;break;case 0:case 11:case 14:case 15:if(!Pe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&vu(n,e,a),i=i.next}while(i!==r)}an(t,e,n);break;case 1:if(!Pe&&(Or(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){ae(n,e,c)}an(t,e,n);break;case 21:an(t,e,n);break;case 22:n.mode&1?(Pe=(r=Pe)||n.memoizedState!==null,an(t,e,n),Pe=r):an(t,e,n);break;default:an(t,e,n)}}function td(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Uw),e.forEach(function(r){var i=Kw.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ot(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,a=e,c=a;e:for(;c!==null;){switch(c.tag){case 5:Ee=c.stateNode,lt=!1;break e;case 3:Ee=c.stateNode.containerInfo,lt=!0;break e;case 4:Ee=c.stateNode.containerInfo,lt=!0;break e}c=c.return}if(Ee===null)throw Error(D(160));um(o,a,i),Ee=null,lt=!1;var f=i.alternate;f!==null&&(f.return=null),i.return=null}catch(h){ae(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)cm(e,t),e=e.sibling}function cm(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ot(e,t),wt(t),r&4){try{$i(3,t,t.return),fa(3,t)}catch(x){ae(t,t.return,x)}try{$i(5,t,t.return)}catch(x){ae(t,t.return,x)}}break;case 1:ot(e,t),wt(t),r&512&&n!==null&&Or(n,n.return);break;case 5:if(ot(e,t),wt(t),r&512&&n!==null&&Or(n,n.return),t.flags&32){var i=t.stateNode;try{Ji(i,"")}catch(x){ae(t,t.return,x)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,a=n!==null?n.memoizedProps:o,c=t.type,f=t.updateQueue;if(t.updateQueue=null,f!==null)try{c==="input"&&o.type==="radio"&&o.name!=null&&Dp(i,o),Wl(c,a);var h=Wl(c,o);for(a=0;a<f.length;a+=2){var k=f[a],I=f[a+1];k==="style"?bp(i,I):k==="dangerouslySetInnerHTML"?Mp(i,I):k==="children"?Ji(i,I):Hu(i,k,I,h)}switch(c){case"input":Vl(i,o);break;case"textarea":xp(i,o);break;case"select":var S=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var R=o.value;R!=null?Lr(i,!!o.multiple,R,!1):S!==!!o.multiple&&(o.defaultValue!=null?Lr(i,!!o.multiple,o.defaultValue,!0):Lr(i,!!o.multiple,o.multiple?[]:"",!1))}i[ss]=o}catch(x){ae(t,t.return,x)}}break;case 6:if(ot(e,t),wt(t),r&4){if(t.stateNode===null)throw Error(D(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(x){ae(t,t.return,x)}}break;case 3:if(ot(e,t),wt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{es(e.containerInfo)}catch(x){ae(t,t.return,x)}break;case 4:ot(e,t),wt(t);break;case 13:ot(e,t),wt(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ic=fe())),r&4&&td(t);break;case 22:if(k=n!==null&&n.memoizedState!==null,t.mode&1?(Pe=(h=Pe)||k,ot(e,t),Pe=h):ot(e,t),wt(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!k&&t.mode&1)for(F=t,k=t.child;k!==null;){for(I=F=k;F!==null;){switch(S=F,R=S.child,S.tag){case 0:case 11:case 14:case 15:$i(4,S,S.return);break;case 1:Or(S,S.return);var O=S.stateNode;if(typeof O.componentWillUnmount=="function"){r=S,n=S.return;try{e=r,O.props=e.memoizedProps,O.state=e.memoizedState,O.componentWillUnmount()}catch(x){ae(r,n,x)}}break;case 5:Or(S,S.return);break;case 22:if(S.memoizedState!==null){rd(I);continue}}R!==null?(R.return=S,F=R):rd(I)}k=k.sibling}e:for(k=null,I=t;;){if(I.tag===5){if(k===null){k=I;try{i=I.stateNode,h?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(c=I.stateNode,f=I.memoizedProps.style,a=f!=null&&f.hasOwnProperty("display")?f.display:null,c.style.display=Up("display",a))}catch(x){ae(t,t.return,x)}}}else if(I.tag===6){if(k===null)try{I.stateNode.nodeValue=h?"":I.memoizedProps}catch(x){ae(t,t.return,x)}}else if((I.tag!==22&&I.tag!==23||I.memoizedState===null||I===t)&&I.child!==null){I.child.return=I,I=I.child;continue}if(I===t)break e;for(;I.sibling===null;){if(I.return===null||I.return===t)break e;k===I&&(k=null),I=I.return}k===I&&(k=null),I.sibling.return=I.return,I=I.sibling}}break;case 19:ot(e,t),wt(t),r&4&&td(t);break;case 21:break;default:ot(e,t),wt(t)}}function wt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(lm(n)){var r=n;break e}n=n.return}throw Error(D(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ji(i,""),r.flags&=-33);var o=ed(t);Su(t,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,c=ed(t);_u(t,c,a);break;default:throw Error(D(161))}}catch(f){ae(t,t.return,f)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Fw(t,e,n){F=t,fm(t)}function fm(t,e,n){for(var r=(t.mode&1)!==0;F!==null;){var i=F,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Ys;if(!a){var c=i.alternate,f=c!==null&&c.memoizedState!==null||Pe;c=Ys;var h=Pe;if(Ys=a,(Pe=f)&&!h)for(F=i;F!==null;)a=F,f=a.child,a.tag===22&&a.memoizedState!==null?id(i):f!==null?(f.return=a,F=f):id(i);for(;o!==null;)F=o,fm(o),o=o.sibling;F=i,Ys=c,Pe=h}nd(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,F=o):nd(t)}}function nd(t){for(;F!==null;){var e=F;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Pe||fa(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Pe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:at(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Vh(e,o,r);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Vh(e,a,n)}break;case 5:var c=e.stateNode;if(n===null&&e.flags&4){n=c;var f=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":f.autoFocus&&n.focus();break;case"img":f.src&&(n.src=f.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var k=h.memoizedState;if(k!==null){var I=k.dehydrated;I!==null&&es(I)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}Pe||e.flags&512&&wu(e)}catch(S){ae(e,e.return,S)}}if(e===t){F=null;break}if(n=e.sibling,n!==null){n.return=e.return,F=n;break}F=e.return}}function rd(t){for(;F!==null;){var e=F;if(e===t){F=null;break}var n=e.sibling;if(n!==null){n.return=e.return,F=n;break}F=e.return}}function id(t){for(;F!==null;){var e=F;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{fa(4,e)}catch(f){ae(e,n,f)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(f){ae(e,i,f)}}var o=e.return;try{wu(e)}catch(f){ae(e,o,f)}break;case 5:var a=e.return;try{wu(e)}catch(f){ae(e,a,f)}}}catch(f){ae(e,e.return,f)}if(e===t){F=null;break}var c=e.sibling;if(c!==null){c.return=e.return,F=c;break}F=e.return}}var jw=Math.ceil,$o=Yt.ReactCurrentDispatcher,Sc=Yt.ReactCurrentOwner,tt=Yt.ReactCurrentBatchConfig,q=0,we=null,he=null,Ie=0,He=0,Dr=xn(0),me=0,fs=null,sr=0,ha=0,Ec=0,zi=null,je=null,Ic=0,Jr=1/0,Lt=null,zo=!1,Eu=null,kn=null,Zs=!1,wn=null,Bo=0,Bi=0,Iu=null,po=-1,go=0;function Le(){return q&6?fe():po!==-1?po:po=fe()}function Cn(t){return t.mode&1?q&2&&Ie!==0?Ie&-Ie:Ew.transition!==null?(go===0&&(go=Xp()),go):(t=J,t!==0||(t=window.event,t=t===void 0?16:ng(t.type)),t):1}function pt(t,e,n,r){if(50<Bi)throw Bi=0,Iu=null,Error(D(185));vs(t,n,r),(!(q&2)||t!==we)&&(t===we&&(!(q&2)&&(ha|=n),me===4&&hn(t,Ie)),Be(t,r),n===1&&q===0&&!(e.mode&1)&&(Jr=fe()+500,la&&Ln()))}function Be(t,e){var n=t.callbackNode;E0(t,e);var r=Co(t,t===we?Ie:0);if(r===0)n!==null&&dh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&dh(n),e===1)t.tag===0?Sw(sd.bind(null,t)):Sg(sd.bind(null,t)),yw(function(){!(q&6)&&Ln()}),n=null;else{switch(Jp(r)){case 1:n=Xu;break;case 4:n=Gp;break;case 16:n=ko;break;case 536870912:n=qp;break;default:n=ko}n=wm(n,hm.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function hm(t,e){if(po=-1,go=0,q&6)throw Error(D(327));var n=t.callbackNode;if(jr()&&t.callbackNode!==n)return null;var r=Co(t,t===we?Ie:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ho(t,r);else{e=r;var i=q;q|=2;var o=pm();(we!==t||Ie!==e)&&(Lt=null,Jr=fe()+500,Qn(t,e));do try{zw();break}catch(c){dm(t,c)}while(!0);lc(),$o.current=o,q=i,he!==null?e=0:(we=null,Ie=0,e=me)}if(e!==0){if(e===2&&(i=Jl(t),i!==0&&(r=i,e=Tu(t,i))),e===1)throw n=fs,Qn(t,0),hn(t,r),Be(t,fe()),n;if(e===6)hn(t,r);else{if(i=t.current.alternate,!(r&30)&&!Vw(i)&&(e=Ho(t,r),e===2&&(o=Jl(t),o!==0&&(r=o,e=Tu(t,o))),e===1))throw n=fs,Qn(t,0),hn(t,r),Be(t,fe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(D(345));case 2:Bn(t,je,Lt);break;case 3:if(hn(t,r),(r&130023424)===r&&(e=Ic+500-fe(),10<e)){if(Co(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Le(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=iu(Bn.bind(null,t,je,Lt),e);break}Bn(t,je,Lt);break;case 4:if(hn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var a=31-dt(r);o=1<<a,a=e[a],a>i&&(i=a),r&=~o}if(r=i,r=fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*jw(r/1960))-r,10<r){t.timeoutHandle=iu(Bn.bind(null,t,je,Lt),r);break}Bn(t,je,Lt);break;case 5:Bn(t,je,Lt);break;default:throw Error(D(329))}}}return Be(t,fe()),t.callbackNode===n?hm.bind(null,t):null}function Tu(t,e){var n=zi;return t.current.memoizedState.isDehydrated&&(Qn(t,e).flags|=256),t=Ho(t,e),t!==2&&(e=je,je=n,e!==null&&ku(e)),t}function ku(t){je===null?je=t:je.push.apply(je,t)}function Vw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!gt(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function hn(t,e){for(e&=~Ec,e&=~ha,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-dt(e),r=1<<n;t[n]=-1,e&=~r}}function sd(t){if(q&6)throw Error(D(327));jr();var e=Co(t,0);if(!(e&1))return Be(t,fe()),null;var n=Ho(t,e);if(t.tag!==0&&n===2){var r=Jl(t);r!==0&&(e=r,n=Tu(t,r))}if(n===1)throw n=fs,Qn(t,0),hn(t,e),Be(t,fe()),n;if(n===6)throw Error(D(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Bn(t,je,Lt),Be(t,fe()),null}function Tc(t,e){var n=q;q|=1;try{return t(e)}finally{q=n,q===0&&(Jr=fe()+500,la&&Ln())}}function or(t){wn!==null&&wn.tag===0&&!(q&6)&&jr();var e=q;q|=1;var n=tt.transition,r=J;try{if(tt.transition=null,J=1,t)return t()}finally{J=r,tt.transition=n,q=e,!(q&6)&&Ln()}}function kc(){He=Dr.current,te(Dr)}function Qn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,mw(n)),he!==null)for(n=he.return;n!==null;){var r=n;switch(sc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Oo();break;case 3:qr(),te($e),te(Ne),pc();break;case 5:dc(r);break;case 4:qr();break;case 13:te(ie);break;case 19:te(ie);break;case 10:uc(r.type._context);break;case 22:case 23:kc()}n=n.return}if(we=t,he=t=An(t.current,null),Ie=He=e,me=0,fs=null,Ec=ha=sr=0,je=zi=null,Gn!==null){for(e=0;e<Gn.length;e++)if(n=Gn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Gn=null}return t}function dm(t,e){do{var n=he;try{if(lc(),co.current=Vo,jo){for(var r=se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}jo=!1}if(ir=0,ve=ge=se=null,Vi=!1,ls=0,Sc.current=null,n===null||n.return===null){me=1,fs=e,he=null;break}e:{var o=t,a=n.return,c=n,f=e;if(e=Ie,c.flags|=32768,f!==null&&typeof f=="object"&&typeof f.then=="function"){var h=f,k=c,I=k.tag;if(!(k.mode&1)&&(I===0||I===11||I===15)){var S=k.alternate;S?(k.updateQueue=S.updateQueue,k.memoizedState=S.memoizedState,k.lanes=S.lanes):(k.updateQueue=null,k.memoizedState=null)}var R=Kh(a);if(R!==null){R.flags&=-257,Gh(R,a,c,o,e),R.mode&1&&Wh(o,h,e),e=R,f=h;var O=e.updateQueue;if(O===null){var x=new Set;x.add(f),e.updateQueue=x}else O.add(f);break e}else{if(!(e&1)){Wh(o,h,e),Cc();break e}f=Error(D(426))}}else if(re&&c.mode&1){var j=Kh(a);if(j!==null){!(j.flags&65536)&&(j.flags|=256),Gh(j,a,c,o,e),oc(Xr(f,c));break e}}o=f=Xr(f,c),me!==4&&(me=2),zi===null?zi=[o]:zi.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var E=Jg(o,f,e);jh(o,E);break e;case 1:c=f;var w=o.type,T=o.stateNode;if(!(o.flags&128)&&(typeof w.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(kn===null||!kn.has(T)))){o.flags|=65536,e&=-e,o.lanes|=e;var N=Qg(o,c,e);jh(o,N);break e}}o=o.return}while(o!==null)}mm(n)}catch(M){e=M,he===n&&n!==null&&(he=n=n.return);continue}break}while(!0)}function pm(){var t=$o.current;return $o.current=Vo,t===null?Vo:t}function Cc(){(me===0||me===3||me===2)&&(me=4),we===null||!(sr&268435455)&&!(ha&268435455)||hn(we,Ie)}function Ho(t,e){var n=q;q|=2;var r=pm();(we!==t||Ie!==e)&&(Lt=null,Qn(t,e));do try{$w();break}catch(i){dm(t,i)}while(!0);if(lc(),q=n,$o.current=r,he!==null)throw Error(D(261));return we=null,Ie=0,me}function $w(){for(;he!==null;)gm(he)}function zw(){for(;he!==null&&!d0();)gm(he)}function gm(t){var e=vm(t.alternate,t,He);t.memoizedProps=t.pendingProps,e===null?mm(t):he=e,Sc.current=null}function mm(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Mw(n,e),n!==null){n.flags&=32767,he=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{me=6,he=null;return}}else if(n=Lw(n,e,He),n!==null){he=n;return}if(e=e.sibling,e!==null){he=e;return}he=e=t}while(e!==null);me===0&&(me=5)}function Bn(t,e,n){var r=J,i=tt.transition;try{tt.transition=null,J=1,Bw(t,e,n,r)}finally{tt.transition=i,J=r}return null}function Bw(t,e,n,r){do jr();while(wn!==null);if(q&6)throw Error(D(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(D(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(I0(t,o),t===we&&(he=we=null,Ie=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Zs||(Zs=!0,wm(ko,function(){return jr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=tt.transition,tt.transition=null;var a=J;J=1;var c=q;q|=4,Sc.current=null,bw(t,n),cm(n,t),uw(nu),Ao=!!tu,nu=tu=null,t.current=n,Fw(n),p0(),q=c,J=a,tt.transition=o}else t.current=n;if(Zs&&(Zs=!1,wn=t,Bo=i),o=t.pendingLanes,o===0&&(kn=null),y0(n.stateNode),Be(t,fe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(zo)throw zo=!1,t=Eu,Eu=null,t;return Bo&1&&t.tag!==0&&jr(),o=t.pendingLanes,o&1?t===Iu?Bi++:(Bi=0,Iu=t):Bi=0,Ln(),null}function jr(){if(wn!==null){var t=Jp(Bo),e=tt.transition,n=J;try{if(tt.transition=null,J=16>t?16:t,wn===null)var r=!1;else{if(t=wn,wn=null,Bo=0,q&6)throw Error(D(331));var i=q;for(q|=4,F=t.current;F!==null;){var o=F,a=o.child;if(F.flags&16){var c=o.deletions;if(c!==null){for(var f=0;f<c.length;f++){var h=c[f];for(F=h;F!==null;){var k=F;switch(k.tag){case 0:case 11:case 15:$i(8,k,o)}var I=k.child;if(I!==null)I.return=k,F=I;else for(;F!==null;){k=F;var S=k.sibling,R=k.return;if(am(k),k===h){F=null;break}if(S!==null){S.return=R,F=S;break}F=R}}}var O=o.alternate;if(O!==null){var x=O.child;if(x!==null){O.child=null;do{var j=x.sibling;x.sibling=null,x=j}while(x!==null)}}F=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,F=a;else e:for(;F!==null;){if(o=F,o.flags&2048)switch(o.tag){case 0:case 11:case 15:$i(9,o,o.return)}var E=o.sibling;if(E!==null){E.return=o.return,F=E;break e}F=o.return}}var w=t.current;for(F=w;F!==null;){a=F;var T=a.child;if(a.subtreeFlags&2064&&T!==null)T.return=a,F=T;else e:for(a=w;F!==null;){if(c=F,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:fa(9,c)}}catch(M){ae(c,c.return,M)}if(c===a){F=null;break e}var N=c.sibling;if(N!==null){N.return=c.return,F=N;break e}F=c.return}}if(q=i,Ln(),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(ra,t)}catch{}r=!0}return r}finally{J=n,tt.transition=e}}return!1}function od(t,e,n){e=Xr(n,e),e=Jg(t,e,1),t=Tn(t,e,1),e=Le(),t!==null&&(vs(t,1,e),Be(t,e))}function ae(t,e,n){if(t.tag===3)od(t,t,n);else for(;e!==null;){if(e.tag===3){od(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(kn===null||!kn.has(r))){t=Xr(n,t),t=Qg(e,t,1),e=Tn(e,t,1),t=Le(),e!==null&&(vs(e,1,t),Be(e,t));break}}e=e.return}}function Hw(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Le(),t.pingedLanes|=t.suspendedLanes&n,we===t&&(Ie&n)===n&&(me===4||me===3&&(Ie&130023424)===Ie&&500>fe()-Ic?Qn(t,0):Ec|=n),Be(t,e)}function ym(t,e){e===0&&(t.mode&1?(e=Bs,Bs<<=1,!(Bs&130023424)&&(Bs=4194304)):e=1);var n=Le();t=Kt(t,e),t!==null&&(vs(t,e,n),Be(t,n))}function Ww(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ym(t,n)}function Kw(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(D(314))}r!==null&&r.delete(e),ym(t,n)}var vm;vm=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||$e.current)Ve=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ve=!1,xw(t,e,n);Ve=!!(t.flags&131072)}else Ve=!1,re&&e.flags&1048576&&Eg(e,Lo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ho(t,e),t=e.pendingProps;var i=Wr(e,Ne.current);Fr(e,n),i=mc(null,e,r,t,i,n);var o=yc();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ze(r)?(o=!0,Do(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,fc(e),i.updater=ca,e.stateNode=i,i._reactInternals=e,fu(e,r,t,n),e=pu(null,e,r,!0,o,n)):(e.tag=0,re&&o&&ic(e),De(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ho(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=qw(r),t=at(r,t),i){case 0:e=du(null,e,r,t,n);break e;case 1:e=Jh(null,e,r,t,n);break e;case 11:e=qh(null,e,r,t,n);break e;case 14:e=Xh(null,e,r,at(r.type,t),n);break e}throw Error(D(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:at(r,i),du(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:at(r,i),Jh(t,e,r,i,n);case 3:e:{if(tm(e),t===null)throw Error(D(387));r=e.pendingProps,o=e.memoizedState,i=o.element,Pg(t,e),bo(e,r,null,n);var a=e.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=Xr(Error(D(423)),e),e=Qh(t,e,r,n,i);break e}else if(r!==i){i=Xr(Error(D(424)),e),e=Qh(t,e,r,n,i);break e}else for(We=In(e.stateNode.containerInfo.firstChild),Ke=e,re=!0,ut=null,n=Cg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Kr(),r===i){e=Gt(t,e,n);break e}De(t,e,r,n)}e=e.child}return e;case 5:return Ng(e),t===null&&lu(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,a=i.children,ru(r,i)?a=null:o!==null&&ru(r,o)&&(e.flags|=32),em(t,e),De(t,e,a,n),e.child;case 6:return t===null&&lu(e),null;case 13:return nm(t,e,n);case 4:return hc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Gr(e,null,r,n):De(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:at(r,i),qh(t,e,r,i,n);case 7:return De(t,e,e.pendingProps,n),e.child;case 8:return De(t,e,e.pendingProps.children,n),e.child;case 12:return De(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,a=i.value,Y(Mo,r._currentValue),r._currentValue=a,o!==null)if(gt(o.value,a)){if(o.children===i.children&&!$e.current){e=Gt(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var c=o.dependencies;if(c!==null){a=o.child;for(var f=c.firstContext;f!==null;){if(f.context===r){if(o.tag===1){f=zt(-1,n&-n),f.tag=2;var h=o.updateQueue;if(h!==null){h=h.shared;var k=h.pending;k===null?f.next=f:(f.next=k.next,k.next=f),h.pending=f}}o.lanes|=n,f=o.alternate,f!==null&&(f.lanes|=n),uu(o.return,n,e),c.lanes|=n;break}f=f.next}}else if(o.tag===10)a=o.type===e.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(D(341));a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),uu(a,n,e),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===e){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}De(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Fr(e,n),i=rt(i),r=r(i),e.flags|=1,De(t,e,r,n),e.child;case 14:return r=e.type,i=at(r,e.pendingProps),i=at(r.type,i),Xh(t,e,r,i,n);case 15:return Yg(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:at(r,i),ho(t,e),e.tag=1,ze(r)?(t=!0,Do(e)):t=!1,Fr(e,n),Xg(e,r,i),fu(e,r,i,n),pu(null,e,r,!0,t,n);case 19:return rm(t,e,n);case 22:return Zg(t,e,n)}throw Error(D(156,e.tag))};function wm(t,e){return Kp(t,e)}function Gw(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(t,e,n,r){return new Gw(t,e,n,r)}function Ac(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qw(t){if(typeof t=="function")return Ac(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ku)return 11;if(t===Gu)return 14}return 2}function An(t,e){var n=t.alternate;return n===null?(n=et(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function mo(t,e,n,r,i,o){var a=2;if(r=t,typeof t=="function")Ac(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Er:return Yn(n.children,i,o,e);case Wu:a=8,i|=8;break;case Ml:return t=et(12,n,e,i|2),t.elementType=Ml,t.lanes=o,t;case Ul:return t=et(13,n,e,i),t.elementType=Ul,t.lanes=o,t;case bl:return t=et(19,n,e,i),t.elementType=bl,t.lanes=o,t;case Np:return da(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ap:a=10;break e;case Pp:a=9;break e;case Ku:a=11;break e;case Gu:a=14;break e;case un:a=16,r=null;break e}throw Error(D(130,t==null?t:typeof t,""))}return e=et(a,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function Yn(t,e,n,r){return t=et(7,t,r,e),t.lanes=n,t}function da(t,e,n,r){return t=et(22,t,r,e),t.elementType=Np,t.lanes=n,t.stateNode={isHidden:!1},t}function yl(t,e,n){return t=et(6,t,null,e),t.lanes=n,t}function vl(t,e,n){return e=et(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Xw(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ya(0),this.expirationTimes=Ya(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ya(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Pc(t,e,n,r,i,o,a,c,f){return t=new Xw(t,e,n,c,f),e===1?(e=1,o===!0&&(e|=8)):e=0,o=et(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fc(o),t}function Jw(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Sr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function _m(t){if(!t)return Rn;t=t._reactInternals;e:{if(dr(t)!==t||t.tag!==1)throw Error(D(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ze(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(D(171))}if(t.tag===1){var n=t.type;if(ze(n))return _g(t,n,e)}return e}function Sm(t,e,n,r,i,o,a,c,f){return t=Pc(n,r,!0,t,i,o,a,c,f),t.context=_m(null),n=t.current,r=Le(),i=Cn(n),o=zt(r,i),o.callback=e??null,Tn(n,o,i),t.current.lanes=i,vs(t,i,r),Be(t,r),t}function pa(t,e,n,r){var i=e.current,o=Le(),a=Cn(i);return n=_m(n),e.context===null?e.context=n:e.pendingContext=n,e=zt(o,a),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Tn(i,e,a),t!==null&&(pt(t,i,a,o),uo(t,i,a)),a}function Wo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ad(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Nc(t,e){ad(t,e),(t=t.alternate)&&ad(t,e)}function Qw(){return null}var Em=typeof reportError=="function"?reportError:function(t){console.error(t)};function Rc(t){this._internalRoot=t}ga.prototype.render=Rc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(D(409));pa(t,e,null,null)};ga.prototype.unmount=Rc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;or(function(){pa(null,t,null,null)}),e[Wt]=null}};function ga(t){this._internalRoot=t}ga.prototype.unstable_scheduleHydration=function(t){if(t){var e=Zp();t={blockedOn:null,target:t,priority:e};for(var n=0;n<fn.length&&e!==0&&e<fn[n].priority;n++);fn.splice(n,0,t),n===0&&tg(t)}};function Oc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ma(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ld(){}function Yw(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var h=Wo(a);o.call(h)}}var a=Sm(e,r,t,0,null,!1,!1,"",ld);return t._reactRootContainer=a,t[Wt]=a.current,rs(t.nodeType===8?t.parentNode:t),or(),a}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var c=r;r=function(){var h=Wo(f);c.call(h)}}var f=Pc(t,0,!1,null,null,!1,!1,"",ld);return t._reactRootContainer=f,t[Wt]=f.current,rs(t.nodeType===8?t.parentNode:t),or(function(){pa(e,f,n,r)}),f}function ya(t,e,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var c=i;i=function(){var f=Wo(a);c.call(f)}}pa(e,a,t,i)}else a=Yw(n,e,t,i,r);return Wo(a)}Qp=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=xi(e.pendingLanes);n!==0&&(Ju(e,n|1),Be(e,fe()),!(q&6)&&(Jr=fe()+500,Ln()))}break;case 13:or(function(){var r=Kt(t,1);if(r!==null){var i=Le();pt(r,t,1,i)}}),Nc(t,1)}};Qu=function(t){if(t.tag===13){var e=Kt(t,134217728);if(e!==null){var n=Le();pt(e,t,134217728,n)}Nc(t,134217728)}};Yp=function(t){if(t.tag===13){var e=Cn(t),n=Kt(t,e);if(n!==null){var r=Le();pt(n,t,e,r)}Nc(t,e)}};Zp=function(){return J};eg=function(t,e){var n=J;try{return J=t,e()}finally{J=n}};Gl=function(t,e,n){switch(e){case"input":if(Vl(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=aa(r);if(!i)throw Error(D(90));Op(r),Vl(r,i)}}}break;case"textarea":xp(t,n);break;case"select":e=n.value,e!=null&&Lr(t,!!n.multiple,e,!1)}};Vp=Tc;$p=or;var Zw={usingClientEntryPoint:!1,Events:[_s,Cr,aa,Fp,jp,Tc]},Ri={findFiberByHostInstance:Kn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},e1={bundleType:Ri.bundleType,version:Ri.version,rendererPackageName:Ri.rendererPackageName,rendererConfig:Ri.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Hp(t),t===null?null:t.stateNode},findFiberByHostInstance:Ri.findFiberByHostInstance||Qw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var eo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!eo.isDisabled&&eo.supportsFiber)try{ra=eo.inject(e1),Ct=eo}catch{}}qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zw;qe.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Oc(e))throw Error(D(200));return Jw(t,e,null,n)};qe.createRoot=function(t,e){if(!Oc(t))throw Error(D(299));var n=!1,r="",i=Em;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Pc(t,1,!1,null,null,n,!1,r,i),t[Wt]=e.current,rs(t.nodeType===8?t.parentNode:t),new Rc(e)};qe.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(D(188)):(t=Object.keys(t).join(","),Error(D(268,t)));return t=Hp(e),t=t===null?null:t.stateNode,t};qe.flushSync=function(t){return or(t)};qe.hydrate=function(t,e,n){if(!ma(e))throw Error(D(200));return ya(null,t,e,!0,n)};qe.hydrateRoot=function(t,e,n){if(!Oc(t))throw Error(D(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Em;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Sm(e,null,t,1,n??null,i,!1,o,a),t[Wt]=e.current,rs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ga(e)};qe.render=function(t,e,n){if(!ma(e))throw Error(D(200));return ya(null,t,e,!1,n)};qe.unmountComponentAtNode=function(t){if(!ma(t))throw Error(D(40));return t._reactRootContainer?(or(function(){ya(null,null,t,!1,function(){t._reactRootContainer=null,t[Wt]=null})}),!0):!1};qe.unstable_batchedUpdates=Tc;qe.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ma(n))throw Error(D(200));if(t==null||t._reactInternals===void 0)throw Error(D(38));return ya(t,e,n,!1,r)};qe.version="18.3.1-next-f1338f8080-20240426";function Im(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Im)}catch(t){console.error(t)}}Im(),Ip.exports=qe;var t1=Ip.exports,Tm,ud=t1;Tm=ud.createRoot,ud.hydrateRoot;const n1=()=>{};var cd={};/**
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
 */const km=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},r1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],a=t[n++],c=t[n++],f=((i&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(f>>10)),e[r++]=String.fromCharCode(56320+(f&1023))}else{const o=t[n++],a=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return e.join("")},Cm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],a=i+1<t.length,c=a?t[i+1]:0,f=i+2<t.length,h=f?t[i+2]:0,k=o>>2,I=(o&3)<<4|c>>4;let S=(c&15)<<2|h>>6,R=h&63;f||(R=64,a||(S=64)),r.push(n[k],n[I],n[S],n[R])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(km(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):r1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],c=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const I=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||c==null||h==null||I==null)throw new i1;const S=o<<2|c>>4;if(r.push(S),h!==64){const R=c<<4&240|h>>2;if(r.push(R),I!==64){const O=h<<6&192|I;r.push(O)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class i1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const s1=function(t){const e=km(t);return Cm.encodeByteArray(e,!0)},Ko=function(t){return s1(t).replace(/\./g,"")},Am=function(t){try{return Cm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function o1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const a1=()=>o1().__FIREBASE_DEFAULTS__,l1=()=>{if(typeof process>"u"||typeof cd>"u")return;const t=cd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},u1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Am(t[1]);return e&&JSON.parse(e)},Dc=()=>{try{return n1()||a1()||l1()||u1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Pm=t=>{var e,n;return(n=(e=Dc())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},c1=t=>{const e=Pm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Nm=()=>{var t;return(t=Dc())==null?void 0:t.config},Rm=t=>{var e;return(e=Dc())==null?void 0:e[`_${t}`]};/**
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
 */class f1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Es(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Om(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function h1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Ko(JSON.stringify(n)),Ko(JSON.stringify(a)),""].join(".")}const Hi={};function d1(){const t={prod:[],emulator:[]};for(const e of Object.keys(Hi))Hi[e]?t.emulator.push(e):t.prod.push(e);return t}function p1(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let fd=!1;function Dm(t,e){if(typeof window>"u"||typeof document>"u"||!Es(window.location.host)||Hi[t]===e||Hi[t]||fd)return;Hi[t]=e;function n(S){return`__firebase__banner__${S}`}const r="__firebase__banner",o=d1().prod.length>0;function a(){const S=document.getElementById(r);S&&S.remove()}function c(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function f(S,R){S.setAttribute("width","24"),S.setAttribute("id",R),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function h(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{fd=!0,a()},S}function k(S,R){S.setAttribute("id",R),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function I(){const S=p1(r),R=n("text"),O=document.getElementById(R)||document.createElement("span"),x=n("learnmore"),j=document.getElementById(x)||document.createElement("a"),E=n("preprendIcon"),w=document.getElementById(E)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const T=S.element;c(T),k(j,x);const N=h();f(w,E),T.append(w,O,j,N),document.body.appendChild(T)}o?(O.innerText="Preview backend disconnected.",w.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(w.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,O.innerText="Preview backend running in this workspace."),O.setAttribute("id",R)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",I):I()}/**
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
 */function Ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function g1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ue())}function m1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function y1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function v1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function w1(){const t=Ue();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function xm(){try{return typeof indexedDB=="object"}catch{return!1}}function Lm(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)==null?void 0:o.message)||"")}}catch(n){e(n)}})}function _1(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const S1="FirebaseError";class Ot extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=S1,Object.setPrototypeOf(this,Ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pr.prototype.create)}}class pr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],a=o?E1(o,r):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new Ot(i,c,r)}}function E1(t,e){return t.replace(I1,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const I1=/\{\$([^}]+)}/g;function T1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ar(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],a=e[i];if(hd(o)&&hd(a)){if(!ar(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function hd(t){return t!==null&&typeof t=="object"}/**
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
 */function Is(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function k1(t,e){const n=new C1(t,e);return n.subscribe.bind(n)}class C1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");A1(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=wl),i.error===void 0&&(i.error=wl),i.complete===void 0&&(i.complete=wl);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function A1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function wl(){}/**
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
 */function gr(t){return t&&t._delegate?t._delegate:t}class mt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Hn="[DEFAULT]";/**
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
 */class P1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new f1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(R1(e))try{this.getOrInitializeService({instanceIdentifier:Hn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=Hn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Hn){return this.instances.has(e)}getOptions(e=Hn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&a.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:N1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Hn){return this.component?this.component.multipleInstances?e:Hn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function N1(t){return t===Hn?void 0:t}function R1(t){return t.instantiationMode==="EAGER"}/**
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
 */class O1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new P1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var X;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(X||(X={}));const D1={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},x1=X.INFO,L1={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},M1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=L1[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xc{constructor(e){this.name=e,this._logLevel=x1,this._logHandler=M1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?D1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const U1=(t,e)=>e.some(n=>t instanceof n);let dd,pd;function b1(){return dd||(dd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function F1(){return pd||(pd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Mm=new WeakMap,Cu=new WeakMap,Um=new WeakMap,_l=new WeakMap,Lc=new WeakMap;function j1(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",a)},o=()=>{n(Bt(t.result)),i()},a=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Mm.set(n,t)}).catch(()=>{}),Lc.set(e,t),e}function V1(t){if(Cu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",a),t.removeEventListener("abort",a)},o=()=>{n(),i()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",a),t.addEventListener("abort",a)});Cu.set(t,e)}let Au={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Cu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Um.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Bt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function $1(t){Au=t(Au)}function z1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Sl(this),e,...n);return Um.set(r,e.sort?e.sort():[e]),Bt(r)}:F1().includes(t)?function(...e){return t.apply(Sl(this),e),Bt(Mm.get(this))}:function(...e){return Bt(t.apply(Sl(this),e))}}function B1(t){return typeof t=="function"?z1(t):(t instanceof IDBTransaction&&V1(t),U1(t,b1())?new Proxy(t,Au):t)}function Bt(t){if(t instanceof IDBRequest)return j1(t);if(_l.has(t))return _l.get(t);const e=B1(t);return e!==t&&(_l.set(t,e),Lc.set(e,t)),e}const Sl=t=>Lc.get(t);function va(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(t,e),c=Bt(a);return r&&a.addEventListener("upgradeneeded",f=>{r(Bt(a.result),f.oldVersion,f.newVersion,Bt(a.transaction),f)}),n&&a.addEventListener("blocked",f=>n(f.oldVersion,f.newVersion,f)),c.then(f=>{o&&f.addEventListener("close",()=>o()),i&&f.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}function El(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),Bt(n).then(()=>{})}const H1=["get","getKey","getAll","getAllKeys","count"],W1=["put","add","delete","clear"],Il=new Map;function gd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Il.get(e))return Il.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=W1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||H1.includes(n)))return;const o=async function(a,...c){const f=this.transaction(a,i?"readwrite":"readonly");let h=f.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),i&&f.done]))[0]};return Il.set(e,o),o}$1(t=>({...t,get:(e,n,r)=>gd(e,n)||t.get(e,n,r),has:(e,n)=>!!gd(e,n)||t.has(e,n)}));/**
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
 */class K1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(G1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function G1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Pu="@firebase/app",md="0.14.4";/**
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
 */const qt=new xc("@firebase/app"),q1="@firebase/app-compat",X1="@firebase/analytics-compat",J1="@firebase/analytics",Q1="@firebase/app-check-compat",Y1="@firebase/app-check",Z1="@firebase/auth",e_="@firebase/auth-compat",t_="@firebase/database",n_="@firebase/data-connect",r_="@firebase/database-compat",i_="@firebase/functions",s_="@firebase/functions-compat",o_="@firebase/installations",a_="@firebase/installations-compat",l_="@firebase/messaging",u_="@firebase/messaging-compat",c_="@firebase/performance",f_="@firebase/performance-compat",h_="@firebase/remote-config",d_="@firebase/remote-config-compat",p_="@firebase/storage",g_="@firebase/storage-compat",m_="@firebase/firestore",y_="@firebase/ai",v_="@firebase/firestore-compat",w_="firebase",__="12.4.0";/**
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
 */const Nu="[DEFAULT]",S_={[Pu]:"fire-core",[q1]:"fire-core-compat",[J1]:"fire-analytics",[X1]:"fire-analytics-compat",[Y1]:"fire-app-check",[Q1]:"fire-app-check-compat",[Z1]:"fire-auth",[e_]:"fire-auth-compat",[t_]:"fire-rtdb",[n_]:"fire-data-connect",[r_]:"fire-rtdb-compat",[i_]:"fire-fn",[s_]:"fire-fn-compat",[o_]:"fire-iid",[a_]:"fire-iid-compat",[l_]:"fire-fcm",[u_]:"fire-fcm-compat",[c_]:"fire-perf",[f_]:"fire-perf-compat",[h_]:"fire-rc",[d_]:"fire-rc-compat",[p_]:"fire-gcs",[g_]:"fire-gcs-compat",[m_]:"fire-fst",[v_]:"fire-fst-compat",[y_]:"fire-vertex","fire-js":"fire-js",[w_]:"fire-js-all"};/**
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
 */const Go=new Map,E_=new Map,Ru=new Map;function yd(t,e){try{t.container.addComponent(e)}catch(n){qt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Rt(t){const e=t.name;if(Ru.has(e))return qt.debug(`There were multiple attempts to register component ${e}.`),!1;Ru.set(e,t);for(const n of Go.values())yd(n,t);for(const n of E_.values())yd(n,t);return!0}function ni(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Tt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const I_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pn=new pr("app","Firebase",I_);/**
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
 */class T_{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new mt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pn.create("app-deleted",{appName:this._name})}}/**
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
 */const ri=__;function bm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Nu,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Pn.create("bad-app-name",{appName:String(i)});if(n||(n=Nm()),!n)throw Pn.create("no-options");const o=Go.get(i);if(o){if(ar(n,o.options)&&ar(r,o.config))return o;throw Pn.create("duplicate-app",{appName:i})}const a=new O1(i);for(const f of Ru.values())a.addComponent(f);const c=new T_(n,r,a);return Go.set(i,c),c}function Mc(t=Nu){const e=Go.get(t);if(!e&&t===Nu&&Nm())return bm();if(!e)throw Pn.create("no-app",{appName:t});return e}function nt(t,e,n){let r=S_[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qt.warn(a.join(" "));return}Rt(new mt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const k_="firebase-heartbeat-database",C_=1,hs="firebase-heartbeat-store";let Tl=null;function Fm(){return Tl||(Tl=va(k_,C_,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(hs)}catch(n){console.warn(n)}}}}).catch(t=>{throw Pn.create("idb-open",{originalErrorMessage:t.message})})),Tl}async function A_(t){try{const n=(await Fm()).transaction(hs),r=await n.objectStore(hs).get(jm(t));return await n.done,r}catch(e){if(e instanceof Ot)qt.warn(e.message);else{const n=Pn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});qt.warn(n.message)}}}async function vd(t,e){try{const r=(await Fm()).transaction(hs,"readwrite");await r.objectStore(hs).put(e,jm(t)),await r.done}catch(n){if(n instanceof Ot)qt.warn(n.message);else{const r=Pn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});qt.warn(r.message)}}}function jm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const P_=1024,N_=30;class R_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new D_(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=wd();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>N_){const a=x_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){qt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=wd(),{heartbeatsToSend:r,unsentEntries:i}=O_(this._heartbeatsCache.heartbeats),o=Ko(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return qt.warn(n),""}}}function wd(){return new Date().toISOString().substring(0,10)}function O_(t,e=P_){const n=[];let r=t.slice();for(const i of t){const o=n.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),_d(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),_d(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class D_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xm()?Lm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await A_(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return vd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return vd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function _d(t){return Ko(JSON.stringify({version:2,heartbeats:t})).length}function x_(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function L_(t){Rt(new mt("platform-logger",e=>new K1(e),"PRIVATE")),Rt(new mt("heartbeat",e=>new R_(e),"PRIVATE")),nt(Pu,md,t),nt(Pu,md,"esm2020"),nt("fire-js","")}L_("");function Vm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const M_=Vm,$m=new pr("auth","Firebase",Vm());/**
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
 */const qo=new xc("@firebase/auth");function U_(t,...e){qo.logLevel<=X.WARN&&qo.warn(`Auth (${ri}): ${t}`,...e)}function yo(t,...e){qo.logLevel<=X.ERROR&&qo.error(`Auth (${ri}): ${t}`,...e)}/**
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
 */function Xt(t,...e){throw Uc(t,...e)}function Pt(t,...e){return Uc(t,...e)}function zm(t,e,n){const r={...M_(),[e]:n};return new pr("auth","Firebase",r).create(e,{appName:t.name})}function Zn(t){return zm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Uc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return $m.create(t,...e)}function V(t,e,...n){if(!t)throw Uc(e,...n)}function Vt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw yo(e),new Error(e)}function Jt(t,e){t||Vt(e)}/**
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
 */function Ou(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function b_(){return Sd()==="http:"||Sd()==="https:"}function Sd(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function F_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(b_()||y1()||"connection"in navigator)?navigator.onLine:!0}function j_(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ts{constructor(e,n){this.shortDelay=e,this.longDelay=n,Jt(n>e,"Short delay should be less than long delay!"),this.isMobile=g1()||v1()}get(){return F_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function bc(t,e){Jt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Bm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Vt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Vt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Vt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const V_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const $_=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],z_=new Ts(3e4,6e4);function Fc(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function ii(t,e,n,r,i={}){return Hm(t,i,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});const c=Is({key:t.config.apiKey,...a}).slice(1),f=await t._getAdditionalHeaders();f["Content-Type"]="application/json",t.languageCode&&(f["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:f,...o};return m1()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&Es(t.emulatorConfig.host)&&(h.credentials="include"),Bm.fetch()(await Wm(t,t.config.apiHost,n,c),h)})}async function Hm(t,e,n){t._canInitEmulator=!1;const r={...V_,...e};try{const i=new H_(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw to(t,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const c=o.ok?a.errorMessage:a.error.message,[f,h]=c.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw to(t,"credential-already-in-use",a);if(f==="EMAIL_EXISTS")throw to(t,"email-already-in-use",a);if(f==="USER_DISABLED")throw to(t,"user-disabled",a);const k=r[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw zm(t,k,h);Xt(t,k)}}catch(i){if(i instanceof Ot)throw i;Xt(t,"network-request-failed",{message:String(i)})}}async function B_(t,e,n,r,i={}){const o=await ii(t,e,n,r,i);return"mfaPendingCredential"in o&&Xt(t,"multi-factor-auth-required",{_serverResponse:o}),o}async function Wm(t,e,n,r){const i=`${e}${n}?${r}`,o=t,a=o.config.emulator?bc(t.config,i):`${t.config.apiScheme}://${i}`;return $_.includes(n)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}class H_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Pt(this.auth,"network-request-failed")),z_.get())})}}function to(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Pt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function W_(t,e){return ii(t,"POST","/v1/accounts:delete",e)}async function Xo(t,e){return ii(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Wi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function K_(t,e=!1){const n=gr(t),r=await n.getIdToken(e),i=jc(r);V(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Wi(kl(i.auth_time)),issuedAtTime:Wi(kl(i.iat)),expirationTime:Wi(kl(i.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function kl(t){return Number(t)*1e3}function jc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return yo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Am(n);return i?JSON.parse(i):(yo("Failed to decode base64 JWT payload"),null)}catch(i){return yo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ed(t){const e=jc(t);return V(e,"internal-error"),V(typeof e.exp<"u","internal-error"),V(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ds(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ot&&G_(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function G_({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class q_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Du{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wi(this.lastLoginAt),this.creationTime=Wi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Jo(t){var I;const e=t.auth,n=await t.getIdToken(),r=await ds(t,Xo(e,{idToken:n}));V(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=(I=i.providerUserInfo)!=null&&I.length?Km(i.providerUserInfo):[],a=J_(t.providerData,o),c=t.isAnonymous,f=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),h=c?f:!1,k={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Du(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,k)}async function X_(t){const e=gr(t);await Jo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function J_(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Km(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function Q_(t,e){const n=await Hm(t,{},async()=>{const r=Is({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,a=await Wm(t,i,"/v1/token",`key=${o}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const f={method:"POST",headers:c,body:r};return t.emulatorConfig&&Es(t.emulatorConfig.host)&&(f.credentials="include"),Bm.fetch()(a,f)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Y_(t,e){return ii(t,"POST","/v2/accounts:revokeToken",Fc(t,e))}/**
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
 */class Vr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){V(e.idToken,"internal-error"),V(typeof e.idToken<"u","internal-error"),V(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ed(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){V(e.length!==0,"internal-error");const n=Ed(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(V(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await Q_(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,a=new Vr;return r&&(V(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(V(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),o&&(V(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Vr,this.toJSON())}_performRefresh(){return Vt("not implemented")}}/**
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
 */function ln(t,e){V(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ft{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new q_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Du(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ds(this,this.stsTokenManager.getToken(this.auth,e));return V(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return K_(this,e)}reload(){return X_(this)}_assign(e){this!==e&&(V(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ft({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Jo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Tt(this.auth.app))return Promise.reject(Zn(this.auth));const e=await this.getIdToken();return await ds(this,W_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,o=n.phoneNumber??void 0,a=n.photoURL??void 0,c=n.tenantId??void 0,f=n._redirectEventId??void 0,h=n.createdAt??void 0,k=n.lastLoginAt??void 0,{uid:I,emailVerified:S,isAnonymous:R,providerData:O,stsTokenManager:x}=n;V(I&&x,e,"internal-error");const j=Vr.fromJSON(this.name,x);V(typeof I=="string",e,"internal-error"),ln(r,e.name),ln(i,e.name),V(typeof S=="boolean",e,"internal-error"),V(typeof R=="boolean",e,"internal-error"),ln(o,e.name),ln(a,e.name),ln(c,e.name),ln(f,e.name),ln(h,e.name),ln(k,e.name);const E=new ft({uid:I,auth:e,email:i,emailVerified:S,displayName:r,isAnonymous:R,photoURL:a,phoneNumber:o,tenantId:c,stsTokenManager:j,createdAt:h,lastLoginAt:k});return O&&Array.isArray(O)&&(E.providerData=O.map(w=>({...w}))),f&&(E._redirectEventId=f),E}static async _fromIdTokenResponse(e,n,r=!1){const i=new Vr;i.updateFromServerResponse(n);const o=new ft({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Jo(o),o}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];V(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?Km(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),c=new Vr;c.updateFromIdToken(r);const f=new ft({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Du(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(f,h),f}}/**
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
 */const Id=new Map;function $t(t){Jt(t instanceof Function,"Expected a class definition");let e=Id.get(t);return e?(Jt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Id.set(t,e),e)}/**
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
 */class Gm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Gm.type="NONE";const Td=Gm;/**
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
 */function vo(t,e,n){return`firebase:${t}:${e}:${n}`}class $r{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=vo(this.userKey,i.apiKey,o),this.fullPersistenceKey=vo("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Xo(this.auth,{idToken:e}).catch(()=>{});return n?ft._fromGetAccountInfoResponse(this.auth,n,e):null}return ft._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new $r($t(Td),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let o=i[0]||$t(Td);const a=vo(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const k=await h._get(a);if(k){let I;if(typeof k=="string"){const S=await Xo(e,{idToken:k}).catch(()=>{});if(!S)break;I=await ft._fromGetAccountInfoResponse(e,S,k)}else I=ft._fromJSON(e,k);h!==o&&(c=I),o=h;break}}catch{}const f=i.filter(h=>h._shouldAllowMigration);return!o._shouldAllowMigration||!f.length?new $r(o,e,r):(o=f[0],c&&await o._set(a,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==o)try{await h._remove(a)}catch{}})),new $r(o,e,r))}}/**
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
 */function kd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Qm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Zm(e))return"Blackberry";if(ey(e))return"Webos";if(Xm(e))return"Safari";if((e.includes("chrome/")||Jm(e))&&!e.includes("edge/"))return"Chrome";if(Ym(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function qm(t=Ue()){return/firefox\//i.test(t)}function Xm(t=Ue()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Jm(t=Ue()){return/crios\//i.test(t)}function Qm(t=Ue()){return/iemobile/i.test(t)}function Ym(t=Ue()){return/android/i.test(t)}function Zm(t=Ue()){return/blackberry/i.test(t)}function ey(t=Ue()){return/webos/i.test(t)}function Vc(t=Ue()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Z_(t=Ue()){var e;return Vc(t)&&!!((e=window.navigator)!=null&&e.standalone)}function eS(){return w1()&&document.documentMode===10}function ty(t=Ue()){return Vc(t)||Ym(t)||ey(t)||Zm(t)||/windows phone/i.test(t)||Qm(t)}/**
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
 */function ny(t,e=[]){let n;switch(t){case"Browser":n=kd(Ue());break;case"Worker":n=`${kd(Ue())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ri}/${r}`}/**
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
 */class tS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((a,c)=>{try{const f=e(o);a(f)}catch(f){c(f)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function nS(t,e={}){return ii(t,"GET","/v2/passwordPolicy",Fc(t,e))}/**
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
 */const rS=6;class iS{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??rS,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
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
 */class sS{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cd(this),this.idTokenSubscription=new Cd(this),this.beforeStateQueue=new tS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$m,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=$t(n)),this._initializationPromise=this.queue(async()=>{var r,i,o;if(!this._deleted&&(this.persistenceManager=await $r.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)==null?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Xo(this,{idToken:e}),r=await ft._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var o;if(Tt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(o=this.redirectUser)==null?void 0:o._redirectEventId,c=r==null?void 0:r._redirectEventId,f=await this.tryRedirectSignIn(e);(!a||a===c)&&(f!=null&&f.user)&&(r=f.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Jo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=j_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Tt(this.app))return Promise.reject(Zn(this));const n=e?gr(e):null;return n&&V(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&V(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Tt(this.app)?Promise.reject(Zn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Tt(this.app)?Promise.reject(Zn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence($t(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await nS(this),n=new iS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new pr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Y_(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&$t(e)||this._popupRedirectResolver;V(n,this,"argument-error"),this.redirectPersistenceManager=await $r.create(this,[$t(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(V(c,this,"internal-error"),c.then(()=>{a||o(this.currentUser)}),typeof n=="function"){const f=e.addObserver(n,r,i);return()=>{a=!0,f()}}else{const f=e.addObserver(n);return()=>{a=!0,f()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ny(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Tt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&U_(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function $c(t){return gr(t)}class Cd{constructor(e){this.auth=e,this.observer=null,this.addObserver=k1(n=>this.observer=n)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let zc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function oS(t){zc=t}function aS(t){return zc.loadJS(t)}function lS(){return zc.gapiScript}function uS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function cS(t,e){const n=ni(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(ar(o,e??{}))return i;Xt(i,"already-initialized")}return n.initialize({options:e})}function fS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map($t);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function hS(t,e,n){const r=$c(t);V(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=ry(e),{host:a,port:c}=dS(e),f=c===null?"":`:${c}`,h={url:`${o}//${a}${f}/`},k=Object.freeze({host:a,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){V(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),V(ar(h,r.config.emulator)&&ar(k,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=k,r.settings.appVerificationDisabledForTesting=!0,Es(a)?(Om(`${o}//${a}${f}`),Dm("Auth",!0)):pS()}function ry(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function dS(t){const e=ry(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Ad(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:Ad(a)}}}function Ad(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function pS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class iy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Vt("not implemented")}_getIdTokenResponse(e){return Vt("not implemented")}_linkToIdToken(e,n){return Vt("not implemented")}_getReauthenticationResolver(e){return Vt("not implemented")}}/**
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
 */async function zr(t,e){return B_(t,"POST","/v1/accounts:signInWithIdp",Fc(t,e))}/**
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
 */const gS="http://localhost";class lr extends iy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new lr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Xt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...o}=n;if(!r||!i)return null;const a=new lr(r,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return zr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,zr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,zr(e,n)}buildRequest(){const e={requestUri:gS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Is(n)}return e}}/**
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
 */class sy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ks extends sy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class dn extends ks{constructor(){super("facebook.com")}static credential(e){return lr._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dn.credential(e.oauthAccessToken)}catch{return null}}}dn.FACEBOOK_SIGN_IN_METHOD="facebook.com";dn.PROVIDER_ID="facebook.com";/**
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
 */class pn extends ks{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return lr._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return pn.credential(n,r)}catch{return null}}}pn.GOOGLE_SIGN_IN_METHOD="google.com";pn.PROVIDER_ID="google.com";/**
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
 */class gn extends ks{constructor(){super("github.com")}static credential(e){return lr._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gn.credential(e.oauthAccessToken)}catch{return null}}}gn.GITHUB_SIGN_IN_METHOD="github.com";gn.PROVIDER_ID="github.com";/**
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
 */class mn extends ks{constructor(){super("twitter.com")}static credential(e,n){return lr._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return mn.credential(n,r)}catch{return null}}}mn.TWITTER_SIGN_IN_METHOD="twitter.com";mn.PROVIDER_ID="twitter.com";/**
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
 */class Qr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await ft._fromIdTokenResponse(e,r,i),a=Pd(r);return new Qr({user:o,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Pd(r);return new Qr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Pd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Qo extends Ot{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Qo.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Qo(e,n,r,i)}}function oy(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Qo._fromErrorAndOperation(t,o,e,r):o})}async function mS(t,e,n=!1){const r=await ds(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Qr._forOperation(t,"link",r)}/**
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
 */async function yS(t,e,n=!1){const{auth:r}=t;if(Tt(r.app))return Promise.reject(Zn(r));const i="reauthenticate";try{const o=await ds(t,oy(r,i,e,t),n);V(o.idToken,r,"internal-error");const a=jc(o.idToken);V(a,r,"internal-error");const{sub:c}=a;return V(t.uid===c,r,"user-mismatch"),Qr._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Xt(r,"user-mismatch"),o}}/**
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
 */async function vS(t,e,n=!1){if(Tt(t.app))return Promise.reject(Zn(t));const r="signIn",i=await oy(t,r,e),o=await Qr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}function wS(t,e,n,r){return gr(t).onIdTokenChanged(e,n,r)}function _S(t,e,n){return gr(t).beforeAuthStateChanged(e,n)}const Yo="__sak";/**
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
 */class ay{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Yo,"1"),this.storage.removeItem(Yo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const SS=1e3,ES=10;class ly extends ay{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ty(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,c,f)=>{this.notifyListeners(a,f)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);eS()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,ES):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},SS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ly.type="LOCAL";const IS=ly;/**
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
 */class uy extends ay{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}uy.type="SESSION";const cy=uy;/**
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
 */function TS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class wa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new wa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(a).map(async h=>h(n.origin,o)),f=await TS(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:f})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wa.receivers=[];/**
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
 */function Bc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class kS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((c,f)=>{const h=Bc("",20);i.port1.start();const k=setTimeout(()=>{f(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(I){const S=I;if(S.data.eventId===h)switch(S.data.status){case"ack":clearTimeout(k),o=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),c(S.data.response);break;default:clearTimeout(k),clearTimeout(o),f(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Nt(){return window}function CS(t){Nt().location.href=t}/**
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
 */function fy(){return typeof Nt().WorkerGlobalScope<"u"&&typeof Nt().importScripts=="function"}async function AS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function PS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function NS(){return fy()?self:null}/**
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
 */const hy="firebaseLocalStorageDb",RS=1,Zo="firebaseLocalStorage",dy="fbase_key";class Cs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function _a(t,e){return t.transaction([Zo],e?"readwrite":"readonly").objectStore(Zo)}function OS(){const t=indexedDB.deleteDatabase(hy);return new Cs(t).toPromise()}function xu(){const t=indexedDB.open(hy,RS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Zo,{keyPath:dy})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Zo)?e(r):(r.close(),await OS(),e(await xu()))})})}async function Nd(t,e,n){const r=_a(t,!0).put({[dy]:e,value:n});return new Cs(r).toPromise()}async function DS(t,e){const n=_a(t,!1).get(e),r=await new Cs(n).toPromise();return r===void 0?null:r.value}function Rd(t,e){const n=_a(t,!0).delete(e);return new Cs(n).toPromise()}const xS=800,LS=3;class py{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>LS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wa._getInstance(NS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await AS(),!this.activeServiceWorker)return;this.sender=new kS(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||PS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xu();return await Nd(e,Yo,"1"),await Rd(e,Yo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Nd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>DS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Rd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=_a(i,!1).getAll();return new Cs(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}py.type="LOCAL";const MS=py;new Ts(3e4,6e4);/**
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
 */function US(t,e){return e?$t(e):(V(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Hc extends iy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return zr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return zr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function bS(t){return vS(t.auth,new Hc(t),t.bypassAuthState)}function FS(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),yS(n,new Hc(t),t.bypassAuthState)}async function jS(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),mS(n,new Hc(t),t.bypassAuthState)}/**
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
 */class gy{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:a,type:c}=e;if(a){this.reject(a);return}const f={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(f))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bS;case"linkViaPopup":case"linkViaRedirect":return jS;case"reauthViaPopup":case"reauthViaRedirect":return FS;default:Xt(this.auth,"internal-error")}}resolve(e){Jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const VS=new Ts(2e3,1e4);class xr extends gy{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,xr.currentPopupAction&&xr.currentPopupAction.cancel(),xr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return V(e,this.auth,"internal-error"),e}async onExecution(){Jt(this.filter.length===1,"Popup operations only handle one event");const e=Bc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Pt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Pt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Pt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,VS.get())};e()}}xr.currentPopupAction=null;/**
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
 */const $S="pendingRedirect",wo=new Map;class zS extends gy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=wo.get(this.auth._key());if(!e){try{const r=await BS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}wo.set(this.auth._key(),e)}return this.bypassAuthState||wo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function BS(t,e){const n=KS(e),r=WS(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function HS(t,e){wo.set(t._key(),e)}function WS(t){return $t(t._redirectPersistence)}function KS(t){return vo($S,t.config.apiKey,t.name)}async function GS(t,e,n=!1){if(Tt(t.app))return Promise.reject(Zn(t));const r=$c(t),i=US(r,e),a=await new zS(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const qS=10*60*1e3;class XS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!JS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!my(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Pt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Od(e))}saveEventToCache(e){this.cachedEventUids.add(Od(e)),this.lastProcessedEventTime=Date.now()}}function Od(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function my({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function JS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return my(t);default:return!1}}/**
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
 */async function QS(t,e={}){return ii(t,"GET","/v1/projects",e)}/**
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
 */const YS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ZS=/^https?/;async function eE(t){if(t.config.emulator)return;const{authorizedDomains:e}=await QS(t);for(const n of e)try{if(tE(n))return}catch{}Xt(t,"unauthorized-domain")}function tE(t){const e=Ou(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!ZS.test(n))return!1;if(YS.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const nE=new Ts(3e4,6e4);function Dd(){const t=Nt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function rE(t){return new Promise((e,n)=>{var i,o,a;function r(){Dd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Dd(),n(Pt(t,"network-request-failed"))},timeout:nE.get()})}if((o=(i=Nt().gapi)==null?void 0:i.iframes)!=null&&o.Iframe)e(gapi.iframes.getContext());else if((a=Nt().gapi)!=null&&a.load)r();else{const c=uS("iframefcb");return Nt()[c]=()=>{gapi.load?r():n(Pt(t,"network-request-failed"))},aS(`${lS()}?onload=${c}`).catch(f=>n(f))}}).catch(e=>{throw _o=null,e})}let _o=null;function iE(t){return _o=_o||rE(t),_o}/**
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
 */const sE=new Ts(5e3,15e3),oE="__/auth/iframe",aE="emulator/auth/iframe",lE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},uE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cE(t){const e=t.config;V(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?bc(e,aE):`https://${t.config.authDomain}/${oE}`,r={apiKey:e.apiKey,appName:t.name,v:ri},i=uE.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Is(r).slice(1)}`}async function fE(t){const e=await iE(t),n=Nt().gapi;return V(n,t,"internal-error"),e.open({where:document.body,url:cE(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lE,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const a=Pt(t,"network-request-failed"),c=Nt().setTimeout(()=>{o(a)},sE.get());function f(){Nt().clearTimeout(c),i(r)}r.ping(f).then(f,()=>{o(a)})}))}/**
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
 */const hE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dE=500,pE=600,gE="_blank",mE="http://localhost";class xd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yE(t,e,n,r=dE,i=pE){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const f={...hE,width:r.toString(),height:i.toString(),top:o,left:a},h=Ue().toLowerCase();n&&(c=Jm(h)?gE:n),qm(h)&&(e=e||mE,f.scrollbars="yes");const k=Object.entries(f).reduce((S,[R,O])=>`${S}${R}=${O},`,"");if(Z_(h)&&c!=="_self")return vE(e||"",c),new xd(null);const I=window.open(e||"",c,k);V(I,t,"popup-blocked");try{I.focus()}catch{}return new xd(I)}function vE(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const wE="__/auth/handler",_E="emulator/auth/handler",SE=encodeURIComponent("fac");async function Ld(t,e,n,r,i,o){V(t.config.authDomain,t,"auth-domain-config-required"),V(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ri,eventId:i};if(e instanceof sy){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",T1(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[k,I]of Object.entries({}))a[k]=I}if(e instanceof ks){const k=e.getScopes().filter(I=>I!=="");k.length>0&&(a.scopes=k.join(","))}t.tenantId&&(a.tid=t.tenantId);const c=a;for(const k of Object.keys(c))c[k]===void 0&&delete c[k];const f=await t._getAppCheckToken(),h=f?`#${SE}=${encodeURIComponent(f)}`:"";return`${EE(t)}?${Is(c).slice(1)}${h}`}function EE({config:t}){return t.emulator?bc(t,_E):`https://${t.authDomain}/${wE}`}/**
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
 */const Cl="webStorageSupport";class IE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cy,this._completeRedirectFn=GS,this._overrideRedirectResult=HS}async _openPopup(e,n,r,i){var a;Jt((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const o=await Ld(e,n,r,Ou(),i);return yE(e,o,Bc())}async _openRedirect(e,n,r,i){await this._originValidation(e);const o=await Ld(e,n,r,Ou(),i);return CS(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Jt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await fE(e),r=new XS(e);return n.register("authEvent",i=>(V(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Cl,{type:Cl},i=>{var a;const o=(a=i==null?void 0:i[0])==null?void 0:a[Cl];o!==void 0&&n(!!o),Xt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=eE(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ty()||Xm()||Vc()}}const TE=IE;var Md="@firebase/auth",Ud="1.11.0";/**
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
 */class kE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function CE(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function AE(t){Rt(new mt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;V(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const f={apiKey:a,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ny(t)},h=new sS(r,i,o,f);return fS(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Rt(new mt("auth-internal",e=>{const n=$c(e.getProvider("auth").getImmediate());return(r=>new kE(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nt(Md,Ud,CE(t)),nt(Md,Ud,"esm2020")}/**
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
 */const PE=5*60,NE=Rm("authIdTokenMaxAge")||PE;let bd=null;const RE=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>NE)return;const i=n==null?void 0:n.token;bd!==i&&(bd=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function OE(t=Mc()){const e=ni(t,"auth");if(e.isInitialized())return e.getImmediate();const n=cS(t,{popupRedirectResolver:TE,persistence:[MS,IS,cy]}),r=Rm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=RE(o.toString());_S(n,a,()=>a(n.currentUser)),wS(n,c=>a(c))}}const i=Pm("auth");return i&&hS(n,`http://${i}`),n}function DE(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}oS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=Pt("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",DE().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});AE("Browser");var xE="firebase",LE="12.4.0";/**
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
 */nt(xE,LE,"app");var Fd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wc;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(g,p){function m(){}m.prototype=p.prototype,g.F=p.prototype,g.prototype=new m,g.prototype.constructor=g,g.D=function(v,_,C){for(var y=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)y[_e-2]=arguments[_e];return p.prototype[_].apply(v,y)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(g,p,m){m||(m=0);const v=Array(16);if(typeof p=="string")for(var _=0;_<16;++_)v[_]=p.charCodeAt(m++)|p.charCodeAt(m++)<<8|p.charCodeAt(m++)<<16|p.charCodeAt(m++)<<24;else for(_=0;_<16;++_)v[_]=p[m++]|p[m++]<<8|p[m++]<<16|p[m++]<<24;p=g.g[0],m=g.g[1],_=g.g[2];let C=g.g[3],y;y=p+(C^m&(_^C))+v[0]+3614090360&4294967295,p=m+(y<<7&4294967295|y>>>25),y=C+(_^p&(m^_))+v[1]+3905402710&4294967295,C=p+(y<<12&4294967295|y>>>20),y=_+(m^C&(p^m))+v[2]+606105819&4294967295,_=C+(y<<17&4294967295|y>>>15),y=m+(p^_&(C^p))+v[3]+3250441966&4294967295,m=_+(y<<22&4294967295|y>>>10),y=p+(C^m&(_^C))+v[4]+4118548399&4294967295,p=m+(y<<7&4294967295|y>>>25),y=C+(_^p&(m^_))+v[5]+1200080426&4294967295,C=p+(y<<12&4294967295|y>>>20),y=_+(m^C&(p^m))+v[6]+2821735955&4294967295,_=C+(y<<17&4294967295|y>>>15),y=m+(p^_&(C^p))+v[7]+4249261313&4294967295,m=_+(y<<22&4294967295|y>>>10),y=p+(C^m&(_^C))+v[8]+1770035416&4294967295,p=m+(y<<7&4294967295|y>>>25),y=C+(_^p&(m^_))+v[9]+2336552879&4294967295,C=p+(y<<12&4294967295|y>>>20),y=_+(m^C&(p^m))+v[10]+4294925233&4294967295,_=C+(y<<17&4294967295|y>>>15),y=m+(p^_&(C^p))+v[11]+2304563134&4294967295,m=_+(y<<22&4294967295|y>>>10),y=p+(C^m&(_^C))+v[12]+1804603682&4294967295,p=m+(y<<7&4294967295|y>>>25),y=C+(_^p&(m^_))+v[13]+4254626195&4294967295,C=p+(y<<12&4294967295|y>>>20),y=_+(m^C&(p^m))+v[14]+2792965006&4294967295,_=C+(y<<17&4294967295|y>>>15),y=m+(p^_&(C^p))+v[15]+1236535329&4294967295,m=_+(y<<22&4294967295|y>>>10),y=p+(_^C&(m^_))+v[1]+4129170786&4294967295,p=m+(y<<5&4294967295|y>>>27),y=C+(m^_&(p^m))+v[6]+3225465664&4294967295,C=p+(y<<9&4294967295|y>>>23),y=_+(p^m&(C^p))+v[11]+643717713&4294967295,_=C+(y<<14&4294967295|y>>>18),y=m+(C^p&(_^C))+v[0]+3921069994&4294967295,m=_+(y<<20&4294967295|y>>>12),y=p+(_^C&(m^_))+v[5]+3593408605&4294967295,p=m+(y<<5&4294967295|y>>>27),y=C+(m^_&(p^m))+v[10]+38016083&4294967295,C=p+(y<<9&4294967295|y>>>23),y=_+(p^m&(C^p))+v[15]+3634488961&4294967295,_=C+(y<<14&4294967295|y>>>18),y=m+(C^p&(_^C))+v[4]+3889429448&4294967295,m=_+(y<<20&4294967295|y>>>12),y=p+(_^C&(m^_))+v[9]+568446438&4294967295,p=m+(y<<5&4294967295|y>>>27),y=C+(m^_&(p^m))+v[14]+3275163606&4294967295,C=p+(y<<9&4294967295|y>>>23),y=_+(p^m&(C^p))+v[3]+4107603335&4294967295,_=C+(y<<14&4294967295|y>>>18),y=m+(C^p&(_^C))+v[8]+1163531501&4294967295,m=_+(y<<20&4294967295|y>>>12),y=p+(_^C&(m^_))+v[13]+2850285829&4294967295,p=m+(y<<5&4294967295|y>>>27),y=C+(m^_&(p^m))+v[2]+4243563512&4294967295,C=p+(y<<9&4294967295|y>>>23),y=_+(p^m&(C^p))+v[7]+1735328473&4294967295,_=C+(y<<14&4294967295|y>>>18),y=m+(C^p&(_^C))+v[12]+2368359562&4294967295,m=_+(y<<20&4294967295|y>>>12),y=p+(m^_^C)+v[5]+4294588738&4294967295,p=m+(y<<4&4294967295|y>>>28),y=C+(p^m^_)+v[8]+2272392833&4294967295,C=p+(y<<11&4294967295|y>>>21),y=_+(C^p^m)+v[11]+1839030562&4294967295,_=C+(y<<16&4294967295|y>>>16),y=m+(_^C^p)+v[14]+4259657740&4294967295,m=_+(y<<23&4294967295|y>>>9),y=p+(m^_^C)+v[1]+2763975236&4294967295,p=m+(y<<4&4294967295|y>>>28),y=C+(p^m^_)+v[4]+1272893353&4294967295,C=p+(y<<11&4294967295|y>>>21),y=_+(C^p^m)+v[7]+4139469664&4294967295,_=C+(y<<16&4294967295|y>>>16),y=m+(_^C^p)+v[10]+3200236656&4294967295,m=_+(y<<23&4294967295|y>>>9),y=p+(m^_^C)+v[13]+681279174&4294967295,p=m+(y<<4&4294967295|y>>>28),y=C+(p^m^_)+v[0]+3936430074&4294967295,C=p+(y<<11&4294967295|y>>>21),y=_+(C^p^m)+v[3]+3572445317&4294967295,_=C+(y<<16&4294967295|y>>>16),y=m+(_^C^p)+v[6]+76029189&4294967295,m=_+(y<<23&4294967295|y>>>9),y=p+(m^_^C)+v[9]+3654602809&4294967295,p=m+(y<<4&4294967295|y>>>28),y=C+(p^m^_)+v[12]+3873151461&4294967295,C=p+(y<<11&4294967295|y>>>21),y=_+(C^p^m)+v[15]+530742520&4294967295,_=C+(y<<16&4294967295|y>>>16),y=m+(_^C^p)+v[2]+3299628645&4294967295,m=_+(y<<23&4294967295|y>>>9),y=p+(_^(m|~C))+v[0]+4096336452&4294967295,p=m+(y<<6&4294967295|y>>>26),y=C+(m^(p|~_))+v[7]+1126891415&4294967295,C=p+(y<<10&4294967295|y>>>22),y=_+(p^(C|~m))+v[14]+2878612391&4294967295,_=C+(y<<15&4294967295|y>>>17),y=m+(C^(_|~p))+v[5]+4237533241&4294967295,m=_+(y<<21&4294967295|y>>>11),y=p+(_^(m|~C))+v[12]+1700485571&4294967295,p=m+(y<<6&4294967295|y>>>26),y=C+(m^(p|~_))+v[3]+2399980690&4294967295,C=p+(y<<10&4294967295|y>>>22),y=_+(p^(C|~m))+v[10]+4293915773&4294967295,_=C+(y<<15&4294967295|y>>>17),y=m+(C^(_|~p))+v[1]+2240044497&4294967295,m=_+(y<<21&4294967295|y>>>11),y=p+(_^(m|~C))+v[8]+1873313359&4294967295,p=m+(y<<6&4294967295|y>>>26),y=C+(m^(p|~_))+v[15]+4264355552&4294967295,C=p+(y<<10&4294967295|y>>>22),y=_+(p^(C|~m))+v[6]+2734768916&4294967295,_=C+(y<<15&4294967295|y>>>17),y=m+(C^(_|~p))+v[13]+1309151649&4294967295,m=_+(y<<21&4294967295|y>>>11),y=p+(_^(m|~C))+v[4]+4149444226&4294967295,p=m+(y<<6&4294967295|y>>>26),y=C+(m^(p|~_))+v[11]+3174756917&4294967295,C=p+(y<<10&4294967295|y>>>22),y=_+(p^(C|~m))+v[2]+718787259&4294967295,_=C+(y<<15&4294967295|y>>>17),y=m+(C^(_|~p))+v[9]+3951481745&4294967295,g.g[0]=g.g[0]+p&4294967295,g.g[1]=g.g[1]+(_+(y<<21&4294967295|y>>>11))&4294967295,g.g[2]=g.g[2]+_&4294967295,g.g[3]=g.g[3]+C&4294967295}r.prototype.v=function(g,p){p===void 0&&(p=g.length);const m=p-this.blockSize,v=this.C;let _=this.h,C=0;for(;C<p;){if(_==0)for(;C<=m;)i(this,g,C),C+=this.blockSize;if(typeof g=="string"){for(;C<p;)if(v[_++]=g.charCodeAt(C++),_==this.blockSize){i(this,v),_=0;break}}else for(;C<p;)if(v[_++]=g[C++],_==this.blockSize){i(this,v),_=0;break}}this.h=_,this.o+=p},r.prototype.A=function(){var g=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);g[0]=128;for(var p=1;p<g.length-8;++p)g[p]=0;p=this.o*8;for(var m=g.length-8;m<g.length;++m)g[m]=p&255,p/=256;for(this.v(g),g=Array(16),p=0,m=0;m<4;++m)for(let v=0;v<32;v+=8)g[p++]=this.g[m]>>>v&255;return g};function o(g,p){var m=c;return Object.prototype.hasOwnProperty.call(m,g)?m[g]:m[g]=p(g)}function a(g,p){this.h=p;const m=[];let v=!0;for(let _=g.length-1;_>=0;_--){const C=g[_]|0;v&&C==p||(m[_]=C,v=!1)}this.g=m}var c={};function f(g){return-128<=g&&g<128?o(g,function(p){return new a([p|0],p<0?-1:0)}):new a([g|0],g<0?-1:0)}function h(g){if(isNaN(g)||!isFinite(g))return I;if(g<0)return j(h(-g));const p=[];let m=1;for(let v=0;g>=m;v++)p[v]=g/m|0,m*=4294967296;return new a(p,0)}function k(g,p){if(g.length==0)throw Error("number format error: empty string");if(p=p||10,p<2||36<p)throw Error("radix out of range: "+p);if(g.charAt(0)=="-")return j(k(g.substring(1),p));if(g.indexOf("-")>=0)throw Error('number format error: interior "-" character');const m=h(Math.pow(p,8));let v=I;for(let C=0;C<g.length;C+=8){var _=Math.min(8,g.length-C);const y=parseInt(g.substring(C,C+_),p);_<8?(_=h(Math.pow(p,_)),v=v.j(_).add(h(y))):(v=v.j(m),v=v.add(h(y)))}return v}var I=f(0),S=f(1),R=f(16777216);t=a.prototype,t.m=function(){if(x(this))return-j(this).m();let g=0,p=1;for(let m=0;m<this.g.length;m++){const v=this.i(m);g+=(v>=0?v:4294967296+v)*p,p*=4294967296}return g},t.toString=function(g){if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(O(this))return"0";if(x(this))return"-"+j(this).toString(g);const p=h(Math.pow(g,6));var m=this;let v="";for(;;){const _=N(m,p).g;m=E(m,_.j(p));let C=((m.g.length>0?m.g[0]:m.h)>>>0).toString(g);if(m=_,O(m))return C+v;for(;C.length<6;)C="0"+C;v=C+v}},t.i=function(g){return g<0?0:g<this.g.length?this.g[g]:this.h};function O(g){if(g.h!=0)return!1;for(let p=0;p<g.g.length;p++)if(g.g[p]!=0)return!1;return!0}function x(g){return g.h==-1}t.l=function(g){return g=E(this,g),x(g)?-1:O(g)?0:1};function j(g){const p=g.g.length,m=[];for(let v=0;v<p;v++)m[v]=~g.g[v];return new a(m,~g.h).add(S)}t.abs=function(){return x(this)?j(this):this},t.add=function(g){const p=Math.max(this.g.length,g.g.length),m=[];let v=0;for(let _=0;_<=p;_++){let C=v+(this.i(_)&65535)+(g.i(_)&65535),y=(C>>>16)+(this.i(_)>>>16)+(g.i(_)>>>16);v=y>>>16,C&=65535,y&=65535,m[_]=y<<16|C}return new a(m,m[m.length-1]&-2147483648?-1:0)};function E(g,p){return g.add(j(p))}t.j=function(g){if(O(this)||O(g))return I;if(x(this))return x(g)?j(this).j(j(g)):j(j(this).j(g));if(x(g))return j(this.j(j(g)));if(this.l(R)<0&&g.l(R)<0)return h(this.m()*g.m());const p=this.g.length+g.g.length,m=[];for(var v=0;v<2*p;v++)m[v]=0;for(v=0;v<this.g.length;v++)for(let _=0;_<g.g.length;_++){const C=this.i(v)>>>16,y=this.i(v)&65535,_e=g.i(_)>>>16,Dt=g.i(_)&65535;m[2*v+2*_]+=y*Dt,w(m,2*v+2*_),m[2*v+2*_+1]+=C*Dt,w(m,2*v+2*_+1),m[2*v+2*_+1]+=y*_e,w(m,2*v+2*_+1),m[2*v+2*_+2]+=C*_e,w(m,2*v+2*_+2)}for(g=0;g<p;g++)m[g]=m[2*g+1]<<16|m[2*g];for(g=p;g<2*p;g++)m[g]=0;return new a(m,0)};function w(g,p){for(;(g[p]&65535)!=g[p];)g[p+1]+=g[p]>>>16,g[p]&=65535,p++}function T(g,p){this.g=g,this.h=p}function N(g,p){if(O(p))throw Error("division by zero");if(O(g))return new T(I,I);if(x(g))return p=N(j(g),p),new T(j(p.g),j(p.h));if(x(p))return p=N(g,j(p)),new T(j(p.g),p.h);if(g.g.length>30){if(x(g)||x(p))throw Error("slowDivide_ only works with positive integers.");for(var m=S,v=p;v.l(g)<=0;)m=M(m),v=M(v);var _=U(m,1),C=U(v,1);for(v=U(v,2),m=U(m,2);!O(v);){var y=C.add(v);y.l(g)<=0&&(_=_.add(m),C=y),v=U(v,1),m=U(m,1)}return p=E(g,_.j(p)),new T(_,p)}for(_=I;g.l(p)>=0;){for(m=Math.max(1,Math.floor(g.m()/p.m())),v=Math.ceil(Math.log(m)/Math.LN2),v=v<=48?1:Math.pow(2,v-48),C=h(m),y=C.j(p);x(y)||y.l(g)>0;)m-=v,C=h(m),y=C.j(p);O(C)&&(C=S),_=_.add(C),g=E(g,y)}return new T(_,g)}t.B=function(g){return N(this,g).h},t.and=function(g){const p=Math.max(this.g.length,g.g.length),m=[];for(let v=0;v<p;v++)m[v]=this.i(v)&g.i(v);return new a(m,this.h&g.h)},t.or=function(g){const p=Math.max(this.g.length,g.g.length),m=[];for(let v=0;v<p;v++)m[v]=this.i(v)|g.i(v);return new a(m,this.h|g.h)},t.xor=function(g){const p=Math.max(this.g.length,g.g.length),m=[];for(let v=0;v<p;v++)m[v]=this.i(v)^g.i(v);return new a(m,this.h^g.h)};function M(g){const p=g.g.length+1,m=[];for(let v=0;v<p;v++)m[v]=g.i(v)<<1|g.i(v-1)>>>31;return new a(m,g.h)}function U(g,p){const m=p>>5;p%=32;const v=g.g.length-m,_=[];for(let C=0;C<v;C++)_[C]=p>0?g.i(C+m)>>>p|g.i(C+m+1)<<32-p:g.i(C+m);return new a(_,g.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=k,Wc=a}).apply(typeof Fd<"u"?Fd:typeof self<"u"?self:typeof window<"u"?window:{});var no=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=Object.defineProperty;function n(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof no=="object"&&no];for(var l=0;l<s.length;++l){var u=s[l];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var r=n(this);function i(s,l){if(l)e:{var u=r;s=s.split(".");for(var d=0;d<s.length-1;d++){var A=s[d];if(!(A in u))break e;u=u[A]}s=s[s.length-1],d=u[s],l=l(d),l!=d&&l!=null&&e(u,s,{configurable:!0,writable:!0,value:l})}}i("Symbol.dispose",function(s){return s||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(s){return s||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(s){return s||function(l){var u=[],d;for(d in l)Object.prototype.hasOwnProperty.call(l,d)&&u.push([d,l[d]]);return u}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(s){var l=typeof s;return l=="object"&&s!=null||l=="function"}function f(s,l,u){return s.call.apply(s.bind,arguments)}function h(s,l,u){return h=f,h.apply(null,arguments)}function k(s,l){var u=Array.prototype.slice.call(arguments,1);return function(){var d=u.slice();return d.push.apply(d,arguments),s.apply(this,d)}}function I(s,l){function u(){}u.prototype=l.prototype,s.Z=l.prototype,s.prototype=new u,s.prototype.constructor=s,s.Ob=function(d,A,P){for(var L=Array(arguments.length-2),B=2;B<arguments.length;B++)L[B-2]=arguments[B];return l.prototype[A].apply(d,L)}}var S=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?s=>s&&AsyncContext.Snapshot.wrap(s):s=>s;function R(s){const l=s.length;if(l>0){const u=Array(l);for(let d=0;d<l;d++)u[d]=s[d];return u}return[]}function O(s,l){for(let d=1;d<arguments.length;d++){const A=arguments[d];var u=typeof A;if(u=u!="object"?u:A?Array.isArray(A)?"array":u:"null",u=="array"||u=="object"&&typeof A.length=="number"){u=s.length||0;const P=A.length||0;s.length=u+P;for(let L=0;L<P;L++)s[u+L]=A[L]}else s.push(A)}}class x{constructor(l,u){this.i=l,this.j=u,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function j(s){a.setTimeout(()=>{throw s},0)}function E(){var s=g;let l=null;return s.g&&(l=s.g,s.g=s.g.next,s.g||(s.h=null),l.next=null),l}class w{constructor(){this.h=this.g=null}add(l,u){const d=T.get();d.set(l,u),this.h?this.h.next=d:this.g=d,this.h=d}}var T=new x(()=>new N,s=>s.reset());class N{constructor(){this.next=this.g=this.h=null}set(l,u){this.h=l,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let M,U=!1,g=new w,p=()=>{const s=Promise.resolve(void 0);M=()=>{s.then(m)}};function m(){for(var s;s=E();){try{s.h.call(s.g)}catch(u){j(u)}var l=T;l.j(s),l.h<100&&(l.h++,s.next=l.g,l.g=s)}U=!1}function v(){this.u=this.u,this.C=this.C}v.prototype.u=!1,v.prototype.dispose=function(){this.u||(this.u=!0,this.N())},v.prototype[Symbol.dispose]=function(){this.dispose()},v.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function _(s,l){this.type=s,this.g=this.target=l,this.defaultPrevented=!1}_.prototype.h=function(){this.defaultPrevented=!0};var C=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var s=!1,l=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const u=()=>{};a.addEventListener("test",u,l),a.removeEventListener("test",u,l)}catch{}return s}();function y(s){return/^[\s\xa0]*$/.test(s)}function _e(s,l){_.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s&&this.init(s,l)}I(_e,_),_e.prototype.init=function(s,l){const u=this.type=s.type,d=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;this.target=s.target||s.srcElement,this.g=l,l=s.relatedTarget,l||(u=="mouseover"?l=s.fromElement:u=="mouseout"&&(l=s.toElement)),this.relatedTarget=l,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=s.pointerType,this.state=s.state,this.i=s,s.defaultPrevented&&_e.Z.h.call(this)},_e.prototype.h=function(){_e.Z.h.call(this);const s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Dt="closure_listenable_"+(Math.random()*1e6|0),si=0;function oi(s,l,u,d,A){this.listener=s,this.proxy=null,this.src=l,this.type=u,this.capture=!!d,this.ha=A,this.key=++si,this.da=this.fa=!1}function b(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function $(s,l,u){for(const d in s)l.call(u,s[d],d,s)}function z(s,l){for(const u in s)l.call(void 0,s[u],u,s)}function ne(s){const l={};for(const u in s)l[u]=s[u];return l}const ue="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Un(s,l){let u,d;for(let A=1;A<arguments.length;A++){d=arguments[A];for(u in d)s[u]=d[u];for(let P=0;P<ue.length;P++)u=ue[P],Object.prototype.hasOwnProperty.call(d,u)&&(s[u]=d[u])}}function Je(s){this.src=s,this.g={},this.h=0}Je.prototype.add=function(s,l,u,d,A){const P=s.toString();s=this.g[P],s||(s=this.g[P]=[],this.h++);const L=st(s,l,d,A);return L>-1?(l=s[L],u||(l.fa=!1)):(l=new oi(l,this.src,P,!!d,A),l.fa=u,s.push(l)),l};function bn(s,l){const u=l.type;if(u in s.g){var d=s.g[u],A=Array.prototype.indexOf.call(d,l,void 0),P;(P=A>=0)&&Array.prototype.splice.call(d,A,1),P&&(b(l),s.g[u].length==0&&(delete s.g[u],s.h--))}}function st(s,l,u,d){for(let A=0;A<s.length;++A){const P=s[A];if(!P.da&&P.listener==l&&P.capture==!!u&&P.ha==d)return A}return-1}var Zt="closure_lm_"+(Math.random()*1e6|0),Ta={};function sf(s,l,u,d,A){if(Array.isArray(l)){for(let P=0;P<l.length;P++)sf(s,l[P],u,d,A);return null}return u=lf(u),s&&s[Dt]?s.J(l,u,c(d)?!!d.capture:!1,A):Zy(s,l,u,!1,d,A)}function Zy(s,l,u,d,A,P){if(!l)throw Error("Invalid event type");const L=c(A)?!!A.capture:!!A;let B=Ca(s);if(B||(s[Zt]=B=new Je(s)),u=B.add(l,u,d,L,P),u.proxy)return u;if(d=ev(),u.proxy=d,d.src=s,d.listener=u,s.addEventListener)C||(A=L),A===void 0&&(A=!1),s.addEventListener(l.toString(),d,A);else if(s.attachEvent)s.attachEvent(af(l.toString()),d);else if(s.addListener&&s.removeListener)s.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return u}function ev(){function s(u){return l.call(s.src,s.listener,u)}const l=tv;return s}function of(s,l,u,d,A){if(Array.isArray(l))for(var P=0;P<l.length;P++)of(s,l[P],u,d,A);else d=c(d)?!!d.capture:!!d,u=lf(u),s&&s[Dt]?(s=s.i,P=String(l).toString(),P in s.g&&(l=s.g[P],u=st(l,u,d,A),u>-1&&(b(l[u]),Array.prototype.splice.call(l,u,1),l.length==0&&(delete s.g[P],s.h--)))):s&&(s=Ca(s))&&(l=s.g[l.toString()],s=-1,l&&(s=st(l,u,d,A)),(u=s>-1?l[s]:null)&&ka(u))}function ka(s){if(typeof s!="number"&&s&&!s.da){var l=s.src;if(l&&l[Dt])bn(l.i,s);else{var u=s.type,d=s.proxy;l.removeEventListener?l.removeEventListener(u,d,s.capture):l.detachEvent?l.detachEvent(af(u),d):l.addListener&&l.removeListener&&l.removeListener(d),(u=Ca(l))?(bn(u,s),u.h==0&&(u.src=null,l[Zt]=null)):b(s)}}}function af(s){return s in Ta?Ta[s]:Ta[s]="on"+s}function tv(s,l){if(s.da)s=!0;else{l=new _e(l,this);const u=s.listener,d=s.ha||s.src;s.fa&&ka(s),s=u.call(d,l)}return s}function Ca(s){return s=s[Zt],s instanceof Je?s:null}var Aa="__closure_events_fn_"+(Math.random()*1e9>>>0);function lf(s){return typeof s=="function"?s:(s[Aa]||(s[Aa]=function(l){return s.handleEvent(l)}),s[Aa])}function ke(){v.call(this),this.i=new Je(this),this.M=this,this.G=null}I(ke,v),ke.prototype[Dt]=!0,ke.prototype.removeEventListener=function(s,l,u,d){of(this,s,l,u,d)};function Re(s,l){var u,d=s.G;if(d)for(u=[];d;d=d.G)u.push(d);if(s=s.M,d=l.type||l,typeof l=="string")l=new _(l,s);else if(l instanceof _)l.target=l.target||s;else{var A=l;l=new _(d,s),Un(l,A)}A=!0;let P,L;if(u)for(L=u.length-1;L>=0;L--)P=l.g=u[L],A=Ns(P,d,!0,l)&&A;if(P=l.g=s,A=Ns(P,d,!0,l)&&A,A=Ns(P,d,!1,l)&&A,u)for(L=0;L<u.length;L++)P=l.g=u[L],A=Ns(P,d,!1,l)&&A}ke.prototype.N=function(){if(ke.Z.N.call(this),this.i){var s=this.i;for(const l in s.g){const u=s.g[l];for(let d=0;d<u.length;d++)b(u[d]);delete s.g[l],s.h--}}this.G=null},ke.prototype.J=function(s,l,u,d){return this.i.add(String(s),l,!1,u,d)},ke.prototype.K=function(s,l,u,d){return this.i.add(String(s),l,!0,u,d)};function Ns(s,l,u,d){if(l=s.i.g[String(l)],!l)return!0;l=l.concat();let A=!0;for(let P=0;P<l.length;++P){const L=l[P];if(L&&!L.da&&L.capture==u){const B=L.listener,pe=L.ha||L.src;L.fa&&bn(s.i,L),A=B.call(pe,d)!==!1&&A}}return A&&!d.defaultPrevented}function nv(s,l){if(typeof s!="function")if(s&&typeof s.handleEvent=="function")s=h(s.handleEvent,s);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:a.setTimeout(s,l||0)}function uf(s){s.g=nv(()=>{s.g=null,s.i&&(s.i=!1,uf(s))},s.l);const l=s.h;s.h=null,s.m.apply(null,l)}class rv extends v{constructor(l,u){super(),this.m=l,this.l=u,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:uf(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ai(s){v.call(this),this.h=s,this.g={}}I(ai,v);var cf=[];function ff(s){$(s.g,function(l,u){this.g.hasOwnProperty(u)&&ka(l)},s),s.g={}}ai.prototype.N=function(){ai.Z.N.call(this),ff(this)},ai.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Pa=a.JSON.stringify,iv=a.JSON.parse,sv=class{stringify(s){return a.JSON.stringify(s,void 0)}parse(s){return a.JSON.parse(s,void 0)}};function hf(){}function ov(){}var li={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Na(){_.call(this,"d")}I(Na,_);function Ra(){_.call(this,"c")}I(Ra,_);var mr={},df=null;function Oa(){return df=df||new ke}mr.Ia="serverreachability";function pf(s){_.call(this,mr.Ia,s)}I(pf,_);function ui(s){const l=Oa();Re(l,new pf(l))}mr.STAT_EVENT="statevent";function gf(s,l){_.call(this,mr.STAT_EVENT,s),this.stat=l}I(gf,_);function Oe(s){const l=Oa();Re(l,new gf(l,s))}mr.Ja="timingevent";function mf(s,l){_.call(this,mr.Ja,s),this.size=l}I(mf,_);function ci(s,l){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){s()},l)}function fi(){this.g=!0}fi.prototype.ua=function(){this.g=!1};function av(s,l,u,d,A,P){s.info(function(){if(s.g)if(P){var L="",B=P.split("&");for(let Q=0;Q<B.length;Q++){var pe=B[Q].split("=");if(pe.length>1){const ye=pe[0];pe=pe[1];const vt=ye.split("_");L=vt.length>=2&&vt[1]=="type"?L+(ye+"="+pe+"&"):L+(ye+"=redacted&")}}}else L=null;else L=P;return"XMLHTTP REQ ("+d+") [attempt "+A+"]: "+l+`
`+u+`
`+L})}function lv(s,l,u,d,A,P,L){s.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+A+"]: "+l+`
`+u+`
`+P+" "+L})}function yr(s,l,u,d){s.info(function(){return"XMLHTTP TEXT ("+l+"): "+cv(s,u)+(d?" "+d:"")})}function uv(s,l){s.info(function(){return"TIMEOUT: "+l})}fi.prototype.info=function(){};function cv(s,l){if(!s.g)return l;if(!l)return null;try{const P=JSON.parse(l);if(P){for(s=0;s<P.length;s++)if(Array.isArray(P[s])){var u=P[s];if(!(u.length<2)){var d=u[1];if(Array.isArray(d)&&!(d.length<1)){var A=d[0];if(A!="noop"&&A!="stop"&&A!="close")for(let L=1;L<d.length;L++)d[L]=""}}}}return Pa(P)}catch{return l}}var Da={NO_ERROR:0,TIMEOUT:8},fv={},yf;function xa(){}I(xa,hf),xa.prototype.g=function(){return new XMLHttpRequest},yf=new xa;function hi(s){return encodeURIComponent(String(s))}function hv(s){var l=1;s=s.split(":");const u=[];for(;l>0&&s.length;)u.push(s.shift()),l--;return s.length&&u.push(s.join(":")),u}function en(s,l,u,d){this.j=s,this.i=l,this.l=u,this.S=d||1,this.V=new ai(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new vf}function vf(){this.i=null,this.g="",this.h=!1}var wf={},La={};function Ma(s,l,u){s.M=1,s.A=Os(yt(l)),s.u=u,s.R=!0,_f(s,null)}function _f(s,l){s.F=Date.now(),Rs(s),s.B=yt(s.A);var u=s.B,d=s.S;Array.isArray(d)||(d=[String(d)]),xf(u.i,"t",d),s.C=0,u=s.j.L,s.h=new vf,s.g=Qf(s.j,u?l:null,!s.u),s.P>0&&(s.O=new rv(h(s.Y,s,s.g),s.P)),l=s.V,u=s.g,d=s.ba;var A="readystatechange";Array.isArray(A)||(A&&(cf[0]=A.toString()),A=cf);for(let P=0;P<A.length;P++){const L=sf(u,A[P],d||l.handleEvent,!1,l.h||l);if(!L)break;l.g[L.key]=L}l=s.J?ne(s.J):{},s.u?(s.v||(s.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.B,s.v,s.u,l)):(s.v="GET",s.g.ea(s.B,s.v,null,l)),ui(),av(s.i,s.v,s.B,s.l,s.S,s.u)}en.prototype.ba=function(s){s=s.target;const l=this.O;l&&rn(s)==3?l.j():this.Y(s)},en.prototype.Y=function(s){try{if(s==this.g)e:{const B=rn(this.g),pe=this.g.ya(),Q=this.g.ca();if(!(B<3)&&(B!=3||this.g&&(this.h.h||this.g.la()||Vf(this.g)))){this.K||B!=4||pe==7||(pe==8||Q<=0?ui(3):ui(2)),Ua(this);var l=this.g.ca();this.X=l;var u=dv(this);if(this.o=l==200,lv(this.i,this.v,this.B,this.l,this.S,B,l),this.o){if(this.U&&!this.L){t:{if(this.g){var d,A=this.g;if((d=A.g?A.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(d)){var P=d;break t}}P=null}if(s=P)yr(this.i,this.l,s,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ba(this,s);else{this.o=!1,this.m=3,Oe(12),Fn(this),di(this);break e}}if(this.R){s=!0;let ye;for(;!this.K&&this.C<u.length;)if(ye=pv(this,u),ye==La){B==4&&(this.m=4,Oe(14),s=!1),yr(this.i,this.l,null,"[Incomplete Response]");break}else if(ye==wf){this.m=4,Oe(15),yr(this.i,this.l,u,"[Invalid Chunk]"),s=!1;break}else yr(this.i,this.l,ye,null),ba(this,ye);if(Sf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),B!=4||u.length!=0||this.h.h||(this.m=1,Oe(16),s=!1),this.o=this.o&&s,!s)yr(this.i,this.l,u,"[Invalid Chunked Response]"),Fn(this),di(this);else if(u.length>0&&!this.W){this.W=!0;var L=this.j;L.g==this&&L.aa&&!L.P&&(L.j.info("Great, no buffering proxy detected. Bytes received: "+u.length),Wa(L),L.P=!0,Oe(11))}}else yr(this.i,this.l,u,null),ba(this,u);B==4&&Fn(this),this.o&&!this.K&&(B==4?Gf(this.j,this):(this.o=!1,Rs(this)))}else Pv(this.g),l==400&&u.indexOf("Unknown SID")>0?(this.m=3,Oe(12)):(this.m=0,Oe(13)),Fn(this),di(this)}}}catch{}finally{}};function dv(s){if(!Sf(s))return s.g.la();const l=Vf(s.g);if(l==="")return"";let u="";const d=l.length,A=rn(s.g)==4;if(!s.h.i){if(typeof TextDecoder>"u")return Fn(s),di(s),"";s.h.i=new a.TextDecoder}for(let P=0;P<d;P++)s.h.h=!0,u+=s.h.i.decode(l[P],{stream:!(A&&P==d-1)});return l.length=0,s.h.g+=u,s.C=0,s.h.g}function Sf(s){return s.g?s.v=="GET"&&s.M!=2&&s.j.Aa:!1}function pv(s,l){var u=s.C,d=l.indexOf(`
`,u);return d==-1?La:(u=Number(l.substring(u,d)),isNaN(u)?wf:(d+=1,d+u>l.length?La:(l=l.slice(d,d+u),s.C=d+u,l)))}en.prototype.cancel=function(){this.K=!0,Fn(this)};function Rs(s){s.T=Date.now()+s.H,Ef(s,s.H)}function Ef(s,l){if(s.D!=null)throw Error("WatchDog timer not null");s.D=ci(h(s.aa,s),l)}function Ua(s){s.D&&(a.clearTimeout(s.D),s.D=null)}en.prototype.aa=function(){this.D=null;const s=Date.now();s-this.T>=0?(uv(this.i,this.B),this.M!=2&&(ui(),Oe(17)),Fn(this),this.m=2,di(this)):Ef(this,this.T-s)};function di(s){s.j.I==0||s.K||Gf(s.j,s)}function Fn(s){Ua(s);var l=s.O;l&&typeof l.dispose=="function"&&l.dispose(),s.O=null,ff(s.V),s.g&&(l=s.g,s.g=null,l.abort(),l.dispose())}function ba(s,l){try{var u=s.j;if(u.I!=0&&(u.g==s||Fa(u.h,s))){if(!s.L&&Fa(u.h,s)&&u.I==3){try{var d=u.Ba.g.parse(l)}catch{d=null}if(Array.isArray(d)&&d.length==3){var A=d;if(A[0]==0){e:if(!u.v){if(u.g)if(u.g.F+3e3<s.F)Us(u),Ls(u);else break e;Ha(u),Oe(18)}}else u.xa=A[1],0<u.xa-u.K&&A[2]<37500&&u.F&&u.A==0&&!u.C&&(u.C=ci(h(u.Va,u),6e3));kf(u.h)<=1&&u.ta&&(u.ta=void 0)}else Vn(u,11)}else if((s.L||u.g==s)&&Us(u),!y(l))for(A=u.Ba.g.parse(l),l=0;l<A.length;l++){let Q=A[l];const ye=Q[0];if(!(ye<=u.K))if(u.K=ye,Q=Q[1],u.I==2)if(Q[0]=="c"){u.M=Q[1],u.ba=Q[2];const vt=Q[3];vt!=null&&(u.ka=vt,u.j.info("VER="+u.ka));const $n=Q[4];$n!=null&&(u.za=$n,u.j.info("SVER="+u.za));const sn=Q[5];sn!=null&&typeof sn=="number"&&sn>0&&(d=1.5*sn,u.O=d,u.j.info("backChannelRequestTimeoutMs_="+d)),d=u;const on=s.g;if(on){const bs=on.g?on.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(bs){var P=d.h;P.g||bs.indexOf("spdy")==-1&&bs.indexOf("quic")==-1&&bs.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(ja(P,P.h),P.h=null))}if(d.G){const Ka=on.g?on.g.getResponseHeader("X-HTTP-Session-Id"):null;Ka&&(d.wa=Ka,Z(d.J,d.G,Ka))}}u.I=3,u.l&&u.l.ra(),u.aa&&(u.T=Date.now()-s.F,u.j.info("Handshake RTT: "+u.T+"ms")),d=u;var L=s;if(d.na=Jf(d,d.L?d.ba:null,d.W),L.L){Cf(d.h,L);var B=L,pe=d.O;pe&&(B.H=pe),B.D&&(Ua(B),Rs(B)),d.g=L}else Wf(d);u.i.length>0&&Ms(u)}else Q[0]!="stop"&&Q[0]!="close"||Vn(u,7);else u.I==3&&(Q[0]=="stop"||Q[0]=="close"?Q[0]=="stop"?Vn(u,7):Ba(u):Q[0]!="noop"&&u.l&&u.l.qa(Q),u.A=0)}}ui(4)}catch{}}var gv=class{constructor(s,l){this.g=s,this.map=l}};function If(s){this.l=s||10,a.PerformanceNavigationTiming?(s=a.performance.getEntriesByType("navigation"),s=s.length>0&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Tf(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function kf(s){return s.h?1:s.g?s.g.size:0}function Fa(s,l){return s.h?s.h==l:s.g?s.g.has(l):!1}function ja(s,l){s.g?s.g.add(l):s.h=l}function Cf(s,l){s.h&&s.h==l?s.h=null:s.g&&s.g.has(l)&&s.g.delete(l)}If.prototype.cancel=function(){if(this.i=Af(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Af(s){if(s.h!=null)return s.i.concat(s.h.G);if(s.g!=null&&s.g.size!==0){let l=s.i;for(const u of s.g.values())l=l.concat(u.G);return l}return R(s.i)}var Pf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function mv(s,l){if(s){s=s.split("&");for(let u=0;u<s.length;u++){const d=s[u].indexOf("=");let A,P=null;d>=0?(A=s[u].substring(0,d),P=s[u].substring(d+1)):A=s[u],l(A,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function tn(s){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;s instanceof tn?(this.l=s.l,pi(this,s.j),this.o=s.o,this.g=s.g,gi(this,s.u),this.h=s.h,Va(this,Lf(s.i)),this.m=s.m):s&&(l=String(s).match(Pf))?(this.l=!1,pi(this,l[1]||"",!0),this.o=mi(l[2]||""),this.g=mi(l[3]||"",!0),gi(this,l[4]),this.h=mi(l[5]||"",!0),Va(this,l[6]||"",!0),this.m=mi(l[7]||"")):(this.l=!1,this.i=new vi(null,this.l))}tn.prototype.toString=function(){const s=[];var l=this.j;l&&s.push(yi(l,Nf,!0),":");var u=this.g;return(u||l=="file")&&(s.push("//"),(l=this.o)&&s.push(yi(l,Nf,!0),"@"),s.push(hi(u).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.u,u!=null&&s.push(":",String(u))),(u=this.h)&&(this.g&&u.charAt(0)!="/"&&s.push("/"),s.push(yi(u,u.charAt(0)=="/"?wv:vv,!0))),(u=this.i.toString())&&s.push("?",u),(u=this.m)&&s.push("#",yi(u,Sv)),s.join("")},tn.prototype.resolve=function(s){const l=yt(this);let u=!!s.j;u?pi(l,s.j):u=!!s.o,u?l.o=s.o:u=!!s.g,u?l.g=s.g:u=s.u!=null;var d=s.h;if(u)gi(l,s.u);else if(u=!!s.h){if(d.charAt(0)!="/")if(this.g&&!this.h)d="/"+d;else{var A=l.h.lastIndexOf("/");A!=-1&&(d=l.h.slice(0,A+1)+d)}if(A=d,A==".."||A==".")d="";else if(A.indexOf("./")!=-1||A.indexOf("/.")!=-1){d=A.lastIndexOf("/",0)==0,A=A.split("/");const P=[];for(let L=0;L<A.length;){const B=A[L++];B=="."?d&&L==A.length&&P.push(""):B==".."?((P.length>1||P.length==1&&P[0]!="")&&P.pop(),d&&L==A.length&&P.push("")):(P.push(B),d=!0)}d=P.join("/")}else d=A}return u?l.h=d:u=s.i.toString()!=="",u?Va(l,Lf(s.i)):u=!!s.m,u&&(l.m=s.m),l};function yt(s){return new tn(s)}function pi(s,l,u){s.j=u?mi(l,!0):l,s.j&&(s.j=s.j.replace(/:$/,""))}function gi(s,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);s.u=l}else s.u=null}function Va(s,l,u){l instanceof vi?(s.i=l,Ev(s.i,s.l)):(u||(l=yi(l,_v)),s.i=new vi(l,s.l))}function Z(s,l,u){s.i.set(l,u)}function Os(s){return Z(s,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),s}function mi(s,l){return s?l?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function yi(s,l,u){return typeof s=="string"?(s=encodeURI(s).replace(l,yv),u&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function yv(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Nf=/[#\/\?@]/g,vv=/[#\?:]/g,wv=/[#\?]/g,_v=/[#\?@]/g,Sv=/#/g;function vi(s,l){this.h=this.g=null,this.i=s||null,this.j=!!l}function jn(s){s.g||(s.g=new Map,s.h=0,s.i&&mv(s.i,function(l,u){s.add(decodeURIComponent(l.replace(/\+/g," ")),u)}))}t=vi.prototype,t.add=function(s,l){jn(this),this.i=null,s=vr(this,s);let u=this.g.get(s);return u||this.g.set(s,u=[]),u.push(l),this.h+=1,this};function Rf(s,l){jn(s),l=vr(s,l),s.g.has(l)&&(s.i=null,s.h-=s.g.get(l).length,s.g.delete(l))}function Of(s,l){return jn(s),l=vr(s,l),s.g.has(l)}t.forEach=function(s,l){jn(this),this.g.forEach(function(u,d){u.forEach(function(A){s.call(l,A,d,this)},this)},this)};function Df(s,l){jn(s);let u=[];if(typeof l=="string")Of(s,l)&&(u=u.concat(s.g.get(vr(s,l))));else for(s=Array.from(s.g.values()),l=0;l<s.length;l++)u=u.concat(s[l]);return u}t.set=function(s,l){return jn(this),this.i=null,s=vr(this,s),Of(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[l]),this.h+=1,this},t.get=function(s,l){return s?(s=Df(this,s),s.length>0?String(s[0]):l):l};function xf(s,l,u){Rf(s,l),u.length>0&&(s.i=null,s.g.set(vr(s,l),R(u)),s.h+=u.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],l=Array.from(this.g.keys());for(let d=0;d<l.length;d++){var u=l[d];const A=hi(u);u=Df(this,u);for(let P=0;P<u.length;P++){let L=A;u[P]!==""&&(L+="="+hi(u[P])),s.push(L)}}return this.i=s.join("&")};function Lf(s){const l=new vi;return l.i=s.i,s.g&&(l.g=new Map(s.g),l.h=s.h),l}function vr(s,l){return l=String(l),s.j&&(l=l.toLowerCase()),l}function Ev(s,l){l&&!s.j&&(jn(s),s.i=null,s.g.forEach(function(u,d){const A=d.toLowerCase();d!=A&&(Rf(this,d),xf(this,A,u))},s)),s.j=l}function Iv(s,l){const u=new fi;if(a.Image){const d=new Image;d.onload=k(nn,u,"TestLoadImage: loaded",!0,l,d),d.onerror=k(nn,u,"TestLoadImage: error",!1,l,d),d.onabort=k(nn,u,"TestLoadImage: abort",!1,l,d),d.ontimeout=k(nn,u,"TestLoadImage: timeout",!1,l,d),a.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=s}else l(!1)}function Tv(s,l){const u=new fi,d=new AbortController,A=setTimeout(()=>{d.abort(),nn(u,"TestPingServer: timeout",!1,l)},1e4);fetch(s,{signal:d.signal}).then(P=>{clearTimeout(A),P.ok?nn(u,"TestPingServer: ok",!0,l):nn(u,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),nn(u,"TestPingServer: error",!1,l)})}function nn(s,l,u,d,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),d(u)}catch{}}function kv(){this.g=new sv}function $a(s){this.i=s.Sb||null,this.h=s.ab||!1}I($a,hf),$a.prototype.g=function(){return new Ds(this.i,this.h)};function Ds(s,l){ke.call(this),this.H=s,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}I(Ds,ke),t=Ds.prototype,t.open=function(s,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=s,this.D=l,this.readyState=1,_i(this)},t.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};s&&(l.body=s),(this.H||a).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,wi(this)),this.readyState=0},t.Pa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,_i(this)),this.g&&(this.readyState=3,_i(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Mf(this)}else s.text().then(this.Oa.bind(this),this.ga.bind(this))};function Mf(s){s.j.read().then(s.Ma.bind(s)).catch(s.ga.bind(s))}t.Ma=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var l=s.value?s.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!s.done}))&&(this.response=this.responseText+=l)}s.done?wi(this):_i(this),this.readyState==3&&Mf(this)}},t.Oa=function(s){this.g&&(this.response=this.responseText=s,wi(this))},t.Na=function(s){this.g&&(this.response=s,wi(this))},t.ga=function(){this.g&&wi(this)};function wi(s){s.readyState=4,s.l=null,s.j=null,s.B=null,_i(s)}t.setRequestHeader=function(s,l){this.A.append(s,l)},t.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],l=this.h.entries();for(var u=l.next();!u.done;)u=u.value,s.push(u[0]+": "+u[1]),u=l.next();return s.join(`\r
`)};function _i(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Ds.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Uf(s){let l="";return $(s,function(u,d){l+=d,l+=":",l+=u,l+=`\r
`}),l}function za(s,l,u){e:{for(d in u){var d=!1;break e}d=!0}d||(u=Uf(u),typeof s=="string"?u!=null&&hi(u):Z(s,l,u))}function ce(s){ke.call(this),this.headers=new Map,this.L=s||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}I(ce,ke);var Cv=/^https?$/i,Av=["POST","PUT"];t=ce.prototype,t.Fa=function(s){this.H=s},t.ea=function(s,l,u,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);l=l?l.toUpperCase():"GET",this.D=s,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():yf.g(),this.g.onreadystatechange=S(h(this.Ca,this));try{this.B=!0,this.g.open(l,String(s),!0),this.B=!1}catch(P){bf(this,P);return}if(s=u||"",u=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var A in d)u.set(A,d[A]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const P of d.keys())u.set(P,d.get(P));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(u.keys()).find(P=>P.toLowerCase()=="content-type"),A=a.FormData&&s instanceof a.FormData,!(Array.prototype.indexOf.call(Av,l,void 0)>=0)||d||A||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,L]of u)this.g.setRequestHeader(P,L);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(s),this.v=!1}catch(P){bf(this,P)}};function bf(s,l){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=l,s.o=5,Ff(s),xs(s)}function Ff(s){s.A||(s.A=!0,Re(s,"complete"),Re(s,"error"))}t.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=s||7,Re(this,"complete"),Re(this,"abort"),xs(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),xs(this,!0)),ce.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?jf(this):this.Xa())},t.Xa=function(){jf(this)};function jf(s){if(s.h&&typeof o<"u"){if(s.v&&rn(s)==4)setTimeout(s.Ca.bind(s),0);else if(Re(s,"readystatechange"),rn(s)==4){s.h=!1;try{const P=s.ca();e:switch(P){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var u;if(!(u=l)){var d;if(d=P===0){let L=String(s.D).match(Pf)[1]||null;!L&&a.self&&a.self.location&&(L=a.self.location.protocol.slice(0,-1)),d=!Cv.test(L?L.toLowerCase():"")}u=d}if(u)Re(s,"complete"),Re(s,"success");else{s.o=6;try{var A=rn(s)>2?s.g.statusText:""}catch{A=""}s.l=A+" ["+s.ca()+"]",Ff(s)}}finally{xs(s)}}}}function xs(s,l){if(s.g){s.m&&(clearTimeout(s.m),s.m=null);const u=s.g;s.g=null,l||Re(s,"ready");try{u.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function rn(s){return s.g?s.g.readyState:0}t.ca=function(){try{return rn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(s){if(this.g){var l=this.g.responseText;return s&&l.indexOf(s)==0&&(l=l.substring(s.length)),iv(l)}};function Vf(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.F){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Pv(s){const l={};s=(s.g&&rn(s)>=2&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<s.length;d++){if(y(s[d]))continue;var u=hv(s[d]);const A=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const P=l[A]||[];l[A]=P,P.push(u)}z(l,function(d){return d.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Si(s,l,u){return u&&u.internalChannelParams&&u.internalChannelParams[s]||l}function $f(s){this.za=0,this.i=[],this.j=new fi,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Si("failFast",!1,s),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Si("baseRetryDelayMs",5e3,s),this.Za=Si("retryDelaySeedMs",1e4,s),this.Ta=Si("forwardChannelMaxRetries",2,s),this.va=Si("forwardChannelRequestTimeoutMs",2e4,s),this.ma=s&&s.xmlHttpFactory||void 0,this.Ua=s&&s.Rb||void 0,this.Aa=s&&s.useFetchStreams||!1,this.O=void 0,this.L=s&&s.supportsCrossDomainXhr||!1,this.M="",this.h=new If(s&&s.concurrentRequestLimit),this.Ba=new kv,this.S=s&&s.fastHandshake||!1,this.R=s&&s.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=s&&s.Pb||!1,s&&s.ua&&this.j.ua(),s&&s.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&s&&s.detectBufferingProxy||!1,this.ia=void 0,s&&s.longPollingTimeout&&s.longPollingTimeout>0&&(this.ia=s.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=$f.prototype,t.ka=8,t.I=1,t.connect=function(s,l,u,d){Oe(0),this.W=s,this.H=l||{},u&&d!==void 0&&(this.H.OSID=u,this.H.OAID=d),this.F=this.X,this.J=Jf(this,null,this.W),Ms(this)};function Ba(s){if(zf(s),s.I==3){var l=s.V++,u=yt(s.J);if(Z(u,"SID",s.M),Z(u,"RID",l),Z(u,"TYPE","terminate"),Ei(s,u),l=new en(s,s.j,l),l.M=2,l.A=Os(yt(u)),u=!1,a.navigator&&a.navigator.sendBeacon)try{u=a.navigator.sendBeacon(l.A.toString(),"")}catch{}!u&&a.Image&&(new Image().src=l.A,u=!0),u||(l.g=Qf(l.j,null),l.g.ea(l.A)),l.F=Date.now(),Rs(l)}Xf(s)}function Ls(s){s.g&&(Wa(s),s.g.cancel(),s.g=null)}function zf(s){Ls(s),s.v&&(a.clearTimeout(s.v),s.v=null),Us(s),s.h.cancel(),s.m&&(typeof s.m=="number"&&a.clearTimeout(s.m),s.m=null)}function Ms(s){if(!Tf(s.h)&&!s.m){s.m=!0;var l=s.Ea;M||p(),U||(M(),U=!0),g.add(l,s),s.D=0}}function Nv(s,l){return kf(s.h)>=s.h.j-(s.m?1:0)?!1:s.m?(s.i=l.G.concat(s.i),!0):s.I==1||s.I==2||s.D>=(s.Sa?0:s.Ta)?!1:(s.m=ci(h(s.Ea,s,l),qf(s,s.D)),s.D++,!0)}t.Ea=function(s){if(this.m)if(this.m=null,this.I==1){if(!s){this.V=Math.floor(Math.random()*1e5),s=this.V++;const A=new en(this,this.j,s);let P=this.o;if(this.U&&(P?(P=ne(P),Un(P,this.U)):P=this.U),this.u!==null||this.R||(A.J=P,P=null),this.S)e:{for(var l=0,u=0;u<this.i.length;u++){t:{var d=this.i[u];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break t}d=void 0}if(d===void 0)break;if(l+=d,l>4096){l=u;break e}if(l===4096||u===this.i.length-1){l=u+1;break e}}l=1e3}else l=1e3;l=Hf(this,A,l),u=yt(this.J),Z(u,"RID",s),Z(u,"CVER",22),this.G&&Z(u,"X-HTTP-Session-Id",this.G),Ei(this,u),P&&(this.R?l="headers="+hi(Uf(P))+"&"+l:this.u&&za(u,this.u,P)),ja(this.h,A),this.Ra&&Z(u,"TYPE","init"),this.S?(Z(u,"$req",l),Z(u,"SID","null"),A.U=!0,Ma(A,u,null)):Ma(A,u,l),this.I=2}}else this.I==3&&(s?Bf(this,s):this.i.length==0||Tf(this.h)||Bf(this))};function Bf(s,l){var u;l?u=l.l:u=s.V++;const d=yt(s.J);Z(d,"SID",s.M),Z(d,"RID",u),Z(d,"AID",s.K),Ei(s,d),s.u&&s.o&&za(d,s.u,s.o),u=new en(s,s.j,u,s.D+1),s.u===null&&(u.J=s.o),l&&(s.i=l.G.concat(s.i)),l=Hf(s,u,1e3),u.H=Math.round(s.va*.5)+Math.round(s.va*.5*Math.random()),ja(s.h,u),Ma(u,d,l)}function Ei(s,l){s.H&&$(s.H,function(u,d){Z(l,d,u)}),s.l&&$({},function(u,d){Z(l,d,u)})}function Hf(s,l,u){u=Math.min(s.i.length,u);const d=s.l?h(s.l.Ka,s.l,s):null;e:{var A=s.i;let B=-1;for(;;){const pe=["count="+u];B==-1?u>0?(B=A[0].g,pe.push("ofs="+B)):B=0:pe.push("ofs="+B);let Q=!0;for(let ye=0;ye<u;ye++){var P=A[ye].g;const vt=A[ye].map;if(P-=B,P<0)B=Math.max(0,A[ye].g-100),Q=!1;else try{P="req"+P+"_"||"";try{var L=vt instanceof Map?vt:Object.entries(vt);for(const[$n,sn]of L){let on=sn;c(sn)&&(on=Pa(sn)),pe.push(P+$n+"="+encodeURIComponent(on))}}catch($n){throw pe.push(P+"type="+encodeURIComponent("_badmap")),$n}}catch{d&&d(vt)}}if(Q){L=pe.join("&");break e}}L=void 0}return s=s.i.splice(0,u),l.G=s,L}function Wf(s){if(!s.g&&!s.v){s.Y=1;var l=s.Da;M||p(),U||(M(),U=!0),g.add(l,s),s.A=0}}function Ha(s){return s.g||s.v||s.A>=3?!1:(s.Y++,s.v=ci(h(s.Da,s),qf(s,s.A)),s.A++,!0)}t.Da=function(){if(this.v=null,Kf(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var s=4*this.T;this.j.info("BP detection timer enabled: "+s),this.B=ci(h(this.Wa,this),s)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Oe(10),Ls(this),Kf(this))};function Wa(s){s.B!=null&&(a.clearTimeout(s.B),s.B=null)}function Kf(s){s.g=new en(s,s.j,"rpc",s.Y),s.u===null&&(s.g.J=s.o),s.g.P=0;var l=yt(s.na);Z(l,"RID","rpc"),Z(l,"SID",s.M),Z(l,"AID",s.K),Z(l,"CI",s.F?"0":"1"),!s.F&&s.ia&&Z(l,"TO",s.ia),Z(l,"TYPE","xmlhttp"),Ei(s,l),s.u&&s.o&&za(l,s.u,s.o),s.O&&(s.g.H=s.O);var u=s.g;s=s.ba,u.M=1,u.A=Os(yt(l)),u.u=null,u.R=!0,_f(u,s)}t.Va=function(){this.C!=null&&(this.C=null,Ls(this),Ha(this),Oe(19))};function Us(s){s.C!=null&&(a.clearTimeout(s.C),s.C=null)}function Gf(s,l){var u=null;if(s.g==l){Us(s),Wa(s),s.g=null;var d=2}else if(Fa(s.h,l))u=l.G,Cf(s.h,l),d=1;else return;if(s.I!=0){if(l.o)if(d==1){u=l.u?l.u.length:0,l=Date.now()-l.F;var A=s.D;d=Oa(),Re(d,new mf(d,u)),Ms(s)}else Wf(s);else if(A=l.m,A==3||A==0&&l.X>0||!(d==1&&Nv(s,l)||d==2&&Ha(s)))switch(u&&u.length>0&&(l=s.h,l.i=l.i.concat(u)),A){case 1:Vn(s,5);break;case 4:Vn(s,10);break;case 3:Vn(s,6);break;default:Vn(s,2)}}}function qf(s,l){let u=s.Qa+Math.floor(Math.random()*s.Za);return s.isActive()||(u*=2),u*l}function Vn(s,l){if(s.j.info("Error code "+l),l==2){var u=h(s.bb,s),d=s.Ua;const A=!d;d=new tn(d||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||pi(d,"https"),Os(d),A?Iv(d.toString(),u):Tv(d.toString(),u)}else Oe(2);s.I=0,s.l&&s.l.pa(l),Xf(s),zf(s)}t.bb=function(s){s?(this.j.info("Successfully pinged google.com"),Oe(2)):(this.j.info("Failed to ping google.com"),Oe(1))};function Xf(s){if(s.I=0,s.ja=[],s.l){const l=Af(s.h);(l.length!=0||s.i.length!=0)&&(O(s.ja,l),O(s.ja,s.i),s.h.i.length=0,R(s.i),s.i.length=0),s.l.oa()}}function Jf(s,l,u){var d=u instanceof tn?yt(u):new tn(u);if(d.g!="")l&&(d.g=l+"."+d.g),gi(d,d.u);else{var A=a.location;d=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;const P=new tn(null);d&&pi(P,d),l&&(P.g=l),A&&gi(P,A),u&&(P.h=u),d=P}return u=s.G,l=s.wa,u&&l&&Z(d,u,l),Z(d,"VER",s.ka),Ei(s,d),d}function Qf(s,l,u){if(l&&!s.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=s.Aa&&!s.ma?new ce(new $a({ab:u})):new ce(s.ma),l.Fa(s.L),l}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Yf(){}t=Yf.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Qe(s,l){ke.call(this),this.g=new $f(l),this.l=s,this.h=l&&l.messageUrlParams||null,s=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(s?s["X-WebChannel-Content-Type"]=l.messageContentType:s={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(s?s["X-WebChannel-Client-Profile"]=l.sa:s={"X-WebChannel-Client-Profile":l.sa}),this.g.U=s,(s=l&&l.Qb)&&!y(s)&&(this.g.u=s),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!y(l)&&(this.g.G=l,s=this.h,s!==null&&l in s&&(s=this.h,l in s&&delete s[l])),this.j=new wr(this)}I(Qe,ke),Qe.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Qe.prototype.close=function(){Ba(this.g)},Qe.prototype.o=function(s){var l=this.g;if(typeof s=="string"){var u={};u.__data__=s,s=u}else this.v&&(u={},u.__data__=Pa(s),s=u);l.i.push(new gv(l.Ya++,s)),l.I==3&&Ms(l)},Qe.prototype.N=function(){this.g.l=null,delete this.j,Ba(this.g),delete this.g,Qe.Z.N.call(this)};function Zf(s){Na.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var l=s.__sm__;if(l){e:{for(const u in l){s=u;break e}s=void 0}(this.i=s)&&(s=this.i,l=l!==null&&s in l?l[s]:void 0),this.data=l}else this.data=s}I(Zf,Na);function eh(){Ra.call(this),this.status=1}I(eh,Ra);function wr(s){this.g=s}I(wr,Yf),wr.prototype.ra=function(){Re(this.g,"a")},wr.prototype.qa=function(s){Re(this.g,new Zf(s))},wr.prototype.pa=function(s){Re(this.g,new eh)},wr.prototype.oa=function(){Re(this.g,"b")},Qe.prototype.send=Qe.prototype.o,Qe.prototype.open=Qe.prototype.m,Qe.prototype.close=Qe.prototype.close,Da.NO_ERROR=0,Da.TIMEOUT=8,Da.HTTP_ERROR=6,fv.COMPLETE="complete",ov.EventType=li,li.OPEN="a",li.CLOSE="b",li.ERROR="c",li.MESSAGE="d",ke.prototype.listen=ke.prototype.J,ce.prototype.listenOnce=ce.prototype.K,ce.prototype.getLastError=ce.prototype.Ha,ce.prototype.getLastErrorCode=ce.prototype.ya,ce.prototype.getStatus=ce.prototype.ca,ce.prototype.getResponseJson=ce.prototype.La,ce.prototype.getResponseText=ce.prototype.la,ce.prototype.send=ce.prototype.ea,ce.prototype.setWithCredentials=ce.prototype.Fa}).apply(typeof no<"u"?no:typeof self<"u"?self:typeof window<"u"?window:{});const jd="@firebase/firestore",Vd="4.9.2";/**
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
 */class xe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}xe.UNAUTHENTICATED=new xe(null),xe.GOOGLE_CREDENTIALS=new xe("google-credentials-uid"),xe.FIRST_PARTY=new xe("first-party-uid"),xe.MOCK_USER=new xe("mock-user");/**
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
 */let As="12.3.0";/**
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
 */const Yr=new xc("@firebase/firestore");function ht(t,...e){if(Yr.logLevel<=X.DEBUG){const n=e.map(Kc);Yr.debug(`Firestore (${As}): ${t}`,...n)}}function yy(t,...e){if(Yr.logLevel<=X.ERROR){const n=e.map(Kc);Yr.error(`Firestore (${As}): ${t}`,...n)}}function ME(t,...e){if(Yr.logLevel<=X.WARN){const n=e.map(Kc);Yr.warn(`Firestore (${As}): ${t}`,...n)}}function Kc(t){if(typeof t=="string")return t;try{/**
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
 */function ps(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,vy(t,r,n)}function vy(t,e,n){let r=`FIRESTORE (${As}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw yy(r),new Error(r)}function Ki(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||vy(e,i,r)}/**
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
 */const K={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class G extends Ot{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Gi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class wy{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class UE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(xe.UNAUTHENTICATED))}shutdown(){}}class bE{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class FE{constructor(e){this.t=e,this.currentUser=xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ki(this.o===void 0,42304);let r=this.i;const i=f=>this.i!==r?(r=this.i,n(f)):Promise.resolve();let o=new Gi;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Gi,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const f=o;e.enqueueRetryable(async()=>{await f.promise,await i(this.currentUser)})},c=f=>{ht("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(f=>c(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?c(f):(ht("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Gi)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ht("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ki(typeof r.accessToken=="string",31837,{l:r}),new wy(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ki(e===null||typeof e=="string",2055,{h:e}),new xe(e)}}class jE{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=xe.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class VE{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new jE(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $d{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $E{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Tt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Ki(this.o===void 0,3512);const r=o=>{o.error!=null&&ht("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,ht("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{ht("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):ht("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new $d(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ki(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new $d(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function zE(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class BE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=zE(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=e.charAt(i[o]%62))}return r}}function On(t,e){return t<e?-1:t>e?1:0}function HE(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),o=e.charAt(r);if(i!==o)return Al(i)===Al(o)?On(i,o):Al(i)?1:-1}return On(t.length,e.length)}const WE=55296,KE=57343;function Al(t){const e=t.charCodeAt(0);return e>=WE&&e<=KE}/**
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
 */const zd="__name__";class St{constructor(e,n,r){n===void 0?n=0:n>e.length&&ps(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ps(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return St.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof St?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const o=St.compareSegments(e.get(i),n.get(i));if(o!==0)return o}return On(e.length,n.length)}static compareSegments(e,n){const r=St.isNumericId(e),i=St.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?St.extractNumericId(e).compare(St.extractNumericId(n)):HE(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Wc.fromString(e.substring(4,e.length-2))}}class ct extends St{construct(e,n,r){return new ct(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(K.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ct(n)}static emptyPath(){return new ct([])}}const GE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Wn extends St{construct(e,n,r){return new Wn(e,n,r)}static isValidIdentifier(e){return GE.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Wn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===zd}static keyField(){return new Wn([zd])}static fromServerFormat(e){const n=[];let r="",i=0;const o=()=>{if(r.length===0)throw new G(K.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new G(K.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const f=e[i+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new G(K.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=f,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(r+=c,i++):(o(),i++)}if(o(),a)throw new G(K.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Wn(n)}static emptyPath(){return new Wn([])}}/**
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
 */class Xn{constructor(e){this.path=e}static fromPath(e){return new Xn(ct.fromString(e))}static fromName(e){return new Xn(ct.fromString(e).popFirst(5))}static empty(){return new Xn(ct.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ct.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ct.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Xn(new ct(e.slice()))}}function qE(t,e,n,r){if(e===!0&&r===!0)throw new G(K.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function XE(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function JE(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ps(12329,{type:typeof t})}function QE(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G(K.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=JE(t);throw new G(K.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function de(t,e){const n={typeString:t};return e&&(n.value=e),n}function Ps(t,e){if(!XE(t))throw new G(K.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,o="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const a=t[r];if(i&&typeof a!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(o!==void 0&&a!==o.value){n=`Expected '${r}' field to equal '${o.value}'`;break}}if(n)throw new G(K.INVALID_ARGUMENT,n);return!0}/**
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
 */const Bd=-62135596800,Hd=1e6;class Et{static now(){return Et.fromMillis(Date.now())}static fromDate(e){return Et.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Hd);return new Et(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new G(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new G(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Bd)throw new G(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Hd}_compareTo(e){return this.seconds===e.seconds?On(this.nanoseconds,e.nanoseconds):On(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Et._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ps(e,Et._jsonSchema))return new Et(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Bd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Et._jsonSchemaVersion="firestore/timestamp/1.0",Et._jsonSchema={type:de("string",Et._jsonSchemaVersion),seconds:de("number"),nanoseconds:de("number")};function YE(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class ZE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ur{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new ZE("Invalid base64 string: "+o):o}}(e);return new ur(n)}static fromUint8Array(e){const n=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(e);return new ur(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return On(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ur.EMPTY_BYTE_STRING=new ur("");const Lu="(default)";class ea{constructor(e,n){this.projectId=e,this.database=n||Lu}static empty(){return new ea("","")}get isDefaultDatabase(){return this.database===Lu}isEqual(e){return e instanceof ea&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */class eI{constructor(e,n=null,r=[],i=[],o=null,a="F",c=null,f=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=f,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function tI(t){return new eI(t)}/**
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
 */var Wd,W;(W=Wd||(Wd={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Wc([4294967295,4294967295],0);/**
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
 */const nI=41943040;/**
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
 */const rI=1048576;function Pl(){return typeof document<"u"?document:null}/**
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
 */class iI{constructor(e,n,r=1e3,i=1.5,o=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=i,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&ht("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */class Gc{constructor(e,n,r,i,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Gi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,o){const a=Date.now()+r,c=new Gc(e,n,a,i,o);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(K.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Kd,Gd;(Gd=Kd||(Kd={})).Ma="default",Gd.Cache="cache";/**
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
 */function sI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const qd=new Map;/**
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
 */const _y="firestore.googleapis.com",Xd=!0;class Jd{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new G(K.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=_y,this.ssl=Xd}else this.host=e.host,this.ssl=e.ssl??Xd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=nI;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<rI)throw new G(K.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}qE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=sI(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new G(K.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new G(K.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new G(K.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Sy{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Jd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(K.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(K.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Jd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new UE;switch(r.type){case"firstParty":return new VE(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(K.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=qd.get(n);r&&(ht("ComponentProvider","Removing Datastore"),qd.delete(n),r.terminate())}(this),Promise.resolve()}}function oI(t,e,n,r={}){var h;t=QE(t,Sy);const i=Es(e),o=t._getSettings(),a={...o,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;i&&(Om(`https://${c}`),Dm("Firestore",!0)),o.host!==_y&&o.host!==c&&ME("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const f={...o,host:c,ssl:i,emulatorOptions:r};if(!ar(f,a)&&(t._setSettings(f),r.mockUserToken)){let k,I;if(typeof r.mockUserToken=="string")k=r.mockUserToken,I=xe.MOCK_USER;else{k=h1(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const S=r.mockUserToken.sub||r.mockUserToken.user_id;if(!S)throw new G(K.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");I=new xe(S)}t._authCredentials=new bE(new wy(k,I))}}/**
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
 */class qc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new qc(this.firestore,e,this._query)}}class kt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xc(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new kt(this.firestore,e,this._key)}toJSON(){return{type:kt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Ps(n,kt._jsonSchema))return new kt(e,r||null,new Xn(ct.fromString(n.referencePath)))}}kt._jsonSchemaVersion="firestore/documentReference/1.0",kt._jsonSchema={type:de("string",kt._jsonSchemaVersion),referencePath:de("string")};class Xc extends qc{constructor(e,n,r){super(e,n,tI(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new kt(this.firestore,null,new Xn(e))}withConverter(e){return new Xc(this.firestore,e,this._path)}}/**
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
 */const Qd="AsyncQueue";class Yd{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new iI(this,"async_queue_retry"),this._c=()=>{const r=Pl();r&&ht(Qd,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Pl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Pl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Gi;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!YE(e))throw e;ht(Qd,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,yy("INTERNAL UNHANDLED ERROR: ",Zd(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=Gc.createAndSchedule(this,e,n,r,o=>this.hc(o));return this.tc.push(i),i}uc(){this.nc&&ps(47125,{Pc:Zd(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Zd(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class aI extends Sy{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Yd,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Yd(e),this._firestoreClient=void 0,await e}}}function lI(t,e){const n=typeof t=="object"?t:Mc(),r=typeof t=="string"?t:Lu,i=ni(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=c1("firestore");o&&oI(i,...o)}return i}/**
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
 */class bt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new bt(ur.fromBase64String(e))}catch(n){throw new G(K.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new bt(ur.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:bt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ps(e,bt._jsonSchema))return bt.fromBase64String(e.bytes)}}bt._jsonSchemaVersion="firestore/bytes/1.0",bt._jsonSchema={type:de("string",bt._jsonSchemaVersion),bytes:de("string")};/**
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
 */class Ey{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new G(K.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Wn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class er{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new G(K.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new G(K.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return On(this._lat,e._lat)||On(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:er._jsonSchemaVersion}}static fromJSON(e){if(Ps(e,er._jsonSchema))return new er(e.latitude,e.longitude)}}er._jsonSchemaVersion="firestore/geoPoint/1.0",er._jsonSchema={type:de("string",er._jsonSchemaVersion),latitude:de("number"),longitude:de("number")};/**
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
 */class tr{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,e._values)}toJSON(){return{type:tr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ps(e,tr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new tr(e.vectorValues);throw new G(K.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}tr._jsonSchemaVersion="firestore/vectorValue/1.0",tr._jsonSchema={type:de("string",tr._jsonSchemaVersion),vectorValues:de("object")};const uI=new RegExp("[~\\*/\\[\\]]");function cI(t,e,n){if(e.search(uI)>=0)throw ep(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t);try{return new Ey(...e.split("."))._internalPath}catch{throw ep(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t)}}function ep(t,e,n,r,i){let o=`Function ${e}() called with invalid data`;o+=". ";let a="";return new G(K.INVALID_ARGUMENT,o+t+a)}/**
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
 */class Iy{constructor(e,n,r,i,o){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new kt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new fI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ty("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class fI extends Iy{data(){return super.data()}}function Ty(t,e){return typeof e=="string"?cI(t,e):e instanceof Ey?e._internalPath:e._delegate._internalPath}class ro{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Br extends Iy{constructor(e,n,r,i,o,a){super(e,n,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new So(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ty("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new G(K.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Br._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Br._jsonSchemaVersion="firestore/documentSnapshot/1.0",Br._jsonSchema={type:de("string",Br._jsonSchemaVersion),bundleSource:de("string","DocumentSnapshot"),bundleName:de("string"),bundle:de("string")};class So extends Br{data(e={}){return super.data(e)}}class qi{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ro(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new So(this._firestore,this._userDataWriter,r.key,r,new ro(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new G(K.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(c=>{const f=new So(i._firestore,i._userDataWriter,c.doc.key,c.doc,new ro(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:f,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const f=new So(i._firestore,i._userDataWriter,c.doc.key,c.doc,new ro(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,k=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),k=a.indexOf(c.doc.key)),{type:hI(c.type),doc:f,oldIndex:h,newIndex:k}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new G(K.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=qi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=BE.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(o=>{o._document!==null&&(n.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),i.push(o.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function hI(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ps(61501,{type:t})}}qi._jsonSchemaVersion="firestore/querySnapshot/1.0",qi._jsonSchema={type:de("string",qi._jsonSchemaVersion),bundleSource:de("string","QuerySnapshot"),bundleName:de("string"),bundle:de("string")};(function(e,n=!0){(function(i){As=i})(ri),Rt(new mt("firestore",(r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),c=new aI(new FE(r.getProvider("auth-internal")),new $E(a,r.getProvider("app-check-internal")),function(h,k){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new G(K.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ea(h.options.projectId,k)}(a,i),a);return o={useFetchStreams:n,...o},c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),nt(jd,Vd,e),nt(jd,Vd,"esm2020")})();const ky="@firebase/installations",Jc="0.6.19";/**
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
 */const Cy=1e4,Ay=`w:${Jc}`,Py="FIS_v2",dI="https://firebaseinstallations.googleapis.com/v1",pI=60*60*1e3,gI="installations",mI="Installations";/**
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
 */const yI={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},cr=new pr(gI,mI,yI);function Ny(t){return t instanceof Ot&&t.code.includes("request-failed")}/**
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
 */function Ry({projectId:t}){return`${dI}/projects/${t}/installations`}function Oy(t){return{token:t.token,requestStatus:2,expiresIn:wI(t.expiresIn),creationTime:Date.now()}}async function Dy(t,e){const r=(await e.json()).error;return cr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function xy({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function vI(t,{refreshToken:e}){const n=xy(t);return n.append("Authorization",_I(e)),n}async function Ly(t){const e=await t();return e.status>=500&&e.status<600?t():e}function wI(t){return Number(t.replace("s","000"))}function _I(t){return`${Py} ${t}`}/**
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
 */async function SI({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Ry(t),i=xy(t),o=e.getImmediate({optional:!0});if(o){const h=await o.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const a={fid:n,authVersion:Py,appId:t.appId,sdkVersion:Ay},c={method:"POST",headers:i,body:JSON.stringify(a)},f=await Ly(()=>fetch(r,c));if(f.ok){const h=await f.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:Oy(h.authToken)}}else throw await Dy("Create Installation",f)}/**
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
 */function My(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function EI(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const II=/^[cdef][\w-]{21}$/,Mu="";function TI(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=kI(t);return II.test(n)?n:Mu}catch{return Mu}}function kI(t){return EI(t).substr(0,22)}/**
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
 */function Sa(t){return`${t.appName}!${t.appId}`}/**
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
 */const Uy=new Map;function by(t,e){const n=Sa(t);Fy(n,e),CI(n,e)}function Fy(t,e){const n=Uy.get(t);if(n)for(const r of n)r(e)}function CI(t,e){const n=AI();n&&n.postMessage({key:t,fid:e}),PI()}let Jn=null;function AI(){return!Jn&&"BroadcastChannel"in self&&(Jn=new BroadcastChannel("[Firebase] FID Change"),Jn.onmessage=t=>{Fy(t.data.key,t.data.fid)}),Jn}function PI(){Uy.size===0&&Jn&&(Jn.close(),Jn=null)}/**
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
 */const NI="firebase-installations-database",RI=1,fr="firebase-installations-store";let Nl=null;function Qc(){return Nl||(Nl=va(NI,RI,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(fr)}}})),Nl}async function ta(t,e){const n=Sa(t),i=(await Qc()).transaction(fr,"readwrite"),o=i.objectStore(fr),a=await o.get(n);return await o.put(e,n),await i.done,(!a||a.fid!==e.fid)&&by(t,e.fid),e}async function jy(t){const e=Sa(t),r=(await Qc()).transaction(fr,"readwrite");await r.objectStore(fr).delete(e),await r.done}async function Ea(t,e){const n=Sa(t),i=(await Qc()).transaction(fr,"readwrite"),o=i.objectStore(fr),a=await o.get(n),c=e(a);return c===void 0?await o.delete(n):await o.put(c,n),await i.done,c&&(!a||a.fid!==c.fid)&&by(t,c.fid),c}/**
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
 */async function Yc(t){let e;const n=await Ea(t.appConfig,r=>{const i=OI(r),o=DI(t,i);return e=o.registrationPromise,o.installationEntry});return n.fid===Mu?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function OI(t){const e=t||{fid:TI(),registrationStatus:0};return Vy(e)}function DI(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(cr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=xI(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:LI(t)}:{installationEntry:e}}async function xI(t,e){try{const n=await SI(t,e);return ta(t.appConfig,n)}catch(n){throw Ny(n)&&n.customData.serverCode===409?await jy(t.appConfig):await ta(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function LI(t){let e=await tp(t.appConfig);for(;e.registrationStatus===1;)await My(100),e=await tp(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Yc(t);return r||n}return e}function tp(t){return Ea(t,e=>{if(!e)throw cr.create("installation-not-found");return Vy(e)})}function Vy(t){return MI(t)?{fid:t.fid,registrationStatus:0}:t}function MI(t){return t.registrationStatus===1&&t.registrationTime+Cy<Date.now()}/**
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
 */async function UI({appConfig:t,heartbeatServiceProvider:e},n){const r=bI(t,n),i=vI(t,n),o=e.getImmediate({optional:!0});if(o){const h=await o.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const a={installation:{sdkVersion:Ay,appId:t.appId}},c={method:"POST",headers:i,body:JSON.stringify(a)},f=await Ly(()=>fetch(r,c));if(f.ok){const h=await f.json();return Oy(h)}else throw await Dy("Generate Auth Token",f)}function bI(t,{fid:e}){return`${Ry(t)}/${e}/authTokens:generate`}/**
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
 */async function Zc(t,e=!1){let n;const r=await Ea(t.appConfig,o=>{if(!$y(o))throw cr.create("not-registered");const a=o.authToken;if(!e&&VI(a))return o;if(a.requestStatus===1)return n=FI(t,e),o;{if(!navigator.onLine)throw cr.create("app-offline");const c=zI(o);return n=jI(t,c),c}});return n?await n:r.authToken}async function FI(t,e){let n=await np(t.appConfig);for(;n.authToken.requestStatus===1;)await My(100),n=await np(t.appConfig);const r=n.authToken;return r.requestStatus===0?Zc(t,e):r}function np(t){return Ea(t,e=>{if(!$y(e))throw cr.create("not-registered");const n=e.authToken;return BI(n)?{...e,authToken:{requestStatus:0}}:e})}async function jI(t,e){try{const n=await UI(t,e),r={...e,authToken:n};return await ta(t.appConfig,r),n}catch(n){if(Ny(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await jy(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await ta(t.appConfig,r)}throw n}}function $y(t){return t!==void 0&&t.registrationStatus===2}function VI(t){return t.requestStatus===2&&!$I(t)}function $I(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+pI}function zI(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function BI(t){return t.requestStatus===1&&t.requestTime+Cy<Date.now()}/**
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
 */async function HI(t){const e=t,{installationEntry:n,registrationPromise:r}=await Yc(e);return r?r.catch(console.error):Zc(e).catch(console.error),n.fid}/**
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
 */async function WI(t,e=!1){const n=t;return await KI(n),(await Zc(n,e)).token}async function KI(t){const{registrationPromise:e}=await Yc(t);e&&await e}/**
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
 */function GI(t){if(!t||!t.options)throw Rl("App Configuration");if(!t.name)throw Rl("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Rl(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Rl(t){return cr.create("missing-app-config-values",{valueName:t})}/**
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
 */const zy="installations",qI="installations-internal",XI=t=>{const e=t.getProvider("app").getImmediate(),n=GI(e),r=ni(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},JI=t=>{const e=t.getProvider("app").getImmediate(),n=ni(e,zy).getImmediate();return{getId:()=>HI(n),getToken:i=>WI(n,i)}};function QI(){Rt(new mt(zy,XI,"PUBLIC")),Rt(new mt(qI,JI,"PRIVATE"))}QI();nt(ky,Jc);nt(ky,Jc,"esm2020");/**
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
 */const YI="/firebase-messaging-sw.js",ZI="/firebase-cloud-messaging-push-scope",By="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",eT="https://fcmregistrations.googleapis.com/v1",Hy="google.c.a.c_id",tT="google.c.a.c_l",nT="google.c.a.ts",rT="google.c.a.e",rp=1e4;var ip;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(ip||(ip={}));/**
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
 */var gs;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(gs||(gs={}));/**
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
 */function Mt(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function iT(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let o=0;o<r.length;++o)i[o]=r.charCodeAt(o);return i}/**
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
 */const Ol="fcm_token_details_db",sT=5,sp="fcm_token_object_Store";async function oT(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(o=>o.name).includes(Ol))return null;let e=null;return(await va(Ol,sT,{upgrade:async(r,i,o,a)=>{if(i<2||!r.objectStoreNames.contains(sp))return;const c=a.objectStore(sp),f=await c.index("fcmSenderId").get(t);if(await c.clear(),!!f){if(i===2){const h=f;if(!h.auth||!h.p256dh||!h.endpoint)return;e={token:h.fcmToken,createTime:h.createTime??Date.now(),subscriptionOptions:{auth:h.auth,p256dh:h.p256dh,endpoint:h.endpoint,swScope:h.swScope,vapidKey:typeof h.vapidKey=="string"?h.vapidKey:Mt(h.vapidKey)}}}else if(i===3){const h=f;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:Mt(h.auth),p256dh:Mt(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:Mt(h.vapidKey)}}}else if(i===4){const h=f;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:Mt(h.auth),p256dh:Mt(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:Mt(h.vapidKey)}}}}}})).close(),await El(Ol),await El("fcm_vapid_details_db"),await El("undefined"),aT(e)?e:null}function aT(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const lT="firebase-messaging-database",uT=1,ms="firebase-messaging-store";let Dl=null;function Wy(){return Dl||(Dl=va(lT,uT,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ms)}}})),Dl}async function cT(t){const e=Ky(t),r=await(await Wy()).transaction(ms).objectStore(ms).get(e);if(r)return r;{const i=await oT(t.appConfig.senderId);if(i)return await ef(t,i),i}}async function ef(t,e){const n=Ky(t),i=(await Wy()).transaction(ms,"readwrite");return await i.objectStore(ms).put(e,n),await i.done,e}function Ky({appConfig:t}){return t.appId}/**
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
 */const fT={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Me=new pr("messaging","Messaging",fT);/**
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
 */async function hT(t,e){const n=await nf(t),r=Gy(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let o;try{o=await(await fetch(tf(t.appConfig),i)).json()}catch(a){throw Me.create("token-subscribe-failed",{errorInfo:a==null?void 0:a.toString()})}if(o.error){const a=o.error.message;throw Me.create("token-subscribe-failed",{errorInfo:a})}if(!o.token)throw Me.create("token-subscribe-no-token");return o.token}async function dT(t,e){const n=await nf(t),r=Gy(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let o;try{o=await(await fetch(`${tf(t.appConfig)}/${e.token}`,i)).json()}catch(a){throw Me.create("token-update-failed",{errorInfo:a==null?void 0:a.toString()})}if(o.error){const a=o.error.message;throw Me.create("token-update-failed",{errorInfo:a})}if(!o.token)throw Me.create("token-update-no-token");return o.token}async function pT(t,e){const r={method:"DELETE",headers:await nf(t)};try{const o=await(await fetch(`${tf(t.appConfig)}/${e}`,r)).json();if(o.error){const a=o.error.message;throw Me.create("token-unsubscribe-failed",{errorInfo:a})}}catch(i){throw Me.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function tf({projectId:t}){return`${eT}/projects/${t}/registrations`}async function nf({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Gy({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==By&&(i.web.applicationPubKey=r),i}/**
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
 */const gT=7*24*60*60*1e3;async function mT(t){const e=await vT(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:Mt(e.getKey("auth")),p256dh:Mt(e.getKey("p256dh"))},r=await cT(t.firebaseDependencies);if(r){if(wT(r.subscriptionOptions,n))return Date.now()>=r.createTime+gT?yT(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await pT(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return op(t.firebaseDependencies,n)}else return op(t.firebaseDependencies,n)}async function yT(t,e){try{const n=await dT(t.firebaseDependencies,e),r={...e,token:n,createTime:Date.now()};return await ef(t.firebaseDependencies,r),n}catch(n){throw n}}async function op(t,e){const r={token:await hT(t,e),createTime:Date.now(),subscriptionOptions:e};return await ef(t,r),r.token}async function vT(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:iT(e)})}function wT(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,o=e.p256dh===t.p256dh;return n&&r&&i&&o}/**
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
 */function ap(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return _T(e,t),ST(e,t),ET(e,t),e}function _T(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const o=e.notification.icon;o&&(t.notification.icon=o)}function ST(t,e){e.data&&(t.data=e.data)}function ET(t,e){var i,o,a,c;if(!e.fcmOptions&&!((i=e.notification)!=null&&i.click_action))return;t.fcmOptions={};const n=((o=e.fcmOptions)==null?void 0:o.link)??((a=e.notification)==null?void 0:a.click_action);n&&(t.fcmOptions.link=n);const r=(c=e.fcmOptions)==null?void 0:c.analytics_label;r&&(t.fcmOptions.analyticsLabel=r)}/**
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
 */function IT(t){return typeof t=="object"&&!!t&&Hy in t}/**
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
 */function TT(t){if(!t||!t.options)throw xl("App Configuration Object");if(!t.name)throw xl("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw xl(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function xl(t){return Me.create("missing-app-config-values",{valueName:t})}/**
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
 */class kT{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=TT(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function CT(t){try{t.swRegistration=await navigator.serviceWorker.register(YI,{scope:ZI}),t.swRegistration.update().catch(()=>{}),await AT(t.swRegistration)}catch(e){throw Me.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function AT(t){return new Promise((e,n)=>{const r=setTimeout(()=>n(new Error(`Service worker not registered after ${rp} ms`)),rp),i=t.installing||t.waiting;t.active?(clearTimeout(r),e()):i?i.onstatechange=o=>{var a;((a=o.target)==null?void 0:a.state)==="activated"&&(i.onstatechange=null,clearTimeout(r),e())}:(clearTimeout(r),n(new Error("No incoming service worker found.")))})}/**
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
 */async function PT(t,e){if(!e&&!t.swRegistration&&await CT(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Me.create("invalid-sw-registration");t.swRegistration=e}}/**
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
 */async function NT(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=By)}/**
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
 */async function RT(t,e){if(!navigator)throw Me.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Me.create("permission-blocked");return await NT(t,e==null?void 0:e.vapidKey),await PT(t,e==null?void 0:e.serviceWorkerRegistration),mT(t)}/**
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
 */async function OT(t,e,n){const r=DT(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[Hy],message_name:n[tT],message_time:n[nT],message_device_time:Math.floor(Date.now()/1e3)})}function DT(t){switch(t){case gs.NOTIFICATION_CLICKED:return"notification_open";case gs.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function xT(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===gs.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(ap(n)):t.onMessageHandler.next(ap(n)));const r=n.data;IT(r)&&r[rT]==="1"&&await OT(t,n.messageType,r)}const lp="@firebase/messaging",up="0.12.23";/**
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
 */const LT=t=>{const e=new kT(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>xT(e,n)),e},MT=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>RT(e,r)}};function UT(){Rt(new mt("messaging",LT,"PUBLIC")),Rt(new mt("messaging-internal",MT,"PRIVATE")),nt(lp,up),nt(lp,up,"esm2020")}/**
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
 */async function qy(){try{await Lm()}catch{return!1}return typeof window<"u"&&xm()&&_1()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function bT(t=Mc()){return qy().then(e=>{if(!e)throw Me.create("unsupported-browser")},e=>{throw Me.create("indexed-db-unsupported")}),ni(gr(t),"messaging").getImmediate()}UT();const FT={apiKey:"AIzaSyBB8lfGEwxX18XWyvKn9KNT2Yt6rFVGwIo",authDomain:"coffee-delivery-app-b29f8.firebaseapp.com",projectId:"coffee-delivery-app-b29f8",storageBucket:"coffee-delivery-app-b29f8.firebasestorage.app",messagingSenderId:"545597275258",appId:"1:545597275258:web:b3eb28b65cc7b534fdcfc3"},rf=bm(FT);OE(rf);lI(rf);(async()=>await qy()&&bT(rf))();le.createContext(void 0);let jT={data:""},VT=t=>{if(typeof window=="object"){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||jT},$T=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,zT=/\/\*[^]*?\*\/|  +/g,cp=/\n+/g,yn=(t,e)=>{let n="",r="",i="";for(let o in t){let a=t[o];o[0]=="@"?o[1]=="i"?n=o+" "+a+";":r+=o[1]=="f"?yn(a,o):o+"{"+yn(a,o[1]=="k"?"":e)+"}":typeof a=="object"?r+=yn(a,e?e.replace(/([^,])+/g,c=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,f=>/&/.test(f)?f.replace(/&/g,c):c?c+" "+f:f)):o):a!=null&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=yn.p?yn.p(o,a):o+":"+a+";")}return n+(e&&i?e+"{"+i+"}":i)+r},xt={},Xy=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+Xy(t[n]);return e}return t},BT=(t,e,n,r,i)=>{let o=Xy(t),a=xt[o]||(xt[o]=(f=>{let h=0,k=11;for(;h<f.length;)k=101*k+f.charCodeAt(h++)>>>0;return"go"+k})(o));if(!xt[a]){let f=o!==t?t:(h=>{let k,I,S=[{}];for(;k=$T.exec(h.replace(zT,""));)k[4]?S.shift():k[3]?(I=k[3].replace(cp," ").trim(),S.unshift(S[0][I]=S[0][I]||{})):S[0][k[1]]=k[2].replace(cp," ").trim();return S[0]})(t);xt[a]=yn(i?{["@keyframes "+a]:f}:f,n?"":"."+a)}let c=n&&xt.g?xt.g:null;return n&&(xt.g=xt[a]),((f,h,k,I)=>{I?h.data=h.data.replace(I,f):h.data.indexOf(f)===-1&&(h.data=k?f+h.data:h.data+f)})(xt[a],e,r,c),a},HT=(t,e,n)=>t.reduce((r,i,o)=>{let a=e[o];if(a&&a.call){let c=a(n),f=c&&c.props&&c.props.className||/^go/.test(c)&&c;a=f?"."+f:c&&typeof c=="object"?c.props?"":yn(c,""):c===!1?"":c}return r+i+(a??"")},"");function Ia(t){let e=this||{},n=t.call?t(e.p):t;return BT(n.unshift?n.raw?HT(n,[].slice.call(arguments,1),e.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(e.p):i),{}):n,VT(e.target),e.g,e.o,e.k)}let Jy,Uu,bu;Ia.bind({g:1});let Qt=Ia.bind({k:1});function WT(t,e,n,r){yn.p=e,Jy=t,Uu=n,bu=r}function Mn(t,e){let n=this||{};return function(){let r=arguments;function i(o,a){let c=Object.assign({},o),f=c.className||i.className;n.p=Object.assign({theme:Uu&&Uu()},c),n.o=/ *go\d+/.test(f),c.className=Ia.apply(n,r)+(f?" "+f:"");let h=t;return t[0]&&(h=c.as||t,delete c.as),bu&&h[0]&&bu(c),Jy(h,c)}return i}}var KT=t=>typeof t=="function",GT=(t,e)=>KT(t)?t(e):t,qT=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),XT=Qt`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,JT=Qt`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,QT=Qt`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,YT=Mn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${XT} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${JT} 0.15s ease-out forwards;
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
    animation: ${QT} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,ZT=Qt`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,ek=Mn("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${ZT} 1s linear infinite;
`,tk=Qt`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,nk=Qt`
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
}`,rk=Mn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${tk} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${nk} 0.2s ease-out forwards;
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
`,ik=Mn("div")`
  position: absolute;
`,sk=Mn("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,ok=Qt`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ak=Mn("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${ok} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,lk=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?le.createElement(ak,null,e):e:n==="blank"?null:le.createElement(sk,null,le.createElement(ek,{...r}),n!=="loading"&&le.createElement(ik,null,n==="error"?le.createElement(YT,{...r}):le.createElement(rk,{...r})))},uk=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ck=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,fk="0%{opacity:0;} 100%{opacity:1;}",hk="0%{opacity:1;} 100%{opacity:0;}",dk=Mn("div")`
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
`,pk=Mn("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,gk=(t,e)=>{let n=t.includes("top")?1:-1,[r,i]=qT()?[fk,hk]:[uk(n),ck(n)];return{animation:e?`${Qt(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Qt(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}};le.memo(({toast:t,position:e,style:n,children:r})=>{let i=t.height?gk(t.position||e||"top-center",t.visible):{opacity:0},o=le.createElement(lk,{toast:t}),a=le.createElement(pk,{...t.ariaProps},GT(t.message,t));return le.createElement(dk,{className:t.className,style:{...i,...n,...t.style}},typeof r=="function"?r({icon:o,message:a}):le.createElement(le.Fragment,null,o,a))});WT(le.createElement);Ia`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mk=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),yk=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase()),fp=t=>{const e=yk(t);return e.charAt(0).toUpperCase()+e.slice(1)},Qy=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim(),vk=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var wk={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _k=le.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:a,...c},f)=>le.createElement("svg",{ref:f,...wk,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:Qy("lucide",i),...!o&&!vk(c)&&{"aria-hidden":"true"},...c},[...a.map(([h,k])=>le.createElement(h,k)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=(t,e)=>{const n=le.forwardRef(({className:r,...i},o)=>le.createElement(_k,{ref:o,iconNode:e,className:Qy(`lucide-${mk(fp(t))}`,`lucide-${t}`,r),...i}));return n.displayName=fp(t),n};/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sk=[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]],Ek=Yy("coffee",Sk);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ik=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],Tk=Yy("wrench",Ik);function kk(){return Se.jsx("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4",children:Se.jsxs("div",{className:"max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center",children:[Se.jsx("div",{className:"flex justify-center mb-6",children:Se.jsxs("div",{className:"relative",children:[Se.jsx(Ek,{className:"w-24 h-24 text-amber-600",strokeWidth:1.5}),Se.jsx(Tk,{className:"w-10 h-10 text-gray-700 absolute -bottom-2 -right-2 animate-bounce",strokeWidth:2})]})}),Se.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-4",children:"En mantenimiento"}),Se.jsx("p",{className:"text-gray-700 mb-8 text-lg leading-relaxed",children:"Jose Alberto siente mucho lo sucedido... Mientras tanto, su programador favorito esta trabajando en mejoras para evitar inconsistencias como la del dia de hoy."}),Se.jsxs("div",{className:"bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6",children:[Se.jsx("p",{className:"text-amber-900 font-semibold text-lg",children:"Por favor, vuelva mañana."}),Se.jsx("p",{className:"text-amber-700 text-sm mt-2",children:"Gracias por su paciencia"})]}),Se.jsxs("div",{className:"flex items-center justify-center space-x-2 text-sm text-gray-600",children:[Se.jsx("div",{className:"w-2 h-2 bg-amber-600 rounded-full animate-pulse"}),Se.jsx("span",{className:"font-medium",children:"Siga salvando vidas mientras tanto"})]})]})})}function Ck(){return Se.jsx(kk,{})}Tm(document.getElementById("root")).render(Se.jsx(le.StrictMode,{children:Se.jsx(Ck,{})}));"serviceWorker"in navigator&&navigator.serviceWorker.register("/firebase-messaging-sw.js").then(t=>{console.log("Service Worker registered successfully:",t.scope)}).catch(t=>{console.error("Service Worker registration failed:",t)});
