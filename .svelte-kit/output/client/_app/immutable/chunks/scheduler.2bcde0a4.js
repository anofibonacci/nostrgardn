function k() {}
const S = (t) => t;
function w(t, n) {
  for (const e in n) t[e] = n[e];
  return t;
}
function A(t) {
  return (
    !!t &&
    (typeof t == "object" || typeof t == "function") &&
    typeof t.then == "function"
  );
}
function j(t) {
  return t();
}
function B() {
  return Object.create(null);
}
function E(t) {
  t.forEach(j);
}
function C(t) {
  return typeof t == "function";
}
function D(t, n) {
  return t != t
    ? n == n
    : t !== n || (t && typeof t == "object") || typeof t == "function";
}
let f;
function P(t, n) {
  return f || (f = document.createElement("a")), (f.href = n), t === f.href;
}
function U(t) {
  return Object.keys(t).length === 0;
}
function q(t, ...n) {
  if (t == null) {
    for (const o of n) o(void 0);
    return k;
  }
  const e = t.subscribe(...n);
  return e.unsubscribe ? () => e.unsubscribe() : e;
}
function G(t, n, e) {
  t.$$.on_destroy.push(q(n, e));
}
function H(t, n, e, o) {
  if (t) {
    const r = m(t, n, e, o);
    return t[0](r);
  }
}
function m(t, n, e, o) {
  return t[1] && o ? w(e.ctx.slice(), t[1](o(n))) : e.ctx;
}
function I(t, n, e, o) {
  if (t[2] && o) {
    const r = t[2](o(e));
    if (n.dirty === void 0) return r;
    if (typeof r == "object") {
      const a = [],
        _ = Math.max(n.dirty.length, r.length);
      for (let u = 0; u < _; u += 1) a[u] = n.dirty[u] | r[u];
      return a;
    }
    return n.dirty | r;
  }
  return n.dirty;
}
function J(t, n, e, o, r, a) {
  if (r) {
    const _ = m(n, e, o, a);
    t.p(_, r);
  }
}
function K(t) {
  if (t.ctx.length > 32) {
    const n = [],
      e = t.ctx.length / 32;
    for (let o = 0; o < e; o++) n[o] = -1;
    return n;
  }
  return -1;
}
function L(t) {
  const n = {};
  for (const e in t) e[0] !== "$" && (n[e] = t[e]);
  return n;
}
function N(t, n) {
  const e = {};
  n = new Set(n);
  for (const o in t) !n.has(o) && o[0] !== "$" && (e[o] = t[o]);
  return e;
}
function Q(t) {
  const n = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return n ? [parseFloat(n[1]), n[2] || "px"] : [t, "px"];
}
let l;
function h(t) {
  l = t;
}
function y() {
  if (!l) throw new Error("Function called outside component initialization");
  return l;
}
function R(t) {
  y().$$.on_mount.push(t);
}
function T(t) {
  y().$$.after_update.push(t);
}
const i = [],
  b = [];
let s = [];
const g = [],
  x = Promise.resolve();
let p = !1;
function O() {
  p || ((p = !0), x.then(F));
}
function V() {
  return O(), x;
}
function z(t) {
  s.push(t);
}
const d = new Set();
let c = 0;
function F() {
  if (c !== 0) return;
  const t = l;
  do {
    try {
      for (; c < i.length; ) {
        const n = i[c];
        c++, h(n), M(n.$$);
      }
    } catch (n) {
      throw ((i.length = 0), (c = 0), n);
    }
    for (h(null), i.length = 0, c = 0; b.length; ) b.pop()();
    for (let n = 0; n < s.length; n += 1) {
      const e = s[n];
      d.has(e) || (d.add(e), e());
    }
    s.length = 0;
  } while (i.length);
  for (; g.length; ) g.pop()();
  (p = !1), d.clear(), h(t);
}
function M(t) {
  if (t.fragment !== null) {
    t.update(), E(t.before_update);
    const n = t.dirty;
    (t.dirty = [-1]),
      t.fragment && t.fragment.p(t.ctx, n),
      t.after_update.forEach(z);
  }
}
function W(t) {
  const n = [],
    e = [];
  s.forEach((o) => (t.indexOf(o) === -1 ? n.push(o) : e.push(o))),
    e.forEach((o) => o()),
    (s = n);
}
export {
  W as A,
  l as B,
  j as C,
  i as D,
  O as E,
  T as a,
  b,
  Q as c,
  H as d,
  w as e,
  I as f,
  K as g,
  N as h,
  L as i,
  G as j,
  z as k,
  A as l,
  y as m,
  k as n,
  R as o,
  h as p,
  F as q,
  P as r,
  D as s,
  V as t,
  J as u,
  E as v,
  C as w,
  S as x,
  B as y,
  U as z,
};
