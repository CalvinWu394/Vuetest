(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Vl(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Le={},Kr=[],ln=()=>{},Ff=()=>!1,vo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),xl=t=>t.startsWith("onUpdate:"),xt=Object.assign,Dl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Dm=Object.prototype.hasOwnProperty,xe=(t,e)=>Dm.call(t,e),fe=Array.isArray,Gr=t=>Eo(t)==="[object Map]",Uf=t=>Eo(t)==="[object Set]",me=t=>typeof t=="function",lt=t=>typeof t=="string",ur=t=>typeof t=="symbol",je=t=>t!==null&&typeof t=="object",Bf=t=>(je(t)||me(t))&&me(t.then)&&me(t.catch),jf=Object.prototype.toString,Eo=t=>jf.call(t),Nm=t=>Eo(t).slice(8,-1),$f=t=>Eo(t)==="[object Object]",Nl=t=>lt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ds=Vl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),wo=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},Om=/-\w/g,er=wo(t=>t.replace(Om,e=>e.slice(1).toUpperCase())),Mm=/\B([A-Z])/g,Nr=wo(t=>t.replace(Mm,"-$1").toLowerCase()),qf=wo(t=>t.charAt(0).toUpperCase()+t.slice(1)),fa=wo(t=>t?`on${qf(t)}`:""),zn=(t,e)=>!Object.is(t,e),Fi=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Hf=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Ba=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let vu;const To=()=>vu||(vu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ol(t){if(fe(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=lt(r)?Um(r):Ol(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(lt(t)||je(t))return t}const km=/;(?![^(]*\))/g,Lm=/:([^]+)/,Fm=/\/\*[^]*?\*\//g;function Um(t){const e={};return t.replace(Fm,"").split(km).forEach(n=>{if(n){const r=n.split(Lm);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Io(t){let e="";if(lt(t))e=t;else if(fe(t))for(let n=0;n<t.length;n++){const r=Io(t[n]);r&&(e+=r+" ")}else if(je(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Bm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",jm=Vl(Bm);function zf(t){return!!t||t===""}const Kf=t=>!!(t&&t.__v_isRef===!0),ft=t=>lt(t)?t:t==null?"":fe(t)||je(t)&&(t.toString===jf||!me(t.toString))?Kf(t)?ft(t.value):JSON.stringify(t,Gf,2):String(t),Gf=(t,e)=>Kf(e)?Gf(t,e.value):Gr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[da(r,i)+" =>"]=s,n),{})}:Uf(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>da(n))}:ur(e)?da(e):je(e)&&!fe(e)&&!$f(e)?String(e):e,da=(t,e="")=>{var n;return ur(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let bt;class Wf{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=bt,!e&&bt&&(this.index=(bt.scopes||(bt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=bt;try{return bt=this,e()}finally{bt=n}}}on(){++this._on===1&&(this.prevScope=bt,bt=this)}off(){this._on>0&&--this._on===0&&(bt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Qf(t){return new Wf(t)}function Yf(){return bt}function $m(t,e=!1){bt&&bt.cleanups.push(t)}let Fe;const pa=new WeakSet;class Xf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,bt&&bt.active&&bt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,pa.has(this)&&(pa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Zf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Eu(this),ed(this);const e=Fe,n=Xt;Fe=this,Xt=!0;try{return this.fn()}finally{td(this),Fe=e,Xt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ll(e);this.deps=this.depsTail=void 0,Eu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?pa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ja(this)&&this.run()}get dirty(){return ja(this)}}let Jf=0,Ns,Os;function Zf(t,e=!1){if(t.flags|=8,e){t.next=Os,Os=t;return}t.next=Ns,Ns=t}function Ml(){Jf++}function kl(){if(--Jf>0)return;if(Os){let e=Os;for(Os=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ns;){let e=Ns;for(Ns=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function ed(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function td(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Ll(r),qm(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function ja(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(nd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function nd(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ws)||(t.globalVersion=Ws,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!ja(t))))return;t.flags|=2;const e=t.dep,n=Fe,r=Xt;Fe=t,Xt=!0;try{ed(t);const s=t.fn(t._value);(e.version===0||zn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Fe=n,Xt=r,td(t),t.flags&=-3}}function Ll(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Ll(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function qm(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Xt=!0;const rd=[];function An(){rd.push(Xt),Xt=!1}function bn(){const t=rd.pop();Xt=t===void 0?!0:t}function Eu(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Fe;Fe=void 0;try{e()}finally{Fe=n}}}let Ws=0;class Hm{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Fl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Fe||!Xt||Fe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Fe)n=this.activeLink=new Hm(Fe,this),Fe.deps?(n.prevDep=Fe.depsTail,Fe.depsTail.nextDep=n,Fe.depsTail=n):Fe.deps=Fe.depsTail=n,sd(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Fe.depsTail,n.nextDep=void 0,Fe.depsTail.nextDep=n,Fe.depsTail=n,Fe.deps===n&&(Fe.deps=r)}return n}trigger(e){this.version++,Ws++,this.notify(e)}notify(e){Ml();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{kl()}}}function sd(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)sd(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Wi=new WeakMap,Ar=Symbol(""),$a=Symbol(""),Qs=Symbol("");function Rt(t,e,n){if(Xt&&Fe){let r=Wi.get(t);r||Wi.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Fl),s.map=r,s.key=n),s.track()}}function vn(t,e,n,r,s,i){const a=Wi.get(t);if(!a){Ws++;return}const l=c=>{c&&c.trigger()};if(Ml(),e==="clear")a.forEach(l);else{const c=fe(t),h=c&&Nl(n);if(c&&n==="length"){const f=Number(r);a.forEach((p,g)=>{(g==="length"||g===Qs||!ur(g)&&g>=f)&&l(p)})}else switch((n!==void 0||a.has(void 0))&&l(a.get(n)),h&&l(a.get(Qs)),e){case"add":c?h&&l(a.get("length")):(l(a.get(Ar)),Gr(t)&&l(a.get($a)));break;case"delete":c||(l(a.get(Ar)),Gr(t)&&l(a.get($a)));break;case"set":Gr(t)&&l(a.get(Ar));break}}kl()}function zm(t,e){const n=Wi.get(t);return n&&n.get(e)}function Lr(t){const e=Ce(t);return e===t?e:(Rt(e,"iterate",Qs),Yt(t)?e:e.map(Tt))}function Ao(t){return Rt(t=Ce(t),"iterate",Qs),t}const Km={__proto__:null,[Symbol.iterator](){return ga(this,Symbol.iterator,Tt)},concat(...t){return Lr(this).concat(...t.map(e=>fe(e)?Lr(e):e))},entries(){return ga(this,"entries",t=>(t[1]=Tt(t[1]),t))},every(t,e){return gn(this,"every",t,e,void 0,arguments)},filter(t,e){return gn(this,"filter",t,e,n=>n.map(Tt),arguments)},find(t,e){return gn(this,"find",t,e,Tt,arguments)},findIndex(t,e){return gn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return gn(this,"findLast",t,e,Tt,arguments)},findLastIndex(t,e){return gn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return gn(this,"forEach",t,e,void 0,arguments)},includes(...t){return ma(this,"includes",t)},indexOf(...t){return ma(this,"indexOf",t)},join(t){return Lr(this).join(t)},lastIndexOf(...t){return ma(this,"lastIndexOf",t)},map(t,e){return gn(this,"map",t,e,void 0,arguments)},pop(){return Is(this,"pop")},push(...t){return Is(this,"push",t)},reduce(t,...e){return wu(this,"reduce",t,e)},reduceRight(t,...e){return wu(this,"reduceRight",t,e)},shift(){return Is(this,"shift")},some(t,e){return gn(this,"some",t,e,void 0,arguments)},splice(...t){return Is(this,"splice",t)},toReversed(){return Lr(this).toReversed()},toSorted(t){return Lr(this).toSorted(t)},toSpliced(...t){return Lr(this).toSpliced(...t)},unshift(...t){return Is(this,"unshift",t)},values(){return ga(this,"values",Tt)}};function ga(t,e,n){const r=Ao(t),s=r[e]();return r!==t&&!Yt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const Gm=Array.prototype;function gn(t,e,n,r,s,i){const a=Ao(t),l=a!==t&&!Yt(t),c=a[e];if(c!==Gm[e]){const p=c.apply(t,i);return l?Tt(p):p}let h=n;a!==t&&(l?h=function(p,g){return n.call(this,Tt(p),g,t)}:n.length>2&&(h=function(p,g){return n.call(this,p,g,t)}));const f=c.call(a,h,r);return l&&s?s(f):f}function wu(t,e,n,r){const s=Ao(t);let i=n;return s!==t&&(Yt(t)?n.length>3&&(i=function(a,l,c){return n.call(this,a,l,c,t)}):i=function(a,l,c){return n.call(this,a,Tt(l),c,t)}),s[e](i,...r)}function ma(t,e,n){const r=Ce(t);Rt(r,"iterate",Qs);const s=r[e](...n);return(s===-1||s===!1)&&jl(n[0])?(n[0]=Ce(n[0]),r[e](...n)):s}function Is(t,e,n=[]){An(),Ml();const r=Ce(t)[e].apply(t,n);return kl(),bn(),r}const Wm=Vl("__proto__,__v_isRef,__isVue"),id=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ur));function Qm(t){ur(t)||(t=String(t));const e=Ce(this);return Rt(e,"has",t),e.hasOwnProperty(t)}class od{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?i_:ud:i?cd:ld).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=fe(e);if(!s){let c;if(a&&(c=Km[n]))return c;if(n==="hasOwnProperty")return Qm}const l=Reflect.get(e,n,tt(e)?e:r);if((ur(n)?id.has(n):Wm(n))||(s||Rt(e,"get",n),i))return l;if(tt(l)){const c=a&&Nl(n)?l:l.value;return s&&je(c)?Ha(c):c}return je(l)?s?Ha(l):In(l):l}}class ad extends od{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=tr(i);if(!Yt(r)&&!tr(r)&&(i=Ce(i),r=Ce(r)),!fe(e)&&tt(i)&&!tt(r))return c||(i.value=r),!0}const a=fe(e)&&Nl(n)?Number(n)<e.length:xe(e,n),l=Reflect.set(e,n,r,tt(e)?e:s);return e===Ce(s)&&(a?zn(r,i)&&vn(e,"set",n,r):vn(e,"add",n,r)),l}deleteProperty(e,n){const r=xe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&vn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!ur(n)||!id.has(n))&&Rt(e,"has",n),r}ownKeys(e){return Rt(e,"iterate",fe(e)?"length":Ar),Reflect.ownKeys(e)}}class Ym extends od{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Xm=new ad,Jm=new Ym,Zm=new ad(!0);const qa=t=>t,Ci=t=>Reflect.getPrototypeOf(t);function e_(t,e,n){return function(...r){const s=this.__v_raw,i=Ce(s),a=Gr(i),l=t==="entries"||t===Symbol.iterator&&a,c=t==="keys"&&a,h=s[t](...r),f=n?qa:e?Qi:Tt;return!e&&Rt(i,"iterate",c?$a:Ar),{next(){const{value:p,done:g}=h.next();return g?{value:p,done:g}:{value:l?[f(p[0]),f(p[1])]:f(p),done:g}},[Symbol.iterator](){return this}}}}function Pi(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function t_(t,e){const n={get(s){const i=this.__v_raw,a=Ce(i),l=Ce(s);t||(zn(s,l)&&Rt(a,"get",s),Rt(a,"get",l));const{has:c}=Ci(a),h=e?qa:t?Qi:Tt;if(c.call(a,s))return h(i.get(s));if(c.call(a,l))return h(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Rt(Ce(s),"iterate",Ar),s.size},has(s){const i=this.__v_raw,a=Ce(i),l=Ce(s);return t||(zn(s,l)&&Rt(a,"has",s),Rt(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,c=Ce(l),h=e?qa:t?Qi:Tt;return!t&&Rt(c,"iterate",Ar),l.forEach((f,p)=>s.call(i,h(f),h(p),a))}};return xt(n,t?{add:Pi("add"),set:Pi("set"),delete:Pi("delete"),clear:Pi("clear")}:{add(s){!e&&!Yt(s)&&!tr(s)&&(s=Ce(s));const i=Ce(this);return Ci(i).has.call(i,s)||(i.add(s),vn(i,"add",s,s)),this},set(s,i){!e&&!Yt(i)&&!tr(i)&&(i=Ce(i));const a=Ce(this),{has:l,get:c}=Ci(a);let h=l.call(a,s);h||(s=Ce(s),h=l.call(a,s));const f=c.call(a,s);return a.set(s,i),h?zn(i,f)&&vn(a,"set",s,i):vn(a,"add",s,i),this},delete(s){const i=Ce(this),{has:a,get:l}=Ci(i);let c=a.call(i,s);c||(s=Ce(s),c=a.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&vn(i,"delete",s,void 0),h},clear(){const s=Ce(this),i=s.size!==0,a=s.clear();return i&&vn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=e_(s,t,e)}),n}function Ul(t,e){const n=t_(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(xe(n,s)&&s in r?n:r,s,i)}const n_={get:Ul(!1,!1)},r_={get:Ul(!1,!0)},s_={get:Ul(!0,!1)};const ld=new WeakMap,cd=new WeakMap,ud=new WeakMap,i_=new WeakMap;function o_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function a_(t){return t.__v_skip||!Object.isExtensible(t)?0:o_(Nm(t))}function In(t){return tr(t)?t:Bl(t,!1,Xm,n_,ld)}function Ys(t){return Bl(t,!1,Zm,r_,cd)}function Ha(t){return Bl(t,!0,Jm,s_,ud)}function Bl(t,e,n,r,s){if(!je(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=a_(t);if(i===0)return t;const a=s.get(t);if(a)return a;const l=new Proxy(t,i===2?r:n);return s.set(t,l),l}function Kn(t){return tr(t)?Kn(t.__v_raw):!!(t&&t.__v_isReactive)}function tr(t){return!!(t&&t.__v_isReadonly)}function Yt(t){return!!(t&&t.__v_isShallow)}function jl(t){return t?!!t.__v_raw:!1}function Ce(t){const e=t&&t.__v_raw;return e?Ce(e):t}function $l(t){return!xe(t,"__v_skip")&&Object.isExtensible(t)&&Hf(t,"__v_skip",!0),t}const Tt=t=>je(t)?In(t):t,Qi=t=>je(t)?Ha(t):t;function tt(t){return t?t.__v_isRef===!0:!1}function De(t){return hd(t,!1)}function l_(t){return hd(t,!0)}function hd(t,e){return tt(t)?t:new c_(t,e)}class c_{constructor(e,n){this.dep=new Fl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ce(e),this._value=n?e:Tt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Yt(e)||tr(e);e=r?e:Ce(e),zn(e,n)&&(this._rawValue=e,this._value=r?e:Tt(e),this.dep.trigger())}}function et(t){return tt(t)?t.value:t}const u_={get:(t,e,n)=>e==="__v_raw"?t:et(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return tt(s)&&!tt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function fd(t){return Kn(t)?t:new Proxy(t,u_)}function dd(t){const e=fe(t)?new Array(t.length):{};for(const n in t)e[n]=f_(t,n);return e}class h_{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return zm(Ce(this._object),this._key)}}function f_(t,e,n){const r=t[e];return tt(r)?r:new h_(t,e,n)}class d_{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Fl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ws-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Fe!==this)return Zf(this,!0),!0}get value(){const e=this.dep.track();return nd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function p_(t,e,n=!1){let r,s;return me(t)?r=t:(r=t.get,s=t.set),new d_(r,s,n)}const Vi={},Yi=new WeakMap;let Er;function g_(t,e=!1,n=Er){if(n){let r=Yi.get(n);r||Yi.set(n,r=[]),r.push(t)}}function m_(t,e,n=Le){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:c}=n,h=G=>s?G:Yt(G)||s===!1||s===0?En(G,1):En(G);let f,p,g,_,R=!1,V=!1;if(tt(t)?(p=()=>t.value,R=Yt(t)):Kn(t)?(p=()=>h(t),R=!0):fe(t)?(V=!0,R=t.some(G=>Kn(G)||Yt(G)),p=()=>t.map(G=>{if(tt(G))return G.value;if(Kn(G))return h(G);if(me(G))return c?c(G,2):G()})):me(t)?e?p=c?()=>c(t,2):t:p=()=>{if(g){An();try{g()}finally{bn()}}const G=Er;Er=f;try{return c?c(t,3,[_]):t(_)}finally{Er=G}}:p=ln,e&&s){const G=p,re=s===!0?1/0:s;p=()=>En(G(),re)}const M=Yf(),$=()=>{f.stop(),M&&M.active&&Dl(M.effects,f)};if(i&&e){const G=e;e=(...re)=>{G(...re),$()}}let j=V?new Array(t.length).fill(Vi):Vi;const q=G=>{if(!(!(f.flags&1)||!f.dirty&&!G))if(e){const re=f.run();if(s||R||(V?re.some((ge,A)=>zn(ge,j[A])):zn(re,j))){g&&g();const ge=Er;Er=f;try{const A=[re,j===Vi?void 0:V&&j[0]===Vi?[]:j,_];j=re,c?c(e,3,A):e(...A)}finally{Er=ge}}}else f.run()};return l&&l(q),f=new Xf(p),f.scheduler=a?()=>a(q,!1):q,_=G=>g_(G,!1,f),g=f.onStop=()=>{const G=Yi.get(f);if(G){if(c)c(G,4);else for(const re of G)re();Yi.delete(f)}},e?r?q(!0):j=f.run():a?a(q.bind(null,!0),!0):f.run(),$.pause=f.pause.bind(f),$.resume=f.resume.bind(f),$.stop=$,$}function En(t,e=1/0,n){if(e<=0||!je(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,tt(t))En(t.value,e,n);else if(fe(t))for(let r=0;r<t.length;r++)En(t[r],e,n);else if(Uf(t)||Gr(t))t.forEach(r=>{En(r,e,n)});else if($f(t)){for(const r in t)En(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&En(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ci(t,e,n,r){try{return r?t(...r):t()}catch(s){bo(s,e,n)}}function hn(t,e,n,r){if(me(t)){const s=ci(t,e,n,r);return s&&Bf(s)&&s.catch(i=>{bo(i,e,n)}),s}if(fe(t)){const s=[];for(let i=0;i<t.length;i++)s.push(hn(t[i],e,n,r));return s}}function bo(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Le;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,c,h)===!1)return}l=l.parent}if(i){An(),ci(i,null,10,[t,c,h]),bn();return}}__(t,n,s,r,a)}function __(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Mt=[];let nn=-1;const Wr=[];let Bn=null,Ur=0;const pd=Promise.resolve();let Xi=null;function ql(t){const e=Xi||pd;return t?e.then(this?t.bind(this):t):e}function y_(t){let e=nn+1,n=Mt.length;for(;e<n;){const r=e+n>>>1,s=Mt[r],i=Xs(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Hl(t){if(!(t.flags&1)){const e=Xs(t),n=Mt[Mt.length-1];!n||!(t.flags&2)&&e>=Xs(n)?Mt.push(t):Mt.splice(y_(e),0,t),t.flags|=1,gd()}}function gd(){Xi||(Xi=pd.then(_d))}function v_(t){fe(t)?Wr.push(...t):Bn&&t.id===-1?Bn.splice(Ur+1,0,t):t.flags&1||(Wr.push(t),t.flags|=1),gd()}function Tu(t,e,n=nn+1){for(;n<Mt.length;n++){const r=Mt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Mt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function md(t){if(Wr.length){const e=[...new Set(Wr)].sort((n,r)=>Xs(n)-Xs(r));if(Wr.length=0,Bn){Bn.push(...e);return}for(Bn=e,Ur=0;Ur<Bn.length;Ur++){const n=Bn[Ur];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Bn=null,Ur=0}}const Xs=t=>t.id==null?t.flags&2?-1:1/0:t.id;function _d(t){try{for(nn=0;nn<Mt.length;nn++){const e=Mt[nn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ci(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;nn<Mt.length;nn++){const e=Mt[nn];e&&(e.flags&=-2)}nn=-1,Mt.length=0,md(),Xi=null,(Mt.length||Wr.length)&&_d()}}let Qt=null,yd=null;function Ji(t){const e=Qt;return Qt=t,yd=t&&t.type.__scopeId||null,e}function wn(t,e=Qt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&no(-1);const i=Ji(e);let a;try{a=t(...s)}finally{Ji(i),r._d&&no(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Zi(t,e){if(Qt===null)return t;const n=Vo(Qt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,l,c=Le]=e[s];i&&(me(i)&&(i={mounted:i,updated:i}),i.deep&&En(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function yr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let c=l.dir[r];c&&(An(),hn(c,n,8,[t.el,l,t,e]),bn())}}const E_=Symbol("_vte"),w_=t=>t.__isTeleport,T_=Symbol("_leaveCb");function zl(t,e){t.shapeFlag&6&&t.component?(t.transition=e,zl(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function hr(t,e){return me(t)?xt({name:t.name},e,{setup:t}):t}function I_(){const t=Po();return t?(t.appContext.config.idPrefix||"v")+"-"+t.ids[0]+t.ids[1]++:""}function vd(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const eo=new WeakMap;function Ms(t,e,n,r,s=!1){if(fe(t)){t.forEach((R,V)=>Ms(R,e&&(fe(e)?e[V]:e),n,r,s));return}if(ks(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ms(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Vo(r.component):r.el,a=s?null:i,{i:l,r:c}=t,h=e&&e.r,f=l.refs===Le?l.refs={}:l.refs,p=l.setupState,g=Ce(p),_=p===Le?Ff:R=>xe(g,R);if(h!=null&&h!==c){if(Iu(e),lt(h))f[h]=null,_(h)&&(p[h]=null);else if(tt(h)){h.value=null;const R=e;R.k&&(f[R.k]=null)}}if(me(c))ci(c,l,12,[a,f]);else{const R=lt(c),V=tt(c);if(R||V){const M=()=>{if(t.f){const $=R?_(c)?p[c]:f[c]:c.value;if(s)fe($)&&Dl($,i);else if(fe($))$.includes(i)||$.push(i);else if(R)f[c]=[i],_(c)&&(p[c]=f[c]);else{const j=[i];c.value=j,t.k&&(f[t.k]=j)}}else R?(f[c]=a,_(c)&&(p[c]=a)):V&&(c.value=a,t.k&&(f[t.k]=a))};if(a){const $=()=>{M(),eo.delete(t)};$.id=-1,eo.set(t,$),zt($,n)}else Iu(t),M()}}}function Iu(t){const e=eo.get(t);e&&(e.flags|=8,eo.delete(t))}To().requestIdleCallback;To().cancelIdleCallback;const ks=t=>!!t.type.__asyncLoader,Ed=t=>t.type.__isKeepAlive;function A_(t,e){wd(t,"a",e)}function b_(t,e){wd(t,"da",e)}function wd(t,e,n=Lt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(So(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Ed(s.parent.vnode)&&S_(r,e,n,s),s=s.parent}}function S_(t,e,n,r){const s=So(e,t,r,!0);Kl(()=>{Dl(r[e],s)},n)}function So(t,e,n=Lt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...a)=>{An();const l=hi(n),c=hn(e,n,t,a);return l(),bn(),c});return r?s.unshift(i):s.push(i),i}}const Pn=t=>(e,n=Lt)=>{(!Zs||t==="sp")&&So(t,(...r)=>e(...r),n)},R_=Pn("bm"),ui=Pn("m"),C_=Pn("bu"),Td=Pn("u"),Id=Pn("bum"),Kl=Pn("um"),P_=Pn("sp"),V_=Pn("rtg"),x_=Pn("rtc");function D_(t,e=Lt){So("ec",t,e)}const N_=Symbol.for("v-ndc");function Ss(t,e,n,r){let s;const i=n,a=fe(t);if(a||lt(t)){const l=a&&Kn(t);let c=!1,h=!1;l&&(c=!Yt(t),h=tr(t),t=Ao(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(c?h?Qi(Tt(t[f])):Tt(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(je(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const f=l[c];s[c]=e(t[f],f,c,i)}}else s=[];return s}const za=t=>t?qd(t)?Vo(t):za(t.parent):null,Ls=xt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>za(t.parent),$root:t=>za(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>bd(t),$forceUpdate:t=>t.f||(t.f=()=>{Hl(t.update)}),$nextTick:t=>t.n||(t.n=ql.bind(t.proxy)),$watch:t=>ty.bind(t)}),_a=(t,e)=>t!==Le&&!t.__isScriptSetup&&xe(t,e),O_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:c}=t;let h;if(e[0]!=="$"){const _=a[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(_a(r,e))return a[e]=1,r[e];if(s!==Le&&xe(s,e))return a[e]=2,s[e];if((h=t.propsOptions[0])&&xe(h,e))return a[e]=3,i[e];if(n!==Le&&xe(n,e))return a[e]=4,n[e];Ka&&(a[e]=0)}}const f=Ls[e];let p,g;if(f)return e==="$attrs"&&Rt(t.attrs,"get",""),f(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Le&&xe(n,e))return a[e]=4,n[e];if(g=c.config.globalProperties,xe(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return _a(s,e)?(s[e]=n,!0):r!==Le&&xe(r,e)?(r[e]=n,!0):xe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i,type:a}},l){let c,h;return!!(n[l]||t!==Le&&l[0]!=="$"&&xe(t,l)||_a(e,l)||(c=i[0])&&xe(c,l)||xe(r,l)||xe(Ls,l)||xe(s.config.globalProperties,l)||(h=a.__cssModules)&&h[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:xe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Au(t){return fe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ka=!0;function M_(t){const e=bd(t),n=t.proxy,r=t.ctx;Ka=!1,e.beforeCreate&&bu(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:a,watch:l,provide:c,inject:h,created:f,beforeMount:p,mounted:g,beforeUpdate:_,updated:R,activated:V,deactivated:M,beforeDestroy:$,beforeUnmount:j,destroyed:q,unmounted:G,render:re,renderTracked:ge,renderTriggered:A,errorCaptured:y,serverPrefetch:v,expose:b,inheritAttrs:I,components:S,directives:w,filters:Me}=e;if(h&&k_(h,r,null),a)for(const ce in a){const Ee=a[ce];me(Ee)&&(r[ce]=Ee.bind(n))}if(s){const ce=s.call(n,n);je(ce)&&(t.data=In(ce))}if(Ka=!0,i)for(const ce in i){const Ee=i[ce],He=me(Ee)?Ee.bind(n,n):me(Ee.get)?Ee.get.bind(n,n):ln,Dt=!me(Ee)&&me(Ee.set)?Ee.set.bind(n):ln,Et=le({get:He,set:Dt});Object.defineProperty(r,ce,{enumerable:!0,configurable:!0,get:()=>Et.value,set:$e=>Et.value=$e})}if(l)for(const ce in l)Ad(l[ce],r,n,ce);if(c){const ce=me(c)?c.call(n):c;Reflect.ownKeys(ce).forEach(Ee=>{Qr(Ee,ce[Ee])})}f&&bu(f,t,"c");function Oe(ce,Ee){fe(Ee)?Ee.forEach(He=>ce(He.bind(n))):Ee&&ce(Ee.bind(n))}if(Oe(R_,p),Oe(ui,g),Oe(C_,_),Oe(Td,R),Oe(A_,V),Oe(b_,M),Oe(D_,y),Oe(x_,ge),Oe(V_,A),Oe(Id,j),Oe(Kl,G),Oe(P_,v),fe(b))if(b.length){const ce=t.exposed||(t.exposed={});b.forEach(Ee=>{Object.defineProperty(ce,Ee,{get:()=>n[Ee],set:He=>n[Ee]=He,enumerable:!0})})}else t.exposed||(t.exposed={});re&&t.render===ln&&(t.render=re),I!=null&&(t.inheritAttrs=I),S&&(t.components=S),w&&(t.directives=w),v&&vd(t)}function k_(t,e,n=ln){fe(t)&&(t=Ga(t));for(const r in t){const s=t[r];let i;je(s)?"default"in s?i=Vt(s.from||r,s.default,!0):i=Vt(s.from||r):i=Vt(s),tt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function bu(t,e,n){hn(fe(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ad(t,e,n,r){let s=r.includes(".")?Ld(n,r):()=>n[r];if(lt(t)){const i=e[t];me(i)&&Tn(s,i)}else if(me(t))Tn(s,t.bind(n));else if(je(t))if(fe(t))t.forEach(i=>Ad(i,e,n,r));else{const i=me(t.handler)?t.handler.bind(n):e[t.handler];me(i)&&Tn(s,i,t)}}function bd(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(h=>to(c,h,a,!0)),to(c,e,a)),je(e)&&i.set(e,c),c}function to(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&to(t,i,n,!0),s&&s.forEach(a=>to(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const l=L_[a]||n&&n[a];t[a]=l?l(t[a],e[a]):e[a]}return t}const L_={data:Su,props:Ru,emits:Ru,methods:Rs,computed:Rs,beforeCreate:Ot,created:Ot,beforeMount:Ot,mounted:Ot,beforeUpdate:Ot,updated:Ot,beforeDestroy:Ot,beforeUnmount:Ot,destroyed:Ot,unmounted:Ot,activated:Ot,deactivated:Ot,errorCaptured:Ot,serverPrefetch:Ot,components:Rs,directives:Rs,watch:U_,provide:Su,inject:F_};function Su(t,e){return e?t?function(){return xt(me(t)?t.call(this,this):t,me(e)?e.call(this,this):e)}:e:t}function F_(t,e){return Rs(Ga(t),Ga(e))}function Ga(t){if(fe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ot(t,e){return t?[...new Set([].concat(t,e))]:e}function Rs(t,e){return t?xt(Object.create(null),t,e):e}function Ru(t,e){return t?fe(t)&&fe(e)?[...new Set([...t,...e])]:xt(Object.create(null),Au(t),Au(e??{})):e}function U_(t,e){if(!t)return e;if(!e)return t;const n=xt(Object.create(null),t);for(const r in e)n[r]=Ot(t[r],e[r]);return n}function Sd(){return{app:null,config:{isNativeTag:Ff,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let B_=0;function j_(t,e){return function(r,s=null){me(r)||(r=xt({},r)),s!=null&&!je(s)&&(s=null);const i=Sd(),a=new WeakSet,l=[];let c=!1;const h=i.app={_uid:B_++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Iy,get config(){return i.config},set config(f){},use(f,...p){return a.has(f)||(f&&me(f.install)?(a.add(f),f.install(h,...p)):me(f)&&(a.add(f),f(h,...p))),h},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),h},component(f,p){return p?(i.components[f]=p,h):i.components[f]},directive(f,p){return p?(i.directives[f]=p,h):i.directives[f]},mount(f,p,g){if(!c){const _=h._ceVNode||We(r,s);return _.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(_,f,g),c=!0,h._container=f,f.__vue_app__=h,Vo(_.component)}},onUnmount(f){l.push(f)},unmount(){c&&(hn(l,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(f,p){return i.provides[f]=p,h},runWithContext(f){const p=br;br=h;try{return f()}finally{br=p}}};return h}}let br=null;function Qr(t,e){if(Lt){let n=Lt.provides;const r=Lt.parent&&Lt.parent.provides;r===n&&(n=Lt.provides=Object.create(r)),n[t]=e}}function Vt(t,e,n=!1){const r=Po();if(r||br){let s=br?br._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&me(e)?e.call(r&&r.proxy):e}}function $_(){return!!(Po()||br)}const Rd={},Cd=()=>Object.create(Rd),Pd=t=>Object.getPrototypeOf(t)===Rd;function q_(t,e,n,r=!1){const s={},i=Cd();t.propsDefaults=Object.create(null),Vd(t,e,s,i);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=r?s:Ys(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function H_(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=t,l=Ce(s),[c]=t.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let g=f[p];if(Ro(t.emitsOptions,g))continue;const _=e[g];if(c)if(xe(i,g))_!==i[g]&&(i[g]=_,h=!0);else{const R=er(g);s[R]=Wa(c,l,R,_,t,!1)}else _!==i[g]&&(i[g]=_,h=!0)}}}else{Vd(t,e,s,i)&&(h=!0);let f;for(const p in l)(!e||!xe(e,p)&&((f=Nr(p))===p||!xe(e,f)))&&(c?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=Wa(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!xe(e,p))&&(delete i[p],h=!0)}h&&vn(t.attrs,"set","")}function Vd(t,e,n,r){const[s,i]=t.propsOptions;let a=!1,l;if(e)for(let c in e){if(Ds(c))continue;const h=e[c];let f;s&&xe(s,f=er(c))?!i||!i.includes(f)?n[f]=h:(l||(l={}))[f]=h:Ro(t.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,a=!0)}if(i){const c=Ce(n),h=l||Le;for(let f=0;f<i.length;f++){const p=i[f];n[p]=Wa(s,c,p,h[p],t,!xe(h,p))}}return a}function Wa(t,e,n,r,s,i){const a=t[n];if(a!=null){const l=xe(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&me(c)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const f=hi(s);r=h[n]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===Nr(n))&&(r=!0))}return r}const z_=new WeakMap;function xd(t,e,n=!1){const r=n?z_:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,a={},l=[];let c=!1;if(!me(t)){const f=p=>{c=!0;const[g,_]=xd(p,e,!0);xt(a,g),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return je(t)&&r.set(t,Kr),Kr;if(fe(i))for(let f=0;f<i.length;f++){const p=er(i[f]);Cu(p)&&(a[p]=Le)}else if(i)for(const f in i){const p=er(f);if(Cu(p)){const g=i[f],_=a[p]=fe(g)||me(g)?{type:g}:xt({},g),R=_.type;let V=!1,M=!0;if(fe(R))for(let $=0;$<R.length;++$){const j=R[$],q=me(j)&&j.name;if(q==="Boolean"){V=!0;break}else q==="String"&&(M=!1)}else V=me(R)&&R.name==="Boolean";_[0]=V,_[1]=M,(V||xe(_,"default"))&&l.push(p)}}const h=[a,l];return je(t)&&r.set(t,h),h}function Cu(t){return t[0]!=="$"&&!Ds(t)}const Gl=t=>t==="_"||t==="_ctx"||t==="$stable",Wl=t=>fe(t)?t.map(sn):[sn(t)],K_=(t,e,n)=>{if(e._n)return e;const r=wn((...s)=>Wl(e(...s)),n);return r._c=!1,r},Dd=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Gl(s))continue;const i=t[s];if(me(i))e[s]=K_(s,i,r);else if(i!=null){const a=Wl(i);e[s]=()=>a}}},Nd=(t,e)=>{const n=Wl(e);t.slots.default=()=>n},Od=(t,e,n)=>{for(const r in e)(n||!Gl(r))&&(t[r]=e[r])},G_=(t,e,n)=>{const r=t.slots=Cd();if(t.vnode.shapeFlag&32){const s=e._;s?(Od(r,e,n),n&&Hf(r,"_",s,!0)):Dd(e,r)}else e&&Nd(t,e)},W_=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,a=Le;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Od(s,e,n):(i=!e.$stable,Dd(e,s)),a=e}else e&&(Nd(t,e),a={default:1});if(i)for(const l in s)!Gl(l)&&a[l]==null&&delete s[l]},zt=cy;function Q_(t){return Y_(t)}function Y_(t,e){const n=To();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:c,setText:h,setElementText:f,parentNode:p,nextSibling:g,setScopeId:_=ln,insertStaticContent:R}=t,V=(E,T,C,D=null,k=null,N=null,W=void 0,B=null,F=!!T.dynamicChildren)=>{if(E===T)return;E&&!As(E,T)&&(D=O(E),$e(E,k,N,!0),E=null),T.patchFlag===-2&&(F=!1,T.dynamicChildren=null);const{type:U,ref:oe,shapeFlag:K}=T;switch(U){case Co:M(E,T,C,D);break;case nr:$(E,T,C,D);break;case Ui:E==null&&j(T,C,D,W);break;case kt:S(E,T,C,D,k,N,W,B,F);break;default:K&1?re(E,T,C,D,k,N,W,B,F):K&6?w(E,T,C,D,k,N,W,B,F):(K&64||K&128)&&U.process(E,T,C,D,k,N,W,B,F,ee)}oe!=null&&k?Ms(oe,E&&E.ref,N,T||E,!T):oe==null&&E&&E.ref!=null&&Ms(E.ref,null,N,E,!0)},M=(E,T,C,D)=>{if(E==null)r(T.el=l(T.children),C,D);else{const k=T.el=E.el;T.children!==E.children&&h(k,T.children)}},$=(E,T,C,D)=>{E==null?r(T.el=c(T.children||""),C,D):T.el=E.el},j=(E,T,C,D)=>{[E.el,E.anchor]=R(E.children,T,C,D,E.el,E.anchor)},q=({el:E,anchor:T},C,D)=>{let k;for(;E&&E!==T;)k=g(E),r(E,C,D),E=k;r(T,C,D)},G=({el:E,anchor:T})=>{let C;for(;E&&E!==T;)C=g(E),s(E),E=C;s(T)},re=(E,T,C,D,k,N,W,B,F)=>{T.type==="svg"?W="svg":T.type==="math"&&(W="mathml"),E==null?ge(T,C,D,k,N,W,B,F):v(E,T,k,N,W,B,F)},ge=(E,T,C,D,k,N,W,B)=>{let F,U;const{props:oe,shapeFlag:K,transition:te,dirs:se}=E;if(F=E.el=a(E.type,N,oe&&oe.is,oe),K&8?f(F,E.children):K&16&&y(E.children,F,null,D,k,ya(E,N),W,B),se&&yr(E,null,D,"created"),A(F,E,E.scopeId,W,D),oe){for(const Re in oe)Re!=="value"&&!Ds(Re)&&i(F,Re,null,oe[Re],N,D);"value"in oe&&i(F,"value",null,oe.value,N),(U=oe.onVnodeBeforeMount)&&tn(U,D,E)}se&&yr(E,null,D,"beforeMount");const ye=X_(k,te);ye&&te.beforeEnter(F),r(F,T,C),((U=oe&&oe.onVnodeMounted)||ye||se)&&zt(()=>{U&&tn(U,D,E),ye&&te.enter(F),se&&yr(E,null,D,"mounted")},k)},A=(E,T,C,D,k)=>{if(C&&_(E,C),D)for(let N=0;N<D.length;N++)_(E,D[N]);if(k){let N=k.subTree;if(T===N||Ud(N.type)&&(N.ssContent===T||N.ssFallback===T)){const W=k.vnode;A(E,W,W.scopeId,W.slotScopeIds,k.parent)}}},y=(E,T,C,D,k,N,W,B,F=0)=>{for(let U=F;U<E.length;U++){const oe=E[U]=B?jn(E[U]):sn(E[U]);V(null,oe,T,C,D,k,N,W,B)}},v=(E,T,C,D,k,N,W)=>{const B=T.el=E.el;let{patchFlag:F,dynamicChildren:U,dirs:oe}=T;F|=E.patchFlag&16;const K=E.props||Le,te=T.props||Le;let se;if(C&&vr(C,!1),(se=te.onVnodeBeforeUpdate)&&tn(se,C,T,E),oe&&yr(T,E,C,"beforeUpdate"),C&&vr(C,!0),(K.innerHTML&&te.innerHTML==null||K.textContent&&te.textContent==null)&&f(B,""),U?b(E.dynamicChildren,U,B,C,D,ya(T,k),N):W||Ee(E,T,B,null,C,D,ya(T,k),N,!1),F>0){if(F&16)I(B,K,te,C,k);else if(F&2&&K.class!==te.class&&i(B,"class",null,te.class,k),F&4&&i(B,"style",K.style,te.style,k),F&8){const ye=T.dynamicProps;for(let Re=0;Re<ye.length;Re++){const ve=ye[Re],rt=K[ve],st=te[ve];(st!==rt||ve==="value")&&i(B,ve,rt,st,k,C)}}F&1&&E.children!==T.children&&f(B,T.children)}else!W&&U==null&&I(B,K,te,C,k);((se=te.onVnodeUpdated)||oe)&&zt(()=>{se&&tn(se,C,T,E),oe&&yr(T,E,C,"updated")},D)},b=(E,T,C,D,k,N,W)=>{for(let B=0;B<T.length;B++){const F=E[B],U=T[B],oe=F.el&&(F.type===kt||!As(F,U)||F.shapeFlag&198)?p(F.el):C;V(F,U,oe,null,D,k,N,W,!0)}},I=(E,T,C,D,k)=>{if(T!==C){if(T!==Le)for(const N in T)!Ds(N)&&!(N in C)&&i(E,N,T[N],null,k,D);for(const N in C){if(Ds(N))continue;const W=C[N],B=T[N];W!==B&&N!=="value"&&i(E,N,B,W,k,D)}"value"in C&&i(E,"value",T.value,C.value,k)}},S=(E,T,C,D,k,N,W,B,F)=>{const U=T.el=E?E.el:l(""),oe=T.anchor=E?E.anchor:l("");let{patchFlag:K,dynamicChildren:te,slotScopeIds:se}=T;se&&(B=B?B.concat(se):se),E==null?(r(U,C,D),r(oe,C,D),y(T.children||[],C,oe,k,N,W,B,F)):K>0&&K&64&&te&&E.dynamicChildren?(b(E.dynamicChildren,te,C,k,N,W,B),(T.key!=null||k&&T===k.subTree)&&Md(E,T,!0)):Ee(E,T,C,oe,k,N,W,B,F)},w=(E,T,C,D,k,N,W,B,F)=>{T.slotScopeIds=B,E==null?T.shapeFlag&512?k.ctx.activate(T,C,D,W,F):Me(T,C,D,k,N,W,F):Ne(E,T,F)},Me=(E,T,C,D,k,N,W)=>{const B=E.component=_y(E,D,k);if(Ed(E)&&(B.ctx.renderer=ee),yy(B,!1,W),B.asyncDep){if(k&&k.registerDep(B,Oe,W),!E.el){const F=B.subTree=We(nr);$(null,F,T,C),E.placeholder=F.el}}else Oe(B,E,T,C,k,N,W)},Ne=(E,T,C)=>{const D=T.component=E.component;if(ay(E,T,C))if(D.asyncDep&&!D.asyncResolved){ce(D,T,C);return}else D.next=T,D.update();else T.el=E.el,D.vnode=T},Oe=(E,T,C,D,k,N,W)=>{const B=()=>{if(E.isMounted){let{next:K,bu:te,u:se,parent:ye,vnode:Re}=E;{const Nt=kd(E);if(Nt){K&&(K.el=Re.el,ce(E,K,W)),Nt.asyncDep.then(()=>{E.isUnmounted||B()});return}}let ve=K,rt;vr(E,!1),K?(K.el=Re.el,ce(E,K,W)):K=Re,te&&Fi(te),(rt=K.props&&K.props.onVnodeBeforeUpdate)&&tn(rt,ye,K,Re),vr(E,!0);const st=Vu(E),mt=E.subTree;E.subTree=st,V(mt,st,p(mt.el),O(mt),E,k,N),K.el=st.el,ve===null&&ly(E,st.el),se&&zt(se,k),(rt=K.props&&K.props.onVnodeUpdated)&&zt(()=>tn(rt,ye,K,Re),k)}else{let K;const{el:te,props:se}=T,{bm:ye,m:Re,parent:ve,root:rt,type:st}=E,mt=ks(T);vr(E,!1),ye&&Fi(ye),!mt&&(K=se&&se.onVnodeBeforeMount)&&tn(K,ve,T),vr(E,!0);{rt.ce&&rt.ce._def.shadowRoot!==!1&&rt.ce._injectChildStyle(st);const Nt=E.subTree=Vu(E);V(null,Nt,C,D,E,k,N),T.el=Nt.el}if(Re&&zt(Re,k),!mt&&(K=se&&se.onVnodeMounted)){const Nt=T;zt(()=>tn(K,ve,Nt),k)}(T.shapeFlag&256||ve&&ks(ve.vnode)&&ve.vnode.shapeFlag&256)&&E.a&&zt(E.a,k),E.isMounted=!0,T=C=D=null}};E.scope.on();const F=E.effect=new Xf(B);E.scope.off();const U=E.update=F.run.bind(F),oe=E.job=F.runIfDirty.bind(F);oe.i=E,oe.id=E.uid,F.scheduler=()=>Hl(oe),vr(E,!0),U()},ce=(E,T,C)=>{T.component=E;const D=E.vnode.props;E.vnode=T,E.next=null,H_(E,T.props,D,C),W_(E,T.children,C),An(),Tu(E),bn()},Ee=(E,T,C,D,k,N,W,B,F=!1)=>{const U=E&&E.children,oe=E?E.shapeFlag:0,K=T.children,{patchFlag:te,shapeFlag:se}=T;if(te>0){if(te&128){Dt(U,K,C,D,k,N,W,B,F);return}else if(te&256){He(U,K,C,D,k,N,W,B,F);return}}se&8?(oe&16&&ct(U,k,N),K!==U&&f(C,K)):oe&16?se&16?Dt(U,K,C,D,k,N,W,B,F):ct(U,k,N,!0):(oe&8&&f(C,""),se&16&&y(K,C,D,k,N,W,B,F))},He=(E,T,C,D,k,N,W,B,F)=>{E=E||Kr,T=T||Kr;const U=E.length,oe=T.length,K=Math.min(U,oe);let te;for(te=0;te<K;te++){const se=T[te]=F?jn(T[te]):sn(T[te]);V(E[te],se,C,null,k,N,W,B,F)}U>oe?ct(E,k,N,!0,!1,K):y(T,C,D,k,N,W,B,F,K)},Dt=(E,T,C,D,k,N,W,B,F)=>{let U=0;const oe=T.length;let K=E.length-1,te=oe-1;for(;U<=K&&U<=te;){const se=E[U],ye=T[U]=F?jn(T[U]):sn(T[U]);if(As(se,ye))V(se,ye,C,null,k,N,W,B,F);else break;U++}for(;U<=K&&U<=te;){const se=E[K],ye=T[te]=F?jn(T[te]):sn(T[te]);if(As(se,ye))V(se,ye,C,null,k,N,W,B,F);else break;K--,te--}if(U>K){if(U<=te){const se=te+1,ye=se<oe?T[se].el:D;for(;U<=te;)V(null,T[U]=F?jn(T[U]):sn(T[U]),C,ye,k,N,W,B,F),U++}}else if(U>te)for(;U<=K;)$e(E[U],k,N,!0),U++;else{const se=U,ye=U,Re=new Map;for(U=ye;U<=te;U++){const _t=T[U]=F?jn(T[U]):sn(T[U]);_t.key!=null&&Re.set(_t.key,U)}let ve,rt=0;const st=te-ye+1;let mt=!1,Nt=0;const qt=new Array(st);for(U=0;U<st;U++)qt[U]=0;for(U=se;U<=K;U++){const _t=E[U];if(rt>=st){$e(_t,k,N,!0);continue}let Qe;if(_t.key!=null)Qe=Re.get(_t.key);else for(ve=ye;ve<=te;ve++)if(qt[ve-ye]===0&&As(_t,T[ve])){Qe=ve;break}Qe===void 0?$e(_t,k,N,!0):(qt[Qe-ye]=U+1,Qe>=Nt?Nt=Qe:mt=!0,V(_t,T[Qe],C,null,k,N,W,B,F),rt++)}const Vn=mt?J_(qt):Kr;for(ve=Vn.length-1,U=st-1;U>=0;U--){const _t=ye+U,Qe=T[_t],pn=T[_t+1],Q=_t+1<oe?pn.el||pn.placeholder:D;qt[U]===0?V(null,Qe,C,Q,k,N,W,B,F):mt&&(ve<0||U!==Vn[ve]?Et(Qe,C,Q,2):ve--)}}},Et=(E,T,C,D,k=null)=>{const{el:N,type:W,transition:B,children:F,shapeFlag:U}=E;if(U&6){Et(E.component.subTree,T,C,D);return}if(U&128){E.suspense.move(T,C,D);return}if(U&64){W.move(E,T,C,ee);return}if(W===kt){r(N,T,C);for(let K=0;K<F.length;K++)Et(F[K],T,C,D);r(E.anchor,T,C);return}if(W===Ui){q(E,T,C);return}if(D!==2&&U&1&&B)if(D===0)B.beforeEnter(N),r(N,T,C),zt(()=>B.enter(N),k);else{const{leave:K,delayLeave:te,afterLeave:se}=B,ye=()=>{E.ctx.isUnmounted?s(N):r(N,T,C)},Re=()=>{N._isLeaving&&N[T_](!0),K(N,()=>{ye(),se&&se()})};te?te(N,ye,Re):Re()}else r(N,T,C)},$e=(E,T,C,D=!1,k=!1)=>{const{type:N,props:W,ref:B,children:F,dynamicChildren:U,shapeFlag:oe,patchFlag:K,dirs:te,cacheIndex:se}=E;if(K===-2&&(k=!1),B!=null&&(An(),Ms(B,null,C,E,!0),bn()),se!=null&&(T.renderCache[se]=void 0),oe&256){T.ctx.deactivate(E);return}const ye=oe&1&&te,Re=!ks(E);let ve;if(Re&&(ve=W&&W.onVnodeBeforeUnmount)&&tn(ve,T,E),oe&6)$t(E.component,C,D);else{if(oe&128){E.suspense.unmount(C,D);return}ye&&yr(E,null,T,"beforeUnmount"),oe&64?E.type.remove(E,T,C,ee,D):U&&!U.hasOnce&&(N!==kt||K>0&&K&64)?ct(U,T,C,!1,!0):(N===kt&&K&384||!k&&oe&16)&&ct(F,T,C),D&&Wt(E)}(Re&&(ve=W&&W.onVnodeUnmounted)||ye)&&zt(()=>{ve&&tn(ve,T,E),ye&&yr(E,null,T,"unmounted")},C)},Wt=E=>{const{type:T,el:C,anchor:D,transition:k}=E;if(T===kt){Ut(C,D);return}if(T===Ui){G(E);return}const N=()=>{s(C),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if(E.shapeFlag&1&&k&&!k.persisted){const{leave:W,delayLeave:B}=k,F=()=>W(C,N);B?B(E.el,N,F):F()}else N()},Ut=(E,T)=>{let C;for(;E!==T;)C=g(E),s(E),E=C;s(T)},$t=(E,T,C)=>{const{bum:D,scope:k,job:N,subTree:W,um:B,m:F,a:U}=E;Pu(F),Pu(U),D&&Fi(D),k.stop(),N&&(N.flags|=8,$e(W,E,T,C)),B&&zt(B,T),zt(()=>{E.isUnmounted=!0},T)},ct=(E,T,C,D=!1,k=!1,N=0)=>{for(let W=N;W<E.length;W++)$e(E[W],T,C,D,k)},O=E=>{if(E.shapeFlag&6)return O(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const T=g(E.anchor||E.el),C=T&&T[E_];return C?g(C):T};let J=!1;const Y=(E,T,C)=>{E==null?T._vnode&&$e(T._vnode,null,null,!0):V(T._vnode||null,E,T,null,null,null,C),T._vnode=E,J||(J=!0,Tu(),md(),J=!1)},ee={p:V,um:$e,m:Et,r:Wt,mt:Me,mc:y,pc:Ee,pbc:b,n:O,o:t};return{render:Y,hydrate:void 0,createApp:j_(Y)}}function ya({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function vr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function X_(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Md(t,e,n=!1){const r=t.children,s=e.children;if(fe(r)&&fe(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=jn(s[i]),l.el=a.el),!n&&l.patchFlag!==-2&&Md(a,l)),l.type===Co&&l.patchFlag!==-1&&(l.el=a.el),l.type===nr&&!l.el&&(l.el=a.el)}}function J_(t){const e=t.slice(),n=[0];let r,s,i,a,l;const c=t.length;for(r=0;r<c;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)l=i+a>>1,t[n[l]]<h?i=l+1:a=l;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=e[a];return n}function kd(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:kd(e)}function Pu(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Z_=Symbol.for("v-scx"),ey=()=>Vt(Z_);function va(t,e){return Ql(t,null,e)}function Tn(t,e,n){return Ql(t,e,n)}function Ql(t,e,n=Le){const{immediate:r,deep:s,flush:i,once:a}=n,l=xt({},n),c=e&&r||!e&&i!=="post";let h;if(Zs){if(i==="sync"){const _=ey();h=_.__watcherHandles||(_.__watcherHandles=[])}else if(!c){const _=()=>{};return _.stop=ln,_.resume=ln,_.pause=ln,_}}const f=Lt;l.call=(_,R,V)=>hn(_,f,R,V);let p=!1;i==="post"?l.scheduler=_=>{zt(_,f&&f.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(_,R)=>{R?_():Hl(_)}),l.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,f&&(_.id=f.uid,_.i=f))};const g=m_(t,e,l);return Zs&&(h?h.push(g):c&&g()),g}function ty(t,e,n){const r=this.proxy,s=lt(t)?t.includes(".")?Ld(r,t):()=>r[t]:t.bind(r,r);let i;me(e)?i=e:(i=e.handler,n=e);const a=hi(this),l=Ql(s,i.bind(r),n);return a(),l}function Ld(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const ny=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${er(e)}Modifiers`]||t[`${Nr(e)}Modifiers`];function ry(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Le;let s=n;const i=e.startsWith("update:"),a=i&&ny(r,e.slice(7));a&&(a.trim&&(s=n.map(f=>lt(f)?f.trim():f)),a.number&&(s=n.map(Ba)));let l,c=r[l=fa(e)]||r[l=fa(er(e))];!c&&i&&(c=r[l=fa(Nr(e))]),c&&hn(c,t,6,s);const h=r[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,hn(h,t,6,s)}}const sy=new WeakMap;function Fd(t,e,n=!1){const r=n?sy:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let a={},l=!1;if(!me(t)){const c=h=>{const f=Fd(h,e,!0);f&&(l=!0,xt(a,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(je(t)&&r.set(t,null),null):(fe(i)?i.forEach(c=>a[c]=null):xt(a,i),je(t)&&r.set(t,a),a)}function Ro(t,e){return!t||!vo(e)?!1:(e=e.slice(2).replace(/Once$/,""),xe(t,e[0].toLowerCase()+e.slice(1))||xe(t,Nr(e))||xe(t,e))}function Vu(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:c,render:h,renderCache:f,props:p,data:g,setupState:_,ctx:R,inheritAttrs:V}=t,M=Ji(t);let $,j;try{if(n.shapeFlag&4){const G=s||r,re=G;$=sn(h.call(re,G,f,p,_,g,R)),j=l}else{const G=e;$=sn(G.length>1?G(p,{attrs:l,slots:a,emit:c}):G(p,null)),j=e.props?l:iy(l)}}catch(G){Fs.length=0,bo(G,t,1),$=We(nr)}let q=$;if(j&&V!==!1){const G=Object.keys(j),{shapeFlag:re}=q;G.length&&re&7&&(i&&G.some(xl)&&(j=oy(j,i)),q=Cr(q,j,!1,!0))}return n.dirs&&(q=Cr(q,null,!1,!0),q.dirs=q.dirs?q.dirs.concat(n.dirs):n.dirs),n.transition&&zl(q,n.transition),$=q,Ji(M),$}const iy=t=>{let e;for(const n in t)(n==="class"||n==="style"||vo(n))&&((e||(e={}))[n]=t[n]);return e},oy=(t,e)=>{const n={};for(const r in t)(!xl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function ay(t,e,n){const{props:r,children:s,component:i}=t,{props:a,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?xu(r,a,h):!!a;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const g=f[p];if(a[g]!==r[g]&&!Ro(h,g))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?xu(r,a,h):!0:!!a;return!1}function xu(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ro(n,i))return!0}return!1}function ly({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Ud=t=>t.__isSuspense;function cy(t,e){e&&e.pendingBranch?fe(t)?e.effects.push(...t):e.effects.push(t):v_(t)}const kt=Symbol.for("v-fgt"),Co=Symbol.for("v-txt"),nr=Symbol.for("v-cmt"),Ui=Symbol.for("v-stc"),Fs=[];let Kt=null;function qe(t=!1){Fs.push(Kt=t?null:[])}function uy(){Fs.pop(),Kt=Fs[Fs.length-1]||null}let Js=1;function no(t,e=!1){Js+=t,t<0&&Kt&&e&&(Kt.hasOnce=!0)}function Bd(t){return t.dynamicChildren=Js>0?Kt||Kr:null,uy(),Js>0&&Kt&&Kt.push(t),t}function Je(t,e,n,r,s,i){return Bd(X(t,e,n,r,s,i,!0))}function Qa(t,e,n,r,s){return Bd(We(t,e,n,r,s,!0))}function ro(t){return t?t.__v_isVNode===!0:!1}function As(t,e){return t.type===e.type&&t.key===e.key}const jd=({key:t})=>t??null,Bi=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?lt(t)||tt(t)||me(t)?{i:Qt,r:t,k:e,f:!!n}:t:null);function X(t,e=null,n=null,r=0,s=null,i=t===kt?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&jd(e),ref:e&&Bi(e),scopeId:yd,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Qt};return l?(Yl(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=lt(n)?8:16),Js>0&&!a&&Kt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Kt.push(c),c}const We=hy;function hy(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===N_)&&(t=nr),ro(t)){const l=Cr(t,e,!0);return n&&Yl(l,n),Js>0&&!i&&Kt&&(l.shapeFlag&6?Kt[Kt.indexOf(t)]=l:Kt.push(l)),l.patchFlag=-2,l}if(Ty(t)&&(t=t.__vccOpts),e){e=fy(e);let{class:l,style:c}=e;l&&!lt(l)&&(e.class=Io(l)),je(c)&&(jl(c)&&!fe(c)&&(c=xt({},c)),e.style=Ol(c))}const a=lt(t)?1:Ud(t)?128:w_(t)?64:je(t)?4:me(t)?2:0;return X(t,e,n,r,s,a,i,!0)}function fy(t){return t?jl(t)||Pd(t)?xt({},t):t:null}function Cr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:c}=t,h=e?py(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&jd(h),ref:e&&e.ref?n&&i?fe(i)?i.concat(Bi(e)):[i,Bi(e)]:Bi(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==kt?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Cr(t.ssContent),ssFallback:t.ssFallback&&Cr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&zl(f,c.clone(f)),f}function ji(t=" ",e=0){return We(Co,null,t,e)}function dy(t,e){const n=We(Ui,null,t);return n.staticCount=e,n}function $d(t="",e=!1){return e?(qe(),Qa(nr,null,t)):We(nr,null,t)}function sn(t){return t==null||typeof t=="boolean"?We(nr):fe(t)?We(kt,null,t.slice()):ro(t)?jn(t):We(Co,null,String(t))}function jn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Cr(t)}function Yl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(fe(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Yl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Pd(e)?e._ctx=Qt:s===3&&Qt&&(Qt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else me(e)?(e={default:e,_ctx:Qt},n=32):(e=String(e),r&64?(n=16,e=[ji(e)]):n=8);t.children=e,t.shapeFlag|=n}function py(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Io([e.class,r.class]));else if(s==="style")e.style=Ol([e.style,r.style]);else if(vo(s)){const i=e[s],a=r[s];a&&i!==a&&!(fe(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function tn(t,e,n,r=null){hn(t,e,7,[n,r])}const gy=Sd();let my=0;function _y(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||gy,i={uid:my++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Wf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xd(r,s),emitsOptions:Fd(r,s),emit:null,emitted:null,propsDefaults:Le,inheritAttrs:r.inheritAttrs,ctx:Le,data:Le,props:Le,attrs:Le,slots:Le,refs:Le,setupState:Le,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=ry.bind(null,i),t.ce&&t.ce(i),i}let Lt=null;const Po=()=>Lt||Qt;let so,Ya;{const t=To(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};so=e("__VUE_INSTANCE_SETTERS__",n=>Lt=n),Ya=e("__VUE_SSR_SETTERS__",n=>Zs=n)}const hi=t=>{const e=Lt;return so(t),t.scope.on(),()=>{t.scope.off(),so(e)}},Du=()=>{Lt&&Lt.scope.off(),so(null)};function qd(t){return t.vnode.shapeFlag&4}let Zs=!1;function yy(t,e=!1,n=!1){e&&Ya(e);const{props:r,children:s}=t.vnode,i=qd(t);q_(t,r,i,e),G_(t,s,n||e);const a=i?vy(t,e):void 0;return e&&Ya(!1),a}function vy(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,O_);const{setup:r}=n;if(r){An();const s=t.setupContext=r.length>1?wy(t):null,i=hi(t),a=ci(r,t,0,[t.props,s]),l=Bf(a);if(bn(),i(),(l||t.sp)&&!ks(t)&&vd(t),l){if(a.then(Du,Du),e)return a.then(c=>{Nu(t,c)}).catch(c=>{bo(c,t,0)});t.asyncDep=a}else Nu(t,a)}else Hd(t)}function Nu(t,e,n){me(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:je(e)&&(t.setupState=fd(e)),Hd(t)}function Hd(t,e,n){const r=t.type;t.render||(t.render=r.render||ln);{const s=hi(t);An();try{M_(t)}finally{bn(),s()}}}const Ey={get(t,e){return Rt(t,"get",""),t[e]}};function wy(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Ey),slots:t.slots,emit:t.emit,expose:e}}function Vo(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(fd($l(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ls)return Ls[n](t)},has(e,n){return n in e||n in Ls}})):t.proxy}function Ty(t){return me(t)&&"__vccOpts"in t}const le=(t,e)=>p_(t,e,Zs);function dt(t,e,n){try{no(-1);const r=arguments.length;return r===2?je(e)&&!fe(e)?ro(e)?We(t,null,[e]):We(t,e):We(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ro(n)&&(n=[n]),We(t,e,n))}finally{no(1)}}const Iy="3.5.22";/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Xa;const Ou=typeof window<"u"&&window.trustedTypes;if(Ou)try{Xa=Ou.createPolicy("vue",{createHTML:t=>t})}catch{}const zd=Xa?t=>Xa.createHTML(t):t=>t,Ay="http://www.w3.org/2000/svg",by="http://www.w3.org/1998/Math/MathML",yn=typeof document<"u"?document:null,Mu=yn&&yn.createElement("template"),Sy={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?yn.createElementNS(Ay,t):e==="mathml"?yn.createElementNS(by,t):n?yn.createElement(t,{is:n}):yn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>yn.createTextNode(t),createComment:t=>yn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>yn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const a=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Mu.innerHTML=zd(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=Mu.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Ry=Symbol("_vtc");function Cy(t,e,n){const r=t[Ry];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ku=Symbol("_vod"),Py=Symbol("_vsh"),Vy=Symbol(""),xy=/(?:^|;)\s*display\s*:/;function Dy(t,e,n){const r=t.style,s=lt(n);let i=!1;if(n&&!s){if(e)if(lt(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&$i(r,l,"")}else for(const a in e)n[a]==null&&$i(r,a,"");for(const a in n)a==="display"&&(i=!0),$i(r,a,n[a])}else if(s){if(e!==n){const a=r[Vy];a&&(n+=";"+a),r.cssText=n,i=xy.test(n)}}else e&&t.removeAttribute("style");ku in t&&(t[ku]=i?r.display:"",t[Py]&&(r.display="none"))}const Lu=/\s*!important$/;function $i(t,e,n){if(fe(n))n.forEach(r=>$i(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Ny(t,e);Lu.test(n)?t.setProperty(Nr(r),n.replace(Lu,""),"important"):t[r]=n}}const Fu=["Webkit","Moz","ms"],Ea={};function Ny(t,e){const n=Ea[e];if(n)return n;let r=er(e);if(r!=="filter"&&r in t)return Ea[e]=r;r=qf(r);for(let s=0;s<Fu.length;s++){const i=Fu[s]+r;if(i in t)return Ea[e]=i}return e}const Uu="http://www.w3.org/1999/xlink";function Bu(t,e,n,r,s,i=jm(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Uu,e.slice(6,e.length)):t.setAttributeNS(Uu,e,n):n==null||i&&!zf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":ur(n)?String(n):n)}function ju(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?zd(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=zf(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(s||e)}function Br(t,e,n,r){t.addEventListener(e,n,r)}function Oy(t,e,n,r){t.removeEventListener(e,n,r)}const $u=Symbol("_vei");function My(t,e,n,r,s=null){const i=t[$u]||(t[$u]={}),a=i[e];if(r&&a)a.value=r;else{const[l,c]=ky(e);if(r){const h=i[e]=Uy(r,s);Br(t,l,h,c)}else a&&(Oy(t,l,a,c),i[e]=void 0)}}const qu=/(?:Once|Passive|Capture)$/;function ky(t){let e;if(qu.test(t)){e={};let r;for(;r=t.match(qu);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Nr(t.slice(2)),e]}let wa=0;const Ly=Promise.resolve(),Fy=()=>wa||(Ly.then(()=>wa=0),wa=Date.now());function Uy(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;hn(By(r,n.value),e,5,[r])};return n.value=t,n.attached=Fy(),n}function By(t,e){if(fe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Hu=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,jy=(t,e,n,r,s,i)=>{const a=s==="svg";e==="class"?Cy(t,r,a):e==="style"?Dy(t,n,r):vo(e)?xl(e)||My(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):$y(t,e,r,a))?(ju(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Bu(t,e,r,a,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!lt(r))?ju(t,er(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Bu(t,e,r,a))};function $y(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Hu(e)&&me(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Hu(e)&&lt(n)?!1:e in t}const zu=t=>{const e=t.props["onUpdate:modelValue"]||!1;return fe(e)?n=>Fi(e,n):e};function qy(t){t.target.composing=!0}function Ku(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ta=Symbol("_assign"),io={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Ta]=zu(s);const i=r||s.props&&s.props.type==="number";Br(t,e?"change":"input",a=>{if(a.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=Ba(l)),t[Ta](l)}),n&&Br(t,"change",()=>{t.value=t.value.trim()}),e||(Br(t,"compositionstart",qy),Br(t,"compositionend",Ku),Br(t,"change",Ku))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},a){if(t[Ta]=zu(a),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?Ba(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},Hy=["ctrl","shift","alt","meta"],zy={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Hy.some(n=>t[`${n}Key`]&&!e.includes(n))},Kd=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=((s,...i)=>{for(let a=0;a<e.length;a++){const l=zy[e[a]];if(l&&l(s,e))return}return t(s,...i)}))},Ky=xt({patchProp:jy},Sy);let Gu;function Gy(){return Gu||(Gu=Q_(Ky))}const Wy=((...t)=>{const e=Gy().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Yy(r);if(!s)return;const i=e._component;!me(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,Qy(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e});function Qy(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Yy(t){return lt(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const jr=typeof document<"u";function Gd(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Xy(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Gd(t.default)}const Ve=Object.assign;function Ia(t,e){const n={};for(const r in e){const s=e[r];n[r]=Jt(s)?s.map(t):t(s)}return n}const Us=()=>{},Jt=Array.isArray,Wd=/#/g,Jy=/&/g,Zy=/\//g,ev=/=/g,tv=/\?/g,Qd=/\+/g,nv=/%5B/g,rv=/%5D/g,Yd=/%5E/g,sv=/%60/g,Xd=/%7B/g,iv=/%7C/g,Jd=/%7D/g,ov=/%20/g;function Xl(t){return encodeURI(""+t).replace(iv,"|").replace(nv,"[").replace(rv,"]")}function av(t){return Xl(t).replace(Xd,"{").replace(Jd,"}").replace(Yd,"^")}function Ja(t){return Xl(t).replace(Qd,"%2B").replace(ov,"+").replace(Wd,"%23").replace(Jy,"%26").replace(sv,"`").replace(Xd,"{").replace(Jd,"}").replace(Yd,"^")}function lv(t){return Ja(t).replace(ev,"%3D")}function cv(t){return Xl(t).replace(Wd,"%23").replace(tv,"%3F")}function uv(t){return t==null?"":cv(t).replace(Zy,"%2F")}function ei(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const hv=/\/$/,fv=t=>t.replace(hv,"");function Aa(t,e,n="/"){let r,s={},i="",a="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),a=e.slice(l,e.length)),r=mv(r??e,n),{fullPath:r+(i&&"?")+i+a,path:r,query:s,hash:ei(a)}}function dv(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Wu(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function pv(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&es(e.matched[r],n.matched[s])&&Zd(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function es(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Zd(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!gv(t[n],e[n]))return!1;return!0}function gv(t,e){return Jt(t)?Qu(t,e):Jt(e)?Qu(e,t):t===e}function Qu(t,e){return Jt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function mv(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,a,l;for(a=0;a<r.length;a++)if(l=r[a],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(a).join("/")}const Fn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ti;(function(t){t.pop="pop",t.push="push"})(ti||(ti={}));var Bs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Bs||(Bs={}));function _v(t){if(!t)if(jr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),fv(t)}const yv=/^[^#]+#/;function vv(t,e){return t.replace(yv,"#")+e}function Ev(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const xo=()=>({left:window.scrollX,top:window.scrollY});function wv(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Ev(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Yu(t,e){return(history.state?history.state.position-e:-1)+t}const Za=new Map;function Tv(t,e){Za.set(t,e)}function Iv(t){const e=Za.get(t);return Za.delete(t),e}let Av=()=>location.protocol+"//"+location.host;function ep(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),Wu(c,"")}return Wu(n,t)+r+s}function bv(t,e,n,r){let s=[],i=[],a=null;const l=({state:g})=>{const _=ep(t,location),R=n.value,V=e.value;let M=0;if(g){if(n.value=_,e.value=g,a&&a===R){a=null;return}M=V?g.position-V.position:0}else r(_);s.forEach($=>{$(n.value,R,{delta:M,type:ti.pop,direction:M?M>0?Bs.forward:Bs.back:Bs.unknown})})};function c(){a=n.value}function h(g){s.push(g);const _=()=>{const R=s.indexOf(g);R>-1&&s.splice(R,1)};return i.push(_),_}function f(){const{history:g}=window;g.state&&g.replaceState(Ve({},g.state,{scroll:xo()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:c,listen:h,destroy:p}}function Xu(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?xo():null}}function Sv(t){const{history:e,location:n}=window,r={value:ep(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,h,f){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:Av()+t+c;try{e[f?"replaceState":"pushState"](h,"",g),s.value=h}catch(_){console.error(_),n[f?"replace":"assign"](g)}}function a(c,h){const f=Ve({},e.state,Xu(s.value.back,c,s.value.forward,!0),h,{position:s.value.position});i(c,f,!0),r.value=c}function l(c,h){const f=Ve({},s.value,e.state,{forward:c,scroll:xo()});i(f.current,f,!0);const p=Ve({},Xu(r.value,c,null),{position:f.position+1},h);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:a}}function Rv(t){t=_v(t);const e=Sv(t),n=bv(t,e.state,e.location,e.replace);function r(i,a=!0){a||n.pauseListeners(),history.go(i)}const s=Ve({location:"",base:t,go:r,createHref:vv.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Cv(t){return typeof t=="string"||t&&typeof t=="object"}function tp(t){return typeof t=="string"||typeof t=="symbol"}const np=Symbol("");var Ju;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ju||(Ju={}));function ts(t,e){return Ve(new Error,{type:t,[np]:!0},e)}function mn(t,e){return t instanceof Error&&np in t&&(e==null||!!(t.type&e))}const Zu="[^/]+?",Pv={sensitive:!1,strict:!1,start:!0,end:!0},Vv=/[.+*?^${}()[\]/\\]/g;function xv(t,e){const n=Ve({},Pv,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const f=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const g=h[p];let _=40+(n.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(Vv,"\\$&"),_+=40;else if(g.type===1){const{value:R,repeatable:V,optional:M,regexp:$}=g;i.push({name:R,repeatable:V,optional:M});const j=$||Zu;if(j!==Zu){_+=10;try{new RegExp(`(${j})`)}catch(G){throw new Error(`Invalid custom RegExp for param "${R}" (${j}): `+G.message)}}let q=V?`((?:${j})(?:/(?:${j}))*)`:`(${j})`;p||(q=M&&h.length<2?`(?:/${q})`:"/"+q),M&&(q+="?"),s+=q,_+=20,M&&(_+=-8),V&&(_+=-20),j===".*"&&(_+=-50)}f.push(_)}r.push(f)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function l(h){const f=h.match(a),p={};if(!f)return null;for(let g=1;g<f.length;g++){const _=f[g]||"",R=i[g-1];p[R.name]=_&&R.repeatable?_.split("/"):_}return p}function c(h){let f="",p=!1;for(const g of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const _ of g)if(_.type===0)f+=_.value;else if(_.type===1){const{value:R,repeatable:V,optional:M}=_,$=R in h?h[R]:"";if(Jt($)&&!V)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const j=Jt($)?$.join("/"):$;if(!j)if(M)g.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${R}"`);f+=j}}return f||"/"}return{re:a,score:r,keys:i,parse:l,stringify:c}}function Dv(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function rp(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Dv(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(eh(r))return 1;if(eh(s))return-1}return s.length-r.length}function eh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Nv={type:0,value:""},Ov=/[a-zA-Z0-9_]/;function Mv(t){if(!t)return[[]];if(t==="/")return[[Nv]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${h}": ${_}`)}let n=0,r=n;const s=[];let i;function a(){i&&s.push(i),i=[]}let l=0,c,h="",f="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),h="")}function g(){h+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(h&&p(),a()):c===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:c==="("?n=2:Ov.test(c)?g():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),a(),s}function kv(t,e,n){const r=xv(Mv(t.path),n),s=Ve(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Lv(t,e){const n=[],r=new Map;e=sh({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,g,_){const R=!_,V=nh(p);V.aliasOf=_&&_.record;const M=sh(e,p),$=[V];if("alias"in p){const G=typeof p.alias=="string"?[p.alias]:p.alias;for(const re of G)$.push(nh(Ve({},V,{components:_?_.record.components:V.components,path:re,aliasOf:_?_.record:V})))}let j,q;for(const G of $){const{path:re}=G;if(g&&re[0]!=="/"){const ge=g.record.path,A=ge[ge.length-1]==="/"?"":"/";G.path=g.record.path+(re&&A+re)}if(j=kv(G,g,M),_?_.alias.push(j):(q=q||j,q!==j&&q.alias.push(j),R&&p.name&&!rh(j)&&a(p.name)),sp(j)&&c(j),V.children){const ge=V.children;for(let A=0;A<ge.length;A++)i(ge[A],j,_&&_.children[A])}_=_||j}return q?()=>{a(q)}:Us}function a(p){if(tp(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(a),g.alias.forEach(a))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(a),p.alias.forEach(a))}}function l(){return n}function c(p){const g=Bv(p,n);n.splice(g,0,p),p.record.name&&!rh(p)&&r.set(p.record.name,p)}function h(p,g){let _,R={},V,M;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw ts(1,{location:p});M=_.record.name,R=Ve(th(g.params,_.keys.filter(q=>!q.optional).concat(_.parent?_.parent.keys.filter(q=>q.optional):[]).map(q=>q.name)),p.params&&th(p.params,_.keys.map(q=>q.name))),V=_.stringify(R)}else if(p.path!=null)V=p.path,_=n.find(q=>q.re.test(V)),_&&(R=_.parse(V),M=_.record.name);else{if(_=g.name?r.get(g.name):n.find(q=>q.re.test(g.path)),!_)throw ts(1,{location:p,currentLocation:g});M=_.record.name,R=Ve({},g.params,p.params),V=_.stringify(R)}const $=[];let j=_;for(;j;)$.unshift(j.record),j=j.parent;return{name:M,path:V,params:R,matched:$,meta:Uv($)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:a,clearRoutes:f,getRoutes:l,getRecordMatcher:s}}function th(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function nh(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Fv(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Fv(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function rh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Uv(t){return t.reduce((e,n)=>Ve(e,n.meta),{})}function sh(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Bv(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;rp(t,e[i])<0?r=i:n=i+1}const s=jv(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function jv(t){let e=t;for(;e=e.parent;)if(sp(e)&&rp(t,e)===0)return e}function sp({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function $v(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Qd," "),a=i.indexOf("="),l=ei(a<0?i:i.slice(0,a)),c=a<0?null:ei(i.slice(a+1));if(l in e){let h=e[l];Jt(h)||(h=e[l]=[h]),h.push(c)}else e[l]=c}return e}function ih(t){let e="";for(let n in t){const r=t[n];if(n=lv(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Jt(r)?r.map(i=>i&&Ja(i)):[r&&Ja(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function qv(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Jt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Hv=Symbol(""),oh=Symbol(""),Jl=Symbol(""),Zl=Symbol(""),el=Symbol("");function bs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function $n(t,e,n,r,s,i=a=>a()){const a=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const h=g=>{g===!1?c(ts(4,{from:n,to:e})):g instanceof Error?c(g):Cv(g)?c(ts(2,{from:e,to:g})):(a&&r.enterCallbacks[s]===a&&typeof g=="function"&&a.push(g),l())},f=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(f);t.length<3&&(p=p.then(h)),p.catch(g=>c(g))})}function ba(t,e,n,r,s=i=>i()){const i=[];for(const a of t)for(const l in a.components){let c=a.components[l];if(!(e!=="beforeRouteEnter"&&!a.instances[l]))if(Gd(c)){const f=(c.__vccOpts||c)[e];f&&i.push($n(f,n,r,a,l,s))}else{let h=c();i.push(()=>h.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${l}" at "${a.path}"`);const p=Xy(f)?f.default:f;a.mods[l]=f,a.components[l]=p;const _=(p.__vccOpts||p)[e];return _&&$n(_,n,r,a,l,s)()}))}}return i}function ah(t){const e=Vt(Jl),n=Vt(Zl),r=le(()=>{const c=et(t.to);return e.resolve(c)}),s=le(()=>{const{matched:c}=r.value,{length:h}=c,f=c[h-1],p=n.matched;if(!f||!p.length)return-1;const g=p.findIndex(es.bind(null,f));if(g>-1)return g;const _=lh(c[h-2]);return h>1&&lh(f)===_&&p[p.length-1].path!==_?p.findIndex(es.bind(null,c[h-2])):g}),i=le(()=>s.value>-1&&Wv(n.params,r.value.params)),a=le(()=>s.value>-1&&s.value===n.matched.length-1&&Zd(n.params,r.value.params));function l(c={}){if(Gv(c)){const h=e[et(t.replace)?"replace":"push"](et(t.to)).catch(Us);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:le(()=>r.value.href),isActive:i,isExactActive:a,navigate:l}}function zv(t){return t.length===1?t[0]:t}const Kv=hr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:ah,setup(t,{slots:e}){const n=In(ah(t)),{options:r}=Vt(Jl),s=le(()=>({[ch(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ch(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&zv(e.default(n));return t.custom?i:dt("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Yr=Kv;function Gv(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Wv(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Jt(s)||s.length!==r.length||r.some((i,a)=>i!==s[a]))return!1}return!0}function lh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ch=(t,e,n)=>t??e??n,Qv=hr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Vt(el),s=le(()=>t.route||r.value),i=Vt(oh,0),a=le(()=>{let h=et(i);const{matched:f}=s.value;let p;for(;(p=f[h])&&!p.components;)h++;return h}),l=le(()=>s.value.matched[a.value]);Qr(oh,le(()=>a.value+1)),Qr(Hv,l),Qr(el,s);const c=De();return Tn(()=>[c.value,l.value,t.name],([h,f,p],[g,_,R])=>{f&&(f.instances[p]=h,_&&_!==f&&h&&h===g&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),h&&f&&(!_||!es(f,_)||!g)&&(f.enterCallbacks[p]||[]).forEach(V=>V(h))},{flush:"post"}),()=>{const h=s.value,f=t.name,p=l.value,g=p&&p.components[f];if(!g)return uh(n.default,{Component:g,route:h});const _=p.props[f],R=_?_===!0?h.params:typeof _=="function"?_(h):_:null,M=dt(g,Ve({},R,e,{onVnodeUnmounted:$=>{$.component.isUnmounted&&(p.instances[f]=null)},ref:c}));return uh(n.default,{Component:M,route:h})||M}}});function uh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const ip=Qv;function Yv(t){const e=Lv(t.routes,t),n=t.parseQuery||$v,r=t.stringifyQuery||ih,s=t.history,i=bs(),a=bs(),l=bs(),c=l_(Fn);let h=Fn;jr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Ia.bind(null,O=>""+O),p=Ia.bind(null,uv),g=Ia.bind(null,ei);function _(O,J){let Y,ee;return tp(O)?(Y=e.getRecordMatcher(O),ee=J):ee=O,e.addRoute(ee,Y)}function R(O){const J=e.getRecordMatcher(O);J&&e.removeRoute(J)}function V(){return e.getRoutes().map(O=>O.record)}function M(O){return!!e.getRecordMatcher(O)}function $(O,J){if(J=Ve({},J||c.value),typeof O=="string"){const C=Aa(n,O,J.path),D=e.resolve({path:C.path},J),k=s.createHref(C.fullPath);return Ve(C,D,{params:g(D.params),hash:ei(C.hash),redirectedFrom:void 0,href:k})}let Y;if(O.path!=null)Y=Ve({},O,{path:Aa(n,O.path,J.path).path});else{const C=Ve({},O.params);for(const D in C)C[D]==null&&delete C[D];Y=Ve({},O,{params:p(C)}),J.params=p(J.params)}const ee=e.resolve(Y,J),Pe=O.hash||"";ee.params=f(g(ee.params));const E=dv(r,Ve({},O,{hash:av(Pe),path:ee.path})),T=s.createHref(E);return Ve({fullPath:E,hash:Pe,query:r===ih?qv(O.query):O.query||{}},ee,{redirectedFrom:void 0,href:T})}function j(O){return typeof O=="string"?Aa(n,O,c.value.path):Ve({},O)}function q(O,J){if(h!==O)return ts(8,{from:J,to:O})}function G(O){return A(O)}function re(O){return G(Ve(j(O),{replace:!0}))}function ge(O){const J=O.matched[O.matched.length-1];if(J&&J.redirect){const{redirect:Y}=J;let ee=typeof Y=="function"?Y(O):Y;return typeof ee=="string"&&(ee=ee.includes("?")||ee.includes("#")?ee=j(ee):{path:ee},ee.params={}),Ve({query:O.query,hash:O.hash,params:ee.path!=null?{}:O.params},ee)}}function A(O,J){const Y=h=$(O),ee=c.value,Pe=O.state,E=O.force,T=O.replace===!0,C=ge(Y);if(C)return A(Ve(j(C),{state:typeof C=="object"?Ve({},Pe,C.state):Pe,force:E,replace:T}),J||Y);const D=Y;D.redirectedFrom=J;let k;return!E&&pv(r,ee,Y)&&(k=ts(16,{to:D,from:ee}),Et(ee,ee,!0,!1)),(k?Promise.resolve(k):b(D,ee)).catch(N=>mn(N)?mn(N,2)?N:Dt(N):Ee(N,D,ee)).then(N=>{if(N){if(mn(N,2))return A(Ve({replace:T},j(N.to),{state:typeof N.to=="object"?Ve({},Pe,N.to.state):Pe,force:E}),J||D)}else N=S(D,ee,!0,T,Pe);return I(D,ee,N),N})}function y(O,J){const Y=q(O,J);return Y?Promise.reject(Y):Promise.resolve()}function v(O){const J=Ut.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(O):O()}function b(O,J){let Y;const[ee,Pe,E]=Xv(O,J);Y=ba(ee.reverse(),"beforeRouteLeave",O,J);for(const C of ee)C.leaveGuards.forEach(D=>{Y.push($n(D,O,J))});const T=y.bind(null,O,J);return Y.push(T),ct(Y).then(()=>{Y=[];for(const C of i.list())Y.push($n(C,O,J));return Y.push(T),ct(Y)}).then(()=>{Y=ba(Pe,"beforeRouteUpdate",O,J);for(const C of Pe)C.updateGuards.forEach(D=>{Y.push($n(D,O,J))});return Y.push(T),ct(Y)}).then(()=>{Y=[];for(const C of E)if(C.beforeEnter)if(Jt(C.beforeEnter))for(const D of C.beforeEnter)Y.push($n(D,O,J));else Y.push($n(C.beforeEnter,O,J));return Y.push(T),ct(Y)}).then(()=>(O.matched.forEach(C=>C.enterCallbacks={}),Y=ba(E,"beforeRouteEnter",O,J,v),Y.push(T),ct(Y))).then(()=>{Y=[];for(const C of a.list())Y.push($n(C,O,J));return Y.push(T),ct(Y)}).catch(C=>mn(C,8)?C:Promise.reject(C))}function I(O,J,Y){l.list().forEach(ee=>v(()=>ee(O,J,Y)))}function S(O,J,Y,ee,Pe){const E=q(O,J);if(E)return E;const T=J===Fn,C=jr?history.state:{};Y&&(ee||T?s.replace(O.fullPath,Ve({scroll:T&&C&&C.scroll},Pe)):s.push(O.fullPath,Pe)),c.value=O,Et(O,J,Y,T),Dt()}let w;function Me(){w||(w=s.listen((O,J,Y)=>{if(!$t.listening)return;const ee=$(O),Pe=ge(ee);if(Pe){A(Ve(Pe,{replace:!0,force:!0}),ee).catch(Us);return}h=ee;const E=c.value;jr&&Tv(Yu(E.fullPath,Y.delta),xo()),b(ee,E).catch(T=>mn(T,12)?T:mn(T,2)?(A(Ve(j(T.to),{force:!0}),ee).then(C=>{mn(C,20)&&!Y.delta&&Y.type===ti.pop&&s.go(-1,!1)}).catch(Us),Promise.reject()):(Y.delta&&s.go(-Y.delta,!1),Ee(T,ee,E))).then(T=>{T=T||S(ee,E,!1),T&&(Y.delta&&!mn(T,8)?s.go(-Y.delta,!1):Y.type===ti.pop&&mn(T,20)&&s.go(-1,!1)),I(ee,E,T)}).catch(Us)}))}let Ne=bs(),Oe=bs(),ce;function Ee(O,J,Y){Dt(O);const ee=Oe.list();return ee.length?ee.forEach(Pe=>Pe(O,J,Y)):console.error(O),Promise.reject(O)}function He(){return ce&&c.value!==Fn?Promise.resolve():new Promise((O,J)=>{Ne.add([O,J])})}function Dt(O){return ce||(ce=!O,Me(),Ne.list().forEach(([J,Y])=>O?Y(O):J()),Ne.reset()),O}function Et(O,J,Y,ee){const{scrollBehavior:Pe}=t;if(!jr||!Pe)return Promise.resolve();const E=!Y&&Iv(Yu(O.fullPath,0))||(ee||!Y)&&history.state&&history.state.scroll||null;return ql().then(()=>Pe(O,J,E)).then(T=>T&&wv(T)).catch(T=>Ee(T,O,J))}const $e=O=>s.go(O);let Wt;const Ut=new Set,$t={currentRoute:c,listening:!0,addRoute:_,removeRoute:R,clearRoutes:e.clearRoutes,hasRoute:M,getRoutes:V,resolve:$,options:t,push:G,replace:re,go:$e,back:()=>$e(-1),forward:()=>$e(1),beforeEach:i.add,beforeResolve:a.add,afterEach:l.add,onError:Oe.add,isReady:He,install(O){const J=this;O.component("RouterLink",Yr),O.component("RouterView",ip),O.config.globalProperties.$router=J,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>et(c)}),jr&&!Wt&&c.value===Fn&&(Wt=!0,G(s.location).catch(Pe=>{}));const Y={};for(const Pe in Fn)Object.defineProperty(Y,Pe,{get:()=>c.value[Pe],enumerable:!0});O.provide(Jl,J),O.provide(Zl,Ys(Y)),O.provide(el,c);const ee=O.unmount;Ut.add(O),O.unmount=function(){Ut.delete(O),Ut.size<1&&(h=Fn,w&&w(),w=null,c.value=Fn,Wt=!1,ce=!1),ee()}}};function ct(O){return O.reduce((J,Y)=>J.then(()=>v(Y)),Promise.resolve())}return $t}function Xv(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let a=0;a<i;a++){const l=e.matched[a];l&&(t.matched.find(h=>es(h,l))?r.push(l):n.push(l));const c=t.matched[a];c&&(e.matched.find(h=>es(h,c))||s.push(c))}return[n,r,s]}function Jv(t){return Vt(Zl)}/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let op;const Do=t=>op=t,ap=Symbol();function tl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var js;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(js||(js={}));function Zv(){const t=Qf(!0),e=t.run(()=>De({}));let n=[],r=[];const s=$l({install(i){Do(s),s._a=i,i.provide(ap,s),i.config.globalProperties.$pinia=s,r.forEach(a=>n.push(a)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const lp=()=>{};function hh(t,e,n,r=lp){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Yf()&&$m(s),s}function Fr(t,...e){t.slice().forEach(n=>{n(...e)})}const eE=t=>t(),fh=Symbol(),Sa=Symbol();function nl(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];tl(s)&&tl(r)&&t.hasOwnProperty(n)&&!tt(r)&&!Kn(r)?t[n]=nl(s,r):t[n]=r}return t}const tE=Symbol();function nE(t){return!tl(t)||!Object.prototype.hasOwnProperty.call(t,tE)}const{assign:Un}=Object;function rE(t){return!!(tt(t)&&t.effect)}function sE(t,e,n,r){const{state:s,actions:i,getters:a}=e,l=n.state.value[t];let c;function h(){l||(n.state.value[t]=s?s():{});const f=dd(n.state.value[t]);return Un(f,i,Object.keys(a||{}).reduce((p,g)=>(p[g]=$l(le(()=>{Do(n);const _=n._s.get(t);return a[g].call(_,_)})),p),{}))}return c=cp(t,h,e,n,r,!0),c}function cp(t,e,n={},r,s,i){let a;const l=Un({actions:{}},n),c={deep:!0};let h,f,p=[],g=[],_;const R=r.state.value[t];!i&&!R&&(r.state.value[t]={}),De({});let V;function M(y){let v;h=f=!1,typeof y=="function"?(y(r.state.value[t]),v={type:js.patchFunction,storeId:t,events:_}):(nl(r.state.value[t],y),v={type:js.patchObject,payload:y,storeId:t,events:_});const b=V=Symbol();ql().then(()=>{V===b&&(h=!0)}),f=!0,Fr(p,v,r.state.value[t])}const $=i?function(){const{state:v}=n,b=v?v():{};this.$patch(I=>{Un(I,b)})}:lp;function j(){a.stop(),p=[],g=[],r._s.delete(t)}const q=(y,v="")=>{if(fh in y)return y[Sa]=v,y;const b=function(){Do(r);const I=Array.from(arguments),S=[],w=[];function Me(ce){S.push(ce)}function Ne(ce){w.push(ce)}Fr(g,{args:I,name:b[Sa],store:re,after:Me,onError:Ne});let Oe;try{Oe=y.apply(this&&this.$id===t?this:re,I)}catch(ce){throw Fr(w,ce),ce}return Oe instanceof Promise?Oe.then(ce=>(Fr(S,ce),ce)).catch(ce=>(Fr(w,ce),Promise.reject(ce))):(Fr(S,Oe),Oe)};return b[fh]=!0,b[Sa]=v,b},G={_p:r,$id:t,$onAction:hh.bind(null,g),$patch:M,$reset:$,$subscribe(y,v={}){const b=hh(p,y,v.detached,()=>I()),I=a.run(()=>Tn(()=>r.state.value[t],S=>{(v.flush==="sync"?f:h)&&y({storeId:t,type:js.direct,events:_},S)},Un({},c,v)));return b},$dispose:j},re=In(G);r._s.set(t,re);const A=(r._a&&r._a.runWithContext||eE)(()=>r._e.run(()=>(a=Qf()).run(()=>e({action:q}))));for(const y in A){const v=A[y];if(tt(v)&&!rE(v)||Kn(v))i||(R&&nE(v)&&(tt(v)?v.value=R[y]:nl(v,R[y])),r.state.value[t][y]=v);else if(typeof v=="function"){const b=q(v,y);A[y]=b,l.actions[y]=v}}return Un(re,A),Un(Ce(re),A),Object.defineProperty(re,"$state",{get:()=>r.state.value[t],set:y=>{M(v=>{Un(v,y)})}}),r._p.forEach(y=>{Un(re,a.run(()=>y({store:re,app:r._a,pinia:r,options:l})))}),R&&i&&n.hydrate&&n.hydrate(re.$state,R),h=!0,f=!0,re}/*! #__NO_SIDE_EFFECTS__ */function iE(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(a,l){const c=$_();return a=a||(c?Vt(ap,null):null),a&&Do(a),a=op,a._s.has(t)||(s?cp(t,e,r,a):sE(t,r,a)),a._s.get(t)}return i.$id=t,i}const ec=iE("cart",()=>{const t=De([]),e=r=>{t.value.push(r),alert("已加入購物車")},n=le(()=>t.value.length);return{cart:t,addToCart:e,cartCount:n}}),oE={id:"app-container"},aE={class:"header"},lE={class:"logo"},cE={class:"user-actions"},uE={class:"main-content"},hE={__name:"App",setup(t){const e=ec();return(n,r)=>(qe(),Je(kt,null,[r[3]||(r[3]=X("span",null," 測試測試 ",-1)),X("div",oE,[X("header",aE,[X("div",lE,[We(et(Yr),{to:"/"},{default:wn(()=>[...r[0]||(r[0]=[ji("Happy Golf Market",-1)])]),_:1})]),X("div",cE,[We(et(Yr),{to:"/login"},{default:wn(()=>[...r[1]||(r[1]=[ji("會員登入",-1)])]),_:1}),We(et(Yr),{to:"/cart"},{default:wn(()=>[ji("購物車 ("+ft(et(e).cartCount)+")",1)]),_:1})])]),X("main",uE,[We(et(ip))]),r[2]||(r[2]=X("footer",{class:"footer"},[X("p",null,"© 2025 高爾夫球具商城. All rights reserved."),X("p",null,"公司地址 : 台北市信義區信義路777號")],-1))])],64))}},fE=()=>{};var dh={};/**
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
 */const up=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},dE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],a=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},hp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],a=s+1<t.length,l=a?t[s+1]:0,c=s+2<t.length,h=c?t[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let g=(l&15)<<2|h>>6,_=h&63;c||(_=64,a||(g=64)),r.push(n[f],n[p],n[g],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(up(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):dE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new pE;const g=i<<2|l>>4;if(r.push(g),h!==64){const _=l<<4&240|h>>2;if(r.push(_),p!==64){const R=h<<6&192|p;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class pE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gE=function(t){const e=up(t);return hp.encodeByteArray(e,!0)},oo=function(t){return gE(t).replace(/\./g,"")},mE=function(t){try{return hp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function _E(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const yE=()=>_E().__FIREBASE_DEFAULTS__,vE=()=>{if(typeof process>"u"||typeof dh>"u")return;const t=dh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},EE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&mE(t[1]);return e&&JSON.parse(e)},tc=()=>{try{return fE()||yE()||vE()||EE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},wE=t=>tc()?.emulatorHosts?.[t],TE=t=>{const e=wE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},fp=()=>tc()?.config;/**
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
 */class IE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function nc(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function AE(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function bE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[oo(JSON.stringify(n)),oo(JSON.stringify(a)),""].join(".")}const $s={};function SE(){const t={prod:[],emulator:[]};for(const e of Object.keys($s))$s[e]?t.emulator.push(e):t.prod.push(e);return t}function RE(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let ph=!1;function CE(t,e){if(typeof window>"u"||typeof document>"u"||!nc(window.location.host)||$s[t]===e||$s[t]||ph)return;$s[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=SE().prod.length>0;function a(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function c(g,_){g.setAttribute("width","24"),g.setAttribute("id",_),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function h(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{ph=!0,a()},g}function f(g,_){g.setAttribute("id",_),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=RE(r),_=n("text"),R=document.getElementById(_)||document.createElement("span"),V=n("learnmore"),M=document.getElementById(V)||document.createElement("a"),$=n("preprendIcon"),j=document.getElementById($)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const q=g.element;l(q),f(M,V);const G=h();c(j,$),q.append(j,R,M,G),document.body.appendChild(q)}i?(R.innerText="Preview backend disconnected.",j.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(j.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function PE(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function VE(){const t=tc()?.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function xE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function DE(){return!VE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function dp(){try{return typeof indexedDB=="object"}catch{return!1}}function pp(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}function NE(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const OE="FirebaseError";class fr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=OE,Object.setPrototypeOf(this,fr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,No.prototype.create)}}class No{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?ME(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new fr(s,l,r)}}function ME(t,e){return t.replace(kE,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const kE=/\{\$([^}]+)}/g;function ni(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],a=e[s];if(gh(i)&&gh(a)){if(!ni(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function gh(t){return t!==null&&typeof t=="object"}/**
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
 */const LE=1e3,FE=2,UE=14400*1e3,BE=.5;function mh(t,e=LE,n=FE){const r=e*Math.pow(n,t),s=Math.round(BE*r*(Math.random()-.5)*2);return Math.min(UE,r+s)}/**
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
 */function Oo(t){return t&&t._delegate?t._delegate:t}class Sn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const wr="[DEFAULT]";/**
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
 */class jE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new IE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qE(e))try{this.getOrInitializeService({instanceIdentifier:wr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wr){return this.instances.has(e)}getOptions(e=wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:$E(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=wr){return this.component?this.component.multipleInstances?e:wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $E(t){return t===wr?void 0:t}function qE(t){return t.instantiationMode==="EAGER"}/**
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
 */class HE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new jE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ie||(Ie={}));const zE={debug:Ie.DEBUG,verbose:Ie.VERBOSE,info:Ie.INFO,warn:Ie.WARN,error:Ie.ERROR,silent:Ie.SILENT},KE=Ie.INFO,GE={[Ie.DEBUG]:"log",[Ie.VERBOSE]:"log",[Ie.INFO]:"info",[Ie.WARN]:"warn",[Ie.ERROR]:"error"},WE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=GE[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class rc{constructor(e){this.name=e,this._logLevel=KE,this._logHandler=WE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ie.DEBUG,...e),this._logHandler(this,Ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ie.VERBOSE,...e),this._logHandler(this,Ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ie.INFO,...e),this._logHandler(this,Ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ie.WARN,...e),this._logHandler(this,Ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ie.ERROR,...e),this._logHandler(this,Ie.ERROR,...e)}}const QE=(t,e)=>e.some(n=>t instanceof n);let _h,yh;function YE(){return _h||(_h=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function XE(){return yh||(yh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gp=new WeakMap,rl=new WeakMap,mp=new WeakMap,Ra=new WeakMap,sc=new WeakMap;function JE(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(Gn(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&gp.set(n,t)}).catch(()=>{}),sc.set(e,t),e}function ZE(t){if(rl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});rl.set(t,e)}let sl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return rl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||mp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Gn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ew(t){sl=t(sl)}function tw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ca(this),e,...n);return mp.set(r,e.sort?e.sort():[e]),Gn(r)}:XE().includes(t)?function(...e){return t.apply(Ca(this),e),Gn(gp.get(this))}:function(...e){return Gn(t.apply(Ca(this),e))}}function nw(t){return typeof t=="function"?tw(t):(t instanceof IDBTransaction&&ZE(t),QE(t,YE())?new Proxy(t,sl):t)}function Gn(t){if(t instanceof IDBRequest)return JE(t);if(Ra.has(t))return Ra.get(t);const e=nw(t);return e!==t&&(Ra.set(t,e),sc.set(e,t)),e}const Ca=t=>sc.get(t);function _p(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),l=Gn(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Gn(a.result),c.oldVersion,c.newVersion,Gn(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const rw=["get","getKey","getAll","getAllKeys","count"],sw=["put","add","delete","clear"],Pa=new Map;function vh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Pa.get(e))return Pa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=sw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||rw.includes(n)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&c.done]))[0]};return Pa.set(e,i),i}ew(t=>({...t,get:(e,n,r)=>vh(e,n)||t.get(e,n,r),has:(e,n)=>!!vh(e,n)||t.has(e,n)}));/**
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
 */class iw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ow(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ow(t){return t.getComponent()?.type==="VERSION"}const il="@firebase/app",Eh="0.14.3";/**
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
 */const Rn=new rc("@firebase/app"),aw="@firebase/app-compat",lw="@firebase/analytics-compat",cw="@firebase/analytics",uw="@firebase/app-check-compat",hw="@firebase/app-check",fw="@firebase/auth",dw="@firebase/auth-compat",pw="@firebase/database",gw="@firebase/data-connect",mw="@firebase/database-compat",_w="@firebase/functions",yw="@firebase/functions-compat",vw="@firebase/installations",Ew="@firebase/installations-compat",ww="@firebase/messaging",Tw="@firebase/messaging-compat",Iw="@firebase/performance",Aw="@firebase/performance-compat",bw="@firebase/remote-config",Sw="@firebase/remote-config-compat",Rw="@firebase/storage",Cw="@firebase/storage-compat",Pw="@firebase/firestore",Vw="@firebase/ai",xw="@firebase/firestore-compat",Dw="firebase",Nw="12.3.0";/**
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
 */const ol="[DEFAULT]",Ow={[il]:"fire-core",[aw]:"fire-core-compat",[cw]:"fire-analytics",[lw]:"fire-analytics-compat",[hw]:"fire-app-check",[uw]:"fire-app-check-compat",[fw]:"fire-auth",[dw]:"fire-auth-compat",[pw]:"fire-rtdb",[gw]:"fire-data-connect",[mw]:"fire-rtdb-compat",[_w]:"fire-fn",[yw]:"fire-fn-compat",[vw]:"fire-iid",[Ew]:"fire-iid-compat",[ww]:"fire-fcm",[Tw]:"fire-fcm-compat",[Iw]:"fire-perf",[Aw]:"fire-perf-compat",[bw]:"fire-rc",[Sw]:"fire-rc-compat",[Rw]:"fire-gcs",[Cw]:"fire-gcs-compat",[Pw]:"fire-fst",[xw]:"fire-fst-compat",[Vw]:"fire-vertex","fire-js":"fire-js",[Dw]:"fire-js-all"};/**
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
 */const ao=new Map,Mw=new Map,al=new Map;function wh(t,e){try{t.container.addComponent(e)}catch(n){Rn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function rr(t){const e=t.name;if(al.has(e))return Rn.debug(`There were multiple attempts to register component ${e}.`),!1;al.set(e,t);for(const n of ao.values())wh(n,t);for(const n of Mw.values())wh(n,t);return!0}function fi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function kw(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Lw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Wn=new No("app","Firebase",Lw);/**
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
 */class Fw{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Sn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wn.create("app-deleted",{appName:this._name})}}/**
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
 */const Uw=Nw;function yp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:ol,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Wn.create("bad-app-name",{appName:String(s)});if(n||(n=fp()),!n)throw Wn.create("no-options");const i=ao.get(s);if(i){if(ni(n,i.options)&&ni(r,i.config))return i;throw Wn.create("duplicate-app",{appName:s})}const a=new HE(s);for(const c of al.values())a.addComponent(c);const l=new Fw(n,r,a);return ao.set(s,l),l}function vp(t=ol){const e=ao.get(t);if(!e&&t===ol&&fp())return yp();if(!e)throw Wn.create("no-app",{appName:t});return e}function cn(t,e,n){let r=Ow[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rn.warn(a.join(" "));return}rr(new Sn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Bw="firebase-heartbeat-database",jw=1,ri="firebase-heartbeat-store";let Va=null;function Ep(){return Va||(Va=_p(Bw,jw,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ri)}catch(n){console.warn(n)}}}}).catch(t=>{throw Wn.create("idb-open",{originalErrorMessage:t.message})})),Va}async function $w(t){try{const n=(await Ep()).transaction(ri),r=await n.objectStore(ri).get(wp(t));return await n.done,r}catch(e){if(e instanceof fr)Rn.warn(e.message);else{const n=Wn.create("idb-get",{originalErrorMessage:e?.message});Rn.warn(n.message)}}}async function Th(t,e){try{const r=(await Ep()).transaction(ri,"readwrite");await r.objectStore(ri).put(e,wp(t)),await r.done}catch(n){if(n instanceof fr)Rn.warn(n.message);else{const r=Wn.create("idb-set",{originalErrorMessage:n?.message});Rn.warn(r.message)}}}function wp(t){return`${t.name}!${t.options.appId}`}/**
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
 */const qw=1024,Hw=30;class zw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Gw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ih();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>Hw){const s=Ww(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Rn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ih(),{heartbeatsToSend:n,unsentEntries:r}=Kw(this._heartbeatsCache.heartbeats),s=oo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Rn.warn(e),""}}}function Ih(){return new Date().toISOString().substring(0,10)}function Kw(t,e=qw){const n=[];let r=t.slice();for(const s of t){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Ah(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ah(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Gw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dp()?pp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await $w(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Th(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Th(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ah(t){return oo(JSON.stringify({version:2,heartbeats:t})).length}function Ww(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function Qw(t){rr(new Sn("platform-logger",e=>new iw(e),"PRIVATE")),rr(new Sn("heartbeat",e=>new zw(e),"PRIVATE")),cn(il,Eh,t),cn(il,Eh,"esm2020"),cn("fire-js","")}Qw("");var bh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qn,Tp;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,y){function v(){}v.prototype=y.prototype,A.F=y.prototype,A.prototype=new v,A.prototype.constructor=A,A.D=function(b,I,S){for(var w=Array(arguments.length-2),Me=2;Me<arguments.length;Me++)w[Me-2]=arguments[Me];return y.prototype[I].apply(b,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,y,v){v||(v=0);const b=Array(16);if(typeof y=="string")for(var I=0;I<16;++I)b[I]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(I=0;I<16;++I)b[I]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=A.g[0],v=A.g[1],I=A.g[2];let S=A.g[3],w;w=y+(S^v&(I^S))+b[0]+3614090360&4294967295,y=v+(w<<7&4294967295|w>>>25),w=S+(I^y&(v^I))+b[1]+3905402710&4294967295,S=y+(w<<12&4294967295|w>>>20),w=I+(v^S&(y^v))+b[2]+606105819&4294967295,I=S+(w<<17&4294967295|w>>>15),w=v+(y^I&(S^y))+b[3]+3250441966&4294967295,v=I+(w<<22&4294967295|w>>>10),w=y+(S^v&(I^S))+b[4]+4118548399&4294967295,y=v+(w<<7&4294967295|w>>>25),w=S+(I^y&(v^I))+b[5]+1200080426&4294967295,S=y+(w<<12&4294967295|w>>>20),w=I+(v^S&(y^v))+b[6]+2821735955&4294967295,I=S+(w<<17&4294967295|w>>>15),w=v+(y^I&(S^y))+b[7]+4249261313&4294967295,v=I+(w<<22&4294967295|w>>>10),w=y+(S^v&(I^S))+b[8]+1770035416&4294967295,y=v+(w<<7&4294967295|w>>>25),w=S+(I^y&(v^I))+b[9]+2336552879&4294967295,S=y+(w<<12&4294967295|w>>>20),w=I+(v^S&(y^v))+b[10]+4294925233&4294967295,I=S+(w<<17&4294967295|w>>>15),w=v+(y^I&(S^y))+b[11]+2304563134&4294967295,v=I+(w<<22&4294967295|w>>>10),w=y+(S^v&(I^S))+b[12]+1804603682&4294967295,y=v+(w<<7&4294967295|w>>>25),w=S+(I^y&(v^I))+b[13]+4254626195&4294967295,S=y+(w<<12&4294967295|w>>>20),w=I+(v^S&(y^v))+b[14]+2792965006&4294967295,I=S+(w<<17&4294967295|w>>>15),w=v+(y^I&(S^y))+b[15]+1236535329&4294967295,v=I+(w<<22&4294967295|w>>>10),w=y+(I^S&(v^I))+b[1]+4129170786&4294967295,y=v+(w<<5&4294967295|w>>>27),w=S+(v^I&(y^v))+b[6]+3225465664&4294967295,S=y+(w<<9&4294967295|w>>>23),w=I+(y^v&(S^y))+b[11]+643717713&4294967295,I=S+(w<<14&4294967295|w>>>18),w=v+(S^y&(I^S))+b[0]+3921069994&4294967295,v=I+(w<<20&4294967295|w>>>12),w=y+(I^S&(v^I))+b[5]+3593408605&4294967295,y=v+(w<<5&4294967295|w>>>27),w=S+(v^I&(y^v))+b[10]+38016083&4294967295,S=y+(w<<9&4294967295|w>>>23),w=I+(y^v&(S^y))+b[15]+3634488961&4294967295,I=S+(w<<14&4294967295|w>>>18),w=v+(S^y&(I^S))+b[4]+3889429448&4294967295,v=I+(w<<20&4294967295|w>>>12),w=y+(I^S&(v^I))+b[9]+568446438&4294967295,y=v+(w<<5&4294967295|w>>>27),w=S+(v^I&(y^v))+b[14]+3275163606&4294967295,S=y+(w<<9&4294967295|w>>>23),w=I+(y^v&(S^y))+b[3]+4107603335&4294967295,I=S+(w<<14&4294967295|w>>>18),w=v+(S^y&(I^S))+b[8]+1163531501&4294967295,v=I+(w<<20&4294967295|w>>>12),w=y+(I^S&(v^I))+b[13]+2850285829&4294967295,y=v+(w<<5&4294967295|w>>>27),w=S+(v^I&(y^v))+b[2]+4243563512&4294967295,S=y+(w<<9&4294967295|w>>>23),w=I+(y^v&(S^y))+b[7]+1735328473&4294967295,I=S+(w<<14&4294967295|w>>>18),w=v+(S^y&(I^S))+b[12]+2368359562&4294967295,v=I+(w<<20&4294967295|w>>>12),w=y+(v^I^S)+b[5]+4294588738&4294967295,y=v+(w<<4&4294967295|w>>>28),w=S+(y^v^I)+b[8]+2272392833&4294967295,S=y+(w<<11&4294967295|w>>>21),w=I+(S^y^v)+b[11]+1839030562&4294967295,I=S+(w<<16&4294967295|w>>>16),w=v+(I^S^y)+b[14]+4259657740&4294967295,v=I+(w<<23&4294967295|w>>>9),w=y+(v^I^S)+b[1]+2763975236&4294967295,y=v+(w<<4&4294967295|w>>>28),w=S+(y^v^I)+b[4]+1272893353&4294967295,S=y+(w<<11&4294967295|w>>>21),w=I+(S^y^v)+b[7]+4139469664&4294967295,I=S+(w<<16&4294967295|w>>>16),w=v+(I^S^y)+b[10]+3200236656&4294967295,v=I+(w<<23&4294967295|w>>>9),w=y+(v^I^S)+b[13]+681279174&4294967295,y=v+(w<<4&4294967295|w>>>28),w=S+(y^v^I)+b[0]+3936430074&4294967295,S=y+(w<<11&4294967295|w>>>21),w=I+(S^y^v)+b[3]+3572445317&4294967295,I=S+(w<<16&4294967295|w>>>16),w=v+(I^S^y)+b[6]+76029189&4294967295,v=I+(w<<23&4294967295|w>>>9),w=y+(v^I^S)+b[9]+3654602809&4294967295,y=v+(w<<4&4294967295|w>>>28),w=S+(y^v^I)+b[12]+3873151461&4294967295,S=y+(w<<11&4294967295|w>>>21),w=I+(S^y^v)+b[15]+530742520&4294967295,I=S+(w<<16&4294967295|w>>>16),w=v+(I^S^y)+b[2]+3299628645&4294967295,v=I+(w<<23&4294967295|w>>>9),w=y+(I^(v|~S))+b[0]+4096336452&4294967295,y=v+(w<<6&4294967295|w>>>26),w=S+(v^(y|~I))+b[7]+1126891415&4294967295,S=y+(w<<10&4294967295|w>>>22),w=I+(y^(S|~v))+b[14]+2878612391&4294967295,I=S+(w<<15&4294967295|w>>>17),w=v+(S^(I|~y))+b[5]+4237533241&4294967295,v=I+(w<<21&4294967295|w>>>11),w=y+(I^(v|~S))+b[12]+1700485571&4294967295,y=v+(w<<6&4294967295|w>>>26),w=S+(v^(y|~I))+b[3]+2399980690&4294967295,S=y+(w<<10&4294967295|w>>>22),w=I+(y^(S|~v))+b[10]+4293915773&4294967295,I=S+(w<<15&4294967295|w>>>17),w=v+(S^(I|~y))+b[1]+2240044497&4294967295,v=I+(w<<21&4294967295|w>>>11),w=y+(I^(v|~S))+b[8]+1873313359&4294967295,y=v+(w<<6&4294967295|w>>>26),w=S+(v^(y|~I))+b[15]+4264355552&4294967295,S=y+(w<<10&4294967295|w>>>22),w=I+(y^(S|~v))+b[6]+2734768916&4294967295,I=S+(w<<15&4294967295|w>>>17),w=v+(S^(I|~y))+b[13]+1309151649&4294967295,v=I+(w<<21&4294967295|w>>>11),w=y+(I^(v|~S))+b[4]+4149444226&4294967295,y=v+(w<<6&4294967295|w>>>26),w=S+(v^(y|~I))+b[11]+3174756917&4294967295,S=y+(w<<10&4294967295|w>>>22),w=I+(y^(S|~v))+b[2]+718787259&4294967295,I=S+(w<<15&4294967295|w>>>17),w=v+(S^(I|~y))+b[9]+3951481745&4294967295,A.g[0]=A.g[0]+y&4294967295,A.g[1]=A.g[1]+(I+(w<<21&4294967295|w>>>11))&4294967295,A.g[2]=A.g[2]+I&4294967295,A.g[3]=A.g[3]+S&4294967295}r.prototype.v=function(A,y){y===void 0&&(y=A.length);const v=y-this.blockSize,b=this.C;let I=this.h,S=0;for(;S<y;){if(I==0)for(;S<=v;)s(this,A,S),S+=this.blockSize;if(typeof A=="string"){for(;S<y;)if(b[I++]=A.charCodeAt(S++),I==this.blockSize){s(this,b),I=0;break}}else for(;S<y;)if(b[I++]=A[S++],I==this.blockSize){s(this,b),I=0;break}}this.h=I,this.o+=y},r.prototype.A=function(){var A=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);A[0]=128;for(var y=1;y<A.length-8;++y)A[y]=0;y=this.o*8;for(var v=A.length-8;v<A.length;++v)A[v]=y&255,y/=256;for(this.v(A),A=Array(16),y=0,v=0;v<4;++v)for(let b=0;b<32;b+=8)A[y++]=this.g[v]>>>b&255;return A};function i(A,y){var v=l;return Object.prototype.hasOwnProperty.call(v,A)?v[A]:v[A]=y(A)}function a(A,y){this.h=y;const v=[];let b=!0;for(let I=A.length-1;I>=0;I--){const S=A[I]|0;b&&S==y||(v[I]=S,b=!1)}this.g=v}var l={};function c(A){return-128<=A&&A<128?i(A,function(y){return new a([y|0],y<0?-1:0)}):new a([A|0],A<0?-1:0)}function h(A){if(isNaN(A)||!isFinite(A))return p;if(A<0)return M(h(-A));const y=[];let v=1;for(let b=0;A>=v;b++)y[b]=A/v|0,v*=4294967296;return new a(y,0)}function f(A,y){if(A.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(A.charAt(0)=="-")return M(f(A.substring(1),y));if(A.indexOf("-")>=0)throw Error('number format error: interior "-" character');const v=h(Math.pow(y,8));let b=p;for(let S=0;S<A.length;S+=8){var I=Math.min(8,A.length-S);const w=parseInt(A.substring(S,S+I),y);I<8?(I=h(Math.pow(y,I)),b=b.j(I).add(h(w))):(b=b.j(v),b=b.add(h(w)))}return b}var p=c(0),g=c(1),_=c(16777216);t=a.prototype,t.m=function(){if(V(this))return-M(this).m();let A=0,y=1;for(let v=0;v<this.g.length;v++){const b=this.i(v);A+=(b>=0?b:4294967296+b)*y,y*=4294967296}return A},t.toString=function(A){if(A=A||10,A<2||36<A)throw Error("radix out of range: "+A);if(R(this))return"0";if(V(this))return"-"+M(this).toString(A);const y=h(Math.pow(A,6));var v=this;let b="";for(;;){const I=G(v,y).g;v=$(v,I.j(y));let S=((v.g.length>0?v.g[0]:v.h)>>>0).toString(A);if(v=I,R(v))return S+b;for(;S.length<6;)S="0"+S;b=S+b}},t.i=function(A){return A<0?0:A<this.g.length?this.g[A]:this.h};function R(A){if(A.h!=0)return!1;for(let y=0;y<A.g.length;y++)if(A.g[y]!=0)return!1;return!0}function V(A){return A.h==-1}t.l=function(A){return A=$(this,A),V(A)?-1:R(A)?0:1};function M(A){const y=A.g.length,v=[];for(let b=0;b<y;b++)v[b]=~A.g[b];return new a(v,~A.h).add(g)}t.abs=function(){return V(this)?M(this):this},t.add=function(A){const y=Math.max(this.g.length,A.g.length),v=[];let b=0;for(let I=0;I<=y;I++){let S=b+(this.i(I)&65535)+(A.i(I)&65535),w=(S>>>16)+(this.i(I)>>>16)+(A.i(I)>>>16);b=w>>>16,S&=65535,w&=65535,v[I]=w<<16|S}return new a(v,v[v.length-1]&-2147483648?-1:0)};function $(A,y){return A.add(M(y))}t.j=function(A){if(R(this)||R(A))return p;if(V(this))return V(A)?M(this).j(M(A)):M(M(this).j(A));if(V(A))return M(this.j(M(A)));if(this.l(_)<0&&A.l(_)<0)return h(this.m()*A.m());const y=this.g.length+A.g.length,v=[];for(var b=0;b<2*y;b++)v[b]=0;for(b=0;b<this.g.length;b++)for(let I=0;I<A.g.length;I++){const S=this.i(b)>>>16,w=this.i(b)&65535,Me=A.i(I)>>>16,Ne=A.i(I)&65535;v[2*b+2*I]+=w*Ne,j(v,2*b+2*I),v[2*b+2*I+1]+=S*Ne,j(v,2*b+2*I+1),v[2*b+2*I+1]+=w*Me,j(v,2*b+2*I+1),v[2*b+2*I+2]+=S*Me,j(v,2*b+2*I+2)}for(A=0;A<y;A++)v[A]=v[2*A+1]<<16|v[2*A];for(A=y;A<2*y;A++)v[A]=0;return new a(v,0)};function j(A,y){for(;(A[y]&65535)!=A[y];)A[y+1]+=A[y]>>>16,A[y]&=65535,y++}function q(A,y){this.g=A,this.h=y}function G(A,y){if(R(y))throw Error("division by zero");if(R(A))return new q(p,p);if(V(A))return y=G(M(A),y),new q(M(y.g),M(y.h));if(V(y))return y=G(A,M(y)),new q(M(y.g),y.h);if(A.g.length>30){if(V(A)||V(y))throw Error("slowDivide_ only works with positive integers.");for(var v=g,b=y;b.l(A)<=0;)v=re(v),b=re(b);var I=ge(v,1),S=ge(b,1);for(b=ge(b,2),v=ge(v,2);!R(b);){var w=S.add(b);w.l(A)<=0&&(I=I.add(v),S=w),b=ge(b,1),v=ge(v,1)}return y=$(A,I.j(y)),new q(I,y)}for(I=p;A.l(y)>=0;){for(v=Math.max(1,Math.floor(A.m()/y.m())),b=Math.ceil(Math.log(v)/Math.LN2),b=b<=48?1:Math.pow(2,b-48),S=h(v),w=S.j(y);V(w)||w.l(A)>0;)v-=b,S=h(v),w=S.j(y);R(S)&&(S=g),I=I.add(S),A=$(A,w)}return new q(I,A)}t.B=function(A){return G(this,A).h},t.and=function(A){const y=Math.max(this.g.length,A.g.length),v=[];for(let b=0;b<y;b++)v[b]=this.i(b)&A.i(b);return new a(v,this.h&A.h)},t.or=function(A){const y=Math.max(this.g.length,A.g.length),v=[];for(let b=0;b<y;b++)v[b]=this.i(b)|A.i(b);return new a(v,this.h|A.h)},t.xor=function(A){const y=Math.max(this.g.length,A.g.length),v=[];for(let b=0;b<y;b++)v[b]=this.i(b)^A.i(b);return new a(v,this.h^A.h)};function re(A){const y=A.g.length+1,v=[];for(let b=0;b<y;b++)v[b]=A.i(b)<<1|A.i(b-1)>>>31;return new a(v,A.h)}function ge(A,y){const v=y>>5;y%=32;const b=A.g.length-v,I=[];for(let S=0;S<b;S++)I[S]=y>0?A.i(S+v)>>>y|A.i(S+v+1)<<32-y:A.i(S+v);return new a(I,A.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Tp=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,Qn=a}).apply(typeof bh<"u"?bh:typeof self<"u"?self:typeof window<"u"?window:{});var xi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ip,Cs,Ap,qi,ll,bp,Sp,Rp;(function(){var t,e=Object.defineProperty;function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof xi=="object"&&xi];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(o,u){if(u)e:{var d=r;o=o.split(".");for(var m=0;m<o.length-1;m++){var P=o[m];if(!(P in d))break e;d=d[P]}o=o[o.length-1],m=d[o],u=u(m),u!=m&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(u){var d=[],m;for(m in u)Object.prototype.hasOwnProperty.call(u,m)&&d.push([m,u[m]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function l(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function c(o,u,d){return o.call.apply(o.bind,arguments)}function h(o,u,d){return h=c,h.apply(null,arguments)}function f(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function p(o,u){function d(){}d.prototype=u.prototype,o.Z=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Ob=function(m,P,x){for(var z=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)z[_e-2]=arguments[_e];return u.prototype[P].apply(m,z)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function _(o){const u=o.length;if(u>0){const d=Array(u);for(let m=0;m<u;m++)d[m]=o[m];return d}return[]}function R(o,u){for(let m=1;m<arguments.length;m++){const P=arguments[m];var d=typeof P;if(d=d!="object"?d:P?Array.isArray(P)?"array":d:"null",d=="array"||d=="object"&&typeof P.length=="number"){d=o.length||0;const x=P.length||0;o.length=d+x;for(let z=0;z<x;z++)o[d+z]=P[z]}else o.push(P)}}class V{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function M(o){a.setTimeout(()=>{throw o},0)}function $(){var o=A;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class j{constructor(){this.h=this.g=null}add(u,d){const m=q.get();m.set(u,d),this.h?this.h.next=m:this.g=m,this.h=m}}var q=new V(()=>new G,o=>o.reset());class G{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let re,ge=!1,A=new j,y=()=>{const o=Promise.resolve(void 0);re=()=>{o.then(v)}};function v(){for(var o;o=$();){try{o.h.call(o.g)}catch(d){M(d)}var u=q;u.j(o),u.h<100&&(u.h++,o.next=u.g,u.g=o)}ge=!1}function b(){this.u=this.u,this.C=this.C}b.prototype.u=!1,b.prototype.dispose=function(){this.u||(this.u=!0,this.N())},b.prototype[Symbol.dispose]=function(){this.dispose()},b.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var S=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};a.addEventListener("test",d,u),a.removeEventListener("test",d,u)}catch{}return o})();function w(o){return/^[\s\xa0]*$/.test(o)}function Me(o,u){I.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,u)}p(Me,I),Me.prototype.init=function(o,u){const d=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget,u||(d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement)),this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&Me.Z.h.call(this)},Me.prototype.h=function(){Me.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Ne="closure_listenable_"+(Math.random()*1e6|0),Oe=0;function ce(o,u,d,m,P){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!m,this.ha=P,this.key=++Oe,this.da=this.fa=!1}function Ee(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function He(o,u,d){for(const m in o)u.call(d,o[m],m,o)}function Dt(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function Et(o){const u={};for(const d in o)u[d]=o[d];return u}const $e="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Wt(o,u){let d,m;for(let P=1;P<arguments.length;P++){m=arguments[P];for(d in m)o[d]=m[d];for(let x=0;x<$e.length;x++)d=$e[x],Object.prototype.hasOwnProperty.call(m,d)&&(o[d]=m[d])}}function Ut(o){this.src=o,this.g={},this.h=0}Ut.prototype.add=function(o,u,d,m,P){const x=o.toString();o=this.g[x],o||(o=this.g[x]=[],this.h++);const z=ct(o,u,m,P);return z>-1?(u=o[z],d||(u.fa=!1)):(u=new ce(u,this.src,x,!!m,P),u.fa=d,o.push(u)),u};function $t(o,u){const d=u.type;if(d in o.g){var m=o.g[d],P=Array.prototype.indexOf.call(m,u,void 0),x;(x=P>=0)&&Array.prototype.splice.call(m,P,1),x&&(Ee(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function ct(o,u,d,m){for(let P=0;P<o.length;++P){const x=o[P];if(!x.da&&x.listener==u&&x.capture==!!d&&x.ha==m)return P}return-1}var O="closure_lm_"+(Math.random()*1e6|0),J={};function Y(o,u,d,m,P){if(Array.isArray(u)){for(let x=0;x<u.length;x++)Y(o,u[x],d,m,P);return null}return d=W(d),o&&o[Ne]?o.J(u,d,l(m)?!!m.capture:!1,P):ee(o,u,d,!1,m,P)}function ee(o,u,d,m,P,x){if(!u)throw Error("Invalid event type");const z=l(P)?!!P.capture:!!P;let _e=k(o);if(_e||(o[O]=_e=new Ut(o)),d=_e.add(u,d,m,z,x),d.proxy)return d;if(m=Pe(),d.proxy=m,m.src=o,m.listener=d,o.addEventListener)S||(P=z),P===void 0&&(P=!1),o.addEventListener(u.toString(),m,P);else if(o.attachEvent)o.attachEvent(C(u.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Pe(){function o(d){return u.call(o.src,o.listener,d)}const u=D;return o}function E(o,u,d,m,P){if(Array.isArray(u))for(var x=0;x<u.length;x++)E(o,u[x],d,m,P);else m=l(m)?!!m.capture:!!m,d=W(d),o&&o[Ne]?(o=o.i,x=String(u).toString(),x in o.g&&(u=o.g[x],d=ct(u,d,m,P),d>-1&&(Ee(u[d]),Array.prototype.splice.call(u,d,1),u.length==0&&(delete o.g[x],o.h--)))):o&&(o=k(o))&&(u=o.g[u.toString()],o=-1,u&&(o=ct(u,d,m,P)),(d=o>-1?u[o]:null)&&T(d))}function T(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[Ne])$t(u.i,o);else{var d=o.type,m=o.proxy;u.removeEventListener?u.removeEventListener(d,m,o.capture):u.detachEvent?u.detachEvent(C(d),m):u.addListener&&u.removeListener&&u.removeListener(m),(d=k(u))?($t(d,o),d.h==0&&(d.src=null,u[O]=null)):Ee(o)}}}function C(o){return o in J?J[o]:J[o]="on"+o}function D(o,u){if(o.da)o=!0;else{u=new Me(u,this);const d=o.listener,m=o.ha||o.src;o.fa&&T(o),o=d.call(m,u)}return o}function k(o){return o=o[O],o instanceof Ut?o:null}var N="__closure_events_fn_"+(Math.random()*1e9>>>0);function W(o){return typeof o=="function"?o:(o[N]||(o[N]=function(u){return o.handleEvent(u)}),o[N])}function B(){b.call(this),this.i=new Ut(this),this.M=this,this.G=null}p(B,b),B.prototype[Ne]=!0,B.prototype.removeEventListener=function(o,u,d,m){E(this,o,u,d,m)};function F(o,u){var d,m=o.G;if(m)for(d=[];m;m=m.G)d.push(m);if(o=o.M,m=u.type||u,typeof u=="string")u=new I(u,o);else if(u instanceof I)u.target=u.target||o;else{var P=u;u=new I(m,o),Wt(u,P)}P=!0;let x,z;if(d)for(z=d.length-1;z>=0;z--)x=u.g=d[z],P=U(x,m,!0,u)&&P;if(x=u.g=o,P=U(x,m,!0,u)&&P,P=U(x,m,!1,u)&&P,d)for(z=0;z<d.length;z++)x=u.g=d[z],P=U(x,m,!1,u)&&P}B.prototype.N=function(){if(B.Z.N.call(this),this.i){var o=this.i;for(const u in o.g){const d=o.g[u];for(let m=0;m<d.length;m++)Ee(d[m]);delete o.g[u],o.h--}}this.G=null},B.prototype.J=function(o,u,d,m){return this.i.add(String(o),u,!1,d,m)},B.prototype.K=function(o,u,d,m){return this.i.add(String(o),u,!0,d,m)};function U(o,u,d,m){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();let P=!0;for(let x=0;x<u.length;++x){const z=u[x];if(z&&!z.da&&z.capture==d){const _e=z.listener,ht=z.ha||z.src;z.fa&&$t(o.i,z),P=_e.call(ht,m)!==!1&&P}}return P&&!m.defaultPrevented}function oe(o,u){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=h(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:a.setTimeout(o,u||0)}function K(o){o.g=oe(()=>{o.g=null,o.i&&(o.i=!1,K(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class te extends b{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:K(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function se(o){b.call(this),this.h=o,this.g={}}p(se,b);var ye=[];function Re(o){He(o.g,function(u,d){this.g.hasOwnProperty(d)&&T(u)},o),o.g={}}se.prototype.N=function(){se.Z.N.call(this),Re(this)},se.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ve=a.JSON.stringify,rt=a.JSON.parse,st=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function mt(){}function Nt(){}var qt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Vn(){I.call(this,"d")}p(Vn,I);function _t(){I.call(this,"c")}p(_t,I);var Qe={},pn=null;function Q(){return pn=pn||new B}Qe.Ia="serverreachability";function ie(o){I.call(this,Qe.Ia,o)}p(ie,I);function he(o){const u=Q();F(u,new ie(u))}Qe.STAT_EVENT="statevent";function be(o,u){I.call(this,Qe.STAT_EVENT,o),this.stat=u}p(be,I);function ue(o){const u=Q();F(u,new be(u,o))}Qe.Ja="timingevent";function Ye(o,u){I.call(this,Qe.Ja,o),this.size=u}p(Ye,I);function Xe(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},u)}function ut(){this.g=!0}ut.prototype.ua=function(){this.g=!1};function dr(o,u,d,m,P,x){o.info(function(){if(o.g)if(x){var z="",_e=x.split("&");for(let ke=0;ke<_e.length;ke++){var ht=_e[ke].split("=");if(ht.length>1){const yt=ht[0];ht=ht[1];const en=yt.split("_");z=en.length>=2&&en[1]=="type"?z+(yt+"="+ht+"&"):z+(yt+"=redacted&")}}}else z=null;else z=x;return"XMLHTTP REQ ("+m+") [attempt "+P+"]: "+u+`
`+d+`
`+z})}function Xo(o,u,d,m,P,x,z){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+P+"]: "+u+`
`+d+`
`+x+" "+z})}function xn(o,u,d,m){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+dm(o,d)+(m?" "+m:"")})}function fm(o,u){o.info(function(){return"TIMEOUT: "+u})}ut.prototype.info=function(){};function dm(o,u){if(!o.g)return u;if(!u)return null;try{const x=JSON.parse(u);if(x){for(o=0;o<x.length;o++)if(Array.isArray(x[o])){var d=x[o];if(!(d.length<2)){var m=d[1];if(Array.isArray(m)&&!(m.length<1)){var P=m[0];if(P!="noop"&&P!="stop"&&P!="close")for(let z=1;z<m.length;z++)m[z]=""}}}}return ve(x)}catch{return u}}var yi={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Oc={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Mc;function Jo(){}p(Jo,mt),Jo.prototype.g=function(){return new XMLHttpRequest},Mc=new Jo;function fs(o){return encodeURIComponent(String(o))}function pm(o){var u=1;o=o.split(":");const d=[];for(;u>0&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function Dn(o,u,d,m){this.j=o,this.i=u,this.l=d,this.S=m||1,this.V=new se(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new kc}function kc(){this.i=null,this.g="",this.h=!1}var Lc={},Zo={};function ea(o,u,d){o.M=1,o.A=Ei(Zt(u)),o.u=d,o.R=!0,Fc(o,null)}function Fc(o,u){o.F=Date.now(),vi(o),o.B=Zt(o.A);var d=o.B,m=o.S;Array.isArray(m)||(m=[String(m)]),Xc(d.i,"t",m),o.C=0,d=o.j.L,o.h=new kc,o.g=gu(o.j,d?u:null,!o.u),o.P>0&&(o.O=new te(h(o.Y,o,o.g),o.P)),u=o.V,d=o.g,m=o.ba;var P="readystatechange";Array.isArray(P)||(P&&(ye[0]=P.toString()),P=ye);for(let x=0;x<P.length;x++){const z=Y(d,P[x],m||u.handleEvent,!1,u.h||u);if(!z)break;u.g[z.key]=z}u=o.J?Et(o.J):{},o.u?(o.v||(o.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,u)):(o.v="GET",o.g.ea(o.B,o.v,null,u)),he(),dr(o.i,o.v,o.B,o.l,o.S,o.u)}Dn.prototype.ba=function(o){o=o.target;const u=this.O;u&&Mn(o)==3?u.j():this.Y(o)},Dn.prototype.Y=function(o){try{if(o==this.g)e:{const _e=Mn(this.g),ht=this.g.ya(),ke=this.g.ca();if(!(_e<3)&&(_e!=3||this.g&&(this.h.h||this.g.la()||su(this.g)))){this.K||_e!=4||ht==7||(ht==8||ke<=0?he(3):he(2)),ta(this);var u=this.g.ca();this.X=u;var d=gm(this);if(this.o=u==200,Xo(this.i,this.v,this.B,this.l,this.S,_e,u),this.o){if(this.U&&!this.L){t:{if(this.g){var m,P=this.g;if((m=P.g?P.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(m)){var x=m;break t}}x=null}if(o=x)xn(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,na(this,o);else{this.o=!1,this.m=3,ue(12),pr(this),ds(this);break e}}if(this.R){o=!0;let yt;for(;!this.K&&this.C<d.length;)if(yt=mm(this,d),yt==Zo){_e==4&&(this.m=4,ue(14),o=!1),xn(this.i,this.l,null,"[Incomplete Response]");break}else if(yt==Lc){this.m=4,ue(15),xn(this.i,this.l,d,"[Invalid Chunk]"),o=!1;break}else xn(this.i,this.l,yt,null),na(this,yt);if(Uc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_e!=4||d.length!=0||this.h.h||(this.m=1,ue(16),o=!1),this.o=this.o&&o,!o)xn(this.i,this.l,d,"[Invalid Chunked Response]"),pr(this),ds(this);else if(d.length>0&&!this.W){this.W=!0;var z=this.j;z.g==this&&z.aa&&!z.P&&(z.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),ua(z),z.P=!0,ue(11))}}else xn(this.i,this.l,d,null),na(this,d);_e==4&&pr(this),this.o&&!this.K&&(_e==4?hu(this.j,this):(this.o=!1,vi(this)))}else Vm(this.g),u==400&&d.indexOf("Unknown SID")>0?(this.m=3,ue(12)):(this.m=0,ue(13)),pr(this),ds(this)}}}catch{}finally{}};function gm(o){if(!Uc(o))return o.g.la();const u=su(o.g);if(u==="")return"";let d="";const m=u.length,P=Mn(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return pr(o),ds(o),"";o.h.i=new a.TextDecoder}for(let x=0;x<m;x++)o.h.h=!0,d+=o.h.i.decode(u[x],{stream:!(P&&x==m-1)});return u.length=0,o.h.g+=d,o.C=0,o.h.g}function Uc(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function mm(o,u){var d=o.C,m=u.indexOf(`
`,d);return m==-1?Zo:(d=Number(u.substring(d,m)),isNaN(d)?Lc:(m+=1,m+d>u.length?Zo:(u=u.slice(m,m+d),o.C=m+d,u)))}Dn.prototype.cancel=function(){this.K=!0,pr(this)};function vi(o){o.T=Date.now()+o.H,Bc(o,o.H)}function Bc(o,u){if(o.D!=null)throw Error("WatchDog timer not null");o.D=Xe(h(o.aa,o),u)}function ta(o){o.D&&(a.clearTimeout(o.D),o.D=null)}Dn.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(fm(this.i,this.B),this.M!=2&&(he(),ue(17)),pr(this),this.m=2,ds(this)):Bc(this,this.T-o)};function ds(o){o.j.I==0||o.K||hu(o.j,o)}function pr(o){ta(o);var u=o.O;u&&typeof u.dispose=="function"&&u.dispose(),o.O=null,Re(o.V),o.g&&(u=o.g,o.g=null,u.abort(),u.dispose())}function na(o,u){try{var d=o.j;if(d.I!=0&&(d.g==o||ra(d.h,o))){if(!o.L&&ra(d.h,o)&&d.I==3){try{var m=d.Ba.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var P=m;if(P[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<o.F)bi(d),Ii(d);else break e;ca(d),ue(18)}}else d.xa=P[1],0<d.xa-d.K&&P[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Xe(h(d.Va,d),6e3));qc(d.h)<=1&&d.ta&&(d.ta=void 0)}else mr(d,11)}else if((o.L||d.g==o)&&bi(d),!w(u))for(P=d.Ba.g.parse(u),u=0;u<P.length;u++){let ke=P[u];const yt=ke[0];if(!(yt<=d.K))if(d.K=yt,ke=ke[1],d.I==2)if(ke[0]=="c"){d.M=ke[1],d.ba=ke[2];const en=ke[3];en!=null&&(d.ka=en,d.j.info("VER="+d.ka));const _r=ke[4];_r!=null&&(d.za=_r,d.j.info("SVER="+d.za));const kn=ke[5];kn!=null&&typeof kn=="number"&&kn>0&&(m=1.5*kn,d.O=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Ln=o.g;if(Ln){const Ri=Ln.g?Ln.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ri){var x=m.h;x.g||Ri.indexOf("spdy")==-1&&Ri.indexOf("quic")==-1&&Ri.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(sa(x,x.h),x.h=null))}if(m.G){const ha=Ln.g?Ln.g.getResponseHeader("X-HTTP-Session-Id"):null;ha&&(m.wa=ha,Ue(m.J,m.G,ha))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-o.F,d.j.info("Handshake RTT: "+d.T+"ms")),m=d;var z=o;if(m.na=pu(m,m.L?m.ba:null,m.W),z.L){Hc(m.h,z);var _e=z,ht=m.O;ht&&(_e.H=ht),_e.D&&(ta(_e),vi(_e)),m.g=z}else cu(m);d.i.length>0&&Ai(d)}else ke[0]!="stop"&&ke[0]!="close"||mr(d,7);else d.I==3&&(ke[0]=="stop"||ke[0]=="close"?ke[0]=="stop"?mr(d,7):la(d):ke[0]!="noop"&&d.l&&d.l.qa(ke),d.A=0)}}he(4)}catch{}}var _m=class{constructor(o,u){this.g=o,this.map=u}};function jc(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function $c(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function qc(o){return o.h?1:o.g?o.g.size:0}function ra(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function sa(o,u){o.g?o.g.add(u):o.h=u}function Hc(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}jc.prototype.cancel=function(){if(this.i=zc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function zc(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.G);return u}return _(o.i)}var Kc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ym(o,u){if(o){o=o.split("&");for(let d=0;d<o.length;d++){const m=o[d].indexOf("=");let P,x=null;m>=0?(P=o[d].substring(0,m),x=o[d].substring(m+1)):P=o[d],u(P,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function Nn(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;o instanceof Nn?(this.l=o.l,ps(this,o.j),this.o=o.o,this.g=o.g,gs(this,o.u),this.h=o.h,ia(this,Jc(o.i)),this.m=o.m):o&&(u=String(o).match(Kc))?(this.l=!1,ps(this,u[1]||"",!0),this.o=ms(u[2]||""),this.g=ms(u[3]||"",!0),gs(this,u[4]),this.h=ms(u[5]||"",!0),ia(this,u[6]||"",!0),this.m=ms(u[7]||"")):(this.l=!1,this.i=new ys(null,this.l))}Nn.prototype.toString=function(){const o=[];var u=this.j;u&&o.push(_s(u,Gc,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(_s(u,Gc,!0),"@"),o.push(fs(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&o.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(_s(d,d.charAt(0)=="/"?wm:Em,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",_s(d,Im)),o.join("")},Nn.prototype.resolve=function(o){const u=Zt(this);let d=!!o.j;d?ps(u,o.j):d=!!o.o,d?u.o=o.o:d=!!o.g,d?u.g=o.g:d=o.u!=null;var m=o.h;if(d)gs(u,o.u);else if(d=!!o.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var P=u.h.lastIndexOf("/");P!=-1&&(m=u.h.slice(0,P+1)+m)}if(P=m,P==".."||P==".")m="";else if(P.indexOf("./")!=-1||P.indexOf("/.")!=-1){m=P.lastIndexOf("/",0)==0,P=P.split("/");const x=[];for(let z=0;z<P.length;){const _e=P[z++];_e=="."?m&&z==P.length&&x.push(""):_e==".."?((x.length>1||x.length==1&&x[0]!="")&&x.pop(),m&&z==P.length&&x.push("")):(x.push(_e),m=!0)}m=x.join("/")}else m=P}return d?u.h=m:d=o.i.toString()!=="",d?ia(u,Jc(o.i)):d=!!o.m,d&&(u.m=o.m),u};function Zt(o){return new Nn(o)}function ps(o,u,d){o.j=d?ms(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function gs(o,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);o.u=u}else o.u=null}function ia(o,u,d){u instanceof ys?(o.i=u,Am(o.i,o.l)):(d||(u=_s(u,Tm)),o.i=new ys(u,o.l))}function Ue(o,u,d){o.i.set(u,d)}function Ei(o){return Ue(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function ms(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function _s(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,vm),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function vm(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Gc=/[#\/\?@]/g,Em=/[#\?:]/g,wm=/[#\?]/g,Tm=/[#\?@]/g,Im=/#/g;function ys(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function gr(o){o.g||(o.g=new Map,o.h=0,o.i&&ym(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}t=ys.prototype,t.add=function(o,u){gr(this),this.i=null,o=Mr(this,o);let d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function Wc(o,u){gr(o),u=Mr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Qc(o,u){return gr(o),u=Mr(o,u),o.g.has(u)}t.forEach=function(o,u){gr(this),this.g.forEach(function(d,m){d.forEach(function(P){o.call(u,P,m,this)},this)},this)};function Yc(o,u){gr(o);let d=[];if(typeof u=="string")Qc(o,u)&&(d=d.concat(o.g.get(Mr(o,u))));else for(o=Array.from(o.g.values()),u=0;u<o.length;u++)d=d.concat(o[u]);return d}t.set=function(o,u){return gr(this),this.i=null,o=Mr(this,o),Qc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},t.get=function(o,u){return o?(o=Yc(this,o),o.length>0?String(o[0]):u):u};function Xc(o,u,d){Wc(o,u),d.length>0&&(o.i=null,o.g.set(Mr(o,u),_(d)),o.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(let m=0;m<u.length;m++){var d=u[m];const P=fs(d);d=Yc(this,d);for(let x=0;x<d.length;x++){let z=P;d[x]!==""&&(z+="="+fs(d[x])),o.push(z)}}return this.i=o.join("&")};function Jc(o){const u=new ys;return u.i=o.i,o.g&&(u.g=new Map(o.g),u.h=o.h),u}function Mr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Am(o,u){u&&!o.j&&(gr(o),o.i=null,o.g.forEach(function(d,m){const P=m.toLowerCase();m!=P&&(Wc(this,m),Xc(this,P,d))},o)),o.j=u}function bm(o,u){const d=new ut;if(a.Image){const m=new Image;m.onload=f(On,d,"TestLoadImage: loaded",!0,u,m),m.onerror=f(On,d,"TestLoadImage: error",!1,u,m),m.onabort=f(On,d,"TestLoadImage: abort",!1,u,m),m.ontimeout=f(On,d,"TestLoadImage: timeout",!1,u,m),a.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else u(!1)}function Sm(o,u){const d=new ut,m=new AbortController,P=setTimeout(()=>{m.abort(),On(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:m.signal}).then(x=>{clearTimeout(P),x.ok?On(d,"TestPingServer: ok",!0,u):On(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(P),On(d,"TestPingServer: error",!1,u)})}function On(o,u,d,m,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),m(d)}catch{}}function Rm(){this.g=new st}function oa(o){this.i=o.Sb||null,this.h=o.ab||!1}p(oa,mt),oa.prototype.g=function(){return new wi(this.i,this.h)};function wi(o,u){B.call(this),this.H=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(wi,B),t=wi.prototype,t.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=u,this.readyState=1,Es(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(u.body=o),(this.H||a).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,vs(this)),this.readyState=0},t.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Es(this)),this.g&&(this.readyState=3,Es(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Zc(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Zc(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}t.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?vs(this):Es(this),this.readyState==3&&Zc(this)}},t.Oa=function(o){this.g&&(this.response=this.responseText=o,vs(this))},t.Na=function(o){this.g&&(this.response=o,vs(this))},t.ga=function(){this.g&&vs(this)};function vs(o){o.readyState=4,o.l=null,o.j=null,o.B=null,Es(o)}t.setRequestHeader=function(o,u){this.A.append(o,u)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function Es(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(wi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function eu(o){let u="";return He(o,function(d,m){u+=m,u+=":",u+=d,u+=`\r
`}),u}function aa(o,u,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=eu(d),typeof o=="string"?d!=null&&fs(d):Ue(o,u,d))}function Ke(o){B.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Ke,B);var Cm=/^https?$/i,Pm=["POST","PUT"];t=Ke.prototype,t.Fa=function(o){this.H=o},t.ea=function(o,u,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Mc.g(),this.g.onreadystatechange=g(h(this.Ca,this));try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(x){tu(this,x);return}if(o=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var P in m)d.set(P,m[P]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const x of m.keys())d.set(x,m.get(x));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(x=>x.toLowerCase()=="content-type"),P=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(Pm,u,void 0)>=0)||m||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,z]of d)this.g.setRequestHeader(x,z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(x){tu(this,x)}};function tu(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.o=5,nu(o),Ti(o)}function nu(o){o.A||(o.A=!0,F(o,"complete"),F(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,F(this,"complete"),F(this,"abort"),Ti(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ti(this,!0)),Ke.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?ru(this):this.Xa())},t.Xa=function(){ru(this)};function ru(o){if(o.h&&typeof i<"u"){if(o.v&&Mn(o)==4)setTimeout(o.Ca.bind(o),0);else if(F(o,"readystatechange"),Mn(o)==4){o.h=!1;try{const x=o.ca();e:switch(x){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var m;if(m=x===0){let z=String(o.D).match(Kc)[1]||null;!z&&a.self&&a.self.location&&(z=a.self.location.protocol.slice(0,-1)),m=!Cm.test(z?z.toLowerCase():"")}d=m}if(d)F(o,"complete"),F(o,"success");else{o.o=6;try{var P=Mn(o)>2?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.ca()+"]",nu(o)}}finally{Ti(o)}}}}function Ti(o,u){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const d=o.g;o.g=null,u||F(o,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Mn(o){return o.g?o.g.readyState:0}t.ca=function(){try{return Mn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),rt(u)}};function su(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Vm(o){const u={};o=(o.g&&Mn(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(w(o[m]))continue;var d=pm(o[m]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const x=u[P]||[];u[P]=x,x.push(d)}Dt(u,function(m){return m.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ws(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function iu(o){this.za=0,this.i=[],this.j=new ut,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ws("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ws("baseRetryDelayMs",5e3,o),this.Za=ws("retryDelaySeedMs",1e4,o),this.Ta=ws("forwardChannelMaxRetries",2,o),this.va=ws("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new jc(o&&o.concurrentRequestLimit),this.Ba=new Rm,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=iu.prototype,t.ka=8,t.I=1,t.connect=function(o,u,d,m){ue(0),this.W=o,this.H=u||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.J=pu(this,null,this.W),Ai(this)};function la(o){if(ou(o),o.I==3){var u=o.V++,d=Zt(o.J);if(Ue(d,"SID",o.M),Ue(d,"RID",u),Ue(d,"TYPE","terminate"),Ts(o,d),u=new Dn(o,o.j,u),u.M=2,u.A=Ei(Zt(d)),d=!1,a.navigator&&a.navigator.sendBeacon)try{d=a.navigator.sendBeacon(u.A.toString(),"")}catch{}!d&&a.Image&&(new Image().src=u.A,d=!0),d||(u.g=gu(u.j,null),u.g.ea(u.A)),u.F=Date.now(),vi(u)}du(o)}function Ii(o){o.g&&(ua(o),o.g.cancel(),o.g=null)}function ou(o){Ii(o),o.v&&(a.clearTimeout(o.v),o.v=null),bi(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function Ai(o){if(!$c(o.h)&&!o.m){o.m=!0;var u=o.Ea;re||y(),ge||(re(),ge=!0),A.add(u,o),o.D=0}}function xm(o,u){return qc(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=u.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=Xe(h(o.Ea,o,u),fu(o,o.D)),o.D++,!0)}t.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const P=new Dn(this,this.j,o);let x=this.o;if(this.U&&(x?(x=Et(x),Wt(x,this.U)):x=this.U),this.u!==null||this.R||(P.J=x,x=null),this.S)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,u>4096){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=lu(this,P,u),d=Zt(this.J),Ue(d,"RID",o),Ue(d,"CVER",22),this.G&&Ue(d,"X-HTTP-Session-Id",this.G),Ts(this,d),x&&(this.R?u="headers="+fs(eu(x))+"&"+u:this.u&&aa(d,this.u,x)),sa(this.h,P),this.Ra&&Ue(d,"TYPE","init"),this.S?(Ue(d,"$req",u),Ue(d,"SID","null"),P.U=!0,ea(P,d,null)):ea(P,d,u),this.I=2}}else this.I==3&&(o?au(this,o):this.i.length==0||$c(this.h)||au(this))};function au(o,u){var d;u?d=u.l:d=o.V++;const m=Zt(o.J);Ue(m,"SID",o.M),Ue(m,"RID",d),Ue(m,"AID",o.K),Ts(o,m),o.u&&o.o&&aa(m,o.u,o.o),d=new Dn(o,o.j,d,o.D+1),o.u===null&&(d.J=o.o),u&&(o.i=u.G.concat(o.i)),u=lu(o,d,1e3),d.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),sa(o.h,d),ea(d,m,u)}function Ts(o,u){o.H&&He(o.H,function(d,m){Ue(u,m,d)}),o.l&&He({},function(d,m){Ue(u,m,d)})}function lu(o,u,d){d=Math.min(o.i.length,d);const m=o.l?h(o.l.Ka,o.l,o):null;e:{var P=o.i;let _e=-1;for(;;){const ht=["count="+d];_e==-1?d>0?(_e=P[0].g,ht.push("ofs="+_e)):_e=0:ht.push("ofs="+_e);let ke=!0;for(let yt=0;yt<d;yt++){var x=P[yt].g;const en=P[yt].map;if(x-=_e,x<0)_e=Math.max(0,P[yt].g-100),ke=!1;else try{x="req"+x+"_"||"";try{var z=en instanceof Map?en:Object.entries(en);for(const[_r,kn]of z){let Ln=kn;l(kn)&&(Ln=ve(kn)),ht.push(x+_r+"="+encodeURIComponent(Ln))}}catch(_r){throw ht.push(x+"type="+encodeURIComponent("_badmap")),_r}}catch{m&&m(en)}}if(ke){z=ht.join("&");break e}}z=void 0}return o=o.i.splice(0,d),u.G=o,z}function cu(o){if(!o.g&&!o.v){o.Y=1;var u=o.Da;re||y(),ge||(re(),ge=!0),A.add(u,o),o.A=0}}function ca(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=Xe(h(o.Da,o),fu(o,o.A)),o.A++,!0)}t.Da=function(){if(this.v=null,uu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=Xe(h(this.Wa,this),o)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ue(10),Ii(this),uu(this))};function ua(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function uu(o){o.g=new Dn(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var u=Zt(o.na);Ue(u,"RID","rpc"),Ue(u,"SID",o.M),Ue(u,"AID",o.K),Ue(u,"CI",o.F?"0":"1"),!o.F&&o.ia&&Ue(u,"TO",o.ia),Ue(u,"TYPE","xmlhttp"),Ts(o,u),o.u&&o.o&&aa(u,o.u,o.o),o.O&&(o.g.H=o.O);var d=o.g;o=o.ba,d.M=1,d.A=Ei(Zt(u)),d.u=null,d.R=!0,Fc(d,o)}t.Va=function(){this.C!=null&&(this.C=null,Ii(this),ca(this),ue(19))};function bi(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function hu(o,u){var d=null;if(o.g==u){bi(o),ua(o),o.g=null;var m=2}else if(ra(o.h,u))d=u.G,Hc(o.h,u),m=1;else return;if(o.I!=0){if(u.o)if(m==1){d=u.u?u.u.length:0,u=Date.now()-u.F;var P=o.D;m=Q(),F(m,new Ye(m,d)),Ai(o)}else cu(o);else if(P=u.m,P==3||P==0&&u.X>0||!(m==1&&xm(o,u)||m==2&&ca(o)))switch(d&&d.length>0&&(u=o.h,u.i=u.i.concat(d)),P){case 1:mr(o,5);break;case 4:mr(o,10);break;case 3:mr(o,6);break;default:mr(o,2)}}}function fu(o,u){let d=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(d*=2),d*u}function mr(o,u){if(o.j.info("Error code "+u),u==2){var d=h(o.bb,o),m=o.Ua;const P=!m;m=new Nn(m||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||ps(m,"https"),Ei(m),P?bm(m.toString(),d):Sm(m.toString(),d)}else ue(2);o.I=0,o.l&&o.l.pa(u),du(o),ou(o)}t.bb=function(o){o?(this.j.info("Successfully pinged google.com"),ue(2)):(this.j.info("Failed to ping google.com"),ue(1))};function du(o){if(o.I=0,o.ja=[],o.l){const u=zc(o.h);(u.length!=0||o.i.length!=0)&&(R(o.ja,u),R(o.ja,o.i),o.h.i.length=0,_(o.i),o.i.length=0),o.l.oa()}}function pu(o,u,d){var m=d instanceof Nn?Zt(d):new Nn(d);if(m.g!="")u&&(m.g=u+"."+m.g),gs(m,m.u);else{var P=a.location;m=P.protocol,u=u?u+"."+P.hostname:P.hostname,P=+P.port;const x=new Nn(null);m&&ps(x,m),u&&(x.g=u),P&&gs(x,P),d&&(x.h=d),m=x}return d=o.G,u=o.wa,d&&u&&Ue(m,d,u),Ue(m,"VER",o.ka),Ts(o,m),m}function gu(o,u,d){if(u&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Aa&&!o.ma?new Ke(new oa({ab:d})):new Ke(o.ma),u.Fa(o.L),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function mu(){}t=mu.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Si(){}Si.prototype.g=function(o,u){return new Ht(o,u)};function Ht(o,u){B.call(this),this.g=new iu(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(o?o["X-WebChannel-Client-Profile"]=u.sa:o={"X-WebChannel-Client-Profile":u.sa}),this.g.U=o,(o=u&&u.Qb)&&!w(o)&&(this.g.u=o),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!w(u)&&(this.g.G=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new kr(this)}p(Ht,B),Ht.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ht.prototype.close=function(){la(this.g)},Ht.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.v&&(d={},d.__data__=ve(o),o=d);u.i.push(new _m(u.Ya++,o)),u.I==3&&Ai(u)},Ht.prototype.N=function(){this.g.l=null,delete this.j,la(this.g),delete this.g,Ht.Z.N.call(this)};function _u(o){Vn.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}p(_u,Vn);function yu(){_t.call(this),this.status=1}p(yu,_t);function kr(o){this.g=o}p(kr,mu),kr.prototype.ra=function(){F(this.g,"a")},kr.prototype.qa=function(o){F(this.g,new _u(o))},kr.prototype.pa=function(o){F(this.g,new yu)},kr.prototype.oa=function(){F(this.g,"b")},Si.prototype.createWebChannel=Si.prototype.g,Ht.prototype.send=Ht.prototype.o,Ht.prototype.open=Ht.prototype.m,Ht.prototype.close=Ht.prototype.close,Rp=function(){return new Si},Sp=function(){return Q()},bp=Qe,ll={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},yi.NO_ERROR=0,yi.TIMEOUT=8,yi.HTTP_ERROR=6,qi=yi,Oc.COMPLETE="complete",Ap=Oc,Nt.EventType=qt,qt.OPEN="a",qt.CLOSE="b",qt.ERROR="c",qt.MESSAGE="d",B.prototype.listen=B.prototype.J,Cs=Nt,Ke.prototype.listenOnce=Ke.prototype.K,Ke.prototype.getLastError=Ke.prototype.Ha,Ke.prototype.getLastErrorCode=Ke.prototype.ya,Ke.prototype.getStatus=Ke.prototype.ca,Ke.prototype.getResponseJson=Ke.prototype.La,Ke.prototype.getResponseText=Ke.prototype.la,Ke.prototype.send=Ke.prototype.ea,Ke.prototype.setWithCredentials=Ke.prototype.Fa,Ip=Ke}).apply(typeof xi<"u"?xi:typeof self<"u"?self:typeof window<"u"?window:{});const Sh="@firebase/firestore",Rh="4.9.2";/**
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
 */class St{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}St.UNAUTHENTICATED=new St(null),St.GOOGLE_CREDENTIALS=new St("google-credentials-uid"),St.FIRST_PARTY=new St("first-party-uid"),St.MOCK_USER=new St("mock-user");/**
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
 */let cs="12.3.0";/**
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
 */const Pr=new rc("@firebase/firestore");function $r(){return Pr.logLevel}function Z(t,...e){if(Pr.logLevel<=Ie.DEBUG){const n=e.map(ic);Pr.debug(`Firestore (${cs}): ${t}`,...n)}}function Cn(t,...e){if(Pr.logLevel<=Ie.ERROR){const n=e.map(ic);Pr.error(`Firestore (${cs}): ${t}`,...n)}}function ns(t,...e){if(Pr.logLevel<=Ie.WARN){const n=e.map(ic);Pr.warn(`Firestore (${cs}): ${t}`,...n)}}function ic(t){if(typeof t=="string")return t;try{/**
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
*/return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
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
 */function pe(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Cp(t,r,n)}function Cp(t,e,n){let r=`FIRESTORE (${cs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Cn(r),new Error(r)}function ze(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Cp(e,s,r)}function Ae(t,e){return t}/**
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
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends fr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Yn{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
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
 */class Pp{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Yw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(St.UNAUTHENTICATED)))}shutdown(){}}class Xw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class Jw{constructor(e){this.t=e,this.currentUser=St.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ze(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Yn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Yn,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const c=i;e.enqueueRetryable((async()=>{await c.promise,await s(this.currentUser)}))},l=c=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((c=>l(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Yn)}}),0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ze(typeof r.accessToken=="string",31837,{l:r}),new Pp(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ze(e===null||typeof e=="string",2055,{h:e}),new St(e)}}class Zw{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=St.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class eT{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new Zw(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(St.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ch{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class tT{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,kw(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ze(this.o===void 0,3512);const r=i=>{i.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,Z("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Ch(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(ze(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Ch(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function nT(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class oc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=nT(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function we(t,e){return t<e?-1:t>e?1:0}function cl(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return xa(s)===xa(i)?we(s,i):xa(s)?1:-1}return we(t.length,e.length)}const rT=55296,sT=57343;function xa(t){const e=t.charCodeAt(0);return e>=rT&&e<=sT}function rs(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
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
 */const Ph="__name__";class rn{constructor(e,n,r){n===void 0?n=0:n>e.length&&pe(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&pe(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return rn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof rn?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=rn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return we(e.length,n.length)}static compareSegments(e,n){const r=rn.isNumericId(e),s=rn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?rn.extractNumericId(e).compare(rn.extractNumericId(n)):cl(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Qn.fromString(e.substring(4,e.length-2))}}class Be extends rn{construct(e,n,r){return new Be(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ne(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new Be(n)}static emptyPath(){return new Be([])}}const iT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ft extends rn{construct(e,n,r){return new Ft(e,n,r)}static isValidIdentifier(e){return iT.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ft.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ph}static keyField(){return new Ft([Ph])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ne(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new ne(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ne(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new ne(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ft(n)}static emptyPath(){return new Ft([])}}/**
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
 */class ae{constructor(e){this.path=e}static fromPath(e){return new ae(Be.fromString(e))}static fromName(e){return new ae(Be.fromString(e).popFirst(5))}static empty(){return new ae(Be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Be.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ae(new Be(e.slice()))}}/**
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
 */function Vp(t,e,n){if(!n)throw new ne(H.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function oT(t,e,n,r){if(e===!0&&r===!0)throw new ne(H.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Vh(t){if(!ae.isDocumentKey(t))throw new ne(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function xh(t){if(ae.isDocumentKey(t))throw new ne(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function aT(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function lT(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":pe(12329,{type:typeof t})}function si(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ne(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=lT(t);throw new ne(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function at(t,e){const n={typeString:t};return e&&(n.value=e),n}function di(t,e){if(!aT(t))throw new ne(H.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const a=t[r];if(s&&typeof a!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new ne(H.INVALID_ARGUMENT,n);return!0}/**
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
 */const Dh=-62135596800,Nh=1e6;class ot{static now(){return ot.fromMillis(Date.now())}static fromDate(e){return ot.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Nh);return new ot(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ne(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ne(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Dh)throw new ne(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ne(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Nh}_compareTo(e){return this.seconds===e.seconds?we(this.nanoseconds,e.nanoseconds):we(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ot._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(di(e,ot._jsonSchema))return new ot(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Dh;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ot._jsonSchemaVersion="firestore/timestamp/1.0",ot._jsonSchema={type:at("string",ot._jsonSchemaVersion),seconds:at("number"),nanoseconds:at("number")};/**
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
 */class de{static fromTimestamp(e){return new de(e)}static min(){return new de(new ot(0,0))}static max(){return new de(new ot(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ii=-1;function cT(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=de.fromTimestamp(r===1e9?new ot(n+1,0):new ot(n,r));return new sr(s,ae.empty(),e)}function uT(t){return new sr(t.readTime,t.key,ii)}class sr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new sr(de.min(),ae.empty(),ii)}static max(){return new sr(de.max(),ae.empty(),ii)}}function hT(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ae.comparator(t.documentKey,e.documentKey),n!==0?n:we(t.largestBatchId,e.largestBatchId))}/**
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
 */const fT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class dT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Mo(t){if(t.code!==H.FAILED_PRECONDITION||t.message!==fT)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&pe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):L.reject(n)}static resolve(e){return new L(((n,r)=>{n(e)}))}static reject(e){return new L(((n,r)=>{r(e)}))}static waitFor(e){return new L(((n,r)=>{let s=0,i=0,a=!1;e.forEach((l=>{++s,l.next((()=>{++i,a&&i===s&&n()}),(c=>r(c)))})),a=!0,i===s&&n()}))}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next((s=>s?L.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new L(((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;n(e[h]).next((f=>{a[h]=f,++l,l===i&&r(a)}),(f=>s(f)))}}))}static doWhile(e,n){return new L(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function pT(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function us(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class ko{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}ko.ce=-1;/**
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
 */const gT=-1;function Lo(t){return t==null}function ul(t){return t===0&&1/t==-1/0}/**
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
 */const xp="";function mT(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Oh(e)),e=_T(t.get(n),e);return Oh(e)}function _T(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case xp:n+="";break;default:n+=i}}return n}function Oh(t){return t+xp+""}/**
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
 */function Mh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function pi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function yT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class nt{constructor(e,n){this.comparator=e,this.root=n||wt.EMPTY}insert(e,n){return new nt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,wt.BLACK,null,null))}remove(e){return new nt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,wt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Di(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Di(this.root,e,this.comparator,!1)}getReverseIterator(){return new Di(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Di(this.root,e,this.comparator,!0)}}class Di{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class wt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??wt.RED,this.left=s??wt.EMPTY,this.right=i??wt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new wt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return wt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return wt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,wt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,wt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw pe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw pe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw pe(27949);return e+(this.isRed()?0:1)}}wt.EMPTY=null,wt.RED=!0,wt.BLACK=!1;wt.EMPTY=new class{constructor(){this.size=0}get key(){throw pe(57766)}get value(){throw pe(16141)}get color(){throw pe(16727)}get left(){throw pe(29726)}get right(){throw pe(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new wt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class gt{constructor(e){this.comparator=e,this.data=new nt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new kh(this.data.getIterator())}getIteratorFrom(e){return new kh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof gt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new gt(this.comparator);return n.data=e,n}}class kh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class qn{constructor(e){this.fields=e,e.sort(Ft.comparator)}static empty(){return new qn([])}unionWith(e){let n=new gt(Ft.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new qn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return rs(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
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
 */class Dp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class It{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Dp("Invalid base64 string: "+i):i}})(e);return new It(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(e);return new It(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return we(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}It.EMPTY_BYTE_STRING=new It("");const vT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ir(t){if(ze(!!t,39018),typeof t=="string"){let e=0;const n=vT.exec(t);if(ze(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ze(t.seconds),nanos:Ze(t.nanos)}}function Ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function or(t){return typeof t=="string"?It.fromBase64String(t):It.fromUint8Array(t)}/**
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
 */const Np="server_timestamp",Op="__type__",Mp="__previous_value__",kp="__local_write_time__";function ac(t){return(t?.mapValue?.fields||{})[Op]?.stringValue===Np}function Fo(t){const e=t.mapValue.fields[Mp];return ac(e)?Fo(e):e}function oi(t){const e=ir(t.mapValue.fields[kp].timestampValue);return new ot(e.seconds,e.nanos)}/**
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
 */class ET{constructor(e,n,r,s,i,a,l,c,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h,this.isUsingEmulator=f}}const lo="(default)";class ai{constructor(e,n){this.projectId=e,this.database=n||lo}static empty(){return new ai("","")}get isDefaultDatabase(){return this.database===lo}isEqual(e){return e instanceof ai&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const wT="__type__",TT="__max__",Ni={mapValue:{}},IT="__vector__",hl="value";function ar(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ac(t)?4:bT(t)?9007199254740991:AT(t)?10:11:pe(28295,{value:t})}function fn(t,e){if(t===e)return!0;const n=ar(t);if(n!==ar(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return oi(t).isEqual(oi(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=ir(s.timestampValue),l=ir(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return or(s.bytesValue).isEqual(or(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return Ze(s.geoPointValue.latitude)===Ze(i.geoPointValue.latitude)&&Ze(s.geoPointValue.longitude)===Ze(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return Ze(s.integerValue)===Ze(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Ze(s.doubleValue),l=Ze(i.doubleValue);return a===l?ul(a)===ul(l):isNaN(a)&&isNaN(l)}return!1})(t,e);case 9:return rs(t.arrayValue.values||[],e.arrayValue.values||[],fn);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Mh(a)!==Mh(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!fn(a[c],l[c])))return!1;return!0})(t,e);default:return pe(52216,{left:t})}}function li(t,e){return(t.values||[]).find((n=>fn(n,e)))!==void 0}function ss(t,e){if(t===e)return 0;const n=ar(t),r=ar(e);if(n!==r)return we(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return we(t.booleanValue,e.booleanValue);case 2:return(function(i,a){const l=Ze(i.integerValue||i.doubleValue),c=Ze(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1})(t,e);case 3:return Lh(t.timestampValue,e.timestampValue);case 4:return Lh(oi(t),oi(e));case 5:return cl(t.stringValue,e.stringValue);case 6:return(function(i,a){const l=or(i),c=or(a);return l.compareTo(c)})(t.bytesValue,e.bytesValue);case 7:return(function(i,a){const l=i.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const f=we(l[h],c[h]);if(f!==0)return f}return we(l.length,c.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,a){const l=we(Ze(i.latitude),Ze(a.latitude));return l!==0?l:we(Ze(i.longitude),Ze(a.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return Fh(t.arrayValue,e.arrayValue);case 10:return(function(i,a){const l=i.fields||{},c=a.fields||{},h=l[hl]?.arrayValue,f=c[hl]?.arrayValue,p=we(h?.values?.length||0,f?.values?.length||0);return p!==0?p:Fh(h,f)})(t.mapValue,e.mapValue);case 11:return(function(i,a){if(i===Ni.mapValue&&a===Ni.mapValue)return 0;if(i===Ni.mapValue)return 1;if(a===Ni.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=a.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const g=cl(c[p],f[p]);if(g!==0)return g;const _=ss(l[c[p]],h[f[p]]);if(_!==0)return _}return we(c.length,f.length)})(t.mapValue,e.mapValue);default:throw pe(23264,{he:n})}}function Lh(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return we(t,e);const n=ir(t),r=ir(e),s=we(n.seconds,r.seconds);return s!==0?s:we(n.nanos,r.nanos)}function Fh(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ss(n[s],r[s]);if(i)return i}return we(n.length,r.length)}function is(t){return fl(t)}function fl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=ir(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return or(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return ae.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=fl(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${fl(n.fields[a])}`;return s+"}"})(t.mapValue):pe(61005,{value:t})}function Hi(t){switch(ar(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Fo(t);return e?16+Hi(e):16;case 5:return 2*t.stringValue.length;case 6:return or(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Hi(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return pi(r.fields,((i,a)=>{s+=i.length+Hi(a)})),s})(t.mapValue);default:throw pe(13486,{value:t})}}function dl(t){return!!t&&"integerValue"in t}function lc(t){return!!t&&"arrayValue"in t}function Uh(t){return!!t&&"nullValue"in t}function Bh(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Da(t){return!!t&&"mapValue"in t}function AT(t){return(t?.mapValue?.fields||{})[wT]?.stringValue===IT}function qs(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return pi(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=qs(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=qs(t.arrayValue.values[n]);return e}return{...t}}function bT(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===TT}/**
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
 */class on{constructor(e){this.value=e}static empty(){return new on({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Da(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=qs(n)}setAll(e){let n=Ft.emptyPath(),r={},s=[];e.forEach(((a,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}a?r[l.lastSegment()]=qs(a):s.push(l.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Da(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return fn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Da(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){pi(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new on(qs(this.value))}}/**
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
 */class Ct{constructor(e,n,r,s,i,a,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Ct(e,0,de.min(),de.min(),de.min(),on.empty(),0)}static newFoundDocument(e,n,r,s){return new Ct(e,1,n,de.min(),r,s,0)}static newNoDocument(e,n){return new Ct(e,2,n,de.min(),de.min(),on.empty(),0)}static newUnknownDocument(e,n){return new Ct(e,3,n,de.min(),de.min(),on.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(de.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=on.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=on.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=de.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class co{constructor(e,n){this.position=e,this.inclusive=n}}function jh(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],a=t.position[s];if(i.field.isKeyField()?r=ae.comparator(ae.fromName(a.referenceValue),n.key):r=ss(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function $h(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!fn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class uo{constructor(e,n="asc"){this.field=e,this.dir=n}}function ST(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Lp{}class pt extends Lp{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new CT(e,n,r):n==="array-contains"?new xT(e,r):n==="in"?new DT(e,r):n==="not-in"?new NT(e,r):n==="array-contains-any"?new OT(e,r):new pt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new PT(e,r):new VT(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ss(n,this.value)):n!==null&&ar(this.value)===ar(n)&&this.matchesComparison(ss(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return pe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class dn extends Lp{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new dn(e,n)}matches(e){return Fp(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Fp(t){return t.op==="and"}function Up(t){return RT(t)&&Fp(t)}function RT(t){for(const e of t.filters)if(e instanceof dn)return!1;return!0}function pl(t){if(t instanceof pt)return t.field.canonicalString()+t.op.toString()+is(t.value);if(Up(t))return t.filters.map((e=>pl(e))).join(",");{const e=t.filters.map((n=>pl(n))).join(",");return`${t.op}(${e})`}}function Bp(t,e){return t instanceof pt?(function(r,s){return s instanceof pt&&r.op===s.op&&r.field.isEqual(s.field)&&fn(r.value,s.value)})(t,e):t instanceof dn?(function(r,s){return s instanceof dn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,a,l)=>i&&Bp(a,s.filters[l])),!0):!1})(t,e):void pe(19439)}function jp(t){return t instanceof pt?(function(n){return`${n.field.canonicalString()} ${n.op} ${is(n.value)}`})(t):t instanceof dn?(function(n){return n.op.toString()+" {"+n.getFilters().map(jp).join(" ,")+"}"})(t):"Filter"}class CT extends pt{constructor(e,n,r){super(e,n,r),this.key=ae.fromName(r.referenceValue)}matches(e){const n=ae.comparator(e.key,this.key);return this.matchesComparison(n)}}class PT extends pt{constructor(e,n){super(e,"in",n),this.keys=$p("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class VT extends pt{constructor(e,n){super(e,"not-in",n),this.keys=$p("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function $p(t,e){return(e.arrayValue?.values||[]).map((n=>ae.fromName(n.referenceValue)))}class xT extends pt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return lc(n)&&li(n.arrayValue,this.value)}}class DT extends pt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&li(this.value.arrayValue,n)}}class NT extends pt{constructor(e,n){super(e,"not-in",n)}matches(e){if(li(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!li(this.value.arrayValue,n)}}class OT extends pt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!lc(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>li(this.value.arrayValue,r)))}}/**
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
 */class MT{constructor(e,n=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.Te=null}}function qh(t,e=null,n=[],r=[],s=null,i=null,a=null){return new MT(t,e,n,r,s,i,a)}function cc(t){const e=Ae(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>pl(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),Lo(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>is(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>is(r))).join(",")),e.Te=n}return e.Te}function uc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ST(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Bp(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!$h(t.startAt,e.startAt)&&$h(t.endAt,e.endAt)}function gl(t){return ae.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Uo{constructor(e,n=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function kT(t,e,n,r,s,i,a,l){return new Uo(t,e,n,r,s,i,a,l)}function hc(t){return new Uo(t)}function Hh(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function LT(t){return t.collectionGroup!==null}function Hs(t){const e=Ae(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new gt(Ft.comparator);return a.filters.forEach((c=>{c.getFlattenedFilters().forEach((h=>{h.isInequality()&&(l=l.add(h.field))}))})),l})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new uo(i,r))})),n.has(Ft.keyField().canonicalString())||e.Ie.push(new uo(Ft.keyField(),r))}return e.Ie}function un(t){const e=Ae(t);return e.Ee||(e.Ee=FT(e,Hs(t))),e.Ee}function FT(t,e){if(t.limitType==="F")return qh(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new uo(s.field,i)}));const n=t.endAt?new co(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new co(t.startAt.position,t.startAt.inclusive):null;return qh(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ml(t,e,n){return new Uo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Bo(t,e){return uc(un(t),un(e))&&t.limitType===e.limitType}function qp(t){return`${cc(un(t))}|lt:${t.limitType}`}function qr(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>jp(s))).join(", ")}]`),Lo(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>is(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>is(s))).join(",")),`Target(${r})`})(un(t))}; limitType=${t.limitType})`}function jo(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ae.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of Hs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(a,l,c){const h=jh(a,l,c);return a.inclusive?h<=0:h<0})(r.startAt,Hs(r),s)||r.endAt&&!(function(a,l,c){const h=jh(a,l,c);return a.inclusive?h>=0:h>0})(r.endAt,Hs(r),s))})(t,e)}function UT(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Hp(t){return(e,n)=>{let r=!1;for(const s of Hs(t)){const i=BT(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function BT(t,e,n){const r=t.field.isKeyField()?ae.comparator(e.key,n.key):(function(i,a,l){const c=a.data.field(i),h=l.data.field(i);return c!==null&&h!==null?ss(c,h):pe(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return pe(19790,{direction:t.dir})}}/**
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
 */class Or{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){pi(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return yT(this.inner)}size(){return this.innerSize}}/**
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
 */const jT=new nt(ae.comparator);function lr(){return jT}const zp=new nt(ae.comparator);function Ps(...t){let e=zp;for(const n of t)e=e.insert(n.key,n);return e}function $T(t){let e=zp;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function Tr(){return zs()}function Kp(){return zs()}function zs(){return new Or((t=>t.toString()),((t,e)=>t.isEqual(e)))}const qT=new gt(ae.comparator);function Se(...t){let e=qT;for(const n of t)e=e.add(n);return e}const HT=new gt(we);function zT(){return HT}/**
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
 */function KT(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ul(e)?"-0":e}}function GT(t){return{integerValue:""+t}}/**
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
 */class $o{constructor(){this._=void 0}}function WT(t,e,n){return t instanceof _l?(function(s,i){const a={fields:{[Op]:{stringValue:Np},[kp]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ac(i)&&(i=Fo(i)),i&&(a.fields[Mp]=i),{mapValue:a}})(n,e):t instanceof ho?Gp(t,e):t instanceof fo?Wp(t,e):(function(s,i){const a=YT(s,i),l=zh(a)+zh(s.Ae);return dl(a)&&dl(s.Ae)?GT(l):KT(s.serializer,l)})(t,e)}function QT(t,e,n){return t instanceof ho?Gp(t,e):t instanceof fo?Wp(t,e):n}function YT(t,e){return t instanceof yl?(function(r){return dl(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class _l extends $o{}class ho extends $o{constructor(e){super(),this.elements=e}}function Gp(t,e){const n=Qp(e);for(const r of t.elements)n.some((s=>fn(s,r)))||n.push(r);return{arrayValue:{values:n}}}class fo extends $o{constructor(e){super(),this.elements=e}}function Wp(t,e){let n=Qp(e);for(const r of t.elements)n=n.filter((s=>!fn(s,r)));return{arrayValue:{values:n}}}class yl extends $o{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function zh(t){return Ze(t.integerValue||t.doubleValue)}function Qp(t){return lc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function XT(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof ho&&s instanceof ho||r instanceof fo&&s instanceof fo?rs(r.elements,s.elements,fn):r instanceof yl&&s instanceof yl?fn(r.Ae,s.Ae):r instanceof _l&&s instanceof _l})(t.transform,e.transform)}class Sr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Sr}static exists(e){return new Sr(void 0,e)}static updateTime(e){return new Sr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function zi(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class fc{}function Yp(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ZT(t.key,Sr.none()):new dc(t.key,t.data,Sr.none());{const n=t.data,r=on.empty();let s=new gt(Ft.comparator);for(let i of e.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new qo(t.key,r,new qn(s.toArray()),Sr.none())}}function JT(t,e,n){t instanceof dc?(function(s,i,a){const l=s.value.clone(),c=Gh(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(t,e,n):t instanceof qo?(function(s,i,a){if(!zi(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=Gh(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(Xp(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(t,e,n):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,n)}function Ks(t,e,n,r){return t instanceof dc?(function(i,a,l,c){if(!zi(i.precondition,a))return l;const h=i.value.clone(),f=Wh(i.fieldTransforms,c,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null})(t,e,n,r):t instanceof qo?(function(i,a,l,c){if(!zi(i.precondition,a))return l;const h=Wh(i.fieldTransforms,c,a),f=a.data;return f.setAll(Xp(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(t,e,n,r):(function(i,a,l){return zi(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l})(t,e,n)}function Kh(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&rs(r,s,((i,a)=>XT(i,a)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class dc extends fc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class qo extends fc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Xp(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function Gh(t,e,n){const r=new Map;ze(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,QT(a,l,n[s]))}return r}function Wh(t,e,n){const r=new Map;for(const s of t){const i=s.transform,a=n.data.field(s.field);r.set(s.field,WT(i,a,e))}return r}class ZT extends fc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class eI{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&JT(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ks(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ks(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Kp();return this.mutations.forEach((s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=n.has(s.key)?null:l;const c=Yp(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(de.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),Se())}isEqual(e){return this.batchId===e.batchId&&rs(this.mutations,e.mutations,((n,r)=>Kh(n,r)))&&rs(this.baseMutations,e.baseMutations,((n,r)=>Kh(n,r)))}}/**
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
 */class tI{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class nI{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var it,Te;function Jp(t){if(t===void 0)return Cn("GRPC error has no .code"),H.UNKNOWN;switch(t){case it.OK:return H.OK;case it.CANCELLED:return H.CANCELLED;case it.UNKNOWN:return H.UNKNOWN;case it.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case it.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case it.INTERNAL:return H.INTERNAL;case it.UNAVAILABLE:return H.UNAVAILABLE;case it.UNAUTHENTICATED:return H.UNAUTHENTICATED;case it.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case it.NOT_FOUND:return H.NOT_FOUND;case it.ALREADY_EXISTS:return H.ALREADY_EXISTS;case it.PERMISSION_DENIED:return H.PERMISSION_DENIED;case it.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case it.ABORTED:return H.ABORTED;case it.OUT_OF_RANGE:return H.OUT_OF_RANGE;case it.UNIMPLEMENTED:return H.UNIMPLEMENTED;case it.DATA_LOSS:return H.DATA_LOSS;default:return pe(39323,{code:t})}}(Te=it||(it={}))[Te.OK=0]="OK",Te[Te.CANCELLED=1]="CANCELLED",Te[Te.UNKNOWN=2]="UNKNOWN",Te[Te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Te[Te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Te[Te.NOT_FOUND=5]="NOT_FOUND",Te[Te.ALREADY_EXISTS=6]="ALREADY_EXISTS",Te[Te.PERMISSION_DENIED=7]="PERMISSION_DENIED",Te[Te.UNAUTHENTICATED=16]="UNAUTHENTICATED",Te[Te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Te[Te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Te[Te.ABORTED=10]="ABORTED",Te[Te.OUT_OF_RANGE=11]="OUT_OF_RANGE",Te[Te.UNIMPLEMENTED=12]="UNIMPLEMENTED",Te[Te.INTERNAL=13]="INTERNAL",Te[Te.UNAVAILABLE=14]="UNAVAILABLE",Te[Te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function rI(){return new TextEncoder}/**
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
 */const sI=new Qn([4294967295,4294967295],0);function Qh(t){const e=rI().encode(t),n=new Tp;return n.update(e),new Uint8Array(n.digest())}function Yh(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Qn([n,r],0),new Qn([s,i],0)]}class pc{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Vs(`Invalid padding: ${n}`);if(r<0)throw new Vs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Vs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Vs(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Qn.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(Qn.fromNumber(r)));return s.compare(sI)===1&&(s=new Qn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Qh(e),[r,s]=Yh(n);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new pc(i,s,n);return r.forEach((l=>a.insert(l))),a}insert(e){if(this.ge===0)return;const n=Qh(e),[r,s]=Yh(n);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Vs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ho{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,gi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ho(de.min(),s,new nt(we),lr(),Se())}}class gi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new gi(r,n,Se(),Se(),Se())}}/**
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
 */class Ki{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class Zp{constructor(e,n){this.targetId=e,this.Ce=n}}class eg{constructor(e,n,r=It.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Xh{constructor(){this.ve=0,this.Fe=Jh(),this.Me=It.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Se(),n=Se(),r=Se();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:pe(38017,{changeType:i})}})),new gi(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Jh()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ze(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class iI{constructor(e){this.Ge=e,this.ze=new Map,this.je=lr(),this.Je=Oi(),this.He=Oi(),this.Ye=new nt(we)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:pe(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((r,s)=>{this.rt(s)&&n(s)}))}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(gl(i))if(r===0){const a=new ae(i.path);this.et(n,a,Ct.newNoDocument(a,de.min()))}else ze(r===1,20013,{expectedCount:r});else{const a=this._t(n);if(a!==r){const l=this.ut(e),c=l?this.ct(l,e,a):1;if(c!==0){this.it(n);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let a,l;try{a=or(r).toUint8Array()}catch(c){if(c instanceof Dp)return ns("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new pc(a,s,i)}catch(c){return ns(c instanceof Vs?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)})),s}Tt(e){const n=new Map;this.ze.forEach(((i,a)=>{const l=this.ot(a);if(l){if(i.current&&gl(l.target)){const c=new ae(l.target.path);this.It(c).has(a)||this.Et(a,c)||this.et(a,c,Ct.newNoDocument(c,e))}i.Be&&(n.set(a,i.ke()),i.qe())}}));let r=Se();this.He.forEach(((i,a)=>{let l=!0;a.forEachWhile((c=>{const h=this.ot(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(i))})),this.je.forEach(((i,a)=>a.setReadTime(e)));const s=new Ho(e,n,this.Ye,this.je,r);return this.je=lr(),this.Je=Oi(),this.He=Oi(),this.Ye=new nt(we),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Xh,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new gt(we),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new gt(we),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Xh),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Oi(){return new nt(ae.comparator)}function Jh(){return new nt(ae.comparator)}const oI={asc:"ASCENDING",desc:"DESCENDING"},aI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},lI={and:"AND",or:"OR"};class cI{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function vl(t,e){return t.useProto3Json||Lo(e)?e:{value:e}}function uI(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Xr(t){return ze(!!t,49232),de.fromTimestamp((function(n){const r=ir(n);return new ot(r.seconds,r.nanos)})(t))}function fI(t,e){return El(t,e).canonicalString()}function El(t,e){const n=(function(s){return new Be(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function tg(t){const e=Be.fromString(t);return ze(og(e),10190,{key:e.toString()}),e}function Na(t,e){const n=tg(e);if(n.get(1)!==t.databaseId.projectId)throw new ne(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ne(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ae(rg(n))}function ng(t,e){return fI(t.databaseId,e)}function dI(t){const e=tg(t);return e.length===4?Be.emptyPath():rg(e)}function Zh(t){return new Be(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function rg(t){return ze(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function pI(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:pe(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(h,f){return h.useProto3Json?(ze(f===void 0||typeof f=="string",58123),It.fromBase64String(f||"")):(ze(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),It.fromUint8Array(f||new Uint8Array))})(t,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&(function(h){const f=h.code===void 0?H.UNKNOWN:Jp(h.code);return new ne(f,h.message||"")})(a);n=new eg(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Na(t,r.document.name),i=Xr(r.document.updateTime),a=r.document.createTime?Xr(r.document.createTime):de.min(),l=new on({mapValue:{fields:r.document.fields}}),c=Ct.newFoundDocument(s,i,a,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Ki(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Na(t,r.document),i=r.readTime?Xr(r.readTime):de.min(),a=Ct.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Ki([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Na(t,r.document),i=r.removedTargetIds||[];n=new Ki([],i,s,null)}else{if(!("filter"in e))return pe(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new nI(s,i),l=r.targetId;n=new Zp(l,a)}}return n}function gI(t,e){return{documents:[ng(t,e.path)]}}function mI(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=ng(t,s);const i=(function(h){if(h.length!==0)return ig(dn.create(h,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const a=(function(h){if(h.length!==0)return h.map((f=>(function(g){return{field:Hr(g.field),direction:vI(g.dir)}})(f)))})(e.orderBy);a&&(n.structuredQuery.orderBy=a);const l=vl(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{ft:n,parent:s}}function _I(t){let e=dI(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ze(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=(function(p){const g=sg(p);return g instanceof dn&&Up(g)?g.getFilters():[g]})(n.where));let a=[];n.orderBy&&(a=(function(p){return p.map((g=>(function(R){return new uo(zr(R.field),(function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(R.direction))})(g)))})(n.orderBy));let l=null;n.limit&&(l=(function(p){let g;return g=typeof p=="object"?p.value:p,Lo(g)?null:g})(n.limit));let c=null;n.startAt&&(c=(function(p){const g=!!p.before,_=p.values||[];return new co(_,g)})(n.startAt));let h=null;return n.endAt&&(h=(function(p){const g=!p.before,_=p.values||[];return new co(_,g)})(n.endAt)),kT(e,s,a,i,l,"F",c,h)}function yI(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return pe(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function sg(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=zr(n.unaryFilter.field);return pt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=zr(n.unaryFilter.field);return pt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=zr(n.unaryFilter.field);return pt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=zr(n.unaryFilter.field);return pt.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return pe(61313);default:return pe(60726)}})(t):t.fieldFilter!==void 0?(function(n){return pt.create(zr(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return pe(58110);default:return pe(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return dn.create(n.compositeFilter.filters.map((r=>sg(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return pe(1026)}})(n.compositeFilter.op))})(t):pe(30097,{filter:t})}function vI(t){return oI[t]}function EI(t){return aI[t]}function wI(t){return lI[t]}function Hr(t){return{fieldPath:t.canonicalString()}}function zr(t){return Ft.fromServerFormat(t.fieldPath)}function ig(t){return t instanceof pt?(function(n){if(n.op==="=="){if(Bh(n.value))return{unaryFilter:{field:Hr(n.field),op:"IS_NAN"}};if(Uh(n.value))return{unaryFilter:{field:Hr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Bh(n.value))return{unaryFilter:{field:Hr(n.field),op:"IS_NOT_NAN"}};if(Uh(n.value))return{unaryFilter:{field:Hr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Hr(n.field),op:EI(n.op),value:n.value}}})(t):t instanceof dn?(function(n){const r=n.getFilters().map((s=>ig(s)));return r.length===1?r[0]:{compositeFilter:{op:wI(n.op),filters:r}}})(t):pe(54877,{filter:t})}function og(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Hn{constructor(e,n,r,s,i=de.min(),a=de.min(),l=It.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Hn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class TI{constructor(e){this.yt=e}}function II(t){const e=_I({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ml(e,e.limit,"L"):e}/**
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
 */class AI{constructor(){this.Cn=new bI}addToCollectionParentIndex(e,n){return this.Cn.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(sr.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(sr.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class bI{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new gt(Be.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new gt(Be.comparator)).toArray()}}/**
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
 */const ef={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ag=41943040;class Bt{static withCacheSize(e){return new Bt(e,Bt.DEFAULT_COLLECTION_PERCENTILE,Bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Bt.DEFAULT_COLLECTION_PERCENTILE=10,Bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Bt.DEFAULT=new Bt(ag,Bt.DEFAULT_COLLECTION_PERCENTILE,Bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Bt.DISABLED=new Bt(-1,0,0);/**
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
 */class os{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new os(0)}static cr(){return new os(-1)}}/**
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
 */const tf="LruGarbageCollector",SI=1048576;function nf([t,e],[n,r]){const s=we(t,n);return s===0?we(e,r):s}class RI{constructor(e){this.Ir=e,this.buffer=new gt(nf),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();nf(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class CI{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){Z(tf,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){us(n)?Z(tf,"Ignoring IndexedDB error during garbage collection: ",n):await Mo(n)}await this.Vr(3e5)}))}}class PI{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return L.resolve(ko.ce);const r=new RI(n);return this.mr.forEachTarget(e,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(e,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Z("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(ef)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(Z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ef):this.yr(e,n)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,a,l,c,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(Z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,l=Date.now(),this.removeTargets(e,r,n)))).next((p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(h=Date.now(),$r()<=Ie.DEBUG&&Z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(h-c)+`ms
Total Duration: ${h-f}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function VI(t,e){return new PI(t,e)}/**
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
 */class xI{constructor(){this.changes=new Or((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ct.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class DI{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class NI{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&Ks(r.mutation,s,qn.empty(),ot.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,Se()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=Se()){const s=Tr();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let a=Ps();return i.forEach(((l,c)=>{a=a.insert(l,c.overlayedDocument)})),a}))))}getOverlayedDocuments(e,n){const r=Tr();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,Se())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((a,l)=>{n.set(a,l)}))}))}computeViews(e,n,r,s){let i=lr();const a=zs(),l=(function(){return zs()})();return n.forEach(((c,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof qo)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),Ks(f.mutation,h,f.mutation.getFieldMask(),ot.now())):a.set(h.key,qn.empty())})),this.recalculateAndSaveOverlays(e,i).next((c=>(c.forEach(((h,f)=>a.set(h,f))),n.forEach(((h,f)=>l.set(h,new DI(f,a.get(h)??null)))),l)))}recalculateAndSaveOverlays(e,n){const r=zs();let s=new nt(((a,l)=>a-l)),i=Se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((a=>{for(const l of a)l.keys().forEach((c=>{const h=n.get(c);if(h===null)return;let f=r.get(c)||qn.empty();f=l.applyToLocalView(h,f),r.set(c,f);const p=(s.get(l.batchId)||Se()).add(c);s=s.insert(l.batchId,p)}))})).next((()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,f=c.value,p=Kp();f.forEach((g=>{if(!i.has(g)){const _=Yp(n.get(g),r.get(g));_!==null&&p.set(g,_),i=i.add(g)}})),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return L.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return(function(a){return ae.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):LT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):L.resolve(Tr());let l=ii,c=i;return a.next((h=>L.forEach(h,((f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next((g=>{c=c.insert(f,g)}))))).next((()=>this.populateOverlays(e,h,i))).next((()=>this.computeViews(e,c,h,Se()))).next((f=>({batchId:l,changes:$T(f)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ae(n)).next((r=>{let s=Ps();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let a=Ps();return this.indexManager.getCollectionParents(e,i).next((l=>L.forEach(l,(c=>{const h=(function(p,g){return new Uo(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next((f=>{f.forEach(((p,g)=>{a=a.insert(p,g)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((a=>{i.forEach(((c,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,Ct.newInvalidDocument(f)))}));let l=Ps();return a.forEach(((c,h)=>{const f=i.get(c);f!==void 0&&Ks(f.mutation,h,qn.empty(),ot.now()),jo(n,h)&&(l=l.insert(c,h))})),l}))}}/**
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
 */class OI{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return L.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:Xr(s.createTime)}})(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,(function(s){return{name:s.name,query:II(s.bundledQuery),readTime:Xr(s.readTime)}})(n)),L.resolve()}}/**
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
 */class MI{constructor(){this.overlays=new nt(ae.comparator),this.qr=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Tr();return L.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.St(e,n,i)})),L.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const s=Tr(),i=n.length+1,a=new ae(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return L.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new nt(((h,f)=>h-f));const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=Tr(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Tr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((h,f)=>l.set(h,f))),!(l.size()>=s)););return L.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new tI(n,r));let i=this.qr.get(n);i===void 0&&(i=Se(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
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
 */class kI{constructor(){this.sessionToken=It.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
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
 */class gc{constructor(){this.Qr=new gt(vt.$r),this.Ur=new gt(vt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new vt(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Gr(new vt(e,n))}zr(e,n){e.forEach((r=>this.removeReference(r,n)))}jr(e){const n=new ae(new Be([])),r=new vt(n,e),s=new vt(n,e+1),i=[];return this.Ur.forEachInRange([r,s],(a=>{this.Gr(a),i.push(a.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new ae(new Be([])),r=new vt(n,e),s=new vt(n,e+1);let i=Se();return this.Ur.forEachInRange([r,s],(a=>{i=i.add(a.key)})),i}containsKey(e){const n=new vt(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class vt{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return ae.comparator(e.key,n.key)||we(e.Yr,n.Yr)}static Kr(e,n){return we(e.Yr,n.Yr)||ae.comparator(e.key,n.key)}}/**
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
 */class LI{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new gt(vt.$r)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new eI(i,n,r,s);this.mutationQueue.push(a);for(const l of s)this.Zr=this.Zr.add(new vt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(a)}lookupMutationBatch(e,n){return L.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return L.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?gT:this.tr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new vt(n,0),s=new vt(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],(a=>{const l=this.Xr(a.Yr);i.push(l)})),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new gt(we);return n.forEach((s=>{const i=new vt(s,0),a=new vt(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],(l=>{r=r.add(l.Yr)}))})),L.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ae.isDocumentKey(i)||(i=i.child(""));const a=new vt(new ae(i),0);let l=new gt(we);return this.Zr.forEachWhile((c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.Yr)),!0)}),a),L.resolve(this.ti(l))}ti(e){const n=[];return e.forEach((r=>{const s=this.Xr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){ze(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return L.forEach(n.mutations,(s=>{const i=new vt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,n){const r=new vt(n,0),s=this.Zr.firstAfterOrEqual(r);return L.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class FI{constructor(e){this.ri=e,this.docs=(function(){return new nt(ae.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():Ct.newInvalidDocument(n))}getEntries(e,n){let r=lr();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ct.newInvalidDocument(s))})),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=lr();const a=n.path,l=new ae(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||hT(uT(f),r)<=0||(s.has(f.key)||jo(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return L.resolve(i)}getAllFromCollectionGroup(e,n,r,s){pe(9500)}ii(e,n){return L.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new UI(this)}getSize(e){return L.resolve(this.size)}}class UI extends xI{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)})),L.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class BI{constructor(e){this.persistence=e,this.si=new Or((n=>cc(n)),uc),this.lastRemoteSnapshotVersion=de.min(),this.highestTargetId=0,this.oi=0,this._i=new gc,this.targetCount=0,this.ai=os.ur()}forEachTarget(e,n){return this.si.forEach(((r,s)=>n(s))),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),L.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new os(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Pr(n),L.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach(((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)})),L.waitFor(i).next((()=>s))}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((a=>{i.push(s.markPotentiallyOrphaned(e,a))})),L.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this._i.containsKey(n))}}/**
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
 */class lg{constructor(e,n){this.ui={},this.overlays={},this.ci=new ko(0),this.li=!1,this.li=!0,this.hi=new kI,this.referenceDelegate=e(this),this.Pi=new BI(this),this.indexManager=new AI,this.remoteDocumentCache=(function(s){return new FI(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new TI(n),this.Ii=new OI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new MI,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new LI(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const s=new jI(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ai(e,n){return L.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,n))))}}class jI extends dT{constructor(e){super(),this.currentSequenceNumber=e}}class mc{constructor(e){this.persistence=e,this.Ri=new gc,this.Vi=null}static mi(e){return new mc(e)}get fi(){if(this.Vi)return this.Vi;throw pe(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),L.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.fi.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.fi,(r=>{const s=ae.fromPath(r);return this.gi(e,s).next((i=>{i||n.removeEntry(s,de.min())}))})).next((()=>(this.Vi=null,n.apply(e))))}updateLimboDocument(e,n){return this.gi(e,n).next((r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(e){return 0}gi(e,n){return L.or([()=>L.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class po{constructor(e,n){this.persistence=e,this.pi=new Or((r=>mT(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=VI(this,n)}static mi(e,n){return new po(e,n)}Ei(){}di(e){return L.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}wr(e){let n=0;return this.pr(e,(r=>{n++})).next((()=>n))}pr(e,n){return L.forEach(this.pi,((r,s)=>this.br(e,r,s).next((i=>i?L.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,(a=>this.br(e,a,n).next((l=>{l||(r++,i.removeEntry(a,de.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),L.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),L.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Hi(e.data.value)),n}br(e,n,r){return L.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return L.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class _c{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=Se(),s=Se();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new _c(e,n.fromCache,r,s)}}/**
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
 */class $I{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class qI{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return DE()?8:pT(PE())>0?6:4})()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ws(e,n,s,r).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new $I;return this.Ss(e,n,a).next((l=>{if(i.result=l,this.Vs)return this.bs(e,n,a,l.size)}))})).next((()=>i.result))}bs(e,n,r,s){return r.documentReadCount<this.fs?($r()<=Ie.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",qr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),L.resolve()):($r()<=Ie.DEBUG&&Z("QueryEngine","Query:",qr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?($r()<=Ie.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",qr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,un(n))):L.resolve())}ys(e,n){if(Hh(n))return L.resolve(null);let r=un(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=ml(n,null,"F"),r=un(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const a=Se(...i);return this.ps.getDocuments(e,a).next((l=>this.indexManager.getMinOffset(e,r).next((c=>{const h=this.Ds(n,l);return this.Cs(n,h,a,c.readTime)?this.ys(e,ml(n,null,"F")):this.vs(e,h,n,c)}))))})))))}ws(e,n,r,s){return Hh(n)||s.isEqual(de.min())?L.resolve(null):this.ps.getDocuments(e,r).next((i=>{const a=this.Ds(n,i);return this.Cs(n,a,r,s)?L.resolve(null):($r()<=Ie.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),qr(n)),this.vs(e,a,n,cT(s,ii)).next((l=>l)))}))}Ds(e,n){let r=new gt(Hp(e));return n.forEach(((s,i)=>{jo(e,i)&&(r=r.add(i))})),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return $r()<=Ie.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",qr(n)),this.ps.getDocumentsMatchingQuery(e,n,sr.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
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
 */const yc="LocalStore",HI=3e8;class zI{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new nt(we),this.xs=new Or((i=>cc(i)),uc),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new NI(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Ms)))}}function KI(t,e,n,r){return new zI(t,e,n,r)}async function cg(t,e){const n=Ae(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const a=[],l=[];let c=Se();for(const h of s){a.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next((h=>({Ls:h,removedBatchIds:a,addedBatchIds:l})))}))}))}function ug(t){const e=Ae(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Pi.getLastRemoteSnapshotVersion(n)))}function GI(t,e){const n=Ae(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const l=[];e.targetChanges.forEach(((f,p)=>{const g=s.get(p);if(!g)return;l.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,p).next((()=>n.Pi.addMatchingKeys(i,f.addedDocuments,p))));let _=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(It.EMPTY_BYTE_STRING,de.min()).withLastLimboFreeSnapshotVersion(de.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,r)),s=s.insert(p,_),(function(V,M,$){return V.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=HI?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0})(g,_,f)&&l.push(n.Pi.updateTargetData(i,_))}));let c=lr(),h=Se();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))})),l.push(WI(i,a,e.documentUpdates).next((f=>{c=f.ks,h=f.qs}))),!r.isEqual(de.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next((p=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r)));l.push(f)}return L.waitFor(l).next((()=>a.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,c,h))).next((()=>c))})).then((i=>(n.Ms=s,i)))}function WI(t,e,n){let r=Se(),s=Se();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let a=lr();return n.forEach(((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(de.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):Z(yc,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)})),{ks:a,qs:s}}))}function QI(t,e){const n=Ae(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.Pi.getTargetData(r,e).next((i=>i?(s=i,L.resolve(s)):n.Pi.allocateTargetId(r).next((a=>(s=new Hn(e,a,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r}))}async function wl(t,e,n){const r=Ae(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!us(a))throw a;Z(yc,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function rf(t,e,n){const r=Ae(t);let s=de.min(),i=Se();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(c,h,f){const p=Ae(c),g=p.xs.get(f);return g!==void 0?L.resolve(p.Ms.get(g)):p.Pi.getTargetData(h,f)})(r,a,un(e)).next((l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,l.targetId).next((c=>{i=c}))})).next((()=>r.Fs.getDocumentsMatchingQuery(a,e,n?s:de.min(),n?i:Se()))).next((l=>(YI(r,UT(e),l),{documents:l,Qs:i})))))}function YI(t,e,n){let r=t.Os.get(e)||de.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.Os.set(e,r)}class sf{constructor(){this.activeTargetIds=zT()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class XI{constructor(){this.Mo=new sf,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new sf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class JI{Oo(e){}shutdown(){}}/**
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
 */const of="ConnectivityMonitor";class af{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){Z(of,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){Z(of,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Mi=null;function Tl(){return Mi===null?Mi=(function(){return 268435456+Math.round(2147483648*Math.random())})():Mi++,"0x"+Mi.toString(16)}/**
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
 */const Oa="RestConnection",ZI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class eA{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===lo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const a=Tl(),l=this.zo(e,n.toUriEncodedString());Z(Oa,`Sending RPC '${e}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(c,s,i);const{host:h}=new URL(l),f=nc(h);return this.Jo(e,l,c,r,f).then((p=>(Z(Oa,`Received RPC '${e}' ${a}: `,p),p)),(p=>{throw ns(Oa,`RPC '${e}' ${a} failed with error: `,p,"url: ",l,"request:",r),p}))}Ho(e,n,r,s,i,a){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+cs})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}zo(e,n){const r=ZI[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class tA{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const At="WebChannelConnection";class nA extends eA{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const a=Tl();return new Promise(((l,c)=>{const h=new Ip;h.setWithCredentials(!0),h.listenOnce(Ap.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case qi.NO_ERROR:const p=h.getResponseJson();Z(At,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),l(p);break;case qi.TIMEOUT:Z(At,`RPC '${e}' ${a} timed out`),c(new ne(H.DEADLINE_EXCEEDED,"Request time out"));break;case qi.HTTP_ERROR:const g=h.getStatus();if(Z(At,`RPC '${e}' ${a} failed with status:`,g,"response text:",h.getResponseText()),g>0){let _=h.getResponseJson();Array.isArray(_)&&(_=_[0]);const R=_?.error;if(R&&R.status&&R.message){const V=(function($){const j=$.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(j)>=0?j:H.UNKNOWN})(R.status);c(new ne(V,R.message))}else c(new ne(H.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new ne(H.UNAVAILABLE,"Connection failed."));break;default:pe(9055,{l_:e,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{Z(At,`RPC '${e}' ${a} completed.`)}}));const f=JSON.stringify(s);Z(At,`RPC '${e}' ${a} sending request:`,s),h.send(n,"POST",f,r,15)}))}T_(e,n,r){const s=Tl(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Rp(),l=Sp(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.jo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");Z(At,`Creating RPC '${e}' stream ${s}: ${f}`,c);const p=a.createWebChannel(f,c);this.I_(p);let g=!1,_=!1;const R=new tA({Yo:M=>{_?Z(At,`Not sending because RPC '${e}' stream ${s} is closed:`,M):(g||(Z(At,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),Z(At,`RPC '${e}' stream ${s} sending:`,M),p.send(M))},Zo:()=>p.close()}),V=(M,$,j)=>{M.listen($,(q=>{try{j(q)}catch(G){setTimeout((()=>{throw G}),0)}}))};return V(p,Cs.EventType.OPEN,(()=>{_||(Z(At,`RPC '${e}' stream ${s} transport opened.`),R.o_())})),V(p,Cs.EventType.CLOSE,(()=>{_||(_=!0,Z(At,`RPC '${e}' stream ${s} transport closed`),R.a_(),this.E_(p))})),V(p,Cs.EventType.ERROR,(M=>{_||(_=!0,ns(At,`RPC '${e}' stream ${s} transport errored. Name:`,M.name,"Message:",M.message),R.a_(new ne(H.UNAVAILABLE,"The operation could not be completed")))})),V(p,Cs.EventType.MESSAGE,(M=>{if(!_){const $=M.data[0];ze(!!$,16349);const j=$,q=j?.error||j[0]?.error;if(q){Z(At,`RPC '${e}' stream ${s} received error:`,q);const G=q.status;let re=(function(y){const v=it[y];if(v!==void 0)return Jp(v)})(G),ge=q.message;re===void 0&&(re=H.INTERNAL,ge="Unknown error status: "+G+" with message "+q.message),_=!0,R.a_(new ne(re,ge)),p.close()}else Z(At,`RPC '${e}' stream ${s} received:`,$),R.u_($)}})),V(l,bp.STAT_EVENT,(M=>{M.stat===ll.PROXY?Z(At,`RPC '${e}' stream ${s} detected buffering proxy`):M.stat===ll.NOPROXY&&Z(At,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{R.__()}),0),R}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((n=>n===e))}}function Ma(){return typeof document<"u"?document:null}/**
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
 */function hg(t){return new cI(t,!0)}/**
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
 */class fg{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&Z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const lf="PersistentStream";class rA{constructor(e,n,r,s,i,a,l,c){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new fg(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===H.RESOURCE_EXHAUSTED?(Cn(n.toString()),Cn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===n&&this.G_(r,s)}),(r=>{e((()=>{const s=new ne(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return Z(lf,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget((()=>this.D_===e?n():(Z(lf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class sA extends rA{constructor(e,n,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=pI(this.serializer,e),r=(function(i){if(!("targetChange"in i))return de.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?de.min():a.readTime?Xr(a.readTime):de.min()})(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Zh(this.serializer),n.addTarget=(function(i,a){let l;const c=a.target;if(l=gl(c)?{documents:gI(i,c)}:{query:mI(i,c).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=hI(i,a.resumeToken);const h=vl(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(de.min())>0){l.readTime=uI(i,a.snapshotVersion.toTimestamp());const h=vl(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l})(this.serializer,e);const r=yI(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Zh(this.serializer),n.removeTarget=e,this.q_(n)}}/**
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
 */class iA{}class oA extends iA{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new ne(H.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Go(e,El(n,r),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ne(H.UNKNOWN,i.toString())}))}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,l])=>this.connection.Ho(e,El(n,r),s,a,l,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new ne(H.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class aA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Cn(n),this.aa=!1):Z("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const as="RemoteStore";class lA{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((a=>{r.enqueueAndForget((async()=>{_i(this)&&(Z(as,"Restarting streams for network reachability change."),await(async function(c){const h=Ae(c);h.Ea.add(4),await mi(h),h.Ra.set("Unknown"),h.Ea.delete(4),await zo(h)})(this))}))})),this.Ra=new aA(r,s)}}async function zo(t){if(_i(t))for(const e of t.da)await e(!0)}async function mi(t){for(const e of t.da)await e(!1)}function dg(t,e){const n=Ae(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Tc(n)?wc(n):hs(n).O_()&&Ec(n,e))}function vc(t,e){const n=Ae(t),r=hs(n);n.Ia.delete(e),r.O_()&&pg(n,e),n.Ia.size===0&&(r.O_()?r.L_():_i(n)&&n.Ra.set("Unknown"))}function Ec(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(de.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}hs(t).Y_(e)}function pg(t,e){t.Va.Ue(e),hs(t).Z_(e)}function wc(t){t.Va=new iI({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),hs(t).start(),t.Ra.ua()}function Tc(t){return _i(t)&&!hs(t).x_()&&t.Ia.size>0}function _i(t){return Ae(t).Ea.size===0}function gg(t){t.Va=void 0}async function cA(t){t.Ra.set("Online")}async function uA(t){t.Ia.forEach(((e,n)=>{Ec(t,e)}))}async function hA(t,e){gg(t),Tc(t)?(t.Ra.ha(e),wc(t)):t.Ra.set("Unknown")}async function fA(t,e,n){if(t.Ra.set("Online"),e instanceof eg&&e.state===2&&e.cause)try{await(async function(s,i){const a=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ia.delete(l),s.Va.removeTarget(l))})(t,e)}catch(r){Z(as,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await cf(t,r)}else if(e instanceof Ki?t.Va.Ze(e):e instanceof Zp?t.Va.st(e):t.Va.tt(e),!n.isEqual(de.min()))try{const r=await ug(t.localStore);n.compareTo(r)>=0&&await(function(i,a){const l=i.Va.Tt(a);return l.targetChanges.forEach(((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.Ia.get(h);f&&i.Ia.set(h,f.withResumeToken(c.resumeToken,a))}})),l.targetMismatches.forEach(((c,h)=>{const f=i.Ia.get(c);if(!f)return;i.Ia.set(c,f.withResumeToken(It.EMPTY_BYTE_STRING,f.snapshotVersion)),pg(i,c);const p=new Hn(f.target,c,h,f.sequenceNumber);Ec(i,p)})),i.remoteSyncer.applyRemoteEvent(l)})(t,n)}catch(r){Z(as,"Failed to raise snapshot:",r),await cf(t,r)}}async function cf(t,e,n){if(!us(e))throw e;t.Ea.add(1),await mi(t),t.Ra.set("Offline"),n||(n=()=>ug(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Z(as,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await zo(t)}))}async function uf(t,e){const n=Ae(t);n.asyncQueue.verifyOperationInProgress(),Z(as,"RemoteStore received new credentials");const r=_i(n);n.Ea.add(3),await mi(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await zo(n)}async function dA(t,e){const n=Ae(t);e?(n.Ea.delete(2),await zo(n)):e||(n.Ea.add(2),await mi(n),n.Ra.set("Unknown"))}function hs(t){return t.ma||(t.ma=(function(n,r,s){const i=Ae(n);return i.sa(),new sA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:cA.bind(null,t),t_:uA.bind(null,t),r_:hA.bind(null,t),H_:fA.bind(null,t)}),t.da.push((async e=>{e?(t.ma.B_(),Tc(t)?wc(t):t.Ra.set("Unknown")):(await t.ma.stop(),gg(t))}))),t.ma}/**
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
 */class Ic{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Yn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const a=Date.now()+r,l=new Ic(e,n,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function mg(t,e){if(Cn("AsyncQueue",`${e}: ${t}`),us(t))return new ne(H.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Jr{static emptySet(e){return new Jr(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ae.comparator(n.key,r.key):(n,r)=>ae.comparator(n.key,r.key),this.keyedMap=Ps(),this.sortedSet=new nt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Jr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Jr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class hf{constructor(){this.ga=new nt(ae.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):pe(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,r)=>{e.push(r)})),e}}class ls{constructor(e,n,r,s,i,a,l,c,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const a=[];return n.forEach((l=>{a.push({type:0,doc:l})})),new ls(e,n,Jr.emptySet(n),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Bo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class pA{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class gA{constructor(){this.queries=ff(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=Ae(n),i=s.queries;s.queries=ff(),i.forEach(((a,l)=>{for(const c of l.Sa)c.onError(r)}))})(this,new ne(H.ABORTED,"Firestore shutting down"))}}function ff(){return new Or((t=>qp(t)),Bo)}async function _g(t,e){const n=Ae(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new pA,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const l=mg(a,`Initialization of query '${qr(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&Ac(n)}async function yg(t,e){const n=Ae(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const a=i.Sa.indexOf(e);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function mA(t,e){const n=Ae(t);let r=!1;for(const s of e){const i=s.query,a=n.queries.get(i);if(a){for(const l of a.Sa)l.Fa(s)&&(r=!0);a.wa=s}}r&&Ac(n)}function _A(t,e,n){const r=Ae(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function Ac(t){t.Ca.forEach((e=>{e.next()}))}var Il,df;(df=Il||(Il={})).Ma="default",df.Cache="cache";class vg{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ls(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=ls.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Il.Cache}}/**
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
 */class Eg{constructor(e){this.key=e}}class wg{constructor(e){this.key=e}}class yA{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Se(),this.mutatedKeys=Se(),this.eu=Hp(e),this.tu=new Jr(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new hf,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,a=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,p)=>{const g=s.get(f),_=jo(this.query,p)?p:null,R=!!g&&this.mutatedKeys.has(g.key),V=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let M=!1;g&&_?g.data.isEqual(_.data)?R!==V&&(r.track({type:3,doc:_}),M=!0):this.su(g,_)||(r.track({type:2,doc:_}),M=!0,(c&&this.eu(_,c)>0||h&&this.eu(_,h)<0)&&(l=!0)):!g&&_?(r.track({type:0,doc:_}),M=!0):g&&!_&&(r.track({type:1,doc:g}),M=!0,(c||h)&&(l=!0)),M&&(_?(a=a.add(_),i=V?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:a,iu:r,Cs:l,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort(((f,p)=>(function(_,R){const V=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return pe(20277,{Rt:M})}};return V(_)-V(R)})(f.type,p.type)||this.eu(f.doc,p.doc))),this.ou(r),s=s??!1;const l=n&&!s?this._u():[],c=this.Xa.size===0&&this.current&&!s?1:0,h=c!==this.Za;return this.Za=c,a.length!==0||h?{snapshot:new ls(this.query,e.tu,i,a,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new hf,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Se(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const n=[];return e.forEach((r=>{this.Xa.has(r)||n.push(new wg(r))})),this.Xa.forEach((r=>{e.has(r)||n.push(new Eg(r))})),n}cu(e){this.Ya=e.Qs,this.Xa=Se();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return ls.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const bc="SyncEngine";class vA{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class EA{constructor(e){this.key=e,this.hu=!1}}class wA{constructor(e,n,r,s,i,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Or((l=>qp(l)),Bo),this.Iu=new Map,this.Eu=new Set,this.du=new nt(ae.comparator),this.Au=new Map,this.Ru=new gc,this.Vu={},this.mu=new Map,this.fu=os.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function TA(t,e,n=!0){const r=Sg(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Tg(r,e,n,!0),s}async function IA(t,e){const n=Sg(t);await Tg(n,e,!0,!1)}async function Tg(t,e,n,r){const s=await QI(t.localStore,un(e)),i=s.targetId,a=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await AA(t,e,i,a==="current",s.resumeToken)),t.isPrimaryClient&&n&&dg(t.remoteStore,s),l}async function AA(t,e,n,r,s){t.pu=(p,g,_)=>(async function(V,M,$,j){let q=M.view.ru($);q.Cs&&(q=await rf(V.localStore,M.query,!1).then((({documents:A})=>M.view.ru(A,q))));const G=j&&j.targetChanges.get(M.targetId),re=j&&j.targetMismatches.get(M.targetId)!=null,ge=M.view.applyChanges(q,V.isPrimaryClient,G,re);return gf(V,M.targetId,ge.au),ge.snapshot})(t,p,g,_);const i=await rf(t.localStore,e,!0),a=new yA(e,i.Qs),l=a.ru(i.documents),c=gi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=a.applyChanges(l,t.isPrimaryClient,c);gf(t,n,h.au);const f=new vA(e,n,a);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),h.snapshot}async function bA(t,e,n){const r=Ae(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((a=>!Bo(a,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await wl(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&vc(r.remoteStore,s.targetId),Al(r,s.targetId)})).catch(Mo)):(Al(r,s.targetId),await wl(r.localStore,s.targetId,!0))}async function SA(t,e){const n=Ae(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),vc(n.remoteStore,r.targetId))}async function Ig(t,e){const n=Ae(t);try{const r=await GI(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const a=n.Au.get(i);a&&(ze(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?ze(a.hu,14607):s.removedDocuments.size>0&&(ze(a.hu,42227),a.hu=!1))})),await bg(n,r,e)}catch(r){await Mo(r)}}function pf(t,e,n){const r=Ae(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach(((i,a)=>{const l=a.view.va(e);l.snapshot&&s.push(l.snapshot)})),(function(a,l){const c=Ae(a);c.onlineState=l;let h=!1;c.queries.forEach(((f,p)=>{for(const g of p.Sa)g.va(l)&&(h=!0)})),h&&Ac(c)})(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function RA(t,e,n){const r=Ae(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let a=new nt(ae.comparator);a=a.insert(i,Ct.newNoDocument(i,de.min()));const l=Se().add(i),c=new Ho(de.min(),new Map,new nt(we),a,l);await Ig(r,c),r.du=r.du.remove(i),r.Au.delete(e),Sc(r)}else await wl(r.localStore,e,!1).then((()=>Al(r,e,n))).catch(Mo)}function Al(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach((r=>{t.Ru.containsKey(r)||Ag(t,r)}))}function Ag(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(vc(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Sc(t))}function gf(t,e,n){for(const r of n)r instanceof Eg?(t.Ru.addReference(r.key,e),CA(t,r)):r instanceof wg?(Z(bc,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||Ag(t,r.key)):pe(19791,{wu:r})}function CA(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(Z(bc,"New document in limbo: "+n),t.Eu.add(r),Sc(t))}function Sc(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new ae(Be.fromString(e)),r=t.fu.next();t.Au.set(r,new EA(n)),t.du=t.du.insert(n,r),dg(t.remoteStore,new Hn(un(hc(n.path)),r,"TargetPurposeLimboResolution",ko.ce))}}async function bg(t,e,n){const r=Ae(t),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach(((l,c)=>{a.push(r.pu(c,e,n).then((h=>{if((h||n)&&r.isPrimaryClient){const f=h?!h.fromCache:n?.targetChanges.get(c.targetId)?.current;r.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(h){s.push(h);const f=_c.As(c.targetId,h);i.push(f)}})))})),await Promise.all(a),r.Pu.H_(s),await(async function(c,h){const f=Ae(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>L.forEach(h,(g=>L.forEach(g.Es,(_=>f.persistence.referenceDelegate.addReference(p,g.targetId,_))).next((()=>L.forEach(g.ds,(_=>f.persistence.referenceDelegate.removeReference(p,g.targetId,_)))))))))}catch(p){if(!us(p))throw p;Z(yc,"Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const _=f.Ms.get(g),R=_.snapshotVersion,V=_.withLastLimboFreeSnapshotVersion(R);f.Ms=f.Ms.insert(g,V)}}})(r.localStore,i))}async function PA(t,e){const n=Ae(t);if(!n.currentUser.isEqual(e)){Z(bc,"User change. New user:",e.toKey());const r=await cg(n.localStore,e);n.currentUser=e,(function(i,a){i.mu.forEach((l=>{l.forEach((c=>{c.reject(new ne(H.CANCELLED,a))}))})),i.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await bg(n,r.Ls)}}function VA(t,e){const n=Ae(t),r=n.Au.get(e);if(r&&r.hu)return Se().add(r.key);{let s=Se();const i=n.Iu.get(e);if(!i)return s;for(const a of i){const l=n.Tu.get(a);s=s.unionWith(l.view.nu)}return s}}function Sg(t){const e=Ae(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ig.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=VA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=RA.bind(null,e),e.Pu.H_=mA.bind(null,e.eventManager),e.Pu.yu=_A.bind(null,e.eventManager),e}class go{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=hg(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return KI(this.persistence,new qI,e.initialUser,this.serializer)}Cu(e){return new lg(mc.mi,this.serializer)}Du(e){return new XI}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}go.provider={build:()=>new go};class xA extends go{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){ze(this.persistence.referenceDelegate instanceof po,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new CI(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Bt.withCacheSize(this.cacheSizeBytes):Bt.DEFAULT;return new lg((r=>po.mi(r,n)),this.serializer)}}class bl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>pf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=PA.bind(null,this.syncEngine),await dA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new gA})()}createDatastore(e){const n=hg(e.databaseInfo.databaseId),r=(function(i){return new nA(i)})(e.databaseInfo);return(function(i,a,l,c){return new oA(i,a,l,c)})(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,a,l){return new lA(r,s,i,a,l)})(this.localStore,this.datastore,e.asyncQueue,(n=>pf(this.syncEngine,n,0)),(function(){return af.v()?new af:new JI})())}createSyncEngine(e,n){return(function(s,i,a,l,c,h,f){const p=new wA(s,i,a,l,c,h);return f&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const r=Ae(n);Z(as,"RemoteStore shutting down."),r.Ea.add(5),await mi(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}bl.provider={build:()=>new bl};/**
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
 */class Rg{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Cn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
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
 */const cr="FirestoreClient";class DA{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=St.UNAUTHENTICATED,this.clientId=oc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async a=>{Z(cr,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(Z(cr,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Yn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=mg(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function ka(t,e){t.asyncQueue.verifyOperationInProgress(),Z(cr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await cg(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function mf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await NA(t);Z(cr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>uf(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>uf(e.remoteStore,s))),t._onlineComponents=e}async function NA(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z(cr,"Using user provided OfflineComponentProvider");try{await ka(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===H.FAILED_PRECONDITION||s.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;ns("Error using user provided cache. Falling back to memory cache: "+n),await ka(t,new go)}}else Z(cr,"Using default OfflineComponentProvider"),await ka(t,new xA(void 0));return t._offlineComponents}async function OA(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z(cr,"Using user provided OnlineComponentProvider"),await mf(t,t._uninitializedComponentsProvider._online)):(Z(cr,"Using default OnlineComponentProvider"),await mf(t,new bl))),t._onlineComponents}async function Cg(t){const e=await OA(t),n=e.eventManager;return n.onListen=TA.bind(null,e.syncEngine),n.onUnlisten=bA.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=IA.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=SA.bind(null,e.syncEngine),n}function MA(t,e,n={}){const r=new Yn;return t.asyncQueue.enqueueAndForget((async()=>(function(i,a,l,c,h){const f=new Rg({next:g=>{f.Nu(),a.enqueueAndForget((()=>yg(i,p)));const _=g.docs.has(l);!_&&g.fromCache?h.reject(new ne(H.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&g.fromCache&&c&&c.source==="server"?h.reject(new ne(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new vg(hc(l.path),f,{includeMetadataChanges:!0,qa:!0});return _g(i,p)})(await Cg(t),t.asyncQueue,e,n,r))),r.promise}function kA(t,e,n={}){const r=new Yn;return t.asyncQueue.enqueueAndForget((async()=>(function(i,a,l,c,h){const f=new Rg({next:g=>{f.Nu(),a.enqueueAndForget((()=>yg(i,p))),g.fromCache&&c.source==="server"?h.reject(new ne(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new vg(l,f,{includeMetadataChanges:!0,qa:!0});return _g(i,p)})(await Cg(t),t.asyncQueue,e,n,r))),r.promise}/**
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
 */function Pg(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const _f=new Map;/**
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
 */const Vg="firestore.googleapis.com",yf=!0;class vf{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ne(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Vg,this.ssl=yf}else this.host=e.host,this.ssl=e.ssl??yf;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=ag;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<SI)throw new ne(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}oT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Pg(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new ne(H.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new ne(H.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new ne(H.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ko{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ne(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ne(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vf(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Yw;switch(r.type){case"firstParty":return new eT(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ne(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=_f.get(n);r&&(Z("ComponentProvider","Removing Datastore"),_f.delete(n),r.terminate())})(this),Promise.resolve()}}function LA(t,e,n,r={}){t=si(t,Ko);const s=nc(e),i=t._getSettings(),a={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&(AE(`https://${l}`),CE("Firestore",!0)),i.host!==Vg&&i.host!==l&&ns("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:l,ssl:s,emulatorOptions:r};if(!ni(c,a)&&(t._setSettings(c),r.mockUserToken)){let h,f;if(typeof r.mockUserToken=="string")h=r.mockUserToken,f=St.MOCK_USER;else{h=bE(r.mockUserToken,t._app?.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new ne(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new St(p)}t._authCredentials=new Xw(new Pp(h,f))}}/**
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
 */class Go{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Go(this.firestore,e,this._query)}}class Pt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Pt(this.firestore,e,this._key)}toJSON(){return{type:Pt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(di(n,Pt._jsonSchema))return new Pt(e,r||null,new ae(Be.fromString(n.referencePath)))}}Pt._jsonSchemaVersion="firestore/documentReference/1.0",Pt._jsonSchema={type:at("string",Pt._jsonSchemaVersion),referencePath:at("string")};class Xn extends Go{constructor(e,n,r){super(e,n,hc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Pt(this.firestore,null,new ae(e))}withConverter(e){return new Xn(this.firestore,e,this._path)}}function FA(t,e,...n){if(t=Oo(t),Vp("collection","path",e),t instanceof Ko){const r=Be.fromString(e,...n);return xh(r),new Xn(t,null,r)}{if(!(t instanceof Pt||t instanceof Xn))throw new ne(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Be.fromString(e,...n));return xh(r),new Xn(t.firestore,null,r)}}function UA(t,e,...n){if(t=Oo(t),arguments.length===1&&(e=oc.newId()),Vp("doc","path",e),t instanceof Ko){const r=Be.fromString(e,...n);return Vh(r),new Pt(t,null,new ae(r))}{if(!(t instanceof Pt||t instanceof Xn))throw new ne(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Be.fromString(e,...n));return Vh(r),new Pt(t.firestore,t instanceof Xn?t.converter:null,new ae(r))}}/**
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
 */const Ef="AsyncQueue";class wf{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new fg(this,"async_queue_retry"),this._c=()=>{const r=Ma();r&&Z(Ef,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Ma();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Ma();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new Yn;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!us(e))throw e;Z(Ef,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,Cn("INTERNAL UNHANDLED ERROR: ",Tf(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Ic.createAndSchedule(this,e,n,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&pe(47125,{Pc:Tf(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Tf(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Rc extends Ko{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new wf,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new wf(e),this._firestoreClient=void 0,await e}}}function BA(t,e){const n=typeof t=="object"?t:vp(),r=typeof t=="string"?t:lo,s=fi(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=TE("firestore");i&&LA(s,...i)}return s}function xg(t){if(t._terminated)throw new ne(H.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||jA(t),t._firestoreClient}function jA(t){const e=t._freezeSettings(),n=(function(s,i,a,l){return new ET(s,i,a,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Pg(l.experimentalLongPollingOptions),l.useFetchStreams,l.isUsingEmulator)})(t._databaseId,t._app?.options.appId||"",t._persistenceKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new DA(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&(function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}})(t._componentsProvider))}/**
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
 */class an{constructor(e){this._byteString=e}static fromBase64String(e){try{return new an(It.fromBase64String(e))}catch(n){throw new ne(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new an(It.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:an._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(di(e,an._jsonSchema))return an.fromBase64String(e.bytes)}}an._jsonSchemaVersion="firestore/bytes/1.0",an._jsonSchema={type:at("string",an._jsonSchemaVersion),bytes:at("string")};/**
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
 */class Dg{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ne(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Jn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ne(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ne(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return we(this._lat,e._lat)||we(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Jn._jsonSchemaVersion}}static fromJSON(e){if(di(e,Jn._jsonSchema))return new Jn(e.latitude,e.longitude)}}Jn._jsonSchemaVersion="firestore/geoPoint/1.0",Jn._jsonSchema={type:at("string",Jn._jsonSchemaVersion),latitude:at("number"),longitude:at("number")};/**
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
 */class Zn{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Zn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(di(e,Zn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Zn(e.vectorValues);throw new ne(H.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Zn._jsonSchemaVersion="firestore/vectorValue/1.0",Zn._jsonSchema={type:at("string",Zn._jsonSchemaVersion),vectorValues:at("object")};const $A=new RegExp("[~\\*/\\[\\]]");function qA(t,e,n){if(e.search($A)>=0)throw If(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t);try{return new Dg(...e.split("."))._internalPath}catch{throw If(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t)}}function If(t,e,n,r,s){let i=`Function ${e}() called with invalid data`;i+=". ";let a="";return new ne(H.INVALID_ARGUMENT,i+t+a)}/**
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
 */class Ng{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new HA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Og("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class HA extends Ng{data(){return super.data()}}function Og(t,e){return typeof e=="string"?qA(t,e):e instanceof Dg?e._internalPath:e._delegate._internalPath}/**
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
 */function zA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ne(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class KA{convertValue(e,n="none"){switch(ar(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(or(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw pe(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return pi(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){const n=e.fields?.[hl].arrayValue?.values?.map((r=>Ze(r.doubleValue)));return new Zn(n)}convertGeoPoint(e){return new Jn(Ze(e.latitude),Ze(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Fo(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(oi(e));default:return null}}convertTimestamp(e){const n=ir(e);return new ot(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Be.fromString(e);ze(og(r),9688,{name:e});const s=new ai(r.get(1),r.get(3)),i=new ae(r.popFirst(5));return s.isEqual(n)||Cn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}class xs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Rr extends Ng{constructor(e,n,r,s,i,a){super(e,n,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Gi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Og("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ne(H.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Rr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Rr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Rr._jsonSchema={type:at("string",Rr._jsonSchemaVersion),bundleSource:at("string","DocumentSnapshot"),bundleName:at("string"),bundle:at("string")};class Gi extends Rr{data(e={}){return super.data(e)}}class Zr{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new xs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new Gi(this._firestore,this._userDataWriter,r.key,r,new xs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ne(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((l=>{const c=new Gi(s._firestore,s._userDataWriter,l.doc.key,l.doc,new xs(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const c=new Gi(s._firestore,s._userDataWriter,l.doc.key,l.doc,new xs(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:GA(l.type),doc:c,oldIndex:h,newIndex:f}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ne(H.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Zr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=oc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function GA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return pe(61501,{type:t})}}/**
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
 */function WA(t){t=si(t,Pt);const e=si(t.firestore,Rc);return MA(xg(e),t._key).then((n=>YA(e,t,n)))}Zr._jsonSchemaVersion="firestore/querySnapshot/1.0",Zr._jsonSchema={type:at("string",Zr._jsonSchemaVersion),bundleSource:at("string","QuerySnapshot"),bundleName:at("string"),bundle:at("string")};class Mg extends KA{constructor(e){super(),this.firestore=e}convertBytes(e){return new an(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Pt(this.firestore,null,n)}}function QA(t){t=si(t,Go);const e=si(t.firestore,Rc),n=xg(e),r=new Mg(e);return zA(t._query),kA(n,t._query).then((s=>new Zr(e,r,t,s)))}function YA(t,e,n){const r=n.docs.get(e._key),s=new Mg(t);return new Rr(t,s,e._key,r,new xs(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){cs=s})(Uw),rr(new Sn("firestore",((r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new Rc(new Jw(r.getProvider("auth-internal")),new tT(a,r.getProvider("app-check-internal")),(function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new ne(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ai(h.options.projectId,f)})(a,s),a);return i={useFetchStreams:n,...i},l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),cn(Sh,Rh,e),cn(Sh,Rh,"esm2020")})();var XA="firebase",JA="12.3.0";/**
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
 */cn(XA,JA,"app");const kg="@firebase/installations",Cc="0.6.19";/**
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
 */const Lg=1e4,Fg=`w:${Cc}`,Ug="FIS_v2",ZA="https://firebaseinstallations.googleapis.com/v1",e0=3600*1e3,t0="installations",n0="Installations";/**
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
 */const r0={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Vr=new No(t0,n0,r0);function Bg(t){return t instanceof fr&&t.code.includes("request-failed")}/**
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
 */function jg({projectId:t}){return`${ZA}/projects/${t}/installations`}function $g(t){return{token:t.token,requestStatus:2,expiresIn:i0(t.expiresIn),creationTime:Date.now()}}async function qg(t,e){const r=(await e.json()).error;return Vr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Hg({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function s0(t,{refreshToken:e}){const n=Hg(t);return n.append("Authorization",o0(e)),n}async function zg(t){const e=await t();return e.status>=500&&e.status<600?t():e}function i0(t){return Number(t.replace("s","000"))}function o0(t){return`${Ug} ${t}`}/**
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
 */async function a0({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=jg(t),s=Hg(t),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={fid:n,authVersion:Ug,appId:t.appId,sdkVersion:Fg},l={method:"POST",headers:s,body:JSON.stringify(a)},c=await zg(()=>fetch(r,l));if(c.ok){const h=await c.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:$g(h.authToken)}}else throw await qg("Create Installation",c)}/**
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
 */function Kg(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function l0(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const c0=/^[cdef][\w-]{21}$/,Sl="";function u0(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=h0(t);return c0.test(n)?n:Sl}catch{return Sl}}function h0(t){return l0(t).substr(0,22)}/**
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
 */function Wo(t){return`${t.appName}!${t.appId}`}/**
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
 */const Gg=new Map;function Wg(t,e){const n=Wo(t);Qg(n,e),f0(n,e)}function Qg(t,e){const n=Gg.get(t);if(n)for(const r of n)r(e)}function f0(t,e){const n=d0();n&&n.postMessage({key:t,fid:e}),p0()}let Ir=null;function d0(){return!Ir&&"BroadcastChannel"in self&&(Ir=new BroadcastChannel("[Firebase] FID Change"),Ir.onmessage=t=>{Qg(t.data.key,t.data.fid)}),Ir}function p0(){Gg.size===0&&Ir&&(Ir.close(),Ir=null)}/**
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
 */const g0="firebase-installations-database",m0=1,xr="firebase-installations-store";let La=null;function Pc(){return La||(La=_p(g0,m0,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(xr)}}})),La}async function mo(t,e){const n=Wo(t),s=(await Pc()).transaction(xr,"readwrite"),i=s.objectStore(xr),a=await i.get(n);return await i.put(e,n),await s.done,(!a||a.fid!==e.fid)&&Wg(t,e.fid),e}async function Yg(t){const e=Wo(t),r=(await Pc()).transaction(xr,"readwrite");await r.objectStore(xr).delete(e),await r.done}async function Qo(t,e){const n=Wo(t),s=(await Pc()).transaction(xr,"readwrite"),i=s.objectStore(xr),a=await i.get(n),l=e(a);return l===void 0?await i.delete(n):await i.put(l,n),await s.done,l&&(!a||a.fid!==l.fid)&&Wg(t,l.fid),l}/**
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
 */async function Vc(t){let e;const n=await Qo(t.appConfig,r=>{const s=_0(r),i=y0(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===Sl?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function _0(t){const e=t||{fid:u0(),registrationStatus:0};return Xg(e)}function y0(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Vr.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=v0(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:E0(t)}:{installationEntry:e}}async function v0(t,e){try{const n=await a0(t,e);return mo(t.appConfig,n)}catch(n){throw Bg(n)&&n.customData.serverCode===409?await Yg(t.appConfig):await mo(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function E0(t){let e=await Af(t.appConfig);for(;e.registrationStatus===1;)await Kg(100),e=await Af(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Vc(t);return r||n}return e}function Af(t){return Qo(t,e=>{if(!e)throw Vr.create("installation-not-found");return Xg(e)})}function Xg(t){return w0(t)?{fid:t.fid,registrationStatus:0}:t}function w0(t){return t.registrationStatus===1&&t.registrationTime+Lg<Date.now()}/**
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
 */async function T0({appConfig:t,heartbeatServiceProvider:e},n){const r=I0(t,n),s=s0(t,n),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={installation:{sdkVersion:Fg,appId:t.appId}},l={method:"POST",headers:s,body:JSON.stringify(a)},c=await zg(()=>fetch(r,l));if(c.ok){const h=await c.json();return $g(h)}else throw await qg("Generate Auth Token",c)}function I0(t,{fid:e}){return`${jg(t)}/${e}/authTokens:generate`}/**
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
 */async function xc(t,e=!1){let n;const r=await Qo(t.appConfig,i=>{if(!Jg(i))throw Vr.create("not-registered");const a=i.authToken;if(!e&&S0(a))return i;if(a.requestStatus===1)return n=A0(t,e),i;{if(!navigator.onLine)throw Vr.create("app-offline");const l=C0(i);return n=b0(t,l),l}});return n?await n:r.authToken}async function A0(t,e){let n=await bf(t.appConfig);for(;n.authToken.requestStatus===1;)await Kg(100),n=await bf(t.appConfig);const r=n.authToken;return r.requestStatus===0?xc(t,e):r}function bf(t){return Qo(t,e=>{if(!Jg(e))throw Vr.create("not-registered");const n=e.authToken;return P0(n)?{...e,authToken:{requestStatus:0}}:e})}async function b0(t,e){try{const n=await T0(t,e),r={...e,authToken:n};return await mo(t.appConfig,r),n}catch(n){if(Bg(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Yg(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await mo(t.appConfig,r)}throw n}}function Jg(t){return t!==void 0&&t.registrationStatus===2}function S0(t){return t.requestStatus===2&&!R0(t)}function R0(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+e0}function C0(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function P0(t){return t.requestStatus===1&&t.requestTime+Lg<Date.now()}/**
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
 */async function V0(t){const e=t,{installationEntry:n,registrationPromise:r}=await Vc(e);return r?r.catch(console.error):xc(e).catch(console.error),n.fid}/**
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
 */async function x0(t,e=!1){const n=t;return await D0(n),(await xc(n,e)).token}async function D0(t){const{registrationPromise:e}=await Vc(t);e&&await e}/**
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
 */function N0(t){if(!t||!t.options)throw Fa("App Configuration");if(!t.name)throw Fa("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Fa(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Fa(t){return Vr.create("missing-app-config-values",{valueName:t})}/**
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
 */const Zg="installations",O0="installations-internal",M0=t=>{const e=t.getProvider("app").getImmediate(),n=N0(e),r=fi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},k0=t=>{const e=t.getProvider("app").getImmediate(),n=fi(e,Zg).getImmediate();return{getId:()=>V0(n),getToken:s=>x0(n,s)}};function L0(){rr(new Sn(Zg,M0,"PUBLIC")),rr(new Sn(O0,k0,"PRIVATE"))}L0();cn(kg,Cc);cn(kg,Cc,"esm2020");/**
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
 */const _o="analytics",F0="firebase_id",U0="origin",B0=60*1e3,j0="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Dc="https://www.googletagmanager.com/gtag/js";/**
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
 */const jt=new rc("@firebase/analytics");/**
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
 */const $0={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Gt=new No("analytics","Analytics",$0);/**
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
 */function q0(t){if(!t.startsWith(Dc)){const e=Gt.create("invalid-gtag-resource",{gtagURL:t});return jt.warn(e.message),""}return t}function em(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function H0(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function z0(t,e){const n=H0("firebase-js-sdk-policy",{createScriptURL:q0}),r=document.createElement("script"),s=`${Dc}?l=${t}&id=${e}`;r.src=n?n?.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function K0(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function G0(t,e,n,r,s,i){const a=r[s];try{if(a)await e[a];else{const c=(await em(n)).find(h=>h.measurementId===s);c&&await e[c.appId]}}catch(l){jt.error(l)}t("config",s,i)}async function W0(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const l=await em(n);for(const c of a){const h=l.find(p=>p.measurementId===c),f=h&&e[h.appId];if(f)i.push(f);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){jt.error(i)}}function Q0(t,e,n,r){async function s(i,...a){try{if(i==="event"){const[l,c]=a;await W0(t,e,n,l,c)}else if(i==="config"){const[l,c]=a;await G0(t,e,n,r,l,c)}else if(i==="consent"){const[l,c]=a;t("consent",l,c)}else if(i==="get"){const[l,c,h]=a;t("get",l,c,h)}else if(i==="set"){const[l]=a;t("set",l)}else t(i,...a)}catch(l){jt.error(l)}}return s}function Y0(t,e,n,r,s){let i=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=Q0(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function X0(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Dc)&&n.src.includes(t))return n;return null}/**
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
 */const J0=30,Z0=1e3;class eb{constructor(e={},n=Z0){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const tm=new eb;function tb(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function nb(t){const{appId:e,apiKey:n}=t,r={method:"GET",headers:tb(n)},s=j0.replace("{app-id}",e),i=await fetch(s,r);if(i.status!==200&&i.status!==304){let a="";try{const l=await i.json();l.error?.message&&(a=l.error.message)}catch{}throw Gt.create("config-fetch-failed",{httpStatus:i.status,responseMessage:a})}return i.json()}async function rb(t,e=tm,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Gt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Gt.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new ob;return setTimeout(async()=>{l.abort()},B0),nm({appId:r,apiKey:s,measurementId:i},a,l,e)}async function nm(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=tm){const{appId:i,measurementId:a}=t;try{await sb(r,e)}catch(l){if(a)return jt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:i,measurementId:a};throw l}try{const l=await nb(t);return s.deleteThrottleMetadata(i),l}catch(l){const c=l;if(!ib(c)){if(s.deleteThrottleMetadata(i),a)return jt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c?.message}]`),{appId:i,measurementId:a};throw l}const h=Number(c?.customData?.httpStatus)===503?mh(n,s.intervalMillis,J0):mh(n,s.intervalMillis),f={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return s.setThrottleMetadata(i,f),jt.debug(`Calling attemptFetch again in ${h} millis`),nm(t,f,r,s)}}function sb(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Gt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function ib(t){if(!(t instanceof fr)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class ob{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function ab(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,a={...r,send_to:i};t("event",n,a)}}/**
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
 */async function lb(){if(dp())try{await pp()}catch(t){return jt.warn(Gt.create("indexeddb-unavailable",{errorInfo:t?.toString()}).message),!1}else return jt.warn(Gt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function cb(t,e,n,r,s,i,a){const l=rb(t);l.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&jt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>jt.error(g)),e.push(l);const c=lb().then(g=>{if(g)return r.getId()}),[h,f]=await Promise.all([l,c]);X0(i)||z0(i,h.measurementId),s("js",new Date);const p=a?.config??{};return p[U0]="firebase",p.update=!0,f!=null&&(p[F0]=f),s("config",h.measurementId,p),h.measurementId}/**
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
 */class ub{constructor(e){this.app=e}_delete(){return delete Gs[this.app.options.appId],Promise.resolve()}}let Gs={},Sf=[];const Rf={};let Ua="dataLayer",hb="gtag",Cf,rm,Pf=!1;function fb(){const t=[];if(xE()&&t.push("This is a browser extension environment."),NE()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Gt.create("invalid-analytics-context",{errorInfo:e});jt.warn(n.message)}}function db(t,e,n){fb();const r=t.options.appId;if(!r)throw Gt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)jt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Gt.create("no-api-key");if(Gs[r]!=null)throw Gt.create("already-exists",{id:r});if(!Pf){K0(Ua);const{wrappedGtag:i,gtagCore:a}=Y0(Gs,Sf,Rf,Ua,hb);rm=i,Cf=a,Pf=!0}return Gs[r]=cb(t,Sf,Rf,e,Cf,Ua,n),new ub(t)}function pb(t=vp()){t=Oo(t);const e=fi(t,_o);return e.isInitialized()?e.getImmediate():gb(t)}function gb(t,e={}){const n=fi(t,_o);if(n.isInitialized()){const s=n.getImmediate();if(ni(e,n.getOptions()))return s;throw Gt.create("already-initialized")}return n.initialize({options:e})}function mb(t,e,n,r){t=Oo(t),ab(rm,Gs[t.app.options.appId],e,n,r).catch(s=>jt.error(s))}const Vf="@firebase/analytics",xf="0.10.18";function _b(){rr(new Sn(_o,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return db(r,s,n)},"PUBLIC")),rr(new Sn("analytics-internal",t,"PRIVATE")),cn(Vf,xf),cn(Vf,xf,"esm2020");function t(e){try{const n=e.getProvider(_o).getImmediate();return{logEvent:(r,s,i)=>mb(n,r,s,i)}}catch(n){throw Gt.create("interop-component-reg-failed",{reason:n})}}}_b();const yb={apiKey:"AIzaSyDscUBkvZzaiFO6TXbOZ4JGSCTqhT7PeEk",authDomain:"vue-test-304bb.firebaseapp.com",projectId:"vue-test-304bb",storageBucket:"vue-test-304bb.firebasestorage.app",messagingSenderId:"168557869167",appId:"1:168557869167:web:d0f89b9379403d218df59a",measurementId:"G-SHR35NVSRE"},sm=yp(yb);pb(sm);const im=BA(sm);/**
 * Vue 3 Carousel 0.16.0
 * (c) 2025
 * @license MIT
 */const om=["viewport","carousel"],yo={"bottom-to-top":"btt","left-to-right":"ltr","right-to-left":"rtl","top-to-bottom":"ttb"},am=["ltr","left-to-right","rtl","right-to-left","ttb","top-to-bottom","btt","bottom-to-top"],vb={ariaGallery:"Gallery",ariaNavigateToPage:"Navigate to page {slideNumber}",ariaNavigateToSlide:"Navigate to slide {slideNumber}",ariaNextSlide:"Navigate to next slide",ariaPreviousSlide:"Navigate to previous slide",iconArrowDown:"Arrow pointing downwards",iconArrowLeft:"Arrow pointing to the left",iconArrowRight:"Arrow pointing to the right",iconArrowUp:"Arrow pointing upwards",itemXofY:"Item {currentSlide} of {slidesCount}"},lm=["slide","fade"],cm=["center","start","end","center-even","center-odd"],Df=10,ki=.08,Ge={autoplay:0,breakpointMode:om[0],breakpoints:void 0,dir:am[0],enabled:!0,gap:0,height:"auto",i18n:vb,ignoreAnimations:!1,itemsToScroll:1,itemsToShow:1,modelValue:0,mouseDrag:!0,mouseWheel:!1,pauseAutoplayOnHover:!1,preventExcessiveDragging:!1,slideEffect:lm[0],snapAlign:cm[0],touchDrag:!0,transition:300,wrapAround:!1},Dr=Symbol("carousel"),Eb=t=>{const e=Ys([]),n=r=>{r!==void 0?e.slice(r).forEach((s,i)=>{var a;(a=s.exposed)===null||a===void 0||a.setIndex(r+i)}):e.forEach((s,i)=>{var a;(a=s.exposed)===null||a===void 0||a.setIndex(i)})};return{cleanup:()=>{e.splice(0,e.length)},getSlides:()=>e,registerSlide:(r,s)=>{if(!r||r.props.isClone)return;const i=s??e.length;e.splice(i,0,r),n(i),t("slide-registered",{slide:r,index:i})},unregisterSlide:r=>{const s=e.indexOf(r);s!==-1&&(t("slide-unregistered",{slide:r,index:s}),e.splice(s,1),n(s))}}};function wb(t){return t.length===0?0:t.reduce((n,r)=>n+r,0)/t.length}function Nf({slides:t,position:e,toShow:n}){const r=[],s=e==="before",i=s?-n:0,a=s?0:n;if(t.length<=0)return r;for(let l=i;l<a;l++){const h={index:s?l:l+t.length,isClone:!0,id:void 0,key:`clone-${e}-${l}`},f=t[(l%t.length+t.length)%t.length].vnode,p=Cr(f,h);p.el=null,r.push(p)}return r}const Tb='a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])';function Of(t){if(!t.el||!(t.el instanceof Element))return;const e=t.el.querySelectorAll(Tb);for(const n of e)n instanceof HTMLElement&&!n.hasAttribute("disabled")&&n.getAttribute("aria-hidden")!=="true"&&n.setAttribute("tabindex","-1")}function Ib(t,e){return Object.keys(t).filter(n=>!e.includes(n)).reduce((n,r)=>(n[r]=t[r],n),{})}function Ab(t){const{isVertical:e,isReversed:n,dragged:r,effectiveSlideSize:s,threshold:i}=t,a=e?r.y:r.x;if(a===0)return 0;const l=a/s,c=Math.abs(l);if(c<i)return 0;const h=c<1?Math.sign(l):Math.round(l);return n?h:-h}function _n({val:t,max:e,min:n}){return e<n?t:Math.min(Math.max(t,isNaN(n)?t:n),isNaN(e)?t:e)}function bb(t){const{transform:e}=window.getComputedStyle(t);return e.split(/[(,)]/).slice(1,-1).map(n=>parseFloat(n))}function Sb(t){let e=1,n=1;return t.forEach(r=>{const s=bb(r);s.length===6&&(e/=s[0],n/=s[3])}),{widthMultiplier:e,heightMultiplier:n}}function Rb(t,e){switch(t){case"start":return 0;case"center":case"center-odd":return(e-1)/2;case"center-even":return(e-2)/2;case"end":return e-1;default:return 0}}function Cb(t,e,n){switch(t){case"start":return 0;case"center":case"center-odd":return(n-e)/2;case"center-even":return n/2-e;case"end":return n-e;default:return 0}}function Rl({slideSize:t,viewportSize:e,align:n,itemsToShow:r}){return r!==void 0?Rb(n,r):t!==void 0&&e!==void 0?Cb(n,t,e):0}function um(t="",e={}){return Object.entries(e).reduce((n,[r,s])=>n.replace(`{${r}}`,String(s)),t)}function hm({val:t,max:e,min:n=0}){const r=e-n+1;return((t-n)%r+r)%r+n}function Cl(t,e=0){let n=!1,r=0,s=null;function i(...a){if(n)return;n=!0;const l=()=>{s=requestAnimationFrame(c=>{c-r>e?(r=c,t(...a),n=!1):l()})};l()}return i.cancel=()=>{s&&(cancelAnimationFrame(s),s=null,n=!1)},i}function Li(t,e="px"){if(!(t==null||t===""))return typeof t=="number"||parseFloat(t).toString()===t?`${t}${e}`:t}const Pb=hr({name:"CarouselAria",setup(){const t=Vt(Dr);return t?()=>dt("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},um(t.config.i18n.itemXofY,{currentSlide:t.currentSlide+1,slidesCount:t.slidesCount})):()=>""}});function Vb(t){let e=!1;const n={x:0,y:0},r=In({x:0,y:0}),s=De(!1),{isSliding:i}=t,a=le(()=>typeof i=="boolean"?i:i.value),l=f=>{var p;const g=f.target.tagName;if(["INPUT","TEXTAREA","SELECT"].includes(g)||a.value||(e=f.type==="touchstart",e&&f.touches.length>1))return;if(!e&&(f.preventDefault(),f.button!==0))return;n.x=e?f.touches[0].clientX:f.clientX,n.y=e?f.touches[0].clientY:f.clientY;const _=e?"touchmove":"mousemove",R=e?"touchend":"mouseup";document.addEventListener(_,c,{passive:!1}),document.addEventListener(R,h,{passive:!0}),(p=t.onDragStart)===null||p===void 0||p.call(t)},c=Cl(f=>{var p;if(e&&f.touches.length>1)return;s.value=!0;const g=e?f.touches[0].clientX:f.clientX,_=e?f.touches[0].clientY:f.clientY;r.x=g-n.x,r.y=_-n.y,(p=t.onDrag)===null||p===void 0||p.call(t,{deltaX:r.x,deltaY:r.y,isTouch:e})}),h=()=>{var f;c.cancel();const p=Math.abs(r.x)+Math.abs(r.y);!e&&p>10&&window.addEventListener("click",R=>{R.preventDefault(),R.stopPropagation()},{once:!0,capture:!0}),(f=t.onDragEnd)===null||f===void 0||f.call(t),r.x=0,r.y=0,s.value=!1;const g=e?"touchmove":"mousemove",_=e?"touchend":"mouseup";document.removeEventListener(g,c),document.removeEventListener(_,h)};return{dragged:r,isDragging:s,handleDragStart:l}}function xb(){const t=De(!1);return{isHover:t,handleMouseEnter:()=>{t.value=!0},handleMouseLeave:()=>{t.value=!1}}}function Db(t){const{isVertical:e,isSliding:n,config:r}=t,s=le(()=>typeof e=="boolean"?e:e.value),i=le(()=>typeof n=="boolean"?n:n.value);return{handleScroll:l=>{var c,h;if(l.preventDefault(),!r.mouseWheel||i.value)return;const f=typeof r.mouseWheel=="object"&&(c=r.mouseWheel.threshold)!==null&&c!==void 0?c:Df,p=Math.abs(l.deltaY)>f?l.deltaY:0,g=Math.abs(l.deltaX)>f?l.deltaX:0;if(p===0&&g===0)return;const _=s.value?p:g,V=(_!==0?_:s.value?g:p)>0;(h=t.onWheel)===null||h===void 0||h.call(t,{deltaX:g,deltaY:p,isScrollingForward:V})}}}const Nb={autoplay:{default:Ge.autoplay,type:Number},breakpoints:{default:Ge.breakpoints,type:Object},breakpointMode:{default:Ge.breakpointMode,validator(t){return om.includes(t)}},clamp:{type:Boolean},dir:{type:String,default:Ge.dir,validator(t,e){if(!am.includes(t))return!1;const n=t in yo?yo[t]:t;return["ttb","btt"].includes(n)&&(!e.height||e.height==="auto")&&console.warn(`[vue3-carousel]: The dir "${t}" is not supported with height "auto".`),!0}},enabled:{default:Ge.enabled,type:Boolean},gap:{default:Ge.gap,type:Number},height:{default:Ge.height,type:[Number,String]},i18n:{default:Ge.i18n,type:Object},ignoreAnimations:{default:!1,type:[Array,Boolean,String]},itemsToScroll:{default:Ge.itemsToScroll,type:Number},itemsToShow:{default:Ge.itemsToShow,type:[Number,String]},modelValue:{default:void 0,type:Number},mouseDrag:{default:Ge.mouseDrag,type:[Boolean,Object]},mouseWheel:{default:Ge.mouseWheel,type:[Boolean,Object]},mouseScrollThreshold:{default:Ge.mouseScrollThreshold,type:Number},pauseAutoplayOnHover:{default:Ge.pauseAutoplayOnHover,type:Boolean},preventExcessiveDragging:{default:!1,type:Boolean,validator(t,e){return t&&e.wrapAround&&console.warn('[vue3-carousel]: "preventExcessiveDragging" cannot be used with wrapAround. The setting will be ignored.'),!0}},slideEffect:{type:String,default:Ge.slideEffect,validator(t){return lm.includes(t)}},snapAlign:{default:Ge.snapAlign,validator(t){return cm.includes(t)}},touchDrag:{default:Ge.touchDrag,type:[Boolean,Object]},transition:{default:Ge.transition,type:Number},wrapAround:{default:Ge.wrapAround,type:Boolean}},Ob=hr({name:"VueCarousel",props:Nb,emits:["before-init","drag","init","loop","slide-end","slide-registered","slide-start","slide-unregistered","update:modelValue","wheel"],setup(t,{slots:e,emit:n,expose:r}){var s;const i=Eb(n),a=i.getSlides(),l=le(()=>a.length),c=De(null),h=De(null),f=De(0),p=le(()=>Object.assign(Object.assign(Object.assign({},Ge),Ib(t,["breakpoints","modelValue"])),{i18n:Object.assign(Object.assign({},Ge.i18n),t.i18n)})),g=Ys(Object.assign({},p.value)),_=De((s=t.modelValue)!==null&&s!==void 0?s:0),R=De(_.value);Tn(_,Q=>R.value=Q);const V=De(0),M=le(()=>Math.ceil((l.value-1)/2)),$=le(()=>l.value-1),j=le(()=>0);let q=null,G=null,re=null;const ge=le(()=>f.value+g.gap),A=le(()=>{const Q=g.dir||"ltr";return Q in yo?yo[Q]:Q}),y=le(()=>["rtl","btt"].includes(A.value)),v=le(()=>["ttb","btt"].includes(A.value)),b=le(()=>g.itemsToShow==="auto"),I=le(()=>v.value?"height":"width");function S(){var Q;if(!$t.value)return;const ie=(p.value.breakpointMode==="carousel"?(Q=c.value)===null||Q===void 0?void 0:Q.getBoundingClientRect().width:typeof window<"u"?window.innerWidth:0)||0,he=Object.keys(t.breakpoints||{}).map(ue=>Number(ue)).sort((ue,Ye)=>+Ye-+ue),be={};he.some(ue=>ie>=ue?(Object.assign(be,t.breakpoints[ue]),be.i18n&&Object.assign(be.i18n,p.value.i18n,t.breakpoints[ue].i18n),!0):!1),Object.assign(g,p.value,be),b.value||(g.itemsToShow=_n({val:Number(g.itemsToShow),max:t.clamp?l.value:1/0,min:1}))}const w=Cl(()=>{S(),Dt(),He()}),Me=Ys(new Set),Ne=De([]);function Oe({widthMultiplier:Q,heightMultiplier:ie}){Ne.value=a.map(he=>{var be;const ue=(be=he.exposed)===null||be===void 0?void 0:be.getBoundingRect();return{width:ue.width*Q,height:ue.height*ie}})}const ce=De({width:0,height:0});function Ee({widthMultiplier:Q,heightMultiplier:ie}){var he;const be=((he=h.value)===null||he===void 0?void 0:he.getBoundingClientRect())||{width:0,height:0};ce.value={width:be.width*Q,height:be.height*ie}}function He(){if(!h.value)return;const Q=Sb(Me);if(Ee(Q),Oe(Q),b.value)f.value=wb(Ne.value.map(ie=>ie[I.value]));else{const ie=Number(g.itemsToShow),he=(ie-1)*g.gap;f.value=(ce.value[I.value]-he)/ie}}function Dt(){!g.wrapAround&&l.value>0&&(_.value=_n({val:_.value,max:$.value,min:j.value}))}const Et=le(()=>typeof t.ignoreAnimations=="string"?t.ignoreAnimations.split(","):Array.isArray(t.ignoreAnimations)?t.ignoreAnimations:t.ignoreAnimations?!1:[]);va(()=>Dt()),va(()=>{He()});let $e;const Wt=Q=>{const ie=Q.target;if(!(!ie?.contains(c.value)||Array.isArray(Et.value)&&Et.value.includes(Q.animationName))&&(Me.add(ie),!$e)){const he=()=>{$e=requestAnimationFrame(()=>{He(),he()})};he()}},Ut=Q=>{const ie=Q.target;ie&&Me.delete(ie),$e&&Me.size===0&&(cancelAnimationFrame($e),He())},$t=De(!1);typeof document<"u"&&va(()=>{$t.value&&Et.value!==!1?(document.addEventListener("animationstart",Wt),document.addEventListener("animationend",Ut)):(document.removeEventListener("animationstart",Wt),document.removeEventListener("animationend",Ut))}),ui(()=>{$t.value=!0,S(),E(),c.value&&(re=new ResizeObserver(w),re.observe(c.value)),n("init")}),Id(()=>{$t.value=!1,i.cleanup(),G&&clearTimeout(G),$e&&cancelAnimationFrame($e),q&&clearInterval(q),re&&(re.disconnect(),re=null),typeof document<"u"&&ee(),c.value&&(c.value.removeEventListener("transitionend",He),c.value.removeEventListener("animationiteration",He))});const{isHover:ct,handleMouseEnter:O,handleMouseLeave:J}=xb(),Y=Cl(Q=>{if(!Q.ctrlKey)switch(Q.key){case"ArrowLeft":case"ArrowUp":v.value===Q.key.endsWith("Up")&&(y.value?K(!0):te(!0));break;case"ArrowRight":case"ArrowDown":v.value===Q.key.endsWith("Down")&&(y.value?te(!0):K(!0));break}},200),ee=()=>{document.removeEventListener("keydown",Y)},Pe=()=>{document.addEventListener("keydown",Y)};function E(){!g.autoplay||g.autoplay<=0||(q=setInterval(()=>{g.pauseAutoplayOnHover&&ct.value||K()},g.autoplay))}function T(){C(),E()}function C(){q&&(clearInterval(q),q=null)}const D=De(!1),k=({deltaX:Q,deltaY:ie,isTouch:he})=>{var be,ue,Ye,Xe;n("drag",{deltaX:Q,deltaY:ie});const ut=he?typeof g.touchDrag=="object"&&(ue=(be=g.touchDrag)===null||be===void 0?void 0:be.threshold)!==null&&ue!==void 0?ue:ki:typeof g.mouseDrag=="object"&&(Xe=(Ye=g.mouseDrag)===null||Ye===void 0?void 0:Ye.threshold)!==null&&Xe!==void 0?Xe:ki,dr=Ab({isVertical:v.value,isReversed:y.value,dragged:{x:Q,y:ie},effectiveSlideSize:ge.value,threshold:ut});dr!==0&&(R.value=g.wrapAround?_.value+dr:_n({val:_.value+dr,max:$.value,min:j.value}))},N=()=>se(R.value),{dragged:W,isDragging:B,handleDragStart:F}=Vb({isSliding:D,onDrag:k,onDragEnd:N}),U=({deltaX:Q,deltaY:ie,isScrollingForward:he})=>{n("wheel",{deltaX:Q,deltaY:ie}),he?y.value?te():K():y.value?K():te()},{handleScroll:oe}=Db({isVertical:v,isSliding:D,config:g,onWheel:U});function K(Q=!1){se(_.value+g.itemsToScroll,Q)}function te(Q=!1){se(_.value-g.itemsToScroll,Q)}function se(Q,ie=!1){if(!ie&&D.value)return;const he=(g.wrapAround?hm:_n)({val:Q,max:$.value,min:j.value});if(_.value===he)return;V.value=_.value,n("slide-start",{slidingToIndex:Q,currentSlideIndex:_.value,prevSlideIndex:V.value,slidesCount:l.value}),C(),D.value=!0,_.value=Q,he!==Q&&Re.pause(),n("update:modelValue",he),G=setTimeout(()=>{g.wrapAround&&he!==Q&&(Re.resume(),_.value=he,n("loop",{currentSlideIndex:_.value,slidingToIndex:Q})),n("slide-end",{currentSlideIndex:_.value,prevSlideIndex:V.value,slidesCount:l.value}),D.value=!1,T()},g.transition)}function ye(){S(),Dt(),He(),T()}Tn(()=>[p.value,t.breakpoints],()=>S(),{deep:!0}),Tn(()=>t.autoplay,()=>T());const Re=Tn(()=>t.modelValue,Q=>{Q!==_.value&&se(Number(Q),!0)});n("before-init");const ve=le(()=>{if(!g.wrapAround)return{before:0,after:0};if(b.value)return{before:a.length,after:a.length};const Q=Number(g.itemsToShow),ie=Math.ceil(Q+(g.itemsToScroll-1)),he=ie-R.value,be=ie-(l.value-(R.value+1));return{before:Math.max(0,he),after:Math.max(0,be)}}),rt=le(()=>ve.value.before?b.value?Ne.value.slice(-1*ve.value.before).reduce((Q,ie)=>Q+ie[I.value]+g.gap,0)*-1:ve.value.before*ge.value*-1:0),st=le(()=>{var Q;if(b.value){const ie=(_.value%a.length+a.length)%a.length;return Rl({slideSize:(Q=Ne.value[ie])===null||Q===void 0?void 0:Q[I.value],viewportSize:ce.value[I.value],align:g.snapAlign})}return Rl({align:g.snapAlign,itemsToShow:+g.itemsToShow})}),mt=le(()=>{let Q=0;if(b.value){if(_.value<0?Q=Ne.value.slice(_.value).reduce((ie,he)=>ie+he[I.value]+g.gap,0)*-1:Q=Ne.value.slice(0,_.value).reduce((ie,he)=>ie+he[I.value]+g.gap,0),Q-=st.value,!g.wrapAround){const ie=Ne.value.reduce((he,be)=>he+be[I.value]+g.gap,0)-ce.value[I.value]-g.gap;Q=_n({val:Q,max:ie,min:0})}}else{let ie=_.value-st.value;g.wrapAround||(ie=_n({val:ie,max:l.value-+g.itemsToShow,min:0})),Q=ie*ge.value}return Q*(y.value?1:-1)}),Nt=le(()=>{var Q,ie;if(!b.value){const ue=_.value-st.value;return g.wrapAround?{min:Math.floor(ue),max:Math.ceil(ue+Number(g.itemsToShow)-1)}:{min:Math.floor(_n({val:ue,max:l.value-Number(g.itemsToShow),min:0})),max:Math.ceil(_n({val:ue+Number(g.itemsToShow)-1,max:l.value-1,min:0}))}}let he=0;{let ue=0,Ye=0-ve.value.before;const Xe=Math.abs(mt.value+rt.value);for(;ue<=Xe;){const ut=(Ye%a.length+a.length)%a.length;ue+=((Q=Ne.value[ut])===null||Q===void 0?void 0:Q[I.value])+g.gap,Ye++}he=Ye-1}let be=0;{let ue=he,Ye=0;for(ue<0?Ye=Ne.value.slice(0,ue).reduce((Xe,ut)=>Xe+ut[I.value]+g.gap,0)-Math.abs(mt.value+rt.value):Ye=Ne.value.slice(0,ue).reduce((Xe,ut)=>Xe+ut[I.value]+g.gap,0)-Math.abs(mt.value);Ye<ce.value[I.value];){const Xe=(ue%a.length+a.length)%a.length;Ye+=((ie=Ne.value[Xe])===null||ie===void 0?void 0:ie[I.value])+g.gap,ue++}be=ue-1}return{min:Math.floor(he),max:Math.ceil(be)}}),qt=le(()=>{if(g.slideEffect==="fade")return;const Q=v.value?"Y":"X",ie=v.value?W.y:W.x;let he=mt.value+ie;if(!g.wrapAround&&g.preventExcessiveDragging){let be=0;b.value?be=Ne.value.reduce((Xe,ut)=>Xe+ut[I.value],0):be=(l.value-Number(g.itemsToShow))*ge.value;const ue=y.value?0:-1*be,Ye=y.value?be:0;he=_n({val:he,min:ue,max:Ye})}return`translate${Q}(${he}px)`}),Vn=le(()=>({"--vc-carousel-height":Li(g.height),"--vc-cloned-offset":Li(rt.value),"--vc-slide-gap":Li(g.gap),"--vc-transition-duration":D.value?Li(g.transition,"ms"):void 0})),Qe=In({activeSlide:R,config:g,currentSlide:_,isSliding:D,isVertical:v,maxSlide:$,minSlide:j,nav:{slideTo:se,next:K,prev:te},normalizedDir:A,slideRegistry:i,slideSize:f,slides:a,slidesCount:l,viewport:h,visibleRange:Nt});Qr(Dr,Qe);const pn=In({config:g,currentSlide:_,maxSlide:$,middleSlide:M,minSlide:j,slideSize:f,slidesCount:l});return r(In(Object.assign({data:pn,next:K,prev:te,restartCarousel:ye,slideTo:se,updateBreakpointsConfig:S,updateSlideSize:He,updateSlidesData:Dt},dd(Qe)))),()=>{var Q;const ie=e.default||e.slides,he=ie?.(pn)||[],{before:be,after:ue}=ve.value,Ye=Nf({slides:a,position:"before",toShow:be}),Xe=Nf({slides:a,position:"after",toShow:ue}),ut=[...Ye,...he,...Xe];if(!g.enabled||!ut.length)return dt("section",{ref:c,class:["carousel","is-disabled"]},ut);const dr=((Q=e.addons)===null||Q===void 0?void 0:Q.call(e,pn))||[],Xo=dt("ol",{class:"carousel__track",onMousedownCapture:g.mouseDrag?F:null,onTouchstartPassiveCapture:g.touchDrag?F:null,onWheel:g.mouseWheel?oe:null,style:{transform:qt.value}},ut),xn=dt("div",{class:"carousel__viewport",ref:h},Xo);return dt("section",{ref:c,class:["carousel",`is-${A.value}`,`is-effect-${g.slideEffect}`,{"is-dragging":B.value,"is-hover":ct.value,"is-sliding":D.value,"is-vertical":v.value}],dir:A.value,style:Vn.value,"aria-label":g.i18n.ariaGallery,tabindex:"0",onBlur:ee,onFocus:Pe,onMouseenter:O,onMouseleave:J},[xn,dr,dt(Pb)])}}});var Pl;(function(t){t.arrowDown="arrowDown",t.arrowLeft="arrowLeft",t.arrowRight="arrowRight",t.arrowUp="arrowUp"})(Pl||(Pl={}));const Mf=t=>`icon${t.charAt(0).toUpperCase()+t.slice(1)}`,Mb={arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"};function kb(t){return t in Pl}const kf=t=>t&&kb(t),Lf=hr({props:{name:{type:String,required:!0,validator:kf},title:{type:String,default:t=>t.name?Ge.i18n[Mf(t.name)]:""}},setup(t){const e=Vt(Dr,null);return()=>{const n=t.name;if(!n||!kf(n))return;const r=Mb[n],s=dt("path",{d:r}),i=e?.config.i18n[Mf(n)]||t.title,a=dt("title",i);return dt("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img","aria-label":i},[a,s])}}}),Lb=hr({name:"CarouselNavigation",inheritAttrs:!1,props:{carousel:{type:Object}},setup(t,{slots:e,attrs:n}){let r=Vt(Dr,null);const{next:s,prev:i}=e,a=()=>({btt:"arrowDown",ltr:"arrowLeft",rtl:"arrowRight",ttb:"arrowUp"})[r.normalizedDir],l=()=>({btt:"arrowUp",ltr:"arrowRight",rtl:"arrowLeft",ttb:"arrowDown"})[r.normalizedDir],c=le(()=>!r.config.wrapAround&&r.currentSlide<=r.minSlide),h=le(()=>!r.config.wrapAround&&r.currentSlide>=r.maxSlide);return()=>{if(t.carousel&&(r=t.carousel),!r)return console.warn("[vue3-carousel]: A carousel component must be provided for the navigation component to display"),"";const{i18n:f}=r.config,p=dt("button",Object.assign(Object.assign({type:"button",disabled:c.value,"aria-label":f.ariaPreviousSlide,title:f.ariaPreviousSlide,onClick:r.nav.prev},n),{class:["carousel__prev",{"carousel__prev--disabled":c.value},n.class]}),i?.()||dt(Lf,{name:a()})),g=dt("button",Object.assign(Object.assign({type:"button",disabled:h.value,"aria-label":f.ariaNextSlide,title:f.ariaNextSlide,onClick:r.nav.next},n),{class:["carousel__next",{"carousel__next--disabled":h.value},n.class]}),s?.()||dt(Lf,{name:l()}));return[p,g]}}}),Fb=hr({name:"CarouselPagination",props:{disableOnClick:{type:Boolean},paginateByItemsToShow:{type:Boolean},carousel:{type:Object}},setup(t){let e=Vt(Dr,null);const n=le(()=>e.config.itemsToShow),r=le(()=>Rl({align:e.config.snapAlign,itemsToShow:n.value})),s=le(()=>t.paginateByItemsToShow&&n.value>1),i=le(()=>Math.ceil((e.activeSlide-r.value)/n.value)),a=le(()=>Math.ceil(e.slidesCount/n.value)),l=c=>hm(s.value?{val:i.value,max:a.value-1,min:0}:{val:e.activeSlide,max:e.maxSlide,min:e.minSlide})===c;return()=>{var c,h;if(t.carousel&&(e=t.carousel),!e)return console.warn("[vue3-carousel]: A carousel component must be provided for the pagination component to display"),"";const f=[];for(let p=s.value?0:e.minSlide;p<=(s.value?a.value-1:e.maxSlide);p++){const g=um(e.config.i18n[s.value?"ariaNavigateToPage":"ariaNavigateToSlide"],{slideNumber:p+1}),_=l(p),R=dt("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":_},"aria-label":g,"aria-pressed":_,"aria-controls":(h=(c=e.slides[p])===null||c===void 0?void 0:c.exposed)===null||h===void 0?void 0:h.id,title:g,disabled:t.disableOnClick,onClick:()=>e.nav.slideTo(s.value?Math.floor(p*+e.config.itemsToShow+r.value):p)}),V=dt("li",{class:"carousel__pagination-item",key:p},R);f.push(V)}return dt("ol",{class:"carousel__pagination"},f)}}}),Ub=hr({name:"CarouselSlide",props:{id:{type:String,default:t=>t.isClone?void 0:I_()},index:{type:Number,default:void 0},isClone:{type:Boolean,default:!1}},setup(t,{attrs:e,slots:n,expose:r}){const s=Vt(Dr);if(Qr(Dr,void 0),!s)return()=>"";const i=De(t.index),a=R=>{i.value=R},l=Po(),c=()=>{const R=l.vnode.el;return R?R.getBoundingClientRect():{width:0,height:0}};r({id:t.id,setIndex:a,getBoundingRect:c});const h=le(()=>i.value===s.activeSlide),f=le(()=>i.value===s.activeSlide-1),p=le(()=>i.value===s.activeSlide+1),g=le(()=>i.value>=s.visibleRange.min&&i.value<=s.visibleRange.max),_=le(()=>{if(s.config.itemsToShow==="auto")return;const R=s.config.itemsToShow,V=s.config.gap>0&&R>1?`calc(${100/R}% - ${s.config.gap*(R-1)/R}px)`:`${100/R}%`;return s.isVertical?{height:V}:{width:V}});return s.slideRegistry.registerSlide(l,t.index),Kl(()=>{s.slideRegistry.unregisterSlide(l)}),t.isClone&&(ui(()=>{Of(l.vnode)}),Td(()=>{Of(l.vnode)})),()=>{var R,V;return s.config.enabled?dt("li",{style:[e.style,Object.assign({},_.value)],class:{carousel__slide:!0,"carousel__slide--clone":t.isClone,"carousel__slide--visible":g.value,"carousel__slide--active":h.value,"carousel__slide--prev":f.value,"carousel__slide--next":p.value,"carousel__slide--sliding":s.isSliding},onFocusin:()=>{s.viewport&&(s.viewport.scrollLeft=0),s.nav.slideTo(i.value)},id:t.isClone?void 0:t.id,"aria-hidden":t.isClone||void 0},(V=n.default)===null||V===void 0?void 0:V.call(n,{currentIndex:i.value,isActive:h.value,isClone:t.isClone,isPrev:f.value,isNext:p.value,isSliding:s.isSliding,isVisible:g.value})):(R=n.default)===null||R===void 0?void 0:R.call(n)}}}),Yo=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Bb={key:0,class:"status-message"},jb={key:1,class:"status-message error"},$b={key:2,class:"home-layout"},qb={class:"sidebar"},Hb=["onClick"],zb={class:"special-offer-section"},Kb=["src","alt"],Gb={class:"offer-details"},Wb={class:"offer-name"},Qb={class:"offer-price"},Yb={class:"products-section"},Xb={class:"carousel__item"},Jb=["src"],Zb={class:"search-bar-local"},eS={class:"product-grid"},tS={class:"product-card"},nS=["src","alt"],rS={class:"product-price"},sS={class:"product-rating"},iS=["onClick"],oS={key:0,class:"no-products"},aS={__name:"Home",setup(t){const e=ec(),n=De([]),r=De(["全部","木桿","球道木桿","鐵桿","推桿","高爾夫球","球袋","配件"]),s=De("全部"),i=De(""),a=De(!0),l=De(""),c=De([{id:1,url:"https://shop.r10s.jp/taylormadegolf/cabinet/bunner/imgrc0150982674.jpg"},{id:2,url:"https://shop.r10s.jp/callawaygolf/cabinet/imgrc0142847302.jpg?v=1760022301557"},{id:3,url:"https://tshop.r10s.jp/r-golf/cabinet/11947947/imgrc0130022650.jpg?fitin=768%3A432"}]),h=async()=>{try{const _=await QA(FA(im,"allProducts")),R=[];_.docs.forEach(V=>{const M=V.data(),$=V.id;R.push({firestoreId:$,name:M.name,category:M.category,price:M.price,image:M.image,rating:M.rating,description:M.description})}),n.value=R}catch(_){console.error("讀取 Firebase 資料時發生錯誤:",_)}finally{a.value=!1}};ui(()=>{h()});const f=le(()=>n.value.slice(1,4)),p=le(()=>{let _=n.value;return console.log(n.value),s.value!=="全部"&&(_=_.filter(R=>R.category===s.value)),i.value&&(_=_.filter(R=>R.name.toLowerCase().includes(i.value.toLowerCase()))),_}),g=_=>{s.value=_};return(_,R)=>a.value?(qe(),Je("div",Bb,[...R[1]||(R[1]=[X("p",null,"載入中，請稍候...",-1)])])):l.value?(qe(),Je("div",jb,[X("p",null,ft(l.value),1)])):(qe(),Je("div",$b,[X("aside",qb,[R[3]||(R[3]=X("h3",null,"商品分類",-1)),X("ul",null,[(qe(!0),Je(kt,null,Ss(r.value,V=>(qe(),Je("li",{key:V,onClick:M=>g(V),class:Io({active:s.value===V})},ft(V),11,Hb))),128))]),X("div",zb,[R[2]||(R[2]=X("h4",null,"🔥 熱門特價",-1)),(qe(!0),Je(kt,null,Ss(f.value,V=>(qe(),Je("div",{key:V.firestoreId,class:"offer-card"},[We(et(Yr),{to:`/product/${V.firestoreId}`,class:"offer-card-link"},{default:wn(()=>[X("img",{src:V.image,alt:V.name,class:"offer-image"},null,8,Kb),X("div",Gb,[X("p",Wb,ft(V.name),1),X("p",Qb,"NT$ "+ft(V.price),1)])]),_:2},1032,["to"])]))),128))])]),X("section",Yb,[We(et(Ob),{autoplay:3e3,"wrap-around":!0},{addons:wn(()=>[We(et(Lb)),We(et(Fb))]),default:wn(()=>[(qe(!0),Je(kt,null,Ss(c.value,V=>(qe(),Qa(et(Ub),{key:V.id},{default:wn(()=>[X("div",Xb,[X("img",{src:V.url,alt:"促銷廣告"},null,8,Jb)])]),_:2},1024))),128))]),_:1}),X("div",Zb,[Zi(X("input",{type:"text","onUpdate:modelValue":R[0]||(R[0]=V=>_.searchTerm=V),placeholder:"搜尋商品名稱..."},null,512),[[io,_.searchTerm]])]),R[5]||(R[5]=X("h2",{class:"all-products-title"},"商品列表",-1)),X("div",eS,[(qe(!0),Je(kt,null,Ss(p.value,V=>(qe(),Qa(et(Yr),{key:V.firestoreId,to:`/product/${V.firestoreId}`,class:"product-card-link"},{default:wn(()=>[X("div",tS,[X("img",{src:V.image,alt:V.name},null,8,nS),X("h3",null,ft(V.name),1),X("p",rS,"NT$ "+ft(V.price),1),X("p",sS,"評價: "+ft(V.rating)+" ★",1),X("button",{onClick:Kd(M=>et(e).addToCart(V),["prevent"])},"加入購物車",8,iS)])]),_:2},1032,["to"]))),128))]),p.value.length===0?(qe(),Je("div",oS,[...R[4]||(R[4]=[X("p",null,"抱歉，找不到符合條件的商品。",-1)])])):$d("",!0),R[6]||(R[6]=dy('<div class="reviews-section" data-v-c2d0f340><h2 data-v-c2d0f340>顧客評價</h2><div class="review-grid" data-v-c2d0f340><div class="review-card" data-v-c2d0f340>&quot;出貨速度超快，球桿品質沒話說！&quot; - 陳先生</div><div class="review-card" data-v-c2d0f340>&quot;客服很有耐心，推薦的球很適合我！&quot; - 林小姐</div><div class="review-card" data-v-c2d0f340>&quot;網站好用，會再回購。&quot; - 王先生</div></div></div>',1))])]))}},lS=Yo(aS,[["__scopeId","data-v-c2d0f340"]]),cS={class:"product-page-container"},uS={key:0,class:"status-message"},hS={key:1,class:"status-message error"},fS={key:2},dS={class:"breadcrumb"},pS={class:"product-detail-card"},gS={class:"image-gallery"},mS=["src","alt"],_S={class:"product-info"},yS={class:"category-tag"},vS={class:"description"},ES={class:"purchase-section"},wS={class:"price"},TS={class:"actions"},IS={class:"quantity-selector"},AS={__name:"ProductDetail",setup(t){const e=Jv(),n=De(null),r=De(!0),s=De(""),i=De(1),a=e.params.id;console.log(e.params.id);const l=async()=>{try{const c=await WA(UA(im,"allProducts",a));if(c.exists()){const h=c.data();n.value={firestoreId:c.id,name:h.name,category:h.category,price:h.price,image:h.image,rating:h.rating,description:h.description}}else console.log("找不到此商品!"),s.value="很抱歉，我們找不到您要的商品。"}catch(c){console.error("讀取商品詳細資料時發生錯誤:",c),s.value="載入資料時發生問題，請稍後再試或聯繫客服。"}finally{r.value=!1}};return ui(()=>{l()}),(c,h)=>(qe(),Je("div",cS,[r.value?(qe(),Je("div",uS,"載入中...")):s.value?(qe(),Je("div",hS,ft(s.value),1)):n.value?(qe(),Je("div",fS,[X("nav",dS,[X("span",null,ft(n.value.category),1),X("span",null,ft(n.value.name),1)]),X("div",pS,[X("div",gS,[X("img",{src:n.value.image,alt:n.value.name,class:"product-image"},null,8,mS)]),X("div",_S,[X("div",null,[X("span",yS,ft(n.value.category),1),X("h1",null,ft(n.value.name),1),X("p",vS,ft(n.value.description),1)]),X("div",ES,[X("p",wS,"NT$ "+ft(n.value.price),1),X("div",TS,[X("div",IS,[h[1]||(h[1]=X("label",{for:"quantity"},"數量:",-1)),Zi(X("input",{type:"number",id:"quantity","onUpdate:modelValue":h[0]||(h[0]=f=>i.value=f),min:"1"},null,512),[[io,i.value]])]),h[2]||(h[2]=X("button",{class:"add-to-cart-btn"},"加入購物車",-1))])])])])])):$d("",!0)]))}},bS=Yo(AS,[["__scopeId","data-v-ec884bfd"]]),SS={class:"login-container"},RS={class:"login-box"},CS={class:"form-group"},PS={class:"form-group"},VS={__name:"Login",setup(t){const e=De(""),n=De(""),r=()=>{alert(`Email: ${e.value}
密碼: ${n.value}`)};return(s,i)=>(qe(),Je("div",SS,[X("div",RS,[i[5]||(i[5]=X("h2",null,"會員登入",-1)),X("form",{onSubmit:Kd(r,["prevent"])},[X("div",CS,[i[2]||(i[2]=X("label",{for:"email"},"電子郵件",-1)),Zi(X("input",{type:"email",id:"email","onUpdate:modelValue":i[0]||(i[0]=a=>e.value=a),required:"",placeholder:"請輸入您的 Email"},null,512),[[io,e.value]])]),X("div",PS,[i[3]||(i[3]=X("label",{for:"password"},"密碼",-1)),Zi(X("input",{type:"password",id:"password","onUpdate:modelValue":i[1]||(i[1]=a=>n.value=a),required:"",placeholder:"請輸入您的密碼"},null,512),[[io,n.value]])]),i[4]||(i[4]=X("button",{type:"submit"},"登入",-1))],32)])]))}},xS=Yo(VS,[["__scopeId","data-v-d924b890"]]),DS={class:"cart-page"},NS={key:0,class:"cart-empty"},OS={key:1},MS={class:"cart-items"},kS=["src","alt"],LS={class:"item-details"},FS=["onClick"],US={class:"cart-summary"},BS={__name:"Cart",setup(t){const e=ec(),n=le(function(){return e.cart.reduce(function(r,s){return r+s.price},0)});return(r,s)=>(qe(),Je("div",DS,[s[2]||(s[2]=X("h1",null,"我的購物車",-1)),et(e).cart.length===0?(qe(),Je("div",NS,[...s[0]||(s[0]=[X("p",null,"您的購物車是空的，快去逛逛吧！",-1)])])):(qe(),Je("div",OS,[X("div",MS,[(qe(!0),Je(kt,null,Ss(et(e).cart,i=>(qe(),Je("div",{key:i.firestoreId,class:"cart-item"},[X("img",{src:i.image,alt:i.name,class:"item-image"},null,8,kS),X("div",LS,[X("h3",null,ft(i.name),1),X("p",null,"NT$ "+ft(i.price),1)]),X("button",{onClick:a=>et(e).removeFromCart(i.firestoreId),class:"remove-btn"},"移除",8,FS)]))),128))]),X("div",US,[X("h2",null,"總計: NT$ "+ft(n.value),1),s[1]||(s[1]=X("button",{class:"checkout-btn"},"前往結帳",-1))])]))]))}},jS=Yo(BS,[["__scopeId","data-v-14901e50"]]),$S=[{path:"/",name:"Home",component:lS},{path:"/product/:id",name:"ProductDetail",component:bS},{path:"/login",name:"Login",component:xS},{path:"/cart",name:"Cart",component:jS}],qS=Yv({history:Rv(),routes:$S}),Nc=Wy(hE),HS=Zv();Nc.use(HS);Nc.use(qS);Nc.mount("#app");
