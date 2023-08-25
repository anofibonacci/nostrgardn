import{s as w,n as j,c as A,d as N,u as O,g as D,e as F,f as G,h as V,i as U,j as fe,k as Y}from"../chunks/scheduler.2b238406.js";import{S as W,i as q,g as $,m as B,h as b,j as k,n as P,f as h,k as E,a as y,x as p,y as ne,e as z,z as le,A as H,d as g,t as v,B as _e,r as T,u as M,v as C,w as I,C as me,p as se,b as oe,D as Z,s as J,c as K}from"../chunks/index.d987417c.js";import{t as de}from"../chunks/config.0a5a2d5c.js";import{w as he}from"../chunks/index.84afc186.js";import{e as Q}from"../chunks/each.e59479a4.js";function L(o,e){const s={},n={},l={$$scope:1};let t=o.length;for(;t--;){const r=o[t],a=e[t];if(a){for(const _ in r)_ in a||(n[_]=1);for(const _ in a)l[_]||(s[_]=a[_],l[_]=1);o[t]=a}else for(const _ in r)l[_]=1}for(const r in n)r in s||(s[r]=void 0);return s}function re(o){return typeof o=="object"&&o!==null?o:{}}const ge=!0;async function ve({url:o}){return{url:o.pathname}}const nt=Object.freeze(Object.defineProperty({__proto__:null,load:ve,prerender:ge},Symbol.toStringTag,{value:"Module"}));function ke(o){let e,s,n,l,t,r=de+"",a,_,c=new Date().getFullYear()+"",u;return{c(){e=$("footer"),s=$("center"),n=$("p"),l=B("developed at "),t=$("b"),a=B(r),_=B(" © "),u=B(c),this.h()},l(m){e=b(m,"FOOTER",{class:!0});var i=k(e);s=b(i,"CENTER",{});var f=k(s);n=b(f,"P",{class:!0});var d=k(n);l=P(d,"developed at "),t=b(d,"B",{});var S=k(t);a=P(S,r),S.forEach(h),_=P(d," © "),u=P(d,c),d.forEach(h),f.forEach(h),i.forEach(h),this.h()},h(){E(n,"class","svelte-gsrux1"),E(e,"class","svelte-gsrux1")},m(m,i){y(m,e,i),p(e,s),p(s,n),p(n,l),p(n,t),p(t,a),p(n,_),p(n,u)},p:j,i:j,o:j,d(m){m&&h(e)}}}class pe extends W{constructor(e){super(),q(this,e,null,ke,w,{})}}const $e=localStorage.getItem("color-scheme"),ae=he($e??"dark");function be(){ae.update(o=>{const e=o==="dark"?"light":"dark";return document.documentElement.setAttribute("color-scheme",e),localStorage.setItem("color-scheme",e),e})}const X={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};function x(o,e,s){const n=o.slice();return n[10]=e[s][0],n[11]=e[s][1],n}function R(o){let e,s=[o[11]],n={};for(let l=0;l<s.length;l+=1)n=N(n,s[l]);return{c(){e=ne(o[10]),this.h()},l(l){e=le(l,o[10],{}),k(e).forEach(h),this.h()},h(){H(e,n)},m(l,t){y(l,e,t)},p(l,t){H(e,n=L(s,[t&32&&l[11]]))},d(l){l&&h(e)}}}function ee(o){let e=o[10],s,n=o[10]&&R(o);return{c(){n&&n.c(),s=z()},l(l){n&&n.l(l),s=z()},m(l,t){n&&n.m(l,t),y(l,s,t)},p(l,t){l[10]?e?w(e,l[10])?(n.d(1),n=R(l),e=l[10],n.c(),n.m(s.parentNode,s)):n.p(l,t):(n=R(l),e=l[10],n.c(),n.m(s.parentNode,s)):e&&(n.d(1),n=null,e=l[10])},d(l){l&&h(s),n&&n.d(l)}}}function ye(o){let e,s,n,l,t,r=Q(o[5]),a=[];for(let i=0;i<r.length;i+=1)a[i]=ee(x(o,r,i));const _=o[9].default,c=A(_,o,o[8],null);let u=[X,o[6],{width:o[2]},{height:o[2]},{stroke:o[1]},{"stroke-width":n=o[4]?Number(o[3])*24/Number(o[2]):o[3]},{class:l=`lucide-icon lucide lucide-${o[0]} ${o[7].class??""}`}],m={};for(let i=0;i<u.length;i+=1)m=N(m,u[i]);return{c(){e=ne("svg");for(let i=0;i<a.length;i+=1)a[i].c();s=z(),c&&c.c(),this.h()},l(i){e=le(i,"svg",{width:!0,height:!0,stroke:!0,"stroke-width":!0,class:!0});var f=k(e);for(let d=0;d<a.length;d+=1)a[d].l(f);s=z(),c&&c.l(f),f.forEach(h),this.h()},h(){H(e,m)},m(i,f){y(i,e,f);for(let d=0;d<a.length;d+=1)a[d]&&a[d].m(e,null);p(e,s),c&&c.m(e,null),t=!0},p(i,[f]){if(f&32){r=Q(i[5]);let d;for(d=0;d<r.length;d+=1){const S=x(i,r,d);a[d]?a[d].p(S,f):(a[d]=ee(S),a[d].c(),a[d].m(e,s))}for(;d<a.length;d+=1)a[d].d(1);a.length=r.length}c&&c.p&&(!t||f&256)&&O(c,_,i,i[8],t?F(_,i[8],f,null):D(i[8]),null),H(e,m=L(u,[X,f&64&&i[6],(!t||f&4)&&{width:i[2]},(!t||f&4)&&{height:i[2]},(!t||f&2)&&{stroke:i[1]},(!t||f&28&&n!==(n=i[4]?Number(i[3])*24/Number(i[2]):i[3]))&&{"stroke-width":n},(!t||f&129&&l!==(l=`lucide-icon lucide lucide-${i[0]} ${i[7].class??""}`))&&{class:l}]))},i(i){t||(g(c,i),t=!0)},o(i){v(c,i),t=!1},d(i){i&&h(e),_e(a,i),c&&c.d(i)}}}function Ne(o,e,s){const n=["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"];let l=G(e,n),{$$slots:t={},$$scope:r}=e,{name:a}=e,{color:_="currentColor"}=e,{size:c=24}=e,{strokeWidth:u=2}=e,{absoluteStrokeWidth:m=!1}=e,{iconNode:i}=e;return o.$$set=f=>{s(7,e=N(N({},e),V(f))),s(6,l=G(e,n)),"name"in f&&s(0,a=f.name),"color"in f&&s(1,_=f.color),"size"in f&&s(2,c=f.size),"strokeWidth"in f&&s(3,u=f.strokeWidth),"absoluteStrokeWidth"in f&&s(4,m=f.absoluteStrokeWidth),"iconNode"in f&&s(5,i=f.iconNode),"$$scope"in f&&s(8,r=f.$$scope)},e=V(e),[a,_,c,u,m,i,l,e,r,t]}class Ee extends W{constructor(e){super(),q(this,e,Ne,ye,w,{name:0,color:1,size:2,strokeWidth:3,absoluteStrokeWidth:4,iconNode:5})}}const ie=Ee;function we(o){let e;const s=o[2].default,n=A(s,o,o[3],null);return{c(){n&&n.c()},l(l){n&&n.l(l)},m(l,t){n&&n.m(l,t),e=!0},p(l,t){n&&n.p&&(!e||t&8)&&O(n,s,l,l[3],e?F(s,l[3],t,null):D(l[3]),null)},i(l){e||(g(n,l),e=!0)},o(l){v(n,l),e=!1},d(l){n&&n.d(l)}}}function Se(o){let e,s;const n=[{name:"flower"},o[1],{iconNode:o[0]}];let l={$$slots:{default:[we]},$$scope:{ctx:o}};for(let t=0;t<n.length;t+=1)l=N(l,n[t]);return e=new ie({props:l}),{c(){T(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,r){C(e,t,r),s=!0},p(t,[r]){const a=r&3?L(n,[n[0],r&2&&re(t[1]),r&1&&{iconNode:t[0]}]):{};r&8&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){s||(g(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){I(e,t)}}}function Te(o,e,s){let{$$slots:n={},$$scope:l}=e;const t=[["path",{d:"M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V9m-4.5 3a4.5 4.5 0 1 0 4.5 4.5M7.5 12H9m7.5 0a4.5 4.5 0 1 1-4.5 4.5m4.5-4.5H15m-3 4.5V15"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"m8 16 1.5-1.5"}],["path",{d:"M14.5 9.5 16 8"}],["path",{d:"m8 8 1.5 1.5"}],["path",{d:"M14.5 14.5 16 16"}]];return o.$$set=r=>{s(1,e=N(N({},e),V(r))),"$$scope"in r&&s(3,l=r.$$scope)},e=V(e),[t,e,n,l]}class Me extends W{constructor(e){super(),q(this,e,Te,Se,w,{})}}const Ce=Me;function Ie(o){let e;const s=o[2].default,n=A(s,o,o[3],null);return{c(){n&&n.c()},l(l){n&&n.l(l)},m(l,t){n&&n.m(l,t),e=!0},p(l,t){n&&n.p&&(!e||t&8)&&O(n,s,l,l[3],e?F(s,l[3],t,null):D(l[3]),null)},i(l){e||(g(n,l),e=!0)},o(l){v(n,l),e=!1},d(l){n&&n.d(l)}}}function We(o){let e,s;const n=[{name:"leaf"},o[1],{iconNode:o[0]}];let l={$$slots:{default:[Ie]},$$scope:{ctx:o}};for(let t=0;t<n.length;t+=1)l=N(l,n[t]);return e=new ie({props:l}),{c(){T(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,r){C(e,t,r),s=!0},p(t,[r]){const a=r&3?L(n,[n[0],r&2&&re(t[1]),r&1&&{iconNode:t[0]}]):{};r&8&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){s||(g(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){I(e,t)}}}function qe(o,e,s){let{$$slots:n={},$$scope:l}=e;const t=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];return o.$$set=r=>{s(1,e=N(N({},e),V(r))),"$$scope"in r&&s(3,l=r.$$scope)},e=V(e),[t,e,n,l]}class Ve extends W{constructor(e){super(),q(this,e,qe,We,w,{})}}const ze=Ve;function je(o){return o<.5?4*o*o*o:.5*Math.pow(2*o-2,3)+1}function Ae(o){const e=o-1;return e*e*e+1}function Oe(o,{delay:e=0,duration:s=400,easing:n=je,amount:l=5,opacity:t=0}={}){const r=getComputedStyle(o),a=+r.opacity,_=r.filter==="none"?"":r.filter,c=a*(1-t),[u,m]=U(l);return{delay:e,duration:s,easing:n,css:(i,f)=>`opacity: ${a-c*f}; filter: ${_} blur(${f*u}${m});`}}function ce(o,{delay:e=0,duration:s=400,easing:n=Ae,x:l=0,y:t=0,opacity:r=0}={}){const a=getComputedStyle(o),_=+a.opacity,c=a.transform==="none"?"":a.transform,u=_*(1-r),[m,i]=U(l),[f,d]=U(t);return{delay:e,duration:s,easing:n,css:(S,ue)=>`
			transform: ${c} translate(${(1-S)*m}${i}, ${(1-S)*f}${d});
			opacity: ${_-u*ue}`}}function De(o){let e,s,n,l;return s=new ze({}),{c(){e=$("div"),T(s.$$.fragment),this.h()},l(t){e=b(t,"DIV",{class:!0});var r=k(e);M(s.$$.fragment,r),r.forEach(h),this.h()},h(){E(e,"class","svelte-65lgqq")},m(t,r){y(t,e,r),C(s,e,null),l=!0},i(t){l||(g(s.$$.fragment,t),t&&(n||Y(()=>{n=Z(e,ce,{y:-10}),n.start()})),l=!0)},o(t){v(s.$$.fragment,t),l=!1},d(t){t&&h(e),I(s)}}}function Fe(o){let e,s,n,l;return s=new Ce({}),{c(){e=$("div"),T(s.$$.fragment),this.h()},l(t){e=b(t,"DIV",{class:!0});var r=k(e);M(s.$$.fragment,r),r.forEach(h),this.h()},h(){E(e,"class","svelte-65lgqq")},m(t,r){y(t,e,r),C(s,e,null),l=!0},i(t){l||(g(s.$$.fragment,t),t&&(n||Y(()=>{n=Z(e,ce,{y:10}),n.start()})),l=!0)},o(t){v(s.$$.fragment,t),l=!1},d(t){t&&h(e),I(s)}}}function Be(o){let e,s,n,l,t,r;const a=[Fe,De],_=[];function c(u,m){return u[0]==="dark"?0:1}return s=c(o),n=_[s]=a[s](o),{c(){e=$("button"),n.c(),this.h()},l(u){e=b(u,"BUTTON",{"aria-label":!0,class:!0});var m=k(e);n.l(m),m.forEach(h),this.h()},h(){E(e,"aria-label","Toggle theme"),E(e,"class","svelte-65lgqq")},m(u,m){y(u,e,m),_[s].m(e,null),l=!0,t||(r=me(e,"click",be),t=!0)},p(u,[m]){let i=s;s=c(u),s!==i&&(se(),v(_[i],1,1,()=>{_[i]=null}),oe(),n=_[s],n||(n=_[s]=a[s](u),n.c()),g(n,1),n.m(e,null))},i(u){l||(g(n),l=!0)},o(u){v(n),l=!1},d(u){u&&h(e),_[s].d(),t=!1,r()}}}function Pe(o,e,s){let n;return fe(o,ae,l=>s(0,n=l)),[n]}class He extends W{constructor(e){super(),q(this,e,Pe,Be,w,{})}}function Le(o){let e,s,n,l;return n=new He({}),{c(){e=$("center"),s=$("nav"),T(n.$$.fragment),this.h()},l(t){e=b(t,"CENTER",{});var r=k(e);s=b(r,"NAV",{class:!0});var a=k(s);M(n.$$.fragment,a),a.forEach(h),r.forEach(h),this.h()},h(){E(s,"class","svelte-e853hf")},m(t,r){y(t,e,r),p(e,s),C(n,s,null),l=!0},p:j,i(t){l||(g(n.$$.fragment,t),l=!0)},o(t){v(n.$$.fragment,t),l=!1},d(t){t&&h(e),I(n)}}}class Re extends W{constructor(e){super(),q(this,e,null,Le,w,{})}}function te(o){let e,s,n;const l=o[2].default,t=A(l,o,o[1],null);return{c(){e=$("div"),t&&t.c(),this.h()},l(r){e=b(r,"DIV",{class:!0});var a=k(e);t&&t.l(a),a.forEach(h),this.h()},h(){E(e,"class","transition svelte-vcdv4c")},m(r,a){y(r,e,a),t&&t.m(e,null),n=!0},p(r,a){t&&t.p&&(!n||a&2)&&O(t,l,r,r[1],n?F(l,r[1],a,null):D(r[1]),null)},i(r){n||(g(t,r),r&&(s||Y(()=>{s=Z(e,Oe,{amount:10,duration:500}),s.start()})),n=!0)},o(r){v(t,r),n=!1},d(r){r&&h(e),t&&t.d(r)}}}function Ue(o){let e=o[0],s,n,l=te(o);return{c(){l.c(),s=z()},l(t){l.l(t),s=z()},m(t,r){l.m(t,r),y(t,s,r),n=!0},p(t,[r]){r&1&&w(e,e=t[0])?(se(),v(l,1,1,j),oe(),l=te(t),l.c(),g(l,1),l.m(s.parentNode,s)):l.p(t,r)},i(t){n||(g(l),n=!0)},o(t){v(l),n=!1},d(t){t&&h(s),l.d(t)}}}function Ye(o,e,s){let{$$slots:n={},$$scope:l}=e,{url:t}=e;return o.$$set=r=>{"url"in r&&s(0,t=r.url),"$$scope"in r&&s(1,l=r.$$scope)},[t,l,n]}class Ze extends W{constructor(e){super(),q(this,e,Ye,Ue,w,{url:0})}}function Ge(o){let e;const s=o[1].default,n=A(s,o,o[2],null);return{c(){n&&n.c()},l(l){n&&n.l(l)},m(l,t){n&&n.m(l,t),e=!0},p(l,t){n&&n.p&&(!e||t&4)&&O(n,s,l,l[2],e?F(s,l[2],t,null):D(l[2]),null)},i(l){e||(g(n,l),e=!0)},o(l){v(n,l),e=!1},d(l){n&&n.d(l)}}}function Je(o){let e,s,n,l,t,r,a,_;return s=new Re({}),t=new Ze({props:{url:o[0].url,$$slots:{default:[Ge]},$$scope:{ctx:o}}}),a=new pe({}),{c(){e=$("div"),T(s.$$.fragment),n=J(),l=$("main"),T(t.$$.fragment),r=J(),T(a.$$.fragment),this.h()},l(c){e=b(c,"DIV",{class:!0});var u=k(e);M(s.$$.fragment,u),n=K(u),l=b(u,"MAIN",{class:!0});var m=k(l);M(t.$$.fragment,m),m.forEach(h),r=K(u),M(a.$$.fragment,u),u.forEach(h),this.h()},h(){E(l,"class","svelte-1sq3us8"),E(e,"class","layout svelte-1sq3us8")},m(c,u){y(c,e,u),C(s,e,null),p(e,n),p(e,l),C(t,l,null),p(e,r),C(a,e,null),_=!0},p(c,[u]){const m={};u&1&&(m.url=c[0].url),u&4&&(m.$$scope={dirty:u,ctx:c}),t.$set(m)},i(c){_||(g(s.$$.fragment,c),g(t.$$.fragment,c),g(a.$$.fragment,c),_=!0)},o(c){v(s.$$.fragment,c),v(t.$$.fragment,c),v(a.$$.fragment,c),_=!1},d(c){c&&h(e),I(s),I(t),I(a)}}}function Ke(o,e,s){let{$$slots:n={},$$scope:l}=e,{data:t}=e;return o.$$set=r=>{"data"in r&&s(0,t=r.data),"$$scope"in r&&s(2,l=r.$$scope)},[t,n,l]}class lt extends W{constructor(e){super(),q(this,e,Ke,Je,w,{data:0})}}export{lt as component,nt as universal};
