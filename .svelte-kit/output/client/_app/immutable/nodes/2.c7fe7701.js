import { e as Jt } from "../chunks/each.e59479a4.js";
import { w as ts } from "../chunks/index.1f5880ea.js";
import {
  p as Ni,
  t as At,
  b as Mi,
  d as Xe,
  S as ji,
  i as Pi,
  e as qe,
  a as Ke,
  f as ce,
  B as Hi,
  g as pe,
  m as br,
  s as Qe,
  h as ye,
  j as Ye,
  n as _r,
  c as et,
  k as _e,
  x as J,
  o as Yo,
  E as wr,
  r as Jo,
  u as Xo,
  v as Qo,
  w as es,
} from "../chunks/index.4caa21f6.js";
import {
  l as Go,
  m as Wo,
  p as jt,
  q as Vo,
  s as Li,
  n as Q,
  r as kn,
  j as Zo,
} from "../chunks/scheduler.2bcde0a4.js";

var Do = Object.defineProperty;
var Ko = (t, e, r) =>
  e in t
    ? Do(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r })
    : (t[e] = r);
var M = (t, e, r) => (Ko(t, typeof e != "symbol" ? e + "" : e, r), r);
import {
  l as Go,
  m as Wo,
  p as jt,
  q as Vo,
  s as Li,
  n as Q,
  r as kn,
  j as Zo,
} from "../chunks/scheduler.2bcde0a4.js";
import {
  p as Ni,
  t as At,
  b as Mi,
  d as Xe,
  S as ji,
  i as Pi,
  e as qe,
  a as Ke,
  f as ce,
  B as Hi,
  g as pe,
  m as br,
  s as Qe,
  h as ye,
  j as Ye,
  n as _r,
  c as et,
  k as _e,
  x as J,
  o as Yo,
  E as wr,
  r as Jo,
  u as Xo,
  v as Qo,
  w as es,
} from "../chunks/index.4caa21f6.js";
import { e as Jt } from "../chunks/each.e59479a4.js";
import { w as ts } from "../chunks/index.1f5880ea.js";
function rs(t, e) {
  const r = (e.token = {});
  function n(i, s, o, c) {
    if (e.token !== r) return;
    e.resolved = c;
    let a = e.ctx;
    o !== void 0 && ((a = a.slice()), (a[o] = c));
    const l = i && (e.current = i)(a);
    let f = !1;
    e.block &&
      (e.blocks
        ? e.blocks.forEach((u, h) => {
            h !== s &&
              u &&
              (Ni(),
              At(u, 1, 1, () => {
                e.blocks[h] === u && (e.blocks[h] = null);
              }),
              Mi());
          })
        : e.block.d(1),
      l.c(),
      Xe(l, 1),
      l.m(e.mount(), e.anchor),
      (f = !0)),
      (e.block = l),
      e.blocks && (e.blocks[s] = l),
      f && Vo();
  }
  if (Go(t)) {
    const i = Wo();
    if (
      (t.then(
        (s) => {
          jt(i), n(e.then, 1, e.value, s), jt(null);
        },
        (s) => {
          if ((jt(i), n(e.catch, 2, e.error, s), jt(null), !e.hasCatch))
            throw s;
        }
      ),
      e.current !== e.pending)
    )
      return n(e.pending, 0), !0;
  } else {
    if (e.current !== e.then) return n(e.then, 1, e.value, t), !0;
    e.resolved = t;
  }
}
function ns(t, e, r) {
  const n = e.slice(),
    { resolved: i } = t;
  t.current === t.then && (n[t.value] = i),
    t.current === t.catch && (n[t.error] = i),
    t.block.p(n, r);
}
var O =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Qr(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
var Ur = { exports: {} },
  mr,
  Sn;
function is() {
  if (Sn) return mr;
  Sn = 1;
  var t = 1e3,
    e = t * 60,
    r = e * 60,
    n = r * 24,
    i = n * 7,
    s = n * 365.25;
  mr = function (f, u) {
    u = u || {};
    var h = typeof f;
    if (h === "string" && f.length > 0) return o(f);
    if (h === "number" && isFinite(f)) return u.long ? a(f) : c(f);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" +
        JSON.stringify(f)
    );
  };
  function o(f) {
    if (((f = String(f)), !(f.length > 100))) {
      var u =
        /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
          f
        );
      if (u) {
        var h = parseFloat(u[1]),
          d = (u[2] || "ms").toLowerCase();
        switch (d) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return h * s;
          case "weeks":
          case "week":
          case "w":
            return h * i;
          case "days":
          case "day":
          case "d":
            return h * n;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return h * r;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return h * e;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return h * t;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return h;
          default:
            return;
        }
      }
    }
  }
  function c(f) {
    var u = Math.abs(f);
    return u >= n
      ? Math.round(f / n) + "d"
      : u >= r
      ? Math.round(f / r) + "h"
      : u >= e
      ? Math.round(f / e) + "m"
      : u >= t
      ? Math.round(f / t) + "s"
      : f + "ms";
  }
  function a(f) {
    var u = Math.abs(f);
    return u >= n
      ? l(f, u, n, "day")
      : u >= r
      ? l(f, u, r, "hour")
      : u >= e
      ? l(f, u, e, "minute")
      : u >= t
      ? l(f, u, t, "second")
      : f + " ms";
  }
  function l(f, u, h, d) {
    var p = u >= h * 1.5;
    return Math.round(f / h) + " " + d + (p ? "s" : "");
  }
  return mr;
}
function os(t) {
  (r.debug = r),
    (r.default = r),
    (r.coerce = a),
    (r.disable = s),
    (r.enable = i),
    (r.enabled = o),
    (r.humanize = is()),
    (r.destroy = l),
    Object.keys(t).forEach((f) => {
      r[f] = t[f];
    }),
    (r.names = []),
    (r.skips = []),
    (r.formatters = {});
  function e(f) {
    let u = 0;
    for (let h = 0; h < f.length; h++)
      (u = (u << 5) - u + f.charCodeAt(h)), (u |= 0);
    return r.colors[Math.abs(u) % r.colors.length];
  }
  r.selectColor = e;
  function r(f) {
    let u,
      h = null,
      d,
      p;
    function y(...v) {
      if (!y.enabled) return;
      const w = y,
        C = Number(new Date()),
        x = C - (u || C);
      (w.diff = x),
        (w.prev = u),
        (w.curr = C),
        (u = C),
        (v[0] = r.coerce(v[0])),
        typeof v[0] != "string" && v.unshift("%O");
      let B = 0;
      (v[0] = v[0].replace(/%([a-zA-Z%])/g, (A, q) => {
        if (A === "%%") return "%";
        B++;
        const T = r.formatters[q];
        if (typeof T == "function") {
          const j = v[B];
          (A = T.call(w, j)), v.splice(B, 1), B--;
        }
        return A;
      })),
        r.formatArgs.call(w, v),
        (w.log || r.log).apply(w, v);
    }
    return (
      (y.namespace = f),
      (y.useColors = r.useColors()),
      (y.color = r.selectColor(f)),
      (y.extend = n),
      (y.destroy = r.destroy),
      Object.defineProperty(y, "enabled", {
        enumerable: !0,
        configurable: !1,
        get: () =>
          h !== null
            ? h
            : (d !== r.namespaces && ((d = r.namespaces), (p = r.enabled(f))),
              p),
        set: (v) => {
          h = v;
        },
      }),
      typeof r.init == "function" && r.init(y),
      y
    );
  }
  function n(f, u) {
    const h = r(this.namespace + (typeof u > "u" ? ":" : u) + f);
    return (h.log = this.log), h;
  }
  function i(f) {
    r.save(f), (r.namespaces = f), (r.names = []), (r.skips = []);
    let u;
    const h = (typeof f == "string" ? f : "").split(/[\s,]+/),
      d = h.length;
    for (u = 0; u < d; u++)
      h[u] &&
        ((f = h[u].replace(/\*/g, ".*?")),
        f[0] === "-"
          ? r.skips.push(new RegExp("^" + f.slice(1) + "$"))
          : r.names.push(new RegExp("^" + f + "$")));
  }
  function s() {
    const f = [...r.names.map(c), ...r.skips.map(c).map((u) => "-" + u)].join(
      ","
    );
    return r.enable(""), f;
  }
  function o(f) {
    if (f[f.length - 1] === "*") return !0;
    let u, h;
    for (u = 0, h = r.skips.length; u < h; u++)
      if (r.skips[u].test(f)) return !1;
    for (u = 0, h = r.names.length; u < h; u++)
      if (r.names[u].test(f)) return !0;
    return !1;
  }
  function c(f) {
    return f
      .toString()
      .substring(2, f.toString().length - 2)
      .replace(/\.\*\?$/, "*");
  }
  function a(f) {
    return f instanceof Error ? f.stack || f.message : f;
  }
  function l() {
    console.warn(
      "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
    );
  }
  return r.enable(r.load()), r;
}
var ss = os;
(function (t, e) {
  (e.formatArgs = n),
    (e.save = i),
    (e.load = s),
    (e.useColors = r),
    (e.storage = o()),
    (e.destroy = (() => {
      let a = !1;
      return () => {
        a ||
          ((a = !0),
          console.warn(
            "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
          ));
      };
    })()),
    (e.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33",
    ]);
  function r() {
    return typeof window < "u" &&
      window.process &&
      (window.process.type === "renderer" || window.process.__nwjs)
      ? !0
      : typeof navigator < "u" &&
        navigator.userAgent &&
        navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
      ? !1
      : (typeof document < "u" &&
          document.documentElement &&
          document.documentElement.style &&
          document.documentElement.style.WebkitAppearance) ||
        (typeof window < "u" &&
          window.console &&
          (window.console.firebug ||
            (window.console.exception && window.console.table))) ||
        (typeof navigator < "u" &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
          parseInt(RegExp.$1, 10) >= 31) ||
        (typeof navigator < "u" &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
  }
  function n(a) {
    if (
      ((a[0] =
        (this.useColors ? "%c" : "") +
        this.namespace +
        (this.useColors ? " %c" : " ") +
        a[0] +
        (this.useColors ? "%c " : " ") +
        "+" +
        t.exports.humanize(this.diff)),
      !this.useColors)
    )
      return;
    const l = "color: " + this.color;
    a.splice(1, 0, l, "color: inherit");
    let f = 0,
      u = 0;
    a[0].replace(/%[a-zA-Z%]/g, (h) => {
      h !== "%%" && (f++, h === "%c" && (u = f));
    }),
      a.splice(u, 0, l);
  }
  e.log = console.debug || console.log || (() => {});
  function i(a) {
    try {
      a ? e.storage.setItem("debug", a) : e.storage.removeItem("debug");
    } catch {}
  }
  function s() {
    let a;
    try {
      a = e.storage.getItem("debug");
    } catch {}
    return !a && typeof process < "u" && "env" in process && (a = {}.DEBUG), a;
  }
  function o() {
    try {
      return localStorage;
    } catch {}
  }
  t.exports = ss(e);
  const { formatters: c } = t.exports;
  c.j = function (a) {
    try {
      return JSON.stringify(a);
    } catch (l) {
      return "[UnexpectedJSONParseError]: " + l.message;
    }
  };
})(Ur, Ur.exports);
var as = Ur.exports;
const Ui = Qr(as);
var zi = { exports: {} };
(function (t) {
  var e = Object.prototype.hasOwnProperty,
    r = "~";
  function n() {}
  Object.create &&
    ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1));
  function i(a, l, f) {
    (this.fn = a), (this.context = l), (this.once = f || !1);
  }
  function s(a, l, f, u, h) {
    if (typeof f != "function")
      throw new TypeError("The listener must be a function");
    var d = new i(f, u || a, h),
      p = r ? r + l : l;
    return (
      a._events[p]
        ? a._events[p].fn
          ? (a._events[p] = [a._events[p], d])
          : a._events[p].push(d)
        : ((a._events[p] = d), a._eventsCount++),
      a
    );
  }
  function o(a, l) {
    --a._eventsCount === 0 ? (a._events = new n()) : delete a._events[l];
  }
  function c() {
    (this._events = new n()), (this._eventsCount = 0);
  }
  (c.prototype.eventNames = function () {
    var l = [],
      f,
      u;
    if (this._eventsCount === 0) return l;
    for (u in (f = this._events)) e.call(f, u) && l.push(r ? u.slice(1) : u);
    return Object.getOwnPropertySymbols
      ? l.concat(Object.getOwnPropertySymbols(f))
      : l;
  }),
    (c.prototype.listeners = function (l) {
      var f = r ? r + l : l,
        u = this._events[f];
      if (!u) return [];
      if (u.fn) return [u.fn];
      for (var h = 0, d = u.length, p = new Array(d); h < d; h++)
        p[h] = u[h].fn;
      return p;
    }),
    (c.prototype.listenerCount = function (l) {
      var f = r ? r + l : l,
        u = this._events[f];
      return u ? (u.fn ? 1 : u.length) : 0;
    }),
    (c.prototype.emit = function (l, f, u, h, d, p) {
      var y = r ? r + l : l;
      if (!this._events[y]) return !1;
      var v = this._events[y],
        w = arguments.length,
        C,
        x;
      if (v.fn) {
        switch ((v.once && this.removeListener(l, v.fn, void 0, !0), w)) {
          case 1:
            return v.fn.call(v.context), !0;
          case 2:
            return v.fn.call(v.context, f), !0;
          case 3:
            return v.fn.call(v.context, f, u), !0;
          case 4:
            return v.fn.call(v.context, f, u, h), !0;
          case 5:
            return v.fn.call(v.context, f, u, h, d), !0;
          case 6:
            return v.fn.call(v.context, f, u, h, d, p), !0;
        }
        for (x = 1, C = new Array(w - 1); x < w; x++) C[x - 1] = arguments[x];
        v.fn.apply(v.context, C);
      } else {
        var B = v.length,
          $;
        for (x = 0; x < B; x++)
          switch (
            (v[x].once && this.removeListener(l, v[x].fn, void 0, !0), w)
          ) {
            case 1:
              v[x].fn.call(v[x].context);
              break;
            case 2:
              v[x].fn.call(v[x].context, f);
              break;
            case 3:
              v[x].fn.call(v[x].context, f, u);
              break;
            case 4:
              v[x].fn.call(v[x].context, f, u, h);
              break;
            default:
              if (!C)
                for ($ = 1, C = new Array(w - 1); $ < w; $++)
                  C[$ - 1] = arguments[$];
              v[x].fn.apply(v[x].context, C);
          }
      }
      return !0;
    }),
    (c.prototype.on = function (l, f, u) {
      return s(this, l, f, u, !1);
    }),
    (c.prototype.once = function (l, f, u) {
      return s(this, l, f, u, !0);
    }),
    (c.prototype.removeListener = function (l, f, u, h) {
      var d = r ? r + l : l;
      if (!this._events[d]) return this;
      if (!f) return o(this, d), this;
      var p = this._events[d];
      if (p.fn)
        p.fn === f && (!h || p.once) && (!u || p.context === u) && o(this, d);
      else {
        for (var y = 0, v = [], w = p.length; y < w; y++)
          (p[y].fn !== f || (h && !p[y].once) || (u && p[y].context !== u)) &&
            v.push(p[y]);
        v.length ? (this._events[d] = v.length === 1 ? v[0] : v) : o(this, d);
      }
      return this;
    }),
    (c.prototype.removeAllListeners = function (l) {
      var f;
      return (
        l
          ? ((f = r ? r + l : l), this._events[f] && o(this, f))
          : ((this._events = new n()), (this._eventsCount = 0)),
        this
      );
    }),
    (c.prototype.off = c.prototype.removeListener),
    (c.prototype.addListener = c.prototype.on),
    (c.prefixed = r),
    (c.EventEmitter = c),
    (t.exports = c);
})(zi);
var cs = zi.exports;
const nt = Qr(cs);
function zr(t) {
  if (!Number.isSafeInteger(t) || t < 0)
    throw new Error(`Wrong positive integer: ${t}`);
}
function us(t) {
  if (typeof t != "boolean") throw new Error(`Expected boolean, not ${t}`);
}
function Ne(t, ...e) {
  if (!(t instanceof Uint8Array)) throw new Error("Expected Uint8Array");
  if (e.length > 0 && !e.includes(t.length))
    throw new Error(
      `Expected Uint8Array of length ${e}, not of length=${t.length}`
    );
}
function ls(t) {
  if (typeof t != "function" || typeof t.create != "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  zr(t.outputLen), zr(t.blockLen);
}
function fs(t, e = !0) {
  if (t.destroyed) throw new Error("Hash instance has been destroyed");
  if (e && t.finished) throw new Error("Hash#digest() has already been called");
}
function hs(t, e) {
  Ne(t);
  const r = e.outputLen;
  if (t.length < r)
    throw new Error(
      `digestInto() expects output buffer of length at least ${r}`
    );
}
const ue = {
    number: zr,
    bool: us,
    bytes: Ne,
    hash: ls,
    exists: fs,
    output: hs,
  },
  Er =
    typeof globalThis == "object" && "crypto" in globalThis
      ? globalThis.crypto
      : void 0;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const en =
    (t) => t instanceof Uint8Array,
  He = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength),
  be = (t, e) => (t << (32 - e)) | (t >>> e),
  ds = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!ds) throw new Error("Non little-endian hardware is not supported");
const ps = Array.from({ length: 256 }, (t, e) =>
  e.toString(16).padStart(2, "0")
);
function ae(t) {
  if (!en(t)) throw new Error("Uint8Array expected");
  let e = "";
  for (let r = 0; r < t.length; r++) e += ps[t[r]];
  return e;
}
function Ue(t) {
  if (typeof t != "string")
    throw new Error("hex string expected, got " + typeof t);
  const e = t.length;
  if (e % 2)
    throw new Error(
      "padded hex string expected, got unpadded hex of length " + e
    );
  const r = new Uint8Array(e / 2);
  for (let n = 0; n < r.length; n++) {
    const i = n * 2,
      s = t.slice(i, i + 2),
      o = Number.parseInt(s, 16);
    if (Number.isNaN(o) || o < 0) throw new Error("Invalid byte sequence");
    r[n] = o;
  }
  return r;
}
function Fi(t) {
  if (typeof t != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof t}`);
  return new Uint8Array(new TextEncoder().encode(t));
}
function Ot(t) {
  if ((typeof t == "string" && (t = Fi(t)), !en(t)))
    throw new Error(`expected Uint8Array, got ${typeof t}`);
  return t;
}
function Je(...t) {
  const e = new Uint8Array(t.reduce((n, i) => n + i.length, 0));
  let r = 0;
  return (
    t.forEach((n) => {
      if (!en(n)) throw new Error("Uint8Array expected");
      e.set(n, r), (r += n.length);
    }),
    e
  );
}
class Di {
  clone() {
    return this._cloneInto();
  }
}
const ys = (t) =>
  Object.prototype.toString.call(t) === "[object Object]" &&
  t.constructor === Object;
function gs(t, e) {
  if (e !== void 0 && (typeof e != "object" || !ys(e)))
    throw new Error("Options should be object or undefined");
  return Object.assign(t, e);
}
function Ge(t) {
  const e = (n) => t().update(Ot(n)).digest(),
    r = t();
  return (
    (e.outputLen = r.outputLen),
    (e.blockLen = r.blockLen),
    (e.create = () => t()),
    e
  );
}
function nr(t = 32) {
  if (Er && typeof Er.getRandomValues == "function")
    return Er.getRandomValues(new Uint8Array(t));
  throw new Error("crypto.getRandomValues must be defined");
}
function vs(t, e, r, n) {
  if (typeof t.setBigUint64 == "function") return t.setBigUint64(e, r, n);
  const i = BigInt(32),
    s = BigInt(4294967295),
    o = Number((r >> i) & s),
    c = Number(r & s),
    a = n ? 4 : 0,
    l = n ? 0 : 4;
  t.setUint32(e + a, o, n), t.setUint32(e + l, c, n);
}
class tn extends Di {
  constructor(e, r, n, i) {
    super(),
      (this.blockLen = e),
      (this.outputLen = r),
      (this.padOffset = n),
      (this.isLE = i),
      (this.finished = !1),
      (this.length = 0),
      (this.pos = 0),
      (this.destroyed = !1),
      (this.buffer = new Uint8Array(e)),
      (this.view = He(this.buffer));
  }
  update(e) {
    ue.exists(this);
    const { view: r, buffer: n, blockLen: i } = this;
    e = Ot(e);
    const s = e.length;
    for (let o = 0; o < s; ) {
      const c = Math.min(i - this.pos, s - o);
      if (c === i) {
        const a = He(e);
        for (; i <= s - o; o += i) this.process(a, o);
        continue;
      }
      n.set(e.subarray(o, o + c), this.pos),
        (this.pos += c),
        (o += c),
        this.pos === i && (this.process(r, 0), (this.pos = 0));
    }
    return (this.length += e.length), this.roundClean(), this;
  }
  digestInto(e) {
    ue.exists(this), ue.output(e, this), (this.finished = !0);
    const { buffer: r, view: n, blockLen: i, isLE: s } = this;
    let { pos: o } = this;
    (r[o++] = 128),
      this.buffer.subarray(o).fill(0),
      this.padOffset > i - o && (this.process(n, 0), (o = 0));
    for (let u = o; u < i; u++) r[u] = 0;
    vs(n, i - 8, BigInt(this.length * 8), s), this.process(n, 0);
    const c = He(e),
      a = this.outputLen;
    if (a % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
    const l = a / 4,
      f = this.get();
    if (l > f.length) throw new Error("_sha2: outputLen bigger than state");
    for (let u = 0; u < l; u++) c.setUint32(4 * u, f[u], s);
  }
  digest() {
    const { buffer: e, outputLen: r } = this;
    this.digestInto(e);
    const n = e.slice(0, r);
    return this.destroy(), n;
  }
  _cloneInto(e) {
    e || (e = new this.constructor()), e.set(...this.get());
    const {
      blockLen: r,
      buffer: n,
      length: i,
      finished: s,
      destroyed: o,
      pos: c,
    } = this;
    return (
      (e.length = i),
      (e.pos = c),
      (e.finished = s),
      (e.destroyed = o),
      i % r && e.buffer.set(n),
      e
    );
  }
}
const bs = (t, e, r) => (t & e) ^ (~t & r),
  _s = (t, e, r) => (t & e) ^ (t & r) ^ (e & r),
  ws = new Uint32Array([
    1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
    2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
    1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
    264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
    2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
    113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
    1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
    3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
    1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
    2428436474, 2756734187, 3204031479, 3329325298,
  ]),
  Oe = new Uint32Array([
    1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924,
    528734635, 1541459225,
  ]),
  Ie = new Uint32Array(64);
class Ki extends tn {
  constructor() {
    super(64, 32, 8, !1),
      (this.A = Oe[0] | 0),
      (this.B = Oe[1] | 0),
      (this.C = Oe[2] | 0),
      (this.D = Oe[3] | 0),
      (this.E = Oe[4] | 0),
      (this.F = Oe[5] | 0),
      (this.G = Oe[6] | 0),
      (this.H = Oe[7] | 0);
  }
  get() {
    const { A: e, B: r, C: n, D: i, E: s, F: o, G: c, H: a } = this;
    return [e, r, n, i, s, o, c, a];
  }
  set(e, r, n, i, s, o, c, a) {
    (this.A = e | 0),
      (this.B = r | 0),
      (this.C = n | 0),
      (this.D = i | 0),
      (this.E = s | 0),
      (this.F = o | 0),
      (this.G = c | 0),
      (this.H = a | 0);
  }
  process(e, r) {
    for (let u = 0; u < 16; u++, r += 4) Ie[u] = e.getUint32(r, !1);
    for (let u = 16; u < 64; u++) {
      const h = Ie[u - 15],
        d = Ie[u - 2],
        p = be(h, 7) ^ be(h, 18) ^ (h >>> 3),
        y = be(d, 17) ^ be(d, 19) ^ (d >>> 10);
      Ie[u] = (y + Ie[u - 7] + p + Ie[u - 16]) | 0;
    }
    let { A: n, B: i, C: s, D: o, E: c, F: a, G: l, H: f } = this;
    for (let u = 0; u < 64; u++) {
      const h = be(c, 6) ^ be(c, 11) ^ be(c, 25),
        d = (f + h + bs(c, a, l) + ws[u] + Ie[u]) | 0,
        y = ((be(n, 2) ^ be(n, 13) ^ be(n, 22)) + _s(n, i, s)) | 0;
      (f = l),
        (l = a),
        (a = c),
        (c = (o + d) | 0),
        (o = s),
        (s = i),
        (i = n),
        (n = (d + y) | 0);
    }
    (n = (n + this.A) | 0),
      (i = (i + this.B) | 0),
      (s = (s + this.C) | 0),
      (o = (o + this.D) | 0),
      (c = (c + this.E) | 0),
      (a = (a + this.F) | 0),
      (l = (l + this.G) | 0),
      (f = (f + this.H) | 0),
      this.set(n, i, s, o, c, a, l, f);
  }
  roundClean() {
    Ie.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
class ms extends Ki {
  constructor() {
    super(),
      (this.A = -1056596264),
      (this.B = 914150663),
      (this.C = 812702999),
      (this.D = -150054599),
      (this.E = -4191439),
      (this.F = 1750603025),
      (this.G = 1694076839),
      (this.H = -1090891868),
      (this.outputLen = 28);
  }
}
const me = Ge(() => new Ki());
Ge(() => new ms());
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const Gi =
    BigInt(0),
  ir = BigInt(1),
  Es = BigInt(2),
  or = (t) => t instanceof Uint8Array,
  xs = Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, "0"));
function tt(t) {
  if (!or(t)) throw new Error("Uint8Array expected");
  let e = "";
  for (let r = 0; r < t.length; r++) e += xs[t[r]];
  return e;
}
function Wi(t) {
  const e = t.toString(16);
  return e.length & 1 ? `0${e}` : e;
}
function rn(t) {
  if (typeof t != "string")
    throw new Error("hex string expected, got " + typeof t);
  return BigInt(t === "" ? "0" : `0x${t}`);
}
function rt(t) {
  if (typeof t != "string")
    throw new Error("hex string expected, got " + typeof t);
  const e = t.length;
  if (e % 2)
    throw new Error(
      "padded hex string expected, got unpadded hex of length " + e
    );
  const r = new Uint8Array(e / 2);
  for (let n = 0; n < r.length; n++) {
    const i = n * 2,
      s = t.slice(i, i + 2),
      o = Number.parseInt(s, 16);
    if (Number.isNaN(o) || o < 0) throw new Error("Invalid byte sequence");
    r[n] = o;
  }
  return r;
}
function se(t) {
  return rn(tt(t));
}
function nn(t) {
  if (!or(t)) throw new Error("Uint8Array expected");
  return rn(tt(Uint8Array.from(t).reverse()));
}
function Be(t, e) {
  return rt(t.toString(16).padStart(e * 2, "0"));
}
function Vi(t, e) {
  return Be(t, e).reverse();
}
function ks(t) {
  return rt(Wi(t));
}
function X(t, e, r) {
  let n;
  if (typeof e == "string")
    try {
      n = rt(e);
    } catch (s) {
      throw new Error(`${t} must be valid hex string, got "${e}". Cause: ${s}`);
    }
  else if (or(e)) n = Uint8Array.from(e);
  else throw new Error(`${t} must be hex string or Uint8Array`);
  const i = n.length;
  if (typeof r == "number" && i !== r)
    throw new Error(`${t} expected ${r} bytes, got ${i}`);
  return n;
}
function ze(...t) {
  const e = new Uint8Array(t.reduce((n, i) => n + i.length, 0));
  let r = 0;
  return (
    t.forEach((n) => {
      if (!or(n)) throw new Error("Uint8Array expected");
      e.set(n, r), (r += n.length);
    }),
    e
  );
}
function Ss(t, e) {
  if (t.length !== e.length) return !1;
  for (let r = 0; r < t.length; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function Cs(t) {
  if (typeof t != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof t}`);
  return new Uint8Array(new TextEncoder().encode(t));
}
function As(t) {
  let e;
  for (e = 0; t > Gi; t >>= ir, e += 1);
  return e;
}
function Os(t, e) {
  return (t >> BigInt(e)) & ir;
}
const Is = (t, e, r) => t | ((r ? ir : Gi) << BigInt(e)),
  on = (t) => (Es << BigInt(t - 1)) - ir,
  xr = (t) => new Uint8Array(t),
  Cn = (t) => Uint8Array.from(t);
function Zi(t, e, r) {
  if (typeof t != "number" || t < 2)
    throw new Error("hashLen must be a number");
  if (typeof e != "number" || e < 2)
    throw new Error("qByteLen must be a number");
  if (typeof r != "function") throw new Error("hmacFn must be a function");
  let n = xr(t),
    i = xr(t),
    s = 0;
  const o = () => {
      n.fill(1), i.fill(0), (s = 0);
    },
    c = (...u) => r(i, n, ...u),
    a = (u = xr()) => {
      (i = c(Cn([0]), u)),
        (n = c()),
        u.length !== 0 && ((i = c(Cn([1]), u)), (n = c()));
    },
    l = () => {
      if (s++ >= 1e3) throw new Error("drbg: tried 1000 values");
      let u = 0;
      const h = [];
      for (; u < e; ) {
        n = c();
        const d = n.slice();
        h.push(d), (u += n.length);
      }
      return ze(...h);
    };
  return (u, h) => {
    o(), a(u);
    let d;
    for (; !(d = h(l())); ) a();
    return o(), d;
  };
}
const $s = {
  bigint: (t) => typeof t == "bigint",
  function: (t) => typeof t == "function",
  boolean: (t) => typeof t == "boolean",
  string: (t) => typeof t == "string",
  isSafeInteger: (t) => Number.isSafeInteger(t),
  array: (t) => Array.isArray(t),
  field: (t, e) => e.Fp.isValid(t),
  hash: (t) => typeof t == "function" && Number.isSafeInteger(t.outputLen),
};
function Bt(t, e, r = {}) {
  const n = (i, s, o) => {
    const c = $s[s];
    if (typeof c != "function")
      throw new Error(`Invalid validator "${s}", expected function`);
    const a = t[i];
    if (!(o && a === void 0) && !c(a, t))
      throw new Error(
        `Invalid param ${String(i)}=${a} (${typeof a}), expected ${s}`
      );
  };
  for (const [i, s] of Object.entries(e)) n(i, s, !1);
  for (const [i, s] of Object.entries(r)) n(i, s, !0);
  return t;
}
const Rs = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      bitGet: Os,
      bitLen: As,
      bitMask: on,
      bitSet: Is,
      bytesToHex: tt,
      bytesToNumberBE: se,
      bytesToNumberLE: nn,
      concatBytes: ze,
      createHmacDrbg: Zi,
      ensureBytes: X,
      equalBytes: Ss,
      hexToBytes: rt,
      hexToNumber: rn,
      numberToBytesBE: Be,
      numberToBytesLE: Vi,
      numberToHexUnpadded: Wi,
      numberToVarBytesBE: ks,
      utf8ToBytes: Cs,
      validateObject: Bt,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const W =
    BigInt(0),
  K = BigInt(1),
  Me = BigInt(2),
  Bs = BigInt(3),
  Fr = BigInt(4),
  An = BigInt(5),
  On = BigInt(8);
BigInt(9);
BigInt(16);
function G(t, e) {
  const r = t % e;
  return r >= W ? r : e + r;
}
function qs(t, e, r) {
  if (r <= W || e < W) throw new Error("Expected power/modulo > 0");
  if (r === K) return W;
  let n = K;
  for (; e > W; ) e & K && (n = (n * t) % r), (t = (t * t) % r), (e >>= K);
  return n;
}
function le(t, e, r) {
  let n = t;
  for (; e-- > W; ) (n *= n), (n %= r);
  return n;
}
function Dr(t, e) {
  if (t === W || e <= W)
    throw new Error(`invert: expected positive integers, got n=${t} mod=${e}`);
  let r = G(t, e),
    n = e,
    i = W,
    s = K;
  for (; r !== W; ) {
    const c = n / r,
      a = n % r,
      l = i - s * c;
    (n = r), (r = a), (i = s), (s = l);
  }
  if (n !== K) throw new Error("invert: does not exist");
  return G(i, e);
}
function Ts(t) {
  const e = (t - K) / Me;
  let r, n, i;
  for (r = t - K, n = 0; r % Me === W; r /= Me, n++);
  for (i = Me; i < t && qs(i, e, t) !== t - K; i++);
  if (n === 1) {
    const o = (t + K) / Fr;
    return function (a, l) {
      const f = a.pow(l, o);
      if (!a.eql(a.sqr(f), l)) throw new Error("Cannot find square root");
      return f;
    };
  }
  const s = (r + K) / Me;
  return function (c, a) {
    if (c.pow(a, e) === c.neg(c.ONE))
      throw new Error("Cannot find square root");
    let l = n,
      f = c.pow(c.mul(c.ONE, i), r),
      u = c.pow(a, s),
      h = c.pow(a, r);
    for (; !c.eql(h, c.ONE); ) {
      if (c.eql(h, c.ZERO)) return c.ZERO;
      let d = 1;
      for (let y = c.sqr(h); d < l && !c.eql(y, c.ONE); d++) y = c.sqr(y);
      const p = c.pow(f, K << BigInt(l - d - 1));
      (f = c.sqr(p)), (u = c.mul(u, p)), (h = c.mul(h, f)), (l = d);
    }
    return u;
  };
}
function Ls(t) {
  if (t % Fr === Bs) {
    const e = (t + K) / Fr;
    return function (n, i) {
      const s = n.pow(i, e);
      if (!n.eql(n.sqr(s), i)) throw new Error("Cannot find square root");
      return s;
    };
  }
  if (t % On === An) {
    const e = (t - An) / On;
    return function (n, i) {
      const s = n.mul(i, Me),
        o = n.pow(s, e),
        c = n.mul(i, o),
        a = n.mul(n.mul(c, Me), o),
        l = n.mul(c, n.sub(a, n.ONE));
      if (!n.eql(n.sqr(l), i)) throw new Error("Cannot find square root");
      return l;
    };
  }
  return Ts(t);
}
const Ns = [
  "create",
  "isValid",
  "is0",
  "neg",
  "inv",
  "sqrt",
  "sqr",
  "eql",
  "add",
  "sub",
  "mul",
  "pow",
  "div",
  "addN",
  "subN",
  "mulN",
  "sqrN",
];
function Ms(t) {
  const e = {
      ORDER: "bigint",
      MASK: "bigint",
      BYTES: "isSafeInteger",
      BITS: "isSafeInteger",
    },
    r = Ns.reduce((n, i) => ((n[i] = "function"), n), e);
  return Bt(t, r);
}
function js(t, e, r) {
  if (r < W) throw new Error("Expected power > 0");
  if (r === W) return t.ONE;
  if (r === K) return e;
  let n = t.ONE,
    i = e;
  for (; r > W; ) r & K && (n = t.mul(n, i)), (i = t.sqr(i)), (r >>= K);
  return n;
}
function Ps(t, e) {
  const r = new Array(e.length),
    n = e.reduce(
      (s, o, c) => (t.is0(o) ? s : ((r[c] = s), t.mul(s, o))),
      t.ONE
    ),
    i = t.inv(n);
  return (
    e.reduceRight(
      (s, o, c) => (t.is0(o) ? s : ((r[c] = t.mul(s, r[c])), t.mul(s, o))),
      i
    ),
    r
  );
}
function sn(t, e) {
  const r = e !== void 0 ? e : t.toString(2).length,
    n = Math.ceil(r / 8);
  return { nBitLength: r, nByteLength: n };
}
function Hs(t, e, r = !1, n = {}) {
  if (t <= W) throw new Error(`Expected Fp ORDER > 0, got ${t}`);
  const { nBitLength: i, nByteLength: s } = sn(t, e);
  if (s > 2048)
    throw new Error("Field lengths over 2048 bytes are not supported");
  const o = Ls(t),
    c = Object.freeze({
      ORDER: t,
      BITS: i,
      BYTES: s,
      MASK: on(i),
      ZERO: W,
      ONE: K,
      create: (a) => G(a, t),
      isValid: (a) => {
        if (typeof a != "bigint")
          throw new Error(
            `Invalid field element: expected bigint, got ${typeof a}`
          );
        return W <= a && a < t;
      },
      is0: (a) => a === W,
      isOdd: (a) => (a & K) === K,
      neg: (a) => G(-a, t),
      eql: (a, l) => a === l,
      sqr: (a) => G(a * a, t),
      add: (a, l) => G(a + l, t),
      sub: (a, l) => G(a - l, t),
      mul: (a, l) => G(a * l, t),
      pow: (a, l) => js(c, a, l),
      div: (a, l) => G(a * Dr(l, t), t),
      sqrN: (a) => a * a,
      addN: (a, l) => a + l,
      subN: (a, l) => a - l,
      mulN: (a, l) => a * l,
      inv: (a) => Dr(a, t),
      sqrt: n.sqrt || ((a) => o(c, a)),
      invertBatch: (a) => Ps(c, a),
      cmov: (a, l, f) => (f ? l : a),
      toBytes: (a) => (r ? Vi(a, s) : Be(a, s)),
      fromBytes: (a) => {
        if (a.length !== s)
          throw new Error(`Fp.fromBytes: expected ${s}, got ${a.length}`);
        return r ? nn(a) : se(a);
      },
    });
  return Object.freeze(c);
}
function Us(t, e, r = !1) {
  t = X("privateHash", t);
  const n = t.length,
    i = sn(e).nByteLength + 8;
  if (i < 24 || n < i || n > 1024)
    throw new Error(
      `hashToPrivateScalar: expected ${i}-1024 bytes of input, got ${n}`
    );
  const s = r ? nn(t) : se(t);
  return G(s, e - K) + K;
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const zs =
    BigInt(0),
  kr = BigInt(1);
function Fs(t, e) {
  const r = (i, s) => {
      const o = s.negate();
      return i ? o : s;
    },
    n = (i) => {
      const s = Math.ceil(e / i) + 1,
        o = 2 ** (i - 1);
      return { windows: s, windowSize: o };
    };
  return {
    constTimeNegate: r,
    unsafeLadder(i, s) {
      let o = t.ZERO,
        c = i;
      for (; s > zs; ) s & kr && (o = o.add(c)), (c = c.double()), (s >>= kr);
      return o;
    },
    precomputeWindow(i, s) {
      const { windows: o, windowSize: c } = n(s),
        a = [];
      let l = i,
        f = l;
      for (let u = 0; u < o; u++) {
        (f = l), a.push(f);
        for (let h = 1; h < c; h++) (f = f.add(l)), a.push(f);
        l = f.double();
      }
      return a;
    },
    wNAF(i, s, o) {
      const { windows: c, windowSize: a } = n(i);
      let l = t.ZERO,
        f = t.BASE;
      const u = BigInt(2 ** i - 1),
        h = 2 ** i,
        d = BigInt(i);
      for (let p = 0; p < c; p++) {
        const y = p * a;
        let v = Number(o & u);
        (o >>= d), v > a && ((v -= h), (o += kr));
        const w = y,
          C = y + Math.abs(v) - 1,
          x = p % 2 !== 0,
          B = v < 0;
        v === 0 ? (f = f.add(r(x, s[w]))) : (l = l.add(r(B, s[C])));
      }
      return { p: l, f };
    },
    wNAFCached(i, s, o, c) {
      const a = i._WINDOW_SIZE || 1;
      let l = s.get(i);
      return (
        l || ((l = this.precomputeWindow(i, a)), a !== 1 && s.set(i, c(l))),
        this.wNAF(a, l, o)
      );
    },
  };
}
function Yi(t) {
  return (
    Ms(t.Fp),
    Bt(
      t,
      { n: "bigint", h: "bigint", Gx: "field", Gy: "field" },
      { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }
    ),
    Object.freeze({ ...sn(t.n, t.nBitLength), ...t, p: t.Fp.ORDER })
  );
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ function Ds(
  t
) {
  const e = Yi(t);
  Bt(
    e,
    { a: "field", b: "field" },
    {
      allowedPrivateKeyLengths: "array",
      wrapPrivateKey: "boolean",
      isTorsionFree: "function",
      clearCofactor: "function",
      allowInfinityPoint: "boolean",
      fromBytes: "function",
      toBytes: "function",
    }
  );
  const { endo: r, Fp: n, a: i } = e;
  if (r) {
    if (!n.eql(i, n.ZERO))
      throw new Error(
        "Endomorphism can only be defined for Koblitz curves that have a=0"
      );
    if (
      typeof r != "object" ||
      typeof r.beta != "bigint" ||
      typeof r.splitScalar != "function"
    )
      throw new Error(
        "Expected endomorphism with beta: bigint and splitScalar: function"
      );
  }
  return Object.freeze({ ...e });
}
const { bytesToNumberBE: Ks, hexToBytes: Gs } = Rs,
  Pe = {
    Err: class extends Error {
      constructor(e = "") {
        super(e);
      }
    },
    _parseInt(t) {
      const { Err: e } = Pe;
      if (t.length < 2 || t[0] !== 2)
        throw new e("Invalid signature integer tag");
      const r = t[1],
        n = t.subarray(2, r + 2);
      if (!r || n.length !== r)
        throw new e("Invalid signature integer: wrong length");
      if (n[0] & 128) throw new e("Invalid signature integer: negative");
      if (n[0] === 0 && !(n[1] & 128))
        throw new e("Invalid signature integer: unnecessary leading zero");
      return { d: Ks(n), l: t.subarray(r + 2) };
    },
    toSig(t) {
      const { Err: e } = Pe,
        r = typeof t == "string" ? Gs(t) : t;
      if (!(r instanceof Uint8Array)) throw new Error("ui8a expected");
      let n = r.length;
      if (n < 2 || r[0] != 48) throw new e("Invalid signature tag");
      if (r[1] !== n - 2) throw new e("Invalid signature: incorrect length");
      const { d: i, l: s } = Pe._parseInt(r.subarray(2)),
        { d: o, l: c } = Pe._parseInt(s);
      if (c.length) throw new e("Invalid signature: left bytes after parsing");
      return { r: i, s: o };
    },
    hexFromSig(t) {
      const e = (l) => (Number.parseInt(l[0], 16) & 8 ? "00" + l : l),
        r = (l) => {
          const f = l.toString(16);
          return f.length & 1 ? `0${f}` : f;
        },
        n = e(r(t.s)),
        i = e(r(t.r)),
        s = n.length / 2,
        o = i.length / 2,
        c = r(s),
        a = r(o);
      return `30${r(o + s + 4)}02${a}${i}02${c}${n}`;
    },
  },
  ke = BigInt(0),
  fe = BigInt(1);
BigInt(2);
const In = BigInt(3);
BigInt(4);
function Ws(t) {
  const e = Ds(t),
    { Fp: r } = e,
    n =
      e.toBytes ||
      ((p, y, v) => {
        const w = y.toAffine();
        return ze(Uint8Array.from([4]), r.toBytes(w.x), r.toBytes(w.y));
      }),
    i =
      e.fromBytes ||
      ((p) => {
        const y = p.subarray(1),
          v = r.fromBytes(y.subarray(0, r.BYTES)),
          w = r.fromBytes(y.subarray(r.BYTES, 2 * r.BYTES));
        return { x: v, y: w };
      });
  function s(p) {
    const { a: y, b: v } = e,
      w = r.sqr(p),
      C = r.mul(w, p);
    return r.add(r.add(C, r.mul(p, y)), v);
  }
  if (!r.eql(r.sqr(e.Gy), s(e.Gx)))
    throw new Error("bad generator point: equation left != right");
  function o(p) {
    return typeof p == "bigint" && ke < p && p < e.n;
  }
  function c(p) {
    if (!o(p)) throw new Error("Expected valid bigint: 0 < bigint < curve.n");
  }
  function a(p) {
    const {
      allowedPrivateKeyLengths: y,
      nByteLength: v,
      wrapPrivateKey: w,
      n: C,
    } = e;
    if (y && typeof p != "bigint") {
      if (
        (p instanceof Uint8Array && (p = tt(p)),
        typeof p != "string" || !y.includes(p.length))
      )
        throw new Error("Invalid key");
      p = p.padStart(v * 2, "0");
    }
    let x;
    try {
      x = typeof p == "bigint" ? p : se(X("private key", p, v));
    } catch {
      throw new Error(
        `private key must be ${v} bytes, hex or bigint, not ${typeof p}`
      );
    }
    return w && (x = G(x, C)), c(x), x;
  }
  const l = new Map();
  function f(p) {
    if (!(p instanceof u)) throw new Error("ProjectivePoint expected");
  }
  class u {
    constructor(y, v, w) {
      if (
        ((this.px = y),
        (this.py = v),
        (this.pz = w),
        y == null || !r.isValid(y))
      )
        throw new Error("x required");
      if (v == null || !r.isValid(v)) throw new Error("y required");
      if (w == null || !r.isValid(w)) throw new Error("z required");
    }
    static fromAffine(y) {
      const { x: v, y: w } = y || {};
      if (!y || !r.isValid(v) || !r.isValid(w))
        throw new Error("invalid affine point");
      if (y instanceof u) throw new Error("projective point not allowed");
      const C = (x) => r.eql(x, r.ZERO);
      return C(v) && C(w) ? u.ZERO : new u(v, w, r.ONE);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    static normalizeZ(y) {
      const v = r.invertBatch(y.map((w) => w.pz));
      return y.map((w, C) => w.toAffine(v[C])).map(u.fromAffine);
    }
    static fromHex(y) {
      const v = u.fromAffine(i(X("pointHex", y)));
      return v.assertValidity(), v;
    }
    static fromPrivateKey(y) {
      return u.BASE.multiply(a(y));
    }
    _setWindowSize(y) {
      (this._WINDOW_SIZE = y), l.delete(this);
    }
    assertValidity() {
      if (this.is0()) {
        if (e.allowInfinityPoint) return;
        throw new Error("bad point: ZERO");
      }
      const { x: y, y: v } = this.toAffine();
      if (!r.isValid(y) || !r.isValid(v))
        throw new Error("bad point: x or y not FE");
      const w = r.sqr(v),
        C = s(y);
      if (!r.eql(w, C)) throw new Error("bad point: equation left != right");
      if (!this.isTorsionFree())
        throw new Error("bad point: not in prime-order subgroup");
    }
    hasEvenY() {
      const { y } = this.toAffine();
      if (r.isOdd) return !r.isOdd(y);
      throw new Error("Field doesn't support isOdd");
    }
    equals(y) {
      f(y);
      const { px: v, py: w, pz: C } = this,
        { px: x, py: B, pz: $ } = y,
        A = r.eql(r.mul(v, $), r.mul(x, C)),
        q = r.eql(r.mul(w, $), r.mul(B, C));
      return A && q;
    }
    negate() {
      return new u(this.px, r.neg(this.py), this.pz);
    }
    double() {
      const { a: y, b: v } = e,
        w = r.mul(v, In),
        { px: C, py: x, pz: B } = this;
      let $ = r.ZERO,
        A = r.ZERO,
        q = r.ZERO,
        T = r.mul(C, C),
        j = r.mul(x, x),
        N = r.mul(B, B),
        _ = r.mul(C, x);
      return (
        (_ = r.add(_, _)),
        (q = r.mul(C, B)),
        (q = r.add(q, q)),
        ($ = r.mul(y, q)),
        (A = r.mul(w, N)),
        (A = r.add($, A)),
        ($ = r.sub(j, A)),
        (A = r.add(j, A)),
        (A = r.mul($, A)),
        ($ = r.mul(_, $)),
        (q = r.mul(w, q)),
        (N = r.mul(y, N)),
        (_ = r.sub(T, N)),
        (_ = r.mul(y, _)),
        (_ = r.add(_, q)),
        (q = r.add(T, T)),
        (T = r.add(q, T)),
        (T = r.add(T, N)),
        (T = r.mul(T, _)),
        (A = r.add(A, T)),
        (N = r.mul(x, B)),
        (N = r.add(N, N)),
        (T = r.mul(N, _)),
        ($ = r.sub($, T)),
        (q = r.mul(N, j)),
        (q = r.add(q, q)),
        (q = r.add(q, q)),
        new u($, A, q)
      );
    }
    add(y) {
      f(y);
      const { px: v, py: w, pz: C } = this,
        { px: x, py: B, pz: $ } = y;
      let A = r.ZERO,
        q = r.ZERO,
        T = r.ZERO;
      const j = e.a,
        N = r.mul(e.b, In);
      let _ = r.mul(v, x),
        k = r.mul(w, B),
        m = r.mul(C, $),
        S = r.add(v, w),
        g = r.add(x, B);
      (S = r.mul(S, g)),
        (g = r.add(_, k)),
        (S = r.sub(S, g)),
        (g = r.add(v, C));
      let b = r.add(x, $);
      return (
        (g = r.mul(g, b)),
        (b = r.add(_, m)),
        (g = r.sub(g, b)),
        (b = r.add(w, C)),
        (A = r.add(B, $)),
        (b = r.mul(b, A)),
        (A = r.add(k, m)),
        (b = r.sub(b, A)),
        (T = r.mul(j, g)),
        (A = r.mul(N, m)),
        (T = r.add(A, T)),
        (A = r.sub(k, T)),
        (T = r.add(k, T)),
        (q = r.mul(A, T)),
        (k = r.add(_, _)),
        (k = r.add(k, _)),
        (m = r.mul(j, m)),
        (g = r.mul(N, g)),
        (k = r.add(k, m)),
        (m = r.sub(_, m)),
        (m = r.mul(j, m)),
        (g = r.add(g, m)),
        (_ = r.mul(k, g)),
        (q = r.add(q, _)),
        (_ = r.mul(b, g)),
        (A = r.mul(S, A)),
        (A = r.sub(A, _)),
        (_ = r.mul(S, k)),
        (T = r.mul(b, T)),
        (T = r.add(T, _)),
        new u(A, q, T)
      );
    }
    subtract(y) {
      return this.add(y.negate());
    }
    is0() {
      return this.equals(u.ZERO);
    }
    wNAF(y) {
      return d.wNAFCached(this, l, y, (v) => {
        const w = r.invertBatch(v.map((C) => C.pz));
        return v.map((C, x) => C.toAffine(w[x])).map(u.fromAffine);
      });
    }
    multiplyUnsafe(y) {
      const v = u.ZERO;
      if (y === ke) return v;
      if ((c(y), y === fe)) return this;
      const { endo: w } = e;
      if (!w) return d.unsafeLadder(this, y);
      let { k1neg: C, k1: x, k2neg: B, k2: $ } = w.splitScalar(y),
        A = v,
        q = v,
        T = this;
      for (; x > ke || $ > ke; )
        x & fe && (A = A.add(T)),
          $ & fe && (q = q.add(T)),
          (T = T.double()),
          (x >>= fe),
          ($ >>= fe);
      return (
        C && (A = A.negate()),
        B && (q = q.negate()),
        (q = new u(r.mul(q.px, w.beta), q.py, q.pz)),
        A.add(q)
      );
    }
    multiply(y) {
      c(y);
      let v = y,
        w,
        C;
      const { endo: x } = e;
      if (x) {
        const { k1neg: B, k1: $, k2neg: A, k2: q } = x.splitScalar(v);
        let { p: T, f: j } = this.wNAF($),
          { p: N, f: _ } = this.wNAF(q);
        (T = d.constTimeNegate(B, T)),
          (N = d.constTimeNegate(A, N)),
          (N = new u(r.mul(N.px, x.beta), N.py, N.pz)),
          (w = T.add(N)),
          (C = j.add(_));
      } else {
        const { p: B, f: $ } = this.wNAF(v);
        (w = B), (C = $);
      }
      return u.normalizeZ([w, C])[0];
    }
    multiplyAndAddUnsafe(y, v, w) {
      const C = u.BASE,
        x = ($, A) =>
          A === ke || A === fe || !$.equals(C)
            ? $.multiplyUnsafe(A)
            : $.multiply(A),
        B = x(this, v).add(x(y, w));
      return B.is0() ? void 0 : B;
    }
    toAffine(y) {
      const { px: v, py: w, pz: C } = this,
        x = this.is0();
      y == null && (y = x ? r.ONE : r.inv(C));
      const B = r.mul(v, y),
        $ = r.mul(w, y),
        A = r.mul(C, y);
      if (x) return { x: r.ZERO, y: r.ZERO };
      if (!r.eql(A, r.ONE)) throw new Error("invZ was invalid");
      return { x: B, y: $ };
    }
    isTorsionFree() {
      const { h: y, isTorsionFree: v } = e;
      if (y === fe) return !0;
      if (v) return v(u, this);
      throw new Error(
        "isTorsionFree() has not been declared for the elliptic curve"
      );
    }
    clearCofactor() {
      const { h: y, clearCofactor: v } = e;
      return y === fe ? this : v ? v(u, this) : this.multiplyUnsafe(e.h);
    }
    toRawBytes(y = !0) {
      return this.assertValidity(), n(u, this, y);
    }
    toHex(y = !0) {
      return tt(this.toRawBytes(y));
    }
  }
  (u.BASE = new u(e.Gx, e.Gy, r.ONE)), (u.ZERO = new u(r.ZERO, r.ONE, r.ZERO));
  const h = e.nBitLength,
    d = Fs(u, e.endo ? Math.ceil(h / 2) : h);
  return {
    CURVE: e,
    ProjectivePoint: u,
    normPrivateKeyToScalar: a,
    weierstrassEquation: s,
    isWithinCurveOrder: o,
  };
}
function Vs(t) {
  const e = Yi(t);
  return (
    Bt(
      e,
      { hash: "hash", hmac: "function", randomBytes: "function" },
      { bits2int: "function", bits2int_modN: "function", lowS: "boolean" }
    ),
    Object.freeze({ lowS: !0, ...e })
  );
}
function Zs(t) {
  const e = Vs(t),
    { Fp: r, n } = e,
    i = r.BYTES + 1,
    s = 2 * r.BYTES + 1;
  function o(g) {
    return ke < g && g < r.ORDER;
  }
  function c(g) {
    return G(g, n);
  }
  function a(g) {
    return Dr(g, n);
  }
  const {
      ProjectivePoint: l,
      normPrivateKeyToScalar: f,
      weierstrassEquation: u,
      isWithinCurveOrder: h,
    } = Ws({
      ...e,
      toBytes(g, b, E) {
        const R = b.toAffine(),
          I = r.toBytes(R.x),
          P = ze;
        return E
          ? P(Uint8Array.from([b.hasEvenY() ? 2 : 3]), I)
          : P(Uint8Array.from([4]), I, r.toBytes(R.y));
      },
      fromBytes(g) {
        const b = g.length,
          E = g[0],
          R = g.subarray(1);
        if (b === i && (E === 2 || E === 3)) {
          const I = se(R);
          if (!o(I)) throw new Error("Point is not on curve");
          const P = u(I);
          let L = r.sqrt(P);
          const H = (L & fe) === fe;
          return ((E & 1) === 1) !== H && (L = r.neg(L)), { x: I, y: L };
        } else if (b === s && E === 4) {
          const I = r.fromBytes(R.subarray(0, r.BYTES)),
            P = r.fromBytes(R.subarray(r.BYTES, 2 * r.BYTES));
          return { x: I, y: P };
        } else
          throw new Error(
            `Point of length ${b} was invalid. Expected ${i} compressed bytes or ${s} uncompressed bytes`
          );
      },
    }),
    d = (g) => tt(Be(g, e.nByteLength));
  function p(g) {
    const b = n >> fe;
    return g > b;
  }
  function y(g) {
    return p(g) ? c(-g) : g;
  }
  const v = (g, b, E) => se(g.slice(b, E));
  class w {
    constructor(b, E, R) {
      (this.r = b), (this.s = E), (this.recovery = R), this.assertValidity();
    }
    static fromCompact(b) {
      const E = e.nByteLength;
      return (
        (b = X("compactSignature", b, E * 2)), new w(v(b, 0, E), v(b, E, 2 * E))
      );
    }
    static fromDER(b) {
      const { r: E, s: R } = Pe.toSig(X("DER", b));
      return new w(E, R);
    }
    assertValidity() {
      if (!h(this.r)) throw new Error("r must be 0 < r < CURVE.n");
      if (!h(this.s)) throw new Error("s must be 0 < s < CURVE.n");
    }
    addRecoveryBit(b) {
      return new w(this.r, this.s, b);
    }
    recoverPublicKey(b) {
      const { r: E, s: R, recovery: I } = this,
        P = q(X("msgHash", b));
      if (I == null || ![0, 1, 2, 3].includes(I))
        throw new Error("recovery id invalid");
      const L = I === 2 || I === 3 ? E + e.n : E;
      if (L >= r.ORDER) throw new Error("recovery id 2 or 3 invalid");
      const H = I & 1 ? "03" : "02",
        z = l.fromHex(H + d(L)),
        F = a(L),
        ee = c(-P * F),
        Z = c(R * F),
        Y = l.BASE.multiplyAndAddUnsafe(z, ee, Z);
      if (!Y) throw new Error("point at infinify");
      return Y.assertValidity(), Y;
    }
    hasHighS() {
      return p(this.s);
    }
    normalizeS() {
      return this.hasHighS() ? new w(this.r, c(-this.s), this.recovery) : this;
    }
    toDERRawBytes() {
      return rt(this.toDERHex());
    }
    toDERHex() {
      return Pe.hexFromSig({ r: this.r, s: this.s });
    }
    toCompactRawBytes() {
      return rt(this.toCompactHex());
    }
    toCompactHex() {
      return d(this.r) + d(this.s);
    }
  }
  const C = {
    isValidPrivateKey(g) {
      try {
        return f(g), !0;
      } catch {
        return !1;
      }
    },
    normPrivateKeyToScalar: f,
    randomPrivateKey: () => {
      const g = e.randomBytes(r.BYTES + 8),
        b = Us(g, n);
      return Be(b, e.nByteLength);
    },
    precompute(g = 8, b = l.BASE) {
      return b._setWindowSize(g), b.multiply(BigInt(3)), b;
    },
  };
  function x(g, b = !0) {
    return l.fromPrivateKey(g).toRawBytes(b);
  }
  function B(g) {
    const b = g instanceof Uint8Array,
      E = typeof g == "string",
      R = (b || E) && g.length;
    return b
      ? R === i || R === s
      : E
      ? R === 2 * i || R === 2 * s
      : g instanceof l;
  }
  function $(g, b, E = !0) {
    if (B(g)) throw new Error("first arg must be private key");
    if (!B(b)) throw new Error("second arg must be public key");
    return l.fromHex(b).multiply(f(g)).toRawBytes(E);
  }
  const A =
      e.bits2int ||
      function (g) {
        const b = se(g),
          E = g.length * 8 - e.nBitLength;
        return E > 0 ? b >> BigInt(E) : b;
      },
    q =
      e.bits2int_modN ||
      function (g) {
        return c(A(g));
      },
    T = on(e.nBitLength);
  function j(g) {
    if (typeof g != "bigint") throw new Error("bigint expected");
    if (!(ke <= g && g < T))
      throw new Error(`bigint expected < 2^${e.nBitLength}`);
    return Be(g, e.nByteLength);
  }
  function N(g, b, E = _) {
    if (["recovered", "canonical"].some((D) => D in E))
      throw new Error("sign() legacy options not supported");
    const { hash: R, randomBytes: I } = e;
    let { lowS: P, prehash: L, extraEntropy: H } = E;
    P == null && (P = !0),
      (g = X("msgHash", g)),
      L && (g = X("prehashed msgHash", R(g)));
    const z = q(g),
      F = f(b),
      ee = [j(F), j(z)];
    if (H != null) {
      const D = H === !0 ? I(r.BYTES) : H;
      ee.push(X("extraEntropy", D, r.BYTES));
    }
    const Z = ze(...ee),
      Y = z;
    function ie(D) {
      const te = A(D);
      if (!h(te)) return;
      const Ae = a(te),
        he = l.BASE.multiply(te).toAffine(),
        de = c(he.x);
      if (de === ke) return;
      const Ze = c(Ae * c(Y + de * F));
      if (Ze === ke) return;
      let En = (he.x === de ? 0 : 2) | Number(he.y & fe),
        xn = Ze;
      return P && p(Ze) && ((xn = y(Ze)), (En ^= 1)), new w(de, xn, En);
    }
    return { seed: Z, k2sig: ie };
  }
  const _ = { lowS: e.lowS, prehash: !1 },
    k = { lowS: e.lowS, prehash: !1 };
  function m(g, b, E = _) {
    const { seed: R, k2sig: I } = N(g, b, E),
      P = e;
    return Zi(P.hash.outputLen, P.nByteLength, P.hmac)(R, I);
  }
  l.BASE._setWindowSize(8);
  function S(g, b, E, R = k) {
    var he;
    const I = g;
    if (((b = X("msgHash", b)), (E = X("publicKey", E)), "strict" in R))
      throw new Error("options.strict was renamed to lowS");
    const { lowS: P, prehash: L } = R;
    let H, z;
    try {
      if (typeof I == "string" || I instanceof Uint8Array)
        try {
          H = w.fromDER(I);
        } catch (de) {
          if (!(de instanceof Pe.Err)) throw de;
          H = w.fromCompact(I);
        }
      else if (
        typeof I == "object" &&
        typeof I.r == "bigint" &&
        typeof I.s == "bigint"
      ) {
        const { r: de, s: Ze } = I;
        H = new w(de, Ze);
      } else throw new Error("PARSE");
      z = l.fromHex(E);
    } catch (de) {
      if (de.message === "PARSE")
        throw new Error(
          "signature must be Signature instance, Uint8Array or hex string"
        );
      return !1;
    }
    if (P && H.hasHighS()) return !1;
    L && (b = e.hash(b));
    const { r: F, s: ee } = H,
      Z = q(b),
      Y = a(ee),
      ie = c(Z * Y),
      D = c(F * Y),
      te =
        (he = l.BASE.multiplyAndAddUnsafe(z, ie, D)) == null
          ? void 0
          : he.toAffine();
    return te ? c(te.x) === F : !1;
  }
  return {
    CURVE: e,
    getPublicKey: x,
    getSharedSecret: $,
    sign: m,
    verify: S,
    ProjectivePoint: l,
    Signature: w,
    utils: C,
  };
}
class Ji extends Di {
  constructor(e, r) {
    super(), (this.finished = !1), (this.destroyed = !1), ue.hash(e);
    const n = Ot(r);
    if (((this.iHash = e.create()), typeof this.iHash.update != "function"))
      throw new Error("Expected instance of class which extends utils.Hash");
    (this.blockLen = this.iHash.blockLen),
      (this.outputLen = this.iHash.outputLen);
    const i = this.blockLen,
      s = new Uint8Array(i);
    s.set(n.length > i ? e.create().update(n).digest() : n);
    for (let o = 0; o < s.length; o++) s[o] ^= 54;
    this.iHash.update(s), (this.oHash = e.create());
    for (let o = 0; o < s.length; o++) s[o] ^= 106;
    this.oHash.update(s), s.fill(0);
  }
  update(e) {
    return ue.exists(this), this.iHash.update(e), this;
  }
  digestInto(e) {
    ue.exists(this),
      ue.bytes(e, this.outputLen),
      (this.finished = !0),
      this.iHash.digestInto(e),
      this.oHash.update(e),
      this.oHash.digestInto(e),
      this.destroy();
  }
  digest() {
    const e = new Uint8Array(this.oHash.outputLen);
    return this.digestInto(e), e;
  }
  _cloneInto(e) {
    e || (e = Object.create(Object.getPrototypeOf(this), {}));
    const {
      oHash: r,
      iHash: n,
      finished: i,
      destroyed: s,
      blockLen: o,
      outputLen: c,
    } = this;
    return (
      (e = e),
      (e.finished = i),
      (e.destroyed = s),
      (e.blockLen = o),
      (e.outputLen = c),
      (e.oHash = r._cloneInto(e.oHash)),
      (e.iHash = n._cloneInto(e.iHash)),
      e
    );
  }
  destroy() {
    (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
  }
}
const It = (t, e, r) => new Ji(t, e).update(r).digest();
It.create = (t, e) => new Ji(t, e);
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ function Ys(
  t
) {
  return { hash: t, hmac: (e, ...r) => It(t, e, Je(...r)), randomBytes: nr };
}
function Js(t, e) {
  const r = (n) => Zs({ ...t, ...Ys(n) });
  return Object.freeze({ ...r(e), create: r });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const sr =
    BigInt(
      "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"
    ),
  Xt = BigInt(
    "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"
  ),
  Xi = BigInt(1),
  Qt = BigInt(2),
  $n = (t, e) => (t + e / Qt) / e;
function Qi(t) {
  const e = sr,
    r = BigInt(3),
    n = BigInt(6),
    i = BigInt(11),
    s = BigInt(22),
    o = BigInt(23),
    c = BigInt(44),
    a = BigInt(88),
    l = (t * t * t) % e,
    f = (l * l * t) % e,
    u = (le(f, r, e) * f) % e,
    h = (le(u, r, e) * f) % e,
    d = (le(h, Qt, e) * l) % e,
    p = (le(d, i, e) * d) % e,
    y = (le(p, s, e) * p) % e,
    v = (le(y, c, e) * y) % e,
    w = (le(v, a, e) * v) % e,
    C = (le(w, c, e) * y) % e,
    x = (le(C, r, e) * f) % e,
    B = (le(x, o, e) * p) % e,
    $ = (le(B, n, e) * l) % e,
    A = le($, Qt, e);
  if (!Kr.eql(Kr.sqr(A), t)) throw new Error("Cannot find square root");
  return A;
}
const Kr = Hs(sr, void 0, void 0, { sqrt: Qi }),
  oe = Js(
    {
      a: BigInt(0),
      b: BigInt(7),
      Fp: Kr,
      n: Xt,
      Gx: BigInt(
        "55066263022277343669578718895168534326250603453777594175500187360389116729240"
      ),
      Gy: BigInt(
        "32670510020758816978083085130507043184471273380659243275938904335757337482424"
      ),
      h: BigInt(1),
      lowS: !0,
      endo: {
        beta: BigInt(
          "0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"
        ),
        splitScalar: (t) => {
          const e = Xt,
            r = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
            n = -Xi * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
            i = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
            s = r,
            o = BigInt("0x100000000000000000000000000000000"),
            c = $n(s * t, e),
            a = $n(-n * t, e);
          let l = G(t - c * r - a * i, e),
            f = G(-c * n - a * s, e);
          const u = l > o,
            h = f > o;
          if ((u && (l = e - l), h && (f = e - f), l > o || f > o))
            throw new Error("splitScalar: Endomorphism failed, k=" + t);
          return { k1neg: u, k1: l, k2neg: h, k2: f };
        },
      },
    },
    me
  ),
  ar = BigInt(0),
  eo = (t) => typeof t == "bigint" && ar < t && t < sr,
  Xs = (t) => typeof t == "bigint" && ar < t && t < Xt,
  Rn = {};
function er(t, ...e) {
  let r = Rn[t];
  if (r === void 0) {
    const n = me(Uint8Array.from(t, (i) => i.charCodeAt(0)));
    (r = ze(n, n)), (Rn[t] = r);
  }
  return me(ze(r, ...e));
}
const an = (t) => t.toRawBytes(!0).slice(1),
  Gr = (t) => Be(t, 32),
  Sr = (t) => G(t, sr),
  $t = (t) => G(t, Xt),
  cn = oe.ProjectivePoint,
  Qs = (t, e, r) => cn.BASE.multiplyAndAddUnsafe(t, e, r);
function Wr(t) {
  let e = oe.utils.normPrivateKeyToScalar(t),
    r = cn.fromPrivateKey(e);
  return { scalar: r.hasEvenY() ? e : $t(-e), bytes: an(r) };
}
function to(t) {
  if (!eo(t)) throw new Error("bad x: need 0 < x < p");
  const e = Sr(t * t),
    r = Sr(e * t + BigInt(7));
  let n = Qi(r);
  n % Qt !== ar && (n = Sr(-n));
  const i = new cn(t, n, Xi);
  return i.assertValidity(), i;
}
function ro(...t) {
  return $t(se(er("BIP0340/challenge", ...t)));
}
function ea(t) {
  return Wr(t).bytes;
}
function ta(t, e, r = nr(32)) {
  const n = X("message", t),
    { bytes: i, scalar: s } = Wr(e),
    o = X("auxRand", r, 32),
    c = Gr(s ^ se(er("BIP0340/aux", o))),
    a = er("BIP0340/nonce", c, i, n),
    l = $t(se(a));
  if (l === ar) throw new Error("sign failed: k is zero");
  const { bytes: f, scalar: u } = Wr(l),
    h = ro(f, i, n),
    d = new Uint8Array(64);
  if ((d.set(f, 0), d.set(Gr($t(u + h * s)), 32), !no(d, n, i)))
    throw new Error("sign: Invalid signature produced");
  return d;
}
function no(t, e, r) {
  const n = X("signature", t, 64),
    i = X("message", e),
    s = X("publicKey", r, 32);
  try {
    const o = to(se(s)),
      c = se(n.subarray(0, 32));
    if (!eo(c)) return !1;
    const a = se(n.subarray(32, 64));
    if (!Xs(a)) return !1;
    const l = ro(Gr(c), an(o), i),
      f = Qs(o, a, $t(-l));
    return !(!f || !f.hasEvenY() || f.toAffine().x !== c);
  } catch {
    return !1;
  }
}
const qt = (() => ({
  getPublicKey: ea,
  sign: ta,
  verify: no,
  utils: {
    randomPrivateKey: oe.utils.randomPrivateKey,
    lift_x: to,
    pointToBytes: an,
    numberToBytesBE: Be,
    bytesToNumberBE: se,
    taggedHash: er,
    mod: G,
  },
}))();
/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */ function We(
  t
) {
  if (!Number.isSafeInteger(t)) throw new Error(`Wrong integer: ${t}`);
}
function ve(...t) {
  const e = (i, s) => (o) => i(s(o)),
    r = Array.from(t)
      .reverse()
      .reduce((i, s) => (i ? e(i, s.encode) : s.encode), void 0),
    n = t.reduce((i, s) => (i ? e(i, s.decode) : s.decode), void 0);
  return { encode: r, decode: n };
}
function Ee(t) {
  return {
    encode: (e) => {
      if (!Array.isArray(e) || (e.length && typeof e[0] != "number"))
        throw new Error("alphabet.encode input should be an array of numbers");
      return e.map((r) => {
        if ((We(r), r < 0 || r >= t.length))
          throw new Error(
            `Digit index outside alphabet: ${r} (alphabet: ${t.length})`
          );
        return t[r];
      });
    },
    decode: (e) => {
      if (!Array.isArray(e) || (e.length && typeof e[0] != "string"))
        throw new Error("alphabet.decode input should be array of strings");
      return e.map((r) => {
        if (typeof r != "string")
          throw new Error(`alphabet.decode: not string element=${r}`);
        const n = t.indexOf(r);
        if (n === -1) throw new Error(`Unknown letter: "${r}". Allowed: ${t}`);
        return n;
      });
    },
  };
}
function xe(t = "") {
  if (typeof t != "string") throw new Error("join separator should be string");
  return {
    encode: (e) => {
      if (!Array.isArray(e) || (e.length && typeof e[0] != "string"))
        throw new Error("join.encode input should be array of strings");
      for (let r of e)
        if (typeof r != "string")
          throw new Error(`join.encode: non-string input=${r}`);
      return e.join(t);
    },
    decode: (e) => {
      if (typeof e != "string")
        throw new Error("join.decode input should be string");
      return e.split(t);
    },
  };
}
function Tt(t, e = "=") {
  if ((We(t), typeof e != "string"))
    throw new Error("padding chr should be string");
  return {
    encode(r) {
      if (!Array.isArray(r) || (r.length && typeof r[0] != "string"))
        throw new Error("padding.encode input should be array of strings");
      for (let n of r)
        if (typeof n != "string")
          throw new Error(`padding.encode: non-string input=${n}`);
      for (; (r.length * t) % 8; ) r.push(e);
      return r;
    },
    decode(r) {
      if (!Array.isArray(r) || (r.length && typeof r[0] != "string"))
        throw new Error("padding.encode input should be array of strings");
      for (let i of r)
        if (typeof i != "string")
          throw new Error(`padding.decode: non-string input=${i}`);
      let n = r.length;
      if ((n * t) % 8)
        throw new Error(
          "Invalid padding: string should have whole number of bytes"
        );
      for (; n > 0 && r[n - 1] === e; n--)
        if (!(((n - 1) * t) % 8))
          throw new Error("Invalid padding: string has too much padding");
      return r.slice(0, n);
    },
  };
}
function io(t) {
  if (typeof t != "function")
    throw new Error("normalize fn should be function");
  return { encode: (e) => e, decode: (e) => t(e) };
}
function Bn(t, e, r) {
  if (e < 2)
    throw new Error(
      `convertRadix: wrong from=${e}, base cannot be less than 2`
    );
  if (r < 2)
    throw new Error(`convertRadix: wrong to=${r}, base cannot be less than 2`);
  if (!Array.isArray(t)) throw new Error("convertRadix: data should be array");
  if (!t.length) return [];
  let n = 0;
  const i = [],
    s = Array.from(t);
  for (
    s.forEach((o) => {
      if ((We(o), o < 0 || o >= e)) throw new Error(`Wrong integer: ${o}`);
    });
    ;

  ) {
    let o = 0,
      c = !0;
    for (let a = n; a < s.length; a++) {
      const l = s[a],
        f = e * o + l;
      if (!Number.isSafeInteger(f) || (e * o) / e !== o || f - l !== e * o)
        throw new Error("convertRadix: carry overflow");
      if (
        ((o = f % r),
        (s[a] = Math.floor(f / r)),
        !Number.isSafeInteger(s[a]) || s[a] * r + o !== f)
      )
        throw new Error("convertRadix: carry overflow");
      if (c) s[a] ? (c = !1) : (n = a);
      else continue;
    }
    if ((i.push(o), c)) break;
  }
  for (let o = 0; o < t.length - 1 && t[o] === 0; o++) i.push(0);
  return i.reverse();
}
const oo = (t, e) => (e ? oo(e, t % e) : t),
  tr = (t, e) => t + (e - oo(t, e));
function Vr(t, e, r, n) {
  if (!Array.isArray(t)) throw new Error("convertRadix2: data should be array");
  if (e <= 0 || e > 32) throw new Error(`convertRadix2: wrong from=${e}`);
  if (r <= 0 || r > 32) throw new Error(`convertRadix2: wrong to=${r}`);
  if (tr(e, r) > 32)
    throw new Error(
      `convertRadix2: carry overflow from=${e} to=${r} carryBits=${tr(e, r)}`
    );
  let i = 0,
    s = 0;
  const o = 2 ** r - 1,
    c = [];
  for (const a of t) {
    if ((We(a), a >= 2 ** e))
      throw new Error(`convertRadix2: invalid data word=${a} from=${e}`);
    if (((i = (i << e) | a), s + e > 32))
      throw new Error(`convertRadix2: carry overflow pos=${s} from=${e}`);
    for (s += e; s >= r; s -= r) c.push(((i >> (s - r)) & o) >>> 0);
    i &= 2 ** s - 1;
  }
  if (((i = (i << (r - s)) & o), !n && s >= e))
    throw new Error("Excess padding");
  if (!n && i) throw new Error(`Non-zero padding: ${i}`);
  return n && s > 0 && c.push(i >>> 0), c;
}
function so(t) {
  return (
    We(t),
    {
      encode: (e) => {
        if (!(e instanceof Uint8Array))
          throw new Error("radix.encode input should be Uint8Array");
        return Bn(Array.from(e), 2 ** 8, t);
      },
      decode: (e) => {
        if (!Array.isArray(e) || (e.length && typeof e[0] != "number"))
          throw new Error("radix.decode input should be array of strings");
        return Uint8Array.from(Bn(e, t, 2 ** 8));
      },
    }
  );
}
function Ce(t, e = !1) {
  if ((We(t), t <= 0 || t > 32))
    throw new Error("radix2: bits should be in (0..32]");
  if (tr(8, t) > 32 || tr(t, 8) > 32) throw new Error("radix2: carry overflow");
  return {
    encode: (r) => {
      if (!(r instanceof Uint8Array))
        throw new Error("radix2.encode input should be Uint8Array");
      return Vr(Array.from(r), 8, t, !e);
    },
    decode: (r) => {
      if (!Array.isArray(r) || (r.length && typeof r[0] != "number"))
        throw new Error("radix2.decode input should be array of strings");
      return Uint8Array.from(Vr(r, t, 8, e));
    },
  };
}
function qn(t) {
  if (typeof t != "function")
    throw new Error("unsafeWrapper fn should be function");
  return function (...e) {
    try {
      return t.apply(null, e);
    } catch {}
  };
}
function ao(t, e) {
  if ((We(t), typeof e != "function"))
    throw new Error("checksum fn should be function");
  return {
    encode(r) {
      if (!(r instanceof Uint8Array))
        throw new Error("checksum.encode: input should be Uint8Array");
      const n = e(r).slice(0, t),
        i = new Uint8Array(r.length + t);
      return i.set(r), i.set(n, r.length), i;
    },
    decode(r) {
      if (!(r instanceof Uint8Array))
        throw new Error("checksum.decode: input should be Uint8Array");
      const n = r.slice(0, -t),
        i = e(n).slice(0, t),
        s = r.slice(-t);
      for (let o = 0; o < t; o++)
        if (i[o] !== s[o]) throw new Error("Invalid checksum");
      return n;
    },
  };
}
const Pt = {
    alphabet: Ee,
    chain: ve,
    checksum: ao,
    radix: so,
    radix2: Ce,
    join: xe,
    padding: Tt,
  },
  ra = ve(Ce(4), Ee("0123456789ABCDEF"), xe("")),
  na = ve(Ce(5), Ee("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"), Tt(5), xe(""));
ve(Ce(5), Ee("0123456789ABCDEFGHIJKLMNOPQRSTUV"), Tt(5), xe(""));
ve(
  Ce(5),
  Ee("0123456789ABCDEFGHJKMNPQRSTVWXYZ"),
  xe(""),
  io((t) => t.toUpperCase().replace(/O/g, "0").replace(/[IL]/g, "1"))
);
const Fe = ve(
    Ce(6),
    Ee("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),
    Tt(6),
    xe("")
  ),
  ia = ve(
    Ce(6),
    Ee("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"),
    Tt(6),
    xe("")
  ),
  un = (t) => ve(so(58), Ee(t), xe("")),
  rr = un("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");
un("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ");
un("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz");
const Tn = [0, 2, 3, 5, 6, 7, 9, 10, 11],
  oa = {
    encode(t) {
      let e = "";
      for (let r = 0; r < t.length; r += 8) {
        const n = t.subarray(r, r + 8);
        e += rr.encode(n).padStart(Tn[n.length], "1");
      }
      return e;
    },
    decode(t) {
      let e = [];
      for (let r = 0; r < t.length; r += 11) {
        const n = t.slice(r, r + 11),
          i = Tn.indexOf(n.length),
          s = rr.decode(n);
        for (let o = 0; o < s.length - i; o++)
          if (s[o] !== 0) throw new Error("base58xmr: wrong padding");
        e = e.concat(Array.from(s.slice(s.length - i)));
      }
      return Uint8Array.from(e);
    },
  },
  sa = (t) =>
    ve(
      ao(4, (e) => t(t(e))),
      rr
    ),
  Zr = ve(Ee("qpzry9x8gf2tvdw0s3jn54khce6mua7l"), xe("")),
  Ln = [996825010, 642813549, 513874426, 1027748829, 705979059];
function it(t) {
  const e = t >> 25;
  let r = (t & 33554431) << 5;
  for (let n = 0; n < Ln.length; n++) ((e >> n) & 1) === 1 && (r ^= Ln[n]);
  return r;
}
function Nn(t, e, r = 1) {
  const n = t.length;
  let i = 1;
  for (let s = 0; s < n; s++) {
    const o = t.charCodeAt(s);
    if (o < 33 || o > 126) throw new Error(`Invalid prefix (${t})`);
    i = it(i) ^ (o >> 5);
  }
  i = it(i);
  for (let s = 0; s < n; s++) i = it(i) ^ (t.charCodeAt(s) & 31);
  for (let s of e) i = it(i) ^ s;
  for (let s = 0; s < 6; s++) i = it(i);
  return (i ^= r), Zr.encode(Vr([i % 2 ** 30], 30, 5, !1));
}
function co(t) {
  const e = t === "bech32" ? 1 : 734539939,
    r = Ce(5),
    n = r.decode,
    i = r.encode,
    s = qn(n);
  function o(f, u, h = 90) {
    if (typeof f != "string")
      throw new Error(`bech32.encode prefix should be string, not ${typeof f}`);
    if (!Array.isArray(u) || (u.length && typeof u[0] != "number"))
      throw new Error(
        `bech32.encode words should be array of numbers, not ${typeof u}`
      );
    const d = f.length + 7 + u.length;
    if (h !== !1 && d > h)
      throw new TypeError(`Length ${d} exceeds limit ${h}`);
    return (f = f.toLowerCase()), `${f}1${Zr.encode(u)}${Nn(f, u, e)}`;
  }
  function c(f, u = 90) {
    if (typeof f != "string")
      throw new Error(`bech32.decode input should be string, not ${typeof f}`);
    if (f.length < 8 || (u !== !1 && f.length > u))
      throw new TypeError(
        `Wrong string length: ${f.length} (${f}). Expected (8..${u})`
      );
    const h = f.toLowerCase();
    if (f !== h && f !== f.toUpperCase())
      throw new Error("String must be lowercase or uppercase");
    f = h;
    const d = f.lastIndexOf("1");
    if (d === 0 || d === -1)
      throw new Error(
        'Letter "1" must be present between prefix and data only'
      );
    const p = f.slice(0, d),
      y = f.slice(d + 1);
    if (y.length < 6)
      throw new Error("Data must be at least 6 characters long");
    const v = Zr.decode(y).slice(0, -6),
      w = Nn(p, v, e);
    if (!y.endsWith(w))
      throw new Error(`Invalid checksum in ${f}: expected "${w}"`);
    return { prefix: p, words: v };
  }
  const a = qn(c);
  function l(f) {
    const { prefix: u, words: h } = c(f, !1);
    return { prefix: u, words: h, bytes: n(h) };
  }
  return {
    encode: o,
    decode: c,
    decodeToBytes: l,
    decodeUnsafe: a,
    fromWords: n,
    fromWordsUnsafe: s,
    toWords: i,
  };
}
const Te = co("bech32");
co("bech32m");
const aa = {
    encode: (t) => new TextDecoder().decode(t),
    decode: (t) => new TextEncoder().encode(t),
  },
  ca = ve(
    Ce(4),
    Ee("0123456789abcdef"),
    xe(""),
    io((t) => {
      if (typeof t != "string" || t.length % 2)
        throw new TypeError(
          `hex.decode: expected string, got ${typeof t} with length ${t.length}`
        );
      return t.toLowerCase();
    })
  ),
  ua = {
    utf8: aa,
    hex: ca,
    base16: ra,
    base32: na,
    base64: Fe,
    base64url: ia,
    base58: rr,
    base58xmr: oa,
  };
`${Object.keys(ua).join(", ")}`;
const uo = `abandon
ability
able
about
above
absent
absorb
abstract
absurd
abuse
access
accident
account
accuse
achieve
acid
acoustic
acquire
across
act
action
actor
actress
actual
adapt
add
addict
address
adjust
admit
adult
advance
advice
aerobic
affair
afford
afraid
again
age
agent
agree
ahead
aim
air
airport
aisle
alarm
album
alcohol
alert
alien
all
alley
allow
almost
alone
alpha
already
also
alter
always
amateur
amazing
among
amount
amused
analyst
anchor
ancient
anger
angle
angry
animal
ankle
announce
annual
another
answer
antenna
antique
anxiety
any
apart
apology
appear
apple
approve
april
arch
arctic
area
arena
argue
arm
armed
armor
army
around
arrange
arrest
arrive
arrow
art
artefact
artist
artwork
ask
aspect
assault
asset
assist
assume
asthma
athlete
atom
attack
attend
attitude
attract
auction
audit
august
aunt
author
auto
autumn
average
avocado
avoid
awake
aware
away
awesome
awful
awkward
axis
baby
bachelor
bacon
badge
bag
balance
balcony
ball
bamboo
banana
banner
bar
barely
bargain
barrel
base
basic
basket
battle
beach
bean
beauty
because
become
beef
before
begin
behave
behind
believe
below
belt
bench
benefit
best
betray
better
between
beyond
bicycle
bid
bike
bind
biology
bird
birth
bitter
black
blade
blame
blanket
blast
bleak
bless
blind
blood
blossom
blouse
blue
blur
blush
board
boat
body
boil
bomb
bone
bonus
book
boost
border
boring
borrow
boss
bottom
bounce
box
boy
bracket
brain
brand
brass
brave
bread
breeze
brick
bridge
brief
bright
bring
brisk
broccoli
broken
bronze
broom
brother
brown
brush
bubble
buddy
budget
buffalo
build
bulb
bulk
bullet
bundle
bunker
burden
burger
burst
bus
business
busy
butter
buyer
buzz
cabbage
cabin
cable
cactus
cage
cake
call
calm
camera
camp
can
canal
cancel
candy
cannon
canoe
canvas
canyon
capable
capital
captain
car
carbon
card
cargo
carpet
carry
cart
case
cash
casino
castle
casual
cat
catalog
catch
category
cattle
caught
cause
caution
cave
ceiling
celery
cement
census
century
cereal
certain
chair
chalk
champion
change
chaos
chapter
charge
chase
chat
cheap
check
cheese
chef
cherry
chest
chicken
chief
child
chimney
choice
choose
chronic
chuckle
chunk
churn
cigar
cinnamon
circle
citizen
city
civil
claim
clap
clarify
claw
clay
clean
clerk
clever
click
client
cliff
climb
clinic
clip
clock
clog
close
cloth
cloud
clown
club
clump
cluster
clutch
coach
coast
coconut
code
coffee
coil
coin
collect
color
column
combine
come
comfort
comic
common
company
concert
conduct
confirm
congress
connect
consider
control
convince
cook
cool
copper
copy
coral
core
corn
correct
cost
cotton
couch
country
couple
course
cousin
cover
coyote
crack
cradle
craft
cram
crane
crash
crater
crawl
crazy
cream
credit
creek
crew
cricket
crime
crisp
critic
crop
cross
crouch
crowd
crucial
cruel
cruise
crumble
crunch
crush
cry
crystal
cube
culture
cup
cupboard
curious
current
curtain
curve
cushion
custom
cute
cycle
dad
damage
damp
dance
danger
daring
dash
daughter
dawn
day
deal
debate
debris
decade
december
decide
decline
decorate
decrease
deer
defense
define
defy
degree
delay
deliver
demand
demise
denial
dentist
deny
depart
depend
deposit
depth
deputy
derive
describe
desert
design
desk
despair
destroy
detail
detect
develop
device
devote
diagram
dial
diamond
diary
dice
diesel
diet
differ
digital
dignity
dilemma
dinner
dinosaur
direct
dirt
disagree
discover
disease
dish
dismiss
disorder
display
distance
divert
divide
divorce
dizzy
doctor
document
dog
doll
dolphin
domain
donate
donkey
donor
door
dose
double
dove
draft
dragon
drama
drastic
draw
dream
dress
drift
drill
drink
drip
drive
drop
drum
dry
duck
dumb
dune
during
dust
dutch
duty
dwarf
dynamic
eager
eagle
early
earn
earth
easily
east
easy
echo
ecology
economy
edge
edit
educate
effort
egg
eight
either
elbow
elder
electric
elegant
element
elephant
elevator
elite
else
embark
embody
embrace
emerge
emotion
employ
empower
empty
enable
enact
end
endless
endorse
enemy
energy
enforce
engage
engine
enhance
enjoy
enlist
enough
enrich
enroll
ensure
enter
entire
entry
envelope
episode
equal
equip
era
erase
erode
erosion
error
erupt
escape
essay
essence
estate
eternal
ethics
evidence
evil
evoke
evolve
exact
example
excess
exchange
excite
exclude
excuse
execute
exercise
exhaust
exhibit
exile
exist
exit
exotic
expand
expect
expire
explain
expose
express
extend
extra
eye
eyebrow
fabric
face
faculty
fade
faint
faith
fall
false
fame
family
famous
fan
fancy
fantasy
farm
fashion
fat
fatal
father
fatigue
fault
favorite
feature
february
federal
fee
feed
feel
female
fence
festival
fetch
fever
few
fiber
fiction
field
figure
file
film
filter
final
find
fine
finger
finish
fire
firm
first
fiscal
fish
fit
fitness
fix
flag
flame
flash
flat
flavor
flee
flight
flip
float
flock
floor
flower
fluid
flush
fly
foam
focus
fog
foil
fold
follow
food
foot
force
forest
forget
fork
fortune
forum
forward
fossil
foster
found
fox
fragile
frame
frequent
fresh
friend
fringe
frog
front
frost
frown
frozen
fruit
fuel
fun
funny
furnace
fury
future
gadget
gain
galaxy
gallery
game
gap
garage
garbage
garden
garlic
garment
gas
gasp
gate
gather
gauge
gaze
general
genius
genre
gentle
genuine
gesture
ghost
giant
gift
giggle
ginger
giraffe
girl
give
glad
glance
glare
glass
glide
glimpse
globe
gloom
glory
glove
glow
glue
goat
goddess
gold
good
goose
gorilla
gospel
gossip
govern
gown
grab
grace
grain
grant
grape
grass
gravity
great
green
grid
grief
grit
grocery
group
grow
grunt
guard
guess
guide
guilt
guitar
gun
gym
habit
hair
half
hammer
hamster
hand
happy
harbor
hard
harsh
harvest
hat
have
hawk
hazard
head
health
heart
heavy
hedgehog
height
hello
helmet
help
hen
hero
hidden
high
hill
hint
hip
hire
history
hobby
hockey
hold
hole
holiday
hollow
home
honey
hood
hope
horn
horror
horse
hospital
host
hotel
hour
hover
hub
huge
human
humble
humor
hundred
hungry
hunt
hurdle
hurry
hurt
husband
hybrid
ice
icon
idea
identify
idle
ignore
ill
illegal
illness
image
imitate
immense
immune
impact
impose
improve
impulse
inch
include
income
increase
index
indicate
indoor
industry
infant
inflict
inform
inhale
inherit
initial
inject
injury
inmate
inner
innocent
input
inquiry
insane
insect
inside
inspire
install
intact
interest
into
invest
invite
involve
iron
island
isolate
issue
item
ivory
jacket
jaguar
jar
jazz
jealous
jeans
jelly
jewel
job
join
joke
journey
joy
judge
juice
jump
jungle
junior
junk
just
kangaroo
keen
keep
ketchup
key
kick
kid
kidney
kind
kingdom
kiss
kit
kitchen
kite
kitten
kiwi
knee
knife
knock
know
lab
label
labor
ladder
lady
lake
lamp
language
laptop
large
later
latin
laugh
laundry
lava
law
lawn
lawsuit
layer
lazy
leader
leaf
learn
leave
lecture
left
leg
legal
legend
leisure
lemon
lend
length
lens
leopard
lesson
letter
level
liar
liberty
library
license
life
lift
light
like
limb
limit
link
lion
liquid
list
little
live
lizard
load
loan
lobster
local
lock
logic
lonely
long
loop
lottery
loud
lounge
love
loyal
lucky
luggage
lumber
lunar
lunch
luxury
lyrics
machine
mad
magic
magnet
maid
mail
main
major
make
mammal
man
manage
mandate
mango
mansion
manual
maple
marble
march
margin
marine
market
marriage
mask
mass
master
match
material
math
matrix
matter
maximum
maze
meadow
mean
measure
meat
mechanic
medal
media
melody
melt
member
memory
mention
menu
mercy
merge
merit
merry
mesh
message
metal
method
middle
midnight
milk
million
mimic
mind
minimum
minor
minute
miracle
mirror
misery
miss
mistake
mix
mixed
mixture
mobile
model
modify
mom
moment
monitor
monkey
monster
month
moon
moral
more
morning
mosquito
mother
motion
motor
mountain
mouse
move
movie
much
muffin
mule
multiply
muscle
museum
mushroom
music
must
mutual
myself
mystery
myth
naive
name
napkin
narrow
nasty
nation
nature
near
neck
need
negative
neglect
neither
nephew
nerve
nest
net
network
neutral
never
news
next
nice
night
noble
noise
nominee
noodle
normal
north
nose
notable
note
nothing
notice
novel
now
nuclear
number
nurse
nut
oak
obey
object
oblige
obscure
observe
obtain
obvious
occur
ocean
october
odor
off
offer
office
often
oil
okay
old
olive
olympic
omit
once
one
onion
online
only
open
opera
opinion
oppose
option
orange
orbit
orchard
order
ordinary
organ
orient
original
orphan
ostrich
other
outdoor
outer
output
outside
oval
oven
over
own
owner
oxygen
oyster
ozone
pact
paddle
page
pair
palace
palm
panda
panel
panic
panther
paper
parade
parent
park
parrot
party
pass
patch
path
patient
patrol
pattern
pause
pave
payment
peace
peanut
pear
peasant
pelican
pen
penalty
pencil
people
pepper
perfect
permit
person
pet
phone
photo
phrase
physical
piano
picnic
picture
piece
pig
pigeon
pill
pilot
pink
pioneer
pipe
pistol
pitch
pizza
place
planet
plastic
plate
play
please
pledge
pluck
plug
plunge
poem
poet
point
polar
pole
police
pond
pony
pool
popular
portion
position
possible
post
potato
pottery
poverty
powder
power
practice
praise
predict
prefer
prepare
present
pretty
prevent
price
pride
primary
print
priority
prison
private
prize
problem
process
produce
profit
program
project
promote
proof
property
prosper
protect
proud
provide
public
pudding
pull
pulp
pulse
pumpkin
punch
pupil
puppy
purchase
purity
purpose
purse
push
put
puzzle
pyramid
quality
quantum
quarter
question
quick
quit
quiz
quote
rabbit
raccoon
race
rack
radar
radio
rail
rain
raise
rally
ramp
ranch
random
range
rapid
rare
rate
rather
raven
raw
razor
ready
real
reason
rebel
rebuild
recall
receive
recipe
record
recycle
reduce
reflect
reform
refuse
region
regret
regular
reject
relax
release
relief
rely
remain
remember
remind
remove
render
renew
rent
reopen
repair
repeat
replace
report
require
rescue
resemble
resist
resource
response
result
retire
retreat
return
reunion
reveal
review
reward
rhythm
rib
ribbon
rice
rich
ride
ridge
rifle
right
rigid
ring
riot
ripple
risk
ritual
rival
river
road
roast
robot
robust
rocket
romance
roof
rookie
room
rose
rotate
rough
round
route
royal
rubber
rude
rug
rule
run
runway
rural
sad
saddle
sadness
safe
sail
salad
salmon
salon
salt
salute
same
sample
sand
satisfy
satoshi
sauce
sausage
save
say
scale
scan
scare
scatter
scene
scheme
school
science
scissors
scorpion
scout
scrap
screen
script
scrub
sea
search
season
seat
second
secret
section
security
seed
seek
segment
select
sell
seminar
senior
sense
sentence
series
service
session
settle
setup
seven
shadow
shaft
shallow
share
shed
shell
sheriff
shield
shift
shine
ship
shiver
shock
shoe
shoot
shop
short
shoulder
shove
shrimp
shrug
shuffle
shy
sibling
sick
side
siege
sight
sign
silent
silk
silly
silver
similar
simple
since
sing
siren
sister
situate
six
size
skate
sketch
ski
skill
skin
skirt
skull
slab
slam
sleep
slender
slice
slide
slight
slim
slogan
slot
slow
slush
small
smart
smile
smoke
smooth
snack
snake
snap
sniff
snow
soap
soccer
social
sock
soda
soft
solar
soldier
solid
solution
solve
someone
song
soon
sorry
sort
soul
sound
soup
source
south
space
spare
spatial
spawn
speak
special
speed
spell
spend
sphere
spice
spider
spike
spin
spirit
split
spoil
sponsor
spoon
sport
spot
spray
spread
spring
spy
square
squeeze
squirrel
stable
stadium
staff
stage
stairs
stamp
stand
start
state
stay
steak
steel
stem
step
stereo
stick
still
sting
stock
stomach
stone
stool
story
stove
strategy
street
strike
strong
struggle
student
stuff
stumble
style
subject
submit
subway
success
such
sudden
suffer
sugar
suggest
suit
summer
sun
sunny
sunset
super
supply
supreme
sure
surface
surge
surprise
surround
survey
suspect
sustain
swallow
swamp
swap
swarm
swear
sweet
swift
swim
swing
switch
sword
symbol
symptom
syrup
system
table
tackle
tag
tail
talent
talk
tank
tape
target
task
taste
tattoo
taxi
teach
team
tell
ten
tenant
tennis
tent
term
test
text
thank
that
theme
then
theory
there
they
thing
this
thought
three
thrive
throw
thumb
thunder
ticket
tide
tiger
tilt
timber
time
tiny
tip
tired
tissue
title
toast
tobacco
today
toddler
toe
together
toilet
token
tomato
tomorrow
tone
tongue
tonight
tool
tooth
top
topic
topple
torch
tornado
tortoise
toss
total
tourist
toward
tower
town
toy
track
trade
traffic
tragic
train
transfer
trap
trash
travel
tray
treat
tree
trend
trial
tribe
trick
trigger
trim
trip
trophy
trouble
truck
true
truly
trumpet
trust
truth
try
tube
tuition
tumble
tuna
tunnel
turkey
turn
turtle
twelve
twenty
twice
twin
twist
two
type
typical
ugly
umbrella
unable
unaware
uncle
uncover
under
undo
unfair
unfold
unhappy
uniform
unique
unit
universe
unknown
unlock
until
unusual
unveil
update
upgrade
uphold
upon
upper
upset
urban
urge
usage
use
used
useful
useless
usual
utility
vacant
vacuum
vague
valid
valley
valve
van
vanish
vapor
various
vast
vault
vehicle
velvet
vendor
venture
venue
verb
verify
version
very
vessel
veteran
viable
vibrant
vicious
victory
video
view
village
vintage
violin
virtual
virus
visa
visit
visual
vital
vivid
vocal
voice
void
volcano
volume
vote
voyage
wage
wagon
wait
walk
wall
walnut
want
warfare
warm
warrior
wash
wasp
waste
water
wave
way
wealth
weapon
wear
weasel
weather
web
wedding
weekend
weird
welcome
west
wet
whale
what
wheat
wheel
when
where
whip
whisper
wide
width
wife
wild
will
win
window
wine
wing
wink
winner
winter
wire
wisdom
wise
wish
witness
wolf
woman
wonder
wood
wool
word
work
world
worry
worth
wrap
wreck
wrestle
wrist
write
wrong
yard
year
yellow
you
young
youth
zebra
zero
zone
zoo`.split(`
`);
function la(t, e, r, n) {
  ue.hash(t);
  const i = gs({ dkLen: 32, asyncTick: 10 }, n),
    { c: s, dkLen: o, asyncTick: c } = i;
  if ((ue.number(s), ue.number(o), ue.number(c), s < 1))
    throw new Error("PBKDF2: iterations (c) should be >= 1");
  const a = Ot(e),
    l = Ot(r),
    f = new Uint8Array(o),
    u = It.create(t, a),
    h = u._cloneInto().update(l);
  return { c: s, dkLen: o, asyncTick: c, DK: f, PRF: u, PRFSalt: h };
}
function fa(t, e, r, n, i) {
  return t.destroy(), e.destroy(), n && n.destroy(), i.fill(0), r;
}
function ha(t, e, r, n) {
  const { c: i, dkLen: s, DK: o, PRF: c, PRFSalt: a } = la(t, e, r, n);
  let l;
  const f = new Uint8Array(4),
    u = He(f),
    h = new Uint8Array(c.outputLen);
  for (let d = 1, p = 0; p < s; d++, p += c.outputLen) {
    const y = o.subarray(p, p + c.outputLen);
    u.setInt32(0, d, !1),
      (l = a._cloneInto(l)).update(f).digestInto(h),
      y.set(h.subarray(0, y.length));
    for (let v = 1; v < i; v++) {
      c._cloneInto(l).update(h).digestInto(h);
      for (let w = 0; w < y.length; w++) y[w] ^= h[w];
    }
  }
  return fa(c, a, o, l, h);
}
const Ht = BigInt(2 ** 32 - 1),
  Yr = BigInt(32);
function lo(t, e = !1) {
  return e
    ? { h: Number(t & Ht), l: Number((t >> Yr) & Ht) }
    : { h: Number((t >> Yr) & Ht) | 0, l: Number(t & Ht) | 0 };
}
function da(t, e = !1) {
  let r = new Uint32Array(t.length),
    n = new Uint32Array(t.length);
  for (let i = 0; i < t.length; i++) {
    const { h: s, l: o } = lo(t[i], e);
    [r[i], n[i]] = [s, o];
  }
  return [r, n];
}
const pa = (t, e) => (BigInt(t >>> 0) << Yr) | BigInt(e >>> 0),
  ya = (t, e, r) => t >>> r,
  ga = (t, e, r) => (t << (32 - r)) | (e >>> r),
  va = (t, e, r) => (t >>> r) | (e << (32 - r)),
  ba = (t, e, r) => (t << (32 - r)) | (e >>> r),
  _a = (t, e, r) => (t << (64 - r)) | (e >>> (r - 32)),
  wa = (t, e, r) => (t >>> (r - 32)) | (e << (64 - r)),
  ma = (t, e) => e,
  Ea = (t, e) => t,
  xa = (t, e, r) => (t << r) | (e >>> (32 - r)),
  ka = (t, e, r) => (e << r) | (t >>> (32 - r)),
  Sa = (t, e, r) => (e << (r - 32)) | (t >>> (64 - r)),
  Ca = (t, e, r) => (t << (r - 32)) | (e >>> (64 - r));
function Aa(t, e, r, n) {
  const i = (e >>> 0) + (n >>> 0);
  return { h: (t + r + ((i / 2 ** 32) | 0)) | 0, l: i | 0 };
}
const Oa = (t, e, r) => (t >>> 0) + (e >>> 0) + (r >>> 0),
  Ia = (t, e, r, n) => (e + r + n + ((t / 2 ** 32) | 0)) | 0,
  $a = (t, e, r, n) => (t >>> 0) + (e >>> 0) + (r >>> 0) + (n >>> 0),
  Ra = (t, e, r, n, i) => (e + r + n + i + ((t / 2 ** 32) | 0)) | 0,
  Ba = (t, e, r, n, i) =>
    (t >>> 0) + (e >>> 0) + (r >>> 0) + (n >>> 0) + (i >>> 0),
  qa = (t, e, r, n, i, s) => (e + r + n + i + s + ((t / 2 ** 32) | 0)) | 0,
  U = {
    fromBig: lo,
    split: da,
    toBig: pa,
    shrSH: ya,
    shrSL: ga,
    rotrSH: va,
    rotrSL: ba,
    rotrBH: _a,
    rotrBL: wa,
    rotr32H: ma,
    rotr32L: Ea,
    rotlSH: xa,
    rotlSL: ka,
    rotlBH: Sa,
    rotlBL: Ca,
    add: Aa,
    add3L: Oa,
    add3H: Ia,
    add4L: $a,
    add4H: Ra,
    add5H: qa,
    add5L: Ba,
  },
  [Ta, La] = U.split(
    [
      "0x428a2f98d728ae22",
      "0x7137449123ef65cd",
      "0xb5c0fbcfec4d3b2f",
      "0xe9b5dba58189dbbc",
      "0x3956c25bf348b538",
      "0x59f111f1b605d019",
      "0x923f82a4af194f9b",
      "0xab1c5ed5da6d8118",
      "0xd807aa98a3030242",
      "0x12835b0145706fbe",
      "0x243185be4ee4b28c",
      "0x550c7dc3d5ffb4e2",
      "0x72be5d74f27b896f",
      "0x80deb1fe3b1696b1",
      "0x9bdc06a725c71235",
      "0xc19bf174cf692694",
      "0xe49b69c19ef14ad2",
      "0xefbe4786384f25e3",
      "0x0fc19dc68b8cd5b5",
      "0x240ca1cc77ac9c65",
      "0x2de92c6f592b0275",
      "0x4a7484aa6ea6e483",
      "0x5cb0a9dcbd41fbd4",
      "0x76f988da831153b5",
      "0x983e5152ee66dfab",
      "0xa831c66d2db43210",
      "0xb00327c898fb213f",
      "0xbf597fc7beef0ee4",
      "0xc6e00bf33da88fc2",
      "0xd5a79147930aa725",
      "0x06ca6351e003826f",
      "0x142929670a0e6e70",
      "0x27b70a8546d22ffc",
      "0x2e1b21385c26c926",
      "0x4d2c6dfc5ac42aed",
      "0x53380d139d95b3df",
      "0x650a73548baf63de",
      "0x766a0abb3c77b2a8",
      "0x81c2c92e47edaee6",
      "0x92722c851482353b",
      "0xa2bfe8a14cf10364",
      "0xa81a664bbc423001",
      "0xc24b8b70d0f89791",
      "0xc76c51a30654be30",
      "0xd192e819d6ef5218",
      "0xd69906245565a910",
      "0xf40e35855771202a",
      "0x106aa07032bbd1b8",
      "0x19a4c116b8d2d0c8",
      "0x1e376c085141ab53",
      "0x2748774cdf8eeb99",
      "0x34b0bcb5e19b48a8",
      "0x391c0cb3c5c95a63",
      "0x4ed8aa4ae3418acb",
      "0x5b9cca4f7763e373",
      "0x682e6ff3d6b2b8a3",
      "0x748f82ee5defb2fc",
      "0x78a5636f43172f60",
      "0x84c87814a1f0ab72",
      "0x8cc702081a6439ec",
      "0x90befffa23631e28",
      "0xa4506cebde82bde9",
      "0xbef9a3f7b2c67915",
      "0xc67178f2e372532b",
      "0xca273eceea26619c",
      "0xd186b8c721c0c207",
      "0xeada7dd6cde0eb1e",
      "0xf57d4f7fee6ed178",
      "0x06f067aa72176fba",
      "0x0a637dc5a2c898a6",
      "0x113f9804bef90dae",
      "0x1b710b35131c471b",
      "0x28db77f523047d84",
      "0x32caab7b40c72493",
      "0x3c9ebe0a15c9bebc",
      "0x431d67c49c100d4c",
      "0x4cc5d4becb3e42b6",
      "0x597f299cfc657e2a",
      "0x5fcb6fab3ad6faec",
      "0x6c44198c4a475817",
    ].map((t) => BigInt(t))
  ),
  $e = new Uint32Array(80),
  Re = new Uint32Array(80);
class cr extends tn {
  constructor() {
    super(128, 64, 16, !1),
      (this.Ah = 1779033703),
      (this.Al = -205731576),
      (this.Bh = -1150833019),
      (this.Bl = -2067093701),
      (this.Ch = 1013904242),
      (this.Cl = -23791573),
      (this.Dh = -1521486534),
      (this.Dl = 1595750129),
      (this.Eh = 1359893119),
      (this.El = -1377402159),
      (this.Fh = -1694144372),
      (this.Fl = 725511199),
      (this.Gh = 528734635),
      (this.Gl = -79577749),
      (this.Hh = 1541459225),
      (this.Hl = 327033209);
  }
  get() {
    const {
      Ah: e,
      Al: r,
      Bh: n,
      Bl: i,
      Ch: s,
      Cl: o,
      Dh: c,
      Dl: a,
      Eh: l,
      El: f,
      Fh: u,
      Fl: h,
      Gh: d,
      Gl: p,
      Hh: y,
      Hl: v,
    } = this;
    return [e, r, n, i, s, o, c, a, l, f, u, h, d, p, y, v];
  }
  set(e, r, n, i, s, o, c, a, l, f, u, h, d, p, y, v) {
    (this.Ah = e | 0),
      (this.Al = r | 0),
      (this.Bh = n | 0),
      (this.Bl = i | 0),
      (this.Ch = s | 0),
      (this.Cl = o | 0),
      (this.Dh = c | 0),
      (this.Dl = a | 0),
      (this.Eh = l | 0),
      (this.El = f | 0),
      (this.Fh = u | 0),
      (this.Fl = h | 0),
      (this.Gh = d | 0),
      (this.Gl = p | 0),
      (this.Hh = y | 0),
      (this.Hl = v | 0);
  }
  process(e, r) {
    for (let x = 0; x < 16; x++, r += 4)
      ($e[x] = e.getUint32(r)), (Re[x] = e.getUint32((r += 4)));
    for (let x = 16; x < 80; x++) {
      const B = $e[x - 15] | 0,
        $ = Re[x - 15] | 0,
        A = U.rotrSH(B, $, 1) ^ U.rotrSH(B, $, 8) ^ U.shrSH(B, $, 7),
        q = U.rotrSL(B, $, 1) ^ U.rotrSL(B, $, 8) ^ U.shrSL(B, $, 7),
        T = $e[x - 2] | 0,
        j = Re[x - 2] | 0,
        N = U.rotrSH(T, j, 19) ^ U.rotrBH(T, j, 61) ^ U.shrSH(T, j, 6),
        _ = U.rotrSL(T, j, 19) ^ U.rotrBL(T, j, 61) ^ U.shrSL(T, j, 6),
        k = U.add4L(q, _, Re[x - 7], Re[x - 16]),
        m = U.add4H(k, A, N, $e[x - 7], $e[x - 16]);
      ($e[x] = m | 0), (Re[x] = k | 0);
    }
    let {
      Ah: n,
      Al: i,
      Bh: s,
      Bl: o,
      Ch: c,
      Cl: a,
      Dh: l,
      Dl: f,
      Eh: u,
      El: h,
      Fh: d,
      Fl: p,
      Gh: y,
      Gl: v,
      Hh: w,
      Hl: C,
    } = this;
    for (let x = 0; x < 80; x++) {
      const B = U.rotrSH(u, h, 14) ^ U.rotrSH(u, h, 18) ^ U.rotrBH(u, h, 41),
        $ = U.rotrSL(u, h, 14) ^ U.rotrSL(u, h, 18) ^ U.rotrBL(u, h, 41),
        A = (u & d) ^ (~u & y),
        q = (h & p) ^ (~h & v),
        T = U.add5L(C, $, q, La[x], Re[x]),
        j = U.add5H(T, w, B, A, Ta[x], $e[x]),
        N = T | 0,
        _ = U.rotrSH(n, i, 28) ^ U.rotrBH(n, i, 34) ^ U.rotrBH(n, i, 39),
        k = U.rotrSL(n, i, 28) ^ U.rotrBL(n, i, 34) ^ U.rotrBL(n, i, 39),
        m = (n & s) ^ (n & c) ^ (s & c),
        S = (i & o) ^ (i & a) ^ (o & a);
      (w = y | 0),
        (C = v | 0),
        (y = d | 0),
        (v = p | 0),
        (d = u | 0),
        (p = h | 0),
        ({ h: u, l: h } = U.add(l | 0, f | 0, j | 0, N | 0)),
        (l = c | 0),
        (f = a | 0),
        (c = s | 0),
        (a = o | 0),
        (s = n | 0),
        (o = i | 0);
      const g = U.add3L(N, k, S);
      (n = U.add3H(g, j, _, m)), (i = g | 0);
    }
    ({ h: n, l: i } = U.add(this.Ah | 0, this.Al | 0, n | 0, i | 0)),
      ({ h: s, l: o } = U.add(this.Bh | 0, this.Bl | 0, s | 0, o | 0)),
      ({ h: c, l: a } = U.add(this.Ch | 0, this.Cl | 0, c | 0, a | 0)),
      ({ h: l, l: f } = U.add(this.Dh | 0, this.Dl | 0, l | 0, f | 0)),
      ({ h: u, l: h } = U.add(this.Eh | 0, this.El | 0, u | 0, h | 0)),
      ({ h: d, l: p } = U.add(this.Fh | 0, this.Fl | 0, d | 0, p | 0)),
      ({ h: y, l: v } = U.add(this.Gh | 0, this.Gl | 0, y | 0, v | 0)),
      ({ h: w, l: C } = U.add(this.Hh | 0, this.Hl | 0, w | 0, C | 0)),
      this.set(n, i, s, o, c, a, l, f, u, h, d, p, y, v, w, C);
  }
  roundClean() {
    $e.fill(0), Re.fill(0);
  }
  destroy() {
    this.buffer.fill(0),
      this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
class Na extends cr {
  constructor() {
    super(),
      (this.Ah = -1942145080),
      (this.Al = 424955298),
      (this.Bh = 1944164710),
      (this.Bl = -1982016298),
      (this.Ch = 502970286),
      (this.Cl = 855612546),
      (this.Dh = 1738396948),
      (this.Dl = 1479516111),
      (this.Eh = 258812777),
      (this.El = 2077511080),
      (this.Fh = 2011393907),
      (this.Fl = 79989058),
      (this.Gh = 1067287976),
      (this.Gl = 1780299464),
      (this.Hh = 286451373),
      (this.Hl = -1848208735),
      (this.outputLen = 28);
  }
}
class Ma extends cr {
  constructor() {
    super(),
      (this.Ah = 573645204),
      (this.Al = -64227540),
      (this.Bh = -1621794909),
      (this.Bl = -934517566),
      (this.Ch = 596883563),
      (this.Cl = 1867755857),
      (this.Dh = -1774684391),
      (this.Dl = 1497426621),
      (this.Eh = -1775747358),
      (this.El = -1467023389),
      (this.Fh = -1101128155),
      (this.Fl = 1401305490),
      (this.Gh = 721525244),
      (this.Gl = 746961066),
      (this.Hh = 246885852),
      (this.Hl = -2117784414),
      (this.outputLen = 32);
  }
}
class ja extends cr {
  constructor() {
    super(),
      (this.Ah = -876896931),
      (this.Al = -1056596264),
      (this.Bh = 1654270250),
      (this.Bl = 914150663),
      (this.Ch = -1856437926),
      (this.Cl = 812702999),
      (this.Dh = 355462360),
      (this.Dl = -150054599),
      (this.Eh = 1731405415),
      (this.El = -4191439),
      (this.Fh = -1900787065),
      (this.Fl = 1750603025),
      (this.Gh = -619958771),
      (this.Gl = 1694076839),
      (this.Hh = 1203062813),
      (this.Hl = -1090891868),
      (this.outputLen = 48);
  }
}
const Jr = Ge(() => new cr());
Ge(() => new Na());
Ge(() => new Ma());
Ge(() => new ja());
const Pa = (t) => t[0] === "あいこくしん";
function fo(t) {
  if (typeof t != "string")
    throw new TypeError(`Invalid mnemonic type: ${typeof t}`);
  return t.normalize("NFKD");
}
function ho(t) {
  const e = fo(t),
    r = e.split(" ");
  if (![12, 15, 18, 21, 24].includes(r.length))
    throw new Error("Invalid mnemonic");
  return { nfkd: e, words: r };
}
function po(t) {
  ue.bytes(t, 16, 20, 24, 28, 32);
}
function Ha(t, e = 128) {
  if ((ue.number(e), e % 32 !== 0 || e > 256))
    throw new TypeError("Invalid entropy");
  return Fa(nr(e / 8), t);
}
const Ua = (t) => {
  const e = 8 - t.length / 4;
  return new Uint8Array([(me(t)[0] >> e) << e]);
};
function yo(t) {
  if (!Array.isArray(t) || t.length !== 2048 || typeof t[0] != "string")
    throw new Error("Worlist: expected array of 2048 strings");
  return (
    t.forEach((e) => {
      if (typeof e != "string")
        throw new Error(`Wordlist: non-string element: ${e}`);
    }),
    Pt.chain(Pt.checksum(1, Ua), Pt.radix2(11, !0), Pt.alphabet(t))
  );
}
function za(t, e) {
  const { words: r } = ho(t),
    n = yo(e).decode(r);
  return po(n), n;
}
function Fa(t, e) {
  return (
    po(t),
    yo(e)
      .encode(t)
      .join(Pa(e) ? "　" : " ")
  );
}
function Da(t, e) {
  try {
    za(t, e);
  } catch {
    return !1;
  }
  return !0;
}
const Ka = (t) => fo(`mnemonic${t}`);
function Ga(t, e = "") {
  return ha(Jr, ho(t).nfkd, Ka(e), { c: 2048, dkLen: 64 });
}
const Wa = new Uint8Array([
    7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8,
  ]),
  go = Uint8Array.from({ length: 16 }, (t, e) => e),
  Va = go.map((t) => (9 * t + 5) % 16);
let ln = [go],
  fn = [Va];
for (let t = 0; t < 4; t++)
  for (let e of [ln, fn]) e.push(e[t].map((r) => Wa[r]));
const vo = [
    [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8],
    [12, 13, 11, 15, 6, 9, 9, 7, 12, 15, 11, 13, 7, 8, 7, 7],
    [13, 15, 14, 11, 7, 7, 6, 8, 13, 14, 13, 12, 5, 5, 6, 9],
    [14, 11, 12, 14, 8, 6, 5, 5, 15, 12, 15, 14, 9, 9, 8, 6],
    [15, 12, 13, 13, 9, 5, 8, 6, 14, 11, 12, 11, 8, 6, 5, 5],
  ].map((t) => new Uint8Array(t)),
  Za = ln.map((t, e) => t.map((r) => vo[e][r])),
  Ya = fn.map((t, e) => t.map((r) => vo[e][r])),
  Ja = new Uint32Array([0, 1518500249, 1859775393, 2400959708, 2840853838]),
  Xa = new Uint32Array([1352829926, 1548603684, 1836072691, 2053994217, 0]),
  Ut = (t, e) => (t << e) | (t >>> (32 - e));
function Mn(t, e, r, n) {
  return t === 0
    ? e ^ r ^ n
    : t === 1
    ? (e & r) | (~e & n)
    : t === 2
    ? (e | ~r) ^ n
    : t === 3
    ? (e & n) | (r & ~n)
    : e ^ (r | ~n);
}
const zt = new Uint32Array(16);
class Qa extends tn {
  constructor() {
    super(64, 20, 8, !0),
      (this.h0 = 1732584193),
      (this.h1 = -271733879),
      (this.h2 = -1732584194),
      (this.h3 = 271733878),
      (this.h4 = -1009589776);
  }
  get() {
    const { h0: e, h1: r, h2: n, h3: i, h4: s } = this;
    return [e, r, n, i, s];
  }
  set(e, r, n, i, s) {
    (this.h0 = e | 0),
      (this.h1 = r | 0),
      (this.h2 = n | 0),
      (this.h3 = i | 0),
      (this.h4 = s | 0);
  }
  process(e, r) {
    for (let d = 0; d < 16; d++, r += 4) zt[d] = e.getUint32(r, !0);
    let n = this.h0 | 0,
      i = n,
      s = this.h1 | 0,
      o = s,
      c = this.h2 | 0,
      a = c,
      l = this.h3 | 0,
      f = l,
      u = this.h4 | 0,
      h = u;
    for (let d = 0; d < 5; d++) {
      const p = 4 - d,
        y = Ja[d],
        v = Xa[d],
        w = ln[d],
        C = fn[d],
        x = Za[d],
        B = Ya[d];
      for (let $ = 0; $ < 16; $++) {
        const A = (Ut(n + Mn(d, s, c, l) + zt[w[$]] + y, x[$]) + u) | 0;
        (n = u), (u = l), (l = Ut(c, 10) | 0), (c = s), (s = A);
      }
      for (let $ = 0; $ < 16; $++) {
        const A = (Ut(i + Mn(p, o, a, f) + zt[C[$]] + v, B[$]) + h) | 0;
        (i = h), (h = f), (f = Ut(a, 10) | 0), (a = o), (o = A);
      }
    }
    this.set(
      (this.h1 + c + f) | 0,
      (this.h2 + l + h) | 0,
      (this.h3 + u + i) | 0,
      (this.h4 + n + o) | 0,
      (this.h0 + s + a) | 0
    );
  }
  roundClean() {
    zt.fill(0);
  }
  destroy() {
    (this.destroyed = !0), this.buffer.fill(0), this.set(0, 0, 0, 0, 0);
  }
}
const ec = Ge(() => new Qa()),
  Ft = oe.ProjectivePoint,
  Cr = sa(me);
function jn(t) {
  return BigInt(`0x${ae(t)}`);
}
function tc(t) {
  return Ue(t.toString(16).padStart(64, "0"));
}
const rc = Fi("Bitcoin seed"),
  Ar = { private: 76066276, public: 76067358 },
  Or = 2147483648,
  nc = (t) => ec(me(t)),
  ic = (t) => He(t).getUint32(0, !1),
  Dt = (t) => {
    if (!Number.isSafeInteger(t) || t < 0 || t > 2 ** 32 - 1)
      throw new Error(`Invalid number=${t}. Should be from 0 to 2 ** 32 - 1`);
    const e = new Uint8Array(4);
    return He(e).setUint32(0, t, !1), e;
  };
class je {
  get fingerprint() {
    if (!this.pubHash) throw new Error("No publicKey set!");
    return ic(this.pubHash);
  }
  get identifier() {
    return this.pubHash;
  }
  get pubKeyHash() {
    return this.pubHash;
  }
  get privateKey() {
    return this.privKeyBytes || null;
  }
  get publicKey() {
    return this.pubKey || null;
  }
  get privateExtendedKey() {
    const e = this.privateKey;
    if (!e) throw new Error("No private key");
    return Cr.encode(
      this.serialize(this.versions.private, Je(new Uint8Array([0]), e))
    );
  }
  get publicExtendedKey() {
    if (!this.pubKey) throw new Error("No public key");
    return Cr.encode(this.serialize(this.versions.public, this.pubKey));
  }
  static fromMasterSeed(e, r = Ar) {
    if ((Ne(e), 8 * e.length < 128 || 8 * e.length > 512))
      throw new Error(
        `HDKey: wrong seed length=${e.length}. Should be between 128 and 512 bits; 256 bits is advised)`
      );
    const n = It(Jr, rc, e);
    return new je({
      versions: r,
      chainCode: n.slice(32),
      privateKey: n.slice(0, 32),
    });
  }
  static fromExtendedKey(e, r = Ar) {
    const n = Cr.decode(e),
      i = He(n),
      s = i.getUint32(0, !1),
      o = {
        versions: r,
        depth: n[4],
        parentFingerprint: i.getUint32(5, !1),
        index: i.getUint32(9, !1),
        chainCode: n.slice(13, 45),
      },
      c = n.slice(45),
      a = c[0] === 0;
    if (s !== r[a ? "private" : "public"]) throw new Error("Version mismatch");
    return a
      ? new je({ ...o, privateKey: c.slice(1) })
      : new je({ ...o, publicKey: c });
  }
  static fromJSON(e) {
    return je.fromExtendedKey(e.xpriv);
  }
  constructor(e) {
    if (
      ((this.depth = 0),
      (this.index = 0),
      (this.chainCode = null),
      (this.parentFingerprint = 0),
      !e || typeof e != "object")
    )
      throw new Error("HDKey.constructor must not be called directly");
    if (
      ((this.versions = e.versions || Ar),
      (this.depth = e.depth || 0),
      (this.chainCode = e.chainCode),
      (this.index = e.index || 0),
      (this.parentFingerprint = e.parentFingerprint || 0),
      !this.depth && (this.parentFingerprint || this.index))
    )
      throw new Error(
        "HDKey: zero depth with non-zero index/parent fingerprint"
      );
    if (e.publicKey && e.privateKey)
      throw new Error("HDKey: publicKey and privateKey at same time.");
    if (e.privateKey) {
      if (!oe.utils.isValidPrivateKey(e.privateKey))
        throw new Error("Invalid private key");
      (this.privKey =
        typeof e.privateKey == "bigint" ? e.privateKey : jn(e.privateKey)),
        (this.privKeyBytes = tc(this.privKey)),
        (this.pubKey = oe.getPublicKey(e.privateKey, !0));
    } else if (e.publicKey)
      this.pubKey = Ft.fromHex(e.publicKey).toRawBytes(!0);
    else throw new Error("HDKey: no public or private key provided");
    this.pubHash = nc(this.pubKey);
  }
  derive(e) {
    if (!/^[mM]'?/.test(e)) throw new Error('Path must start with "m" or "M"');
    if (/^[mM]'?$/.test(e)) return this;
    const r = e.replace(/^[mM]'?\//, "").split("/");
    let n = this;
    for (const i of r) {
      const s = /^(\d+)('?)$/.exec(i);
      if (!s || s.length !== 3) throw new Error(`Invalid child index: ${i}`);
      let o = +s[1];
      if (!Number.isSafeInteger(o) || o >= Or) throw new Error("Invalid index");
      s[2] === "'" && (o += Or), (n = n.deriveChild(o));
    }
    return n;
  }
  deriveChild(e) {
    if (!this.pubKey || !this.chainCode)
      throw new Error("No publicKey or chainCode set");
    let r = Dt(e);
    if (e >= Or) {
      const c = this.privateKey;
      if (!c) throw new Error("Could not derive hardened child key");
      r = Je(new Uint8Array([0]), c, r);
    } else r = Je(this.pubKey, r);
    const n = It(Jr, this.chainCode, r),
      i = jn(n.slice(0, 32)),
      s = n.slice(32);
    if (!oe.utils.isValidPrivateKey(i))
      throw new Error("Tweak bigger than curve order");
    const o = {
      versions: this.versions,
      chainCode: s,
      depth: this.depth + 1,
      parentFingerprint: this.fingerprint,
      index: e,
    };
    try {
      if (this.privateKey) {
        const c = G(this.privKey + i, oe.CURVE.n);
        if (!oe.utils.isValidPrivateKey(c))
          throw new Error(
            "The tweak was out of range or the resulted private key is invalid"
          );
        o.privateKey = c;
      } else {
        const c = Ft.fromHex(this.pubKey).add(Ft.fromPrivateKey(i));
        if (c.equals(Ft.ZERO))
          throw new Error(
            "The tweak was equal to negative P, which made the result key invalid"
          );
        o.publicKey = c.toRawBytes(!0);
      }
      return new je(o);
    } catch {
      return this.deriveChild(e + 1);
    }
  }
  sign(e) {
    if (!this.privateKey) throw new Error("No privateKey set!");
    return Ne(e, 32), oe.sign(e, this.privKey).toCompactRawBytes();
  }
  verify(e, r) {
    if ((Ne(e, 32), Ne(r, 64), !this.publicKey))
      throw new Error("No publicKey set!");
    let n;
    try {
      n = oe.Signature.fromCompact(r);
    } catch {
      return !1;
    }
    return oe.verify(n, e, this.publicKey);
  }
  wipePrivateData() {
    return (
      (this.privKey = void 0),
      this.privKeyBytes &&
        (this.privKeyBytes.fill(0), (this.privKeyBytes = void 0)),
      this
    );
  }
  toJSON() {
    return { xpriv: this.privateExtendedKey, xpub: this.publicExtendedKey };
  }
  serialize(e, r) {
    if (!this.chainCode) throw new Error("No chainCode set");
    return (
      Ne(r, 33),
      Je(
        Dt(e),
        new Uint8Array([this.depth]),
        Dt(this.parentFingerprint),
        Dt(this.index),
        this.chainCode,
        r
      )
    );
  }
}
var oc = Object.defineProperty,
  V = (t, e) => {
    for (var r in e) oc(t, r, { get: e[r], enumerable: !0 });
  };
function bo(t) {
  return ae(qt.getPublicKey(t));
}
var sc = {};
V(sc, {
  MessageNode: () => _o,
  MessageQueue: () => wo,
  insertEventIntoAscendingList: () => uc,
  insertEventIntoDescendingList: () => cc,
  normalizeURL: () => ac,
  utf8Decoder: () => Se,
  utf8Encoder: () => ge,
});
var Se = new TextDecoder("utf-8"),
  ge = new TextEncoder();
function ac(t) {
  let e = new URL(t);
  return (
    (e.pathname = e.pathname.replace(/\/+/g, "/")),
    e.pathname.endsWith("/") && (e.pathname = e.pathname.slice(0, -1)),
    ((e.port === "80" && e.protocol === "ws:") ||
      (e.port === "443" && e.protocol === "wss:")) &&
      (e.port = ""),
    e.searchParams.sort(),
    (e.hash = ""),
    e.toString()
  );
}
function cc(t, e) {
  var o;
  let r = 0,
    n = t.length - 1,
    i,
    s = r;
  if (n < 0) s = 0;
  else if (e.created_at < t[n].created_at) s = n + 1;
  else if (e.created_at >= t[r].created_at) s = r;
  else
    for (;;) {
      if (n <= r + 1) {
        s = n;
        break;
      }
      if (((i = Math.floor(r + (n - r) / 2)), t[i].created_at > e.created_at))
        r = i;
      else if (t[i].created_at < e.created_at) n = i;
      else {
        s = i;
        break;
      }
    }
  return ((o = t[s]) == null ? void 0 : o.id) !== e.id
    ? [...t.slice(0, s), e, ...t.slice(s)]
    : t;
}
function uc(t, e) {
  var o;
  let r = 0,
    n = t.length - 1,
    i,
    s = r;
  if (n < 0) s = 0;
  else if (e.created_at > t[n].created_at) s = n + 1;
  else if (e.created_at <= t[r].created_at) s = r;
  else
    for (;;) {
      if (n <= r + 1) {
        s = n;
        break;
      }
      if (((i = Math.floor(r + (n - r) / 2)), t[i].created_at < e.created_at))
        r = i;
      else if (t[i].created_at > e.created_at) n = i;
      else {
        s = i;
        break;
      }
    }
  return ((o = t[s]) == null ? void 0 : o.id) !== e.id
    ? [...t.slice(0, s), e, ...t.slice(s)]
    : t;
}
var _o = class {
    constructor(t) {
      M(this, "_value");
      M(this, "_next");
      (this._value = t), (this._next = null);
    }
    get value() {
      return this._value;
    }
    set value(t) {
      this._value = t;
    }
    get next() {
      return this._next;
    }
    set next(t) {
      this._next = t;
    }
  },
  wo = class {
    constructor() {
      M(this, "_first");
      M(this, "_last");
      M(this, "_size");
      (this._first = null), (this._last = null), (this._size = 0);
    }
    get first() {
      return this._first;
    }
    set first(t) {
      this._first = t;
    }
    get last() {
      return this._last;
    }
    set last(t) {
      this._last = t;
    }
    get size() {
      return this._size;
    }
    set size(t) {
      this._size = t;
    }
    enqueue(t) {
      const e = new _o(t);
      return (
        this._size === 0 || !this._last
          ? ((this._first = e), (this._last = e))
          : ((this._last.next = e), (this._last = e)),
        this._size++,
        !0
      );
    }
    dequeue() {
      if (this._size === 0 || !this._first) return null;
      let t = this._first;
      return (this._first = t.next), (t.next = null), this._size--, t.value;
    }
  };
function lc(t = 255) {
  return { kind: t, content: "", tags: [], created_at: 0 };
}
function Ve(t, e) {
  let r = t;
  return (r.pubkey = bo(e)), (r.id = ur(r)), (r.sig = dc(r, e)), r;
}
function fc(t) {
  if (!hn(t))
    throw new Error("can't serialize event with wrong or missing properties");
  return JSON.stringify([0, t.pubkey, t.created_at, t.kind, t.tags, t.content]);
}
function ur(t) {
  let e = me(ge.encode(fc(t)));
  return ae(e);
}
var hc = (t) => t instanceof Object;
function hn(t) {
  if (
    !hc(t) ||
    typeof t.kind != "number" ||
    typeof t.content != "string" ||
    typeof t.created_at != "number" ||
    typeof t.pubkey != "string" ||
    !t.pubkey.match(/^[a-f0-9]{64}$/) ||
    !Array.isArray(t.tags)
  )
    return !1;
  for (let e = 0; e < t.tags.length; e++) {
    let r = t.tags[e];
    if (!Array.isArray(r)) return !1;
    for (let n = 0; n < r.length; n++) if (typeof r[n] == "object") return !1;
  }
  return !0;
}
function lr(t) {
  try {
    return qt.verify(t.sig, ur(t), t.pubkey);
  } catch {
    return !1;
  }
}
function dc(t, e) {
  return ae(qt.sign(ur(t), e));
}
function mo(t, e) {
  if (
    (t.ids &&
      t.ids.indexOf(e.id) === -1 &&
      !t.ids.some((r) => e.id.startsWith(r))) ||
    (t.kinds && t.kinds.indexOf(e.kind) === -1) ||
    (t.authors &&
      t.authors.indexOf(e.pubkey) === -1 &&
      !t.authors.some((r) => e.pubkey.startsWith(r)))
  )
    return !1;
  for (let r in t)
    if (r[0] === "#") {
      let n = r.slice(1),
        i = t[`#${n}`];
      if (
        i &&
        !e.tags.find(([s, o]) => s === r.slice(1) && i.indexOf(o) !== -1)
      )
        return !1;
    }
  return !(
    (t.since && e.created_at < t.since) ||
    (t.until && e.created_at > t.until)
  );
}
function pc(t, e) {
  for (let r = 0; r < t.length; r++) if (mo(t[r], e)) return !0;
  return !1;
}
var yc = {};
V(yc, {
  getHex64: () => fr,
  getInt: () => Eo,
  getSubscriptionId: () => xo,
  matchEventId: () => gc,
  matchEventKind: () => bc,
  matchEventPubkey: () => vc,
});
function fr(t, e) {
  let r = e.length + 3,
    n = t.indexOf(`"${e}":`) + r,
    i = t.slice(n).indexOf('"') + n + 1;
  return t.slice(i, i + 64);
}
function Eo(t, e) {
  let r = e.length,
    n = t.indexOf(`"${e}":`) + r + 3,
    i = t.slice(n),
    s = Math.min(i.indexOf(","), i.indexOf("}"));
  return parseInt(i.slice(0, s), 10);
}
function xo(t) {
  let e = t.slice(0, 22).indexOf('"EVENT"');
  if (e === -1) return null;
  let r = t.slice(e + 7 + 1).indexOf('"');
  if (r === -1) return null;
  let n = e + 7 + 1 + r,
    i = t.slice(n + 1, 80).indexOf('"');
  if (i === -1) return null;
  let s = n + 1 + i;
  return t.slice(n + 1, s);
}
function gc(t, e) {
  return e === fr(t, "id");
}
function vc(t, e) {
  return e === fr(t, "pubkey");
}
function bc(t, e) {
  return e === Eo(t, "kind");
}
var Pn = () => ({
  connect: [],
  disconnect: [],
  error: [],
  notice: [],
  auth: [],
});
function _c(t, e = {}) {
  let { listTimeout: r = 3e3, getTimeout: n = 3e3, countTimeout: i = 3e3 } = e;
  var s,
    o = {},
    c = Pn(),
    a = {},
    l = {},
    f;
  async function u() {
    return (
      f ||
      ((f = new Promise((w, C) => {
        try {
          s = new WebSocket(t);
        } catch (A) {
          C(A);
        }
        (s.onopen = () => {
          c.connect.forEach((A) => A()), w();
        }),
          (s.onerror = () => {
            (f = void 0), c.error.forEach((A) => A()), C();
          }),
          (s.onclose = async () => {
            (f = void 0), c.disconnect.forEach((A) => A());
          });
        let x = new wo(),
          B;
        s.onmessage = (A) => {
          x.enqueue(A.data), B || (B = setInterval($, 0));
        };
        function $() {
          var T, j, N;
          if (x.size === 0) {
            clearInterval(B), (B = null);
            return;
          }
          var A = x.dequeue();
          if (!A) return;
          let q = xo(A);
          if (q) {
            let _ = o[q];
            if (_ && _.alreadyHaveEvent && _.alreadyHaveEvent(fr(A, "id"), t))
              return;
          }
          try {
            let _ = JSON.parse(A);
            switch (_[0]) {
              case "EVENT": {
                let g = _[1],
                  b = _[2];
                hn(b) &&
                  o[g] &&
                  (o[g].skipVerification || lr(b)) &&
                  pc(o[g].filters, b) &&
                  (o[g],
                  (((T = a[g]) == null ? void 0 : T.event) || []).forEach((E) =>
                    E(b)
                  ));
                return;
              }
              case "COUNT":
                let k = _[1],
                  m = _[2];
                o[k] &&
                  (((j = a[k]) == null ? void 0 : j.count) || []).forEach((g) =>
                    g(m)
                  );
                return;
              case "EOSE": {
                let g = _[1];
                g in a && (a[g].eose.forEach((b) => b()), (a[g].eose = []));
                return;
              }
              case "OK": {
                let g = _[1],
                  b = _[2],
                  E = _[3] || "";
                if (g in l) {
                  let { resolve: R, reject: I } = l[g];
                  b ? R(null) : I(new Error(E));
                }
                return;
              }
              case "NOTICE":
                let S = _[1];
                c.notice.forEach((g) => g(S));
                return;
              case "AUTH": {
                let g = _[1];
                (N = c.auth) == null || N.forEach((b) => b(g));
                return;
              }
            }
          } catch {
            return;
          }
        }
      })),
      f)
    );
  }
  function h() {
    return (s == null ? void 0 : s.readyState) === 1;
  }
  async function d() {
    h() || (await u());
  }
  async function p(w) {
    let C = JSON.stringify(w);
    if (!(!h() && (await new Promise((x) => setTimeout(x, 1e3)), !h())))
      try {
        s.send(C);
      } catch (x) {
        console.log(x);
      }
  }
  const y = (
    w,
    {
      verb: C = "REQ",
      skipVerification: x = !1,
      alreadyHaveEvent: B = null,
      id: $ = Math.random().toString().slice(2),
    } = {}
  ) => {
    let A = $;
    return (
      (o[A] = { id: A, filters: w, skipVerification: x, alreadyHaveEvent: B }),
      p([C, A, ...w]),
      {
        sub: (q, T = {}) =>
          y(q || w, {
            skipVerification: T.skipVerification || x,
            alreadyHaveEvent: T.alreadyHaveEvent || B,
            id: A,
          }),
        unsub: () => {
          delete o[A], delete a[A], p(["CLOSE", A]);
        },
        on: (q, T) => {
          (a[A] = a[A] || { event: [], count: [], eose: [] }), a[A][q].push(T);
        },
        off: (q, T) => {
          let j = a[A],
            N = j[q].indexOf(T);
          N >= 0 && j[q].splice(N, 1);
        },
      }
    );
  };
  function v(w, C) {
    return new Promise((x, B) => {
      if (!w.id) {
        B(new Error(`event ${w} has no id`));
        return;
      }
      let $ = w.id;
      p([C, w]), (l[$] = { resolve: x, reject: B });
    });
  }
  return {
    url: t,
    sub: y,
    on: (w, C) => {
      c[w].push(C),
        w === "connect" && (s == null ? void 0 : s.readyState) === 1 && C();
    },
    off: (w, C) => {
      let x = c[w].indexOf(C);
      x !== -1 && c[w].splice(x, 1);
    },
    list: (w, C) =>
      new Promise((x) => {
        let B = y(w, C),
          $ = [],
          A = setTimeout(() => {
            B.unsub(), x($);
          }, r);
        B.on("eose", () => {
          B.unsub(), clearTimeout(A), x($);
        }),
          B.on("event", (q) => {
            $.push(q);
          });
      }),
    get: (w, C) =>
      new Promise((x) => {
        let B = y([w], C),
          $ = setTimeout(() => {
            B.unsub(), x(null);
          }, n);
        B.on("event", (A) => {
          B.unsub(), clearTimeout($), x(A);
        });
      }),
    count: (w) =>
      new Promise((C) => {
        let x = y(w, { ...y, verb: "COUNT" }),
          B = setTimeout(() => {
            x.unsub(), C(null);
          }, i);
        x.on("count", ($) => {
          x.unsub(), clearTimeout(B), C($);
        });
      }),
    async publish(w) {
      await v(w, "EVENT");
    },
    async auth(w) {
      await v(w, "AUTH");
    },
    connect: d,
    close() {
      (c = Pn()),
        (a = {}),
        (l = {}),
        s.readyState === WebSocket.OPEN && (s == null || s.close());
    },
    get status() {
      return (s == null ? void 0 : s.readyState) ?? 3;
    },
  };
}
var we = {};
V(we, {
  BECH32_REGEX: () => So,
  decode: () => hr,
  naddrEncode: () => Sc,
  neventEncode: () => kc,
  noteEncode: () => Ec,
  nprofileEncode: () => xc,
  npubEncode: () => mc,
  nrelayEncode: () => Cc,
  nsecEncode: () => wc,
});
var ko = 5e3,
  So = /[\x21-\x7E]{1,83}1[023456789acdefghjklmnpqrstuvwxyz]{6,}/;
function hr(t) {
  var i, s, o, c, a, l, f;
  let { prefix: e, words: r } = Te.decode(t, ko),
    n = new Uint8Array(Te.fromWords(r));
  switch (e) {
    case "nprofile": {
      let u = Kt(n);
      if (!((i = u[0]) != null && i[0]))
        throw new Error("missing TLV 0 for nprofile");
      if (u[0][0].length !== 32) throw new Error("TLV 0 should be 32 bytes");
      return {
        type: "nprofile",
        data: {
          pubkey: ae(u[0][0]),
          relays: u[1] ? u[1].map((h) => Se.decode(h)) : [],
        },
      };
    }
    case "nevent": {
      let u = Kt(n);
      if (!((s = u[0]) != null && s[0]))
        throw new Error("missing TLV 0 for nevent");
      if (u[0][0].length !== 32) throw new Error("TLV 0 should be 32 bytes");
      if (u[2] && u[2][0].length !== 32)
        throw new Error("TLV 2 should be 32 bytes");
      return {
        type: "nevent",
        data: {
          id: ae(u[0][0]),
          relays: u[1] ? u[1].map((h) => Se.decode(h)) : [],
          author: (o = u[2]) != null && o[0] ? ae(u[2][0]) : void 0,
        },
      };
    }
    case "naddr": {
      let u = Kt(n);
      if (!((c = u[0]) != null && c[0]))
        throw new Error("missing TLV 0 for naddr");
      if (!((a = u[2]) != null && a[0]))
        throw new Error("missing TLV 2 for naddr");
      if (u[2][0].length !== 32) throw new Error("TLV 2 should be 32 bytes");
      if (!((l = u[3]) != null && l[0]))
        throw new Error("missing TLV 3 for naddr");
      if (u[3][0].length !== 4) throw new Error("TLV 3 should be 4 bytes");
      return {
        type: "naddr",
        data: {
          identifier: Se.decode(u[0][0]),
          pubkey: ae(u[2][0]),
          kind: parseInt(ae(u[3][0]), 16),
          relays: u[1] ? u[1].map((h) => Se.decode(h)) : [],
        },
      };
    }
    case "nrelay": {
      let u = Kt(n);
      if (!((f = u[0]) != null && f[0]))
        throw new Error("missing TLV 0 for nrelay");
      return { type: "nrelay", data: Se.decode(u[0][0]) };
    }
    case "nsec":
    case "npub":
    case "note":
      return { type: e, data: ae(n) };
    default:
      throw new Error(`unknown prefix ${e}`);
  }
}
function Kt(t) {
  let e = {},
    r = t;
  for (; r.length > 0; ) {
    let n = r[0],
      i = r[1];
    if (!i) throw new Error(`malformed TLV ${n}`);
    let s = r.slice(2, 2 + i);
    if (((r = r.slice(2 + i)), s.length < i))
      throw new Error(`not enough data to read on TLV ${n}`);
    (e[n] = e[n] || []), e[n].push(s);
  }
  return e;
}
function wc(t) {
  return dn("nsec", t);
}
function mc(t) {
  return dn("npub", t);
}
function Ec(t) {
  return dn("note", t);
}
function Lt(t, e) {
  let r = Te.toWords(e);
  return Te.encode(t, r, ko);
}
function dn(t, e) {
  let r = Ue(e);
  return Lt(t, r);
}
function xc(t) {
  let e = dr({
    0: [Ue(t.pubkey)],
    1: (t.relays || []).map((r) => ge.encode(r)),
  });
  return Lt("nprofile", e);
}
function kc(t) {
  let e = dr({
    0: [Ue(t.id)],
    1: (t.relays || []).map((r) => ge.encode(r)),
    2: t.author ? [Ue(t.author)] : [],
  });
  return Lt("nevent", e);
}
function Sc(t) {
  let e = new ArrayBuffer(4);
  new DataView(e).setUint32(0, t.kind, !1);
  let r = dr({
    0: [ge.encode(t.identifier)],
    1: (t.relays || []).map((n) => ge.encode(n)),
    2: [Ue(t.pubkey)],
    3: [new Uint8Array(e)],
  });
  return Lt("naddr", r);
}
function Cc(t) {
  let e = dr({ 0: [ge.encode(t)] });
  return Lt("nrelay", e);
}
function dr(t) {
  let e = [];
  return (
    Object.entries(t).forEach(([r, n]) => {
      n.forEach((i) => {
        let s = new Uint8Array(i.length + 2);
        s.set([parseInt(r)], 0), s.set([i.length], 1), s.set(i, 2), e.push(s);
      });
    }),
    Je(...e)
  );
}
var Ac = {};
V(Ac, { decrypt: () => Ic, encrypt: () => Oc });
typeof crypto < "u" &&
  !crypto.subtle &&
  crypto.webcrypto &&
  (crypto.subtle = crypto.webcrypto.subtle);
async function Oc(t, e, r) {
  const n = oe.getSharedSecret(t, "02" + e),
    i = Co(n);
  let s = Uint8Array.from(nr(16)),
    o = ge.encode(r),
    c = await crypto.subtle.importKey("raw", i, { name: "AES-CBC" }, !1, [
      "encrypt",
    ]),
    a = await crypto.subtle.encrypt({ name: "AES-CBC", iv: s }, c, o),
    l = Fe.encode(new Uint8Array(a)),
    f = Fe.encode(new Uint8Array(s.buffer));
  return `${l}?iv=${f}`;
}
async function Ic(t, e, r) {
  let [n, i] = r.split("?iv="),
    s = oe.getSharedSecret(t, "02" + e),
    o = Co(s),
    c = await crypto.subtle.importKey("raw", o, { name: "AES-CBC" }, !1, [
      "decrypt",
    ]),
    a = Fe.decode(n),
    l = Fe.decode(i),
    f = await crypto.subtle.decrypt({ name: "AES-CBC", iv: l }, c, a);
  return Se.decode(f);
}
function Co(t) {
  return t.slice(1, 33);
}
var Ao = {};
V(Ao, {
  NIP05_REGEX: () => Oo,
  queryProfile: () => Bc,
  searchDomain: () => Rc,
  useFetchImplementation: () => $c,
});
var Oo = /^(?:([\w.+-]+)@)?([\w.-]+)$/,
  pr;
try {
  pr = fetch;
} catch {}
function $c(t) {
  pr = t;
}
async function Rc(t, e = "") {
  try {
    return (
      await (await pr(`https://${t}/.well-known/nostr.json?name=${e}`)).json()
    ).names;
  } catch {
    return {};
  }
}
async function Bc(t) {
  const e = t.match(Oo);
  if (!e) return null;
  const [r, n = "_", i] = e;
  try {
    const s = await pr(`https://${i}/.well-known/nostr.json?name=${n}`),
      { names: o, relays: c } = qc(await s.json()),
      a = o[n];
    return a ? { pubkey: a, relays: c == null ? void 0 : c[a] } : null;
  } catch {
    return null;
  }
}
function qc(t) {
  const e = { names: {} };
  for (const [r, n] of Object.entries(t.names))
    typeof r == "string" && typeof n == "string" && (e.names[r] = n);
  if (t.relays) {
    e.relays = {};
    for (const [r, n] of Object.entries(t.relays))
      typeof r == "string" &&
        Array.isArray(n) &&
        (e.relays[r] = n.filter((i) => typeof i == "string"));
  }
  return e;
}
var Tc = {};
V(Tc, {
  generateSeedWords: () => Nc,
  privateKeyFromSeedWords: () => Lc,
  validateWords: () => Mc,
});
function Lc(t, e) {
  let n = je.fromMasterSeed(Ga(t, e)).derive("m/44'/1237'/0'/0/0").privateKey;
  if (!n) throw new Error("could not derive private key");
  return ae(n);
}
function Nc() {
  return Ha(uo);
}
function Mc(t) {
  return Da(t, uo);
}
var jc = {};
V(jc, { parse: () => Pc });
function Pc(t) {
  const e = { reply: void 0, root: void 0, mentions: [], profiles: [] },
    r = [];
  for (const n of t.tags)
    n[0] === "e" && n[1] && r.push(n),
      n[0] === "p" &&
        n[1] &&
        e.profiles.push({ pubkey: n[1], relays: n[2] ? [n[2]] : [] });
  for (let n = 0; n < r.length; n++) {
    const i = r[n],
      [s, o, c, a] = i,
      l = { id: o, relays: c ? [c] : [] },
      f = n === 0,
      u = n === r.length - 1;
    if (a === "root") {
      e.root = l;
      continue;
    }
    if (a === "reply") {
      e.reply = l;
      continue;
    }
    if (a === "mention") {
      e.mentions.push(l);
      continue;
    }
    if (f) {
      e.root = l;
      continue;
    }
    if (u) {
      e.reply = l;
      continue;
    }
    e.mentions.push(l);
  }
  return e;
}
var Hc = {};
V(Hc, { getPow: () => Uc });
function Uc(t) {
  return zc(Ue(t));
}
function zc(t) {
  let e, r, n;
  for (r = 0, e = 0; r < t.length && ((n = Fc(t[r])), (e += n), n === 8); r++);
  return e;
}
function Fc(t) {
  let e = 0;
  if (t === 0) return 8;
  for (; (t >>= 1); ) e++;
  return 7 - e;
}
var Dc = {};
V(Dc, {
  finishRepostEvent: () => Kc,
  getRepostedEvent: () => Gc,
  getRepostedEventPointer: () => Io,
});
function Kc(t, e, r, n) {
  return Ve(
    {
      kind: 6,
      tags: [...(t.tags ?? []), ["e", e.id, r], ["p", e.pubkey]],
      content: t.content === "" ? "" : JSON.stringify(e),
      created_at: t.created_at,
    },
    n
  );
}
function Io(t) {
  if (t.kind !== 6) return;
  let e, r;
  for (
    let n = t.tags.length - 1;
    n >= 0 && (e === void 0 || r === void 0);
    n--
  ) {
    const i = t.tags[n];
    i.length >= 2 &&
      (i[0] === "e" && e === void 0
        ? (e = i)
        : i[0] === "p" && r === void 0 && (r = i));
  }
  if (e !== void 0)
    return {
      id: e[1],
      relays: [e[2], r == null ? void 0 : r[2]].filter(
        (n) => typeof n == "string"
      ),
      author: r == null ? void 0 : r[1],
    };
}
function Gc(t, { skipVerification: e } = {}) {
  const r = Io(t);
  if (r === void 0 || t.content === "") return;
  let n;
  try {
    n = JSON.parse(t.content);
  } catch {
    return;
  }
  if (n.id === r.id && !(!e && !lr(n))) return n;
}
var Wc = {};
V(Wc, { NOSTR_URI_REGEX: () => yr, parse: () => Zc, test: () => Vc });
var yr = new RegExp(`nostr:(${So.source})`);
function Vc(t) {
  return typeof t == "string" && new RegExp(`^${yr.source}$`).test(t);
}
function Zc(t) {
  const e = t.match(new RegExp(`^${yr.source}$`));
  if (!e) throw new Error(`Invalid Nostr URI: ${t}`);
  return { uri: e[0], value: e[1], decoded: hr(e[1]) };
}
var Yc = {};
V(Yc, { finishReactionEvent: () => Jc, getReactedEventPointer: () => Xc });
function Jc(t, e, r) {
  const n = e.tags.filter(
    (i) => i.length >= 2 && (i[0] === "e" || i[0] === "p")
  );
  return Ve(
    {
      ...t,
      kind: 7,
      tags: [...(t.tags ?? []), ...n, ["e", e.id], ["p", e.pubkey]],
      content: t.content ?? "+",
    },
    r
  );
}
function Xc(t) {
  if (t.kind !== 7) return;
  let e, r;
  for (
    let n = t.tags.length - 1;
    n >= 0 && (e === void 0 || r === void 0);
    n--
  ) {
    const i = t.tags[n];
    i.length >= 2 &&
      (i[0] === "e" && e === void 0
        ? (e = i)
        : i[0] === "p" && r === void 0 && (r = i));
  }
  if (!(e === void 0 || r === void 0))
    return {
      id: e[1],
      relays: [e[2], r[2]].filter((n) => n !== void 0),
      author: r[1],
    };
}
var Qc = {};
V(Qc, { createDelegation: () => eu, getDelegator: () => tu });
function eu(t, e) {
  let r = [];
  (e.kind || -1) >= 0 && r.push(`kind=${e.kind}`),
    e.until && r.push(`created_at<${e.until}`),
    e.since && r.push(`created_at>${e.since}`);
  let n = r.join("&");
  if (n === "")
    throw new Error("refusing to create a delegation without any conditions");
  let i = me(ge.encode(`nostr:delegation:${e.pubkey}:${n}`)),
    s = ae(qt.sign(i, t));
  return { from: bo(t), to: e.pubkey, cond: n, sig: s };
}
function tu(t) {
  let e = t.tags.find((c) => c[0] === "delegation" && c.length >= 4);
  if (!e) return null;
  let r = e[1],
    n = e[2],
    i = e[3],
    s = n.split("&");
  for (let c = 0; c < s.length; c++) {
    let [a, l, f] = s[c].split(/\b/);
    if (!(a === "kind" && l === "=" && t.kind === parseInt(f))) {
      if (a === "created_at" && l === "<" && t.created_at < parseInt(f))
        continue;
      if (a === "created_at" && l === ">" && t.created_at > parseInt(f))
        continue;
      return null;
    }
  }
  let o = me(ge.encode(`nostr:delegation:${t.pubkey}:${n}`));
  return qt.verify(i, o, r) ? r : null;
}
var ru = {};
V(ru, { matchAll: () => nu, regex: () => pn, replaceAll: () => iu });
var pn = () => new RegExp(`\\b${yr.source}\\b`, "g");
function* nu(t) {
  const e = t.matchAll(pn());
  for (const r of e)
    try {
      const [n, i] = r;
      yield {
        uri: n,
        value: i,
        decoded: hr(i),
        start: r.index,
        end: r.index + n.length,
      };
    } catch {}
}
function iu(t, e) {
  return t.replaceAll(pn(), (r, n) => e({ uri: r, value: n, decoded: hr(n) }));
}
var ou = {};
V(ou, {
  channelCreateEvent: () => su,
  channelHideMessageEvent: () => uu,
  channelMessageEvent: () => cu,
  channelMetadataEvent: () => au,
  channelMuteUserEvent: () => lu,
});
var su = (t, e) => {
    let r;
    if (typeof t.content == "object") r = JSON.stringify(t.content);
    else if (typeof t.content == "string") r = t.content;
    else return;
    return Ve(
      {
        kind: 40,
        tags: [...(t.tags ?? [])],
        content: r,
        created_at: t.created_at,
      },
      e
    );
  },
  au = (t, e) => {
    let r;
    if (typeof t.content == "object") r = JSON.stringify(t.content);
    else if (typeof t.content == "string") r = t.content;
    else return;
    return Ve(
      {
        kind: 41,
        tags: [["e", t.channel_create_event_id], ...(t.tags ?? [])],
        content: r,
        created_at: t.created_at,
      },
      e
    );
  },
  cu = (t, e) => {
    const r = [["e", t.channel_create_event_id, t.relay_url, "root"]];
    return (
      t.reply_to_channel_message_event_id &&
        r.push([
          "e",
          t.reply_to_channel_message_event_id,
          t.relay_url,
          "reply",
        ]),
      Ve(
        {
          kind: 42,
          tags: [...r, ...(t.tags ?? [])],
          content: t.content,
          created_at: t.created_at,
        },
        e
      )
    );
  },
  uu = (t, e) => {
    let r;
    if (typeof t.content == "object") r = JSON.stringify(t.content);
    else if (typeof t.content == "string") r = t.content;
    else return;
    return Ve(
      {
        kind: 43,
        tags: [["e", t.channel_message_event_id], ...(t.tags ?? [])],
        content: r,
        created_at: t.created_at,
      },
      e
    );
  },
  lu = (t, e) => {
    let r;
    if (typeof t.content == "object") r = JSON.stringify(t.content);
    else if (typeof t.content == "string") r = t.content;
    else return;
    return Ve(
      {
        kind: 44,
        tags: [["p", t.pubkey_to_mute], ...(t.tags ?? [])],
        content: r,
        created_at: t.created_at,
      },
      e
    );
  },
  fu = {};
V(fu, { useFetchImplementation: () => hu, validateGithub: () => du });
var yn;
try {
  yn = fetch;
} catch {}
function hu(t) {
  yn = t;
}
async function du(t, e, r) {
  try {
    return (
      (await (await yn(`https://gist.github.com/${e}/${r}/raw`)).text()) ===
      `Verifying that I control the following Nostr public key: ${t}`
    );
  } catch {
    return !1;
  }
}
var pu = {};
V(pu, { authenticate: () => yu });
var yu = async ({ challenge: t, relay: e, sign: r }) => {
    const n = {
      kind: 22242,
      created_at: Math.floor(Date.now() / 1e3),
      tags: [
        ["relay", e.url],
        ["challenge", t],
      ],
      content: "",
    };
    return e.auth(await r(n));
  },
  $o = {};
V($o, {
  getZapEndpoint: () => vu,
  makeZapReceipt: () => wu,
  makeZapRequest: () => bu,
  useFetchImplementation: () => gu,
  validateZapRequest: () => _u,
});
var gn;
try {
  gn = fetch;
} catch {}
function gu(t) {
  gn = t;
}
async function vu(t) {
  try {
    let e = "",
      { lud06: r, lud16: n } = JSON.parse(t.content);
    if (r) {
      let { words: o } = Te.decode(r, 1e3),
        c = Te.fromWords(o);
      e = Se.decode(c);
    } else if (n) {
      let [o, c] = n.split("@");
      e = `https://${c}/.well-known/lnurlp/${o}`;
    } else return null;
    let s = await (await gn(e)).json();
    if (s.allowsNostr && s.nostrPubkey) return s.callback;
  } catch {}
  return null;
}
function bu({ profile: t, event: e, amount: r, relays: n, comment: i = "" }) {
  if (!r) throw new Error("amount not given");
  if (!t) throw new Error("profile not given");
  let s = {
    kind: 9734,
    created_at: Math.round(Date.now() / 1e3),
    content: i,
    tags: [
      ["p", t],
      ["amount", r.toString()],
      ["relays", ...n],
    ],
  };
  return e && s.tags.push(["e", e]), s;
}
function _u(t) {
  let e;
  try {
    e = JSON.parse(t);
  } catch {
    return "Invalid zap request JSON.";
  }
  if (!hn(e)) return "Zap request is not a valid Nostr event.";
  if (!lr(e)) return "Invalid signature on zap request.";
  let r = e.tags.find(([s, o]) => s === "p" && o);
  if (!r) return "Zap request doesn't have a 'p' tag.";
  if (!r[1].match(/^[a-f0-9]{64}$/))
    return "Zap request 'p' tag is not valid hex.";
  let n = e.tags.find(([s, o]) => s === "e" && o);
  return n && !n[1].match(/^[a-f0-9]{64}$/)
    ? "Zap request 'e' tag is not valid hex."
    : e.tags.find(([s, o]) => s === "relays" && o)
    ? null
    : "Zap request doesn't have a 'relays' tag.";
}
function wu({ zapRequest: t, preimage: e, bolt11: r, paidAt: n }) {
  let s = JSON.parse(t).tags.filter(
      ([c]) => c === "e" || c === "p" || c === "a"
    ),
    o = {
      kind: 9735,
      created_at: Math.round(n.getTime() / 1e3),
      content: "",
      tags: [...s, ["bolt11", r], ["description", t]],
    };
  return e && o.tags.push(["preimage", e]), o;
}
var mu = {};
V(mu, { getToken: () => Eu, validateToken: () => xu });
var Ro = "Nostr ";
async function Eu(t, e, r, n = !1) {
  if (!t || !e) throw new Error("Missing loginUrl or httpMethod");
  if (e !== "get" && e !== "post") throw new Error("Unknown httpMethod");
  const i = lc(27235);
  (i.tags = [
    ["u", t],
    ["method", e],
  ]),
    (i.created_at = Math.round(new Date().getTime() / 1e3));
  const s = await r(i);
  return (n ? Ro : "") + Fe.encode(ge.encode(JSON.stringify(s)));
}
async function xu(t, e, r) {
  if (!t) throw new Error("Missing token");
  t = t.replace(Ro, "");
  const n = Se.decode(Fe.decode(t));
  if (!n || n.length === 0 || !n.startsWith("{"))
    throw new Error("Invalid token");
  const i = JSON.parse(n);
  if (!i) throw new Error("Invalid nostr event");
  if (!lr(i)) throw new Error("Invalid nostr event, signature invalid");
  if (i.kind !== 27235) throw new Error("Invalid nostr event, kind invalid");
  if (!i.created_at) throw new Error("Invalid nostr event, created_at invalid");
  if (Math.round(new Date().getTime() / 1e3) - i.created_at > 60)
    throw new Error("Invalid nostr event, expired");
  const s = i.tags.find((c) => c[0] === "u");
  if (
    (s == null ? void 0 : s.length) !== 1 &&
    (s == null ? void 0 : s[1]) !== e
  )
    throw new Error("Invalid nostr event, url tag invalid");
  const o = i.tags.find((c) => c[0] === "method");
  if (
    (o == null ? void 0 : o.length) !== 1 &&
    (o == null ? void 0 : o[1].toLowerCase()) !== r.toLowerCase()
  )
    throw new Error("Invalid nostr event, method tag invalid");
  return !0;
}
var Nt = {};
Object.defineProperty(Nt, "__esModule", { value: !0 });
Nt.is_node = void 0;
var Ir = null;
function ku() {
  return (
    Ir === null &&
      (Ir =
        typeof O == "object" &&
        typeof O.process == "object" &&
        typeof O.process.versions == "object" &&
        typeof O.process.versions.node < "u"),
    Ir
  );
}
Nt.is_node = ku;
var $r = {},
  Rr,
  Hn;
function Su() {
  if (Hn) return Rr;
  Hn = 1;
  var t = function () {
    if (typeof self == "object" && self) return self;
    if (typeof window == "object" && window) return window;
    throw new Error("Unable to resolve global `this`");
  };
  return (
    (Rr = (function () {
      if (this) return this;
      if (typeof globalThis == "object" && globalThis) return globalThis;
      try {
        Object.defineProperty(Object.prototype, "__global__", {
          get: function () {
            return this;
          },
          configurable: !0,
        });
      } catch {
        return t();
      }
      try {
        return __global__ || t();
      } finally {
        delete Object.prototype.__global__;
      }
    })()),
    Rr
  );
}
const Cu = "websocket",
  Au =
    "Websocket Client & Server Library implementing the WebSocket protocol as specified in RFC 6455.",
  Ou = [
    "websocket",
    "websockets",
    "socket",
    "networking",
    "comet",
    "push",
    "RFC-6455",
    "realtime",
    "server",
    "client",
  ],
  Iu =
    "Brian McKelvey <theturtle32@gmail.com> (https://github.com/theturtle32)",
  $u = ["Iñaki Baz Castillo <ibc@aliax.net> (http://dev.sipdoc.net)"],
  Ru = "1.0.34",
  Bu = {
    type: "git",
    url: "https://github.com/theturtle32/WebSocket-Node.git",
  },
  qu = "https://github.com/theturtle32/WebSocket-Node",
  Tu = { node: ">=4.0.0" },
  Lu = {
    bufferutil: "^4.0.1",
    debug: "^2.2.0",
    "es5-ext": "^0.10.50",
    "typedarray-to-buffer": "^3.1.5",
    "utf-8-validate": "^5.0.2",
    yaeti: "^0.0.6",
  },
  Nu = {
    "buffer-equal": "^1.0.0",
    gulp: "^4.0.2",
    "gulp-jshint": "^2.0.4",
    "jshint-stylish": "^2.2.1",
    jshint: "^2.0.0",
    tape: "^4.9.1",
  },
  Mu = { verbose: !1 },
  ju = { test: "tape test/unit/*.js", gulp: "gulp" },
  Pu = "index",
  Hu = { lib: "./lib" },
  Uu = "lib/browser.js",
  zu = "Apache-2.0",
  Fu = {
    name: Cu,
    description: Au,
    keywords: Ou,
    author: Iu,
    contributors: $u,
    version: Ru,
    repository: Bu,
    homepage: qu,
    engines: Tu,
    dependencies: Lu,
    devDependencies: Nu,
    config: Mu,
    scripts: ju,
    main: Pu,
    directories: Hu,
    browser: Uu,
    license: zu,
  };
var Br, Un;
function Du() {
  return Un || ((Un = 1), (Br = Fu.version)), Br;
}
var qr, zn;
function Ku() {
  if (zn) return qr;
  zn = 1;
  var t;
  if (typeof globalThis == "object") t = globalThis;
  else
    try {
      t = Su();
    } catch {
    } finally {
      if ((!t && typeof window < "u" && (t = window), !t))
        throw new Error("Could not determine global this");
    }
  var e = t.WebSocket || t.MozWebSocket,
    r = Du();
  function n(i, s) {
    var o;
    return s ? (o = new e(i, s)) : (o = new e(i)), o;
  }
  return (
    e &&
      ["CONNECTING", "OPEN", "CLOSING", "CLOSED"].forEach(function (i) {
        Object.defineProperty(n, i, {
          get: function () {
            return e[i];
          },
        });
      }),
    (qr = { w3cwebsocket: e ? n : null, version: r }),
    qr
  );
}
var Gt = {},
  Tr = {},
  ot = {},
  st = {},
  at = {},
  ct = {},
  Fn;
function Gu() {
  if (Fn) return ct;
  (Fn = 1),
    Object.defineProperty(ct, "__esModule", { value: !0 }),
    (ct.ForOfAdaptor = void 0);
  var t = (function () {
    function e(r, n) {
      (this.it_ = r), (this.last_ = n);
    }
    return (
      (e.prototype.next = function () {
        if (this.it_.equals(this.last_)) return { done: !0, value: void 0 };
        var r = this.it_;
        return (this.it_ = this.it_.next()), { done: !1, value: r.value };
      }),
      (e.prototype[Symbol.iterator] = function () {
        return this;
      }),
      e
    );
  })();
  return (ct.ForOfAdaptor = t), ct;
}
var Dn;
function vn() {
  if (Dn) return at;
  Dn = 1;
  var t =
    (O && O.__values) ||
    function (n) {
      var i = typeof Symbol == "function" && Symbol.iterator,
        s = i && n[i],
        o = 0;
      if (s) return s.call(n);
      if (n && typeof n.length == "number")
        return {
          next: function () {
            return (
              n && o >= n.length && (n = void 0),
              { value: n && n[o++], done: !n }
            );
          },
        };
      throw new TypeError(
        i ? "Object is not iterable." : "Symbol.iterator is not defined."
      );
    };
  Object.defineProperty(at, "__esModule", { value: !0 }),
    (at.Container = void 0);
  var e = Gu(),
    r = (function () {
      function n() {}
      return (
        (n.prototype.empty = function () {
          return this.size() === 0;
        }),
        (n.prototype.rbegin = function () {
          return this.end().reverse();
        }),
        (n.prototype.rend = function () {
          return this.begin().reverse();
        }),
        (n.prototype[Symbol.iterator] = function () {
          return new e.ForOfAdaptor(this.begin(), this.end());
        }),
        (n.prototype.toJSON = function () {
          var i,
            s,
            o = [];
          try {
            for (var c = t(this), a = c.next(); !a.done; a = c.next()) {
              var l = a.value;
              o.push(l);
            }
          } catch (f) {
            i = { error: f };
          } finally {
            try {
              a && !a.done && (s = c.return) && s.call(c);
            } finally {
              if (i) throw i.error;
            }
          }
          return o;
        }),
        n
      );
    })();
  return (at.Container = r), at;
}
var ut = {},
  Kn;
function bn() {
  if (Kn) return ut;
  Kn = 1;
  var t =
    (O && O.__read) ||
    function (r, n) {
      var i = typeof Symbol == "function" && r[Symbol.iterator];
      if (!i) return r;
      var s = i.call(r),
        o,
        c = [],
        a;
      try {
        for (; (n === void 0 || n-- > 0) && !(o = s.next()).done; )
          c.push(o.value);
      } catch (l) {
        a = { error: l };
      } finally {
        try {
          o && !o.done && (i = s.return) && i.call(s);
        } finally {
          if (a) throw a.error;
        }
      }
      return c;
    };
  Object.defineProperty(ut, "__esModule", { value: !0 }),
    (ut.NativeArrayIterator = void 0);
  var e = (function () {
    function r(n, i) {
      (this.data_ = n), (this.index_ = i);
    }
    return (
      (r.prototype.index = function () {
        return this.index_;
      }),
      Object.defineProperty(r.prototype, "value", {
        get: function () {
          return this.data_[this.index_];
        },
        enumerable: !1,
        configurable: !0,
      }),
      (r.prototype.prev = function () {
        return --this.index_, this;
      }),
      (r.prototype.next = function () {
        return ++this.index_, this;
      }),
      (r.prototype.advance = function (n) {
        return (this.index_ += n), this;
      }),
      (r.prototype.equals = function (n) {
        return this.data_ === n.data_ && this.index_ === n.index_;
      }),
      (r.prototype.swap = function (n) {
        var i, s;
        (i = t([n.data_, this.data_], 2)),
          (this.data_ = i[0]),
          (n.data_ = i[1]),
          (s = t([n.index_, this.index_], 2)),
          (this.index_ = s[0]),
          (n.index_ = s[1]);
      }),
      r
    );
  })();
  return (ut.NativeArrayIterator = e), ut;
}
var Gn;
function Wu() {
  if (Gn) return st;
  Gn = 1;
  var t =
    (O && O.__extends) ||
    (function () {
      var i = function (s, o) {
        return (
          (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (c, a) {
                c.__proto__ = a;
              }) ||
            function (c, a) {
              for (var l in a)
                Object.prototype.hasOwnProperty.call(a, l) && (c[l] = a[l]);
            }),
          i(s, o)
        );
      };
      return function (s, o) {
        if (typeof o != "function" && o !== null)
          throw new TypeError(
            "Class extends value " + String(o) + " is not a constructor or null"
          );
        i(s, o);
        function c() {
          this.constructor = s;
        }
        s.prototype =
          o === null
            ? Object.create(o)
            : ((c.prototype = o.prototype), new c());
      };
    })();
  Object.defineProperty(st, "__esModule", { value: !0 }),
    (st.SetContainer = void 0);
  var e = vn(),
    r = bn(),
    n = (function (i) {
      t(s, i);
      function s(o) {
        var c = i.call(this) || this;
        return (c.data_ = o(c)), c;
      }
      return (
        (s.prototype.assign = function (o, c) {
          this.clear(), this.insert(o, c);
        }),
        (s.prototype.clear = function () {
          this.data_.clear();
        }),
        (s.prototype.begin = function () {
          return this.data_.begin();
        }),
        (s.prototype.end = function () {
          return this.data_.end();
        }),
        (s.prototype.has = function (o) {
          return !this.find(o).equals(this.end());
        }),
        (s.prototype.size = function () {
          return this.data_.size();
        }),
        (s.prototype.push = function () {
          for (var o = [], c = 0; c < arguments.length; c++)
            o[c] = arguments[c];
          if (o.length === 0) return this.size();
          var a = new r.NativeArrayIterator(o, 0),
            l = new r.NativeArrayIterator(o, o.length);
          return this._Insert_by_range(a, l), this.size();
        }),
        (s.prototype.insert = function () {
          for (var o = [], c = 0; c < arguments.length; c++)
            o[c] = arguments[c];
          return o.length === 1
            ? this._Insert_by_key(o[0])
            : o[0].next instanceof Function && o[1].next instanceof Function
            ? this._Insert_by_range(o[0], o[1])
            : this._Insert_by_hint(o[0], o[1]);
        }),
        (s.prototype.erase = function () {
          for (var o = [], c = 0; c < arguments.length; c++)
            o[c] = arguments[c];
          return o.length === 1 &&
            !(o[0] instanceof this.end().constructor && o[0].source() === this)
            ? this._Erase_by_val(o[0])
            : o.length === 1
            ? this._Erase_by_range(o[0])
            : this._Erase_by_range(o[0], o[1]);
        }),
        (s.prototype._Erase_by_range = function (o, c) {
          c === void 0 && (c = o.next());
          var a = this.data_.erase(o, c);
          return this._Handle_erase(o, c), a;
        }),
        s
      );
    })(e.Container);
  return (st.SetContainer = n), st;
}
var Lr = {},
  lt = {},
  ft = {},
  ht = {},
  Wn;
function Vu() {
  if (Wn) return ht;
  Wn = 1;
  var t =
    (O && O.__extends) ||
    (function () {
      var r = function (n, i) {
        return (
          (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (s, o) {
                s.__proto__ = o;
              }) ||
            function (s, o) {
              for (var c in o)
                Object.prototype.hasOwnProperty.call(o, c) && (s[c] = o[c]);
            }),
          r(n, i)
        );
      };
      return function (n, i) {
        if (typeof i != "function" && i !== null)
          throw new TypeError(
            "Class extends value " + String(i) + " is not a constructor or null"
          );
        r(n, i);
        function s() {
          this.constructor = n;
        }
        n.prototype =
          i === null
            ? Object.create(i)
            : ((s.prototype = i.prototype), new s());
      };
    })();
  Object.defineProperty(ht, "__esModule", { value: !0 }),
    (ht.Exception = void 0);
  var e = (function (r) {
    t(n, r);
    function n(i) {
      var s = this.constructor,
        o = r.call(this, i) || this,
        c = s.prototype;
      return (
        Object.setPrototypeOf ? Object.setPrototypeOf(o, c) : (o.__proto__ = c),
        o
      );
    }
    return (
      Object.defineProperty(n.prototype, "name", {
        get: function () {
          return this.constructor.name;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (n.prototype.what = function () {
        return this.message;
      }),
      (n.prototype.toJSON = function () {
        return { name: this.name, message: this.message, stack: this.stack };
      }),
      n
    );
  })(Error);
  return (ht.Exception = e), ht;
}
var Vn;
function Bo() {
  if (Vn) return ft;
  Vn = 1;
  var t =
    (O && O.__extends) ||
    (function () {
      var n = function (i, s) {
        return (
          (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (o, c) {
                o.__proto__ = c;
              }) ||
            function (o, c) {
              for (var a in c)
                Object.prototype.hasOwnProperty.call(c, a) && (o[a] = c[a]);
            }),
          n(i, s)
        );
      };
      return function (i, s) {
        if (typeof s != "function" && s !== null)
          throw new TypeError(
            "Class extends value " + String(s) + " is not a constructor or null"
          );
        n(i, s);
        function o() {
          this.constructor = i;
        }
        i.prototype =
          s === null
            ? Object.create(s)
            : ((o.prototype = s.prototype), new o());
      };
    })();
  Object.defineProperty(ft, "__esModule", { value: !0 }),
    (ft.LogicError = void 0);
  var e = Vu(),
    r = (function (n) {
      t(i, n);
      function i(s) {
        return n.call(this, s) || this;
      }
      return i;
    })(e.Exception);
  return (ft.LogicError = r), ft;
}
var Zn;
function qo() {
  if (Zn) return lt;
  Zn = 1;
  var t =
    (O && O.__extends) ||
    (function () {
      var n = function (i, s) {
        return (
          (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (o, c) {
                o.__proto__ = c;
              }) ||
            function (o, c) {
              for (var a in c)
                Object.prototype.hasOwnProperty.call(c, a) && (o[a] = c[a]);
            }),
          n(i, s)
        );
      };
      return function (i, s) {
        if (typeof s != "function" && s !== null)
          throw new TypeError(
            "Class extends value " + String(s) + " is not a constructor or null"
          );
        n(i, s);
        function o() {
          this.constructor = i;
        }
        i.prototype =
          s === null
            ? Object.create(s)
            : ((o.prototype = s.prototype), new o());
      };
    })();
  Object.defineProperty(lt, "__esModule", { value: !0 }),
    (lt.InvalidArgument = void 0);
  var e = Bo(),
    r = (function (n) {
      t(i, n);
      function i(s) {
        return n.call(this, s) || this;
      }
      return i;
    })(e.LogicError);
  return (lt.InvalidArgument = r), lt;
}
var dt = {},
  Yn;
function Zu() {
  if (Yn) return dt;
  Yn = 1;
  var t =
    (O && O.__extends) ||
    (function () {
      var n = function (i, s) {
        return (
          (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (o, c) {
                o.__proto__ = c;
              }) ||
            function (o, c) {
              for (var a in c)
                Object.prototype.hasOwnProperty.call(c, a) && (o[a] = c[a]);
            }),
          n(i, s)
        );
      };
      return function (i, s) {
        if (typeof s != "function" && s !== null)
          throw new TypeError(
            "Class extends value " + String(s) + " is not a constructor or null"
          );
        n(i, s);
        function o() {
          this.constructor = i;
        }
        i.prototype =
          s === null
            ? Object.create(s)
            : ((o.prototype = s.prototype), new o());
      };
    })();
  Object.defineProperty(dt, "__esModule", { value: !0 }),
    (dt.OutOfRange = void 0);
  var e = Bo(),
    r = (function (n) {
      t(i, n);
      function i(s) {
        return n.call(this, s) || this;
      }
      return i;
    })(e.LogicError);
  return (dt.OutOfRange = r), dt;
}
var Jn;
function gr() {
  return (
    Jn ||
      ((Jn = 1),
      (function (t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ErrorGenerator = void 0);
        var e = qo(),
          r = Zu();
        (function (n) {
          function i(d) {
            if (typeof d == "string") return d;
            var p = d.constructor.name;
            return (
              d.constructor.__MODULE &&
                (p = "".concat(d.constructor.__MODULE, ".").concat(p)),
              "std.".concat(p)
            );
          }
          n.get_class_name = i;
          function s(d, p) {
            return new r.OutOfRange(
              "Error on "
                .concat(i(d), ".")
                .concat(p, "(): it's empty container.")
            );
          }
          n.empty = s;
          function o(d, p, y) {
            return new r.OutOfRange(
              "Error on "
                .concat(i(d), ".")
                .concat(p, "(): parametric index is negative -> (index = ")
                .concat(y, ").")
            );
          }
          n.negative_index = o;
          function c(d, p, y, v) {
            return new r.OutOfRange(
              "Error on "
                .concat(i(d), ".")
                .concat(
                  p,
                  "(): parametric index is equal or greater than size -> (index = "
                )
                .concat(y, ", size: ")
                .concat(v, ").")
            );
          }
          n.excessive_index = c;
          function a(d, p) {
            return new e.InvalidArgument(
              "Error on "
                .concat(i(d), ".")
                .concat(
                  p,
                  "(): parametric iterator is not this container's own."
                )
            );
          }
          n.not_my_iterator = a;
          function l(d, p) {
            return new e.InvalidArgument(
              "Error on "
                .concat(i(d), ".")
                .concat(
                  p,
                  "(): parametric iterator, it already has been erased."
                )
            );
          }
          n.erased_iterator = l;
          function f(d, p, y) {
            return new r.OutOfRange(
              "Error on "
                .concat(i(d), ".")
                .concat(
                  p,
                  "(): parametric iterator is directing negative position -> (index = "
                )
                .concat(y, ").")
            );
          }
          n.negative_iterator = f;
          function u(d, p) {
            p === void 0 && (p = "end");
            var y = i(d);
            return new r.OutOfRange(
              "Error on "
                .concat(y, ".Iterator.value: cannot access to the ")
                .concat(y, ".")
                .concat(p, "().value.")
            );
          }
          n.iterator_end_value = u;
          function h(d, p, y) {
            throw new r.OutOfRange(
              "Error on "
                .concat(i(d), ".")
                .concat(p, "(): unable to find the matched key -> ")
                .concat(y)
            );
          }
          n.key_nout_found = h;
        })(t.ErrorGenerator || (t.ErrorGenerator = {}));
      })(Lr)),
    Lr
  );
}
var Xn;
function Yu() {
  if (Xn) return ot;
  Xn = 1;
  var t =
      (O && O.__extends) ||
      (function () {
        var o = function (c, a) {
          return (
            (o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (l, f) {
                  l.__proto__ = f;
                }) ||
              function (l, f) {
                for (var u in f)
                  Object.prototype.hasOwnProperty.call(f, u) && (l[u] = f[u]);
              }),
            o(c, a)
          );
        };
        return function (c, a) {
          if (typeof a != "function" && a !== null)
            throw new TypeError(
              "Class extends value " +
                String(a) +
                " is not a constructor or null"
            );
          o(c, a);
          function l() {
            this.constructor = c;
          }
          c.prototype =
            a === null
              ? Object.create(a)
              : ((l.prototype = a.prototype), new l());
        };
      })(),
    e =
      (O && O.__read) ||
      function (o, c) {
        var a = typeof Symbol == "function" && o[Symbol.iterator];
        if (!a) return o;
        var l = a.call(o),
          f,
          u = [],
          h;
        try {
          for (; (c === void 0 || c-- > 0) && !(f = l.next()).done; )
            u.push(f.value);
        } catch (d) {
          h = { error: d };
        } finally {
          try {
            f && !f.done && (a = l.return) && a.call(l);
          } finally {
            if (h) throw h.error;
          }
        }
        return u;
      },
    r =
      (O && O.__spreadArray) ||
      function (o, c, a) {
        if (a || arguments.length === 2)
          for (var l = 0, f = c.length, u; l < f; l++)
            (u || !(l in c)) &&
              (u || (u = Array.prototype.slice.call(c, 0, l)), (u[l] = c[l]));
        return o.concat(u || Array.prototype.slice.call(c));
      };
  Object.defineProperty(ot, "__esModule", { value: !0 }),
    (ot.UniqueSet = void 0);
  var n = Wu(),
    i = gr(),
    s = (function (o) {
      t(c, o);
      function c() {
        return (o !== null && o.apply(this, arguments)) || this;
      }
      return (
        (c.prototype.count = function (a) {
          return this.find(a).equals(this.end()) ? 0 : 1;
        }),
        (c.prototype.insert = function () {
          for (var a = [], l = 0; l < arguments.length; l++)
            a[l] = arguments[l];
          return o.prototype.insert.apply(this, r([], e(a), !1));
        }),
        (c.prototype._Insert_by_range = function (a, l) {
          for (; !a.equals(l); a = a.next()) this._Insert_by_key(a.value);
        }),
        (c.prototype.extract = function (a) {
          return a instanceof this.end().constructor
            ? this._Extract_by_iterator(a)
            : this._Extract_by_val(a);
        }),
        (c.prototype._Extract_by_val = function (a) {
          var l = this.find(a);
          if (l.equals(this.end()) === !0)
            throw i.ErrorGenerator.key_nout_found(this, "extract", a);
          return this._Erase_by_range(l), a;
        }),
        (c.prototype._Extract_by_iterator = function (a) {
          return a.equals(this.end()) === !0 || this.has(a.value) === !1
            ? this.end()
            : (this._Erase_by_range(a), a);
        }),
        (c.prototype._Erase_by_val = function (a) {
          var l = this.find(a);
          return l.equals(this.end()) === !0 ? 0 : (this._Erase_by_range(l), 1);
        }),
        (c.prototype.merge = function (a) {
          for (var l = a.begin(); !l.equals(a.end()); )
            this.has(l.value) === !1
              ? (this.insert(l.value), (l = a.erase(l)))
              : (l = l.next());
        }),
        c
      );
    })(n.SetContainer);
  return (ot.UniqueSet = s), ot;
}
var Nr = {},
  Mr = {},
  Qn;
function Ju() {
  return (
    Qn ||
      ((Qn = 1),
      (function (t) {
        var e =
            (O && O.__read) ||
            function (n, i) {
              var s = typeof Symbol == "function" && n[Symbol.iterator];
              if (!s) return n;
              var o = s.call(n),
                c,
                a = [],
                l;
              try {
                for (; (i === void 0 || i-- > 0) && !(c = o.next()).done; )
                  a.push(c.value);
              } catch (f) {
                l = { error: f };
              } finally {
                try {
                  c && !c.done && (s = o.return) && s.call(o);
                } finally {
                  if (l) throw l.error;
                }
              }
              return a;
            },
          r =
            (O && O.__spreadArray) ||
            function (n, i, s) {
              if (s || arguments.length === 2)
                for (var o = 0, c = i.length, a; o < c; o++)
                  (a || !(o in i)) &&
                    (a || (a = Array.prototype.slice.call(i, 0, o)),
                    (a[o] = i[o]));
              return n.concat(a || Array.prototype.slice.call(i));
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.IAssociativeContainer = void 0),
          (function (n) {
            function i(s) {
              for (var o = [], c = 1; c < arguments.length; c++)
                o[c - 1] = arguments[c];
              var a, l;
              return (
                o.length >= 1 && o[0] instanceof Array
                  ? ((a = function () {
                      var f = o[0];
                      s.push.apply(s, r([], e(f), !1));
                    }),
                    (l = o.slice(1)))
                  : o.length >= 2 &&
                    o[0].next instanceof Function &&
                    o[1].next instanceof Function
                  ? ((a = function () {
                      var f = o[0],
                        u = o[1];
                      s.assign(f, u);
                    }),
                    (l = o.slice(2)))
                  : ((a = null), (l = o)),
                { ramda: a, tail: l }
              );
            }
            n.construct = i;
          })(t.IAssociativeContainer || (t.IAssociativeContainer = {}));
      })(Mr)),
    Mr
  );
}
var pt = {},
  yt = {},
  gt = {},
  ei;
function Xu() {
  if (ei) return gt;
  (ei = 1),
    Object.defineProperty(gt, "__esModule", { value: !0 }),
    (gt._Get_root = void 0);
  var t = Nt;
  function e() {
    return (
      r === null &&
        ((r = (0, t.is_node)() ? O : self),
        r.__s_iUID === void 0 && (r.__s_iUID = 0)),
      r
    );
  }
  gt._Get_root = e;
  var r = null;
  return gt;
}
var ti;
function To() {
  if (ti) return yt;
  (ti = 1),
    Object.defineProperty(yt, "__esModule", { value: !0 }),
    (yt.get_uid = void 0);
  var t = Xu();
  function e(r) {
    if (r instanceof Object) {
      if (r.hasOwnProperty("__get_m_iUID") === !1) {
        var n = ++(0, t._Get_root)().__s_iUID;
        Object.defineProperty(r, "__get_m_iUID", {
          value: function () {
            return n;
          },
        });
      }
      return r.__get_m_iUID();
    } else return r === void 0 ? -1 : 0;
  }
  return (yt.get_uid = e), yt;
}
var ri;
function _n() {
  if (ri) return pt;
  ri = 1;
  var t =
    (O && O.__values) ||
    function (a) {
      var l = typeof Symbol == "function" && Symbol.iterator,
        f = l && a[l],
        u = 0;
      if (f) return f.call(a);
      if (a && typeof a.length == "number")
        return {
          next: function () {
            return (
              a && u >= a.length && (a = void 0),
              { value: a && a[u++], done: !a }
            );
          },
        };
      throw new TypeError(
        l ? "Object is not iterable." : "Symbol.iterator is not defined."
      );
    };
  Object.defineProperty(pt, "__esModule", { value: !0 }), (pt.hash = void 0);
  var e = To();
  function r() {
    for (var a, l, f = [], u = 0; u < arguments.length; u++)
      f[u] = arguments[u];
    var h = o;
    try {
      for (var d = t(f), p = d.next(); !p.done; p = d.next()) {
        var y = p.value;
        y = y && y.valueOf();
        var v = typeof y;
        if (v === "boolean") h = n(y, h);
        else if (v === "number" || v === "bigint") h = i(y, h);
        else if (v === "string") h = s(y, h);
        else if (y instanceof Object && y.hashCode instanceof Function) {
          var w = y.hashCode();
          if (f.length === 1) return w;
          (h = h ^ w), (h *= c);
        } else h = i((0, e.get_uid)(y), h);
      }
    } catch (C) {
      a = { error: C };
    } finally {
      try {
        p && !p.done && (l = d.return) && l.call(d);
      } finally {
        if (a) throw a.error;
      }
    }
    return Math.abs(h);
  }
  pt.hash = r;
  function n(a, l) {
    return (l ^= a ? 1 : 0), (l *= c), l;
  }
  function i(a, l) {
    return s(a.toString(), l);
  }
  function s(a, l) {
    for (var f = 0; f < a.length; ++f) (l ^= a.charCodeAt(f)), (l *= c);
    return Math.abs(l);
  }
  var o = 2166136261,
    c = 16777619;
  return pt;
}
var re = {},
  ni;
function wn() {
  if (ni) return re;
  (ni = 1),
    Object.defineProperty(re, "__esModule", { value: !0 }),
    (re.greater_equal =
      re.greater =
      re.less_equal =
      re.less =
      re.not_equal_to =
      re.equal_to =
        void 0);
  var t = To();
  function e(c, a) {
    return (
      (c = c && c.valueOf()),
      (a = a && a.valueOf()),
      c instanceof Object && c.equals instanceof Function
        ? c.equals(a)
        : c === a
    );
  }
  re.equal_to = e;
  function r(c, a) {
    return !e(c, a);
  }
  re.not_equal_to = r;
  function n(c, a) {
    return (
      (c = c.valueOf()),
      (a = a.valueOf()),
      c instanceof Object
        ? c.less instanceof Function
          ? c.less(a)
          : (0, t.get_uid)(c) < (0, t.get_uid)(a)
        : c < a
    );
  }
  re.less = n;
  function i(c, a) {
    return n(c, a) || e(c, a);
  }
  re.less_equal = i;
  function s(c, a) {
    return !i(c, a);
  }
  re.greater = s;
  function o(c, a) {
    return !n(c, a);
  }
  return (re.greater_equal = o), re;
}
var ii;
function Lo() {
  return (
    ii ||
      ((ii = 1),
      (function (t) {
        var e =
            (O && O.__read) ||
            function (o, c) {
              var a = typeof Symbol == "function" && o[Symbol.iterator];
              if (!a) return o;
              var l = a.call(o),
                f,
                u = [],
                h;
              try {
                for (; (c === void 0 || c-- > 0) && !(f = l.next()).done; )
                  u.push(f.value);
              } catch (d) {
                h = { error: d };
              } finally {
                try {
                  f && !f.done && (a = l.return) && a.call(l);
                } finally {
                  if (h) throw h.error;
                }
              }
              return u;
            },
          r =
            (O && O.__spreadArray) ||
            function (o, c, a) {
              if (a || arguments.length === 2)
                for (var l = 0, f = c.length, u; l < f; l++)
                  (u || !(l in c)) &&
                    (u || (u = Array.prototype.slice.call(c, 0, l)),
                    (u[l] = c[l]));
              return o.concat(u || Array.prototype.slice.call(c));
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.IHashContainer = void 0);
        var n = Ju(),
          i = _n(),
          s = wn();
        (function (o) {
          function c(a, l, f) {
            for (var u = [], h = 3; h < arguments.length; h++)
              u[h - 3] = arguments[h];
            var d = null,
              p = i.hash,
              y = s.equal_to;
            if (u.length === 1 && u[0] instanceof l) {
              var v = u[0];
              (p = v.hash_function()),
                (y = v.key_eq()),
                (d = function () {
                  var C = v.begin(),
                    x = v.end();
                  a.assign(C, x);
                });
            } else {
              var w = n.IAssociativeContainer.construct.apply(
                n.IAssociativeContainer,
                r([a], e(u), !1)
              );
              (d = w.ramda),
                w.tail.length >= 1 && (p = w.tail[0]),
                w.tail.length >= 2 && (y = w.tail[1]);
            }
            f(p, y), d !== null && d();
          }
          o.construct = c;
        })(t.IHashContainer || (t.IHashContainer = {}));
      })(Nr)),
    Nr
  );
}
var jr = {},
  vt = {},
  bt = {},
  oi;
function mn() {
  if (oi) return bt;
  (oi = 1),
    Object.defineProperty(bt, "__esModule", { value: !0 }),
    (bt.ListIterator = void 0);
  var t = gr(),
    e = (function () {
      function r(n, i, s) {
        (this.prev_ = n), (this.next_ = i), (this.value_ = s);
      }
      return (
        (r._Set_prev = function (n, i) {
          n.prev_ = i;
        }),
        (r._Set_next = function (n, i) {
          n.next_ = i;
        }),
        (r.prototype.prev = function () {
          return this.prev_;
        }),
        (r.prototype.next = function () {
          return this.next_;
        }),
        Object.defineProperty(r.prototype, "value", {
          get: function () {
            return this._Try_value(), this.value_;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (r.prototype._Try_value = function () {
          if (this.value_ === void 0 && this.equals(this.source().end()) === !0)
            throw t.ErrorGenerator.iterator_end_value(this.source());
        }),
        (r.prototype.equals = function (n) {
          return this === n;
        }),
        r
      );
    })();
  return (bt.ListIterator = e), bt;
}
var _t = {},
  si;
function Qu() {
  if (si) return _t;
  (si = 1),
    Object.defineProperty(_t, "__esModule", { value: !0 }),
    (_t.Repeater = void 0);
  var t = (function () {
    function e(r, n) {
      (this.index_ = r), (this.value_ = n);
    }
    return (
      (e.prototype.index = function () {
        return this.index_;
      }),
      Object.defineProperty(e.prototype, "value", {
        get: function () {
          return this.value_;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype.next = function () {
        return ++this.index_, this;
      }),
      (e.prototype.equals = function (r) {
        return this.index_ === r.index_;
      }),
      e
    );
  })();
  return (_t.Repeater = t), _t;
}
var ne = {},
  ai;
function el() {
  if (ai) return ne;
  (ai = 1),
    Object.defineProperty(ne, "__esModule", { value: !0 }),
    (ne.next =
      ne.prev =
      ne.advance =
      ne.distance =
      ne.size =
      ne.empty =
        void 0);
  var t = qo();
  function e(a) {
    return a instanceof Array ? a.length !== 0 : a.empty();
  }
  ne.empty = e;
  function r(a) {
    return a instanceof Array ? a.length : a.size();
  }
  ne.size = r;
  function n(a, l) {
    if (a.index instanceof Function) return i(a, l);
    for (var f = 0; !a.equals(l); a = a.next()) ++f;
    return f;
  }
  ne.distance = n;
  function i(a, l) {
    var f = a.index(),
      u = l.index();
    return a.base instanceof Function ? f - u : u - f;
  }
  function s(a, l) {
    if (l === 0) return a;
    if (a.advance instanceof Function) return a.advance(l);
    var f;
    if (l < 0) {
      if (!(a.prev instanceof Function))
        throw new t.InvalidArgument(
          "Error on std.advance(): parametric iterator is not a bi-directional iterator, thus advancing to negative direction is not possible."
        );
      (f = function (u) {
        return u.prev();
      }),
        (l = -l);
    } else
      f = function (u) {
        return u.next();
      };
    for (; l-- > 0; ) a = f(a);
    return a;
  }
  ne.advance = s;
  function o(a, l) {
    return l === void 0 && (l = 1), l === 1 ? a.prev() : s(a, -l);
  }
  ne.prev = o;
  function c(a, l) {
    return l === void 0 && (l = 1), l === 1 ? a.next() : s(a, l);
  }
  return (ne.next = c), ne;
}
var ci;
function No() {
  if (ci) return vt;
  ci = 1;
  var t =
      (O && O.__extends) ||
      (function () {
        var l = function (f, u) {
          return (
            (l =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (h, d) {
                  h.__proto__ = d;
                }) ||
              function (h, d) {
                for (var p in d)
                  Object.prototype.hasOwnProperty.call(d, p) && (h[p] = d[p]);
              }),
            l(f, u)
          );
        };
        return function (f, u) {
          if (typeof u != "function" && u !== null)
            throw new TypeError(
              "Class extends value " +
                String(u) +
                " is not a constructor or null"
            );
          l(f, u);
          function h() {
            this.constructor = f;
          }
          f.prototype =
            u === null
              ? Object.create(u)
              : ((h.prototype = u.prototype), new h());
        };
      })(),
    e =
      (O && O.__read) ||
      function (l, f) {
        var u = typeof Symbol == "function" && l[Symbol.iterator];
        if (!u) return l;
        var h = u.call(l),
          d,
          p = [],
          y;
        try {
          for (; (f === void 0 || f-- > 0) && !(d = h.next()).done; )
            p.push(d.value);
        } catch (v) {
          y = { error: v };
        } finally {
          try {
            d && !d.done && (u = h.return) && u.call(h);
          } finally {
            if (y) throw y.error;
          }
        }
        return p;
      };
  Object.defineProperty(vt, "__esModule", { value: !0 }),
    (vt.ListContainer = void 0);
  var r = vn(),
    n = mn(),
    i = Qu(),
    s = bn(),
    o = el(),
    c = gr(),
    a = (function (l) {
      t(f, l);
      function f() {
        var u = l.call(this) || this;
        return (u.end_ = u._Create_iterator(null, null)), u.clear(), u;
      }
      return (
        (f.prototype.assign = function (u, h) {
          this.clear(), this.insert(this.end(), u, h);
        }),
        (f.prototype.clear = function () {
          n.ListIterator._Set_prev(this.end_, this.end_),
            n.ListIterator._Set_next(this.end_, this.end_),
            (this.begin_ = this.end_),
            (this.size_ = 0);
        }),
        (f.prototype.resize = function (u) {
          var h = u - this.size();
          h > 0
            ? this.insert(this.end(), h, void 0)
            : h < 0 && this.erase((0, o.advance)(this.end(), -h), this.end());
        }),
        (f.prototype.begin = function () {
          return this.begin_;
        }),
        (f.prototype.end = function () {
          return this.end_;
        }),
        (f.prototype.size = function () {
          return this.size_;
        }),
        (f.prototype.push_front = function (u) {
          this.insert(this.begin_, u);
        }),
        (f.prototype.push_back = function (u) {
          this.insert(this.end_, u);
        }),
        (f.prototype.pop_front = function () {
          if (this.empty() === !0)
            throw c.ErrorGenerator.empty(
              this.end_.source().constructor.name,
              "pop_front"
            );
          this.erase(this.begin_);
        }),
        (f.prototype.pop_back = function () {
          if (this.empty() === !0)
            throw c.ErrorGenerator.empty(
              this.end_.source().constructor.name,
              "pop_back"
            );
          this.erase(this.end_.prev());
        }),
        (f.prototype.push = function () {
          for (var u = [], h = 0; h < arguments.length; h++)
            u[h] = arguments[h];
          if (u.length === 0) return this.size();
          var d = new s.NativeArrayIterator(u, 0),
            p = new s.NativeArrayIterator(u, u.length);
          return this._Insert_by_range(this.end(), d, p), this.size();
        }),
        (f.prototype.insert = function (u) {
          for (var h = [], d = 1; d < arguments.length; d++)
            h[d - 1] = arguments[d];
          if (u.source() !== this.end_.source())
            throw c.ErrorGenerator.not_my_iterator(
              this.end_.source(),
              "insert"
            );
          if (u.erased_ === !0)
            throw c.ErrorGenerator.erased_iterator(
              this.end_.source(),
              "insert"
            );
          return h.length === 1
            ? this._Insert_by_repeating_val(u, 1, h[0])
            : h.length === 2 && typeof h[0] == "number"
            ? this._Insert_by_repeating_val(u, h[0], h[1])
            : this._Insert_by_range(u, h[0], h[1]);
        }),
        (f.prototype._Insert_by_repeating_val = function (u, h, d) {
          var p = new i.Repeater(0, d),
            y = new i.Repeater(h);
          return this._Insert_by_range(u, p, y);
        }),
        (f.prototype._Insert_by_range = function (u, h, d) {
          for (
            var p = u.prev(), y = null, v = 0, w = h;
            w.equals(d) === !1;
            w = w.next()
          ) {
            var C = this._Create_iterator(p, null, w.value);
            v === 0 && (y = C), n.ListIterator._Set_next(p, C), (p = C), ++v;
          }
          return (
            u.equals(this.begin()) === !0 && (this.begin_ = y),
            n.ListIterator._Set_next(p, u),
            n.ListIterator._Set_prev(u, p),
            (this.size_ += v),
            y
          );
        }),
        (f.prototype.erase = function (u, h) {
          return h === void 0 && (h = u.next()), this._Erase_by_range(u, h);
        }),
        (f.prototype._Erase_by_range = function (u, h) {
          if (u.source() !== this.end_.source())
            throw c.ErrorGenerator.not_my_iterator(
              this.end_.source(),
              "insert"
            );
          if (u.erased_ === !0)
            throw c.ErrorGenerator.erased_iterator(
              this.end_.source(),
              "insert"
            );
          if (u.equals(this.end_)) return this.end_;
          var d = u.prev();
          n.ListIterator._Set_next(d, h), n.ListIterator._Set_prev(h, d);
          for (var p = u; !p.equals(h); p = p.next())
            (p.erased_ = !0), --this.size_;
          return u.equals(this.begin_) && (this.begin_ = h), h;
        }),
        (f.prototype.swap = function (u) {
          var h, d, p;
          (h = e([u.begin_, this.begin_], 2)),
            (this.begin_ = h[0]),
            (u.begin_ = h[1]),
            (d = e([u.end_, this.end_], 2)),
            (this.end_ = d[0]),
            (u.end_ = d[1]),
            (p = e([u.size_, this.size_], 2)),
            (this.size_ = p[0]),
            (u.size_ = p[1]);
        }),
        f
      );
    })(r.Container);
  return (vt.ListContainer = a), vt;
}
var wt = {},
  ui;
function Mo() {
  if (ui) return wt;
  (ui = 1),
    Object.defineProperty(wt, "__esModule", { value: !0 }),
    (wt.ReverseIterator = void 0);
  var t = (function () {
    function e(r) {
      this.base_ = r.prev();
    }
    return (
      (e.prototype.source = function () {
        return this.base_.source();
      }),
      (e.prototype.base = function () {
        return this.base_.next();
      }),
      Object.defineProperty(e.prototype, "value", {
        get: function () {
          return this.base_.value;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype.prev = function () {
        return this._Create_neighbor(this.base().next());
      }),
      (e.prototype.next = function () {
        return this._Create_neighbor(this.base_);
      }),
      (e.prototype.equals = function (r) {
        return this.base_.equals(r.base_);
      }),
      e
    );
  })();
  return (wt.ReverseIterator = t), wt;
}
var li;
function tl() {
  return (
    li ||
      ((li = 1),
      (function (t) {
        var e =
            (O && O.__extends) ||
            (function () {
              var c = function (a, l) {
                return (
                  (c =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (f, u) {
                        f.__proto__ = u;
                      }) ||
                    function (f, u) {
                      for (var h in u)
                        Object.prototype.hasOwnProperty.call(u, h) &&
                          (f[h] = u[h]);
                    }),
                  c(a, l)
                );
              };
              return function (a, l) {
                if (typeof l != "function" && l !== null)
                  throw new TypeError(
                    "Class extends value " +
                      String(l) +
                      " is not a constructor or null"
                  );
                c(a, l);
                function f() {
                  this.constructor = a;
                }
                a.prototype =
                  l === null
                    ? Object.create(l)
                    : ((f.prototype = l.prototype), new f());
              };
            })(),
          r =
            (O && O.__read) ||
            function (c, a) {
              var l = typeof Symbol == "function" && c[Symbol.iterator];
              if (!l) return c;
              var f = l.call(c),
                u,
                h = [],
                d;
              try {
                for (; (a === void 0 || a-- > 0) && !(u = f.next()).done; )
                  h.push(u.value);
              } catch (p) {
                d = { error: p };
              } finally {
                try {
                  u && !u.done && (l = f.return) && l.call(f);
                } finally {
                  if (d) throw d.error;
                }
              }
              return h;
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.SetElementList = void 0);
        var n = No(),
          i = mn(),
          s = Mo(),
          o = (function (c) {
            e(a, c);
            function a(l) {
              var f = c.call(this) || this;
              return (f.associative_ = l), f;
            }
            return (
              (a.prototype._Create_iterator = function (l, f, u) {
                return a.Iterator.create(this, l, f, u);
              }),
              (a._Swap_associative = function (l, f) {
                var u;
                (u = r([f.associative_, l.associative_], 2)),
                  (l.associative_ = u[0]),
                  (f.associative_ = u[1]);
              }),
              (a.prototype.associative = function () {
                return this.associative_;
              }),
              a
            );
          })(n.ListContainer);
        (t.SetElementList = o),
          (function (c) {
            var a = (function (f) {
              e(u, f);
              function u(h, d, p, y) {
                var v = f.call(this, d, p, y) || this;
                return (v.source_ = h), v;
              }
              return (
                (u.create = function (h, d, p, y) {
                  return new u(h, d, p, y);
                }),
                (u.prototype.reverse = function () {
                  return new l(this);
                }),
                (u.prototype.source = function () {
                  return this.source_.associative();
                }),
                u
              );
            })(i.ListIterator);
            c.Iterator = a;
            var l = (function (f) {
              e(u, f);
              function u() {
                return (f !== null && f.apply(this, arguments)) || this;
              }
              return (
                (u.prototype._Create_neighbor = function (h) {
                  return new u(h);
                }),
                u
              );
            })(s.ReverseIterator);
            c.ReverseIterator = l;
          })((o = t.SetElementList || (t.SetElementList = {}))),
          (t.SetElementList = o);
      })(jr)),
    jr
  );
}
var mt = {},
  Et = {},
  fi;
function jo() {
  if (fi) return Et;
  fi = 1;
  var t =
    (O && O.__values) ||
    function (i) {
      var s = typeof Symbol == "function" && Symbol.iterator,
        o = s && i[s],
        c = 0;
      if (o) return o.call(i);
      if (i && typeof i.length == "number")
        return {
          next: function () {
            return (
              i && c >= i.length && (i = void 0),
              { value: i && i[c++], done: !i }
            );
          },
        };
      throw new TypeError(
        s ? "Object is not iterable." : "Symbol.iterator is not defined."
      );
    };
  Object.defineProperty(Et, "__esModule", { value: !0 }),
    (Et.HashBuckets = void 0);
  var e = (function () {
    function i(s, o) {
      (this.fetcher_ = s),
        (this.hasher_ = o),
        (this.max_load_factor_ = n),
        (this.data_ = []),
        (this.size_ = 0),
        this.initialize();
    }
    return (
      (i.prototype.clear = function () {
        (this.data_ = []), (this.size_ = 0), this.initialize();
      }),
      (i.prototype.rehash = function (s) {
        var o, c, a, l;
        s = Math.max(s, r);
        for (var f = [], u = 0; u < s; ++u) f.push([]);
        try {
          for (var h = t(this.data_), d = h.next(); !d.done; d = h.next()) {
            var p = d.value;
            try {
              for (
                var y = ((a = void 0), t(p)), v = y.next();
                !v.done;
                v = y.next()
              ) {
                var w = v.value,
                  C = this.hasher_(this.fetcher_(w)) % f.length;
                f[C].push(w);
              }
            } catch (x) {
              a = { error: x };
            } finally {
              try {
                v && !v.done && (l = y.return) && l.call(y);
              } finally {
                if (a) throw a.error;
              }
            }
          }
        } catch (x) {
          o = { error: x };
        } finally {
          try {
            d && !d.done && (c = h.return) && c.call(h);
          } finally {
            if (o) throw o.error;
          }
        }
        this.data_ = f;
      }),
      (i.prototype.reserve = function (s) {
        s > this.capacity() &&
          ((s = Math.floor(s / this.max_load_factor_)), this.rehash(s));
      }),
      (i.prototype.initialize = function () {
        for (var s = 0; s < r; ++s) this.data_.push([]);
      }),
      (i.prototype.length = function () {
        return this.data_.length;
      }),
      (i.prototype.capacity = function () {
        return this.data_.length * this.max_load_factor_;
      }),
      (i.prototype.at = function (s) {
        return this.data_[s];
      }),
      (i.prototype.load_factor = function () {
        return this.size_ / this.length();
      }),
      (i.prototype.max_load_factor = function (s) {
        if ((s === void 0 && (s = null), s === null))
          return this.max_load_factor_;
        this.max_load_factor_ = s;
      }),
      (i.prototype.hash_function = function () {
        return this.hasher_;
      }),
      (i.prototype.index = function (s) {
        return this.hasher_(this.fetcher_(s)) % this.length();
      }),
      (i.prototype.insert = function (s) {
        var o = this.capacity();
        ++this.size_ > o && this.reserve(o * 2);
        var c = this.index(s);
        this.data_[c].push(s);
      }),
      (i.prototype.erase = function (s) {
        for (var o = this.index(s), c = this.data_[o], a = 0; a < c.length; ++a)
          if (c[a] === s) {
            c.splice(a, 1), --this.size_;
            break;
          }
      }),
      i
    );
  })();
  Et.HashBuckets = e;
  var r = 10,
    n = 1;
  return Et;
}
var hi;
function rl() {
  if (hi) return mt;
  hi = 1;
  var t =
      (O && O.__extends) ||
      (function () {
        var o = function (c, a) {
          return (
            (o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (l, f) {
                  l.__proto__ = f;
                }) ||
              function (l, f) {
                for (var u in f)
                  Object.prototype.hasOwnProperty.call(f, u) && (l[u] = f[u]);
              }),
            o(c, a)
          );
        };
        return function (c, a) {
          if (typeof a != "function" && a !== null)
            throw new TypeError(
              "Class extends value " +
                String(a) +
                " is not a constructor or null"
            );
          o(c, a);
          function l() {
            this.constructor = c;
          }
          c.prototype =
            a === null
              ? Object.create(a)
              : ((l.prototype = a.prototype), new l());
        };
      })(),
    e =
      (O && O.__read) ||
      function (o, c) {
        var a = typeof Symbol == "function" && o[Symbol.iterator];
        if (!a) return o;
        var l = a.call(o),
          f,
          u = [],
          h;
        try {
          for (; (c === void 0 || c-- > 0) && !(f = l.next()).done; )
            u.push(f.value);
        } catch (d) {
          h = { error: d };
        } finally {
          try {
            f && !f.done && (a = l.return) && a.call(l);
          } finally {
            if (h) throw h.error;
          }
        }
        return u;
      },
    r =
      (O && O.__values) ||
      function (o) {
        var c = typeof Symbol == "function" && Symbol.iterator,
          a = c && o[c],
          l = 0;
        if (a) return a.call(o);
        if (o && typeof o.length == "number")
          return {
            next: function () {
              return (
                o && l >= o.length && (o = void 0),
                { value: o && o[l++], done: !o }
              );
            },
          };
        throw new TypeError(
          c ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      };
  Object.defineProperty(mt, "__esModule", { value: !0 }),
    (mt.SetHashBuckets = void 0);
  var n = jo(),
    i = (function (o) {
      t(c, o);
      function c(a, l, f) {
        var u = o.call(this, s, l) || this;
        return (u.source_ = a), (u.key_eq_ = f), u;
      }
      return (
        (c._Swap_source = function (a, l) {
          var f;
          (f = e([l.source_, a.source_], 2)),
            (a.source_ = f[0]),
            (l.source_ = f[1]);
        }),
        (c.prototype.key_eq = function () {
          return this.key_eq_;
        }),
        (c.prototype.find = function (a) {
          var l,
            f,
            u = this.hash_function()(a) % this.length(),
            h = this.at(u);
          try {
            for (var d = r(h), p = d.next(); !p.done; p = d.next()) {
              var y = p.value;
              if (this.key_eq_(y.value, a)) return y;
            }
          } catch (v) {
            l = { error: v };
          } finally {
            try {
              p && !p.done && (f = d.return) && f.call(d);
            } finally {
              if (l) throw l.error;
            }
          }
          return this.source_.end();
        }),
        c
      );
    })(n.HashBuckets);
  mt.SetHashBuckets = i;
  function s(o) {
    return o.value;
  }
  return mt;
}
var Le = {},
  di;
function Po() {
  if (di) return Le;
  (di = 1),
    Object.defineProperty(Le, "__esModule", { value: !0 }),
    (Le.make_pair = Le.Pair = void 0);
  var t = _n(),
    e = wn(),
    r = (function () {
      function i(s, o) {
        (this.first = s), (this.second = o);
      }
      return (
        (i.prototype.equals = function (s) {
          return (
            (0, e.equal_to)(this.first, s.first) &&
            (0, e.equal_to)(this.second, s.second)
          );
        }),
        (i.prototype.less = function (s) {
          return (0, e.equal_to)(this.first, s.first) === !1
            ? (0, e.less)(this.first, s.first)
            : (0, e.less)(this.second, s.second);
        }),
        (i.prototype.hashCode = function () {
          return (0, t.hash)(this.first, this.second);
        }),
        i
      );
    })();
  Le.Pair = r;
  function n(i, s) {
    return new r(i, s);
  }
  return (Le.make_pair = n), Le;
}
var pi;
function nl() {
  return (
    pi ||
      ((pi = 1),
      (function (t) {
        var e =
            (O && O.__extends) ||
            (function () {
              var f = function (u, h) {
                return (
                  (f =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (d, p) {
                        d.__proto__ = p;
                      }) ||
                    function (d, p) {
                      for (var y in p)
                        Object.prototype.hasOwnProperty.call(p, y) &&
                          (d[y] = p[y]);
                    }),
                  f(u, h)
                );
              };
              return function (u, h) {
                if (typeof h != "function" && h !== null)
                  throw new TypeError(
                    "Class extends value " +
                      String(h) +
                      " is not a constructor or null"
                  );
                f(u, h);
                function d() {
                  this.constructor = u;
                }
                u.prototype =
                  h === null
                    ? Object.create(h)
                    : ((d.prototype = h.prototype), new d());
              };
            })(),
          r =
            (O && O.__read) ||
            function (f, u) {
              var h = typeof Symbol == "function" && f[Symbol.iterator];
              if (!h) return f;
              var d = h.call(f),
                p,
                y = [],
                v;
              try {
                for (; (u === void 0 || u-- > 0) && !(p = d.next()).done; )
                  y.push(p.value);
              } catch (w) {
                v = { error: w };
              } finally {
                try {
                  p && !p.done && (h = d.return) && h.call(d);
                } finally {
                  if (v) throw v.error;
                }
              }
              return y;
            },
          n =
            (O && O.__spreadArray) ||
            function (f, u, h) {
              if (h || arguments.length === 2)
                for (var d = 0, p = u.length, y; d < p; d++)
                  (y || !(d in u)) &&
                    (y || (y = Array.prototype.slice.call(u, 0, d)),
                    (y[d] = u[d]));
              return f.concat(y || Array.prototype.slice.call(u));
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.HashSet = void 0);
        var i = Yu(),
          s = Lo(),
          o = tl(),
          c = rl(),
          a = Po(),
          l = (function (f) {
            e(u, f);
            function u() {
              for (var h = [], d = 0; d < arguments.length; d++)
                h[d] = arguments[d];
              var p =
                f.call(this, function (y) {
                  return new o.SetElementList(y);
                }) || this;
              return (
                s.IHashContainer.construct.apply(
                  s.IHashContainer,
                  n(
                    [
                      p,
                      u,
                      function (y, v) {
                        p.buckets_ = new c.SetHashBuckets(p, y, v);
                      },
                    ],
                    r(h),
                    !1
                  )
                ),
                p
              );
            }
            return (
              (u.prototype.clear = function () {
                this.buckets_.clear(), f.prototype.clear.call(this);
              }),
              (u.prototype.swap = function (h) {
                var d, p;
                (d = r([h.data_, this.data_], 2)),
                  (this.data_ = d[0]),
                  (h.data_ = d[1]),
                  o.SetElementList._Swap_associative(this.data_, h.data_),
                  c.SetHashBuckets._Swap_source(this.buckets_, h.buckets_),
                  (p = r([h.buckets_, this.buckets_], 2)),
                  (this.buckets_ = p[0]),
                  (h.buckets_ = p[1]);
              }),
              (u.prototype.find = function (h) {
                return this.buckets_.find(h);
              }),
              (u.prototype.begin = function (h) {
                return (
                  h === void 0 && (h = null),
                  h === null
                    ? f.prototype.begin.call(this)
                    : this.buckets_.at(h)[0]
                );
              }),
              (u.prototype.end = function (h) {
                if ((h === void 0 && (h = null), h === null))
                  return f.prototype.end.call(this);
                var d = this.buckets_.at(h);
                return d[d.length - 1].next();
              }),
              (u.prototype.rbegin = function (h) {
                return h === void 0 && (h = null), this.end(h).reverse();
              }),
              (u.prototype.rend = function (h) {
                return h === void 0 && (h = null), this.begin(h).reverse();
              }),
              (u.prototype.bucket_count = function () {
                return this.buckets_.length();
              }),
              (u.prototype.bucket_size = function (h) {
                return this.buckets_.at(h).length;
              }),
              (u.prototype.load_factor = function () {
                return this.buckets_.load_factor();
              }),
              (u.prototype.hash_function = function () {
                return this.buckets_.hash_function();
              }),
              (u.prototype.key_eq = function () {
                return this.buckets_.key_eq();
              }),
              (u.prototype.bucket = function (h) {
                return this.hash_function()(h) % this.buckets_.length();
              }),
              (u.prototype.max_load_factor = function (h) {
                return (
                  h === void 0 && (h = null), this.buckets_.max_load_factor(h)
                );
              }),
              (u.prototype.reserve = function (h) {
                this.buckets_.reserve(h);
              }),
              (u.prototype.rehash = function (h) {
                this.buckets_.rehash(h);
              }),
              (u.prototype._Insert_by_key = function (h) {
                var d = this.find(h);
                return d.equals(this.end()) === !1
                  ? new a.Pair(d, !1)
                  : (this.data_.push(h),
                    (d = d.prev()),
                    this._Handle_insert(d, d.next()),
                    new a.Pair(d, !0));
              }),
              (u.prototype._Insert_by_hint = function (h, d) {
                var p = this.find(d);
                return (
                  p.equals(this.end()) === !0 &&
                    ((p = this.data_.insert(h, d)),
                    this._Handle_insert(p, p.next())),
                  p
                );
              }),
              (u.prototype._Handle_insert = function (h, d) {
                for (; !h.equals(d); h = h.next()) this.buckets_.insert(h);
              }),
              (u.prototype._Handle_erase = function (h, d) {
                for (; !h.equals(d); h = h.next()) this.buckets_.erase(h);
              }),
              u
            );
          })(i.UniqueSet);
        (t.HashSet = l),
          (function (f) {
            (f.Iterator = o.SetElementList.Iterator),
              (f.ReverseIterator = o.SetElementList.ReverseIterator);
          })((l = t.HashSet || (t.HashSet = {}))),
          (t.HashSet = l);
      })(Tr)),
    Tr
  );
}
var Pr = {},
  xt = {},
  kt = {},
  yi;
function il() {
  if (yi) return kt;
  yi = 1;
  var t =
    (O && O.__extends) ||
    (function () {
      var i = function (s, o) {
        return (
          (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (c, a) {
                c.__proto__ = a;
              }) ||
            function (c, a) {
              for (var l in a)
                Object.prototype.hasOwnProperty.call(a, l) && (c[l] = a[l]);
            }),
          i(s, o)
        );
      };
      return function (s, o) {
        if (typeof o != "function" && o !== null)
          throw new TypeError(
            "Class extends value " + String(o) + " is not a constructor or null"
          );
        i(s, o);
        function c() {
          this.constructor = s;
        }
        s.prototype =
          o === null
            ? Object.create(o)
            : ((c.prototype = o.prototype), new c());
      };
    })();
  Object.defineProperty(kt, "__esModule", { value: !0 }),
    (kt.MapContainer = void 0);
  var e = vn(),
    r = bn(),
    n = (function (i) {
      t(s, i);
      function s(o) {
        var c = i.call(this) || this;
        return (c.data_ = o(c)), c;
      }
      return (
        (s.prototype.assign = function (o, c) {
          this.clear(), this.insert(o, c);
        }),
        (s.prototype.clear = function () {
          this.data_.clear();
        }),
        (s.prototype.begin = function () {
          return this.data_.begin();
        }),
        (s.prototype.end = function () {
          return this.data_.end();
        }),
        (s.prototype.has = function (o) {
          return !this.find(o).equals(this.end());
        }),
        (s.prototype.size = function () {
          return this.data_.size();
        }),
        (s.prototype.push = function () {
          for (var o = [], c = 0; c < arguments.length; c++)
            o[c] = arguments[c];
          var a = new r.NativeArrayIterator(o, 0),
            l = new r.NativeArrayIterator(o, o.length);
          return this.insert(a, l), this.size();
        }),
        (s.prototype.insert = function () {
          for (var o = [], c = 0; c < arguments.length; c++)
            o[c] = arguments[c];
          return o.length === 1
            ? this.emplace(o[0].first, o[0].second)
            : o[0].next instanceof Function && o[1].next instanceof Function
            ? this._Insert_by_range(o[0], o[1])
            : this.emplace_hint(o[0], o[1].first, o[1].second);
        }),
        (s.prototype.erase = function () {
          for (var o = [], c = 0; c < arguments.length; c++)
            o[c] = arguments[c];
          return o.length === 1 &&
            (!(o[0] instanceof this.end().constructor) ||
              o[0].source() !== this)
            ? this._Erase_by_key(o[0])
            : o.length === 1
            ? this._Erase_by_range(o[0])
            : this._Erase_by_range(o[0], o[1]);
        }),
        (s.prototype._Erase_by_range = function (o, c) {
          c === void 0 && (c = o.next());
          var a = this.data_.erase(o, c);
          return this._Handle_erase(o, c), a;
        }),
        s
      );
    })(e.Container);
  return (kt.MapContainer = n), kt;
}
var gi;
function ol() {
  if (gi) return xt;
  gi = 1;
  var t =
      (O && O.__extends) ||
      (function () {
        var o = function (c, a) {
          return (
            (o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (l, f) {
                  l.__proto__ = f;
                }) ||
              function (l, f) {
                for (var u in f)
                  Object.prototype.hasOwnProperty.call(f, u) && (l[u] = f[u]);
              }),
            o(c, a)
          );
        };
        return function (c, a) {
          if (typeof a != "function" && a !== null)
            throw new TypeError(
              "Class extends value " +
                String(a) +
                " is not a constructor or null"
            );
          o(c, a);
          function l() {
            this.constructor = c;
          }
          c.prototype =
            a === null
              ? Object.create(a)
              : ((l.prototype = a.prototype), new l());
        };
      })(),
    e =
      (O && O.__read) ||
      function (o, c) {
        var a = typeof Symbol == "function" && o[Symbol.iterator];
        if (!a) return o;
        var l = a.call(o),
          f,
          u = [],
          h;
        try {
          for (; (c === void 0 || c-- > 0) && !(f = l.next()).done; )
            u.push(f.value);
        } catch (d) {
          h = { error: d };
        } finally {
          try {
            f && !f.done && (a = l.return) && a.call(l);
          } finally {
            if (h) throw h.error;
          }
        }
        return u;
      },
    r =
      (O && O.__spreadArray) ||
      function (o, c, a) {
        if (a || arguments.length === 2)
          for (var l = 0, f = c.length, u; l < f; l++)
            (u || !(l in c)) &&
              (u || (u = Array.prototype.slice.call(c, 0, l)), (u[l] = c[l]));
        return o.concat(u || Array.prototype.slice.call(c));
      };
  Object.defineProperty(xt, "__esModule", { value: !0 }),
    (xt.UniqueMap = void 0);
  var n = il(),
    i = gr(),
    s = (function (o) {
      t(c, o);
      function c() {
        return (o !== null && o.apply(this, arguments)) || this;
      }
      return (
        (c.prototype.count = function (a) {
          return this.find(a).equals(this.end()) ? 0 : 1;
        }),
        (c.prototype.get = function (a) {
          var l = this.find(a);
          if (l.equals(this.end()) === !0)
            throw i.ErrorGenerator.key_nout_found(this, "get", a);
          return l.second;
        }),
        (c.prototype.take = function (a, l) {
          var f = this.find(a);
          return f.equals(this.end())
            ? this.emplace(a, l()).first.second
            : f.second;
        }),
        (c.prototype.set = function (a, l) {
          this.insert_or_assign(a, l);
        }),
        (c.prototype.insert = function () {
          for (var a = [], l = 0; l < arguments.length; l++)
            a[l] = arguments[l];
          return o.prototype.insert.apply(this, r([], e(a), !1));
        }),
        (c.prototype._Insert_by_range = function (a, l) {
          for (var f = a; !f.equals(l); f = f.next())
            this.emplace(f.value.first, f.value.second);
        }),
        (c.prototype.insert_or_assign = function () {
          for (var a = [], l = 0; l < arguments.length; l++)
            a[l] = arguments[l];
          if (a.length === 2)
            return this._Insert_or_assign_with_key_value(a[0], a[1]);
          if (a.length === 3)
            return this._Insert_or_assign_with_hint(a[0], a[1], a[2]);
        }),
        (c.prototype._Insert_or_assign_with_key_value = function (a, l) {
          var f = this.emplace(a, l);
          return f.second === !1 && (f.first.second = l), f;
        }),
        (c.prototype._Insert_or_assign_with_hint = function (a, l, f) {
          var u = this.emplace_hint(a, l, f);
          return u.second !== f && (u.second = f), u;
        }),
        (c.prototype.extract = function (a) {
          return a instanceof this.end().constructor
            ? this._Extract_by_iterator(a)
            : this._Extract_by_key(a);
        }),
        (c.prototype._Extract_by_key = function (a) {
          var l = this.find(a);
          if (l.equals(this.end()) === !0)
            throw i.ErrorGenerator.key_nout_found(this, "extract", a);
          var f = l.value;
          return this._Erase_by_range(l), f;
        }),
        (c.prototype._Extract_by_iterator = function (a) {
          return a.equals(this.end()) === !0
            ? this.end()
            : (this._Erase_by_range(a), a);
        }),
        (c.prototype._Erase_by_key = function (a) {
          var l = this.find(a);
          return l.equals(this.end()) === !0 ? 0 : (this._Erase_by_range(l), 1);
        }),
        (c.prototype.merge = function (a) {
          for (var l = a.begin(); !l.equals(a.end()); )
            this.has(l.first) === !1
              ? (this.insert(l.value), (l = a.erase(l)))
              : (l = l.next());
        }),
        c
      );
    })(n.MapContainer);
  return (xt.UniqueMap = s), xt;
}
var Hr = {},
  vi;
function sl() {
  return (
    vi ||
      ((vi = 1),
      (function (t) {
        var e =
            (O && O.__extends) ||
            (function () {
              var c = function (a, l) {
                return (
                  (c =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (f, u) {
                        f.__proto__ = u;
                      }) ||
                    function (f, u) {
                      for (var h in u)
                        Object.prototype.hasOwnProperty.call(u, h) &&
                          (f[h] = u[h]);
                    }),
                  c(a, l)
                );
              };
              return function (a, l) {
                if (typeof l != "function" && l !== null)
                  throw new TypeError(
                    "Class extends value " +
                      String(l) +
                      " is not a constructor or null"
                  );
                c(a, l);
                function f() {
                  this.constructor = a;
                }
                a.prototype =
                  l === null
                    ? Object.create(l)
                    : ((f.prototype = l.prototype), new f());
              };
            })(),
          r =
            (O && O.__read) ||
            function (c, a) {
              var l = typeof Symbol == "function" && c[Symbol.iterator];
              if (!l) return c;
              var f = l.call(c),
                u,
                h = [],
                d;
              try {
                for (; (a === void 0 || a-- > 0) && !(u = f.next()).done; )
                  h.push(u.value);
              } catch (p) {
                d = { error: p };
              } finally {
                try {
                  u && !u.done && (l = f.return) && l.call(f);
                } finally {
                  if (d) throw d.error;
                }
              }
              return h;
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.MapElementList = void 0);
        var n = No(),
          i = mn(),
          s = Mo(),
          o = (function (c) {
            e(a, c);
            function a(l) {
              var f = c.call(this) || this;
              return (f.associative_ = l), f;
            }
            return (
              (a.prototype._Create_iterator = function (l, f, u) {
                return a.Iterator.create(this, l, f, u);
              }),
              (a._Swap_associative = function (l, f) {
                var u;
                (u = r([f.associative_, l.associative_], 2)),
                  (l.associative_ = u[0]),
                  (f.associative_ = u[1]);
              }),
              (a.prototype.associative = function () {
                return this.associative_;
              }),
              a
            );
          })(n.ListContainer);
        (t.MapElementList = o),
          (function (c) {
            var a = (function (f) {
              e(u, f);
              function u(h, d, p, y) {
                var v = f.call(this, d, p, y) || this;
                return (v.list_ = h), v;
              }
              return (
                (u.create = function (h, d, p, y) {
                  return new u(h, d, p, y);
                }),
                (u.prototype.reverse = function () {
                  return new l(this);
                }),
                (u.prototype.source = function () {
                  return this.list_.associative();
                }),
                Object.defineProperty(u.prototype, "first", {
                  get: function () {
                    return this.value.first;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(u.prototype, "second", {
                  get: function () {
                    return this.value.second;
                  },
                  set: function (h) {
                    this.value.second = h;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                u
              );
            })(i.ListIterator);
            c.Iterator = a;
            var l = (function (f) {
              e(u, f);
              function u() {
                return (f !== null && f.apply(this, arguments)) || this;
              }
              return (
                (u.prototype._Create_neighbor = function (h) {
                  return new u(h);
                }),
                Object.defineProperty(u.prototype, "first", {
                  get: function () {
                    return this.base_.first;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(u.prototype, "second", {
                  get: function () {
                    return this.base_.second;
                  },
                  set: function (h) {
                    this.base_.second = h;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                u
              );
            })(s.ReverseIterator);
            c.ReverseIterator = l;
          })((o = t.MapElementList || (t.MapElementList = {}))),
          (t.MapElementList = o);
      })(Hr)),
    Hr
  );
}
var St = {},
  bi;
function al() {
  if (bi) return St;
  bi = 1;
  var t =
      (O && O.__extends) ||
      (function () {
        var o = function (c, a) {
          return (
            (o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (l, f) {
                  l.__proto__ = f;
                }) ||
              function (l, f) {
                for (var u in f)
                  Object.prototype.hasOwnProperty.call(f, u) && (l[u] = f[u]);
              }),
            o(c, a)
          );
        };
        return function (c, a) {
          if (typeof a != "function" && a !== null)
            throw new TypeError(
              "Class extends value " +
                String(a) +
                " is not a constructor or null"
            );
          o(c, a);
          function l() {
            this.constructor = c;
          }
          c.prototype =
            a === null
              ? Object.create(a)
              : ((l.prototype = a.prototype), new l());
        };
      })(),
    e =
      (O && O.__read) ||
      function (o, c) {
        var a = typeof Symbol == "function" && o[Symbol.iterator];
        if (!a) return o;
        var l = a.call(o),
          f,
          u = [],
          h;
        try {
          for (; (c === void 0 || c-- > 0) && !(f = l.next()).done; )
            u.push(f.value);
        } catch (d) {
          h = { error: d };
        } finally {
          try {
            f && !f.done && (a = l.return) && a.call(l);
          } finally {
            if (h) throw h.error;
          }
        }
        return u;
      },
    r =
      (O && O.__values) ||
      function (o) {
        var c = typeof Symbol == "function" && Symbol.iterator,
          a = c && o[c],
          l = 0;
        if (a) return a.call(o);
        if (o && typeof o.length == "number")
          return {
            next: function () {
              return (
                o && l >= o.length && (o = void 0),
                { value: o && o[l++], done: !o }
              );
            },
          };
        throw new TypeError(
          c ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      };
  Object.defineProperty(St, "__esModule", { value: !0 }),
    (St.MapHashBuckets = void 0);
  var n = jo(),
    i = (function (o) {
      t(c, o);
      function c(a, l, f) {
        var u = o.call(this, s, l) || this;
        return (u.source_ = a), (u.key_eq_ = f), u;
      }
      return (
        (c._Swap_source = function (a, l) {
          var f;
          (f = e([l.source_, a.source_], 2)),
            (a.source_ = f[0]),
            (l.source_ = f[1]);
        }),
        (c.prototype.key_eq = function () {
          return this.key_eq_;
        }),
        (c.prototype.find = function (a) {
          var l,
            f,
            u = this.hash_function()(a) % this.length(),
            h = this.at(u);
          try {
            for (var d = r(h), p = d.next(); !p.done; p = d.next()) {
              var y = p.value;
              if (this.key_eq_(y.first, a)) return y;
            }
          } catch (v) {
            l = { error: v };
          } finally {
            try {
              p && !p.done && (f = d.return) && f.call(d);
            } finally {
              if (l) throw l.error;
            }
          }
          return this.source_.end();
        }),
        c
      );
    })(n.HashBuckets);
  St.MapHashBuckets = i;
  function s(o) {
    return o.first;
  }
  return St;
}
var Ct = {},
  _i;
function cl() {
  if (_i) return Ct;
  (_i = 1),
    Object.defineProperty(Ct, "__esModule", { value: !0 }),
    (Ct.Entry = void 0);
  var t = _n(),
    e = wn(),
    r = (function () {
      function n(i, s) {
        (this.first = i), (this.second = s);
      }
      return (
        (n.prototype.equals = function (i) {
          return (0, e.equal_to)(this.first, i.first);
        }),
        (n.prototype.less = function (i) {
          return (0, e.less)(this.first, i.first);
        }),
        (n.prototype.hashCode = function () {
          return (0, t.hash)(this.first);
        }),
        n
      );
    })();
  return (Ct.Entry = r), Ct;
}
var wi;
function ul() {
  return (
    wi ||
      ((wi = 1),
      (function (t) {
        var e =
            (O && O.__extends) ||
            (function () {
              var u = function (h, d) {
                return (
                  (u =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (p, y) {
                        p.__proto__ = y;
                      }) ||
                    function (p, y) {
                      for (var v in y)
                        Object.prototype.hasOwnProperty.call(y, v) &&
                          (p[v] = y[v]);
                    }),
                  u(h, d)
                );
              };
              return function (h, d) {
                if (typeof d != "function" && d !== null)
                  throw new TypeError(
                    "Class extends value " +
                      String(d) +
                      " is not a constructor or null"
                  );
                u(h, d);
                function p() {
                  this.constructor = h;
                }
                h.prototype =
                  d === null
                    ? Object.create(d)
                    : ((p.prototype = d.prototype), new p());
              };
            })(),
          r =
            (O && O.__read) ||
            function (u, h) {
              var d = typeof Symbol == "function" && u[Symbol.iterator];
              if (!d) return u;
              var p = d.call(u),
                y,
                v = [],
                w;
              try {
                for (; (h === void 0 || h-- > 0) && !(y = p.next()).done; )
                  v.push(y.value);
              } catch (C) {
                w = { error: C };
              } finally {
                try {
                  y && !y.done && (d = p.return) && d.call(p);
                } finally {
                  if (w) throw w.error;
                }
              }
              return v;
            },
          n =
            (O && O.__spreadArray) ||
            function (u, h, d) {
              if (d || arguments.length === 2)
                for (var p = 0, y = h.length, v; p < y; p++)
                  (v || !(p in h)) &&
                    (v || (v = Array.prototype.slice.call(h, 0, p)),
                    (v[p] = h[p]));
              return u.concat(v || Array.prototype.slice.call(h));
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.HashMap = void 0);
        var i = ol(),
          s = Lo(),
          o = sl(),
          c = al(),
          a = cl(),
          l = Po(),
          f = (function (u) {
            e(h, u);
            function h() {
              for (var d = [], p = 0; p < arguments.length; p++)
                d[p] = arguments[p];
              var y =
                u.call(this, function (v) {
                  return new o.MapElementList(v);
                }) || this;
              return (
                s.IHashContainer.construct.apply(
                  s.IHashContainer,
                  n(
                    [
                      y,
                      h,
                      function (v, w) {
                        y.buckets_ = new c.MapHashBuckets(y, v, w);
                      },
                    ],
                    r(d),
                    !1
                  )
                ),
                y
              );
            }
            return (
              (h.prototype.clear = function () {
                this.buckets_.clear(), u.prototype.clear.call(this);
              }),
              (h.prototype.swap = function (d) {
                var p, y;
                (p = r([d.data_, this.data_], 2)),
                  (this.data_ = p[0]),
                  (d.data_ = p[1]),
                  o.MapElementList._Swap_associative(this.data_, d.data_),
                  c.MapHashBuckets._Swap_source(this.buckets_, d.buckets_),
                  (y = r([d.buckets_, this.buckets_], 2)),
                  (this.buckets_ = y[0]),
                  (d.buckets_ = y[1]);
              }),
              (h.prototype.find = function (d) {
                return this.buckets_.find(d);
              }),
              (h.prototype.begin = function (d) {
                return (
                  d === void 0 && (d = null),
                  d === null
                    ? u.prototype.begin.call(this)
                    : this.buckets_.at(d)[0]
                );
              }),
              (h.prototype.end = function (d) {
                if ((d === void 0 && (d = null), d === null))
                  return u.prototype.end.call(this);
                var p = this.buckets_.at(d);
                return p[p.length - 1].next();
              }),
              (h.prototype.rbegin = function (d) {
                return d === void 0 && (d = null), this.end(d).reverse();
              }),
              (h.prototype.rend = function (d) {
                return d === void 0 && (d = null), this.begin(d).reverse();
              }),
              (h.prototype.bucket_count = function () {
                return this.buckets_.length();
              }),
              (h.prototype.bucket_size = function (d) {
                return this.buckets_.at(d).length;
              }),
              (h.prototype.load_factor = function () {
                return this.buckets_.load_factor();
              }),
              (h.prototype.hash_function = function () {
                return this.buckets_.hash_function();
              }),
              (h.prototype.key_eq = function () {
                return this.buckets_.key_eq();
              }),
              (h.prototype.bucket = function (d) {
                return this.hash_function()(d) % this.buckets_.length();
              }),
              (h.prototype.max_load_factor = function (d) {
                return (
                  d === void 0 && (d = null), this.buckets_.max_load_factor(d)
                );
              }),
              (h.prototype.reserve = function (d) {
                this.buckets_.reserve(d);
              }),
              (h.prototype.rehash = function (d) {
                this.buckets_.rehash(d);
              }),
              (h.prototype.emplace = function (d, p) {
                var y = this.find(d);
                return y.equals(this.end()) === !1
                  ? new l.Pair(y, !1)
                  : (this.data_.push(new a.Entry(d, p)),
                    (y = y.prev()),
                    this._Handle_insert(y, y.next()),
                    new l.Pair(y, !0));
              }),
              (h.prototype.emplace_hint = function (d, p, y) {
                var v = this.find(p);
                return (
                  v.equals(this.end()) === !0 &&
                    ((v = this.data_.insert(d, new a.Entry(p, y))),
                    this._Handle_insert(v, v.next())),
                  v
                );
              }),
              (h.prototype._Handle_insert = function (d, p) {
                for (; !d.equals(p); d = d.next()) this.buckets_.insert(d);
              }),
              (h.prototype._Handle_erase = function (d, p) {
                for (; !d.equals(p); d = d.next()) this.buckets_.erase(d);
              }),
              h
            );
          })(i.UniqueMap);
        (t.HashMap = f),
          (function (u) {
            (u.Iterator = o.MapElementList.Iterator),
              (u.ReverseIterator = o.MapElementList.ReverseIterator);
          })((f = t.HashMap || (t.HashMap = {}))),
          (t.HashMap = f);
      })(Pr)),
    Pr
  );
}
var mi;
function ll() {
  if (mi) return Gt;
  mi = 1;
  var t =
    (O && O.__values) ||
    function (i) {
      var s = typeof Symbol == "function" && i[Symbol.iterator],
        o = 0;
      return s
        ? s.call(i)
        : {
            next: function () {
              return (
                i && o >= i.length && (i = void 0),
                { value: i && i[o++], done: !i }
              );
            },
          };
    };
  Object.defineProperty(Gt, "__esModule", { value: !0 });
  var e = nl(),
    r = ul(),
    n = (function () {
      function i() {
        (this.listeners_ = new r.HashMap()), (this.created_at_ = new Date());
      }
      return (
        (i.prototype.dispatchEvent = function (s) {
          var o,
            c,
            a = this.listeners_.find(s.type);
          if (!a.equals(this.listeners_.end())) {
            (s.target = this),
              (s.timeStamp = new Date().getTime() - this.created_at_.getTime());
            try {
              for (var l = t(a.second), f = l.next(); !f.done; f = l.next()) {
                var u = f.value;
                u(s);
              }
            } catch (h) {
              o = { error: h };
            } finally {
              try {
                f && !f.done && (c = l.return) && c.call(l);
              } finally {
                if (o) throw o.error;
              }
            }
          }
        }),
        (i.prototype.addEventListener = function (s, o) {
          var c = this.listeners_.find(s);
          c.equals(this.listeners_.end()) &&
            (c = this.listeners_.emplace(s, new e.HashSet()).first),
            c.second.insert(o);
        }),
        (i.prototype.removeEventListener = function (s, o) {
          var c = this.listeners_.find(s);
          c.equals(this.listeners_.end()) ||
            (c.second.erase(o), c.second.empty() && this.listeners_.erase(c));
        }),
        i
      );
    })();
  return (Gt.EventTarget = n), Gt;
}
var Wt = {},
  Ei;
function vr() {
  if (Ei) return Wt;
  (Ei = 1), Object.defineProperty(Wt, "__esModule", { value: !0 });
  var t = (function () {
    function e(r, n) {
      (this.type = r), n && Object.assign(this, n);
    }
    return e;
  })();
  return (Wt.Event = t), Wt;
}
var Vt = {},
  xi;
function fl() {
  if (xi) return Vt;
  xi = 1;
  var t =
    (O && O.__extends) ||
    (function () {
      var n = function (i, s) {
        return (
          (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (o, c) {
                o.__proto__ = c;
              }) ||
            function (o, c) {
              for (var a in c) c.hasOwnProperty(a) && (o[a] = c[a]);
            }),
          n(i, s)
        );
      };
      return function (i, s) {
        n(i, s);
        function o() {
          this.constructor = i;
        }
        i.prototype =
          s === null
            ? Object.create(s)
            : ((o.prototype = s.prototype), new o());
      };
    })();
  Object.defineProperty(Vt, "__esModule", { value: !0 });
  var e = vr(),
    r = (function (n) {
      t(i, n);
      function i(s, o) {
        return n.call(this, s, o) || this;
      }
      return i;
    })(e.Event);
  return (Vt.CloseEvent = r), Vt;
}
var Zt = {},
  ki;
function hl() {
  if (ki) return Zt;
  ki = 1;
  var t =
    (O && O.__extends) ||
    (function () {
      var n = function (i, s) {
        return (
          (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (o, c) {
                o.__proto__ = c;
              }) ||
            function (o, c) {
              for (var a in c) c.hasOwnProperty(a) && (o[a] = c[a]);
            }),
          n(i, s)
        );
      };
      return function (i, s) {
        n(i, s);
        function o() {
          this.constructor = i;
        }
        i.prototype =
          s === null
            ? Object.create(s)
            : ((o.prototype = s.prototype), new o());
      };
    })();
  Object.defineProperty(Zt, "__esModule", { value: !0 });
  var e = vr(),
    r = (function (n) {
      t(i, n);
      function i(s, o) {
        return n.call(this, s, o) || this;
      }
      return i;
    })(e.Event);
  return (Zt.MessageEvent = r), Zt;
}
var Yt = {},
  Si;
function dl() {
  if (Si) return Yt;
  Si = 1;
  var t =
    (O && O.__extends) ||
    (function () {
      var n = function (i, s) {
        return (
          (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (o, c) {
                o.__proto__ = c;
              }) ||
            function (o, c) {
              for (var a in c) c.hasOwnProperty(a) && (o[a] = c[a]);
            }),
          n(i, s)
        );
      };
      return function (i, s) {
        n(i, s);
        function o() {
          this.constructor = i;
        }
        i.prototype =
          s === null
            ? Object.create(s)
            : ((o.prototype = s.prototype), new o());
      };
    })();
  Object.defineProperty(Yt, "__esModule", { value: !0 });
  var e = vr(),
    r = (function (n) {
      t(i, n);
      function i(s, o) {
        return n.call(this, s, o) || this;
      }
      return i;
    })(e.Event);
  return (Yt.ErrorEvent = r), Yt;
}
var Ci;
function pl() {
  return (
    Ci ||
      ((Ci = 1),
      (function (t) {
        var e =
            (O && O.__extends) ||
            (function () {
              var u = function (h, d) {
                return (
                  (u =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (p, y) {
                        p.__proto__ = y;
                      }) ||
                    function (p, y) {
                      for (var v in y) y.hasOwnProperty(v) && (p[v] = y[v]);
                    }),
                  u(h, d)
                );
              };
              return function (h, d) {
                u(h, d);
                function p() {
                  this.constructor = h;
                }
                h.prototype =
                  d === null
                    ? Object.create(d)
                    : ((p.prototype = d.prototype), new p());
              };
            })(),
          r =
            (O && O.__assign) ||
            function () {
              return (
                (r =
                  Object.assign ||
                  function (u) {
                    for (var h, d = 1, p = arguments.length; d < p; d++) {
                      h = arguments[d];
                      for (var y in h)
                        Object.prototype.hasOwnProperty.call(h, y) &&
                          (u[y] = h[y]);
                    }
                    return u;
                  }),
                r.apply(this, arguments)
              );
            };
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = Ku(),
          i = ll(),
          s = vr(),
          o = fl(),
          c = hl(),
          a = dl(),
          l = (function (u) {
            e(h, u);
            function h(d, p) {
              var y = u.call(this) || this;
              return (
                (y.on_ = {}),
                (y.state_ = h.CONNECTING),
                (y.client_ = new n.client()),
                y.client_.on("connect", y._Handle_connect.bind(y)),
                y.client_.on("connectFailed", y._Handle_error.bind(y)),
                typeof p == "string" && (p = [p]),
                y.client_.connect(d, p),
                y
              );
            }
            return (
              (h.prototype.close = function (d, p) {
                (this.state_ = h.CLOSING),
                  d === void 0
                    ? this.connection_.sendCloseFrame()
                    : this.connection_.sendCloseFrame(d, p, !0);
              }),
              (h.prototype.send = function (d) {
                if (typeof d.valueOf() == "string") this.connection_.sendUTF(d);
                else {
                  var p = void 0;
                  d instanceof Buffer
                    ? (p = d)
                    : d instanceof Blob
                    ? (p = new Buffer(d, "blob"))
                    : d.buffer
                    ? (p = new Buffer(d.buffer))
                    : (p = new Buffer(d)),
                    this.connection_.sendBytes(p);
                }
              }),
              Object.defineProperty(h.prototype, "url", {
                get: function () {
                  return this.client_.url.href;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(h.prototype, "protocol", {
                get: function () {
                  return this.client_.protocols
                    ? this.client_.protocols[0]
                    : "";
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(h.prototype, "extensions", {
                get: function () {
                  return this.connection_ && this.connection_.extensions
                    ? this.connection_.extensions[0].name
                    : "";
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(h.prototype, "readyState", {
                get: function () {
                  return this.state_;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(h.prototype, "bufferedAmount", {
                get: function () {
                  return this.connection_.bytesWaitingToFlush;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(h.prototype, "binaryType", {
                get: function () {
                  return "arraybuffer";
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(h.prototype, "onopen", {
                get: function () {
                  return this.on_.open;
                },
                set: function (d) {
                  this._Set_on("open", d);
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(h.prototype, "onclose", {
                get: function () {
                  return this.on_.close;
                },
                set: function (d) {
                  this._Set_on("close", d);
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(h.prototype, "onmessage", {
                get: function () {
                  return this.on_.message;
                },
                set: function (d) {
                  this._Set_on("message", d);
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(h.prototype, "onerror", {
                get: function () {
                  return this.on_.error;
                },
                set: function (d) {
                  this._Set_on("error", d);
                },
                enumerable: !0,
                configurable: !0,
              }),
              (h.prototype._Set_on = function (d, p) {
                this.on_[d] && this.removeEventListener(d, this.on_[d]),
                  this.addEventListener(d, p),
                  (this.on_[d] = p);
              }),
              (h.prototype._Handle_connect = function (d) {
                (this.connection_ = d),
                  (this.state_ = h.OPEN),
                  this.connection_.on(
                    "message",
                    this._Handle_message.bind(this)
                  ),
                  this.connection_.on("error", this._Handle_error.bind(this)),
                  this.connection_.on("close", this._Handle_close.bind(this));
                var p = new s.Event("open", f);
                this.dispatchEvent(p);
              }),
              (h.prototype._Handle_close = function (d, p) {
                var y = new o.CloseEvent(
                  "close",
                  r({}, f, { code: d, reason: p })
                );
                (this.state_ = h.CLOSED), this.dispatchEvent(y);
              }),
              (h.prototype._Handle_message = function (d) {
                var p = new c.MessageEvent(
                  "message",
                  r({}, f, { data: d.binaryData ? d.binaryData : d.utf8Data })
                );
                this.dispatchEvent(p);
              }),
              (h.prototype._Handle_error = function (d) {
                var p = new a.ErrorEvent(
                  "error",
                  r({}, f, { error: d, message: d.message })
                );
                this.state_ === h.CONNECTING && (this.state_ = h.CLOSED),
                  this.dispatchEvent(p);
              }),
              h
            );
          })(i.EventTarget);
        (t.WebSocket = l),
          (function (u) {
            (u.CONNECTING = 0), (u.OPEN = 1), (u.CLOSING = 2), (u.CLOSED = 3);
          })((l = t.WebSocket || (t.WebSocket = {}))),
          (t.WebSocket = l);
        var f = { bubbles: !1, cancelable: !1 };
      })($r)),
    $r
  );
}
var yl = Nt;
yl.is_node() && (O.WebSocket = pl().WebSocket);
var gl = {};
(function (t) {
  /*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */ Object.defineProperty(
    t,
    "__esModule",
    { value: !0 }
  ),
    (t.bytes =
      t.stringToBytes =
      t.str =
      t.bytesToString =
      t.hex =
      t.utf8 =
      t.bech32m =
      t.bech32 =
      t.base58check =
      t.base58xmr =
      t.base58xrp =
      t.base58flickr =
      t.base58 =
      t.base64url =
      t.base64 =
      t.base32crockford =
      t.base32hex =
      t.base32 =
      t.base16 =
      t.utils =
      t.assertNumber =
        void 0);
  function e(_) {
    if (!Number.isSafeInteger(_)) throw new Error(`Wrong integer: ${_}`);
  }
  t.assertNumber = e;
  function r(..._) {
    const k = (g, b) => (E) => g(b(E)),
      m = Array.from(_)
        .reverse()
        .reduce((g, b) => (g ? k(g, b.encode) : b.encode), void 0),
      S = _.reduce((g, b) => (g ? k(g, b.decode) : b.decode), void 0);
    return { encode: m, decode: S };
  }
  function n(_) {
    return {
      encode: (k) => {
        if (!Array.isArray(k) || (k.length && typeof k[0] != "number"))
          throw new Error(
            "alphabet.encode input should be an array of numbers"
          );
        return k.map((m) => {
          if ((e(m), m < 0 || m >= _.length))
            throw new Error(
              `Digit index outside alphabet: ${m} (alphabet: ${_.length})`
            );
          return _[m];
        });
      },
      decode: (k) => {
        if (!Array.isArray(k) || (k.length && typeof k[0] != "string"))
          throw new Error("alphabet.decode input should be array of strings");
        return k.map((m) => {
          if (typeof m != "string")
            throw new Error(`alphabet.decode: not string element=${m}`);
          const S = _.indexOf(m);
          if (S === -1)
            throw new Error(`Unknown letter: "${m}". Allowed: ${_}`);
          return S;
        });
      },
    };
  }
  function i(_ = "") {
    if (typeof _ != "string")
      throw new Error("join separator should be string");
    return {
      encode: (k) => {
        if (!Array.isArray(k) || (k.length && typeof k[0] != "string"))
          throw new Error("join.encode input should be array of strings");
        for (let m of k)
          if (typeof m != "string")
            throw new Error(`join.encode: non-string input=${m}`);
        return k.join(_);
      },
      decode: (k) => {
        if (typeof k != "string")
          throw new Error("join.decode input should be string");
        return k.split(_);
      },
    };
  }
  function s(_, k = "=") {
    if ((e(_), typeof k != "string"))
      throw new Error("padding chr should be string");
    return {
      encode(m) {
        if (!Array.isArray(m) || (m.length && typeof m[0] != "string"))
          throw new Error("padding.encode input should be array of strings");
        for (let S of m)
          if (typeof S != "string")
            throw new Error(`padding.encode: non-string input=${S}`);
        for (; (m.length * _) % 8; ) m.push(k);
        return m;
      },
      decode(m) {
        if (!Array.isArray(m) || (m.length && typeof m[0] != "string"))
          throw new Error("padding.encode input should be array of strings");
        for (let g of m)
          if (typeof g != "string")
            throw new Error(`padding.decode: non-string input=${g}`);
        let S = m.length;
        if ((S * _) % 8)
          throw new Error(
            "Invalid padding: string should have whole number of bytes"
          );
        for (; S > 0 && m[S - 1] === k; S--)
          if (!(((S - 1) * _) % 8))
            throw new Error("Invalid padding: string has too much padding");
        return m.slice(0, S);
      },
    };
  }
  function o(_) {
    if (typeof _ != "function")
      throw new Error("normalize fn should be function");
    return { encode: (k) => k, decode: (k) => _(k) };
  }
  function c(_, k, m) {
    if (k < 2)
      throw new Error(
        `convertRadix: wrong from=${k}, base cannot be less than 2`
      );
    if (m < 2)
      throw new Error(
        `convertRadix: wrong to=${m}, base cannot be less than 2`
      );
    if (!Array.isArray(_))
      throw new Error("convertRadix: data should be array");
    if (!_.length) return [];
    let S = 0;
    const g = [],
      b = Array.from(_);
    for (
      b.forEach((E) => {
        if ((e(E), E < 0 || E >= k)) throw new Error(`Wrong integer: ${E}`);
      });
      ;

    ) {
      let E = 0,
        R = !0;
      for (let I = S; I < b.length; I++) {
        const P = b[I],
          L = k * E + P;
        if (!Number.isSafeInteger(L) || (k * E) / k !== E || L - P !== k * E)
          throw new Error("convertRadix: carry overflow");
        if (
          ((E = L % m),
          (b[I] = Math.floor(L / m)),
          !Number.isSafeInteger(b[I]) || b[I] * m + E !== L)
        )
          throw new Error("convertRadix: carry overflow");
        if (R) b[I] ? (R = !1) : (S = I);
        else continue;
      }
      if ((g.push(E), R)) break;
    }
    for (let E = 0; E < _.length - 1 && _[E] === 0; E++) g.push(0);
    return g.reverse();
  }
  const a = (_, k) => (k ? a(k, _ % k) : _),
    l = (_, k) => _ + (k - a(_, k));
  function f(_, k, m, S) {
    if (!Array.isArray(_))
      throw new Error("convertRadix2: data should be array");
    if (k <= 0 || k > 32) throw new Error(`convertRadix2: wrong from=${k}`);
    if (m <= 0 || m > 32) throw new Error(`convertRadix2: wrong to=${m}`);
    if (l(k, m) > 32)
      throw new Error(
        `convertRadix2: carry overflow from=${k} to=${m} carryBits=${l(k, m)}`
      );
    let g = 0,
      b = 0;
    const E = 2 ** m - 1,
      R = [];
    for (const I of _) {
      if ((e(I), I >= 2 ** k))
        throw new Error(`convertRadix2: invalid data word=${I} from=${k}`);
      if (((g = (g << k) | I), b + k > 32))
        throw new Error(`convertRadix2: carry overflow pos=${b} from=${k}`);
      for (b += k; b >= m; b -= m) R.push(((g >> (b - m)) & E) >>> 0);
      g &= 2 ** b - 1;
    }
    if (((g = (g << (m - b)) & E), !S && b >= k))
      throw new Error("Excess padding");
    if (!S && g) throw new Error(`Non-zero padding: ${g}`);
    return S && b > 0 && R.push(g >>> 0), R;
  }
  function u(_) {
    return (
      e(_),
      {
        encode: (k) => {
          if (!(k instanceof Uint8Array))
            throw new Error("radix.encode input should be Uint8Array");
          return c(Array.from(k), 2 ** 8, _);
        },
        decode: (k) => {
          if (!Array.isArray(k) || (k.length && typeof k[0] != "number"))
            throw new Error("radix.decode input should be array of strings");
          return Uint8Array.from(c(k, _, 2 ** 8));
        },
      }
    );
  }
  function h(_, k = !1) {
    if ((e(_), _ <= 0 || _ > 32))
      throw new Error("radix2: bits should be in (0..32]");
    if (l(8, _) > 32 || l(_, 8) > 32) throw new Error("radix2: carry overflow");
    return {
      encode: (m) => {
        if (!(m instanceof Uint8Array))
          throw new Error("radix2.encode input should be Uint8Array");
        return f(Array.from(m), 8, _, !k);
      },
      decode: (m) => {
        if (!Array.isArray(m) || (m.length && typeof m[0] != "number"))
          throw new Error("radix2.decode input should be array of strings");
        return Uint8Array.from(f(m, _, 8, k));
      },
    };
  }
  function d(_) {
    if (typeof _ != "function")
      throw new Error("unsafeWrapper fn should be function");
    return function (...k) {
      try {
        return _.apply(null, k);
      } catch {}
    };
  }
  function p(_, k) {
    if ((e(_), typeof k != "function"))
      throw new Error("checksum fn should be function");
    return {
      encode(m) {
        if (!(m instanceof Uint8Array))
          throw new Error("checksum.encode: input should be Uint8Array");
        const S = k(m).slice(0, _),
          g = new Uint8Array(m.length + _);
        return g.set(m), g.set(S, m.length), g;
      },
      decode(m) {
        if (!(m instanceof Uint8Array))
          throw new Error("checksum.decode: input should be Uint8Array");
        const S = m.slice(0, -_),
          g = k(S).slice(0, _),
          b = m.slice(-_);
        for (let E = 0; E < _; E++)
          if (g[E] !== b[E]) throw new Error("Invalid checksum");
        return S;
      },
    };
  }
  (t.utils = {
    alphabet: n,
    chain: r,
    checksum: p,
    radix: u,
    radix2: h,
    join: i,
    padding: s,
  }),
    (t.base16 = r(h(4), n("0123456789ABCDEF"), i(""))),
    (t.base32 = r(h(5), n("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"), s(5), i(""))),
    (t.base32hex = r(h(5), n("0123456789ABCDEFGHIJKLMNOPQRSTUV"), s(5), i(""))),
    (t.base32crockford = r(
      h(5),
      n("0123456789ABCDEFGHJKMNPQRSTVWXYZ"),
      i(""),
      o((_) => _.toUpperCase().replace(/O/g, "0").replace(/[IL]/g, "1"))
    )),
    (t.base64 = r(
      h(6),
      n("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),
      s(6),
      i("")
    )),
    (t.base64url = r(
      h(6),
      n("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"),
      s(6),
      i("")
    ));
  const y = (_) => r(u(58), n(_), i(""));
  (t.base58 = y("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")),
    (t.base58flickr = y(
      "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
    )),
    (t.base58xrp = y(
      "rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz"
    ));
  const v = [0, 2, 3, 5, 6, 7, 9, 10, 11];
  t.base58xmr = {
    encode(_) {
      let k = "";
      for (let m = 0; m < _.length; m += 8) {
        const S = _.subarray(m, m + 8);
        k += t.base58.encode(S).padStart(v[S.length], "1");
      }
      return k;
    },
    decode(_) {
      let k = [];
      for (let m = 0; m < _.length; m += 11) {
        const S = _.slice(m, m + 11),
          g = v.indexOf(S.length),
          b = t.base58.decode(S);
        for (let E = 0; E < b.length - g; E++)
          if (b[E] !== 0) throw new Error("base58xmr: wrong padding");
        k = k.concat(Array.from(b.slice(b.length - g)));
      }
      return Uint8Array.from(k);
    },
  };
  const w = (_) =>
    r(
      p(4, (k) => _(_(k))),
      t.base58
    );
  t.base58check = w;
  const C = r(n("qpzry9x8gf2tvdw0s3jn54khce6mua7l"), i("")),
    x = [996825010, 642813549, 513874426, 1027748829, 705979059];
  function B(_) {
    const k = _ >> 25;
    let m = (_ & 33554431) << 5;
    for (let S = 0; S < x.length; S++) ((k >> S) & 1) === 1 && (m ^= x[S]);
    return m;
  }
  function $(_, k, m = 1) {
    const S = _.length;
    let g = 1;
    for (let b = 0; b < S; b++) {
      const E = _.charCodeAt(b);
      if (E < 33 || E > 126) throw new Error(`Invalid prefix (${_})`);
      g = B(g) ^ (E >> 5);
    }
    g = B(g);
    for (let b = 0; b < S; b++) g = B(g) ^ (_.charCodeAt(b) & 31);
    for (let b of k) g = B(g) ^ b;
    for (let b = 0; b < 6; b++) g = B(g);
    return (g ^= m), C.encode(f([g % 2 ** 30], 30, 5, !1));
  }
  function A(_) {
    const k = _ === "bech32" ? 1 : 734539939,
      m = h(5),
      S = m.decode,
      g = m.encode,
      b = d(S);
    function E(L, H, z = 90) {
      if (typeof L != "string")
        throw new Error(
          `bech32.encode prefix should be string, not ${typeof L}`
        );
      if (!Array.isArray(H) || (H.length && typeof H[0] != "number"))
        throw new Error(
          `bech32.encode words should be array of numbers, not ${typeof H}`
        );
      const F = L.length + 7 + H.length;
      if (z !== !1 && F > z)
        throw new TypeError(`Length ${F} exceeds limit ${z}`);
      return (L = L.toLowerCase()), `${L}1${C.encode(H)}${$(L, H, k)}`;
    }
    function R(L, H = 90) {
      if (typeof L != "string")
        throw new Error(
          `bech32.decode input should be string, not ${typeof L}`
        );
      if (L.length < 8 || (H !== !1 && L.length > H))
        throw new TypeError(
          `Wrong string length: ${L.length} (${L}). Expected (8..${H})`
        );
      const z = L.toLowerCase();
      if (L !== z && L !== L.toUpperCase())
        throw new Error("String must be lowercase or uppercase");
      L = z;
      const F = L.lastIndexOf("1");
      if (F === 0 || F === -1)
        throw new Error(
          'Letter "1" must be present between prefix and data only'
        );
      const ee = L.slice(0, F),
        Z = L.slice(F + 1);
      if (Z.length < 6)
        throw new Error("Data must be at least 6 characters long");
      const Y = C.decode(Z).slice(0, -6),
        ie = $(ee, Y, k);
      if (!Z.endsWith(ie))
        throw new Error(`Invalid checksum in ${L}: expected "${ie}"`);
      return { prefix: ee, words: Y };
    }
    const I = d(R);
    function P(L) {
      const { prefix: H, words: z } = R(L, !1);
      return { prefix: H, words: z, bytes: S(z) };
    }
    return {
      encode: E,
      decode: R,
      decodeToBytes: P,
      decodeUnsafe: I,
      fromWords: S,
      fromWordsUnsafe: b,
      toWords: g,
    };
  }
  (t.bech32 = A("bech32")),
    (t.bech32m = A("bech32m")),
    (t.utf8 = {
      encode: (_) => new TextDecoder().decode(_),
      decode: (_) => new TextEncoder().encode(_),
    }),
    (t.hex = r(
      h(4),
      n("0123456789abcdef"),
      i(""),
      o((_) => {
        if (typeof _ != "string" || _.length % 2)
          throw new TypeError(
            `hex.decode: expected string, got ${typeof _} with length ${
              _.length
            }`
          );
        return _.toLowerCase();
      })
    ));
  const q = {
      utf8: t.utf8,
      hex: t.hex,
      base16: t.base16,
      base32: t.base32,
      base64: t.base64,
      base64url: t.base64url,
      base58: t.base58,
      base58xmr: t.base58xmr,
    },
    T = `Invalid encoding type. Available types: ${Object.keys(q).join(", ")}`,
    j = (_, k) => {
      if (typeof _ != "string" || !q.hasOwnProperty(_)) throw new TypeError(T);
      if (!(k instanceof Uint8Array))
        throw new TypeError("bytesToString() expects Uint8Array");
      return q[_].encode(k);
    };
  (t.bytesToString = j), (t.str = t.bytesToString);
  const N = (_, k) => {
    if (!q.hasOwnProperty(_)) throw new TypeError(T);
    if (typeof k != "string")
      throw new TypeError("stringToBytes() expects string");
    return q[_].decode(k);
  };
  (t.stringToBytes = N), (t.bytes = t.stringToBytes);
})(gl);
BigInt(1e3), BigInt(1e6), BigInt(1e9), BigInt(1e12);
BigInt("2100000000000000000");
BigInt(1e11);
const Ai = {
  payment_hash: 1,
  payment_secret: 16,
  description: 13,
  payee: 19,
  description_hash: 23,
  expiry: 6,
  min_final_cltv_expiry: 24,
  fallback_address: 9,
  route_hint: 3,
  feature_bits: 5,
  metadata: 27,
};
for (let t = 0, e = Object.keys(Ai); t < e.length; t++)
  e[t], Ai[e[t]].toString();
function vl(t, e) {
  return t.created_at > e.created_at ? t : e;
}
var bl = [
    "wss://nos.lol",
    "wss://relay.nostr.band",
    "wss://relay.f7z.io",
    "wss://relay.damus.io",
    "wss://nostr.mom",
    "wss://no.str.cr",
  ],
  _l = class extends nt {
    constructor(e) {
      super();
      M(this, "ndk");
      M(this, "zappedEvent");
      M(this, "zappedUser");
      (this.ndk = e.ndk),
        (this.zappedEvent = e.zappedEvent),
        (this.zappedUser =
          e.zappedUser ||
          this.ndk.getUser({ hexpubkey: this.zappedEvent.pubkey }));
    }
    async getZapEndpoint() {
      let e, r, n, i;
      if (this.zappedEvent) {
        const c = (await this.zappedEvent.getMatchingTags("zap"))[0];
        if (c)
          switch (c[2]) {
            case "lud06":
              e = c[1];
              break;
            case "lud16":
              r = c[1];
              break;
            default:
              throw new Error(`Unknown zap tag ${c}`);
          }
      }
      if (
        (this.zappedUser &&
          !e &&
          !r &&
          (this.zappedUser.profile || (await this.zappedUser.fetchProfile()),
          (e = (this.zappedUser.profile || {}).lud06),
          (r = (this.zappedUser.profile || {}).lud16)),
        r)
      ) {
        const [c, a] = r.split("@");
        n = `https://${a}/.well-known/lnurlp/${c}`;
      } else if (e) {
        const { words: c } = Te.decode(e, 1e3),
          a = Te.fromWords(c);
        n = new TextDecoder("utf-8").decode(a);
      }
      if (!n) throw new Error("No zap endpoint found");
      const o = await (await fetch(n)).json();
      return (
        o != null &&
          o.allowsNostr &&
          ((o != null && o.nostrPubkey) || (o != null && o.nostrPubKey)) &&
          (i = o.callback),
        i
      );
    }
    async createZapRequest(e, r, n, i) {
      const s = await this.getZapEndpoint();
      if (!s) throw new Error("No zap endpoint found");
      if (!this.zappedEvent) throw new Error("No zapped event found");
      const o = $o.makeZapRequest({
        profile: this.zappedUser.hexpubkey(),
        event: null,
        amount: e,
        comment: r || "",
        relays: i ?? this.relays(),
      });
      if (this.zappedEvent) {
        const u = this.zappedEvent.tagReference();
        u && o.tags.push(u);
      }
      o.tags.push(["lnurl", s]);
      const c = new De(this.ndk, o);
      n && (c.tags = c.tags.concat(n)), await c.sign();
      const a = await c.toNostrEvent();
      return (
        await (
          await fetch(
            `${s}?` +
              new URLSearchParams({
                amount: e.toString(),
                nostr: JSON.stringify(a),
              })
          )
        ).json()
      ).pr;
    }
    relays() {
      var r, n;
      let e = [];
      return (
        (n = (r = this.ndk) == null ? void 0 : r.pool) != null &&
          n.relays &&
          (e = this.ndk.pool.urls()),
        e.length || (e = bl),
        e
      );
    }
  };
function wl(t, e = []) {
  const r = /(@|nostr:)(npub|nprofile|note|nevent)[a-zA-Z0-9]+/g;
  return (
    (t = t.replace(r, (n) => {
      try {
        const i = n.split(/(@|nostr:)/)[2],
          { type: s, data: o } = we.decode(i);
        let c;
        switch (s) {
          case "npub":
            c = ["p", o];
            break;
          case "nprofile":
            c = ["p", o.pubkey];
            break;
          case "nevent":
            c = ["e", o.id];
            break;
          case "note":
            c = ["e", o];
            break;
          default:
            return n;
        }
        return (
          e.find((a) => a[0] === c[0] && a[1] === c[1]) || e.push(c),
          `nostr:${i}`
        );
      } catch {
        return n;
      }
    })),
    { content: t, tags: e }
  );
}
function ml() {
  if (this.kind === void 0) throw new Error("Kind not set");
  return this.kind >= 1e4 && this.kind < 2e4;
}
function El() {
  if (this.kind === void 0) throw new Error("Kind not set");
  return this.kind >= 3e4 && this.kind < 4e4;
}
var Ho = class extends nt {
    constructor(e) {
      super();
      M(this, "url");
      M(this, "scores");
      M(this, "relay");
      M(this, "_status");
      M(this, "connectedAt");
      M(this, "_connectionStats", { attempts: 0, success: 0, durations: [] });
      M(this, "complaining", !1);
      M(this, "debug");
      M(this, "activeSubscriptions", new Set());
      M(this, "updateConnectionStats", {
        connected: () => {
          this._connectionStats.success++,
            (this._connectionStats.connectedAt = Date.now());
        },
        disconnected: () => {
          this._connectionStats.connectedAt &&
            (this._connectionStats.durations.push(
              Date.now() - this._connectionStats.connectedAt
            ),
            this._connectionStats.durations.length > 100 &&
              this._connectionStats.durations.shift()),
            (this._connectionStats.connectedAt = void 0);
        },
        attempt: () => {
          this._connectionStats.attempts++;
        },
      });
      (this.url = e),
        (this.relay = _c(e)),
        (this.scores = new Map()),
        (this._status = 3),
        (this.debug = Ui(`ndk:relay:${e}`)),
        this.relay.on("connect", () => {
          this.updateConnectionStats.connected(),
            (this._status = 1),
            this.emit("connect");
        }),
        this.relay.on("disconnect", () => {
          this.updateConnectionStats.disconnected(),
            this._status === 1 &&
              ((this._status = 3), this.handleReconnection()),
            this.emit("disconnect");
        }),
        this.relay.on("notice", (r) => this.handleNotice(r));
    }
    isFlapping() {
      const e = this._connectionStats.durations;
      if (e.length < 10) return !1;
      const n = e.reduce((c, a) => c + a, 0) / e.length,
        i =
          e.map((c) => Math.pow(c - n, 2)).reduce((c, a) => c + a, 0) /
          e.length;
      return Math.sqrt(i) < 1e3;
    }
    handleReconnection() {
      this.isFlapping() &&
        (this.emit("flapping", this, this._connectionStats),
        (this._status = 5)),
        this.connectedAt && Date.now() - this.connectedAt < 5e3
          ? setTimeout(() => this.connect(), 6e4)
          : this.connect();
    }
    get status() {
      return this._status;
    }
    async connect() {
      try {
        this.updateConnectionStats.attempt(),
          (this._status = 0),
          await this.relay.connect();
      } catch (e) {
        throw (this.debug("Failed to connect", e), (this._status = 3), e);
      }
    }
    disconnect() {
      (this._status = 2), this.relay.close();
    }
    async handleNotice(e) {
      (e.includes("oo many") || e.includes("aximum")) &&
        (this.disconnect(),
        setTimeout(() => this.connect(), 2e3),
        this.debug(this.relay.url, "Relay complaining?", e)),
        this.emit("notice", this, e);
    }
    subscribe(e) {
      const { filters: r } = e,
        n = this.relay.sub(r, { id: e.subId });
      this.debug(`Subscribed to ${JSON.stringify(r)}`),
        n.on("event", (s) => {
          const o = new De(void 0, s);
          (o.relay = this), e.eventReceived(o, this);
        }),
        n.on("eose", () => {
          e.eoseReceived(this);
        });
      const i = n.unsub;
      return (
        (n.unsub = () => {
          this.debug(`Unsubscribing from ${JSON.stringify(r)}`),
            this.activeSubscriptions.delete(e),
            i();
        }),
        this.activeSubscriptions.add(e),
        e.on("close", () => {
          this.activeSubscriptions.delete(e);
        }),
        n
      );
    }
    async publish(e, r = 2500) {
      return this.status === 1
        ? this.publishEvent(e, r)
        : (this.once("connect", () => {
            this.publishEvent(e, r);
          }),
          !0);
    }
    async publishEvent(e, r) {
      const n = await e.toNostrEvent(),
        i = this.relay.publish(n);
      let s;
      const o = new Promise((a, l) => {
        i.then(() => {
          clearTimeout(s), this.emit("published", e), a(!0);
        }).catch((f) => {
          clearTimeout(s),
            this.debug("Publish failed", f, e.id),
            this.emit("publish:failed", e, f),
            l(f);
        });
      });
      if (!r) return o;
      const c = new Promise((a, l) => {
        s = setTimeout(() => {
          this.debug("Publish timed out", e.rawEvent()),
            this.emit("publish:failed", e, "Timeout"),
            l(new Error("Publish operation timed out"));
        }, r);
      });
      return Promise.race([o, c]);
    }
    scoreSlowerEvent(e) {}
    get connectionStats() {
      return this._connectionStats;
    }
    tagReference(e) {
      const r = ["r", this.relay.url];
      return e && r.push(e), r;
    }
  },
  Rt = class {
    constructor(t, e) {
      M(this, "relays");
      M(this, "debug");
      M(this, "ndk");
      (this.relays = t),
        (this.ndk = e),
        (this.debug = e.debug.extend("relayset"));
    }
    addRelay(t) {
      this.relays.add(t);
    }
    static fromRelayUrls(t, e) {
      const r = new Set();
      for (const n of t) {
        const i = e.pool.relays.get(n);
        i && r.add(i);
      }
      return new Rt(new Set(r), e);
    }
    subscribeOnRelay(t, e) {
      const r = t.subscribe(e);
      e.relaySubscriptions.set(t, r);
    }
    getId() {
      const e = Array.from(this.relays)
        .map((r) => r.url)
        .sort()
        .join(",");
      return ae(me(e));
    }
    subscribe(t) {
      const e = t.groupableId(),
        r = `${this.getId()}:${e}`;
      if (!e) return this.executeSubscription(t), t;
      const n = this.ndk.delayedSubscriptions.get(r);
      return (
        n
          ? n.push(t)
          : (setTimeout(() => {
              this.executeDelayedSubscription(r);
            }, t.opts.groupableDelay),
            this.ndk.delayedSubscriptions.set(r, [t])),
        t
      );
    }
    executeDelayedSubscription(t) {
      const e = this.ndk.delayedSubscriptions.get(t);
      this.ndk.delayedSubscriptions.delete(t),
        e &&
          (e.length > 1
            ? this.executeSubscriptions(e)
            : this.executeSubscription(e[0]));
    }
    executeSubscriptions(t) {
      const e = t[0].ndk,
        r = new Il(e, t);
      this.executeSubscription(r);
    }
    executeSubscription(t) {
      this.debug("subscribing", { filters: t.filters });
      for (const e of this.relays)
        if (e.status === 1) this.subscribeOnRelay(e, t);
        else {
          const r = () => {
            this.debug("new relay coming online for active subscription", {
              relay: e.url,
              filters: t.filters,
            }),
              this.subscribeOnRelay(e, t);
          };
          e.once("connect", r),
            t.once("close", () => {
              e.removeListener("connect", r);
            });
        }
      return t;
    }
    async publish(t, e) {
      const r = new Set(),
        n = Array.from(this.relays).map(
          (i) =>
            new Promise((s) => {
              i.publish(t, e)
                .then(() => {
                  r.add(i), s();
                })
                .catch((o) => {
                  this.debug("error publishing to relay", {
                    relay: i.url,
                    err: o,
                  }),
                    s();
                });
            })
        );
      if ((await Promise.all(n), r.size === 0))
        throw new Error("No relay was able to receive the event");
      return r;
    }
    size() {
      return this.relays.size;
    }
  };
function xl(t, e) {
  var n;
  const r = new Set();
  return (
    (n = t.pool) == null || n.relays.forEach((i) => r.add(i)), new Rt(r, t)
  );
}
function kl(t, e) {
  var n;
  const r = new Set();
  return (
    (n = t.pool) == null ||
      n.relays.forEach((i) => {
        i.complaining
          ? t.debug(`Relay ${i.url} is complaining, not adding to set`)
          : r.add(i);
      }),
    new Rt(r, t)
  );
}
function Sl(t) {
  return !!(Cl(t.filter) && Al(t));
}
function Cl(t) {
  return !!t.ids;
}
function Al(t) {
  const e = t.filter.ids;
  return !!e && e.length === t.eventFirstSeen.size;
}
var Ol = {
    closeOnEose: !0,
    cacheUsage: "CACHE_FIRST",
    groupable: !0,
    groupableDelay: 100,
  },
  Uo = class extends nt {
    constructor(e, r, n, i, s) {
      super();
      M(this, "subId");
      M(this, "filters");
      M(this, "opts");
      M(this, "relaySet");
      M(this, "ndk");
      M(this, "relaySubscriptions");
      M(this, "debug");
      M(this, "eventFirstSeen", new Map());
      M(this, "eosesSeen", new Set());
      M(this, "eventsPerRelay", new Map());
      M(this, "eoseTimeout");
      if (
        ((this.ndk = e),
        (this.opts = { ...Ol, ...(n || {}) }),
        (this.filters = r instanceof Array ? r : [r]),
        (this.subId =
          s || (n == null ? void 0 : n.subId) || ql(this.filters[0])),
        (this.relaySet = i),
        (this.relaySubscriptions = new Map()),
        (this.debug = e.debug.extend(`subscription:${this.subId}`)),
        this.opts.cacheUsage === "ONLY_CACHE" && !this.opts.closeOnEose)
      )
        throw new Error(
          "Cannot use cache-only options with a persistent subscription"
        );
    }
    get filter() {
      return this.filters[0];
    }
    groupableId() {
      var i;
      if (!((i = this.opts) != null && i.groupable) || this.filters.length > 1)
        return null;
      const e = this.filters[0],
        r = !e.since && !e.until,
        n = !e.limit;
      if (r && n) {
        let s = e.kinds ? e.kinds.join(",") : "";
        const o = Object.keys(e || {})
          .sort()
          .join("-");
        return (s += `-${o}`), s;
      }
      return null;
    }
    shouldQueryCache() {
      var e;
      return ((e = this.opts) == null ? void 0 : e.cacheUsage) !== "ONLY_RELAY";
    }
    shouldQueryRelays() {
      var e;
      return ((e = this.opts) == null ? void 0 : e.cacheUsage) !== "ONLY_CACHE";
    }
    shouldWaitForCache() {
      var e;
      return (
        this.opts.closeOnEose &&
        !!((e = this.ndk.cacheAdapter) != null && e.locking) &&
        this.opts.cacheUsage !== "PARALLEL"
      );
    }
    async start() {
      let e;
      if (
        this.shouldQueryCache() &&
        ((e = this.startWithCache()),
        this.shouldWaitForCache() && (await e, Sl(this)))
      ) {
        this.emit("eose", this);
        return;
      }
      this.shouldQueryRelays()
        ? this.startWithRelaySet()
        : this.emit("eose", this);
    }
    stop() {
      this.relaySubscriptions.forEach((e) => e.unsub()),
        this.relaySubscriptions.clear(),
        this.emit("close", this);
    }
    async startWithCache() {
      var e;
      if ((e = this.ndk.cacheAdapter) != null && e.query) {
        const r = this.ndk.cacheAdapter.query(this);
        this.ndk.cacheAdapter.locking && (await r);
      }
    }
    startWithRelaySet() {
      this.relaySet || (this.relaySet = kl(this.ndk, this.filters[0])),
        this.relaySet && this.relaySet.subscribe(this);
    }
    eventReceived(e, r, n = !1) {
      if ((r && (e.relay = r), r || (r = e.relay), !n && r)) {
        let i = this.eventsPerRelay.get(r);
        if (
          (i || ((i = new Set()), this.eventsPerRelay.set(r, i)),
          i.add(e.id),
          this.eventFirstSeen.has(e.id))
        ) {
          const o = Date.now() - (this.eventFirstSeen.get(e.id) || 0);
          r.scoreSlowerEvent(o), this.emit("event:dup", e, r, o, this);
          return;
        }
        this.ndk.cacheAdapter &&
          this.ndk.cacheAdapter.setEvent(e, this.filters[0], r),
          this.eventFirstSeen.set(`${e.id}`, Date.now());
      } else this.eventFirstSeen.set(`${e.id}`, 0);
      this.emit("event", e, r, this);
    }
    eoseReceived(e) {
      var n, i, s;
      (n = this.opts) != null &&
        n.closeOnEose &&
        ((i = this.relaySubscriptions.get(e)) == null || i.unsub(),
        this.relaySubscriptions.delete(e),
        this.relaySubscriptions.size === 0 && this.emit("close", this)),
        this.eosesSeen.add(e),
        this.eosesSeen.size ===
        ((s = this.relaySet) == null ? void 0 : s.size())
          ? this.emit("eose")
          : (this.eoseTimeout && clearTimeout(this.eoseTimeout),
            (this.eoseTimeout = setTimeout(() => {
              this.emit("eose");
            }, 500)));
    }
  },
  Il = class extends Uo {
    constructor(e, r) {
      const n = e.debug.extend("subscription-group"),
        i = $l(r.map((s) => s.filters[0]));
      super(e, i, r[0].opts, r[0].relaySet);
      M(this, "subscriptions");
      (this.subscriptions = r),
        n("merged filters", {
          count: r.length,
          mergedFilters: this.filters[0],
        }),
        this.on("event", this.forwardEvent),
        this.on("event:dup", this.forwardEventDup),
        this.on("eose", this.forwardEose),
        this.on("close", this.forwardClose);
    }
    isEventForSubscription(e, r) {
      const { filters: n } = r;
      return n ? mo(n[0], e.rawEvent()) : !1;
    }
    forwardEvent(e, r) {
      for (const n of this.subscriptions)
        this.isEventForSubscription(e, n) && n.emit("event", e, r, n);
    }
    forwardEventDup(e, r, n) {
      for (const i of this.subscriptions)
        this.isEventForSubscription(e, i) && i.emit("event:dup", e, r, n, i);
    }
    forwardEose() {
      for (const e of this.subscriptions) e.emit("eose", e);
    }
    forwardClose() {
      for (const e of this.subscriptions) e.emit("close", e);
    }
  };
function $l(t) {
  const e = {};
  return (
    t.forEach((r) => {
      Object.entries(r).forEach(([n, i]) => {
        Array.isArray(i)
          ? e[n] === void 0
            ? (e[n] = [...i])
            : (e[n] = Array.from(new Set([...e[n], ...i])))
          : (e[n] = i);
      });
    }),
    e
  );
}
function Rl(t) {
  let e;
  try {
    switch (((e = we.decode(t)), e.type)) {
      case "nevent":
        return { ids: [e.data.id] };
      case "note":
        return { ids: [e.data] };
      case "naddr":
        return {
          authors: [e.data.pubkey],
          "#d": [e.data.identifier],
          kinds: [e.data.kind],
        };
    }
  } catch {}
  return { ids: [t] };
}
function Bl(t) {
  try {
    const e = we.decode(t);
    if (["naddr", "nevent"].includes(e == null ? void 0 : e.type)) {
      const r = e.data;
      if (r != null && r.relays) return r.relays.map((n) => new Ho(n));
    }
  } catch {}
  return [];
}
function ql(t) {
  const e = Object.keys(t) || [],
    r = [];
  for (const n of e)
    if (n === "kinds") {
      const i = [n, t.kinds.join(",")];
      r.push(i.join(":"));
    } else r.push(n);
  return r.push(Math.floor(Math.random() * 999999999).toString()), r.join("-");
}
async function Tl() {
  if (!this.ndk) throw new Error("NDK not set");
  const t = await this.ndk.fetchEvents({
    kinds: [3],
    authors: [this.hexpubkey()],
  });
  if (t) {
    const e = new Set();
    return (
      t.forEach((r) => {
        r.tags.forEach((n) => {
          if (n[0] === "p")
            try {
              const i = we.npubEncode(n[1]);
              e.add(i);
            } catch {}
        });
      }),
      [...e].reduce((r, n) => {
        const i = new Mt({ npub: n });
        return (i.ndk = this.ndk), r.add(i), r;
      }, new Set())
    );
  }
  return new Set();
}
function Ll(t, e) {
  const r = JSON.parse(t.content);
  return (
    Object.keys(r).forEach((n) => {
      switch (n) {
        case "name":
          e.name = r.name;
          break;
        case "display_name":
        case "displayName":
          e.displayName = r.displayName || r.display_name;
          break;
        case "image":
        case "picture":
          e.image = r.image || r.picture;
          break;
        case "banner":
          e.banner = r.banner;
          break;
        case "bio":
          e.bio = r.bio;
          break;
        case "nip05":
          e.nip05 = r.nip05;
          break;
        case "lud06":
          e.lud06 = r.lud06;
          break;
        case "lud16":
          e.lud16 = r.lud16;
          break;
        case "about":
          e.about = r.about;
          break;
        case "zapService":
          e.zapService = r.zapService;
          break;
        case "website":
          e.website = r.website;
          break;
        default:
          e[n] = r[n];
          break;
      }
    }),
    e
  );
}
var Mt = class {
  constructor(t) {
    M(this, "ndk");
    M(this, "profile");
    M(this, "npub", "");
    M(this, "relayUrls", []);
    M(this, "follows", Tl.bind(this));
    t.npub && (this.npub = t.npub),
      t.hexpubkey && (this.npub = we.npubEncode(t.hexpubkey)),
      t.relayUrls && (this.relayUrls = t.relayUrls);
  }
  static async fromNip05(t) {
    const e = await Ao.queryProfile(t);
    if (e) return new Mt({ hexpubkey: e.pubkey, relayUrls: e.relays });
  }
  hexpubkey() {
    return we.decode(this.npub).data;
  }
  async fetchProfile(t) {
    if (!this.ndk) throw new Error("NDK not set");
    this.profile || (this.profile = {});
    let e = null;
    return (
      !t &&
        this.ndk.cacheAdapter &&
        this.ndk.cacheAdapter.locking &&
        ((e = await this.ndk.fetchEvents(
          { kinds: [0], authors: [this.hexpubkey()] },
          { cacheUsage: "ONLY_CACHE", closeOnEose: !0, groupable: !1 }
        )),
        (t = { cacheUsage: "ONLY_RELAY", closeOnEose: !0 })),
      (!e || e.size === 0) &&
        (e = await this.ndk.fetchEvents(
          { kinds: [0], authors: [this.hexpubkey()] },
          t
        )),
      e &&
        Array.from(e)
          .sort((n, i) => n.created_at - i.created_at)
          .forEach((n) => {
            try {
              this.profile = Ll(n, this.profile);
            } catch {}
          }),
      e
    );
  }
  async relayList() {
    if (!this.ndk) throw new Error("NDK not set");
    const t = await this.ndk.fetchEvents({
      kinds: [10002],
      authors: [this.hexpubkey()],
    });
    return t || new Set();
  }
  tagReference() {
    return ["p", this.hexpubkey()];
  }
  async publish() {
    if (!this.ndk) throw new Error("No NDK instance found");
    this.ndk.assertSigner(),
      await new De(this.ndk, {
        kind: 0,
        content: JSON.stringify(this.profile),
      }).publish();
  }
  async follow(t, e) {
    if (!this.ndk) throw new Error("No NDK instance found");
    if ((this.ndk.assertSigner(), e || (e = await this.follows()), e.has(t)))
      return !1;
    e.add(t);
    const r = new De(this.ndk, { kind: 3 });
    for (const n of e) r.tag(n);
    return await r.publish(), !0;
  }
};
async function Nl(t, e) {
  if (!e) {
    if (!this.ndk) throw new Error("No signer available");
    await this.ndk.assertSigner(), (e = this.ndk.signer);
  }
  if (!t) {
    const r = this.getMatchingTags("p");
    if (r.length !== 1)
      throw new Error(
        "No recipient could be determined and no explicit recipient was provided"
      );
    (t = new Mt({ hexpubkey: r[0][1] })), (t.ndk = this.ndk);
  }
  this.content = await e.encrypt(t, this.content);
}
async function Ml(t, e) {
  if (!e) {
    if (!this.ndk) throw new Error("No signer available");
    await this.ndk.assertSigner(), (e = this.ndk.signer);
  }
  t || (t = this.author), (this.content = await e.decrypt(t, this.content));
}
function jl() {
  return this.isParamReplaceable()
    ? we.naddrEncode({
        kind: this.kind,
        pubkey: this.pubkey,
        identifier: this.replaceableDTag(),
        relays: this.relay ? [this.relay.url] : [],
      })
    : this.relay
    ? we.neventEncode({
        id: this.tagId(),
        relays: [this.relay.url],
        author: this.pubkey,
      })
    : we.noteEncode(this.tagId());
}
async function Pl(t = !0, e) {
  if (!e) {
    if (!this.ndk) throw new Error("No NDK instance found");
    this.ndk.assertSigner(), (e = this.ndk.signer);
  }
  if (!e) throw new Error("No signer available");
  const r = await e.user(),
    n = new De(this.ndk, {
      kind: Hl(this),
      content: "",
      pubkey: r.hexpubkey(),
    });
  return (
    n.tag(this),
    n.kind === 16 && n.tags.push(["k", `${this.kind}`]),
    await n.sign(e),
    t && (await n.publish()),
    n
  );
}
function Hl(t) {
  return t.kind === 1 ? 6 : 16;
}
var De = class extends nt {
    constructor(e, r) {
      super();
      M(this, "ndk");
      M(this, "created_at");
      M(this, "content", "");
      M(this, "tags", []);
      M(this, "kind");
      M(this, "id", "");
      M(this, "sig");
      M(this, "pubkey", "");
      M(this, "relay");
      M(this, "isReplaceable", ml.bind(this));
      M(this, "isParamReplaceable", El.bind(this));
      M(this, "encode", jl.bind(this));
      M(this, "encrypt", Nl.bind(this));
      M(this, "decrypt", Ml.bind(this));
      M(this, "repost", Pl.bind(this));
      (this.ndk = e),
        (this.created_at = r == null ? void 0 : r.created_at),
        (this.content = (r == null ? void 0 : r.content) || ""),
        (this.tags = (r == null ? void 0 : r.tags) || []),
        (this.id = (r == null ? void 0 : r.id) || ""),
        (this.sig = r == null ? void 0 : r.sig),
        (this.pubkey = (r == null ? void 0 : r.pubkey) || ""),
        (this.kind = r == null ? void 0 : r.kind);
    }
    rawEvent() {
      return {
        created_at: this.created_at,
        content: this.content,
        tags: this.tags,
        kind: this.kind,
        pubkey: this.pubkey,
        id: this.id,
        sig: this.sig,
      };
    }
    set author(e) {
      this.pubkey = e.hexpubkey();
    }
    get author() {
      const e = new Mt({ hexpubkey: this.pubkey });
      return (e.ndk = this.ndk), e;
    }
    tag(e, r) {
      const n = e.tagReference();
      if ((r && n.push(r), this.tags.push(n), e instanceof De)) {
        const i = e.author;
        i && this.pubkey !== i.hexpubkey() && this.tag(i);
        for (const s of e.getMatchingTags("p"))
          s[1] !== this.pubkey &&
            (this.tags.find((o) => o[0] === "p" && o[1] === s[1]) ||
              this.tags.push(["p", s[1]]));
      }
    }
    async toNostrEvent(e) {
      var s, o;
      if (!e && this.pubkey === "") {
        const c = await ((o = (s = this.ndk) == null ? void 0 : s.signer) ==
        null
          ? void 0
          : o.user());
        this.pubkey = (c == null ? void 0 : c.hexpubkey()) || "";
      }
      this.created_at || (this.created_at = Math.floor(Date.now() / 1e3));
      const r = this.rawEvent(),
        { content: n, tags: i } = this.generateTags();
      (r.content = n || ""), (r.tags = i);
      try {
        this.id = ur(r);
      } catch {}
      return this.id && (r.id = this.id), this.sig && (r.sig = this.sig), r;
    }
    getMatchingTags(e) {
      return this.tags.filter((r) => r[0] === e);
    }
    tagValue(e) {
      const r = this.getMatchingTags(e);
      if (r.length !== 0) return r[0][1];
    }
    removeTag(e) {
      this.tags = this.tags.filter((r) => r[0] !== e);
    }
    async sign(e) {
      var n;
      e || ((n = this.ndk) == null || n.assertSigner(), (e = this.ndk.signer)),
        await this.generateTags(),
        this.isReplaceable() &&
          (this.created_at = Math.floor(Date.now() / 1e3));
      const r = await this.toNostrEvent();
      return (this.sig = await e.sign(r)), this.sig;
    }
    async publish(e, r) {
      if ((this.sig || (await this.sign()), !this.ndk))
        throw new Error(
          "NDKEvent must be associated with an NDK instance to publish"
        );
      return this.ndk.publish(this, e, r);
    }
    generateTags() {
      let e = [];
      const r = wl(this.content, this.tags),
        n = r.content;
      if (
        ((e = r.tags),
        this.kind &&
          this.kind >= 3e4 &&
          this.kind <= 4e4 &&
          !this.getMatchingTags("d")[0])
      ) {
        const s = [...Array(16)]
          .map(() => Math.random().toString(36)[2])
          .join("");
        e.push(["d", s]);
      }
      return { content: n || "", tags: e };
    }
    replaceableDTag() {
      if (this.kind && this.kind >= 3e4 && this.kind <= 4e4) {
        const e = this.getMatchingTags("d")[0];
        return e ? e[1] : "";
      }
      throw new Error("Event is not a parameterized replaceable event");
    }
    deduplicationKey() {
      return this.kind === 0 || this.kind === 3
        ? `${this.kind}:${this.pubkey}`
        : this.tagId();
    }
    tagId() {
      if (this.kind && this.kind >= 3e4 && this.kind <= 4e4) {
        const e = this.replaceableDTag();
        return `${this.kind}:${this.pubkey}:${e}`;
      }
      return this.id;
    }
    tagReference() {
      return this.isParamReplaceable()
        ? ["a", this.tagId()]
        : ["e", this.tagId()];
    }
    filter() {
      return this.isParamReplaceable()
        ? { "#a": [this.tagId()] }
        : { "#e": [this.tagId()] };
    }
    async zap(e, r, n) {
      if (!this.ndk) throw new Error("No NDK instance found");
      return (
        this.ndk.assertSigner(),
        await new _l({ ndk: this.ndk, zappedEvent: this }).createZapRequest(
          e,
          r,
          n
        )
      );
    }
    async delete(e) {
      if (!this.ndk) throw new Error("No NDK instance found");
      this.ndk.assertSigner();
      const r = new De(this.ndk, { kind: 5, content: e || "" });
      return r.tag(this), await r.publish(), r;
    }
  },
  Ul = class extends nt {
    constructor(e = [], r) {
      super();
      M(this, "relays", new Map());
      M(this, "debug");
      M(this, "temporaryRelayTimers", new Map());
      this.debug = r.debug.extend("pool");
      for (const n of e) {
        const i = new Ho(n);
        this.addRelay(i, !1);
      }
    }
    useTemporaryRelay(e, r = 6e5) {
      const n = this.relays.has(e.url);
      n || this.addRelay(e);
      const i = this.temporaryRelayTimers.get(e.url);
      if ((i && clearTimeout(i), !n || i)) {
        const s = setTimeout(() => {
          this.removeRelay(e.url);
        }, r);
        this.temporaryRelayTimers.set(e.url, s);
      }
    }
    addRelay(e, r = !0) {
      const n = e.url;
      e.on("notice", (i, s) => this.emit("notice", i, s)),
        e.on("connect", () => this.handleRelayConnect(n)),
        e.on("disconnect", () => this.emit("relay:disconnect", e)),
        e.on("flapping", () => this.handleFlapping(e)),
        this.relays.set(n, e),
        r && e.connect();
    }
    removeRelay(e) {
      const r = this.relays.get(e);
      if (r)
        return (
          r.disconnect(),
          this.relays.delete(e),
          this.emit("relay:disconnect", r),
          !0
        );
      const n = this.temporaryRelayTimers.get(e);
      return n && (clearTimeout(n), this.temporaryRelayTimers.delete(e)), !1;
    }
    handleRelayConnect(e) {
      this.debug(`Relay ${e} connected`),
        this.emit("relay:connect", this.relays.get(e)),
        this.stats().connected === this.relays.size && this.emit("connect");
    }
    async connect(e) {
      const r = [];
      this.debug(
        `Connecting to ${this.relays.size} relays${
          e ? `, timeout ${e}...` : ""
        }`
      );
      for (const n of this.relays.values())
        if (e) {
          const i = new Promise((s, o) => {
            setTimeout(() => o(`Timed out after ${e}ms`), e);
          });
          r.push(
            Promise.race([n.connect(), i]).catch((s) => {
              this.debug(`Failed to connect to relay ${n.url}: ${s}`);
            })
          );
        } else r.push(n.connect());
      e &&
        setTimeout(() => {
          const n = this.stats().connected === this.relays.size,
            i = this.stats().connected > 0;
          !n && i && this.emit("connect");
        }, e),
        await Promise.all(r);
    }
    handleFlapping(e) {
      this.debug(`Relay ${e.url} is flapping`),
        this.relays.delete(e.url),
        this.emit("flapping", e);
    }
    size() {
      return this.relays.size;
    }
    stats() {
      const e = { total: 0, connected: 0, disconnected: 0, connecting: 0 };
      for (const r of this.relays.values())
        e.total++,
          r.status === 1
            ? e.connected++
            : r.status === 3
            ? e.disconnected++
            : r.status === 0 && e.connecting++;
      return e;
    }
    connectedRelays() {
      return Array.from(this.relays.values()).filter((e) => e.status === 1);
    }
    urls() {
      return Array.from(this.relays.keys());
    }
  };
function zl(t, e) {
  const r = e.connectedRelays();
  if (!Array.from(t.relays).some((i) => r.map((s) => s.url).includes(i.url)))
    for (const i of r) t.addRelay(i);
  if (r.length === 0) for (const i of e.relays.values()) t.addRelay(i);
  return t;
}
var Fl = class extends nt {
  constructor(e = {}) {
    super();
    M(this, "pool");
    M(this, "signer");
    M(this, "cacheAdapter");
    M(this, "debug");
    M(this, "devWriteRelaySet");
    M(this, "delayedSubscriptions");
    (this.debug = e.debug || Ui("ndk")),
      (this.pool = new Ul(e.explicitRelayUrls || [], this)),
      (this.signer = e.signer),
      (this.cacheAdapter = e.cacheAdapter),
      (this.delayedSubscriptions = new Map()),
      e.devWriteRelayUrls &&
        (this.devWriteRelaySet = Rt.fromRelayUrls(e.devWriteRelayUrls, this));
  }
  toJSON() {
    return { relayCount: this.pool.relays.size }.toString();
  }
  async connect(e) {
    return (
      this.debug("Connecting to relays", { timeoutMs: e }), this.pool.connect(e)
    );
  }
  getUser(e) {
    const r = new Mt(e);
    return (r.ndk = this), r;
  }
  subscribe(e, r, n, i = !0) {
    const s = new Uo(this, e, r, n);
    if (n) for (const o of n.relays) this.pool.useTemporaryRelay(o);
    return i && s.start(), s;
  }
  async publish(e, r, n) {
    return (
      this.debug("Deprecated: Use `event.publish()` instead"),
      r || (r = this.devWriteRelaySet || xl(this)),
      r.publish(e, n)
    );
  }
  async fetchEvent(e, r, n) {
    let i;
    if (!n && typeof e == "string") {
      const s = Bl(e);
      s.length > 0 && ((n = new Rt(new Set(s), this)), (n = zl(n, this.pool)));
    }
    if ((typeof e == "string" ? (i = Rl(e)) : (i = e), !i))
      throw new Error(`Invalid filter: ${JSON.stringify(e)}`);
    return new Promise((s) => {
      const o = this.subscribe(i, { ...(r || {}), closeOnEose: !0 }, n, !1);
      o.on("event", (c) => {
        (c.ndk = this), s(c);
      }),
        o.on("eose", () => {
          s(null);
        }),
        o.start();
    });
  }
  async fetchEvents(e, r, n) {
    return new Promise((i) => {
      const s = new Map(),
        o = this.subscribe(e, { ...(r || {}), closeOnEose: !0 }, n, !1),
        c = (a) => {
          const l = a.deduplicationKey(),
            f = s.get(l);
          f && (a = vl(f, a)), (a.ndk = this), s.set(l, a);
        };
      o.on("event", c),
        o.on("event:dup", c),
        o.on("eose", () => {
          i(new Set(s.values()));
        }),
        o.start();
    });
  }
  async assertSigner() {
    if (!this.signer)
      throw (this.emit("signerRequired"), new Error("Signer required"));
  }
};
const zo = new Fl({ explicitRelayUrls: ["wss://gardn.nostr1.com"], debug: !1 });
zo.connect().then(() => console.log("NDK Connected"));
const Dl = ts(zo);
var Fo = { exports: {} };
(function (t, e) {
  (function (r, n) {
    t.exports = n();
  })(O, function () {
    var r = 1e3,
      n = 6e4,
      i = 36e5,
      s = "millisecond",
      o = "second",
      c = "minute",
      a = "hour",
      l = "day",
      f = "week",
      u = "month",
      h = "quarter",
      d = "year",
      p = "date",
      y = "Invalid Date",
      v =
        /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
      w =
        /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
      C = {
        name: "en",
        weekdays:
          "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        months:
          "January_February_March_April_May_June_July_August_September_October_November_December".split(
            "_"
          ),
        ordinal: function (m) {
          var S = ["th", "st", "nd", "rd"],
            g = m % 100;
          return "[" + m + (S[(g - 20) % 10] || S[g] || S[0]) + "]";
        },
      },
      x = function (m, S, g) {
        var b = String(m);
        return !b || b.length >= S
          ? m
          : "" + Array(S + 1 - b.length).join(g) + m;
      },
      B = {
        s: x,
        z: function (m) {
          var S = -m.utcOffset(),
            g = Math.abs(S),
            b = Math.floor(g / 60),
            E = g % 60;
          return (S <= 0 ? "+" : "-") + x(b, 2, "0") + ":" + x(E, 2, "0");
        },
        m: function m(S, g) {
          if (S.date() < g.date()) return -m(g, S);
          var b = 12 * (g.year() - S.year()) + (g.month() - S.month()),
            E = S.clone().add(b, u),
            R = g - E < 0,
            I = S.clone().add(b + (R ? -1 : 1), u);
          return +(-(b + (g - E) / (R ? E - I : I - E)) || 0);
        },
        a: function (m) {
          return m < 0 ? Math.ceil(m) || 0 : Math.floor(m);
        },
        p: function (m) {
          return (
            { M: u, y: d, w: f, d: l, D: p, h: a, m: c, s: o, ms: s, Q: h }[
              m
            ] ||
            String(m || "")
              .toLowerCase()
              .replace(/s$/, "")
          );
        },
        u: function (m) {
          return m === void 0;
        },
      },
      $ = "en",
      A = {};
    A[$] = C;
    var q = function (m) {
        return m instanceof _;
      },
      T = function m(S, g, b) {
        var E;
        if (!S) return $;
        if (typeof S == "string") {
          var R = S.toLowerCase();
          A[R] && (E = R), g && ((A[R] = g), (E = R));
          var I = S.split("-");
          if (!E && I.length > 1) return m(I[0]);
        } else {
          var P = S.name;
          (A[P] = S), (E = P);
        }
        return !b && E && ($ = E), E || (!b && $);
      },
      j = function (m, S) {
        if (q(m)) return m.clone();
        var g = typeof S == "object" ? S : {};
        return (g.date = m), (g.args = arguments), new _(g);
      },
      N = B;
    (N.l = T),
      (N.i = q),
      (N.w = function (m, S) {
        return j(m, { locale: S.$L, utc: S.$u, x: S.$x, $offset: S.$offset });
      });
    var _ = (function () {
        function m(g) {
          (this.$L = T(g.locale, null, !0)), this.parse(g);
        }
        var S = m.prototype;
        return (
          (S.parse = function (g) {
            (this.$d = (function (b) {
              var E = b.date,
                R = b.utc;
              if (E === null) return new Date(NaN);
              if (N.u(E)) return new Date();
              if (E instanceof Date) return new Date(E);
              if (typeof E == "string" && !/Z$/i.test(E)) {
                var I = E.match(v);
                if (I) {
                  var P = I[2] - 1 || 0,
                    L = (I[7] || "0").substring(0, 3);
                  return R
                    ? new Date(
                        Date.UTC(
                          I[1],
                          P,
                          I[3] || 1,
                          I[4] || 0,
                          I[5] || 0,
                          I[6] || 0,
                          L
                        )
                      )
                    : new Date(
                        I[1],
                        P,
                        I[3] || 1,
                        I[4] || 0,
                        I[5] || 0,
                        I[6] || 0,
                        L
                      );
                }
              }
              return new Date(E);
            })(g)),
              (this.$x = g.x || {}),
              this.init();
          }),
          (S.init = function () {
            var g = this.$d;
            (this.$y = g.getFullYear()),
              (this.$M = g.getMonth()),
              (this.$D = g.getDate()),
              (this.$W = g.getDay()),
              (this.$H = g.getHours()),
              (this.$m = g.getMinutes()),
              (this.$s = g.getSeconds()),
              (this.$ms = g.getMilliseconds());
          }),
          (S.$utils = function () {
            return N;
          }),
          (S.isValid = function () {
            return this.$d.toString() !== y;
          }),
          (S.isSame = function (g, b) {
            var E = j(g);
            return this.startOf(b) <= E && E <= this.endOf(b);
          }),
          (S.isAfter = function (g, b) {
            return j(g) < this.startOf(b);
          }),
          (S.isBefore = function (g, b) {
            return this.endOf(b) < j(g);
          }),
          (S.$g = function (g, b, E) {
            return N.u(g) ? this[b] : this.set(E, g);
          }),
          (S.unix = function () {
            return Math.floor(this.valueOf() / 1e3);
          }),
          (S.valueOf = function () {
            return this.$d.getTime();
          }),
          (S.startOf = function (g, b) {
            var E = this,
              R = !!N.u(b) || b,
              I = N.p(g),
              P = function (ie, D) {
                var te = N.w(
                  E.$u ? Date.UTC(E.$y, D, ie) : new Date(E.$y, D, ie),
                  E
                );
                return R ? te : te.endOf(l);
              },
              L = function (ie, D) {
                return N.w(
                  E.toDate()[ie].apply(
                    E.toDate("s"),
                    (R ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(D)
                  ),
                  E
                );
              },
              H = this.$W,
              z = this.$M,
              F = this.$D,
              ee = "set" + (this.$u ? "UTC" : "");
            switch (I) {
              case d:
                return R ? P(1, 0) : P(31, 11);
              case u:
                return R ? P(1, z) : P(0, z + 1);
              case f:
                var Z = this.$locale().weekStart || 0,
                  Y = (H < Z ? H + 7 : H) - Z;
                return P(R ? F - Y : F + (6 - Y), z);
              case l:
              case p:
                return L(ee + "Hours", 0);
              case a:
                return L(ee + "Minutes", 1);
              case c:
                return L(ee + "Seconds", 2);
              case o:
                return L(ee + "Milliseconds", 3);
              default:
                return this.clone();
            }
          }),
          (S.endOf = function (g) {
            return this.startOf(g, !1);
          }),
          (S.$set = function (g, b) {
            var E,
              R = N.p(g),
              I = "set" + (this.$u ? "UTC" : ""),
              P = ((E = {}),
              (E[l] = I + "Date"),
              (E[p] = I + "Date"),
              (E[u] = I + "Month"),
              (E[d] = I + "FullYear"),
              (E[a] = I + "Hours"),
              (E[c] = I + "Minutes"),
              (E[o] = I + "Seconds"),
              (E[s] = I + "Milliseconds"),
              E)[R],
              L = R === l ? this.$D + (b - this.$W) : b;
            if (R === u || R === d) {
              var H = this.clone().set(p, 1);
              H.$d[P](L),
                H.init(),
                (this.$d = H.set(p, Math.min(this.$D, H.daysInMonth())).$d);
            } else P && this.$d[P](L);
            return this.init(), this;
          }),
          (S.set = function (g, b) {
            return this.clone().$set(g, b);
          }),
          (S.get = function (g) {
            return this[N.p(g)]();
          }),
          (S.add = function (g, b) {
            var E,
              R = this;
            g = Number(g);
            var I = N.p(b),
              P = function (z) {
                var F = j(R);
                return N.w(F.date(F.date() + Math.round(z * g)), R);
              };
            if (I === u) return this.set(u, this.$M + g);
            if (I === d) return this.set(d, this.$y + g);
            if (I === l) return P(1);
            if (I === f) return P(7);
            var L = ((E = {}), (E[c] = n), (E[a] = i), (E[o] = r), E)[I] || 1,
              H = this.$d.getTime() + g * L;
            return N.w(H, this);
          }),
          (S.subtract = function (g, b) {
            return this.add(-1 * g, b);
          }),
          (S.format = function (g) {
            var b = this,
              E = this.$locale();
            if (!this.isValid()) return E.invalidDate || y;
            var R = g || "YYYY-MM-DDTHH:mm:ssZ",
              I = N.z(this),
              P = this.$H,
              L = this.$m,
              H = this.$M,
              z = E.weekdays,
              F = E.months,
              ee = E.meridiem,
              Z = function (D, te, Ae, he) {
                return (D && (D[te] || D(b, R))) || Ae[te].slice(0, he);
              },
              Y = function (D) {
                return N.s(P % 12 || 12, D, "0");
              },
              ie =
                ee ||
                function (D, te, Ae) {
                  var he = D < 12 ? "AM" : "PM";
                  return Ae ? he.toLowerCase() : he;
                };
            return R.replace(w, function (D, te) {
              return (
                te ||
                (function (Ae) {
                  switch (Ae) {
                    case "YY":
                      return String(b.$y).slice(-2);
                    case "YYYY":
                      return N.s(b.$y, 4, "0");
                    case "M":
                      return H + 1;
                    case "MM":
                      return N.s(H + 1, 2, "0");
                    case "MMM":
                      return Z(E.monthsShort, H, F, 3);
                    case "MMMM":
                      return Z(F, H);
                    case "D":
                      return b.$D;
                    case "DD":
                      return N.s(b.$D, 2, "0");
                    case "d":
                      return String(b.$W);
                    case "dd":
                      return Z(E.weekdaysMin, b.$W, z, 2);
                    case "ddd":
                      return Z(E.weekdaysShort, b.$W, z, 3);
                    case "dddd":
                      return z[b.$W];
                    case "H":
                      return String(P);
                    case "HH":
                      return N.s(P, 2, "0");
                    case "h":
                      return Y(1);
                    case "hh":
                      return Y(2);
                    case "a":
                      return ie(P, L, !0);
                    case "A":
                      return ie(P, L, !1);
                    case "m":
                      return String(L);
                    case "mm":
                      return N.s(L, 2, "0");
                    case "s":
                      return String(b.$s);
                    case "ss":
                      return N.s(b.$s, 2, "0");
                    case "SSS":
                      return N.s(b.$ms, 3, "0");
                    case "Z":
                      return I;
                  }
                  return null;
                })(D) ||
                I.replace(":", "")
              );
            });
          }),
          (S.utcOffset = function () {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
          }),
          (S.diff = function (g, b, E) {
            var R,
              I = this,
              P = N.p(b),
              L = j(g),
              H = (L.utcOffset() - this.utcOffset()) * n,
              z = this - L,
              F = function () {
                return N.m(I, L);
              };
            switch (P) {
              case d:
                R = F() / 12;
                break;
              case u:
                R = F();
                break;
              case h:
                R = F() / 3;
                break;
              case f:
                R = (z - H) / 6048e5;
                break;
              case l:
                R = (z - H) / 864e5;
                break;
              case a:
                R = z / i;
                break;
              case c:
                R = z / n;
                break;
              case o:
                R = z / r;
                break;
              default:
                R = z;
            }
            return E ? R : N.a(R);
          }),
          (S.daysInMonth = function () {
            return this.endOf(u).$D;
          }),
          (S.$locale = function () {
            return A[this.$L];
          }),
          (S.locale = function (g, b) {
            if (!g) return this.$L;
            var E = this.clone(),
              R = T(g, b, !0);
            return R && (E.$L = R), E;
          }),
          (S.clone = function () {
            return N.w(this.$d, this);
          }),
          (S.toDate = function () {
            return new Date(this.valueOf());
          }),
          (S.toJSON = function () {
            return this.isValid() ? this.toISOString() : null;
          }),
          (S.toISOString = function () {
            return this.$d.toISOString();
          }),
          (S.toString = function () {
            return this.$d.toUTCString();
          }),
          m
        );
      })(),
      k = _.prototype;
    return (
      (j.prototype = k),
      [
        ["$ms", s],
        ["$s", o],
        ["$m", c],
        ["$H", a],
        ["$W", l],
        ["$M", u],
        ["$y", d],
        ["$D", p],
      ].forEach(function (m) {
        k[m[1]] = function (S) {
          return this.$g(S, m[0], m[1]);
        };
      }),
      (j.extend = function (m, S) {
        return m.$i || (m(S, _, j), (m.$i = !0)), j;
      }),
      (j.locale = T),
      (j.isDayjs = q),
      (j.unix = function (m) {
        return j(1e3 * m);
      }),
      (j.en = A[$]),
      (j.Ls = A),
      (j.p = {}),
      j
    );
  });
})(Fo);
var Kl = Fo.exports;
const Oi = Qr(Kl);
function Ii(t, e, r) {
  const n = t.slice();
  return (n[2] = e[r]), n;
}
function Gl(t) {
  let e,
    r = Jt(Array.from(t[0].tags)),
    n = [];
  for (let i = 0; i < r.length; i += 1) n[i] = Ri(Ii(t, r, i));
  return {
    c() {
      for (let i = 0; i < n.length; i += 1) n[i].c();
      e = qe();
    },
    l(i) {
      for (let s = 0; s < n.length; s += 1) n[s].l(i);
      e = qe();
    },
    m(i, s) {
      for (let o = 0; o < n.length; o += 1) n[o] && n[o].m(i, s);
      Ke(i, e, s);
    },
    p(i, s) {
      if (s & 1) {
        r = Jt(Array.from(i[0].tags));
        let o;
        for (o = 0; o < r.length; o += 1) {
          const c = Ii(i, r, o);
          n[o]
            ? n[o].p(c, s)
            : ((n[o] = Ri(c)), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1) n[o].d(1);
        n.length = r.length;
      }
    },
    d(i) {
      i && ce(e), Hi(n, i);
    },
  };
}
function Wl(t) {
  let e,
    r,
    n,
    i,
    s,
    o = Oi.unix(t[0].created_at ?? 0).format("MMM D, YYYY h:mm a") + "",
    c,
    a,
    l,
    f,
    u,
    h = Jl(Yl(Zl(t[1]))) + "";
  return {
    c() {
      (e = pe("div")),
        (r = pe("h5")),
        (n = br(Xr)),
        (i = Qe()),
        (s = pe("h6")),
        (c = br(o)),
        (a = pe("br")),
        (l = br(" ")),
        (f = Qe()),
        (u = pe("p")),
        this.h();
    },
    l(d) {
      e = ye(d, "DIV", { class: !0 });
      var p = Ye(e);
      r = ye(p, "H5", {});
      var y = Ye(r);
      (n = _r(y, Xr)),
        y.forEach(ce),
        (i = et(p)),
        (s = ye(p, "H6", { class: !0 }));
      var v = Ye(s);
      (c = _r(v, o)),
        (a = ye(v, "BR", {})),
        (l = _r(v, " ")),
        v.forEach(ce),
        (f = et(p)),
        (u = ye(p, "P", {}));
      var w = Ye(u);
      w.forEach(ce), p.forEach(ce), this.h();
    },
    h() {
      _e(s, "class", "svelte-zghf0h"),
        _e(e, "class", "eventBlock svelte-zghf0h");
    },
    m(d, p) {
      Ke(d, e, p),
        J(e, r),
        J(r, n),
        J(e, i),
        J(e, s),
        J(s, c),
        J(s, a),
        J(s, l),
        J(e, f),
        J(e, u),
        (u.innerHTML = h);
    },
    p(d, p) {
      p & 1 &&
        o !==
          (o =
            Oi.unix(d[0].created_at ?? 0).format("MMM D, YYYY h:mm a") + "") &&
        Yo(c, o);
    },
    d(d) {
      d && ce(e);
    },
  };
}
function $i(t) {
  let e, r, n, i, s;
  return {
    c() {
      (e = pe("div")), (r = pe("img")), (s = Qe()), this.h();
    },
    l(o) {
      e = ye(o, "DIV", { class: !0 });
      var c = Ye(e);
      (r = ye(c, "IMG", { src: !0, alt: !0, class: !0 })),
        (s = et(c)),
        c.forEach(ce),
        this.h();
    },
    h() {
      kn(r.src, (n = t[2][1])) || _e(r, "src", n),
        _e(r, "alt", (i = "user: " + t[0].pubkey)),
        _e(r, "class", "svelte-zghf0h"),
        _e(e, "class", "image-container svelte-zghf0h");
    },
    m(o, c) {
      Ke(o, e, c), J(e, r), J(e, s);
    },
    p(o, c) {
      c & 1 && !kn(r.src, (n = o[2][1])) && _e(r, "src", n),
        c & 1 && i !== (i = "user: " + o[0].pubkey) && _e(r, "alt", i);
    },
    d(o) {
      o && ce(e);
    },
  };
}
function Ri(t) {
  let e = t[2][0] == "r" && Bi(t[2][1]),
    r,
    n = e && $i(t);
  return {
    c() {
      n && n.c(), (r = qe());
    },
    l(i) {
      n && n.l(i), (r = qe());
    },
    m(i, s) {
      n && n.m(i, s), Ke(i, r, s);
    },
    p(i, s) {
      s & 1 && (e = i[2][0] == "r" && Bi(i[2][1])),
        e
          ? n
            ? n.p(i, s)
            : ((n = $i(i)), n.c(), n.m(r.parentNode, r))
          : n && (n.d(1), (n = null));
    },
    d(i) {
      i && ce(r), n && n.d(i);
    },
  };
}
function Vl(t) {
  let e, r;
  function n(o, c) {
    if (
      (c & 1 && (e = null),
      e == null && (e = o[0].pubkey.substring(0, 9) == Xr),
      e)
    )
      return Wl;
    if (o[0].tags) return Gl;
  }
  let i = n(t, -1),
    s = i && i(t);
  return {
    c() {
      s && s.c(), (r = qe());
    },
    l(o) {
      s && s.l(o), (r = qe());
    },
    m(o, c) {
      s && s.m(o, c), Ke(o, r, c);
    },
    p(o, [c]) {
      i === (i = n(o, c)) && s
        ? s.p(o, c)
        : (s && s.d(1), (s = i && i(o)), s && (s.c(), s.m(r.parentNode, r)));
    },
    i: Q,
    o: Q,
    d(o) {
      o && ce(r), s && s.d(o);
    },
  };
}
const Xr = "e2b1b6aba";
function Zl(t) {
  var e =
      /\b(?:https?|ftp):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*[a-z0-9-+&@#\/%=~_|]/gim,
    r = /(^|[^\/])(www\.[\S]+(\b|$))/gim,
    n = /[\w.]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,6})+/gim;
  return t
    .replace(e, '<a href="$&" target="_blank">$&</a>')
    .replace(r, '$1<a href="http://$2" target="_blank">$2</a>')
    .replace(n, '<a href="mailto:$&" target="_blank">$&</a>');
}
function Yl(t) {
  var e = /\n|\r{1}/gim;
  return t.replace(e, "<br />");
}
function Jl(t) {
  var e =
      /<a\s+href="([^"]+\.(png|gif|webp|jpeg|jpg))"\s+target="_blank">([^<]+)<\/a>/g,
    r = /\.(png|gif|webp|jpeg|jpg)$/g,
    n = "<br />";
  return t.replace(e, (i, s, c) => {
    var c = s.replace(/^https?:\/\//, "").replace(r, "");
    return `${n}<a href="${s}" target="_blank"><img src="${s}" 
alt="${c}"></a>${n}`;
  });
}
function Bi(t) {
  var e = /\.(png|gif|webp|jpeg|jpg)$/g;
  return t.match(e);
}
function Xl(t, e, r) {
  let { post: n } = e;
  console.log("post: ", n);
  let i = n.content;
  return (
    (t.$$set = (s) => {
      "post" in s && r(0, (n = s.post));
    }),
    [n, i]
  );
}
class Ql extends ji {
  constructor(e) {
    super(), Pi(this, e, Xl, Vl, Li, { post: 0 });
  }
}
function qi(t, e, r) {
  const n = t.slice();
  return (n[3] = e[r]), n;
}
function ef(t) {
  return { c: Q, l: Q, m: Q, p: Q, i: Q, o: Q, d: Q };
}
function tf(t) {
  let e,
    r,
    n = Jt(Array.from(t[2])),
    i = [];
  for (let o = 0; o < n.length; o += 1) i[o] = Ti(qi(t, n, o));
  const s = (o) =>
    At(i[o], 1, 1, () => {
      i[o] = null;
    });
  return {
    c() {
      for (let o = 0; o < i.length; o += 1) i[o].c();
      e = qe();
    },
    l(o) {
      for (let c = 0; c < i.length; c += 1) i[c].l(o);
      e = qe();
    },
    m(o, c) {
      for (let a = 0; a < i.length; a += 1) i[a] && i[a].m(o, c);
      Ke(o, e, c), (r = !0);
    },
    p(o, c) {
      if (c & 1) {
        n = Jt(Array.from(o[2]));
        let a;
        for (a = 0; a < n.length; a += 1) {
          const l = qi(o, n, a);
          i[a]
            ? (i[a].p(l, c), Xe(i[a], 1))
            : ((i[a] = Ti(l)), i[a].c(), Xe(i[a], 1), i[a].m(e.parentNode, e));
        }
        for (Ni(), a = n.length; a < i.length; a += 1) s(a);
        Mi();
      }
    },
    i(o) {
      if (!r) {
        for (let c = 0; c < n.length; c += 1) Xe(i[c]);
        r = !0;
      }
    },
    o(o) {
      i = i.filter(Boolean);
      for (let c = 0; c < i.length; c += 1) At(i[c]);
      r = !1;
    },
    d(o) {
      o && ce(e), Hi(i, o);
    },
  };
}
function Ti(t) {
  let e, r;
  return (
    (e = new Ql({ props: { post: t[3] } })),
    {
      c() {
        Jo(e.$$.fragment);
      },
      l(n) {
        Xo(e.$$.fragment, n);
      },
      m(n, i) {
        Qo(e, n, i), (r = !0);
      },
      p: Q,
      i(n) {
        r || (Xe(e.$$.fragment, n), (r = !0));
      },
      o(n) {
        At(e.$$.fragment, n), (r = !1);
      },
      d(n) {
        es(e, n);
      },
    }
  );
}
function rf(t) {
  return { c: Q, l: Q, m: Q, p: Q, i: Q, o: Q, d: Q };
}
function nf(t) {
  let e,
    r,
    n =
      '<ul class="links svelte-1gqsokj"><li><a href="/about" class="svelte-1gqsokj">nostrgardn</a></li></ul>',
    i,
    s,
    o =
      '<img src="IMG_8530.jpeg" alt="idk" class="svelte-1gqsokj"/> <img src="IMG_8531.jpeg" alt="idk" class="svelte-1gqsokj"/> <img src="IMG_8532.jpeg" alt="idk" class="svelte-1gqsokj"/>',
    c,
    a,
    l = " ",
    f,
    u,
    h = {
      ctx: t,
      current: null,
      token: null,
      hasCatch: !1,
      pending: rf,
      then: tf,
      catch: ef,
      value: 2,
      blocks: [, , ,],
    };
  return (
    rs(t[0], h),
    {
      c() {
        (e = pe("section")),
          (r = pe("nav")),
          (r.innerHTML = n),
          (i = Qe()),
          (s = pe("div")),
          (s.innerHTML = o),
          (c = Qe()),
          (a = pe("p")),
          (a.textContent = l),
          (f = Qe()),
          h.block.c(),
          this.h();
      },
      l(d) {
        e = ye(d, "SECTION", {});
        var p = Ye(e);
        (r = ye(p, "NAV", { class: !0, ["data-svelte-h"]: !0 })),
          wr(r) !== "svelte-18bav37" && (r.innerHTML = n),
          (i = et(p)),
          (s = ye(p, "DIV", { class: !0, ["data-svelte-h"]: !0 })),
          wr(s) !== "svelte-1jv1zxw" && (s.innerHTML = o),
          (c = et(p)),
          (a = ye(p, "P", { ["data-svelte-h"]: !0 })),
          wr(a) !== "svelte-9hmwf2" && (a.textContent = l),
          (f = et(p)),
          h.block.l(p),
          p.forEach(ce),
          this.h();
      },
      h() {
        _e(r, "class", "svelte-1gqsokj"),
          _e(s, "class", "image-container svelte-1gqsokj");
      },
      m(d, p) {
        Ke(d, e, p),
          J(e, r),
          J(e, i),
          J(e, s),
          J(e, c),
          J(e, a),
          J(e, f),
          h.block.m(e, (h.anchor = null)),
          (h.mount = () => e),
          (h.anchor = null),
          (u = !0);
      },
      p(d, [p]) {
        (t = d), ns(h, t, p);
      },
      i(d) {
        u || (Xe(h.block), (u = !0));
      },
      o(d) {
        for (let p = 0; p < 3; p += 1) {
          const y = h.blocks[p];
          At(y);
        }
        u = !1;
      },
      d(d) {
        d && ce(e), h.block.d(), (h.token = null), (h = null);
      },
    }
  );
}
function of(t, e, r) {
  let n;
  return Zo(t, Dl, (s) => r(1, (n = s))), [n.fetchEvents({ kinds: [1] })];
}
class hf extends ji {
  constructor(e) {
    super(), Pi(this, e, of, nf, Li, {});
  }
}
export { hf as component };
