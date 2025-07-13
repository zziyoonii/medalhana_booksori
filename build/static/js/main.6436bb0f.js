/*! For license information please see main.6436bb0f.js.LICENSE.txt */
(()=>{var e={43:(e,t,n)=>{"use strict";e.exports=n(202)},153:(e,t,n)=>{"use strict";var r=n(43),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,i={},u=null,c=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)o.call(t,r)&&!s.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:a,type:e,key:u,ref:c,props:i,_owner:l.current}}t.Fragment=i,t.jsx=u,t.jsxs=u},202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function x(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function b(){}function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}x.prototype.isReactComponent={},x.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=x.prototype;var y=v.prototype=new b;y.constructor=v,m(y,x.prototype),y.isPureReactComponent=!0;var w=Array.isArray,k=Object.prototype.hasOwnProperty,S={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var a,i={},o=null,l=null;if(null!=t)for(a in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(o=""+t.key),t)k.call(t,a)&&!C.hasOwnProperty(a)&&(i[a]=t[a]);var s=arguments.length-2;if(1===s)i.children=r;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===i[a]&&(i[a]=s[a]);return{$$typeof:n,type:e,key:o,ref:l,props:i,_owner:S.current}}function _(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var j=/\/+/g;function P(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function z(e,t,a,i,o){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return o=o(s=e),e=""===i?"."+P(s,0):i,w(o)?(a="",null!=e&&(a=e.replace(j,"$&/")+"/"),z(o,t,a,"",function(e){return e})):null!=o&&(_(o)&&(o=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,a+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(j,"$&/")+"/")+e)),t.push(o)),1;if(s=0,i=""===i?".":i+":",w(e))for(var u=0;u<e.length;u++){var c=i+P(l=e[u],u);s+=z(l,t,a,c,o)}else if(c=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"===typeof c)for(e=c.call(e),u=0;!(l=e.next()).done;)s+=z(l=l.value,t,a,c=i+P(l,u++),o);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function T(e,t,n){if(null==e)return e;var r=[],a=0;return z(e,r,"","",function(e){return t.call(n,e,a++)}),r}function N(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},R={transition:null},L={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:R,ReactCurrentOwner:S};function A(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:T,forEach:function(e,t,n){T(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return T(e,function(){t++}),t},toArray:function(e){return T(e,function(e){return e})||[]},only:function(e){if(!_(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=x,t.Fragment=a,t.Profiler=o,t.PureComponent=v,t.StrictMode=i,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,t.act=A,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=m({},e.props),i=e.key,o=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,l=S.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)k.call(t,u)&&!C.hasOwnProperty(u)&&(a[u]=void 0===t[u]&&void 0!==s?s[u]:t[u])}var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];a.children=s}return{$$typeof:n,type:e.type,key:i,ref:o,props:a,_owner:l}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:N}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=R.transition;R.transition={};try{e()}finally{R.transition=t}},t.unstable_act=A,t.useCallback=function(e,t){return O.current.useCallback(e,t)},t.useContext=function(e){return O.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return O.current.useDeferredValue(e)},t.useEffect=function(e,t){return O.current.useEffect(e,t)},t.useId=function(){return O.current.useId()},t.useImperativeHandle=function(e,t,n){return O.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return O.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return O.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return O.current.useMemo(e,t)},t.useReducer=function(e,t,n){return O.current.useReducer(e,t,n)},t.useRef=function(e){return O.current.useRef(e)},t.useState=function(e){return O.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return O.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return O.current.useTransition()},t.version="18.3.1"},219:(e,t,n)=>{"use strict";var r=n(763),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};function s(e){return r.isMemo(e)?o:l[e.$$typeof]||a}l[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},l[r.Memo]=o;var u=Object.defineProperty,c=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,n,r){if("string"!==typeof n){if(h){var a=p(n);a&&a!==h&&e(t,a,r)}var o=c(n);d&&(o=o.concat(d(n)));for(var l=s(t),m=s(n),g=0;g<o.length;++g){var x=o[g];if(!i[x]&&(!r||!r[x])&&(!m||!m[x])&&(!l||!l[x])){var b=f(n,x);try{u(t,x,b)}catch(v){}}}}return t}},234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(!(0<i(a,t)))break e;e[r]=t,e[n]=a,n=r}}function r(e){return 0===e.length?null:e[0]}function a(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,o=a>>>1;r<o;){var l=2*(r+1)-1,s=e[l],u=l+1,c=e[u];if(0>i(s,n))u<a&&0>i(c,s)?(e[r]=c,e[u]=n,r=u):(e[r]=s,e[l]=n,r=l);else{if(!(u<a&&0>i(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var o=performance;t.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var u=[],c=[],d=1,f=null,p=3,h=!1,m=!1,g=!1,x="function"===typeof setTimeout?setTimeout:null,b="function"===typeof clearTimeout?clearTimeout:null,v="undefined"!==typeof setImmediate?setImmediate:null;function y(e){for(var t=r(c);null!==t;){if(null===t.callback)a(c);else{if(!(t.startTime<=e))break;a(c),t.sortIndex=t.expirationTime,n(u,t)}t=r(c)}}function w(e){if(g=!1,y(e),!m)if(null!==r(u))m=!0,R(k);else{var t=r(c);null!==t&&L(w,t.startTime-e)}}function k(e,n){m=!1,g&&(g=!1,b(_),_=-1),h=!0;var i=p;try{for(y(n),f=r(u);null!==f&&(!(f.expirationTime>n)||e&&!z());){var o=f.callback;if("function"===typeof o){f.callback=null,p=f.priorityLevel;var l=o(f.expirationTime<=n);n=t.unstable_now(),"function"===typeof l?f.callback=l:f===r(u)&&a(u),y(n)}else a(u);f=r(u)}if(null!==f)var s=!0;else{var d=r(c);null!==d&&L(w,d.startTime-n),s=!1}return s}finally{f=null,p=i,h=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var S,C=!1,E=null,_=-1,j=5,P=-1;function z(){return!(t.unstable_now()-P<j)}function T(){if(null!==E){var e=t.unstable_now();P=e;var n=!0;try{n=E(!0,e)}finally{n?S():(C=!1,E=null)}}else C=!1}if("function"===typeof v)S=function(){v(T)};else if("undefined"!==typeof MessageChannel){var N=new MessageChannel,O=N.port2;N.port1.onmessage=T,S=function(){O.postMessage(null)}}else S=function(){x(T,0)};function R(e){E=e,C||(C=!0,S())}function L(e,n){_=x(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||h||(m=!0,R(k))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return r(u)},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,a,i){var o=t.unstable_now();switch("object"===typeof i&&null!==i?i="number"===typeof(i=i.delay)&&0<i?o+i:o:i=o,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:a,priorityLevel:e,startTime:i,expirationTime:l=i+l,sortIndex:-1},i>o?(e.sortIndex=i,n(c,e),null===r(u)&&e===r(c)&&(g?(b(_),_=-1):g=!0,L(w,i-o))):(e.sortIndex=l,n(u,e),m||h||(m=!0,R(k))),e},t.unstable_shouldYield=z,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},324:e=>{e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var i=Object.keys(e),o=Object.keys(t);if(i.length!==o.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<i.length;s++){var u=i[s];if(!l(u))return!1;var c=e[u],d=t[u];if(!1===(a=n?n.call(r,c,d,u):void 0)||void 0===a&&c!==d)return!1}return!0}},391:(e,t,n)=>{"use strict";var r=n(950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},528:(e,t)=>{"use strict";var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler");Symbol.for("react.provider");var l=Symbol.for("react.consumer"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),h=Symbol.for("react.view_transition"),m=Symbol.for("react.client.reference");function g(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case a:case o:case i:case c:case d:case h:return e;default:switch(e=e&&e.$$typeof){case s:case u:case p:case f:case l:return e;default:return t}}case r:return t}}}t.Hy=function(e){return"string"===typeof e||"function"===typeof e||e===a||e===o||e===i||e===c||e===d||"object"===typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===f||e.$$typeof===s||e.$$typeof===l||e.$$typeof===u||e.$$typeof===m||void 0!==e.getModuleId)},t.QP=g},579:(e,t,n)=>{"use strict";e.exports=n(153)},730:(e,t,n)=>{"use strict";var r=n(43),a=n(853);function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,l={};function s(e,t){u(e,t),u(e+"Capture",t)}function u(e,t){for(l[e]=t,e=0;e<t.length;e++)o.add(t[e])}var c=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},h={};function m(e,t,n,r,a,i,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){g[e]=new m(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];g[t]=new m(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){g[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){g[e]=new m(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){g[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){g[e]=new m(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){g[e]=new m(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){g[e]=new m(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){g[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function b(e){return e[1].toUpperCase()}function v(e,t,n,r){var a=g.hasOwnProperty(t)?g[t]:null;(null!==a?0!==a.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,a,r)&&(n=null),r||null===a?function(e){return!!d.call(h,e)||!d.call(p,e)&&(f.test(e)?h[e]=!0:(p[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=null===n?3!==a.type&&"":n:(t=a.attributeName,r=a.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(a=a.type)||4===a&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(x,b);g[t]=new m(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(x,b);g[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(x,b);g[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)}),g.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)});var y=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),k=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),j=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),T=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),O=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var R=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var L=Symbol.iterator;function A(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=L&&e[L]||e["@@iterator"])?e:null}var I,D=Object.assign;function M(e){if(void 0===I)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);I=t&&t[1]||""}return"\n"+I+e}var F=!1;function $(e,t){if(!e||F)return"";F=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&"string"===typeof u.stack){for(var a=u.stack.split("\n"),i=r.stack.split("\n"),o=a.length-1,l=i.length-1;1<=o&&0<=l&&a[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(a[o]!==i[l]){if(1!==o||1!==l)do{if(o--,0>--l||a[o]!==i[l]){var s="\n"+a[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}}while(1<=o&&0<=l);break}}}finally{F=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?M(e):""}function U(e){switch(e.tag){case 5:return M(e.type);case 16:return M("Lazy");case 13:return M("Suspense");case 19:return M("SuspenseList");case 0:case 2:case 15:return e=$(e.type,!1);case 11:return e=$(e.type.render,!1);case 1:return e=$(e.type,!0);default:return""}}function H(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case S:return"Fragment";case k:return"Portal";case E:return"Profiler";case C:return"StrictMode";case z:return"Suspense";case T:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case j:return(e.displayName||"Context")+".Consumer";case _:return(e._context.displayName||"Context")+".Provider";case P:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case N:return null!==(t=e.displayName||null)?t:H(e.type)||"Memo";case O:t=e._payload,e=e._init;try{return H(e(t))}catch(n){}}return null}function W(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return H(t);case 8:return t===C?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function B(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function V(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function K(e){e._valueTracker||(e._valueTracker=function(e){var t=V(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){r=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function Q(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=V(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function Y(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function q(e,t){var n=t.checked;return D({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function G(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=B(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function X(e,t){null!=(t=t.checked)&&v(e,"checked",t,!1)}function Z(e,t){X(e,t);var n=B(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,B(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function J(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&Y(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+B(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(i(91));return D({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ae(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(i(92));if(te(n)){if(1<n.length)throw Error(i(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:B(n)}}function ie(e,t){var n=B(t.value),r=B(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function oe(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function se(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?le(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ue,ce,de=(ce=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ue=ue||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ue.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction(function(){return ce(e,t)})}:ce);function fe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var pe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];function me(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||pe.hasOwnProperty(e)&&pe[e]?(""+t).trim():t+"px"}function ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),a=me(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}Object.keys(pe).forEach(function(e){he.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pe[t]=pe[e]})});var xe=D({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function be(e,t){if(t){if(xe[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(i(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(i(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(i(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(i(62))}}function ve(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ye=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var ke=null,Se=null,Ce=null;function Ee(e){if(e=va(e)){if("function"!==typeof ke)throw Error(i(280));var t=e.stateNode;t&&(t=wa(t),ke(e.stateNode,e.type,t))}}function _e(e){Se?Ce?Ce.push(e):Ce=[e]:Se=e}function je(){if(Se){var e=Se,t=Ce;if(Ce=Se=null,Ee(e),t)for(e=0;e<t.length;e++)Ee(t[e])}}function Pe(e,t){return e(t)}function ze(){}var Te=!1;function Ne(e,t,n){if(Te)return e(t,n);Te=!0;try{return Pe(e,t,n)}finally{Te=!1,(null!==Se||null!==Ce)&&(ze(),je())}}function Oe(e,t){var n=e.stateNode;if(null===n)return null;var r=wa(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(i(231,t,typeof n));return n}var Re=!1;if(c)try{var Le={};Object.defineProperty(Le,"passive",{get:function(){Re=!0}}),window.addEventListener("test",Le,Le),window.removeEventListener("test",Le,Le)}catch(ce){Re=!1}function Ae(e,t,n,r,a,i,o,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Ie=!1,De=null,Me=!1,Fe=null,$e={onError:function(e){Ie=!0,De=e}};function Ue(e,t,n,r,a,i,o,l,s){Ie=!1,De=null,Ae.apply($e,arguments)}function He(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function We(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function Be(e){if(He(e)!==e)throw Error(i(188))}function Ve(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=He(e)))throw Error(i(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(null===a)break;var o=a.alternate;if(null===o){if(null!==(r=a.return)){n=r;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return Be(a),e;if(o===r)return Be(a),t;o=o.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=o;else{for(var l=!1,s=a.child;s;){if(s===n){l=!0,n=a,r=o;break}if(s===r){l=!0,r=a,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=a;break}if(s===r){l=!0,r=o,n=a;break}s=s.sibling}if(!l)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(3!==n.tag)throw Error(i(188));return n.stateNode.current===n?e:t}(e))?Ke(e):null}function Ke(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ke(e);if(null!==t)return t;e=e.sibling}return null}var Qe=a.unstable_scheduleCallback,Ye=a.unstable_cancelCallback,qe=a.unstable_shouldYield,Ge=a.unstable_requestPaint,Xe=a.unstable_now,Ze=a.unstable_getCurrentPriorityLevel,Je=a.unstable_ImmediatePriority,et=a.unstable_UserBlockingPriority,tt=a.unstable_NormalPriority,nt=a.unstable_LowPriority,rt=a.unstable_IdlePriority,at=null,it=null;var ot=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(lt(e)/st|0)|0},lt=Math.log,st=Math.LN2;var ut=64,ct=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ft(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,o=268435455&n;if(0!==o){var l=o&~a;0!==l?r=dt(l):0!==(i&=o)&&(r=dt(i))}else 0!==(o=n&~a)?r=dt(o):0!==i&&(r=dt(i));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&a)&&((a=r&-r)>=(i=t&-t)||16===a&&0!==(4194240&i)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)a=1<<(n=31-ot(t)),r|=e[n],t&=~a;return r}function pt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ht(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function mt(){var e=ut;return 0===(4194240&(ut<<=1))&&(ut=64),e}function gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-ot(t)]=n}function bt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ot(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var vt=0;function yt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,kt,St,Ct,Et,_t=!1,jt=[],Pt=null,zt=null,Tt=null,Nt=new Map,Ot=new Map,Rt=[],Lt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function At(e,t){switch(e){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":zt=null;break;case"mouseover":case"mouseout":Tt=null;break;case"pointerover":case"pointerout":Nt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ot.delete(t.pointerId)}}function It(e,t,n,r,a,i){return null===e||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},null!==t&&(null!==(t=va(t))&&kt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function Dt(e){var t=ba(e.target);if(null!==t){var n=He(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=We(n)))return e.blockedOn=t,void Et(e.priority,function(){St(n)})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Mt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=qt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=va(n))&&kt(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);ye=r,n.target.dispatchEvent(r),ye=null,t.shift()}return!0}function Ft(e,t,n){Mt(e)&&n.delete(t)}function $t(){_t=!1,null!==Pt&&Mt(Pt)&&(Pt=null),null!==zt&&Mt(zt)&&(zt=null),null!==Tt&&Mt(Tt)&&(Tt=null),Nt.forEach(Ft),Ot.forEach(Ft)}function Ut(e,t){e.blockedOn===t&&(e.blockedOn=null,_t||(_t=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,$t)))}function Ht(e){function t(t){return Ut(t,e)}if(0<jt.length){Ut(jt[0],e);for(var n=1;n<jt.length;n++){var r=jt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Pt&&Ut(Pt,e),null!==zt&&Ut(zt,e),null!==Tt&&Ut(Tt,e),Nt.forEach(t),Ot.forEach(t),n=0;n<Rt.length;n++)(r=Rt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Rt.length&&null===(n=Rt[0]).blockedOn;)Dt(n),null===n.blockedOn&&Rt.shift()}var Wt=y.ReactCurrentBatchConfig,Bt=!0;function Vt(e,t,n,r){var a=vt,i=Wt.transition;Wt.transition=null;try{vt=1,Qt(e,t,n,r)}finally{vt=a,Wt.transition=i}}function Kt(e,t,n,r){var a=vt,i=Wt.transition;Wt.transition=null;try{vt=4,Qt(e,t,n,r)}finally{vt=a,Wt.transition=i}}function Qt(e,t,n,r){if(Bt){var a=qt(e,t,n,r);if(null===a)Br(e,t,r,Yt,n),At(e,r);else if(function(e,t,n,r,a){switch(t){case"focusin":return Pt=It(Pt,e,t,n,r,a),!0;case"dragenter":return zt=It(zt,e,t,n,r,a),!0;case"mouseover":return Tt=It(Tt,e,t,n,r,a),!0;case"pointerover":var i=a.pointerId;return Nt.set(i,It(Nt.get(i)||null,e,t,n,r,a)),!0;case"gotpointercapture":return i=a.pointerId,Ot.set(i,It(Ot.get(i)||null,e,t,n,r,a)),!0}return!1}(a,e,t,n,r))r.stopPropagation();else if(At(e,r),4&t&&-1<Lt.indexOf(e)){for(;null!==a;){var i=va(a);if(null!==i&&wt(i),null===(i=qt(e,t,n,r))&&Br(e,t,r,Yt,n),i===a)break;a=i}null!==a&&r.stopPropagation()}else Br(e,t,r,null,n)}}var Yt=null;function qt(e,t,n,r){if(Yt=null,null!==(e=ba(e=we(r))))if(null===(t=He(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=We(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Yt=e,null}function Gt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ze()){case Je:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Xt=null,Zt=null,Jt=null;function en(){if(Jt)return Jt;var e,t,n=Zt,r=n.length,a="value"in Xt?Xt.value:Xt.textContent,i=a.length;for(e=0;e<r&&n[e]===a[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===a[i-t];t++);return Jt=a.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function an(e){function t(t,n,r,a,i){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=i,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(a):a[o]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return D(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var on,ln,sn,un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cn=an(un),dn=D({},un,{view:0,detail:0}),fn=an(dn),pn=D({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:En,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sn&&(sn&&"mousemove"===e.type?(on=e.screenX-sn.screenX,ln=e.screenY-sn.screenY):ln=on=0,sn=e),on)},movementY:function(e){return"movementY"in e?e.movementY:ln}}),hn=an(pn),mn=an(D({},pn,{dataTransfer:0})),gn=an(D({},dn,{relatedTarget:0})),xn=an(D({},un,{animationName:0,elapsedTime:0,pseudoElement:0})),bn=D({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vn=an(bn),yn=an(D({},un,{data:0})),wn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Sn[e])&&!!t[e]}function En(){return Cn}var _n=D({},dn,{key:function(e){if(e.key){var t=wn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?kn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:En,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),jn=an(_n),Pn=an(D({},pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),zn=an(D({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:En})),Tn=an(D({},un,{propertyName:0,elapsedTime:0,pseudoElement:0})),Nn=D({},pn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),On=an(Nn),Rn=[9,13,27,32],Ln=c&&"CompositionEvent"in window,An=null;c&&"documentMode"in document&&(An=document.documentMode);var In=c&&"TextEvent"in window&&!An,Dn=c&&(!Ln||An&&8<An&&11>=An),Mn=String.fromCharCode(32),Fn=!1;function $n(e,t){switch(e){case"keyup":return-1!==Rn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Un(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Hn=!1;var Wn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Wn[e.type]:"textarea"===t}function Vn(e,t,n,r){_e(r),0<(t=Kr(t,"onChange")).length&&(n=new cn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Kn=null,Qn=null;function Yn(e){Mr(e,0)}function qn(e){if(Q(ya(e)))return e}function Gn(e,t){if("change"===e)return t}var Xn=!1;if(c){var Zn;if(c){var Jn="oninput"in document;if(!Jn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Jn="function"===typeof er.oninput}Zn=Jn}else Zn=!1;Xn=Zn&&(!document.documentMode||9<document.documentMode)}function tr(){Kn&&(Kn.detachEvent("onpropertychange",nr),Qn=Kn=null)}function nr(e){if("value"===e.propertyName&&qn(Qn)){var t=[];Vn(t,Qn,e,we(e)),Ne(Yn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Qn=n,(Kn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function ar(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return qn(Qn)}function ir(e,t){if("click"===e)return qn(t)}function or(e,t){if("input"===e||"change"===e)return qn(t)}var lr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function sr(e,t){if(lr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!d.call(t,a)||!lr(e[a],t[a]))return!1}return!0}function ur(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cr(e,t){var n,r=ur(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ur(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function fr(){for(var e=window,t=Y();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=Y((e=t.contentWindow).document)}return t}function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function hr(e){var t=fr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&pr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var a=n.textContent.length,i=Math.min(r.start,a);r=void 0===r.end?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=cr(n,i);var o=cr(n,r);a&&o&&(1!==e.rangeCount||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&((t=t.createRange()).setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mr=c&&"documentMode"in document&&11>=document.documentMode,gr=null,xr=null,br=null,vr=!1;function yr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;vr||null==gr||gr!==Y(r)||("selectionStart"in(r=gr)&&pr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},br&&sr(br,r)||(br=r,0<(r=Kr(xr,"onSelect")).length&&(t=new cn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kr={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},Sr={},Cr={};function Er(e){if(Sr[e])return Sr[e];if(!kr[e])return e;var t,n=kr[e];for(t in n)if(n.hasOwnProperty(t)&&t in Cr)return Sr[e]=n[t];return e}c&&(Cr=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);var _r=Er("animationend"),jr=Er("animationiteration"),Pr=Er("animationstart"),zr=Er("transitionend"),Tr=new Map,Nr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Or(e,t){Tr.set(e,t),s(t,[e])}for(var Rr=0;Rr<Nr.length;Rr++){var Lr=Nr[Rr];Or(Lr.toLowerCase(),"on"+(Lr[0].toUpperCase()+Lr.slice(1)))}Or(_r,"onAnimationEnd"),Or(jr,"onAnimationIteration"),Or(Pr,"onAnimationStart"),Or("dblclick","onDoubleClick"),Or("focusin","onFocus"),Or("focusout","onBlur"),Or(zr,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ar="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ir=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ar));function Dr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,a,o,l,s,u){if(Ue.apply(this,arguments),Ie){if(!Ie)throw Error(i(198));var c=De;Ie=!1,De=null,Me||(Me=!0,Fe=c)}}(r,t,void 0,e),e.currentTarget=null}function Mr(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==i&&a.isPropagationStopped())break e;Dr(a,l,u),i=s}else for(o=0;o<r.length;o++){if(s=(l=r[o]).instance,u=l.currentTarget,l=l.listener,s!==i&&a.isPropagationStopped())break e;Dr(a,l,u),i=s}}}if(Me)throw e=Fe,Me=!1,Fe=null,e}function Fr(e,t){var n=t[ma];void 0===n&&(n=t[ma]=new Set);var r=e+"__bubble";n.has(r)||(Wr(t,e,2,!1),n.add(r))}function $r(e,t,n){var r=0;t&&(r|=4),Wr(n,e,r,t)}var Ur="_reactListening"+Math.random().toString(36).slice(2);function Hr(e){if(!e[Ur]){e[Ur]=!0,o.forEach(function(t){"selectionchange"!==t&&(Ir.has(t)||$r(t,!1,e),$r(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Ur]||(t[Ur]=!0,$r("selectionchange",!1,t))}}function Wr(e,t,n,r){switch(Gt(t)){case 1:var a=Vt;break;case 4:a=Kt;break;default:a=Qt}n=a.bind(null,t,n,e),a=void 0,!Re||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Br(e,t,n,r,a){var i=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var l=r.stateNode.containerInfo;if(l===a||8===l.nodeType&&l.parentNode===a)break;if(4===o)for(o=r.return;null!==o;){var s=o.tag;if((3===s||4===s)&&((s=o.stateNode.containerInfo)===a||8===s.nodeType&&s.parentNode===a))return;o=o.return}for(;null!==l;){if(null===(o=ba(l)))return;if(5===(s=o.tag)||6===s){r=i=o;continue e}l=l.parentNode}}r=r.return}Ne(function(){var r=i,a=we(n),o=[];e:{var l=Tr.get(e);if(void 0!==l){var s=cn,u=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":s=jn;break;case"focusin":u="focus",s=gn;break;case"focusout":u="blur",s=gn;break;case"beforeblur":case"afterblur":s=gn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=hn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=mn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=zn;break;case _r:case jr:case Pr:s=xn;break;case zr:s=Tn;break;case"scroll":s=fn;break;case"wheel":s=On;break;case"copy":case"cut":case"paste":s=vn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=Pn}var c=0!==(4&t),d=!c&&"scroll"===e,f=c?null!==l?l+"Capture":null:l;c=[];for(var p,h=r;null!==h;){var m=(p=h).stateNode;if(5===p.tag&&null!==m&&(p=m,null!==f&&(null!=(m=Oe(h,f))&&c.push(Vr(h,m,p)))),d)break;h=h.return}0<c.length&&(l=new s(l,u,null,n,a),o.push({event:l,listeners:c}))}}if(0===(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===ye||!(u=n.relatedTarget||n.fromElement)||!ba(u)&&!u[ha])&&(s||l)&&(l=a.window===a?a:(l=a.ownerDocument)?l.defaultView||l.parentWindow:window,s?(s=r,null!==(u=(u=n.relatedTarget||n.toElement)?ba(u):null)&&(u!==(d=He(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(s=null,u=r),s!==u)){if(c=hn,m="onMouseLeave",f="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(c=Pn,m="onPointerLeave",f="onPointerEnter",h="pointer"),d=null==s?l:ya(s),p=null==u?l:ya(u),(l=new c(m,h+"leave",s,n,a)).target=d,l.relatedTarget=p,m=null,ba(a)===r&&((c=new c(f,h+"enter",u,n,a)).target=p,c.relatedTarget=d,m=c),d=m,s&&u)e:{for(f=u,h=0,p=c=s;p;p=Qr(p))h++;for(p=0,m=f;m;m=Qr(m))p++;for(;0<h-p;)c=Qr(c),h--;for(;0<p-h;)f=Qr(f),p--;for(;h--;){if(c===f||null!==f&&c===f.alternate)break e;c=Qr(c),f=Qr(f)}c=null}else c=null;null!==s&&Yr(o,l,s,c,!1),null!==u&&null!==d&&Yr(o,d,u,c,!0)}if("select"===(s=(l=r?ya(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===s&&"file"===l.type)var g=Gn;else if(Bn(l))if(Xn)g=or;else{g=ar;var x=rr}else(s=l.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(g=ir);switch(g&&(g=g(e,r))?Vn(o,g,n,a):(x&&x(e,l,r),"focusout"===e&&(x=l._wrapperState)&&x.controlled&&"number"===l.type&&ee(l,"number",l.value)),x=r?ya(r):window,e){case"focusin":(Bn(x)||"true"===x.contentEditable)&&(gr=x,xr=r,br=null);break;case"focusout":br=xr=gr=null;break;case"mousedown":vr=!0;break;case"contextmenu":case"mouseup":case"dragend":vr=!1,yr(o,n,a);break;case"selectionchange":if(mr)break;case"keydown":case"keyup":yr(o,n,a)}var b;if(Ln)e:{switch(e){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Hn?$n(e,n)&&(v="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(v="onCompositionStart");v&&(Dn&&"ko"!==n.locale&&(Hn||"onCompositionStart"!==v?"onCompositionEnd"===v&&Hn&&(b=en()):(Zt="value"in(Xt=a)?Xt.value:Xt.textContent,Hn=!0)),0<(x=Kr(r,v)).length&&(v=new yn(v,e,null,n,a),o.push({event:v,listeners:x}),b?v.data=b:null!==(b=Un(n))&&(v.data=b))),(b=In?function(e,t){switch(e){case"compositionend":return Un(t);case"keypress":return 32!==t.which?null:(Fn=!0,Mn);case"textInput":return(e=t.data)===Mn&&Fn?null:e;default:return null}}(e,n):function(e,t){if(Hn)return"compositionend"===e||!Ln&&$n(e,t)?(e=en(),Jt=Zt=Xt=null,Hn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Dn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Kr(r,"onBeforeInput")).length&&(a=new yn("onBeforeInput","beforeinput",null,n,a),o.push({event:a,listeners:r}),a.data=b))}Mr(o,t)})}function Vr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Kr(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,i=a.stateNode;5===a.tag&&null!==i&&(a=i,null!=(i=Oe(e,n))&&r.unshift(Vr(e,i,a)),null!=(i=Oe(e,t))&&r.push(Vr(e,i,a))),e=e.return}return r}function Qr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Yr(e,t,n,r,a){for(var i=t._reactName,o=[];null!==n&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(null!==s&&s===r)break;5===l.tag&&null!==u&&(l=u,a?null!=(s=Oe(n,i))&&o.unshift(Vr(n,s,l)):a||null!=(s=Oe(n,i))&&o.push(Vr(n,s,l))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var qr=/\r\n?/g,Gr=/\u0000|\uFFFD/g;function Xr(e){return("string"===typeof e?e:""+e).replace(qr,"\n").replace(Gr,"")}function Zr(e,t,n){if(t=Xr(t),Xr(e)!==t&&n)throw Error(i(425))}function Jr(){}var ea=null,ta=null;function na(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ra="function"===typeof setTimeout?setTimeout:void 0,aa="function"===typeof clearTimeout?clearTimeout:void 0,ia="function"===typeof Promise?Promise:void 0,oa="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof ia?function(e){return ia.resolve(null).then(e).catch(la)}:ra;function la(e){setTimeout(function(){throw e})}function sa(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&8===a.nodeType)if("/$"===(n=a.data)){if(0===r)return e.removeChild(a),void Ht(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=a}while(n);Ht(t)}function ua(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ca(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var da=Math.random().toString(36).slice(2),fa="__reactFiber$"+da,pa="__reactProps$"+da,ha="__reactContainer$"+da,ma="__reactEvents$"+da,ga="__reactListeners$"+da,xa="__reactHandles$"+da;function ba(e){var t=e[fa];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ha]||n[fa]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ca(e);null!==e;){if(n=e[fa])return n;e=ca(e)}return t}n=(e=n).parentNode}return null}function va(e){return!(e=e[fa]||e[ha])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function ya(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(i(33))}function wa(e){return e[pa]||null}var ka=[],Sa=-1;function Ca(e){return{current:e}}function Ea(e){0>Sa||(e.current=ka[Sa],ka[Sa]=null,Sa--)}function _a(e,t){Sa++,ka[Sa]=e.current,e.current=t}var ja={},Pa=Ca(ja),za=Ca(!1),Ta=ja;function Na(e,t){var n=e.type.contextTypes;if(!n)return ja;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a,i={};for(a in n)i[a]=t[a];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Oa(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Ra(){Ea(za),Ea(Pa)}function La(e,t,n){if(Pa.current!==ja)throw Error(i(168));_a(Pa,t),_a(za,n)}function Aa(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var a in r=r.getChildContext())if(!(a in t))throw Error(i(108,W(e)||"Unknown",a));return D({},n,r)}function Ia(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ja,Ta=Pa.current,_a(Pa,e),_a(za,za.current),!0}function Da(e,t,n){var r=e.stateNode;if(!r)throw Error(i(169));n?(e=Aa(e,t,Ta),r.__reactInternalMemoizedMergedChildContext=e,Ea(za),Ea(Pa),_a(Pa,e)):Ea(za),_a(za,n)}var Ma=null,Fa=!1,$a=!1;function Ua(e){null===Ma?Ma=[e]:Ma.push(e)}function Ha(){if(!$a&&null!==Ma){$a=!0;var e=0,t=vt;try{var n=Ma;for(vt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Ma=null,Fa=!1}catch(a){throw null!==Ma&&(Ma=Ma.slice(e+1)),Qe(Je,Ha),a}finally{vt=t,$a=!1}}return null}var Wa=[],Ba=0,Va=null,Ka=0,Qa=[],Ya=0,qa=null,Ga=1,Xa="";function Za(e,t){Wa[Ba++]=Ka,Wa[Ba++]=Va,Va=e,Ka=t}function Ja(e,t,n){Qa[Ya++]=Ga,Qa[Ya++]=Xa,Qa[Ya++]=qa,qa=e;var r=Ga;e=Xa;var a=32-ot(r)-1;r&=~(1<<a),n+=1;var i=32-ot(t)+a;if(30<i){var o=a-a%5;i=(r&(1<<o)-1).toString(32),r>>=o,a-=o,Ga=1<<32-ot(t)+a|n<<a|r,Xa=i+e}else Ga=1<<i|n<<a|r,Xa=e}function ei(e){null!==e.return&&(Za(e,1),Ja(e,1,0))}function ti(e){for(;e===Va;)Va=Wa[--Ba],Wa[Ba]=null,Ka=Wa[--Ba],Wa[Ba]=null;for(;e===qa;)qa=Qa[--Ya],Qa[Ya]=null,Xa=Qa[--Ya],Qa[Ya]=null,Ga=Qa[--Ya],Qa[Ya]=null}var ni=null,ri=null,ai=!1,ii=null;function oi(e,t){var n=Nu(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function li(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ni=e,ri=ua(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ni=e,ri=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==qa?{id:Ga,overflow:Xa}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Nu(18,null,null,0)).stateNode=t,n.return=e,e.child=n,ni=e,ri=null,!0);default:return!1}}function si(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function ui(e){if(ai){var t=ri;if(t){var n=t;if(!li(e,t)){if(si(e))throw Error(i(418));t=ua(n.nextSibling);var r=ni;t&&li(e,t)?oi(r,n):(e.flags=-4097&e.flags|2,ai=!1,ni=e)}}else{if(si(e))throw Error(i(418));e.flags=-4097&e.flags|2,ai=!1,ni=e}}}function ci(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ni=e}function di(e){if(e!==ni)return!1;if(!ai)return ci(e),ai=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!na(e.type,e.memoizedProps)),t&&(t=ri)){if(si(e))throw fi(),Error(i(418));for(;t;)oi(e,t),t=ua(t.nextSibling)}if(ci(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ri=ua(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ri=null}}else ri=ni?ua(e.stateNode.nextSibling):null;return!0}function fi(){for(var e=ri;e;)e=ua(e.nextSibling)}function pi(){ri=ni=null,ai=!1}function hi(e){null===ii?ii=[e]:ii.push(e)}var mi=y.ReactCurrentBatchConfig;function gi(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(i(309));var r=n.stateNode}if(!r)throw Error(i(147,e));var a=r,o=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===o?t.ref:(t=function(e){var t=a.refs;null===e?delete t[o]:t[o]=e},t._stringRef=o,t)}if("string"!==typeof e)throw Error(i(284));if(!n._owner)throw Error(i(290,e))}return e}function xi(e,t){throw e=Object.prototype.toString.call(t),Error(i(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function bi(e){return(0,e._init)(e._payload)}function vi(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function a(e,t){return(e=Ru(e,t)).index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Du(n,e.mode,r)).return=e,t):((t=a(t,n)).return=e,t)}function u(e,t,n,r){var i=n.type;return i===S?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===i||"object"===typeof i&&null!==i&&i.$$typeof===O&&bi(i)===t.type)?((r=a(t,n.props)).ref=gi(e,t,n),r.return=e,r):((r=Lu(n.type,n.key,n.props,null,e.mode,r)).ref=gi(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Mu(n,e.mode,r)).return=e,t):((t=a(t,n.children||[])).return=e,t)}function d(e,t,n,r,i){return null===t||7!==t.tag?((t=Au(n,e.mode,r,i)).return=e,t):((t=a(t,n)).return=e,t)}function f(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Du(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(n=Lu(t.type,t.key,t.props,null,e.mode,n)).ref=gi(e,null,t),n.return=e,n;case k:return(t=Mu(t,e.mode,n)).return=e,t;case O:return f(e,(0,t._init)(t._payload),n)}if(te(t)||A(t))return(t=Au(t,e.mode,n,null)).return=e,t;xi(e,t)}return null}function p(e,t,n,r){var a=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==a?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return n.key===a?u(e,t,n,r):null;case k:return n.key===a?c(e,t,n,r):null;case O:return p(e,t,(a=n._init)(n._payload),r)}if(te(n)||A(n))return null!==a?null:d(e,t,n,r,null);xi(e,n)}return null}function h(e,t,n,r,a){if("string"===typeof r&&""!==r||"number"===typeof r)return s(t,e=e.get(n)||null,""+r,a);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return u(t,e=e.get(null===r.key?n:r.key)||null,r,a);case k:return c(t,e=e.get(null===r.key?n:r.key)||null,r,a);case O:return h(e,t,n,(0,r._init)(r._payload),a)}if(te(r)||A(r))return d(t,e=e.get(n)||null,r,a,null);xi(t,r)}return null}function m(a,i,l,s){for(var u=null,c=null,d=i,m=i=0,g=null;null!==d&&m<l.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var x=p(a,d,l[m],s);if(null===x){null===d&&(d=g);break}e&&d&&null===x.alternate&&t(a,d),i=o(x,i,m),null===c?u=x:c.sibling=x,c=x,d=g}if(m===l.length)return n(a,d),ai&&Za(a,m),u;if(null===d){for(;m<l.length;m++)null!==(d=f(a,l[m],s))&&(i=o(d,i,m),null===c?u=d:c.sibling=d,c=d);return ai&&Za(a,m),u}for(d=r(a,d);m<l.length;m++)null!==(g=h(d,a,m,l[m],s))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),i=o(g,i,m),null===c?u=g:c.sibling=g,c=g);return e&&d.forEach(function(e){return t(a,e)}),ai&&Za(a,m),u}function g(a,l,s,u){var c=A(s);if("function"!==typeof c)throw Error(i(150));if(null==(s=c.call(s)))throw Error(i(151));for(var d=c=null,m=l,g=l=0,x=null,b=s.next();null!==m&&!b.done;g++,b=s.next()){m.index>g?(x=m,m=null):x=m.sibling;var v=p(a,m,b.value,u);if(null===v){null===m&&(m=x);break}e&&m&&null===v.alternate&&t(a,m),l=o(v,l,g),null===d?c=v:d.sibling=v,d=v,m=x}if(b.done)return n(a,m),ai&&Za(a,g),c;if(null===m){for(;!b.done;g++,b=s.next())null!==(b=f(a,b.value,u))&&(l=o(b,l,g),null===d?c=b:d.sibling=b,d=b);return ai&&Za(a,g),c}for(m=r(a,m);!b.done;g++,b=s.next())null!==(b=h(m,a,g,b.value,u))&&(e&&null!==b.alternate&&m.delete(null===b.key?g:b.key),l=o(b,l,g),null===d?c=b:d.sibling=b,d=b);return e&&m.forEach(function(e){return t(a,e)}),ai&&Za(a,g),c}return function e(r,i,o,s){if("object"===typeof o&&null!==o&&o.type===S&&null===o.key&&(o=o.props.children),"object"===typeof o&&null!==o){switch(o.$$typeof){case w:e:{for(var u=o.key,c=i;null!==c;){if(c.key===u){if((u=o.type)===S){if(7===c.tag){n(r,c.sibling),(i=a(c,o.props.children)).return=r,r=i;break e}}else if(c.elementType===u||"object"===typeof u&&null!==u&&u.$$typeof===O&&bi(u)===c.type){n(r,c.sibling),(i=a(c,o.props)).ref=gi(r,c,o),i.return=r,r=i;break e}n(r,c);break}t(r,c),c=c.sibling}o.type===S?((i=Au(o.props.children,r.mode,s,o.key)).return=r,r=i):((s=Lu(o.type,o.key,o.props,null,r.mode,s)).ref=gi(r,i,o),s.return=r,r=s)}return l(r);case k:e:{for(c=o.key;null!==i;){if(i.key===c){if(4===i.tag&&i.stateNode.containerInfo===o.containerInfo&&i.stateNode.implementation===o.implementation){n(r,i.sibling),(i=a(i,o.children||[])).return=r,r=i;break e}n(r,i);break}t(r,i),i=i.sibling}(i=Mu(o,r.mode,s)).return=r,r=i}return l(r);case O:return e(r,i,(c=o._init)(o._payload),s)}if(te(o))return m(r,i,o,s);if(A(o))return g(r,i,o,s);xi(r,o)}return"string"===typeof o&&""!==o||"number"===typeof o?(o=""+o,null!==i&&6===i.tag?(n(r,i.sibling),(i=a(i,o)).return=r,r=i):(n(r,i),(i=Du(o,r.mode,s)).return=r,r=i),l(r)):n(r,i)}}var yi=vi(!0),wi=vi(!1),ki=Ca(null),Si=null,Ci=null,Ei=null;function _i(){Ei=Ci=Si=null}function ji(e){var t=ki.current;Ea(ki),e._currentValue=t}function Pi(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function zi(e,t){Si=e,Ei=Ci=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(vl=!0),e.firstContext=null)}function Ti(e){var t=e._currentValue;if(Ei!==e)if(e={context:e,memoizedValue:t,next:null},null===Ci){if(null===Si)throw Error(i(308));Ci=e,Si.dependencies={lanes:0,firstContext:e}}else Ci=Ci.next=e;return t}var Ni=null;function Oi(e){null===Ni?Ni=[e]:Ni.push(e)}function Ri(e,t,n,r){var a=t.interleaved;return null===a?(n.next=n,Oi(t)):(n.next=a.next,a.next=n),t.interleaved=n,Li(e,r)}function Li(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Ai=!1;function Ii(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Di(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Mi(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Fi(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&Ps)){var a=r.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Li(e,n)}return null===(a=r.interleaved)?(t.next=t,Oi(r)):(t.next=a.next,a.next=t),r.interleaved=t,Li(e,n)}function $i(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,bt(e,n)}}function Ui(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var a=null,i=null;if(null!==(n=n.firstBaseUpdate)){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===i?a=i=o:i=i.next=o,n=n.next}while(null!==n);null===i?a=i=t:i=i.next=t}else a=i=t;return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Hi(e,t,n,r){var a=e.updateQueue;Ai=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,l=a.shared.pending;if(null!==l){a.shared.pending=null;var s=l,u=s.next;s.next=null,null===o?i=u:o.next=u,o=s;var c=e.alternate;null!==c&&((l=(c=c.updateQueue).lastBaseUpdate)!==o&&(null===l?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(null!==i){var d=a.baseState;for(o=0,c=u=s=null,l=i;;){var f=l.lane,p=l.eventTime;if((r&f)===f){null!==c&&(c=c.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var h=e,m=l;switch(f=t,p=n,m.tag){case 1:if("function"===typeof(h=m.payload)){d=h.call(p,d,f);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(f="function"===typeof(h=m.payload)?h.call(p,d,f):h)||void 0===f)break e;d=D({},d,f);break e;case 2:Ai=!0}}null!==l.callback&&0!==l.lane&&(e.flags|=64,null===(f=a.effects)?a.effects=[l]:f.push(l))}else p={eventTime:p,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===c?(u=c=p,s=d):c=c.next=p,o|=f;if(null===(l=l.next)){if(null===(l=a.shared.pending))break;l=(f=l).next,f.next=null,a.lastBaseUpdate=f,a.shared.pending=null}}if(null===c&&(s=d),a.baseState=s,a.firstBaseUpdate=u,a.lastBaseUpdate=c,null!==(t=a.shared.interleaved)){a=t;do{o|=a.lane,a=a.next}while(a!==t)}else null===i&&(a.shared.lanes=0);Is|=o,e.lanes=o,e.memoizedState=d}}function Wi(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(null!==a){if(r.callback=null,r=n,"function"!==typeof a)throw Error(i(191,a));a.call(r)}}}var Bi={},Vi=Ca(Bi),Ki=Ca(Bi),Qi=Ca(Bi);function Yi(e){if(e===Bi)throw Error(i(174));return e}function qi(e,t){switch(_a(Qi,t),_a(Ki,e),_a(Vi,Bi),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:se(null,"");break;default:t=se(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ea(Vi),_a(Vi,t)}function Gi(){Ea(Vi),Ea(Ki),Ea(Qi)}function Xi(e){Yi(Qi.current);var t=Yi(Vi.current),n=se(t,e.type);t!==n&&(_a(Ki,e),_a(Vi,n))}function Zi(e){Ki.current===e&&(Ea(Vi),Ea(Ki))}var Ji=Ca(0);function eo(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var to=[];function no(){for(var e=0;e<to.length;e++)to[e]._workInProgressVersionPrimary=null;to.length=0}var ro=y.ReactCurrentDispatcher,ao=y.ReactCurrentBatchConfig,io=0,oo=null,lo=null,so=null,uo=!1,co=!1,fo=0,po=0;function ho(){throw Error(i(321))}function mo(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lr(e[n],t[n]))return!1;return!0}function go(e,t,n,r,a,o){if(io=o,oo=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ro.current=null===e||null===e.memoizedState?Jo:el,e=n(r,a),co){o=0;do{if(co=!1,fo=0,25<=o)throw Error(i(301));o+=1,so=lo=null,t.updateQueue=null,ro.current=tl,e=n(r,a)}while(co)}if(ro.current=Zo,t=null!==lo&&null!==lo.next,io=0,so=lo=oo=null,uo=!1,t)throw Error(i(300));return e}function xo(){var e=0!==fo;return fo=0,e}function bo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===so?oo.memoizedState=so=e:so=so.next=e,so}function vo(){if(null===lo){var e=oo.alternate;e=null!==e?e.memoizedState:null}else e=lo.next;var t=null===so?oo.memoizedState:so.next;if(null!==t)so=t,lo=e;else{if(null===e)throw Error(i(310));e={memoizedState:(lo=e).memoizedState,baseState:lo.baseState,baseQueue:lo.baseQueue,queue:lo.queue,next:null},null===so?oo.memoizedState=so=e:so=so.next=e}return so}function yo(e,t){return"function"===typeof t?t(e):t}function wo(e){var t=vo(),n=t.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=e;var r=lo,a=r.baseQueue,o=n.pending;if(null!==o){if(null!==a){var l=a.next;a.next=o.next,o.next=l}r.baseQueue=a=o,n.pending=null}if(null!==a){o=a.next,r=r.baseState;var s=l=null,u=null,c=o;do{var d=c.lane;if((io&d)===d)null!==u&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};null===u?(s=u=f,l=r):u=u.next=f,oo.lanes|=d,Is|=d}c=c.next}while(null!==c&&c!==o);null===u?l=r:u.next=s,lr(r,t.memoizedState)||(vl=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(null!==(e=n.interleaved)){a=e;do{o=a.lane,oo.lanes|=o,Is|=o,a=a.next}while(a!==e)}else null===a&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ko(e){var t=vo(),n=t.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(null!==a){n.pending=null;var l=a=a.next;do{o=e(o,l.action),l=l.next}while(l!==a);lr(o,t.memoizedState)||(vl=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function So(){}function Co(e,t){var n=oo,r=vo(),a=t(),o=!lr(r.memoizedState,a);if(o&&(r.memoizedState=a,vl=!0),r=r.queue,Io(jo.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||null!==so&&1&so.memoizedState.tag){if(n.flags|=2048,No(9,_o.bind(null,n,r,a,t),void 0,null),null===zs)throw Error(i(349));0!==(30&io)||Eo(n,t,a)}return a}function Eo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=oo.updateQueue)?(t={lastEffect:null,stores:null},oo.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function _o(e,t,n,r){t.value=n,t.getSnapshot=r,Po(t)&&zo(e)}function jo(e,t,n){return n(function(){Po(t)&&zo(e)})}function Po(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lr(e,n)}catch(r){return!0}}function zo(e){var t=Li(e,1);null!==t&&nu(t,e,1,-1)}function To(e){var t=bo();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yo,lastRenderedState:e},t.queue=e,e=e.dispatch=Yo.bind(null,oo,e),[t.memoizedState,e]}function No(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=oo.updateQueue)?(t={lastEffect:null,stores:null},oo.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Oo(){return vo().memoizedState}function Ro(e,t,n,r){var a=bo();oo.flags|=e,a.memoizedState=No(1|t,n,void 0,void 0===r?null:r)}function Lo(e,t,n,r){var a=vo();r=void 0===r?null:r;var i=void 0;if(null!==lo){var o=lo.memoizedState;if(i=o.destroy,null!==r&&mo(r,o.deps))return void(a.memoizedState=No(t,n,i,r))}oo.flags|=e,a.memoizedState=No(1|t,n,i,r)}function Ao(e,t){return Ro(8390656,8,e,t)}function Io(e,t){return Lo(2048,8,e,t)}function Do(e,t){return Lo(4,2,e,t)}function Mo(e,t){return Lo(4,4,e,t)}function Fo(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function $o(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Lo(4,4,Fo.bind(null,t,e),n)}function Uo(){}function Ho(e,t){var n=vo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&mo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Wo(e,t){var n=vo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&mo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Bo(e,t,n){return 0===(21&io)?(e.baseState&&(e.baseState=!1,vl=!0),e.memoizedState=n):(lr(n,t)||(n=mt(),oo.lanes|=n,Is|=n,e.baseState=!0),t)}function Vo(e,t){var n=vt;vt=0!==n&&4>n?n:4,e(!0);var r=ao.transition;ao.transition={};try{e(!1),t()}finally{vt=n,ao.transition=r}}function Ko(){return vo().memoizedState}function Qo(e,t,n){var r=tu(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},qo(e))Go(t,n);else if(null!==(n=Ri(e,t,n,r))){nu(n,e,r,eu()),Xo(n,t,r)}}function Yo(e,t,n){var r=tu(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(qo(e))Go(t,a);else{var i=e.alternate;if(0===e.lanes&&(null===i||0===i.lanes)&&null!==(i=t.lastRenderedReducer))try{var o=t.lastRenderedState,l=i(o,n);if(a.hasEagerState=!0,a.eagerState=l,lr(l,o)){var s=t.interleaved;return null===s?(a.next=a,Oi(t)):(a.next=s.next,s.next=a),void(t.interleaved=a)}}catch(u){}null!==(n=Ri(e,t,a,r))&&(nu(n,e,r,a=eu()),Xo(n,t,r))}}function qo(e){var t=e.alternate;return e===oo||null!==t&&t===oo}function Go(e,t){co=uo=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Xo(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,bt(e,n)}}var Zo={readContext:Ti,useCallback:ho,useContext:ho,useEffect:ho,useImperativeHandle:ho,useInsertionEffect:ho,useLayoutEffect:ho,useMemo:ho,useReducer:ho,useRef:ho,useState:ho,useDebugValue:ho,useDeferredValue:ho,useTransition:ho,useMutableSource:ho,useSyncExternalStore:ho,useId:ho,unstable_isNewReconciler:!1},Jo={readContext:Ti,useCallback:function(e,t){return bo().memoizedState=[e,void 0===t?null:t],e},useContext:Ti,useEffect:Ao,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ro(4194308,4,Fo.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ro(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ro(4,2,e,t)},useMemo:function(e,t){var n=bo();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=bo();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Qo.bind(null,oo,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},bo().memoizedState=e},useState:To,useDebugValue:Uo,useDeferredValue:function(e){return bo().memoizedState=e},useTransition:function(){var e=To(!1),t=e[0];return e=Vo.bind(null,e[1]),bo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oo,a=bo();if(ai){if(void 0===n)throw Error(i(407));n=n()}else{if(n=t(),null===zs)throw Error(i(349));0!==(30&io)||Eo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Ao(jo.bind(null,r,o,e),[e]),r.flags|=2048,No(9,_o.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=bo(),t=zs.identifierPrefix;if(ai){var n=Xa;t=":"+t+"R"+(n=(Ga&~(1<<32-ot(Ga)-1)).toString(32)+n),0<(n=fo++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=po++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},el={readContext:Ti,useCallback:Ho,useContext:Ti,useEffect:Io,useImperativeHandle:$o,useInsertionEffect:Do,useLayoutEffect:Mo,useMemo:Wo,useReducer:wo,useRef:Oo,useState:function(){return wo(yo)},useDebugValue:Uo,useDeferredValue:function(e){return Bo(vo(),lo.memoizedState,e)},useTransition:function(){return[wo(yo)[0],vo().memoizedState]},useMutableSource:So,useSyncExternalStore:Co,useId:Ko,unstable_isNewReconciler:!1},tl={readContext:Ti,useCallback:Ho,useContext:Ti,useEffect:Io,useImperativeHandle:$o,useInsertionEffect:Do,useLayoutEffect:Mo,useMemo:Wo,useReducer:ko,useRef:Oo,useState:function(){return ko(yo)},useDebugValue:Uo,useDeferredValue:function(e){var t=vo();return null===lo?t.memoizedState=e:Bo(t,lo.memoizedState,e)},useTransition:function(){return[ko(yo)[0],vo().memoizedState]},useMutableSource:So,useSyncExternalStore:Co,useId:Ko,unstable_isNewReconciler:!1};function nl(e,t){if(e&&e.defaultProps){for(var n in t=D({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rl(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:D({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var al={isMounted:function(e){return!!(e=e._reactInternals)&&He(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=eu(),a=tu(e),i=Mi(r,a);i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=Fi(e,i,a))&&(nu(t,e,a,r),$i(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=eu(),a=tu(e),i=Mi(r,a);i.tag=1,i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=Fi(e,i,a))&&(nu(t,e,a,r),$i(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=eu(),r=tu(e),a=Mi(n,r);a.tag=2,void 0!==t&&null!==t&&(a.callback=t),null!==(t=Fi(e,a,r))&&(nu(t,e,r,n),$i(t,e,r))}};function il(e,t,n,r,a,i,o){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,i,o):!t.prototype||!t.prototype.isPureReactComponent||(!sr(n,r)||!sr(a,i))}function ol(e,t,n){var r=!1,a=ja,i=t.contextType;return"object"===typeof i&&null!==i?i=Ti(i):(a=Oa(t)?Ta:Pa.current,i=(r=null!==(r=t.contextTypes)&&void 0!==r)?Na(e,a):ja),t=new t(n,i),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=al,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function ll(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&al.enqueueReplaceState(t,t.state,null)}function sl(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Ii(e);var i=t.contextType;"object"===typeof i&&null!==i?a.context=Ti(i):(i=Oa(t)?Ta:Pa.current,a.context=Na(e,i)),a.state=e.memoizedState,"function"===typeof(i=t.getDerivedStateFromProps)&&(rl(e,t,i,n),a.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof a.getSnapshotBeforeUpdate||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||(t=a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),t!==a.state&&al.enqueueReplaceState(a,a.state,null),Hi(e,n,a,r),a.state=e.memoizedState),"function"===typeof a.componentDidMount&&(e.flags|=4194308)}function ul(e,t){try{var n="",r=t;do{n+=U(r),r=r.return}while(r);var a=n}catch(i){a="\nError generating stack: "+i.message+"\n"+i.stack}return{value:e,source:t,stack:a,digest:null}}function cl(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function dl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var fl="function"===typeof WeakMap?WeakMap:Map;function pl(e,t,n){(n=Mi(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Bs||(Bs=!0,Vs=r),dl(0,t)},n}function hl(e,t,n){(n=Mi(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){dl(0,t)}}var i=e.stateNode;return null!==i&&"function"===typeof i.componentDidCatch&&(n.callback=function(){dl(0,t),"function"!==typeof r&&(null===Ks?Ks=new Set([this]):Ks.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function ml(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new fl;var a=new Set;r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=Eu.bind(null,e,t,n),t.then(e,e))}function gl(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function xl(e,t,n,r,a){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Mi(-1,1)).tag=2,Fi(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var bl=y.ReactCurrentOwner,vl=!1;function yl(e,t,n,r){t.child=null===e?wi(t,null,n,r):yi(t,e.child,n,r)}function wl(e,t,n,r,a){n=n.render;var i=t.ref;return zi(t,a),r=go(e,t,n,r,i,a),n=xo(),null===e||vl?(ai&&n&&ei(t),t.flags|=1,yl(e,t,r,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Bl(e,t,a))}function kl(e,t,n,r,a){if(null===e){var i=n.type;return"function"!==typeof i||Ou(i)||void 0!==i.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Lu(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,Sl(e,t,i,r,a))}if(i=e.child,0===(e.lanes&a)){var o=i.memoizedProps;if((n=null!==(n=n.compare)?n:sr)(o,r)&&e.ref===t.ref)return Bl(e,t,a)}return t.flags|=1,(e=Ru(i,r)).ref=t.ref,e.return=t,t.child=e}function Sl(e,t,n,r,a){if(null!==e){var i=e.memoizedProps;if(sr(i,r)&&e.ref===t.ref){if(vl=!1,t.pendingProps=r=i,0===(e.lanes&a))return t.lanes=e.lanes,Bl(e,t,a);0!==(131072&e.flags)&&(vl=!0)}}return _l(e,t,n,r,a)}function Cl(e,t,n){var r=t.pendingProps,a=r.children,i=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},_a(Rs,Os),Os|=n;else{if(0===(1073741824&n))return e=null!==i?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,_a(Rs,Os),Os|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==i?i.baseLanes:n,_a(Rs,Os),Os|=r}else null!==i?(r=i.baseLanes|n,t.memoizedState=null):r=n,_a(Rs,Os),Os|=r;return yl(e,t,a,n),t.child}function El(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function _l(e,t,n,r,a){var i=Oa(n)?Ta:Pa.current;return i=Na(t,i),zi(t,a),n=go(e,t,n,r,i,a),r=xo(),null===e||vl?(ai&&r&&ei(t),t.flags|=1,yl(e,t,n,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Bl(e,t,a))}function jl(e,t,n,r,a){if(Oa(n)){var i=!0;Ia(t)}else i=!1;if(zi(t,a),null===t.stateNode)Wl(e,t),ol(t,n,r),sl(t,n,r,a),r=!0;else if(null===e){var o=t.stateNode,l=t.memoizedProps;o.props=l;var s=o.context,u=n.contextType;"object"===typeof u&&null!==u?u=Ti(u):u=Na(t,u=Oa(n)?Ta:Pa.current);var c=n.getDerivedStateFromProps,d="function"===typeof c||"function"===typeof o.getSnapshotBeforeUpdate;d||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(l!==r||s!==u)&&ll(t,o,r,u),Ai=!1;var f=t.memoizedState;o.state=f,Hi(t,r,o,a),s=t.memoizedState,l!==r||f!==s||za.current||Ai?("function"===typeof c&&(rl(t,n,c,r),s=t.memoizedState),(l=Ai||il(t,n,l,r,f,s,u))?(d||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||("function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"===typeof o.componentDidMount&&(t.flags|=4194308)):("function"===typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=u,r=l):("function"===typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Di(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:nl(t.type,l),o.props=u,d=t.pendingProps,f=o.context,"object"===typeof(s=n.contextType)&&null!==s?s=Ti(s):s=Na(t,s=Oa(n)?Ta:Pa.current);var p=n.getDerivedStateFromProps;(c="function"===typeof p||"function"===typeof o.getSnapshotBeforeUpdate)||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(l!==d||f!==s)&&ll(t,o,r,s),Ai=!1,f=t.memoizedState,o.state=f,Hi(t,r,o,a);var h=t.memoizedState;l!==d||f!==h||za.current||Ai?("function"===typeof p&&(rl(t,n,p,r),h=t.memoizedState),(u=Ai||il(t,n,u,r,f,h,s)||!1)?(c||"function"!==typeof o.UNSAFE_componentWillUpdate&&"function"!==typeof o.componentWillUpdate||("function"===typeof o.componentWillUpdate&&o.componentWillUpdate(r,h,s),"function"===typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,h,s)),"function"===typeof o.componentDidUpdate&&(t.flags|=4),"function"===typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof o.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),o.props=r,o.state=h,o.context=s,r=u):("function"!==typeof o.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Pl(e,t,n,r,i,a)}function Pl(e,t,n,r,a,i){El(e,t);var o=0!==(128&t.flags);if(!r&&!o)return a&&Da(t,n,!1),Bl(e,t,i);r=t.stateNode,bl.current=t;var l=o&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&o?(t.child=yi(t,e.child,null,i),t.child=yi(t,null,l,i)):yl(e,t,l,i),t.memoizedState=r.state,a&&Da(t,n,!0),t.child}function zl(e){var t=e.stateNode;t.pendingContext?La(0,t.pendingContext,t.pendingContext!==t.context):t.context&&La(0,t.context,!1),qi(e,t.containerInfo)}function Tl(e,t,n,r,a){return pi(),hi(a),t.flags|=256,yl(e,t,n,r),t.child}var Nl,Ol,Rl,Ll,Al={dehydrated:null,treeContext:null,retryLane:0};function Il(e){return{baseLanes:e,cachePool:null,transitions:null}}function Dl(e,t,n){var r,a=t.pendingProps,o=Ji.current,l=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&o)),r?(l=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(o|=1),_a(Ji,1&o),null===e)return ui(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=a.children,e=a.fallback,l?(a=t.mode,l=t.child,s={mode:"hidden",children:s},0===(1&a)&&null!==l?(l.childLanes=0,l.pendingProps=s):l=Iu(s,a,0,null),e=Au(e,a,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Il(n),t.memoizedState=Al,e):Ml(t,s));if(null!==(o=e.memoizedState)&&null!==(r=o.dehydrated))return function(e,t,n,r,a,o,l){if(n)return 256&t.flags?(t.flags&=-257,Fl(e,t,l,r=cl(Error(i(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(o=r.fallback,a=t.mode,r=Iu({mode:"visible",children:r.children},a,0,null),(o=Au(o,a,l,null)).flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,0!==(1&t.mode)&&yi(t,e.child,null,l),t.child.memoizedState=Il(l),t.memoizedState=Al,o);if(0===(1&t.mode))return Fl(e,t,l,null);if("$!"===a.data){if(r=a.nextSibling&&a.nextSibling.dataset)var s=r.dgst;return r=s,Fl(e,t,l,r=cl(o=Error(i(419)),r,void 0))}if(s=0!==(l&e.childLanes),vl||s){if(null!==(r=zs)){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}0!==(a=0!==(a&(r.suspendedLanes|l))?0:a)&&a!==o.retryLane&&(o.retryLane=a,Li(e,a),nu(r,e,a,-1))}return mu(),Fl(e,t,l,r=cl(Error(i(421))))}return"$?"===a.data?(t.flags|=128,t.child=e.child,t=ju.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,ri=ua(a.nextSibling),ni=t,ai=!0,ii=null,null!==e&&(Qa[Ya++]=Ga,Qa[Ya++]=Xa,Qa[Ya++]=qa,Ga=e.id,Xa=e.overflow,qa=t),t=Ml(t,r.children),t.flags|=4096,t)}(e,t,s,a,r,o,n);if(l){l=a.fallback,s=t.mode,r=(o=e.child).sibling;var u={mode:"hidden",children:a.children};return 0===(1&s)&&t.child!==o?((a=t.child).childLanes=0,a.pendingProps=u,t.deletions=null):(a=Ru(o,u)).subtreeFlags=14680064&o.subtreeFlags,null!==r?l=Ru(r,l):(l=Au(l,s,n,null)).flags|=2,l.return=t,a.return=t,a.sibling=l,t.child=a,a=l,l=t.child,s=null===(s=e.child.memoizedState)?Il(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Al,a}return e=(l=e.child).sibling,a=Ru(l,{mode:"visible",children:a.children}),0===(1&t.mode)&&(a.lanes=n),a.return=t,a.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function Ml(e,t){return(t=Iu({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Fl(e,t,n,r){return null!==r&&hi(r),yi(t,e.child,null,n),(e=Ml(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function $l(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Pi(e.return,t,n)}function Ul(e,t,n,r,a){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=a)}function Hl(e,t,n){var r=t.pendingProps,a=r.revealOrder,i=r.tail;if(yl(e,t,r.children,n),0!==(2&(r=Ji.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&$l(e,n,t);else if(19===e.tag)$l(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(_a(Ji,r),0===(1&t.mode))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;null!==n;)null!==(e=n.alternate)&&null===eo(e)&&(a=n),n=n.sibling;null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Ul(t,!1,a,n,i);break;case"backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===eo(e)){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Ul(t,!0,n,null,i);break;case"together":Ul(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Wl(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Bl(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Is|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(i(153));if(null!==t.child){for(n=Ru(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Ru(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Vl(e,t){if(!ai)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Kl(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=14680064&a.subtreeFlags,r|=14680064&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ql(e,t,n){var r=t.pendingProps;switch(ti(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kl(t),null;case 1:case 17:return Oa(t.type)&&Ra(),Kl(t),null;case 3:return r=t.stateNode,Gi(),Ea(za),Ea(Pa),no(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(di(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==ii&&(ou(ii),ii=null))),Ol(e,t),Kl(t),null;case 5:Zi(t);var a=Yi(Qi.current);if(n=t.type,null!==e&&null!=t.stateNode)Rl(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(i(166));return Kl(t),null}if(e=Yi(Vi.current),di(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[fa]=t,r[pa]=o,e=0!==(1&t.mode),n){case"dialog":Fr("cancel",r),Fr("close",r);break;case"iframe":case"object":case"embed":Fr("load",r);break;case"video":case"audio":for(a=0;a<Ar.length;a++)Fr(Ar[a],r);break;case"source":Fr("error",r);break;case"img":case"image":case"link":Fr("error",r),Fr("load",r);break;case"details":Fr("toggle",r);break;case"input":G(r,o),Fr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Fr("invalid",r);break;case"textarea":ae(r,o),Fr("invalid",r)}for(var s in be(n,o),a=null,o)if(o.hasOwnProperty(s)){var u=o[s];"children"===s?"string"===typeof u?r.textContent!==u&&(!0!==o.suppressHydrationWarning&&Zr(r.textContent,u,e),a=["children",u]):"number"===typeof u&&r.textContent!==""+u&&(!0!==o.suppressHydrationWarning&&Zr(r.textContent,u,e),a=["children",""+u]):l.hasOwnProperty(s)&&null!=u&&"onScroll"===s&&Fr("scroll",r)}switch(n){case"input":K(r),J(r,o,!0);break;case"textarea":K(r),oe(r);break;case"select":case"option":break;default:"function"===typeof o.onClick&&(r.onclick=Jr)}r=a,t.updateQueue=r,null!==r&&(t.flags|=4)}else{s=9===a.nodeType?a:a.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=le(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),"select"===n&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[fa]=t,e[pa]=r,Nl(e,t,!1,!1),t.stateNode=e;e:{switch(s=ve(n,r),n){case"dialog":Fr("cancel",e),Fr("close",e),a=r;break;case"iframe":case"object":case"embed":Fr("load",e),a=r;break;case"video":case"audio":for(a=0;a<Ar.length;a++)Fr(Ar[a],e);a=r;break;case"source":Fr("error",e),a=r;break;case"img":case"image":case"link":Fr("error",e),Fr("load",e),a=r;break;case"details":Fr("toggle",e),a=r;break;case"input":G(e,r),a=q(e,r),Fr("invalid",e);break;case"option":default:a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=D({},r,{value:void 0}),Fr("invalid",e);break;case"textarea":ae(e,r),a=re(e,r),Fr("invalid",e)}for(o in be(n,a),u=a)if(u.hasOwnProperty(o)){var c=u[o];"style"===o?ge(e,c):"dangerouslySetInnerHTML"===o?null!=(c=c?c.__html:void 0)&&de(e,c):"children"===o?"string"===typeof c?("textarea"!==n||""!==c)&&fe(e,c):"number"===typeof c&&fe(e,""+c):"suppressContentEditableWarning"!==o&&"suppressHydrationWarning"!==o&&"autoFocus"!==o&&(l.hasOwnProperty(o)?null!=c&&"onScroll"===o&&Fr("scroll",e):null!=c&&v(e,o,c,s))}switch(n){case"input":K(e),J(e,r,!1);break;case"textarea":K(e),oe(e);break;case"option":null!=r.value&&e.setAttribute("value",""+B(r.value));break;case"select":e.multiple=!!r.multiple,null!=(o=r.value)?ne(e,!!r.multiple,o,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof a.onClick&&(e.onclick=Jr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Kl(t),null;case 6:if(e&&null!=t.stateNode)Ll(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(i(166));if(n=Yi(Qi.current),Yi(Vi.current),di(t)){if(r=t.stateNode,n=t.memoizedProps,r[fa]=t,(o=r.nodeValue!==n)&&null!==(e=ni))switch(e.tag){case 3:Zr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Zr(r.nodeValue,n,0!==(1&e.mode))}o&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[fa]=t,t.stateNode=r}return Kl(t),null;case 13:if(Ea(Ji),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ai&&null!==ri&&0!==(1&t.mode)&&0===(128&t.flags))fi(),pi(),t.flags|=98560,o=!1;else if(o=di(t),null!==r&&null!==r.dehydrated){if(null===e){if(!o)throw Error(i(318));if(!(o=null!==(o=t.memoizedState)?o.dehydrated:null))throw Error(i(317));o[fa]=t}else pi(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Kl(t),o=!1}else null!==ii&&(ou(ii),ii=null),o=!0;if(!o)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&Ji.current)?0===Ls&&(Ls=3):mu())),null!==t.updateQueue&&(t.flags|=4),Kl(t),null);case 4:return Gi(),Ol(e,t),null===e&&Hr(t.stateNode.containerInfo),Kl(t),null;case 10:return ji(t.type._context),Kl(t),null;case 19:if(Ea(Ji),null===(o=t.memoizedState))return Kl(t),null;if(r=0!==(128&t.flags),null===(s=o.rendering))if(r)Vl(o,!1);else{if(0!==Ls||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(s=eo(e))){for(t.flags|=128,Vl(o,!1),null!==(r=s.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(o=n).flags&=14680066,null===(s=o.alternate)?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return _a(Ji,1&Ji.current|2),t.child}e=e.sibling}null!==o.tail&&Xe()>Hs&&(t.flags|=128,r=!0,Vl(o,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=eo(s))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Vl(o,!0),null===o.tail&&"hidden"===o.tailMode&&!s.alternate&&!ai)return Kl(t),null}else 2*Xe()-o.renderingStartTime>Hs&&1073741824!==n&&(t.flags|=128,r=!0,Vl(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(null!==(n=o.last)?n.sibling=s:t.child=s,o.last=s)}return null!==o.tail?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Xe(),t.sibling=null,n=Ji.current,_a(Ji,r?1&n|2:1&n),t):(Kl(t),null);case 22:case 23:return du(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Os)&&(Kl(t),6&t.subtreeFlags&&(t.flags|=8192)):Kl(t),null;case 24:case 25:return null}throw Error(i(156,t.tag))}function Yl(e,t){switch(ti(t),t.tag){case 1:return Oa(t.type)&&Ra(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Gi(),Ea(za),Ea(Pa),no(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Zi(t),null;case 13:if(Ea(Ji),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(i(340));pi()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ea(Ji),null;case 4:return Gi(),null;case 10:return ji(t.type._context),null;case 22:case 23:return du(),null;default:return null}}Nl=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Ol=function(){},Rl=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,Yi(Vi.current);var i,o=null;switch(n){case"input":a=q(e,a),r=q(e,r),o=[];break;case"select":a=D({},a,{value:void 0}),r=D({},r,{value:void 0}),o=[];break;case"textarea":a=re(e,a),r=re(e,r),o=[];break;default:"function"!==typeof a.onClick&&"function"===typeof r.onClick&&(e.onclick=Jr)}for(c in be(n,r),n=null,a)if(!r.hasOwnProperty(c)&&a.hasOwnProperty(c)&&null!=a[c])if("style"===c){var s=a[c];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(l.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(s=null!=a?a[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(null!=u||null!=s))if("style"===c)if(s){for(i in s)!s.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in u)u.hasOwnProperty(i)&&s[i]!==u[i]&&(n||(n={}),n[i]=u[i])}else n||(o||(o=[]),o.push(c,n)),n=u;else"dangerouslySetInnerHTML"===c?(u=u?u.__html:void 0,s=s?s.__html:void 0,null!=u&&s!==u&&(o=o||[]).push(c,u)):"children"===c?"string"!==typeof u&&"number"!==typeof u||(o=o||[]).push(c,""+u):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(l.hasOwnProperty(c)?(null!=u&&"onScroll"===c&&Fr("scroll",e),o||s===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}},Ll=function(e,t,n,r){n!==r&&(t.flags|=4)};var ql=!1,Gl=!1,Xl="function"===typeof WeakSet?WeakSet:Set,Zl=null;function Jl(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){Cu(e,t,r)}else n.current=null}function es(e,t,n){try{n()}catch(r){Cu(e,t,r)}}var ts=!1;function ns(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,void 0!==i&&es(t,n,i)}a=a.next}while(a!==r)}}function rs(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function as(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function is(e){var t=e.alternate;null!==t&&(e.alternate=null,is(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[fa],delete t[pa],delete t[ma],delete t[ga],delete t[xa])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function os(e){return 5===e.tag||3===e.tag||4===e.tag}function ls(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||os(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ss(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Jr));else if(4!==r&&null!==(e=e.child))for(ss(e,t,n),e=e.sibling;null!==e;)ss(e,t,n),e=e.sibling}function us(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(us(e,t,n),e=e.sibling;null!==e;)us(e,t,n),e=e.sibling}var cs=null,ds=!1;function fs(e,t,n){for(n=n.child;null!==n;)ps(e,t,n),n=n.sibling}function ps(e,t,n){if(it&&"function"===typeof it.onCommitFiberUnmount)try{it.onCommitFiberUnmount(at,n)}catch(l){}switch(n.tag){case 5:Gl||Jl(n,t);case 6:var r=cs,a=ds;cs=null,fs(e,t,n),ds=a,null!==(cs=r)&&(ds?(e=cs,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):cs.removeChild(n.stateNode));break;case 18:null!==cs&&(ds?(e=cs,n=n.stateNode,8===e.nodeType?sa(e.parentNode,n):1===e.nodeType&&sa(e,n),Ht(e)):sa(cs,n.stateNode));break;case 4:r=cs,a=ds,cs=n.stateNode.containerInfo,ds=!0,fs(e,t,n),cs=r,ds=a;break;case 0:case 11:case 14:case 15:if(!Gl&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){a=r=r.next;do{var i=a,o=i.destroy;i=i.tag,void 0!==o&&(0!==(2&i)||0!==(4&i))&&es(n,t,o),a=a.next}while(a!==r)}fs(e,t,n);break;case 1:if(!Gl&&(Jl(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Cu(n,t,l)}fs(e,t,n);break;case 21:fs(e,t,n);break;case 22:1&n.mode?(Gl=(r=Gl)||null!==n.memoizedState,fs(e,t,n),Gl=r):fs(e,t,n);break;default:fs(e,t,n)}}function hs(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Xl),t.forEach(function(t){var r=Pu.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function ms(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var a=n[r];try{var o=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 5:cs=s.stateNode,ds=!1;break e;case 3:case 4:cs=s.stateNode.containerInfo,ds=!0;break e}s=s.return}if(null===cs)throw Error(i(160));ps(o,l,a),cs=null,ds=!1;var u=a.alternate;null!==u&&(u.return=null),a.return=null}catch(c){Cu(a,t,c)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gs(t,e),t=t.sibling}function gs(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ms(t,e),xs(e),4&r){try{ns(3,e,e.return),rs(3,e)}catch(g){Cu(e,e.return,g)}try{ns(5,e,e.return)}catch(g){Cu(e,e.return,g)}}break;case 1:ms(t,e),xs(e),512&r&&null!==n&&Jl(n,n.return);break;case 5:if(ms(t,e),xs(e),512&r&&null!==n&&Jl(n,n.return),32&e.flags){var a=e.stateNode;try{fe(a,"")}catch(g){Cu(e,e.return,g)}}if(4&r&&null!=(a=e.stateNode)){var o=e.memoizedProps,l=null!==n?n.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,null!==u)try{"input"===s&&"radio"===o.type&&null!=o.name&&X(a,o),ve(s,l);var c=ve(s,o);for(l=0;l<u.length;l+=2){var d=u[l],f=u[l+1];"style"===d?ge(a,f):"dangerouslySetInnerHTML"===d?de(a,f):"children"===d?fe(a,f):v(a,d,f,c)}switch(s){case"input":Z(a,o);break;case"textarea":ie(a,o);break;case"select":var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var h=o.value;null!=h?ne(a,!!o.multiple,h,!1):p!==!!o.multiple&&(null!=o.defaultValue?ne(a,!!o.multiple,o.defaultValue,!0):ne(a,!!o.multiple,o.multiple?[]:"",!1))}a[pa]=o}catch(g){Cu(e,e.return,g)}}break;case 6:if(ms(t,e),xs(e),4&r){if(null===e.stateNode)throw Error(i(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(g){Cu(e,e.return,g)}}break;case 3:if(ms(t,e),xs(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Ht(t.containerInfo)}catch(g){Cu(e,e.return,g)}break;case 4:default:ms(t,e),xs(e);break;case 13:ms(t,e),xs(e),8192&(a=e.child).flags&&(o=null!==a.memoizedState,a.stateNode.isHidden=o,!o||null!==a.alternate&&null!==a.alternate.memoizedState||(Us=Xe())),4&r&&hs(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(Gl=(c=Gl)||d,ms(t,e),Gl=c):ms(t,e),xs(e),8192&r){if(c=null!==e.memoizedState,(e.stateNode.isHidden=c)&&!d&&0!==(1&e.mode))for(Zl=e,d=e.child;null!==d;){for(f=Zl=d;null!==Zl;){switch(h=(p=Zl).child,p.tag){case 0:case 11:case 14:case 15:ns(4,p,p.return);break;case 1:Jl(p,p.return);var m=p.stateNode;if("function"===typeof m.componentWillUnmount){r=p,n=p.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){Cu(r,n,g)}}break;case 5:Jl(p,p.return);break;case 22:if(null!==p.memoizedState){ws(f);continue}}null!==h?(h.return=p,Zl=h):ws(f)}d=d.sibling}e:for(d=null,f=e;;){if(5===f.tag){if(null===d){d=f;try{a=f.stateNode,c?"function"===typeof(o=a.style).setProperty?o.setProperty("display","none","important"):o.display="none":(s=f.stateNode,l=void 0!==(u=f.memoizedProps.style)&&null!==u&&u.hasOwnProperty("display")?u.display:null,s.style.display=me("display",l))}catch(g){Cu(e,e.return,g)}}}else if(6===f.tag){if(null===d)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(g){Cu(e,e.return,g)}}else if((22!==f.tag&&23!==f.tag||null===f.memoizedState||f===e)&&null!==f.child){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;null===f.sibling;){if(null===f.return||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ms(t,e),xs(e),4&r&&hs(e);case 21:}}function xs(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(os(n)){var r=n;break e}n=n.return}throw Error(i(160))}switch(r.tag){case 5:var a=r.stateNode;32&r.flags&&(fe(a,""),r.flags&=-33),us(e,ls(e),a);break;case 3:case 4:var o=r.stateNode.containerInfo;ss(e,ls(e),o);break;default:throw Error(i(161))}}catch(l){Cu(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function bs(e,t,n){Zl=e,vs(e,t,n)}function vs(e,t,n){for(var r=0!==(1&e.mode);null!==Zl;){var a=Zl,i=a.child;if(22===a.tag&&r){var o=null!==a.memoizedState||ql;if(!o){var l=a.alternate,s=null!==l&&null!==l.memoizedState||Gl;l=ql;var u=Gl;if(ql=o,(Gl=s)&&!u)for(Zl=a;null!==Zl;)s=(o=Zl).child,22===o.tag&&null!==o.memoizedState?ks(a):null!==s?(s.return=o,Zl=s):ks(a);for(;null!==i;)Zl=i,vs(i,t,n),i=i.sibling;Zl=a,ql=l,Gl=u}ys(e)}else 0!==(8772&a.subtreeFlags)&&null!==i?(i.return=a,Zl=i):ys(e)}}function ys(e){for(;null!==Zl;){var t=Zl;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Gl||rs(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Gl)if(null===n)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:nl(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;null!==o&&Wi(t,o,r);break;case 3:var l=t.updateQueue;if(null!==l){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Wi(t,l,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var c=t.alternate;if(null!==c){var d=c.memoizedState;if(null!==d){var f=d.dehydrated;null!==f&&Ht(f)}}}break;default:throw Error(i(163))}Gl||512&t.flags&&as(t)}catch(p){Cu(t,t.return,p)}}if(t===e){Zl=null;break}if(null!==(n=t.sibling)){n.return=t.return,Zl=n;break}Zl=t.return}}function ws(e){for(;null!==Zl;){var t=Zl;if(t===e){Zl=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Zl=n;break}Zl=t.return}}function ks(e){for(;null!==Zl;){var t=Zl;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rs(4,t)}catch(s){Cu(t,n,s)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var a=t.return;try{r.componentDidMount()}catch(s){Cu(t,a,s)}}var i=t.return;try{as(t)}catch(s){Cu(t,i,s)}break;case 5:var o=t.return;try{as(t)}catch(s){Cu(t,o,s)}}}catch(s){Cu(t,t.return,s)}if(t===e){Zl=null;break}var l=t.sibling;if(null!==l){l.return=t.return,Zl=l;break}Zl=t.return}}var Ss,Cs=Math.ceil,Es=y.ReactCurrentDispatcher,_s=y.ReactCurrentOwner,js=y.ReactCurrentBatchConfig,Ps=0,zs=null,Ts=null,Ns=0,Os=0,Rs=Ca(0),Ls=0,As=null,Is=0,Ds=0,Ms=0,Fs=null,$s=null,Us=0,Hs=1/0,Ws=null,Bs=!1,Vs=null,Ks=null,Qs=!1,Ys=null,qs=0,Gs=0,Xs=null,Zs=-1,Js=0;function eu(){return 0!==(6&Ps)?Xe():-1!==Zs?Zs:Zs=Xe()}function tu(e){return 0===(1&e.mode)?1:0!==(2&Ps)&&0!==Ns?Ns&-Ns:null!==mi.transition?(0===Js&&(Js=mt()),Js):0!==(e=vt)?e:e=void 0===(e=window.event)?16:Gt(e.type)}function nu(e,t,n,r){if(50<Gs)throw Gs=0,Xs=null,Error(i(185));xt(e,n,r),0!==(2&Ps)&&e===zs||(e===zs&&(0===(2&Ps)&&(Ds|=n),4===Ls&&lu(e,Ns)),ru(e,r),1===n&&0===Ps&&0===(1&t.mode)&&(Hs=Xe()+500,Fa&&Ha()))}function ru(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-ot(i),l=1<<o,s=a[o];-1===s?0!==(l&n)&&0===(l&r)||(a[o]=pt(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}(e,t);var r=ft(e,e===zs?Ns:0);if(0===r)null!==n&&Ye(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Ye(n),1===t)0===e.tag?function(e){Fa=!0,Ua(e)}(su.bind(null,e)):Ua(su.bind(null,e)),oa(function(){0===(6&Ps)&&Ha()}),n=null;else{switch(yt(r)){case 1:n=Je;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=zu(n,au.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function au(e,t){if(Zs=-1,Js=0,0!==(6&Ps))throw Error(i(327));var n=e.callbackNode;if(ku()&&e.callbackNode!==n)return null;var r=ft(e,e===zs?Ns:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=gu(e,r);else{t=r;var a=Ps;Ps|=2;var o=hu();for(zs===e&&Ns===t||(Ws=null,Hs=Xe()+500,fu(e,t));;)try{bu();break}catch(s){pu(e,s)}_i(),Es.current=o,Ps=a,null!==Ts?t=0:(zs=null,Ns=0,t=Ls)}if(0!==t){if(2===t&&(0!==(a=ht(e))&&(r=a,t=iu(e,a))),1===t)throw n=As,fu(e,0),lu(e,r),ru(e,Xe()),n;if(6===t)lu(e,r);else{if(a=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var a=n[r],i=a.getSnapshot;a=a.value;try{if(!lr(i(),a))return!1}catch(l){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(a)&&(2===(t=gu(e,r))&&(0!==(o=ht(e))&&(r=o,t=iu(e,o))),1===t))throw n=As,fu(e,0),lu(e,r),ru(e,Xe()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(i(345));case 2:case 5:wu(e,$s,Ws);break;case 3:if(lu(e,r),(130023424&r)===r&&10<(t=Us+500-Xe())){if(0!==ft(e,0))break;if(((a=e.suspendedLanes)&r)!==r){eu(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ra(wu.bind(null,e,$s,Ws),t);break}wu(e,$s,Ws);break;case 4:if(lu(e,r),(4194240&r)===r)break;for(t=e.eventTimes,a=-1;0<r;){var l=31-ot(r);o=1<<l,(l=t[l])>a&&(a=l),r&=~o}if(r=a,10<(r=(120>(r=Xe()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Cs(r/1960))-r)){e.timeoutHandle=ra(wu.bind(null,e,$s,Ws),r);break}wu(e,$s,Ws);break;default:throw Error(i(329))}}}return ru(e,Xe()),e.callbackNode===n?au.bind(null,e):null}function iu(e,t){var n=Fs;return e.current.memoizedState.isDehydrated&&(fu(e,t).flags|=256),2!==(e=gu(e,t))&&(t=$s,$s=n,null!==t&&ou(t)),e}function ou(e){null===$s?$s=e:$s.push.apply($s,e)}function lu(e,t){for(t&=~Ms,t&=~Ds,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ot(t),r=1<<n;e[n]=-1,t&=~r}}function su(e){if(0!==(6&Ps))throw Error(i(327));ku();var t=ft(e,0);if(0===(1&t))return ru(e,Xe()),null;var n=gu(e,t);if(0!==e.tag&&2===n){var r=ht(e);0!==r&&(t=r,n=iu(e,r))}if(1===n)throw n=As,fu(e,0),lu(e,t),ru(e,Xe()),n;if(6===n)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wu(e,$s,Ws),ru(e,Xe()),null}function uu(e,t){var n=Ps;Ps|=1;try{return e(t)}finally{0===(Ps=n)&&(Hs=Xe()+500,Fa&&Ha())}}function cu(e){null!==Ys&&0===Ys.tag&&0===(6&Ps)&&ku();var t=Ps;Ps|=1;var n=js.transition,r=vt;try{if(js.transition=null,vt=1,e)return e()}finally{vt=r,js.transition=n,0===(6&(Ps=t))&&Ha()}}function du(){Os=Rs.current,Ea(Rs)}function fu(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,aa(n)),null!==Ts)for(n=Ts.return;null!==n;){var r=n;switch(ti(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&Ra();break;case 3:Gi(),Ea(za),Ea(Pa),no();break;case 5:Zi(r);break;case 4:Gi();break;case 13:case 19:Ea(Ji);break;case 10:ji(r.type._context);break;case 22:case 23:du()}n=n.return}if(zs=e,Ts=e=Ru(e.current,null),Ns=Os=t,Ls=0,As=null,Ms=Ds=Is=0,$s=Fs=null,null!==Ni){for(t=0;t<Ni.length;t++)if(null!==(r=(n=Ni[t]).interleaved)){n.interleaved=null;var a=r.next,i=n.pending;if(null!==i){var o=i.next;i.next=a,r.next=o}n.pending=r}Ni=null}return e}function pu(e,t){for(;;){var n=Ts;try{if(_i(),ro.current=Zo,uo){for(var r=oo.memoizedState;null!==r;){var a=r.queue;null!==a&&(a.pending=null),r=r.next}uo=!1}if(io=0,so=lo=oo=null,co=!1,fo=0,_s.current=null,null===n||null===n.return){Ls=1,As=t,Ts=null;break}e:{var o=e,l=n.return,s=n,u=t;if(t=Ns,s.flags|=32768,null!==u&&"object"===typeof u&&"function"===typeof u.then){var c=u,d=s,f=d.tag;if(0===(1&d.mode)&&(0===f||11===f||15===f)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=gl(l);if(null!==h){h.flags&=-257,xl(h,l,s,0,t),1&h.mode&&ml(o,c,t),u=c;var m=(t=h).updateQueue;if(null===m){var g=new Set;g.add(u),t.updateQueue=g}else m.add(u);break e}if(0===(1&t)){ml(o,c,t),mu();break e}u=Error(i(426))}else if(ai&&1&s.mode){var x=gl(l);if(null!==x){0===(65536&x.flags)&&(x.flags|=256),xl(x,l,s,0,t),hi(ul(u,s));break e}}o=u=ul(u,s),4!==Ls&&(Ls=2),null===Fs?Fs=[o]:Fs.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t,Ui(o,pl(0,u,t));break e;case 1:s=u;var b=o.type,v=o.stateNode;if(0===(128&o.flags)&&("function"===typeof b.getDerivedStateFromError||null!==v&&"function"===typeof v.componentDidCatch&&(null===Ks||!Ks.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t,Ui(o,hl(o,s,t));break e}}o=o.return}while(null!==o)}yu(n)}catch(y){t=y,Ts===n&&null!==n&&(Ts=n=n.return);continue}break}}function hu(){var e=Es.current;return Es.current=Zo,null===e?Zo:e}function mu(){0!==Ls&&3!==Ls&&2!==Ls||(Ls=4),null===zs||0===(268435455&Is)&&0===(268435455&Ds)||lu(zs,Ns)}function gu(e,t){var n=Ps;Ps|=2;var r=hu();for(zs===e&&Ns===t||(Ws=null,fu(e,t));;)try{xu();break}catch(a){pu(e,a)}if(_i(),Ps=n,Es.current=r,null!==Ts)throw Error(i(261));return zs=null,Ns=0,Ls}function xu(){for(;null!==Ts;)vu(Ts)}function bu(){for(;null!==Ts&&!qe();)vu(Ts)}function vu(e){var t=Ss(e.alternate,e,Os);e.memoizedProps=e.pendingProps,null===t?yu(e):Ts=t,_s.current=null}function yu(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Ql(n,t,Os)))return void(Ts=n)}else{if(null!==(n=Yl(n,t)))return n.flags&=32767,void(Ts=n);if(null===e)return Ls=6,void(Ts=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Ts=t);Ts=t=e}while(null!==t);0===Ls&&(Ls=5)}function wu(e,t,n){var r=vt,a=js.transition;try{js.transition=null,vt=1,function(e,t,n,r){do{ku()}while(null!==Ys);if(0!==(6&Ps))throw Error(i(327));n=e.finishedWork;var a=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-ot(n),i=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~i}}(e,o),e===zs&&(Ts=zs=null,Ns=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Qs||(Qs=!0,zu(tt,function(){return ku(),null})),o=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||o){o=js.transition,js.transition=null;var l=vt;vt=1;var s=Ps;Ps|=4,_s.current=null,function(e,t){if(ea=Bt,pr(e=fr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch(w){n=null;break e}var l=0,s=-1,u=-1,c=0,d=0,f=e,p=null;t:for(;;){for(var h;f!==n||0!==a&&3!==f.nodeType||(s=l+a),f!==o||0!==r&&3!==f.nodeType||(u=l+r),3===f.nodeType&&(l+=f.nodeValue.length),null!==(h=f.firstChild);)p=f,f=h;for(;;){if(f===e)break t;if(p===n&&++c===a&&(s=l),p===o&&++d===r&&(u=l),null!==(h=f.nextSibling))break;p=(f=p).parentNode}f=h}n=-1===s||-1===u?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ta={focusedElem:e,selectionRange:n},Bt=!1,Zl=t;null!==Zl;)if(e=(t=Zl).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Zl=e;else for(;null!==Zl;){t=Zl;try{var m=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,x=m.memoizedState,b=t.stateNode,v=b.getSnapshotBeforeUpdate(t.elementType===t.type?g:nl(t.type,g),x);b.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var y=t.stateNode.containerInfo;1===y.nodeType?y.textContent="":9===y.nodeType&&y.documentElement&&y.removeChild(y.documentElement);break;default:throw Error(i(163))}}catch(w){Cu(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Zl=e;break}Zl=t.return}m=ts,ts=!1}(e,n),gs(n,e),hr(ta),Bt=!!ea,ta=ea=null,e.current=n,bs(n,e,a),Ge(),Ps=s,vt=l,js.transition=o}else e.current=n;if(Qs&&(Qs=!1,Ys=e,qs=a),o=e.pendingLanes,0===o&&(Ks=null),function(e){if(it&&"function"===typeof it.onCommitFiberRoot)try{it.onCommitFiberRoot(at,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),ru(e,Xe()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(Bs)throw Bs=!1,e=Vs,Vs=null,e;0!==(1&qs)&&0!==e.tag&&ku(),o=e.pendingLanes,0!==(1&o)?e===Xs?Gs++:(Gs=0,Xs=e):Gs=0,Ha()}(e,t,n,r)}finally{js.transition=a,vt=r}return null}function ku(){if(null!==Ys){var e=yt(qs),t=js.transition,n=vt;try{if(js.transition=null,vt=16>e?16:e,null===Ys)var r=!1;else{if(e=Ys,Ys=null,qs=0,0!==(6&Ps))throw Error(i(331));var a=Ps;for(Ps|=4,Zl=e.current;null!==Zl;){var o=Zl,l=o.child;if(0!==(16&Zl.flags)){var s=o.deletions;if(null!==s){for(var u=0;u<s.length;u++){var c=s[u];for(Zl=c;null!==Zl;){var d=Zl;switch(d.tag){case 0:case 11:case 15:ns(8,d,o)}var f=d.child;if(null!==f)f.return=d,Zl=f;else for(;null!==Zl;){var p=(d=Zl).sibling,h=d.return;if(is(d),d===c){Zl=null;break}if(null!==p){p.return=h,Zl=p;break}Zl=h}}}var m=o.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var x=g.sibling;g.sibling=null,g=x}while(null!==g)}}Zl=o}}if(0!==(2064&o.subtreeFlags)&&null!==l)l.return=o,Zl=l;else e:for(;null!==Zl;){if(0!==(2048&(o=Zl).flags))switch(o.tag){case 0:case 11:case 15:ns(9,o,o.return)}var b=o.sibling;if(null!==b){b.return=o.return,Zl=b;break e}Zl=o.return}}var v=e.current;for(Zl=v;null!==Zl;){var y=(l=Zl).child;if(0!==(2064&l.subtreeFlags)&&null!==y)y.return=l,Zl=y;else e:for(l=v;null!==Zl;){if(0!==(2048&(s=Zl).flags))try{switch(s.tag){case 0:case 11:case 15:rs(9,s)}}catch(k){Cu(s,s.return,k)}if(s===l){Zl=null;break e}var w=s.sibling;if(null!==w){w.return=s.return,Zl=w;break e}Zl=s.return}}if(Ps=a,Ha(),it&&"function"===typeof it.onPostCommitFiberRoot)try{it.onPostCommitFiberRoot(at,e)}catch(k){}r=!0}return r}finally{vt=n,js.transition=t}}return!1}function Su(e,t,n){e=Fi(e,t=pl(0,t=ul(n,t),1),1),t=eu(),null!==e&&(xt(e,1,t),ru(e,t))}function Cu(e,t,n){if(3===e.tag)Su(e,e,n);else for(;null!==t;){if(3===t.tag){Su(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Ks||!Ks.has(r))){t=Fi(t,e=hl(t,e=ul(n,e),1),1),e=eu(),null!==t&&(xt(t,1,e),ru(t,e));break}}t=t.return}}function Eu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=eu(),e.pingedLanes|=e.suspendedLanes&n,zs===e&&(Ns&n)===n&&(4===Ls||3===Ls&&(130023424&Ns)===Ns&&500>Xe()-Us?fu(e,0):Ms|=n),ru(e,t)}function _u(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ct,0===(130023424&(ct<<=1))&&(ct=4194304)));var n=eu();null!==(e=Li(e,t))&&(xt(e,t,n),ru(e,n))}function ju(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),_u(e,n)}function Pu(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;null!==a&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(i(314))}null!==r&&r.delete(t),_u(e,n)}function zu(e,t){return Qe(e,t)}function Tu(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nu(e,t,n,r){return new Tu(e,t,n,r)}function Ou(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Ru(e,t){var n=e.alternate;return null===n?((n=Nu(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Lu(e,t,n,r,a,o){var l=2;if(r=e,"function"===typeof e)Ou(e)&&(l=1);else if("string"===typeof e)l=5;else e:switch(e){case S:return Au(n.children,a,o,t);case C:l=8,a|=8;break;case E:return(e=Nu(12,n,t,2|a)).elementType=E,e.lanes=o,e;case z:return(e=Nu(13,n,t,a)).elementType=z,e.lanes=o,e;case T:return(e=Nu(19,n,t,a)).elementType=T,e.lanes=o,e;case R:return Iu(n,a,o,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case _:l=10;break e;case j:l=9;break e;case P:l=11;break e;case N:l=14;break e;case O:l=16,r=null;break e}throw Error(i(130,null==e?e:typeof e,""))}return(t=Nu(l,n,t,a)).elementType=e,t.type=r,t.lanes=o,t}function Au(e,t,n,r){return(e=Nu(7,e,r,t)).lanes=n,e}function Iu(e,t,n,r){return(e=Nu(22,e,r,t)).elementType=R,e.lanes=n,e.stateNode={isHidden:!1},e}function Du(e,t,n){return(e=Nu(6,e,null,t)).lanes=n,e}function Mu(e,t,n){return(t=Nu(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Fu(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function $u(e,t,n,r,a,i,o,l,s){return e=new Fu(e,t,n,l,s),1===t?(t=1,!0===i&&(t|=8)):t=0,i=Nu(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ii(i),e}function Uu(e){if(!e)return ja;e:{if(He(e=e._reactInternals)!==e||1!==e.tag)throw Error(i(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Oa(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(i(171))}if(1===e.tag){var n=e.type;if(Oa(n))return Aa(e,n,t)}return t}function Hu(e,t,n,r,a,i,o,l,s){return(e=$u(n,r,!0,e,0,i,0,l,s)).context=Uu(null),n=e.current,(i=Mi(r=eu(),a=tu(n))).callback=void 0!==t&&null!==t?t:null,Fi(n,i,a),e.current.lanes=a,xt(e,a,r),ru(e,r),e}function Wu(e,t,n,r){var a=t.current,i=eu(),o=tu(a);return n=Uu(n),null===t.context?t.context=n:t.pendingContext=n,(t=Mi(i,o)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Fi(a,t,o))&&(nu(e,a,o,i),$i(e,a,o)),o}function Bu(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Vu(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Ku(e,t){Vu(e,t),(e=e.alternate)&&Vu(e,t)}Ss=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||za.current)vl=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return vl=!1,function(e,t,n){switch(t.tag){case 3:zl(t),pi();break;case 5:Xi(t);break;case 1:Oa(t.type)&&Ia(t);break;case 4:qi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;_a(ki,r._currentValue),r._currentValue=a;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(_a(Ji,1&Ji.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Dl(e,t,n):(_a(Ji,1&Ji.current),null!==(e=Bl(e,t,n))?e.sibling:null);_a(Ji,1&Ji.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Hl(e,t,n);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),_a(Ji,Ji.current),r)break;return null;case 22:case 23:return t.lanes=0,Cl(e,t,n)}return Bl(e,t,n)}(e,t,n);vl=0!==(131072&e.flags)}else vl=!1,ai&&0!==(1048576&t.flags)&&Ja(t,Ka,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Wl(e,t),e=t.pendingProps;var a=Na(t,Pa.current);zi(t,n),a=go(null,t,r,e,a,n);var o=xo();return t.flags|=1,"object"===typeof a&&null!==a&&"function"===typeof a.render&&void 0===a.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Oa(r)?(o=!0,Ia(t)):o=!1,t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,Ii(t),a.updater=al,t.stateNode=a,a._reactInternals=t,sl(t,r,e,n),t=Pl(null,t,r,!0,o,n)):(t.tag=0,ai&&o&&ei(t),yl(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Wl(e,t),e=t.pendingProps,r=(a=r._init)(r._payload),t.type=r,a=t.tag=function(e){if("function"===typeof e)return Ou(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===P)return 11;if(e===N)return 14}return 2}(r),e=nl(r,e),a){case 0:t=_l(null,t,r,e,n);break e;case 1:t=jl(null,t,r,e,n);break e;case 11:t=wl(null,t,r,e,n);break e;case 14:t=kl(null,t,r,nl(r.type,e),n);break e}throw Error(i(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,_l(e,t,r,a=t.elementType===r?a:nl(r,a),n);case 1:return r=t.type,a=t.pendingProps,jl(e,t,r,a=t.elementType===r?a:nl(r,a),n);case 3:e:{if(zl(t),null===e)throw Error(i(387));r=t.pendingProps,a=(o=t.memoizedState).element,Di(e,t),Hi(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){t=Tl(e,t,r,n,a=ul(Error(i(423)),t));break e}if(r!==a){t=Tl(e,t,r,n,a=ul(Error(i(424)),t));break e}for(ri=ua(t.stateNode.containerInfo.firstChild),ni=t,ai=!0,ii=null,n=wi(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(pi(),r===a){t=Bl(e,t,n);break e}yl(e,t,r,n)}t=t.child}return t;case 5:return Xi(t),null===e&&ui(t),r=t.type,a=t.pendingProps,o=null!==e?e.memoizedProps:null,l=a.children,na(r,a)?l=null:null!==o&&na(r,o)&&(t.flags|=32),El(e,t),yl(e,t,l,n),t.child;case 6:return null===e&&ui(t),null;case 13:return Dl(e,t,n);case 4:return qi(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=yi(t,null,r,n):yl(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,wl(e,t,r,a=t.elementType===r?a:nl(r,a),n);case 7:return yl(e,t,t.pendingProps,n),t.child;case 8:case 12:return yl(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,o=t.memoizedProps,l=a.value,_a(ki,r._currentValue),r._currentValue=l,null!==o)if(lr(o.value,l)){if(o.children===a.children&&!za.current){t=Bl(e,t,n);break e}}else for(null!==(o=t.child)&&(o.return=t);null!==o;){var s=o.dependencies;if(null!==s){l=o.child;for(var u=s.firstContext;null!==u;){if(u.context===r){if(1===o.tag){(u=Mi(-1,n&-n)).tag=2;var c=o.updateQueue;if(null!==c){var d=(c=c.shared).pending;null===d?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}o.lanes|=n,null!==(u=o.alternate)&&(u.lanes|=n),Pi(o.return,n,t),s.lanes|=n;break}u=u.next}}else if(10===o.tag)l=o.type===t.type?null:o.child;else if(18===o.tag){if(null===(l=o.return))throw Error(i(341));l.lanes|=n,null!==(s=l.alternate)&&(s.lanes|=n),Pi(l,n,t),l=o.sibling}else l=o.child;if(null!==l)l.return=o;else for(l=o;null!==l;){if(l===t){l=null;break}if(null!==(o=l.sibling)){o.return=l.return,l=o;break}l=l.return}o=l}yl(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,zi(t,n),r=r(a=Ti(a)),t.flags|=1,yl(e,t,r,n),t.child;case 14:return a=nl(r=t.type,t.pendingProps),kl(e,t,r,a=nl(r.type,a),n);case 15:return Sl(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:nl(r,a),Wl(e,t),t.tag=1,Oa(r)?(e=!0,Ia(t)):e=!1,zi(t,n),ol(t,r,a),sl(t,r,a,n),Pl(null,t,r,!0,e,n);case 19:return Hl(e,t,n);case 22:return Cl(e,t,n)}throw Error(i(156,t.tag))};var Qu="function"===typeof reportError?reportError:function(e){console.error(e)};function Yu(e){this._internalRoot=e}function qu(e){this._internalRoot=e}function Gu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Xu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Zu(){}function Ju(e,t,n,r,a){var i=n._reactRootContainer;if(i){var o=i;if("function"===typeof a){var l=a;a=function(){var e=Bu(o);l.call(e)}}Wu(t,o,e,a)}else o=function(e,t,n,r,a){if(a){if("function"===typeof r){var i=r;r=function(){var e=Bu(o);i.call(e)}}var o=Hu(t,r,e,0,null,!1,0,"",Zu);return e._reactRootContainer=o,e[ha]=o.current,Hr(8===e.nodeType?e.parentNode:e),cu(),o}for(;a=e.lastChild;)e.removeChild(a);if("function"===typeof r){var l=r;r=function(){var e=Bu(s);l.call(e)}}var s=$u(e,0,!1,null,0,!1,0,"",Zu);return e._reactRootContainer=s,e[ha]=s.current,Hr(8===e.nodeType?e.parentNode:e),cu(function(){Wu(t,s,n,r)}),s}(n,t,e,a,r);return Bu(o)}qu.prototype.render=Yu.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(i(409));Wu(e,t,null,null)},qu.prototype.unmount=Yu.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;cu(function(){Wu(null,e,null,null)}),t[ha]=null}},qu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ct();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Rt.length&&0!==t&&t<Rt[n].priority;n++);Rt.splice(n,0,e),0===n&&Dt(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(bt(t,1|n),ru(t,Xe()),0===(6&Ps)&&(Hs=Xe()+500,Ha()))}break;case 13:cu(function(){var t=Li(e,1);if(null!==t){var n=eu();nu(t,e,1,n)}}),Ku(e,1)}},kt=function(e){if(13===e.tag){var t=Li(e,134217728);if(null!==t)nu(t,e,134217728,eu());Ku(e,134217728)}},St=function(e){if(13===e.tag){var t=tu(e),n=Li(e,t);if(null!==n)nu(n,e,t,eu());Ku(e,t)}},Ct=function(){return vt},Et=function(e,t){var n=vt;try{return vt=e,t()}finally{vt=n}},ke=function(e,t,n){switch(t){case"input":if(Z(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=wa(r);if(!a)throw Error(i(90));Q(r),Z(r,a)}}}break;case"textarea":ie(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},Pe=uu,ze=cu;var ec={usingClientEntryPoint:!1,Events:[va,ya,wa,_e,je,uu]},tc={findFiberByHostInstance:ba,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nc={bundleType:tc.bundleType,version:tc.version,rendererPackageName:tc.rendererPackageName,rendererConfig:tc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:y.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Ve(e))?null:e.stateNode},findFiberByHostInstance:tc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{at=rc.inject(nc),it=rc}catch(ce){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ec,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Gu(t))throw Error(i(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:k,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Gu(e))throw Error(i(299));var n=!1,r="",a=Qu;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(a=t.onRecoverableError)),t=$u(e,1,!1,null,0,n,0,r,a),e[ha]=t.current,Hr(8===e.nodeType?e.parentNode:e),new Yu(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(i(188));throw e=Object.keys(e).join(","),Error(i(268,e))}return e=null===(e=Ve(t))?null:e.stateNode},t.flushSync=function(e){return cu(e)},t.hydrate=function(e,t,n){if(!Xu(t))throw Error(i(200));return Ju(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Gu(e))throw Error(i(405));var r=null!=n&&n.hydratedSources||null,a=!1,o="",l=Qu;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(a=!0),void 0!==n.identifierPrefix&&(o=n.identifierPrefix),void 0!==n.onRecoverableError&&(l=n.onRecoverableError)),t=Hu(t,null,e,1,null!=n?n:null,a,0,o,l),e[ha]=t.current,Hr(e),r)for(e=0;e<r.length;e++)a=(a=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new qu(t)},t.render=function(e,t,n){if(!Xu(t))throw Error(i(200));return Ju(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Xu(e))throw Error(i(40));return!!e._reactRootContainer&&(cu(function(){Ju(null,null,e,!1,function(){e._reactRootContainer=null,e[ha]=null})}),!0)},t.unstable_batchedUpdates=uu,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Xu(n))throw Error(i(200));if(null==e||void 0===e._reactInternals)throw Error(i(38));return Ju(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},763:(e,t,n)=>{"use strict";e.exports=n(983)},853:(e,t,n)=>{"use strict";e.exports=n(234)},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(730)},983:(e,t)=>{"use strict";var n="function"===typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,a=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,o=n?Symbol.for("react.strict_mode"):60108,l=n?Symbol.for("react.profiler"):60114,s=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,c=n?Symbol.for("react.async_mode"):60111,d=n?Symbol.for("react.concurrent_mode"):60111,f=n?Symbol.for("react.forward_ref"):60112,p=n?Symbol.for("react.suspense"):60113,h=n?Symbol.for("react.suspense_list"):60120,m=n?Symbol.for("react.memo"):60115,g=n?Symbol.for("react.lazy"):60116,x=n?Symbol.for("react.block"):60121,b=n?Symbol.for("react.fundamental"):60117,v=n?Symbol.for("react.responder"):60118,y=n?Symbol.for("react.scope"):60119;function w(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case c:case d:case i:case l:case o:case p:return e;default:switch(e=e&&e.$$typeof){case u:case f:case g:case m:case s:return e;default:return t}}case a:return t}}}function k(e){return w(e)===d}t.AsyncMode=c,t.ConcurrentMode=d,t.ContextConsumer=u,t.ContextProvider=s,t.Element=r,t.ForwardRef=f,t.Fragment=i,t.Lazy=g,t.Memo=m,t.Portal=a,t.Profiler=l,t.StrictMode=o,t.Suspense=p,t.isAsyncMode=function(e){return k(e)||w(e)===c},t.isConcurrentMode=k,t.isContextConsumer=function(e){return w(e)===u},t.isContextProvider=function(e){return w(e)===s},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return w(e)===f},t.isFragment=function(e){return w(e)===i},t.isLazy=function(e){return w(e)===g},t.isMemo=function(e){return w(e)===m},t.isPortal=function(e){return w(e)===a},t.isProfiler=function(e){return w(e)===l},t.isStrictMode=function(e){return w(e)===o},t.isSuspense=function(e){return w(e)===p},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===i||e===d||e===l||e===o||e===p||e===h||"object"===typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===m||e.$$typeof===s||e.$$typeof===u||e.$$typeof===f||e.$$typeof===b||e.$$typeof===v||e.$$typeof===y||e.$$typeof===x)},t.typeOf=w}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";var e=n(43),t=n(391),r=n(528),a=n(324),i=n.n(a);const o=function(e){function t(e,r,s,u,f){for(var p,h,m,g,y,k=0,S=0,C=0,E=0,_=0,O=0,L=m=p=0,I=0,D=0,M=0,F=0,$=s.length,U=$-1,H="",W="",B="",V="";I<$;){if(h=s.charCodeAt(I),I===U&&0!==S+E+C+k&&(0!==S&&(h=47===S?10:47),E=C=k=0,$++,U++),0===S+E+C+k){if(I===U&&(0<D&&(H=H.replace(d,"")),0<H.trim().length)){switch(h){case 32:case 9:case 59:case 13:case 10:break;default:H+=s.charAt(I)}h=59}switch(h){case 123:for(p=(H=H.trim()).charCodeAt(0),m=1,F=++I;I<$;){switch(h=s.charCodeAt(I)){case 123:m++;break;case 125:m--;break;case 47:switch(h=s.charCodeAt(I+1)){case 42:case 47:e:{for(L=I+1;L<U;++L)switch(s.charCodeAt(L)){case 47:if(42===h&&42===s.charCodeAt(L-1)&&I+2!==L){I=L+1;break e}break;case 10:if(47===h){I=L+1;break e}}I=L}}break;case 91:h++;case 40:h++;case 34:case 39:for(;I++<U&&s.charCodeAt(I)!==h;);}if(0===m)break;I++}if(m=s.substring(F,I),0===p&&(p=(H=H.replace(c,"").trim()).charCodeAt(0)),64===p){switch(0<D&&(H=H.replace(d,"")),h=H.charCodeAt(1)){case 100:case 109:case 115:case 45:D=r;break;default:D=N}if(F=(m=t(r,D,m,h,f+1)).length,0<R&&(y=l(3,m,D=n(N,H,M),r,P,j,F,h,f,u),H=D.join(""),void 0!==y&&0===(F=(m=y.trim()).length)&&(h=0,m="")),0<F)switch(h){case 115:H=H.replace(w,o);case 100:case 109:case 45:m=H+"{"+m+"}";break;case 107:m=(H=H.replace(x,"$1 $2"))+"{"+m+"}",m=1===T||2===T&&i("@"+m,3)?"@-webkit-"+m+"@"+m:"@"+m;break;default:m=H+m,112===u&&(W+=m,m="")}else m=""}else m=t(r,n(r,H,M),m,u,f+1);B+=m,m=M=D=L=p=0,H="",h=s.charCodeAt(++I);break;case 125:case 59:if(1<(F=(H=(0<D?H.replace(d,""):H).trim()).length))switch(0===L&&(p=H.charCodeAt(0),45===p||96<p&&123>p)&&(F=(H=H.replace(" ",":")).length),0<R&&void 0!==(y=l(1,H,r,e,P,j,W.length,u,f,u))&&0===(F=(H=y.trim()).length)&&(H="\0\0"),p=H.charCodeAt(0),h=H.charCodeAt(1),p){case 0:break;case 64:if(105===h||99===h){V+=H+s.charAt(I);break}default:58!==H.charCodeAt(F-1)&&(W+=a(H,p,h,H.charCodeAt(2)))}M=D=L=p=0,H="",h=s.charCodeAt(++I)}}switch(h){case 13:case 10:47===S?S=0:0===1+p&&107!==u&&0<H.length&&(D=1,H+="\0"),0<R*A&&l(0,H,r,e,P,j,W.length,u,f,u),j=1,P++;break;case 59:case 125:if(0===S+E+C+k){j++;break}default:switch(j++,g=s.charAt(I),h){case 9:case 32:if(0===E+k+S)switch(_){case 44:case 58:case 9:case 32:g="";break;default:32!==h&&(g=" ")}break;case 0:g="\\0";break;case 12:g="\\f";break;case 11:g="\\v";break;case 38:0===E+S+k&&(D=M=1,g="\f"+g);break;case 108:if(0===E+S+k+z&&0<L)switch(I-L){case 2:112===_&&58===s.charCodeAt(I-3)&&(z=_);case 8:111===O&&(z=O)}break;case 58:0===E+S+k&&(L=I);break;case 44:0===S+C+E+k&&(D=1,g+="\r");break;case 34:case 39:0===S&&(E=E===h?0:0===E?h:E);break;case 91:0===E+S+C&&k++;break;case 93:0===E+S+C&&k--;break;case 41:0===E+S+k&&C--;break;case 40:if(0===E+S+k){if(0===p)if(2*_+3*O===533);else p=1;C++}break;case 64:0===S+C+E+k+L+m&&(m=1);break;case 42:case 47:if(!(0<E+k+C))switch(S){case 0:switch(2*h+3*s.charCodeAt(I+1)){case 235:S=47;break;case 220:F=I,S=42}break;case 42:47===h&&42===_&&F+2!==I&&(33===s.charCodeAt(F+2)&&(W+=s.substring(F,I+1)),g="",S=0)}}0===S&&(H+=g)}O=_,_=h,I++}if(0<(F=W.length)){if(D=r,0<R&&(void 0!==(y=l(2,W,D,e,P,j,F,u,f,u))&&0===(W=y).length))return V+W+B;if(W=D.join(",")+"{"+W+"}",0!==T*z){switch(2!==T||i(W,2)||(z=0),z){case 111:W=W.replace(v,":-moz-$1")+W;break;case 112:W=W.replace(b,"::-webkit-input-$1")+W.replace(b,"::-moz-$1")+W.replace(b,":-ms-input-$1")+W}z=0}}return V+W+B}function n(e,t,n){var a=t.trim().split(m);t=a;var i=a.length,o=e.length;switch(o){case 0:case 1:var l=0;for(e=0===o?"":e[0]+" ";l<i;++l)t[l]=r(e,t[l],n).trim();break;default:var s=l=0;for(t=[];l<i;++l)for(var u=0;u<o;++u)t[s++]=r(e[u]+" ",a[l],n).trim()}return t}function r(e,t,n){var r=t.charCodeAt(0);switch(33>r&&(r=(t=t.trim()).charCodeAt(0)),r){case 38:return t.replace(g,"$1"+e.trim());case 58:return e.trim()+t.replace(g,"$1"+e.trim());default:if(0<1*n&&0<t.indexOf("\f"))return t.replace(g,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+t}function a(e,t,n,r){var o=e+";",l=2*t+3*n+4*r;if(944===l){e=o.indexOf(":",9)+1;var s=o.substring(e,o.length-1).trim();return s=o.substring(0,e).trim()+s+";",1===T||2===T&&i(s,1)?"-webkit-"+s+s:s}if(0===T||2===T&&!i(o,1))return o;switch(l){case 1015:return 97===o.charCodeAt(10)?"-webkit-"+o+o:o;case 951:return 116===o.charCodeAt(3)?"-webkit-"+o+o:o;case 963:return 110===o.charCodeAt(5)?"-webkit-"+o+o:o;case 1009:if(100!==o.charCodeAt(4))break;case 969:case 942:return"-webkit-"+o+o;case 978:return"-webkit-"+o+"-moz-"+o+o;case 1019:case 983:return"-webkit-"+o+"-moz-"+o+"-ms-"+o+o;case 883:if(45===o.charCodeAt(8))return"-webkit-"+o+o;if(0<o.indexOf("image-set(",11))return o.replace(_,"$1-webkit-$2")+o;break;case 932:if(45===o.charCodeAt(4))switch(o.charCodeAt(5)){case 103:return"-webkit-box-"+o.replace("-grow","")+"-webkit-"+o+"-ms-"+o.replace("grow","positive")+o;case 115:return"-webkit-"+o+"-ms-"+o.replace("shrink","negative")+o;case 98:return"-webkit-"+o+"-ms-"+o.replace("basis","preferred-size")+o}return"-webkit-"+o+"-ms-"+o+o;case 964:return"-webkit-"+o+"-ms-flex-"+o+o;case 1023:if(99!==o.charCodeAt(8))break;return"-webkit-box-pack"+(s=o.substring(o.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+o+"-ms-flex-pack"+s+o;case 1005:return p.test(o)?o.replace(f,":-webkit-")+o.replace(f,":-moz-")+o:o;case 1e3:switch(t=(s=o.substring(13).trim()).indexOf("-")+1,s.charCodeAt(0)+s.charCodeAt(t)){case 226:s=o.replace(y,"tb");break;case 232:s=o.replace(y,"tb-rl");break;case 220:s=o.replace(y,"lr");break;default:return o}return"-webkit-"+o+"-ms-"+s+o;case 1017:if(-1===o.indexOf("sticky",9))break;case 975:switch(t=(o=e).length-10,l=(s=(33===o.charCodeAt(t)?o.substring(0,t):o).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|s.charCodeAt(7))){case 203:if(111>s.charCodeAt(8))break;case 115:o=o.replace(s,"-webkit-"+s)+";"+o;break;case 207:case 102:o=o.replace(s,"-webkit-"+(102<l?"inline-":"")+"box")+";"+o.replace(s,"-webkit-"+s)+";"+o.replace(s,"-ms-"+s+"box")+";"+o}return o+";";case 938:if(45===o.charCodeAt(5))switch(o.charCodeAt(6)){case 105:return s=o.replace("-items",""),"-webkit-"+o+"-webkit-box-"+s+"-ms-flex-"+s+o;case 115:return"-webkit-"+o+"-ms-flex-item-"+o.replace(S,"")+o;default:return"-webkit-"+o+"-ms-flex-line-pack"+o.replace("align-content","").replace(S,"")+o}break;case 973:case 989:if(45!==o.charCodeAt(3)||122===o.charCodeAt(4))break;case 931:case 953:if(!0===E.test(e))return 115===(s=e.substring(e.indexOf(":")+1)).charCodeAt(0)?a(e.replace("stretch","fill-available"),t,n,r).replace(":fill-available",":stretch"):o.replace(s,"-webkit-"+s)+o.replace(s,"-moz-"+s.replace("fill-",""))+o;break;case 962:if(o="-webkit-"+o+(102===o.charCodeAt(5)?"-ms-"+o:"")+o,211===n+r&&105===o.charCodeAt(13)&&0<o.indexOf("transform",10))return o.substring(0,o.indexOf(";",27)+1).replace(h,"$1-webkit-$2")+o}return o}function i(e,t){var n=e.indexOf(1===t?":":"{"),r=e.substring(0,3!==t?n:10);return n=e.substring(n+1,e.length-1),L(2!==t?r:r.replace(C,"$1"),n,t)}function o(e,t){var n=a(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return n!==t+";"?n.replace(k," or ($1)").substring(4):"("+t+")"}function l(e,t,n,r,a,i,o,l,s,c){for(var d,f=0,p=t;f<R;++f)switch(d=O[f].call(u,e,p,n,r,a,i,o,l,s,c)){case void 0:case!1:case!0:case null:break;default:p=d}if(p!==t)return p}function s(e){return void 0!==(e=e.prefix)&&(L=null,e?"function"!==typeof e?T=1:(T=2,L=e):T=0),s}function u(e,n){var r=e;if(33>r.charCodeAt(0)&&(r=r.trim()),r=[r],0<R){var a=l(-1,n,r,r,P,j,0,0,0,0);void 0!==a&&"string"===typeof a&&(n=a)}var i=t(N,r,n,0,0);return 0<R&&(void 0!==(a=l(-2,i,r,r,P,j,i.length,0,0,0))&&(i=a)),z=0,j=P=1,i}var c=/^\0+/g,d=/[\0\r\f]/g,f=/: */g,p=/zoo|gra/,h=/([,: ])(transform)/g,m=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,x=/@(k\w+)\s*(\S*)\s*/,b=/::(place)/g,v=/:(read-only)/g,y=/[svh]\w+-[tblr]{2}/,w=/\(\s*(.*)\s*\)/g,k=/([\s\S]*?);/g,S=/-self|flex-/g,C=/[^]*?(:[rp][el]a[\w-]+)[^]*/,E=/stretch|:\s*\w+\-(?:conte|avail)/,_=/([^-])(image-set\()/,j=1,P=1,z=0,T=1,N=[],O=[],R=0,L=null,A=0;return u.use=function e(t){switch(t){case void 0:case null:R=O.length=0;break;default:if("function"===typeof t)O[R++]=t;else if("object"===typeof t)for(var n=0,r=t.length;n<r;++n)e(t[n]);else A=0|!!t}return e},u.set=s,void 0!==e&&s(e),u};const l={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function s(e){var t=Object.create(null);return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}var u=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,c=s(function(e){return u.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91}),d=n(219),f=n.n(d);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var h=function(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n},m=function(e){return null!==e&&"object"==typeof e&&"[object Object]"===(e.toString?e.toString():Object.prototype.toString.call(e))&&!(0,r.QP)(e)},g=Object.freeze([]),x=Object.freeze({});function b(e){return"function"==typeof e}function v(e){return e.displayName||e.name||"Component"}function y(e){return e&&"string"==typeof e.styledComponentId}var w="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",k="undefined"!=typeof window&&"HTMLElement"in window,S=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&(void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)));function C(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var E=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,a=r;e>=a;)(a<<=1)<0&&C(16,""+e);this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var i=r;i<a;i++)this.groupSizes[i]=0}for(var o=this.indexOfGroup(e+1),l=0,s=t.length;l<s;l++)this.tag.insertRule(o,t[l])&&(this.groupSizes[e]++,o++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var a=n;a<r;a++)this.tag.deleteRule(n)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),a=r+n,i=r;i<a;i++)t+=this.tag.getRule(i)+"/*!sc*/\n";return t},e}(),_=new Map,j=new Map,P=1,z=function(e){if(_.has(e))return _.get(e);for(;j.has(P);)P++;var t=P++;return _.set(e,t),j.set(t,e),t},T=function(e){return j.get(e)},N=function(e,t){t>=P&&(P=t+1),_.set(e,t),j.set(t,e)},O="style["+w+'][data-styled-version="5.3.11"]',R=new RegExp("^"+w+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),L=function(e,t,n){for(var r,a=n.split(","),i=0,o=a.length;i<o;i++)(r=a[i])&&e.registerName(t,r)},A=function(e,t){for(var n=(t.textContent||"").split("/*!sc*/\n"),r=[],a=0,i=n.length;a<i;a++){var o=n[a].trim();if(o){var l=o.match(R);if(l){var s=0|parseInt(l[1],10),u=l[2];0!==s&&(N(u,s),L(e,u,l[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(o)}}},I=function(){return n.nc},D=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(w))return r}}(n),i=void 0!==a?a.nextSibling:null;r.setAttribute(w,"active"),r.setAttribute("data-styled-version","5.3.11");var o=I();return o&&r.setAttribute("nonce",o),n.insertBefore(r,i),r},M=function(){function e(e){var t=this.element=D(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var a=t[n];if(a.ownerNode===e)return a}C(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),F=function(){function e(e){var t=this.element=D(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),$=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),U=k,H={isServer:!k,useCSSOMInjection:!S},W=function(){function e(e,t,n){void 0===e&&(e=x),void 0===t&&(t={}),this.options=p({},H,{},e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&k&&U&&(U=!1,function(e){for(var t=document.querySelectorAll(O),n=0,r=t.length;n<r;n++){var a=t[n];a&&"active"!==a.getAttribute(w)&&(A(e,a),a.parentNode&&a.parentNode.removeChild(a))}}(this))}e.registerId=function(e){return z(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(p({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,a=t.target,e=n?new $(a):r?new M(a):new F(a),new E(e)));var e,t,n,r,a},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(z(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(z(e),n)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(z(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",a=0;a<n;a++){var i=T(a);if(void 0!==i){var o=e.names.get(i),l=t.getGroup(a);if(o&&l&&o.size){var s=w+".g"+a+'[id="'+i+'"]',u="";void 0!==o&&o.forEach(function(e){e.length>0&&(u+=e+",")}),r+=""+l+s+'{content:"'+u+'"}/*!sc*/\n'}}}return r}(this)},e}(),B=/(a)(d)/gi,V=function(e){return String.fromCharCode(e+(e>25?39:97))};function K(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=V(t%52)+n;return(V(t%52)+n).replace(B,"$1-$2")}var Q=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Y=function(e){return Q(5381,e)};function q(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(b(n)&&!y(n))return!1}return!0}var G=Y("5.3.11"),X=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&q(e),this.componentId=t,this.baseHash=Q(G,t),this.baseStyle=n,W.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,a=[];if(this.baseStyle&&a.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))a.push(this.staticRulesId);else{var i=me(this.rules,e,t,n).join(""),o=K(Q(this.baseHash,i)>>>0);if(!t.hasNameForId(r,o)){var l=n(i,"."+o,void 0,r);t.insertRules(r,o,l)}a.push(o),this.staticRulesId=o}else{for(var s=this.rules.length,u=Q(this.baseHash,n.hash),c="",d=0;d<s;d++){var f=this.rules[d];if("string"==typeof f)c+=f;else if(f){var p=me(f,e,t,n),h=Array.isArray(p)?p.join(""):p;u=Q(u,h+d),c+=h}}if(c){var m=K(u>>>0);if(!t.hasNameForId(r,m)){var g=n(c,"."+m,void 0,r);t.insertRules(r,m,g)}a.push(m)}}return a.join(" ")},e}(),Z=/^\s*\/\/.*$/gm,J=[":","[",".","#"];function ee(e){var t,n,r,a,i=void 0===e?x:e,l=i.options,s=void 0===l?x:l,u=i.plugins,c=void 0===u?g:u,d=new o(s),f=[],p=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(n,r,a,i,o,l,s,u,c,d){switch(n){case 1:if(0===c&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===u)return r+"/*|*/";break;case 3:switch(u){case 102:case 112:return e(a[0]+r),"";default:return r+(0===d?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t)}}}(function(e){f.push(e)}),h=function(e,r,i){return 0===r&&-1!==J.indexOf(i[n.length])||i.match(a)?e:"."+t};function m(e,i,o,l){void 0===l&&(l="&");var s=e.replace(Z,""),u=i&&o?o+" "+i+" { "+s+" }":s;return t=l,n=i,r=new RegExp("\\"+n+"\\b","g"),a=new RegExp("(\\"+n+"\\b){2,}"),d(o||!i?"":i,u)}return d.use([].concat(c,[function(e,t,a){2===e&&a.length&&a[0].lastIndexOf(n)>0&&(a[0]=a[0].replace(r,h))},p,function(e){if(-2===e){var t=f;return f=[],t}}])),m.hash=c.length?c.reduce(function(e,t){return t.name||C(15),Q(e,t.name)},5381).toString():"",m}var te=e.createContext(),ne=(te.Consumer,e.createContext()),re=(ne.Consumer,new W),ae=ee();function ie(){return(0,e.useContext)(te)||re}function oe(){return(0,e.useContext)(ne)||ae}function le(t){var n=(0,e.useState)(t.stylisPlugins),r=n[0],a=n[1],o=ie(),l=(0,e.useMemo)(function(){var e=o;return t.sheet?e=t.sheet:t.target&&(e=e.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(e=e.reconstructWithOptions({useCSSOMInjection:!1})),e},[t.disableCSSOMInjection,t.sheet,t.target]),s=(0,e.useMemo)(function(){return ee({options:{prefix:!t.disableVendorPrefixes},plugins:r})},[t.disableVendorPrefixes,r]);return(0,e.useEffect)(function(){i()(r,t.stylisPlugins)||a(t.stylisPlugins)},[t.stylisPlugins]),e.createElement(te.Provider,{value:l},e.createElement(ne.Provider,{value:s},t.children))}var se=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=ae);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.toString=function(){return C(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=ae),this.name+e.hash},e}(),ue=/([A-Z])/,ce=/([A-Z])/g,de=/^ms-/,fe=function(e){return"-"+e.toLowerCase()};function pe(e){return ue.test(e)?e.replace(ce,fe).replace(de,"-ms-"):e}var he=function(e){return null==e||!1===e||""===e};function me(e,t,n,r){if(Array.isArray(e)){for(var a,i=[],o=0,s=e.length;o<s;o+=1)""!==(a=me(e[o],t,n,r))&&(Array.isArray(a)?i.push.apply(i,a):i.push(a));return i}return he(e)?"":y(e)?"."+e.styledComponentId:b(e)?"function"!=typeof(u=e)||u.prototype&&u.prototype.isReactComponent||!t?e:me(e(t),t,n,r):e instanceof se?n?(e.inject(n,r),e.getName(r)):e:m(e)?function e(t,n){var r,a,i=[];for(var o in t)t.hasOwnProperty(o)&&!he(t[o])&&(Array.isArray(t[o])&&t[o].isCss||b(t[o])?i.push(pe(o)+":",t[o],";"):m(t[o])?i.push.apply(i,e(t[o],o)):i.push(pe(o)+": "+(r=o,(null==(a=t[o])||"boolean"==typeof a||""===a?"":"number"!=typeof a||0===a||r in l||r.startsWith("--")?String(a).trim():a+"px")+";")));return n?[n+" {"].concat(i,["}"]):i}(e):e.toString();var u}var ge=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function xe(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return b(e)||m(e)?ge(me(h(g,[e].concat(n)))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:ge(me(h(e,n)))}new Set;var be=function(e,t,n){return void 0===n&&(n=x),e.theme!==n.theme&&e.theme||t||n.theme},ve=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ye=/(^-|-$)/g;function we(e){return e.replace(ve,"-").replace(ye,"")}var ke=function(e){return K(Y(e)>>>0)};function Se(e){return"string"==typeof e&&!0}var Ce=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},Ee=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function _e(e,t,n){var r=e[n];Ce(t)&&Ce(r)?je(r,t):e[n]=t}function je(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var a=0,i=n;a<i.length;a++){var o=i[a];if(Ce(o))for(var l in o)Ee(l)&&_e(e,o[l],l)}return e}var Pe=e.createContext();Pe.Consumer;var ze={};function Te(t,n,r){var a=y(t),i=!Se(t),o=n.attrs,l=void 0===o?g:o,s=n.componentId,u=void 0===s?function(e,t){var n="string"!=typeof e?"sc":we(e);ze[n]=(ze[n]||0)+1;var r=n+"-"+ke("5.3.11"+n+ze[n]);return t?t+"-"+r:r}(n.displayName,n.parentComponentId):s,d=n.displayName,h=void 0===d?function(e){return Se(e)?"styled."+e:"Styled("+v(e)+")"}(t):d,m=n.displayName&&n.componentId?we(n.displayName)+"-"+n.componentId:n.componentId||u,w=a&&t.attrs?Array.prototype.concat(t.attrs,l).filter(Boolean):l,k=n.shouldForwardProp;a&&t.shouldForwardProp&&(k=n.shouldForwardProp?function(e,r,a){return t.shouldForwardProp(e,r,a)&&n.shouldForwardProp(e,r,a)}:t.shouldForwardProp);var S,C=new X(r,m,a?t.componentStyle:void 0),E=C.isStatic&&0===l.length,_=function(t,n){return function(t,n,r,a){var i=t.attrs,o=t.componentStyle,l=t.defaultProps,s=t.foldedComponentIds,u=t.shouldForwardProp,d=t.styledComponentId,f=t.target,h=function(e,t,n){void 0===e&&(e=x);var r=p({},t,{theme:e}),a={};return n.forEach(function(e){var t,n,i,o=e;for(t in b(o)&&(o=o(r)),o)r[t]=a[t]="className"===t?(n=a[t],i=o[t],n&&i?n+" "+i:n||i):o[t]}),[r,a]}(be(n,(0,e.useContext)(Pe),l)||x,n,i),m=h[0],g=h[1],v=function(e,t,n){var r=ie(),a=oe();return t?e.generateAndInjectStyles(x,r,a):e.generateAndInjectStyles(n,r,a)}(o,a,m),y=r,w=g.$as||n.$as||g.as||n.as||f,k=Se(w),S=g!==n?p({},n,{},g):n,C={};for(var E in S)"$"!==E[0]&&"as"!==E&&("forwardedAs"===E?C.as=S[E]:(u?u(E,c,w):!k||c(E))&&(C[E]=S[E]));return n.style&&g.style!==n.style&&(C.style=p({},n.style,{},g.style)),C.className=Array.prototype.concat(s,d,v!==d?v:null,n.className,g.className).filter(Boolean).join(" "),C.ref=y,(0,e.createElement)(w,C)}(S,t,n,E)};return _.displayName=h,(S=e.forwardRef(_)).attrs=w,S.componentStyle=C,S.displayName=h,S.shouldForwardProp=k,S.foldedComponentIds=a?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):g,S.styledComponentId=m,S.target=a?t.target:t,S.withComponent=function(e){var t=n.componentId,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(n,["componentId"]),i=t&&t+"-"+(Se(e)?e:we(v(e)));return Te(e,p({},a,{attrs:w,componentId:i}),r)},Object.defineProperty(S,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=a?je({},t.defaultProps,e):e}}),Object.defineProperty(S,"toString",{value:function(){return"."+S.styledComponentId}}),i&&f()(S,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),S}var Ne=function(e){return function e(t,n,a){if(void 0===a&&(a=x),!(0,r.Hy)(n))return C(1,String(n));var i=function(){return t(n,a,xe.apply(void 0,arguments))};return i.withConfig=function(r){return e(t,n,p({},a,{},r))},i.attrs=function(r){return e(t,n,p({},a,{attrs:Array.prototype.concat(a.attrs,r).filter(Boolean)}))},i}(Te,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Ne[e]=Ne(e)});!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=q(e),W.registerId(this.componentId+1)}var t=e.prototype;t.createStyles=function(e,t,n,r){var a=r(me(this.rules,t,n,r).join(""),""),i=this.componentId+e;n.insertRules(i,i,a)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,n,r){e>2&&W.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)}}();!function(){function t(){var t=this;this._emitSheetCSS=function(){var e=t.instance.toString();if(!e)return"";var n=I();return"<style "+[n&&'nonce="'+n+'"',w+'="true"','data-styled-version="5.3.11"'].filter(Boolean).join(" ")+">"+e+"</style>"},this.getStyleTags=function(){return t.sealed?C(2):t._emitSheetCSS()},this.getStyleElement=function(){var n;if(t.sealed)return C(2);var r=((n={})[w]="",n["data-styled-version"]="5.3.11",n.dangerouslySetInnerHTML={__html:t.instance.toString()},n),a=I();return a&&(r.nonce=a),[e.createElement("style",p({},r,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new W({isServer:!0}),this.sealed=!1}var n=t.prototype;n.collectStyles=function(t){return this.sealed?C(2):e.createElement(le,{sheet:this.instance},t)},n.interleaveWithNodeStream=function(e){return C(3)}}();const Oe=Ne;var Re=n(579);const Le=()=>(0,Re.jsx)("header",{className:"bg-white py-2 px-4 border-b border-gray-200",children:(0,Re.jsxs)("div",{className:"max-w-4xl mx-auto flex items-center justify-between",children:[(0,Re.jsxs)("div",{className:"flex items-center gap-2",children:[(0,Re.jsx)("img",{src:"/img/booksori_logo.png",alt:"\ubd81\uc18c\ub9ac \ub85c\uace0",className:"logo",style:{width:"200px",height:"auto",maxWidth:"100%"}}),(0,Re.jsx)("h1",{className:"text-xl font-bold text-primary md:text-2xl",children:"\ubd81\uc18c\ub9ac"})]}),(0,Re.jsx)("p",{className:"text-xs text-gray-600 hidden sm:block md:text-sm",children:"\uc6b0\ub9ac \ub3d9\ub124 \ub3c4\uc11c\uad00 \ucc45\uc744 \ud55c\ub208\uc5d0"})]})}),Ae=[{id:"1",name:"\uacbd\uae30\ub3c4\ub9bd\uc911\uc559\ub3c4\uc11c\uad00",address:"\uacbd\uae30 \uc218\uc6d0\uc2dc \uc601\ud1b5\uad6c \uc6d4\ub4dc\ucef5\ub85c 235",phone:"031-249-4800",hours:"09:00-18:00",website:"https://www.library.kr/",distance:.8,coordinates:{lat:37.299,lng:127.07},type:"\uacf5\uacf5\ub3c4\uc11c\uad00"},{id:"2",name:"\uc218\uc6d0\uc2dc\ub9bd\uc911\uc559\ub3c4\uc11c\uad00",address:"\uacbd\uae30 \uc218\uc6d0\uc2dc \uc601\ud1b5\uad6c \uad11\uad50\ub85c 183",phone:"031-228-4300",hours:"09:00-22:00",website:"https://www.suwonlib.go.kr/",distance:1.2,coordinates:{lat:37.295,lng:127.075},type:"\uacf5\uacf5\ub3c4\uc11c\uad00"},{id:"3",name:"\uc601\ud1b5\uad6c\ub9bd\ub3c4\uc11c\uad00",address:"\uacbd\uae30 \uc218\uc6d0\uc2dc \uc601\ud1b5\uad6c \uc601\ud1b5\ub3d9 999-1",phone:"031-228-4350",hours:"09:00-20:00",website:"https://www.suwonlib.go.kr/",distance:1.5,coordinates:{lat:37.293,lng:127.073},type:"\uad6c\ub9bd\ub3c4\uc11c\uad00"},{id:"4",name:"\uad11\uad50\uc791\uc740\ub3c4\uc11c\uad00",address:"\uacbd\uae30 \uc218\uc6d0\uc2dc \uc601\ud1b5\uad6c \uad11\uad50\ub3d9 1275",phone:"031-228-4380",hours:"10:00-18:00",website:"",distance:1.8,coordinates:{lat:37.291,lng:127.077},type:"\uc791\uc740\ub3c4\uc11c\uad00"},{id:"5",name:"\ub9dd\ud3ec\uc791\uc740\ub3c4\uc11c\uad00",address:"\uacbd\uae30 \uc218\uc6d0\uc2dc \uc601\ud1b5\uad6c \ub9dd\ud3ec\ub3d9 578-2",phone:"031-228-4390",hours:"10:00-18:00",website:"",distance:2.1,coordinates:{lat:37.285,lng:127.065},type:"\uc791\uc740\ub3c4\uc11c\uad00"},{id:"6",name:"\uc131\ub0a8\uc2dc\ub9bd\uc911\uc559\ub3c4\uc11c\uad00",address:"\uacbd\uae30 \uc131\ub0a8\uc2dc \ubd84\ub2f9\uad6c \uc591\ud604\ub85c 346",phone:"031-729-4600",hours:"09:00-18:00",website:"https://www.snlib.go.kr/",distance:2.5,coordinates:{lat:37.35,lng:127.105},type:"\uacf5\uacf5\ub3c4\uc11c\uad00"},{id:"7",name:"\ubd84\ub2f9\uad6c\ub9bd\uc815\uc790\ub3c4\uc11c\uad00",address:"\uacbd\uae30 \uc131\ub0a8\uc2dc \ubd84\ub2f9\uad6c \uc815\uc790\ub3d9 178-1",phone:"031-729-4650",hours:"09:00-20:00",website:"https://www.snlib.go.kr/",distance:2.8,coordinates:{lat:37.365,lng:127.11},type:"\uad6c\ub9bd\ub3c4\uc11c\uad00"},{id:"8",name:"\uc11c\ud604\uc791\uc740\ub3c4\uc11c\uad00",address:"\uacbd\uae30 \uc131\ub0a8\uc2dc \ubd84\ub2f9\uad6c \uc11c\ud604\ub3d9 271-3",phone:"031-729-4670",hours:"10:00-18:00",website:"",distance:3.1,coordinates:{lat:37.348,lng:127.123},type:"\uc791\uc740\ub3c4\uc11c\uad00"},{id:"9",name:"\uc57c\ud0d1\uc791\uc740\ub3c4\uc11c\uad00",address:"\uacbd\uae30 \uc131\ub0a8\uc2dc \ubd84\ub2f9\uad6c \uc57c\ud0d1\ub3d9 344-10",phone:"031-729-4680",hours:"10:00-18:00",website:"",distance:3.3,coordinates:{lat:37.341,lng:127.128},type:"\uc791\uc740\ub3c4\uc11c\uad00"},{id:"10",name:"\uace0\uc591\uc2dc\ub9bd\uc911\uc559\ub3c4\uc11c\uad00",address:"\uacbd\uae30 \uace0\uc591\uc2dc \ub355\uc591\uad6c \uace0\uc591\ub300\ub85c 1955",phone:"031-8075-9300",hours:"09:00-18:00",website:"https://www.goyanglib.go.kr/",distance:4.2,coordinates:{lat:37.65,lng:126.83},type:"\uacf5\uacf5\ub3c4\uc11c\uad00"},{id:"11",name:"\uc77c\uc0b0\ub3d9\uad6c\ub9bd\ub3c4\uc11c\uad00",address:"\uacbd\uae30 \uace0\uc591\uc2dc \uc77c\uc0b0\ub3d9\uad6c \ubc31\uc11d\ub3d9 1256",phone:"031-8075-9350",hours:"09:00-20:00",website:"https://www.goyanglib.go.kr/",distance:4.5,coordinates:{lat:37.67,lng:126.775},type:"\uad6c\ub9bd\ub3c4\uc11c\uad00"},{id:"12",name:"\ubc31\uc11d\uc791\uc740\ub3c4\uc11c\uad00",address:"\uacbd\uae30 \uace0\uc591\uc2dc \uc77c\uc0b0\ub3d9\uad6c \ubc31\uc11d\ub3d9 1234-5",phone:"031-8075-9380",hours:"10:00-18:00",website:"",distance:4.8,coordinates:{lat:37.675,lng:126.78},type:"\uc791\uc740\ub3c4\uc11c\uad00"},{id:"13",name:"\ub9c8\ub450\uc791\uc740\ub3c4\uc11c\uad00",address:"\uacbd\uae30 \uace0\uc591\uc2dc \uc77c\uc0b0\ub3d9\uad6c \ub9c8\ub450\ub3d9 775-2",phone:"031-8075-9390",hours:"10:00-18:00",website:"",distance:5.1,coordinates:{lat:37.655,lng:126.785},type:"\uc791\uc740\ub3c4\uc11c\uad00"},{id:"14",name:"\ubd80\ucc9c\uc2dc\ub9bd\uc911\uc559\ub3c4\uc11c\uad00",address:"\uacbd\uae30 \ubd80\ucc9c\uc2dc \uc6d0\ubbf8\uad6c \uae38\uc8fc\ub85c 1",phone:"032-625-4700",hours:"09:00-18:00",website:"https://www.bclib.go.kr/",distance:3.1,coordinates:{lat:37.49,lng:126.783},type:"\uacf5\uacf5\ub3c4\uc11c\uad00"},{id:"15",name:"\uc6d0\ubbf8\uad6c\ub9bd\ub3c4\uc11c\uad00",address:"\uacbd\uae30 \ubd80\ucc9c\uc2dc \uc6d0\ubbf8\uad6c \uc911\ub3d9 1033-3",phone:"032-625-4750",hours:"09:00-20:00",website:"https://www.bclib.go.kr/",distance:3.4,coordinates:{lat:37.485,lng:126.788},type:"\uad6c\ub9bd\ub3c4\uc11c\uad00"},{id:"16",name:"\uc911\ub3d9\uc791\uc740\ub3c4\uc11c\uad00",address:"\uacbd\uae30 \ubd80\ucc9c\uc2dc \uc6d0\ubbf8\uad6c \uc911\ub3d9 1178-1",phone:"032-625-4780",hours:"10:00-18:00",website:"",distance:3.7,coordinates:{lat:37.488,lng:126.791},type:"\uc791\uc740\ub3c4\uc11c\uad00"},{id:"17",name:"\uc5ed\uace1\uc791\uc740\ub3c4\uc11c\uad00",address:"\uacbd\uae30 \ubd80\ucc9c\uc2dc \uc6d0\ubbf8\uad6c \uc5ed\uace1\ub3d9 201-8",phone:"032-625-4790",hours:"10:00-18:00",website:"",distance:4,coordinates:{lat:37.486,lng:126.794},type:"\uc791\uc740\ub3c4\uc11c\uad00"},{id:"18",name:"\uc548\uc591\uc2dc\ub9bd\uc911\uc559\ub3c4\uc11c\uad00",address:"\uacbd\uae30 \uc548\uc591\uc2dc \ub9cc\uc548\uad6c \ubb38\uc608\ub85c 30",phone:"031-389-0800",hours:"09:00-22:00",website:"https://www.aylib.go.kr/",distance:3.8,coordinates:{lat:37.4,lng:126.95},type:"\uacf5\uacf5\ub3c4\uc11c\uad00"},{id:"19",name:"\ub9cc\uc548\uad6c\ub9bd\ub3c4\uc11c\uad00",address:"\uacbd\uae30 \uc548\uc591\uc2dc \ub9cc\uc548\uad6c \uc548\uc591\ub3d9 678-49",phone:"031-389-0850",hours:"09:00-20:00",website:"https://www.aylib.go.kr/",distance:4.1,coordinates:{lat:37.395,lng:126.955},type:"\uad6c\ub9bd\ub3c4\uc11c\uad00"},{id:"20",name:"\uc548\uc591\ub3d9\uc791\uc740\ub3c4\uc11c\uad00",address:"\uacbd\uae30 \uc548\uc591\uc2dc \ub9cc\uc548\uad6c \uc548\uc591\ub3d9 123-45",phone:"031-389-0880",hours:"10:00-18:00",website:"",distance:4.4,coordinates:{lat:37.398,lng:126.958},type:"\uc791\uc740\ub3c4\uc11c\uad00"},{id:"21",name:"\uc6a9\uc778\uc2dc\ub9bd\uc911\uc559\ub3c4\uc11c\uad00",address:"\uacbd\uae30 \uc6a9\uc778\uc2dc \ucc98\uc778\uad6c \uc911\ubd80\ub300\ub85c 1199",phone:"031-324-4800",hours:"09:00-18:00",website:"https://www.yonginlib.go.kr/",distance:4.8,coordinates:{lat:37.23,lng:127.208},type:"\uacf5\uacf5\ub3c4\uc11c\uad00"},{id:"22",name:"\uc218\uc9c0\uad6c\ub9bd\ub3c4\uc11c\uad00",address:"\uacbd\uae30 \uc6a9\uc778\uc2dc \uc218\uc9c0\uad6c \uc218\uc9c0\ub3d9 1234-1",phone:"031-324-4850",hours:"09:00-20:00",website:"https://www.yonginlib.go.kr/",distance:5.1,coordinates:{lat:37.325,lng:127.095},type:"\uad6c\ub9bd\ub3c4\uc11c\uad00"},{id:"23",name:"\ud48d\ub355\ucc9c\uc791\uc740\ub3c4\uc11c\uad00",address:"\uacbd\uae30 \uc6a9\uc778\uc2dc \uc218\uc9c0\uad6c \ud48d\ub355\ucc9c\ub3d9 1167-6",phone:"031-324-4880",hours:"10:00-18:00",website:"",distance:5.4,coordinates:{lat:37.328,lng:127.098},type:"\uc791\uc740\ub3c4\uc11c\uad00"},{id:"24",name:"\uc758\uc815\ubd80\uc2dc\ub9bd\uc911\uc559\ub3c4\uc11c\uad00",address:"\uacbd\uae30 \uc758\uc815\ubd80\uc2dc \uccb4\uc721\ub85c 99",phone:"031-828-4800",hours:"09:00-18:00",website:"https://www.ujblib.go.kr/",distance:5.3,coordinates:{lat:37.738,lng:127.033},type:"\uacf5\uacf5\ub3c4\uc11c\uad00"},{id:"25",name:"\uac00\ub2a5\ub3d9\uc791\uc740\ub3c4\uc11c\uad00",address:"\uacbd\uae30 \uc758\uc815\ubd80\uc2dc \uac00\ub2a5\ub3d9 487-3",phone:"031-828-4850",hours:"10:00-18:00",website:"",distance:5.6,coordinates:{lat:37.741,lng:127.038},type:"\uc791\uc740\ub3c4\uc11c\uad00"},{id:"26",name:"\uc758\uc815\ubd80\ub3d9\uc791\uc740\ub3c4\uc11c\uad00",address:"\uacbd\uae30 \uc758\uc815\ubd80\uc2dc \uc758\uc815\ubd80\ub3d9 195-12",phone:"031-828-4860",hours:"10:00-18:00",website:"",distance:5.9,coordinates:{lat:37.744,lng:127.041},type:"\uc791\uc740\ub3c4\uc11c\uad00"}],Ie=[{id:"1",title:"\ub514\uc9c0\ud138 \uc2dc\ub300\uc758 \ub3c4\uc11c\uad00 \uacbd\uc601",author:"\uae40\ub3c4\uc11c",isbn:"9788901234567",publisher:"\ub3c4\uc11c\ucd9c\ud310\uc0ac",availability:{1:{available:!0,totalCopies:3,checkedOut:1},2:{available:!1,totalCopies:2,checkedOut:2},3:{available:!0,totalCopies:4,checkedOut:0},4:{available:!0,totalCopies:2,checkedOut:1},5:{available:!1,totalCopies:1,checkedOut:1}}},{id:"2",title:"\uacbd\uae30\ub3c4 \ubb38\ud654\uc640 \uc5ed\uc0ac",author:"\uc774\ubb38\ud654",isbn:"9788901234568",publisher:"\uacbd\uae30\ucd9c\ud310\uc0ac",availability:{1:{available:!0,totalCopies:5,checkedOut:2},2:{available:!0,totalCopies:3,checkedOut:0},3:{available:!0,totalCopies:2,checkedOut:1},4:{available:!1,totalCopies:2,checkedOut:2},5:{available:!0,totalCopies:3,checkedOut:1}}},{id:"3",title:"\uc2a4\ub9c8\ud2b8 \uc2dc\ub2c8\uc5b4 \uc0dd\ud65c \uac00\uc774\ub4dc",author:"\ubc15\uc2dc\ub2c8\uc5b4",isbn:"9788901234569",publisher:"\uc2dc\ub2c8\uc5b4\ubd81\uc2a4",availability:{1:{available:!1,totalCopies:2,checkedOut:2},2:{available:!0,totalCopies:4,checkedOut:1},3:{available:!0,totalCopies:3,checkedOut:0},4:{available:!0,totalCopies:1,checkedOut:0},5:{available:!0,totalCopies:2,checkedOut:0}}}],De=[{id:"1",name:"\uc2dc\ub2c8\uc5b4 \ubb38\ud559 \ub3d9\ud638\ud68c",description:"50\ub300 \uc774\uc0c1\uc744 \uc704\ud55c \ubb38\ud559 \uc791\ud488 \uc77d\uae30 \ubaa8\uc784",meetingDay:"\ub9e4\uc8fc \uc218\uc694\uc77c",meetingTime:"14:00-16:00",currentBook:"\ub514\uc9c0\ud138 \uc2dc\ub300\uc758 \ub3c4\uc11c\uad00 \uacbd\uc601",members:12,maxMembers:15,libraryId:"1",libraryName:"\uacbd\uae30\ub3c4\ub9bd\uc911\uc559\ub3c4\uc11c\uad00"},{id:"2",name:"\uc5ed\uc0ac \ud0d0\uad6c \ud074\ub7fd",description:"\uc6b0\ub9ac \uc9c0\uc5ed \uc5ed\uc0ac\uc640 \ubb38\ud654\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf4\ub294 \ubaa8\uc784",meetingDay:"\uaca9\uc8fc \ud1a0\uc694\uc77c",meetingTime:"10:00-12:00",currentBook:"\uacbd\uae30\ub3c4 \ubb38\ud654\uc640 \uc5ed\uc0ac",members:8,maxMembers:12,libraryId:"2",libraryName:"\uc218\uc6d0\uc2dc\ub9bd\uc911\uc559\ub3c4\uc11c\uad00"},{id:"3",name:"\ub514\uc9c0\ud138 \ub77c\uc774\ud504 \ubaa8\uc784",description:"\ub514\uc9c0\ud138 \uae30\uae30 \ud65c\uc6a9\ubc95\uacfc \uc2a4\ub9c8\ud2b8\ud55c \uc0dd\ud65c\uc744 \ubc30\uc6b0\ub294 \ubaa8\uc784",meetingDay:"\ub9e4\uc8fc \uae08\uc694\uc77c",meetingTime:"15:00-17:00",currentBook:"\uc2a4\ub9c8\ud2b8 \uc2dc\ub2c8\uc5b4 \uc0dd\ud65c \uac00\uc774\ub4dc",members:15,maxMembers:20,libraryId:"3",libraryName:"\uc131\ub0a8\uc2dc\ub9bd\uc911\uc559\ub3c4\uc11c\uad00"}];class Me{constructor(e){this.config=void 0,this.config=e}async getLibraries(e,t){try{const e="https://openapi.gg.go.kr/LibraryStatus",t=new URLSearchParams({KEY:this.config.apiKey,Type:"json",pIndex:"1",pSize:"100"}),n=await fetch(`${e}?${t}`);if(!n.ok)throw new Error(`API \ud638\ucd9c \uc2e4\ud328: ${n.status}`);const r=await n.json();if(r.LibraryStatus&&r.LibraryStatus[1].row){return r.LibraryStatus[1].row.map((e,t)=>({id:(t+1).toString(),name:e.LBRRY_NM||"\ub3c4\uc11c\uad00\uba85 \uc5c6\uc74c",address:e.REFINE_ROADNM_ADDR||e.REFINE_LOTNO_ADDR||"\uc8fc\uc18c \uc5c6\uc74c",phone:e.TELNO||"\uc804\ud654\ubc88\ud638 \uc5c6\uc74c",hours:"09:00-18:00",website:e.HMPG_ADDR||"",distance:Math.round(5*Math.random()*10)/10,coordinates:{lat:parseFloat(e.REFINE_WGS84_LAT)||37.5,lng:parseFloat(e.REFINE_WGS84_LOGT)||127},type:"\uacf5\uacf5\ub3c4\uc11c\uad00"}))}return console.warn("API \uc751\ub2f5 \uad6c\uc870\uac00 \uc608\uc0c1\uacfc \ub2e4\ub984, \ub354\ubbf8 \ub370\uc774\ud130 \uc0ac\uc6a9"),Ae}catch(n){return console.error("\ub3c4\uc11c\uad00 \uc815\ubcf4 \uc870\ud68c \uc2e4\ud328:",n),console.log("\ub354\ubbf8 \ub370\uc774\ud130\ub85c \ub300\uccb4\ud569\ub2c8\ub2e4."),Ae}}async searchBooks(e){try{return Ie.filter(t=>t.title.includes(e.query)||t.author.includes(e.query))}catch(t){return console.error("\ub3c4\uc11c \uac80\uc0c9 \uc2e4\ud328:",t),[]}}async reserveBook(e,t,n){try{return console.log(`\ub3c4\uc11c \uc608\uc57d \uc694\uccad: \ub3c4\uc11c ${e}, \ub3c4\uc11c\uad00 ${t}, \uc0ac\uc6a9\uc790 ${n}`),!0}catch(r){return console.error("\ub3c4\uc11c \uc608\uc57d \uc2e4\ud328:",r),!1}}async getReadingGroups(e){try{return e?De.filter(t=>t.libraryId===e):De}catch(t){return console.error("\ub3c5\uc11c \ubaa8\uc784 \uc870\ud68c \uc2e4\ud328:",t),[]}}async joinReadingGroup(e,t){try{return console.log(`\ub3c5\uc11c \ubaa8\uc784 \uac00\uc785 \uc694\uccad: \ubaa8\uc784 ${e}, \uc0ac\uc6a9\uc790 ${t}`),!0}catch(n){return console.error("\ub3c5\uc11c \ubaa8\uc784 \uac00\uc785 \uc2e4\ud328:",n),!1}}async createReadingGroup(e){try{return console.log("\ub3c5\uc11c \ubaa8\uc784 \uc0dd\uc131 \uc694\uccad:",e),!0}catch(t){return console.error("\ub3c5\uc11c \ubaa8\uc784 \uc0dd\uc131 \uc2e4\ud328:",t),!1}}}new Me({baseURL:{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_GYEONGGI_API_URL||"https://data.gg.go.kr/portal/data/service",apiKey:{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_GYEONGGI_API_KEY||"YOUR_API_KEY_HERE"});const Fe="651824a6d5a5d765b513f7f8059ef5ffb2ac3c30f15f0114a8764076c8b902b8",$e={"\uac15\ub0a8\uad6c":"31","\uc11c\ucd08\uad6c":"31","\uc218\uc6d0\uc2dc":"31","\uc131\ub0a8\uc2dc":"31","\ubd80\ucc9c\uc2dc":"31","\uc804\uccb4":"31"},Ue=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"\uc804\uccb4",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"2025-01-01",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"2025-07-12";try{var r;const a=`http://data4library.kr/api/loanItemSrch?${new URLSearchParams({authKey:Fe,startDt:t,endDt:n,age:"40;50;60",region:$e[e]||"31",format:"json",pageNo:"1",pageSize:"5"})}`;console.log("API \ud638\ucd9c URL:",a);const i=await fetch(a);if(!i.ok)throw new Error(`API \ud638\ucd9c \uc2e4\ud328: ${i.status}`);const o=await i.json();if(o.response&&o.response.error)throw console.warn("API \uc5d0\ub7ec:",o.response.error),o.response.error.includes("\ud65c\uc131\ud654")&&console.log("\ud83d\udca1 API \ud0a4\uac00 \uc544\uc9c1 \ud65c\uc131\ud654\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4. \ub354\ubbf8 \ub370\uc774\ud130\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),new Error(o.response.error);return(null===(r=o.response.docs)||void 0===r?void 0:r.map((e,t)=>({id:e.isbn||`book_${t}`,title:e.title||"\uc81c\ubaa9 \uc5c6\uc74c",author:e.author||"\uc791\uac00 \ubbf8\uc0c1",publisher:e.publisher||"\ucd9c\ud310\uc0ac \ubbf8\uc0c1",isbn:e.isbn||"",loanCount:e.loanCount||0,category:e.category||"\uc77c\ubc18",publishYear:e.publishYear||"2023"})))||[]}catch(a){return console.error("\uc778\uae30\ub3c4\uc11c API \ud638\ucd9c \uc624\ub958:",a),He()}},He=()=>[{id:"1",title:"82\ub144\uc0dd \uae40\uc9c0\uc601",author:"\uc870\ub0a8\uc8fc",publisher:"\ubbfc\uc74c\uc0ac",isbn:"9788937473722",loanCount:1247,category:"\uc18c\uc124",publishYear:"2016"},{id:"2",title:"\ubbf8\ub4dc\ub098\uc787 \ub77c\uc774\ube0c\ub7ec\ub9ac",author:"\ub9e4\ud2b8 \ud5e4\uc774\uadf8",publisher:"\uc778\ud50c\ub8e8\uc5d4\uc15c",isbn:"9791197377109",loanCount:1156,category:"\uc18c\uc124",publishYear:"2020"},{id:"3",title:"\uc644\uc804\ud55c \ud589\ubcf5",author:"\uc815\uc720\uc815",publisher:"\uc740\ud589\ub098\ubb34",isbn:"9788956609485",loanCount:1089,category:"\uc18c\uc124",publishYear:"2021"},{id:"4",title:"\uc0ac\ud53c\uc5d4\uc2a4",author:"\uc720\ubc1c \ud558\ub77c\ub9ac",publisher:"\uae40\uc601\uc0ac",isbn:"9788934972464",loanCount:987,category:"\uc778\ubb38",publishYear:"2015"},{id:"5",title:"\uc544\ubaac\ub4dc",author:"\uc190\uc6d0\ud3c9",publisher:"\ucc3d\ube44",isbn:"9788936434267",loanCount:876,category:"\uc18c\uc124",publishYear:"2017"}],We=Oe.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 25px;
  background: #f8f9fa;
  border-radius: 12px;
  border: 2px solid #e9ecef;
`,Be=Oe.h3`
  font-size: 22px;
  color: #2c3e50;
  margin: 0;
  text-align: center;
  font-weight: 600;
`,Ve=Oe.div`
  display: flex;
  gap: 15px;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
    
    button {
      width: 100%;
      min-height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
  }
`,Ke=Oe.input`
  flex: 1;
  padding: 16px 18px;
  font-size: 16px;
  border: 2px solid #e9ecef;
  border-radius: 10px;
  transition: all 0.3s ease;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
    border-color: #4a90e2;
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
  }
  
  &::placeholder {
    color: #999;
    font-size: 15px;
  }
  
  @media (max-width: 768px) {
    padding: 14px 16px;
    font-size: 15px;
    border-radius: 8px;
    
    &::placeholder {
      font-size: 14px;
    }
  }
  
  @media (max-width: 480px) {
    padding: 12px 14px;
    font-size: 15px;
    
    &::placeholder {
      font-size: 14px;
    }
  }
`,Qe=Oe.button`
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  min-width: 150px;
  
  &:hover {
    background: #3a7538;
    transform: translateY(-2px);
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
  }
`,Ye=Oe.div`
  text-align: center;
  font-size: 16px;
  padding: 15px;
  border-radius: 8px;
  background: #e3f2fd;
  color: #1976d2;
  font-weight: 500;
`,qe=Oe.div`
  color: #d32f2f;
  font-size: 16px;
  text-align: center;
  padding: 15px;
  background: #ffebee;
  border-radius: 8px;
  border-left: 4px solid #d32f2f;
`,Ge=Oe.div`
  text-align: center;
  font-size: 16px;
  color: #666;
  line-height: 1.5;
`,Xe=t=>{let{onLibrariesUpdate:n,selectedRegion:r,onRegionUpdate:a}=t;const[i,o]=(0,e.useState)(""),[l,s]=(0,e.useState)(!1),[u,c]=(0,e.useState)(""),d=new Me({baseURL:"https://openapi.gg.go.kr",apiKey:{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_GYEONGGI_API_KEY||"demo_key"}),f=async()=>{if(i.trim()){s(!0),c("");try{const e=await d.getLibraries();console.log("API\uc5d0\uc11c \ubc1b\uc740 \ub3c4\uc11c\uad00 \ub370\uc774\ud130:",e);const t=e.filter(e=>{const t=i.split(" ").filter(e=>e.length>0),n=i.toLowerCase(),r=(e.address+" "+e.name).toLowerCase();return t.some(e=>r.includes(e.toLowerCase()))||r.includes(n)}).map((e,t)=>({id:t+1,name:e.name,address:e.address,distance:e.distance,phone:e.phone,hours:e.hours,status:"\uc6b4\uc601\uc911"}));console.log("\ud544\ud130\ub9c1\ub41c \ub3c4\uc11c\uad00:",t),console.log("\uc785\ub825\ub41c \uc9c0\uc5ed:",i);const r=t.length>0?t:e.map((e,t)=>({id:t+1,name:e.name,address:e.address,distance:e.distance,phone:e.phone,hours:e.hours,status:"\uc6b4\uc601\uc911"}));console.log("\ucd5c\uc885 \ub3c4\uc11c\uad00 \ubaa9\ub85d:",r),n(r),a(i),r.length>0&&console.log(`\u2705 ${r.length}\uac1c\uc758 \ub3c4\uc11c\uad00\uc744 \ucc3e\uc558\uc2b5\ub2c8\ub2e4!`)}catch(u){console.error("\ub3c4\uc11c\uad00 \uac80\uc0c9 \uc911 \uc624\ub958 \ubc1c\uc0dd:",u),c("\ub3c4\uc11c\uad00 \uac80\uc0c9 \uc911 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.")}finally{s(!1)}}else c("\uc9c0\uc5ed\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.")};return(0,Re.jsxs)(We,{children:[(0,Re.jsx)(Be,{children:"\ud83d\udccd \uc9c0\uc5ed \uc120\ud0dd"}),(0,Re.jsxs)(Ge,{children:["\uac70\uc8fc\ud558\uc2dc\ub294 \uc9c0\uc5ed\uc744 \uc785\ub825\ud558\uc2dc\uba74 \ud574\ub2f9 \uc9c0\uc5ed \ub3c4\uc11c\uad00\ub4e4\uc758",(0,Re.jsx)("br",{}),"\ub3c4\uc11c \ub300\ucd9c \ud604\ud669\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,Re.jsx)("br",{}),(0,Re.jsx)("br",{}),(0,Re.jsx)("strong",{children:"\ud83d\udca1 \uc9c0\uc5ed \uac80\uc0c9 \ud301:"}),(0,Re.jsx)("br",{}),"\u2022 \uc2dc \uc774\ub984\ub9cc \uc785\ub825\ud558\uc154\ub3c4 \ub429\ub2c8\ub2e4 (\uc608: \uc218\uc6d0, \uc131\ub0a8, \uace0\uc591)",(0,Re.jsx)("br",{}),'\u2022 \uc804\uccb4 \ub3c4\uc11c\uad00\uc744 \ubcf4\ub824\uba74 "\uacbd\uae30"\ub97c \uc785\ub825\ud558\uc138\uc694']}),(0,Re.jsxs)(Ve,{children:[(0,Re.jsx)(Ke,{type:"text",placeholder:"\uc9c0\uc5ed\uba85 \uc785\ub825 (\uc608: \uc218\uc6d0\uc2dc, \uc131\ub0a8\uc2dc, \ubd80\ucc9c\uc2dc)",value:i,onChange:e=>o(e.target.value),onKeyPress:e=>{"Enter"===e.key&&f()}}),(0,Re.jsx)(Qe,{onClick:f,disabled:l,children:l?"\uac80\uc0c9\uc911...":"\ud83d\udd0d \ub3c4\uc11c\uad00 \ucc3e\uae30"})]}),r&&(0,Re.jsxs)(Ye,{children:["\u2705 ",(0,Re.jsx)("strong",{children:r})," \uc9c0\uc5ed\uc758 \ub3c4\uc11c\uad00 \uc815\ubcf4\ub97c \ubd88\ub7ec\uc654\uc2b5\ub2c8\ub2e4!",(0,Re.jsx)("br",{}),"\uc704\uc5d0\uc11c \uac01 \ub3c4\uc11c\uad00\ubcc4 \ub300\ucd9c \ud604\ud669\uc744 \ud655\uc778\ud574\ubcf4\uc138\uc694 \ud83d\udcda"]}),u&&(0,Re.jsxs)(qe,{children:["\u26a0\ufe0f ",u]})]})},Ze=Oe.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Je=Oe.form`
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`,et=Oe.input`
  flex: 1;
  padding: 12px 16px;
  font-size: 16px;
  border: 2px solid #e5e5e5;
  border-radius: 8px;
  background: white;
  font-family: 'Pretendard', 'Arita Dotum', 'Noto Sans KR', sans-serif;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(76, 140, 74, 0.1);
  }
  
  @media (max-width: 768px) {
    padding: 10px 14px;
    font-size: 15px;
  }
`,tt=Oe.button`
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  white-space: nowrap;
  font-family: 'Pretendard', 'Arita Dotum', 'Noto Sans KR', sans-serif;
  
  &:hover {
    background: #3a7538;
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
  
  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 15px;
  }
`,nt=Oe.div`
  text-align: center;
  padding: 40px;
  color: #666;
  font-size: 18px;
  font-family: 'Pretendard', 'Arita Dotum', 'Noto Sans KR', sans-serif;
`,rt=Oe.div`
  text-align: center;
  padding: 60px 20px;
  color: #666;
  font-family: 'Pretendard', 'Arita Dotum', 'Noto Sans KR', sans-serif;
  
  .emoji {
    font-size: 48px;
    margin-bottom: 16px;
  }
  
  .title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 8px;
    color: #333;
  }
  
  .subtitle {
    font-size: 16px;
    color: #666;
    margin-bottom: 24px;
  }
`,at=Oe.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,it=Oe.div`
  background: white;
  border: 2px solid #e5e5e5;
  border-radius: 12px;
  padding: 20px;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--primary-color);
    box-shadow: 0 4px 12px rgba(76, 140, 74, 0.1);
  }
  
  @media (max-width: 768px) {
    padding: 16px;
  }
`,ot=Oe.h4`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #333;
  line-height: 1.4;
  font-family: 'Pretendard', 'Arita Dotum', 'Noto Sans KR', sans-serif;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`,lt=Oe.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  color: #666;
  font-size: 14px;
  font-family: 'Pretendard', 'Arita Dotum', 'Noto Sans KR', sans-serif;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 4px;
  }
`,st=Oe.div`
  margin-top: 16px;
`,ut=Oe.h5`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #333;
  font-family: 'Pretendard', 'Arita Dotum', 'Noto Sans KR', sans-serif;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`,ct=Oe.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,dt=Oe.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background: #f8f9fa;
  border-radius: 8px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`,ft=Oe.div`
  flex: 1;
  font-family: 'Pretendard', 'Arita Dotum', 'Noto Sans KR', sans-serif;
  
  .name {
    font-weight: 600;
    color: #333;
    margin-bottom: 4px;
  }
  
  .address {
    font-size: 13px;
    color: #666;
  }
`,pt=Oe.button`
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  font-family: 'Pretendard', 'Arita Dotum', 'Noto Sans KR', sans-serif;
  
  &.available {
    background: var(--primary-color);
    color: white;
  }
  
  &.unavailable {
    background: var(--accent-color);
    color: white;
  }
  
  &:hover {
    opacity: 0.9;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    justify-self: stretch;
  }
`,ht=t=>{let{externalSearchQuery:n,onExternalSearchComplete:r}=t;const[a,i]=(0,e.useState)(""),[o,l]=(0,e.useState)([]),[s,u]=(0,e.useState)(!1),[c,d]=(0,e.useState)(!1),[f,p]=(0,e.useState)(""),[h,m]=(0,e.useState)([]),g=e=>{const t=e.toLowerCase();if(t.includes("\ub3d9")){const t=e.replace("\ub3d9","");return[{id:1,name:`${t}\ub3d9 \uc8fc\ubbfc\uc13c\ud130 \ub3c4\uc11c\uad00`,address:`\uacbd\uae30\ub3c4 ${t}\ub3d9 \uc911\uc559\ub85c 123`,phone:"031-123-4567"},{id:2,name:`${t}\ub3d9 \uad6c\ubbfc\ud68c\uad00 \ub3c4\uc11c\uad00`,address:`\uacbd\uae30\ub3c4 ${t}\ub3d9 \ubcf5\ud569\ubb38\ud654\uc13c\ud130 2\uce35`,phone:"031-234-5678"},{id:3,name:`${t}\ub3d9 \uc791\uc740\ub3c4\uc11c\uad00`,address:`\uacbd\uae30\ub3c4 ${t}\ub3d9 \uc8fc\ud0dd\uac00 \ub0b4 \uc791\uc740\ub3c4\uc11c\uad00`,phone:"031-345-6789"}]}return t.includes("\uc218\uc6d0")?[{id:1,name:"\uc218\uc6d0\uc2dc\ub9bd\ub3c4\uc11c\uad00",address:"\uacbd\uae30\ub3c4 \uc218\uc6d0\uc2dc \uc601\ud1b5\uad6c \uad11\uad50\uc0b0\ub85c 17",phone:"031-228-4311"},{id:2,name:"\uc218\uc6d0\uc601\ud1b5\ub3c4\uc11c\uad00",address:"\uacbd\uae30\ub3c4 \uc218\uc6d0\uc2dc \uc601\ud1b5\uad6c \uc13c\ud2b8\ub7f4\ud0c0\uc6b4\ub85c 22",phone:"031-228-4350"},{id:3,name:"\uc218\uc6d0\ub9dd\ud3ec\ub3c4\uc11c\uad00",address:"\uacbd\uae30\ub3c4 \uc218\uc6d0\uc2dc \uc601\ud1b5\uad6c \ub9dd\ud3ec\ub85c 37",phone:"031-228-4360"}]:t.includes("\uc131\ub0a8")?[{id:1,name:"\uc131\ub0a8\uc2dc\ub9bd\ub3c4\uc11c\uad00",address:"\uacbd\uae30\ub3c4 \uc131\ub0a8\uc2dc \uc218\uc815\uad6c \ud0dc\ud3c9\ub85c 55",phone:"031-729-4600"},{id:2,name:"\uc131\ub0a8\ubd84\ub2f9\ub3c4\uc11c\uad00",address:"\uacbd\uae30\ub3c4 \uc131\ub0a8\uc2dc \ubd84\ub2f9\uad6c \ubd88\uc815\ub85c 90",phone:"031-729-4700"},{id:3,name:"\uc131\ub0a8\uc218\uc815\ub3c4\uc11c\uad00",address:"\uacbd\uae30\ub3c4 \uc131\ub0a8\uc2dc \uc218\uc815\uad6c \uc218\uc815\ub85c 201",phone:"031-729-4800"}]:t.includes("\uc548\uc591")?[{id:1,name:"\uc548\uc591\uc2dc\ub9bd\ub3c4\uc11c\uad00",address:"\uacbd\uae30\ub3c4 \uc548\uc591\uc2dc \ub9cc\uc548\uad6c \ubb38\ud654\ub85c 53",phone:"031-389-0300"},{id:2,name:"\uc548\uc591\ud3c9\ucd0c\ub3c4\uc11c\uad00",address:"\uacbd\uae30\ub3c4 \uc548\uc591\uc2dc \ub3d9\uc548\uad6c \ud3c9\ucd0c\ub300\ub85c 389",phone:"031-389-0400"},{id:3,name:"\uc548\uc591\uc11d\uc218\ub3c4\uc11c\uad00",address:"\uacbd\uae30\ub3c4 \uc548\uc591\uc2dc \ub9cc\uc548\uad6c \uc11d\uc218\ub85c 12",phone:"031-389-0500"}]:t.includes("\uc11c\uc6b8")?[{id:1,name:"\uc11c\uc6b8\uc2dc\ub9bd\uc911\uc559\ub3c4\uc11c\uad00",address:"\uc11c\uc6b8\uc2dc \uc11c\ucd08\uad6c \ub0a8\ubd80\uc21c\ud658\ub85c 2423",phone:"02-2133-0300"},{id:2,name:"\uac15\ub0a8\uad6c\ub9bd\ub3c4\uc11c\uad00",address:"\uc11c\uc6b8\uc2dc \uac15\ub0a8\uad6c \ud14c\ud5e4\ub780\ub85c 123",phone:"02-2133-0400"},{id:3,name:"\ub9c8\ud3ec\uad6c\ub9bd\ub3c4\uc11c\uad00",address:"\uc11c\uc6b8\uc2dc \ub9c8\ud3ec\uad6c \ud64d\uc775\ub85c 45",phone:"02-2133-0500"}]:[{id:1,name:`${e} \uc911\uc559\ub3c4\uc11c\uad00`,address:`${e} \uc911\uc559\ub85c 123`,phone:"031-123-4567"},{id:2,name:`${e} \uc2dc\ub9bd\ub3c4\uc11c\uad00`,address:`${e} \uc2dc\uccad\ub85c 456`,phone:"031-234-5678"},{id:3,name:`${e} \uad6c\ub9bd\ub3c4\uc11c\uad00`,address:`${e} \ubb38\ud654\ub85c 789`,phone:"031-345-6789"}]},x=e=>e.map(e=>({libraryId:e.id,libraryName:e.name,libraryAddress:e.address,libraryPhone:e.phone,available:Math.random()>.3,waitingList:Math.floor(5*Math.random())+1})),b=e=>{u(!0),d(!0);setTimeout(()=>{const t=(t=>{const n=t.toLowerCase();return n.includes("\uc18c\uc124")||n.includes("\ubb38\ud559")?[{id:1,title:"82\ub144\uc0dd \uae40\uc9c0\uc601",author:"\uc870\ub0a8\uc8fc",publisher:"\ubbfc\uc74c\uc0ac"},{id:2,title:"\ubd04\ub0a0\uc740 \uac04\ub2e4",author:"\uae40\uc720\uc815",publisher:"\ubb38\ud559\uacfc\uc9c0\uc131\uc0ac"},{id:3,title:"\ucc44\uc2dd\uc8fc\uc758\uc790",author:"\ud55c\uac15",publisher:"\ucc3d\ube44"}]:n.includes("\uc5ed\uc0ac")||n.includes("\ud55c\uad6d\uc0ac")?[{id:1,title:"\ud55c\uad6d\uc0ac \ud3b8\uc9c0",author:"\ubc15\uc740\ubd09",publisher:"\uc6c5\uc9c4\uc9c0\uc2dd\ud558\uc6b0\uc2a4"},{id:2,title:"\ucd1d, \uade0, \uc1e0",author:"\uc7ac\ub808\ub4dc \ub2e4\uc774\uc544\ubaac\ub4dc",publisher:"\ubb38\ud559\uc0ac\uc0c1"},{id:3,title:"\uc870\uc120\uc655\uc870\uc2e4\ub85d",author:"\uad6d\uc0ac\ud3b8\ucc2c\uc704\uc6d0\ud68c",publisher:"\ud55c\uad6d\ud559\uc911\uc559\uc5f0\uad6c\uc6d0"}]:n.includes("\uacfc\ud559")||n.includes("\uae30\uc220")?[{id:1,title:"\ucf54\uc2a4\ubaa8\uc2a4",author:"\uce7c \uc138\uc774\uac74",publisher:"\uc0ac\uc774\uc5b8\uc2a4\ubd81\uc2a4"},{id:2,title:"\uc774\uae30\uc801 \uc720\uc804\uc790",author:"\ub9ac\ucc98\ub4dc \ub3c4\ud0a8\uc2a4",publisher:"\uc744\uc720\ubb38\ud654\uc0ac"},{id:3,title:"\uc0ac\ud53c\uc5d4\uc2a4",author:"\uc720\ubc1c \ud558\ub77c\ub9ac",publisher:"\uae40\uc601\uc0ac"}]:[{id:1,title:`${e}\uc758 \uc774\ud574`,author:"\uae40\ubbfc\uc218",publisher:"\ud559\ubb38\uc0ac"},{id:2,title:`${e} \uc644\uc804\uc815\ubcf5`,author:"\uc774\uc601\ud76c",publisher:"\uad50\uc721\ucd9c\ud310"},{id:3,title:`${e} \uc785\ubb38\uc11c`,author:"\ubc15\ucca0\uc218",publisher:"\uc9c0\uc2dd\uacf5\ubc29"}]})(e),n=h.length>0?h:g(f||"\uc11c\uc6b8"),r=t.map(e=>({...e,availability:x(n)}));l(r),u(!1)},1e3)};return(0,e.useEffect)(()=>{n&&n.trim()&&(i(n),b(n),r&&r())},[n]),(0,e.useEffect)(()=>{if(f){const e=g(f);if(m(e),o.length>0){const t=o.map(t=>({...t,availability:x(e)}));l(t)}}},[f]),(0,Re.jsxs)(Ze,{children:[(0,Re.jsxs)(Je,{onSubmit:e=>{e.preventDefault(),a.trim()&&b(a.trim())},children:[(0,Re.jsx)(et,{type:"text",placeholder:"\ucc3e\uc73c\uc2dc\ub294 \ub3c4\uc11c\uba85\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694",value:a,onChange:e=>i(e.target.value)}),(0,Re.jsx)(tt,{type:"submit",disabled:s,children:s?"\uac80\uc0c9 \uc911...":"\ud83d\udd0d \uac80\uc0c9"})]}),(0,Re.jsx)(Xe,{onLibrariesUpdate:m,selectedRegion:f,onRegionUpdate:p}),s&&(0,Re.jsx)(nt,{children:"\ud83d\udcda \ub3c4\uc11c\ub97c \uac80\uc0c9\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4..."}),!s&&c&&0===o.length&&(0,Re.jsxs)(rt,{children:[(0,Re.jsx)("div",{className:"emoji",children:"\ud83d\udcd6"}),(0,Re.jsx)("div",{className:"title",children:"\uac80\uc0c9 \uacb0\uacfc\uac00 \uc5c6\uc2b5\ub2c8\ub2e4"}),(0,Re.jsx)("div",{className:"subtitle",children:"\ub2e4\ub978 \ud0a4\uc6cc\ub4dc\ub85c \uac80\uc0c9\ud574\ubcf4\uc138\uc694"})]}),!s&&o.length>0&&(0,Re.jsx)(at,{children:o.map(e=>(0,Re.jsxs)(it,{children:[(0,Re.jsx)(ot,{children:e.title}),(0,Re.jsxs)(lt,{children:[(0,Re.jsxs)("span",{children:["\uc800\uc790: ",e.author]}),(0,Re.jsxs)("span",{children:["\ucd9c\ud310\uc0ac: ",e.publisher]})]}),(0,Re.jsxs)(st,{children:[(0,Re.jsxs)(ut,{children:["\ud83d\udccd ",f||"\uc11c\uc6b8"," \ub3c4\uc11c\uad00 \ub300\ucd9c \ud604\ud669"]}),(0,Re.jsx)(ct,{children:e.availability.map(t=>(0,Re.jsxs)(dt,{children:[(0,Re.jsxs)(ft,{children:[(0,Re.jsx)("div",{className:"name",children:t.libraryName}),(0,Re.jsx)("div",{className:"address",children:t.libraryAddress})]}),(0,Re.jsx)(pt,{className:t.available?"available":"unavailable",onClick:()=>{return e.id,t.libraryId,n=t.libraryName,r=t.libraryPhone,void(t.available?window.confirm(`${n}\uc5d0\uc11c \uc608\uc57d\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?`)&&(alert("\uc608\uc57d\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4!"),window.location.href=`tel:${r}`):window.confirm(`${n}\uc5d0 \ub300\uae30\uc2e0\uccad\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?`)&&(alert("\ub300\uae30\uc2e0\uccad\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4!"),window.location.href=`tel:${r}`));var n,r},children:t.available?"\u2713 \uc608\uc57d\ud558\uae30":`\ud83d\udca4 \ub300\uae30\uc2e0\uccad (${t.waitingList}\uba85)`})]},t.libraryId))})]})]},e.id))})]})},mt=Oe.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  @media (max-width: 768px) {
    gap: 12px;
  }
`,gt=Oe.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  
  &::-webkit-scrollbar {
    height: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 4px;
  }
  
  @media (max-width: 768px) {
    gap: 6px;
    margin-bottom: 12px;
    flex-wrap: nowrap;
  }
  
  @media (max-width: 480px) {
    gap: 6px;
    margin-bottom: 15px;
    padding-bottom: 4px;
  }
`,xt=Oe.button`
  background: ${e=>e.active?"var(--primary-color)":"#f8f9fa"};
  color: ${e=>e.active?"white":"#555"};
  border: 1px solid ${e=>e.active?"var(--primary-color)":"#e9ecef"};
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  
  &:hover {
    background: ${e=>e.active?"#3a7538":"#e9ecef"};
    transform: translateY(-1px);
  }
  
  &:focus {
    outline: 3px solid rgba(76, 140, 74, 0.3);
    outline-offset: 2px;
  }
  
  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 13px;
  }
  
  @media (max-width: 480px) {
    padding: 10px 14px;
    font-size: 14px;
    border-radius: 6px;
  }
`,bt=Oe.form`
  background: #f8f9fa;
  padding: 25px;
  border-radius: 12px;
  border: 2px solid #e9ecef;
  display: flex;
  flex-direction: column;
  gap: 15px;
  
  @media (max-width: 768px) {
    padding: 20px;
    gap: 12px;
  }
  
  @media (max-width: 480px) {
    padding: 15px;
    gap: 10px;
  }
`,vt=Oe.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    gap: 8px;
    margin-bottom: 18px;
  }
  
  @media (max-width: 480px) {
    gap: 6px;
    margin-bottom: 15px;
  }
`,yt=Oe.label`
  font-size: 18px;
  font-weight: 600;
  color: #2c3e50;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
  
  @media (max-width: 480px) {
    font-size: 15px;
    flex-wrap: wrap;
  }
`,wt=Oe.input`
  padding: 16px;
  font-size: 16px;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  background: white;
  transition: all 0.3s ease;
  width: 100%;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(76, 140, 74, 0.1);
  }
  
  &::placeholder {
    color: #999;
    font-size: 15px;
  }
  
  @media (max-width: 768px) {
    padding: 14px;
    font-size: 15px;
    
    &::placeholder {
      font-size: 14px;
    }
  }
  
  @media (max-width: 480px) {
    padding: 12px;
    font-size: 15px;
    
    &::placeholder {
      font-size: 14px;
    }
  }
`,kt=Oe.textarea`
  padding: 16px;
  font-size: 16px;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  background: white;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;
  width: 100%;
  box-sizing: border-box;
  line-height: 1.5;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(76, 140, 74, 0.1);
  }
  
  &::placeholder {
    color: #999;
    font-size: 15px;
  }
  
  @media (max-width: 768px) {
    padding: 14px;
    font-size: 15px;
    min-height: 100px;
    
    &::placeholder {
      font-size: 14px;
    }
  }
  
  @media (max-width: 480px) {
    padding: 12px;
    font-size: 15px;
    min-height: 90px;
    
    &::placeholder {
      font-size: 14px;
    }
  }
`,St=Oe.select`
  padding: 16px;
  font-size: 16px;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  background: white;
  transition: all 0.3s ease;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(76, 140, 74, 0.1);
  }
  
  option {
    padding: 8px;
    font-size: 16px;
  }
  
  @media (max-width: 768px) {
    padding: 14px;
    font-size: 15px;
    
    option {
      font-size: 15px;
    }
  }
  
  @media (max-width: 480px) {
    padding: 12px;
    font-size: 15px;
    
    option {
      font-size: 15px;
    }
  }
`,Ct=Oe.button`
  background: #28a745;
  color: white;
  border: none;
  padding: 18px 40px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  
  &:hover {
    background: #218838;
    transform: translateY(-2px);
  }
  
  &:focus {
    outline: 3px solid rgba(40, 167, 69, 0.3);
    outline-offset: 2px;
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
  }
  
  @media (max-width: 768px) {
    padding: 15px 30px;
    font-size: 16px;
  }
  
  @media (max-width: 480px) {
    padding: 12px 20px;
    font-size: 15px;
  }
`,Et=Oe.div`
  background: #f0f8f0;
  border: 2px solid var(--primary-color);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
`,_t=Oe.h4`
  color: var(--primary-color);
  margin: 0 0 15px 0;
  font-size: 18px;
`,jt=Oe.div`
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 10px;
  border-left: 4px solid var(--primary-color);
`,Pt=Oe.h5`
  color: var(--primary-color);
  margin: 0 0 8px 0;
  font-size: 16px;
`,zt=Oe.div`
  color: #555;
  line-height: 1.6;
  font-size: 14px;
`,Tt=Oe.div`
  background: #f5f5f5;
  padding: 10px;
  border-radius: 6px;
  font-family: monospace;
  font-size: 14px;
  color: #333;
  margin-top: 8px;
  word-break: break-all;
`,Nt=Oe.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,Ot=Oe.div`
  background: #f8f9fa;
  border: 2px solid #e9ecef;
  border-radius: 12px;
  padding: 25px;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #6f42c1;
    box-shadow: 0 4px 15px rgba(111, 66, 193, 0.1);
  }
  
  @media (max-width: 768px) {
    padding: 20px;
    border-radius: 8px;
  }
  
  @media (max-width: 480px) {
    padding: 15px;
    margin-bottom: 15px;
  }
`,Rt=Oe.h4`
  font-size: 22px;
  color: #2c3e50;
  margin: 0 0 10px 0;
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
  
  @media (max-width: 480px) {
    font-size: 18px;
  }
`,Lt=Oe.div`
  font-size: 16px;
  color: #555;
  margin-bottom: 15px;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 15px;
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
  }
`,At=Oe.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 15px;
  
  @media (max-width: 768px) {
    gap: 12px;
    flex-direction: column;
  }
  
  @media (max-width: 480px) {
    gap: 8px;
  }
`,It=Oe.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 16px;
  color: #666;
  
  @media (max-width: 768px) {
    font-size: 15px;
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
  }
`,Dt=Oe.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  
  @media (max-width: 480px) {
    gap: 8px;
    flex-direction: column;
    align-items: stretch;
    
    button {
      width: 100%;
      min-height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
  }
`,Mt=Oe.button`
  background: #6f42c1;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  
  &:hover {
    background: #5a2d91;
    transform: translateY(-1px);
  }
  
  &:focus {
    outline: 3px solid #b8a4d9;
    outline-offset: 2px;
  }
  
  @media (max-width: 768px) {
    padding: 10px 16px;
    font-size: 14px;
  }
`,Ft=Oe.button`
  background: #17a2b8;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  
  &:hover {
    background: #138496;
    transform: translateY(-1px);
  }
  
  &:focus {
    outline: 3px solid #7dd3fc;
    outline-offset: 2px;
  }
  
  @media (max-width: 768px) {
    padding: 10px 16px;
    font-size: 14px;
  }
`,$t=Oe.div`
  background: #f8f9fa;
  border: 2px solid #e9ecef;
  border-radius: 12px;
  padding: 25px;
  
  @media (max-width: 768px) {
    padding: 20px;
    border-radius: 8px;
  }
  
  @media (max-width: 480px) {
    padding: 15px;
  }
`,Ut=Oe.h3`
  color: #2c3e50;
  margin: 0 0 20px 0;
  font-size: 24px;
  
  @media (max-width: 768px) {
    font-size: 22px;
    margin: 0 0 15px 0;
  }
  
  @media (max-width: 480px) {
    font-size: 20px;
    margin: 0 0 12px 0;
  }
`,Ht=Oe.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,Wt=Oe.div`
  background: white;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 20px;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #6f42c1;
    box-shadow: 0 2px 8px rgba(111, 66, 193, 0.1);
  }
  
  @media (max-width: 768px) {
    padding: 15px;
  }
  
  @media (max-width: 480px) {
    padding: 12px;
  }
`,Bt=Oe.h4`
  color: #2c3e50;
  margin: 0 0 10px 0;
  font-size: 18px;
`,Vt=Oe.div`
  color: #555;
  line-height: 1.6;
  margin-bottom: 10px;
`,Kt=Oe.div`
  color: #999;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Qt=Oe.button`
  background: #6c757d;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 20px;
  
  &:hover {
    background: #5a6268;
    transform: translateY(-1px);
  }
`,Yt=Oe.div`
  background: white;
  border: 2px solid #e9ecef;
  border-radius: 12px;
  padding: 25px;
  margin-bottom: 20px;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #28a745;
    box-shadow: 0 4px 15px rgba(40, 167, 69, 0.1);
  }
  
  @media (max-width: 768px) {
    padding: 20px;
    margin-bottom: 15px;
    border-radius: 8px;
  }
  
  @media (max-width: 480px) {
    padding: 15px;
    margin-bottom: 12px;
  }
`,qt=Oe.div`
  background: #f8f9fa;
  border-radius: 8px;
  padding: 15px;
  margin-top: 15px;
`,Gt=Oe.label`
  display: block;
  font-weight: 600;
  margin-bottom: 8px;
  color: #2c3e50;
`,Xt=Oe.input`
  width: 100px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 10px;
`,Zt=Oe.textarea`
  width: 100%;
  min-height: 80px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: vertical;
  margin-top: 10px;
`,Jt=Oe.button`
  background: #28a745;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  margin-top: 10px;
  
  &:hover {
    background: #218838;
  }
`,en=Oe.div`
  background: #e3f2fd;
  border-left: 4px solid #2196f3;
  padding: 15px;
  margin: 15px 0;
  border-radius: 4px;
`,tn=Oe.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
  flex-wrap: wrap;
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 8px;
    align-items: stretch;
    
    button {
      width: 100%;
      min-height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
  }
`,nn=Oe.div`
  background: #f8f9fa;
  border: 2px solid #e9ecef;
  border-radius: 12px;
  padding: 30px;
  text-align: center;
`,rn=Oe.h3`
  color: #2c3e50;
  margin-bottom: 20px;
  font-size: 24px;
`,an=Oe.div`
  background: white;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  text-align: left;
`,on=Oe.h4`
  color: var(--primary-color);
  margin: 0 0 15px 0;
  font-size: 18px;
`,ln=Oe.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 400px;
  margin: 0 auto;
`,sn=Oe.input`
  padding: 15px;
  font-size: 18px;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  background: white;
  
  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
  }
`,un=Oe.button`
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    background: #3a7538;
    box-shadow: 0 4px 12px rgba(76, 140, 74, 0.3);
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
  }
`,cn=Oe.div`
  background: ${e=>e.verified?"#d4edda":"#f8d7da"};
  color: ${e=>e.verified?"#155724":"#721c24"};
  border: 1px solid ${e=>e.verified?"#c3e6cb":"#f5c6cb"};
  padding: 15px;
  border-radius: 8px;
  margin: 20px 0;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
`,dn=Oe.div`
  background: #f0f8f0;
  border: 1px solid var(--primary-color);
  border-radius: 8px;
  padding: 15px;
  margin: 15px 0;
  color: var(--primary-color);
  font-size: 14px;
  line-height: 1.6;
`,fn=Oe.span`
  background: #dc3545;
  color: white;
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  margin-left: 8px;
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    padding: 3px 6px;
    font-size: 11px;
    margin-left: 6px;
  }
  
  @media (max-width: 480px) {
    padding: 2px 5px;
    font-size: 10px;
    margin-left: 5px;
  }
`,pn=Oe.div`
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
`,hn=Oe.div`
  background: white;
  border-radius: 12px;
  padding: 40px;
  max-width: 400px;
  width: 90%;
  text-align: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  max-height: 90vh;
  overflow-y: auto;
  
  @media (max-width: 768px) {
    padding: 25px;
    width: 95%;
    border-radius: 8px;
  }
  
  @media (max-width: 480px) {
    padding: 20px;
    width: 95%;
    margin: 10px;
  }
`,mn=Oe.h3`
  color: #2c3e50;
  margin: 0 0 20px 0;
  font-size: 22px;
`,gn=Oe.p`
  color: #555;
  font-size: 18px;
  line-height: 1.6;
  margin: 0 0 30px 0;
`,xn=Oe.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
    align-items: stretch;
    
    button {
      width: 100%;
      min-height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
  }
`,bn=Oe.button`
  background: ${e=>e.primary?"#007bff":"#6c757d"};
  color: white;
  border: none;
  padding: 15px 25px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 80px;
  
  &:hover {
    background: ${e=>e.primary?"#0056b3":"#5a6268"};
    transform: translateY(-1px);
  }
`,vn=t=>{var n,r;let{libraries:a,selectedRegion:i}=t;const[o,l]=(0,e.useState)("list"),[s,u]=(0,e.useState)("basic"),[c,d]=(0,e.useState)(null),[f,p]=(0,e.useState)([]),[h,m]=(0,e.useState)({}),[g,x]=(0,e.useState)(!1),[b,v]=(0,e.useState)(!1),[y,w]=(0,e.useState)(""),[k,S]=(0,e.useState)("\ud655\uc778"),[C,E]=(0,e.useState)(null),[_,j]=(0,e.useState)({name:"",phone:"",nickname:"",age:"",location:"",interests:""}),[P]=(0,e.useState)([{id:1,groupId:1,title:"\uccab \ubc88\uc9f8 \ubaa8\uc784 \ud6c4\uae30",content:"\uc624\ub298 \uccab \ub9cc\ub0a8\uc774\uc5c8\ub294\ub370 \uc815\ub9d0 \uc88b\uc558\uc5b4\uc694! \ub2e4\uc74c\uc5d0\ub294 2\uc7a5\ubd80\ud130 \uc77d\uc5b4\uc624\uae30\ub85c \ud588\uc2b5\ub2c8\ub2e4.",author:"\uae40\ub3c5\uc11c",date:"2024-01-22",time:"15:30"},{id:2,groupId:1,title:"\ucc45 \uc77d\uae30 \uc9c4\ub3c4\ud45c",content:"\ub9e4\uc8fc 2-3\uc7a5\uc529 \uc77d\uc5b4\uc11c \ucd1d 6\uc8fc \uc644\ub3c5 \ubaa9\ud45c\ub85c \ud569\ub2c8\ub2e4. \uad81\uae08\ud55c \uc810\uc774\ub098 \uac10\uc0c1\uc740 \uc5ec\uae30\uc5d0 \uc62c\ub824\uc8fc\uc138\uc694!",author:"\uae40\ub3c5\uc11c",date:"2024-01-20",time:"10:00"},{id:3,groupId:2,title:"\ub2e4\uc74c \ubaa8\uc784 \ub0a0\uc9dc \uc870\uc815",content:"1\uc6d4 25\uc77c\uc774 \uc5b4\ub824\uc6b4 \ubd84\ub4e4\uc774 \uacc4\uc154\uc11c 1\uc6d4 27\uc77c \ud1a0\uc694\uc77c\ub85c \ubcc0\uacbd \uc81c\uc548\ub4dc\ub9bd\ub2c8\ub2e4.",author:"\uc774\ubb38\ud559",date:"2024-01-23",time:"14:20"},{id:4,groupId:3,title:"\uc218\uc6d0\uc2dc\ub9bd\uc911\uc559\ub3c4\uc11c\uad00 \ubaa8\uc784\uc2e4 \uc608\uc57d \uc644\ub8cc",content:"1\uc6d4 30\uc77c \uc624\ud6c4 3\uc2dc \ub3c4\uc11c\uad00 \uc138\ubbf8\ub098\uc2e4 \uc608\uc57d \uc644\ub8cc\ud588\uc2b5\ub2c8\ub2e4. 2\uce35 \uc548\ub0b4\ub370\uc2a4\ud06c\uc5d0\uc11c \uc218\uc6d0 \ubd81\ud074\ub7fd\uc73c\ub85c \ubb38\uc758\ud558\uc2dc\uba74 \ub429\ub2c8\ub2e4.",author:"\ubc15\uc218\uc6d0",date:"2024-01-25",time:"11:45"}]),[z,T]=(0,e.useState)([{id:1,title:"\ud568\uaed8 \uc77d\ub294 \ucd94\ub9ac\uc18c\uc124",description:"\ucd94\ub9ac\uc18c\uc124\uc744 \uc88b\uc544\ud558\ub294 \ubd84\ub4e4\uacfc \ud568\uaed8 \uc77d\uace0 \ud1a0\ub860\ud574\uc694",book:"\uadf8\ub9ac\uace0 \uc544\ubb34\ub3c4 \uc5c6\uc5c8\ub2e4",author:"\uc560\uac70\uc11c \ud06c\ub9ac\uc2a4\ud2f0",meetingType:"library",library:"\uac15\ub0a8\uad6c\ub9bd\ub3c4\uc11c\uad00",onlineLink:"",offlineLocation:"",date:"2024-01-20",time:"14:00",maxMembers:10,currentMembers:6,organizer:"\uae40\ub3c5\uc11c",status:"complete",region:"\uac15\ub0a8\uad6c"},{id:2,title:"\uc2dc\ub2c8\uc5b4 \ubb38\ud559 \ubaa8\uc784",description:"\uc778\uc0dd\uc758 \uae4a\uc774\ub97c \ub354\ud574\uc8fc\ub294 \ubb38\ud559 \uc791\ud488\ub4e4\uc744 \ud568\uaed8 \uc77d\uc5b4\uc694",book:"82\ub144\uc0dd \uae40\uc9c0\uc601",author:"\uc870\ub0a8\uc8fc",meetingType:"offline",library:"",onlineLink:"",offlineLocation:"\uc11c\ucd08\uad6c \uc2a4\ud0c0\ubc85\uc2a4",date:"2024-01-25",time:"10:00",maxMembers:8,currentMembers:4,organizer:"\uc774\ubb38\ud559",status:"complete",region:"\uc11c\ucd08\uad6c"},{id:3,title:"\uc218\uc6d0 \ubd81\ud074\ub7fd",description:"\uc218\uc6d0 \uc9c0\uc5ed \uc8fc\ubbfc\ub4e4\uacfc \ud568\uaed8\ud558\ub294 \ub3c5\uc11c \ubaa8\uc784",book:"\ubbf8\ub4dc\ub098\uc787 \ub77c\uc774\ube0c\ub7ec\ub9ac",author:"\ub9e4\ud2b8 \ud5e4\uc774\uadf8",meetingType:"library",library:"\uc218\uc6d0\uc2dc\ub9bd\uc911\uc559\ub3c4\uc11c\uad00",onlineLink:"",offlineLocation:"",date:"2024-01-30",time:"15:00",maxMembers:12,currentMembers:8,organizer:"\ubc15\uc218\uc6d0",status:"complete",region:"\uc218\uc6d0\uc2dc"},{id:4,title:"\uc131\ub0a8 \ub3c5\uc11c \ub3d9\uc544\ub9ac",description:"\uc131\ub0a8 \uc9c0\uc5ed \ub3c5\uc11c \uc560\ud638\uac00\ub4e4\uc758 \ubaa8\uc784",book:"\uc644\uc804\ud55c \ud589\ubcf5",author:"\uc815\uc720\uc815",meetingType:"offline",library:"",onlineLink:"",offlineLocation:"\uc131\ub0a8\uc2dc \uce74\ud398",date:"2024-02-05",time:"13:00",maxMembers:6,currentMembers:3,organizer:"\ucd5c\uc131\ub0a8",status:"complete",region:"\uc131\ub0a8\uc2dc"},{id:5,title:"\ubd80\ucc9c \ubb38\ud559 \uc0b4\ub871",description:"\ubd80\ucc9c\uc2dc \ubb38\ud559 \ub3d9\ud638\ud68c\uc785\ub2c8\ub2e4",book:"\uc778\uac04 \uc2e4\uaca9",author:"\ub2e4\uc790\uc774 \uc624\uc0ac\ubb34",meetingType:"library",library:"\ubd80\ucc9c\uc2dc\ub9bd\ub3c4\uc11c\uad00",onlineLink:"",offlineLocation:"",date:"2024-02-10",time:"16:00",maxMembers:15,currentMembers:10,organizer:"\uae40\ubd80\ucc9c",status:"complete",region:"\ubd80\ucc9c\uc2dc"}]),[N,O]=(0,e.useState)({title:"",description:"",book:"",author:"",meetingType:"offline",onlineLink:"",offlineLocation:"",libraryId:"",date:"",time:"",maxMembers:10}),R=e=>{const{name:t,value:n}=e.target;O(e=>({...e,[t]:n}))},L=e=>{l(e),u("basic"),d(null)},A=e=>{g?(d(e),l("board")):M("\uac8c\uc2dc\ud310 \uc774\uc6a9\uc744 \uc704\ud574 \ubcf8\uc778\uc778\uc99d\uc774 \ud544\uc694\ud569\ub2c8\ub2e4.\n\uc9c0\uae08 \uc778\uc99d\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",()=>l("auth"),"\ud83d\udd12 \ubcf8\uc778\uc778\uc99d \ud544\uc694")},I=(e,t,n)=>{m(r=>({...r,[e]:{chapter:t,memo:n}}))},D=(e,t)=>{if("phone"===e){const n=t.replace(/[^\d]/g,"");let r="";r=n.length<=3?n:n.length<=7?`${n.slice(0,3)}-${n.slice(3)}`:`${n.slice(0,3)}-${n.slice(3,7)}-${n.slice(7,11)}`,j(t=>({...t,[e]:r}))}else j(n=>({...n,[e]:t}))},M=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"\ud655\uc778";w(e),S(n),E(()=>t),v(!0)},F=()=>{v(!1),E(null),S("\ud655\uc778"),w("")},$=()=>(0,Re.jsxs)(Et,{children:[(0,Re.jsx)(_t,{children:"\ud83d\udcbb \uc628\ub77c\uc778 \ubaa8\uc784 \ub9c1\ud06c \uc0dd\uc131 \ubc29\ubc95"}),(0,Re.jsxs)(jt,{children:[(0,Re.jsx)(Pt,{children:"1. \uad6c\uae00 \ubbf8\ud2b8 (Google Meet) \uc0ac\uc6a9\ud558\uae30"}),(0,Re.jsxs)(zt,{children:[(0,Re.jsxs)("div",{children:["\u2022 \uad6c\uae00 \uacc4\uc815\uc73c\ub85c \ub85c\uadf8\uc778 \ud6c4 ",(0,Re.jsx)("strong",{children:"meet.google.com"})," \uc811\uc18d"]}),(0,Re.jsx)("div",{children:'\u2022 "\uc0c8 \ud68c\uc758 \uc2dc\uc791" \ud074\ub9ad'}),(0,Re.jsx)("div",{children:"\u2022 \uc0dd\uc131\ub41c \ub9c1\ud06c\ub97c \ubcf5\uc0ac\ud574\uc11c \uc544\ub798\uc5d0 \ubd99\uc5ec\ub123\uae30"}),(0,Re.jsx)(Tt,{children:"\uc608: https://meet.google.com/abc-defg-hij"})]})]}),(0,Re.jsxs)(jt,{children:[(0,Re.jsx)(Pt,{children:"2. \uc90c (Zoom) \uc0ac\uc6a9\ud558\uae30"}),(0,Re.jsxs)(zt,{children:[(0,Re.jsx)("div",{children:"\u2022 \uc90c \uc571 \uc124\uce58 \ud6c4 \ub85c\uadf8\uc778"}),(0,Re.jsx)("div",{children:'\u2022 "\ud68c\uc758 \uc608\uc57d" \ub610\ub294 "\uc989\uc11d \ud68c\uc758" \uc120\ud0dd'}),(0,Re.jsx)("div",{children:"\u2022 \uc0dd\uc131\ub41c \ud68c\uc758 \ub9c1\ud06c\ub97c \ubcf5\uc0ac\ud574\uc11c \uc544\ub798\uc5d0 \ubd99\uc5ec\ub123\uae30"}),(0,Re.jsx)(Tt,{children:"\uc608: https://zoom.us/j/123456789"})]})]}),(0,Re.jsxs)(jt,{children:[(0,Re.jsx)(Pt,{children:"3. \uce74\uce74\uc624\ud1a1 \uc624\ud508\ucc44\ud305 \uc0ac\uc6a9\ud558\uae30"}),(0,Re.jsxs)(zt,{children:[(0,Re.jsx)("div",{children:'\u2022 \uce74\uce74\uc624\ud1a1\uc5d0\uc11c "\uc624\ud508\ucc44\ud305" \uac80\uc0c9'}),(0,Re.jsx)("div",{children:'\u2022 "\uc624\ud508\ucc44\ud305\ubc29 \ub9cc\ub4e4\uae30" \uc120\ud0dd'}),(0,Re.jsx)("div",{children:"\u2022 \ucc44\ud305\ubc29 \uc774\ub984\uc744 \ub3c5\uc11c\ubaa8\uc784\uc73c\ub85c \uc124\uc815"}),(0,Re.jsx)("div",{children:"\u2022 \uc0dd\uc131\ub41c \ub9c1\ud06c\ub97c \ubcf5\uc0ac\ud574\uc11c \uc544\ub798\uc5d0 \ubd99\uc5ec\ub123\uae30"}),(0,Re.jsx)(Tt,{children:"\uc608: https://open.kakao.com/o/sAbCdEfG"})]})]}),(0,Re.jsxs)(jt,{children:[(0,Re.jsx)(Pt,{children:"\ud83d\udca1 \ub3c4\uc6c0\uc774 \ud544\uc694\ud558\uc2dc\uba74?"}),(0,Re.jsxs)(zt,{children:[(0,Re.jsx)("div",{children:"\u2022 \uac00\uc871\uc774\ub098 \uc9c0\uc778\uc5d0\uac8c \ub3c4\uc6c0 \uc694\uccad"}),(0,Re.jsx)("div",{children:"\u2022 \uadfc\ucc98 \ub3c4\uc11c\uad00 \uc0ac\uc11c\uc5d0\uac8c \ubb38\uc758"}),(0,Re.jsx)("div",{children:'\u2022 \uc77c\ub2e8 "\ubbf8\uc815"\uc73c\ub85c \uc801\uace0 \ub098\uc911\uc5d0 \ubaa8\uc784\uc6d0\ub4e4\uacfc \uc0c1\uc758'})]})]})]}),U=z.filter(e=>!i||e.region===i&&"complete"===e.status);return(0,Re.jsxs)(mt,{children:[(0,Re.jsxs)(gt,{children:[(0,Re.jsxs)(xt,{active:"list"===o,onClick:()=>L("list"),children:["\ud83d\udc65 \ubaa9\ub85d ",i&&`(${i})`]}),(0,Re.jsx)(xt,{active:"auth"===o,onClick:()=>L("auth"),children:g?"\u2705 \uc778\uc99d\uc644\ub8cc":"\ud83d\udd12 \ubcf8\uc778\uc778\uc99d"}),g&&(0,Re.jsxs)(Re.Fragment,{children:[(0,Re.jsxs)(xt,{active:"create"===o,onClick:()=>L("create"),children:["\u2795 \ub9cc\ub4e4\uae30 ","detail"===s&&"(\uc138\ubd80\uc124\uc815)"]}),(0,Re.jsxs)(xt,{active:"mygroups"===o,onClick:()=>L("mygroups"),children:["\ud83d\udcd6 \ub0b4 \ubaa8\uc784 ",f.length>0&&`(${f.length})`]}),(0,Re.jsxs)(xt,{active:"board"===o,onClick:()=>L("board"),children:["\ud83d\udcac \uac8c\uc2dc\ud310 ",c&&`(${null===(n=U.find(e=>e.id===c))||void 0===n?void 0:n.title})`]})]})]}),"list"===o&&(0,Re.jsxs)(Nt,{children:[!g&&(0,Re.jsx)("div",{className:"bg-green-50 border-2 border-primary rounded-lg p-4 mb-6",children:(0,Re.jsxs)("div",{className:"flex items-center justify-between flex-wrap gap-3",children:[(0,Re.jsxs)("div",{className:"flex items-center gap-2",children:[(0,Re.jsx)("span",{className:"text-2xl",children:"\ud83c\udf1f"}),(0,Re.jsx)("span",{className:"text-primary font-semibold",children:"\ubcf8\uc778\uc778\uc99d\uc73c\ub85c \ubaa8\ub4e0 \uae30\ub2a5 \uc774\uc6a9\ud558\uae30"})]}),(0,Re.jsx)("button",{onClick:()=>l("auth"),className:"bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all duration-300 font-medium whitespace-nowrap",children:"\ubcf8\uc778\uc778\uc99d \ud558\uae30"})]})}),i?0===U.length?(0,Re.jsxs)("div",{className:"text-center py-16",children:[(0,Re.jsx)("div",{className:"text-6xl mb-6",children:"\ud83d\udc65"}),(0,Re.jsxs)("h3",{className:"text-xl font-bold text-text mb-3",children:[i,"\uc5d0\ub294 \uc544\uc9c1 \ub3c5\uc11c\ubaa8\uc784\uc774 \uc5c6\uc5b4\uc694"]}),(0,Re.jsx)("p",{className:"text-gray-600 mb-6",children:"\uc0c8\ub85c\uc6b4 \ubaa8\uc784\uc744 \ub9cc\ub4e4\uc5b4\uc11c \uccab \ubc88\uc9f8 \ub3c5\uc11c\ubaa8\uc784\uc744 \uc2dc\uc791\ud574\ubcf4\uc138\uc694!"}),(0,Re.jsx)("button",{onClick:()=>l("create"),className:"px-6 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all duration-300 font-medium",children:"\ubaa8\uc784 \ub9cc\ub4e4\uae30"})]}):U.map(e=>(0,Re.jsxs)(Ot,{children:[(0,Re.jsx)(Rt,{children:e.title}),(0,Re.jsx)(Lt,{children:e.description}),(0,Re.jsxs)(At,{children:[(0,Re.jsxs)(It,{children:["\ud83d\udcda ",e.book,e.author&&` - ${e.author}`]}),(0,Re.jsxs)(It,{children:["online"===e.meetingType&&"\ud83d\udcbb \uc628\ub77c\uc778","offline"===e.meetingType&&`\ud83d\udccd ${e.offlineLocation}`,"library"===e.meetingType&&`\ud83c\udfdb\ufe0f ${e.library}`]}),e.date&&(0,Re.jsxs)(It,{children:["\ud83d\udcc5 ",e.date]}),e.time&&(0,Re.jsxs)(It,{children:["\ud83d\udd50 ",e.time]}),e.maxMembers>0&&(0,Re.jsxs)(It,{children:["\ud83d\udc65 ",e.currentMembers,"/",e.maxMembers,"\uba85"]}),(0,Re.jsxs)(It,{children:["\ud83d\udc64 \uc8fc\ucd5c\uc790: ",e.organizer]})]}),(0,Re.jsxs)(Dt,{children:[(0,Re.jsx)(Mt,{onClick:()=>{return t=e.id,void(g?(T(z.map(e=>e.id===t?{...e,currentMembers:e.currentMembers+1}:e)),p([...f,t]),m(e=>({...e,[t]:{chapter:0,memo:""}})),alert('\ub3c5\uc11c \ubaa8\uc784\uc5d0 \ucc38\uc5ec\ud558\uc168\uc2b5\ub2c8\ub2e4! "\ub0b4 \ubaa8\uc784" \ud0ed\uc5d0\uc11c \ud655\uc778\ud574\ubcf4\uc138\uc694.')):M("\ubaa8\uc784 \ucc38\uc5ec\ub97c \uc704\ud574 \ubcf8\uc778\uc778\uc99d\uc774 \ud544\uc694\ud569\ub2c8\ub2e4.\n\uc9c0\uae08 \uc778\uc99d\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",()=>l("auth"),"\ud83d\udd12 \ubcf8\uc778\uc778\uc99d \ud544\uc694"));var t},disabled:e.maxMembers>0&&e.currentMembers>=e.maxMembers||f.includes(e.id),children:f.includes(e.id)?"\u2705 \ucc38\uc5ec\uc911":e.maxMembers>0&&e.currentMembers>=e.maxMembers?"\uc644\ub8cc":"\ucc38\uc5ec"}),(0,Re.jsx)(Ft,{onClick:()=>A(e.id),children:"\ud83d\udcac \uac8c\uc2dc\ud310"})]})]},e.id)):(0,Re.jsxs)("div",{className:"text-center py-16",children:[(0,Re.jsx)("div",{className:"text-6xl mb-6",children:"\ud83d\udccd"}),(0,Re.jsx)("h3",{className:"text-xl font-bold text-text mb-3",children:"\ub3c5\uc11c\ubaa8\uc784\uc744 \ucc3e\uc73c\ub824\uba74?"}),(0,Re.jsx)("p",{className:"text-gray-600",children:'\uc704\uc758 "\ub3c4\uc11c \uac80\uc0c9" \uc139\uc158\uc5d0\uc11c \uc9c0\uc5ed\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694!'})]})]}),"create"===o&&"basic"===s&&(0,Re.jsxs)(bt,{onSubmit:e=>{var t;if(e.preventDefault(),!g)return void M("\ubaa8\uc784 \uc0dd\uc131\uc744 \uc704\ud574 \ubcf8\uc778\uc778\uc99d\uc774 \ud544\uc694\ud569\ub2c8\ub2e4.\n\uc9c0\uae08 \uc778\uc99d\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",()=>l("auth"),"\ud83d\udd12 \ubcf8\uc778\uc778\uc99d \ud544\uc694");const n={id:z.length+1,title:N.title,description:N.description,book:N.book,author:"",meetingType:N.meetingType,library:"library"===N.meetingType&&(null===(t=a.find(e=>e.id===parseInt(N.libraryId)))||void 0===t?void 0:t.name)||"",onlineLink:"online"===N.meetingType?N.onlineLink:"",offlineLocation:"offline"===N.meetingType?N.offlineLocation:"",date:"",time:"",maxMembers:0,currentMembers:1,organizer:"\ub098",status:"draft",region:i||"\uc9c0\uc5ed \ubbf8\uc120\ud0dd"};T([...z,n]),u("detail"),alert("\ubaa8\uc784\uc774 \uc0dd\uc131\ub418\uc5c8\uc2b5\ub2c8\ub2e4! \uc774\uc81c \uc138\ubd80 \uc815\ubcf4\ub97c \uc124\uc815\ud574\uc8fc\uc138\uc694.")},children:[(0,Re.jsxs)(vt,{children:[(0,Re.jsx)(yt,{children:"\ubaa8\uc784 \uc774\ub984"}),(0,Re.jsx)(wt,{type:"text",name:"title",value:N.title,onChange:R,placeholder:"\uc608: \ud568\uaed8 \uc77d\ub294 \ucd94\ub9ac\uc18c\uc124",required:!0})]}),(0,Re.jsxs)(vt,{children:[(0,Re.jsx)(yt,{children:"\ubaa8\uc784 \uc124\uba85"}),(0,Re.jsx)(kt,{name:"description",value:N.description,onChange:R,placeholder:"\ubaa8\uc784\uc5d0 \ub300\ud55c \uac04\ub2e8\ud55c \uc124\uba85\uc744 \uc368\uc8fc\uc138\uc694",required:!0})]}),(0,Re.jsxs)(vt,{children:[(0,Re.jsx)(yt,{children:"\uc77d\uc744 \ucc45"}),(0,Re.jsx)(wt,{type:"text",name:"book",value:N.book,onChange:R,placeholder:"\ucc45 \uc81c\ubaa9\uc744 \uc785\ub825\ud558\uc138\uc694",required:!0})]}),(0,Re.jsxs)(vt,{children:[(0,Re.jsx)(yt,{children:"\ubaa8\uc784 \ubc29\uc2dd"}),(0,Re.jsxs)(St,{name:"meetingType",value:N.meetingType,onChange:R,required:!0,children:[(0,Re.jsx)("option",{value:"offline",children:"\ud83d\udccd \uc624\ud504\ub77c\uc778 (\uc9c1\uc811 \ub9cc\ub0a8)"}),(0,Re.jsx)("option",{value:"online",children:"\ud83d\udcbb \uc628\ub77c\uc778 (\ud654\uc0c1 \ud68c\uc758)"}),(0,Re.jsx)("option",{value:"library",children:"\ud83c\udfdb\ufe0f \ub3c4\uc11c\uad00 (\ub3c4\uc11c\uad00\uc5d0\uc11c \ub9cc\ub0a8)"})]})]}),"online"===N.meetingType&&(0,Re.jsxs)(Re.Fragment,{children:[(0,Re.jsx)($,{}),(0,Re.jsxs)(vt,{children:[(0,Re.jsx)(yt,{children:"\uc628\ub77c\uc778 \ub9c1\ud06c (\uc120\ud0dd\uc0ac\ud56d)"}),(0,Re.jsx)(wt,{type:"url",name:"onlineLink",value:N.onlineLink,onChange:R,placeholder:"\uc608: https://meet.google.com/abc-123 \ub610\ub294 '\ubbf8\uc815'"})]})]}),"offline"===N.meetingType&&(0,Re.jsxs)(vt,{children:[(0,Re.jsx)(yt,{children:"\ub9cc\ub0a0 \uc7a5\uc18c (\uc120\ud0dd\uc0ac\ud56d)"}),(0,Re.jsx)(wt,{type:"text",name:"offlineLocation",value:N.offlineLocation,onChange:R,placeholder:"\uc608: \uc2a4\ud0c0\ubc85\uc2a4 \uac15\ub0a8\uc810, \ub3d9\ub124 \uce74\ud398 \ub4f1"})]}),"library"===N.meetingType&&(0,Re.jsxs)(vt,{children:[(0,Re.jsx)(yt,{children:"\ub3c4\uc11c\uad00 \uc120\ud0dd"}),(0,Re.jsxs)(St,{name:"libraryId",value:N.libraryId,onChange:R,required:!0,children:[(0,Re.jsx)("option",{value:"",children:"\ub3c4\uc11c\uad00\uc744 \uc120\ud0dd\ud558\uc138\uc694"}),a.map(e=>(0,Re.jsx)("option",{value:e.id,children:e.name},e.id))]})]}),"library"===N.meetingType&&0===a.length&&(0,Re.jsxs)("div",{className:"text-center py-16",children:[(0,Re.jsx)("div",{className:"text-6xl mb-6",children:"\ud83c\udfdb\ufe0f"}),(0,Re.jsx)("h3",{className:"text-xl font-bold text-text mb-3",children:"\ub3c4\uc11c\uad00 \ubaa8\uc784\uc744 \ub9cc\ub4e4\ub824\uba74?"}),(0,Re.jsx)("p",{className:"text-gray-600 mb-4",children:'\uc704\uc758 "\ub3c4\uc11c \uac80\uc0c9" \uc139\uc158\uc5d0\uc11c \uac70\uc8fc \uc9c0\uc5ed\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694!'})]}),(0,Re.jsx)(Ct,{type:"submit",disabled:"library"===N.meetingType&&0===a.length||!g,children:g?"\ud83d\udc65 \ubaa8\uc784 \uc0dd\uc131\ud558\uae30":"\ud83d\udd12 \ubcf8\uc778\uc778\uc99d \ud6c4 \uc774\uc6a9 \uac00\ub2a5"})]}),"create"===o&&"detail"===s&&(0,Re.jsxs)(bt,{onSubmit:e=>{e.preventDefault();const t=z[z.length-1].id;T(z.map(e=>e.id===t?{...e,author:N.author,date:N.date,time:N.time,maxMembers:N.maxMembers,status:"complete"}:e)),O({title:"",description:"",book:"",author:"",meetingType:"offline",onlineLink:"",offlineLocation:"",libraryId:"",date:"",time:"",maxMembers:10}),u("basic"),l("list"),alert("\ub3c5\uc11c \ubaa8\uc784 \uc124\uc815\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4!")},children:[(0,Re.jsxs)("div",{style:{padding:"15px",background:"#e3f2fd",borderRadius:"8px",marginBottom:"20px"},children:[(0,Re.jsx)("h4",{style:{margin:"0 0 10px 0",color:"var(--primary-color)"},children:"\u2728 \uc138\ubd80 \uc815\ubcf4 \uc124\uc815"}),(0,Re.jsx)("p",{style:{margin:0,color:"#666"},children:"\ubaa8\uc784\uc774 \uc0dd\uc131\ub418\uc5c8\uc2b5\ub2c8\ub2e4! \uc774\uc81c \ucd94\uac00 \uc815\ubcf4\ub97c \uc124\uc815\ud574\uc8fc\uc138\uc694. (\uc120\ud0dd\uc0ac\ud56d)"})]}),(0,Re.jsxs)(vt,{children:[(0,Re.jsx)(yt,{children:"\uc800\uc790 (\uc120\ud0dd\uc0ac\ud56d)"}),(0,Re.jsx)(wt,{type:"text",name:"author",value:N.author,onChange:R,placeholder:"\uc800\uc790\uba85\uc744 \uc785\ub825\ud558\uc138\uc694"})]}),(0,Re.jsxs)(vt,{children:[(0,Re.jsx)(yt,{children:"\ubaa8\uc784 \ub0a0\uc9dc (\uc120\ud0dd\uc0ac\ud56d)"}),(0,Re.jsx)(wt,{type:"date",name:"date",value:N.date,onChange:R})]}),(0,Re.jsxs)(vt,{children:[(0,Re.jsx)(yt,{children:"\ubaa8\uc784 \uc2dc\uac04 (\uc120\ud0dd\uc0ac\ud56d)"}),(0,Re.jsx)(wt,{type:"time",name:"time",value:N.time,onChange:R})]}),(0,Re.jsxs)(vt,{children:[(0,Re.jsx)(yt,{children:"\ubaa8\uc9d1 \uc778\uc6d0 (\uc120\ud0dd\uc0ac\ud56d)"}),(0,Re.jsxs)(St,{name:"maxMembers",value:N.maxMembers,onChange:R,children:[(0,Re.jsx)("option",{value:0,children:"\uc778\uc6d0 \uc81c\ud55c \uc5c6\uc74c"}),(0,Re.jsx)("option",{value:5,children:"5\uba85"}),(0,Re.jsx)("option",{value:8,children:"8\uba85"}),(0,Re.jsx)("option",{value:10,children:"10\uba85"}),(0,Re.jsx)("option",{value:15,children:"15\uba85"}),(0,Re.jsx)("option",{value:20,children:"20\uba85"})]})]}),(0,Re.jsxs)("div",{style:{display:"flex",gap:"10px"},children:[(0,Re.jsx)(Ct,{type:"button",onClick:()=>u("basic"),style:{background:"#6c757d"},children:"\u2190 \uc774\uc804"}),(0,Re.jsx)(Ct,{type:"submit",children:"\u2705 \uc644\ub8cc"})]})]}),"board"===o&&(0,Re.jsxs)($t,{children:[(0,Re.jsx)(Qt,{onClick:()=>l("list"),children:"\u2190 \ubaa9\ub85d\uc73c\ub85c \ub3cc\uc544\uac00\uae30"}),c?(0,Re.jsxs)(Re.Fragment,{children:[(0,Re.jsxs)(Ut,{children:["\ud83d\udcac ",null===(r=U.find(e=>e.id===c))||void 0===r?void 0:r.title," \uac8c\uc2dc\ud310"]}),(0,Re.jsxs)(Ht,{children:[P.filter(e=>e.groupId===c).sort((e,t)=>new Date(t.date+" "+t.time).getTime()-new Date(e.date+" "+e.time).getTime()).map(e=>(0,Re.jsxs)(Wt,{children:[(0,Re.jsx)(Bt,{children:e.title}),(0,Re.jsx)(Vt,{children:e.content}),(0,Re.jsxs)(Kt,{children:[(0,Re.jsxs)("span",{children:["\ud83d\udc64 ",e.author]}),(0,Re.jsxs)("span",{children:["\ud83d\udcc5 ",e.date," ",e.time]})]})]},e.id)),0===P.filter(e=>e.groupId===c).length&&(0,Re.jsxs)("div",{className:"text-center py-16",children:[(0,Re.jsx)("div",{className:"text-6xl mb-6",children:"\ud83d\udcdd"}),(0,Re.jsx)("h3",{className:"text-xl font-bold text-text mb-3",children:"\uc544\uc9c1 \uac8c\uc2dc\uae00\uc774 \uc5c6\uc5b4\uc694"}),(0,Re.jsx)("p",{className:"text-gray-600 mb-4",children:"\ubaa8\uc784 \ucc38\uc5ec \ud6c4 \uccab \ubc88\uc9f8 \uae00\uc744 \uc791\uc131\ud574\ubcf4\uc138\uc694!"})]})]})]}):(0,Re.jsxs)("div",{className:"text-center py-16",children:[(0,Re.jsx)("div",{className:"text-6xl mb-6",children:"\ud83d\udcac"}),(0,Re.jsx)("h3",{className:"text-xl font-bold text-text mb-3",children:"\uac8c\uc2dc\ud310\uc744 \ubcf4\ub824\uba74 \ubaa8\uc784\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694!"}),(0,Re.jsx)("p",{className:"text-gray-600 mb-4",children:'\ubaa9\ub85d\uc5d0\uc11c "\uac8c\uc2dc\ud310" \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uc138\uc694.'})]})]}),"mygroups"===o&&(0,Re.jsx)("div",{children:g?0===f.length?(0,Re.jsxs)("div",{className:"text-center py-16",children:[(0,Re.jsx)("div",{className:"text-6xl mb-6",children:"\ud83d\udcd6"}),(0,Re.jsx)("h3",{className:"text-xl font-bold text-text mb-3",children:"\ucc38\uc5ec\ud55c \ub3c5\uc11c\ubaa8\uc784\uc774 \uc5c6\uc5b4\uc694"}),(0,Re.jsx)("p",{className:"text-gray-600 mb-6",children:"\ubaa9\ub85d\uc5d0\uc11c \ub9c8\uc74c\uc5d0 \ub4dc\ub294 \ubaa8\uc784\uc5d0 \ucc38\uc5ec\ud574\ubcf4\uc138\uc694!"}),(0,Re.jsx)("button",{onClick:()=>l("list"),className:"px-6 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all duration-300 font-medium",children:"\ubaa8\uc784 \ucc3e\uae30"})]}):(0,Re.jsxs)("div",{children:[(0,Re.jsxs)("h3",{style:{marginBottom:"25px",color:"#2c3e50"},children:["\ud83d\udcd6 \ub0b4\uac00 \ucc38\uc5ec\ud55c \ub3c5\uc11c\ubaa8\uc784 (",f.length,"\uac1c)"]}),f.map(e=>{const t=z.find(t=>t.id===e);if(!t)return null;const n=h[e]||{chapter:0,memo:""};return(0,Re.jsxs)(Yt,{children:[(0,Re.jsx)(Rt,{children:t.title}),(0,Re.jsxs)(Lt,{children:["\ud83d\udcda ",t.book," ",t.author&&`- ${t.author}`]}),t.date&&(0,Re.jsxs)(en,{children:[(0,Re.jsx)("strong",{children:"\ud83d\udcc5 \ub2e4\uc74c \ubaa8\uc784 \uc77c\uc815"}),(0,Re.jsx)("br",{}),t.date," ",t.time," |","online"===t.meetingType&&" \ud83d\udcbb \uc628\ub77c\uc778","offline"===t.meetingType&&` \ud83d\udccd ${t.offlineLocation}`,"library"===t.meetingType&&` \ud83c\udfdb\ufe0f ${t.library}`]}),(0,Re.jsxs)(qt,{children:[(0,Re.jsx)(Gt,{children:"\ud83d\udcd6 \ub0b4 \ub3c5\uc11c \uc9c4\ub3c4"}),(0,Re.jsxs)("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap"},children:[(0,Re.jsx)(Xt,{type:"number",value:n.chapter,onChange:t=>I(e,parseInt(t.target.value)||0,n.memo),min:"0",placeholder:"\uc7a5"}),(0,Re.jsx)("span",{children:"\uc7a5\uae4c\uc9c0 \uc77d\uc74c"})]}),(0,Re.jsx)(Zt,{value:n.memo,onChange:t=>I(e,n.chapter,t.target.value),placeholder:"\ub3c5\uc11c \uba54\ubaa8\ub098 \ud1a0\ub860 \uc8fc\uc81c\ub97c \uc801\uc5b4\ubcf4\uc138\uc694..."}),(0,Re.jsx)(Jt,{onClick:()=>alert("\ub3c5\uc11c \uc9c4\ub3c4\uac00 \uc800\uc7a5\ub418\uc5c8\uc2b5\ub2c8\ub2e4!"),children:"\ud83d\udcbe \uc800\uc7a5"})]}),(0,Re.jsxs)(tn,{children:[(0,Re.jsx)(Ft,{onClick:()=>A(e),children:"\ud83d\udcac \uac8c\uc2dc\ud310 \ubcf4\uae30"}),(0,Re.jsx)(Mt,{onClick:()=>alert(`${t.title} \ubaa8\uc784\uc6d0\ub4e4\uacfc \uc5f0\ub77d\ud560 \uc218 \uc788\ub294 \uae30\ub2a5\uc740 \uc900\ube44 \uc911\uc785\ub2c8\ub2e4!`),style:{background:"#17a2b8"},children:"\ud83d\udc65 \ubaa8\uc784\uc6d0 \ubcf4\uae30"})]})]},e)})]}):(0,Re.jsxs)("div",{className:"text-center py-16",children:[(0,Re.jsx)("div",{className:"text-6xl mb-6",children:"\ud83d\udd12"}),(0,Re.jsx)("h3",{className:"text-xl font-bold text-text mb-3",children:"\ubcf8\uc778\uc778\uc99d\uc774 \ud544\uc694\ud574\uc694"}),(0,Re.jsx)("p",{className:"text-gray-600 mb-6",children:"\ub0b4 \ubaa8\uc784\uc744 \ud655\uc778\ud558\ub824\uba74 \uba3c\uc800 \ubcf8\uc778\uc778\uc99d\uc744 \uc644\ub8cc\ud574\uc8fc\uc138\uc694."}),(0,Re.jsx)("button",{onClick:()=>l("auth"),className:"px-6 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all duration-300 font-medium",children:"\ubcf8\uc778\uc778\uc99d \ud558\uae30"})]})}),"auth"===o&&(0,Re.jsxs)(nn,{children:[(0,Re.jsx)(rn,{children:"\ud83d\udd12 \ubcf8\uc778\uc778\uc99d"}),(0,Re.jsx)(cn,{verified:g,children:g?`\u2705 \uc778\uc99d \uc644\ub8cc - ${_.name}\ub2d8 (${_.phone})`:"\u274c \uc778\uc99d\uc774 \ud544\uc694\ud569\ub2c8\ub2e4"}),!g&&(0,Re.jsxs)(Re.Fragment,{children:[(0,Re.jsxs)(dn,{children:[(0,Re.jsx)("strong",{children:"\ud83d\udca1 \ubcf8\uc778\uc778\uc99d\uc774 \ud544\uc694\ud55c \uc774\uc720"}),(0,Re.jsx)("br",{}),"\u2022 \uc548\uc804\ud55c \ub3c5\uc11c\ubaa8\uc784 \ud658\uacbd \uc870\uc131",(0,Re.jsx)("br",{}),"\u2022 \uc2e0\ub8b0\ud560 \uc218 \uc788\ub294 \ubaa8\uc784\uc6d0\ub4e4\uacfc\uc758 \ub9cc\ub0a8",(0,Re.jsx)("br",{}),"\u2022 \ubb34\ucc45\uc784\ud55c \ucc38\uc5ec\ub098 \ub178\uc1fc \ubc29\uc9c0",(0,Re.jsx)("br",{}),"\u2022 \uc2dc\ub2c8\uc5b4 \uce35\uc744 \uc704\ud55c \uc548\uc804\uc7a5\uce58"]}),(0,Re.jsxs)(an,{children:[(0,Re.jsx)(on,{children:"1\ub2e8\uacc4: \uae30\ubcf8 \uc815\ubcf4 \uc785\ub825"}),(0,Re.jsxs)(ln,{onSubmit:e=>{e.preventDefault(),(()=>{if(!_.name||!_.phone)return void alert("\uc774\ub984\uacfc \ud734\ub300\ud3f0 \ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.");/^010-\d{4}-\d{4}$/.test(_.phone)?M(`${_.phone}\ub85c \uc778\uc99d\ubc88\ud638\ub97c \ubc1c\uc1a1\ud558\uaca0\uc2b5\ub2c8\ub2e4. \uacc4\uc18d\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?`,()=>{"123456"===window.prompt("\uc778\uc99d\ubc88\ud638 6\uc790\ub9ac\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694: (\ud14c\uc2a4\ud2b8: 123456)")?(x(!0),alert("\ubcf8\uc778\uc778\uc99d\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4! \ud83c\udf89\n\uc774\uc81c \ubaa8\ub4e0 \uae30\ub2a5\uc744 \uc774\uc6a9\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),l("mygroups")):alert("\uc778\uc99d\ubc88\ud638\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.")},"\ud83d\udcf1 \uc778\uc99d\ubc88\ud638 \ubc1c\uc1a1"):alert("\ud734\ub300\ud3f0 \ubc88\ud638\ub97c 010-0000-0000 \ud615\uc2dd\uc73c\ub85c \uc785\ub825\ud574\uc8fc\uc138\uc694.")})()},children:[(0,Re.jsxs)("div",{children:[(0,Re.jsxs)(yt,{children:[(0,Re.jsx)("span",{children:"\uc2e4\uba85"}),(0,Re.jsx)(fn,{children:"\ud544\uc218"})]}),(0,Re.jsx)(sn,{type:"text",value:_.name,onChange:e=>D("name",e.target.value),placeholder:"\ud64d\uae38\ub3d9",required:!0})]}),(0,Re.jsxs)("div",{children:[(0,Re.jsxs)(yt,{children:[(0,Re.jsx)("span",{children:"\ud734\ub300\ud3f0 \ubc88\ud638"}),(0,Re.jsx)(fn,{children:"\ud544\uc218"})]}),(0,Re.jsx)(sn,{type:"tel",value:_.phone,onChange:e=>D("phone",e.target.value),placeholder:"010-0000-0000",maxLength:13,required:!0})]}),(0,Re.jsx)(un,{type:"submit",children:"\ud83d\udcf1 \ud734\ub300\ud3f0 \uc778\uc99d\ud558\uae30"})]})]})]}),g&&(0,Re.jsxs)(an,{children:[(0,Re.jsx)(on,{children:"\ucd94\uac00 \ud504\ub85c\ud544 \uc815\ubcf4 (\uc120\ud0dd\uc0ac\ud56d)"}),(0,Re.jsxs)(ln,{onSubmit:e=>{e.preventDefault(),alert("\ud504\ub85c\ud544\uc774 \uc5c5\ub370\uc774\ud2b8\ub418\uc5c8\uc2b5\ub2c8\ub2e4!")},children:[(0,Re.jsxs)("div",{children:[(0,Re.jsx)(yt,{children:"\ub2c9\ub124\uc784"}),(0,Re.jsx)(sn,{type:"text",value:_.nickname,onChange:e=>D("nickname",e.target.value),placeholder:"\ub3c5\uc11c\uc655"})]}),(0,Re.jsxs)("div",{children:[(0,Re.jsx)(yt,{children:"\ub098\uc774\ub300"}),(0,Re.jsxs)(St,{value:_.age,onChange:e=>D("age",e.target.value),style:{padding:"15px",fontSize:"18px"},children:[(0,Re.jsx)("option",{value:"",children:"\uc120\ud0dd\ud558\uc138\uc694"}),(0,Re.jsx)("option",{value:"50\ub300",children:"50\ub300"}),(0,Re.jsx)("option",{value:"60\ub300",children:"60\ub300"}),(0,Re.jsx)("option",{value:"70\ub300",children:"70\ub300"}),(0,Re.jsx)("option",{value:"\uae30\ud0c0",children:"\uae30\ud0c0"})]})]}),(0,Re.jsxs)("div",{children:[(0,Re.jsx)(yt,{children:"\uad00\uc2ec \ubd84\uc57c"}),(0,Re.jsx)(sn,{type:"text",value:_.interests,onChange:e=>D("interests",e.target.value),placeholder:"\ubb38\ud559, \ucd94\ub9ac\uc18c\uc124, \uc5ed\uc0ac\ucc45 \ub4f1"})]}),(0,Re.jsx)(un,{type:"submit",children:"\ud83d\udcbe \ud504\ub85c\ud544 \uc5c5\ub370\uc774\ud2b8"})]}),(0,Re.jsxs)(dn,{style:{marginTop:"20px"},children:[(0,Re.jsx)("strong",{children:"\ud83c\udf89 \uc778\uc99d\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4!"}),(0,Re.jsx)("br",{}),"\uc774\uc81c \ubaa8\ub4e0 \uae30\ub2a5\uc744 \uc790\uc720\ub86d\uac8c \uc774\uc6a9\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]})]})]}),b&&(0,Re.jsx)(pn,{onClick:F,children:(0,Re.jsxs)(hn,{onClick:e=>e.stopPropagation(),children:[(0,Re.jsx)(mn,{children:k}),(0,Re.jsx)(gn,{children:y}),(0,Re.jsxs)(xn,{children:[(0,Re.jsx)(bn,{onClick:F,children:"\ucde8\uc18c"}),(0,Re.jsx)(bn,{primary:!0,onClick:()=>{C&&C(),v(!1),E(null),S("\ud655\uc778"),w("")},children:"\ud655\uc778"})]})]})})]})},yn=Oe.div`
  background: linear-gradient(135deg, var(--primary-color) 0%, #3a7538 100%);
  border-radius: 16px;
  padding: 24px;
  margin: 32px 0;
  box-shadow: 0 4px 16px rgba(76, 140, 74, 0.2);
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 20px;
    margin: 24px 0;
    border-radius: 12px;
  }
`,wn=Oe.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
`,kn=Oe.div`
  flex: 1;
  color: white;
`,Sn=Oe.h3`
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 8px 0;
  color: white;
  font-family: 'Pretendard', 'Arita Dotum', 'Noto Sans KR', sans-serif;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`,Cn=Oe.p`
  font-size: 16px;
  margin: 0 0 16px 0;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.5;
  font-family: 'Pretendard', 'Arita Dotum', 'Noto Sans KR', sans-serif;
  
  @media (max-width: 768px) {
    font-size: 15px;
  }
`,En=Oe.a`
  display: inline-flex;
  align-items: center;
  background: var(--accent-color);
  color: white;
  padding: 14px 28px;
  border-radius: 10px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  font-family: 'Pretendard', 'Arita Dotum', 'Noto Sans KR', sans-serif;
  
  &:hover {
    background: #d67821;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(242, 140, 40, 0.3);
  }
  
  &:visited {
    color: white;
  }
  
  @media (max-width: 768px) {
    padding: 12px 24px;
    font-size: 15px;
    width: 100%;
    justify-content: center;
  }
`,_n=Oe.div`
  font-size: 48px;
  margin-right: 16px;
  
  @media (max-width: 768px) {
    font-size: 40px;
    margin-right: 0;
    margin-bottom: 8px;
  }
`,jn=Oe.div`
  position: absolute;
  top: -50px;
  right: -50px;
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  z-index: 1;
  
  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    top: -75px;
    right: -75px;
  }
`,Pn=()=>(0,Re.jsxs)(yn,{children:[(0,Re.jsx)(jn,{}),(0,Re.jsxs)(wn,{children:[(0,Re.jsx)(_n,{children:"\ud83d\udcda"}),(0,Re.jsxs)(kn,{children:[(0,Re.jsx)(Sn,{children:"\uacbd\uae30\ub3c4 \ubd81\ud3ec\uc778\ud2b8 \uc11c\ube44\uc2a4"}),(0,Re.jsxs)(Cn,{children:["\ub3c4\uc11c \ub300\ucd9c\ub85c \ud3ec\uc778\ud2b8\ub97c \uc801\ub9bd\ud558\uace0 \ub2e4\uc591\ud55c \ud61c\ud0dd\uc744 \ubc1b\uc544\ubcf4\uc138\uc694!",(0,Re.jsx)("br",{}),"\uacbd\uae30\ub3c4 \uacf5\uacf5\ub3c4\uc11c\uad00 \ud1b5\ud569 \uc11c\ube44\uc2a4\ub85c \ub354\uc6b1 \ud3b8\ub9ac\ud558\uac8c \uc774\uc6a9\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]})]}),(0,Re.jsx)(En,{href:"https://ggpoint.kdot.cloud/bookpoint/main/homemain",target:"_blank",rel:"noopener noreferrer",children:"\ud83c\udf1f \ubd81\ud3ec\uc778\ud2b8 \ubc14\ub85c\uac00\uae30"})]})]}),zn=Oe.div`
  width: 100%;
`,Tn=Oe.div`
  background: white;
  border: 2px solid #e8e8e8;
  border-radius: 12px;
  margin-top: 25px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    margin-top: 20px;
    border-radius: 10px;
  }
  
  @media (max-width: 480px) {
    margin-top: 15px;
    border-radius: 8px;
  }
`,Nn=Oe.div`
  display: grid;
  grid-template-columns: 60px 1fr 120px 100px 80px 100px;
  background: var(--primary-color);
  color: white;
  padding: 16px 20px;
  font-weight: 600;
  font-size: 16px;
  align-items: center;
  gap: 12px;
  
  @media (max-width: 768px) {
    grid-template-columns: 50px 1fr 100px 80px 70px;
    padding: 12px 15px;
    font-size: 14px;
    gap: 8px;
    
    .desktop-only {
      display: none;
    }
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 40px 1fr 80px 60px;
    padding: 10px 12px;
    font-size: 13px;
    gap: 6px;
    
    .tablet-hide {
      display: none;
    }
  }
`,On=Oe.div`
  text-align: center;
  
  &:nth-child(2) {
    text-align: left;
  }
`,Rn=Oe.div`
  display: grid;
  grid-template-columns: 60px 1fr 120px 100px 80px 100px;
  padding: 16px 20px;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #f8fbff;
    border-left: 4px solid var(--primary-color);
  }
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 50px 1fr 100px 80px 70px;
    padding: 12px 15px;
    gap: 8px;
    
    .desktop-only {
      display: none;
    }
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 40px 1fr 80px 60px;
    padding: 10px 12px;
    gap: 6px;
    
    .tablet-hide {
      display: none;
    }
  }
`,Ln=Oe.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: var(--primary-color);
  color: white;
  border-radius: 50%;
  font-weight: 600;
  font-size: 16px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    width: 28px;
    height: 28px;
    font-size: 14px;
  }
  
  @media (max-width: 480px) {
    width: 24px;
    height: 24px;
    font-size: 12px;
  }
`,An=Oe.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: left;
`,In=Oe.div`
  font-size: 16px;
  font-weight: 600;
  color: #2c3e50;
  line-height: 1.3;
  
  @media (max-width: 768px) {
    font-size: 15px;
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
  }
`,Dn=Oe.div`
  font-size: 14px;
  color: #7f8c8d;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
  
  @media (max-width: 480px) {
    font-size: 12px;
  }
`,Mn=Oe.div`
  text-align: center;
  font-size: 14px;
  color: #2c3e50;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
  
  @media (max-width: 480px) {
    font-size: 12px;
  }
`,Fn=Oe(Mn)`
  font-weight: 600;
  color: var(--primary-color);
`,$n=Oe.p`
  font-size: 16px;
  color: #7f8c8d;
  text-align: center;
  margin-bottom: 20px;
  line-height: 1.5;
`,Un=Oe.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  color: #7f8c8d;
  font-size: 16px;
`,Hn=Oe.div`
  font-size: 12px;
  color: ${e=>e.isError?"#dc3545":"#6c757d"};
  text-align: center;
  margin-bottom: 10px;
  padding: 5px 10px;
  background: ${e=>e.isError?"#f8d7da":"#f8f9fa"};
  border-radius: 4px;
  border: 1px solid ${e=>e.isError?"#f5c6cb":"#e9ecef"};
`,Wn=Oe.p`
  font-size: 14px;
  color: var(--primary-color);
  text-align: center;
  margin-bottom: 20px;
  font-weight: 500;
  background: #f0f8f0;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #e6f3e6;
`,Bn=t=>{let{onBookClick:n,selectedRegion:r}=t;const[a,i]=(0,e.useState)([]),[o,l]=(0,e.useState)(!0),[s,u]=(0,e.useState)(!1),[c,d]=(0,e.useState)(null),f=(0,e.useCallback)(async()=>{try{l(!0),d(null);const e=(console.log("\u2705 API \uc778\uc99d\ud0a4\uac00 \uc124\uc815\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),!0);u(e);const t=await Ue(r);i(t)}catch(e){console.error("\uc778\uae30 \ub3c4\uc11c \ub85c\ub529 \uc2e4\ud328:",e),d(e instanceof Error?e.message:"\uc54c \uc218 \uc5c6\ub294 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.")}finally{l(!1)}},[r]);return(0,e.useEffect)(()=>{f()},[f]),(0,Re.jsxs)(zn,{children:[(0,Re.jsx)($n,{children:"\ud83d\udcca \uc9c0\uae08 \uac00\uc7a5 \ub9ce\uc774 \ube4c\ub824\uc9c0\ub294 \ub3c4\uc11c TOP 5 (\uc544\ub3d9 \ub3c4\uc11c \uc81c\uc678)"}),(0,Re.jsx)(Hn,{isError:!!c,children:c?c.includes("\ud65c\uc131\ud654")?"\u26a0\ufe0f API \ud0a4\uac00 \uc544\uc9c1 \ud65c\uc131\ud654\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4. \ub3c4\uc11c\uad00 \uc815\ubcf4\ub098\ub8e8\uc5d0\uc11c \uc2b9\uc778\uc744 \uae30\ub2e4\ub824\uc8fc\uc138\uc694.":`\u26a0\ufe0f API \uc624\ub958: ${c}`:s?"\ud83d\udd17 \uc2e4\uc81c \ub3c4\uc11c\uad00 API \uc5f0\uacb0 \uc900\ube44\ub428":"\ud83d\udccb \ub354\ubbf8 \ub370\uc774\ud130 \uc0ac\uc6a9 \uc911 (API \ud0a4 \uc124\uc815 \ud544\uc694)"}),(0,Re.jsx)(Wn,{children:"\ud83d\udca1 \ucc45 \uc81c\ubaa9\uc744 \ud074\ub9ad\ud558\uba74 \ubc14\ub85c \uac80\uc0c9\ud560 \uc218 \uc788\uc5b4\uc694!"}),o?(0,Re.jsx)(Un,{children:"\ud83d\udcda \uc778\uae30 \ub3c4\uc11c\ub97c \ubd88\ub7ec\uc624\ub294 \uc911..."}):(0,Re.jsxs)(Tn,{children:[(0,Re.jsxs)(Nn,{children:[(0,Re.jsx)(On,{children:"\uc21c\uc704"}),(0,Re.jsx)(On,{children:"\ub3c4\uc11c \uc815\ubcf4"}),(0,Re.jsx)(On,{className:"desktop-only",children:"\ucd9c\ud310\uc0ac"}),(0,Re.jsx)(On,{className:"tablet-hide",children:"\ucd9c\uac04\ub144\ub3c4"}),(0,Re.jsx)(On,{children:"\ub300\ucd9c\ud69f\uc218"})]}),a.map((e,t)=>(0,Re.jsxs)(Rn,{onClick:()=>n(e.title),children:[(0,Re.jsx)(Ln,{children:t+1}),(0,Re.jsxs)(An,{children:[(0,Re.jsx)(In,{children:e.title}),(0,Re.jsx)(Dn,{children:e.author})]}),(0,Re.jsx)(Mn,{className:"desktop-only",children:e.publisher}),(0,Re.jsxs)(Mn,{className:"tablet-hide",children:[e.publishYear,"\ub144"]}),(0,Re.jsxs)(Fn,{children:[e.loanCount.toLocaleString(),"\ud68c"]})]},e.id))]})]})},Vn=Oe.div`
  min-height: 100vh;
  background-color: var(--background-color);
`,Kn=Oe.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 16px;
  
  @media (max-width: 768px) {
    padding: 0 12px;
  }
`,Qn=Oe.div`
  background: var(--white);
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e5e5;
  margin-bottom: 16px;
  
  @media (max-width: 768px) {
    padding: 12px;
    margin-bottom: 12px;
    border-radius: 6px;
  }
`,Yn=Oe.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-color);
  margin: 0 0 12px 0;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin: 0 0 8px 0;
  }
`,qn=()=>{const[t,n]=(0,e.useState)([]),[r,a]=(0,e.useState)(""),[i,o]=(0,e.useState)("");return(0,Re.jsx)(Vn,{children:(0,Re.jsxs)(Kn,{children:[(0,Re.jsx)(Le,{}),(0,Re.jsxs)(Qn,{children:[(0,Re.jsx)(Yn,{children:"\ud83d\udcda \uc6d0\ud558\ub294 \ucc45\uc744 \uac80\uc0c9\ud574\ubcf4\uc138\uc694!"}),(0,Re.jsx)(ht,{externalSearchQuery:i,onExternalSearchComplete:()=>{o("")}})]}),(0,Re.jsxs)(Qn,{children:[(0,Re.jsx)(Yn,{children:"\ud83d\uddfa\ufe0f \uc6b0\ub9ac \ub3d9\ub124 \ub3c4\uc11c\uad00 \ub300\ucd9c \ud604\ud669\uc774 \ud55c\ub208\uc5d0!"}),(0,Re.jsx)(Bn,{onBookClick:e=>{o(e),window.scrollTo({top:0,behavior:"smooth"})},selectedRegion:r})]}),(0,Re.jsxs)(Qn,{children:[(0,Re.jsx)(Yn,{children:"\ud83e\udd1d \uc77d\uace0 \uc2f6\uc740 \ucc45\uc774 \uc788\ub2e4\uba74, \ud568\uaed8 \uc77d\uc744 \uc774\uc6c3\ub3c4 \ucc3e\uc544\ubcf4\uc138\uc694"}),(0,Re.jsx)(vn,{libraries:t,selectedRegion:r})]}),(0,Re.jsx)(Pn,{})]})})},Gn=Oe.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 0;
  margin: 0;
`;const Xn=function(){return(0,Re.jsx)(Gn,{children:(0,Re.jsx)(qn,{})})};t.createRoot(document.getElementById("root")).render((0,Re.jsx)(e.StrictMode,{children:(0,Re.jsx)(Xn,{})}))})()})();
//# sourceMappingURL=main.6436bb0f.js.map