function OS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function O_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var V_={exports:{}},Ju={},L_={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wa=Symbol.for("react.element"),VS=Symbol.for("react.portal"),LS=Symbol.for("react.fragment"),MS=Symbol.for("react.strict_mode"),FS=Symbol.for("react.profiler"),jS=Symbol.for("react.provider"),US=Symbol.for("react.context"),$S=Symbol.for("react.forward_ref"),BS=Symbol.for("react.suspense"),zS=Symbol.for("react.memo"),WS=Symbol.for("react.lazy"),Dg=Symbol.iterator;function qS(t){return t===null||typeof t!="object"?null:(t=Dg&&t[Dg]||t["@@iterator"],typeof t=="function"?t:null)}var M_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F_=Object.assign,j_={};function Os(t,e,n){this.props=t,this.context=e,this.refs=j_,this.updater=n||M_}Os.prototype.isReactComponent={};Os.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Os.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function U_(){}U_.prototype=Os.prototype;function xf(t,e,n){this.props=t,this.context=e,this.refs=j_,this.updater=n||M_}var Nf=xf.prototype=new U_;Nf.constructor=xf;F_(Nf,Os.prototype);Nf.isPureReactComponent=!0;var bg=Array.isArray,$_=Object.prototype.hasOwnProperty,Df={current:null},B_={key:!0,ref:!0,__self:!0,__source:!0};function z_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)$_.call(e,r)&&!B_.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:wa,type:t,key:s,ref:o,props:i,_owner:Df.current}}function HS(t,e){return{$$typeof:wa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function bf(t){return typeof t=="object"&&t!==null&&t.$$typeof===wa}function GS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Og=/\/+/g;function uh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?GS(""+t.key):e.toString(36)}function Pl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case wa:case VS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+uh(o,0):r,bg(i)?(n="",t!=null&&(n=t.replace(Og,"$&/")+"/"),Pl(i,e,n,"",function(c){return c})):i!=null&&(bf(i)&&(i=HS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Og,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",bg(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+uh(s,l);o+=Pl(s,e,n,u,i)}else if(u=qS(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+uh(s,l++),o+=Pl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function rl(t,e,n){if(t==null)return t;var r=[],i=0;return Pl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function KS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Et={current:null},kl={transition:null},QS={ReactCurrentDispatcher:Et,ReactCurrentBatchConfig:kl,ReactCurrentOwner:Df};function W_(){throw Error("act(...) is not supported in production builds of React.")}te.Children={map:rl,forEach:function(t,e,n){rl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return rl(t,function(){e++}),e},toArray:function(t){return rl(t,function(e){return e})||[]},only:function(t){if(!bf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};te.Component=Os;te.Fragment=LS;te.Profiler=FS;te.PureComponent=xf;te.StrictMode=MS;te.Suspense=BS;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=QS;te.act=W_;te.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=F_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Df.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)$_.call(e,u)&&!B_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:wa,type:t.type,key:i,ref:s,props:r,_owner:o}};te.createContext=function(t){return t={$$typeof:US,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:jS,_context:t},t.Consumer=t};te.createElement=z_;te.createFactory=function(t){var e=z_.bind(null,t);return e.type=t,e};te.createRef=function(){return{current:null}};te.forwardRef=function(t){return{$$typeof:$S,render:t}};te.isValidElement=bf;te.lazy=function(t){return{$$typeof:WS,_payload:{_status:-1,_result:t},_init:KS}};te.memo=function(t,e){return{$$typeof:zS,type:t,compare:e===void 0?null:e}};te.startTransition=function(t){var e=kl.transition;kl.transition={};try{t()}finally{kl.transition=e}};te.unstable_act=W_;te.useCallback=function(t,e){return Et.current.useCallback(t,e)};te.useContext=function(t){return Et.current.useContext(t)};te.useDebugValue=function(){};te.useDeferredValue=function(t){return Et.current.useDeferredValue(t)};te.useEffect=function(t,e){return Et.current.useEffect(t,e)};te.useId=function(){return Et.current.useId()};te.useImperativeHandle=function(t,e,n){return Et.current.useImperativeHandle(t,e,n)};te.useInsertionEffect=function(t,e){return Et.current.useInsertionEffect(t,e)};te.useLayoutEffect=function(t,e){return Et.current.useLayoutEffect(t,e)};te.useMemo=function(t,e){return Et.current.useMemo(t,e)};te.useReducer=function(t,e,n){return Et.current.useReducer(t,e,n)};te.useRef=function(t){return Et.current.useRef(t)};te.useState=function(t){return Et.current.useState(t)};te.useSyncExternalStore=function(t,e,n){return Et.current.useSyncExternalStore(t,e,n)};te.useTransition=function(){return Et.current.useTransition()};te.version="18.3.1";L_.exports=te;var L=L_.exports;const Ne=O_(L),YS=OS({__proto__:null,default:Ne},[L]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var XS=L,JS=Symbol.for("react.element"),ZS=Symbol.for("react.fragment"),e1=Object.prototype.hasOwnProperty,t1=XS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n1={key:!0,ref:!0,__self:!0,__source:!0};function q_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)e1.call(e,r)&&!n1.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:JS,type:t,key:s,ref:o,props:i,_owner:t1.current}}Ju.Fragment=ZS;Ju.jsx=q_;Ju.jsxs=q_;V_.exports=Ju;var S=V_.exports,Zh={},H_={exports:{}},zt={},G_={exports:{}},K_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,H){var J=B.length;B.push(H);e:for(;0<J;){var he=J-1>>>1,ne=B[he];if(0<i(ne,H))B[he]=H,B[J]=ne,J=he;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var H=B[0],J=B.pop();if(J!==H){B[0]=J;e:for(var he=0,ne=B.length,we=ne>>>1;he<we;){var bt=2*(he+1)-1,St=B[bt],pt=bt+1,At=B[pt];if(0>i(St,J))pt<ne&&0>i(At,St)?(B[he]=At,B[pt]=J,he=pt):(B[he]=St,B[bt]=J,he=bt);else if(pt<ne&&0>i(At,J))B[he]=At,B[pt]=J,he=pt;else break e}}return H}function i(B,H){var J=B.sortIndex-H.sortIndex;return J!==0?J:B.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,p=null,m=3,E=!1,R=!1,P=!1,x=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(B){for(var H=n(c);H!==null;){if(H.callback===null)r(c);else if(H.startTime<=B)r(c),H.sortIndex=H.expirationTime,e(u,H);else break;H=n(c)}}function b(B){if(P=!1,T(B),!R)if(n(u)!==null)R=!0,qr(F);else{var H=n(c);H!==null&&Dt(b,H.startTime-B)}}function F(B,H){R=!1,P&&(P=!1,w(y),y=-1),E=!0;var J=m;try{for(T(H),p=n(u);p!==null&&(!(p.expirationTime>H)||B&&!k());){var he=p.callback;if(typeof he=="function"){p.callback=null,m=p.priorityLevel;var ne=he(p.expirationTime<=H);H=t.unstable_now(),typeof ne=="function"?p.callback=ne:p===n(u)&&r(u),T(H)}else r(u);p=n(u)}if(p!==null)var we=!0;else{var bt=n(c);bt!==null&&Dt(b,bt.startTime-H),we=!1}return we}finally{p=null,m=J,E=!1}}var V=!1,_=null,y=-1,I=5,A=-1;function k(){return!(t.unstable_now()-A<I)}function N(){if(_!==null){var B=t.unstable_now();A=B;var H=!0;try{H=_(!0,B)}finally{H?C():(V=!1,_=null)}}else V=!1}var C;if(typeof v=="function")C=function(){v(N)};else if(typeof MessageChannel<"u"){var It=new MessageChannel,Rn=It.port2;It.port1.onmessage=N,C=function(){Rn.postMessage(null)}}else C=function(){x(N,0)};function qr(B){_=B,V||(V=!0,C())}function Dt(B,H){y=x(function(){B(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){R||E||(R=!0,qr(F))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(m){case 1:case 2:case 3:var H=3;break;default:H=m}var J=m;m=H;try{return B()}finally{m=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,H){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var J=m;m=B;try{return H()}finally{m=J}},t.unstable_scheduleCallback=function(B,H,J){var he=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?he+J:he):J=he,B){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=J+ne,B={id:d++,callback:H,priorityLevel:B,startTime:J,expirationTime:ne,sortIndex:-1},J>he?(B.sortIndex=J,e(c,B),n(u)===null&&B===n(c)&&(P?(w(y),y=-1):P=!0,Dt(b,J-he))):(B.sortIndex=ne,e(u,B),R||E||(R=!0,qr(F))),B},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(B){var H=m;return function(){var J=m;m=H;try{return B.apply(this,arguments)}finally{m=J}}}})(K_);G_.exports=K_;var r1=G_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i1=L,Bt=r1;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Q_=new Set,Wo={};function Ci(t,e){fs(t,e),fs(t+"Capture",e)}function fs(t,e){for(Wo[t]=e,t=0;t<e.length;t++)Q_.add(e[t])}var zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ed=Object.prototype.hasOwnProperty,s1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vg={},Lg={};function o1(t){return ed.call(Lg,t)?!0:ed.call(Vg,t)?!1:s1.test(t)?Lg[t]=!0:(Vg[t]=!0,!1)}function a1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function l1(t,e,n,r){if(e===null||typeof e>"u"||a1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Tt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var tt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){tt[t]=new Tt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];tt[e]=new Tt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){tt[t]=new Tt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){tt[t]=new Tt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){tt[t]=new Tt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){tt[t]=new Tt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){tt[t]=new Tt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){tt[t]=new Tt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){tt[t]=new Tt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Of=/[\-:]([a-z])/g;function Vf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Of,Vf);tt[e]=new Tt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Of,Vf);tt[e]=new Tt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Of,Vf);tt[e]=new Tt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){tt[t]=new Tt(t,1,!1,t.toLowerCase(),null,!1,!1)});tt.xlinkHref=new Tt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){tt[t]=new Tt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Lf(t,e,n,r){var i=tt.hasOwnProperty(e)?tt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(l1(e,n,i,r)&&(n=null),r||i===null?o1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Zn=i1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,il=Symbol.for("react.element"),$i=Symbol.for("react.portal"),Bi=Symbol.for("react.fragment"),Mf=Symbol.for("react.strict_mode"),td=Symbol.for("react.profiler"),Y_=Symbol.for("react.provider"),X_=Symbol.for("react.context"),Ff=Symbol.for("react.forward_ref"),nd=Symbol.for("react.suspense"),rd=Symbol.for("react.suspense_list"),jf=Symbol.for("react.memo"),cr=Symbol.for("react.lazy"),J_=Symbol.for("react.offscreen"),Mg=Symbol.iterator;function ao(t){return t===null||typeof t!="object"?null:(t=Mg&&t[Mg]||t["@@iterator"],typeof t=="function"?t:null)}var Se=Object.assign,ch;function vo(t){if(ch===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ch=e&&e[1]||""}return`
`+ch+t}var hh=!1;function dh(t,e){if(!t||hh)return"";hh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{hh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?vo(t):""}function u1(t){switch(t.tag){case 5:return vo(t.type);case 16:return vo("Lazy");case 13:return vo("Suspense");case 19:return vo("SuspenseList");case 0:case 2:case 15:return t=dh(t.type,!1),t;case 11:return t=dh(t.type.render,!1),t;case 1:return t=dh(t.type,!0),t;default:return""}}function id(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Bi:return"Fragment";case $i:return"Portal";case td:return"Profiler";case Mf:return"StrictMode";case nd:return"Suspense";case rd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case X_:return(t.displayName||"Context")+".Consumer";case Y_:return(t._context.displayName||"Context")+".Provider";case Ff:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case jf:return e=t.displayName||null,e!==null?e:id(t.type)||"Memo";case cr:e=t._payload,t=t._init;try{return id(t(e))}catch{}}return null}function c1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return id(e);case 8:return e===Mf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Vr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Z_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function h1(t){var e=Z_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function sl(t){t._valueTracker||(t._valueTracker=h1(t))}function ew(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Z_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function eu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function sd(t,e){var n=e.checked;return Se({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Fg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Vr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function tw(t,e){e=e.checked,e!=null&&Lf(t,"checked",e,!1)}function od(t,e){tw(t,e);var n=Vr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ad(t,e.type,n):e.hasOwnProperty("defaultValue")&&ad(t,e.type,Vr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function jg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ad(t,e,n){(e!=="number"||eu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var _o=Array.isArray;function ns(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Vr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ld(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return Se({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ug(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(_o(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Vr(n)}}function nw(t,e){var n=Vr(e.value),r=Vr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function $g(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function rw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ud(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?rw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ol,iw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ol=ol||document.createElement("div"),ol.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ol.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function qo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Po={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},d1=["Webkit","ms","Moz","O"];Object.keys(Po).forEach(function(t){d1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Po[e]=Po[t]})});function sw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Po.hasOwnProperty(t)&&Po[t]?(""+e).trim():e+"px"}function ow(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=sw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var f1=Se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function cd(t,e){if(e){if(f1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function hd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dd=null;function Uf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var fd=null,rs=null,is=null;function Bg(t){if(t=Ia(t)){if(typeof fd!="function")throw Error(U(280));var e=t.stateNode;e&&(e=rc(e),fd(t.stateNode,t.type,e))}}function aw(t){rs?is?is.push(t):is=[t]:rs=t}function lw(){if(rs){var t=rs,e=is;if(is=rs=null,Bg(t),e)for(t=0;t<e.length;t++)Bg(e[t])}}function uw(t,e){return t(e)}function cw(){}var fh=!1;function hw(t,e,n){if(fh)return t(e,n);fh=!0;try{return uw(t,e,n)}finally{fh=!1,(rs!==null||is!==null)&&(cw(),lw())}}function Ho(t,e){var n=t.stateNode;if(n===null)return null;var r=rc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var pd=!1;if(zn)try{var lo={};Object.defineProperty(lo,"passive",{get:function(){pd=!0}}),window.addEventListener("test",lo,lo),window.removeEventListener("test",lo,lo)}catch{pd=!1}function p1(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var ko=!1,tu=null,nu=!1,md=null,m1={onError:function(t){ko=!0,tu=t}};function g1(t,e,n,r,i,s,o,l,u){ko=!1,tu=null,p1.apply(m1,arguments)}function y1(t,e,n,r,i,s,o,l,u){if(g1.apply(this,arguments),ko){if(ko){var c=tu;ko=!1,tu=null}else throw Error(U(198));nu||(nu=!0,md=c)}}function Ri(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function dw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function zg(t){if(Ri(t)!==t)throw Error(U(188))}function v1(t){var e=t.alternate;if(!e){if(e=Ri(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return zg(i),t;if(s===r)return zg(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function fw(t){return t=v1(t),t!==null?pw(t):null}function pw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=pw(t);if(e!==null)return e;t=t.sibling}return null}var mw=Bt.unstable_scheduleCallback,Wg=Bt.unstable_cancelCallback,_1=Bt.unstable_shouldYield,w1=Bt.unstable_requestPaint,xe=Bt.unstable_now,E1=Bt.unstable_getCurrentPriorityLevel,$f=Bt.unstable_ImmediatePriority,gw=Bt.unstable_UserBlockingPriority,ru=Bt.unstable_NormalPriority,T1=Bt.unstable_LowPriority,yw=Bt.unstable_IdlePriority,Zu=null,vn=null;function I1(t){if(vn&&typeof vn.onCommitFiberRoot=="function")try{vn.onCommitFiberRoot(Zu,t,void 0,(t.current.flags&128)===128)}catch{}}var an=Math.clz32?Math.clz32:C1,S1=Math.log,A1=Math.LN2;function C1(t){return t>>>=0,t===0?32:31-(S1(t)/A1|0)|0}var al=64,ll=4194304;function wo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function iu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=wo(l):(s&=o,s!==0&&(r=wo(s)))}else o=n&~i,o!==0?r=wo(o):s!==0&&(r=wo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-an(e),i=1<<n,r|=t[n],e&=~i;return r}function R1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function P1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-an(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=R1(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function gd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function vw(){var t=al;return al<<=1,!(al&4194240)&&(al=64),t}function ph(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ea(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-an(e),t[e]=n}function k1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-an(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Bf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-an(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var de=0;function _w(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ww,zf,Ew,Tw,Iw,yd=!1,ul=[],Er=null,Tr=null,Ir=null,Go=new Map,Ko=new Map,dr=[],x1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qg(t,e){switch(t){case"focusin":case"focusout":Er=null;break;case"dragenter":case"dragleave":Tr=null;break;case"mouseover":case"mouseout":Ir=null;break;case"pointerover":case"pointerout":Go.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ko.delete(e.pointerId)}}function uo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ia(e),e!==null&&zf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function N1(t,e,n,r,i){switch(e){case"focusin":return Er=uo(Er,t,e,n,r,i),!0;case"dragenter":return Tr=uo(Tr,t,e,n,r,i),!0;case"mouseover":return Ir=uo(Ir,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Go.set(s,uo(Go.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ko.set(s,uo(Ko.get(s)||null,t,e,n,r,i)),!0}return!1}function Sw(t){var e=ti(t.target);if(e!==null){var n=Ri(e);if(n!==null){if(e=n.tag,e===13){if(e=dw(n),e!==null){t.blockedOn=e,Iw(t.priority,function(){Ew(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function xl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=vd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);dd=r,n.target.dispatchEvent(r),dd=null}else return e=Ia(n),e!==null&&zf(e),t.blockedOn=n,!1;e.shift()}return!0}function Hg(t,e,n){xl(t)&&n.delete(e)}function D1(){yd=!1,Er!==null&&xl(Er)&&(Er=null),Tr!==null&&xl(Tr)&&(Tr=null),Ir!==null&&xl(Ir)&&(Ir=null),Go.forEach(Hg),Ko.forEach(Hg)}function co(t,e){t.blockedOn===e&&(t.blockedOn=null,yd||(yd=!0,Bt.unstable_scheduleCallback(Bt.unstable_NormalPriority,D1)))}function Qo(t){function e(i){return co(i,t)}if(0<ul.length){co(ul[0],t);for(var n=1;n<ul.length;n++){var r=ul[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Er!==null&&co(Er,t),Tr!==null&&co(Tr,t),Ir!==null&&co(Ir,t),Go.forEach(e),Ko.forEach(e),n=0;n<dr.length;n++)r=dr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<dr.length&&(n=dr[0],n.blockedOn===null);)Sw(n),n.blockedOn===null&&dr.shift()}var ss=Zn.ReactCurrentBatchConfig,su=!0;function b1(t,e,n,r){var i=de,s=ss.transition;ss.transition=null;try{de=1,Wf(t,e,n,r)}finally{de=i,ss.transition=s}}function O1(t,e,n,r){var i=de,s=ss.transition;ss.transition=null;try{de=4,Wf(t,e,n,r)}finally{de=i,ss.transition=s}}function Wf(t,e,n,r){if(su){var i=vd(t,e,n,r);if(i===null)Sh(t,e,r,ou,n),qg(t,r);else if(N1(i,t,e,n,r))r.stopPropagation();else if(qg(t,r),e&4&&-1<x1.indexOf(t)){for(;i!==null;){var s=Ia(i);if(s!==null&&ww(s),s=vd(t,e,n,r),s===null&&Sh(t,e,r,ou,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Sh(t,e,r,null,n)}}var ou=null;function vd(t,e,n,r){if(ou=null,t=Uf(r),t=ti(t),t!==null)if(e=Ri(t),e===null)t=null;else if(n=e.tag,n===13){if(t=dw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ou=t,null}function Aw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(E1()){case $f:return 1;case gw:return 4;case ru:case T1:return 16;case yw:return 536870912;default:return 16}default:return 16}}var yr=null,qf=null,Nl=null;function Cw(){if(Nl)return Nl;var t,e=qf,n=e.length,r,i="value"in yr?yr.value:yr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Nl=i.slice(t,1<r?1-r:void 0)}function Dl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function cl(){return!0}function Gg(){return!1}function Wt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?cl:Gg,this.isPropagationStopped=Gg,this}return Se(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=cl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=cl)},persist:function(){},isPersistent:cl}),e}var Vs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hf=Wt(Vs),Ta=Se({},Vs,{view:0,detail:0}),V1=Wt(Ta),mh,gh,ho,ec=Se({},Ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ho&&(ho&&t.type==="mousemove"?(mh=t.screenX-ho.screenX,gh=t.screenY-ho.screenY):gh=mh=0,ho=t),mh)},movementY:function(t){return"movementY"in t?t.movementY:gh}}),Kg=Wt(ec),L1=Se({},ec,{dataTransfer:0}),M1=Wt(L1),F1=Se({},Ta,{relatedTarget:0}),yh=Wt(F1),j1=Se({},Vs,{animationName:0,elapsedTime:0,pseudoElement:0}),U1=Wt(j1),$1=Se({},Vs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),B1=Wt($1),z1=Se({},Vs,{data:0}),Qg=Wt(z1),W1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},q1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},H1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function G1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=H1[t])?!!e[t]:!1}function Gf(){return G1}var K1=Se({},Ta,{key:function(t){if(t.key){var e=W1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Dl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?q1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gf,charCode:function(t){return t.type==="keypress"?Dl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Dl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Q1=Wt(K1),Y1=Se({},ec,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yg=Wt(Y1),X1=Se({},Ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gf}),J1=Wt(X1),Z1=Se({},Vs,{propertyName:0,elapsedTime:0,pseudoElement:0}),eA=Wt(Z1),tA=Se({},ec,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),nA=Wt(tA),rA=[9,13,27,32],Kf=zn&&"CompositionEvent"in window,xo=null;zn&&"documentMode"in document&&(xo=document.documentMode);var iA=zn&&"TextEvent"in window&&!xo,Rw=zn&&(!Kf||xo&&8<xo&&11>=xo),Xg=" ",Jg=!1;function Pw(t,e){switch(t){case"keyup":return rA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var zi=!1;function sA(t,e){switch(t){case"compositionend":return kw(e);case"keypress":return e.which!==32?null:(Jg=!0,Xg);case"textInput":return t=e.data,t===Xg&&Jg?null:t;default:return null}}function oA(t,e){if(zi)return t==="compositionend"||!Kf&&Pw(t,e)?(t=Cw(),Nl=qf=yr=null,zi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Rw&&e.locale!=="ko"?null:e.data;default:return null}}var aA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!aA[t.type]:e==="textarea"}function xw(t,e,n,r){aw(r),e=au(e,"onChange"),0<e.length&&(n=new Hf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var No=null,Yo=null;function lA(t){$w(t,0)}function tc(t){var e=Hi(t);if(ew(e))return t}function uA(t,e){if(t==="change")return e}var Nw=!1;if(zn){var vh;if(zn){var _h="oninput"in document;if(!_h){var ey=document.createElement("div");ey.setAttribute("oninput","return;"),_h=typeof ey.oninput=="function"}vh=_h}else vh=!1;Nw=vh&&(!document.documentMode||9<document.documentMode)}function ty(){No&&(No.detachEvent("onpropertychange",Dw),Yo=No=null)}function Dw(t){if(t.propertyName==="value"&&tc(Yo)){var e=[];xw(e,Yo,t,Uf(t)),hw(lA,e)}}function cA(t,e,n){t==="focusin"?(ty(),No=e,Yo=n,No.attachEvent("onpropertychange",Dw)):t==="focusout"&&ty()}function hA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return tc(Yo)}function dA(t,e){if(t==="click")return tc(e)}function fA(t,e){if(t==="input"||t==="change")return tc(e)}function pA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var cn=typeof Object.is=="function"?Object.is:pA;function Xo(t,e){if(cn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ed.call(e,i)||!cn(t[i],e[i]))return!1}return!0}function ny(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ry(t,e){var n=ny(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ny(n)}}function bw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?bw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ow(){for(var t=window,e=eu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=eu(t.document)}return e}function Qf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function mA(t){var e=Ow(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&bw(n.ownerDocument.documentElement,n)){if(r!==null&&Qf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=ry(n,s);var o=ry(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var gA=zn&&"documentMode"in document&&11>=document.documentMode,Wi=null,_d=null,Do=null,wd=!1;function iy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wd||Wi==null||Wi!==eu(r)||(r=Wi,"selectionStart"in r&&Qf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Do&&Xo(Do,r)||(Do=r,r=au(_d,"onSelect"),0<r.length&&(e=new Hf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Wi)))}function hl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var qi={animationend:hl("Animation","AnimationEnd"),animationiteration:hl("Animation","AnimationIteration"),animationstart:hl("Animation","AnimationStart"),transitionend:hl("Transition","TransitionEnd")},wh={},Vw={};zn&&(Vw=document.createElement("div").style,"AnimationEvent"in window||(delete qi.animationend.animation,delete qi.animationiteration.animation,delete qi.animationstart.animation),"TransitionEvent"in window||delete qi.transitionend.transition);function nc(t){if(wh[t])return wh[t];if(!qi[t])return t;var e=qi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Vw)return wh[t]=e[n];return t}var Lw=nc("animationend"),Mw=nc("animationiteration"),Fw=nc("animationstart"),jw=nc("transitionend"),Uw=new Map,sy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ur(t,e){Uw.set(t,e),Ci(e,[t])}for(var Eh=0;Eh<sy.length;Eh++){var Th=sy[Eh],yA=Th.toLowerCase(),vA=Th[0].toUpperCase()+Th.slice(1);Ur(yA,"on"+vA)}Ur(Lw,"onAnimationEnd");Ur(Mw,"onAnimationIteration");Ur(Fw,"onAnimationStart");Ur("dblclick","onDoubleClick");Ur("focusin","onFocus");Ur("focusout","onBlur");Ur(jw,"onTransitionEnd");fs("onMouseEnter",["mouseout","mouseover"]);fs("onMouseLeave",["mouseout","mouseover"]);fs("onPointerEnter",["pointerout","pointerover"]);fs("onPointerLeave",["pointerout","pointerover"]);Ci("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ci("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ci("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ci("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ci("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ci("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_A=new Set("cancel close invalid load scroll toggle".split(" ").concat(Eo));function oy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,y1(r,e,void 0,t),t.currentTarget=null}function $w(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;oy(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;oy(i,l,c),s=u}}}if(nu)throw t=md,nu=!1,md=null,t}function ye(t,e){var n=e[Ad];n===void 0&&(n=e[Ad]=new Set);var r=t+"__bubble";n.has(r)||(Bw(e,t,2,!1),n.add(r))}function Ih(t,e,n){var r=0;e&&(r|=4),Bw(n,t,r,e)}var dl="_reactListening"+Math.random().toString(36).slice(2);function Jo(t){if(!t[dl]){t[dl]=!0,Q_.forEach(function(n){n!=="selectionchange"&&(_A.has(n)||Ih(n,!1,t),Ih(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[dl]||(e[dl]=!0,Ih("selectionchange",!1,e))}}function Bw(t,e,n,r){switch(Aw(e)){case 1:var i=b1;break;case 4:i=O1;break;default:i=Wf}n=i.bind(null,e,n,t),i=void 0,!pd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Sh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=ti(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}hw(function(){var c=s,d=Uf(n),p=[];e:{var m=Uw.get(t);if(m!==void 0){var E=Hf,R=t;switch(t){case"keypress":if(Dl(n)===0)break e;case"keydown":case"keyup":E=Q1;break;case"focusin":R="focus",E=yh;break;case"focusout":R="blur",E=yh;break;case"beforeblur":case"afterblur":E=yh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=Kg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=M1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=J1;break;case Lw:case Mw:case Fw:E=U1;break;case jw:E=eA;break;case"scroll":E=V1;break;case"wheel":E=nA;break;case"copy":case"cut":case"paste":E=B1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=Yg}var P=(e&4)!==0,x=!P&&t==="scroll",w=P?m!==null?m+"Capture":null:m;P=[];for(var v=c,T;v!==null;){T=v;var b=T.stateNode;if(T.tag===5&&b!==null&&(T=b,w!==null&&(b=Ho(v,w),b!=null&&P.push(Zo(v,b,T)))),x)break;v=v.return}0<P.length&&(m=new E(m,R,null,n,d),p.push({event:m,listeners:P}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",E=t==="mouseout"||t==="pointerout",m&&n!==dd&&(R=n.relatedTarget||n.fromElement)&&(ti(R)||R[Wn]))break e;if((E||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,E?(R=n.relatedTarget||n.toElement,E=c,R=R?ti(R):null,R!==null&&(x=Ri(R),R!==x||R.tag!==5&&R.tag!==6)&&(R=null)):(E=null,R=c),E!==R)){if(P=Kg,b="onMouseLeave",w="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(P=Yg,b="onPointerLeave",w="onPointerEnter",v="pointer"),x=E==null?m:Hi(E),T=R==null?m:Hi(R),m=new P(b,v+"leave",E,n,d),m.target=x,m.relatedTarget=T,b=null,ti(d)===c&&(P=new P(w,v+"enter",R,n,d),P.target=T,P.relatedTarget=x,b=P),x=b,E&&R)t:{for(P=E,w=R,v=0,T=P;T;T=Li(T))v++;for(T=0,b=w;b;b=Li(b))T++;for(;0<v-T;)P=Li(P),v--;for(;0<T-v;)w=Li(w),T--;for(;v--;){if(P===w||w!==null&&P===w.alternate)break t;P=Li(P),w=Li(w)}P=null}else P=null;E!==null&&ay(p,m,E,P,!1),R!==null&&x!==null&&ay(p,x,R,P,!0)}}e:{if(m=c?Hi(c):window,E=m.nodeName&&m.nodeName.toLowerCase(),E==="select"||E==="input"&&m.type==="file")var F=uA;else if(Zg(m))if(Nw)F=fA;else{F=hA;var V=cA}else(E=m.nodeName)&&E.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(F=dA);if(F&&(F=F(t,c))){xw(p,F,n,d);break e}V&&V(t,m,c),t==="focusout"&&(V=m._wrapperState)&&V.controlled&&m.type==="number"&&ad(m,"number",m.value)}switch(V=c?Hi(c):window,t){case"focusin":(Zg(V)||V.contentEditable==="true")&&(Wi=V,_d=c,Do=null);break;case"focusout":Do=_d=Wi=null;break;case"mousedown":wd=!0;break;case"contextmenu":case"mouseup":case"dragend":wd=!1,iy(p,n,d);break;case"selectionchange":if(gA)break;case"keydown":case"keyup":iy(p,n,d)}var _;if(Kf)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else zi?Pw(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Rw&&n.locale!=="ko"&&(zi||y!=="onCompositionStart"?y==="onCompositionEnd"&&zi&&(_=Cw()):(yr=d,qf="value"in yr?yr.value:yr.textContent,zi=!0)),V=au(c,y),0<V.length&&(y=new Qg(y,t,null,n,d),p.push({event:y,listeners:V}),_?y.data=_:(_=kw(n),_!==null&&(y.data=_)))),(_=iA?sA(t,n):oA(t,n))&&(c=au(c,"onBeforeInput"),0<c.length&&(d=new Qg("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=_))}$w(p,e)})}function Zo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function au(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ho(t,n),s!=null&&r.unshift(Zo(t,s,i)),s=Ho(t,e),s!=null&&r.push(Zo(t,s,i))),t=t.return}return r}function Li(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ay(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=Ho(n,s),u!=null&&o.unshift(Zo(n,u,l))):i||(u=Ho(n,s),u!=null&&o.push(Zo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var wA=/\r\n?/g,EA=/\u0000|\uFFFD/g;function ly(t){return(typeof t=="string"?t:""+t).replace(wA,`
`).replace(EA,"")}function fl(t,e,n){if(e=ly(e),ly(t)!==e&&n)throw Error(U(425))}function lu(){}var Ed=null,Td=null;function Id(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Sd=typeof setTimeout=="function"?setTimeout:void 0,TA=typeof clearTimeout=="function"?clearTimeout:void 0,uy=typeof Promise=="function"?Promise:void 0,IA=typeof queueMicrotask=="function"?queueMicrotask:typeof uy<"u"?function(t){return uy.resolve(null).then(t).catch(SA)}:Sd;function SA(t){setTimeout(function(){throw t})}function Ah(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Qo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Qo(e)}function Sr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function cy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ls=Math.random().toString(36).slice(2),gn="__reactFiber$"+Ls,ea="__reactProps$"+Ls,Wn="__reactContainer$"+Ls,Ad="__reactEvents$"+Ls,AA="__reactListeners$"+Ls,CA="__reactHandles$"+Ls;function ti(t){var e=t[gn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Wn]||n[gn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=cy(t);t!==null;){if(n=t[gn])return n;t=cy(t)}return e}t=n,n=t.parentNode}return null}function Ia(t){return t=t[gn]||t[Wn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Hi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function rc(t){return t[ea]||null}var Cd=[],Gi=-1;function $r(t){return{current:t}}function _e(t){0>Gi||(t.current=Cd[Gi],Cd[Gi]=null,Gi--)}function me(t,e){Gi++,Cd[Gi]=t.current,t.current=e}var Lr={},dt=$r(Lr),Pt=$r(!1),ci=Lr;function ps(t,e){var n=t.type.contextTypes;if(!n)return Lr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function kt(t){return t=t.childContextTypes,t!=null}function uu(){_e(Pt),_e(dt)}function hy(t,e,n){if(dt.current!==Lr)throw Error(U(168));me(dt,e),me(Pt,n)}function zw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,c1(t)||"Unknown",i));return Se({},n,r)}function cu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Lr,ci=dt.current,me(dt,t),me(Pt,Pt.current),!0}function dy(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=zw(t,e,ci),r.__reactInternalMemoizedMergedChildContext=t,_e(Pt),_e(dt),me(dt,t)):_e(Pt),me(Pt,n)}var On=null,ic=!1,Ch=!1;function Ww(t){On===null?On=[t]:On.push(t)}function RA(t){ic=!0,Ww(t)}function Br(){if(!Ch&&On!==null){Ch=!0;var t=0,e=de;try{var n=On;for(de=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}On=null,ic=!1}catch(i){throw On!==null&&(On=On.slice(t+1)),mw($f,Br),i}finally{de=e,Ch=!1}}return null}var Ki=[],Qi=0,hu=null,du=0,Gt=[],Kt=0,hi=null,Ln=1,Mn="";function Xr(t,e){Ki[Qi++]=du,Ki[Qi++]=hu,hu=t,du=e}function qw(t,e,n){Gt[Kt++]=Ln,Gt[Kt++]=Mn,Gt[Kt++]=hi,hi=t;var r=Ln;t=Mn;var i=32-an(r)-1;r&=~(1<<i),n+=1;var s=32-an(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ln=1<<32-an(e)+i|n<<i|r,Mn=s+t}else Ln=1<<s|n<<i|r,Mn=t}function Yf(t){t.return!==null&&(Xr(t,1),qw(t,1,0))}function Xf(t){for(;t===hu;)hu=Ki[--Qi],Ki[Qi]=null,du=Ki[--Qi],Ki[Qi]=null;for(;t===hi;)hi=Gt[--Kt],Gt[Kt]=null,Mn=Gt[--Kt],Gt[Kt]=null,Ln=Gt[--Kt],Gt[Kt]=null}var Ut=null,Ft=null,Ee=!1,on=null;function Hw(t,e){var n=Qt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function fy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ut=t,Ft=Sr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ut=t,Ft=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=hi!==null?{id:Ln,overflow:Mn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Qt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ut=t,Ft=null,!0):!1;default:return!1}}function Rd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Pd(t){if(Ee){var e=Ft;if(e){var n=e;if(!fy(t,e)){if(Rd(t))throw Error(U(418));e=Sr(n.nextSibling);var r=Ut;e&&fy(t,e)?Hw(r,n):(t.flags=t.flags&-4097|2,Ee=!1,Ut=t)}}else{if(Rd(t))throw Error(U(418));t.flags=t.flags&-4097|2,Ee=!1,Ut=t}}}function py(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ut=t}function pl(t){if(t!==Ut)return!1;if(!Ee)return py(t),Ee=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Id(t.type,t.memoizedProps)),e&&(e=Ft)){if(Rd(t))throw Gw(),Error(U(418));for(;e;)Hw(t,e),e=Sr(e.nextSibling)}if(py(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ft=Sr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ft=null}}else Ft=Ut?Sr(t.stateNode.nextSibling):null;return!0}function Gw(){for(var t=Ft;t;)t=Sr(t.nextSibling)}function ms(){Ft=Ut=null,Ee=!1}function Jf(t){on===null?on=[t]:on.push(t)}var PA=Zn.ReactCurrentBatchConfig;function fo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function ml(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function my(t){var e=t._init;return e(t._payload)}function Kw(t){function e(w,v){if(t){var T=w.deletions;T===null?(w.deletions=[v],w.flags|=16):T.push(v)}}function n(w,v){if(!t)return null;for(;v!==null;)e(w,v),v=v.sibling;return null}function r(w,v){for(w=new Map;v!==null;)v.key!==null?w.set(v.key,v):w.set(v.index,v),v=v.sibling;return w}function i(w,v){return w=Pr(w,v),w.index=0,w.sibling=null,w}function s(w,v,T){return w.index=T,t?(T=w.alternate,T!==null?(T=T.index,T<v?(w.flags|=2,v):T):(w.flags|=2,v)):(w.flags|=1048576,v)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function l(w,v,T,b){return v===null||v.tag!==6?(v=bh(T,w.mode,b),v.return=w,v):(v=i(v,T),v.return=w,v)}function u(w,v,T,b){var F=T.type;return F===Bi?d(w,v,T.props.children,b,T.key):v!==null&&(v.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===cr&&my(F)===v.type)?(b=i(v,T.props),b.ref=fo(w,v,T),b.return=w,b):(b=jl(T.type,T.key,T.props,null,w.mode,b),b.ref=fo(w,v,T),b.return=w,b)}function c(w,v,T,b){return v===null||v.tag!==4||v.stateNode.containerInfo!==T.containerInfo||v.stateNode.implementation!==T.implementation?(v=Oh(T,w.mode,b),v.return=w,v):(v=i(v,T.children||[]),v.return=w,v)}function d(w,v,T,b,F){return v===null||v.tag!==7?(v=ai(T,w.mode,b,F),v.return=w,v):(v=i(v,T),v.return=w,v)}function p(w,v,T){if(typeof v=="string"&&v!==""||typeof v=="number")return v=bh(""+v,w.mode,T),v.return=w,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case il:return T=jl(v.type,v.key,v.props,null,w.mode,T),T.ref=fo(w,null,v),T.return=w,T;case $i:return v=Oh(v,w.mode,T),v.return=w,v;case cr:var b=v._init;return p(w,b(v._payload),T)}if(_o(v)||ao(v))return v=ai(v,w.mode,T,null),v.return=w,v;ml(w,v)}return null}function m(w,v,T,b){var F=v!==null?v.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return F!==null?null:l(w,v,""+T,b);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case il:return T.key===F?u(w,v,T,b):null;case $i:return T.key===F?c(w,v,T,b):null;case cr:return F=T._init,m(w,v,F(T._payload),b)}if(_o(T)||ao(T))return F!==null?null:d(w,v,T,b,null);ml(w,T)}return null}function E(w,v,T,b,F){if(typeof b=="string"&&b!==""||typeof b=="number")return w=w.get(T)||null,l(v,w,""+b,F);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case il:return w=w.get(b.key===null?T:b.key)||null,u(v,w,b,F);case $i:return w=w.get(b.key===null?T:b.key)||null,c(v,w,b,F);case cr:var V=b._init;return E(w,v,T,V(b._payload),F)}if(_o(b)||ao(b))return w=w.get(T)||null,d(v,w,b,F,null);ml(v,b)}return null}function R(w,v,T,b){for(var F=null,V=null,_=v,y=v=0,I=null;_!==null&&y<T.length;y++){_.index>y?(I=_,_=null):I=_.sibling;var A=m(w,_,T[y],b);if(A===null){_===null&&(_=I);break}t&&_&&A.alternate===null&&e(w,_),v=s(A,v,y),V===null?F=A:V.sibling=A,V=A,_=I}if(y===T.length)return n(w,_),Ee&&Xr(w,y),F;if(_===null){for(;y<T.length;y++)_=p(w,T[y],b),_!==null&&(v=s(_,v,y),V===null?F=_:V.sibling=_,V=_);return Ee&&Xr(w,y),F}for(_=r(w,_);y<T.length;y++)I=E(_,w,y,T[y],b),I!==null&&(t&&I.alternate!==null&&_.delete(I.key===null?y:I.key),v=s(I,v,y),V===null?F=I:V.sibling=I,V=I);return t&&_.forEach(function(k){return e(w,k)}),Ee&&Xr(w,y),F}function P(w,v,T,b){var F=ao(T);if(typeof F!="function")throw Error(U(150));if(T=F.call(T),T==null)throw Error(U(151));for(var V=F=null,_=v,y=v=0,I=null,A=T.next();_!==null&&!A.done;y++,A=T.next()){_.index>y?(I=_,_=null):I=_.sibling;var k=m(w,_,A.value,b);if(k===null){_===null&&(_=I);break}t&&_&&k.alternate===null&&e(w,_),v=s(k,v,y),V===null?F=k:V.sibling=k,V=k,_=I}if(A.done)return n(w,_),Ee&&Xr(w,y),F;if(_===null){for(;!A.done;y++,A=T.next())A=p(w,A.value,b),A!==null&&(v=s(A,v,y),V===null?F=A:V.sibling=A,V=A);return Ee&&Xr(w,y),F}for(_=r(w,_);!A.done;y++,A=T.next())A=E(_,w,y,A.value,b),A!==null&&(t&&A.alternate!==null&&_.delete(A.key===null?y:A.key),v=s(A,v,y),V===null?F=A:V.sibling=A,V=A);return t&&_.forEach(function(N){return e(w,N)}),Ee&&Xr(w,y),F}function x(w,v,T,b){if(typeof T=="object"&&T!==null&&T.type===Bi&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case il:e:{for(var F=T.key,V=v;V!==null;){if(V.key===F){if(F=T.type,F===Bi){if(V.tag===7){n(w,V.sibling),v=i(V,T.props.children),v.return=w,w=v;break e}}else if(V.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===cr&&my(F)===V.type){n(w,V.sibling),v=i(V,T.props),v.ref=fo(w,V,T),v.return=w,w=v;break e}n(w,V);break}else e(w,V);V=V.sibling}T.type===Bi?(v=ai(T.props.children,w.mode,b,T.key),v.return=w,w=v):(b=jl(T.type,T.key,T.props,null,w.mode,b),b.ref=fo(w,v,T),b.return=w,w=b)}return o(w);case $i:e:{for(V=T.key;v!==null;){if(v.key===V)if(v.tag===4&&v.stateNode.containerInfo===T.containerInfo&&v.stateNode.implementation===T.implementation){n(w,v.sibling),v=i(v,T.children||[]),v.return=w,w=v;break e}else{n(w,v);break}else e(w,v);v=v.sibling}v=Oh(T,w.mode,b),v.return=w,w=v}return o(w);case cr:return V=T._init,x(w,v,V(T._payload),b)}if(_o(T))return R(w,v,T,b);if(ao(T))return P(w,v,T,b);ml(w,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,v!==null&&v.tag===6?(n(w,v.sibling),v=i(v,T),v.return=w,w=v):(n(w,v),v=bh(T,w.mode,b),v.return=w,w=v),o(w)):n(w,v)}return x}var gs=Kw(!0),Qw=Kw(!1),fu=$r(null),pu=null,Yi=null,Zf=null;function ep(){Zf=Yi=pu=null}function tp(t){var e=fu.current;_e(fu),t._currentValue=e}function kd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function os(t,e){pu=t,Zf=Yi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Rt=!0),t.firstContext=null)}function Xt(t){var e=t._currentValue;if(Zf!==t)if(t={context:t,memoizedValue:e,next:null},Yi===null){if(pu===null)throw Error(U(308));Yi=t,pu.dependencies={lanes:0,firstContext:t}}else Yi=Yi.next=t;return e}var ni=null;function np(t){ni===null?ni=[t]:ni.push(t)}function Yw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,np(e)):(n.next=i.next,i.next=n),e.interleaved=n,qn(t,r)}function qn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var hr=!1;function rp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function $n(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ar(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,qn(t,n)}return i=r.interleaved,i===null?(e.next=e,np(r)):(e.next=i.next,i.next=e),r.interleaved=e,qn(t,n)}function bl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Bf(t,n)}}function gy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function mu(t,e,n,r){var i=t.updateQueue;hr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,d=c=u=null,l=s;do{var m=l.lane,E=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:E,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var R=t,P=l;switch(m=e,E=n,P.tag){case 1:if(R=P.payload,typeof R=="function"){p=R.call(E,p,m);break e}p=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=P.payload,m=typeof R=="function"?R.call(E,p,m):R,m==null)break e;p=Se({},p,m);break e;case 2:hr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else E={eventTime:E,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=E,u=p):d=d.next=E,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);fi|=o,t.lanes=o,t.memoizedState=p}}function yy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var Sa={},_n=$r(Sa),ta=$r(Sa),na=$r(Sa);function ri(t){if(t===Sa)throw Error(U(174));return t}function ip(t,e){switch(me(na,e),me(ta,t),me(_n,Sa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ud(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ud(e,t)}_e(_n),me(_n,e)}function ys(){_e(_n),_e(ta),_e(na)}function Jw(t){ri(na.current);var e=ri(_n.current),n=ud(e,t.type);e!==n&&(me(ta,t),me(_n,n))}function sp(t){ta.current===t&&(_e(_n),_e(ta))}var Te=$r(0);function gu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Rh=[];function op(){for(var t=0;t<Rh.length;t++)Rh[t]._workInProgressVersionPrimary=null;Rh.length=0}var Ol=Zn.ReactCurrentDispatcher,Ph=Zn.ReactCurrentBatchConfig,di=0,Ie=null,Me=null,$e=null,yu=!1,bo=!1,ra=0,kA=0;function ot(){throw Error(U(321))}function ap(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!cn(t[n],e[n]))return!1;return!0}function lp(t,e,n,r,i,s){if(di=s,Ie=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ol.current=t===null||t.memoizedState===null?bA:OA,t=n(r,i),bo){s=0;do{if(bo=!1,ra=0,25<=s)throw Error(U(301));s+=1,$e=Me=null,e.updateQueue=null,Ol.current=VA,t=n(r,i)}while(bo)}if(Ol.current=vu,e=Me!==null&&Me.next!==null,di=0,$e=Me=Ie=null,yu=!1,e)throw Error(U(300));return t}function up(){var t=ra!==0;return ra=0,t}function pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?Ie.memoizedState=$e=t:$e=$e.next=t,$e}function Jt(){if(Me===null){var t=Ie.alternate;t=t!==null?t.memoizedState:null}else t=Me.next;var e=$e===null?Ie.memoizedState:$e.next;if(e!==null)$e=e,Me=t;else{if(t===null)throw Error(U(310));Me=t,t={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},$e===null?Ie.memoizedState=$e=t:$e=$e.next=t}return $e}function ia(t,e){return typeof e=="function"?e(t):e}function kh(t){var e=Jt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=Me,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((di&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Ie.lanes|=d,fi|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,cn(r,e.memoizedState)||(Rt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ie.lanes|=s,fi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function xh(t){var e=Jt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);cn(s,e.memoizedState)||(Rt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Zw(){}function e0(t,e){var n=Ie,r=Jt(),i=e(),s=!cn(r.memoizedState,i);if(s&&(r.memoizedState=i,Rt=!0),r=r.queue,cp(r0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||$e!==null&&$e.memoizedState.tag&1){if(n.flags|=2048,sa(9,n0.bind(null,n,r,i,e),void 0,null),qe===null)throw Error(U(349));di&30||t0(n,e,i)}return i}function t0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function n0(t,e,n,r){e.value=n,e.getSnapshot=r,i0(e)&&s0(t)}function r0(t,e,n){return n(function(){i0(e)&&s0(t)})}function i0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!cn(t,n)}catch{return!0}}function s0(t){var e=qn(t,1);e!==null&&ln(e,t,1,-1)}function vy(t){var e=pn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:t},e.queue=t,t=t.dispatch=DA.bind(null,Ie,t),[e.memoizedState,t]}function sa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function o0(){return Jt().memoizedState}function Vl(t,e,n,r){var i=pn();Ie.flags|=t,i.memoizedState=sa(1|e,n,void 0,r===void 0?null:r)}function sc(t,e,n,r){var i=Jt();r=r===void 0?null:r;var s=void 0;if(Me!==null){var o=Me.memoizedState;if(s=o.destroy,r!==null&&ap(r,o.deps)){i.memoizedState=sa(e,n,s,r);return}}Ie.flags|=t,i.memoizedState=sa(1|e,n,s,r)}function _y(t,e){return Vl(8390656,8,t,e)}function cp(t,e){return sc(2048,8,t,e)}function a0(t,e){return sc(4,2,t,e)}function l0(t,e){return sc(4,4,t,e)}function u0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function c0(t,e,n){return n=n!=null?n.concat([t]):null,sc(4,4,u0.bind(null,e,t),n)}function hp(){}function h0(t,e){var n=Jt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ap(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function d0(t,e){var n=Jt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ap(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function f0(t,e,n){return di&21?(cn(n,e)||(n=vw(),Ie.lanes|=n,fi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Rt=!0),t.memoizedState=n)}function xA(t,e){var n=de;de=n!==0&&4>n?n:4,t(!0);var r=Ph.transition;Ph.transition={};try{t(!1),e()}finally{de=n,Ph.transition=r}}function p0(){return Jt().memoizedState}function NA(t,e,n){var r=Rr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},m0(t))g0(e,n);else if(n=Yw(t,e,n,r),n!==null){var i=wt();ln(n,t,r,i),y0(n,e,r)}}function DA(t,e,n){var r=Rr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(m0(t))g0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,cn(l,o)){var u=e.interleaved;u===null?(i.next=i,np(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Yw(t,e,i,r),n!==null&&(i=wt(),ln(n,t,r,i),y0(n,e,r))}}function m0(t){var e=t.alternate;return t===Ie||e!==null&&e===Ie}function g0(t,e){bo=yu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function y0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Bf(t,n)}}var vu={readContext:Xt,useCallback:ot,useContext:ot,useEffect:ot,useImperativeHandle:ot,useInsertionEffect:ot,useLayoutEffect:ot,useMemo:ot,useReducer:ot,useRef:ot,useState:ot,useDebugValue:ot,useDeferredValue:ot,useTransition:ot,useMutableSource:ot,useSyncExternalStore:ot,useId:ot,unstable_isNewReconciler:!1},bA={readContext:Xt,useCallback:function(t,e){return pn().memoizedState=[t,e===void 0?null:e],t},useContext:Xt,useEffect:_y,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Vl(4194308,4,u0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Vl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Vl(4,2,t,e)},useMemo:function(t,e){var n=pn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=pn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=NA.bind(null,Ie,t),[r.memoizedState,t]},useRef:function(t){var e=pn();return t={current:t},e.memoizedState=t},useState:vy,useDebugValue:hp,useDeferredValue:function(t){return pn().memoizedState=t},useTransition:function(){var t=vy(!1),e=t[0];return t=xA.bind(null,t[1]),pn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ie,i=pn();if(Ee){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),qe===null)throw Error(U(349));di&30||t0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,_y(r0.bind(null,r,s,t),[t]),r.flags|=2048,sa(9,n0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=pn(),e=qe.identifierPrefix;if(Ee){var n=Mn,r=Ln;n=(r&~(1<<32-an(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ra++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=kA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},OA={readContext:Xt,useCallback:h0,useContext:Xt,useEffect:cp,useImperativeHandle:c0,useInsertionEffect:a0,useLayoutEffect:l0,useMemo:d0,useReducer:kh,useRef:o0,useState:function(){return kh(ia)},useDebugValue:hp,useDeferredValue:function(t){var e=Jt();return f0(e,Me.memoizedState,t)},useTransition:function(){var t=kh(ia)[0],e=Jt().memoizedState;return[t,e]},useMutableSource:Zw,useSyncExternalStore:e0,useId:p0,unstable_isNewReconciler:!1},VA={readContext:Xt,useCallback:h0,useContext:Xt,useEffect:cp,useImperativeHandle:c0,useInsertionEffect:a0,useLayoutEffect:l0,useMemo:d0,useReducer:xh,useRef:o0,useState:function(){return xh(ia)},useDebugValue:hp,useDeferredValue:function(t){var e=Jt();return Me===null?e.memoizedState=t:f0(e,Me.memoizedState,t)},useTransition:function(){var t=xh(ia)[0],e=Jt().memoizedState;return[t,e]},useMutableSource:Zw,useSyncExternalStore:e0,useId:p0,unstable_isNewReconciler:!1};function rn(t,e){if(t&&t.defaultProps){e=Se({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function xd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Se({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var oc={isMounted:function(t){return(t=t._reactInternals)?Ri(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=wt(),i=Rr(t),s=$n(r,i);s.payload=e,n!=null&&(s.callback=n),e=Ar(t,s,i),e!==null&&(ln(e,t,i,r),bl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=wt(),i=Rr(t),s=$n(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ar(t,s,i),e!==null&&(ln(e,t,i,r),bl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=wt(),r=Rr(t),i=$n(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ar(t,i,r),e!==null&&(ln(e,t,r,n),bl(e,t,r))}};function wy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Xo(n,r)||!Xo(i,s):!0}function v0(t,e,n){var r=!1,i=Lr,s=e.contextType;return typeof s=="object"&&s!==null?s=Xt(s):(i=kt(e)?ci:dt.current,r=e.contextTypes,s=(r=r!=null)?ps(t,i):Lr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=oc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ey(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&oc.enqueueReplaceState(e,e.state,null)}function Nd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},rp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Xt(s):(s=kt(e)?ci:dt.current,i.context=ps(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(xd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&oc.enqueueReplaceState(i,i.state,null),mu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function vs(t,e){try{var n="",r=e;do n+=u1(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Nh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Dd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var LA=typeof WeakMap=="function"?WeakMap:Map;function _0(t,e,n){n=$n(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){wu||(wu=!0,Bd=r),Dd(t,e)},n}function w0(t,e,n){n=$n(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Dd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Dd(t,e),typeof r!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ty(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new LA;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=YA.bind(null,t,e,n),e.then(t,t))}function Iy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Sy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=$n(-1,1),e.tag=2,Ar(n,e,1))),n.lanes|=1),t)}var MA=Zn.ReactCurrentOwner,Rt=!1;function yt(t,e,n,r){e.child=t===null?Qw(e,null,n,r):gs(e,t.child,n,r)}function Ay(t,e,n,r,i){n=n.render;var s=e.ref;return os(e,i),r=lp(t,e,n,r,s,i),n=up(),t!==null&&!Rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Hn(t,e,i)):(Ee&&n&&Yf(e),e.flags|=1,yt(t,e,r,i),e.child)}function Cy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!_p(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,E0(t,e,s,r,i)):(t=jl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Xo,n(o,r)&&t.ref===e.ref)return Hn(t,e,i)}return e.flags|=1,t=Pr(s,r),t.ref=e.ref,t.return=e,e.child=t}function E0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Xo(s,r)&&t.ref===e.ref)if(Rt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Rt=!0);else return e.lanes=t.lanes,Hn(t,e,i)}return bd(t,e,n,r,i)}function T0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(Ji,Mt),Mt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,me(Ji,Mt),Mt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,me(Ji,Mt),Mt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,me(Ji,Mt),Mt|=r;return yt(t,e,i,n),e.child}function I0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function bd(t,e,n,r,i){var s=kt(n)?ci:dt.current;return s=ps(e,s),os(e,i),n=lp(t,e,n,r,s,i),r=up(),t!==null&&!Rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Hn(t,e,i)):(Ee&&r&&Yf(e),e.flags|=1,yt(t,e,n,i),e.child)}function Ry(t,e,n,r,i){if(kt(n)){var s=!0;cu(e)}else s=!1;if(os(e,i),e.stateNode===null)Ll(t,e),v0(e,n,r),Nd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Xt(c):(c=kt(n)?ci:dt.current,c=ps(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Ey(e,o,r,c),hr=!1;var m=e.memoizedState;o.state=m,mu(e,r,o,i),u=e.memoizedState,l!==r||m!==u||Pt.current||hr?(typeof d=="function"&&(xd(e,n,d,r),u=e.memoizedState),(l=hr||wy(e,n,l,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Xw(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:rn(e.type,l),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Xt(u):(u=kt(n)?ci:dt.current,u=ps(e,u));var E=n.getDerivedStateFromProps;(d=typeof E=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&Ey(e,o,r,u),hr=!1,m=e.memoizedState,o.state=m,mu(e,r,o,i);var R=e.memoizedState;l!==p||m!==R||Pt.current||hr?(typeof E=="function"&&(xd(e,n,E,r),R=e.memoizedState),(c=hr||wy(e,n,c,r,m,R,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Od(t,e,n,r,s,i)}function Od(t,e,n,r,i,s){I0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&dy(e,n,!1),Hn(t,e,s);r=e.stateNode,MA.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=gs(e,t.child,null,s),e.child=gs(e,null,l,s)):yt(t,e,l,s),e.memoizedState=r.state,i&&dy(e,n,!0),e.child}function S0(t){var e=t.stateNode;e.pendingContext?hy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&hy(t,e.context,!1),ip(t,e.containerInfo)}function Py(t,e,n,r,i){return ms(),Jf(i),e.flags|=256,yt(t,e,n,r),e.child}var Vd={dehydrated:null,treeContext:null,retryLane:0};function Ld(t){return{baseLanes:t,cachePool:null,transitions:null}}function A0(t,e,n){var r=e.pendingProps,i=Te.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),me(Te,i&1),t===null)return Pd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=uc(o,r,0,null),t=ai(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ld(n),e.memoizedState=Vd,t):dp(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return FA(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Pr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Pr(l,s):(s=ai(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Ld(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Vd,r}return s=t.child,t=s.sibling,r=Pr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function dp(t,e){return e=uc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function gl(t,e,n,r){return r!==null&&Jf(r),gs(e,t.child,null,n),t=dp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function FA(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Nh(Error(U(422))),gl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=uc({mode:"visible",children:r.children},i,0,null),s=ai(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&gs(e,t.child,null,o),e.child.memoizedState=Ld(o),e.memoizedState=Vd,s);if(!(e.mode&1))return gl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(U(419)),r=Nh(s,r,void 0),gl(t,e,o,r)}if(l=(o&t.childLanes)!==0,Rt||l){if(r=qe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,qn(t,i),ln(r,t,i,-1))}return vp(),r=Nh(Error(U(421))),gl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=XA.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ft=Sr(i.nextSibling),Ut=e,Ee=!0,on=null,t!==null&&(Gt[Kt++]=Ln,Gt[Kt++]=Mn,Gt[Kt++]=hi,Ln=t.id,Mn=t.overflow,hi=e),e=dp(e,r.children),e.flags|=4096,e)}function ky(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),kd(t.return,e,n)}function Dh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function C0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(yt(t,e,r.children,n),r=Te.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ky(t,n,e);else if(t.tag===19)ky(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(me(Te,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&gu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Dh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&gu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Dh(e,!0,n,null,s);break;case"together":Dh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ll(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Hn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),fi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=Pr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Pr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function jA(t,e,n){switch(e.tag){case 3:S0(e),ms();break;case 5:Jw(e);break;case 1:kt(e.type)&&cu(e);break;case 4:ip(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;me(fu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(me(Te,Te.current&1),e.flags|=128,null):n&e.child.childLanes?A0(t,e,n):(me(Te,Te.current&1),t=Hn(t,e,n),t!==null?t.sibling:null);me(Te,Te.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return C0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),me(Te,Te.current),r)break;return null;case 22:case 23:return e.lanes=0,T0(t,e,n)}return Hn(t,e,n)}var R0,Md,P0,k0;R0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Md=function(){};P0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ri(_n.current);var s=null;switch(n){case"input":i=sd(t,i),r=sd(t,r),s=[];break;case"select":i=Se({},i,{value:void 0}),r=Se({},r,{value:void 0}),s=[];break;case"textarea":i=ld(t,i),r=ld(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=lu)}cd(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Wo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Wo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ye("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};k0=function(t,e,n,r){n!==r&&(e.flags|=4)};function po(t,e){if(!Ee)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function at(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function UA(t,e,n){var r=e.pendingProps;switch(Xf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(e),null;case 1:return kt(e.type)&&uu(),at(e),null;case 3:return r=e.stateNode,ys(),_e(Pt),_e(dt),op(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(pl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,on!==null&&(qd(on),on=null))),Md(t,e),at(e),null;case 5:sp(e);var i=ri(na.current);if(n=e.type,t!==null&&e.stateNode!=null)P0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return at(e),null}if(t=ri(_n.current),pl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[gn]=e,r[ea]=s,t=(e.mode&1)!==0,n){case"dialog":ye("cancel",r),ye("close",r);break;case"iframe":case"object":case"embed":ye("load",r);break;case"video":case"audio":for(i=0;i<Eo.length;i++)ye(Eo[i],r);break;case"source":ye("error",r);break;case"img":case"image":case"link":ye("error",r),ye("load",r);break;case"details":ye("toggle",r);break;case"input":Fg(r,s),ye("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ye("invalid",r);break;case"textarea":Ug(r,s),ye("invalid",r)}cd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&fl(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&fl(r.textContent,l,t),i=["children",""+l]):Wo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ye("scroll",r)}switch(n){case"input":sl(r),jg(r,s,!0);break;case"textarea":sl(r),$g(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=lu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=rw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[gn]=e,t[ea]=r,R0(t,e,!1,!1),e.stateNode=t;e:{switch(o=hd(n,r),n){case"dialog":ye("cancel",t),ye("close",t),i=r;break;case"iframe":case"object":case"embed":ye("load",t),i=r;break;case"video":case"audio":for(i=0;i<Eo.length;i++)ye(Eo[i],t);i=r;break;case"source":ye("error",t),i=r;break;case"img":case"image":case"link":ye("error",t),ye("load",t),i=r;break;case"details":ye("toggle",t),i=r;break;case"input":Fg(t,r),i=sd(t,r),ye("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Se({},r,{value:void 0}),ye("invalid",t);break;case"textarea":Ug(t,r),i=ld(t,r),ye("invalid",t);break;default:i=r}cd(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?ow(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&iw(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&qo(t,u):typeof u=="number"&&qo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Wo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ye("scroll",t):u!=null&&Lf(t,s,u,o))}switch(n){case"input":sl(t),jg(t,r,!1);break;case"textarea":sl(t),$g(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Vr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ns(t,!!r.multiple,s,!1):r.defaultValue!=null&&ns(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=lu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return at(e),null;case 6:if(t&&e.stateNode!=null)k0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=ri(na.current),ri(_n.current),pl(e)){if(r=e.stateNode,n=e.memoizedProps,r[gn]=e,(s=r.nodeValue!==n)&&(t=Ut,t!==null))switch(t.tag){case 3:fl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&fl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[gn]=e,e.stateNode=r}return at(e),null;case 13:if(_e(Te),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ee&&Ft!==null&&e.mode&1&&!(e.flags&128))Gw(),ms(),e.flags|=98560,s=!1;else if(s=pl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[gn]=e}else ms(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;at(e),s=!1}else on!==null&&(qd(on),on=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Te.current&1?Fe===0&&(Fe=3):vp())),e.updateQueue!==null&&(e.flags|=4),at(e),null);case 4:return ys(),Md(t,e),t===null&&Jo(e.stateNode.containerInfo),at(e),null;case 10:return tp(e.type._context),at(e),null;case 17:return kt(e.type)&&uu(),at(e),null;case 19:if(_e(Te),s=e.memoizedState,s===null)return at(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)po(s,!1);else{if(Fe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=gu(t),o!==null){for(e.flags|=128,po(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return me(Te,Te.current&1|2),e.child}t=t.sibling}s.tail!==null&&xe()>_s&&(e.flags|=128,r=!0,po(s,!1),e.lanes=4194304)}else{if(!r)if(t=gu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),po(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ee)return at(e),null}else 2*xe()-s.renderingStartTime>_s&&n!==1073741824&&(e.flags|=128,r=!0,po(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=xe(),e.sibling=null,n=Te.current,me(Te,r?n&1|2:n&1),e):(at(e),null);case 22:case 23:return yp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Mt&1073741824&&(at(e),e.subtreeFlags&6&&(e.flags|=8192)):at(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function $A(t,e){switch(Xf(e),e.tag){case 1:return kt(e.type)&&uu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ys(),_e(Pt),_e(dt),op(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return sp(e),null;case 13:if(_e(Te),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));ms()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _e(Te),null;case 4:return ys(),null;case 10:return tp(e.type._context),null;case 22:case 23:return yp(),null;case 24:return null;default:return null}}var yl=!1,ct=!1,BA=typeof WeakSet=="function"?WeakSet:Set,W=null;function Xi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Re(t,e,r)}else n.current=null}function Fd(t,e,n){try{n()}catch(r){Re(t,e,r)}}var xy=!1;function zA(t,e){if(Ed=su,t=Ow(),Qf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,p=t,m=null;t:for(;;){for(var E;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(E=p.firstChild)!==null;)m=p,p=E;for(;;){if(p===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++d===r&&(u=o),(E=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=E}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Td={focusedElem:t,selectionRange:n},su=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var P=R.memoizedProps,x=R.memoizedState,w=e.stateNode,v=w.getSnapshotBeforeUpdate(e.elementType===e.type?P:rn(e.type,P),x);w.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var T=e.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(b){Re(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return R=xy,xy=!1,R}function Oo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Fd(e,n,s)}i=i.next}while(i!==r)}}function ac(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function jd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function x0(t){var e=t.alternate;e!==null&&(t.alternate=null,x0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[gn],delete e[ea],delete e[Ad],delete e[AA],delete e[CA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function N0(t){return t.tag===5||t.tag===3||t.tag===4}function Ny(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||N0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ud(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=lu));else if(r!==4&&(t=t.child,t!==null))for(Ud(t,e,n),t=t.sibling;t!==null;)Ud(t,e,n),t=t.sibling}function $d(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for($d(t,e,n),t=t.sibling;t!==null;)$d(t,e,n),t=t.sibling}var Ge=null,sn=!1;function ar(t,e,n){for(n=n.child;n!==null;)D0(t,e,n),n=n.sibling}function D0(t,e,n){if(vn&&typeof vn.onCommitFiberUnmount=="function")try{vn.onCommitFiberUnmount(Zu,n)}catch{}switch(n.tag){case 5:ct||Xi(n,e);case 6:var r=Ge,i=sn;Ge=null,ar(t,e,n),Ge=r,sn=i,Ge!==null&&(sn?(t=Ge,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ge.removeChild(n.stateNode));break;case 18:Ge!==null&&(sn?(t=Ge,n=n.stateNode,t.nodeType===8?Ah(t.parentNode,n):t.nodeType===1&&Ah(t,n),Qo(t)):Ah(Ge,n.stateNode));break;case 4:r=Ge,i=sn,Ge=n.stateNode.containerInfo,sn=!0,ar(t,e,n),Ge=r,sn=i;break;case 0:case 11:case 14:case 15:if(!ct&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Fd(n,e,o),i=i.next}while(i!==r)}ar(t,e,n);break;case 1:if(!ct&&(Xi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Re(n,e,l)}ar(t,e,n);break;case 21:ar(t,e,n);break;case 22:n.mode&1?(ct=(r=ct)||n.memoizedState!==null,ar(t,e,n),ct=r):ar(t,e,n);break;default:ar(t,e,n)}}function Dy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new BA),e.forEach(function(r){var i=JA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function nn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ge=l.stateNode,sn=!1;break e;case 3:Ge=l.stateNode.containerInfo,sn=!0;break e;case 4:Ge=l.stateNode.containerInfo,sn=!0;break e}l=l.return}if(Ge===null)throw Error(U(160));D0(s,o,i),Ge=null,sn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Re(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)b0(e,t),e=e.sibling}function b0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(nn(e,t),fn(t),r&4){try{Oo(3,t,t.return),ac(3,t)}catch(P){Re(t,t.return,P)}try{Oo(5,t,t.return)}catch(P){Re(t,t.return,P)}}break;case 1:nn(e,t),fn(t),r&512&&n!==null&&Xi(n,n.return);break;case 5:if(nn(e,t),fn(t),r&512&&n!==null&&Xi(n,n.return),t.flags&32){var i=t.stateNode;try{qo(i,"")}catch(P){Re(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&tw(i,s),hd(l,o);var c=hd(l,s);for(o=0;o<u.length;o+=2){var d=u[o],p=u[o+1];d==="style"?ow(i,p):d==="dangerouslySetInnerHTML"?iw(i,p):d==="children"?qo(i,p):Lf(i,d,p,c)}switch(l){case"input":od(i,s);break;case"textarea":nw(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var E=s.value;E!=null?ns(i,!!s.multiple,E,!1):m!==!!s.multiple&&(s.defaultValue!=null?ns(i,!!s.multiple,s.defaultValue,!0):ns(i,!!s.multiple,s.multiple?[]:"",!1))}i[ea]=s}catch(P){Re(t,t.return,P)}}break;case 6:if(nn(e,t),fn(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){Re(t,t.return,P)}}break;case 3:if(nn(e,t),fn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qo(e.containerInfo)}catch(P){Re(t,t.return,P)}break;case 4:nn(e,t),fn(t);break;case 13:nn(e,t),fn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(mp=xe())),r&4&&Dy(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(ct=(c=ct)||d,nn(e,t),ct=c):nn(e,t),fn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(W=t,d=t.child;d!==null;){for(p=W=d;W!==null;){switch(m=W,E=m.child,m.tag){case 0:case 11:case 14:case 15:Oo(4,m,m.return);break;case 1:Xi(m,m.return);var R=m.stateNode;if(typeof R.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(P){Re(r,n,P)}}break;case 5:Xi(m,m.return);break;case 22:if(m.memoizedState!==null){Oy(p);continue}}E!==null?(E.return=m,W=E):Oy(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=sw("display",o))}catch(P){Re(t,t.return,P)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(P){Re(t,t.return,P)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:nn(e,t),fn(t),r&4&&Dy(t);break;case 21:break;default:nn(e,t),fn(t)}}function fn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(N0(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(qo(i,""),r.flags&=-33);var s=Ny(t);$d(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Ny(t);Ud(t,l,o);break;default:throw Error(U(161))}}catch(u){Re(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function WA(t,e,n){W=t,O0(t)}function O0(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var i=W,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||yl;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||ct;l=yl;var c=ct;if(yl=o,(ct=u)&&!c)for(W=i;W!==null;)o=W,u=o.child,o.tag===22&&o.memoizedState!==null?Vy(i):u!==null?(u.return=o,W=u):Vy(i);for(;s!==null;)W=s,O0(s),s=s.sibling;W=i,yl=l,ct=c}by(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,W=s):by(t)}}function by(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ct||ac(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ct)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:rn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&yy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}yy(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Qo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}ct||e.flags&512&&jd(e)}catch(m){Re(e,e.return,m)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function Oy(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function Vy(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ac(4,e)}catch(u){Re(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Re(e,i,u)}}var s=e.return;try{jd(e)}catch(u){Re(e,s,u)}break;case 5:var o=e.return;try{jd(e)}catch(u){Re(e,o,u)}}}catch(u){Re(e,e.return,u)}if(e===t){W=null;break}var l=e.sibling;if(l!==null){l.return=e.return,W=l;break}W=e.return}}var qA=Math.ceil,_u=Zn.ReactCurrentDispatcher,fp=Zn.ReactCurrentOwner,Yt=Zn.ReactCurrentBatchConfig,oe=0,qe=null,Ve=null,Je=0,Mt=0,Ji=$r(0),Fe=0,oa=null,fi=0,lc=0,pp=0,Vo=null,Ct=null,mp=0,_s=1/0,Dn=null,wu=!1,Bd=null,Cr=null,vl=!1,vr=null,Eu=0,Lo=0,zd=null,Ml=-1,Fl=0;function wt(){return oe&6?xe():Ml!==-1?Ml:Ml=xe()}function Rr(t){return t.mode&1?oe&2&&Je!==0?Je&-Je:PA.transition!==null?(Fl===0&&(Fl=vw()),Fl):(t=de,t!==0||(t=window.event,t=t===void 0?16:Aw(t.type)),t):1}function ln(t,e,n,r){if(50<Lo)throw Lo=0,zd=null,Error(U(185));Ea(t,n,r),(!(oe&2)||t!==qe)&&(t===qe&&(!(oe&2)&&(lc|=n),Fe===4&&fr(t,Je)),xt(t,r),n===1&&oe===0&&!(e.mode&1)&&(_s=xe()+500,ic&&Br()))}function xt(t,e){var n=t.callbackNode;P1(t,e);var r=iu(t,t===qe?Je:0);if(r===0)n!==null&&Wg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Wg(n),e===1)t.tag===0?RA(Ly.bind(null,t)):Ww(Ly.bind(null,t)),IA(function(){!(oe&6)&&Br()}),n=null;else{switch(_w(r)){case 1:n=$f;break;case 4:n=gw;break;case 16:n=ru;break;case 536870912:n=yw;break;default:n=ru}n=B0(n,V0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function V0(t,e){if(Ml=-1,Fl=0,oe&6)throw Error(U(327));var n=t.callbackNode;if(as()&&t.callbackNode!==n)return null;var r=iu(t,t===qe?Je:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Tu(t,r);else{e=r;var i=oe;oe|=2;var s=M0();(qe!==t||Je!==e)&&(Dn=null,_s=xe()+500,oi(t,e));do try{KA();break}catch(l){L0(t,l)}while(!0);ep(),_u.current=s,oe=i,Ve!==null?e=0:(qe=null,Je=0,e=Fe)}if(e!==0){if(e===2&&(i=gd(t),i!==0&&(r=i,e=Wd(t,i))),e===1)throw n=oa,oi(t,0),fr(t,r),xt(t,xe()),n;if(e===6)fr(t,r);else{if(i=t.current.alternate,!(r&30)&&!HA(i)&&(e=Tu(t,r),e===2&&(s=gd(t),s!==0&&(r=s,e=Wd(t,s))),e===1))throw n=oa,oi(t,0),fr(t,r),xt(t,xe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:Jr(t,Ct,Dn);break;case 3:if(fr(t,r),(r&130023424)===r&&(e=mp+500-xe(),10<e)){if(iu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){wt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Sd(Jr.bind(null,t,Ct,Dn),e);break}Jr(t,Ct,Dn);break;case 4:if(fr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-an(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*qA(r/1960))-r,10<r){t.timeoutHandle=Sd(Jr.bind(null,t,Ct,Dn),r);break}Jr(t,Ct,Dn);break;case 5:Jr(t,Ct,Dn);break;default:throw Error(U(329))}}}return xt(t,xe()),t.callbackNode===n?V0.bind(null,t):null}function Wd(t,e){var n=Vo;return t.current.memoizedState.isDehydrated&&(oi(t,e).flags|=256),t=Tu(t,e),t!==2&&(e=Ct,Ct=n,e!==null&&qd(e)),t}function qd(t){Ct===null?Ct=t:Ct.push.apply(Ct,t)}function HA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!cn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function fr(t,e){for(e&=~pp,e&=~lc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-an(e),r=1<<n;t[n]=-1,e&=~r}}function Ly(t){if(oe&6)throw Error(U(327));as();var e=iu(t,0);if(!(e&1))return xt(t,xe()),null;var n=Tu(t,e);if(t.tag!==0&&n===2){var r=gd(t);r!==0&&(e=r,n=Wd(t,r))}if(n===1)throw n=oa,oi(t,0),fr(t,e),xt(t,xe()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Jr(t,Ct,Dn),xt(t,xe()),null}function gp(t,e){var n=oe;oe|=1;try{return t(e)}finally{oe=n,oe===0&&(_s=xe()+500,ic&&Br())}}function pi(t){vr!==null&&vr.tag===0&&!(oe&6)&&as();var e=oe;oe|=1;var n=Yt.transition,r=de;try{if(Yt.transition=null,de=1,t)return t()}finally{de=r,Yt.transition=n,oe=e,!(oe&6)&&Br()}}function yp(){Mt=Ji.current,_e(Ji)}function oi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,TA(n)),Ve!==null)for(n=Ve.return;n!==null;){var r=n;switch(Xf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&uu();break;case 3:ys(),_e(Pt),_e(dt),op();break;case 5:sp(r);break;case 4:ys();break;case 13:_e(Te);break;case 19:_e(Te);break;case 10:tp(r.type._context);break;case 22:case 23:yp()}n=n.return}if(qe=t,Ve=t=Pr(t.current,null),Je=Mt=e,Fe=0,oa=null,pp=lc=fi=0,Ct=Vo=null,ni!==null){for(e=0;e<ni.length;e++)if(n=ni[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ni=null}return t}function L0(t,e){do{var n=Ve;try{if(ep(),Ol.current=vu,yu){for(var r=Ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}yu=!1}if(di=0,$e=Me=Ie=null,bo=!1,ra=0,fp.current=null,n===null||n.return===null){Fe=1,oa=e,Ve=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Je,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var E=Iy(o);if(E!==null){E.flags&=-257,Sy(E,o,l,s,e),E.mode&1&&Ty(s,c,e),e=E,u=c;var R=e.updateQueue;if(R===null){var P=new Set;P.add(u),e.updateQueue=P}else R.add(u);break e}else{if(!(e&1)){Ty(s,c,e),vp();break e}u=Error(U(426))}}else if(Ee&&l.mode&1){var x=Iy(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Sy(x,o,l,s,e),Jf(vs(u,l));break e}}s=u=vs(u,l),Fe!==4&&(Fe=2),Vo===null?Vo=[s]:Vo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=_0(s,u,e);gy(s,w);break e;case 1:l=u;var v=s.type,T=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(Cr===null||!Cr.has(T)))){s.flags|=65536,e&=-e,s.lanes|=e;var b=w0(s,l,e);gy(s,b);break e}}s=s.return}while(s!==null)}j0(n)}catch(F){e=F,Ve===n&&n!==null&&(Ve=n=n.return);continue}break}while(!0)}function M0(){var t=_u.current;return _u.current=vu,t===null?vu:t}function vp(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),qe===null||!(fi&268435455)&&!(lc&268435455)||fr(qe,Je)}function Tu(t,e){var n=oe;oe|=2;var r=M0();(qe!==t||Je!==e)&&(Dn=null,oi(t,e));do try{GA();break}catch(i){L0(t,i)}while(!0);if(ep(),oe=n,_u.current=r,Ve!==null)throw Error(U(261));return qe=null,Je=0,Fe}function GA(){for(;Ve!==null;)F0(Ve)}function KA(){for(;Ve!==null&&!_1();)F0(Ve)}function F0(t){var e=$0(t.alternate,t,Mt);t.memoizedProps=t.pendingProps,e===null?j0(t):Ve=e,fp.current=null}function j0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=$A(n,e),n!==null){n.flags&=32767,Ve=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Fe=6,Ve=null;return}}else if(n=UA(n,e,Mt),n!==null){Ve=n;return}if(e=e.sibling,e!==null){Ve=e;return}Ve=e=t}while(e!==null);Fe===0&&(Fe=5)}function Jr(t,e,n){var r=de,i=Yt.transition;try{Yt.transition=null,de=1,QA(t,e,n,r)}finally{Yt.transition=i,de=r}return null}function QA(t,e,n,r){do as();while(vr!==null);if(oe&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(k1(t,s),t===qe&&(Ve=qe=null,Je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vl||(vl=!0,B0(ru,function(){return as(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Yt.transition,Yt.transition=null;var o=de;de=1;var l=oe;oe|=4,fp.current=null,zA(t,n),b0(n,t),mA(Td),su=!!Ed,Td=Ed=null,t.current=n,WA(n),w1(),oe=l,de=o,Yt.transition=s}else t.current=n;if(vl&&(vl=!1,vr=t,Eu=i),s=t.pendingLanes,s===0&&(Cr=null),I1(n.stateNode),xt(t,xe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(wu)throw wu=!1,t=Bd,Bd=null,t;return Eu&1&&t.tag!==0&&as(),s=t.pendingLanes,s&1?t===zd?Lo++:(Lo=0,zd=t):Lo=0,Br(),null}function as(){if(vr!==null){var t=_w(Eu),e=Yt.transition,n=de;try{if(Yt.transition=null,de=16>t?16:t,vr===null)var r=!1;else{if(t=vr,vr=null,Eu=0,oe&6)throw Error(U(331));var i=oe;for(oe|=4,W=t.current;W!==null;){var s=W,o=s.child;if(W.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(W=c;W!==null;){var d=W;switch(d.tag){case 0:case 11:case 15:Oo(8,d,s)}var p=d.child;if(p!==null)p.return=d,W=p;else for(;W!==null;){d=W;var m=d.sibling,E=d.return;if(x0(d),d===c){W=null;break}if(m!==null){m.return=E,W=m;break}W=E}}}var R=s.alternate;if(R!==null){var P=R.child;if(P!==null){R.child=null;do{var x=P.sibling;P.sibling=null,P=x}while(P!==null)}}W=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,W=o;else e:for(;W!==null;){if(s=W,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Oo(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,W=w;break e}W=s.return}}var v=t.current;for(W=v;W!==null;){o=W;var T=o.child;if(o.subtreeFlags&2064&&T!==null)T.return=o,W=T;else e:for(o=v;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ac(9,l)}}catch(F){Re(l,l.return,F)}if(l===o){W=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,W=b;break e}W=l.return}}if(oe=i,Br(),vn&&typeof vn.onPostCommitFiberRoot=="function")try{vn.onPostCommitFiberRoot(Zu,t)}catch{}r=!0}return r}finally{de=n,Yt.transition=e}}return!1}function My(t,e,n){e=vs(n,e),e=_0(t,e,1),t=Ar(t,e,1),e=wt(),t!==null&&(Ea(t,1,e),xt(t,e))}function Re(t,e,n){if(t.tag===3)My(t,t,n);else for(;e!==null;){if(e.tag===3){My(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Cr===null||!Cr.has(r))){t=vs(n,t),t=w0(e,t,1),e=Ar(e,t,1),t=wt(),e!==null&&(Ea(e,1,t),xt(e,t));break}}e=e.return}}function YA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=wt(),t.pingedLanes|=t.suspendedLanes&n,qe===t&&(Je&n)===n&&(Fe===4||Fe===3&&(Je&130023424)===Je&&500>xe()-mp?oi(t,0):pp|=n),xt(t,e)}function U0(t,e){e===0&&(t.mode&1?(e=ll,ll<<=1,!(ll&130023424)&&(ll=4194304)):e=1);var n=wt();t=qn(t,e),t!==null&&(Ea(t,e,n),xt(t,n))}function XA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),U0(t,n)}function JA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),U0(t,n)}var $0;$0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Pt.current)Rt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Rt=!1,jA(t,e,n);Rt=!!(t.flags&131072)}else Rt=!1,Ee&&e.flags&1048576&&qw(e,du,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ll(t,e),t=e.pendingProps;var i=ps(e,dt.current);os(e,n),i=lp(null,e,r,t,i,n);var s=up();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,kt(r)?(s=!0,cu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,rp(e),i.updater=oc,e.stateNode=i,i._reactInternals=e,Nd(e,r,t,n),e=Od(null,e,r,!0,s,n)):(e.tag=0,Ee&&s&&Yf(e),yt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ll(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=eC(r),t=rn(r,t),i){case 0:e=bd(null,e,r,t,n);break e;case 1:e=Ry(null,e,r,t,n);break e;case 11:e=Ay(null,e,r,t,n);break e;case 14:e=Cy(null,e,r,rn(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rn(r,i),bd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rn(r,i),Ry(t,e,r,i,n);case 3:e:{if(S0(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Xw(t,e),mu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=vs(Error(U(423)),e),e=Py(t,e,r,n,i);break e}else if(r!==i){i=vs(Error(U(424)),e),e=Py(t,e,r,n,i);break e}else for(Ft=Sr(e.stateNode.containerInfo.firstChild),Ut=e,Ee=!0,on=null,n=Qw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ms(),r===i){e=Hn(t,e,n);break e}yt(t,e,r,n)}e=e.child}return e;case 5:return Jw(e),t===null&&Pd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Id(r,i)?o=null:s!==null&&Id(r,s)&&(e.flags|=32),I0(t,e),yt(t,e,o,n),e.child;case 6:return t===null&&Pd(e),null;case 13:return A0(t,e,n);case 4:return ip(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=gs(e,null,r,n):yt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rn(r,i),Ay(t,e,r,i,n);case 7:return yt(t,e,e.pendingProps,n),e.child;case 8:return yt(t,e,e.pendingProps.children,n),e.child;case 12:return yt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,me(fu,r._currentValue),r._currentValue=o,s!==null)if(cn(s.value,o)){if(s.children===i.children&&!Pt.current){e=Hn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=$n(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),kd(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),kd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}yt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,os(e,n),i=Xt(i),r=r(i),e.flags|=1,yt(t,e,r,n),e.child;case 14:return r=e.type,i=rn(r,e.pendingProps),i=rn(r.type,i),Cy(t,e,r,i,n);case 15:return E0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rn(r,i),Ll(t,e),e.tag=1,kt(r)?(t=!0,cu(e)):t=!1,os(e,n),v0(e,r,i),Nd(e,r,i,n),Od(null,e,r,!0,t,n);case 19:return C0(t,e,n);case 22:return T0(t,e,n)}throw Error(U(156,e.tag))};function B0(t,e){return mw(t,e)}function ZA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qt(t,e,n,r){return new ZA(t,e,n,r)}function _p(t){return t=t.prototype,!(!t||!t.isReactComponent)}function eC(t){if(typeof t=="function")return _p(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ff)return 11;if(t===jf)return 14}return 2}function Pr(t,e){var n=t.alternate;return n===null?(n=Qt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function jl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")_p(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Bi:return ai(n.children,i,s,e);case Mf:o=8,i|=8;break;case td:return t=Qt(12,n,e,i|2),t.elementType=td,t.lanes=s,t;case nd:return t=Qt(13,n,e,i),t.elementType=nd,t.lanes=s,t;case rd:return t=Qt(19,n,e,i),t.elementType=rd,t.lanes=s,t;case J_:return uc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Y_:o=10;break e;case X_:o=9;break e;case Ff:o=11;break e;case jf:o=14;break e;case cr:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=Qt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ai(t,e,n,r){return t=Qt(7,t,r,e),t.lanes=n,t}function uc(t,e,n,r){return t=Qt(22,t,r,e),t.elementType=J_,t.lanes=n,t.stateNode={isHidden:!1},t}function bh(t,e,n){return t=Qt(6,t,null,e),t.lanes=n,t}function Oh(t,e,n){return e=Qt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function tC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ph(0),this.expirationTimes=ph(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ph(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function wp(t,e,n,r,i,s,o,l,u){return t=new tC(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Qt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},rp(s),t}function nC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$i,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function z0(t){if(!t)return Lr;t=t._reactInternals;e:{if(Ri(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(kt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(kt(n))return zw(t,n,e)}return e}function W0(t,e,n,r,i,s,o,l,u){return t=wp(n,r,!0,t,i,s,o,l,u),t.context=z0(null),n=t.current,r=wt(),i=Rr(n),s=$n(r,i),s.callback=e??null,Ar(n,s,i),t.current.lanes=i,Ea(t,i,r),xt(t,r),t}function cc(t,e,n,r){var i=e.current,s=wt(),o=Rr(i);return n=z0(n),e.context===null?e.context=n:e.pendingContext=n,e=$n(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ar(i,e,o),t!==null&&(ln(t,i,o,s),bl(t,i,o)),o}function Iu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Fy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ep(t,e){Fy(t,e),(t=t.alternate)&&Fy(t,e)}function rC(){return null}var q0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Tp(t){this._internalRoot=t}hc.prototype.render=Tp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));cc(t,e,null,null)};hc.prototype.unmount=Tp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;pi(function(){cc(null,t,null,null)}),e[Wn]=null}};function hc(t){this._internalRoot=t}hc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Tw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<dr.length&&e!==0&&e<dr[n].priority;n++);dr.splice(n,0,t),n===0&&Sw(t)}};function Ip(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function dc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function jy(){}function iC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Iu(o);s.call(c)}}var o=W0(e,r,t,0,null,!1,!1,"",jy);return t._reactRootContainer=o,t[Wn]=o.current,Jo(t.nodeType===8?t.parentNode:t),pi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Iu(u);l.call(c)}}var u=wp(t,0,!1,null,null,!1,!1,"",jy);return t._reactRootContainer=u,t[Wn]=u.current,Jo(t.nodeType===8?t.parentNode:t),pi(function(){cc(e,u,n,r)}),u}function fc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Iu(o);l.call(u)}}cc(e,o,t,i)}else o=iC(n,e,t,i,r);return Iu(o)}ww=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=wo(e.pendingLanes);n!==0&&(Bf(e,n|1),xt(e,xe()),!(oe&6)&&(_s=xe()+500,Br()))}break;case 13:pi(function(){var r=qn(t,1);if(r!==null){var i=wt();ln(r,t,1,i)}}),Ep(t,1)}};zf=function(t){if(t.tag===13){var e=qn(t,134217728);if(e!==null){var n=wt();ln(e,t,134217728,n)}Ep(t,134217728)}};Ew=function(t){if(t.tag===13){var e=Rr(t),n=qn(t,e);if(n!==null){var r=wt();ln(n,t,e,r)}Ep(t,e)}};Tw=function(){return de};Iw=function(t,e){var n=de;try{return de=t,e()}finally{de=n}};fd=function(t,e,n){switch(e){case"input":if(od(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=rc(r);if(!i)throw Error(U(90));ew(r),od(r,i)}}}break;case"textarea":nw(t,n);break;case"select":e=n.value,e!=null&&ns(t,!!n.multiple,e,!1)}};uw=gp;cw=pi;var sC={usingClientEntryPoint:!1,Events:[Ia,Hi,rc,aw,lw,gp]},mo={findFiberByHostInstance:ti,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},oC={bundleType:mo.bundleType,version:mo.version,rendererPackageName:mo.rendererPackageName,rendererConfig:mo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Zn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=fw(t),t===null?null:t.stateNode},findFiberByHostInstance:mo.findFiberByHostInstance||rC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_l.isDisabled&&_l.supportsFiber)try{Zu=_l.inject(oC),vn=_l}catch{}}zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sC;zt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ip(e))throw Error(U(200));return nC(t,e,null,n)};zt.createRoot=function(t,e){if(!Ip(t))throw Error(U(299));var n=!1,r="",i=q0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=wp(t,1,!1,null,null,n,!1,r,i),t[Wn]=e.current,Jo(t.nodeType===8?t.parentNode:t),new Tp(e)};zt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=fw(e),t=t===null?null:t.stateNode,t};zt.flushSync=function(t){return pi(t)};zt.hydrate=function(t,e,n){if(!dc(e))throw Error(U(200));return fc(null,t,e,!0,n)};zt.hydrateRoot=function(t,e,n){if(!Ip(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=q0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=W0(e,null,t,1,n??null,i,!1,s,o),t[Wn]=e.current,Jo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new hc(e)};zt.render=function(t,e,n){if(!dc(e))throw Error(U(200));return fc(null,t,e,!1,n)};zt.unmountComponentAtNode=function(t){if(!dc(t))throw Error(U(40));return t._reactRootContainer?(pi(function(){fc(null,null,t,!1,function(){t._reactRootContainer=null,t[Wn]=null})}),!0):!1};zt.unstable_batchedUpdates=gp;zt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!dc(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return fc(t,e,n,!1,r)};zt.version="18.3.1-next-f1338f8080-20240426";function H0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(H0)}catch(t){console.error(t)}}H0(),H_.exports=zt;var aC=H_.exports,Uy=aC;Zh.createRoot=Uy.createRoot,Zh.hydrateRoot=Uy.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function aa(){return aa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},aa.apply(this,arguments)}var _r;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(_r||(_r={}));const $y="popstate";function lC(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Hd("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Su(i)}return cC(e,n,null,t)}function De(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function G0(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function uC(){return Math.random().toString(36).substr(2,8)}function By(t,e){return{usr:t.state,key:t.key,idx:e}}function Hd(t,e,n,r){return n===void 0&&(n=null),aa({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ms(e):e,{state:n,key:e&&e.key||r||uC()})}function Su(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ms(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function cC(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=_r.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(aa({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function p(){l=_r.Pop;let x=d(),w=x==null?null:x-c;c=x,u&&u({action:l,location:P.location,delta:w})}function m(x,w){l=_r.Push;let v=Hd(P.location,x,w);c=d()+1;let T=By(v,c),b=P.createHref(v);try{o.pushState(T,"",b)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;i.location.assign(b)}s&&u&&u({action:l,location:P.location,delta:1})}function E(x,w){l=_r.Replace;let v=Hd(P.location,x,w);c=d();let T=By(v,c),b=P.createHref(v);o.replaceState(T,"",b),s&&u&&u({action:l,location:P.location,delta:0})}function R(x){let w=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof x=="string"?x:Su(x);return v=v.replace(/ $/,"%20"),De(w,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,w)}let P={get action(){return l},get location(){return t(i,o)},listen(x){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener($y,p),u=x,()=>{i.removeEventListener($y,p),u=null}},createHref(x){return e(i,x)},createURL:R,encodeLocation(x){let w=R(x);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:m,replace:E,go(x){return o.go(x)}};return P}var zy;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(zy||(zy={}));function hC(t,e,n){return n===void 0&&(n="/"),dC(t,e,n)}function dC(t,e,n,r){let i=typeof e=="string"?Ms(e):e,s=Sp(i.pathname||"/",n);if(s==null)return null;let o=K0(t);fC(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=AC(s);l=TC(o[u],c)}return l}function K0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(De(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=kr([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(De(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),K0(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:wC(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of Q0(s.path))i(s,o,u)}),e}function Q0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Q0(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function fC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:EC(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const pC=/^:[\w-]+$/,mC=3,gC=2,yC=1,vC=10,_C=-2,Wy=t=>t==="*";function wC(t,e){let n=t.split("/"),r=n.length;return n.some(Wy)&&(r+=_C),e&&(r+=gC),n.filter(i=>!Wy(i)).reduce((i,s)=>i+(pC.test(s)?mC:s===""?yC:vC),r)}function EC(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function TC(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",p=IC({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:kr([s,p.pathname]),pathnameBase:kC(kr([s,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(s=kr([s,p.pathnameBase]))}return o}function IC(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=SC(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,d,p)=>{let{paramName:m,isOptional:E}=d;if(m==="*"){let P=l[p]||"";o=s.slice(0,s.length-P.length).replace(/(.)\/+$/,"$1")}const R=l[p];return E&&!R?c[m]=void 0:c[m]=(R||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function SC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),G0(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function AC(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return G0(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Sp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function CC(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ms(t):t;return{pathname:n?n.startsWith("/")?n:RC(n,e):e,search:xC(r),hash:NC(i)}}function RC(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Vh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function PC(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Ap(t,e){let n=PC(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Cp(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ms(t):(i=aa({},t),De(!i.pathname||!i.pathname.includes("?"),Vh("?","pathname","search",i)),De(!i.pathname||!i.pathname.includes("#"),Vh("#","pathname","hash",i)),De(!i.search||!i.search.includes("#"),Vh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let u=CC(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const kr=t=>t.join("/").replace(/\/\/+/g,"/"),kC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),xC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,NC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function DC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Y0=["post","put","patch","delete"];new Set(Y0);const bC=["get",...Y0];new Set(bC);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function la(){return la=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},la.apply(this,arguments)}const Rp=L.createContext(null),OC=L.createContext(null),zr=L.createContext(null),pc=L.createContext(null),er=L.createContext({outlet:null,matches:[],isDataRoute:!1}),X0=L.createContext(null);function VC(t,e){let{relative:n}=e===void 0?{}:e;Fs()||De(!1);let{basename:r,navigator:i}=L.useContext(zr),{hash:s,pathname:o,search:l}=eE(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:kr([r,o])),i.createHref({pathname:u,search:l,hash:s})}function Fs(){return L.useContext(pc)!=null}function Pi(){return Fs()||De(!1),L.useContext(pc).location}function J0(t){L.useContext(zr).static||L.useLayoutEffect(t)}function js(){let{isDataRoute:t}=L.useContext(er);return t?KC():LC()}function LC(){Fs()||De(!1);let t=L.useContext(Rp),{basename:e,future:n,navigator:r}=L.useContext(zr),{matches:i}=L.useContext(er),{pathname:s}=Pi(),o=JSON.stringify(Ap(i,n.v7_relativeSplatPath)),l=L.useRef(!1);return J0(()=>{l.current=!0}),L.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=Cp(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:kr([e,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[e,r,o,s,t])}function Z0(){let{matches:t}=L.useContext(er),e=t[t.length-1];return e?e.params:{}}function eE(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=L.useContext(zr),{matches:i}=L.useContext(er),{pathname:s}=Pi(),o=JSON.stringify(Ap(i,r.v7_relativeSplatPath));return L.useMemo(()=>Cp(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function MC(t,e){return FC(t,e)}function FC(t,e,n,r){Fs()||De(!1);let{navigator:i}=L.useContext(zr),{matches:s}=L.useContext(er),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Pi(),d;if(e){var p;let x=typeof e=="string"?Ms(e):e;u==="/"||(p=x.pathname)!=null&&p.startsWith(u)||De(!1),d=x}else d=c;let m=d.pathname||"/",E=m;if(u!=="/"){let x=u.replace(/^\//,"").split("/");E="/"+m.replace(/^\//,"").split("/").slice(x.length).join("/")}let R=hC(t,{pathname:E}),P=zC(R&&R.map(x=>Object.assign({},x,{params:Object.assign({},l,x.params),pathname:kr([u,i.encodeLocation?i.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?u:kr([u,i.encodeLocation?i.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),s,n,r);return e&&P?L.createElement(pc.Provider,{value:{location:la({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:_r.Pop}},P):P}function jC(){let t=GC(),e=DC(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return L.createElement(L.Fragment,null,L.createElement("h2",null,"Unexpected Application Error!"),L.createElement("h3",{style:{fontStyle:"italic"}},e),n?L.createElement("pre",{style:i},n):null,null)}const UC=L.createElement(jC,null);class $C extends L.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?L.createElement(er.Provider,{value:this.props.routeContext},L.createElement(X0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function BC(t){let{routeContext:e,match:n,children:r}=t,i=L.useContext(Rp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),L.createElement(er.Provider,{value:e},r)}function zC(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||De(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let p=o[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=d),p.route.id){let{loaderData:m,errors:E}=n,R=p.route.loader&&m[p.route.id]===void 0&&(!E||E[p.route.id]===void 0);if(p.route.lazy||R){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,p,m)=>{let E,R=!1,P=null,x=null;n&&(E=l&&p.route.id?l[p.route.id]:void 0,P=p.route.errorElement||UC,u&&(c<0&&m===0?(QC("route-fallback"),R=!0,x=null):c===m&&(R=!0,x=p.route.hydrateFallbackElement||null)));let w=e.concat(o.slice(0,m+1)),v=()=>{let T;return E?T=P:R?T=x:p.route.Component?T=L.createElement(p.route.Component,null):p.route.element?T=p.route.element:T=d,L.createElement(BC,{match:p,routeContext:{outlet:d,matches:w,isDataRoute:n!=null},children:T})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?L.createElement($C,{location:n.location,revalidation:n.revalidation,component:P,error:E,children:v(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):v()},null)}var tE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(tE||{}),nE=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(nE||{});function WC(t){let e=L.useContext(Rp);return e||De(!1),e}function qC(t){let e=L.useContext(OC);return e||De(!1),e}function HC(t){let e=L.useContext(er);return e||De(!1),e}function rE(t){let e=HC(),n=e.matches[e.matches.length-1];return n.route.id||De(!1),n.route.id}function GC(){var t;let e=L.useContext(X0),n=qC(),r=rE();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function KC(){let{router:t}=WC(tE.UseNavigateStable),e=rE(nE.UseNavigateStable),n=L.useRef(!1);return J0(()=>{n.current=!0}),L.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,la({fromRouteId:e},s)))},[t,e])}const qy={};function QC(t,e,n){qy[t]||(qy[t]=!0)}function YC(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Pp(t){let{to:e,replace:n,state:r,relative:i}=t;Fs()||De(!1);let{future:s,static:o}=L.useContext(zr),{matches:l}=L.useContext(er),{pathname:u}=Pi(),c=js(),d=Cp(e,Ap(l,s.v7_relativeSplatPath),u,i==="path"),p=JSON.stringify(d);return L.useEffect(()=>c(JSON.parse(p),{replace:n,state:r,relative:i}),[c,p,i,n,r]),null}function Ht(t){De(!1)}function XC(t){let{basename:e="/",children:n=null,location:r,navigationType:i=_r.Pop,navigator:s,static:o=!1,future:l}=t;Fs()&&De(!1);let u=e.replace(/^\/*/,"/"),c=L.useMemo(()=>({basename:u,navigator:s,static:o,future:la({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=Ms(r));let{pathname:d="/",search:p="",hash:m="",state:E=null,key:R="default"}=r,P=L.useMemo(()=>{let x=Sp(d,u);return x==null?null:{location:{pathname:x,search:p,hash:m,state:E,key:R},navigationType:i}},[u,d,p,m,E,R,i]);return P==null?null:L.createElement(zr.Provider,{value:c},L.createElement(pc.Provider,{children:n,value:P}))}function JC(t){let{children:e,location:n}=t;return MC(Gd(e),n)}new Promise(()=>{});function Gd(t,e){e===void 0&&(e=[]);let n=[];return L.Children.forEach(t,(r,i)=>{if(!L.isValidElement(r))return;let s=[...e,i];if(r.type===L.Fragment){n.push.apply(n,Gd(r.props.children,s));return}r.type!==Ht&&De(!1),!r.props.index||!r.props.children||De(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Gd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Kd(){return Kd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Kd.apply(this,arguments)}function ZC(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function eR(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function tR(t,e){return t.button===0&&(!e||e==="_self")&&!eR(t)}function Qd(t){return t===void 0&&(t=""),new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((e,n)=>{let r=t[n];return e.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function nR(t,e){let n=Qd(t);return e&&e.forEach((r,i)=>{n.has(i)||e.getAll(i).forEach(s=>{n.append(i,s)})}),n}const rR=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],iR="6";try{window.__reactRouterVersion=iR}catch{}const sR="startTransition",Hy=YS[sR];function oR(t){let{basename:e,children:n,future:r,window:i}=t,s=L.useRef();s.current==null&&(s.current=lC({window:i,v5Compat:!0}));let o=s.current,[l,u]=L.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=L.useCallback(p=>{c&&Hy?Hy(()=>u(p)):u(p)},[u,c]);return L.useLayoutEffect(()=>o.listen(d),[o,d]),L.useEffect(()=>YC(r),[r]),L.createElement(XC,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const aR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",lR=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ke=L.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:d,viewTransition:p}=e,m=ZC(e,rR),{basename:E}=L.useContext(zr),R,P=!1;if(typeof c=="string"&&lR.test(c)&&(R=c,aR))try{let T=new URL(window.location.href),b=c.startsWith("//")?new URL(T.protocol+c):new URL(c),F=Sp(b.pathname,E);b.origin===T.origin&&F!=null?c=F+b.search+b.hash:P=!0}catch{}let x=VC(c,{relative:i}),w=uR(c,{replace:o,state:l,target:u,preventScrollReset:d,relative:i,viewTransition:p});function v(T){r&&r(T),T.defaultPrevented||w(T)}return L.createElement("a",Kd({},m,{href:R||x,onClick:P||s?r:v,ref:n,target:u}))});var Gy;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Gy||(Gy={}));var Ky;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Ky||(Ky={}));function uR(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,u=js(),c=Pi(),d=eE(t,{relative:o});return L.useCallback(p=>{if(tR(p,n)){p.preventDefault();let m=r!==void 0?r:Su(c)===Su(d);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[c,u,d,r,i,n,t,s,o,l])}function iE(t){let e=L.useRef(Qd(t)),n=L.useRef(!1),r=Pi(),i=L.useMemo(()=>nR(r.search,n.current?null:e.current),[r.search]),s=js(),o=L.useCallback((l,u)=>{const c=Qd(typeof l=="function"?l(i):l);n.current=!0,s("?"+c,u)},[s,i]);return[i,o]}var We=function(){return We=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},We.apply(this,arguments)};function ws(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var ve="-ms-",Mo="-moz-",ce="-webkit-",sE="comm",mc="rule",kp="decl",cR="@import",oE="@keyframes",hR="@layer",aE=Math.abs,xp=String.fromCharCode,Yd=Object.assign;function dR(t,e){return Be(t,0)^45?(((e<<2^Be(t,0))<<2^Be(t,1))<<2^Be(t,2))<<2^Be(t,3):0}function lE(t){return t.trim()}function bn(t,e){return(t=e.exec(t))?t[0]:t}function ee(t,e,n){return t.replace(e,n)}function Ul(t,e,n){return t.indexOf(e,n)}function Be(t,e){return t.charCodeAt(e)|0}function Es(t,e,n){return t.slice(e,n)}function mn(t){return t.length}function uE(t){return t.length}function To(t,e){return e.push(t),t}function fR(t,e){return t.map(e).join("")}function Qy(t,e){return t.filter(function(n){return!bn(n,e)})}var gc=1,Ts=1,cE=0,Zt=0,Oe=0,Us="";function yc(t,e,n,r,i,s,o,l){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:gc,column:Ts,length:o,return:"",siblings:l}}function ur(t,e){return Yd(yc("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Mi(t){for(;t.root;)t=ur(t.root,{children:[t]});To(t,t.siblings)}function pR(){return Oe}function mR(){return Oe=Zt>0?Be(Us,--Zt):0,Ts--,Oe===10&&(Ts=1,gc--),Oe}function un(){return Oe=Zt<cE?Be(Us,Zt++):0,Ts++,Oe===10&&(Ts=1,gc++),Oe}function li(){return Be(Us,Zt)}function $l(){return Zt}function vc(t,e){return Es(Us,t,e)}function Xd(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function gR(t){return gc=Ts=1,cE=mn(Us=t),Zt=0,[]}function yR(t){return Us="",t}function Lh(t){return lE(vc(Zt-1,Jd(t===91?t+2:t===40?t+1:t)))}function vR(t){for(;(Oe=li())&&Oe<33;)un();return Xd(t)>2||Xd(Oe)>3?"":" "}function _R(t,e){for(;--e&&un()&&!(Oe<48||Oe>102||Oe>57&&Oe<65||Oe>70&&Oe<97););return vc(t,$l()+(e<6&&li()==32&&un()==32))}function Jd(t){for(;un();)switch(Oe){case t:return Zt;case 34:case 39:t!==34&&t!==39&&Jd(Oe);break;case 40:t===41&&Jd(t);break;case 92:un();break}return Zt}function wR(t,e){for(;un()&&t+Oe!==57;)if(t+Oe===84&&li()===47)break;return"/*"+vc(e,Zt-1)+"*"+xp(t===47?t:un())}function ER(t){for(;!Xd(li());)un();return vc(t,Zt)}function TR(t){return yR(Bl("",null,null,null,[""],t=gR(t),0,[0],t))}function Bl(t,e,n,r,i,s,o,l,u){for(var c=0,d=0,p=o,m=0,E=0,R=0,P=1,x=1,w=1,v=0,T="",b=i,F=s,V=r,_=T;x;)switch(R=v,v=un()){case 40:if(R!=108&&Be(_,p-1)==58){Ul(_+=ee(Lh(v),"&","&\f"),"&\f",aE(c?l[c-1]:0))!=-1&&(w=-1);break}case 34:case 39:case 91:_+=Lh(v);break;case 9:case 10:case 13:case 32:_+=vR(R);break;case 92:_+=_R($l()-1,7);continue;case 47:switch(li()){case 42:case 47:To(IR(wR(un(),$l()),e,n,u),u);break;default:_+="/"}break;case 123*P:l[c++]=mn(_)*w;case 125*P:case 59:case 0:switch(v){case 0:case 125:x=0;case 59+d:w==-1&&(_=ee(_,/\f/g,"")),E>0&&mn(_)-p&&To(E>32?Xy(_+";",r,n,p-1,u):Xy(ee(_," ","")+";",r,n,p-2,u),u);break;case 59:_+=";";default:if(To(V=Yy(_,e,n,c,d,i,l,T,b=[],F=[],p,s),s),v===123)if(d===0)Bl(_,e,V,V,b,s,p,l,F);else switch(m===99&&Be(_,3)===110?100:m){case 100:case 108:case 109:case 115:Bl(t,V,V,r&&To(Yy(t,V,V,0,0,i,l,T,i,b=[],p,F),F),i,F,p,l,r?b:F);break;default:Bl(_,V,V,V,[""],F,0,l,F)}}c=d=E=0,P=w=1,T=_="",p=o;break;case 58:p=1+mn(_),E=R;default:if(P<1){if(v==123)--P;else if(v==125&&P++==0&&mR()==125)continue}switch(_+=xp(v),v*P){case 38:w=d>0?1:(_+="\f",-1);break;case 44:l[c++]=(mn(_)-1)*w,w=1;break;case 64:li()===45&&(_+=Lh(un())),m=li(),d=p=mn(T=_+=ER($l())),v++;break;case 45:R===45&&mn(_)==2&&(P=0)}}return s}function Yy(t,e,n,r,i,s,o,l,u,c,d,p){for(var m=i-1,E=i===0?s:[""],R=uE(E),P=0,x=0,w=0;P<r;++P)for(var v=0,T=Es(t,m+1,m=aE(x=o[P])),b=t;v<R;++v)(b=lE(x>0?E[v]+" "+T:ee(T,/&\f/g,E[v])))&&(u[w++]=b);return yc(t,e,n,i===0?mc:l,u,c,d,p)}function IR(t,e,n,r){return yc(t,e,n,sE,xp(pR()),Es(t,2,-2),0,r)}function Xy(t,e,n,r,i){return yc(t,e,n,kp,Es(t,0,r),Es(t,r+1,-1),r,i)}function hE(t,e,n){switch(dR(t,e)){case 5103:return ce+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ce+t+t;case 4789:return Mo+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return ce+t+Mo+t+ve+t+t;case 5936:switch(Be(t,e+11)){case 114:return ce+t+ve+ee(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return ce+t+ve+ee(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return ce+t+ve+ee(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return ce+t+ve+t+t;case 6165:return ce+t+ve+"flex-"+t+t;case 5187:return ce+t+ee(t,/(\w+).+(:[^]+)/,ce+"box-$1$2"+ve+"flex-$1$2")+t;case 5443:return ce+t+ve+"flex-item-"+ee(t,/flex-|-self/g,"")+(bn(t,/flex-|baseline/)?"":ve+"grid-row-"+ee(t,/flex-|-self/g,""))+t;case 4675:return ce+t+ve+"flex-line-pack"+ee(t,/align-content|flex-|-self/g,"")+t;case 5548:return ce+t+ve+ee(t,"shrink","negative")+t;case 5292:return ce+t+ve+ee(t,"basis","preferred-size")+t;case 6060:return ce+"box-"+ee(t,"-grow","")+ce+t+ve+ee(t,"grow","positive")+t;case 4554:return ce+ee(t,/([^-])(transform)/g,"$1"+ce+"$2")+t;case 6187:return ee(ee(ee(t,/(zoom-|grab)/,ce+"$1"),/(image-set)/,ce+"$1"),t,"")+t;case 5495:case 3959:return ee(t,/(image-set\([^]*)/,ce+"$1$`$1");case 4968:return ee(ee(t,/(.+:)(flex-)?(.*)/,ce+"box-pack:$3"+ve+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ce+t+t;case 4200:if(!bn(t,/flex-|baseline/))return ve+"grid-column-align"+Es(t,e)+t;break;case 2592:case 3360:return ve+ee(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,bn(r.props,/grid-\w+-end/)})?~Ul(t+(n=n[e].value),"span",0)?t:ve+ee(t,"-start","")+t+ve+"grid-row-span:"+(~Ul(n,"span",0)?bn(n,/\d+/):+bn(n,/\d+/)-+bn(t,/\d+/))+";":ve+ee(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return bn(r.props,/grid-\w+-start/)})?t:ve+ee(ee(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return ee(t,/(.+)-inline(.+)/,ce+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(mn(t)-1-e>6)switch(Be(t,e+1)){case 109:if(Be(t,e+4)!==45)break;case 102:return ee(t,/(.+:)(.+)-([^]+)/,"$1"+ce+"$2-$3$1"+Mo+(Be(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Ul(t,"stretch",0)?hE(ee(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return ee(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,l,u,c){return ve+i+":"+s+c+(o?ve+i+"-span:"+(l?u:+u-+s)+c:"")+t});case 4949:if(Be(t,e+6)===121)return ee(t,":",":"+ce)+t;break;case 6444:switch(Be(t,Be(t,14)===45?18:11)){case 120:return ee(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ce+(Be(t,14)===45?"inline-":"")+"box$3$1"+ce+"$2$3$1"+ve+"$2box$3")+t;case 100:return ee(t,":",":"+ve)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ee(t,"scroll-","scroll-snap-")+t}return t}function Au(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function SR(t,e,n,r){switch(t.type){case hR:if(t.children.length)break;case cR:case kp:return t.return=t.return||t.value;case sE:return"";case oE:return t.return=t.value+"{"+Au(t.children,r)+"}";case mc:if(!mn(t.value=t.props.join(",")))return""}return mn(n=Au(t.children,r))?t.return=t.value+"{"+n+"}":""}function AR(t){var e=uE(t);return function(n,r,i,s){for(var o="",l=0;l<e;l++)o+=t[l](n,r,i,s)||"";return o}}function CR(t){return function(e){e.root||(e=e.return)&&t(e)}}function RR(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case kp:t.return=hE(t.value,t.length,n);return;case oE:return Au([ur(t,{value:ee(t.value,"@","@"+ce)})],r);case mc:if(t.length)return fR(n=t.props,function(i){switch(bn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Mi(ur(t,{props:[ee(i,/:(read-\w+)/,":"+Mo+"$1")]})),Mi(ur(t,{props:[i]})),Yd(t,{props:Qy(n,r)});break;case"::placeholder":Mi(ur(t,{props:[ee(i,/:(plac\w+)/,":"+ce+"input-$1")]})),Mi(ur(t,{props:[ee(i,/:(plac\w+)/,":"+Mo+"$1")]})),Mi(ur(t,{props:[ee(i,/:(plac\w+)/,ve+"input-$1")]})),Mi(ur(t,{props:[i]})),Yd(t,{props:Qy(n,r)});break}return""})}}var PR={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Lt={},Is=typeof process<"u"&&Lt!==void 0&&(Lt.REACT_APP_SC_ATTR||Lt.SC_ATTR)||"data-styled",dE="active",fE="data-styled-version",_c="6.1.19",Np=`/*!sc*/
`,Cu=typeof window<"u"&&typeof document<"u",kR=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Lt!==void 0&&Lt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Lt.REACT_APP_SC_DISABLE_SPEEDY!==""?Lt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Lt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Lt!==void 0&&Lt.SC_DISABLE_SPEEDY!==void 0&&Lt.SC_DISABLE_SPEEDY!==""&&Lt.SC_DISABLE_SPEEDY!=="false"&&Lt.SC_DISABLE_SPEEDY),xR={},wc=Object.freeze([]),Ss=Object.freeze({});function pE(t,e,n){return n===void 0&&(n=Ss),t.theme!==n.theme&&t.theme||e||n.theme}var mE=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),NR=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,DR=/(^-|-$)/g;function Jy(t){return t.replace(NR,"-").replace(DR,"")}var bR=/(a)(d)/gi,wl=52,Zy=function(t){return String.fromCharCode(t+(t>25?39:97))};function Zd(t){var e,n="";for(e=Math.abs(t);e>wl;e=e/wl|0)n=Zy(e%wl)+n;return(Zy(e%wl)+n).replace(bR,"$1-$2")}var Mh,gE=5381,Zi=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},yE=function(t){return Zi(gE,t)};function Dp(t){return Zd(yE(t)>>>0)}function OR(t){return t.displayName||t.name||"Component"}function Fh(t){return typeof t=="string"&&!0}var vE=typeof Symbol=="function"&&Symbol.for,_E=vE?Symbol.for("react.memo"):60115,VR=vE?Symbol.for("react.forward_ref"):60112,LR={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},MR={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},wE={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},FR=((Mh={})[VR]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Mh[_E]=wE,Mh);function ev(t){return("type"in(e=t)&&e.type.$$typeof)===_E?wE:"$$typeof"in t?FR[t.$$typeof]:LR;var e}var jR=Object.defineProperty,UR=Object.getOwnPropertyNames,tv=Object.getOwnPropertySymbols,$R=Object.getOwnPropertyDescriptor,BR=Object.getPrototypeOf,nv=Object.prototype;function EE(t,e,n){if(typeof e!="string"){if(nv){var r=BR(e);r&&r!==nv&&EE(t,r,n)}var i=UR(e);tv&&(i=i.concat(tv(e)));for(var s=ev(t),o=ev(e),l=0;l<i.length;++l){var u=i[l];if(!(u in MR||n&&n[u]||o&&u in o||s&&u in s)){var c=$R(e,u);try{jR(t,u,c)}catch{}}}}return t}function mi(t){return typeof t=="function"}function bp(t){return typeof t=="object"&&"styledComponentId"in t}function ii(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Ru(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function ua(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function ef(t,e,n){if(n===void 0&&(n=!1),!n&&!ua(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=ef(t[r],e[r]);else if(ua(e))for(var r in e)t[r]=ef(t[r],e[r]);return t}function Op(t,e){Object.defineProperty(t,"toString",{value:e})}function gi(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var zR=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw gi(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var l=this.indexOfGroup(e+1),u=(o=0,n.length);o<u;o++)this.tag.insertRule(l,n[o])&&(this.groupSizes[e]++,l++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(Np);return n},t}(),zl=new Map,Pu=new Map,Wl=1,El=function(t){if(zl.has(t))return zl.get(t);for(;Pu.has(Wl);)Wl++;var e=Wl++;return zl.set(t,e),Pu.set(e,t),e},WR=function(t,e){Wl=e+1,zl.set(t,e),Pu.set(e,t)},qR="style[".concat(Is,"][").concat(fE,'="').concat(_c,'"]'),HR=new RegExp("^".concat(Is,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),GR=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},KR=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(Np),i=[],s=0,o=r.length;s<o;s++){var l=r[s].trim();if(l){var u=l.match(HR);if(u){var c=0|parseInt(u[1],10),d=u[2];c!==0&&(WR(d,c),GR(t,d,u[3]),t.getTag().insertRules(c,i)),i.length=0}else i.push(l)}}},rv=function(t){for(var e=document.querySelectorAll(qR),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute(Is)!==dE&&(KR(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function QR(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var TE=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(l){var u=Array.from(l.querySelectorAll("style[".concat(Is,"]")));return u[u.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Is,dE),r.setAttribute(fE,_c);var o=QR();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},YR=function(){function t(e){this.element=TE(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw gi(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),XR=function(){function t(e){this.element=TE(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),JR=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),iv=Cu,ZR={isServer:!Cu,useCSSOMInjection:!kR},ku=function(){function t(e,n,r){e===void 0&&(e=Ss),n===void 0&&(n={});var i=this;this.options=We(We({},ZR),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Cu&&iv&&(iv=!1,rv(this)),Op(this,function(){return function(s){for(var o=s.getTag(),l=o.length,u="",c=function(p){var m=function(w){return Pu.get(w)}(p);if(m===void 0)return"continue";var E=s.names.get(m),R=o.getGroup(p);if(E===void 0||!E.size||R.length===0)return"continue";var P="".concat(Is,".g").concat(p,'[id="').concat(m,'"]'),x="";E!==void 0&&E.forEach(function(w){w.length>0&&(x+="".concat(w,","))}),u+="".concat(R).concat(P,'{content:"').concat(x,'"}').concat(Np)},d=0;d<l;d++)c(d);return u}(i)})}return t.registerId=function(e){return El(e)},t.prototype.rehydrate=function(){!this.server&&Cu&&rv(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(We(We({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new JR(i):r?new YR(i):new XR(i)}(this.options),new zR(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(El(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(El(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(El(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),eP=/&/g,tP=/^\s*\/\/.*$/gm;function IE(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=IE(n.children,e)),n})}function nP(t){var e,n,r,i=Ss,s=i.options,o=s===void 0?Ss:s,l=i.plugins,u=l===void 0?wc:l,c=function(m,E,R){return R.startsWith(n)&&R.endsWith(n)&&R.replaceAll(n,"").length>0?".".concat(e):m},d=u.slice();d.push(function(m){m.type===mc&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(eP,n).replace(r,c))}),o.prefix&&d.push(RR),d.push(SR);var p=function(m,E,R,P){E===void 0&&(E=""),R===void 0&&(R=""),P===void 0&&(P="&"),e=P,n=E,r=new RegExp("\\".concat(n,"\\b"),"g");var x=m.replace(tP,""),w=TR(R||E?"".concat(R," ").concat(E," { ").concat(x," }"):x);o.namespace&&(w=IE(w,o.namespace));var v=[];return Au(w,AR(d.concat(CR(function(T){return v.push(T)})))),v};return p.hash=u.length?u.reduce(function(m,E){return E.name||gi(15),Zi(m,E.name)},gE).toString():"",p}var rP=new ku,tf=nP(),SE=Ne.createContext({shouldForwardProp:void 0,styleSheet:rP,stylis:tf});SE.Consumer;Ne.createContext(void 0);function nf(){return L.useContext(SE)}var AE=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=tf);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Op(this,function(){throw gi(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=tf),this.name+e.hash},t}(),iP=function(t){return t>="A"&&t<="Z"};function sv(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;iP(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var CE=function(t){return t==null||t===!1||t===""},RE=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!CE(s)&&(Array.isArray(s)&&s.isCss||mi(s)?r.push("".concat(sv(i),":"),s,";"):ua(s)?r.push.apply(r,ws(ws(["".concat(i," {")],RE(s),!1),["}"],!1)):r.push("".concat(sv(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in PR||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function xr(t,e,n,r){if(CE(t))return[];if(bp(t))return[".".concat(t.styledComponentId)];if(mi(t)){if(!mi(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return xr(i,e,n,r)}var s;return t instanceof AE?n?(t.inject(n,r),[t.getName(r)]):[t]:ua(t)?RE(t):Array.isArray(t)?Array.prototype.concat.apply(wc,t.map(function(o){return xr(o,e,n,r)})):[t.toString()]}function PE(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(mi(n)&&!bp(n))return!1}return!0}var sP=yE(_c),oP=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&PE(e),this.componentId=n,this.baseHash=Zi(sP,n),this.baseStyle=r,ku.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=ii(i,this.staticRulesId);else{var s=Ru(xr(this.rules,e,n,r)),o=Zd(Zi(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var l=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,l)}i=ii(i,o),this.staticRulesId=o}else{for(var u=Zi(this.baseHash,r.hash),c="",d=0;d<this.rules.length;d++){var p=this.rules[d];if(typeof p=="string")c+=p;else if(p){var m=Ru(xr(p,e,n,r));u=Zi(u,m+d),c+=m}}if(c){var E=Zd(u>>>0);n.hasNameForId(this.componentId,E)||n.insertRules(this.componentId,E,r(c,".".concat(E),void 0,this.componentId)),i=ii(i,E)}}return i},t}(),ca=Ne.createContext(void 0);ca.Consumer;function aP(t){var e=Ne.useContext(ca),n=L.useMemo(function(){return function(r,i){if(!r)throw gi(14);if(mi(r)){var s=r(i);return s}if(Array.isArray(r)||typeof r!="object")throw gi(8);return i?We(We({},i),r):r}(t.theme,e)},[t.theme,e]);return t.children?Ne.createElement(ca.Provider,{value:n},t.children):null}var jh={};function lP(t,e,n){var r=bp(t),i=t,s=!Fh(t),o=e.attrs,l=o===void 0?wc:o,u=e.componentId,c=u===void 0?function(b,F){var V=typeof b!="string"?"sc":Jy(b);jh[V]=(jh[V]||0)+1;var _="".concat(V,"-").concat(Dp(_c+V+jh[V]));return F?"".concat(F,"-").concat(_):_}(e.displayName,e.parentComponentId):u,d=e.displayName,p=d===void 0?function(b){return Fh(b)?"styled.".concat(b):"Styled(".concat(OR(b),")")}(t):d,m=e.displayName&&e.componentId?"".concat(Jy(e.displayName),"-").concat(e.componentId):e.componentId||c,E=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,R=e.shouldForwardProp;if(r&&i.shouldForwardProp){var P=i.shouldForwardProp;if(e.shouldForwardProp){var x=e.shouldForwardProp;R=function(b,F){return P(b,F)&&x(b,F)}}else R=P}var w=new oP(n,m,r?i.componentStyle:void 0);function v(b,F){return function(V,_,y){var I=V.attrs,A=V.componentStyle,k=V.defaultProps,N=V.foldedComponentIds,C=V.styledComponentId,It=V.target,Rn=Ne.useContext(ca),qr=nf(),Dt=V.shouldForwardProp||qr.shouldForwardProp,B=pE(_,Rn,k)||Ss,H=function(St,pt,At){for(var Hr,Pn=We(We({},pt),{className:void 0,theme:At}),rr=0;rr<St.length;rr+=1){var kn=mi(Hr=St[rr])?Hr(Pn):Hr;for(var qt in kn)Pn[qt]=qt==="className"?ii(Pn[qt],kn[qt]):qt==="style"?We(We({},Pn[qt]),kn[qt]):kn[qt]}return pt.className&&(Pn.className=ii(Pn.className,pt.className)),Pn}(I,_,B),J=H.as||It,he={};for(var ne in H)H[ne]===void 0||ne[0]==="$"||ne==="as"||ne==="theme"&&H.theme===B||(ne==="forwardedAs"?he.as=H.forwardedAs:Dt&&!Dt(ne,J)||(he[ne]=H[ne]));var we=function(St,pt){var At=nf(),Hr=St.generateAndInjectStyles(pt,At.styleSheet,At.stylis);return Hr}(A,H),bt=ii(N,C);return we&&(bt+=" "+we),H.className&&(bt+=" "+H.className),he[Fh(J)&&!mE.has(J)?"class":"className"]=bt,y&&(he.ref=y),L.createElement(J,he)}(T,b,F)}v.displayName=p;var T=Ne.forwardRef(v);return T.attrs=E,T.componentStyle=w,T.displayName=p,T.shouldForwardProp=R,T.foldedComponentIds=r?ii(i.foldedComponentIds,i.styledComponentId):"",T.styledComponentId=m,T.target=r?i.target:t,Object.defineProperty(T,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(b){this._foldedDefaultProps=r?function(F){for(var V=[],_=1;_<arguments.length;_++)V[_-1]=arguments[_];for(var y=0,I=V;y<I.length;y++)ef(F,I[y],!0);return F}({},i.defaultProps,b):b}}),Op(T,function(){return".".concat(T.styledComponentId)}),s&&EE(T,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),T}function ov(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var av=function(t){return Object.assign(t,{isCss:!0})};function ls(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(mi(t)||ua(t))return av(xr(ov(wc,ws([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?xr(r):av(xr(ov(r,e)))}function rf(t,e,n){if(n===void 0&&(n=Ss),!e)throw gi(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,ls.apply(void 0,ws([i],s,!1)))};return r.attrs=function(i){return rf(t,e,We(We({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return rf(t,e,We(We({},n),i))},r}var kE=function(t){return rf(lP,t)},K=kE;mE.forEach(function(t){K[t]=kE(t)});var uP=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=PE(e),ku.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,r,i){var s=i(Ru(xr(this.rules,n,r,i)),""),o=this.componentId+e;r.insertRules(o,o,s)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,r,i){e>2&&ku.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,n,r,i)},t}();function cP(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=ls.apply(void 0,ws([t],e,!1)),i="sc-global-".concat(Dp(JSON.stringify(r))),s=new uP(r,i),o=function(u){var c=nf(),d=Ne.useContext(ca),p=Ne.useRef(c.styleSheet.allocateGSInstance(i)).current;return c.styleSheet.server&&l(p,u,c.styleSheet,d,c.stylis),Ne.useLayoutEffect(function(){if(!c.styleSheet.server)return l(p,u,c.styleSheet,d,c.stylis),function(){return s.removeStyles(p,c.styleSheet)}},[p,u,c.styleSheet,d,c.stylis]),null};function l(u,c,d,p,m){if(s.isStatic)s.renderStyles(u,xR,d,m);else{var E=We(We({},c),{theme:pE(c,p,o.defaultProps)});s.renderStyles(u,E,d,m)}}return Ne.memo(o)}function hP(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=Ru(ls.apply(void 0,ws([t],e,!1))),i=Dp(r);return new AE(i,r)}const dP=K.main`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: ${({theme:t})=>t.spacing.xl};
`;function en({children:t}){return S.jsx(dP,{children:t})}const fP=K.div`
  background-color: ${({theme:t})=>t.colors.surface};
  border: 1px solid ${({theme:t})=>t.colors.border};
  border-radius: ${({theme:t})=>t.borderRadius};
  padding: ${({theme:t})=>t.spacing.xl};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  & > h2 {
    margin-bottom: ${({theme:t})=>t.spacing.sm};
  }

  & > p {
    margin-bottom: ${({theme:t})=>t.spacing.lg};
    color: ${({theme:t})=>t.colors.muted};
  }
`;function Nt({children:t,...e}){return S.jsx(fP,{...e,children:t})}const pP={default:ls`
    background-color: ${({theme:t})=>t.colors.primary};
    color: ${({theme:t})=>t.colors.onPrimary};
    border: 1px solid transparent;
  `,ghost:ls`
    background-color: transparent;
    color: ${({theme:t})=>t.colors.primary};
    border: 1px solid ${({theme:t})=>t.colors.primary};
  `,danger:ls`
    background-color: ${({theme:t})=>t.colors.danger};
    color: ${({theme:t})=>t.colors.onPrimary};
    border: 1px solid transparent;
  `},mP=K.button`
  padding: ${({theme:t})=>t.spacing.md} ${({theme:t})=>t.spacing.lg};
  border-radius: ${({theme:t})=>t.borderRadius};
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 100px; /* evita o botão “encolher” no loading */

  ${({variant:t="default"})=>pP[t]}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`,gP=hP`
  to {
    transform: rotate(360deg);
  }
`,yP=K.div`
  width: 18px;
  height: 18px;
  border: 2px solid ${({theme:t})=>t.colors.onPrimary};
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${gP} 0.6s linear infinite;
`;function Xe({children:t,onClick:e,type:n="button",variant:r="default",loading:i=!1,disabled:s=!1}){return S.jsx(mP,{type:n,onClick:e,variant:r,disabled:s||i,children:i?S.jsx(yP,{}):t})}const vP=K.h1`
  text-align: center;
  margin-bottom: ${({theme:t})=>t.spacing.md};
`,_P=K.p`
  text-align: center;
  max-width: 50ch; /* Limita a largura para melhor leitura */
  margin: 0 auto;
  color: ${({theme:t})=>t.colors.muted};
`,wP=K.ul`
  list-style: none; /* Remove as bolinhas padrão */
  padding: 0;
  margin: ${({theme:t})=>t.spacing.xl} 0;

  li {
    display: flex;
    align-items: flex-start;
    line-height: 1.6;
    font-size: 1.05rem; /* Leve aumento para destaque */

    &:not(:last-child) {
      margin-bottom: ${({theme:t})=>t.spacing.md};
    }

    /* Adiciona o ícone antes de cada item */
    &::before {
      display: inline-block;
      font-size: 1.2rem;
      margin-right: ${({theme:t})=>t.spacing.md};
      margin-top: 1px; /* Ajuste fino de alinhamento vertical */
    }

    /* Ícone para o primeiro item (Clientes) */
    &:first-child::before {
      content: '👤';
    }

    /* Ícone para o segundo item (Barbeiros) */
    &:nth-child(2)::before {
      content: '💈';
    }
  }
`,EP=K.div`
  display: flex;
  justify-content: center;
  margin-top: ${({theme:t})=>t.spacing.xl}; /* Mais margem para separar a ação */
`;function TP(){return S.jsx(en,{children:S.jsxs(Nt,{children:[S.jsx(vP,{children:"Bem-vindo ao BarberBook ✂️"}),S.jsx(_P,{children:"O BarberBook é a plataforma ideal para conectar barbearias e clientes de forma simples e moderna."}),S.jsxs(wP,{children:[S.jsxs("li",{children:[S.jsx("strong",{children:"Clientes"}),": encontram barbearias, agendam horários e gerenciam suas reservas em um só lugar."]}),S.jsxs("li",{children:[S.jsx("strong",{children:"Barbeiros"}),": gerenciam sua agenda, divulgam seu trabalho e compartilham links de agendamento de forma prática."]})]}),S.jsx("p",{children:"Para começar, basta criar sua conta ou fazer login. O processo é rápido e unificado para todos os usuários."}),S.jsx(EP,{children:S.jsx(Ke,{to:"/auth",children:S.jsx(Xe,{children:"Criar conta / Entrar"})})})]})})}var lv={};/**
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
 */const xE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},IP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},NE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,E=c&63;u||(E=64,o||(m=64)),r.push(n[d],n[p],n[m],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):IP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new SP;const m=s<<2|l>>4;if(r.push(m),c!==64){const E=l<<4&240|c>>2;if(r.push(E),p!==64){const R=c<<6&192|p;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class SP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const AP=function(t){const e=xE(t);return NE.encodeByteArray(e,!0)},xu=function(t){return AP(t).replace(/\./g,"")},DE=function(t){try{return NE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function CP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const RP=()=>CP().__FIREBASE_DEFAULTS__,PP=()=>{if(typeof process>"u"||typeof lv>"u")return;const t=lv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},kP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&DE(t[1]);return e&&JSON.parse(e)},Ec=()=>{try{return RP()||PP()||kP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},bE=t=>{var e,n;return(n=(e=Ec())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},xP=t=>{const e=bE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},OE=()=>{var t;return(t=Ec())===null||t===void 0?void 0:t.config},VE=t=>{var e;return(e=Ec())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class NP{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function DP(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[xu(JSON.stringify(n)),xu(JSON.stringify(o)),""].join(".")}/**
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
 */function ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bP(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ft())}function OP(){var t;const e=(t=Ec())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function VP(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function LP(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function MP(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function FP(){const t=ft();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function jP(){return!OP()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function UP(){try{return typeof indexedDB=="object"}catch{return!1}}function $P(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const BP="FirebaseError";class tr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=BP,Object.setPrototypeOf(this,tr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Aa.prototype.create)}}class Aa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?zP(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new tr(i,l,r)}}function zP(t,e){return t.replace(WP,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const WP=/\{\$([^}]+)}/g;function qP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Nu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(uv(s)&&uv(o)){if(!Nu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function uv(t){return t!==null&&typeof t=="object"}/**
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
 */function Ca(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Io(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function So(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function HP(t,e){const n=new GP(t,e);return n.subscribe.bind(n)}class GP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");KP(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Uh),i.error===void 0&&(i.error=Uh),i.complete===void 0&&(i.complete=Uh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function KP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Uh(){}/**
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
 */function Pe(t){return t&&t._delegate?t._delegate:t}class yi{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Zr="[DEFAULT]";/**
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
 */class QP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new NP;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(XP(e))try{this.getOrInitializeService({instanceIdentifier:Zr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Zr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zr){return this.instances.has(e)}getOptions(e=Zr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:YP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Zr){return this.component?this.component.multipleInstances?e:Zr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function YP(t){return t===Zr?void 0:t}function XP(t){return t.instantiationMode==="EAGER"}/**
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
 */class JP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new QP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const ZP={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},ek=ie.INFO,tk={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},nk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=tk[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vp{constructor(e){this.name=e,this._logLevel=ek,this._logHandler=nk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ZP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const rk=(t,e)=>e.some(n=>t instanceof n);let cv,hv;function ik(){return cv||(cv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sk(){return hv||(hv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const LE=new WeakMap,sf=new WeakMap,ME=new WeakMap,$h=new WeakMap,Lp=new WeakMap;function ok(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Nr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&LE.set(n,t)}).catch(()=>{}),Lp.set(e,t),e}function ak(t){if(sf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});sf.set(t,e)}let of={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return sf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ME.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function lk(t){of=t(of)}function uk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Bh(this),e,...n);return ME.set(r,e.sort?e.sort():[e]),Nr(r)}:sk().includes(t)?function(...e){return t.apply(Bh(this),e),Nr(LE.get(this))}:function(...e){return Nr(t.apply(Bh(this),e))}}function ck(t){return typeof t=="function"?uk(t):(t instanceof IDBTransaction&&ak(t),rk(t,ik())?new Proxy(t,of):t)}function Nr(t){if(t instanceof IDBRequest)return ok(t);if($h.has(t))return $h.get(t);const e=ck(t);return e!==t&&($h.set(t,e),Lp.set(e,t)),e}const Bh=t=>Lp.get(t);function hk(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Nr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Nr(o.result),u.oldVersion,u.newVersion,Nr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const dk=["get","getKey","getAll","getAllKeys","count"],fk=["put","add","delete","clear"],zh=new Map;function dv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(zh.get(e))return zh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=fk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||dk.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return zh.set(e,s),s}lk(t=>({...t,get:(e,n,r)=>dv(e,n)||t.get(e,n,r),has:(e,n)=>!!dv(e,n)||t.has(e,n)}));/**
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
 */class pk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(mk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function mk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const af="@firebase/app",fv="0.10.13";/**
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
 */const Gn=new Vp("@firebase/app"),gk="@firebase/app-compat",yk="@firebase/analytics-compat",vk="@firebase/analytics",_k="@firebase/app-check-compat",wk="@firebase/app-check",Ek="@firebase/auth",Tk="@firebase/auth-compat",Ik="@firebase/database",Sk="@firebase/data-connect",Ak="@firebase/database-compat",Ck="@firebase/functions",Rk="@firebase/functions-compat",Pk="@firebase/installations",kk="@firebase/installations-compat",xk="@firebase/messaging",Nk="@firebase/messaging-compat",Dk="@firebase/performance",bk="@firebase/performance-compat",Ok="@firebase/remote-config",Vk="@firebase/remote-config-compat",Lk="@firebase/storage",Mk="@firebase/storage-compat",Fk="@firebase/firestore",jk="@firebase/vertexai-preview",Uk="@firebase/firestore-compat",$k="firebase",Bk="10.14.1";/**
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
 */const lf="[DEFAULT]",zk={[af]:"fire-core",[gk]:"fire-core-compat",[vk]:"fire-analytics",[yk]:"fire-analytics-compat",[wk]:"fire-app-check",[_k]:"fire-app-check-compat",[Ek]:"fire-auth",[Tk]:"fire-auth-compat",[Ik]:"fire-rtdb",[Sk]:"fire-data-connect",[Ak]:"fire-rtdb-compat",[Ck]:"fire-fn",[Rk]:"fire-fn-compat",[Pk]:"fire-iid",[kk]:"fire-iid-compat",[xk]:"fire-fcm",[Nk]:"fire-fcm-compat",[Dk]:"fire-perf",[bk]:"fire-perf-compat",[Ok]:"fire-rc",[Vk]:"fire-rc-compat",[Lk]:"fire-gcs",[Mk]:"fire-gcs-compat",[Fk]:"fire-fst",[Uk]:"fire-fst-compat",[jk]:"fire-vertex","fire-js":"fire-js",[$k]:"fire-js-all"};/**
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
 */const Du=new Map,Wk=new Map,uf=new Map;function pv(t,e){try{t.container.addComponent(e)}catch(n){Gn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function As(t){const e=t.name;if(uf.has(e))return Gn.debug(`There were multiple attempts to register component ${e}.`),!1;uf.set(e,t);for(const n of Du.values())pv(n,t);for(const n of Wk.values())pv(n,t);return!0}function Mp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function yn(t){return t.settings!==void 0}/**
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
 */const qk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Dr=new Aa("app","Firebase",qk);/**
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
 */class Hk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new yi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Dr.create("app-deleted",{appName:this._name})}}/**
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
 */const $s=Bk;function FE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:lf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Dr.create("bad-app-name",{appName:String(i)});if(n||(n=OE()),!n)throw Dr.create("no-options");const s=Du.get(i);if(s){if(Nu(n,s.options)&&Nu(r,s.config))return s;throw Dr.create("duplicate-app",{appName:i})}const o=new JP(i);for(const u of uf.values())o.addComponent(u);const l=new Hk(n,r,o);return Du.set(i,l),l}function jE(t=lf){const e=Du.get(t);if(!e&&t===lf&&OE())return FE();if(!e)throw Dr.create("no-app",{appName:t});return e}function br(t,e,n){var r;let i=(r=zk[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gn.warn(l.join(" "));return}As(new yi(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Gk="firebase-heartbeat-database",Kk=1,ha="firebase-heartbeat-store";let Wh=null;function UE(){return Wh||(Wh=hk(Gk,Kk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ha)}catch(n){console.warn(n)}}}}).catch(t=>{throw Dr.create("idb-open",{originalErrorMessage:t.message})})),Wh}async function Qk(t){try{const n=(await UE()).transaction(ha),r=await n.objectStore(ha).get($E(t));return await n.done,r}catch(e){if(e instanceof tr)Gn.warn(e.message);else{const n=Dr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Gn.warn(n.message)}}}async function mv(t,e){try{const r=(await UE()).transaction(ha,"readwrite");await r.objectStore(ha).put(e,$E(t)),await r.done}catch(n){if(n instanceof tr)Gn.warn(n.message);else{const r=Dr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Gn.warn(r.message)}}}function $E(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Yk=1024,Xk=30*24*60*60*1e3;class Jk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ex(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=gv();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=Xk}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Gn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=gv(),{heartbeatsToSend:r,unsentEntries:i}=Zk(this._heartbeatsCache.heartbeats),s=xu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Gn.warn(n),""}}}function gv(){return new Date().toISOString().substring(0,10)}function Zk(t,e=Yk){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),yv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),yv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ex{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return UP()?$P().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Qk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return mv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return mv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function yv(t){return xu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function tx(t){As(new yi("platform-logger",e=>new pk(e),"PRIVATE")),As(new yi("heartbeat",e=>new Jk(e),"PRIVATE")),br(af,fv,t),br(af,fv,"esm2017"),br("fire-js","")}tx("");function Fp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function BE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nx=BE,zE=new Aa("auth","Firebase",BE());/**
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
 */const bu=new Vp("@firebase/auth");function rx(t,...e){bu.logLevel<=ie.WARN&&bu.warn(`Auth (${$s}): ${t}`,...e)}function ql(t,...e){bu.logLevel<=ie.ERROR&&bu.error(`Auth (${$s}): ${t}`,...e)}/**
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
 */function hn(t,...e){throw jp(t,...e)}function wn(t,...e){return jp(t,...e)}function WE(t,e,n){const r=Object.assign(Object.assign({},nx()),{[e]:n});return new Aa("auth","Firebase",r).create(e,{appName:t.name})}function Bn(t){return WE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function jp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return zE.create(t,...e)}function X(t,e,...n){if(!t)throw jp(e,...n)}function Fn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ql(e),new Error(e)}function Kn(t,e){t||Fn(e)}/**
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
 */function cf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ix(){return vv()==="http:"||vv()==="https:"}function vv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function sx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ix()||LP()||"connection"in navigator)?navigator.onLine:!0}function ox(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ra{constructor(e,n){this.shortDelay=e,this.longDelay=n,Kn(n>e,"Short delay should be less than long delay!"),this.isMobile=bP()||MP()}get(){return sx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Up(t,e){Kn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class qE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ax={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const lx=new Ra(3e4,6e4);function nr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Cn(t,e,n,r,i={}){return HE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Ca(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return VP()||(c.referrerPolicy="no-referrer"),qE.fetch()(GE(t,t.config.apiHost,n,l),c)})}async function HE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},ax),e);try{const i=new cx(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Tl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Tl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Tl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Tl(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw WE(t,d,c);hn(t,d)}}catch(i){if(i instanceof tr)throw i;hn(t,"network-request-failed",{message:String(i)})}}async function Pa(t,e,n,r,i={}){const s=await Cn(t,e,n,r,i);return"mfaPendingCredential"in s&&hn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function GE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Up(t.config,i):`${t.config.apiScheme}://${i}`}function ux(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class cx{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(wn(this.auth,"network-request-failed")),lx.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Tl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=wn(t,e,r);return i.customData._tokenResponse=n,i}function _v(t){return t!==void 0&&t.enterprise!==void 0}class hx{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return ux(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function dx(t,e){return Cn(t,"GET","/v2/recaptchaConfig",nr(t,e))}/**
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
 */async function fx(t,e){return Cn(t,"POST","/v1/accounts:delete",e)}async function KE(t,e){return Cn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Fo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function px(t,e=!1){const n=Pe(t),r=await n.getIdToken(e),i=$p(r);X(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Fo(qh(i.auth_time)),issuedAtTime:Fo(qh(i.iat)),expirationTime:Fo(qh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function qh(t){return Number(t)*1e3}function $p(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ql("JWT malformed, contained fewer than 3 sections"),null;try{const i=DE(n);return i?JSON.parse(i):(ql("Failed to decode base64 JWT payload"),null)}catch(i){return ql("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function wv(t){const e=$p(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Cs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof tr&&mx(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function mx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class gx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class hf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fo(this.lastLoginAt),this.creationTime=Fo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ou(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Cs(t,KE(n,{idToken:r}));X(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?QE(s.providerUserInfo):[],l=vx(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new hf(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function yx(t){const e=Pe(t);await Ou(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vx(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function QE(t){return t.map(e=>{var{providerId:n}=e,r=Fp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function _x(t,e){const n=await HE(t,{},async()=>{const r=Ca({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=GE(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",qE.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function wx(t,e){return Cn(t,"POST","/v2/accounts:revokeToken",nr(t,e))}/**
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
 */class us{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):wv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=wv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await _x(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new us;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(X(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(X(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new us,this.toJSON())}_performRefresh(){return Fn("not implemented")}}/**
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
 */function lr(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class jn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Fp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new hf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Cs(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return px(this,e)}reload(){return yx(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new jn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ou(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(yn(this.auth.app))return Promise.reject(Bn(this.auth));const e=await this.getIdToken();return await Cs(this,fx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,E=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(l=n.tenantId)!==null&&l!==void 0?l:void 0,x=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,w=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:T,emailVerified:b,isAnonymous:F,providerData:V,stsTokenManager:_}=n;X(T&&_,e,"internal-error");const y=us.fromJSON(this.name,_);X(typeof T=="string",e,"internal-error"),lr(p,e.name),lr(m,e.name),X(typeof b=="boolean",e,"internal-error"),X(typeof F=="boolean",e,"internal-error"),lr(E,e.name),lr(R,e.name),lr(P,e.name),lr(x,e.name),lr(w,e.name),lr(v,e.name);const I=new jn({uid:T,auth:e,email:m,emailVerified:b,displayName:p,isAnonymous:F,photoURL:R,phoneNumber:E,tenantId:P,stsTokenManager:y,createdAt:w,lastLoginAt:v});return V&&Array.isArray(V)&&(I.providerData=V.map(A=>Object.assign({},A))),x&&(I._redirectEventId=x),I}static async _fromIdTokenResponse(e,n,r=!1){const i=new us;i.updateFromServerResponse(n);const s=new jn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ou(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];X(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?QE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new us;l.updateFromIdToken(r);const u=new jn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new hf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const Ev=new Map;function Un(t){Kn(t instanceof Function,"Expected a class definition");let e=Ev.get(t);return e?(Kn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ev.set(t,e),e)}/**
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
 */class YE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}YE.type="NONE";const Tv=YE;/**
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
 */function Hl(t,e,n){return`firebase:${t}:${e}:${n}`}class cs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Hl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Hl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?jn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new cs(Un(Tv),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Un(Tv);const o=Hl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){const p=jn._fromJSON(e,d);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new cs(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new cs(s,e,r))}}/**
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
 */function Iv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(eT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(XE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(nT(e))return"Blackberry";if(rT(e))return"Webos";if(JE(e))return"Safari";if((e.includes("chrome/")||ZE(e))&&!e.includes("edge/"))return"Chrome";if(tT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function XE(t=ft()){return/firefox\//i.test(t)}function JE(t=ft()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ZE(t=ft()){return/crios\//i.test(t)}function eT(t=ft()){return/iemobile/i.test(t)}function tT(t=ft()){return/android/i.test(t)}function nT(t=ft()){return/blackberry/i.test(t)}function rT(t=ft()){return/webos/i.test(t)}function Bp(t=ft()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ex(t=ft()){var e;return Bp(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Tx(){return FP()&&document.documentMode===10}function iT(t=ft()){return Bp(t)||tT(t)||rT(t)||nT(t)||/windows phone/i.test(t)||eT(t)}/**
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
 */function sT(t,e=[]){let n;switch(t){case"Browser":n=Iv(ft());break;case"Worker":n=`${Iv(ft())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${$s}/${r}`}/**
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
 */class Ix{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Sx(t,e={}){return Cn(t,"GET","/v2/passwordPolicy",nr(t,e))}/**
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
 */const Ax=6;class Cx{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Ax,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class Rx{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Sv(this),this.idTokenSubscription=new Sv(this),this.beforeStateQueue=new Ix(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=zE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Un(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await cs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await KE(this,{idToken:e}),r=await jn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(yn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ou(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ox()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(yn(this.app))return Promise.reject(Bn(this));const n=e?Pe(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return yn(this.app)?Promise.reject(Bn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return yn(this.app)?Promise.reject(Bn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Un(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Sx(this),n=new Cx(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Aa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await wx(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Un(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await cs.create(this,[Un(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&rx(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ki(t){return Pe(t)}class Sv{constructor(e){this.auth=e,this.observer=null,this.addObserver=HP(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Tc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Px(t){Tc=t}function oT(t){return Tc.loadJS(t)}function kx(){return Tc.recaptchaEnterpriseScript}function xx(){return Tc.gapiScript}function Nx(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Dx="recaptcha-enterprise",bx="NO_RECAPTCHA";class Ox{constructor(e){this.type=Dx,this.auth=ki(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{dx(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new hx(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;_v(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(bx)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&_v(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=kx();u.length!==0&&(u+=l),oT(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function Av(t,e,n,r=!1){const i=new Ox(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function df(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Av(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Av(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function Vx(t,e){const n=Mp(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Nu(s,e??{}))return i;hn(i,"already-initialized")}return n.initialize({options:e})}function Lx(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Un);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Mx(t,e,n){const r=ki(t);X(r._canInitEmulator,r,"emulator-config-failed"),X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=aT(e),{host:o,port:l}=Fx(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),jx()}function aT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Fx(t){const e=aT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Cv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Cv(o)}}}function Cv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function jx(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class zp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Fn("not implemented")}_getIdTokenResponse(e){return Fn("not implemented")}_linkToIdToken(e,n){return Fn("not implemented")}_getReauthenticationResolver(e){return Fn("not implemented")}}async function Ux(t,e){return Cn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function $x(t,e){return Pa(t,"POST","/v1/accounts:signInWithPassword",nr(t,e))}async function Bx(t,e){return Cn(t,"POST","/v1/accounts:sendOobCode",nr(t,e))}async function zx(t,e){return Bx(t,e)}/**
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
 */async function Wx(t,e){return Pa(t,"POST","/v1/accounts:signInWithEmailLink",nr(t,e))}async function qx(t,e){return Pa(t,"POST","/v1/accounts:signInWithEmailLink",nr(t,e))}/**
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
 */class da extends zp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new da(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new da(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return df(e,n,"signInWithPassword",$x);case"emailLink":return Wx(e,{email:this._email,oobCode:this._password});default:hn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return df(e,r,"signUpPassword",Ux);case"emailLink":return qx(e,{idToken:n,email:this._email,oobCode:this._password});default:hn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function hs(t,e){return Pa(t,"POST","/v1/accounts:signInWithIdp",nr(t,e))}/**
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
 */const Hx="http://localhost";class vi extends zp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new vi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):hn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Fp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new vi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return hs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,hs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,hs(e,n)}buildRequest(){const e={requestUri:Hx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ca(n)}return e}}/**
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
 */function Gx(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Kx(t){const e=Io(So(t)).link,n=e?Io(So(e)).deep_link_id:null,r=Io(So(t)).deep_link_id;return(r?Io(So(r)).link:null)||r||n||e||t}class Wp{constructor(e){var n,r,i,s,o,l;const u=Io(So(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,p=Gx((i=u.mode)!==null&&i!==void 0?i:null);X(c&&d&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=Kx(e);try{return new Wp(n)}catch{return null}}}/**
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
 */class Bs{constructor(){this.providerId=Bs.PROVIDER_ID}static credential(e,n){return da._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Wp.parseLink(n);return X(r,"argument-error"),da._fromEmailAndCode(e,r.code,r.tenantId)}}Bs.PROVIDER_ID="password";Bs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Bs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class lT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ka extends lT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class pr extends ka{constructor(){super("facebook.com")}static credential(e){return vi._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pr.credential(e.oauthAccessToken)}catch{return null}}}pr.FACEBOOK_SIGN_IN_METHOD="facebook.com";pr.PROVIDER_ID="facebook.com";/**
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
 */class Vn extends ka{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return vi._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Vn.credential(n,r)}catch{return null}}}Vn.GOOGLE_SIGN_IN_METHOD="google.com";Vn.PROVIDER_ID="google.com";/**
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
 */class mr extends ka{constructor(){super("github.com")}static credential(e){return vi._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mr.credentialFromTaggedObject(e)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mr.credential(e.oauthAccessToken)}catch{return null}}}mr.GITHUB_SIGN_IN_METHOD="github.com";mr.PROVIDER_ID="github.com";/**
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
 */class gr extends ka{constructor(){super("twitter.com")}static credential(e,n){return vi._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return gr.credential(n,r)}catch{return null}}}gr.TWITTER_SIGN_IN_METHOD="twitter.com";gr.PROVIDER_ID="twitter.com";/**
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
 */async function Qx(t,e){return Pa(t,"POST","/v1/accounts:signUp",nr(t,e))}/**
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
 */class _i{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await jn._fromIdTokenResponse(e,r,i),o=Rv(r);return new _i({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Rv(r);return new _i({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Rv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Vu extends tr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Vu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Vu(e,n,r,i)}}function uT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Vu._fromErrorAndOperation(t,s,e,r):s})}async function Yx(t,e,n=!1){const r=await Cs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return _i._forOperation(t,"link",r)}/**
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
 */async function Xx(t,e,n=!1){const{auth:r}=t;if(yn(r.app))return Promise.reject(Bn(r));const i="reauthenticate";try{const s=await Cs(t,uT(r,i,e,t),n);X(s.idToken,r,"internal-error");const o=$p(s.idToken);X(o,r,"internal-error");const{sub:l}=o;return X(t.uid===l,r,"user-mismatch"),_i._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&hn(r,"user-mismatch"),s}}/**
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
 */async function cT(t,e,n=!1){if(yn(t.app))return Promise.reject(Bn(t));const r="signIn",i=await uT(t,r,e),s=await _i._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Jx(t,e){return cT(ki(t),e)}/**
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
 */async function hT(t){const e=ki(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Zx(t,e,n){if(yn(t.app))return Promise.reject(Bn(t));const r=ki(t),o=await df(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Qx).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&hT(t),u}),l=await _i._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function eN(t,e,n){return yn(t.app)?Promise.reject(Bn(t)):Jx(Pe(t),Bs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&hT(t),r})}async function tN(t,e){const n=Pe(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()},{email:s}=await zx(n.auth,i);s!==t.email&&await t.reload()}/**
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
 */async function nN(t,e){return Cn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function rN(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Pe(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Cs(r,nN(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function iN(t,e,n,r){return Pe(t).onIdTokenChanged(e,n,r)}function sN(t,e,n){return Pe(t).beforeAuthStateChanged(e,n)}function oN(t,e,n,r){return Pe(t).onAuthStateChanged(e,n,r)}function Hh(t){return Pe(t).signOut()}const Lu="__sak";/**
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
 */class dT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Lu,"1"),this.storage.removeItem(Lu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const aN=1e3,lN=10;class fT extends dT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=iT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Tx()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,lN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},aN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}fT.type="LOCAL";const uN=fT;/**
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
 */class pT extends dT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}pT.type="SESSION";const mT=pT;/**
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
 */function cN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ic{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ic(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await cN(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ic.receivers=[];/**
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
 */function qp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class hN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=qp("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function En(){return window}function dN(t){En().location.href=t}/**
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
 */function gT(){return typeof En().WorkerGlobalScope<"u"&&typeof En().importScripts=="function"}async function fN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function mN(){return gT()?self:null}/**
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
 */const yT="firebaseLocalStorageDb",gN=1,Mu="firebaseLocalStorage",vT="fbase_key";class xa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Sc(t,e){return t.transaction([Mu],e?"readwrite":"readonly").objectStore(Mu)}function yN(){const t=indexedDB.deleteDatabase(yT);return new xa(t).toPromise()}function ff(){const t=indexedDB.open(yT,gN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Mu,{keyPath:vT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Mu)?e(r):(r.close(),await yN(),e(await ff()))})})}async function Pv(t,e,n){const r=Sc(t,!0).put({[vT]:e,value:n});return new xa(r).toPromise()}async function vN(t,e){const n=Sc(t,!1).get(e),r=await new xa(n).toPromise();return r===void 0?null:r.value}function kv(t,e){const n=Sc(t,!0).delete(e);return new xa(n).toPromise()}const _N=800,wN=3;class _T{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ff(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>wN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ic._getInstance(mN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await fN(),!this.activeServiceWorker)return;this.sender=new hN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ff();return await Pv(e,Lu,"1"),await kv(e,Lu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Pv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>vN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>kv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Sc(i,!1).getAll();return new xa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_N)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_T.type="LOCAL";const EN=_T;new Ra(3e4,6e4);/**
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
 */function TN(t,e){return e?Un(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Hp extends zp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return hs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return hs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return hs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function IN(t){return cT(t.auth,new Hp(t),t.bypassAuthState)}function SN(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),Xx(n,new Hp(t),t.bypassAuthState)}async function AN(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),Yx(n,new Hp(t),t.bypassAuthState)}/**
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
 */class wT{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return IN;case"linkViaPopup":case"linkViaRedirect":return AN;case"reauthViaPopup":case"reauthViaRedirect":return SN;default:hn(this.auth,"internal-error")}}resolve(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const CN=new Ra(2e3,1e4);class es extends wT{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,es.currentPopupAction&&es.currentPopupAction.cancel(),es.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){Kn(this.filter.length===1,"Popup operations only handle one event");const e=qp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(wn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(wn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,es.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,CN.get())};e()}}es.currentPopupAction=null;/**
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
 */const RN="pendingRedirect",Gl=new Map;class PN extends wT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Gl.get(this.auth._key());if(!e){try{const r=await kN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Gl.set(this.auth._key(),e)}return this.bypassAuthState||Gl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kN(t,e){const n=DN(e),r=NN(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function xN(t,e){Gl.set(t._key(),e)}function NN(t){return Un(t._redirectPersistence)}function DN(t){return Hl(RN,t.config.apiKey,t.name)}async function bN(t,e,n=!1){if(yn(t.app))return Promise.reject(Bn(t));const r=ki(t),i=TN(r,e),o=await new PN(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const ON=10*60*1e3;class VN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!LN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ET(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(wn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ON&&this.cachedEventUids.clear(),this.cachedEventUids.has(xv(e))}saveEventToCache(e){this.cachedEventUids.add(xv(e)),this.lastProcessedEventTime=Date.now()}}function xv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ET({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function LN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ET(t);default:return!1}}/**
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
 */async function MN(t,e={}){return Cn(t,"GET","/v1/projects",e)}/**
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
 */const FN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jN=/^https?/;async function UN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await MN(t);for(const n of e)try{if($N(n))return}catch{}hn(t,"unauthorized-domain")}function $N(t){const e=cf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!jN.test(n))return!1;if(FN.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const BN=new Ra(3e4,6e4);function Nv(){const t=En().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function zN(t){return new Promise((e,n)=>{var r,i,s;function o(){Nv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Nv(),n(wn(t,"network-request-failed"))},timeout:BN.get()})}if(!((i=(r=En().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=En().gapi)===null||s===void 0)&&s.load)o();else{const l=Nx("iframefcb");return En()[l]=()=>{gapi.load?o():n(wn(t,"network-request-failed"))},oT(`${xx()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Kl=null,e})}let Kl=null;function WN(t){return Kl=Kl||zN(t),Kl}/**
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
 */const qN=new Ra(5e3,15e3),HN="__/auth/iframe",GN="emulator/auth/iframe",KN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},QN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function YN(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Up(e,GN):`https://${t.config.authDomain}/${HN}`,r={apiKey:e.apiKey,appName:t.name,v:$s},i=QN.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ca(r).slice(1)}`}async function XN(t){const e=await WN(t),n=En().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:YN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:KN,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=wn(t,"network-request-failed"),l=En().setTimeout(()=>{s(o)},qN.get());function u(){En().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const JN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ZN=500,eD=600,tD="_blank",nD="http://localhost";class Dv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rD(t,e,n,r=ZN,i=eD){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},JN),{width:r.toString(),height:i.toString(),top:s,left:o}),c=ft().toLowerCase();n&&(l=ZE(c)?tD:n),XE(c)&&(e=e||nD,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[E,R])=>`${m}${E}=${R},`,"");if(Ex(c)&&l!=="_self")return iD(e||"",l),new Dv(null);const p=window.open(e||"",l,d);X(p,t,"popup-blocked");try{p.focus()}catch{}return new Dv(p)}function iD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const sD="__/auth/handler",oD="emulator/auth/handler",aD=encodeURIComponent("fac");async function bv(t,e,n,r,i,s){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:$s,eventId:i};if(e instanceof lT){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",qP(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof ka){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${aD}=${encodeURIComponent(u)}`:"";return`${lD(t)}?${Ca(l).slice(1)}${c}`}function lD({config:t}){return t.emulator?Up(t,oD):`https://${t.authDomain}/${sD}`}/**
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
 */const Gh="webStorageSupport";class uD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=mT,this._completeRedirectFn=bN,this._overrideRedirectResult=xN}async _openPopup(e,n,r,i){var s;Kn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await bv(e,n,r,cf(),i);return rD(e,o,qp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await bv(e,n,r,cf(),i);return dN(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Kn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await XN(e),r=new VN(e);return n.register("authEvent",i=>(X(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Gh,{type:Gh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Gh];o!==void 0&&n(!!o),hn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=UN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return iT()||JE()||Bp()}}const cD=uD;var Ov="@firebase/auth",Vv="1.7.9";/**
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
 */class hD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function dD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fD(t){As(new yi("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sT(t)},c=new Rx(r,i,s,u);return Lx(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),As(new yi("auth-internal",e=>{const n=ki(e.getProvider("auth").getImmediate());return(r=>new hD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),br(Ov,Vv,dD(t)),br(Ov,Vv,"esm2017")}/**
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
 */const pD=5*60,mD=VE("authIdTokenMaxAge")||pD;let Lv=null;const gD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>mD)return;const i=n==null?void 0:n.token;Lv!==i&&(Lv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function yD(t=jE()){const e=Mp(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Vx(t,{popupRedirectResolver:cD,persistence:[EN,uN,mT]}),r=VE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=gD(s.toString());sN(n,o,()=>o(n.currentUser)),iN(n,l=>o(l))}}const i=bE("auth");return i&&Mx(n,`http://${i}`),n}function vD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Px({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=wn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",vD().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fD("Browser");var _D="firebase",wD="10.14.1";/**
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
 */br(_D,wD,"app");var Mv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ui,TT;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,y){function I(){}I.prototype=y.prototype,_.D=y.prototype,_.prototype=new I,_.prototype.constructor=_,_.C=function(A,k,N){for(var C=Array(arguments.length-2),It=2;It<arguments.length;It++)C[It-2]=arguments[It];return y.prototype[k].apply(A,C)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(_,y,I){I||(I=0);var A=Array(16);if(typeof y=="string")for(var k=0;16>k;++k)A[k]=y.charCodeAt(I++)|y.charCodeAt(I++)<<8|y.charCodeAt(I++)<<16|y.charCodeAt(I++)<<24;else for(k=0;16>k;++k)A[k]=y[I++]|y[I++]<<8|y[I++]<<16|y[I++]<<24;y=_.g[0],I=_.g[1],k=_.g[2];var N=_.g[3],C=y+(N^I&(k^N))+A[0]+3614090360&4294967295;y=I+(C<<7&4294967295|C>>>25),C=N+(k^y&(I^k))+A[1]+3905402710&4294967295,N=y+(C<<12&4294967295|C>>>20),C=k+(I^N&(y^I))+A[2]+606105819&4294967295,k=N+(C<<17&4294967295|C>>>15),C=I+(y^k&(N^y))+A[3]+3250441966&4294967295,I=k+(C<<22&4294967295|C>>>10),C=y+(N^I&(k^N))+A[4]+4118548399&4294967295,y=I+(C<<7&4294967295|C>>>25),C=N+(k^y&(I^k))+A[5]+1200080426&4294967295,N=y+(C<<12&4294967295|C>>>20),C=k+(I^N&(y^I))+A[6]+2821735955&4294967295,k=N+(C<<17&4294967295|C>>>15),C=I+(y^k&(N^y))+A[7]+4249261313&4294967295,I=k+(C<<22&4294967295|C>>>10),C=y+(N^I&(k^N))+A[8]+1770035416&4294967295,y=I+(C<<7&4294967295|C>>>25),C=N+(k^y&(I^k))+A[9]+2336552879&4294967295,N=y+(C<<12&4294967295|C>>>20),C=k+(I^N&(y^I))+A[10]+4294925233&4294967295,k=N+(C<<17&4294967295|C>>>15),C=I+(y^k&(N^y))+A[11]+2304563134&4294967295,I=k+(C<<22&4294967295|C>>>10),C=y+(N^I&(k^N))+A[12]+1804603682&4294967295,y=I+(C<<7&4294967295|C>>>25),C=N+(k^y&(I^k))+A[13]+4254626195&4294967295,N=y+(C<<12&4294967295|C>>>20),C=k+(I^N&(y^I))+A[14]+2792965006&4294967295,k=N+(C<<17&4294967295|C>>>15),C=I+(y^k&(N^y))+A[15]+1236535329&4294967295,I=k+(C<<22&4294967295|C>>>10),C=y+(k^N&(I^k))+A[1]+4129170786&4294967295,y=I+(C<<5&4294967295|C>>>27),C=N+(I^k&(y^I))+A[6]+3225465664&4294967295,N=y+(C<<9&4294967295|C>>>23),C=k+(y^I&(N^y))+A[11]+643717713&4294967295,k=N+(C<<14&4294967295|C>>>18),C=I+(N^y&(k^N))+A[0]+3921069994&4294967295,I=k+(C<<20&4294967295|C>>>12),C=y+(k^N&(I^k))+A[5]+3593408605&4294967295,y=I+(C<<5&4294967295|C>>>27),C=N+(I^k&(y^I))+A[10]+38016083&4294967295,N=y+(C<<9&4294967295|C>>>23),C=k+(y^I&(N^y))+A[15]+3634488961&4294967295,k=N+(C<<14&4294967295|C>>>18),C=I+(N^y&(k^N))+A[4]+3889429448&4294967295,I=k+(C<<20&4294967295|C>>>12),C=y+(k^N&(I^k))+A[9]+568446438&4294967295,y=I+(C<<5&4294967295|C>>>27),C=N+(I^k&(y^I))+A[14]+3275163606&4294967295,N=y+(C<<9&4294967295|C>>>23),C=k+(y^I&(N^y))+A[3]+4107603335&4294967295,k=N+(C<<14&4294967295|C>>>18),C=I+(N^y&(k^N))+A[8]+1163531501&4294967295,I=k+(C<<20&4294967295|C>>>12),C=y+(k^N&(I^k))+A[13]+2850285829&4294967295,y=I+(C<<5&4294967295|C>>>27),C=N+(I^k&(y^I))+A[2]+4243563512&4294967295,N=y+(C<<9&4294967295|C>>>23),C=k+(y^I&(N^y))+A[7]+1735328473&4294967295,k=N+(C<<14&4294967295|C>>>18),C=I+(N^y&(k^N))+A[12]+2368359562&4294967295,I=k+(C<<20&4294967295|C>>>12),C=y+(I^k^N)+A[5]+4294588738&4294967295,y=I+(C<<4&4294967295|C>>>28),C=N+(y^I^k)+A[8]+2272392833&4294967295,N=y+(C<<11&4294967295|C>>>21),C=k+(N^y^I)+A[11]+1839030562&4294967295,k=N+(C<<16&4294967295|C>>>16),C=I+(k^N^y)+A[14]+4259657740&4294967295,I=k+(C<<23&4294967295|C>>>9),C=y+(I^k^N)+A[1]+2763975236&4294967295,y=I+(C<<4&4294967295|C>>>28),C=N+(y^I^k)+A[4]+1272893353&4294967295,N=y+(C<<11&4294967295|C>>>21),C=k+(N^y^I)+A[7]+4139469664&4294967295,k=N+(C<<16&4294967295|C>>>16),C=I+(k^N^y)+A[10]+3200236656&4294967295,I=k+(C<<23&4294967295|C>>>9),C=y+(I^k^N)+A[13]+681279174&4294967295,y=I+(C<<4&4294967295|C>>>28),C=N+(y^I^k)+A[0]+3936430074&4294967295,N=y+(C<<11&4294967295|C>>>21),C=k+(N^y^I)+A[3]+3572445317&4294967295,k=N+(C<<16&4294967295|C>>>16),C=I+(k^N^y)+A[6]+76029189&4294967295,I=k+(C<<23&4294967295|C>>>9),C=y+(I^k^N)+A[9]+3654602809&4294967295,y=I+(C<<4&4294967295|C>>>28),C=N+(y^I^k)+A[12]+3873151461&4294967295,N=y+(C<<11&4294967295|C>>>21),C=k+(N^y^I)+A[15]+530742520&4294967295,k=N+(C<<16&4294967295|C>>>16),C=I+(k^N^y)+A[2]+3299628645&4294967295,I=k+(C<<23&4294967295|C>>>9),C=y+(k^(I|~N))+A[0]+4096336452&4294967295,y=I+(C<<6&4294967295|C>>>26),C=N+(I^(y|~k))+A[7]+1126891415&4294967295,N=y+(C<<10&4294967295|C>>>22),C=k+(y^(N|~I))+A[14]+2878612391&4294967295,k=N+(C<<15&4294967295|C>>>17),C=I+(N^(k|~y))+A[5]+4237533241&4294967295,I=k+(C<<21&4294967295|C>>>11),C=y+(k^(I|~N))+A[12]+1700485571&4294967295,y=I+(C<<6&4294967295|C>>>26),C=N+(I^(y|~k))+A[3]+2399980690&4294967295,N=y+(C<<10&4294967295|C>>>22),C=k+(y^(N|~I))+A[10]+4293915773&4294967295,k=N+(C<<15&4294967295|C>>>17),C=I+(N^(k|~y))+A[1]+2240044497&4294967295,I=k+(C<<21&4294967295|C>>>11),C=y+(k^(I|~N))+A[8]+1873313359&4294967295,y=I+(C<<6&4294967295|C>>>26),C=N+(I^(y|~k))+A[15]+4264355552&4294967295,N=y+(C<<10&4294967295|C>>>22),C=k+(y^(N|~I))+A[6]+2734768916&4294967295,k=N+(C<<15&4294967295|C>>>17),C=I+(N^(k|~y))+A[13]+1309151649&4294967295,I=k+(C<<21&4294967295|C>>>11),C=y+(k^(I|~N))+A[4]+4149444226&4294967295,y=I+(C<<6&4294967295|C>>>26),C=N+(I^(y|~k))+A[11]+3174756917&4294967295,N=y+(C<<10&4294967295|C>>>22),C=k+(y^(N|~I))+A[2]+718787259&4294967295,k=N+(C<<15&4294967295|C>>>17),C=I+(N^(k|~y))+A[9]+3951481745&4294967295,_.g[0]=_.g[0]+y&4294967295,_.g[1]=_.g[1]+(k+(C<<21&4294967295|C>>>11))&4294967295,_.g[2]=_.g[2]+k&4294967295,_.g[3]=_.g[3]+N&4294967295}r.prototype.u=function(_,y){y===void 0&&(y=_.length);for(var I=y-this.blockSize,A=this.B,k=this.h,N=0;N<y;){if(k==0)for(;N<=I;)i(this,_,N),N+=this.blockSize;if(typeof _=="string"){for(;N<y;)if(A[k++]=_.charCodeAt(N++),k==this.blockSize){i(this,A),k=0;break}}else for(;N<y;)if(A[k++]=_[N++],k==this.blockSize){i(this,A),k=0;break}}this.h=k,this.o+=y},r.prototype.v=function(){var _=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);_[0]=128;for(var y=1;y<_.length-8;++y)_[y]=0;var I=8*this.o;for(y=_.length-8;y<_.length;++y)_[y]=I&255,I/=256;for(this.u(_),_=Array(16),y=I=0;4>y;++y)for(var A=0;32>A;A+=8)_[I++]=this.g[y]>>>A&255;return _};function s(_,y){var I=l;return Object.prototype.hasOwnProperty.call(I,_)?I[_]:I[_]=y(_)}function o(_,y){this.h=y;for(var I=[],A=!0,k=_.length-1;0<=k;k--){var N=_[k]|0;A&&N==y||(I[k]=N,A=!1)}this.g=I}var l={};function u(_){return-128<=_&&128>_?s(_,function(y){return new o([y|0],0>y?-1:0)}):new o([_|0],0>_?-1:0)}function c(_){if(isNaN(_)||!isFinite(_))return p;if(0>_)return x(c(-_));for(var y=[],I=1,A=0;_>=I;A++)y[A]=_/I|0,I*=4294967296;return new o(y,0)}function d(_,y){if(_.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(_.charAt(0)=="-")return x(d(_.substring(1),y));if(0<=_.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=c(Math.pow(y,8)),A=p,k=0;k<_.length;k+=8){var N=Math.min(8,_.length-k),C=parseInt(_.substring(k,k+N),y);8>N?(N=c(Math.pow(y,N)),A=A.j(N).add(c(C))):(A=A.j(I),A=A.add(c(C)))}return A}var p=u(0),m=u(1),E=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-x(this).m();for(var _=0,y=1,I=0;I<this.g.length;I++){var A=this.i(I);_+=(0<=A?A:4294967296+A)*y,y*=4294967296}return _},t.toString=function(_){if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(R(this))return"0";if(P(this))return"-"+x(this).toString(_);for(var y=c(Math.pow(_,6)),I=this,A="";;){var k=b(I,y).g;I=w(I,k.j(y));var N=((0<I.g.length?I.g[0]:I.h)>>>0).toString(_);if(I=k,R(I))return N+A;for(;6>N.length;)N="0"+N;A=N+A}},t.i=function(_){return 0>_?0:_<this.g.length?this.g[_]:this.h};function R(_){if(_.h!=0)return!1;for(var y=0;y<_.g.length;y++)if(_.g[y]!=0)return!1;return!0}function P(_){return _.h==-1}t.l=function(_){return _=w(this,_),P(_)?-1:R(_)?0:1};function x(_){for(var y=_.g.length,I=[],A=0;A<y;A++)I[A]=~_.g[A];return new o(I,~_.h).add(m)}t.abs=function(){return P(this)?x(this):this},t.add=function(_){for(var y=Math.max(this.g.length,_.g.length),I=[],A=0,k=0;k<=y;k++){var N=A+(this.i(k)&65535)+(_.i(k)&65535),C=(N>>>16)+(this.i(k)>>>16)+(_.i(k)>>>16);A=C>>>16,N&=65535,C&=65535,I[k]=C<<16|N}return new o(I,I[I.length-1]&-2147483648?-1:0)};function w(_,y){return _.add(x(y))}t.j=function(_){if(R(this)||R(_))return p;if(P(this))return P(_)?x(this).j(x(_)):x(x(this).j(_));if(P(_))return x(this.j(x(_)));if(0>this.l(E)&&0>_.l(E))return c(this.m()*_.m());for(var y=this.g.length+_.g.length,I=[],A=0;A<2*y;A++)I[A]=0;for(A=0;A<this.g.length;A++)for(var k=0;k<_.g.length;k++){var N=this.i(A)>>>16,C=this.i(A)&65535,It=_.i(k)>>>16,Rn=_.i(k)&65535;I[2*A+2*k]+=C*Rn,v(I,2*A+2*k),I[2*A+2*k+1]+=N*Rn,v(I,2*A+2*k+1),I[2*A+2*k+1]+=C*It,v(I,2*A+2*k+1),I[2*A+2*k+2]+=N*It,v(I,2*A+2*k+2)}for(A=0;A<y;A++)I[A]=I[2*A+1]<<16|I[2*A];for(A=y;A<2*y;A++)I[A]=0;return new o(I,0)};function v(_,y){for(;(_[y]&65535)!=_[y];)_[y+1]+=_[y]>>>16,_[y]&=65535,y++}function T(_,y){this.g=_,this.h=y}function b(_,y){if(R(y))throw Error("division by zero");if(R(_))return new T(p,p);if(P(_))return y=b(x(_),y),new T(x(y.g),x(y.h));if(P(y))return y=b(_,x(y)),new T(x(y.g),y.h);if(30<_.g.length){if(P(_)||P(y))throw Error("slowDivide_ only works with positive integers.");for(var I=m,A=y;0>=A.l(_);)I=F(I),A=F(A);var k=V(I,1),N=V(A,1);for(A=V(A,2),I=V(I,2);!R(A);){var C=N.add(A);0>=C.l(_)&&(k=k.add(I),N=C),A=V(A,1),I=V(I,1)}return y=w(_,k.j(y)),new T(k,y)}for(k=p;0<=_.l(y);){for(I=Math.max(1,Math.floor(_.m()/y.m())),A=Math.ceil(Math.log(I)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),N=c(I),C=N.j(y);P(C)||0<C.l(_);)I-=A,N=c(I),C=N.j(y);R(N)&&(N=m),k=k.add(N),_=w(_,C)}return new T(k,_)}t.A=function(_){return b(this,_).h},t.and=function(_){for(var y=Math.max(this.g.length,_.g.length),I=[],A=0;A<y;A++)I[A]=this.i(A)&_.i(A);return new o(I,this.h&_.h)},t.or=function(_){for(var y=Math.max(this.g.length,_.g.length),I=[],A=0;A<y;A++)I[A]=this.i(A)|_.i(A);return new o(I,this.h|_.h)},t.xor=function(_){for(var y=Math.max(this.g.length,_.g.length),I=[],A=0;A<y;A++)I[A]=this.i(A)^_.i(A);return new o(I,this.h^_.h)};function F(_){for(var y=_.g.length+1,I=[],A=0;A<y;A++)I[A]=_.i(A)<<1|_.i(A-1)>>>31;return new o(I,_.h)}function V(_,y){var I=y>>5;y%=32;for(var A=_.g.length-I,k=[],N=0;N<A;N++)k[N]=0<y?_.i(N+I)>>>y|_.i(N+I+1)<<32-y:_.i(N+I);return new o(k,_.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,TT=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,ui=o}).apply(typeof Mv<"u"?Mv:typeof self<"u"?self:typeof window<"u"?window:{});var Il=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var IT,Ao,ST,Ql,pf,AT,CT,RT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Il=="object"&&Il];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var D=a[g];if(!(D in f))break e;f=f[D]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var f=0,g=!1,D={next:function(){if(!g&&f<a.length){var O=f++;return{value:h(O,a[O]),done:!1}}return g=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,g),a.apply(h,D)}}return function(){return a.apply(h,arguments)}}function m(a,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function E(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function R(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,D,O){for(var $=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)$[fe-2]=arguments[fe];return h.prototype[D].apply(g,$)}}function P(a){const h=a.length;if(0<h){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function x(a,h){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(u(g)){const D=a.length||0,O=g.length||0;a.length=D+O;for(let $=0;$<O;$++)a[D+$]=g[$]}else a.push(g)}}class w{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function v(a){return/^[\s\xa0]*$/.test(a)}function T(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function b(a){return b[" "](a),a}b[" "]=function(){};var F=T().indexOf("Gecko")!=-1&&!(T().toLowerCase().indexOf("webkit")!=-1&&T().indexOf("Edge")==-1)&&!(T().indexOf("Trident")!=-1||T().indexOf("MSIE")!=-1)&&T().indexOf("Edge")==-1;function V(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function _(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function y(a){const h={};for(const f in a)h[f]=a[f];return h}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,h){let f,g;for(let D=1;D<arguments.length;D++){g=arguments[D];for(f in g)a[f]=g[f];for(let O=0;O<I.length;O++)f=I[O],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function k(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function N(a){l.setTimeout(()=>{throw a},0)}function C(){var a=H;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class It{constructor(){this.h=this.g=null}add(h,f){const g=Rn.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Rn=new w(()=>new qr,a=>a.reset());class qr{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Dt,B=!1,H=new It,J=()=>{const a=l.Promise.resolve(void 0);Dt=()=>{a.then(he)}};var he=()=>{for(var a;a=C();){try{a.h.call(a.g)}catch(f){N(f)}var h=Rn;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}B=!1};function ne(){this.s=this.s,this.C=this.C}ne.prototype.s=!1,ne.prototype.ma=function(){this.s||(this.s=!0,this.N())},ne.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function we(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}we.prototype.h=function(){this.defaultPrevented=!0};var bt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function St(a,h){if(we.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(F){e:{try{b(h.nodeName);var D=!0;break e}catch{}D=!1}D||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:pt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&St.aa.h.call(this)}}R(St,we);var pt={2:"touch",3:"pen",4:"mouse"};St.prototype.h=function(){St.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var At="closure_listenable_"+(1e6*Math.random()|0),Hr=0;function Pn(a,h,f,g,D){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=D,this.key=++Hr,this.da=this.fa=!1}function rr(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function kn(a){this.src=a,this.g={},this.h=0}kn.prototype.add=function(a,h,f,g,D){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var $=$c(a,h,g,D);return-1<$?(h=a[$],f||(h.fa=!1)):(h=new Pn(h,this.src,O,!!g,D),h.fa=f,a.push(h)),h};function qt(a,h){var f=h.type;if(f in a.g){var g=a.g[f],D=Array.prototype.indexOf.call(g,h,void 0),O;(O=0<=D)&&Array.prototype.splice.call(g,D,1),O&&(rr(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function $c(a,h,f,g){for(var D=0;D<a.length;++D){var O=a[D];if(!O.da&&O.listener==h&&O.capture==!!f&&O.ha==g)return D}return-1}var Bc="closure_lm_"+(1e6*Math.random()|0),zc={};function bm(a,h,f,g,D){if(Array.isArray(h)){for(var O=0;O<h.length;O++)bm(a,h[O],f,g,D);return null}return f=Lm(f),a&&a[At]?a.K(h,f,c(g)?!!g.capture:!1,D):sS(a,h,f,!1,g,D)}function sS(a,h,f,g,D,O){if(!h)throw Error("Invalid event type");var $=c(D)?!!D.capture:!!D,fe=qc(a);if(fe||(a[Bc]=fe=new kn(a)),f=fe.add(h,f,g,$,O),f.proxy)return f;if(g=oS(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)bt||(D=$),D===void 0&&(D=!1),a.addEventListener(h.toString(),g,D);else if(a.attachEvent)a.attachEvent(Vm(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function oS(){function a(f){return h.call(a.src,a.listener,f)}const h=aS;return a}function Om(a,h,f,g,D){if(Array.isArray(h))for(var O=0;O<h.length;O++)Om(a,h[O],f,g,D);else g=c(g)?!!g.capture:!!g,f=Lm(f),a&&a[At]?(a=a.i,h=String(h).toString(),h in a.g&&(O=a.g[h],f=$c(O,f,g,D),-1<f&&(rr(O[f]),Array.prototype.splice.call(O,f,1),O.length==0&&(delete a.g[h],a.h--)))):a&&(a=qc(a))&&(h=a.g[h.toString()],a=-1,h&&(a=$c(h,f,g,D)),(f=-1<a?h[a]:null)&&Wc(f))}function Wc(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[At])qt(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(Vm(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=qc(h))?(qt(f,a),f.h==0&&(f.src=null,h[Bc]=null)):rr(a)}}}function Vm(a){return a in zc?zc[a]:zc[a]="on"+a}function aS(a,h){if(a.da)a=!0;else{h=new St(h,this);var f=a.listener,g=a.ha||a.src;a.fa&&Wc(a),a=f.call(g,h)}return a}function qc(a){return a=a[Bc],a instanceof kn?a:null}var Hc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Lm(a){return typeof a=="function"?a:(a[Hc]||(a[Hc]=function(h){return a.handleEvent(h)}),a[Hc])}function rt(){ne.call(this),this.i=new kn(this),this.M=this,this.F=null}R(rt,ne),rt.prototype[At]=!0,rt.prototype.removeEventListener=function(a,h,f,g){Om(this,a,h,f,g)};function mt(a,h){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new we(h,a);else if(h instanceof we)h.target=h.target||a;else{var D=h;h=new we(g,a),A(h,D)}if(D=!0,f)for(var O=f.length-1;0<=O;O--){var $=h.g=f[O];D=$a($,g,!0,h)&&D}if($=h.g=a,D=$a($,g,!0,h)&&D,D=$a($,g,!1,h)&&D,f)for(O=0;O<f.length;O++)$=h.g=f[O],D=$a($,g,!1,h)&&D}rt.prototype.N=function(){if(rt.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],g=0;g<f.length;g++)rr(f[g]);delete a.g[h],a.h--}}this.F=null},rt.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},rt.prototype.L=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function $a(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var D=!0,O=0;O<h.length;++O){var $=h[O];if($&&!$.da&&$.capture==f){var fe=$.listener,He=$.ha||$.src;$.fa&&qt(a.i,$),D=fe.call(He,g)!==!1&&D}}return D&&!g.defaultPrevented}function Mm(a,h,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Fm(a){a.g=Mm(()=>{a.g=null,a.i&&(a.i=!1,Fm(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class lS extends ne{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Fm(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ks(a){ne.call(this),this.h=a,this.g={}}R(Ks,ne);var jm=[];function Um(a){V(a.g,function(h,f){this.g.hasOwnProperty(f)&&Wc(h)},a),a.g={}}Ks.prototype.N=function(){Ks.aa.N.call(this),Um(this)},Ks.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Gc=l.JSON.stringify,uS=l.JSON.parse,cS=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Kc(){}Kc.prototype.h=null;function $m(a){return a.h||(a.h=a.i())}function Bm(){}var Qs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Qc(){we.call(this,"d")}R(Qc,we);function Yc(){we.call(this,"c")}R(Yc,we);var Gr={},zm=null;function Ba(){return zm=zm||new rt}Gr.La="serverreachability";function Wm(a){we.call(this,Gr.La,a)}R(Wm,we);function Ys(a){const h=Ba();mt(h,new Wm(h))}Gr.STAT_EVENT="statevent";function qm(a,h){we.call(this,Gr.STAT_EVENT,a),this.stat=h}R(qm,we);function gt(a){const h=Ba();mt(h,new qm(h,a))}Gr.Ma="timingevent";function Hm(a,h){we.call(this,Gr.Ma,a),this.size=h}R(Hm,we);function Xs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Js(){this.g=!0}Js.prototype.xa=function(){this.g=!1};function hS(a,h,f,g,D,O){a.info(function(){if(a.g)if(O)for(var $="",fe=O.split("&"),He=0;He<fe.length;He++){var le=fe[He].split("=");if(1<le.length){var it=le[0];le=le[1];var st=it.split("_");$=2<=st.length&&st[1]=="type"?$+(it+"="+le+"&"):$+(it+"=redacted&")}}else $=null;else $=O;return"XMLHTTP REQ ("+g+") [attempt "+D+"]: "+h+`
`+f+`
`+$})}function dS(a,h,f,g,D,O,$){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+D+"]: "+h+`
`+f+`
`+O+" "+$})}function Di(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+pS(a,f)+(g?" "+g:"")})}function fS(a,h){a.info(function(){return"TIMEOUT: "+h})}Js.prototype.info=function(){};function pS(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var D=g[1];if(Array.isArray(D)&&!(1>D.length)){var O=D[0];if(O!="noop"&&O!="stop"&&O!="close")for(var $=1;$<D.length;$++)D[$]=""}}}}return Gc(f)}catch{return h}}var za={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Gm={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Xc;function Wa(){}R(Wa,Kc),Wa.prototype.g=function(){return new XMLHttpRequest},Wa.prototype.i=function(){return{}},Xc=new Wa;function ir(a,h,f,g){this.j=a,this.i=h,this.l=f,this.R=g||1,this.U=new Ks(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Km}function Km(){this.i=null,this.g="",this.h=!1}var Qm={},Jc={};function Zc(a,h,f){a.L=1,a.v=Ka(xn(h)),a.m=f,a.P=!0,Ym(a,null)}function Ym(a,h){a.F=Date.now(),qa(a),a.A=xn(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),cg(f.i,"t",g),a.C=0,f=a.j.J,a.h=new Km,a.g=Pg(a.j,f?h:null,!a.m),0<a.O&&(a.M=new lS(m(a.Y,a,a.g),a.O)),h=a.U,f=a.g,g=a.ca;var D="readystatechange";Array.isArray(D)||(D&&(jm[0]=D.toString()),D=jm);for(var O=0;O<D.length;O++){var $=bm(f,D[O],g||h.handleEvent,!1,h.h||h);if(!$)break;h.g[$.key]=$}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Ys(),hS(a.i,a.u,a.A,a.l,a.R,a.m)}ir.prototype.ca=function(a){a=a.target;const h=this.M;h&&Nn(a)==3?h.j():this.Y(a)},ir.prototype.Y=function(a){try{if(a==this.g)e:{const st=Nn(this.g);var h=this.g.Ba();const Vi=this.g.Z();if(!(3>st)&&(st!=3||this.g&&(this.h.h||this.g.oa()||yg(this.g)))){this.J||st!=4||h==7||(h==8||0>=Vi?Ys(3):Ys(2)),eh(this);var f=this.g.Z();this.X=f;t:if(Xm(this)){var g=yg(this.g);a="";var D=g.length,O=Nn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Kr(this),Zs(this);var $="";break t}this.h.i=new l.TextDecoder}for(h=0;h<D;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(O&&h==D-1)});g.length=0,this.h.g+=a,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=f==200,dS(this.i,this.u,this.A,this.l,this.R,st,f),this.o){if(this.T&&!this.K){t:{if(this.g){var fe,He=this.g;if((fe=He.g?He.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(fe)){var le=fe;break t}}le=null}if(f=le)Di(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,th(this,f);else{this.o=!1,this.s=3,gt(12),Kr(this),Zs(this);break e}}if(this.P){f=!0;let tn;for(;!this.J&&this.C<$.length;)if(tn=mS(this,$),tn==Jc){st==4&&(this.s=4,gt(14),f=!1),Di(this.i,this.l,null,"[Incomplete Response]");break}else if(tn==Qm){this.s=4,gt(15),Di(this.i,this.l,$,"[Invalid Chunk]"),f=!1;break}else Di(this.i,this.l,tn,null),th(this,tn);if(Xm(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),st!=4||$.length!=0||this.h.h||(this.s=1,gt(16),f=!1),this.o=this.o&&f,!f)Di(this.i,this.l,$,"[Invalid Chunked Response]"),Kr(this),Zs(this);else if(0<$.length&&!this.W){this.W=!0;var it=this.j;it.g==this&&it.ba&&!it.M&&(it.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),ah(it),it.M=!0,gt(11))}}else Di(this.i,this.l,$,null),th(this,$);st==4&&Kr(this),this.o&&!this.J&&(st==4?Sg(this.j,this):(this.o=!1,qa(this)))}else DS(this.g),f==400&&0<$.indexOf("Unknown SID")?(this.s=3,gt(12)):(this.s=0,gt(13)),Kr(this),Zs(this)}}}catch{}finally{}};function Xm(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function mS(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?Jc:(f=Number(h.substring(f,g)),isNaN(f)?Qm:(g+=1,g+f>h.length?Jc:(h=h.slice(g,g+f),a.C=g+f,h)))}ir.prototype.cancel=function(){this.J=!0,Kr(this)};function qa(a){a.S=Date.now()+a.I,Jm(a,a.I)}function Jm(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Xs(m(a.ba,a),h)}function eh(a){a.B&&(l.clearTimeout(a.B),a.B=null)}ir.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(fS(this.i,this.A),this.L!=2&&(Ys(),gt(17)),Kr(this),this.s=2,Zs(this)):Jm(this,this.S-a)};function Zs(a){a.j.G==0||a.J||Sg(a.j,a)}function Kr(a){eh(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Um(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function th(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||nh(f.h,a))){if(!a.K&&nh(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var D=g;if(D[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)el(f),Ja(f);else break e;oh(f),gt(18)}}else f.za=D[1],0<f.za-f.T&&37500>D[2]&&f.F&&f.v==0&&!f.C&&(f.C=Xs(m(f.Za,f),6e3));if(1>=tg(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Yr(f,11)}else if((a.K||f.g==a)&&el(f),!v(h))for(D=f.Da.g.parse(h),h=0;h<D.length;h++){let le=D[h];if(f.T=le[0],le=le[1],f.G==2)if(le[0]=="c"){f.K=le[1],f.ia=le[2];const it=le[3];it!=null&&(f.la=it,f.j.info("VER="+f.la));const st=le[4];st!=null&&(f.Aa=st,f.j.info("SVER="+f.Aa));const Vi=le[5];Vi!=null&&typeof Vi=="number"&&0<Vi&&(g=1.5*Vi,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const tn=a.g;if(tn){const nl=tn.g?tn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(nl){var O=g.h;O.g||nl.indexOf("spdy")==-1&&nl.indexOf("quic")==-1&&nl.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(rh(O,O.h),O.h=null))}if(g.D){const lh=tn.g?tn.g.getResponseHeader("X-HTTP-Session-Id"):null;lh&&(g.ya=lh,ge(g.I,g.D,lh))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var $=a;if(g.qa=Rg(g,g.J?g.ia:null,g.W),$.K){ng(g.h,$);var fe=$,He=g.L;He&&(fe.I=He),fe.B&&(eh(fe),qa(fe)),g.g=$}else Tg(g);0<f.i.length&&Za(f)}else le[0]!="stop"&&le[0]!="close"||Yr(f,7);else f.G==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?Yr(f,7):sh(f):le[0]!="noop"&&f.l&&f.l.ta(le),f.v=0)}}Ys(4)}catch{}}var gS=class{constructor(a,h){this.g=a,this.map=h}};function Zm(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function eg(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function tg(a){return a.h?1:a.g?a.g.size:0}function nh(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function rh(a,h){a.g?a.g.add(h):a.h=h}function ng(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Zm.prototype.cancel=function(){if(this.i=rg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function rg(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return P(a.i)}function yS(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],f=a.length,g=0;g<f;g++)h.push(a[g]);return h}h=[],f=0;for(g in a)h[f++]=a[g];return h}function vS(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const g in a)h[f++]=g;return h}}}function ig(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=vS(a),g=yS(a),D=g.length,O=0;O<D;O++)h.call(void 0,g[O],f&&f[O],a)}var sg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _S(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),D=null;if(0<=g){var O=a[f].substring(0,g);D=a[f].substring(g+1)}else O=a[f];h(O,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function Qr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Qr){this.h=a.h,Ha(this,a.j),this.o=a.o,this.g=a.g,Ga(this,a.s),this.l=a.l;var h=a.i,f=new no;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),og(this,f),this.m=a.m}else a&&(h=String(a).match(sg))?(this.h=!1,Ha(this,h[1]||"",!0),this.o=eo(h[2]||""),this.g=eo(h[3]||"",!0),Ga(this,h[4]),this.l=eo(h[5]||"",!0),og(this,h[6]||"",!0),this.m=eo(h[7]||"")):(this.h=!1,this.i=new no(null,this.h))}Qr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(to(h,ag,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(to(h,ag,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(to(f,f.charAt(0)=="/"?TS:ES,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",to(f,SS)),a.join("")};function xn(a){return new Qr(a)}function Ha(a,h,f){a.j=f?eo(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Ga(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function og(a,h,f){h instanceof no?(a.i=h,AS(a.i,a.h)):(f||(h=to(h,IS)),a.i=new no(h,a.h))}function ge(a,h,f){a.i.set(h,f)}function Ka(a){return ge(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function eo(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function to(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,wS),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function wS(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var ag=/[#\/\?@]/g,ES=/[#\?:]/g,TS=/[#\?]/g,IS=/[#\?@]/g,SS=/#/g;function no(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function sr(a){a.g||(a.g=new Map,a.h=0,a.i&&_S(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=no.prototype,t.add=function(a,h){sr(this),this.i=null,a=bi(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function lg(a,h){sr(a),h=bi(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function ug(a,h){return sr(a),h=bi(a,h),a.g.has(h)}t.forEach=function(a,h){sr(this),this.g.forEach(function(f,g){f.forEach(function(D){a.call(h,D,g,this)},this)},this)},t.na=function(){sr(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let g=0;g<h.length;g++){const D=a[g];for(let O=0;O<D.length;O++)f.push(h[g])}return f},t.V=function(a){sr(this);let h=[];if(typeof a=="string")ug(this,a)&&(h=h.concat(this.g.get(bi(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return sr(this),this.i=null,a=bi(this,a),ug(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function cg(a,h,f){lg(a,h),0<f.length&&(a.i=null,a.g.set(bi(a,h),P(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var g=h[f];const O=encodeURIComponent(String(g)),$=this.V(g);for(g=0;g<$.length;g++){var D=O;$[g]!==""&&(D+="="+encodeURIComponent(String($[g]))),a.push(D)}}return this.i=a.join("&")};function bi(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function AS(a,h){h&&!a.j&&(sr(a),a.i=null,a.g.forEach(function(f,g){var D=g.toLowerCase();g!=D&&(lg(this,g),cg(this,D,f))},a)),a.j=h}function CS(a,h){const f=new Js;if(l.Image){const g=new Image;g.onload=E(or,f,"TestLoadImage: loaded",!0,h,g),g.onerror=E(or,f,"TestLoadImage: error",!1,h,g),g.onabort=E(or,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=E(or,f,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function RS(a,h){const f=new Js,g=new AbortController,D=setTimeout(()=>{g.abort(),or(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(O=>{clearTimeout(D),O.ok?or(f,"TestPingServer: ok",!0,h):or(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(D),or(f,"TestPingServer: error",!1,h)})}function or(a,h,f,g,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),g(f)}catch{}}function PS(){this.g=new cS}function kS(a,h,f){const g=f||"";try{ig(a,function(D,O){let $=D;c(D)&&($=Gc(D)),h.push(g+O+"="+encodeURIComponent($))})}catch(D){throw h.push(g+"type="+encodeURIComponent("_badmap")),D}}function Qa(a){this.l=a.Ub||null,this.j=a.eb||!1}R(Qa,Kc),Qa.prototype.g=function(){return new Ya(this.l,this.j)},Qa.prototype.i=function(a){return function(){return a}}({});function Ya(a,h){rt.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(Ya,rt),t=Ya.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,io(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ro(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,io(this)),this.g&&(this.readyState=3,io(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;hg(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function hg(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?ro(this):io(this),this.readyState==3&&hg(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ro(this))},t.Qa=function(a){this.g&&(this.response=a,ro(this))},t.ga=function(){this.g&&ro(this)};function ro(a){a.readyState=4,a.l=null,a.j=null,a.v=null,io(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function io(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ya.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function dg(a){let h="";return V(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function ih(a,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=dg(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):ge(a,h,f))}function Ce(a){rt.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(Ce,rt);var xS=/^https?$/i,NS=["POST","PUT"];t=Ce.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Xc.g(),this.v=this.o?$m(this.o):$m(Xc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(O){fg(this,O);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var D in g)f.set(D,g[D]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const O of g.keys())f.set(O,g.get(O));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(O=>O.toLowerCase()=="content-type"),D=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(NS,h,void 0))||g||D||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,$]of f)this.g.setRequestHeader(O,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{gg(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){fg(this,O)}};function fg(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,pg(a),Xa(a)}function pg(a){a.A||(a.A=!0,mt(a,"complete"),mt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,mt(this,"complete"),mt(this,"abort"),Xa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Xa(this,!0)),Ce.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?mg(this):this.bb())},t.bb=function(){mg(this)};function mg(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Nn(a)!=4||a.Z()!=2)){if(a.u&&Nn(a)==4)Mm(a.Ea,0,a);else if(mt(a,"readystatechange"),Nn(a)==4){a.h=!1;try{const $=a.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=$===0){var D=String(a.D).match(sg)[1]||null;!D&&l.self&&l.self.location&&(D=l.self.location.protocol.slice(0,-1)),g=!xS.test(D?D.toLowerCase():"")}f=g}if(f)mt(a,"complete"),mt(a,"success");else{a.m=6;try{var O=2<Nn(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",pg(a)}}finally{Xa(a)}}}}function Xa(a,h){if(a.g){gg(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||mt(a,"ready");try{f.onreadystatechange=g}catch{}}}function gg(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Nn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Nn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),uS(h)}};function yg(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function DS(a){const h={};a=(a.g&&2<=Nn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(v(a[g]))continue;var f=k(a[g]);const D=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const O=h[D]||[];h[D]=O,O.push(f)}_(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function so(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function vg(a){this.Aa=0,this.i=[],this.j=new Js,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=so("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=so("baseRetryDelayMs",5e3,a),this.cb=so("retryDelaySeedMs",1e4,a),this.Wa=so("forwardChannelMaxRetries",2,a),this.wa=so("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Zm(a&&a.concurrentRequestLimit),this.Da=new PS,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=vg.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,g){gt(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=Rg(this,null,this.W),Za(this)};function sh(a){if(_g(a),a.G==3){var h=a.U++,f=xn(a.I);if(ge(f,"SID",a.K),ge(f,"RID",h),ge(f,"TYPE","terminate"),oo(a,f),h=new ir(a,a.j,h),h.L=2,h.v=Ka(xn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=Pg(h.j,null),h.g.ea(h.v)),h.F=Date.now(),qa(h)}Cg(a)}function Ja(a){a.g&&(ah(a),a.g.cancel(),a.g=null)}function _g(a){Ja(a),a.u&&(l.clearTimeout(a.u),a.u=null),el(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Za(a){if(!eg(a.h)&&!a.s){a.s=!0;var h=a.Ga;Dt||J(),B||(Dt(),B=!0),H.add(h,a),a.B=0}}function bS(a,h){return tg(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Xs(m(a.Ga,a,h),Ag(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const D=new ir(this,this.j,a);let O=this.o;if(this.S&&(O?(O=y(O),A(O,this.S)):O=this.S),this.m!==null||this.O||(D.H=O,O=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Eg(this,D,h),f=xn(this.I),ge(f,"RID",a),ge(f,"CVER",22),this.D&&ge(f,"X-HTTP-Session-Id",this.D),oo(this,f),O&&(this.O?h="headers="+encodeURIComponent(String(dg(O)))+"&"+h:this.m&&ih(f,this.m,O)),rh(this.h,D),this.Ua&&ge(f,"TYPE","init"),this.P?(ge(f,"$req",h),ge(f,"SID","null"),D.T=!0,Zc(D,f,null)):Zc(D,f,h),this.G=2}}else this.G==3&&(a?wg(this,a):this.i.length==0||eg(this.h)||wg(this))};function wg(a,h){var f;h?f=h.l:f=a.U++;const g=xn(a.I);ge(g,"SID",a.K),ge(g,"RID",f),ge(g,"AID",a.T),oo(a,g),a.m&&a.o&&ih(g,a.m,a.o),f=new ir(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Eg(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),rh(a.h,f),Zc(f,g,h)}function oo(a,h){a.H&&V(a.H,function(f,g){ge(h,g,f)}),a.l&&ig({},function(f,g){ge(h,g,f)})}function Eg(a,h,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var D=a.i;let O=-1;for(;;){const $=["count="+f];O==-1?0<f?(O=D[0].g,$.push("ofs="+O)):O=0:$.push("ofs="+O);let fe=!0;for(let He=0;He<f;He++){let le=D[He].g;const it=D[He].map;if(le-=O,0>le)O=Math.max(0,D[He].g-100),fe=!1;else try{kS(it,$,"req"+le+"_")}catch{g&&g(it)}}if(fe){g=$.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,g}function Tg(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Dt||J(),B||(Dt(),B=!0),H.add(h,a),a.v=0}}function oh(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Xs(m(a.Fa,a),Ag(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Ig(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Xs(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,gt(10),Ja(this),Ig(this))};function ah(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Ig(a){a.g=new ir(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=xn(a.qa);ge(h,"RID","rpc"),ge(h,"SID",a.K),ge(h,"AID",a.T),ge(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&ge(h,"TO",a.ja),ge(h,"TYPE","xmlhttp"),oo(a,h),a.m&&a.o&&ih(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Ka(xn(h)),f.m=null,f.P=!0,Ym(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Ja(this),oh(this),gt(19))};function el(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Sg(a,h){var f=null;if(a.g==h){el(a),ah(a),a.g=null;var g=2}else if(nh(a.h,h))f=h.D,ng(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var D=a.B;g=Ba(),mt(g,new Hm(g,f)),Za(a)}else Tg(a);else if(D=h.s,D==3||D==0&&0<h.X||!(g==1&&bS(a,h)||g==2&&oh(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),D){case 1:Yr(a,5);break;case 4:Yr(a,10);break;case 3:Yr(a,6);break;default:Yr(a,2)}}}function Ag(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Yr(a,h){if(a.j.info("Error code "+h),h==2){var f=m(a.fb,a),g=a.Xa;const D=!g;g=new Qr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ha(g,"https"),Ka(g),D?CS(g.toString(),f):RS(g.toString(),f)}else gt(2);a.G=0,a.l&&a.l.sa(h),Cg(a),_g(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),gt(2)):(this.j.info("Failed to ping google.com"),gt(1))};function Cg(a){if(a.G=0,a.ka=[],a.l){const h=rg(a.h);(h.length!=0||a.i.length!=0)&&(x(a.ka,h),x(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function Rg(a,h,f){var g=f instanceof Qr?xn(f):new Qr(f);if(g.g!="")h&&(g.g=h+"."+g.g),Ga(g,g.s);else{var D=l.location;g=D.protocol,h=h?h+"."+D.hostname:D.hostname,D=+D.port;var O=new Qr(null);g&&Ha(O,g),h&&(O.g=h),D&&Ga(O,D),f&&(O.l=f),g=O}return f=a.D,h=a.ya,f&&h&&ge(g,f,h),ge(g,"VER",a.la),oo(a,g),g}function Pg(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Ce(new Qa({eb:f})):new Ce(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function kg(){}t=kg.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function tl(){}tl.prototype.g=function(a,h){return new Ot(a,h)};function Ot(a,h){rt.call(this),this.g=new vg(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!v(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!v(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Oi(this)}R(Ot,rt),Ot.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ot.prototype.close=function(){sh(this.g)},Ot.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Gc(a),a=f);h.i.push(new gS(h.Ya++,a)),h.G==3&&Za(h)},Ot.prototype.N=function(){this.g.l=null,delete this.j,sh(this.g),delete this.g,Ot.aa.N.call(this)};function xg(a){Qc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}R(xg,Qc);function Ng(){Yc.call(this),this.status=1}R(Ng,Yc);function Oi(a){this.g=a}R(Oi,kg),Oi.prototype.ua=function(){mt(this.g,"a")},Oi.prototype.ta=function(a){mt(this.g,new xg(a))},Oi.prototype.sa=function(a){mt(this.g,new Ng)},Oi.prototype.ra=function(){mt(this.g,"b")},tl.prototype.createWebChannel=tl.prototype.g,Ot.prototype.send=Ot.prototype.o,Ot.prototype.open=Ot.prototype.m,Ot.prototype.close=Ot.prototype.close,RT=function(){return new tl},CT=function(){return Ba()},AT=Gr,pf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},za.NO_ERROR=0,za.TIMEOUT=8,za.HTTP_ERROR=6,Ql=za,Gm.COMPLETE="complete",ST=Gm,Bm.EventType=Qs,Qs.OPEN="a",Qs.CLOSE="b",Qs.ERROR="c",Qs.MESSAGE="d",rt.prototype.listen=rt.prototype.K,Ao=Bm,Ce.prototype.listenOnce=Ce.prototype.L,Ce.prototype.getLastError=Ce.prototype.Ka,Ce.prototype.getLastErrorCode=Ce.prototype.Ba,Ce.prototype.getStatus=Ce.prototype.Z,Ce.prototype.getResponseJson=Ce.prototype.Oa,Ce.prototype.getResponseText=Ce.prototype.oa,Ce.prototype.send=Ce.prototype.ea,Ce.prototype.setWithCredentials=Ce.prototype.Ha,IT=Ce}).apply(typeof Il<"u"?Il:typeof self<"u"?self:typeof window<"u"?window:{});const Fv="@firebase/firestore";/**
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
 */class ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ut.UNAUTHENTICATED=new ut(null),ut.GOOGLE_CREDENTIALS=new ut("google-credentials-uid"),ut.FIRST_PARTY=new ut("first-party-uid"),ut.MOCK_USER=new ut("mock-user");/**
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
 */let zs="10.14.0";/**
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
 */const wi=new Vp("@firebase/firestore");function go(){return wi.logLevel}function q(t,...e){if(wi.logLevel<=ie.DEBUG){const n=e.map(Gp);wi.debug(`Firestore (${zs}): ${t}`,...n)}}function Qn(t,...e){if(wi.logLevel<=ie.ERROR){const n=e.map(Gp);wi.error(`Firestore (${zs}): ${t}`,...n)}}function Rs(t,...e){if(wi.logLevel<=ie.WARN){const n=e.map(Gp);wi.warn(`Firestore (${zs}): ${t}`,...n)}}function Gp(t){if(typeof t=="string")return t;try{/**
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
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${zs}) INTERNAL ASSERTION FAILED: `+t;throw Qn(e),new Error(e)}function ae(t,e){t||Q()}function Z(t,e){return t}/**
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
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends tr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Tn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class PT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ED{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ut.UNAUTHENTICATED))}shutdown(){}}class TD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ID{constructor(e){this.t=e,this.currentUser=ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ae(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Tn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Tn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Tn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ae(typeof r.accessToken=="string"),new PT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ae(e===null||typeof e=="string"),new ut(e)}}class SD{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ut.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class AD{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new SD(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class CD{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class RD{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ae(this.o===void 0);const r=s=>{s.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ae(typeof n.token=="string"),this.R=n.token,new CD(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function PD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class kT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=PD(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ue(t,e){return t<e?-1:t>e?1:0}function Ps(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class je{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new z(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return je.fromMillis(Date.now())}static fromDate(e){return je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new je(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new je(0,0))}static max(){return new Y(new je(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class fa{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(),r===void 0?r=e.length-n:r>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return fa.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof fa?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class pe extends fa{construct(e,n,r){return new pe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new pe(n)}static emptyPath(){return new pe([])}}const kD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ye extends fa{construct(e,n,r){return new Ye(e,n,r)}static isValidIdentifier(e){return kD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ye.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ye(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new z(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new z(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new z(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new z(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ye(n)}static emptyPath(){return new Ye([])}}/**
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
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(pe.fromString(e))}static fromName(e){return new G(pe.fromString(e).popFirst(5))}static empty(){return new G(pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new pe(e.slice()))}}function xD(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new je(n+1,0):new je(n,r));return new Mr(i,G.empty(),e)}function ND(t){return new Mr(t.readTime,t.key,-1)}class Mr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Mr(Y.min(),G.empty(),-1)}static max(){return new Mr(Y.max(),G.empty(),-1)}}function DD(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
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
 */const bD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class OD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Na(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==bD)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(i=>i?j.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new j((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new j((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function VD(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Da(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Kp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Kp.oe=-1;function ba(t){return t==null}function Fu(t){return t===0&&1/t==-1/0}function LD(t){return typeof t=="number"&&Number.isInteger(t)&&!Fu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function jv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function xi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function xT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ae{constructor(e,n){this.comparator=e,this.root=n||Qe.EMPTY}insert(e,n){return new Ae(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Qe.BLACK,null,null))}remove(e){return new Ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Sl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Sl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Sl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Sl(this.root,e,this.comparator,!0)}}class Sl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Qe.RED,this.left=i??Qe.EMPTY,this.right=s??Qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Qe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Qe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}Qe.EMPTY=null,Qe.RED=!0,Qe.BLACK=!1;Qe.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Qe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ze{constructor(e){this.comparator=e,this.data=new Ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Uv(this.data.getIterator())}getIteratorFrom(e){return new Uv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ze(this.comparator);return n.data=e,n}}class Uv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class jt{constructor(e){this.fields=e,e.sort(Ye.comparator)}static empty(){return new jt([])}unionWith(e){let n=new Ze(Ye.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new jt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ps(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class NT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class nt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new NT("Invalid base64 string: "+s):s}}(e);return new nt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new nt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}nt.EMPTY_BYTE_STRING=new nt("");const MD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Fr(t){if(ae(!!t),typeof t=="string"){let e=0;const n=MD.exec(t);if(ae(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ke(t.seconds),nanos:ke(t.nanos)}}function ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ei(t){return typeof t=="string"?nt.fromBase64String(t):nt.fromUint8Array(t)}/**
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
 */function Qp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Yp(t){const e=t.mapValue.fields.__previous_value__;return Qp(e)?Yp(e):e}function pa(t){const e=Fr(t.mapValue.fields.__local_write_time__.timestampValue);return new je(e.seconds,e.nanos)}/**
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
 */class FD{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class ma{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ma("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ma&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Al={mapValue:{}};function Ti(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Qp(t)?4:UD(t)?9007199254740991:jD(t)?10:11:Q()}function Sn(t,e){if(t===e)return!0;const n=Ti(t);if(n!==Ti(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return pa(t).isEqual(pa(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Fr(i.timestampValue),l=Fr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ei(i.bytesValue).isEqual(Ei(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ke(i.geoPointValue.latitude)===ke(s.geoPointValue.latitude)&&ke(i.geoPointValue.longitude)===ke(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ke(i.integerValue)===ke(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ke(i.doubleValue),l=ke(s.doubleValue);return o===l?Fu(o)===Fu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Ps(t.arrayValue.values||[],e.arrayValue.values||[],Sn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(jv(o)!==jv(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Sn(o[u],l[u])))return!1;return!0}(t,e);default:return Q()}}function ga(t,e){return(t.values||[]).find(n=>Sn(n,e))!==void 0}function ks(t,e){if(t===e)return 0;const n=Ti(t),r=Ti(e);if(n!==r)return ue(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=ke(s.integerValue||s.doubleValue),u=ke(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return $v(t.timestampValue,e.timestampValue);case 4:return $v(pa(t),pa(e));case 5:return ue(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Ei(s),u=Ei(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=ue(l[c],u[c]);if(d!==0)return d}return ue(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ue(ke(s.latitude),ke(o.latitude));return l!==0?l:ue(ke(s.longitude),ke(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Bv(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,c,d;const p=s.fields||{},m=o.fields||{},E=(l=p.value)===null||l===void 0?void 0:l.arrayValue,R=(u=m.value)===null||u===void 0?void 0:u.arrayValue,P=ue(((c=E==null?void 0:E.values)===null||c===void 0?void 0:c.length)||0,((d=R==null?void 0:R.values)===null||d===void 0?void 0:d.length)||0);return P!==0?P:Bv(E,R)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Al.mapValue&&o===Al.mapValue)return 0;if(s===Al.mapValue)return 1;if(o===Al.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const m=ue(u[p],d[p]);if(m!==0)return m;const E=ks(l[u[p]],c[d[p]]);if(E!==0)return E}return ue(u.length,d.length)}(t.mapValue,e.mapValue);default:throw Q()}}function $v(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=Fr(t),r=Fr(e),i=ue(n.seconds,r.seconds);return i!==0?i:ue(n.nanos,r.nanos)}function Bv(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=ks(n[i],r[i]);if(s)return s}return ue(n.length,r.length)}function xs(t){return mf(t)}function mf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Fr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ei(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=mf(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${mf(n.fields[o])}`;return i+"}"}(t.mapValue):Q()}function zv(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function gf(t){return!!t&&"integerValue"in t}function Xp(t){return!!t&&"arrayValue"in t}function Wv(t){return!!t&&"nullValue"in t}function qv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Yl(t){return!!t&&"mapValue"in t}function jD(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function jo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return xi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=jo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=jo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function UD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class vt{constructor(e){this.value=e}static empty(){return new vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Yl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=jo(n)}setAll(e){let n=Ye.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=jo(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Yl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Sn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Yl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){xi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new vt(jo(this.value))}}function DT(t){const e=[];return xi(t.fields,(n,r)=>{const i=new Ye([n]);if(Yl(r)){const s=DT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new jt(e)}/**
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
 */class ze{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new ze(e,0,Y.min(),Y.min(),Y.min(),vt.empty(),0)}static newFoundDocument(e,n,r,i){return new ze(e,1,n,Y.min(),r,i,0)}static newNoDocument(e,n){return new ze(e,2,n,Y.min(),Y.min(),vt.empty(),0)}static newUnknownDocument(e,n){return new ze(e,3,n,Y.min(),Y.min(),vt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ze(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ju{constructor(e,n){this.position=e,this.inclusive=n}}function Hv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=ks(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Gv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Sn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Uu{constructor(e,n="asc"){this.field=e,this.dir=n}}function $D(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class bT{}class Le extends bT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new zD(e,n,r):n==="array-contains"?new HD(e,r):n==="in"?new GD(e,r):n==="not-in"?new KD(e,r):n==="array-contains-any"?new QD(e,r):new Le(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new WD(e,r):new qD(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ks(n,this.value)):n!==null&&Ti(this.value)===Ti(n)&&this.matchesComparison(ks(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class dn extends bT{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new dn(e,n)}matches(e){return OT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function OT(t){return t.op==="and"}function VT(t){return BD(t)&&OT(t)}function BD(t){for(const e of t.filters)if(e instanceof dn)return!1;return!0}function yf(t){if(t instanceof Le)return t.field.canonicalString()+t.op.toString()+xs(t.value);if(VT(t))return t.filters.map(e=>yf(e)).join(",");{const e=t.filters.map(n=>yf(n)).join(",");return`${t.op}(${e})`}}function LT(t,e){return t instanceof Le?function(r,i){return i instanceof Le&&r.op===i.op&&r.field.isEqual(i.field)&&Sn(r.value,i.value)}(t,e):t instanceof dn?function(r,i){return i instanceof dn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&LT(o,i.filters[l]),!0):!1}(t,e):void Q()}function MT(t){return t instanceof Le?function(n){return`${n.field.canonicalString()} ${n.op} ${xs(n.value)}`}(t):t instanceof dn?function(n){return n.op.toString()+" {"+n.getFilters().map(MT).join(" ,")+"}"}(t):"Filter"}class zD extends Le{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class WD extends Le{constructor(e,n){super(e,"in",n),this.keys=FT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class qD extends Le{constructor(e,n){super(e,"not-in",n),this.keys=FT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function FT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class HD extends Le{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Xp(n)&&ga(n.arrayValue,this.value)}}class GD extends Le{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ga(this.value.arrayValue,n)}}class KD extends Le{constructor(e,n){super(e,"not-in",n)}matches(e){if(ga(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ga(this.value.arrayValue,n)}}class QD extends Le{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Xp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ga(this.value.arrayValue,r))}}/**
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
 */class YD{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function Kv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new YD(t,e,n,r,i,s,o)}function Jp(t){const e=Z(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>yf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ba(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>xs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>xs(r)).join(",")),e.ue=n}return e.ue}function Zp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!$D(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!LT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Gv(t.startAt,e.startAt)&&Gv(t.endAt,e.endAt)}function vf(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Oa{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function XD(t,e,n,r,i,s,o,l){return new Oa(t,e,n,r,i,s,o,l)}function em(t){return new Oa(t)}function Qv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function jT(t){return t.collectionGroup!==null}function Uo(t){const e=Z(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ze(Ye.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Uu(s,r))}),n.has(Ye.keyField().canonicalString())||e.ce.push(new Uu(Ye.keyField(),r))}return e.ce}function In(t){const e=Z(t);return e.le||(e.le=JD(e,Uo(t))),e.le}function JD(t,e){if(t.limitType==="F")return Kv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Uu(i.field,s)});const n=t.endAt?new ju(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ju(t.startAt.position,t.startAt.inclusive):null;return Kv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function _f(t,e){const n=t.filters.concat([e]);return new Oa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function wf(t,e,n){return new Oa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ac(t,e){return Zp(In(t),In(e))&&t.limitType===e.limitType}function UT(t){return`${Jp(In(t))}|lt:${t.limitType}`}function Fi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>MT(i)).join(", ")}]`),ba(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>xs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>xs(i)).join(",")),`Target(${r})`}(In(t))}; limitType=${t.limitType})`}function Cc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):G.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Uo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=Hv(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Uo(r),i)||r.endAt&&!function(o,l,u){const c=Hv(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Uo(r),i))}(t,e)}function ZD(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function $T(t){return(e,n)=>{let r=!1;for(const i of Uo(t)){const s=eb(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function eb(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?ks(u,c):Q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
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
 */class Ws{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){xi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return xT(this.inner)}size(){return this.innerSize}}/**
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
 */const tb=new Ae(G.comparator);function Yn(){return tb}const BT=new Ae(G.comparator);function Co(...t){let e=BT;for(const n of t)e=e.insert(n.key,n);return e}function zT(t){let e=BT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function si(){return $o()}function WT(){return $o()}function $o(){return new Ws(t=>t.toString(),(t,e)=>t.isEqual(e))}const nb=new Ae(G.comparator),rb=new Ze(G.comparator);function re(...t){let e=rb;for(const n of t)e=e.add(n);return e}const ib=new Ze(ue);function sb(){return ib}/**
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
 */function tm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fu(e)?"-0":e}}function qT(t){return{integerValue:""+t}}function ob(t,e){return LD(e)?qT(e):tm(t,e)}/**
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
 */class Rc{constructor(){this._=void 0}}function ab(t,e,n){return t instanceof ya?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Qp(s)&&(s=Yp(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof va?GT(t,e):t instanceof _a?KT(t,e):function(i,s){const o=HT(i,s),l=Yv(o)+Yv(i.Pe);return gf(o)&&gf(i.Pe)?qT(l):tm(i.serializer,l)}(t,e)}function lb(t,e,n){return t instanceof va?GT(t,e):t instanceof _a?KT(t,e):n}function HT(t,e){return t instanceof $u?function(r){return gf(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ya extends Rc{}class va extends Rc{constructor(e){super(),this.elements=e}}function GT(t,e){const n=QT(e);for(const r of t.elements)n.some(i=>Sn(i,r))||n.push(r);return{arrayValue:{values:n}}}class _a extends Rc{constructor(e){super(),this.elements=e}}function KT(t,e){let n=QT(e);for(const r of t.elements)n=n.filter(i=>!Sn(i,r));return{arrayValue:{values:n}}}class $u extends Rc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Yv(t){return ke(t.integerValue||t.doubleValue)}function QT(t){return Xp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class ub{constructor(e,n){this.field=e,this.transform=n}}function cb(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof va&&i instanceof va||r instanceof _a&&i instanceof _a?Ps(r.elements,i.elements,Sn):r instanceof $u&&i instanceof $u?Sn(r.Pe,i.Pe):r instanceof ya&&i instanceof ya}(t.transform,e.transform)}class hb{constructor(e,n){this.version=e,this.transformResults=n}}class _t{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new _t}static exists(e){return new _t(void 0,e)}static updateTime(e){return new _t(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Xl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Pc{}function YT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new nm(t.key,_t.none()):new Va(t.key,t.data,_t.none());{const n=t.data,r=vt.empty();let i=new Ze(Ye.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Wr(t.key,r,new jt(i.toArray()),_t.none())}}function db(t,e,n){t instanceof Va?function(i,s,o){const l=i.value.clone(),u=Jv(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Wr?function(i,s,o){if(!Xl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Jv(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(XT(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Bo(t,e,n,r){return t instanceof Va?function(s,o,l,u){if(!Xl(s.precondition,o))return l;const c=s.value.clone(),d=Zv(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Wr?function(s,o,l,u){if(!Xl(s.precondition,o))return l;const c=Zv(s.fieldTransforms,u,o),d=o.data;return d.setAll(XT(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return Xl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function fb(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=HT(r.transform,i||null);s!=null&&(n===null&&(n=vt.empty()),n.set(r.field,s))}return n||null}function Xv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ps(r,i,(s,o)=>cb(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Va extends Pc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Wr extends Pc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function XT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Jv(t,e,n){const r=new Map;ae(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,lb(o,l,n[i]))}return r}function Zv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,ab(s,o,e))}return r}class nm extends Pc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class JT extends Pc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class pb{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&db(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Bo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Bo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=WT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=YT(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&Ps(this.mutations,e.mutations,(n,r)=>Xv(n,r))&&Ps(this.baseMutations,e.baseMutations,(n,r)=>Xv(n,r))}}class rm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ae(e.mutations.length===r.length);let i=function(){return nb}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new rm(e,n,r,i)}}/**
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
 */let mb=class{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}};/**
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
 */class gb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var be,se;function ZT(t){switch(t){default:return Q();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function eI(t){if(t===void 0)return Qn("GRPC error has no .code"),M.UNKNOWN;switch(t){case be.OK:return M.OK;case be.CANCELLED:return M.CANCELLED;case be.UNKNOWN:return M.UNKNOWN;case be.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case be.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case be.INTERNAL:return M.INTERNAL;case be.UNAVAILABLE:return M.UNAVAILABLE;case be.UNAUTHENTICATED:return M.UNAUTHENTICATED;case be.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case be.NOT_FOUND:return M.NOT_FOUND;case be.ALREADY_EXISTS:return M.ALREADY_EXISTS;case be.PERMISSION_DENIED:return M.PERMISSION_DENIED;case be.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case be.ABORTED:return M.ABORTED;case be.OUT_OF_RANGE:return M.OUT_OF_RANGE;case be.UNIMPLEMENTED:return M.UNIMPLEMENTED;case be.DATA_LOSS:return M.DATA_LOSS;default:return Q()}}(se=be||(be={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function yb(){return new TextEncoder}/**
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
 */const vb=new ui([4294967295,4294967295],0);function e_(t){const e=yb().encode(t),n=new TT;return n.update(e),new Uint8Array(n.digest())}function t_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ui([n,r],0),new ui([i,s],0)]}class im{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ro(`Invalid padding: ${n}`);if(r<0)throw new Ro(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ro(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ro(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=ui.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(ui.fromNumber(r)));return i.compare(vb)===1&&(i=new ui([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=e_(e),[r,i]=t_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new im(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=e_(e),[r,i]=t_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ro extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class kc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,La.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new kc(Y.min(),i,new Ae(ue),Yn(),re())}}class La{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new La(r,n,re(),re(),re())}}/**
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
 */class Jl{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class tI{constructor(e,n){this.targetId=e,this.me=n}}class nI{constructor(e,n,r=nt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class n_{constructor(){this.fe=0,this.ge=i_(),this.pe=nt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=re(),n=re(),r=re();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Q()}}),new La(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=i_()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ae(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class _b{constructor(e){this.Le=e,this.Be=new Map,this.ke=Yn(),this.qe=r_(),this.Qe=new Ae(ue)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(vf(s))if(r===0){const o=new G(s.path);this.Ue(n,o,ze.newNoDocument(o,Y.min()))}else ae(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Ei(r).toUint8Array()}catch(u){if(u instanceof NT)return Rs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new im(o,i,s)}catch(u){return Rs(u instanceof Ro?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&vf(l.target)){const u=new G(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,ze.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=re();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new kc(e,n,this.Qe,this.ke,r);return this.ke=Yn(),this.qe=r_(),this.Qe=new Ae(ue),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new n_,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Ze(ue),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new n_),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function r_(){return new Ae(G.comparator)}function i_(){return new Ae(G.comparator)}const wb={asc:"ASCENDING",desc:"DESCENDING"},Eb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Tb={and:"AND",or:"OR"};class Ib{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ef(t,e){return t.useProto3Json||ba(e)?e:{value:e}}function Bu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function rI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Sb(t,e){return Bu(t,e.toTimestamp())}function $t(t){return ae(!!t),Y.fromTimestamp(function(n){const r=Fr(n);return new je(r.seconds,r.nanos)}(t))}function sm(t,e){return Tf(t,e).canonicalString()}function Tf(t,e){const n=function(i){return new pe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function iI(t){const e=pe.fromString(t);return ae(cI(e)),e}function zu(t,e){return sm(t.databaseId,e.path)}function zo(t,e){const n=iI(e);if(n.get(1)!==t.databaseId.projectId)throw new z(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(oI(n))}function sI(t,e){return sm(t.databaseId,e)}function Ab(t){const e=iI(t);return e.length===4?pe.emptyPath():oI(e)}function If(t){return new pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function oI(t){return ae(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function s_(t,e,n){return{name:zu(t,e),fields:n.value.mapValue.fields}}function Cb(t,e){return"found"in e?function(r,i){ae(!!i.found),i.found.name,i.found.updateTime;const s=zo(r,i.found.name),o=$t(i.found.updateTime),l=i.found.createTime?$t(i.found.createTime):Y.min(),u=new vt({mapValue:{fields:i.found.fields}});return ze.newFoundDocument(s,o,l,u)}(t,e):"missing"in e?function(r,i){ae(!!i.missing),ae(!!i.readTime);const s=zo(r,i.missing),o=$t(i.readTime);return ze.newNoDocument(s,o)}(t,e):Q()}function Rb(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(ae(d===void 0||typeof d=="string"),nt.fromBase64String(d||"")):(ae(d===void 0||d instanceof Buffer||d instanceof Uint8Array),nt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?M.UNKNOWN:eI(c.code);return new z(d,c.message||"")}(o);n=new nI(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=zo(t,r.document.name),s=$t(r.document.updateTime),o=r.document.createTime?$t(r.document.createTime):Y.min(),l=new vt({mapValue:{fields:r.document.fields}}),u=ze.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new Jl(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=zo(t,r.document),s=r.readTime?$t(r.readTime):Y.min(),o=ze.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Jl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=zo(t,r.document),s=r.removedTargetIds||[];n=new Jl([],s,i,null)}else{if(!("filter"in e))return Q();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new gb(i,s),l=r.targetId;n=new tI(l,o)}}return n}function aI(t,e){let n;if(e instanceof Va)n={update:s_(t,e.key,e.value)};else if(e instanceof nm)n={delete:zu(t,e.key)};else if(e instanceof Wr)n={update:s_(t,e.key,e.data),updateMask:Lb(e.fieldMask)};else{if(!(e instanceof JT))return Q();n={verify:zu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof ya)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof va)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof _a)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof $u)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw Q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Sb(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q()}(t,e.precondition)),n}function Pb(t,e){return t&&t.length>0?(ae(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?$t(i.updateTime):$t(s);return o.isEqual(Y.min())&&(o=$t(s)),new hb(o,i.transformResults||[])}(n,e))):[]}function kb(t,e){return{documents:[sI(t,e.path)]}}function xb(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=sI(t,i);const s=function(c){if(c.length!==0)return uI(dn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:ji(m.field),direction:bb(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Ef(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function Nb(t){let e=Ab(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ae(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(p){const m=lI(p);return m instanceof dn&&VT(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(R){return new Uu(Ui(R.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,ba(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,E=p.values||[];return new ju(E,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,E=p.values||[];return new ju(E,m)}(n.endAt)),XD(e,i,o,s,l,"F",u,c)}function Db(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function lI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ui(n.unaryFilter.field);return Le.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ui(n.unaryFilter.field);return Le.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ui(n.unaryFilter.field);return Le.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ui(n.unaryFilter.field);return Le.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(t):t.fieldFilter!==void 0?function(n){return Le.create(Ui(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return dn.create(n.compositeFilter.filters.map(r=>lI(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q()}}(n.compositeFilter.op))}(t):Q()}function bb(t){return wb[t]}function Ob(t){return Eb[t]}function Vb(t){return Tb[t]}function ji(t){return{fieldPath:t.canonicalString()}}function Ui(t){return Ye.fromServerFormat(t.fieldPath)}function uI(t){return t instanceof Le?function(n){if(n.op==="=="){if(qv(n.value))return{unaryFilter:{field:ji(n.field),op:"IS_NAN"}};if(Wv(n.value))return{unaryFilter:{field:ji(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(qv(n.value))return{unaryFilter:{field:ji(n.field),op:"IS_NOT_NAN"}};if(Wv(n.value))return{unaryFilter:{field:ji(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ji(n.field),op:Ob(n.op),value:n.value}}}(t):t instanceof dn?function(n){const r=n.getFilters().map(i=>uI(i));return r.length===1?r[0]:{compositeFilter:{op:Vb(n.op),filters:r}}}(t):Q()}function Lb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function cI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class wr{constructor(e,n,r,i,s=Y.min(),o=Y.min(),l=nt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new wr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new wr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Mb{constructor(e){this.ct=e}}function Fb(t){const e=Nb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?wf(e,e.limit,"L"):e}/**
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
 */class jb{constructor(){this.un=new Ub}addToCollectionParentIndex(e,n){return this.un.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(Mr.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(Mr.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class Ub{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ze(pe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ze(pe.comparator)).toArray()}}/**
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
 */class Ns{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ns(0)}static kn(){return new Ns(-1)}}/**
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
 */class $b{constructor(){this.changes=new Ws(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ze.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Bb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class zb{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Bo(r.mutation,i,jt.empty(),je.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const i=si();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Co();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=si();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Yn();const o=$o(),l=function(){return $o()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Wr)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Bo(d.mutation,c,d.mutation.getFieldMask(),je.now())):o.set(c.key,jt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var p;return l.set(c,new Bb(d,(p=o.get(c))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=$o();let i=new Ae((o,l)=>o-l),s=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||jt.empty();d=l.applyToLocalView(c,d),r.set(u,d);const p=(i.get(l.batchId)||re()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,p=WT();d.forEach(m=>{if(!s.has(m)){const E=YT(n.get(m),r.get(m));E!==null&&p.set(m,E),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):jT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):j.resolve(si());let l=-1,u=s;return o.next(c=>j.forEach(c,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(d)?j.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,re())).next(d=>({batchId:l,changes:zT(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let i=Co();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Co();return this.indexManager.getCollectionParents(e,s).next(l=>j.forEach(l,u=>{const c=function(p,m){return new Oa(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,ze.newInvalidDocument(d)))});let l=Co();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&Bo(d.mutation,c,jt.empty(),je.now()),Cc(n,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class Wb{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return j.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:$t(i.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:Fb(i.bundledQuery),readTime:$t(i.readTime)}}(n)),j.resolve()}}/**
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
 */class qb{constructor(){this.overlays=new Ae(G.comparator),this.Ir=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=si();return j.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const i=si(),s=n.length+1,o=new G(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return j.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ae((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=si(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=si(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return j.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new mb(n,r));let s=this.Ir.get(n);s===void 0&&(s=re(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
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
 */class Hb{constructor(){this.sessionToken=nt.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
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
 */class om{constructor(){this.Tr=new Ze(Ue.Er),this.dr=new Ze(Ue.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ue(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ue(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new G(new pe([])),r=new Ue(n,e),i=new Ue(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new G(new pe([])),r=new Ue(n,e),i=new Ue(n,e+1);let s=re();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ue(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ue{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return G.comparator(e.key,n.key)||ue(e.wr,n.wr)}static Ar(e,n){return ue(e.wr,n.wr)||G.comparator(e.key,n.key)}}/**
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
 */class Gb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Ze(Ue.Er)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new pb(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Ue(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return j.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ue(n,0),i=new Ue(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),j.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ze(ue);return n.forEach(i=>{const s=new Ue(i,0),o=new Ue(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),j.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;G.isDocumentKey(s)||(s=s.child(""));const o=new Ue(new G(s),0);let l=new Ze(ue);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.wr)),!0)},o),j.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ae(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return j.forEach(n.mutations,i=>{const s=new Ue(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ue(n,0),i=this.br.firstAfterOrEqual(r);return j.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Kb{constructor(e){this.Mr=e,this.docs=function(){return new Ae(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():ze.newInvalidDocument(n))}getEntries(e,n){let r=Yn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ze.newInvalidDocument(i))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Yn();const o=n.path,l=new G(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||DD(ND(d),r)<=0||(i.has(d.key)||Cc(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return j.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Q()}Or(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Qb(this)}getSize(e){return j.resolve(this.size)}}class Qb extends $b{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class Yb{constructor(e){this.persistence=e,this.Nr=new Ws(n=>Jp(n),Zp),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Lr=0,this.Br=new om,this.targetCount=0,this.kr=Ns.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),j.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Ns(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Kn(n),j.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),j.waitFor(s).next(()=>i)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),j.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this.Br.containsKey(n))}}/**
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
 */class Xb{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Kp(0),this.Kr=!1,this.Kr=!0,this.$r=new Hb,this.referenceDelegate=e(this),this.Ur=new Yb(this),this.indexManager=new jb,this.remoteDocumentCache=function(i){return new Kb(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Mb(n),this.Gr=new Wb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new qb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new Gb(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const i=new Jb(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return j.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class Jb extends OD{constructor(e){super(),this.currentSequenceNumber=e}}class am{constructor(e){this.persistence=e,this.Jr=new om,this.Yr=null}static Zr(e){return new am(e)}get Xr(){if(this.Yr)return this.Yr;throw Q()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),j.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.Xr,r=>{const i=G.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return j.or([()=>j.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class lm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=re(),i=re();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new lm(e,n.fromCache,r,i)}}/**
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
 */class Zb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class eO{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return jP()?8:VD(ft())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Zb;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(go()<=ie.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",Fi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),j.resolve()):(go()<=ie.DEBUG&&q("QueryEngine","Query:",Fi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(go()<=ie.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",Fi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,In(n))):j.resolve())}Yi(e,n){if(Qv(n))return j.resolve(null);let r=In(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=wf(n,null,"F"),r=In(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=re(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,l);return this.ns(n,c,o,u.readTime)?this.Yi(e,wf(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return Qv(n)||i.isEqual(Y.min())?j.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?j.resolve(null):(go()<=ie.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Fi(n)),this.rs(e,o,n,xD(i,-1)).next(l=>l))})}ts(e,n){let r=new Ze($T(e));return n.forEach((i,s)=>{Cc(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return go()<=ie.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",Fi(n)),this.Ji.getDocumentsMatchingQuery(e,n,Mr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class tO{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Ae(ue),this._s=new Ws(s=>Jp(s),Zp),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new zb(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function nO(t,e,n,r){return new tO(t,e,n,r)}async function hI(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=re();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:l}))})})}function rO(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const p=c.batch,m=p.keys();let E=j.resolve();return m.forEach(R=>{E=E.next(()=>d.getEntry(u,R)).next(P=>{const x=c.docVersions.get(R);ae(x!==null),P.version.compareTo(x)<0&&(p.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),d.addEntry(P)))})}),E.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=re();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function dI(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function iO(t,e){const n=Z(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((d,p)=>{const m=i.get(p);if(!m)return;l.push(n.Ur.removeMatchingKeys(s,d.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(s,d.addedDocuments,p)));let E=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?E=E.withResumeToken(nt.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):d.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(d.resumeToken,r)),i=i.insert(p,E),function(P,x,w){return P.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(m,E,d)&&l.push(n.Ur.updateTargetData(s,E))});let u=Yn(),c=re();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(sO(s,o,e.documentUpdates).next(d=>{u=d.Ps,c=d.Is})),!r.isEqual(Y.min())){const d=n.Ur.getLastRemoteSnapshotVersion(s).next(p=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return j.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function sO(t,e,n){let r=re(),i=re();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Yn();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):q("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function oO(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function aO(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,j.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new wr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Sf(t,e,n){const r=Z(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Da(o))throw o;q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function o_(t,e,n){const r=Z(t);let i=Y.min(),s=re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const p=Z(u),m=p._s.get(d);return m!==void 0?j.resolve(p.os.get(m)):p.Ur.getTargetData(c,d)}(r,o,In(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:Y.min(),n?s:re())).next(l=>(lO(r,ZD(e),l),{documents:l,Ts:s})))}function lO(t,e,n){let r=t.us.get(e)||Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class a_{constructor(){this.activeTargetIds=sb()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class uO{constructor(){this.so=new a_,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new a_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class cO{_o(e){}shutdown(){}}/**
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
 */class l_{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Cl=null;function Kh(){return Cl===null?Cl=function(){return 268435456+Math.round(2147483648*Math.random())}():Cl++,"0x"+Cl.toString(16)}/**
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
 */const hO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class dO{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const lt="WebChannelConnection";class fO extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=Kh(),u=this.xo(n,r.toUriEncodedString());q("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(d=>(q("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw Rs("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",u,"request:",i),d})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+zs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=hO[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Kh();return new Promise((o,l)=>{const u=new IT;u.setWithCredentials(!0),u.listenOnce(ST.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ql.NO_ERROR:const d=u.getResponseJson();q(lt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case Ql.TIMEOUT:q(lt,`RPC '${e}' ${s} timed out`),l(new z(M.DEADLINE_EXCEEDED,"Request time out"));break;case Ql.HTTP_ERROR:const p=u.getStatus();if(q(lt,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const E=m==null?void 0:m.error;if(E&&E.status&&E.message){const R=function(x){const w=x.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(w)>=0?w:M.UNKNOWN}(E.status);l(new z(R,E.message))}else l(new z(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new z(M.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{q(lt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);q(lt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=Kh(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=RT(),l=CT(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");q(lt,`Creating RPC '${e}' stream ${i}: ${d}`,u);const p=o.createWebChannel(d,u);let m=!1,E=!1;const R=new dO({Io:x=>{E?q(lt,`Not sending because RPC '${e}' stream ${i} is closed:`,x):(m||(q(lt,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),q(lt,`RPC '${e}' stream ${i} sending:`,x),p.send(x))},To:()=>p.close()}),P=(x,w,v)=>{x.listen(w,T=>{try{v(T)}catch(b){setTimeout(()=>{throw b},0)}})};return P(p,Ao.EventType.OPEN,()=>{E||(q(lt,`RPC '${e}' stream ${i} transport opened.`),R.yo())}),P(p,Ao.EventType.CLOSE,()=>{E||(E=!0,q(lt,`RPC '${e}' stream ${i} transport closed`),R.So())}),P(p,Ao.EventType.ERROR,x=>{E||(E=!0,Rs(lt,`RPC '${e}' stream ${i} transport errored:`,x),R.So(new z(M.UNAVAILABLE,"The operation could not be completed")))}),P(p,Ao.EventType.MESSAGE,x=>{var w;if(!E){const v=x.data[0];ae(!!v);const T=v,b=T.error||((w=T[0])===null||w===void 0?void 0:w.error);if(b){q(lt,`RPC '${e}' stream ${i} received error:`,b);const F=b.status;let V=function(I){const A=be[I];if(A!==void 0)return eI(A)}(F),_=b.message;V===void 0&&(V=M.INTERNAL,_="Unknown error status: "+F+" with message "+b.message),E=!0,R.So(new z(V,_)),p.close()}else q(lt,`RPC '${e}' stream ${i} received:`,v),R.bo(v)}}),P(l,AT.STAT_EVENT,x=>{x.stat===pf.PROXY?q(lt,`RPC '${e}' stream ${i} detected buffering proxy`):x.stat===pf.NOPROXY&&q(lt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{R.wo()},0),R}}function Qh(){return typeof document<"u"?document:null}/**
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
 */function xc(t){return new Ib(t,!0)}/**
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
 */class um{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class fI{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new um(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(Qn(n.toString()),Qn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new z(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class pO extends fI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=Rb(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?$t(o.readTime):Y.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=If(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=vf(u)?{documents:kb(s,u)}:{query:xb(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=rI(s,o.resumeToken);const c=Ef(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(Y.min())>0){l.readTime=Bu(s,o.snapshotVersion.toTimestamp());const c=Ef(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=Db(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=If(this.serializer),n.removeTarget=e,this.a_(n)}}class mO extends fI{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ae(!!e.streamToken),this.lastStreamToken=e.streamToken,ae(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ae(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=Pb(e.writeResults,e.commitTime),r=$t(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=If(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>aI(this.serializer,r))};this.a_(n)}}/**
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
 */class gO extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new z(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Tf(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new z(M.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Tf(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(M.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class yO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Qn(n),this.D_=!1):q("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class vO{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Ni(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=Z(u);c.L_.add(4),await Ma(c),c.q_.set("Unknown"),c.L_.delete(4),await Nc(c)}(this))})}),this.q_=new yO(r,i)}}async function Nc(t){if(Ni(t))for(const e of t.B_)await e(!0)}async function Ma(t){for(const e of t.B_)await e(!1)}function pI(t,e){const n=Z(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),fm(n)?dm(n):qs(n).r_()&&hm(n,e))}function cm(t,e){const n=Z(t),r=qs(n);n.N_.delete(e),r.r_()&&mI(n,e),n.N_.size===0&&(r.r_()?r.o_():Ni(n)&&n.q_.set("Unknown"))}function hm(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}qs(t).A_(e)}function mI(t,e){t.Q_.xe(e),qs(t).R_(e)}function dm(t){t.Q_=new _b({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),qs(t).start(),t.q_.v_()}function fm(t){return Ni(t)&&!qs(t).n_()&&t.N_.size>0}function Ni(t){return Z(t).L_.size===0}function gI(t){t.Q_=void 0}async function _O(t){t.q_.set("Online")}async function wO(t){t.N_.forEach((e,n)=>{hm(t,e)})}async function EO(t,e){gI(t),fm(t)?(t.q_.M_(e),dm(t)):t.q_.set("Unknown")}async function TO(t,e,n){if(t.q_.set("Online"),e instanceof nI&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Wu(t,r)}else if(e instanceof Jl?t.Q_.Ke(e):e instanceof tI?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Y.min()))try{const r=await dI(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.N_.get(c);d&&s.N_.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.N_.get(u);if(!d)return;s.N_.set(u,d.withResumeToken(nt.EMPTY_BYTE_STRING,d.snapshotVersion)),mI(s,u);const p=new wr(d.target,u,c,d.sequenceNumber);hm(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){q("RemoteStore","Failed to raise snapshot:",r),await Wu(t,r)}}async function Wu(t,e,n){if(!Da(e))throw e;t.L_.add(1),await Ma(t),t.q_.set("Offline"),n||(n=()=>dI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Nc(t)})}function yI(t,e){return e().catch(n=>Wu(t,n,e))}async function Dc(t){const e=Z(t),n=jr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;IO(e);)try{const i=await oO(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,SO(e,i)}catch(i){await Wu(e,i)}vI(e)&&_I(e)}function IO(t){return Ni(t)&&t.O_.length<10}function SO(t,e){t.O_.push(e);const n=jr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function vI(t){return Ni(t)&&!jr(t).n_()&&t.O_.length>0}function _I(t){jr(t).start()}async function AO(t){jr(t).p_()}async function CO(t){const e=jr(t);for(const n of t.O_)e.m_(n.mutations)}async function RO(t,e,n){const r=t.O_.shift(),i=rm.from(r,e,n);await yI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Dc(t)}async function PO(t,e){e&&jr(t).V_&&await async function(r,i){if(function(o){return ZT(o)&&o!==M.ABORTED}(i.code)){const s=r.O_.shift();jr(r).s_(),await yI(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Dc(r)}}(t,e),vI(t)&&_I(t)}async function u_(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const r=Ni(n);n.L_.add(3),await Ma(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Nc(n)}async function kO(t,e){const n=Z(t);e?(n.L_.delete(2),await Nc(n)):e||(n.L_.add(2),await Ma(n),n.q_.set("Unknown"))}function qs(t){return t.K_||(t.K_=function(n,r,i){const s=Z(n);return s.w_(),new pO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:_O.bind(null,t),Ro:wO.bind(null,t),mo:EO.bind(null,t),d_:TO.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),fm(t)?dm(t):t.q_.set("Unknown")):(await t.K_.stop(),gI(t))})),t.K_}function jr(t){return t.U_||(t.U_=function(n,r,i){const s=Z(n);return s.w_(),new mO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:AO.bind(null,t),mo:PO.bind(null,t),f_:CO.bind(null,t),g_:RO.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Dc(t)):(await t.U_.stop(),t.O_.length>0&&(q("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class pm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Tn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new pm(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function mm(t,e){if(Qn("AsyncQueue",`${e}: ${t}`),Da(t))return new z(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ds{constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=Co(),this.sortedSet=new Ae(this.comparator)}static emptySet(e){return new ds(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ds)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ds;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class c_{constructor(){this.W_=new Ae(G.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Q():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ds{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Ds(e,n,ds.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ac(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class xO{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class NO{constructor(){this.queries=h_(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=Z(n),s=i.queries;i.queries=h_(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new z(M.ABORTED,"Firestore shutting down"))}}function h_(){return new Ws(t=>UT(t),Ac)}async function wI(t,e){const n=Z(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new xO,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=mm(o,`Initialization of query '${Fi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&gm(n)}async function EI(t,e){const n=Z(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function DO(t,e){const n=Z(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&gm(n)}function bO(t,e,n){const r=Z(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function gm(t){t.Y_.forEach(e=>{e.next()})}var Af,d_;(d_=Af||(Af={})).ea="default",d_.Cache="cache";class TI{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ds(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Ds.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Af.Cache}}/**
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
 */class II{constructor(e){this.key=e}}class SI{constructor(e){this.key=e}}class OO{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=re(),this.mutatedKeys=re(),this.Aa=$T(e),this.Ra=new ds(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new c_,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const m=i.get(d),E=Cc(this.query,p)?p:null,R=!!m&&this.mutatedKeys.has(m.key),P=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let x=!1;m&&E?m.data.isEqual(E.data)?R!==P&&(r.track({type:3,doc:E}),x=!0):this.ga(m,E)||(r.track({type:2,doc:E}),x=!0,(u&&this.Aa(E,u)>0||c&&this.Aa(E,c)<0)&&(l=!0)):!m&&E?(r.track({type:0,doc:E}),x=!0):m&&!E&&(r.track({type:1,doc:m}),x=!0,(u||c)&&(l=!0)),x&&(E?(o=o.add(E),s=P?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,p)=>function(E,R){const P=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return P(E)-P(R)}(d.type,p.type)||this.Aa(d.doc,p.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new Ds(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new c_,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=re(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new SI(r))}),this.da.forEach(r=>{e.has(r)||n.push(new II(r))}),n}ba(e){this.Ta=e.Ts,this.da=re();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Ds.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class VO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class LO{constructor(e){this.key=e,this.va=!1}}class MO{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Ws(l=>UT(l),Ac),this.Ma=new Map,this.xa=new Set,this.Oa=new Ae(G.comparator),this.Na=new Map,this.La=new om,this.Ba={},this.ka=new Map,this.qa=Ns.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function FO(t,e,n=!0){const r=xI(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await AI(r,e,n,!0),i}async function jO(t,e){const n=xI(t);await AI(n,e,!0,!1)}async function AI(t,e,n,r){const i=await aO(t.localStore,In(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await UO(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&pI(t.remoteStore,i),l}async function UO(t,e,n,r,i){t.Ka=(p,m,E)=>async function(P,x,w,v){let T=x.view.ma(w);T.ns&&(T=await o_(P.localStore,x.query,!1).then(({documents:_})=>x.view.ma(_,T)));const b=v&&v.targetChanges.get(x.targetId),F=v&&v.targetMismatches.get(x.targetId)!=null,V=x.view.applyChanges(T,P.isPrimaryClient,b,F);return p_(P,x.targetId,V.wa),V.snapshot}(t,p,m,E);const s=await o_(t.localStore,e,!0),o=new OO(e,s.Ts),l=o.ma(s.documents),u=La.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);p_(t,n,c.wa);const d=new VO(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function $O(t,e,n){const r=Z(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Ac(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Sf(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&cm(r.remoteStore,i.targetId),Cf(r,i.targetId)}).catch(Na)):(Cf(r,i.targetId),await Sf(r.localStore,i.targetId,!0))}async function BO(t,e){const n=Z(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),cm(n.remoteStore,r.targetId))}async function zO(t,e,n){const r=YO(t);try{const i=await function(o,l){const u=Z(o),c=je.now(),d=l.reduce((E,R)=>E.add(R.key),re());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",E=>{let R=Yn(),P=re();return u.cs.getEntries(E,d).next(x=>{R=x,R.forEach((w,v)=>{v.isValidDocument()||(P=P.add(w))})}).next(()=>u.localDocuments.getOverlayedDocuments(E,R)).next(x=>{p=x;const w=[];for(const v of l){const T=fb(v,p.get(v.key).overlayedDocument);T!=null&&w.push(new Wr(v.key,T,DT(T.value.mapValue),_t.exists(!0)))}return u.mutationQueue.addMutationBatch(E,c,w,l)}).next(x=>{m=x;const w=x.applyToLocalDocumentSet(p,P);return u.documentOverlayCache.saveOverlays(E,x.batchId,w)})}).then(()=>({batchId:m.batchId,changes:zT(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Ae(ue)),c=c.insert(l,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await Fa(r,i.changes),await Dc(r.remoteStore)}catch(i){const s=mm(i,"Failed to persist write");n.reject(s)}}async function CI(t,e){const n=Z(t);try{const r=await iO(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(ae(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ae(o.va):i.removedDocuments.size>0&&(ae(o.va),o.va=!1))}),await Fa(n,r,e)}catch(r){await Na(r)}}function f_(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=Z(o);u.onlineState=l;let c=!1;u.queries.forEach((d,p)=>{for(const m of p.j_)m.Z_(l)&&(c=!0)}),c&&gm(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function WO(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Ae(G.comparator);o=o.insert(s,ze.newNoDocument(s,Y.min()));const l=re().add(s),u=new kc(Y.min(),new Map,new Ae(ue),o,l);await CI(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),ym(r)}else await Sf(r.localStore,e,!1).then(()=>Cf(r,e,n)).catch(Na)}async function qO(t,e){const n=Z(t),r=e.batch.batchId;try{const i=await rO(n.localStore,e);PI(n,r,null),RI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Fa(n,i)}catch(i){await Na(i)}}async function HO(t,e,n){const r=Z(t);try{const i=await function(o,l){const u=Z(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(ae(p!==null),d=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);PI(r,e,n),RI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Fa(r,i)}catch(i){await Na(i)}}function RI(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function PI(t,e,n){const r=Z(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Cf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||kI(t,r)})}function kI(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(cm(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),ym(t))}function p_(t,e,n){for(const r of n)r instanceof II?(t.La.addReference(r.key,e),GO(t,r)):r instanceof SI?(q("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||kI(t,r.key)):Q()}function GO(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(q("SyncEngine","New document in limbo: "+n),t.xa.add(r),ym(t))}function ym(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new G(pe.fromString(e)),r=t.qa.next();t.Na.set(r,new LO(n)),t.Oa=t.Oa.insert(n,r),pI(t.remoteStore,new wr(In(em(n.path)),r,"TargetPurposeLimboResolution",Kp.oe))}}async function Fa(t,e,n){const r=Z(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=lm.Wi(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const d=Z(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>j.forEach(c,m=>j.forEach(m.$i,E=>d.persistence.referenceDelegate.addReference(p,m.targetId,E)).next(()=>j.forEach(m.Ui,E=>d.persistence.referenceDelegate.removeReference(p,m.targetId,E)))))}catch(p){if(!Da(p))throw p;q("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const E=d.os.get(m),R=E.snapshotVersion,P=E.withLastLimboFreeSnapshotVersion(R);d.os=d.os.insert(m,P)}}}(r.localStore,s))}async function KO(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const r=await hI(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new z(M.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Fa(n,r.hs)}}function QO(t,e){const n=Z(t),r=n.Na.get(e);if(r&&r.va)return re().add(r.key);{let i=re();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function xI(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=CI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=QO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=WO.bind(null,e),e.Ca.d_=DO.bind(null,e.eventManager),e.Ca.$a=bO.bind(null,e.eventManager),e}function YO(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=qO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=HO.bind(null,e),e}class qu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=xc(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return nO(this.persistence,new eO,e.initialUser,this.serializer)}Ga(e){return new Xb(am.Zr,this.serializer)}Wa(e){return new uO}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}qu.provider={build:()=>new qu};class Rf{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>f_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=KO.bind(null,this.syncEngine),await kO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new NO}()}createDatastore(e){const n=xc(e.databaseInfo.databaseId),r=function(s){return new fO(s)}(e.databaseInfo);return function(s,o,l,u){return new gO(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new vO(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>f_(this.syncEngine,n,0),function(){return l_.D()?new l_:new cO}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const p=new MO(i,s,o,l,u,c);return d&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Z(i);q("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Ma(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Rf.provider={build:()=>new Rf};/**
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
 */class NI{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Qn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class XO{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new z(M.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(i,s){const o=Z(i),l={documents:s.map(p=>zu(o.serializer,p))},u=await o.Lo("BatchGetDocuments",o.serializer.databaseId,pe.emptyPath(),l,s.length),c=new Map;u.forEach(p=>{const m=Cb(o.serializer,p);c.set(m.key.toString(),m)});const d=[];return s.forEach(p=>{const m=c.get(p.toString());ae(!!m),d.push(m)}),d}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new nm(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=G.fromPath(r);this.mutations.push(new JT(i,this.precondition(i)))}),await async function(r,i){const s=Z(r),o={writes:i.map(l=>aI(s.serializer,l))};await s.Mo("Commit",s.serializer.databaseId,pe.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw Q();n=Y.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new z(M.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(Y.min())?_t.exists(!1):_t.updateTime(n):_t.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(Y.min()))throw new z(M.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return _t.updateTime(n)}return _t.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class JO{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this._u=r.maxAttempts,this.t_=new um(this.asyncQueue,"transaction_retry")}au(){this._u-=1,this.uu()}uu(){this.t_.Go(async()=>{const e=new XO(this.datastore),n=this.cu(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.lu(i)}))}).catch(r=>{this.lu(r)})})}cu(e){try{const n=this.updateFunction(e);return!ba(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}lu(e){this._u>0&&this.hu(e)?(this._u-=1,this.asyncQueue.enqueueAndForget(()=>(this.uu(),Promise.resolve()))):this.deferred.reject(e)}hu(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!ZT(n)}return!1}}/**
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
 */class ZO{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ut.UNAUTHENTICATED,this.clientId=kT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{q("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Tn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=mm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Yh(t,e){t.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await hI(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function m_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await eV(t);q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>u_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>u_(e.remoteStore,i)),t._onlineComponents=e}async function eV(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await Yh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===M.FAILED_PRECONDITION||i.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Rs("Error using user provided cache. Falling back to memory cache: "+n),await Yh(t,new qu)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await Yh(t,new qu);return t._offlineComponents}async function vm(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await m_(t,t._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await m_(t,new Rf))),t._onlineComponents}function tV(t){return vm(t).then(e=>e.syncEngine)}function nV(t){return vm(t).then(e=>e.datastore)}async function DI(t){const e=await vm(t),n=e.eventManager;return n.onListen=FO.bind(null,e.syncEngine),n.onUnlisten=$O.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=jO.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=BO.bind(null,e.syncEngine),n}function rV(t,e,n={}){const r=new Tn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new NI({next:m=>{d.Za(),o.enqueueAndForget(()=>EI(s,p));const E=m.docs.has(l);!E&&m.fromCache?c.reject(new z(M.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&m.fromCache&&u&&u.source==="server"?c.reject(new z(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new TI(em(l.path),d,{includeMetadataChanges:!0,_a:!0});return wI(s,p)}(await DI(t),t.asyncQueue,e,n,r)),r.promise}function iV(t,e,n={}){const r=new Tn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new NI({next:m=>{d.Za(),o.enqueueAndForget(()=>EI(s,p)),m.fromCache&&u.source==="server"?c.reject(new z(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new TI(l,d,{includeMetadataChanges:!0,_a:!0});return wI(s,p)}(await DI(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function bI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const g_=new Map;/**
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
 */function OI(t,e,n){if(!n)throw new z(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function sV(t,e,n,r){if(e===!0&&r===!0)throw new z(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function y_(t){if(!G.isDocumentKey(t))throw new z(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function v_(t){if(G.isDocumentKey(t))throw new z(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function bc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function An(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=bc(t);throw new z(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class __{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new z(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}sV("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=bI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new z(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new z(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new z(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Oc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new __({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new __(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ED;switch(r.type){case"firstParty":return new AD(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=g_.get(n);r&&(q("ComponentProvider","Removing Datastore"),g_.delete(n),r.terminate())}(this),Promise.resolve()}}function oV(t,e,n,r={}){var i;const s=(t=An(t,Oc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Rs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=ut.MOCK_USER;else{l=DP(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new z(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new ut(c)}t._authCredentials=new TD(new PT(l,u))}}/**
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
 */class Hs{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Hs(this.firestore,e,this._query)}}class ht{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Or(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ht(this.firestore,e,this._key)}}class Or extends Hs{constructor(e,n,r){super(e,n,em(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ht(this.firestore,null,new G(e))}withConverter(e){return new Or(this.firestore,e,this._path)}}function Ii(t,e,...n){if(t=Pe(t),OI("collection","path",e),t instanceof Oc){const r=pe.fromString(e,...n);return v_(r),new Or(t,null,r)}{if(!(t instanceof ht||t instanceof Or))throw new z(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(pe.fromString(e,...n));return v_(r),new Or(t.firestore,null,r)}}function Xn(t,e,...n){if(t=Pe(t),arguments.length===1&&(e=kT.newId()),OI("doc","path",e),t instanceof Oc){const r=pe.fromString(e,...n);return y_(r),new ht(t,null,new G(r))}{if(!(t instanceof ht||t instanceof Or))throw new z(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(pe.fromString(e,...n));return y_(r),new ht(t.firestore,t instanceof Or?t.converter:null,new G(r))}}/**
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
 */class w_{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new um(this,"async_queue_retry"),this.Vu=()=>{const r=Qh();r&&q("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Qh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Qh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Tn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Da(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Qn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=pm.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Q()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class Gs extends Oc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new w_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new w_(e),this._firestoreClient=void 0,await e}}}function aV(t,e){const n=typeof t=="object"?t:jE(),r=typeof t=="string"?t:"(default)",i=Mp(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=xP("firestore");s&&oV(i,...s)}return i}function Vc(t){if(t._terminated)throw new z(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||lV(t),t._firestoreClient}function lV(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,d){return new FD(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,bI(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new ZO(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class Si{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Si(nt.fromBase64String(e))}catch(n){throw new z(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Si(nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ja{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Lc{constructor(e){this._methodName=e}}/**
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
 */class _m{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
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
 */class wm{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const uV=/^__.*__$/;class cV{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Wr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Va(e,this.data,n,this.fieldTransforms)}}class VI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Wr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function LI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class Em{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Em(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Hu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(LI(this.Cu)&&uV.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class hV{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||xc(e)}Qu(e,n,r,i=!1){return new Em({Cu:e,methodName:n,qu:r,path:Ye.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Mc(t){const e=t._freezeSettings(),n=xc(t._databaseId);return new hV(t._databaseId,!!e.ignoreUndefinedProperties,n)}function MI(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);Im("Data must be an object, but it was:",o,r);const l=UI(r,o);let u,c;if(s.merge)u=new jt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const m=Pf(e,p,n);if(!o.contains(m))throw new z(M.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);BI(d,m)||d.push(m)}u=new jt(d),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new cV(new vt(l),u,c)}class Fc extends Lc{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Fc}}class Tm extends Lc{_toFieldTransform(e){return new ub(e.path,new ya)}isEqual(e){return e instanceof Tm}}function FI(t,e,n,r){const i=t.Qu(1,e,n);Im("Data must be an object, but it was:",i,r);const s=[],o=vt.empty();xi(r,(u,c)=>{const d=Sm(e,u,n);c=Pe(c);const p=i.Nu(d);if(c instanceof Fc)s.push(d);else{const m=Ua(c,p);m!=null&&(s.push(d),o.set(d,m))}});const l=new jt(s);return new VI(o,l,i.fieldTransforms)}function jI(t,e,n,r,i,s){const o=t.Qu(1,e,n),l=[Pf(e,r,n)],u=[i];if(s.length%2!=0)throw new z(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(Pf(e,s[m])),u.push(s[m+1]);const c=[],d=vt.empty();for(let m=l.length-1;m>=0;--m)if(!BI(c,l[m])){const E=l[m];let R=u[m];R=Pe(R);const P=o.Nu(E);if(R instanceof Fc)c.push(E);else{const x=Ua(R,P);x!=null&&(c.push(E),d.set(E,x))}}const p=new jt(c);return new VI(d,p,o.fieldTransforms)}function dV(t,e,n,r=!1){return Ua(n,t.Qu(r?4:3,e))}function Ua(t,e){if($I(t=Pe(t)))return Im("Unsupported field value:",e,t),UI(t,e);if(t instanceof Lc)return function(r,i){if(!LI(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Ua(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Pe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ob(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=je.fromDate(r);return{timestampValue:Bu(i.serializer,s)}}if(r instanceof je){const s=new je(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Bu(i.serializer,s)}}if(r instanceof _m)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Si)return{bytesValue:rI(i.serializer,r._byteString)};if(r instanceof ht){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:sm(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof wm)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return tm(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${bc(r)}`)}(t,e)}function UI(t,e){const n={};return xT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xi(t,(r,i)=>{const s=Ua(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function $I(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof je||t instanceof _m||t instanceof Si||t instanceof ht||t instanceof Lc||t instanceof wm)}function Im(t,e,n){if(!$I(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=bc(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Pf(t,e,n){if((e=Pe(e))instanceof ja)return e._internalPath;if(typeof e=="string")return Sm(t,e);throw Hu("Field path arguments must be of type string or ",t,!1,void 0,n)}const fV=new RegExp("[~\\*/\\[\\]]");function Sm(t,e,n){if(e.search(fV)>=0)throw Hu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ja(...e.split("."))._internalPath}catch{throw Hu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Hu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new z(M.INVALID_ARGUMENT,l+t+u)}function BI(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Gu{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ht(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new pV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Am("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class pV extends Gu{data(){return super.data()}}function Am(t,e){return typeof e=="string"?Sm(t,e):e instanceof ja?e._internalPath:e._delegate._internalPath}/**
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
 */function mV(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Cm{}class gV extends Cm{}function Rm(t,e,...n){let r=[];e instanceof Cm&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Pm).length,l=s.filter(u=>u instanceof jc).length;if(o>1||o>0&&l>0)throw new z(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class jc extends gV{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new jc(e,n,r)}_apply(e){const n=this._parse(e);return zI(e._query,n),new Hs(e.firestore,e.converter,_f(e._query,n))}_parse(e){const n=Mc(e.firestore);return function(s,o,l,u,c,d,p){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new z(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){T_(p,d);const E=[];for(const R of p)E.push(E_(u,s,R));m={arrayValue:{values:E}}}else m=E_(u,s,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||T_(p,d),m=dV(l,o,p,d==="in"||d==="not-in");return Le.create(c,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Ku(t,e,n){const r=e,i=Am("where",t);return jc._create(i,r,n)}class Pm extends Cm{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Pm(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:dn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)zI(o,u),o=_f(o,u)}(e._query,n),new Hs(e.firestore,e.converter,_f(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function E_(t,e,n){if(typeof(n=Pe(n))=="string"){if(n==="")throw new z(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!jT(e)&&n.indexOf("/")!==-1)throw new z(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(pe.fromString(n));if(!G.isDocumentKey(r))throw new z(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return zv(t,new G(r))}if(n instanceof ht)return zv(t,n._key);throw new z(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${bc(n)}.`)}function T_(t,e){if(!Array.isArray(t)||t.length===0)throw new z(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function zI(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new z(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new z(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class WI{convertValue(e,n="none"){switch(Ti(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ei(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Q()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return xi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>ke(o.doubleValue));return new wm(s)}convertGeoPoint(e){return new _m(ke(e.latitude),ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Yp(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(pa(e));default:return null}}convertTimestamp(e){const n=Fr(e);return new je(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=pe.fromString(e);ae(cI(r));const i=new ma(r.get(1),r.get(3)),s=new G(r.popFirst(5));return i.isEqual(n)||Qn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function qI(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class yV extends WI{constructor(e){super(),this.firestore=e}convertBytes(e){return new Si(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ht(this.firestore,null,n)}}/**
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
 */class ts{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class km extends Gu{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Zl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Am("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Zl extends km{data(e={}){return super.data(e)}}class vV{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ts(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Zl(this._firestore,this._userDataWriter,r.key,r,new ts(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Zl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ts(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Zl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ts(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:_V(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function _V(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}/**
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
 */function Qu(t){t=An(t,ht);const e=An(t.firestore,Gs);return rV(Vc(e),t._key).then(n=>EV(e,t,n))}class xm extends WI{constructor(e){super(),this.firestore=e}convertBytes(e){return new Si(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ht(this.firestore,null,n)}}function Ai(t){t=An(t,Hs);const e=An(t.firestore,Gs),n=Vc(e),r=new xm(e);return mV(t._query),iV(n,t._query).then(i=>new vV(e,r,t,i))}function Nm(t,e,n){t=An(t,ht);const r=An(t.firestore,Gs),i=qI(t.converter,e,n);return HI(r,[MI(Mc(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,_t.none())])}function wV(t,e,n,...r){t=An(t,ht);const i=An(t.firestore,Gs),s=Mc(i);let o;return o=typeof(e=Pe(e))=="string"||e instanceof ja?jI(s,"updateDoc",t._key,e,n,r):FI(s,"updateDoc",t._key,e),HI(i,[o.toMutation(t._key,_t.exists(!0))])}function HI(t,e){return function(r,i){const s=new Tn;return r.asyncQueue.enqueueAndForget(async()=>zO(await tV(r),i,s)),s.promise}(Vc(t),e)}function EV(t,e,n){const r=n.docs.get(e._key),i=new xm(t);return new km(t,i,e._key,r,new ts(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const TV={maxAttempts:5};function yo(t,e){if((t=Pe(t)).firestore!==e)throw new z(M.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */class IV extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=Mc(n)}get(n){const r=yo(n,this._firestore),i=new yV(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return Q();const o=s[0];if(o.isFoundDocument())return new Gu(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new Gu(this._firestore,i,r._key,null,r.converter);throw Q()})}set(n,r,i){const s=yo(n,this._firestore),o=qI(s.converter,r,i),l=MI(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,l),this}update(n,r,i,...s){const o=yo(n,this._firestore);let l;return l=typeof(r=Pe(r))=="string"||r instanceof ja?jI(this._dataReader,"Transaction.update",o._key,r,i,s):FI(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,l),this}delete(n){const r=yo(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=yo(e,this._firestore),r=new xm(this._firestore);return super.get(e).then(i=>new km(this._firestore,r,n._key,i._document,new ts(!1,!1),n.converter))}}function SV(t,e,n){t=An(t,Gs);const r=Object.assign(Object.assign({},TV),n);return function(s){if(s.maxAttempts<1)throw new z(M.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,l){const u=new Tn;return s.asyncQueue.enqueueAndForget(async()=>{const c=await nV(s);new JO(s.asyncQueue,c,l,o,u).au()}),u.promise}(Vc(t),i=>e(new IV(t,i)),r)}function Dm(){return new Tm("serverTimestamp")}(function(e,n=!0){(function(i){zs=i})($s),As(new yi("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Gs(new ID(r.getProvider("auth-internal")),new RD(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new z(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ma(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),br(Fv,"4.7.3",e),br(Fv,"4.7.3","esm2017")})();const AV={apiKey:"AIzaSyDi1RLRXMvSl4tUdxJzBVMu2EEQkT0YVI4",authDomain:"barbearia-daba9.firebaseapp.com",projectId:"barbearia-daba9",storageBucket:"barbearia-daba9.appspot.com",messagingSenderId:"768282935395",appId:"1:768282935395:web:ebecc99b593f960877b856"},GI=FE(AV),ei=yD(GI),et=aV(GI);new Vn;const CV={},I_=t=>{let e;const n=new Set,r=(d,p)=>{const m=typeof d=="function"?d(e):d;if(!Object.is(m,e)){const E=e;e=p??(typeof m!="object"||m===null)?m:Object.assign({},e,m),n.forEach(R=>R(e,E))}},i=()=>e,u={setState:r,getState:i,getInitialState:()=>c,subscribe:d=>(n.add(d),()=>n.delete(d)),destroy:()=>{(CV?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},c=e=t(r,i,u);return u},RV=t=>t?I_(t):I_;var KI={exports:{}},QI={},YI={exports:{}},XI={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bs=L;function PV(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var kV=typeof Object.is=="function"?Object.is:PV,xV=bs.useState,NV=bs.useEffect,DV=bs.useLayoutEffect,bV=bs.useDebugValue;function OV(t,e){var n=e(),r=xV({inst:{value:n,getSnapshot:e}}),i=r[0].inst,s=r[1];return DV(function(){i.value=n,i.getSnapshot=e,Xh(i)&&s({inst:i})},[t,n,e]),NV(function(){return Xh(i)&&s({inst:i}),t(function(){Xh(i)&&s({inst:i})})},[t]),bV(n),n}function Xh(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!kV(t,n)}catch{return!0}}function VV(t,e){return e()}var LV=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?VV:OV;XI.useSyncExternalStore=bs.useSyncExternalStore!==void 0?bs.useSyncExternalStore:LV;YI.exports=XI;var MV=YI.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uc=L,FV=MV;function jV(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var UV=typeof Object.is=="function"?Object.is:jV,$V=FV.useSyncExternalStore,BV=Uc.useRef,zV=Uc.useEffect,WV=Uc.useMemo,qV=Uc.useDebugValue;QI.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=BV(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=WV(function(){function u(E){if(!c){if(c=!0,d=E,E=r(E),i!==void 0&&o.hasValue){var R=o.value;if(i(R,E))return p=R}return p=E}if(R=p,UV(d,E))return R;var P=r(E);return i!==void 0&&i(R,P)?(d=E,R):(d=E,p=P)}var c=!1,d,p,m=n===void 0?null:n;return[function(){return u(e())},m===null?void 0:function(){return u(m())}]},[e,n,r,i]);var l=$V(t,s[0],s[1]);return zV(function(){o.hasValue=!0,o.value=l},[l]),qV(l),l};KI.exports=QI;var HV=KI.exports;const GV=O_(HV),JI={},{useDebugValue:KV}=Ne,{useSyncExternalStoreWithSelector:QV}=GV;let S_=!1;const YV=t=>t;function XV(t,e=YV,n){(JI?"production":void 0)!=="production"&&n&&!S_&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),S_=!0);const r=QV(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return KV(r),r}const A_=t=>{(JI?"production":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?RV(t):t,n=(r,i)=>XV(e,r,i);return Object.assign(n,e),n},JV=t=>t?A_(t):A_,Jn=JV(t=>({user:null,role:null,name:null,ready:!1,async login(e,n){if(!(await eN(ei,e,n)).user.emailVerified)throw await Hh(ei),new Error("Confirme seu e-mail antes de entrar.")},async register(e,n,r){const i=await Zx(ei,e,n);if(i.user)throw await rN(i.user,{displayName:r.name}),await Nm(Xn(et,"users",i.user.uid),{name:r.name,email:e,role:r.role}),await tN(i.user),await Hh(ei),new Error("Conta criada! Verifique seu e-mail antes de entrar.")},async signOut(){await Hh(ei),t({role:null,name:null})}}));oN(ei,async t=>{if(t&&t.emailVerified){const e=Xn(et,"users",t.uid),n=await Qu(e),r=n.exists()?n.data():{};Jn.setState({user:t,name:t.displayName||r.name||null,role:r.role||null,ready:!0})}else Jn.setState({user:null,role:null,name:null,ready:!0})});const ZV=K.div`
  display: grid;
  gap: ${({theme:t})=>t.spacing.md};
`,eL=K.p`
  color: ${({theme:t})=>t.colors.danger};
  font-size: 0.9rem;
  margin: 0;
`,tL=K.select`
  padding: ${({theme:t})=>t.spacing.sm};
  border-radius: ${({theme:t})=>t.borderRadius};
  border: 1px solid ${({theme:t})=>t.colors.border};
  background: ${({theme:t})=>t.colors.surface};
  color: ${({theme:t})=>t.colors.text};
`;/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nL=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),rL=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase()),C_=t=>{const e=rL(t);return e.charAt(0).toUpperCase()+e.slice(1)},ZI=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim(),iL=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var sL={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oL=L.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...l},u)=>L.createElement("svg",{ref:u,...sL,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:ZI("lucide",i),...!s&&!iL(l)&&{"aria-hidden":"true"},...l},[...o.map(([c,d])=>L.createElement(c,d)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eS=(t,e)=>{const n=L.forwardRef(({className:r,...i},s)=>L.createElement(oL,{ref:s,iconNode:e,className:ZI(`lucide-${nL(C_(t))}`,`lucide-${t}`,r),...i}));return n.displayName=C_(t),n};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aL=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],lL=eS("eye-off",aL);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uL=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],cL=eS("eye",uL);function R_({value:t,onChange:e,placeholder:n}){const[r,i]=L.useState(!1);return S.jsxs(hL,{children:[S.jsx("input",{type:r?"text":"password",value:t,onChange:e,placeholder:n}),S.jsx(dL,{type:"button",onClick:()=>i(s=>!s),children:r?S.jsx(lL,{size:18}):S.jsx(cL,{size:18})})]})}const hL=K.div`
  position: relative;
  display: flex;
  align-items: center;

  input {
    width: 100%;
    padding-right: 36px;
  }
`,dL=K.button`
  position: absolute;
  right: 8px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({theme:t})=>t.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }
`;function fL(){const{user:t,role:e,ready:n,login:r,register:i}=Jn(),[s,o]=L.useState(""),[l,u]=L.useState(""),[c,d]=L.useState(""),[p,m]=L.useState(""),[E,R]=L.useState("client"),[P,x]=L.useState(!1),[w,v]=L.useState(null),[T,b]=L.useState(!1);if(t){const V=e||E;return S.jsx(Pp,{to:V==="barber"?"/barber/dashboard":"/client/bookings",replace:!0})}async function F(){try{if(v(null),b(!0),P){if(!s.trim()){v("Informe seu nome");return}if(c!==p){v("As senhas não conferem");return}await i(l,c,{name:s,role:E})}else await r(l,c)}catch(V){v(V.message)}finally{b(!1)}}return S.jsx(en,{children:S.jsxs(Nt,{children:[S.jsx("h2",{children:P?"Criar conta":"Entrar"}),S.jsxs(ZV,{children:[P&&S.jsxs(S.Fragment,{children:[S.jsx("input",{type:"text",placeholder:"Seu nome completo",value:s,onChange:V=>o(V.target.value)}),S.jsxs(tL,{value:E,onChange:V=>R(V.target.value),children:[S.jsx("option",{value:"client",children:"Sou Cliente"}),S.jsx("option",{value:"barber",children:"Sou Barbeiro"})]})]}),S.jsx("input",{type:"email",placeholder:"Seu email",value:l,onChange:V=>u(V.target.value)}),S.jsx(R_,{value:c,onChange:V=>d(V.target.value),placeholder:"Senha"}),P&&S.jsx(R_,{value:p,onChange:V=>m(V.target.value),placeholder:"Confirme sua senha"}),w&&S.jsx(eL,{children:w}),S.jsx(Xe,{onClick:F,loading:T,disabled:T,children:P?"Cadastrar":"Entrar"}),S.jsx(Xe,{variant:"ghost",onClick:()=>x(V=>!V),disabled:T,children:P?"Já tenho conta":"Ainda não tenho conta"})]})]})})}const pL="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let P_=(t=21)=>{let e="",n=crypto.getRandomValues(new Uint8Array(t|=0));for(;t--;)e+=pL[n[t]&63];return e};async function mL(t,e,n){const i=e.toLowerCase().normalize("NFD").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")+"-"+P_(6).toLowerCase(),s=P_(12),o=Xn(et,"shops",s);return await Nm(o,{id:s,ownerId:t,name:e,location:n.trim().toLowerCase(),slug:i,createdAt:Dm()}),{id:s,slug:i}}async function gL(t,e){const n=Xn(et,"schedules",t);await Nm(n,{shopId:t,weekly:e},{merge:!0})}async function yL(t){const e=Rm(Ii(et,"shops"),Ku("ownerId","==",t));return(await Ai(e)).docs.map(r=>r.data())}async function vL(t){var r;const e=Rm(Ii(et,"shops"),Ku("slug","==",t));return(r=(await Ai(e)).docs[0])==null?void 0:r.data()}async function _L(t){const e=t.trim().toLowerCase(),n=Rm(Ii(et,"shops"),Ku("location",">=",e),Ku("location","<=",e+""));return(await Ai(n)).docs.map(i=>i.data())}async function wL(t,e,n,r,i){const s=`${e}_${n}`,o=Xn(et,"shops",t,"bookings",s);return await SV(et,async l=>{var c,d;const u=await l.get(o);if(u.exists()&&((c=u.data())==null?void 0:c.status)!=="cancelled")throw new Error("Esse horário já foi reservado.");l.set(o,{id:s,shopId:t,date:e,time:n,clientName:r,clientPhone:i,clientEmail:((d=ei.currentUser)==null?void 0:d.email)||null,createdAt:Dm(),status:"confirmed"})}),s}async function EL(t){const e=Ii(et,"shops",t,"bookings");return(await Ai(e)).docs.map(r=>r.data())}async function kf(t,e,n,r){const i=Xn(et,"shops",t,"bookings",e);await wV(i,{status:"cancelled",cancelReason:n,cancelledBy:r,cancelledAt:Dm()})}async function TL(t){const e=[],n=await Ai(Ii(et,"shops"));for(const r of n.docs)(await Ai(Ii(et,"shops",r.id,"bookings"))).forEach(s=>{const o=s.data();(o.clientName===t||o.clientPhone===t||o.clientEmail===t)&&e.push({...o,shopName:r.data().name})});return e}const IL=K.div`
  display: grid;
  gap: ${({theme:t})=>t.spacing.md};
`;function SL(){const{user:t}=Jn(),[e,n]=L.useState(""),[r,i]=L.useState(""),[s,o]=L.useState(!1),l=js();async function u(){if(t){o(!0);try{const{id:c}=await mL(t.uid,e,r);l("/barber/schedule?shopId="+c)}catch(c){alert(c.message)}finally{o(!1)}}}return S.jsx(en,{children:S.jsxs(Nt,{children:[S.jsx("h2",{children:"Cadastrar Barbearia"}),S.jsxs(IL,{children:[S.jsx("input",{placeholder:"Nome da barbearia",value:e,onChange:c=>n(c.target.value)}),S.jsx("input",{placeholder:"Localização (bairro, cidade)",value:r,onChange:c=>i(c.target.value)}),S.jsx(Xe,{onClick:u,disabled:s||!e,children:"Salvar"})]})]})})}const AL=K.button`
  width: 100%;
  padding: 12px 16px;
  border-radius: ${({theme:t})=>t.borderRadius};
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 500;
  text-align: center;
  transition: all 0.2s ease-in-out;

  /* Estilos baseados na propriedade 'selected' */
  background: ${({selected:t,theme:e})=>t?e.colors.primary:e.colors.soft};

  color: ${({selected:t,theme:e})=>t?"#FFFFFF":e.colors.text};

  border: 1px solid
    ${({selected:t,theme:e})=>t?e.colors.primary:e.colors.border};

  &:hover {
    border-color: ${({theme:t})=>t.colors.primary};
  }
`;function CL({label:t,selected:e,onClick:n}){return S.jsx(AL,{type:"button",selected:e,onClick:n,children:t})}const RL=K.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: ${({theme:t})=>t.spacing.md};
  margin: ${({theme:t})=>t.spacing.lg} 0;
`,Jh=K.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:t})=>t.spacing.xs};

  label {
    font-size: 0.9rem;
    color: ${({theme:t})=>t.colors.muted};
  }

  input {
    padding: 8px 12px;
    border-radius: ${({theme:t})=>t.borderRadius};
    border: 1px solid ${({theme:t})=>t.colors.border};
    background: ${({theme:t})=>t.colors.surface};
    color: ${({theme:t})=>t.colors.text};
    font-size: 1rem;
  }
`,PL=K.div`
  margin: ${({theme:t})=>t.spacing.lg} 0;

  .days-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${({theme:t})=>t.spacing.md};
    margin-top: ${({theme:t})=>t.spacing.sm};

    @media (max-width: 400px) {
      grid-template-columns: 1fr;
    }
  }
`,k_=K.div`
  display: flex;
  justify-content: flex-end;
  margin-top: ${({theme:t})=>t.spacing.lg};
  gap: ${({theme:t})=>t.spacing.md};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;

    & > button {
      width: 100%;
    }
  }
`,kL=K.div`
  margin-top: ${({theme:t})=>t.spacing.xl};
  h3 {
    margin-bottom: ${({theme:t})=>t.spacing.md};
  }
`,xL=K.div`
  margin-bottom: ${({theme:t})=>t.spacing.md};
`,NL=K.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:t})=>t.spacing.sm};
  margin-top: ${({theme:t})=>t.spacing.sm};
`,DL=K.span`
  border: 1px solid ${({theme:t})=>t.colors.border};
  padding: 6px 10px;
  border-radius: ${({theme:t})=>t.borderRadius};
  background-color: ${({theme:t})=>t.colors.soft};
  font-size: 0.85rem;
`;function bL(){const[t]=iE(),e=t.get("shopId")||"",[n,r]=L.useState({}),[i,s]=L.useState("09:00"),[o,l]=L.useState("18:00"),[u,c]=L.useState(30),[d,p]=L.useState([]),m=js(),E=[["mon","Segunda"],["tue","Terça"],["wed","Quarta"],["thu","Quinta"],["fri","Sexta"],["sat","Sábado"],["sun","Domingo"]];function R(){const w=[];let[v,T]=i.split(":").map(Number);const[b,F]=o.split(":").map(Number);for(;v<b||v===b&&T<F;){const _=String(v).padStart(2,"0"),y=String(T).padStart(2,"0");for(w.push(`${_}:${y}`),T+=u;T>=60;)v++,T-=60}const V={...n};d.forEach(_=>{V[_]=w}),r(V)}async function P(){await gL(e,n),m("/barber/share?shopId="+e)}const x=w=>{p(v=>v.includes(w)?v.filter(T=>T!==w):[...v,w])};return S.jsx(en,{children:S.jsxs(Nt,{children:[S.jsx("h2",{children:"Configurar horários"}),S.jsx("p",{children:"Defina o horário de início, fim, intervalo entre cortes e os dias da semana."}),S.jsxs(RL,{children:[S.jsxs(Jh,{children:[S.jsx("label",{children:"Início"}),S.jsx("input",{type:"time",value:i,onChange:w=>s(w.target.value)})]}),S.jsxs(Jh,{children:[S.jsx("label",{children:"Fim"}),S.jsx("input",{type:"time",value:o,onChange:w=>l(w.target.value)})]}),S.jsxs(Jh,{children:[S.jsx("label",{children:"Intervalo (min)"}),S.jsx("input",{type:"number",value:u,min:5,step:5,onChange:w=>c(Number(w.target.value))})]})]}),S.jsxs(PL,{children:[S.jsx("p",{children:"Dias da semana:"}),S.jsx("div",{className:"days-grid",children:E.map(([w,v])=>S.jsx(CL,{label:v,selected:d.includes(w),onClick:()=>x(w)},w))})]}),S.jsx(k_,{children:S.jsx(Xe,{onClick:R,children:"Gerar horários"})}),Object.keys(n).length>0&&S.jsxs(kL,{children:[S.jsx("h3",{children:"Pré-visualização"}),E.map(([w,v])=>{var T;return(T=n[w])!=null&&T.length?S.jsxs(xL,{children:[S.jsxs("strong",{children:[v,":"]}),S.jsx(NL,{children:n[w].map(b=>S.jsx(DL,{children:b},b))})]},w):null})]}),S.jsx(k_,{children:S.jsx(Xe,{onClick:P,children:"Salvar"})})]})})}const OL=K.code`
  display: inline-block;
  padding: ${({theme:t})=>t.spacing.md};
  background: ${({theme:t})=>t.colors.soft};
  border-radius: ${({theme:t})=>t.borderRadius};
  word-break: break-all;
`;function VL(){const[t]=iE(),e=t.get("shopId"),[n,r]=L.useState(""),[i,s]=L.useState(!1);L.useEffect(()=>{async function u(){var d;const c=await Qu(Xn(et,"shops",e));r((d=c.data())==null?void 0:d.slug)}u()},[e]);const o=`${window.location.origin}/s/${n}`;async function l(){await navigator.clipboard.writeText(o),s(!0),setTimeout(()=>s(!1),2e3)}return S.jsx(en,{children:S.jsxs(Nt,{children:[S.jsx("h2",{children:"Link de agendamento"}),S.jsx("p",{children:"Compartilhe com seus clientes:"}),S.jsx(OL,{children:o}),S.jsx("div",{style:{marginTop:12},children:S.jsx(Xe,{onClick:l,variant:"ghost",children:i?"Link copiado!":"Copiar link"})})]})})}const LL=K.div`
  display: flex;
  gap: ${({theme:t})=>t.spacing.md};
  flex-wrap: wrap;

  /* AJUSTE PARA MOBILE */
  @media (max-width: 768px) {
    flex-direction: column;

    & > a,
    & > button {
      width: 100%;
    }

    & > a > button,
    & > button {
      width: 100%;
    }
  }
`,ML=K.h3`
  margin-top: ${({theme:t})=>t.spacing.xl};
  margin-bottom: ${({theme:t})=>t.spacing.sm};
`,FL=K.div`
  display: grid;
  gap: ${({theme:t})=>t.spacing.sm};
`,jL=K(Nt)`
  opacity: ${({status:t})=>t==="cancelled"?.6:1};
  padding: ${({theme:t})=>t.spacing.lg};
  display: grid;
  gap: ${({theme:t})=>t.spacing.xs};

  & > button {
    margin-top: ${({theme:t})=>t.spacing.sm};
    justify-self: flex-start;
  }

  /* AJUSTE PARA MOBILE */
  @media (max-width: 768px) {
    /* Faz o botão ocupar a largura total do card */
    & > button {
      justify-self: stretch;
      width: 100%;
    }
  }
`,UL=K.p`
  color: ${({theme:t})=>t.colors.danger};
  font-size: 0.9rem;
  margin: 0;
`,$L=K.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,BL=K.div`
  background: ${({theme:t})=>t.colors.surface};
  color: ${({theme:t})=>t.colors.text};
  padding: ${({theme:t})=>t.spacing.lg};
  border-radius: ${({theme:t})=>t.borderRadius}; // 👈 ajustado
  width: 100%;
  max-width: 400px;
  display: grid;
  gap: ${({theme:t})=>t.spacing.md};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
`,zL=K.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({theme:t})=>t.spacing.sm};
`,WL=K.button`
  background: ${({theme:t})=>t.colors.danger};
  color: white;
  padding: ${({theme:t})=>t.spacing.sm} ${({theme:t})=>t.spacing.md};
  border: none;
  border-radius: ${({theme:t})=>t.borderRadius}; // 👈 ajustado
  cursor: pointer;
`,qL=K.button`
  background: ${({theme:t})=>t.colors.soft};
  color: ${({theme:t})=>t.colors.text};
  padding: ${({theme:t})=>t.spacing.sm} ${({theme:t})=>t.spacing.md};
  border: none;
  border-radius: ${({theme:t})=>t.borderRadius}; // 👈 ajustado
  cursor: pointer;
`;function tS({title:t,message:e,onConfirm:n,onCancel:r,confirmLabel:i="Confirmar",cancelLabel:s="Cancelar"}){const[o,l]=L.useState("");return S.jsx($L,{children:S.jsxs(BL,{children:[S.jsx("h3",{children:t}),S.jsx("p",{children:e}),S.jsx("textarea",{placeholder:"Motivo do cancelamento",value:o,onChange:u=>l(u.target.value),style:{width:"100%",minHeight:80}}),S.jsxs(zL,{children:[S.jsx(qL,{onClick:r,children:s}),S.jsx(WL,{onClick:()=>{o.trim()?n(o):alert("Informe um motivo para cancelar.")},children:i})]})]})})}function HL(){const{user:t}=Jn(),[e,n]=L.useState(""),[r,i]=L.useState([]),[s,o]=L.useState(null);return L.useEffect(()=>{async function l(){if(!t)return;const u=await yL(t.uid);if(u[0]){n(u[0].id);const c=await EL(u[0].id);i(c.sort((d,p)=>(d.date+d.time).localeCompare(p.date+p.time)))}}l()},[t]),S.jsxs(en,{children:[S.jsxs(Nt,{children:[S.jsx("h2",{children:"Painel do Barbeiro"}),!e&&S.jsxs(S.Fragment,{children:[S.jsx("p",{children:"Você ainda não cadastrou sua barbearia."}),S.jsx(Ke,{to:"/barber/setup",children:S.jsx(Xe,{children:"Cadastrar"})})]}),e&&S.jsxs(S.Fragment,{children:[S.jsxs(LL,{children:[S.jsx(Ke,{to:`/barber/schedule?shopId=${e}`,children:S.jsx(Xe,{children:"Configurar horários"})}),S.jsx(Ke,{to:`/barber/share?shopId=${e}`,children:S.jsx(Xe,{variant:"ghost",children:"Ver link público"})})]}),S.jsx(ML,{children:"Agendamentos"}),S.jsxs(FL,{children:[r.length===0&&S.jsx("p",{children:"Nenhum agendamento."}),r.map(l=>S.jsxs(jL,{status:l.status,children:[S.jsxs("strong",{children:[l.date," às ",l.time]}),S.jsxs("div",{children:[l.clientName," - ",l.clientPhone]}),l.status==="cancelled"&&S.jsxs(UL,{children:["Cancelado: ",l.cancelReason]}),l.status!=="cancelled"&&S.jsx(Xe,{variant:"danger",onClick:()=>o(l),children:"Cancelar"})]},l.id))]})]})]}),s&&S.jsx(tS,{title:"Cancelar agendamento",message:`Você está prestes a cancelar o horário de ${s.date} às ${s.time}.`,onCancel:()=>o(null),onConfirm:async l=>{await kf(e,s.id,l,"barber"),i(u=>u.map(c=>c.id===s.id?{...c,status:"cancelled",cancelReason:l}:c)),o(null)}})]})}const GL=K.div`
  display: flex;
  gap: ${({theme:t})=>t.spacing.sm};
  margin-bottom: ${({theme:t})=>t.spacing.lg};
`,KL=K.input`
  flex: 1;
`,QL=K.p`
  color: ${({theme:t})=>t.colors.danger};
`,YL=K(Nt)`
  margin-bottom: ${({theme:t})=>t.spacing.md};
`,XL=K.div`
  h3 {
    margin-bottom: ${({theme:t})=>t.spacing.xs};
  }

  p {
    color: ${({theme:t})=>t.colors.muted};
    margin-bottom: ${({theme:t})=>t.spacing.md};
  }
`;function JL(){const[t,e]=L.useState(""),[n,r]=L.useState([]),[i,s]=L.useState(!1),[o,l]=L.useState(null);async function u(){try{s(!0),l(null);const c=await _L(t);r(c)}catch(c){l("Erro ao buscar barbearias"),console.error(c)}finally{s(!1)}}return S.jsxs(en,{children:[S.jsx("h2",{children:"Barbearias"}),S.jsxs(GL,{children:[S.jsx(KL,{type:"text",placeholder:"Digite a cidade ou bairro",value:t,onChange:c=>e(c.target.value)}),S.jsx(Xe,{onClick:u,disabled:i,children:i?"Buscando...":"Buscar"})]}),i&&S.jsx("p",{children:"Carregando..."}),o&&S.jsx(QL,{children:o}),!i&&n.length===0&&S.jsx("p",{children:"Nenhuma barbearia encontrada."}),n.map(c=>S.jsx(YL,{children:S.jsxs(XL,{children:[S.jsx("h3",{children:c.name}),S.jsx("p",{children:c.location}),S.jsx(Ke,{to:`/s/${c.slug}`,children:S.jsx(Xe,{children:"Ver horários disponíveis"})})]})},c.id))]})}function ZL(t=new Date){const e=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${e}-${n}-${r}`}const e2=K.div`
  display: flex;
  gap: ${({theme:t})=>t.spacing.md};
  align-items: center;
`,t2=K.div`
  display: flex;
  gap: ${({theme:t})=>t.spacing.sm};
  flex-wrap: wrap;
  margin-top: ${({theme:t})=>t.spacing.md};
`,n2=K.input`
  margin-top: ${({theme:t})=>t.spacing.md};
  padding: ${({theme:t})=>t.spacing.sm} ${({theme:t})=>t.spacing.md};
  border: 1px solid ${({theme:t})=>t.colors.border};
  border-radius: ${({theme:t})=>t.borderRadius};
  background: ${({theme:t})=>t.colors.surface};
  color: ${({theme:t})=>t.colors.text};
  font-size: 1rem;
  width: 100%;

  &:focus {
    outline: none;
    border-color: ${({theme:t})=>t.colors.primary};
  }
`;function r2(){const{shopId:t}=Z0(),{user:e}=Jn(),[n,r]=L.useState(ZL()),[i,s]=L.useState([]),[o,l]=L.useState(null),[u,c]=L.useState([]),[d,p]=L.useState(""),[m,E]=L.useState(!1);L.useEffect(()=>{async function P(){var y;if(!t)return;const x=await Qu(Xn(et,"shops",t));l(x.data());const v=((y=(await Qu(Xn(et,"schedules",t))).data())==null?void 0:y.weekly)||{},T=new Date(n+"T00:00:00").getDay();s(v[["sun","mon","tue","wed","thu","fri","sat"][T]]||[]);const V=(await Ai(Ii(et,"shops",t,"bookings"))).docs.map(I=>I.data()),_=V.filter(I=>I.date===n&&I.status!=="cancelled").map(I=>I.time);if(c(_),e){const I=V.some(A=>A.clientEmail===e.email&&A.status!=="cancelled");E(I)}}P()},[t,n,e]);async function R(P){if(!e){alert("Você precisa estar logado para agendar.");return}if(!d.trim()){alert("Informe seu telefone de contato.");return}try{await wL(t,n,P,e.displayName||e.email||"Cliente",d),alert("Agendamento realizado!")}catch(x){alert(x.message)}}return S.jsx(en,{children:S.jsxs(Nt,{children:[S.jsxs("h2",{children:["Agendar: ",o==null?void 0:o.name]}),m?S.jsxs("p",{children:["Você já agendou nesta barbearia. Para trocar de horário ou cancelar, vá para ",S.jsx("strong",{children:"Meus Agendamentos"}),"."]}):S.jsxs(S.Fragment,{children:[S.jsx(e2,{children:S.jsx("input",{type:"date",value:n,onChange:P=>r(P.target.value)})}),S.jsx(n2,{type:"text",placeholder:"Telefone (99) 99999-9999",value:d,onChange:P=>p(P.target.value)}),S.jsxs(t2,{children:[i.length===0&&S.jsx("p",{children:"Nenhum horário disponível neste dia."}),i.map(P=>{const x=u.includes(P);return S.jsxs(Xe,{onClick:()=>R(P),disabled:x,variant:x?"ghost":"default",children:[P," ",x&&"(ocupado)"]},P)})]})]})]})})}const i2=K.div`
  color: ${({theme:t})=>t.colors.muted};
  margin-bottom: ${({theme:t})=>t.spacing.md};
`;function s2(){const{slug:t}=Z0(),[e,n]=L.useState(null);return L.useEffect(()=>{t&&vL(t).then(n)},[t]),e?S.jsx(en,{children:S.jsxs(Nt,{children:[S.jsx("h2",{children:e.name}),S.jsx(i2,{children:e.location}),S.jsx(Ke,{to:`/book/${e.id}`,children:S.jsx(Xe,{children:"Agendar"})})]})}):S.jsx(en,{children:S.jsx(Nt,{children:"Carregando..."})})}const o2=K.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background: #0c0e14;
  border-bottom: 1px solid var(--border);
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  padding: 14px 16px;

  @media (max-width: 768px) {
    padding: 12px 14px;
  }
`,a2=K.div`
  font-weight: 800;
  letter-spacing: 0.5px;
  text-align: center;

  a {
    color: var(--text);
  }
`,x_=K.nav`
  display: flex;
  gap: 16px;
  align-items: center;

  a {
    padding: 8px 12px;
    border-radius: 999px;
    color: var(--muted);
    border: 1px solid transparent;

    &[data-active='true'] {
      color: var(--text);
      border-color: var(--border);
      background: var(--soft);
    }

    &:hover {
      color: var(--text);
      background: var(--soft);
    }
  }

  /* === Desktop Nav === */
  &[data-desktop] {
    flex: 1;
    @media (max-width: 768px) {
      display: none;
    }
  }

  /* === Mobile Nav === */
  &[data-mobile] {
    display: none;
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      background: #000;
      border-right: 1px solid var(--border);
      width: 280px;
      padding: 24px;
      gap: 16px;
      transform: ${({open:t})=>t?"translateX(0)":"translateX(-100%)"};
      transition: transform 0.3s ease;
      z-index: 30;

      a {
        width: 100%;
        font-size: 16px;
        padding: 12px 16px;
      }
    }
  }
`,l2=K.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-bottom: 16px;
    margin-bottom: 16px;
    border-bottom: 1px solid var(--border);

    .brand-in-menu {
      font-weight: 800;
      letter-spacing: 0.5px;
      a {
        color: var(--text);
        &:hover {
          background: none;
        }
      }
    }
  }
`,u2=K.div`
 display: flex;
  gap: 12px;
  align-items: center;
  flex: 1;
  justify-content: flex-end;

  span {
    font-size: 14px;
    color: var(--muted);
    @media (max-width: 768px) {
      display: none;
    }
  }

  a,
  button {
    cursor: pointer;
    padding: 8px 14px;
    border-radius: 12px;
    border: 1px solid var(--border);
    background: var(--soft);
    color: var(--text);
  }
`,N_=K.button`
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text);
  font-size: 24px;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,c2=K.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  /* Overlay só fora do menu */
  background: rgba(0, 0, 0, 0.6);
  z-index: 4;

  opacity: ${({open:t})=>t?1:0};
  pointer-events: ${({open:t})=>t?"auto":"none"};
  transition: opacity 0.35s ease;
`;var nS={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},D_=Ne.createContext&&Ne.createContext(nS),h2=["attr","size","title"];function d2(t,e){if(t==null)return{};var n=f2(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function f2(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function Yu(){return Yu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Yu.apply(this,arguments)}function b_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Xu(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?b_(Object(n),!0).forEach(function(r){p2(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function p2(t,e,n){return e=m2(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function m2(t){var e=g2(t,"string");return typeof e=="symbol"?e:e+""}function g2(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function rS(t){return t&&t.map((e,n)=>Ne.createElement(e.tag,Xu({key:n},e.attr),rS(e.child)))}function iS(t){return e=>Ne.createElement(y2,Yu({attr:Xu({},t.attr)},e),rS(t.child))}function y2(t){var e=n=>{var{attr:r,size:i,title:s}=t,o=d2(t,h2),l=i||n.size||"1em",u;return n.className&&(u=n.className),t.className&&(u=(u?u+" ":"")+t.className),Ne.createElement("svg",Yu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:u,style:Xu(Xu({color:t.color||n.color},n.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),s&&Ne.createElement("title",null,s),t.children)};return D_!==void 0?Ne.createElement(D_.Consumer,null,n=>e(n)):e(nS)}function v2(t){return iS({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"},child:[]}]})(t)}function _2(t){return iS({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"},child:[]}]})(t)}function w2(){const{pathname:t}=Pi(),{user:e,role:n,signOut:r,ready:i}=Jn(),[s,o]=L.useState(!1);if(L.useEffect(()=>(s?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[s]),!i)return null;const l=()=>o(!1);return S.jsxs(S.Fragment,{children:[S.jsx(c2,{open:s,onClick:l}),S.jsxs(o2,{children:[S.jsx(N_,{onClick:()=>o(u=>!u),children:S.jsx(v2,{})}),S.jsxs(x_,{"data-desktop":!0,children:[S.jsx(Ke,{to:"/","data-active":t==="/",onClick:l,children:"Início"}),n==="client"&&S.jsxs(S.Fragment,{children:[S.jsx(Ke,{to:"/client","data-active":t.startsWith("/client"),onClick:l,children:"Buscar Barbearias"}),S.jsx(Ke,{to:"/client/bookings","data-active":t.startsWith("/client/bookings"),onClick:l,children:"Meus Agendamentos"})]}),n==="barber"&&S.jsx(Ke,{to:"/barber/dashboard","data-active":t.startsWith("/barber"),onClick:l,children:"Barbeiro"})]}),S.jsxs(x_,{open:s,"data-mobile":!0,children:[S.jsxs(l2,{children:[S.jsx("div",{className:"brand-in-menu",children:S.jsx(Ke,{to:"/",onClick:l,children:"BarberBook"})}),S.jsx(N_,{onClick:l,children:S.jsx(_2,{})})]}),S.jsx(Ke,{to:"/","data-active":t==="/",onClick:l,children:"Início"}),n==="client"&&S.jsxs(S.Fragment,{children:[S.jsx(Ke,{to:"/client","data-active":t.startsWith("/client"),onClick:l,children:"Buscar Barbearias"}),S.jsx(Ke,{to:"/client/bookings","data-active":t.startsWith("/client/bookings"),onClick:l,children:"Meus Agendamentos"})]}),n==="barber"&&S.jsx(Ke,{to:"/barber/dashboard","data-active":t.startsWith("/barber"),onClick:l,children:"Barbeiro"})]}),S.jsx(a2,{children:S.jsx(Ke,{to:"/",onClick:l,children:"BarberBook"})}),S.jsx(u2,{children:e?S.jsxs(S.Fragment,{children:[S.jsxs("span",{children:["Olá, ",e.displayName||e.email]}),S.jsx("button",{onClick:r,children:"Sair"})]}):S.jsx(Ke,{to:"/auth",children:"Entrar"})})]})]})}const E2=K.div`
  display: grid;
  gap: ${({theme:t})=>t.spacing.md};
  margin-top: ${({theme:t})=>t.spacing.md};
`,T2=K(Nt)`
  padding: ${({theme:t})=>t.spacing.md};
  opacity: ${({status:t})=>t==="cancelled"?.6:1};
  display: grid;
  gap: ${({theme:t})=>t.spacing.xs};
`,I2=K.p`
  color: ${({theme:t})=>t.colors.danger};
  margin: 0;
  font-size: 0.9rem;
`,S2=K.div`
  display: flex;
  gap: ${({theme:t})=>t.spacing.sm};
  margin-top: ${({theme:t})=>t.spacing.sm};
`;function A2(){const{user:t,role:e}=Jn(),[n,r]=L.useState([]),[i,s]=L.useState(null),o=js();if(L.useEffect(()=>{async function u(){if(!t)return;const c=await TL(t.displayName||t.email||"");r(c.sort((d,p)=>(d.date+d.time).localeCompare(p.date+p.time)))}u()},[t]),!t||e!=="client")return S.jsx(en,{children:S.jsx(Nt,{children:S.jsx("p",{children:"Você precisa estar logado como cliente para ver seus agendamentos."})})});async function l(u){i&&(await kf(i.shopId,i.id,u,"client"),r(c=>c.map(d=>d.id===i.id?{...d,status:"cancelled",cancelReason:u,cancelledBy:"client"}:d)),s(null))}return S.jsxs(en,{children:[S.jsxs(Nt,{children:[S.jsx("h2",{children:"Meus Agendamentos"}),n.length===0&&S.jsx("p",{children:"Nenhum agendamento encontrado."}),S.jsx(E2,{children:n.map(u=>S.jsxs(T2,{status:u.status,children:[S.jsxs("strong",{children:[u.date," às ",u.time]}),S.jsxs("div",{children:["Barbearia: ",u.shopName||u.shopId]}),S.jsxs("div",{children:["Status: ",u.status||"ativo"]}),u.status==="cancelled"&&S.jsxs(I2,{children:["Cancelado pelo ",u.cancelledBy,": ",u.cancelReason]}),u.status!=="cancelled"&&S.jsxs(S2,{children:[S.jsx(Xe,{variant:"danger",onClick:()=>s(u),children:"Cancelar"}),S.jsx(Xe,{variant:"ghost",onClick:async()=>{await kf(u.shopId,u.id,"Cliente reagendou","client"),r(c=>c.map(d=>d.id===u.id?{...d,status:"cancelled",cancelReason:"Cliente reagendou",cancelledBy:"client"}:d)),o(`/s/${u.shopSlug||u.shopId}`)},children:"Trocar horário"})]})]},u.id))})]}),i&&S.jsx(tS,{title:"Cancelar agendamento",message:`Você realmente deseja cancelar o horário de ${i.date} às ${i.time}?`,onCancel:()=>s(null),onConfirm:l})]})}function Rl({children:t}){return Jn(n=>n.user)?t:S.jsx(Pp,{to:"/auth",replace:!0})}function C2(){return S.jsxs(S.Fragment,{children:[S.jsx(w2,{}),S.jsxs(JC,{children:[S.jsx(Ht,{path:"/",element:S.jsx(TP,{})}),S.jsx(Ht,{path:"/auth",element:S.jsx(fL,{})}),S.jsx(Ht,{path:"/client/bookings",element:S.jsx(A2,{})}),S.jsx(Ht,{path:"/client",element:S.jsx(JL,{})}),S.jsx(Ht,{path:"/book/:shopId",element:S.jsx(r2,{})}),S.jsx(Ht,{path:"/barber/setup",element:S.jsx(Rl,{children:S.jsx(SL,{})})}),S.jsx(Ht,{path:"/barber/schedule",element:S.jsx(Rl,{children:S.jsx(bL,{})})}),S.jsx(Ht,{path:"/barber/share",element:S.jsx(Rl,{children:S.jsx(VL,{})})}),S.jsx(Ht,{path:"/barber/dashboard",element:S.jsx(Rl,{children:S.jsx(HL,{})})}),S.jsx(Ht,{path:"/s/:slug",element:S.jsx(s2,{})}),S.jsx(Ht,{path:"*",element:S.jsx(Pp,{to:"/",replace:!0})})]})]})}const Vt={colors:{background:"#121212",surface:"#1E1E1E",primary:"#BB86FC",secondary:"#03DAC6",onPrimary:"#000000",onSurface:"#FFFFFF",text:"#E0E0E0",muted:"#999999",border:"#2c2c2c",danger:"#CF6679",soft:"#2A2A2A"},fonts:{main:"Roboto, sans-serif"},spacing:{xs:"4px",sm:"8px",md:"12px",lg:"16px",xl:"24px"},borderRadius:"12px"},R2=cP`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${Vt.colors.background};
    color: ${Vt.colors.text};
    font-family: ${Vt.fonts.main};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, strong {
    color: ${Vt.colors.onSurface};
  }

  p {
    line-height: 1.6;
    color: ${Vt.colors.text};
  }

  a {
    color: ${Vt.colors.primary};
    text-decoration: none;
  }

  input,
  select,
  textarea {
    background-color: ${Vt.colors.soft};
    border: 1px solid ${Vt.colors.border};
    color: ${Vt.colors.text};
    padding: ${Vt.spacing.md};
    border-radius: ${Vt.borderRadius};
    font-size: 1rem;
    width: 100%;
    resize: none;

    &:focus {
      outline: none;
      border-color: ${Vt.colors.primary};
    }
  }
`;Zh.createRoot(document.getElementById("root")).render(S.jsx(Ne.StrictMode,{children:S.jsxs(aP,{theme:Vt,children:[S.jsx(R2,{}),S.jsx(oR,{children:S.jsx(C2,{})})]})}));
