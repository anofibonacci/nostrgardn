import { t as j } from "../chunks/config.0a5a2d5c.js";
import {
  S as L,
  i as M,
  g as o,
  m as P,
  s as E,
  h,
  j as u,
  n as T,
  f as n,
  c as b,
  E as A,
  k as p,
  a as c,
  x as d,
} from "../chunks/index.4caa21f6.js";
import { s as S, n as m } from "../chunks/scheduler.2bcde0a4.js";

import {
  S as L,
  i as M,
  g as o,
  m as P,
  s as E,
  h,
  j as u,
  n as T,
  f as n,
  c as b,
  E as A,
  k as p,
  a as c,
  x as d,
} from "../chunks/index.4caa21f6.js";
import { t as j } from "../chunks/config.0a5a2d5c.js";
function k(H) {
  let t,
    i,
    r,
    x = j + "",
    f,
    v,
    a,
    g = "<i>California, USA</i>",
    _,
    s,
    w = `Digging holes, planting seeds, and watering so others may view our garden in a
  perpetual state of awe.`;
  return {
    c() {
      (t = o("nav")),
        (i = o("a")),
        (r = o("b")),
        (f = P(x)),
        (v = E()),
        (a = o("h1")),
        (a.innerHTML = g),
        (_ = E()),
        (s = o("p")),
        (s.textContent = w),
        this.h();
    },
    l(e) {
      t = h(e, "NAV", {});
      var l = u(t);
      i = h(l, "A", { href: !0, class: !0 });
      var C = u(i);
      r = h(C, "B", {});
      var y = u(r);
      (f = T(y, x)),
        y.forEach(n),
        C.forEach(n),
        l.forEach(n),
        (v = b(e)),
        (a = h(e, "H1", { class: !0, ["data-svelte-h"]: !0 })),
        A(a) !== "svelte-1ucwr6" && (a.innerHTML = g),
        (_ = b(e)),
        (s = h(e, "P", { class: !0, ["data-svelte-h"]: !0 })),
        A(s) !== "svelte-95h0wg" && (s.textContent = w),
        this.h();
    },
    h() {
      p(i, "href", "/"),
        p(i, "class", "title svelte-1hvh50w"),
        p(a, "class", "svelte-1hvh50w"),
        p(s, "class", "svelte-1hvh50w");
    },
    m(e, l) {
      c(e, t, l),
        d(t, i),
        d(i, r),
        d(r, f),
        c(e, v, l),
        c(e, a, l),
        c(e, _, l),
        c(e, s, l);
    },
    p: m,
    i: m,
    o: m,
    d(e) {
      e && (n(t), n(v), n(a), n(_), n(s));
    },
  };
}
class N extends L {
  constructor(t) {
    super(), M(this, t, null, k, S, {});
  }
}
export { N as component };
