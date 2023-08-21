var G=Object.defineProperty;var J=(e,t,n)=>t in e?G(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var C=(e,t,n)=>(J(e,typeof t!="symbol"?t+"":t,n),n);import{n as x,r as E,l as j,k as B,m as K,p as k,q as Q,v as U,w as X,x as Y,y as z,z as Z,A as ee,B as te}from"./scheduler.35d2bb6c.js";const O=typeof window<"u";let ne=O?()=>window.performance.now():()=>Date.now(),D=O?e=>requestAnimationFrame(e):x;const g=new Set;function q(e){g.forEach(t=>{t.c(e)||(g.delete(t),t.f())}),g.size!==0&&D(q)}function ie(e){let t;return g.size===0&&D(q),{promise:new Promise(n=>{g.add(t={c:e,f:n})}),abort(){g.delete(t)}}}let A=!1;function re(){A=!0}function se(){A=!1}function ae(e,t,n,i){for(;e<t;){const r=e+(t-e>>1);n(r)<=i?e=r+1:t=r}return e}function le(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const s=[];for(let a=0;a<t.length;a++){const u=t[a];u.claim_order!==void 0&&s.push(u)}t=s}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let r=0;for(let s=0;s<t.length;s++){const a=t[s].claim_order,u=(r>0&&t[n[r]].claim_order<=a?r+1:ae(1,r,_=>t[n[_]].claim_order,a))-1;i[s]=n[u]+1;const f=u+1;n[f]=s,r=Math.max(f,r)}const o=[],l=[];let c=t.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(o.push(t[s-1]);c>=s;c--)l.push(t[c]);c--}for(;c>=0;c--)l.push(t[c]);o.reverse(),l.sort((s,a)=>s.claim_order-a.claim_order);for(let s=0,a=0;s<l.length;s++){for(;a<o.length&&l[s].claim_order>=o[a].claim_order;)a++;const u=a<o.length?o[a]:null;e.insertBefore(l[s],u)}}function oe(e,t){e.appendChild(t)}function I(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function ce(e){const t=H("style");return t.textContent="/* empty */",fe(I(e),t),t.sheet}function fe(e,t){return oe(e.head||e,t),t.sheet}function ue(e,t){if(A){for(le(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function De(e,t,n){A&&!n?ue(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function T(e){e.parentNode&&e.parentNode.removeChild(e)}function Pe(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function H(e){return document.createElement(e)}function _e(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function P(e){return document.createTextNode(e)}function Re(){return P(" ")}function ke(){return P("")}function ze(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function de(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Le(e,t){for(const n in t)de(e,n,t[n])}function Me(e){return e.dataset.svelteH}function me(e){return Array.from(e.childNodes)}function he(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function F(e,t,n,i,r=!1){he(e);const o=(()=>{for(let l=e.claim_info.last_index;l<e.length;l++){const c=e[l];if(t(c)){const s=n(c);return s===void 0?e.splice(l,1):e[l]=s,r||(e.claim_info.last_index=l),c}}for(let l=e.claim_info.last_index-1;l>=0;l--){const c=e[l];if(t(c)){const s=n(c);return s===void 0?e.splice(l,1):e[l]=s,r?s===void 0&&e.claim_info.last_index--:e.claim_info.last_index=l,c}}return i()})();return o.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,o}function V(e,t,n,i){return F(e,r=>r.nodeName===t,r=>{const o=[];for(let l=0;l<r.attributes.length;l++){const c=r.attributes[l];n[c.name]||o.push(c.name)}o.forEach(l=>r.removeAttribute(l))},()=>i(t))}function Oe(e,t,n){return V(e,t,n,H)}function qe(e,t,n){return V(e,t,n,_e)}function pe(e,t){return F(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>P(t),!0)}function Ie(e){return pe(e," ")}function Te(e,t){t=""+t,e.data!==t&&(e.data=t)}function He(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function $e(e,t,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:i})}function Fe(e,t){return new e(t)}const N=new Map;let b=0;function ye(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function ge(e,t){const n={stylesheet:ce(t),rules:{}};return N.set(e,n),n}function we(e,t,n,i,r,o,l,c=0){const s=16.666/i;let a=`{
`;for(let h=0;h<=1;h+=s){const y=t+(n-t)*o(h);a+=h*100+`%{${l(y,1-y)}}
`}const u=a+`100% {${l(n,1-n)}}
}`,f=`__svelte_${ye(u)}_${c}`,_=I(e),{stylesheet:d,rules:m}=N.get(_)||ge(_,e);m[f]||(m[f]=!0,d.insertRule(`@keyframes ${f} ${u}`,d.cssRules.length));const $=e.style.animation||"";return e.style.animation=`${$?`${$}, `:""}${f} ${i}ms linear ${r}ms 1 both`,b+=1,f}function L(e,t){const n=(e.style.animation||"").split(", "),i=n.filter(t?o=>o.indexOf(t)<0:o=>o.indexOf("__svelte")===-1),r=n.length-i.length;r&&(e.style.animation=i.join(", "),b-=r,b||xe())}function xe(){D(()=>{b||(N.forEach(e=>{const{ownerNode:t}=e.stylesheet;t&&T(t)}),N.clear())})}let w;function ve(){return w||(w=Promise.resolve(),w.then(()=>{w=null})),w}function M(e,t,n){e.dispatchEvent($e(`${t?"intro":"outro"}${n}`))}const v=new Set;let p;function Ve(){p={r:0,c:[],p}}function We(){p.r||E(p.c),p=p.p}function Ne(e,t){e&&e.i&&(v.delete(e),e.i(t))}function Ge(e,t,n,i){if(e&&e.o){if(v.has(e))return;v.add(e),p.c.push(()=>{v.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}const be={duration:0};function Je(e,t,n){const i={direction:"in"};let r=t(e,n,i),o=!1,l,c,s=0;function a(){l&&L(e,l)}function u(){const{delay:_=0,duration:d=300,easing:m=K,tick:$=x,css:h}=r||be;h&&(l=we(e,0,1,d,_,m,h,s++)),$(0,1);const y=ne()+_,W=y+d;c&&c.abort(),o=!0,B(()=>M(e,!0,"start")),c=ie(S=>{if(o){if(S>=W)return $(1,0),M(e,!0,"end"),a(),o=!1;if(S>=y){const R=m((S-y)/d);$(R,1-R)}}return o})}let f=!1;return{start(){f||(f=!0,L(e),j(r)?(r=r(i),ve().then(u)):u())},invalidate(){f=!1},end(){o&&(a(),o=!1)}}}function Ke(e){e&&e.c()}function Qe(e,t){e&&e.l(t)}function Ee(e,t,n){const{fragment:i,after_update:r}=e.$$;i&&i.m(t,n),B(()=>{const o=e.$$.on_mount.map(Z).filter(j);e.$$.on_destroy?e.$$.on_destroy.push(...o):E(o),e.$$.on_mount=[]}),r.forEach(B)}function Ae(e,t){const n=e.$$;n.fragment!==null&&(X(n.after_update),E(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Se(e,t){e.$$.dirty[0]===-1&&(ee.push(e),te(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Ue(e,t,n,i,r,o,l,c=[-1]){const s=Y;z(e);const a=e.$$={fragment:null,ctx:[],props:o,update:x,not_equal:r,bound:k(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(s?s.$$.context:[])),callbacks:k(),dirty:c,skip_bound:!1,root:t.target||s.$$.root};l&&l(a.root);let u=!1;if(a.ctx=n?n(e,t.props||{},(f,_,...d)=>{const m=d.length?d[0]:_;return a.ctx&&r(a.ctx[f],a.ctx[f]=m)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](m),u&&Se(e,f)),_}):[],a.update(),u=!0,E(a.before_update),a.fragment=i?i(a.ctx):!1,t.target){if(t.hydrate){re();const f=me(t.target);a.fragment&&a.fragment.l(f),f.forEach(T)}else a.fragment&&a.fragment.c();t.intro&&Ne(e.$$.fragment),Ee(e,t.target,t.anchor),se(),Q()}z(s)}class Xe{constructor(){C(this,"$$");C(this,"$$set")}$destroy(){Ae(this,1),this.$destroy=x}$on(t,n){if(!j(n))return x;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!U(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Ce="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ce);export{Le as A,Pe as B,ze as C,Je as D,Me as E,Xe as S,De as a,We as b,Ie as c,Ne as d,ke as e,T as f,H as g,Oe as h,Ue as i,me as j,de as k,He as l,P as m,pe as n,Te as o,Ve as p,Fe as q,Ke as r,Re as s,Ge as t,Qe as u,Ee as v,Ae as w,ue as x,_e as y,qe as z};
