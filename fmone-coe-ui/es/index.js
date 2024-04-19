/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function tn(e, t) {
  const n = new Set(e.split(","));
  return t ? (r) => n.has(r.toLowerCase()) : (r) => n.has(r);
}
const D = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, nn = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], K = () => {
}, rn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), R = Object.assign, sn = Object.prototype.hasOwnProperty, m = (e, t) => sn.call(e, t), h = Array.isArray, Z = (e) => Re(e) === "[object Map]", on = (e) => Re(e) === "[object Set]", v = (e) => typeof e == "function", C = (e) => typeof e == "string", ye = (e) => typeof e == "symbol", b = (e) => e !== null && typeof e == "object", cn = (e) => (b(e) || v(e)) && v(e.then) && v(e.catch), ln = Object.prototype.toString, Re = (e) => ln.call(e), wt = (e) => Re(e).slice(8, -1), an = (e) => Re(e) === "[object Object]", Ue = (e) => C(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, un = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, fn = un((e) => e.charAt(0).toUpperCase() + e.slice(1)), Y = (e, t) => !Object.is(e, t), dn = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
};
let ot;
const Nt = () => ot || (ot = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ve(e) {
  if (h(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], s = C(r) ? gn(r) : Ve(r);
      if (s)
        for (const o in s)
          t[o] = s[o];
    }
    return t;
  } else if (C(e) || b(e))
    return e;
}
const pn = /;(?![^(]*\))/g, hn = /:([^]+)/, _n = /\/\*[^]*?\*\//g;
function gn(e) {
  const t = {};
  return e.replace(_n, "").split(pn).forEach((n) => {
    if (n) {
      const r = n.split(hn);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function xe(e) {
  let t = "";
  if (C(e))
    t = e;
  else if (h(e))
    for (let n = 0; n < e.length; n++) {
      const r = xe(e[n]);
      r && (t += r + " ");
    }
  else if (b(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function L(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let mn;
function En(e, t = mn) {
  t && t.active && t.effects.push(e);
}
let U;
class bt {
  constructor(t, n, r, s) {
    this.fn = t, this.trigger = n, this.scheduler = r, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, En(this, s);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, We();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (vn(n.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), Be();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = F, n = U;
    try {
      return F = !0, U = this, this._runnings++, it(this), this.fn();
    } finally {
      ct(this), this._runnings--, U = n, F = t;
    }
  }
  stop() {
    var t;
    this.active && (it(this), ct(this), (t = this.onStop) == null || t.call(this), this.active = !1);
  }
}
function vn(e) {
  return e.value;
}
function it(e) {
  e._trackId++, e._depsLength = 0;
}
function ct(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      Ot(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function Ot(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let F = !0, Fe = 0;
const St = [];
function We() {
  St.push(F), F = !1;
}
function Be() {
  const e = St.pop();
  F = e === void 0 ? !0 : e;
}
function qe() {
  Fe++;
}
function Je() {
  for (Fe--; !Fe && je.length; )
    je.shift()();
}
function yt(e, t, n) {
  var r;
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const s = e.deps[e._depsLength];
    s !== t ? (s && Ot(s, e), e.deps[e._depsLength++] = t) : e._depsLength++, process.env.NODE_ENV !== "production" && ((r = e.onTrack) == null || r.call(e, R({ effect: e }, n)));
  }
}
const je = [];
function Rt(e, t, n) {
  var r;
  qe();
  for (const s of e.keys()) {
    let o;
    s._dirtyLevel < t && (o ?? (o = e.get(s) === s._trackId)) && (s._shouldSchedule || (s._shouldSchedule = s._dirtyLevel === 0), s._dirtyLevel = t), s._shouldSchedule && (o ?? (o = e.get(s) === s._trackId)) && (process.env.NODE_ENV !== "production" && ((r = s.onTrigger) == null || r.call(s, R({ effect: s }, n))), s.trigger(), (!s._runnings || s.allowRecurse) && s._dirtyLevel !== 2 && (s._shouldSchedule = !1, s.scheduler && je.push(s.scheduler)));
  }
  Je();
}
const Vt = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, ve = /* @__PURE__ */ new WeakMap(), W = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), Le = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
function O(e, t, n) {
  if (F && U) {
    let r = ve.get(e);
    r || ve.set(e, r = /* @__PURE__ */ new Map());
    let s = r.get(n);
    s || r.set(n, s = Vt(() => r.delete(n))), yt(
      U,
      s,
      process.env.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n
      } : void 0
    );
  }
}
function j(e, t, n, r, s, o) {
  const i = ve.get(e);
  if (!i)
    return;
  let l = [];
  if (t === "clear")
    l = [...i.values()];
  else if (n === "length" && h(e)) {
    const a = Number(r);
    i.forEach((d, _) => {
      (_ === "length" || !ye(_) && _ >= a) && l.push(d);
    });
  } else
    switch (n !== void 0 && l.push(i.get(n)), t) {
      case "add":
        h(e) ? Ue(n) && l.push(i.get("length")) : (l.push(i.get(W)), Z(e) && l.push(i.get(Le)));
        break;
      case "delete":
        h(e) || (l.push(i.get(W)), Z(e) && l.push(i.get(Le)));
        break;
      case "set":
        Z(e) && l.push(i.get(W));
        break;
    }
  qe();
  for (const a of l)
    a && Rt(
      a,
      4,
      process.env.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n,
        newValue: r,
        oldValue: s,
        oldTarget: o
      } : void 0
    );
  Je();
}
function wn(e, t) {
  var n;
  return (n = ve.get(e)) == null ? void 0 : n.get(t);
}
const Nn = /* @__PURE__ */ tn("__proto__,__v_isRef,__isVue"), xt = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ye)
), lt = /* @__PURE__ */ bn();
function bn() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const r = f(this);
      for (let o = 0, i = this.length; o < i; o++)
        O(r, "get", o + "");
      const s = r[t](...n);
      return s === -1 || s === !1 ? r[t](...n.map(f)) : s;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      We(), qe();
      const r = f(this)[t].apply(this, n);
      return Je(), Be(), r;
    };
  }), e;
}
function On(e) {
  const t = f(this);
  return O(t, "has", e), t.hasOwnProperty(e);
}
class Ct {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    const s = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return o;
    if (n === "__v_raw")
      return r === (s ? o ? Pt : $t : o ? An : Tt).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const i = h(t);
    if (!s) {
      if (i && m(lt, n))
        return Reflect.get(lt, n, r);
      if (n === "hasOwnProperty")
        return On;
    }
    const l = Reflect.get(t, n, r);
    return (ye(n) ? xt.has(n) : Nn(n)) || (s || O(t, "get", n), o) ? l : y(l) ? i && Ue(n) ? l : l.value : b(l) ? s ? At(l) : Mt(l) : l;
  }
}
class Sn extends Ct {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let o = t[n];
    if (!this._isShallow) {
      const a = G(o);
      if (!k(r) && !G(r) && (o = f(o), r = f(r)), !h(t) && y(o) && !y(r))
        return a ? !1 : (o.value = r, !0);
    }
    const i = h(t) && Ue(n) ? Number(n) < t.length : m(t, n), l = Reflect.set(t, n, r, s);
    return t === f(s) && (i ? Y(r, o) && j(t, "set", n, r, o) : j(t, "add", n, r)), l;
  }
  deleteProperty(t, n) {
    const r = m(t, n), s = t[n], o = Reflect.deleteProperty(t, n);
    return o && r && j(t, "delete", n, void 0, s), o;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!ye(n) || !xt.has(n)) && O(t, "has", n), r;
  }
  ownKeys(t) {
    return O(
      t,
      "iterate",
      h(t) ? "length" : W
    ), Reflect.ownKeys(t);
  }
}
class It extends Ct {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && L(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && L(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const yn = /* @__PURE__ */ new Sn(), Rn = /* @__PURE__ */ new It(), Vn = /* @__PURE__ */ new It(!0), Ye = (e) => e, Ce = (e) => Reflect.getPrototypeOf(e);
function le(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const s = f(e), o = f(t);
  n || (Y(t, o) && O(s, "get", t), O(s, "get", o));
  const { has: i } = Ce(s), l = r ? Ye : n ? Ze : Xe;
  if (i.call(s, t))
    return l(e.get(t));
  if (i.call(s, o))
    return l(e.get(o));
  e !== s && e.get(t);
}
function ae(e, t = !1) {
  const n = this.__v_raw, r = f(n), s = f(e);
  return t || (Y(e, s) && O(r, "has", e), O(r, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s);
}
function ue(e, t = !1) {
  return e = e.__v_raw, !t && O(f(e), "iterate", W), Reflect.get(e, "size", e);
}
function at(e) {
  e = f(e);
  const t = f(this);
  return Ce(t).has.call(t, e) || (t.add(e), j(t, "add", e, e)), this;
}
function ut(e, t) {
  t = f(t);
  const n = f(this), { has: r, get: s } = Ce(n);
  let o = r.call(n, e);
  o ? process.env.NODE_ENV !== "production" && Dt(n, r, e) : (e = f(e), o = r.call(n, e));
  const i = s.call(n, e);
  return n.set(e, t), o ? Y(t, i) && j(n, "set", e, t, i) : j(n, "add", e, t), this;
}
function ft(e) {
  const t = f(this), { has: n, get: r } = Ce(t);
  let s = n.call(t, e);
  s ? process.env.NODE_ENV !== "production" && Dt(t, n, e) : (e = f(e), s = n.call(t, e));
  const o = r ? r.call(t, e) : void 0, i = t.delete(e);
  return s && j(t, "delete", e, void 0, o), i;
}
function dt() {
  const e = f(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? Z(e) ? new Map(e) : new Set(e) : void 0, r = e.clear();
  return t && j(e, "clear", void 0, void 0, n), r;
}
function fe(e, t) {
  return function(r, s) {
    const o = this, i = o.__v_raw, l = f(i), a = t ? Ye : e ? Ze : Xe;
    return !e && O(l, "iterate", W), i.forEach((d, _) => r.call(s, a(d), a(_), o));
  };
}
function de(e, t, n) {
  return function(...r) {
    const s = this.__v_raw, o = f(s), i = Z(o), l = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, d = s[e](...r), _ = n ? Ye : t ? Ze : Xe;
    return !t && O(
      o,
      "iterate",
      a ? Le : W
    ), {
      // iterator protocol
      next() {
        const { value: c, done: u } = d.next();
        return u ? { value: c, done: u } : {
          value: l ? [_(c[0]), _(c[1])] : _(c),
          done: u
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function P(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      L(
        `${fn(e)} operation ${n}failed: target is readonly.`,
        f(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function xn() {
  const e = {
    get(o) {
      return le(this, o);
    },
    get size() {
      return ue(this);
    },
    has: ae,
    add: at,
    set: ut,
    delete: ft,
    clear: dt,
    forEach: fe(!1, !1)
  }, t = {
    get(o) {
      return le(this, o, !1, !0);
    },
    get size() {
      return ue(this);
    },
    has: ae,
    add: at,
    set: ut,
    delete: ft,
    clear: dt,
    forEach: fe(!1, !0)
  }, n = {
    get(o) {
      return le(this, o, !0);
    },
    get size() {
      return ue(this, !0);
    },
    has(o) {
      return ae.call(this, o, !0);
    },
    add: P("add"),
    set: P("set"),
    delete: P("delete"),
    clear: P("clear"),
    forEach: fe(!0, !1)
  }, r = {
    get(o) {
      return le(this, o, !0, !0);
    },
    get size() {
      return ue(this, !0);
    },
    has(o) {
      return ae.call(this, o, !0);
    },
    add: P("add"),
    set: P("set"),
    delete: P("delete"),
    clear: P("clear"),
    forEach: fe(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
    e[o] = de(
      o,
      !1,
      !1
    ), n[o] = de(
      o,
      !0,
      !1
    ), t[o] = de(
      o,
      !1,
      !0
    ), r[o] = de(
      o,
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
  Cn,
  In,
  Dn,
  Tn
] = /* @__PURE__ */ xn();
function Ge(e, t) {
  const n = t ? e ? Tn : Dn : e ? In : Cn;
  return (r, s, o) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(
    m(n, s) && s in r ? n : r,
    s,
    o
  );
}
const $n = {
  get: /* @__PURE__ */ Ge(!1, !1)
}, Pn = {
  get: /* @__PURE__ */ Ge(!0, !1)
}, Mn = {
  get: /* @__PURE__ */ Ge(!0, !0)
};
function Dt(e, t, n) {
  const r = f(n);
  if (r !== n && t.call(e, r)) {
    const s = wt(e);
    L(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Tt = /* @__PURE__ */ new WeakMap(), An = /* @__PURE__ */ new WeakMap(), $t = /* @__PURE__ */ new WeakMap(), Pt = /* @__PURE__ */ new WeakMap();
function Fn(e) {
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
function jn(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Fn(wt(e));
}
function Mt(e) {
  return G(e) ? e : Qe(
    e,
    !1,
    yn,
    $n,
    Tt
  );
}
function At(e) {
  return Qe(
    e,
    !0,
    Rn,
    Pn,
    $t
  );
}
function pe(e) {
  return Qe(
    e,
    !0,
    Vn,
    Mn,
    Pt
  );
}
function Qe(e, t, n, r, s) {
  if (!b(e))
    return process.env.NODE_ENV !== "production" && L(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = s.get(e);
  if (o)
    return o;
  const i = jn(e);
  if (i === 0)
    return e;
  const l = new Proxy(
    e,
    i === 2 ? r : n
  );
  return s.set(e, l), l;
}
function B(e) {
  return G(e) ? B(e.__v_raw) : !!(e && e.__v_isReactive);
}
function G(e) {
  return !!(e && e.__v_isReadonly);
}
function k(e) {
  return !!(e && e.__v_isShallow);
}
function we(e) {
  return B(e) || G(e);
}
function f(e) {
  const t = e && e.__v_raw;
  return t ? f(t) : e;
}
function Ln(e) {
  return Object.isExtensible(e) && dn(e, "__v_skip", !0), e;
}
const Xe = (e) => b(e) ? Mt(e) : e, Ze = (e) => b(e) ? At(e) : e, Hn = "Computed is still dirty after getter evaluation, likely because a computed is mutating its own dependency in its getter. State mutations in computed getters should be avoided.  Check the docs for more details: https://vuejs.org/guide/essentials/computed.html#getters-should-be-side-effect-free";
class Ft {
  constructor(t, n, r, s) {
    this.getter = t, this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new bt(
      () => t(this._value),
      () => $e(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = r;
  }
  get value() {
    const t = f(this);
    return (!t._cacheable || t.effect.dirty) && Y(t._value, t._value = t.effect.run()) && $e(t, 4), Kn(t), t.effect._dirtyLevel >= 2 && (process.env.NODE_ENV !== "production" && this._warnRecursive && L(Hn, `

getter: `, this.getter), $e(t, 2)), t._value;
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
function zn(e, t, n = !1) {
  let r, s;
  const o = v(e);
  o ? (r = e, s = process.env.NODE_ENV !== "production" ? () => {
    L("Write operation failed: computed value is readonly");
  } : K) : (r = e.get, s = e.set);
  const i = new Ft(r, s, o || !s, n);
  return process.env.NODE_ENV !== "production" && t && !n && (i.effect.onTrack = t.onTrack, i.effect.onTrigger = t.onTrigger), i;
}
function Kn(e) {
  var t;
  F && U && (e = f(e), yt(
    U,
    (t = e.dep) != null ? t : e.dep = Vt(
      () => e.dep = void 0,
      e instanceof Ft ? e : void 0
    ),
    process.env.NODE_ENV !== "production" ? {
      target: e,
      type: "get",
      key: "value"
    } : void 0
  ));
}
function $e(e, t = 4, n) {
  e = f(e);
  const r = e.dep;
  r && Rt(
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
function y(e) {
  return !!(e && e.__v_isRef === !0);
}
function Un(e) {
  return y(e) ? e.value : e;
}
const Wn = {
  get: (e, t, n) => Un(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return y(s) && !y(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Bn(e) {
  return B(e) ? e : new Proxy(e, Wn);
}
function qn(e) {
  process.env.NODE_ENV !== "production" && !we(e) && L("toRefs() expects a reactive object but received a plain one.");
  const t = h(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = Yn(e, n);
  return t;
}
class Jn {
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
    return wn(f(this._object), this._key);
  }
}
function Yn(e, t, n) {
  const r = e[t];
  return y(r) ? r : new Jn(e, t, n);
}
/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const q = [];
function Gn(e) {
  q.push(e);
}
function Qn() {
  q.pop();
}
function E(e, ...t) {
  We();
  const n = q.length ? q[q.length - 1].component : null, r = n && n.appContext.config.warnHandler, s = Xn();
  if (r)
    J(
      r,
      n,
      11,
      [
        e + t.map((o) => {
          var i, l;
          return (l = (i = o.toString) == null ? void 0 : i.call(o)) != null ? l : JSON.stringify(o);
        }).join(""),
        n && n.proxy,
        s.map(
          ({ vnode: o }) => `at <${Zt(n, o.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const o = [`[Vue warn]: ${e}`, ...t];
    s.length && o.push(`
`, ...Zn(s)), console.warn(...o);
  }
  Be();
}
function Xn() {
  let e = q[q.length - 1];
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
function Zn(e) {
  const t = [];
  return e.forEach((n, r) => {
    t.push(...r === 0 ? [] : [`
`], ...kn(n));
  }), t;
}
function kn({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, s = ` at <${Zt(
    e.component,
    e.type,
    r
  )}`, o = ">" + n;
  return e.props ? [s, ...er(e.props), o] : [s + o];
}
function er(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(...jt(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function jt(e, t, n) {
  return C(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : y(t) ? (t = jt(e, f(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : v(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = f(t), n ? t : [`${e}=`, t]);
}
const Lt = {
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
function J(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (s) {
    ke(s, t, n);
  }
}
function ge(e, t, n, r) {
  if (v(e)) {
    const o = J(e, t, n, r);
    return o && cn(o) && o.catch((i) => {
      ke(i, t, n);
    }), o;
  }
  const s = [];
  for (let o = 0; o < e.length; o++)
    s.push(ge(e[o], t, n, r));
  return s;
}
function ke(e, t, n, r = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const i = t.proxy, l = process.env.NODE_ENV !== "production" ? Lt[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; o; ) {
      const d = o.ec;
      if (d) {
        for (let _ = 0; _ < d.length; _++)
          if (d[_](e, i, l) === !1)
            return;
      }
      o = o.parent;
    }
    const a = t.appContext.config.errorHandler;
    if (a) {
      J(
        a,
        null,
        10,
        [e, i, l]
      );
      return;
    }
  }
  tr(e, n, s, r);
}
function tr(e, t, n, r = !0) {
  if (process.env.NODE_ENV !== "production") {
    const s = Lt[t];
    if (n && Gn(n), E(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && Qn(), r)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Ne = !1, He = !1;
const V = [];
let A = 0;
const ee = [];
let $ = null, M = 0;
const Ht = /* @__PURE__ */ Promise.resolve();
let et = null;
const nr = 100;
function rr(e) {
  const t = et || Ht;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function sr(e) {
  let t = A + 1, n = V.length;
  for (; t < n; ) {
    const r = t + n >>> 1, s = V[r], o = oe(s);
    o < e || o === e && s.pre ? t = r + 1 : n = r;
  }
  return t;
}
function tt(e) {
  (!V.length || !V.includes(
    e,
    Ne && e.allowRecurse ? A + 1 : A
  )) && (e.id == null ? V.push(e) : V.splice(sr(e.id), 0, e), zt());
}
function zt() {
  !Ne && !He && (He = !0, et = Ht.then(Ut));
}
function Kt(e) {
  h(e) ? ee.push(...e) : (!$ || !$.includes(
    e,
    e.allowRecurse ? M + 1 : M
  )) && ee.push(e), zt();
}
function or(e) {
  if (ee.length) {
    const t = [...new Set(ee)].sort(
      (n, r) => oe(n) - oe(r)
    );
    if (ee.length = 0, $) {
      $.push(...t);
      return;
    }
    for ($ = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), M = 0; M < $.length; M++)
      process.env.NODE_ENV !== "production" && Wt(e, $[M]) || $[M]();
    $ = null, M = 0;
  }
}
const oe = (e) => e.id == null ? 1 / 0 : e.id, ir = (e, t) => {
  const n = oe(e) - oe(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Ut(e) {
  He = !1, Ne = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), V.sort(ir);
  const t = process.env.NODE_ENV !== "production" ? (n) => Wt(e, n) : K;
  try {
    for (A = 0; A < V.length; A++) {
      const n = V[A];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        J(n, null, 14);
      }
    }
  } finally {
    A = 0, V.length = 0, or(e), Ne = !1, et = null, (V.length || ee.length) && Ut(e);
  }
}
function Wt(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > nr) {
      const r = t.ownerInstance, s = r && Xt(r.type);
      return ke(
        `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
const te = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (Nt().__VUE_HMR_RUNTIME__ = {
  createRecord: Pe(cr),
  rerender: Pe(lr),
  reload: Pe(ar)
});
const be = /* @__PURE__ */ new Map();
function cr(e, t) {
  return be.has(e) ? !1 : (be.set(e, {
    initialDef: re(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function re(e) {
  return kt(e) ? e.__vccOpts : e;
}
function lr(e, t) {
  const n = be.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((r) => {
    t && (r.render = t, re(r.type).render = t), r.renderCache = [], r.effect.dirty = !0, r.update();
  }));
}
function ar(e, t) {
  const n = be.get(e);
  if (!n)
    return;
  t = re(t), pt(n.initialDef, t);
  const r = [...n.instances];
  for (const s of r) {
    const o = re(s.type);
    te.has(o) || (o !== n.initialDef && pt(o, t), te.add(o)), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (te.add(o), s.ceReload(t.styles), te.delete(o)) : s.parent ? (s.parent.effect.dirty = !0, tt(s.parent.update)) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  Kt(() => {
    for (const s of r)
      te.delete(
        re(s.type)
      );
  });
}
function pt(e, t) {
  R(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Pe(e) {
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
let Q, he = [];
function Bt(e, t) {
  var n, r;
  Q = e, Q ? (Q.enabled = !0, he.forEach(({ event: s, args: o }) => Q.emit(s, ...o)), he = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((r = (n = window.navigator) == null ? void 0 : n.userAgent) != null && r.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((o) => {
    Bt(o, t);
  }), setTimeout(() => {
    Q || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, he = []);
  }, 3e3)) : he = [];
}
let T = null, ur = null;
const fr = Symbol.for("v-ndc"), dr = (e) => e.__isSuspense;
function pr(e, t) {
  t && t.pendingBranch ? h(e) ? t.effects.push(...e) : t.effects.push(e) : Kt(e);
}
const hr = Symbol.for("v-scx"), _r = () => {
  {
    const e = Rr(hr);
    return e || process.env.NODE_ENV !== "production" && E(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
}, _e = {};
function gr(e, t, {
  immediate: n,
  deep: r,
  flush: s,
  once: o,
  onTrack: i,
  onTrigger: l
} = D) {
  if (t && o) {
    const p = t;
    t = (...Te) => {
      p(...Te), De();
    };
  }
  process.env.NODE_ENV !== "production" && r !== void 0 && typeof r == "number" && E(
    'watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'
  ), process.env.NODE_ENV !== "production" && !t && (n !== void 0 && E(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && E(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && E(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const a = (p) => {
    E(
      "Invalid watch source: ",
      p,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = ie, _ = (p) => r === !0 ? p : (
    // for deep: false, only traverse root-level properties
    X(p, r === !1 ? 1 : void 0)
  );
  let c, u = !1, g = !1;
  if (y(e) ? (c = () => e.value, u = k(e)) : B(e) ? (c = () => _(e), u = !0) : h(e) ? (g = !0, u = e.some((p) => B(p) || k(p)), c = () => e.map((p) => {
    if (y(p))
      return p.value;
    if (B(p))
      return _(p);
    if (v(p))
      return J(p, d, 2);
    process.env.NODE_ENV !== "production" && a(p);
  })) : v(e) ? t ? c = () => J(e, d, 2) : c = () => (w && w(), ge(
    e,
    d,
    3,
    [I]
  )) : (c = K, process.env.NODE_ENV !== "production" && a(e)), t && r) {
    const p = c;
    c = () => X(p());
  }
  let w, I = (p) => {
    w = S.onStop = () => {
      J(p, d, 4), w = S.onStop = void 0;
    };
  }, Ie;
  if (st)
    if (I = K, t ? n && ge(t, d, 3, [
      c(),
      g ? [] : void 0,
      I
    ]) : c(), s === "sync") {
      const p = _r();
      Ie = p.__watcherHandles || (p.__watcherHandles = []);
    } else
      return K;
  let H = g ? new Array(e.length).fill(_e) : _e;
  const z = () => {
    if (!(!S.active || !S.dirty))
      if (t) {
        const p = S.run();
        (r || u || (g ? p.some((Te, en) => Y(Te, H[en])) : Y(p, H))) && (w && w(), ge(t, d, 3, [
          p,
          // pass undefined as the old value when it's changed for the first time
          H === _e ? void 0 : g && H[0] === _e ? [] : H,
          I
        ]), H = p);
      } else
        S.run();
  };
  z.allowRecurse = !!t;
  let ce;
  s === "sync" ? ce = z : s === "post" ? ce = () => vt(z, d && d.suspense) : (z.pre = !0, d && (z.id = d.uid), ce = () => tt(z));
  const S = new bt(c, K, ce), De = () => {
    S.stop();
  };
  return process.env.NODE_ENV !== "production" && (S.onTrack = i, S.onTrigger = l), t ? n ? z() : H = S.run() : s === "post" ? vt(
    S.run.bind(S),
    d && d.suspense
  ) : S.run(), Ie && Ie.push(De), De;
}
function mr(e, t, n) {
  const r = this.proxy, s = C(e) ? e.includes(".") ? Er(r, e) : () => r[e] : e.bind(r, r);
  let o;
  v(t) ? o = t : (o = t.handler, n = t);
  const i = zr(this), l = gr(s, o.bind(r), n);
  return i(), l;
}
function Er(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++)
      r = r[n[s]];
    return r;
  };
}
function X(e, t, n = 0, r) {
  if (!b(e) || e.__v_skip)
    return e;
  if (t && t > 0) {
    if (n >= t)
      return e;
    n++;
  }
  if (r = r || /* @__PURE__ */ new Set(), r.has(e))
    return e;
  if (r.add(e), y(e))
    X(e.value, t, n, r);
  else if (h(e))
    for (let s = 0; s < e.length; s++)
      X(e[s], t, n, r);
  else if (on(e) || Z(e))
    e.forEach((s) => {
      X(s, t, n, r);
    });
  else if (an(e))
    for (const s in e)
      X(e[s], t, n, r);
  return e;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function vr(e, t) {
  return v(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    R({ name: e.name }, t, { setup: e })
  ) : e;
}
const ze = (e) => e ? Kr(e) ? Ur(e) || e.proxy : ze(e.parent) : null, se = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ R(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? pe(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? pe(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? pe(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? pe(e.refs) : e.refs,
    $parent: (e) => ze(e.parent),
    $root: (e) => ze(e.root),
    $emit: (e) => e.emit,
    $options: (e) => br(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, tt(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = rr.bind(e.proxy)),
    $watch: (e) => mr.bind(e)
  })
), wr = (e) => e === "_" || e === "$", Me = (e, t) => e !== D && !e.__isScriptSetup && m(e, t), Nr = {
  get({ _: e }, t) {
    const { ctx: n, setupState: r, data: s, props: o, accessCache: i, type: l, appContext: a } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let d;
    if (t[0] !== "$") {
      const g = i[t];
      if (g !== void 0)
        switch (g) {
          case 1:
            return r[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (Me(r, t))
          return i[t] = 1, r[t];
        if (s !== D && m(s, t))
          return i[t] = 2, s[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (d = e.propsOptions[0]) && m(d, t)
        )
          return i[t] = 3, o[t];
        if (n !== D && m(n, t))
          return i[t] = 4, n[t];
        i[t] = 0;
      }
    }
    const _ = se[t];
    let c, u;
    if (_)
      return t === "$attrs" ? (O(e, "get", t), process.env.NODE_ENV !== "production" && void 0) : process.env.NODE_ENV !== "production" && t === "$slots" && O(e, "get", t), _(e);
    if (
      // css module (injected by vue-loader)
      (c = l.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== D && m(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      u = a.config.globalProperties, m(u, t)
    )
      return u[t];
    process.env.NODE_ENV !== "production" && T && (!C(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (s !== D && wr(t[0]) && m(s, t) ? E(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === T && E(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: s, ctx: o } = e;
    return Me(s, t) ? (s[t] = n, !0) : process.env.NODE_ENV !== "production" && s.__isScriptSetup && m(s, t) ? (E(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : r !== D && m(r, t) ? (r[t] = n, !0) : m(e.props, t) ? (process.env.NODE_ENV !== "production" && E(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && E(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(o, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, propsOptions: o }
  }, i) {
    let l;
    return !!n[i] || e !== D && m(e, i) || Me(t, i) || (l = o[0]) && m(l, i) || m(r, i) || m(se, i) || m(s.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : m(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (Nr.ownKeys = (e) => (E(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function ht(e) {
  return h(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function br(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: s,
    optionsCache: o,
    config: { optionMergeStrategies: i }
  } = e.appContext, l = o.get(t);
  let a;
  return l ? a = l : !s.length && !n && !r ? a = t : (a = {}, s.length && s.forEach(
    (d) => Oe(a, d, i, !0)
  ), Oe(a, t, i)), b(t) && o.set(t, a), a;
}
function Oe(e, t, n, r = !1) {
  const { mixins: s, extends: o } = t;
  o && Oe(e, o, n, !0), s && s.forEach(
    (i) => Oe(e, i, n, !0)
  );
  for (const i in t)
    if (r && i === "expose")
      process.env.NODE_ENV !== "production" && E(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = Or[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const Or = {
  data: _t,
  props: mt,
  emits: mt,
  // objects
  methods: ne,
  computed: ne,
  // lifecycle
  beforeCreate: N,
  created: N,
  beforeMount: N,
  mounted: N,
  beforeUpdate: N,
  updated: N,
  beforeDestroy: N,
  beforeUnmount: N,
  destroyed: N,
  unmounted: N,
  activated: N,
  deactivated: N,
  errorCaptured: N,
  serverPrefetch: N,
  // assets
  components: ne,
  directives: ne,
  // watch
  watch: yr,
  // provide / inject
  provide: _t,
  inject: Sr
};
function _t(e, t) {
  return t ? e ? function() {
    return R(
      v(e) ? e.call(this, this) : e,
      v(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Sr(e, t) {
  return ne(gt(e), gt(t));
}
function gt(e) {
  if (h(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function N(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ne(e, t) {
  return e ? R(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function mt(e, t) {
  return e ? h(e) && h(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : R(
    /* @__PURE__ */ Object.create(null),
    ht(e),
    ht(t ?? {})
  ) : t;
}
function yr(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = R(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = N(e[r], t[r]);
  return n;
}
let Et = null;
function Rr(e, t, n = !1) {
  const r = ie || T;
  if (r || Et) {
    const s = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : Et._context.provides;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && v(t) ? t.call(r && r.proxy) : t;
    process.env.NODE_ENV !== "production" && E(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && E("inject() can only be used inside setup() or functional components.");
}
const vt = pr, Vr = (e) => e.__isTeleport, qt = Symbol.for("v-fgt"), xr = Symbol.for("v-txt"), Cr = Symbol.for("v-cmt"), me = [];
let x = null;
function Ir(e = !1) {
  me.push(x = e ? null : []);
}
function Dr() {
  me.pop(), x = me[me.length - 1] || null;
}
function Tr(e) {
  return e.dynamicChildren = x || nn, Dr(), x && x.push(e), e;
}
function $r(e, t, n, r, s, o) {
  return Tr(
    nt(
      e,
      t,
      n,
      r,
      s,
      o,
      !0
    )
  );
}
function Pr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const Mr = (...e) => Gt(
  ...e
), Jt = "__vInternal", Yt = ({ key: e }) => e ?? null, Ee = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? C(e) || y(e) || v(e) ? { i: T, r: e, k: t, f: !!n } : e : null);
function nt(e, t = null, n = null, r = 0, s = null, o = e === qt ? 0 : 1, i = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Yt(t),
    ref: t && Ee(t),
    scopeId: ur,
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
    shapeFlag: o,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: T
  };
  return l ? (rt(a, n), o & 128 && e.normalize(a)) : n && (a.shapeFlag |= C(n) ? 8 : 16), process.env.NODE_ENV !== "production" && a.key !== a.key && E("VNode created with invalid key (NaN). VNode type:", a.type), // avoid a block node from tracking itself
  !i && // has current parent block
  x && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && x.push(a), a;
}
const Ar = process.env.NODE_ENV !== "production" ? Mr : Gt;
function Gt(e, t = null, n = null, r = 0, s = null, o = !1) {
  if ((!e || e === fr) && (process.env.NODE_ENV !== "production" && !e && E(`Invalid vnode type when creating vnode: ${e}.`), e = Cr), Pr(e)) {
    const l = Se(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && rt(l, n), !o && x && (l.shapeFlag & 6 ? x[x.indexOf(e)] = l : x.push(l)), l.patchFlag |= -2, l;
  }
  if (kt(e) && (e = e.__vccOpts), t) {
    t = Fr(t);
    let { class: l, style: a } = t;
    l && !C(l) && (t.class = xe(l)), b(a) && (we(a) && !h(a) && (a = R({}, a)), t.style = Ve(a));
  }
  const i = C(e) ? 1 : dr(e) ? 128 : Vr(e) ? 64 : b(e) ? 4 : v(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && we(e) && (e = f(e), E(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), nt(
    e,
    t,
    n,
    r,
    s,
    i,
    o,
    !0
  );
}
function Fr(e) {
  return e ? we(e) || Jt in e ? R({}, e) : e : null;
}
function Se(e, t, n = !1) {
  const { props: r, ref: s, patchFlag: o, children: i } = e, l = t ? Lr(r || {}, t) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && Yt(l),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? h(s) ? s.concat(Ee(t)) : [s, Ee(t)] : Ee(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && o === -1 && h(i) ? i.map(Qt) : i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== qt ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && Se(e.ssContent),
    ssFallback: e.ssFallback && Se(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function Qt(e) {
  const t = Se(e);
  return h(e.children) && (t.children = e.children.map(Qt)), t;
}
function jr(e = " ", t = 0) {
  return Ar(xr, null, e, t);
}
function rt(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (h(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), rt(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !(Jt in t) ? t._ctx = T : s === 3 && T && (T.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    v(t) ? (t = { default: t, _ctx: T }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [jr(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Lr(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = xe([t.class, r.class]));
      else if (s === "style")
        t.style = Ve([t.style, r.style]);
      else if (rn(s)) {
        const o = t[s], i = r[s];
        i && o !== i && !(h(o) && o.includes(i)) && (t[s] = o ? [].concat(o, i) : i);
      } else
        s !== "" && (t[s] = r[s]);
  }
  return t;
}
let ie = null;
const Hr = () => ie || T;
let Ke;
{
  const e = Nt(), t = (n, r) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(r), (o) => {
      s.length > 1 ? s.forEach((i) => i(o)) : s[0](o);
    };
  };
  Ke = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ie = n
  ), t(
    "__VUE_SSR_SETTERS__",
    (n) => st = n
  );
}
const zr = (e) => {
  const t = ie;
  return Ke(e), e.scope.on(), () => {
    e.scope.off(), Ke(t);
  };
};
function Kr(e) {
  return e.vnode.shapeFlag & 4;
}
let st = !1;
function Ur(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Bn(Ln(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in se)
          return se[n](e);
      },
      has(t, n) {
        return n in t || n in se;
      }
    }));
}
const Wr = /(?:^|[-_])(\w)/g, Br = (e) => e.replace(Wr, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Xt(e, t = !0) {
  return v(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Zt(e, t, n = !1) {
  let r = Xt(t);
  if (!r && t.__file) {
    const s = t.__file.match(/([^/\\]+)\.\w+$/);
    s && (r = s[1]);
  }
  if (!r && e && e.parent) {
    const s = (o) => {
      for (const i in o)
        if (o[i] === t)
          return i;
    };
    r = s(
      e.components || e.parent.type.components
    ) || s(e.appContext.components);
  }
  return r ? Br(r) : n ? "App" : "Anonymous";
}
function kt(e) {
  return v(e) && "__vccOpts" in e;
}
const Ae = (e, t) => {
  const n = zn(e, t, st);
  if (process.env.NODE_ENV !== "production") {
    const r = Hr();
    r && r.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function qr() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, r = { style: "color:#eb2f96" }, s = {
    header(c) {
      return b(c) ? c.__isVue ? ["div", e, "VueInstance"] : y(c) ? [
        "div",
        {},
        ["span", e, _(c)],
        "<",
        l(c.value),
        ">"
      ] : B(c) ? [
        "div",
        {},
        ["span", e, k(c) ? "ShallowReactive" : "Reactive"],
        "<",
        l(c),
        `>${G(c) ? " (readonly)" : ""}`
      ] : G(c) ? [
        "div",
        {},
        ["span", e, k(c) ? "ShallowReadonly" : "Readonly"],
        "<",
        l(c),
        ">"
      ] : null : null;
    },
    hasBody(c) {
      return c && c.__isVue;
    },
    body(c) {
      if (c && c.__isVue)
        return [
          "div",
          {},
          ...o(c.$)
        ];
    }
  };
  function o(c) {
    const u = [];
    c.type.props && c.props && u.push(i("props", f(c.props))), c.setupState !== D && u.push(i("setup", c.setupState)), c.data !== D && u.push(i("data", f(c.data)));
    const g = a(c, "computed");
    g && u.push(i("computed", g));
    const w = a(c, "inject");
    return w && u.push(i("injected", w)), u.push([
      "div",
      {},
      [
        "span",
        {
          style: r.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: c }]
    ]), u;
  }
  function i(c, u) {
    return u = R({}, u), Object.keys(u).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        c
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(u).map((g) => [
          "div",
          {},
          ["span", r, g + ": "],
          l(u[g], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(c, u = !0) {
    return typeof c == "number" ? ["span", t, c] : typeof c == "string" ? ["span", n, JSON.stringify(c)] : typeof c == "boolean" ? ["span", r, c] : b(c) ? ["object", { object: u ? f(c) : c }] : ["span", n, String(c)];
  }
  function a(c, u) {
    const g = c.type;
    if (v(g))
      return;
    const w = {};
    for (const I in c.ctx)
      d(g, I, u) && (w[I] = c.ctx[I]);
    return w;
  }
  function d(c, u, g) {
    const w = c[g];
    if (h(w) && w.includes(u) || b(w) && u in w || c.extends && d(c.extends, u, g) || c.mixins && c.mixins.some((I) => d(I, u, g)))
      return !0;
  }
  function _(c) {
    return k(c) ? "ShallowRef" : c.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* vue v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Jr() {
  qr();
}
process.env.NODE_ENV !== "production" && Jr();
const Yr = /* @__PURE__ */ vr({
  name: "SvgIcon",
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
    let { iconName: t, className: n, size: r, color: s } = qn(e);
    const o = Ae(() => `#${t.value}`), i = Ae(() => n.value ? `svg-icon ${n.value}` : "svg-icon"), l = Ae(() => ({
      width: r.value,
      height: r.value,
      color: s.value
    }));
    return {
      iconClassName: o,
      svgClass: i,
      iconSize: l
    };
  }
}), Gr = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
}, Qr = ["xlink:href"];
function Xr(e, t, n, r, s, o) {
  return Ir(), $r("svg", {
    "aria-hidden": "true",
    class: xe([e.svgClass, { "is-disabled": e.disabled }]),
    style: Ve(e.iconSize)
  }, [
    nt("use", {
      class: "svg-use",
      "xlink:href": e.iconClassName
    }, null, 8, Qr)
  ], 6);
}
const Zr = /* @__PURE__ */ Gr(Yr, [["render", Xr], ["__scopeId", "data-v-80dceaaf"]]), kr = [Zr], es = {
  install(e) {
    kr.forEach((t) => {
      e.component(t.name, t);
    });
  }
};
export {
  es as default,
  Zr as svgIcon
};
//# sourceMappingURL=index.js.map
