/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function ea(e, t) {
  const n = new Set(e.split(","));
  return t ? (r) => n.has(r.toLowerCase()) : (r) => n.has(r);
}
const ue = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, ta = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], Me = () => {
}, na = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), te = Object.assign, ra = Object.prototype.hasOwnProperty, L = (e, t) => ra.call(e, t), w = Array.isArray, Xe = (e) => Bt(e) === "[object Map]", Sn = (e) => Bt(e) === "[object Set]", lo = (e) => Bt(e) === "[object Date]", B = (e) => typeof e == "function", G = (e) => typeof e == "string", Be = (e) => typeof e == "symbol", V = (e) => e !== null && typeof e == "object", oa = (e) => (V(e) || B(e)) && B(e.then) && B(e.catch), _s = Object.prototype.toString, Bt = (e) => _s.call(e), Ns = (e) => Bt(e).slice(8, -1), Es = (e) => Bt(e) === "[object Object]", xr = (e) => G(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, kr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, sa = /-(\w)/g, cn = kr((e) => e.replace(sa, (t, n) => n ? n.toUpperCase() : "")), Pt = kr((e) => e.charAt(0).toUpperCase() + e.slice(1)), Cs = kr((e) => e ? `on${Pt(e)}` : ""), He = (e, t) => !Object.is(e, t), ia = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, aa = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, la = (e) => {
  const t = G(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let co;
const ws = () => co || (co = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function _t(e) {
  if (w(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = G(r) ? fa(r) : _t(r);
      if (o)
        for (const s in o)
          t[s] = o[s];
    }
    return t;
  } else if (G(e) || V(e))
    return e;
}
const ca = /;(?![^(]*\))/g, ua = /:([^]+)/, da = /\/\*[^]*?\*\//g;
function fa(e) {
  const t = {};
  return e.replace(da, "").split(ca).forEach((n) => {
    if (n) {
      const r = n.split(ua);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function R(e) {
  let t = "";
  if (G(e))
    t = e;
  else if (w(e))
    for (let n = 0; n < e.length; n++) {
      const r = R(e[n]);
      r && (t += r + " ");
    }
  else if (V(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function ha(e, t) {
  if (e.length !== t.length)
    return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = xn(e[r], t[r]);
  return n;
}
function xn(e, t) {
  if (e === t)
    return !0;
  let n = lo(e), r = lo(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = Be(e), r = Be(t), n || r)
    return e === t;
  if (n = w(e), r = w(t), n || r)
    return n && r ? ha(e, t) : !1;
  if (n = V(e), r = V(t), n || r) {
    if (!n || !r)
      return !1;
    const o = Object.keys(e).length, s = Object.keys(t).length;
    if (o !== s)
      return !1;
    for (const i in e) {
      const a = e.hasOwnProperty(i), c = t.hasOwnProperty(i);
      if (a && !c || !a && c || !xn(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Ss(e, t) {
  return e.findIndex((n) => xn(n, t));
}
const Or = (e) => G(e) ? e : e == null ? "" : w(e) || V(e) && (e.toString === _s || !B(e.toString)) ? JSON.stringify(e, xs, 2) : String(e), xs = (e, t) => t && t.__v_isRef ? xs(e, t.value) : Xe(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, o], s) => (n[Fn(r, s) + " =>"] = o, n),
    {}
  )
} : Sn(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Fn(n))
} : Be(t) ? Fn(t) : V(t) && !w(t) && !Es(t) ? String(t) : t, Fn = (e, t = "") => {
  var n;
  return Be(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
};
/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function je(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let pa;
function ga(e, t = pa) {
  t && t.active && t.effects.push(e);
}
let et;
class ks {
  constructor(t, n, r, o) {
    this.fn = t, this.trigger = n, this.scheduler = r, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, ga(this, o);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, kn();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (va(n.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), On();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = Ve, n = et;
    try {
      return Ve = !0, et = this, this._runnings++, uo(this), this.fn();
    } finally {
      fo(this), this._runnings--, et = n, Ve = t;
    }
  }
  stop() {
    var t;
    this.active && (uo(this), fo(this), (t = this.onStop) == null || t.call(this), this.active = !1);
  }
}
function va(e) {
  return e.value;
}
function uo(e) {
  e._trackId++, e._depsLength = 0;
}
function fo(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      Os(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function Os(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let Ve = !0, er = 0;
const Ts = [];
function kn() {
  Ts.push(Ve), Ve = !1;
}
function On() {
  const e = Ts.pop();
  Ve = e === void 0 ? !0 : e;
}
function Tr() {
  er++;
}
function $r() {
  for (er--; !er && tr.length; )
    tr.shift()();
}
function $s(e, t, n) {
  var r;
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const o = e.deps[e._depsLength];
    o !== t ? (o && Os(o, e), e.deps[e._depsLength++] = t) : e._depsLength++, process.env.NODE_ENV !== "production" && ((r = e.onTrack) == null || r.call(e, te({ effect: e }, n)));
  }
}
const tr = [];
function As(e, t, n) {
  var r;
  Tr();
  for (const o of e.keys()) {
    let s;
    o._dirtyLevel < t && (s ?? (s = e.get(o) === o._trackId)) && (o._shouldSchedule || (o._shouldSchedule = o._dirtyLevel === 0), o._dirtyLevel = t), o._shouldSchedule && (s ?? (s = e.get(o) === o._trackId)) && (process.env.NODE_ENV !== "production" && ((r = o.onTrigger) == null || r.call(o, te({ effect: o }, n))), o.trigger(), (!o._runnings || o.allowRecurse) && o._dirtyLevel !== 2 && (o._shouldSchedule = !1, o.scheduler && tr.push(o.scheduler)));
  }
  $r();
}
const Ds = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, un = /* @__PURE__ */ new WeakMap(), tt = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), nr = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
function Q(e, t, n) {
  if (Ve && et) {
    let r = un.get(e);
    r || un.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || r.set(n, o = Ds(() => r.delete(n))), $s(
      et,
      o,
      process.env.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n
      } : void 0
    );
  }
}
function Le(e, t, n, r, o, s) {
  const i = un.get(e);
  if (!i)
    return;
  let a = [];
  if (t === "clear")
    a = [...i.values()];
  else if (n === "length" && w(e)) {
    const c = Number(r);
    i.forEach((u, d) => {
      (d === "length" || !Be(d) && d >= c) && a.push(u);
    });
  } else
    switch (n !== void 0 && a.push(i.get(n)), t) {
      case "add":
        w(e) ? xr(n) && a.push(i.get("length")) : (a.push(i.get(tt)), Xe(e) && a.push(i.get(nr)));
        break;
      case "delete":
        w(e) || (a.push(i.get(tt)), Xe(e) && a.push(i.get(nr)));
        break;
      case "set":
        Xe(e) && a.push(i.get(tt));
        break;
    }
  Tr();
  for (const c of a)
    c && As(
      c,
      4,
      process.env.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n,
        newValue: r,
        oldValue: o,
        oldTarget: s
      } : void 0
    );
  $r();
}
function ba(e, t) {
  var n;
  return (n = un.get(e)) == null ? void 0 : n.get(t);
}
const ma = /* @__PURE__ */ ea("__proto__,__v_isRef,__isVue"), Is = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Be)
), ho = /* @__PURE__ */ ya();
function ya() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const r = x(this);
      for (let s = 0, i = this.length; s < i; s++)
        Q(r, "get", s + "");
      const o = r[t](...n);
      return o === -1 || o === !1 ? r[t](...n.map(x)) : o;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      kn(), Tr();
      const r = x(this)[t].apply(this, n);
      return $r(), On(), r;
    };
  }), e;
}
function _a(e) {
  const t = x(this);
  return Q(t, "has", e), t.hasOwnProperty(e);
}
class Ps {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    const o = this._isReadonly, s = this._isShallow;
    if (n === "__v_isReactive")
      return !o;
    if (n === "__v_isReadonly")
      return o;
    if (n === "__v_isShallow")
      return s;
    if (n === "__v_raw")
      return r === (o ? s ? Ks : Ls : s ? Ia : Vs).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const i = w(t);
    if (!o) {
      if (i && L(ho, n))
        return Reflect.get(ho, n, r);
      if (n === "hasOwnProperty")
        return _a;
    }
    const a = Reflect.get(t, n, r);
    return (Be(n) ? Is.has(n) : ma(n)) || (o || Q(t, "get", n), s) ? a : q(a) ? i && xr(n) ? a : a.value : V(a) ? o ? Fs(a) : $n(a) : a;
  }
}
class Na extends Ps {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, o) {
    let s = t[n];
    if (!this._isShallow) {
      const c = ze(s);
      if (!rt(r) && !ze(r) && (s = x(s), r = x(r)), !w(t) && q(s) && !q(r))
        return c ? !1 : (s.value = r, !0);
    }
    const i = w(t) && xr(n) ? Number(n) < t.length : L(t, n), a = Reflect.set(t, n, r, o);
    return t === x(o) && (i ? He(r, s) && Le(t, "set", n, r, s) : Le(t, "add", n, r)), a;
  }
  deleteProperty(t, n) {
    const r = L(t, n), o = t[n], s = Reflect.deleteProperty(t, n);
    return s && r && Le(t, "delete", n, void 0, o), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Be(n) || !Is.has(n)) && Q(t, "has", n), r;
  }
  ownKeys(t) {
    return Q(
      t,
      "iterate",
      w(t) ? "length" : tt
    ), Reflect.ownKeys(t);
  }
}
class Ms extends Ps {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && je(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && je(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Ea = /* @__PURE__ */ new Na(), Ca = /* @__PURE__ */ new Ms(), wa = /* @__PURE__ */ new Ms(!0), Ar = (e) => e, Tn = (e) => Reflect.getPrototypeOf(e);
function zt(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const o = x(e), s = x(t);
  n || (He(t, s) && Q(o, "get", t), Q(o, "get", s));
  const { has: i } = Tn(o), a = r ? Ar : n ? Pr : Mt;
  if (i.call(o, t))
    return a(e.get(t));
  if (i.call(o, s))
    return a(e.get(s));
  e !== o && e.get(t);
}
function Ut(e, t = !1) {
  const n = this.__v_raw, r = x(n), o = x(e);
  return t || (He(e, o) && Q(r, "has", e), Q(r, "has", o)), e === o ? n.has(e) : n.has(e) || n.has(o);
}
function Gt(e, t = !1) {
  return e = e.__v_raw, !t && Q(x(e), "iterate", tt), Reflect.get(e, "size", e);
}
function po(e) {
  e = x(e);
  const t = x(this);
  return Tn(t).has.call(t, e) || (t.add(e), Le(t, "add", e, e)), this;
}
function go(e, t) {
  t = x(t);
  const n = x(this), { has: r, get: o } = Tn(n);
  let s = r.call(n, e);
  s ? process.env.NODE_ENV !== "production" && Rs(n, r, e) : (e = x(e), s = r.call(n, e));
  const i = o.call(n, e);
  return n.set(e, t), s ? He(t, i) && Le(n, "set", e, t, i) : Le(n, "add", e, t), this;
}
function vo(e) {
  const t = x(this), { has: n, get: r } = Tn(t);
  let o = n.call(t, e);
  o ? process.env.NODE_ENV !== "production" && Rs(t, n, e) : (e = x(e), o = n.call(t, e));
  const s = r ? r.call(t, e) : void 0, i = t.delete(e);
  return o && Le(t, "delete", e, void 0, s), i;
}
function bo() {
  const e = x(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? Xe(e) ? new Map(e) : new Set(e) : void 0, r = e.clear();
  return t && Le(e, "clear", void 0, void 0, n), r;
}
function qt(e, t) {
  return function(r, o) {
    const s = this, i = s.__v_raw, a = x(i), c = t ? Ar : e ? Pr : Mt;
    return !e && Q(a, "iterate", tt), i.forEach((u, d) => r.call(o, c(u), c(d), s));
  };
}
function Wt(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, s = x(o), i = Xe(s), a = e === "entries" || e === Symbol.iterator && i, c = e === "keys" && i, u = o[e](...r), d = n ? Ar : t ? Pr : Mt;
    return !t && Q(
      s,
      "iterate",
      c ? nr : tt
    ), {
      // iterator protocol
      next() {
        const { value: l, done: f } = u.next();
        return f ? { value: l, done: f } : {
          value: a ? [d(l[0]), d(l[1])] : d(l),
          done: f
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function ke(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      je(
        `${Pt(e)} operation ${n}failed: target is readonly.`,
        x(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Sa() {
  const e = {
    get(s) {
      return zt(this, s);
    },
    get size() {
      return Gt(this);
    },
    has: Ut,
    add: po,
    set: go,
    delete: vo,
    clear: bo,
    forEach: qt(!1, !1)
  }, t = {
    get(s) {
      return zt(this, s, !1, !0);
    },
    get size() {
      return Gt(this);
    },
    has: Ut,
    add: po,
    set: go,
    delete: vo,
    clear: bo,
    forEach: qt(!1, !0)
  }, n = {
    get(s) {
      return zt(this, s, !0);
    },
    get size() {
      return Gt(this, !0);
    },
    has(s) {
      return Ut.call(this, s, !0);
    },
    add: ke("add"),
    set: ke("set"),
    delete: ke("delete"),
    clear: ke("clear"),
    forEach: qt(!0, !1)
  }, r = {
    get(s) {
      return zt(this, s, !0, !0);
    },
    get size() {
      return Gt(this, !0);
    },
    has(s) {
      return Ut.call(this, s, !0);
    },
    add: ke("add"),
    set: ke("set"),
    delete: ke("delete"),
    clear: ke("clear"),
    forEach: qt(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    e[s] = Wt(
      s,
      !1,
      !1
    ), n[s] = Wt(
      s,
      !0,
      !1
    ), t[s] = Wt(
      s,
      !1,
      !0
    ), r[s] = Wt(
      s,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    r
  ];
}
const [
  xa,
  ka,
  Oa,
  Ta
] = /* @__PURE__ */ Sa();
function Dr(e, t) {
  const n = t ? e ? Ta : Oa : e ? ka : xa;
  return (r, o, s) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    L(n, o) && o in r ? n : r,
    o,
    s
  );
}
const $a = {
  get: /* @__PURE__ */ Dr(!1, !1)
}, Aa = {
  get: /* @__PURE__ */ Dr(!0, !1)
}, Da = {
  get: /* @__PURE__ */ Dr(!0, !0)
};
function Rs(e, t, n) {
  const r = x(n);
  if (r !== n && t.call(e, r)) {
    const o = Ns(e);
    je(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Vs = /* @__PURE__ */ new WeakMap(), Ia = /* @__PURE__ */ new WeakMap(), Ls = /* @__PURE__ */ new WeakMap(), Ks = /* @__PURE__ */ new WeakMap();
function Pa(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Ma(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Pa(Ns(e));
}
function $n(e) {
  return ze(e) ? e : Ir(
    e,
    !1,
    Ea,
    $a,
    Vs
  );
}
function Fs(e) {
  return Ir(
    e,
    !0,
    Ca,
    Aa,
    Ls
  );
}
function Jt(e) {
  return Ir(
    e,
    !0,
    wa,
    Da,
    Ks
  );
}
function Ir(e, t, n, r, o) {
  if (!V(e))
    return process.env.NODE_ENV !== "production" && je(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = o.get(e);
  if (s)
    return s;
  const i = Ma(e);
  if (i === 0)
    return e;
  const a = new Proxy(
    e,
    i === 2 ? r : n
  );
  return o.set(e, a), a;
}
function nt(e) {
  return ze(e) ? nt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function ze(e) {
  return !!(e && e.__v_isReadonly);
}
function rt(e) {
  return !!(e && e.__v_isShallow);
}
function dn(e) {
  return nt(e) || ze(e);
}
function x(e) {
  const t = e && e.__v_raw;
  return t ? x(t) : e;
}
function Ra(e) {
  return Object.isExtensible(e) && aa(e, "__v_skip", !0), e;
}
const Mt = (e) => V(e) ? $n(e) : e, Pr = (e) => V(e) ? Fs(e) : e, Va = "Computed is still dirty after getter evaluation, likely because a computed is mutating its own dependency in its getter. State mutations in computed getters should be avoided.  Check the docs for more details: https://vuejs.org/guide/essentials/computed.html#getters-should-be-side-effect-free";
class Bs {
  constructor(t, n, r, o) {
    this.getter = t, this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new ks(
      () => t(this._value),
      () => nn(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !o, this.__v_isReadonly = r;
  }
  get value() {
    const t = x(this);
    return (!t._cacheable || t.effect.dirty) && He(t._value, t._value = t.effect.run()) && nn(t, 4), Hs(t), t.effect._dirtyLevel >= 2 && (process.env.NODE_ENV !== "production" && this._warnRecursive && je(Va, `

getter: `, this.getter), nn(t, 2)), t._value;
  }
  set value(t) {
    this._setter(t);
  }
  // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(t) {
    this.effect.dirty = t;
  }
  // #endregion
}
function La(e, t, n = !1) {
  let r, o;
  const s = B(e);
  s ? (r = e, o = process.env.NODE_ENV !== "production" ? () => {
    je("Write operation failed: computed value is readonly");
  } : Me) : (r = e.get, o = e.set);
  const i = new Bs(r, o, s || !o, n);
  return process.env.NODE_ENV !== "production" && t && !n && (i.effect.onTrack = t.onTrack, i.effect.onTrigger = t.onTrigger), i;
}
function Hs(e) {
  var t;
  Ve && et && (e = x(e), $s(
    et,
    (t = e.dep) != null ? t : e.dep = Ds(
      () => e.dep = void 0,
      e instanceof Bs ? e : void 0
    ),
    process.env.NODE_ENV !== "production" ? {
      target: e,
      type: "get",
      key: "value"
    } : void 0
  ));
}
function nn(e, t = 4, n) {
  e = x(e);
  const r = e.dep;
  r && As(
    r,
    t,
    process.env.NODE_ENV !== "production" ? {
      target: e,
      type: "set",
      key: "value",
      newValue: n
    } : void 0
  );
}
function q(e) {
  return !!(e && e.__v_isRef === !0);
}
function F(e) {
  return js(e, !1);
}
function mo(e) {
  return js(e, !0);
}
function js(e, t) {
  return q(e) ? e : new Ka(e, t);
}
class Ka {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : x(t), this._value = n ? t : Mt(t);
  }
  get value() {
    return Hs(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || rt(t) || ze(t);
    t = n ? t : x(t), He(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Mt(t), nn(this, 4, t));
  }
}
function y(e) {
  return q(e) ? e.value : e;
}
const Fa = {
  get: (e, t, n) => y(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return q(o) && !q(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Ba(e) {
  return nt(e) ? e : new Proxy(e, Fa);
}
function zs(e) {
  process.env.NODE_ENV !== "production" && !dn(e) && je("toRefs() expects a reactive object but received a plain one.");
  const t = w(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = Us(e, n);
  return t;
}
class Ha {
  constructor(t, n, r) {
    this._object = t, this._key = n, this._defaultValue = r, this.__v_isRef = !0;
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return ba(x(this._object), this._key);
  }
}
class ja {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0;
  }
  get value() {
    return this._getter();
  }
}
function rr(e, t, n) {
  return q(e) ? e : B(e) ? new ja(e) : V(e) && arguments.length > 1 ? Us(e, t, n) : F(e);
}
function Us(e, t, n) {
  const r = e[t];
  return q(r) ? r : new Ha(e, t, n);
}
/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const ot = [];
function za(e) {
  ot.push(e);
}
function Ua() {
  ot.pop();
}
function A(e, ...t) {
  kn();
  const n = ot.length ? ot[ot.length - 1].component : null, r = n && n.appContext.config.warnHandler, o = Ga();
  if (r)
    st(
      r,
      n,
      11,
      [
        e + t.map((s) => {
          var i, a;
          return (a = (i = s.toString) == null ? void 0 : i.call(s)) != null ? a : JSON.stringify(s);
        }).join(""),
        n && n.proxy,
        o.map(
          ({ vnode: s }) => `at <${mi(n, s.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    o.length && s.push(`
`, ...qa(o)), console.warn(...s);
  }
  On();
}
function Ga() {
  let e = ot[ot.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const r = e.component && e.component.parent;
    e = r && r.vnode;
  }
  return t;
}
function qa(e) {
  const t = [];
  return e.forEach((n, r) => {
    t.push(...r === 0 ? [] : [`
`], ...Wa(n));
  }), t;
}
function Wa({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, o = ` at <${mi(
    e.component,
    e.type,
    r
  )}`, s = ">" + n;
  return e.props ? [o, ...Ja(e.props), s] : [o + s];
}
function Ja(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(...Gs(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Gs(e, t, n) {
  return G(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : q(t) ? (t = Gs(e, x(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : B(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = x(t), n ? t : [`${e}=`, t]);
}
function Ya(e, t) {
  process.env.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? A(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && A(`${t} is NaN - the duration expression might be incorrect.`));
}
const Mr = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."
};
function st(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (o) {
    Rr(o, t, n);
  }
}
function pt(e, t, n, r) {
  if (B(e)) {
    const s = st(e, t, n, r);
    return s && oa(s) && s.catch((i) => {
      Rr(i, t, n);
    }), s;
  }
  const o = [];
  for (let s = 0; s < e.length; s++)
    o.push(pt(e[s], t, n, r));
  return o;
}
function Rr(e, t, n, r = !0) {
  const o = t ? t.vnode : null;
  if (t) {
    let s = t.parent;
    const i = t.proxy, a = process.env.NODE_ENV !== "production" ? Mr[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; s; ) {
      const u = s.ec;
      if (u) {
        for (let d = 0; d < u.length; d++)
          if (u[d](e, i, a) === !1)
            return;
      }
      s = s.parent;
    }
    const c = t.appContext.config.errorHandler;
    if (c) {
      st(
        c,
        null,
        10,
        [e, i, a]
      );
      return;
    }
  }
  Qa(e, n, o, r);
}
function Qa(e, t, n, r = !0) {
  if (process.env.NODE_ENV !== "production") {
    const o = Mr[t];
    if (n && za(n), A(`Unhandled error${o ? ` during execution of ${o}` : ""}`), n && Ua(), r)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let fn = !1, or = !1;
const de = [];
let Ie = 0;
const gt = [];
let Ne = null, Ae = 0;
const qs = /* @__PURE__ */ Promise.resolve();
let Vr = null;
const Za = 100;
function Rt(e) {
  const t = Vr || qs;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Xa(e) {
  let t = Ie + 1, n = de.length;
  for (; t < n; ) {
    const r = t + n >>> 1, o = de[r], s = Vt(o);
    s < e || s === e && o.pre ? t = r + 1 : n = r;
  }
  return t;
}
function Lr(e) {
  (!de.length || !de.includes(
    e,
    fn && e.allowRecurse ? Ie + 1 : Ie
  )) && (e.id == null ? de.push(e) : de.splice(Xa(e.id), 0, e), Ws());
}
function Ws() {
  !fn && !or && (or = !0, Vr = qs.then(Ys));
}
function Js(e) {
  w(e) ? gt.push(...e) : (!Ne || !Ne.includes(
    e,
    e.allowRecurse ? Ae + 1 : Ae
  )) && gt.push(e), Ws();
}
function el(e) {
  if (gt.length) {
    const t = [...new Set(gt)].sort(
      (n, r) => Vt(n) - Vt(r)
    );
    if (gt.length = 0, Ne) {
      Ne.push(...t);
      return;
    }
    for (Ne = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Ae = 0; Ae < Ne.length; Ae++)
      process.env.NODE_ENV !== "production" && Qs(e, Ne[Ae]) || Ne[Ae]();
    Ne = null, Ae = 0;
  }
}
const Vt = (e) => e.id == null ? 1 / 0 : e.id, tl = (e, t) => {
  const n = Vt(e) - Vt(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Ys(e) {
  or = !1, fn = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), de.sort(tl);
  const t = process.env.NODE_ENV !== "production" ? (n) => Qs(e, n) : Me;
  try {
    for (Ie = 0; Ie < de.length; Ie++) {
      const n = de[Ie];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        st(n, null, 14);
      }
    }
  } finally {
    Ie = 0, de.length = 0, el(e), fn = !1, Vr = null, (de.length || gt.length) && Ys(e);
  }
}
function Qs(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Za) {
      const r = t.ownerInstance, o = r && jr(r.type);
      return Rr(
        `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
const ht = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (ws().__VUE_HMR_RUNTIME__ = {
  createRecord: Bn(nl),
  rerender: Bn(rl),
  reload: Bn(ol)
});
const hn = /* @__PURE__ */ new Map();
function nl(e, t) {
  return hn.has(e) ? !1 : (hn.set(e, {
    initialDef: At(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function At(e) {
  return yi(e) ? e.__vccOpts : e;
}
function rl(e, t) {
  const n = hn.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((r) => {
    t && (r.render = t, At(r.type).render = t), r.renderCache = [], r.effect.dirty = !0, r.update();
  }));
}
function ol(e, t) {
  const n = hn.get(e);
  if (!n)
    return;
  t = At(t), yo(n.initialDef, t);
  const r = [...n.instances];
  for (const o of r) {
    const s = At(o.type);
    ht.has(s) || (s !== n.initialDef && yo(s, t), ht.add(s)), o.appContext.propsCache.delete(o.type), o.appContext.emitsCache.delete(o.type), o.appContext.optionsCache.delete(o.type), o.ceReload ? (ht.add(s), o.ceReload(t.styles), ht.delete(s)) : o.parent ? (o.parent.effect.dirty = !0, Lr(o.parent.update)) : o.appContext.reload ? o.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  Js(() => {
    for (const o of r)
      ht.delete(
        At(o.type)
      );
  });
}
function yo(e, t) {
  te(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Bn(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (r) {
      console.error(r), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Pe, Ot = [], sr = !1;
function sl(e, ...t) {
  Pe ? Pe.emit(e, ...t) : sr || Ot.push({ event: e, args: t });
}
function Zs(e, t) {
  var n, r;
  Pe = e, Pe ? (Pe.enabled = !0, Ot.forEach(({ event: o, args: s }) => Pe.emit(o, ...s)), Ot = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((r = (n = window.navigator) == null ? void 0 : n.userAgent) != null && r.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    Zs(s, t);
  }), setTimeout(() => {
    Pe || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, sr = !0, Ot = []);
  }, 3e3)) : (sr = !0, Ot = []);
}
const il = /* @__PURE__ */ al(
  "component:updated"
  /* COMPONENT_UPDATED */
);
function al(e) {
  return (t) => {
    sl(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
let z = null, Xs = null;
function _o(e) {
  const t = z;
  return z = e, Xs = e && e.type.__scopeId || null, t;
}
function ve(e, t = z, n) {
  if (!t || e._n)
    return e;
  const r = (...o) => {
    r._d && To(-1);
    const s = _o(t);
    let i;
    try {
      i = e(...o);
    } finally {
      _o(s), r._d && To(1);
    }
    return process.env.NODE_ENV !== "production" && il(t), i;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
const pn = "components";
function Je(e, t) {
  return ti(pn, e, !0, t) || e;
}
const ei = Symbol.for("v-ndc");
function vt(e) {
  return G(e) ? ti(pn, e, !1) || e : e || ei;
}
function ti(e, t, n = !0, r = !1) {
  const o = z || re;
  if (o) {
    const s = o.type;
    if (e === pn) {
      const a = jr(
        s,
        !1
      );
      if (a && (a === t || a === cn(t) || a === Pt(cn(t))))
        return s;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      No(o[e] || s[e], t) || // global registration
      No(o.appContext[e], t)
    );
    if (!i && r)
      return s;
    if (process.env.NODE_ENV !== "production" && n && !i) {
      const a = e === pn ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      A(`Failed to resolve ${e.slice(0, -1)}: ${t}${a}`);
    }
    return i;
  } else
    process.env.NODE_ENV !== "production" && A(
      `resolve${Pt(e.slice(0, -1))} can only be used in render() or setup().`
    );
}
function No(e, t) {
  return e && (e[t] || e[cn(t)] || e[Pt(cn(t))]);
}
const ll = (e) => e.__isSuspense;
function cl(e, t) {
  t && t.pendingBranch ? w(e) ? t.effects.push(...e) : t.effects.push(e) : Js(e);
}
const ul = Symbol.for("v-scx"), dl = () => {
  {
    const e = H(ul);
    return e || process.env.NODE_ENV !== "production" && A(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
}, Yt = {};
function Z(e, t, n) {
  return process.env.NODE_ENV !== "production" && !B(t) && A(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), ni(e, t, n);
}
function ni(e, t, {
  immediate: n,
  deep: r,
  flush: o,
  once: s,
  onTrack: i,
  onTrigger: a
} = ue) {
  if (t && s) {
    const O = t;
    t = (...ee) => {
      O(...ee), C();
    };
  }
  process.env.NODE_ENV !== "production" && r !== void 0 && typeof r == "number" && A(
    'watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'
  ), process.env.NODE_ENV !== "production" && !t && (n !== void 0 && A(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && A(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && A(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const c = (O) => {
    A(
      "Invalid watch source: ",
      O,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, u = re, d = (O) => r === !0 ? O : (
    // for deep: false, only traverse root-level properties
    Qe(O, r === !1 ? 1 : void 0)
  );
  let l, f = !1, g = !1;
  if (q(e) ? (l = () => e.value, f = rt(e)) : nt(e) ? (l = () => d(e), f = !0) : w(e) ? (g = !0, f = e.some((O) => nt(O) || rt(O)), l = () => e.map((O) => {
    if (q(O))
      return O.value;
    if (nt(O))
      return d(O);
    if (B(O))
      return st(O, u, 2);
    process.env.NODE_ENV !== "production" && c(O);
  })) : B(e) ? t ? l = () => st(e, u, 2) : l = () => (h && h(), pt(
    e,
    u,
    3,
    [p]
  )) : (l = Me, process.env.NODE_ENV !== "production" && c(e)), t && r) {
    const O = l;
    l = () => Qe(O());
  }
  let h, p = (O) => {
    h = k.onStop = () => {
      st(O, u, 4), h = k.onStop = void 0;
    };
  }, v;
  if (In)
    if (p = Me, t ? n && pt(t, u, 3, [
      l(),
      g ? [] : void 0,
      p
    ]) : l(), o === "sync") {
      const O = dl();
      v = O.__watcherHandles || (O.__watcherHandles = []);
    } else
      return Me;
  let b = g ? new Array(e.length).fill(Yt) : Yt;
  const m = () => {
    if (!(!k.active || !k.dirty))
      if (t) {
        const O = k.run();
        (r || f || (g ? O.some((ee, T) => He(ee, b[T])) : He(O, b))) && (h && h(), pt(t, u, 3, [
          O,
          // pass undefined as the old value when it's changed for the first time
          b === Yt ? void 0 : g && b[0] === Yt ? [] : b,
          p
        ]), b = O);
      } else
        k.run();
  };
  m.allowRecurse = !!t;
  let M;
  o === "sync" ? M = m : o === "post" ? M = () => Oo(m, u && u.suspense) : (m.pre = !0, u && (m.id = u.uid), M = () => Lr(m));
  const k = new ks(l, Me, M), C = () => {
    k.stop();
  };
  return process.env.NODE_ENV !== "production" && (k.onTrack = i, k.onTrigger = a), t ? n ? m() : b = k.run() : o === "post" ? Oo(
    k.run.bind(k),
    u && u.suspense
  ) : k.run(), v && v.push(C), C;
}
function fl(e, t, n) {
  const r = this.proxy, o = G(e) ? e.includes(".") ? hl(r, e) : () => r[e] : e.bind(r, r);
  let s;
  B(t) ? s = t : (s = t.handler, n = t);
  const i = vi(this), a = ni(o, s.bind(r), n);
  return i(), a;
}
function hl(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++)
      r = r[n[o]];
    return r;
  };
}
function Qe(e, t, n = 0, r) {
  if (!V(e) || e.__v_skip)
    return e;
  if (t && t > 0) {
    if (n >= t)
      return e;
    n++;
  }
  if (r = r || /* @__PURE__ */ new Set(), r.has(e))
    return e;
  if (r.add(e), q(e))
    Qe(e.value, t, n, r);
  else if (w(e))
    for (let o = 0; o < e.length; o++)
      Qe(e[o], t, n, r);
  else if (Sn(e) || Xe(e))
    e.forEach((o) => {
      Qe(o, t, n, r);
    });
  else if (Es(e))
    for (const o in e)
      Qe(e[o], t, n, r);
  return e;
}
function at(e, t) {
  if (z === null)
    return process.env.NODE_ENV !== "production" && A("withDirectives can only be used inside render functions."), e;
  const n = bi(z) || z.proxy, r = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [s, i, a, c = ue] = t[o];
    s && (B(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && Qe(i), r.push({
      dir: s,
      instance: n,
      value: i,
      oldValue: void 0,
      arg: a,
      modifiers: c
    }));
  }
  return e;
}
const De = Symbol("_leaveCb"), Qt = Symbol("_enterCb");
function pl() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Kr(() => {
    e.isMounted = !0;
  }), _l(() => {
    e.isUnmounting = !0;
  }), e;
}
const se = [Function, Array], ri = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: se,
  onEnter: se,
  onAfterEnter: se,
  onEnterCancelled: se,
  // leave
  onBeforeLeave: se,
  onLeave: se,
  onAfterLeave: se,
  onLeaveCancelled: se,
  // appear
  onBeforeAppear: se,
  onAppear: se,
  onAfterAppear: se,
  onAppearCancelled: se
}, gl = {
  name: "BaseTransition",
  props: ri,
  setup(e, { slots: t }) {
    const n = pe(), r = pl();
    return () => {
      const o = t.default && si(t.default(), !0);
      if (!o || !o.length)
        return;
      let s = o[0];
      if (o.length > 1) {
        let f = !1;
        for (const g of o)
          if (g.type !== Ke) {
            if (process.env.NODE_ENV !== "production" && f) {
              A(
                "<transition> can only be used on a single element or component. Use <transition-group> for lists."
              );
              break;
            }
            if (s = g, f = !0, process.env.NODE_ENV === "production")
              break;
          }
      }
      const i = x(e), { mode: a } = i;
      if (process.env.NODE_ENV !== "production" && a && a !== "in-out" && a !== "out-in" && a !== "default" && A(`invalid <transition> mode: ${a}`), r.isLeaving)
        return Hn(s);
      const c = Eo(s);
      if (!c)
        return Hn(s);
      const u = ir(
        c,
        i,
        r,
        n
      );
      ar(c, u);
      const d = n.subTree, l = d && Eo(d);
      if (l && l.type !== Ke && !di(c, l)) {
        const f = ir(
          l,
          i,
          r,
          n
        );
        if (ar(l, f), a === "out-in")
          return r.isLeaving = !0, f.afterLeave = () => {
            r.isLeaving = !1, n.update.active !== !1 && (n.effect.dirty = !0, n.update());
          }, Hn(s);
        a === "in-out" && c.type !== Ke && (f.delayLeave = (g, h, p) => {
          const v = oi(
            r,
            l
          );
          v[String(l.key)] = l, g[De] = () => {
            h(), g[De] = void 0, delete u.delayedLeave;
          }, u.delayedLeave = p;
        });
      }
      return s;
    };
  }
}, vl = gl;
function oi(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function ir(e, t, n, r) {
  const {
    appear: o,
    mode: s,
    persisted: i = !1,
    onBeforeEnter: a,
    onEnter: c,
    onAfterEnter: u,
    onEnterCancelled: d,
    onBeforeLeave: l,
    onLeave: f,
    onAfterLeave: g,
    onLeaveCancelled: h,
    onBeforeAppear: p,
    onAppear: v,
    onAfterAppear: b,
    onAppearCancelled: m
  } = t, M = String(e.key), k = oi(n, e), C = (T, _) => {
    T && pt(
      T,
      r,
      9,
      _
    );
  }, O = (T, _) => {
    const D = _[1];
    C(T, _), w(T) ? T.every((I) => I.length <= 1) && D() : T.length <= 1 && D();
  }, ee = {
    mode: s,
    persisted: i,
    beforeEnter(T) {
      let _ = a;
      if (!n.isMounted)
        if (o)
          _ = p || a;
        else
          return;
      T[De] && T[De](
        !0
        /* cancelled */
      );
      const D = k[M];
      D && di(e, D) && D.el[De] && D.el[De](), C(_, [T]);
    },
    enter(T) {
      let _ = c, D = u, I = d;
      if (!n.isMounted)
        if (o)
          _ = v || c, D = b || u, I = m || d;
        else
          return;
      let N = !1;
      const W = T[Qt] = (ae) => {
        N || (N = !0, ae ? C(I, [T]) : C(D, [T]), ee.delayedLeave && ee.delayedLeave(), T[Qt] = void 0);
      };
      _ ? O(_, [T, W]) : W();
    },
    leave(T, _) {
      const D = String(e.key);
      if (T[Qt] && T[Qt](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return _();
      C(l, [T]);
      let I = !1;
      const N = T[De] = (W) => {
        I || (I = !0, _(), W ? C(h, [T]) : C(g, [T]), T[De] = void 0, k[D] === e && delete k[D]);
      };
      k[D] = e, f ? O(f, [T, N]) : N();
    },
    clone(T) {
      return ir(T, t, n, r);
    }
  };
  return ee;
}
function Hn(e) {
  if (ii(e))
    return e = mt(e), e.children = null, e;
}
function Eo(e) {
  return ii(e) ? (
    // #7121 ensure get the child component subtree in case
    // it's been replaced during HMR
    process.env.NODE_ENV !== "production" && e.component ? e.component.subTree : e.children ? e.children[0] : void 0
  ) : e;
}
function ar(e, t) {
  e.shapeFlag & 6 && e.component ? ar(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function si(e, t = !1, n) {
  let r = [], o = 0;
  for (let s = 0; s < e.length; s++) {
    let i = e[s];
    const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : s);
    i.type === Ce ? (i.patchFlag & 128 && o++, r = r.concat(
      si(i.children, t, a)
    )) : (t || i.type !== Ke) && r.push(a != null ? mt(i, { key: a }) : i);
  }
  if (o > 1)
    for (let s = 0; s < r.length; s++)
      r[s].patchFlag = -2;
  return r;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function j(e, t) {
  return B(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    te({ name: e.name }, t, { setup: e })
  ) : e;
}
const bl = (e) => !!e.type.__asyncLoader, ii = (e) => e.type.__isKeepAlive;
function ml(e, t, n = re, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      kn();
      const a = vi(n), c = pt(t, n, e, i);
      return a(), On(), c;
    });
    return r ? o.unshift(s) : o.push(s), s;
  } else if (process.env.NODE_ENV !== "production") {
    const o = Cs(Mr[e].replace(/ hook$/, ""));
    A(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const An = (e) => (t, n = re) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!In || e === "sp") && ml(e, (...r) => t(...r), n)
), Kr = An("m"), yl = An("u"), _l = An("bum"), Nl = An("um");
function ai(e, t, n, r) {
  let o;
  const s = n && n[r];
  if (w(e) || G(e)) {
    o = new Array(e.length);
    for (let i = 0, a = e.length; i < a; i++)
      o[i] = t(e[i], i, void 0, s && s[i]);
  } else if (typeof e == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(e) && A(`The v-for range expect an integer value but got ${e}.`), o = new Array(e);
    for (let i = 0; i < e; i++)
      o[i] = t(i + 1, i, void 0, s && s[i]);
  } else if (V(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (i, a) => t(i, a, void 0, s && s[a])
      );
    else {
      const i = Object.keys(e);
      o = new Array(i.length);
      for (let a = 0, c = i.length; a < c; a++) {
        const u = i[a];
        o[a] = t(e[u], u, a, s && s[a]);
      }
    }
  else
    o = [];
  return n && (n[r] = o), o;
}
function ie(e, t, n = {}, r, o) {
  if (z.isCE || z.parent && bl(z.parent) && z.parent.isCE)
    return t !== "default" && (n.name = t), he("slot", n, r && r());
  let s = e[t];
  process.env.NODE_ENV !== "production" && s && s.length > 1 && (A(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), s = () => []), s && s._c && (s._d = !1), $();
  const i = s && li(s(n)), a = J(
    Ce,
    {
      key: n.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      i && i.key || `_${t}`
    },
    i || (r ? r() : []),
    i && e._ === 1 ? 64 : -2
  );
  return !o && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]), s && s._c && (s._d = !0), a;
}
function li(e) {
  return e.some((t) => vn(t) ? !(t.type === Ke || t.type === Ce && !li(t.children)) : !0) ? e : null;
}
function El(e, t) {
  const n = {};
  if (process.env.NODE_ENV !== "production" && !V(e))
    return A("v-on with no argument expects an object value."), n;
  for (const r in e)
    n[t && /[A-Z]/.test(r) ? `on:${r}` : Cs(r)] = e[r];
  return n;
}
const lr = (e) => e ? Pl(e) ? bi(e) || e.proxy : lr(e.parent) : null, Dt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ te(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? Jt(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? Jt(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? Jt(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? Jt(e.refs) : e.refs,
    $parent: (e) => lr(e.parent),
    $root: (e) => lr(e.root),
    $emit: (e) => e.emit,
    $options: (e) => xl(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, Lr(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Rt.bind(e.proxy)),
    $watch: (e) => fl.bind(e)
  })
), Cl = (e) => e === "_" || e === "$", jn = (e, t) => e !== ue && !e.__isScriptSetup && L(e, t), wl = {
  get({ _: e }, t) {
    const { ctx: n, setupState: r, data: o, props: s, accessCache: i, type: a, appContext: c } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let u;
    if (t[0] !== "$") {
      const g = i[t];
      if (g !== void 0)
        switch (g) {
          case 1:
            return r[t];
          case 2:
            return o[t];
          case 4:
            return n[t];
          case 3:
            return s[t];
        }
      else {
        if (jn(r, t))
          return i[t] = 1, r[t];
        if (o !== ue && L(o, t))
          return i[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (u = e.propsOptions[0]) && L(u, t)
        )
          return i[t] = 3, s[t];
        if (n !== ue && L(n, t))
          return i[t] = 4, n[t];
        i[t] = 0;
      }
    }
    const d = Dt[t];
    let l, f;
    if (d)
      return t === "$attrs" ? (Q(e, "get", t), process.env.NODE_ENV !== "production" && void 0) : process.env.NODE_ENV !== "production" && t === "$slots" && Q(e, "get", t), d(e);
    if (
      // css module (injected by vue-loader)
      (l = a.__cssModules) && (l = l[t])
    )
      return l;
    if (n !== ue && L(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      f = c.config.globalProperties, L(f, t)
    )
      return f[t];
    process.env.NODE_ENV !== "production" && z && (!G(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== ue && Cl(t[0]) && L(o, t) ? A(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === z && A(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: o, ctx: s } = e;
    return jn(o, t) ? (o[t] = n, !0) : process.env.NODE_ENV !== "production" && o.__isScriptSetup && L(o, t) ? (A(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : r !== ue && L(r, t) ? (r[t] = n, !0) : L(e.props, t) ? (process.env.NODE_ENV !== "production" && A(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && A(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(s, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: o, propsOptions: s }
  }, i) {
    let a;
    return !!n[i] || e !== ue && L(e, i) || jn(t, i) || (a = s[0]) && L(a, i) || L(r, i) || L(Dt, i) || L(o.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : L(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (wl.ownKeys = (e) => (A(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Fr() {
  return Sl().slots;
}
function Sl() {
  const e = pe();
  return process.env.NODE_ENV !== "production" && !e && A("useContext() called without active instance."), e.setupContext || (e.setupContext = Rl(e));
}
function Co(e) {
  return w(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function xl(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: o,
    optionsCache: s,
    config: { optionMergeStrategies: i }
  } = e.appContext, a = s.get(t);
  let c;
  return a ? c = a : !o.length && !n && !r ? c = t : (c = {}, o.length && o.forEach(
    (u) => gn(c, u, i, !0)
  ), gn(c, t, i)), V(t) && s.set(t, c), c;
}
function gn(e, t, n, r = !1) {
  const { mixins: o, extends: s } = t;
  s && gn(e, s, n, !0), o && o.forEach(
    (i) => gn(e, i, n, !0)
  );
  for (const i in t)
    if (r && i === "expose")
      process.env.NODE_ENV !== "production" && A(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const a = kl[i] || n && n[i];
      e[i] = a ? a(e[i], t[i]) : t[i];
    }
  return e;
}
const kl = {
  data: wo,
  props: xo,
  emits: xo,
  // objects
  methods: Tt,
  computed: Tt,
  // lifecycle
  beforeCreate: X,
  created: X,
  beforeMount: X,
  mounted: X,
  beforeUpdate: X,
  updated: X,
  beforeDestroy: X,
  beforeUnmount: X,
  destroyed: X,
  unmounted: X,
  activated: X,
  deactivated: X,
  errorCaptured: X,
  serverPrefetch: X,
  // assets
  components: Tt,
  directives: Tt,
  // watch
  watch: Tl,
  // provide / inject
  provide: wo,
  inject: Ol
};
function wo(e, t) {
  return t ? e ? function() {
    return te(
      B(e) ? e.call(this, this) : e,
      B(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Ol(e, t) {
  return Tt(So(e), So(t));
}
function So(e) {
  if (w(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function X(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Tt(e, t) {
  return e ? te(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function xo(e, t) {
  return e ? w(e) && w(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : te(
    /* @__PURE__ */ Object.create(null),
    Co(e),
    Co(t ?? {})
  ) : t;
}
function Tl(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = te(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = X(e[r], t[r]);
  return n;
}
let ko = null;
function lt(e, t) {
  if (!re)
    process.env.NODE_ENV !== "production" && A("provide() can only be used inside setup().");
  else {
    let n = re.provides;
    const r = re.parent && re.parent.provides;
    r === n && (n = re.provides = Object.create(r)), n[e] = t;
  }
}
function H(e, t, n = !1) {
  const r = re || z;
  if (r || ko) {
    const o = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : ko._context.provides;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && B(t) ? t.call(r && r.proxy) : t;
    process.env.NODE_ENV !== "production" && A(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && A("inject() can only be used inside setup() or functional components.");
}
const Oo = cl, $l = (e) => e.__isTeleport, Ce = Symbol.for("v-fgt"), ci = Symbol.for("v-txt"), Ke = Symbol.for("v-cmt"), rn = [];
let fe = null;
function $(e = !1) {
  rn.push(fe = e ? null : []);
}
function Al() {
  rn.pop(), fe = rn[rn.length - 1] || null;
}
let Lt = 1;
function To(e) {
  Lt += e;
}
function ui(e) {
  return e.dynamicChildren = Lt > 0 ? fe || ta : null, Al(), Lt > 0 && fe && fe.push(e), e;
}
function U(e, t, n, r, o, s) {
  return ui(
    be(
      e,
      t,
      n,
      r,
      o,
      s,
      !0
    )
  );
}
function J(e, t, n, r, o) {
  return ui(
    he(
      e,
      t,
      n,
      r,
      o,
      !0
    )
  );
}
function vn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function di(e, t) {
  return process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && ht.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
const Dl = (...e) => pi(
  ...e
), fi = "__vInternal", hi = ({ key: e }) => e ?? null, on = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? G(e) || q(e) || B(e) ? { i: z, r: e, k: t, f: !!n } : e : null);
function be(e, t = null, n = null, r = 0, o = null, s = e === Ce ? 0 : 1, i = !1, a = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && hi(t),
    ref: t && on(t),
    scopeId: Xs,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: r,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: z
  };
  return a ? (Hr(c, n), s & 128 && e.normalize(c)) : n && (c.shapeFlag |= G(n) ? 8 : 16), process.env.NODE_ENV !== "production" && c.key !== c.key && A("VNode created with invalid key (NaN). VNode type:", c.type), Lt > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  fe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && fe.push(c), c;
}
const he = process.env.NODE_ENV !== "production" ? Dl : pi;
function pi(e, t = null, n = null, r = 0, o = null, s = !1) {
  if ((!e || e === ei) && (process.env.NODE_ENV !== "production" && !e && A(`Invalid vnode type when creating vnode: ${e}.`), e = Ke), vn(e)) {
    const a = mt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Hr(a, n), Lt > 0 && !s && fe && (a.shapeFlag & 6 ? fe[fe.indexOf(e)] = a : fe.push(a)), a.patchFlag |= -2, a;
  }
  if (yi(e) && (e = e.__vccOpts), t) {
    t = Il(t);
    let { class: a, style: c } = t;
    a && !G(a) && (t.class = R(a)), V(c) && (dn(c) && !w(c) && (c = te({}, c)), t.style = _t(c));
  }
  const i = G(e) ? 1 : ll(e) ? 128 : $l(e) ? 64 : V(e) ? 4 : B(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && dn(e) && (e = x(e), A(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), be(
    e,
    t,
    n,
    r,
    o,
    i,
    s,
    !0
  );
}
function Il(e) {
  return e ? dn(e) || fi in e ? te({}, e) : e : null;
}
function mt(e, t, n = !1) {
  const { props: r, ref: o, patchFlag: s, children: i } = e, a = t ? Dn(r || {}, t) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && hi(a),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? w(o) ? o.concat(on(t)) : [o, on(t)] : on(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && s === -1 && w(i) ? i.map(gi) : i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Ce ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && mt(e.ssContent),
    ssFallback: e.ssFallback && mt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function gi(e) {
  const t = mt(e);
  return w(e.children) && (t.children = e.children.map(gi)), t;
}
function Br(e = " ", t = 0) {
  return he(ci, null, e, t);
}
function ge(e = "", t = !1) {
  return t ? ($(), J(Ke, null, e)) : he(Ke, null, e);
}
function Hr(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (w(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Hr(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !(fi in t) ? t._ctx = z : o === 3 && z && (z.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    B(t) ? (t = { default: t, _ctx: z }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Br(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Dn(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = R([t.class, r.class]));
      else if (o === "style")
        t.style = _t([t.style, r.style]);
      else if (na(o)) {
        const s = t[o], i = r[o];
        i && s !== i && !(w(s) && s.includes(i)) && (t[o] = s ? [].concat(s, i) : i);
      } else
        o !== "" && (t[o] = r[o]);
  }
  return t;
}
let re = null;
const pe = () => re || z;
let cr;
{
  const e = ws(), t = (n, r) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(r), (s) => {
      o.length > 1 ? o.forEach((i) => i(s)) : o[0](s);
    };
  };
  cr = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => re = n
  ), t(
    "__VUE_SSR_SETTERS__",
    (n) => In = n
  );
}
const vi = (e) => {
  const t = re;
  return cr(e), e.scope.on(), () => {
    e.scope.off(), cr(t);
  };
};
function Pl(e) {
  return e.vnode.shapeFlag & 4;
}
let In = !1;
function $o(e) {
  return e.attrsProxy || (e.attrsProxy = new Proxy(
    e.attrs,
    process.env.NODE_ENV !== "production" ? {
      get(t, n) {
        return Q(e, "get", "$attrs"), t[n];
      },
      set() {
        return A("setupContext.attrs is readonly."), !1;
      },
      deleteProperty() {
        return A("setupContext.attrs is readonly."), !1;
      }
    } : {
      get(t, n) {
        return Q(e, "get", "$attrs"), t[n];
      }
    }
  ));
}
function Ml(e) {
  return e.slotsProxy || (e.slotsProxy = new Proxy(e.slots, {
    get(t, n) {
      return Q(e, "get", "$slots"), t[n];
    }
  }));
}
function Rl(e) {
  const t = (n) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && A("expose() should be called only once per setup()."), n != null)) {
      let r = typeof n;
      r === "object" && (w(n) ? r = "array" : q(n) && (r = "ref")), r !== "object" && A(
        `expose() should be passed a plain object, received ${r}.`
      );
    }
    e.exposed = n || {};
  };
  return process.env.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return $o(e);
    },
    get slots() {
      return Ml(e);
    },
    get emit() {
      return (n, ...r) => e.emit(n, ...r);
    },
    expose: t
  }) : {
    get attrs() {
      return $o(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function bi(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Ba(Ra(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in Dt)
          return Dt[n](e);
      },
      has(t, n) {
        return n in t || n in Dt;
      }
    }));
}
const Vl = /(?:^|[-_])(\w)/g, Ll = (e) => e.replace(Vl, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function jr(e, t = !0) {
  return B(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function mi(e, t, n = !1) {
  let r = jr(t);
  if (!r && t.__file) {
    const o = t.__file.match(/([^/\\]+)\.\w+$/);
    o && (r = o[1]);
  }
  if (!r && e && e.parent) {
    const o = (s) => {
      for (const i in s)
        if (s[i] === t)
          return i;
    };
    r = o(
      e.components || e.parent.type.components
    ) || o(e.appContext.components);
  }
  return r ? Ll(r) : n ? "App" : "Anonymous";
}
function yi(e) {
  return B(e) && "__vccOpts" in e;
}
const S = (e, t) => {
  const n = La(e, t, In);
  if (process.env.NODE_ENV !== "production") {
    const r = pe();
    r && r.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function ur(e, t, n) {
  const r = arguments.length;
  return r === 2 ? V(t) && !w(t) ? vn(t) ? he(e, null, [t]) : he(e, t) : he(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && vn(n) && (n = [n]), he(e, t, n));
}
function Kl() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, r = { style: "color:#eb2f96" }, o = {
    header(l) {
      return V(l) ? l.__isVue ? ["div", e, "VueInstance"] : q(l) ? [
        "div",
        {},
        ["span", e, d(l)],
        "<",
        a(l.value),
        ">"
      ] : nt(l) ? [
        "div",
        {},
        ["span", e, rt(l) ? "ShallowReactive" : "Reactive"],
        "<",
        a(l),
        `>${ze(l) ? " (readonly)" : ""}`
      ] : ze(l) ? [
        "div",
        {},
        ["span", e, rt(l) ? "ShallowReadonly" : "Readonly"],
        "<",
        a(l),
        ">"
      ] : null : null;
    },
    hasBody(l) {
      return l && l.__isVue;
    },
    body(l) {
      if (l && l.__isVue)
        return [
          "div",
          {},
          ...s(l.$)
        ];
    }
  };
  function s(l) {
    const f = [];
    l.type.props && l.props && f.push(i("props", x(l.props))), l.setupState !== ue && f.push(i("setup", l.setupState)), l.data !== ue && f.push(i("data", x(l.data)));
    const g = c(l, "computed");
    g && f.push(i("computed", g));
    const h = c(l, "inject");
    return h && f.push(i("injected", h)), f.push([
      "div",
      {},
      [
        "span",
        {
          style: r.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: l }]
    ]), f;
  }
  function i(l, f) {
    return f = te({}, f), Object.keys(f).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        l
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(f).map((g) => [
          "div",
          {},
          ["span", r, g + ": "],
          a(f[g], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function a(l, f = !0) {
    return typeof l == "number" ? ["span", t, l] : typeof l == "string" ? ["span", n, JSON.stringify(l)] : typeof l == "boolean" ? ["span", r, l] : V(l) ? ["object", { object: f ? x(l) : l }] : ["span", n, String(l)];
  }
  function c(l, f) {
    const g = l.type;
    if (B(g))
      return;
    const h = {};
    for (const p in l.ctx)
      u(g, p, f) && (h[p] = l.ctx[p]);
    return h;
  }
  function u(l, f, g) {
    const h = l[g];
    if (w(h) && h.includes(f) || V(h) && f in h || l.extends && u(l.extends, f, g) || l.mixins && l.mixins.some((p) => u(p, f, g)))
      return !0;
  }
  function d(l) {
    return rt(l) ? "ShallowRef" : l.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
const Fl = process.env.NODE_ENV !== "production" ? A : Me;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Oe = "transition", St = "animation", bn = Symbol("_vtc"), zr = (e, { slots: t }) => ur(vl, Bl(e), t);
zr.displayName = "Transition";
const _i = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
zr.props = /* @__PURE__ */ te(
  {},
  ri,
  _i
);
const Ue = (e, t = []) => {
  w(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Ao = (e) => e ? w(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Bl(e) {
  const t = {};
  for (const N in e)
    N in _i || (t[N] = e[N]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: r,
    duration: o,
    enterFromClass: s = `${n}-enter-from`,
    enterActiveClass: i = `${n}-enter-active`,
    enterToClass: a = `${n}-enter-to`,
    appearFromClass: c = s,
    appearActiveClass: u = i,
    appearToClass: d = a,
    leaveFromClass: l = `${n}-leave-from`,
    leaveActiveClass: f = `${n}-leave-active`,
    leaveToClass: g = `${n}-leave-to`
  } = e, h = Hl(o), p = h && h[0], v = h && h[1], {
    onBeforeEnter: b,
    onEnter: m,
    onEnterCancelled: M,
    onLeave: k,
    onLeaveCancelled: C,
    onBeforeAppear: O = b,
    onAppear: ee = m,
    onAppearCancelled: T = M
  } = t, _ = (N, W, ae) => {
    Ge(N, W ? d : a), Ge(N, W ? u : i), ae && ae();
  }, D = (N, W) => {
    N._isLeaving = !1, Ge(N, l), Ge(N, g), Ge(N, f), W && W();
  }, I = (N) => (W, ae) => {
    const Ht = N ? ee : m, jt = () => _(W, N, ae);
    Ue(Ht, [W, jt]), Do(() => {
      Ge(W, N ? c : s), Te(W, N ? d : a), Ao(Ht) || Io(W, r, p, jt);
    });
  };
  return te(t, {
    onBeforeEnter(N) {
      Ue(b, [N]), Te(N, s), Te(N, i);
    },
    onBeforeAppear(N) {
      Ue(O, [N]), Te(N, c), Te(N, u);
    },
    onEnter: I(!1),
    onAppear: I(!0),
    onLeave(N, W) {
      N._isLeaving = !0;
      const ae = () => D(N, W);
      Te(N, l), Ul(), Te(N, f), Do(() => {
        N._isLeaving && (Ge(N, l), Te(N, g), Ao(k) || Io(N, r, v, ae));
      }), Ue(k, [N, ae]);
    },
    onEnterCancelled(N) {
      _(N, !1), Ue(M, [N]);
    },
    onAppearCancelled(N) {
      _(N, !0), Ue(T, [N]);
    },
    onLeaveCancelled(N) {
      D(N), Ue(C, [N]);
    }
  });
}
function Hl(e) {
  if (e == null)
    return null;
  if (V(e))
    return [zn(e.enter), zn(e.leave)];
  {
    const t = zn(e);
    return [t, t];
  }
}
function zn(e) {
  const t = la(e);
  return process.env.NODE_ENV !== "production" && Ya(t, "<transition> explicit duration"), t;
}
function Te(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[bn] || (e[bn] = /* @__PURE__ */ new Set())).add(t);
}
function Ge(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[bn];
  n && (n.delete(t), n.size || (e[bn] = void 0));
}
function Do(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let jl = 0;
function Io(e, t, n, r) {
  const o = e._endId = ++jl, s = () => {
    o === e._endId && r();
  };
  if (n)
    return setTimeout(s, n);
  const { type: i, timeout: a, propCount: c } = zl(e, t);
  if (!i)
    return r();
  const u = i + "end";
  let d = 0;
  const l = () => {
    e.removeEventListener(u, f), s();
  }, f = (g) => {
    g.target === e && ++d >= c && l();
  };
  setTimeout(() => {
    d < c && l();
  }, a + 1), e.addEventListener(u, f);
}
function zl(e, t) {
  const n = window.getComputedStyle(e), r = (h) => (n[h] || "").split(", "), o = r(`${Oe}Delay`), s = r(`${Oe}Duration`), i = Po(o, s), a = r(`${St}Delay`), c = r(`${St}Duration`), u = Po(a, c);
  let d = null, l = 0, f = 0;
  t === Oe ? i > 0 && (d = Oe, l = i, f = s.length) : t === St ? u > 0 && (d = St, l = u, f = c.length) : (l = Math.max(i, u), d = l > 0 ? i > u ? Oe : St : null, f = d ? d === Oe ? s.length : c.length : 0);
  const g = d === Oe && /\b(transform|all)(,|$)/.test(
    r(`${Oe}Property`).toString()
  );
  return {
    type: d,
    timeout: l,
    propCount: f,
    hasTransform: g
  };
}
function Po(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, r) => Mo(n) + Mo(e[r])));
}
function Mo(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Ul() {
  return document.body.offsetHeight;
}
const Ni = Symbol("_vod"), Gl = Symbol("_vsh"), mn = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[Ni] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : xt(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), xt(e, !0), r.enter(e)) : r.leave(e, () => {
      xt(e, !1);
    }) : xt(e, t));
  },
  beforeUnmount(e, { value: t }) {
    xt(e, t);
  }
};
process.env.NODE_ENV !== "production" && (mn.name = "show");
function xt(e, t) {
  e.style.display = t ? e[Ni] : "none", e[Gl] = !t;
}
Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : "");
function ql(e, t, n, r) {
  e.addEventListener(t, n, r);
}
const Ro = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return w(t) ? (n) => ia(t, n) : t;
}, Un = Symbol("_assign"), yn = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[Un] = Ro(n), ql(e, "change", () => {
      const r = e._modelValue, o = Wl(e), s = e.checked, i = e[Un];
      if (w(r)) {
        const a = Ss(r, o), c = a !== -1;
        if (s && !c)
          i(r.concat(o));
        else if (!s && c) {
          const u = [...r];
          u.splice(a, 1), i(u);
        }
      } else if (Sn(r)) {
        const a = new Set(r);
        s ? a.add(o) : a.delete(o), i(a);
      } else
        i(Ei(e, s));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Vo,
  beforeUpdate(e, t, n) {
    e[Un] = Ro(n), Vo(e, t, n);
  }
};
function Vo(e, { value: t, oldValue: n }, r) {
  e._modelValue = t, w(t) ? e.checked = Ss(t, r.props.value) > -1 : Sn(t) ? e.checked = t.has(r.props.value) : t !== n && (e.checked = xn(t, Ei(e, !0)));
}
function Wl(e) {
  return "_value" in e ? e._value : e.value;
}
function Ei(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const Jl = ["ctrl", "shift", "alt", "meta"], Yl = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => Jl.some((n) => e[`${n}Key`] && !t.includes(n))
}, ce = (e, t) => {
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = (o, ...s) => {
    for (let i = 0; i < t.length; i++) {
      const a = Yl[t[i]];
      if (a && a(o, t))
        return;
    }
    return e(o, ...s);
  });
};
/**
* vue v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ql() {
  Kl();
}
process.env.NODE_ENV !== "production" && Ql();
const Zl = /* @__PURE__ */ j({
  name: "FmoneIcon",
  props: {
    iconName: {
      type: String,
      required: !0
    },
    className: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "#fff"
    },
    size: {
      type: String,
      default: "12px"
    },
    disabled: Boolean
  },
  setup(e) {
    let { iconName: t, className: n, size: r, color: o } = zs(e);
    const s = S(() => `#${t.value}`), i = S(() => n.value ? `svg-icon ${n.value}` : "svg-icon"), a = S(() => ({
      width: r.value,
      height: r.value,
      color: o.value
    }));
    return {
      iconClassName: s,
      svgClass: i,
      iconSize: a
    };
  }
}), Ur = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, Xl = ["xlink:href"];
function ec(e, t, n, r, o, s) {
  return $(), U("svg", {
    "aria-hidden": "true",
    class: R([e.svgClass, { "is-disabled": e.disabled }]),
    style: _t(e.iconSize)
  }, [
    be("use", {
      class: "svg-use",
      "xlink:href": e.iconClassName
    }, null, 8, Xl)
  ], 6);
}
const tc = /* @__PURE__ */ Ur(Zl, [["render", ec], ["__scopeId", "data-v-9af4da72"]]);
var Lo;
const Gr = typeof window < "u", nc = (e) => typeof e == "string", rc = () => {
};
Gr && ((Lo = window == null ? void 0 : window.navigator) != null && Lo.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Ci(e) {
  return typeof e == "function" ? e() : y(e);
}
function oc(e) {
  return e;
}
function sc(e) {
  var t;
  const n = Ci(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const ic = Gr ? window : void 0;
function ac(...e) {
  let t, n, r, o;
  if (nc(e[0]) || Array.isArray(e[0]) ? ([n, r, o] = e, t = ic) : [t, n, r, o] = e, !t)
    return rc;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const s = [], i = () => {
    s.forEach((d) => d()), s.length = 0;
  }, a = (d, l, f, g) => (d.addEventListener(l, f, g), () => d.removeEventListener(l, f, g)), c = Z(() => [sc(t), Ci(o)], ([d, l]) => {
    i(), d && s.push(...n.flatMap((f) => r.map((g) => a(d, f, g, l))));
  }, { immediate: !0, flush: "post" });
  return () => {
    c(), i();
  };
}
const Ko = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Fo = "__vueuse_ssr_handlers__";
Ko[Fo] = Ko[Fo] || {};
var Bo;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Bo || (Bo = {}));
var lc = Object.defineProperty, Ho = Object.getOwnPropertySymbols, cc = Object.prototype.hasOwnProperty, uc = Object.prototype.propertyIsEnumerable, jo = (e, t, n) => t in e ? lc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, dc = (e, t) => {
  for (var n in t || (t = {}))
    cc.call(t, n) && jo(e, n, t[n]);
  if (Ho)
    for (var n of Ho(t))
      uc.call(t, n) && jo(e, n, t[n]);
  return e;
};
const fc = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
dc({
  linear: oc
}, fc);
var wi = typeof global == "object" && global && global.Object === Object && global, hc = typeof self == "object" && self && self.Object === Object && self, we = wi || hc || Function("return this")(), me = we.Symbol, Si = Object.prototype, pc = Si.hasOwnProperty, gc = Si.toString, kt = me ? me.toStringTag : void 0;
function vc(e) {
  var t = pc.call(e, kt), n = e[kt];
  try {
    e[kt] = void 0;
    var r = !0;
  } catch {
  }
  var o = gc.call(e);
  return r && (t ? e[kt] = n : delete e[kt]), o;
}
var bc = Object.prototype, mc = bc.toString;
function yc(e) {
  return mc.call(e);
}
var _c = "[object Null]", Nc = "[object Undefined]", zo = me ? me.toStringTag : void 0;
function Nt(e) {
  return e == null ? e === void 0 ? Nc : _c : zo && zo in Object(e) ? vc(e) : yc(e);
}
function yt(e) {
  return e != null && typeof e == "object";
}
var Ec = "[object Symbol]";
function qr(e) {
  return typeof e == "symbol" || yt(e) && Nt(e) == Ec;
}
function Cc(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var Ee = Array.isArray, wc = 1 / 0, Uo = me ? me.prototype : void 0, Go = Uo ? Uo.toString : void 0;
function xi(e) {
  if (typeof e == "string")
    return e;
  if (Ee(e))
    return Cc(e, xi) + "";
  if (qr(e))
    return Go ? Go.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -wc ? "-0" : t;
}
function _n(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function Sc(e) {
  return e;
}
var xc = "[object AsyncFunction]", kc = "[object Function]", Oc = "[object GeneratorFunction]", Tc = "[object Proxy]";
function ki(e) {
  if (!_n(e))
    return !1;
  var t = Nt(e);
  return t == kc || t == Oc || t == xc || t == Tc;
}
var Gn = we["__core-js_shared__"], qo = function() {
  var e = /[^.]+$/.exec(Gn && Gn.keys && Gn.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function $c(e) {
  return !!qo && qo in e;
}
var Ac = Function.prototype, Dc = Ac.toString;
function ut(e) {
  if (e != null) {
    try {
      return Dc.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Ic = /[\\^$.*+?()[\]{}|]/g, Pc = /^\[object .+?Constructor\]$/, Mc = Function.prototype, Rc = Object.prototype, Vc = Mc.toString, Lc = Rc.hasOwnProperty, Kc = RegExp(
  "^" + Vc.call(Lc).replace(Ic, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Fc(e) {
  if (!_n(e) || $c(e))
    return !1;
  var t = ki(e) ? Kc : Pc;
  return t.test(ut(e));
}
function Bc(e, t) {
  return e == null ? void 0 : e[t];
}
function dt(e, t) {
  var n = Bc(e, t);
  return Fc(n) ? n : void 0;
}
var dr = dt(we, "WeakMap");
function Hc(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
var jc = 800, zc = 16, Uc = Date.now;
function Gc(e) {
  var t = 0, n = 0;
  return function() {
    var r = Uc(), o = zc - (r - n);
    if (n = r, o > 0) {
      if (++t >= jc)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function qc(e) {
  return function() {
    return e;
  };
}
var Nn = function() {
  try {
    var e = dt(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Wc = Nn ? function(e, t) {
  return Nn(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: qc(t),
    writable: !0
  });
} : Sc;
const Jc = Wc;
var Yc = Gc(Jc), Qc = 9007199254740991, Zc = /^(?:0|[1-9]\d*)$/;
function Wr(e, t) {
  var n = typeof e;
  return t = t ?? Qc, !!t && (n == "number" || n != "symbol" && Zc.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Xc(e, t, n) {
  t == "__proto__" && Nn ? Nn(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function Jr(e, t) {
  return e === t || e !== e && t !== t;
}
var eu = Object.prototype, tu = eu.hasOwnProperty;
function nu(e, t, n) {
  var r = e[t];
  (!(tu.call(e, t) && Jr(r, n)) || n === void 0 && !(t in e)) && Xc(e, t, n);
}
var Wo = Math.max;
function ru(e, t, n) {
  return t = Wo(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, s = Wo(r.length - t, 0), i = Array(s); ++o < s; )
      i[o] = r[t + o];
    o = -1;
    for (var a = Array(t + 1); ++o < t; )
      a[o] = r[o];
    return a[t] = n(i), Hc(e, this, a);
  };
}
var ou = 9007199254740991;
function Yr(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ou;
}
function su(e) {
  return e != null && Yr(e.length) && !ki(e);
}
var iu = Object.prototype;
function au(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || iu;
  return e === n;
}
function lu(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var cu = "[object Arguments]";
function Jo(e) {
  return yt(e) && Nt(e) == cu;
}
var Oi = Object.prototype, uu = Oi.hasOwnProperty, du = Oi.propertyIsEnumerable, Qr = Jo(/* @__PURE__ */ function() {
  return arguments;
}()) ? Jo : function(e) {
  return yt(e) && uu.call(e, "callee") && !du.call(e, "callee");
};
function fu() {
  return !1;
}
var Ti = typeof exports == "object" && exports && !exports.nodeType && exports, Yo = Ti && typeof module == "object" && module && !module.nodeType && module, hu = Yo && Yo.exports === Ti, Qo = hu ? we.Buffer : void 0, pu = Qo ? Qo.isBuffer : void 0, fr = pu || fu, gu = "[object Arguments]", vu = "[object Array]", bu = "[object Boolean]", mu = "[object Date]", yu = "[object Error]", _u = "[object Function]", Nu = "[object Map]", Eu = "[object Number]", Cu = "[object Object]", wu = "[object RegExp]", Su = "[object Set]", xu = "[object String]", ku = "[object WeakMap]", Ou = "[object ArrayBuffer]", Tu = "[object DataView]", $u = "[object Float32Array]", Au = "[object Float64Array]", Du = "[object Int8Array]", Iu = "[object Int16Array]", Pu = "[object Int32Array]", Mu = "[object Uint8Array]", Ru = "[object Uint8ClampedArray]", Vu = "[object Uint16Array]", Lu = "[object Uint32Array]", K = {};
K[$u] = K[Au] = K[Du] = K[Iu] = K[Pu] = K[Mu] = K[Ru] = K[Vu] = K[Lu] = !0;
K[gu] = K[vu] = K[Ou] = K[bu] = K[Tu] = K[mu] = K[yu] = K[_u] = K[Nu] = K[Eu] = K[Cu] = K[wu] = K[Su] = K[xu] = K[ku] = !1;
function Ku(e) {
  return yt(e) && Yr(e.length) && !!K[Nt(e)];
}
function Fu(e) {
  return function(t) {
    return e(t);
  };
}
var $i = typeof exports == "object" && exports && !exports.nodeType && exports, It = $i && typeof module == "object" && module && !module.nodeType && module, Bu = It && It.exports === $i, qn = Bu && wi.process, Zo = function() {
  try {
    var e = It && It.require && It.require("util").types;
    return e || qn && qn.binding && qn.binding("util");
  } catch {
  }
}(), Xo = Zo && Zo.isTypedArray, Ai = Xo ? Fu(Xo) : Ku, Hu = Object.prototype, ju = Hu.hasOwnProperty;
function zu(e, t) {
  var n = Ee(e), r = !n && Qr(e), o = !n && !r && fr(e), s = !n && !r && !o && Ai(e), i = n || r || o || s, a = i ? lu(e.length, String) : [], c = a.length;
  for (var u in e)
    (t || ju.call(e, u)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Wr(u, c))) && a.push(u);
  return a;
}
function Uu(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Gu = Uu(Object.keys, Object), qu = Object.prototype, Wu = qu.hasOwnProperty;
function Ju(e) {
  if (!au(e))
    return Gu(e);
  var t = [];
  for (var n in Object(e))
    Wu.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Yu(e) {
  return su(e) ? zu(e) : Ju(e);
}
var Qu = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Zu = /^\w*$/;
function Xu(e, t) {
  if (Ee(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || qr(e) ? !0 : Zu.test(e) || !Qu.test(e) || t != null && e in Object(t);
}
var Kt = dt(Object, "create");
function ed() {
  this.__data__ = Kt ? Kt(null) : {}, this.size = 0;
}
function td(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var nd = "__lodash_hash_undefined__", rd = Object.prototype, od = rd.hasOwnProperty;
function sd(e) {
  var t = this.__data__;
  if (Kt) {
    var n = t[e];
    return n === nd ? void 0 : n;
  }
  return od.call(t, e) ? t[e] : void 0;
}
var id = Object.prototype, ad = id.hasOwnProperty;
function ld(e) {
  var t = this.__data__;
  return Kt ? t[e] !== void 0 : ad.call(t, e);
}
var cd = "__lodash_hash_undefined__";
function ud(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Kt && t === void 0 ? cd : t, this;
}
function ct(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ct.prototype.clear = ed;
ct.prototype.delete = td;
ct.prototype.get = sd;
ct.prototype.has = ld;
ct.prototype.set = ud;
function dd() {
  this.__data__ = [], this.size = 0;
}
function Pn(e, t) {
  for (var n = e.length; n--; )
    if (Jr(e[n][0], t))
      return n;
  return -1;
}
var fd = Array.prototype, hd = fd.splice;
function pd(e) {
  var t = this.__data__, n = Pn(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : hd.call(t, n, 1), --this.size, !0;
}
function gd(e) {
  var t = this.__data__, n = Pn(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function vd(e) {
  return Pn(this.__data__, e) > -1;
}
function bd(e, t) {
  var n = this.__data__, r = Pn(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function Se(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Se.prototype.clear = dd;
Se.prototype.delete = pd;
Se.prototype.get = gd;
Se.prototype.has = vd;
Se.prototype.set = bd;
var Ft = dt(we, "Map");
function md() {
  this.size = 0, this.__data__ = {
    hash: new ct(),
    map: new (Ft || Se)(),
    string: new ct()
  };
}
function yd(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Mn(e, t) {
  var n = e.__data__;
  return yd(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function _d(e) {
  var t = Mn(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Nd(e) {
  return Mn(this, e).get(e);
}
function Ed(e) {
  return Mn(this, e).has(e);
}
function Cd(e, t) {
  var n = Mn(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function xe(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
xe.prototype.clear = md;
xe.prototype.delete = _d;
xe.prototype.get = Nd;
xe.prototype.has = Ed;
xe.prototype.set = Cd;
var wd = "Expected a function";
function Zr(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(wd);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], s = n.cache;
    if (s.has(o))
      return s.get(o);
    var i = e.apply(this, r);
    return n.cache = s.set(o, i) || s, i;
  };
  return n.cache = new (Zr.Cache || xe)(), n;
}
Zr.Cache = xe;
var Sd = 500;
function xd(e) {
  var t = Zr(e, function(r) {
    return n.size === Sd && n.clear(), r;
  }), n = t.cache;
  return t;
}
var kd = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Od = /\\(\\)?/g, Td = xd(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(kd, function(n, r, o, s) {
    t.push(o ? s.replace(Od, "$1") : r || n);
  }), t;
});
function $d(e) {
  return e == null ? "" : xi(e);
}
function Rn(e, t) {
  return Ee(e) ? e : Xu(e, t) ? [e] : Td($d(e));
}
var Ad = 1 / 0;
function Xr(e) {
  if (typeof e == "string" || qr(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Ad ? "-0" : t;
}
function Di(e, t) {
  t = Rn(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[Xr(t[n++])];
  return n && n == r ? e : void 0;
}
function Dd(e, t, n) {
  var r = e == null ? void 0 : Di(e, t);
  return r === void 0 ? n : r;
}
function Ii(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var es = me ? me.isConcatSpreadable : void 0;
function Id(e) {
  return Ee(e) || Qr(e) || !!(es && e && e[es]);
}
function Pi(e, t, n, r, o) {
  var s = -1, i = e.length;
  for (n || (n = Id), o || (o = []); ++s < i; ) {
    var a = e[s];
    t > 0 && n(a) ? t > 1 ? Pi(a, t - 1, n, r, o) : Ii(o, a) : r || (o[o.length] = a);
  }
  return o;
}
function Pd(e) {
  var t = e == null ? 0 : e.length;
  return t ? Pi(e, 1) : [];
}
function Md(e) {
  return Yc(ru(e, void 0, Pd), e + "");
}
function Rd() {
  this.__data__ = new Se(), this.size = 0;
}
function Vd(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Ld(e) {
  return this.__data__.get(e);
}
function Kd(e) {
  return this.__data__.has(e);
}
var Fd = 200;
function Bd(e, t) {
  var n = this.__data__;
  if (n instanceof Se) {
    var r = n.__data__;
    if (!Ft || r.length < Fd - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new xe(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Fe(e) {
  var t = this.__data__ = new Se(e);
  this.size = t.size;
}
Fe.prototype.clear = Rd;
Fe.prototype.delete = Vd;
Fe.prototype.get = Ld;
Fe.prototype.has = Kd;
Fe.prototype.set = Bd;
function Hd(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, s = []; ++n < r; ) {
    var i = e[n];
    t(i, n, e) && (s[o++] = i);
  }
  return s;
}
function jd() {
  return [];
}
var zd = Object.prototype, Ud = zd.propertyIsEnumerable, ts = Object.getOwnPropertySymbols, Gd = ts ? function(e) {
  return e == null ? [] : (e = Object(e), Hd(ts(e), function(t) {
    return Ud.call(e, t);
  }));
} : jd;
const qd = Gd;
function Wd(e, t, n) {
  var r = t(e);
  return Ee(e) ? r : Ii(r, n(e));
}
function ns(e) {
  return Wd(e, Yu, qd);
}
var hr = dt(we, "DataView"), pr = dt(we, "Promise"), gr = dt(we, "Set"), rs = "[object Map]", Jd = "[object Object]", os = "[object Promise]", ss = "[object Set]", is = "[object WeakMap]", as = "[object DataView]", Yd = ut(hr), Qd = ut(Ft), Zd = ut(pr), Xd = ut(gr), ef = ut(dr), Ye = Nt;
(hr && Ye(new hr(new ArrayBuffer(1))) != as || Ft && Ye(new Ft()) != rs || pr && Ye(pr.resolve()) != os || gr && Ye(new gr()) != ss || dr && Ye(new dr()) != is) && (Ye = function(e) {
  var t = Nt(e), n = t == Jd ? e.constructor : void 0, r = n ? ut(n) : "";
  if (r)
    switch (r) {
      case Yd:
        return as;
      case Qd:
        return rs;
      case Zd:
        return os;
      case Xd:
        return ss;
      case ef:
        return is;
    }
  return t;
});
const ls = Ye;
var tf = we.Uint8Array;
const cs = tf;
var nf = "__lodash_hash_undefined__";
function rf(e) {
  return this.__data__.set(e, nf), this;
}
function of(e) {
  return this.__data__.has(e);
}
function En(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new xe(); ++t < n; )
    this.add(e[t]);
}
En.prototype.add = En.prototype.push = rf;
En.prototype.has = of;
function sf(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function af(e, t) {
  return e.has(t);
}
var lf = 1, cf = 2;
function Mi(e, t, n, r, o, s) {
  var i = n & lf, a = e.length, c = t.length;
  if (a != c && !(i && c > a))
    return !1;
  var u = s.get(e), d = s.get(t);
  if (u && d)
    return u == t && d == e;
  var l = -1, f = !0, g = n & cf ? new En() : void 0;
  for (s.set(e, t), s.set(t, e); ++l < a; ) {
    var h = e[l], p = t[l];
    if (r)
      var v = i ? r(p, h, l, t, e, s) : r(h, p, l, e, t, s);
    if (v !== void 0) {
      if (v)
        continue;
      f = !1;
      break;
    }
    if (g) {
      if (!sf(t, function(b, m) {
        if (!af(g, m) && (h === b || o(h, b, n, r, s)))
          return g.push(m);
      })) {
        f = !1;
        break;
      }
    } else if (!(h === p || o(h, p, n, r, s))) {
      f = !1;
      break;
    }
  }
  return s.delete(e), s.delete(t), f;
}
function uf(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
function df(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var ff = 1, hf = 2, pf = "[object Boolean]", gf = "[object Date]", vf = "[object Error]", bf = "[object Map]", mf = "[object Number]", yf = "[object RegExp]", _f = "[object Set]", Nf = "[object String]", Ef = "[object Symbol]", Cf = "[object ArrayBuffer]", wf = "[object DataView]", us = me ? me.prototype : void 0, Wn = us ? us.valueOf : void 0;
function Sf(e, t, n, r, o, s, i) {
  switch (n) {
    case wf:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Cf:
      return !(e.byteLength != t.byteLength || !s(new cs(e), new cs(t)));
    case pf:
    case gf:
    case mf:
      return Jr(+e, +t);
    case vf:
      return e.name == t.name && e.message == t.message;
    case yf:
    case Nf:
      return e == t + "";
    case bf:
      var a = uf;
    case _f:
      var c = r & ff;
      if (a || (a = df), e.size != t.size && !c)
        return !1;
      var u = i.get(e);
      if (u)
        return u == t;
      r |= hf, i.set(e, t);
      var d = Mi(a(e), a(t), r, o, s, i);
      return i.delete(e), d;
    case Ef:
      if (Wn)
        return Wn.call(e) == Wn.call(t);
  }
  return !1;
}
var xf = 1, kf = Object.prototype, Of = kf.hasOwnProperty;
function Tf(e, t, n, r, o, s) {
  var i = n & xf, a = ns(e), c = a.length, u = ns(t), d = u.length;
  if (c != d && !i)
    return !1;
  for (var l = c; l--; ) {
    var f = a[l];
    if (!(i ? f in t : Of.call(t, f)))
      return !1;
  }
  var g = s.get(e), h = s.get(t);
  if (g && h)
    return g == t && h == e;
  var p = !0;
  s.set(e, t), s.set(t, e);
  for (var v = i; ++l < c; ) {
    f = a[l];
    var b = e[f], m = t[f];
    if (r)
      var M = i ? r(m, b, f, t, e, s) : r(b, m, f, e, t, s);
    if (!(M === void 0 ? b === m || o(b, m, n, r, s) : M)) {
      p = !1;
      break;
    }
    v || (v = f == "constructor");
  }
  if (p && !v) {
    var k = e.constructor, C = t.constructor;
    k != C && "constructor" in e && "constructor" in t && !(typeof k == "function" && k instanceof k && typeof C == "function" && C instanceof C) && (p = !1);
  }
  return s.delete(e), s.delete(t), p;
}
var $f = 1, ds = "[object Arguments]", fs = "[object Array]", Zt = "[object Object]", Af = Object.prototype, hs = Af.hasOwnProperty;
function Df(e, t, n, r, o, s) {
  var i = Ee(e), a = Ee(t), c = i ? fs : ls(e), u = a ? fs : ls(t);
  c = c == ds ? Zt : c, u = u == ds ? Zt : u;
  var d = c == Zt, l = u == Zt, f = c == u;
  if (f && fr(e)) {
    if (!fr(t))
      return !1;
    i = !0, d = !1;
  }
  if (f && !d)
    return s || (s = new Fe()), i || Ai(e) ? Mi(e, t, n, r, o, s) : Sf(e, t, c, n, r, o, s);
  if (!(n & $f)) {
    var g = d && hs.call(e, "__wrapped__"), h = l && hs.call(t, "__wrapped__");
    if (g || h) {
      var p = g ? e.value() : e, v = h ? t.value() : t;
      return s || (s = new Fe()), o(p, v, n, r, s);
    }
  }
  return f ? (s || (s = new Fe()), Tf(e, t, n, r, o, s)) : !1;
}
function Ri(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !yt(e) && !yt(t) ? e !== e && t !== t : Df(e, t, n, r, Ri, o);
}
function If(e, t) {
  return e != null && t in Object(e);
}
function Pf(e, t, n) {
  t = Rn(t, e);
  for (var r = -1, o = t.length, s = !1; ++r < o; ) {
    var i = Xr(t[r]);
    if (!(s = e != null && n(e, i)))
      break;
    e = e[i];
  }
  return s || ++r != o ? s : (o = e == null ? 0 : e.length, !!o && Yr(o) && Wr(i, o) && (Ee(e) || Qr(e)));
}
function Mf(e, t) {
  return e != null && Pf(e, t, If);
}
function Rf(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
    var o = e[t];
    r[o[0]] = o[1];
  }
  return r;
}
function Vf(e, t) {
  return Ri(e, t);
}
function Lf(e) {
  return e == null;
}
function Kf(e, t, n, r) {
  if (!_n(e))
    return e;
  t = Rn(t, e);
  for (var o = -1, s = t.length, i = s - 1, a = e; a != null && ++o < s; ) {
    var c = Xr(t[o]), u = n;
    if (c === "__proto__" || c === "constructor" || c === "prototype")
      return e;
    if (o != i) {
      var d = a[c];
      u = r ? r(d, c, a) : void 0, u === void 0 && (u = _n(d) ? d : Wr(t[o + 1]) ? [] : {});
    }
    nu(a, c, u), a = a[c];
  }
  return e;
}
function Ff(e, t, n) {
  for (var r = -1, o = t.length, s = {}; ++r < o; ) {
    var i = t[r], a = Di(e, i);
    n(a, i) && Kf(s, Rn(i, e), a);
  }
  return s;
}
function Bf(e, t) {
  return Ff(e, t, function(n, r) {
    return Mf(e, r);
  });
}
var Hf = Md(function(e, t) {
  return e == null ? {} : Bf(e, t);
});
const Cn = (e) => e === void 0, vr = (e) => typeof e == "boolean", br = (e) => typeof e == "number", wn = (e) => Lf(e), jf = (e) => G(e) ? !Number.isNaN(Number(e)) : !1;
class zf extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function Et(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = G(e) ? new zf(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const Uf = "utils/dom/style", Vi = (e = "") => e.split(" ").filter((t) => !!t.trim()), Gf = (e, t) => {
  !e || !t.trim() || e.classList.add(...Vi(t));
}, Jn = (e, t) => {
  !e || !t.trim() || e.classList.remove(...Vi(t));
};
function qf(e, t = "px") {
  if (!e)
    return "";
  if (br(e) || jf(e))
    return `${e}${t}`;
  if (G(e))
    return e;
  Et(Uf, "binding value must be a string or number");
}
/*! Element Plus Icons Vue v2.3.1 */
var Wf = /* @__PURE__ */ j({
  name: "CaretRight",
  __name: "caret-right",
  setup(e) {
    return (t, n) => ($(), U("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      be("path", {
        fill: "currentColor",
        d: "M384 192v640l384-320.064z"
      })
    ]));
  }
}), Jf = Wf, Yf = /* @__PURE__ */ j({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (t, n) => ($(), U("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      be("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), Li = Yf;
const Ki = "__epPropKey", Vn = (e) => e, Qf = (e) => V(e) && !!e[Ki], Fi = (e, t) => {
  if (!V(e) || Qf(e))
    return e;
  const { values: n, required: r, default: o, type: s, validator: i } = e, c = {
    type: s,
    required: !!r,
    validator: n || i ? (u) => {
      let d = !1, l = [];
      if (n && (l = Array.from(n), L(e, "default") && l.push(o), d || (d = l.includes(u))), i && (d || (d = i(u))), !d && l.length > 0) {
        const f = [...new Set(l)].map((g) => JSON.stringify(g)).join(", ");
        Fl(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${f}], got value ${JSON.stringify(u)}.`);
      }
      return d;
    } : void 0,
    [Ki]: !0
  };
  return L(e, "default") && (c.default = o), c;
}, eo = (e) => Rf(Object.entries(e).map(([t, n]) => [
  t,
  Fi(n, t)
])), mr = Vn([
  String,
  Object,
  Function
]), to = (e, t) => {
  if (e.install = (n) => {
    for (const r of [e, ...Object.values(t ?? {})])
      n.component(r.name, r);
  }, t)
    for (const [n, r] of Object.entries(t))
      e[n] = r;
  return e;
}, no = (e) => (e.install = Me, e), qe = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter",
  pageUp: "PageUp",
  pageDown: "PageDown",
  home: "Home",
  end: "End"
}, Ln = "update:modelValue", Zf = ["", "default", "small", "large"], sn = ({ from: e, replacement: t, scope: n, version: r, ref: o, type: s = "API" }, i) => {
  Z(() => y(i), (a) => {
    a && Et(n, `[${s}] ${e} is about to be deprecated in version ${r}, please use ${t} instead.
For more detail, please visit: ${o}
`);
  }, {
    immediate: !0
  });
};
var Xf = {
  name: "en",
  el: {
    breadcrumb: {
      label: "Breadcrumb"
    },
    colorpicker: {
      confirm: "OK",
      clear: "Clear",
      defaultLabel: "color picker",
      description: "current color is {color}. press enter to select a new color."
    },
    datepicker: {
      now: "Now",
      today: "Today",
      cancel: "Cancel",
      clear: "Clear",
      confirm: "OK",
      dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
      monthTablePrompt: "Use the arrow keys and enter to select the month",
      yearTablePrompt: "Use the arrow keys and enter to select the year",
      selectedDate: "Selected date",
      selectDate: "Select date",
      selectTime: "Select time",
      startDate: "Start Date",
      startTime: "Start Time",
      endDate: "End Date",
      endTime: "End Time",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      year: "",
      month1: "January",
      month2: "February",
      month3: "March",
      month4: "April",
      month5: "May",
      month6: "June",
      month7: "July",
      month8: "August",
      month9: "September",
      month10: "October",
      month11: "November",
      month12: "December",
      week: "week",
      weeks: {
        sun: "Sun",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat"
      },
      weeksFull: {
        sun: "Sunday",
        mon: "Monday",
        tue: "Tuesday",
        wed: "Wednesday",
        thu: "Thursday",
        fri: "Friday",
        sat: "Saturday"
      },
      months: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec"
      }
    },
    inputNumber: {
      decrease: "decrease number",
      increase: "increase number"
    },
    select: {
      loading: "Loading",
      noMatch: "No matching data",
      noData: "No data",
      placeholder: "Select"
    },
    dropdown: {
      toggleDropdown: "Toggle Dropdown"
    },
    cascader: {
      noMatch: "No matching data",
      loading: "Loading",
      placeholder: "Select",
      noData: "No data"
    },
    pagination: {
      goto: "Go to",
      pagesize: "/page",
      total: "Total {total}",
      pageClassifier: "",
      page: "Page",
      prev: "Go to previous page",
      next: "Go to next page",
      currentPage: "page {pager}",
      prevPages: "Previous {pager} pages",
      nextPages: "Next {pager} pages",
      deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
    },
    dialog: {
      close: "Close this dialog"
    },
    drawer: {
      close: "Close this dialog"
    },
    messagebox: {
      title: "Message",
      confirm: "OK",
      cancel: "Cancel",
      error: "Illegal input",
      close: "Close this dialog"
    },
    upload: {
      deleteTip: "press delete to remove",
      delete: "Delete",
      preview: "Preview",
      continue: "Continue"
    },
    slider: {
      defaultLabel: "slider between {min} and {max}",
      defaultRangeStartLabel: "pick start value",
      defaultRangeEndLabel: "pick end value"
    },
    table: {
      emptyText: "No Data",
      confirmFilter: "Confirm",
      resetFilter: "Reset",
      clearFilter: "All",
      sumText: "Sum"
    },
    tour: {
      next: "Next",
      previous: "Previous",
      finish: "Finish"
    },
    tree: {
      emptyText: "No Data"
    },
    transfer: {
      noMatch: "No matching data",
      noData: "No data",
      titles: ["List 1", "List 2"],
      filterPlaceholder: "Enter keyword",
      noCheckedFormat: "{total} items",
      hasCheckedFormat: "{checked}/{total} checked"
    },
    image: {
      error: "FAILED"
    },
    pageHeader: {
      title: "Back"
    },
    popconfirm: {
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    },
    carousel: {
      leftArrow: "Carousel arrow left",
      rightArrow: "Carousel arrow right",
      indicator: "Carousel switch to index {index}"
    }
  }
};
const eh = (e) => (t, n) => th(t, n, y(e)), th = (e, t, n) => Dd(n, e, e).replace(/\{(\w+)\}/g, (r, o) => {
  var s;
  return `${(s = t == null ? void 0 : t[o]) != null ? s : `{${o}}`}`;
}), nh = (e) => {
  const t = S(() => y(e).name), n = q(e) ? e : F(e);
  return {
    lang: t,
    locale: n,
    t: eh(e)
  };
}, rh = Symbol("localeContextKey"), oh = (e) => {
  const t = e || H(rh, F());
  return nh(S(() => t.value || Xf));
}, Yn = "el", sh = "is-", We = (e, t, n, r, o) => {
  let s = `${e}-${t}`;
  return n && (s += `-${n}`), r && (s += `__${r}`), o && (s += `--${o}`), s;
}, ih = Symbol("namespaceContextKey"), Bi = (e) => {
  const t = e || (pe() ? H(ih, F(Yn)) : F(Yn));
  return S(() => y(t) || Yn);
}, oe = (e, t) => {
  const n = Bi(t);
  return {
    namespace: n,
    b: (p = "") => We(n.value, e, p, "", ""),
    e: (p) => p ? We(n.value, e, "", p, "") : "",
    m: (p) => p ? We(n.value, e, "", "", p) : "",
    be: (p, v) => p && v ? We(n.value, e, p, v, "") : "",
    em: (p, v) => p && v ? We(n.value, e, "", p, v) : "",
    bm: (p, v) => p && v ? We(n.value, e, p, "", v) : "",
    bem: (p, v, b) => p && v && b ? We(n.value, e, p, v, b) : "",
    is: (p, ...v) => {
      const b = v.length >= 1 ? v[0] : !0;
      return p && b ? `${sh}${p}` : "";
    },
    cssVar: (p) => {
      const v = {};
      for (const b in p)
        p[b] && (v[`--${n.value}-${b}`] = p[b]);
      return v;
    },
    cssVarName: (p) => `--${n.value}-${p}`,
    cssVarBlock: (p) => {
      const v = {};
      for (const b in p)
        p[b] && (v[`--${n.value}-${e}-${b}`] = p[b]);
      return v;
    },
    cssVarBlockName: (p) => `--${n.value}-${e}-${p}`
  };
}, Hi = (e) => {
  const t = pe();
  return S(() => {
    var n, r;
    return (r = (n = t == null ? void 0 : t.proxy) == null ? void 0 : n.$props) == null ? void 0 : r[e];
  });
}, yr = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, ah = Symbol("elIdInjection"), lh = () => pe() ? H(ah, yr) : yr, ch = (e) => {
  const t = lh();
  !Gr && t === yr && Et("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const n = Bi();
  return S(() => y(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, ro = Fi({
  type: String,
  values: Zf,
  required: !1
}), uh = Symbol("size"), dh = () => {
  const e = H(uh, {});
  return S(() => y(e.size) || "");
}, fh = Symbol(), ps = F();
function hh(e, t = void 0) {
  const n = pe() ? H(fh, ps) : ps;
  return e ? S(() => {
    var r, o;
    return (o = (r = n.value) == null ? void 0 : r[e]) != null ? o : t;
  }) : n;
}
var ye = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
};
const ph = eo({
  size: {
    type: Vn([Number, String])
  },
  color: {
    type: String
  }
}), gh = /* @__PURE__ */ j({
  name: "ElIcon",
  inheritAttrs: !1
}), vh = /* @__PURE__ */ j({
  ...gh,
  props: ph,
  setup(e) {
    const t = e, n = oe("icon"), r = S(() => {
      const { size: o, color: s } = t;
      return !o && !s ? {} : {
        fontSize: Cn(o) ? void 0 : qf(o),
        "--color": s
      };
    });
    return (o, s) => ($(), U("i", Dn({
      class: y(n).b(),
      style: y(r)
    }, o.$attrs), [
      ie(o.$slots, "default")
    ], 16));
  }
});
var bh = /* @__PURE__ */ ye(vh, [["__file", "icon.vue"]]);
const _r = to(bh), oo = Symbol("formContextKey"), so = Symbol("formItemContextKey"), Nr = (e, t = {}) => {
  const n = F(void 0), r = t.prop ? n : Hi("size"), o = t.global ? n : dh(), s = t.form ? { size: void 0 } : H(oo, void 0), i = t.formItem ? { size: void 0 } : H(so, void 0);
  return S(() => r.value || y(e) || (i == null ? void 0 : i.size) || (s == null ? void 0 : s.size) || o.value || "");
}, io = (e) => {
  const t = Hi("disabled"), n = H(oo, void 0);
  return S(() => t.value || y(e) || (n == null ? void 0 : n.disabled) || !1);
}, Kn = () => {
  const e = H(oo, void 0), t = H(so, void 0);
  return {
    form: e,
    formItem: t
  };
}, ji = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: r
}) => {
  n || (n = F(!1)), r || (r = F(!1));
  const o = F();
  let s;
  const i = S(() => {
    var a;
    return !!(!e.label && t && t.inputIds && ((a = t.inputIds) == null ? void 0 : a.length) <= 1);
  });
  return Kr(() => {
    s = Z([rr(e, "id"), n], ([a, c]) => {
      const u = a ?? (c ? void 0 : ch().value);
      u !== o.value && (t != null && t.removeInputId && (o.value && t.removeInputId(o.value), !(r != null && r.value) && !c && u && t.addInputId(u)), o.value = u);
    }, { immediate: !0 });
  }), Nl(() => {
    s && s(), t != null && t.removeInputId && o.value && t.removeInputId(o.value);
  }), {
    isLabeledByFormItem: i,
    inputId: o
  };
}, zi = Symbol("buttonGroupContextKey"), mh = (e, t) => {
  sn({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, S(() => e.type === "text"));
  const n = H(zi, void 0), r = hh("button"), { form: o } = Kn(), s = Nr(S(() => n == null ? void 0 : n.size)), i = io(), a = F(), c = Fr(), u = S(() => e.type || (n == null ? void 0 : n.type) || ""), d = S(() => {
    var h, p, v;
    return (v = (p = e.autoInsertSpace) != null ? p : (h = r.value) == null ? void 0 : h.autoInsertSpace) != null ? v : !1;
  }), l = S(() => e.tag === "button" ? {
    ariaDisabled: i.value || e.loading,
    disabled: i.value || e.loading,
    autofocus: e.autofocus,
    type: e.nativeType
  } : {}), f = S(() => {
    var h;
    const p = (h = c.default) == null ? void 0 : h.call(c);
    if (d.value && (p == null ? void 0 : p.length) === 1) {
      const v = p[0];
      if ((v == null ? void 0 : v.type) === ci) {
        const b = v.children;
        return new RegExp("^\\p{Unified_Ideograph}{2}$", "u").test(b.trim());
      }
    }
    return !1;
  });
  return {
    _disabled: i,
    _size: s,
    _type: u,
    _ref: a,
    _props: l,
    shouldAddSpace: f,
    handleClick: (h) => {
      e.nativeType === "reset" && (o == null || o.resetFields()), t("click", h);
    }
  };
}, yh = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
], _h = ["button", "submit", "reset"], Er = eo({
  size: ro,
  disabled: Boolean,
  type: {
    type: String,
    values: yh,
    default: ""
  },
  icon: {
    type: mr
  },
  nativeType: {
    type: String,
    values: _h,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: mr,
    default: () => Li
  },
  plain: Boolean,
  text: Boolean,
  link: Boolean,
  bg: Boolean,
  autofocus: Boolean,
  round: Boolean,
  circle: Boolean,
  color: String,
  dark: Boolean,
  autoInsertSpace: {
    type: Boolean,
    default: void 0
  },
  tag: {
    type: Vn([String, Object]),
    default: "button"
  }
}), Nh = {
  click: (e) => e instanceof MouseEvent
};
function Y(e, t) {
  Eh(e) && (e = "100%");
  var n = Ch(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function Xt(e) {
  return Math.min(1, Math.max(0, e));
}
function Eh(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function Ch(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Ui(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function en(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function Ze(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function wh(e, t, n) {
  return {
    r: Y(e, 255) * 255,
    g: Y(t, 255) * 255,
    b: Y(n, 255) * 255
  };
}
function gs(e, t, n) {
  e = Y(e, 255), t = Y(t, 255), n = Y(n, 255);
  var r = Math.max(e, t, n), o = Math.min(e, t, n), s = 0, i = 0, a = (r + o) / 2;
  if (r === o)
    i = 0, s = 0;
  else {
    var c = r - o;
    switch (i = a > 0.5 ? c / (2 - r - o) : c / (r + o), r) {
      case e:
        s = (t - n) / c + (t < n ? 6 : 0);
        break;
      case t:
        s = (n - e) / c + 2;
        break;
      case n:
        s = (e - t) / c + 4;
        break;
    }
    s /= 6;
  }
  return { h: s, s: i, l: a };
}
function Qn(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Sh(e, t, n) {
  var r, o, s;
  if (e = Y(e, 360), t = Y(t, 100), n = Y(n, 100), t === 0)
    o = n, s = n, r = n;
  else {
    var i = n < 0.5 ? n * (1 + t) : n + t - n * t, a = 2 * n - i;
    r = Qn(a, i, e + 1 / 3), o = Qn(a, i, e), s = Qn(a, i, e - 1 / 3);
  }
  return { r: r * 255, g: o * 255, b: s * 255 };
}
function vs(e, t, n) {
  e = Y(e, 255), t = Y(t, 255), n = Y(n, 255);
  var r = Math.max(e, t, n), o = Math.min(e, t, n), s = 0, i = r, a = r - o, c = r === 0 ? 0 : a / r;
  if (r === o)
    s = 0;
  else {
    switch (r) {
      case e:
        s = (t - n) / a + (t < n ? 6 : 0);
        break;
      case t:
        s = (n - e) / a + 2;
        break;
      case n:
        s = (e - t) / a + 4;
        break;
    }
    s /= 6;
  }
  return { h: s, s: c, v: i };
}
function xh(e, t, n) {
  e = Y(e, 360) * 6, t = Y(t, 100), n = Y(n, 100);
  var r = Math.floor(e), o = e - r, s = n * (1 - t), i = n * (1 - o * t), a = n * (1 - (1 - o) * t), c = r % 6, u = [n, i, s, s, a, n][c], d = [a, n, n, i, s, s][c], l = [s, s, a, n, n, i][c];
  return { r: u * 255, g: d * 255, b: l * 255 };
}
function bs(e, t, n, r) {
  var o = [
    Ze(Math.round(e).toString(16)),
    Ze(Math.round(t).toString(16)),
    Ze(Math.round(n).toString(16))
  ];
  return r && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("");
}
function kh(e, t, n, r, o) {
  var s = [
    Ze(Math.round(e).toString(16)),
    Ze(Math.round(t).toString(16)),
    Ze(Math.round(n).toString(16)),
    Ze(Oh(r))
  ];
  return o && s[0].startsWith(s[0].charAt(1)) && s[1].startsWith(s[1].charAt(1)) && s[2].startsWith(s[2].charAt(1)) && s[3].startsWith(s[3].charAt(1)) ? s[0].charAt(0) + s[1].charAt(0) + s[2].charAt(0) + s[3].charAt(0) : s.join("");
}
function Oh(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function ms(e) {
  return ne(e) / 255;
}
function ne(e) {
  return parseInt(e, 16);
}
function Th(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var Cr = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function $h(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, r = null, o = null, s = null, i = !1, a = !1;
  return typeof e == "string" && (e = Ih(e)), typeof e == "object" && (_e(e.r) && _e(e.g) && _e(e.b) ? (t = wh(e.r, e.g, e.b), i = !0, a = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : _e(e.h) && _e(e.s) && _e(e.v) ? (r = en(e.s), o = en(e.v), t = xh(e.h, r, o), i = !0, a = "hsv") : _e(e.h) && _e(e.s) && _e(e.l) && (r = en(e.s), s = en(e.l), t = Sh(e.h, r, s), i = !0, a = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = Ui(n), {
    ok: i,
    format: e.format || a,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var Ah = "[-\\+]?\\d+%?", Dh = "[-\\+]?\\d*\\.\\d+%?", Re = "(?:".concat(Dh, ")|(?:").concat(Ah, ")"), Zn = "[\\s|\\(]+(".concat(Re, ")[,|\\s]+(").concat(Re, ")[,|\\s]+(").concat(Re, ")\\s*\\)?"), Xn = "[\\s|\\(]+(".concat(Re, ")[,|\\s]+(").concat(Re, ")[,|\\s]+(").concat(Re, ")[,|\\s]+(").concat(Re, ")\\s*\\)?"), le = {
  CSS_UNIT: new RegExp(Re),
  rgb: new RegExp("rgb" + Zn),
  rgba: new RegExp("rgba" + Xn),
  hsl: new RegExp("hsl" + Zn),
  hsla: new RegExp("hsla" + Xn),
  hsv: new RegExp("hsv" + Zn),
  hsva: new RegExp("hsva" + Xn),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function Ih(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (Cr[e])
    e = Cr[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = le.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = le.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = le.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = le.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = le.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = le.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = le.hex8.exec(e), n ? {
    r: ne(n[1]),
    g: ne(n[2]),
    b: ne(n[3]),
    a: ms(n[4]),
    format: t ? "name" : "hex8"
  } : (n = le.hex6.exec(e), n ? {
    r: ne(n[1]),
    g: ne(n[2]),
    b: ne(n[3]),
    format: t ? "name" : "hex"
  } : (n = le.hex4.exec(e), n ? {
    r: ne(n[1] + n[1]),
    g: ne(n[2] + n[2]),
    b: ne(n[3] + n[3]),
    a: ms(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = le.hex3.exec(e), n ? {
    r: ne(n[1] + n[1]),
    g: ne(n[2] + n[2]),
    b: ne(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function _e(e) {
  return !!le.CSS_UNIT.exec(String(e));
}
var Ph = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var r;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = Th(t)), this.originalInput = t;
      var o = $h(t);
      this.originalInput = t, this.r = o.r, this.g = o.g, this.b = o.b, this.a = o.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (r = n.format) !== null && r !== void 0 ? r : o.format, this.gradientType = n.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = o.ok;
    }
    return e.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, e.prototype.isLight = function() {
      return !this.isDark();
    }, e.prototype.getBrightness = function() {
      var t = this.toRgb();
      return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
    }, e.prototype.getLuminance = function() {
      var t = this.toRgb(), n, r, o, s = t.r / 255, i = t.g / 255, a = t.b / 255;
      return s <= 0.03928 ? n = s / 12.92 : n = Math.pow((s + 0.055) / 1.055, 2.4), i <= 0.03928 ? r = i / 12.92 : r = Math.pow((i + 0.055) / 1.055, 2.4), a <= 0.03928 ? o = a / 12.92 : o = Math.pow((a + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * r + 0.0722 * o;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = Ui(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = vs(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = vs(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), o = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(r, "%, ").concat(o, "%)") : "hsva(".concat(n, ", ").concat(r, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = gs(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = gs(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), o = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(r, "%, ").concat(o, "%)") : "hsla(".concat(n, ", ").concat(r, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), bs(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), kh(this.r, this.g, this.b, this.a, t);
    }, e.prototype.toHex8String = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex8(t);
    }, e.prototype.toHexShortString = function(t) {
      return t === void 0 && (t = !1), this.a === 1 ? this.toHexString(t) : this.toHex8String(t);
    }, e.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, e.prototype.toRgbString = function() {
      var t = Math.round(this.r), n = Math.round(this.g), r = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(t, ", ").concat(n, ", ").concat(r, ")") : "rgba(".concat(t, ", ").concat(n, ", ").concat(r, ", ").concat(this.roundA, ")");
    }, e.prototype.toPercentageRgb = function() {
      var t = function(n) {
        return "".concat(Math.round(Y(n, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round(Y(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + bs(this.r, this.g, this.b, !1), n = 0, r = Object.entries(Cr); n < r.length; n++) {
        var o = r[n], s = o[0], i = o[1];
        if (t === i)
          return s;
      }
      return !1;
    }, e.prototype.toString = function(t) {
      var n = !!t;
      t = t ?? this.format;
      var r = !1, o = this.a < 1 && this.a >= 0, s = !n && o && (t.startsWith("hex") || t === "name");
      return s ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (r = this.toRgbString()), t === "prgb" && (r = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (r = this.toHexString()), t === "hex3" && (r = this.toHexString(!0)), t === "hex4" && (r = this.toHex8String(!0)), t === "hex8" && (r = this.toHex8String()), t === "name" && (r = this.toName()), t === "hsl" && (r = this.toHslString()), t === "hsv" && (r = this.toHsvString()), r || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l += t / 100, n.l = Xt(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = Xt(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = Xt(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = Xt(n.s), new e(n);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(t) {
      var n = this.toHsl(), r = (n.h + t) % 360;
      return n.h = r < 0 ? 360 + r : r, new e(n);
    }, e.prototype.mix = function(t, n) {
      n === void 0 && (n = 50);
      var r = this.toRgb(), o = new e(t).toRgb(), s = n / 100, i = {
        r: (o.r - r.r) * s + r.r,
        g: (o.g - r.g) * s + r.g,
        b: (o.b - r.b) * s + r.b,
        a: (o.a - r.a) * s + r.a
      };
      return new e(i);
    }, e.prototype.analogous = function(t, n) {
      t === void 0 && (t = 6), n === void 0 && (n = 30);
      var r = this.toHsl(), o = 360 / n, s = [this];
      for (r.h = (r.h - (o * t >> 1) + 720) % 360; --t; )
        r.h = (r.h + o) % 360, s.push(new e(r));
      return s;
    }, e.prototype.complement = function() {
      var t = this.toHsl();
      return t.h = (t.h + 180) % 360, new e(t);
    }, e.prototype.monochromatic = function(t) {
      t === void 0 && (t = 6);
      for (var n = this.toHsv(), r = n.h, o = n.s, s = n.v, i = [], a = 1 / t; t--; )
        i.push(new e({ h: r, s: o, v: s })), s = (s + a) % 1;
      return i;
    }, e.prototype.splitcomplement = function() {
      var t = this.toHsl(), n = t.h;
      return [
        this,
        new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
        new e({ h: (n + 216) % 360, s: t.s, l: t.l })
      ];
    }, e.prototype.onBackground = function(t) {
      var n = this.toRgb(), r = new e(t).toRgb(), o = n.a + r.a * (1 - n.a);
      return new e({
        r: (n.r * n.a + r.r * r.a * (1 - n.a)) / o,
        g: (n.g * n.a + r.g * r.a * (1 - n.a)) / o,
        b: (n.b * n.a + r.b * r.a * (1 - n.a)) / o,
        a: o
      });
    }, e.prototype.triad = function() {
      return this.polyad(3);
    }, e.prototype.tetrad = function() {
      return this.polyad(4);
    }, e.prototype.polyad = function(t) {
      for (var n = this.toHsl(), r = n.h, o = [this], s = 360 / t, i = 1; i < t; i++)
        o.push(new e({ h: (r + i * s) % 360, s: n.s, l: n.l }));
      return o;
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString();
    }, e;
  }()
);
function $e(e, t = 20) {
  return e.mix("#141414", t).toString();
}
function Mh(e) {
  const t = io(), n = oe("button");
  return S(() => {
    let r = {};
    const o = e.color;
    if (o) {
      const s = new Ph(o), i = e.dark ? s.tint(20).toString() : $e(s, 20);
      if (e.plain)
        r = n.cssVarBlock({
          "bg-color": e.dark ? $e(s, 90) : s.tint(90).toString(),
          "text-color": o,
          "border-color": e.dark ? $e(s, 50) : s.tint(50).toString(),
          "hover-text-color": `var(${n.cssVarName("color-white")})`,
          "hover-bg-color": o,
          "hover-border-color": o,
          "active-bg-color": i,
          "active-text-color": `var(${n.cssVarName("color-white")})`,
          "active-border-color": i
        }), t.value && (r[n.cssVarBlockName("disabled-bg-color")] = e.dark ? $e(s, 90) : s.tint(90).toString(), r[n.cssVarBlockName("disabled-text-color")] = e.dark ? $e(s, 50) : s.tint(50).toString(), r[n.cssVarBlockName("disabled-border-color")] = e.dark ? $e(s, 80) : s.tint(80).toString());
      else {
        const a = e.dark ? $e(s, 30) : s.tint(30).toString(), c = s.isDark() ? `var(${n.cssVarName("color-white")})` : `var(${n.cssVarName("color-black")})`;
        if (r = n.cssVarBlock({
          "bg-color": o,
          "text-color": c,
          "border-color": o,
          "hover-bg-color": a,
          "hover-text-color": c,
          "hover-border-color": a,
          "active-bg-color": i,
          "active-border-color": i
        }), t.value) {
          const u = e.dark ? $e(s, 50) : s.tint(50).toString();
          r[n.cssVarBlockName("disabled-bg-color")] = u, r[n.cssVarBlockName("disabled-text-color")] = e.dark ? "rgba(255, 255, 255, 0.5)" : `var(${n.cssVarName("color-white")})`, r[n.cssVarBlockName("disabled-border-color")] = u;
        }
      }
    }
    return r;
  });
}
const Rh = /* @__PURE__ */ j({
  name: "ElButton"
}), Vh = /* @__PURE__ */ j({
  ...Rh,
  props: Er,
  emits: Nh,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = Mh(r), s = oe("button"), { _ref: i, _size: a, _type: c, _disabled: u, _props: d, shouldAddSpace: l, handleClick: f } = mh(r, n), g = S(() => [
      s.b(),
      s.m(c.value),
      s.m(a.value),
      s.is("disabled", u.value),
      s.is("loading", r.loading),
      s.is("plain", r.plain),
      s.is("round", r.round),
      s.is("circle", r.circle),
      s.is("text", r.text),
      s.is("link", r.link),
      s.is("has-bg", r.bg)
    ]);
    return t({
      ref: i,
      size: a,
      type: c,
      disabled: u,
      shouldAddSpace: l
    }), (h, p) => ($(), J(vt(h.tag), Dn({
      ref_key: "_ref",
      ref: i
    }, y(d), {
      class: y(g),
      style: y(o),
      onClick: y(f)
    }), {
      default: ve(() => [
        h.loading ? ($(), U(Ce, { key: 0 }, [
          h.$slots.loading ? ie(h.$slots, "loading", { key: 0 }) : ($(), J(y(_r), {
            key: 1,
            class: R(y(s).is("loading"))
          }, {
            default: ve(() => [
              ($(), J(vt(h.loadingIcon)))
            ]),
            _: 1
          }, 8, ["class"]))
        ], 64)) : h.icon || h.$slots.icon ? ($(), J(y(_r), { key: 1 }, {
          default: ve(() => [
            h.icon ? ($(), J(vt(h.icon), { key: 0 })) : ie(h.$slots, "icon", { key: 1 })
          ]),
          _: 3
        })) : ge("v-if", !0),
        h.$slots.default ? ($(), U("span", {
          key: 2,
          class: R({ [y(s).em("text", "expand")]: y(l) })
        }, [
          ie(h.$slots, "default")
        ], 2)) : ge("v-if", !0)
      ]),
      _: 3
    }, 16, ["class", "style", "onClick"]));
  }
});
var Lh = /* @__PURE__ */ ye(Vh, [["__file", "button.vue"]]);
const Kh = {
  size: Er.size,
  type: Er.type
}, Fh = /* @__PURE__ */ j({
  name: "ElButtonGroup"
}), Bh = /* @__PURE__ */ j({
  ...Fh,
  props: Kh,
  setup(e) {
    const t = e;
    lt(zi, $n({
      size: rr(t, "size"),
      type: rr(t, "type")
    }));
    const n = oe("button");
    return (r, o) => ($(), U("div", {
      class: R(`${y(n).b("group")}`)
    }, [
      ie(r.$slots, "default")
    ], 2));
  }
});
var Gi = /* @__PURE__ */ ye(Bh, [["__file", "button-group.vue"]]);
const Hh = to(Lh, {
  ButtonGroup: Gi
});
no(Gi);
const qi = {
  modelValue: {
    type: [Number, String, Boolean],
    default: void 0
  },
  label: {
    type: [String, Boolean, Number, Object],
    default: void 0
  },
  value: {
    type: [String, Boolean, Number, Object],
    default: void 0
  },
  indeterminate: Boolean,
  disabled: Boolean,
  checked: Boolean,
  name: {
    type: String,
    default: void 0
  },
  trueValue: {
    type: [String, Number],
    default: void 0
  },
  falseValue: {
    type: [String, Number],
    default: void 0
  },
  trueLabel: {
    type: [String, Number],
    default: void 0
  },
  falseLabel: {
    type: [String, Number],
    default: void 0
  },
  id: {
    type: String,
    default: void 0
  },
  controls: {
    type: String,
    default: void 0
  },
  border: Boolean,
  size: ro,
  tabindex: [String, Number],
  validateEvent: {
    type: Boolean,
    default: !0
  }
}, Wi = {
  [Ln]: (e) => G(e) || br(e) || vr(e),
  change: (e) => G(e) || br(e) || vr(e)
}, Ct = Symbol("checkboxGroupContextKey"), jh = ({
  model: e,
  isChecked: t
}) => {
  const n = H(Ct, void 0), r = S(() => {
    var s, i;
    const a = (s = n == null ? void 0 : n.max) == null ? void 0 : s.value, c = (i = n == null ? void 0 : n.min) == null ? void 0 : i.value;
    return !Cn(a) && e.value.length >= a && !t.value || !Cn(c) && e.value.length <= c && t.value;
  });
  return {
    isDisabled: io(S(() => (n == null ? void 0 : n.disabled.value) || r.value)),
    isLimitDisabled: r
  };
}, zh = (e, {
  model: t,
  isLimitExceeded: n,
  hasOwnLabel: r,
  isDisabled: o,
  isLabeledByFormItem: s
}) => {
  const i = H(Ct, void 0), { formItem: a } = Kn(), { emit: c } = pe();
  function u(h) {
    var p, v, b, m;
    return [!0, e.trueValue, e.trueLabel].includes(h) ? (v = (p = e.trueValue) != null ? p : e.trueLabel) != null ? v : !0 : (m = (b = e.falseValue) != null ? b : e.falseLabel) != null ? m : !1;
  }
  function d(h, p) {
    c("change", u(h), p);
  }
  function l(h) {
    if (n.value)
      return;
    const p = h.target;
    c("change", u(p.checked), h);
  }
  async function f(h) {
    n.value || !r.value && !o.value && s.value && (h.composedPath().some((b) => b.tagName === "LABEL") || (t.value = u([!1, e.falseValue, e.falseLabel].includes(t.value)), await Rt(), d(t.value, h)));
  }
  const g = S(() => (i == null ? void 0 : i.validateEvent) || e.validateEvent);
  return Z(() => e.modelValue, () => {
    g.value && (a == null || a.validate("change").catch((h) => Et(h)));
  }), {
    handleChange: l,
    onClickRoot: f
  };
}, Uh = (e) => {
  const t = F(!1), { emit: n } = pe(), r = H(Ct, void 0), o = S(() => Cn(r) === !1), s = F(!1), i = S({
    get() {
      var a, c;
      return o.value ? (a = r == null ? void 0 : r.modelValue) == null ? void 0 : a.value : (c = e.modelValue) != null ? c : t.value;
    },
    set(a) {
      var c, u;
      o.value && w(a) ? (s.value = ((c = r == null ? void 0 : r.max) == null ? void 0 : c.value) !== void 0 && a.length > (r == null ? void 0 : r.max.value) && a.length > i.value.length, s.value === !1 && ((u = r == null ? void 0 : r.changeEvent) == null || u.call(r, a))) : (n(Ln, a), t.value = a);
    }
  });
  return {
    model: i,
    isGroup: o,
    isLimitExceeded: s
  };
}, Gh = (e, t, { model: n }) => {
  const r = H(Ct, void 0), o = F(!1), s = S(() => wn(e.value) ? e.label : e.value), i = S(() => {
    const d = n.value;
    return vr(d) ? d : w(d) ? V(s.value) ? d.map(x).some((l) => Vf(l, s.value)) : d.map(x).includes(s.value) : d != null ? d === e.trueValue || d === e.trueLabel : !!d;
  }), a = Nr(S(() => {
    var d;
    return (d = r == null ? void 0 : r.size) == null ? void 0 : d.value;
  }), {
    prop: !0
  }), c = Nr(S(() => {
    var d;
    return (d = r == null ? void 0 : r.size) == null ? void 0 : d.value;
  })), u = S(() => !!t.default || !wn(s.value));
  return {
    checkboxButtonSize: a,
    isChecked: i,
    isFocused: o,
    checkboxSize: c,
    hasOwnLabel: u,
    actualValue: s
  };
}, Ji = (e, t) => {
  const { formItem: n } = Kn(), { model: r, isGroup: o, isLimitExceeded: s } = Uh(e), {
    isFocused: i,
    isChecked: a,
    checkboxButtonSize: c,
    checkboxSize: u,
    hasOwnLabel: d,
    actualValue: l
  } = Gh(e, t, { model: r }), { isDisabled: f } = jh({ model: r, isChecked: a }), { inputId: g, isLabeledByFormItem: h } = ji(e, {
    formItemContext: n,
    disableIdGeneration: d,
    disableIdManagement: o
  }), { handleChange: p, onClickRoot: v } = zh(e, {
    model: r,
    isLimitExceeded: s,
    hasOwnLabel: d,
    isDisabled: f,
    isLabeledByFormItem: h
  });
  return (() => {
    function m() {
      var M, k;
      w(r.value) && !r.value.includes(l.value) ? r.value.push(l.value) : r.value = (k = (M = e.trueValue) != null ? M : e.trueLabel) != null ? k : !0;
    }
    e.checked && m();
  })(), sn({
    from: "label act as value",
    replacement: "value",
    version: "3.0.0",
    scope: "el-checkbox",
    ref: "https://element-plus.org/en-US/component/checkbox.html"
  }, S(() => o.value && wn(e.value))), sn({
    from: "true-label",
    replacement: "true-value",
    version: "3.0.0",
    scope: "el-checkbox",
    ref: "https://element-plus.org/en-US/component/checkbox.html"
  }, S(() => !!e.trueLabel)), sn({
    from: "false-label",
    replacement: "false-value",
    version: "3.0.0",
    scope: "el-checkbox",
    ref: "https://element-plus.org/en-US/component/checkbox.html"
  }, S(() => !!e.falseLabel)), {
    inputId: g,
    isLabeledByFormItem: h,
    isChecked: a,
    isDisabled: f,
    isFocused: i,
    checkboxButtonSize: c,
    checkboxSize: u,
    hasOwnLabel: d,
    model: r,
    actualValue: l,
    handleChange: p,
    onClickRoot: v
  };
}, qh = ["id", "indeterminate", "name", "tabindex", "disabled", "true-value", "false-value"], Wh = ["id", "indeterminate", "disabled", "value", "name", "tabindex"], Jh = /* @__PURE__ */ j({
  name: "ElCheckbox"
}), Yh = /* @__PURE__ */ j({
  ...Jh,
  props: qi,
  emits: Wi,
  setup(e) {
    const t = e, n = Fr(), {
      inputId: r,
      isLabeledByFormItem: o,
      isChecked: s,
      isDisabled: i,
      isFocused: a,
      checkboxSize: c,
      hasOwnLabel: u,
      model: d,
      actualValue: l,
      handleChange: f,
      onClickRoot: g
    } = Ji(t, n), h = oe("checkbox"), p = S(() => [
      h.b(),
      h.m(c.value),
      h.is("disabled", i.value),
      h.is("bordered", t.border),
      h.is("checked", s.value)
    ]), v = S(() => [
      h.e("input"),
      h.is("disabled", i.value),
      h.is("checked", s.value),
      h.is("indeterminate", t.indeterminate),
      h.is("focus", a.value)
    ]);
    return (b, m) => ($(), J(vt(!y(u) && y(o) ? "span" : "label"), {
      class: R(y(p)),
      "aria-controls": b.indeterminate ? b.controls : null,
      onClick: y(g)
    }, {
      default: ve(() => {
        var M, k;
        return [
          be("span", {
            class: R(y(v))
          }, [
            b.trueValue || b.falseValue || b.trueLabel || b.falseLabel ? at(($(), U("input", {
              key: 0,
              id: y(r),
              "onUpdate:modelValue": m[0] || (m[0] = (C) => q(d) ? d.value = C : null),
              class: R(y(h).e("original")),
              type: "checkbox",
              indeterminate: b.indeterminate,
              name: b.name,
              tabindex: b.tabindex,
              disabled: y(i),
              "true-value": (M = b.trueValue) != null ? M : b.trueLabel,
              "false-value": (k = b.falseValue) != null ? k : b.falseLabel,
              onChange: m[1] || (m[1] = (...C) => y(f) && y(f)(...C)),
              onFocus: m[2] || (m[2] = (C) => a.value = !0),
              onBlur: m[3] || (m[3] = (C) => a.value = !1),
              onClick: m[4] || (m[4] = ce(() => {
              }, ["stop"]))
            }, null, 42, qh)), [
              [yn, y(d)]
            ]) : at(($(), U("input", {
              key: 1,
              id: y(r),
              "onUpdate:modelValue": m[5] || (m[5] = (C) => q(d) ? d.value = C : null),
              class: R(y(h).e("original")),
              type: "checkbox",
              indeterminate: b.indeterminate,
              disabled: y(i),
              value: y(l),
              name: b.name,
              tabindex: b.tabindex,
              onChange: m[6] || (m[6] = (...C) => y(f) && y(f)(...C)),
              onFocus: m[7] || (m[7] = (C) => a.value = !0),
              onBlur: m[8] || (m[8] = (C) => a.value = !1),
              onClick: m[9] || (m[9] = ce(() => {
              }, ["stop"]))
            }, null, 42, Wh)), [
              [yn, y(d)]
            ]),
            be("span", {
              class: R(y(h).e("inner"))
            }, null, 2)
          ], 2),
          y(u) ? ($(), U("span", {
            key: 0,
            class: R(y(h).e("label"))
          }, [
            ie(b.$slots, "default"),
            b.$slots.default ? ge("v-if", !0) : ($(), U(Ce, { key: 0 }, [
              Br(Or(b.label), 1)
            ], 64))
          ], 2)) : ge("v-if", !0)
        ];
      }),
      _: 3
    }, 8, ["class", "aria-controls", "onClick"]));
  }
});
var Qh = /* @__PURE__ */ ye(Yh, [["__file", "checkbox.vue"]]);
const Zh = ["name", "tabindex", "disabled", "true-value", "false-value"], Xh = ["name", "tabindex", "disabled", "value"], ep = /* @__PURE__ */ j({
  name: "ElCheckboxButton"
}), tp = /* @__PURE__ */ j({
  ...ep,
  props: qi,
  emits: Wi,
  setup(e) {
    const t = e, n = Fr(), {
      isFocused: r,
      isChecked: o,
      isDisabled: s,
      checkboxButtonSize: i,
      model: a,
      actualValue: c,
      handleChange: u
    } = Ji(t, n), d = H(Ct, void 0), l = oe("checkbox"), f = S(() => {
      var h, p, v, b;
      const m = (p = (h = d == null ? void 0 : d.fill) == null ? void 0 : h.value) != null ? p : "";
      return {
        backgroundColor: m,
        borderColor: m,
        color: (b = (v = d == null ? void 0 : d.textColor) == null ? void 0 : v.value) != null ? b : "",
        boxShadow: m ? `-1px 0 0 0 ${m}` : void 0
      };
    }), g = S(() => [
      l.b("button"),
      l.bm("button", i.value),
      l.is("disabled", s.value),
      l.is("checked", o.value),
      l.is("focus", r.value)
    ]);
    return (h, p) => {
      var v, b;
      return $(), U("label", {
        class: R(y(g))
      }, [
        h.trueValue || h.falseValue || h.trueLabel || h.falseLabel ? at(($(), U("input", {
          key: 0,
          "onUpdate:modelValue": p[0] || (p[0] = (m) => q(a) ? a.value = m : null),
          class: R(y(l).be("button", "original")),
          type: "checkbox",
          name: h.name,
          tabindex: h.tabindex,
          disabled: y(s),
          "true-value": (v = h.trueValue) != null ? v : h.trueLabel,
          "false-value": (b = h.falseValue) != null ? b : h.falseLabel,
          onChange: p[1] || (p[1] = (...m) => y(u) && y(u)(...m)),
          onFocus: p[2] || (p[2] = (m) => r.value = !0),
          onBlur: p[3] || (p[3] = (m) => r.value = !1),
          onClick: p[4] || (p[4] = ce(() => {
          }, ["stop"]))
        }, null, 42, Zh)), [
          [yn, y(a)]
        ]) : at(($(), U("input", {
          key: 1,
          "onUpdate:modelValue": p[5] || (p[5] = (m) => q(a) ? a.value = m : null),
          class: R(y(l).be("button", "original")),
          type: "checkbox",
          name: h.name,
          tabindex: h.tabindex,
          disabled: y(s),
          value: y(c),
          onChange: p[6] || (p[6] = (...m) => y(u) && y(u)(...m)),
          onFocus: p[7] || (p[7] = (m) => r.value = !0),
          onBlur: p[8] || (p[8] = (m) => r.value = !1),
          onClick: p[9] || (p[9] = ce(() => {
          }, ["stop"]))
        }, null, 42, Xh)), [
          [yn, y(a)]
        ]),
        h.$slots.default || h.label ? ($(), U("span", {
          key: 2,
          class: R(y(l).be("button", "inner")),
          style: _t(y(o) ? y(f) : void 0)
        }, [
          ie(h.$slots, "default", {}, () => [
            Br(Or(h.label), 1)
          ])
        ], 6)) : ge("v-if", !0)
      ], 2);
    };
  }
});
var Yi = /* @__PURE__ */ ye(tp, [["__file", "checkbox-button.vue"]]);
const np = eo({
  modelValue: {
    type: Vn(Array),
    default: () => []
  },
  disabled: Boolean,
  min: Number,
  max: Number,
  size: ro,
  label: String,
  fill: String,
  textColor: String,
  tag: {
    type: String,
    default: "div"
  },
  validateEvent: {
    type: Boolean,
    default: !0
  }
}), rp = {
  [Ln]: (e) => w(e),
  change: (e) => w(e)
}, op = /* @__PURE__ */ j({
  name: "ElCheckboxGroup"
}), sp = /* @__PURE__ */ j({
  ...op,
  props: np,
  emits: rp,
  setup(e, { emit: t }) {
    const n = e, r = oe("checkbox"), { formItem: o } = Kn(), { inputId: s, isLabeledByFormItem: i } = ji(n, {
      formItemContext: o
    }), a = async (u) => {
      t(Ln, u), await Rt(), t("change", u);
    }, c = S({
      get() {
        return n.modelValue;
      },
      set(u) {
        a(u);
      }
    });
    return lt(Ct, {
      ...Hf(zs(n), [
        "size",
        "min",
        "max",
        "disabled",
        "validateEvent",
        "fill",
        "textColor"
      ]),
      modelValue: c,
      changeEvent: a
    }), Z(() => n.modelValue, () => {
      n.validateEvent && (o == null || o.validate("change").catch((u) => Et(u)));
    }), (u, d) => {
      var l;
      return $(), J(vt(u.tag), {
        id: y(s),
        class: R(y(r).b("group")),
        role: "group",
        "aria-label": y(i) ? void 0 : u.label || "checkbox-group",
        "aria-labelledby": y(i) ? (l = y(o)) == null ? void 0 : l.labelId : void 0
      }, {
        default: ve(() => [
          ie(u.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "class", "aria-label", "aria-labelledby"]);
    };
  }
});
var Qi = /* @__PURE__ */ ye(sp, [["__file", "checkbox-group.vue"]]);
const ip = to(Qh, {
  CheckboxButton: Yi,
  CheckboxGroup: Qi
});
no(Yi);
no(Qi);
const ap = /* @__PURE__ */ j({
  name: "ElCollapseTransition"
}), lp = /* @__PURE__ */ j({
  ...ap,
  setup(e) {
    const t = oe("collapse-transition"), n = (o) => {
      o.style.maxHeight = "", o.style.overflow = o.dataset.oldOverflow, o.style.paddingTop = o.dataset.oldPaddingTop, o.style.paddingBottom = o.dataset.oldPaddingBottom;
    }, r = {
      beforeEnter(o) {
        o.dataset || (o.dataset = {}), o.dataset.oldPaddingTop = o.style.paddingTop, o.dataset.oldPaddingBottom = o.style.paddingBottom, o.style.height && (o.dataset.elExistsHeight = o.style.height), o.style.maxHeight = 0, o.style.paddingTop = 0, o.style.paddingBottom = 0;
      },
      enter(o) {
        requestAnimationFrame(() => {
          o.dataset.oldOverflow = o.style.overflow, o.dataset.elExistsHeight ? o.style.maxHeight = o.dataset.elExistsHeight : o.scrollHeight !== 0 ? o.style.maxHeight = `${o.scrollHeight}px` : o.style.maxHeight = 0, o.style.paddingTop = o.dataset.oldPaddingTop, o.style.paddingBottom = o.dataset.oldPaddingBottom, o.style.overflow = "hidden";
        });
      },
      afterEnter(o) {
        o.style.maxHeight = "", o.style.overflow = o.dataset.oldOverflow;
      },
      enterCancelled(o) {
        n(o);
      },
      beforeLeave(o) {
        o.dataset || (o.dataset = {}), o.dataset.oldPaddingTop = o.style.paddingTop, o.dataset.oldPaddingBottom = o.style.paddingBottom, o.dataset.oldOverflow = o.style.overflow, o.style.maxHeight = `${o.scrollHeight}px`, o.style.overflow = "hidden";
      },
      leave(o) {
        o.scrollHeight !== 0 && (o.style.maxHeight = 0, o.style.paddingTop = 0, o.style.paddingBottom = 0);
      },
      afterLeave(o) {
        n(o);
      },
      leaveCancelled(o) {
        n(o);
      }
    };
    return (o, s) => ($(), J(zr, Dn({
      name: y(t).b()
    }, El(r)), {
      default: ve(() => [
        ie(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["name"]));
  }
});
var an = /* @__PURE__ */ ye(lp, [["__file", "collapse-transition.vue"]]);
an.install = (e) => {
  e.component(an.name, an);
};
const cp = an, bt = "$treeNodeId", ys = function(e, t) {
  !t || t[bt] || Object.defineProperty(t, bt, {
    value: e.id,
    enumerable: !1,
    configurable: !1,
    writable: !1
  });
}, ao = function(e, t) {
  return e ? t[e] : t[bt];
}, wr = (e, t, n) => {
  const r = e.value.currentNode;
  n();
  const o = e.value.currentNode;
  r !== o && t("current-change", o ? o.data : null, o);
}, Sr = (e) => {
  let t = !0, n = !0, r = !0;
  for (let o = 0, s = e.length; o < s; o++) {
    const i = e[o];
    (i.checked !== !0 || i.indeterminate) && (t = !1, i.disabled || (r = !1)), (i.checked !== !1 || i.indeterminate) && (n = !1);
  }
  return { all: t, none: n, allWithoutDisable: r, half: !t && !n };
}, $t = function(e) {
  if (e.childNodes.length === 0 || e.loading)
    return;
  const { all: t, none: n, half: r } = Sr(e.childNodes);
  t ? (e.checked = !0, e.indeterminate = !1) : r ? (e.checked = !1, e.indeterminate = !0) : n && (e.checked = !1, e.indeterminate = !1);
  const o = e.parent;
  !o || o.level === 0 || e.store.checkStrictly || $t(o);
}, tn = function(e, t) {
  const n = e.store.props, r = e.data || {}, o = n[t];
  if (typeof o == "function")
    return o(r, e);
  if (typeof o == "string")
    return r[o];
  if (typeof o > "u") {
    const s = r[t];
    return s === void 0 ? "" : s;
  }
};
let up = 0;
class it {
  constructor(t) {
    this.id = up++, this.text = null, this.checked = !1, this.indeterminate = !1, this.data = null, this.expanded = !1, this.parent = null, this.visible = !0, this.isCurrent = !1, this.canFocus = !1;
    for (const n in t)
      L(t, n) && (this[n] = t[n]);
    this.level = 0, this.loaded = !1, this.childNodes = [], this.loading = !1, this.parent && (this.level = this.parent.level + 1);
  }
  initialize() {
    const t = this.store;
    if (!t)
      throw new Error("[Node]store is required!");
    t.registerNode(this);
    const n = t.props;
    if (n && typeof n.isLeaf < "u") {
      const s = tn(this, "isLeaf");
      typeof s == "boolean" && (this.isLeafByUser = s);
    }
    if (t.lazy !== !0 && this.data ? (this.setData(this.data), t.defaultExpandAll && (this.expanded = !0, this.canFocus = !0)) : this.level > 0 && t.lazy && t.defaultExpandAll && this.expand(), Array.isArray(this.data) || ys(this, this.data), !this.data)
      return;
    const r = t.defaultExpandedKeys, o = t.key;
    o && r && r.includes(this.key) && this.expand(null, t.autoExpandParent), o && t.currentNodeKey !== void 0 && this.key === t.currentNodeKey && (t.currentNode = this, t.currentNode.isCurrent = !0), t.lazy && t._initDefaultCheckedNode(this), this.updateLeafState(), this.parent && (this.level === 1 || this.parent.expanded === !0) && (this.canFocus = !0);
  }
  setData(t) {
    Array.isArray(t) || ys(this, t), this.data = t, this.childNodes = [];
    let n;
    this.level === 0 && Array.isArray(this.data) ? n = this.data : n = tn(this, "children") || [];
    for (let r = 0, o = n.length; r < o; r++)
      this.insertChild({ data: n[r] });
  }
  get label() {
    return tn(this, "label");
  }
  get key() {
    const t = this.store.key;
    return this.data ? this.data[t] : null;
  }
  get disabled() {
    return tn(this, "disabled");
  }
  get nextSibling() {
    const t = this.parent;
    if (t) {
      const n = t.childNodes.indexOf(this);
      if (n > -1)
        return t.childNodes[n + 1];
    }
    return null;
  }
  get previousSibling() {
    const t = this.parent;
    if (t) {
      const n = t.childNodes.indexOf(this);
      if (n > -1)
        return n > 0 ? t.childNodes[n - 1] : null;
    }
    return null;
  }
  contains(t, n = !0) {
    return (this.childNodes || []).some((r) => r === t || n && r.contains(t));
  }
  remove() {
    const t = this.parent;
    t && t.removeChild(this);
  }
  insertChild(t, n, r) {
    if (!t)
      throw new Error("InsertChild error: child is required.");
    if (!(t instanceof it)) {
      if (!r) {
        const o = this.getChildren(!0);
        o.includes(t.data) || (typeof n > "u" || n < 0 ? o.push(t.data) : o.splice(n, 0, t.data));
      }
      Object.assign(t, {
        parent: this,
        store: this.store
      }), t = $n(new it(t)), t instanceof it && t.initialize();
    }
    t.level = this.level + 1, typeof n > "u" || n < 0 ? this.childNodes.push(t) : this.childNodes.splice(n, 0, t), this.updateLeafState();
  }
  insertBefore(t, n) {
    let r;
    n && (r = this.childNodes.indexOf(n)), this.insertChild(t, r);
  }
  insertAfter(t, n) {
    let r;
    n && (r = this.childNodes.indexOf(n), r !== -1 && (r += 1)), this.insertChild(t, r);
  }
  removeChild(t) {
    const n = this.getChildren() || [], r = n.indexOf(t.data);
    r > -1 && n.splice(r, 1);
    const o = this.childNodes.indexOf(t);
    o > -1 && (this.store && this.store.deregisterNode(t), t.parent = null, this.childNodes.splice(o, 1)), this.updateLeafState();
  }
  removeChildByData(t) {
    let n = null;
    for (let r = 0; r < this.childNodes.length; r++)
      if (this.childNodes[r].data === t) {
        n = this.childNodes[r];
        break;
      }
    n && this.removeChild(n);
  }
  expand(t, n) {
    const r = () => {
      if (n) {
        let o = this.parent;
        for (; o.level > 0; )
          o.expanded = !0, o = o.parent;
      }
      this.expanded = !0, t && t(), this.childNodes.forEach((o) => {
        o.canFocus = !0;
      });
    };
    this.shouldLoadData() ? this.loadData((o) => {
      Array.isArray(o) && (this.checked ? this.setChecked(!0, !0) : this.store.checkStrictly || $t(this), r());
    }) : r();
  }
  doCreateChildren(t, n = {}) {
    t.forEach((r) => {
      this.insertChild(Object.assign({ data: r }, n), void 0, !0);
    });
  }
  collapse() {
    this.expanded = !1, this.childNodes.forEach((t) => {
      t.canFocus = !1;
    });
  }
  shouldLoadData() {
    return this.store.lazy === !0 && this.store.load && !this.loaded;
  }
  updateLeafState() {
    if (this.store.lazy === !0 && this.loaded !== !0 && typeof this.isLeafByUser < "u") {
      this.isLeaf = this.isLeafByUser;
      return;
    }
    const t = this.childNodes;
    if (!this.store.lazy || this.store.lazy === !0 && this.loaded === !0) {
      this.isLeaf = !t || t.length === 0;
      return;
    }
    this.isLeaf = !1;
  }
  setChecked(t, n, r, o) {
    if (this.indeterminate = t === "half", this.checked = t === !0, this.store.checkStrictly)
      return;
    if (!(this.shouldLoadData() && !this.store.checkDescendants)) {
      const { all: i, allWithoutDisable: a } = Sr(this.childNodes);
      !this.isLeaf && !i && a && (this.checked = !1, t = !1);
      const c = () => {
        if (n) {
          const u = this.childNodes;
          for (let f = 0, g = u.length; f < g; f++) {
            const h = u[f];
            o = o || t !== !1;
            const p = h.disabled ? h.checked : o;
            h.setChecked(p, n, !0, o);
          }
          const { half: d, all: l } = Sr(u);
          l || (this.checked = l, this.indeterminate = d);
        }
      };
      if (this.shouldLoadData()) {
        this.loadData(() => {
          c(), $t(this);
        }, {
          checked: t !== !1
        });
        return;
      } else
        c();
    }
    const s = this.parent;
    !s || s.level === 0 || r || $t(s);
  }
  getChildren(t = !1) {
    if (this.level === 0)
      return this.data;
    const n = this.data;
    if (!n)
      return null;
    const r = this.store.props;
    let o = "children";
    return r && (o = r.children || "children"), n[o] === void 0 && (n[o] = null), t && !n[o] && (n[o] = []), n[o];
  }
  updateChildren() {
    const t = this.getChildren() || [], n = this.childNodes.map((s) => s.data), r = {}, o = [];
    t.forEach((s, i) => {
      const a = s[bt];
      !!a && n.findIndex((u) => u[bt] === a) >= 0 ? r[a] = { index: i, data: s } : o.push({ index: i, data: s });
    }), this.store.lazy || n.forEach((s) => {
      r[s[bt]] || this.removeChildByData(s);
    }), o.forEach(({ index: s, data: i }) => {
      this.insertChild({ data: i }, s);
    }), this.updateLeafState();
  }
  loadData(t, n = {}) {
    if (this.store.lazy === !0 && this.store.load && !this.loaded && (!this.loading || Object.keys(n).length)) {
      this.loading = !0;
      const r = (s) => {
        this.childNodes = [], this.doCreateChildren(s, n), this.loaded = !0, this.loading = !1, this.updateLeafState(), t && t.call(this, s);
      }, o = () => {
        this.loading = !1;
      };
      this.store.load(this, r, o);
    } else
      t && t.call(this);
  }
  eachNode(t) {
    const n = [this];
    for (; n.length; ) {
      const r = n.shift();
      n.unshift(...r.childNodes), t(r);
    }
  }
  reInitChecked() {
    this.store.checkStrictly || $t(this);
  }
}
class dp {
  constructor(t) {
    this.currentNode = null, this.currentNodeKey = null;
    for (const n in t)
      L(t, n) && (this[n] = t[n]);
    this.nodesMap = {};
  }
  initialize() {
    if (this.root = new it({
      data: this.data,
      store: this
    }), this.root.initialize(), this.lazy && this.load) {
      const t = this.load;
      t(this.root, (n) => {
        this.root.doCreateChildren(n), this._initDefaultCheckedNodes();
      });
    } else
      this._initDefaultCheckedNodes();
  }
  filter(t) {
    const n = this.filterNodeMethod, r = this.lazy, o = function(s) {
      const i = s.root ? s.root.childNodes : s.childNodes;
      if (i.forEach((a) => {
        a.visible = n.call(a, t, a.data, a), o(a);
      }), !s.visible && i.length) {
        let a = !0;
        a = !i.some((c) => c.visible), s.root ? s.root.visible = a === !1 : s.visible = a === !1;
      }
      t && s.visible && !s.isLeaf && (!r || s.loaded) && s.expand();
    };
    o(this);
  }
  setData(t) {
    t !== this.root.data ? (this.root.setData(t), this._initDefaultCheckedNodes()) : this.root.updateChildren();
  }
  getNode(t) {
    if (t instanceof it)
      return t;
    const n = V(t) ? ao(this.key, t) : t;
    return this.nodesMap[n] || null;
  }
  insertBefore(t, n) {
    const r = this.getNode(n);
    r.parent.insertBefore({ data: t }, r);
  }
  insertAfter(t, n) {
    const r = this.getNode(n);
    r.parent.insertAfter({ data: t }, r);
  }
  remove(t) {
    const n = this.getNode(t);
    n && n.parent && (n === this.currentNode && (this.currentNode = null), n.parent.removeChild(n));
  }
  append(t, n) {
    const r = wn(n) ? this.root : this.getNode(n);
    r && r.insertChild({ data: t });
  }
  _initDefaultCheckedNodes() {
    const t = this.defaultCheckedKeys || [], n = this.nodesMap;
    t.forEach((r) => {
      const o = n[r];
      o && o.setChecked(!0, !this.checkStrictly);
    });
  }
  _initDefaultCheckedNode(t) {
    (this.defaultCheckedKeys || []).includes(t.key) && t.setChecked(!0, !this.checkStrictly);
  }
  setDefaultCheckedKey(t) {
    t !== this.defaultCheckedKeys && (this.defaultCheckedKeys = t, this._initDefaultCheckedNodes());
  }
  registerNode(t) {
    const n = this.key;
    !t || !t.data || (n ? t.key !== void 0 && (this.nodesMap[t.key] = t) : this.nodesMap[t.id] = t);
  }
  deregisterNode(t) {
    !this.key || !t || !t.data || (t.childNodes.forEach((r) => {
      this.deregisterNode(r);
    }), delete this.nodesMap[t.key]);
  }
  getCheckedNodes(t = !1, n = !1) {
    const r = [], o = function(s) {
      (s.root ? s.root.childNodes : s.childNodes).forEach((a) => {
        (a.checked || n && a.indeterminate) && (!t || t && a.isLeaf) && r.push(a.data), o(a);
      });
    };
    return o(this), r;
  }
  getCheckedKeys(t = !1) {
    return this.getCheckedNodes(t).map((n) => (n || {})[this.key]);
  }
  getHalfCheckedNodes() {
    const t = [], n = function(r) {
      (r.root ? r.root.childNodes : r.childNodes).forEach((s) => {
        s.indeterminate && t.push(s.data), n(s);
      });
    };
    return n(this), t;
  }
  getHalfCheckedKeys() {
    return this.getHalfCheckedNodes().map((t) => (t || {})[this.key]);
  }
  _getAllNodes() {
    const t = [], n = this.nodesMap;
    for (const r in n)
      L(n, r) && t.push(n[r]);
    return t;
  }
  updateChildren(t, n) {
    const r = this.nodesMap[t];
    if (!r)
      return;
    const o = r.childNodes;
    for (let s = o.length - 1; s >= 0; s--) {
      const i = o[s];
      this.remove(i.data);
    }
    for (let s = 0, i = n.length; s < i; s++) {
      const a = n[s];
      this.append(a, r.data);
    }
  }
  _setCheckedKeys(t, n = !1, r) {
    const o = this._getAllNodes().sort((c, u) => c.level - u.level), s = /* @__PURE__ */ Object.create(null), i = Object.keys(r);
    o.forEach((c) => c.setChecked(!1, !1));
    const a = (c) => {
      c.childNodes.forEach((u) => {
        var d;
        s[u.data[t]] = !0, (d = u.childNodes) != null && d.length && a(u);
      });
    };
    for (let c = 0, u = o.length; c < u; c++) {
      const d = o[c], l = d.data[t].toString();
      if (!i.includes(l)) {
        d.checked && !s[l] && d.setChecked(!1, !1);
        continue;
      }
      if (d.childNodes.length && a(d), d.isLeaf || this.checkStrictly) {
        d.setChecked(!0, !1);
        continue;
      }
      if (d.setChecked(!0, !0), n) {
        d.setChecked(!1, !1);
        const g = function(h) {
          h.childNodes.forEach((v) => {
            v.isLeaf || v.setChecked(!1, !1), g(v);
          });
        };
        g(d);
      }
    }
  }
  setCheckedNodes(t, n = !1) {
    const r = this.key, o = {};
    t.forEach((s) => {
      o[(s || {})[r]] = !0;
    }), this._setCheckedKeys(r, n, o);
  }
  setCheckedKeys(t, n = !1) {
    this.defaultCheckedKeys = t;
    const r = this.key, o = {};
    t.forEach((s) => {
      o[s] = !0;
    }), this._setCheckedKeys(r, n, o);
  }
  setDefaultExpandedKeys(t) {
    t = t || [], this.defaultExpandedKeys = t, t.forEach((n) => {
      const r = this.getNode(n);
      r && r.expand(null, this.autoExpandParent);
    });
  }
  setChecked(t, n, r) {
    const o = this.getNode(t);
    o && o.setChecked(!!n, r);
  }
  getCurrentNode() {
    return this.currentNode;
  }
  setCurrentNode(t) {
    const n = this.currentNode;
    n && (n.isCurrent = !1), this.currentNode = t, this.currentNode.isCurrent = !0;
  }
  setUserCurrentNode(t, n = !0) {
    const r = t[this.key], o = this.nodesMap[r];
    this.setCurrentNode(o), n && this.currentNode.level > 1 && this.currentNode.parent.expand(null, !0);
  }
  setCurrentNodeKey(t, n = !0) {
    if (t == null) {
      this.currentNode && (this.currentNode.isCurrent = !1), this.currentNode = null;
      return;
    }
    const r = this.getNode(t);
    r && (this.setCurrentNode(r), n && this.currentNode.level > 1 && this.currentNode.parent.expand(null, !0));
  }
}
const fp = /* @__PURE__ */ j({
  name: "ElTreeNodeContent",
  props: {
    node: {
      type: Object,
      required: !0
    },
    renderContent: Function
  },
  setup(e) {
    const t = oe("tree"), n = H("NodeInstance"), r = H("RootTree");
    return () => {
      const o = e.node, { data: s, store: i } = o;
      return e.renderContent ? e.renderContent(ur, { _self: n, node: o, data: s, store: i }) : ie(r.ctx.slots, "default", { node: o, data: s }, () => [
        ur("span", { class: t.be("node", "label") }, [o.label])
      ]);
    };
  }
});
var hp = /* @__PURE__ */ ye(fp, [["__file", "tree-node-content.vue"]]);
function Zi(e) {
  const t = H("TreeNodeMap", null), n = {
    treeNodeExpand: (r) => {
      e.node !== r && e.node.collapse();
    },
    children: []
  };
  return t && t.children.push(n), lt("TreeNodeMap", n), {
    broadcastExpanded: (r) => {
      if (e.accordion)
        for (const o of n.children)
          o.treeNodeExpand(r);
    }
  };
}
const Xi = Symbol("dragEvents");
function pp({ props: e, ctx: t, el$: n, dropIndicator$: r, store: o }) {
  const s = oe("tree"), i = F({
    showDropIndicator: !1,
    draggingNode: null,
    dropNode: null,
    allowDrop: !0,
    dropType: null
  });
  return lt(Xi, {
    treeNodeDragStart: ({ event: d, treeNode: l }) => {
      if (typeof e.allowDrag == "function" && !e.allowDrag(l.node))
        return d.preventDefault(), !1;
      d.dataTransfer.effectAllowed = "move";
      try {
        d.dataTransfer.setData("text/plain", "");
      } catch {
      }
      i.value.draggingNode = l, t.emit("node-drag-start", l.node, d);
    },
    treeNodeDragOver: ({ event: d, treeNode: l }) => {
      const f = l, g = i.value.dropNode;
      g && g.node.id !== f.node.id && Jn(g.$el, s.is("drop-inner"));
      const h = i.value.draggingNode;
      if (!h || !f)
        return;
      let p = !0, v = !0, b = !0, m = !0;
      typeof e.allowDrop == "function" && (p = e.allowDrop(h.node, f.node, "prev"), m = v = e.allowDrop(h.node, f.node, "inner"), b = e.allowDrop(h.node, f.node, "next")), d.dataTransfer.dropEffect = v || p || b ? "move" : "none", (p || v || b) && (g == null ? void 0 : g.node.id) !== f.node.id && (g && t.emit("node-drag-leave", h.node, g.node, d), t.emit("node-drag-enter", h.node, f.node, d)), p || v || b ? i.value.dropNode = f : i.value.dropNode = null, f.node.nextSibling === h.node && (b = !1), f.node.previousSibling === h.node && (p = !1), f.node.contains(h.node, !1) && (v = !1), (h.node === f.node || h.node.contains(f.node)) && (p = !1, v = !1, b = !1);
      const M = f.$el.querySelector(`.${s.be("node", "content")}`).getBoundingClientRect(), k = n.value.getBoundingClientRect();
      let C;
      const O = p ? v ? 0.25 : b ? 0.45 : 1 : -1, ee = b ? v ? 0.75 : p ? 0.55 : 0 : 1;
      let T = -9999;
      const _ = d.clientY - M.top;
      _ < M.height * O ? C = "before" : _ > M.height * ee ? C = "after" : v ? C = "inner" : C = "none";
      const D = f.$el.querySelector(`.${s.be("node", "expand-icon")}`).getBoundingClientRect(), I = r.value;
      C === "before" ? T = D.top - k.top : C === "after" && (T = D.bottom - k.top), I.style.top = `${T}px`, I.style.left = `${D.right - k.left}px`, C === "inner" ? Gf(f.$el, s.is("drop-inner")) : Jn(f.$el, s.is("drop-inner")), i.value.showDropIndicator = C === "before" || C === "after", i.value.allowDrop = i.value.showDropIndicator || m, i.value.dropType = C, t.emit("node-drag-over", h.node, f.node, d);
    },
    treeNodeDragEnd: (d) => {
      const { draggingNode: l, dropType: f, dropNode: g } = i.value;
      if (d.preventDefault(), d.dataTransfer.dropEffect = "move", l && g) {
        const h = { data: l.node.data };
        f !== "none" && l.node.remove(), f === "before" ? g.node.parent.insertBefore(h, g.node) : f === "after" ? g.node.parent.insertAfter(h, g.node) : f === "inner" && g.node.insertChild(h), f !== "none" && (o.value.registerNode(h), o.value.key && l.node.eachNode((p) => {
          var v;
          (v = o.value.nodesMap[p.data[o.value.key]]) == null || v.setChecked(p.checked, !o.value.checkStrictly);
        })), Jn(g.$el, s.is("drop-inner")), t.emit("node-drag-end", l.node, g.node, f, d), f !== "none" && t.emit("node-drop", l.node, g.node, f, d);
      }
      l && !g && t.emit("node-drag-end", l.node, null, f, d), i.value.showDropIndicator = !1, i.value.draggingNode = null, i.value.dropNode = null, i.value.allowDrop = !0;
    }
  }), {
    dragState: i
  };
}
const gp = /* @__PURE__ */ j({
  name: "ElTreeNode",
  components: {
    ElCollapseTransition: cp,
    ElCheckbox: ip,
    NodeContent: hp,
    ElIcon: _r,
    Loading: Li
  },
  props: {
    node: {
      type: it,
      default: () => ({})
    },
    props: {
      type: Object,
      default: () => ({})
    },
    accordion: Boolean,
    renderContent: Function,
    renderAfterExpand: Boolean,
    showCheckbox: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["node-expand"],
  setup(e, t) {
    const n = oe("tree"), { broadcastExpanded: r } = Zi(e), o = H("RootTree"), s = F(!1), i = F(!1), a = F(null), c = F(null), u = F(null), d = H(Xi), l = pe();
    lt("NodeInstance", l), o || Et("Tree", "Can not find node's tree."), e.node.expanded && (s.value = !0, i.value = !0);
    const f = o.props.props.children || "children";
    Z(() => {
      const _ = e.node.data[f];
      return _ && [..._];
    }, () => {
      e.node.updateChildren();
    }), Z(() => e.node.indeterminate, (_) => {
      p(e.node.checked, _);
    }), Z(() => e.node.checked, (_) => {
      p(_, e.node.indeterminate);
    }), Z(() => e.node.childNodes.length, () => e.node.reInitChecked()), Z(() => e.node.expanded, (_) => {
      Rt(() => s.value = _), _ && (i.value = !0);
    });
    const g = (_) => ao(o.props.nodeKey, _.data), h = (_) => {
      const D = e.props.class;
      if (!D)
        return {};
      let I;
      if (B(D)) {
        const { data: N } = _;
        I = D(N, _);
      } else
        I = D;
      return G(I) ? { [I]: !0 } : I;
    }, p = (_, D) => {
      (a.value !== _ || c.value !== D) && o.ctx.emit("check-change", e.node.data, _, D), a.value = _, c.value = D;
    }, v = (_) => {
      wr(o.store, o.ctx.emit, () => o.store.value.setCurrentNode(e.node)), o.currentNode.value = e.node, o.props.expandOnClickNode && m(), o.props.checkOnClickNode && !e.node.disabled && M(null, {
        target: { checked: !e.node.checked }
      }), o.ctx.emit("node-click", e.node.data, e.node, l, _);
    }, b = (_) => {
      o.instance.vnode.props.onNodeContextmenu && (_.stopPropagation(), _.preventDefault()), o.ctx.emit("node-contextmenu", _, e.node.data, e.node, l);
    }, m = () => {
      e.node.isLeaf || (s.value ? (o.ctx.emit("node-collapse", e.node.data, e.node, l), e.node.collapse()) : (e.node.expand(), t.emit("node-expand", e.node.data, e.node, l)));
    }, M = (_, D) => {
      e.node.setChecked(D.target.checked, !o.props.checkStrictly), Rt(() => {
        const I = o.store.value;
        o.ctx.emit("check", e.node.data, {
          checkedNodes: I.getCheckedNodes(),
          checkedKeys: I.getCheckedKeys(),
          halfCheckedNodes: I.getHalfCheckedNodes(),
          halfCheckedKeys: I.getHalfCheckedKeys()
        });
      });
    };
    return {
      ns: n,
      node$: u,
      tree: o,
      expanded: s,
      childNodeRendered: i,
      oldChecked: a,
      oldIndeterminate: c,
      getNodeKey: g,
      getNodeClass: h,
      handleSelectChange: p,
      handleClick: v,
      handleContextMenu: b,
      handleExpandIconClick: m,
      handleCheckChange: M,
      handleChildNodeExpand: (_, D, I) => {
        r(D), o.ctx.emit("node-expand", _, D, I);
      },
      handleDragStart: (_) => {
        o.props.draggable && d.treeNodeDragStart({ event: _, treeNode: e });
      },
      handleDragOver: (_) => {
        _.preventDefault(), o.props.draggable && d.treeNodeDragOver({
          event: _,
          treeNode: { $el: u.value, node: e.node }
        });
      },
      handleDrop: (_) => {
        _.preventDefault();
      },
      handleDragEnd: (_) => {
        o.props.draggable && d.treeNodeDragEnd(_);
      },
      CaretRight: Jf
    };
  }
}), vp = ["aria-expanded", "aria-disabled", "aria-checked", "draggable", "data-key"], bp = ["aria-expanded"];
function mp(e, t, n, r, o, s) {
  const i = Je("el-icon"), a = Je("el-checkbox"), c = Je("loading"), u = Je("node-content"), d = Je("el-tree-node"), l = Je("el-collapse-transition");
  return at(($(), U("div", {
    ref: "node$",
    class: R([
      e.ns.b("node"),
      e.ns.is("expanded", e.expanded),
      e.ns.is("current", e.node.isCurrent),
      e.ns.is("hidden", !e.node.visible),
      e.ns.is("focusable", !e.node.disabled),
      e.ns.is("checked", !e.node.disabled && e.node.checked),
      e.getNodeClass(e.node)
    ]),
    role: "treeitem",
    tabindex: "-1",
    "aria-expanded": e.expanded,
    "aria-disabled": e.node.disabled,
    "aria-checked": e.node.checked,
    draggable: e.tree.props.draggable,
    "data-key": e.getNodeKey(e.node),
    onClick: t[1] || (t[1] = ce((...f) => e.handleClick && e.handleClick(...f), ["stop"])),
    onContextmenu: t[2] || (t[2] = (...f) => e.handleContextMenu && e.handleContextMenu(...f)),
    onDragstart: t[3] || (t[3] = ce((...f) => e.handleDragStart && e.handleDragStart(...f), ["stop"])),
    onDragover: t[4] || (t[4] = ce((...f) => e.handleDragOver && e.handleDragOver(...f), ["stop"])),
    onDragend: t[5] || (t[5] = ce((...f) => e.handleDragEnd && e.handleDragEnd(...f), ["stop"])),
    onDrop: t[6] || (t[6] = ce((...f) => e.handleDrop && e.handleDrop(...f), ["stop"]))
  }, [
    be("div", {
      class: R(e.ns.be("node", "content")),
      style: _t({ paddingLeft: (e.node.level - 1) * e.tree.props.indent + "px" })
    }, [
      e.tree.props.icon || e.CaretRight ? ($(), J(i, {
        key: 0,
        class: R([
          e.ns.be("node", "expand-icon"),
          e.ns.is("leaf", e.node.isLeaf),
          {
            expanded: !e.node.isLeaf && e.expanded
          }
        ]),
        onClick: ce(e.handleExpandIconClick, ["stop"])
      }, {
        default: ve(() => [
          ($(), J(vt(e.tree.props.icon || e.CaretRight)))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : ge("v-if", !0),
      e.showCheckbox ? ($(), J(a, {
        key: 1,
        "model-value": e.node.checked,
        indeterminate: e.node.indeterminate,
        disabled: !!e.node.disabled,
        onClick: t[0] || (t[0] = ce(() => {
        }, ["stop"])),
        onChange: e.handleCheckChange
      }, null, 8, ["model-value", "indeterminate", "disabled", "onChange"])) : ge("v-if", !0),
      e.node.loading ? ($(), J(i, {
        key: 2,
        class: R([e.ns.be("node", "loading-icon"), e.ns.is("loading")])
      }, {
        default: ve(() => [
          he(c)
        ]),
        _: 1
      }, 8, ["class"])) : ge("v-if", !0),
      he(u, {
        node: e.node,
        "render-content": e.renderContent
      }, null, 8, ["node", "render-content"])
    ], 6),
    he(l, null, {
      default: ve(() => [
        !e.renderAfterExpand || e.childNodeRendered ? at(($(), U("div", {
          key: 0,
          class: R(e.ns.be("node", "children")),
          role: "group",
          "aria-expanded": e.expanded
        }, [
          ($(!0), U(Ce, null, ai(e.node.childNodes, (f) => ($(), J(d, {
            key: e.getNodeKey(f),
            "render-content": e.renderContent,
            "render-after-expand": e.renderAfterExpand,
            "show-checkbox": e.showCheckbox,
            node: f,
            accordion: e.accordion,
            props: e.props,
            onNodeExpand: e.handleChildNodeExpand
          }, null, 8, ["render-content", "render-after-expand", "show-checkbox", "node", "accordion", "props", "onNodeExpand"]))), 128))
        ], 10, bp)), [
          [mn, e.expanded]
        ]) : ge("v-if", !0)
      ]),
      _: 1
    })
  ], 42, vp)), [
    [mn, e.node.visible]
  ]);
}
var yp = /* @__PURE__ */ ye(gp, [["render", mp], ["__file", "tree-node.vue"]]);
function _p({ el$: e }, t) {
  const n = oe("tree"), r = mo([]), o = mo([]);
  Kr(() => {
    i();
  }), yl(() => {
    r.value = Array.from(e.value.querySelectorAll("[role=treeitem]")), o.value = Array.from(e.value.querySelectorAll("input[type=checkbox]"));
  }), Z(o, (a) => {
    a.forEach((c) => {
      c.setAttribute("tabindex", "-1");
    });
  }), ac(e, "keydown", (a) => {
    const c = a.target;
    if (!c.className.includes(n.b("node")))
      return;
    const u = a.code;
    r.value = Array.from(e.value.querySelectorAll(`.${n.is("focusable")}[role=treeitem]`));
    const d = r.value.indexOf(c);
    let l;
    if ([qe.up, qe.down].includes(u)) {
      if (a.preventDefault(), u === qe.up) {
        l = d === -1 ? 0 : d !== 0 ? d - 1 : r.value.length - 1;
        const g = l;
        for (; !t.value.getNode(r.value[l].dataset.key).canFocus; ) {
          if (l--, l === g) {
            l = -1;
            break;
          }
          l < 0 && (l = r.value.length - 1);
        }
      } else {
        l = d === -1 ? 0 : d < r.value.length - 1 ? d + 1 : 0;
        const g = l;
        for (; !t.value.getNode(r.value[l].dataset.key).canFocus; ) {
          if (l++, l === g) {
            l = -1;
            break;
          }
          l >= r.value.length && (l = 0);
        }
      }
      l !== -1 && r.value[l].focus();
    }
    [qe.left, qe.right].includes(u) && (a.preventDefault(), c.click());
    const f = c.querySelector('[type="checkbox"]');
    [qe.enter, qe.space].includes(u) && f && (a.preventDefault(), f.click());
  });
  const i = () => {
    var a;
    r.value = Array.from(e.value.querySelectorAll(`.${n.is("focusable")}[role=treeitem]`)), o.value = Array.from(e.value.querySelectorAll("input[type=checkbox]"));
    const c = e.value.querySelectorAll(`.${n.is("checked")}[role=treeitem]`);
    if (c.length) {
      c[0].setAttribute("tabindex", "0");
      return;
    }
    (a = r.value[0]) == null || a.setAttribute("tabindex", "0");
  };
}
const Np = /* @__PURE__ */ j({
  name: "ElTree",
  components: { ElTreeNode: yp },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    emptyText: {
      type: String
    },
    renderAfterExpand: {
      type: Boolean,
      default: !0
    },
    nodeKey: String,
    checkStrictly: Boolean,
    defaultExpandAll: Boolean,
    expandOnClickNode: {
      type: Boolean,
      default: !0
    },
    checkOnClickNode: Boolean,
    checkDescendants: {
      type: Boolean,
      default: !1
    },
    autoExpandParent: {
      type: Boolean,
      default: !0
    },
    defaultCheckedKeys: Array,
    defaultExpandedKeys: Array,
    currentNodeKey: [String, Number],
    renderContent: Function,
    showCheckbox: {
      type: Boolean,
      default: !1
    },
    draggable: {
      type: Boolean,
      default: !1
    },
    allowDrag: Function,
    allowDrop: Function,
    props: {
      type: Object,
      default: () => ({
        children: "children",
        label: "label",
        disabled: "disabled"
      })
    },
    lazy: {
      type: Boolean,
      default: !1
    },
    highlightCurrent: Boolean,
    load: Function,
    filterNodeMethod: Function,
    accordion: Boolean,
    indent: {
      type: Number,
      default: 18
    },
    icon: {
      type: mr
    }
  },
  emits: [
    "check-change",
    "current-change",
    "node-click",
    "node-contextmenu",
    "node-collapse",
    "node-expand",
    "check",
    "node-drag-start",
    "node-drag-end",
    "node-drop",
    "node-drag-leave",
    "node-drag-enter",
    "node-drag-over"
  ],
  setup(e, t) {
    const { t: n } = oh(), r = oe("tree"), o = F(new dp({
      key: e.nodeKey,
      data: e.data,
      lazy: e.lazy,
      props: e.props,
      load: e.load,
      currentNodeKey: e.currentNodeKey,
      checkStrictly: e.checkStrictly,
      checkDescendants: e.checkDescendants,
      defaultCheckedKeys: e.defaultCheckedKeys,
      defaultExpandedKeys: e.defaultExpandedKeys,
      autoExpandParent: e.autoExpandParent,
      defaultExpandAll: e.defaultExpandAll,
      filterNodeMethod: e.filterNodeMethod
    }));
    o.value.initialize();
    const s = F(o.value.root), i = F(null), a = F(null), c = F(null), { broadcastExpanded: u } = Zi(e), { dragState: d } = pp({
      props: e,
      ctx: t,
      el$: a,
      dropIndicator$: c,
      store: o
    });
    _p({ el$: a }, o);
    const l = S(() => {
      const { childNodes: E } = s.value;
      return !E || E.length === 0 || E.every(({ visible: P }) => !P);
    });
    Z(() => e.currentNodeKey, (E) => {
      o.value.setCurrentNodeKey(E);
    }), Z(() => e.defaultCheckedKeys, (E) => {
      o.value.setDefaultCheckedKey(E);
    }), Z(() => e.defaultExpandedKeys, (E) => {
      o.value.setDefaultExpandedKeys(E);
    }), Z(() => e.data, (E) => {
      o.value.setData(E);
    }, { deep: !0 }), Z(() => e.checkStrictly, (E) => {
      o.value.checkStrictly = E;
    });
    const f = (E) => {
      if (!e.filterNodeMethod)
        throw new Error("[Tree] filterNodeMethod is required when filter");
      o.value.filter(E);
    }, g = (E) => ao(e.nodeKey, E.data), h = (E) => {
      if (!e.nodeKey)
        throw new Error("[Tree] nodeKey is required in getNodePath");
      const P = o.value.getNode(E);
      if (!P)
        return [];
      const ft = [P.data];
      let wt = P.parent;
      for (; wt && wt !== s.value; )
        ft.push(wt.data), wt = wt.parent;
      return ft.reverse();
    }, p = (E, P) => o.value.getCheckedNodes(E, P), v = (E) => o.value.getCheckedKeys(E), b = () => {
      const E = o.value.getCurrentNode();
      return E ? E.data : null;
    }, m = () => {
      if (!e.nodeKey)
        throw new Error("[Tree] nodeKey is required in getCurrentKey");
      const E = b();
      return E ? E[e.nodeKey] : null;
    }, M = (E, P) => {
      if (!e.nodeKey)
        throw new Error("[Tree] nodeKey is required in setCheckedNodes");
      o.value.setCheckedNodes(E, P);
    }, k = (E, P) => {
      if (!e.nodeKey)
        throw new Error("[Tree] nodeKey is required in setCheckedKeys");
      o.value.setCheckedKeys(E, P);
    }, C = (E, P, ft) => {
      o.value.setChecked(E, P, ft);
    }, O = () => o.value.getHalfCheckedNodes(), ee = () => o.value.getHalfCheckedKeys(), T = (E, P = !0) => {
      if (!e.nodeKey)
        throw new Error("[Tree] nodeKey is required in setCurrentNode");
      wr(o, t.emit, () => o.value.setUserCurrentNode(E, P));
    }, _ = (E, P = !0) => {
      if (!e.nodeKey)
        throw new Error("[Tree] nodeKey is required in setCurrentKey");
      wr(o, t.emit, () => o.value.setCurrentNodeKey(E, P));
    }, D = (E) => o.value.getNode(E), I = (E) => {
      o.value.remove(E);
    }, N = (E, P) => {
      o.value.append(E, P);
    }, W = (E, P) => {
      o.value.insertBefore(E, P);
    }, ae = (E, P) => {
      o.value.insertAfter(E, P);
    }, Ht = (E, P, ft) => {
      u(P), t.emit("node-expand", E, P, ft);
    }, jt = (E, P) => {
      if (!e.nodeKey)
        throw new Error("[Tree] nodeKey is required in updateKeyChild");
      o.value.updateChildren(E, P);
    };
    return lt("RootTree", {
      ctx: t,
      props: e,
      store: o,
      root: s,
      currentNode: i,
      instance: pe()
    }), lt(so, void 0), {
      ns: r,
      store: o,
      root: s,
      currentNode: i,
      dragState: d,
      el$: a,
      dropIndicator$: c,
      isEmpty: l,
      filter: f,
      getNodeKey: g,
      getNodePath: h,
      getCheckedNodes: p,
      getCheckedKeys: v,
      getCurrentNode: b,
      getCurrentKey: m,
      setCheckedNodes: M,
      setCheckedKeys: k,
      setChecked: C,
      getHalfCheckedNodes: O,
      getHalfCheckedKeys: ee,
      setCurrentNode: T,
      setCurrentKey: _,
      t: n,
      getNode: D,
      remove: I,
      append: N,
      insertBefore: W,
      insertAfter: ae,
      handleNodeExpand: Ht,
      updateKeyChildren: jt
    };
  }
});
function Ep(e, t, n, r, o, s) {
  const i = Je("el-tree-node");
  return $(), U("div", {
    ref: "el$",
    class: R([
      e.ns.b(),
      e.ns.is("dragging", !!e.dragState.draggingNode),
      e.ns.is("drop-not-allow", !e.dragState.allowDrop),
      e.ns.is("drop-inner", e.dragState.dropType === "inner"),
      { [e.ns.m("highlight-current")]: e.highlightCurrent }
    ]),
    role: "tree"
  }, [
    ($(!0), U(Ce, null, ai(e.root.childNodes, (a) => ($(), J(i, {
      key: e.getNodeKey(a),
      node: a,
      props: e.props,
      accordion: e.accordion,
      "render-after-expand": e.renderAfterExpand,
      "show-checkbox": e.showCheckbox,
      "render-content": e.renderContent,
      onNodeExpand: e.handleNodeExpand
    }, null, 8, ["node", "props", "accordion", "render-after-expand", "show-checkbox", "render-content", "onNodeExpand"]))), 128)),
    e.isEmpty ? ($(), U("div", {
      key: 0,
      class: R(e.ns.e("empty-block"))
    }, [
      ie(e.$slots, "empty", {}, () => {
        var a;
        return [
          be("span", {
            class: R(e.ns.e("empty-text"))
          }, Or((a = e.emptyText) != null ? a : e.t("el.tree.emptyText")), 3)
        ];
      })
    ], 2)) : ge("v-if", !0),
    at(be("div", {
      ref: "dropIndicator$",
      class: R(e.ns.e("drop-indicator"))
    }, null, 2), [
      [mn, e.dragState.showDropIndicator]
    ])
  ], 2);
}
var ln = /* @__PURE__ */ ye(Np, [["render", Ep], ["__file", "tree.vue"]]);
ln.install = (e) => {
  e.component(ln.name, ln);
};
const Cp = ln, wp = Cp, Sp = /* @__PURE__ */ j({
  name: "FmoneTree",
  props: {
    treeData: Array
  },
  setup() {
    return {
      data: [
        {
          label: "Level one 1",
          children: [
            {
              label: "Level two 1-1",
              children: [
                {
                  label: "Level three 1-1-1"
                }
              ]
            }
          ]
        },
        {
          label: "Level one 2",
          children: [
            {
              label: "Level two 2-1",
              children: [
                {
                  label: "Level three 2-1-1"
                }
              ]
            },
            {
              label: "Level two 2-2",
              children: [
                {
                  label: "Level three 2-2-1"
                }
              ]
            }
          ]
        },
        {
          label: "Level one 3",
          children: [
            {
              label: "Level two 3-1",
              children: [
                {
                  label: "Level three 3-1-1"
                }
              ]
            },
            {
              label: "Level two 3-2",
              children: [
                {
                  label: "Level three 3-2-1"
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      },
      handleNodeClick: (r) => {
        console.log(r);
      }
    };
  }
});
function xp(e, t, n, r, o, s) {
  const i = wp;
  return $(), J(i, {
    style: { "max-width": "600px" },
    data: e.data,
    props: e.defaultProps,
    onNodeClick: e.handleNodeClick
  }, null, 8, ["data", "props", "onNodeClick"]);
}
const kp = /* @__PURE__ */ Ur(Sp, [["render", xp]]), Op = /* @__PURE__ */ j({
  name: "FmoneButton",
  props: {
    type: String
  },
  setup() {
    return {};
  }
});
function Tp(e, t, n, r, o, s) {
  const i = Hh;
  return $(), J(i, { type: e.type }, {
    default: ve(() => [
      ie(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["type"]);
}
const $p = /* @__PURE__ */ Ur(Op, [["render", Tp]]), Ap = [tc, kp, $p], Dp = {
  install(e) {
    Ap.forEach((t) => {
      e.component(t.name, t);
    });
  }
};
export {
  $p as FmoneButton,
  kp as FmoneTree,
  Dp as default,
  tc as svgIcon
};
//# sourceMappingURL=index.js.map
