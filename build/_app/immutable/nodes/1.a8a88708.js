import {
  S as y,
  i as S,
  g as b,
  m as _,
  h as f,
  j as v,
  n as m,
  f as d,
  k as j,
  a as q,
  x as u,
  o as $,
} from "../chunks/index.4caa21f6.js";
import { s as x, n as g, j as E } from "../chunks/scheduler.2bcde0a4.js";
import { s as k } from "../chunks/singletons.4cb47995.js";

import {
  S as y,
  i as S,
  g as b,
  m as _,
  h as f,
  j as v,
  n as m,
  f as d,
  k as j,
  a as q,
  x as u,
  o as $,
} from "../chunks/index.4caa21f6.js";
import { s as k } from "../chunks/singletons.4cb47995.js";
const C = () => {
    const e = k;
    return {
      page: { subscribe: e.page.subscribe },
      navigating: { subscribe: e.navigating.subscribe },
      updated: e.updated,
    };
  },
  D = {
    subscribe(e) {
      return C().page.subscribe(e);
    },
  };
function H(e) {
  var h;
  let s,
    t,
    r = e[0].status + "",
    i,
    p,
    c = ((h = e[0].error) == null ? void 0 : h.message) + "",
    l;
  return {
    c() {
      (s = b("div")),
        (t = b("h1")),
        (i = _(r)),
        (p = _(": ")),
        (l = _(c)),
        this.h();
    },
    l(a) {
      s = f(a, "DIV", { class: !0 });
      var o = v(s);
      t = f(o, "H1", {});
      var n = v(t);
      (i = m(n, r)),
        (p = m(n, ": ")),
        (l = m(n, c)),
        n.forEach(d),
        o.forEach(d),
        this.h();
    },
    h() {
      j(s, "class", "error svelte-1ooxq19");
    },
    m(a, o) {
      q(a, s, o), u(s, t), u(t, i), u(t, p), u(t, l);
    },
    p(a, [o]) {
      var n;
      o & 1 && r !== (r = a[0].status + "") && $(i, r),
        o & 1 &&
          c !== (c = ((n = a[0].error) == null ? void 0 : n.message) + "") &&
          $(l, c);
    },
    i: g,
    o: g,
    d(a) {
      a && d(s);
    },
  };
}
function I(e, s, t) {
  let r;
  return E(e, D, (i) => t(0, (r = i))), [r];
}
let A = class extends y {
  constructor(s) {
    super(), S(this, s, I, H, x, {});
  }
};
export { A as component };
