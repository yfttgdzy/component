/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Oi(e, t) {
  const n = new Set(e.split(","));
  return t ? (r) => n.has(r.toLowerCase()) : (r) => n.has(r);
}
const se = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, Ti = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], Se = () => {
}, xi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Z = Object.assign, $i = Object.prototype.hasOwnProperty, R = (e, t) => $i.call(e, t), w = Array.isArray, He = (e) => At(e) === "[object Map]", hn = (e) => At(e) === "[object Set]", Rr = (e) => At(e) === "[object Date]", F = (e) => typeof e == "function", z = (e) => typeof e == "string", ke = (e) => typeof e == "symbol", L = (e) => e !== null && typeof e == "object", Di = (e) => (L(e) || F(e)) && F(e.then) && F(e.catch), Uo = Object.prototype.toString, At = (e) => Uo.call(e), Go = (e) => At(e).slice(8, -1), qo = (e) => At(e) === "[object Object]", rr = (e) => z(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, or = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, ki = /-(\w)/g, Qt = or((e) => e.replace(ki, (t, n) => n ? n.toUpperCase() : "")), Ot = or((e) => e.charAt(0).toUpperCase() + e.slice(1)), Wo = or((e) => e ? `on${Ot(e)}` : ""), Ie = (e, t) => !Object.is(e, t), Ii = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, Ai = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, Pi = (e) => {
  const t = z(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Kr;
const Jo = () => Kr || (Kr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ft(e) {
  if (w(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = z(r) ? Ki(r) : ft(r);
      if (o)
        for (const s in o)
          t[s] = o[s];
    }
    return t;
  } else if (z(e) || L(e))
    return e;
}
const Vi = /;(?![^(]*\))/g, Li = /:([^]+)/, Ri = /\/\*[^]*?\*\//g;
function Ki(e) {
  const t = {};
  return e.replace(Ri, "").split(Vi).forEach((n) => {
    if (n) {
      const r = n.split(Li);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function M(e) {
  let t = "";
  if (z(e))
    t = e;
  else if (w(e))
    for (let n = 0; n < e.length; n++) {
      const r = M(e[n]);
      r && (t += r + " ");
    }
  else if (L(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function Mi(e, t) {
  if (e.length !== t.length)
    return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = gn(e[r], t[r]);
  return n;
}
function gn(e, t) {
  if (e === t)
    return !0;
  let n = Rr(e), r = Rr(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = ke(e), r = ke(t), n || r)
    return e === t;
  if (n = w(e), r = w(t), n || r)
    return n && r ? Mi(e, t) : !1;
  if (n = L(e), r = L(t), n || r) {
    if (!n || !r)
      return !1;
    const o = Object.keys(e).length, s = Object.keys(t).length;
    if (o !== s)
      return !1;
    for (const i in e) {
      const a = e.hasOwnProperty(i), c = t.hasOwnProperty(i);
      if (a && !c || !a && c || !gn(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Yo(e, t) {
  return e.findIndex((n) => gn(n, t));
}
const sr = (e) => z(e) ? e : e == null ? "" : w(e) || L(e) && (e.toString === Uo || !F(e.toString)) ? JSON.stringify(e, Qo, 2) : String(e), Qo = (e, t) => t && t.__v_isRef ? Qo(e, t.value) : He(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, o], s) => (n[Sn(r, s) + " =>"] = o, n),
    {}
  )
} : hn(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Sn(n))
} : ke(t) ? Sn(t) : L(t) && !w(t) && !qo(t) ? String(t) : t, Sn = (e, t = "") => {
  var n;
  return ke(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
};
/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ae(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Fi;
function Bi(e, t = Fi) {
  t && t.active && t.effects.push(e);
}
let Ue;
class Xo {
  constructor(t, n, r, o) {
    this.fn = t, this.trigger = n, this.scheduler = r, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, Bi(this, o);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, vn();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (ji(n.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), mn();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = Te, n = Ue;
    try {
      return Te = !0, Ue = this, this._runnings++, Mr(this), this.fn();
    } finally {
      Fr(this), this._runnings--, Ue = n, Te = t;
    }
  }
  stop() {
    var t;
    this.active && (Mr(this), Fr(this), (t = this.onStop) == null || t.call(this), this.active = !1);
  }
}
function ji(e) {
  return e.value;
}
function Mr(e) {
  e._trackId++, e._depsLength = 0;
}
function Fr(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      Zo(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function Zo(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let Te = !0, Rn = 0;
const es = [];
function vn() {
  es.push(Te), Te = !1;
}
function mn() {
  const e = es.pop();
  Te = e === void 0 ? !0 : e;
}
function ir() {
  Rn++;
}
function ar() {
  for (Rn--; !Rn && Kn.length; )
    Kn.shift()();
}
function ts(e, t, n) {
  var r;
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const o = e.deps[e._depsLength];
    o !== t ? (o && Zo(o, e), e.deps[e._depsLength++] = t) : e._depsLength++, process.env.NODE_ENV !== "production" && ((r = e.onTrack) == null || r.call(e, Z({ effect: e }, n)));
  }
}
const Kn = [];
function ns(e, t, n) {
  var r;
  ir();
  for (const o of e.keys()) {
    let s;
    o._dirtyLevel < t && (s ?? (s = e.get(o) === o._trackId)) && (o._shouldSchedule || (o._shouldSchedule = o._dirtyLevel === 0), o._dirtyLevel = t), o._shouldSchedule && (s ?? (s = e.get(o) === o._trackId)) && (process.env.NODE_ENV !== "production" && ((r = o.onTrigger) == null || r.call(o, Z({ effect: o }, n))), o.trigger(), (!o._runnings || o.allowRecurse) && o._dirtyLevel !== 2 && (o._shouldSchedule = !1, o.scheduler && Kn.push(o.scheduler)));
  }
  ar();
}
const rs = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, Xt = /* @__PURE__ */ new WeakMap(), Ge = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), Mn = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
function W(e, t, n) {
  if (Te && Ue) {
    let r = Xt.get(e);
    r || Xt.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || r.set(n, o = rs(() => r.delete(n))), ts(
      Ue,
      o,
      process.env.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n
      } : void 0
    );
  }
}
function xe(e, t, n, r, o, s) {
  const i = Xt.get(e);
  if (!i)
    return;
  let a = [];
  if (t === "clear")
    a = [...i.values()];
  else if (n === "length" && w(e)) {
    const c = Number(r);
    i.forEach((d, u) => {
      (u === "length" || !ke(u) && u >= c) && a.push(d);
    });
  } else
    switch (n !== void 0 && a.push(i.get(n)), t) {
      case "add":
        w(e) ? rr(n) && a.push(i.get("length")) : (a.push(i.get(Ge)), He(e) && a.push(i.get(Mn)));
        break;
      case "delete":
        w(e) || (a.push(i.get(Ge)), He(e) && a.push(i.get(Mn)));
        break;
      case "set":
        He(e) && a.push(i.get(Ge));
        break;
    }
  ir();
  for (const c of a)
    c && ns(
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
  ar();
}
function zi(e, t) {
  var n;
  return (n = Xt.get(e)) == null ? void 0 : n.get(t);
}
const Hi = /* @__PURE__ */ Oi("__proto__,__v_isRef,__isVue"), os = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ke)
), Br = /* @__PURE__ */ Ui();
function Ui() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const r = S(this);
      for (let s = 0, i = this.length; s < i; s++)
        W(r, "get", s + "");
      const o = r[t](...n);
      return o === -1 || o === !1 ? r[t](...n.map(S)) : o;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      vn(), ir();
      const r = S(this)[t].apply(this, n);
      return ar(), mn(), r;
    };
  }), e;
}
function Gi(e) {
  const t = S(this);
  return W(t, "has", e), t.hasOwnProperty(e);
}
class ss {
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
      return r === (o ? s ? us : cs : s ? sa : ls).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const i = w(t);
    if (!o) {
      if (i && R(Br, n))
        return Reflect.get(Br, n, r);
      if (n === "hasOwnProperty")
        return Gi;
    }
    const a = Reflect.get(t, n, r);
    return (ke(n) ? os.has(n) : Hi(n)) || (o || W(t, "get", n), s) ? a : H(a) ? i && rr(n) ? a : a.value : L(a) ? o ? ds(a) : ur(a) : a;
  }
}
class qi extends ss {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, o) {
    let s = t[n];
    if (!this._isShallow) {
      const c = Pe(s);
      if (!We(r) && !Pe(r) && (s = S(s), r = S(r)), !w(t) && H(s) && !H(r))
        return c ? !1 : (s.value = r, !0);
    }
    const i = w(t) && rr(n) ? Number(n) < t.length : R(t, n), a = Reflect.set(t, n, r, o);
    return t === S(o) && (i ? Ie(r, s) && xe(t, "set", n, r, s) : xe(t, "add", n, r)), a;
  }
  deleteProperty(t, n) {
    const r = R(t, n), o = t[n], s = Reflect.deleteProperty(t, n);
    return s && r && xe(t, "delete", n, void 0, o), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!ke(n) || !os.has(n)) && W(t, "has", n), r;
  }
  ownKeys(t) {
    return W(
      t,
      "iterate",
      w(t) ? "length" : Ge
    ), Reflect.ownKeys(t);
  }
}
class is extends ss {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && Ae(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && Ae(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Wi = /* @__PURE__ */ new qi(), Ji = /* @__PURE__ */ new is(), Yi = /* @__PURE__ */ new is(!0), lr = (e) => e, yn = (e) => Reflect.getPrototypeOf(e);
function Lt(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const o = S(e), s = S(t);
  n || (Ie(t, s) && W(o, "get", t), W(o, "get", s));
  const { has: i } = yn(o), a = r ? lr : n ? fr : Tt;
  if (i.call(o, t))
    return a(e.get(t));
  if (i.call(o, s))
    return a(e.get(s));
  e !== o && e.get(t);
}
function Rt(e, t = !1) {
  const n = this.__v_raw, r = S(n), o = S(e);
  return t || (Ie(e, o) && W(r, "has", e), W(r, "has", o)), e === o ? n.has(e) : n.has(e) || n.has(o);
}
function Kt(e, t = !1) {
  return e = e.__v_raw, !t && W(S(e), "iterate", Ge), Reflect.get(e, "size", e);
}
function jr(e) {
  e = S(e);
  const t = S(this);
  return yn(t).has.call(t, e) || (t.add(e), xe(t, "add", e, e)), this;
}
function zr(e, t) {
  t = S(t);
  const n = S(this), { has: r, get: o } = yn(n);
  let s = r.call(n, e);
  s ? process.env.NODE_ENV !== "production" && as(n, r, e) : (e = S(e), s = r.call(n, e));
  const i = o.call(n, e);
  return n.set(e, t), s ? Ie(t, i) && xe(n, "set", e, t, i) : xe(n, "add", e, t), this;
}
function Hr(e) {
  const t = S(this), { has: n, get: r } = yn(t);
  let o = n.call(t, e);
  o ? process.env.NODE_ENV !== "production" && as(t, n, e) : (e = S(e), o = n.call(t, e));
  const s = r ? r.call(t, e) : void 0, i = t.delete(e);
  return o && xe(t, "delete", e, void 0, s), i;
}
function Ur() {
  const e = S(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? He(e) ? new Map(e) : new Set(e) : void 0, r = e.clear();
  return t && xe(e, "clear", void 0, void 0, n), r;
}
function Mt(e, t) {
  return function(r, o) {
    const s = this, i = s.__v_raw, a = S(i), c = t ? lr : e ? fr : Tt;
    return !e && W(a, "iterate", Ge), i.forEach((d, u) => r.call(o, c(d), c(u), s));
  };
}
function Ft(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, s = S(o), i = He(s), a = e === "entries" || e === Symbol.iterator && i, c = e === "keys" && i, d = o[e](...r), u = n ? lr : t ? fr : Tt;
    return !t && W(
      s,
      "iterate",
      c ? Mn : Ge
    ), {
      // iterator protocol
      next() {
        const { value: l, done: f } = d.next();
        return f ? { value: l, done: f } : {
          value: a ? [u(l[0]), u(l[1])] : u(l),
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
function ye(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Ae(
        `${Ot(e)} operation ${n}failed: target is readonly.`,
        S(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Qi() {
  const e = {
    get(s) {
      return Lt(this, s);
    },
    get size() {
      return Kt(this);
    },
    has: Rt,
    add: jr,
    set: zr,
    delete: Hr,
    clear: Ur,
    forEach: Mt(!1, !1)
  }, t = {
    get(s) {
      return Lt(this, s, !1, !0);
    },
    get size() {
      return Kt(this);
    },
    has: Rt,
    add: jr,
    set: zr,
    delete: Hr,
    clear: Ur,
    forEach: Mt(!1, !0)
  }, n = {
    get(s) {
      return Lt(this, s, !0);
    },
    get size() {
      return Kt(this, !0);
    },
    has(s) {
      return Rt.call(this, s, !0);
    },
    add: ye("add"),
    set: ye("set"),
    delete: ye("delete"),
    clear: ye("clear"),
    forEach: Mt(!0, !1)
  }, r = {
    get(s) {
      return Lt(this, s, !0, !0);
    },
    get size() {
      return Kt(this, !0);
    },
    has(s) {
      return Rt.call(this, s, !0);
    },
    add: ye("add"),
    set: ye("set"),
    delete: ye("delete"),
    clear: ye("clear"),
    forEach: Mt(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    e[s] = Ft(
      s,
      !1,
      !1
    ), n[s] = Ft(
      s,
      !0,
      !1
    ), t[s] = Ft(
      s,
      !1,
      !0
    ), r[s] = Ft(
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
  Xi,
  Zi,
  ea,
  ta
] = /* @__PURE__ */ Qi();
function cr(e, t) {
  const n = t ? e ? ta : ea : e ? Zi : Xi;
  return (r, o, s) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    R(n, o) && o in r ? n : r,
    o,
    s
  );
}
const na = {
  get: /* @__PURE__ */ cr(!1, !1)
}, ra = {
  get: /* @__PURE__ */ cr(!0, !1)
}, oa = {
  get: /* @__PURE__ */ cr(!0, !0)
};
function as(e, t, n) {
  const r = S(n);
  if (r !== n && t.call(e, r)) {
    const o = Go(e);
    Ae(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const ls = /* @__PURE__ */ new WeakMap(), sa = /* @__PURE__ */ new WeakMap(), cs = /* @__PURE__ */ new WeakMap(), us = /* @__PURE__ */ new WeakMap();
function ia(e) {
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
function aa(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ia(Go(e));
}
function ur(e) {
  return Pe(e) ? e : dr(
    e,
    !1,
    Wi,
    na,
    ls
  );
}
function ds(e) {
  return dr(
    e,
    !0,
    Ji,
    ra,
    cs
  );
}
function Bt(e) {
  return dr(
    e,
    !0,
    Yi,
    oa,
    us
  );
}
function dr(e, t, n, r, o) {
  if (!L(e))
    return process.env.NODE_ENV !== "production" && Ae(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = o.get(e);
  if (s)
    return s;
  const i = aa(e);
  if (i === 0)
    return e;
  const a = new Proxy(
    e,
    i === 2 ? r : n
  );
  return o.set(e, a), a;
}
function qe(e) {
  return Pe(e) ? qe(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Pe(e) {
  return !!(e && e.__v_isReadonly);
}
function We(e) {
  return !!(e && e.__v_isShallow);
}
function Zt(e) {
  return qe(e) || Pe(e);
}
function S(e) {
  const t = e && e.__v_raw;
  return t ? S(t) : e;
}
function la(e) {
  return Object.isExtensible(e) && Ai(e, "__v_skip", !0), e;
}
const Tt = (e) => L(e) ? ur(e) : e, fr = (e) => L(e) ? ds(e) : e, ca = "Computed is still dirty after getter evaluation, likely because a computed is mutating its own dependency in its getter. State mutations in computed getters should be avoided.  Check the docs for more details: https://vuejs.org/guide/essentials/computed.html#getters-should-be-side-effect-free";
class fs {
  constructor(t, n, r, o) {
    this.getter = t, this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new Xo(
      () => t(this._value),
      () => Gt(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !o, this.__v_isReadonly = r;
  }
  get value() {
    const t = S(this);
    return (!t._cacheable || t.effect.dirty) && Ie(t._value, t._value = t.effect.run()) && Gt(t, 4), ps(t), t.effect._dirtyLevel >= 2 && (process.env.NODE_ENV !== "production" && this._warnRecursive && Ae(ca, `

getter: `, this.getter), Gt(t, 2)), t._value;
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
function ua(e, t, n = !1) {
  let r, o;
  const s = F(e);
  s ? (r = e, o = process.env.NODE_ENV !== "production" ? () => {
    Ae("Write operation failed: computed value is readonly");
  } : Se) : (r = e.get, o = e.set);
  const i = new fs(r, o, s || !o, n);
  return process.env.NODE_ENV !== "production" && t && !n && (i.effect.onTrack = t.onTrack, i.effect.onTrigger = t.onTrigger), i;
}
function ps(e) {
  var t;
  Te && Ue && (e = S(e), ts(
    Ue,
    (t = e.dep) != null ? t : e.dep = rs(
      () => e.dep = void 0,
      e instanceof fs ? e : void 0
    ),
    process.env.NODE_ENV !== "production" ? {
      target: e,
      type: "get",
      key: "value"
    } : void 0
  ));
}
function Gt(e, t = 4, n) {
  e = S(e);
  const r = e.dep;
  r && ns(
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
function H(e) {
  return !!(e && e.__v_isRef === !0);
}
function B(e) {
  return hs(e, !1);
}
function Gr(e) {
  return hs(e, !0);
}
function hs(e, t) {
  return H(e) ? e : new da(e, t);
}
class da {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : S(t), this._value = n ? t : Tt(t);
  }
  get value() {
    return ps(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || We(t) || Pe(t);
    t = n ? t : S(t), Ie(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Tt(t), Gt(this, 4, t));
  }
}
function _(e) {
  return H(e) ? e.value : e;
}
const fa = {
  get: (e, t, n) => _(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return H(o) && !H(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function pa(e) {
  return qe(e) ? e : new Proxy(e, fa);
}
function gs(e) {
  process.env.NODE_ENV !== "production" && !Zt(e) && Ae("toRefs() expects a reactive object but received a plain one.");
  const t = w(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = vs(e, n);
  return t;
}
class ha {
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
    return zi(S(this._object), this._key);
  }
}
class ga {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0;
  }
  get value() {
    return this._getter();
  }
}
function va(e, t, n) {
  return H(e) ? e : F(e) ? new ga(e) : L(e) && arguments.length > 1 ? vs(e, t, n) : B(e);
}
function vs(e, t, n) {
  const r = e[t];
  return H(r) ? r : new ha(e, t, n);
}
/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Je = [];
function ma(e) {
  Je.push(e);
}
function ya() {
  Je.pop();
}
function $(e, ...t) {
  vn();
  const n = Je.length ? Je[Je.length - 1].component : null, r = n && n.appContext.config.warnHandler, o = ba();
  if (r)
    Ye(
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
          ({ vnode: s }) => `at <${zs(n, s.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    o.length && s.push(`
`, ..._a(o)), console.warn(...s);
  }
  mn();
}
function ba() {
  let e = Je[Je.length - 1];
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
function _a(e) {
  const t = [];
  return e.forEach((n, r) => {
    t.push(...r === 0 ? [] : [`
`], ...Na(n));
  }), t;
}
function Na({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, o = ` at <${zs(
    e.component,
    e.type,
    r
  )}`, s = ">" + n;
  return e.props ? [o, ...Ea(e.props), s] : [o + s];
}
function Ea(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(...ms(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function ms(e, t, n) {
  return z(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : H(t) ? (t = ms(e, S(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : F(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = S(t), n ? t : [`${e}=`, t]);
}
function Ca(e, t) {
  process.env.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? $(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && $(`${t} is NaN - the duration expression might be incorrect.`));
}
const pr = {
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
function Ye(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (o) {
    hr(o, t, n);
  }
}
function st(e, t, n, r) {
  if (F(e)) {
    const s = Ye(e, t, n, r);
    return s && Di(s) && s.catch((i) => {
      hr(i, t, n);
    }), s;
  }
  const o = [];
  for (let s = 0; s < e.length; s++)
    o.push(st(e[s], t, n, r));
  return o;
}
function hr(e, t, n, r = !0) {
  const o = t ? t.vnode : null;
  if (t) {
    let s = t.parent;
    const i = t.proxy, a = process.env.NODE_ENV !== "production" ? pr[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; s; ) {
      const d = s.ec;
      if (d) {
        for (let u = 0; u < d.length; u++)
          if (d[u](e, i, a) === !1)
            return;
      }
      s = s.parent;
    }
    const c = t.appContext.config.errorHandler;
    if (c) {
      Ye(
        c,
        null,
        10,
        [e, i, a]
      );
      return;
    }
  }
  wa(e, n, o, r);
}
function wa(e, t, n, r = !0) {
  if (process.env.NODE_ENV !== "production") {
    const o = pr[t];
    if (n && ma(n), $(`Unhandled error${o ? ` during execution of ${o}` : ""}`), n && ya(), r)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let en = !1, Fn = !1;
const ie = [];
let Ce = 0;
const it = [];
let pe = null, Ne = 0;
const ys = /* @__PURE__ */ Promise.resolve();
let gr = null;
const Sa = 100;
function xt(e) {
  const t = gr || ys;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Oa(e) {
  let t = Ce + 1, n = ie.length;
  for (; t < n; ) {
    const r = t + n >>> 1, o = ie[r], s = $t(o);
    s < e || s === e && o.pre ? t = r + 1 : n = r;
  }
  return t;
}
function vr(e) {
  (!ie.length || !ie.includes(
    e,
    en && e.allowRecurse ? Ce + 1 : Ce
  )) && (e.id == null ? ie.push(e) : ie.splice(Oa(e.id), 0, e), bs());
}
function bs() {
  !en && !Fn && (Fn = !0, gr = ys.then(Ns));
}
function _s(e) {
  w(e) ? it.push(...e) : (!pe || !pe.includes(
    e,
    e.allowRecurse ? Ne + 1 : Ne
  )) && it.push(e), bs();
}
function Ta(e) {
  if (it.length) {
    const t = [...new Set(it)].sort(
      (n, r) => $t(n) - $t(r)
    );
    if (it.length = 0, pe) {
      pe.push(...t);
      return;
    }
    for (pe = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Ne = 0; Ne < pe.length; Ne++)
      process.env.NODE_ENV !== "production" && Es(e, pe[Ne]) || pe[Ne]();
    pe = null, Ne = 0;
  }
}
const $t = (e) => e.id == null ? 1 / 0 : e.id, xa = (e, t) => {
  const n = $t(e) - $t(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Ns(e) {
  Fn = !1, en = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), ie.sort(xa);
  const t = process.env.NODE_ENV !== "production" ? (n) => Es(e, n) : Se;
  try {
    for (Ce = 0; Ce < ie.length; Ce++) {
      const n = ie[Ce];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        Ye(n, null, 14);
      }
    }
  } finally {
    Ce = 0, ie.length = 0, Ta(e), en = !1, gr = null, (ie.length || it.length) && Ns(e);
  }
}
function Es(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Sa) {
      const r = t.ownerInstance, o = r && Er(r.type);
      return hr(
        `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
const ot = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (Jo().__VUE_HMR_RUNTIME__ = {
  createRecord: On($a),
  rerender: On(Da),
  reload: On(ka)
});
const tn = /* @__PURE__ */ new Map();
function $a(e, t) {
  return tn.has(e) ? !1 : (tn.set(e, {
    initialDef: Ct(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Ct(e) {
  return Hs(e) ? e.__vccOpts : e;
}
function Da(e, t) {
  const n = tn.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((r) => {
    t && (r.render = t, Ct(r.type).render = t), r.renderCache = [], r.effect.dirty = !0, r.update();
  }));
}
function ka(e, t) {
  const n = tn.get(e);
  if (!n)
    return;
  t = Ct(t), qr(n.initialDef, t);
  const r = [...n.instances];
  for (const o of r) {
    const s = Ct(o.type);
    ot.has(s) || (s !== n.initialDef && qr(s, t), ot.add(s)), o.appContext.propsCache.delete(o.type), o.appContext.emitsCache.delete(o.type), o.appContext.optionsCache.delete(o.type), o.ceReload ? (ot.add(s), o.ceReload(t.styles), ot.delete(s)) : o.parent ? (o.parent.effect.dirty = !0, vr(o.parent.update)) : o.appContext.reload ? o.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  _s(() => {
    for (const o of r)
      ot.delete(
        Ct(o.type)
      );
  });
}
function qr(e, t) {
  Z(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function On(e) {
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
let we, _t = [], Bn = !1;
function Ia(e, ...t) {
  we ? we.emit(e, ...t) : Bn || _t.push({ event: e, args: t });
}
function Cs(e, t) {
  var n, r;
  we = e, we ? (we.enabled = !0, _t.forEach(({ event: o, args: s }) => we.emit(o, ...s)), _t = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((r = (n = window.navigator) == null ? void 0 : n.userAgent) != null && r.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    Cs(s, t);
  }), setTimeout(() => {
    we || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Bn = !0, _t = []);
  }, 3e3)) : (Bn = !0, _t = []);
}
const Aa = /* @__PURE__ */ Pa(
  "component:updated"
  /* COMPONENT_UPDATED */
);
function Pa(e) {
  return (t) => {
    Ia(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
let j = null, ws = null;
function Wr(e) {
  const t = j;
  return j = e, ws = e && e.type.__scopeId || null, t;
}
function at(e, t = j, n) {
  if (!t || e._n)
    return e;
  const r = (...o) => {
    r._d && ro(-1);
    const s = Wr(t);
    let i;
    try {
      i = e(...o);
    } finally {
      Wr(s), r._d && ro(1);
    }
    return process.env.NODE_ENV !== "production" && Aa(t), i;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
const nn = "components";
function Be(e, t) {
  return Os(nn, e, !0, t) || e;
}
const Ss = Symbol.for("v-ndc");
function mr(e) {
  return z(e) ? Os(nn, e, !1) || e : e || Ss;
}
function Os(e, t, n = !0, r = !1) {
  const o = j || ee;
  if (o) {
    const s = o.type;
    if (e === nn) {
      const a = Er(
        s,
        !1
      );
      if (a && (a === t || a === Qt(t) || a === Ot(Qt(t))))
        return s;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      Jr(o[e] || s[e], t) || // global registration
      Jr(o.appContext[e], t)
    );
    if (!i && r)
      return s;
    if (process.env.NODE_ENV !== "production" && n && !i) {
      const a = e === nn ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      $(`Failed to resolve ${e.slice(0, -1)}: ${t}${a}`);
    }
    return i;
  } else
    process.env.NODE_ENV !== "production" && $(
      `resolve${Ot(e.slice(0, -1))} can only be used in render() or setup().`
    );
}
function Jr(e, t) {
  return e && (e[t] || e[Qt(t)] || e[Ot(Qt(t))]);
}
const Va = (e) => e.__isSuspense;
function La(e, t) {
  t && t.pendingBranch ? w(e) ? t.effects.push(...e) : t.effects.push(e) : _s(e);
}
const Ra = Symbol.for("v-scx"), Ka = () => {
  {
    const e = G(Ra);
    return e || process.env.NODE_ENV !== "production" && $(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
}, jt = {};
function Y(e, t, n) {
  return process.env.NODE_ENV !== "production" && !F(t) && $(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Ts(e, t, n);
}
function Ts(e, t, {
  immediate: n,
  deep: r,
  flush: o,
  once: s,
  onTrack: i,
  onTrigger: a
} = se) {
  if (t && s) {
    const T = t;
    t = (...X) => {
      T(...X), C();
    };
  }
  process.env.NODE_ENV !== "production" && r !== void 0 && typeof r == "number" && $(
    'watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'
  ), process.env.NODE_ENV !== "production" && !t && (n !== void 0 && $(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && $(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && $(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const c = (T) => {
    $(
      "Invalid watch source: ",
      T,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = ee, u = (T) => r === !0 ? T : (
    // for deep: false, only traverse root-level properties
    ze(T, r === !1 ? 1 : void 0)
  );
  let l, f = !1, g = !1;
  if (H(e) ? (l = () => e.value, f = We(e)) : qe(e) ? (l = () => u(e), f = !0) : w(e) ? (g = !0, f = e.some((T) => qe(T) || We(T)), l = () => e.map((T) => {
    if (H(T))
      return T.value;
    if (qe(T))
      return u(T);
    if (F(T))
      return Ye(T, d, 2);
    process.env.NODE_ENV !== "production" && c(T);
  })) : F(e) ? t ? l = () => Ye(e, d, 2) : l = () => (p && p(), st(
    e,
    d,
    3,
    [h]
  )) : (l = Se, process.env.NODE_ENV !== "production" && c(e)), t && r) {
    const T = l;
    l = () => ze(T());
  }
  let p, h = (T) => {
    p = O.onStop = () => {
      Ye(T, d, 4), p = O.onStop = void 0;
    };
  }, m;
  if (_n)
    if (h = Se, t ? n && st(t, d, 3, [
      l(),
      g ? [] : void 0,
      h
    ]) : l(), o === "sync") {
      const T = Ka();
      m = T.__watcherHandles || (T.__watcherHandles = []);
    } else
      return Se;
  let v = g ? new Array(e.length).fill(jt) : jt;
  const y = () => {
    if (!(!O.active || !O.dirty))
      if (t) {
        const T = O.run();
        (r || f || (g ? T.some((X, x) => Ie(X, v[x])) : Ie(T, v))) && (p && p(), st(t, d, 3, [
          T,
          // pass undefined as the old value when it's changed for the first time
          v === jt ? void 0 : g && v[0] === jt ? [] : v,
          h
        ]), v = T);
      } else
        O.run();
  };
  y.allowRecurse = !!t;
  let V;
  o === "sync" ? V = y : o === "post" ? V = () => no(y, d && d.suspense) : (y.pre = !0, d && (y.id = d.uid), V = () => vr(y));
  const O = new Xo(l, Se, V), C = () => {
    O.stop();
  };
  return process.env.NODE_ENV !== "production" && (O.onTrack = i, O.onTrigger = a), t ? n ? y() : v = O.run() : o === "post" ? no(
    O.run.bind(O),
    d && d.suspense
  ) : O.run(), m && m.push(C), C;
}
function Ma(e, t, n) {
  const r = this.proxy, o = z(e) ? e.includes(".") ? Fa(r, e) : () => r[e] : e.bind(r, r);
  let s;
  F(t) ? s = t : (s = t.handler, n = t);
  const i = Bs(this), a = Ts(o, s.bind(r), n);
  return i(), a;
}
function Fa(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++)
      r = r[n[o]];
    return r;
  };
}
function ze(e, t, n = 0, r) {
  if (!L(e) || e.__v_skip)
    return e;
  if (t && t > 0) {
    if (n >= t)
      return e;
    n++;
  }
  if (r = r || /* @__PURE__ */ new Set(), r.has(e))
    return e;
  if (r.add(e), H(e))
    ze(e.value, t, n, r);
  else if (w(e))
    for (let o = 0; o < e.length; o++)
      ze(e[o], t, n, r);
  else if (hn(e) || He(e))
    e.forEach((o) => {
      ze(o, t, n, r);
    });
  else if (qo(e))
    for (const o in e)
      ze(e[o], t, n, r);
  return e;
}
function Xe(e, t) {
  if (j === null)
    return process.env.NODE_ENV !== "production" && $("withDirectives can only be used inside render functions."), e;
  const n = js(j) || j.proxy, r = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [s, i, a, c = se] = t[o];
    s && (F(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && ze(i), r.push({
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
const Ee = Symbol("_leaveCb"), zt = Symbol("_enterCb");
function Ba() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return yr(() => {
    e.isMounted = !0;
  }), qa(() => {
    e.isUnmounting = !0;
  }), e;
}
const te = [Function, Array], xs = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: te,
  onEnter: te,
  onAfterEnter: te,
  onEnterCancelled: te,
  // leave
  onBeforeLeave: te,
  onLeave: te,
  onAfterLeave: te,
  onLeaveCancelled: te,
  // appear
  onBeforeAppear: te,
  onAppear: te,
  onAfterAppear: te,
  onAppearCancelled: te
}, ja = {
  name: "BaseTransition",
  props: xs,
  setup(e, { slots: t }) {
    const n = de(), r = Ba();
    return () => {
      const o = t.default && Ds(t.default(), !0);
      if (!o || !o.length)
        return;
      let s = o[0];
      if (o.length > 1) {
        let f = !1;
        for (const g of o)
          if (g.type !== $e) {
            if (process.env.NODE_ENV !== "production" && f) {
              $(
                "<transition> can only be used on a single element or component. Use <transition-group> for lists."
              );
              break;
            }
            if (s = g, f = !0, process.env.NODE_ENV === "production")
              break;
          }
      }
      const i = S(e), { mode: a } = i;
      if (process.env.NODE_ENV !== "production" && a && a !== "in-out" && a !== "out-in" && a !== "default" && $(`invalid <transition> mode: ${a}`), r.isLeaving)
        return Tn(s);
      const c = Yr(s);
      if (!c)
        return Tn(s);
      const d = jn(
        c,
        i,
        r,
        n
      );
      zn(c, d);
      const u = n.subTree, l = u && Yr(u);
      if (l && l.type !== $e && !Ls(c, l)) {
        const f = jn(
          l,
          i,
          r,
          n
        );
        if (zn(l, f), a === "out-in")
          return r.isLeaving = !0, f.afterLeave = () => {
            r.isLeaving = !1, n.update.active !== !1 && (n.effect.dirty = !0, n.update());
          }, Tn(s);
        a === "in-out" && c.type !== $e && (f.delayLeave = (g, p, h) => {
          const m = $s(
            r,
            l
          );
          m[String(l.key)] = l, g[Ee] = () => {
            p(), g[Ee] = void 0, delete d.delayedLeave;
          }, d.delayedLeave = h;
        });
      }
      return s;
    };
  }
}, za = ja;
function $s(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function jn(e, t, n, r) {
  const {
    appear: o,
    mode: s,
    persisted: i = !1,
    onBeforeEnter: a,
    onEnter: c,
    onAfterEnter: d,
    onEnterCancelled: u,
    onBeforeLeave: l,
    onLeave: f,
    onAfterLeave: g,
    onLeaveCancelled: p,
    onBeforeAppear: h,
    onAppear: m,
    onAfterAppear: v,
    onAppearCancelled: y
  } = t, V = String(e.key), O = $s(n, e), C = (x, b) => {
    x && st(
      x,
      r,
      9,
      b
    );
  }, T = (x, b) => {
    const D = b[1];
    C(x, b), w(x) ? x.every((A) => A.length <= 1) && D() : x.length <= 1 && D();
  }, X = {
    mode: s,
    persisted: i,
    beforeEnter(x) {
      let b = a;
      if (!n.isMounted)
        if (o)
          b = h || a;
        else
          return;
      x[Ee] && x[Ee](
        !0
        /* cancelled */
      );
      const D = O[V];
      D && Ls(e, D) && D.el[Ee] && D.el[Ee](), C(b, [x]);
    },
    enter(x) {
      let b = c, D = d, A = u;
      if (!n.isMounted)
        if (o)
          b = m || c, D = v || d, A = y || u;
        else
          return;
      let N = !1;
      const U = x[zt] = (re) => {
        N || (N = !0, re ? C(A, [x]) : C(D, [x]), X.delayedLeave && X.delayedLeave(), x[zt] = void 0);
      };
      b ? T(b, [x, U]) : U();
    },
    leave(x, b) {
      const D = String(e.key);
      if (x[zt] && x[zt](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return b();
      C(l, [x]);
      let A = !1;
      const N = x[Ee] = (U) => {
        A || (A = !0, b(), U ? C(p, [x]) : C(g, [x]), x[Ee] = void 0, O[D] === e && delete O[D]);
      };
      O[D] = e, f ? T(f, [x, N]) : N();
    },
    clone(x) {
      return jn(x, t, n, r);
    }
  };
  return X;
}
function Tn(e) {
  if (ks(e))
    return e = ut(e), e.children = null, e;
}
function Yr(e) {
  return ks(e) ? (
    // #7121 ensure get the child component subtree in case
    // it's been replaced during HMR
    process.env.NODE_ENV !== "production" && e.component ? e.component.subTree : e.children ? e.children[0] : void 0
  ) : e;
}
function zn(e, t) {
  e.shapeFlag & 6 && e.component ? zn(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Ds(e, t = !1, n) {
  let r = [], o = 0;
  for (let s = 0; s < e.length; s++) {
    let i = e[s];
    const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : s);
    i.type === Ve ? (i.patchFlag & 128 && o++, r = r.concat(
      Ds(i.children, t, a)
    )) : (t || i.type !== $e) && r.push(a != null ? ut(i, { key: a }) : i);
  }
  if (o > 1)
    for (let s = 0; s < r.length; s++)
      r[s].patchFlag = -2;
  return r;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function J(e, t) {
  return F(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Z({ name: e.name }, t, { setup: e })
  ) : e;
}
const Ha = (e) => !!e.type.__asyncLoader, ks = (e) => e.type.__isKeepAlive;
function Ua(e, t, n = ee, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      vn();
      const a = Bs(n), c = st(t, n, e, i);
      return a(), mn(), c;
    });
    return r ? o.unshift(s) : o.push(s), s;
  } else if (process.env.NODE_ENV !== "production") {
    const o = Wo(pr[e].replace(/ hook$/, ""));
    $(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const bn = (e) => (t, n = ee) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!_n || e === "sp") && Ua(e, (...r) => t(...r), n)
), yr = bn("m"), Ga = bn("u"), qa = bn("bum"), Wa = bn("um");
function Is(e, t, n, r) {
  let o;
  const s = n && n[r];
  if (w(e) || z(e)) {
    o = new Array(e.length);
    for (let i = 0, a = e.length; i < a; i++)
      o[i] = t(e[i], i, void 0, s && s[i]);
  } else if (typeof e == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(e) && $(`The v-for range expect an integer value but got ${e}.`), o = new Array(e);
    for (let i = 0; i < e; i++)
      o[i] = t(i + 1, i, void 0, s && s[i]);
  } else if (L(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (i, a) => t(i, a, void 0, s && s[a])
      );
    else {
      const i = Object.keys(e);
      o = new Array(i.length);
      for (let a = 0, c = i.length; a < c; a++) {
        const d = i[a];
        o[a] = t(e[d], d, a, s && s[a]);
      }
    }
  else
    o = [];
  return n && (n[r] = o), o;
}
function et(e, t, n = {}, r, o) {
  if (j.isCE || j.parent && Ha(j.parent) && j.parent.isCE)
    return t !== "default" && (n.name = t), ne("slot", n, r && r());
  let s = e[t];
  process.env.NODE_ENV !== "production" && s && s.length > 1 && ($(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), s = () => []), s && s._c && (s._d = !1), I();
  const i = s && As(s(n)), a = ae(
    Ve,
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
function As(e) {
  return e.some((t) => on(t) ? !(t.type === $e || t.type === Ve && !As(t.children)) : !0) ? e : null;
}
function Ja(e, t) {
  const n = {};
  if (process.env.NODE_ENV !== "production" && !L(e))
    return $("v-on with no argument expects an object value."), n;
  for (const r in e)
    n[t && /[A-Z]/.test(r) ? `on:${r}` : Wo(r)] = e[r];
  return n;
}
const Hn = (e) => e ? ll(e) ? js(e) || e.proxy : Hn(e.parent) : null, wt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Z(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? Bt(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? Bt(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? Bt(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? Bt(e.refs) : e.refs,
    $parent: (e) => Hn(e.parent),
    $root: (e) => Hn(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Za(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, vr(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = xt.bind(e.proxy)),
    $watch: (e) => Ma.bind(e)
  })
), Ya = (e) => e === "_" || e === "$", xn = (e, t) => e !== se && !e.__isScriptSetup && R(e, t), Qa = {
  get({ _: e }, t) {
    const { ctx: n, setupState: r, data: o, props: s, accessCache: i, type: a, appContext: c } = e;
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
            return o[t];
          case 4:
            return n[t];
          case 3:
            return s[t];
        }
      else {
        if (xn(r, t))
          return i[t] = 1, r[t];
        if (o !== se && R(o, t))
          return i[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (d = e.propsOptions[0]) && R(d, t)
        )
          return i[t] = 3, s[t];
        if (n !== se && R(n, t))
          return i[t] = 4, n[t];
        i[t] = 0;
      }
    }
    const u = wt[t];
    let l, f;
    if (u)
      return t === "$attrs" ? (W(e, "get", t), process.env.NODE_ENV !== "production" && void 0) : process.env.NODE_ENV !== "production" && t === "$slots" && W(e, "get", t), u(e);
    if (
      // css module (injected by vue-loader)
      (l = a.__cssModules) && (l = l[t])
    )
      return l;
    if (n !== se && R(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      f = c.config.globalProperties, R(f, t)
    )
      return f[t];
    process.env.NODE_ENV !== "production" && j && (!z(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== se && Ya(t[0]) && R(o, t) ? $(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === j && $(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: o, ctx: s } = e;
    return xn(o, t) ? (o[t] = n, !0) : process.env.NODE_ENV !== "production" && o.__isScriptSetup && R(o, t) ? ($(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : r !== se && R(r, t) ? (r[t] = n, !0) : R(e.props, t) ? (process.env.NODE_ENV !== "production" && $(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && $(
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
    return !!n[i] || e !== se && R(e, i) || xn(t, i) || (a = s[0]) && R(a, i) || R(r, i) || R(wt, i) || R(o.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : R(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (Qa.ownKeys = (e) => ($(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Ps() {
  return Xa().slots;
}
function Xa() {
  const e = de();
  return process.env.NODE_ENV !== "production" && !e && $("useContext() called without active instance."), e.setupContext || (e.setupContext = ul(e));
}
function Qr(e) {
  return w(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Za(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: o,
    optionsCache: s,
    config: { optionMergeStrategies: i }
  } = e.appContext, a = s.get(t);
  let c;
  return a ? c = a : !o.length && !n && !r ? c = t : (c = {}, o.length && o.forEach(
    (d) => rn(c, d, i, !0)
  ), rn(c, t, i)), L(t) && s.set(t, c), c;
}
function rn(e, t, n, r = !1) {
  const { mixins: o, extends: s } = t;
  s && rn(e, s, n, !0), o && o.forEach(
    (i) => rn(e, i, n, !0)
  );
  for (const i in t)
    if (r && i === "expose")
      process.env.NODE_ENV !== "production" && $(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const a = el[i] || n && n[i];
      e[i] = a ? a(e[i], t[i]) : t[i];
    }
  return e;
}
const el = {
  data: Xr,
  props: eo,
  emits: eo,
  // objects
  methods: Nt,
  computed: Nt,
  // lifecycle
  beforeCreate: Q,
  created: Q,
  beforeMount: Q,
  mounted: Q,
  beforeUpdate: Q,
  updated: Q,
  beforeDestroy: Q,
  beforeUnmount: Q,
  destroyed: Q,
  unmounted: Q,
  activated: Q,
  deactivated: Q,
  errorCaptured: Q,
  serverPrefetch: Q,
  // assets
  components: Nt,
  directives: Nt,
  // watch
  watch: nl,
  // provide / inject
  provide: Xr,
  inject: tl
};
function Xr(e, t) {
  return t ? e ? function() {
    return Z(
      F(e) ? e.call(this, this) : e,
      F(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function tl(e, t) {
  return Nt(Zr(e), Zr(t));
}
function Zr(e) {
  if (w(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Q(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Nt(e, t) {
  return e ? Z(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function eo(e, t) {
  return e ? w(e) && w(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Z(
    /* @__PURE__ */ Object.create(null),
    Qr(e),
    Qr(t ?? {})
  ) : t;
}
function nl(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = Z(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Q(e[r], t[r]);
  return n;
}
let to = null;
function ct(e, t) {
  if (!ee)
    process.env.NODE_ENV !== "production" && $("provide() can only be used inside setup().");
  else {
    let n = ee.provides;
    const r = ee.parent && ee.parent.provides;
    r === n && (n = ee.provides = Object.create(r)), n[e] = t;
  }
}
function G(e, t, n = !1) {
  const r = ee || j;
  if (r || to) {
    const o = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : to._context.provides;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && F(t) ? t.call(r && r.proxy) : t;
    process.env.NODE_ENV !== "production" && $(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && $("inject() can only be used inside setup() or functional components.");
}
const no = La, rl = (e) => e.__isTeleport, Ve = Symbol.for("v-fgt"), ol = Symbol.for("v-txt"), $e = Symbol.for("v-cmt"), qt = [];
let le = null;
function I(e = !1) {
  qt.push(le = e ? null : []);
}
function sl() {
  qt.pop(), le = qt[qt.length - 1] || null;
}
let Dt = 1;
function ro(e) {
  Dt += e;
}
function Vs(e) {
  return e.dynamicChildren = Dt > 0 ? le || Ti : null, sl(), Dt > 0 && le && le.push(e), e;
}
function q(e, t, n, r, o, s) {
  return Vs(
    ce(
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
function ae(e, t, n, r, o) {
  return Vs(
    ne(
      e,
      t,
      n,
      r,
      o,
      !0
    )
  );
}
function on(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ls(e, t) {
  return process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && ot.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
const il = (...e) => Ms(
  ...e
), Rs = "__vInternal", Ks = ({ key: e }) => e ?? null, Wt = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? z(e) || H(e) || F(e) ? { i: j, r: e, k: t, f: !!n } : e : null);
function ce(e, t = null, n = null, r = 0, o = null, s = e === Ve ? 0 : 1, i = !1, a = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ks(t),
    ref: t && Wt(t),
    scopeId: ws,
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
    ctx: j
  };
  return a ? (_r(c, n), s & 128 && e.normalize(c)) : n && (c.shapeFlag |= z(n) ? 8 : 16), process.env.NODE_ENV !== "production" && c.key !== c.key && $("VNode created with invalid key (NaN). VNode type:", c.type), Dt > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  le && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && le.push(c), c;
}
const ne = process.env.NODE_ENV !== "production" ? il : Ms;
function Ms(e, t = null, n = null, r = 0, o = null, s = !1) {
  if ((!e || e === Ss) && (process.env.NODE_ENV !== "production" && !e && $(`Invalid vnode type when creating vnode: ${e}.`), e = $e), on(e)) {
    const a = ut(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && _r(a, n), Dt > 0 && !s && le && (a.shapeFlag & 6 ? le[le.indexOf(e)] = a : le.push(a)), a.patchFlag |= -2, a;
  }
  if (Hs(e) && (e = e.__vccOpts), t) {
    t = al(t);
    let { class: a, style: c } = t;
    a && !z(a) && (t.class = M(a)), L(c) && (Zt(c) && !w(c) && (c = Z({}, c)), t.style = ft(c));
  }
  const i = z(e) ? 1 : Va(e) ? 128 : rl(e) ? 64 : L(e) ? 4 : F(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && Zt(e) && (e = S(e), $(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), ce(
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
function al(e) {
  return e ? Zt(e) || Rs in e ? Z({}, e) : e : null;
}
function ut(e, t, n = !1) {
  const { props: r, ref: o, patchFlag: s, children: i } = e, a = t ? Nr(r || {}, t) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && Ks(a),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? w(o) ? o.concat(Wt(t)) : [o, Wt(t)] : Wt(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && s === -1 && w(i) ? i.map(Fs) : i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Ve ? s === -1 ? 16 : s | 16 : s,
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
    ssContent: e.ssContent && ut(e.ssContent),
    ssFallback: e.ssFallback && ut(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function Fs(e) {
  const t = ut(e);
  return w(e.children) && (t.children = e.children.map(Fs)), t;
}
function br(e = " ", t = 0) {
  return ne(ol, null, e, t);
}
function Oe(e = "", t = !1) {
  return t ? (I(), ae($e, null, e)) : ne($e, null, e);
}
function _r(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (w(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), _r(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !(Rs in t) ? t._ctx = j : o === 3 && j && (j.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    F(t) ? (t = { default: t, _ctx: j }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [br(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Nr(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = M([t.class, r.class]));
      else if (o === "style")
        t.style = ft([t.style, r.style]);
      else if (xi(o)) {
        const s = t[o], i = r[o];
        i && s !== i && !(w(s) && s.includes(i)) && (t[o] = s ? [].concat(s, i) : i);
      } else
        o !== "" && (t[o] = r[o]);
  }
  return t;
}
let ee = null;
const de = () => ee || j;
let Un;
{
  const e = Jo(), t = (n, r) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(r), (s) => {
      o.length > 1 ? o.forEach((i) => i(s)) : o[0](s);
    };
  };
  Un = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ee = n
  ), t(
    "__VUE_SSR_SETTERS__",
    (n) => _n = n
  );
}
const Bs = (e) => {
  const t = ee;
  return Un(e), e.scope.on(), () => {
    e.scope.off(), Un(t);
  };
};
function ll(e) {
  return e.vnode.shapeFlag & 4;
}
let _n = !1;
function oo(e) {
  return e.attrsProxy || (e.attrsProxy = new Proxy(
    e.attrs,
    process.env.NODE_ENV !== "production" ? {
      get(t, n) {
        return W(e, "get", "$attrs"), t[n];
      },
      set() {
        return $("setupContext.attrs is readonly."), !1;
      },
      deleteProperty() {
        return $("setupContext.attrs is readonly."), !1;
      }
    } : {
      get(t, n) {
        return W(e, "get", "$attrs"), t[n];
      }
    }
  ));
}
function cl(e) {
  return e.slotsProxy || (e.slotsProxy = new Proxy(e.slots, {
    get(t, n) {
      return W(e, "get", "$slots"), t[n];
    }
  }));
}
function ul(e) {
  const t = (n) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && $("expose() should be called only once per setup()."), n != null)) {
      let r = typeof n;
      r === "object" && (w(n) ? r = "array" : H(n) && (r = "ref")), r !== "object" && $(
        `expose() should be passed a plain object, received ${r}.`
      );
    }
    e.exposed = n || {};
  };
  return process.env.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return oo(e);
    },
    get slots() {
      return cl(e);
    },
    get emit() {
      return (n, ...r) => e.emit(n, ...r);
    },
    expose: t
  }) : {
    get attrs() {
      return oo(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function js(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(pa(la(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in wt)
          return wt[n](e);
      },
      has(t, n) {
        return n in t || n in wt;
      }
    }));
}
const dl = /(?:^|[-_])(\w)/g, fl = (e) => e.replace(dl, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Er(e, t = !0) {
  return F(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function zs(e, t, n = !1) {
  let r = Er(t);
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
  return r ? fl(r) : n ? "App" : "Anonymous";
}
function Hs(e) {
  return F(e) && "__vccOpts" in e;
}
const k = (e, t) => {
  const n = ua(e, t, _n);
  if (process.env.NODE_ENV !== "production") {
    const r = de();
    r && r.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Gn(e, t, n) {
  const r = arguments.length;
  return r === 2 ? L(t) && !w(t) ? on(t) ? ne(e, null, [t]) : ne(e, t) : ne(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && on(n) && (n = [n]), ne(e, t, n));
}
function pl() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, r = { style: "color:#eb2f96" }, o = {
    header(l) {
      return L(l) ? l.__isVue ? ["div", e, "VueInstance"] : H(l) ? [
        "div",
        {},
        ["span", e, u(l)],
        "<",
        a(l.value),
        ">"
      ] : qe(l) ? [
        "div",
        {},
        ["span", e, We(l) ? "ShallowReactive" : "Reactive"],
        "<",
        a(l),
        `>${Pe(l) ? " (readonly)" : ""}`
      ] : Pe(l) ? [
        "div",
        {},
        ["span", e, We(l) ? "ShallowReadonly" : "Readonly"],
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
    l.type.props && l.props && f.push(i("props", S(l.props))), l.setupState !== se && f.push(i("setup", l.setupState)), l.data !== se && f.push(i("data", S(l.data)));
    const g = c(l, "computed");
    g && f.push(i("computed", g));
    const p = c(l, "inject");
    return p && f.push(i("injected", p)), f.push([
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
    return f = Z({}, f), Object.keys(f).length ? [
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
    return typeof l == "number" ? ["span", t, l] : typeof l == "string" ? ["span", n, JSON.stringify(l)] : typeof l == "boolean" ? ["span", r, l] : L(l) ? ["object", { object: f ? S(l) : l }] : ["span", n, String(l)];
  }
  function c(l, f) {
    const g = l.type;
    if (F(g))
      return;
    const p = {};
    for (const h in l.ctx)
      d(g, h, f) && (p[h] = l.ctx[h]);
    return p;
  }
  function d(l, f, g) {
    const p = l[g];
    if (w(p) && p.includes(f) || L(p) && f in p || l.extends && d(l.extends, f, g) || l.mixins && l.mixins.some((h) => d(h, f, g)))
      return !0;
  }
  function u(l) {
    return We(l) ? "ShallowRef" : l.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
const hl = process.env.NODE_ENV !== "production" ? $ : Se;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const be = "transition", mt = "animation", sn = Symbol("_vtc"), Cr = (e, { slots: t }) => Gn(za, gl(e), t);
Cr.displayName = "Transition";
const Us = {
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
Cr.props = /* @__PURE__ */ Z(
  {},
  xs,
  Us
);
const Re = (e, t = []) => {
  w(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, so = (e) => e ? w(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function gl(e) {
  const t = {};
  for (const N in e)
    N in Us || (t[N] = e[N]);
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
    appearActiveClass: d = i,
    appearToClass: u = a,
    leaveFromClass: l = `${n}-leave-from`,
    leaveActiveClass: f = `${n}-leave-active`,
    leaveToClass: g = `${n}-leave-to`
  } = e, p = vl(o), h = p && p[0], m = p && p[1], {
    onBeforeEnter: v,
    onEnter: y,
    onEnterCancelled: V,
    onLeave: O,
    onLeaveCancelled: C,
    onBeforeAppear: T = v,
    onAppear: X = y,
    onAppearCancelled: x = V
  } = t, b = (N, U, re) => {
    Ke(N, U ? u : a), Ke(N, U ? d : i), re && re();
  }, D = (N, U) => {
    N._isLeaving = !1, Ke(N, l), Ke(N, g), Ke(N, f), U && U();
  }, A = (N) => (U, re) => {
    const Pt = N ? X : y, Vt = () => b(U, N, re);
    Re(Pt, [U, Vt]), io(() => {
      Ke(U, N ? c : s), _e(U, N ? u : a), so(Pt) || ao(U, r, h, Vt);
    });
  };
  return Z(t, {
    onBeforeEnter(N) {
      Re(v, [N]), _e(N, s), _e(N, i);
    },
    onBeforeAppear(N) {
      Re(T, [N]), _e(N, c), _e(N, d);
    },
    onEnter: A(!1),
    onAppear: A(!0),
    onLeave(N, U) {
      N._isLeaving = !0;
      const re = () => D(N, U);
      _e(N, l), bl(), _e(N, f), io(() => {
        N._isLeaving && (Ke(N, l), _e(N, g), so(O) || ao(N, r, m, re));
      }), Re(O, [N, re]);
    },
    onEnterCancelled(N) {
      b(N, !1), Re(V, [N]);
    },
    onAppearCancelled(N) {
      b(N, !0), Re(x, [N]);
    },
    onLeaveCancelled(N) {
      D(N), Re(C, [N]);
    }
  });
}
function vl(e) {
  if (e == null)
    return null;
  if (L(e))
    return [$n(e.enter), $n(e.leave)];
  {
    const t = $n(e);
    return [t, t];
  }
}
function $n(e) {
  const t = Pi(e);
  return process.env.NODE_ENV !== "production" && Ca(t, "<transition> explicit duration"), t;
}
function _e(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[sn] || (e[sn] = /* @__PURE__ */ new Set())).add(t);
}
function Ke(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[sn];
  n && (n.delete(t), n.size || (e[sn] = void 0));
}
function io(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let ml = 0;
function ao(e, t, n, r) {
  const o = e._endId = ++ml, s = () => {
    o === e._endId && r();
  };
  if (n)
    return setTimeout(s, n);
  const { type: i, timeout: a, propCount: c } = yl(e, t);
  if (!i)
    return r();
  const d = i + "end";
  let u = 0;
  const l = () => {
    e.removeEventListener(d, f), s();
  }, f = (g) => {
    g.target === e && ++u >= c && l();
  };
  setTimeout(() => {
    u < c && l();
  }, a + 1), e.addEventListener(d, f);
}
function yl(e, t) {
  const n = window.getComputedStyle(e), r = (p) => (n[p] || "").split(", "), o = r(`${be}Delay`), s = r(`${be}Duration`), i = lo(o, s), a = r(`${mt}Delay`), c = r(`${mt}Duration`), d = lo(a, c);
  let u = null, l = 0, f = 0;
  t === be ? i > 0 && (u = be, l = i, f = s.length) : t === mt ? d > 0 && (u = mt, l = d, f = c.length) : (l = Math.max(i, d), u = l > 0 ? i > d ? be : mt : null, f = u ? u === be ? s.length : c.length : 0);
  const g = u === be && /\b(transform|all)(,|$)/.test(
    r(`${be}Property`).toString()
  );
  return {
    type: u,
    timeout: l,
    propCount: f,
    hasTransform: g
  };
}
function lo(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, r) => co(n) + co(e[r])));
}
function co(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function bl() {
  return document.body.offsetHeight;
}
const Gs = Symbol("_vod"), _l = Symbol("_vsh"), an = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[Gs] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : yt(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), yt(e, !0), r.enter(e)) : r.leave(e, () => {
      yt(e, !1);
    }) : yt(e, t));
  },
  beforeUnmount(e, { value: t }) {
    yt(e, t);
  }
};
process.env.NODE_ENV !== "production" && (an.name = "show");
function yt(e, t) {
  e.style.display = t ? e[Gs] : "none", e[_l] = !t;
}
Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : "");
function Nl(e, t, n, r) {
  e.addEventListener(t, n, r);
}
const uo = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return w(t) ? (n) => Ii(t, n) : t;
}, Dn = Symbol("_assign"), ln = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[Dn] = uo(n), Nl(e, "change", () => {
      const r = e._modelValue, o = El(e), s = e.checked, i = e[Dn];
      if (w(r)) {
        const a = Yo(r, o), c = a !== -1;
        if (s && !c)
          i(r.concat(o));
        else if (!s && c) {
          const d = [...r];
          d.splice(a, 1), i(d);
        }
      } else if (hn(r)) {
        const a = new Set(r);
        s ? a.add(o) : a.delete(o), i(a);
      } else
        i(qs(e, s));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: fo,
  beforeUpdate(e, t, n) {
    e[Dn] = uo(n), fo(e, t, n);
  }
};
function fo(e, { value: t, oldValue: n }, r) {
  e._modelValue = t, w(t) ? e.checked = Yo(t, r.props.value) > -1 : hn(t) ? e.checked = t.has(r.props.value) : t !== n && (e.checked = gn(t, qs(e, !0)));
}
function El(e) {
  return "_value" in e ? e._value : e.value;
}
function qs(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const Cl = ["ctrl", "shift", "alt", "meta"], wl = {
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
  exact: (e, t) => Cl.some((n) => e[`${n}Key`] && !t.includes(n))
}, oe = (e, t) => {
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = (o, ...s) => {
    for (let i = 0; i < t.length; i++) {
      const a = wl[t[i]];
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
function Sl() {
  pl();
}
process.env.NODE_ENV !== "production" && Sl();
const Ol = /* @__PURE__ */ J({
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
    let { iconName: t, className: n, size: r, color: o } = gs(e);
    const s = k(() => `#${t.value}`), i = k(() => n.value ? `svg-icon ${n.value}` : "svg-icon"), a = k(() => ({
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
}), Ws = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, Tl = ["xlink:href"];
function xl(e, t, n, r, o, s) {
  return I(), q("svg", {
    "aria-hidden": "true",
    class: M([e.svgClass, { "is-disabled": e.disabled }]),
    style: ft(e.iconSize)
  }, [
    ce("use", {
      class: "svg-use",
      "xlink:href": e.iconClassName
    }, null, 8, Tl)
  ], 6);
}
const $l = /* @__PURE__ */ Ws(Ol, [["render", xl], ["__scopeId", "data-v-9af4da72"]]);
var po;
const wr = typeof window < "u", Dl = (e) => typeof e == "string", kl = () => {
};
wr && ((po = window == null ? void 0 : window.navigator) != null && po.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Js(e) {
  return typeof e == "function" ? e() : _(e);
}
function Il(e) {
  return e;
}
function Al(e) {
  var t;
  const n = Js(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Pl = wr ? window : void 0;
function Vl(...e) {
  let t, n, r, o;
  if (Dl(e[0]) || Array.isArray(e[0]) ? ([n, r, o] = e, t = Pl) : [t, n, r, o] = e, !t)
    return kl;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const s = [], i = () => {
    s.forEach((u) => u()), s.length = 0;
  }, a = (u, l, f, g) => (u.addEventListener(l, f, g), () => u.removeEventListener(l, f, g)), c = Y(() => [Al(t), Js(o)], ([u, l]) => {
    i(), u && s.push(...n.flatMap((f) => r.map((g) => a(u, f, g, l))));
  }, { immediate: !0, flush: "post" });
  return () => {
    c(), i();
  };
}
const ho = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, go = "__vueuse_ssr_handlers__";
ho[go] = ho[go] || {};
var vo;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(vo || (vo = {}));
var Ll = Object.defineProperty, mo = Object.getOwnPropertySymbols, Rl = Object.prototype.hasOwnProperty, Kl = Object.prototype.propertyIsEnumerable, yo = (e, t, n) => t in e ? Ll(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ml = (e, t) => {
  for (var n in t || (t = {}))
    Rl.call(t, n) && yo(e, n, t[n]);
  if (mo)
    for (var n of mo(t))
      Kl.call(t, n) && yo(e, n, t[n]);
  return e;
};
const Fl = {
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
Ml({
  linear: Il
}, Fl);
var Ys = typeof global == "object" && global && global.Object === Object && global, Bl = typeof self == "object" && self && self.Object === Object && self, ge = Ys || Bl || Function("return this")(), ue = ge.Symbol, Qs = Object.prototype, jl = Qs.hasOwnProperty, zl = Qs.toString, bt = ue ? ue.toStringTag : void 0;
function Hl(e) {
  var t = jl.call(e, bt), n = e[bt];
  try {
    e[bt] = void 0;
    var r = !0;
  } catch {
  }
  var o = zl.call(e);
  return r && (t ? e[bt] = n : delete e[bt]), o;
}
var Ul = Object.prototype, Gl = Ul.toString;
function ql(e) {
  return Gl.call(e);
}
var Wl = "[object Null]", Jl = "[object Undefined]", bo = ue ? ue.toStringTag : void 0;
function pt(e) {
  return e == null ? e === void 0 ? Jl : Wl : bo && bo in Object(e) ? Hl(e) : ql(e);
}
function dt(e) {
  return e != null && typeof e == "object";
}
var Yl = "[object Symbol]";
function Sr(e) {
  return typeof e == "symbol" || dt(e) && pt(e) == Yl;
}
function Ql(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var he = Array.isArray, Xl = 1 / 0, _o = ue ? ue.prototype : void 0, No = _o ? _o.toString : void 0;
function Xs(e) {
  if (typeof e == "string")
    return e;
  if (he(e))
    return Ql(e, Xs) + "";
  if (Sr(e))
    return No ? No.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Xl ? "-0" : t;
}
function cn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function Zl(e) {
  return e;
}
var ec = "[object AsyncFunction]", tc = "[object Function]", nc = "[object GeneratorFunction]", rc = "[object Proxy]";
function Zs(e) {
  if (!cn(e))
    return !1;
  var t = pt(e);
  return t == tc || t == nc || t == ec || t == rc;
}
var kn = ge["__core-js_shared__"], Eo = function() {
  var e = /[^.]+$/.exec(kn && kn.keys && kn.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function oc(e) {
  return !!Eo && Eo in e;
}
var sc = Function.prototype, ic = sc.toString;
function tt(e) {
  if (e != null) {
    try {
      return ic.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var ac = /[\\^$.*+?()[\]{}|]/g, lc = /^\[object .+?Constructor\]$/, cc = Function.prototype, uc = Object.prototype, dc = cc.toString, fc = uc.hasOwnProperty, pc = RegExp(
  "^" + dc.call(fc).replace(ac, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function hc(e) {
  if (!cn(e) || oc(e))
    return !1;
  var t = Zs(e) ? pc : lc;
  return t.test(tt(e));
}
function gc(e, t) {
  return e == null ? void 0 : e[t];
}
function nt(e, t) {
  var n = gc(e, t);
  return hc(n) ? n : void 0;
}
var qn = nt(ge, "WeakMap");
function vc(e, t, n) {
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
var mc = 800, yc = 16, bc = Date.now;
function _c(e) {
  var t = 0, n = 0;
  return function() {
    var r = bc(), o = yc - (r - n);
    if (n = r, o > 0) {
      if (++t >= mc)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Nc(e) {
  return function() {
    return e;
  };
}
var un = function() {
  try {
    var e = nt(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Ec = un ? function(e, t) {
  return un(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Nc(t),
    writable: !0
  });
} : Zl;
const Cc = Ec;
var wc = _c(Cc), Sc = 9007199254740991, Oc = /^(?:0|[1-9]\d*)$/;
function Or(e, t) {
  var n = typeof e;
  return t = t ?? Sc, !!t && (n == "number" || n != "symbol" && Oc.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Tc(e, t, n) {
  t == "__proto__" && un ? un(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function Tr(e, t) {
  return e === t || e !== e && t !== t;
}
var xc = Object.prototype, $c = xc.hasOwnProperty;
function Dc(e, t, n) {
  var r = e[t];
  (!($c.call(e, t) && Tr(r, n)) || n === void 0 && !(t in e)) && Tc(e, t, n);
}
var Co = Math.max;
function kc(e, t, n) {
  return t = Co(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, s = Co(r.length - t, 0), i = Array(s); ++o < s; )
      i[o] = r[t + o];
    o = -1;
    for (var a = Array(t + 1); ++o < t; )
      a[o] = r[o];
    return a[t] = n(i), vc(e, this, a);
  };
}
var Ic = 9007199254740991;
function xr(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Ic;
}
function Ac(e) {
  return e != null && xr(e.length) && !Zs(e);
}
var Pc = Object.prototype;
function Vc(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Pc;
  return e === n;
}
function Lc(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var Rc = "[object Arguments]";
function wo(e) {
  return dt(e) && pt(e) == Rc;
}
var ei = Object.prototype, Kc = ei.hasOwnProperty, Mc = ei.propertyIsEnumerable, $r = wo(/* @__PURE__ */ function() {
  return arguments;
}()) ? wo : function(e) {
  return dt(e) && Kc.call(e, "callee") && !Mc.call(e, "callee");
};
function Fc() {
  return !1;
}
var ti = typeof exports == "object" && exports && !exports.nodeType && exports, So = ti && typeof module == "object" && module && !module.nodeType && module, Bc = So && So.exports === ti, Oo = Bc ? ge.Buffer : void 0, jc = Oo ? Oo.isBuffer : void 0, Wn = jc || Fc, zc = "[object Arguments]", Hc = "[object Array]", Uc = "[object Boolean]", Gc = "[object Date]", qc = "[object Error]", Wc = "[object Function]", Jc = "[object Map]", Yc = "[object Number]", Qc = "[object Object]", Xc = "[object RegExp]", Zc = "[object Set]", eu = "[object String]", tu = "[object WeakMap]", nu = "[object ArrayBuffer]", ru = "[object DataView]", ou = "[object Float32Array]", su = "[object Float64Array]", iu = "[object Int8Array]", au = "[object Int16Array]", lu = "[object Int32Array]", cu = "[object Uint8Array]", uu = "[object Uint8ClampedArray]", du = "[object Uint16Array]", fu = "[object Uint32Array]", K = {};
K[ou] = K[su] = K[iu] = K[au] = K[lu] = K[cu] = K[uu] = K[du] = K[fu] = !0;
K[zc] = K[Hc] = K[nu] = K[Uc] = K[ru] = K[Gc] = K[qc] = K[Wc] = K[Jc] = K[Yc] = K[Qc] = K[Xc] = K[Zc] = K[eu] = K[tu] = !1;
function pu(e) {
  return dt(e) && xr(e.length) && !!K[pt(e)];
}
function hu(e) {
  return function(t) {
    return e(t);
  };
}
var ni = typeof exports == "object" && exports && !exports.nodeType && exports, St = ni && typeof module == "object" && module && !module.nodeType && module, gu = St && St.exports === ni, In = gu && Ys.process, To = function() {
  try {
    var e = St && St.require && St.require("util").types;
    return e || In && In.binding && In.binding("util");
  } catch {
  }
}(), xo = To && To.isTypedArray, ri = xo ? hu(xo) : pu, vu = Object.prototype, mu = vu.hasOwnProperty;
function yu(e, t) {
  var n = he(e), r = !n && $r(e), o = !n && !r && Wn(e), s = !n && !r && !o && ri(e), i = n || r || o || s, a = i ? Lc(e.length, String) : [], c = a.length;
  for (var d in e)
    (t || mu.call(e, d)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (d == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (d == "offset" || d == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (d == "buffer" || d == "byteLength" || d == "byteOffset") || // Skip index properties.
    Or(d, c))) && a.push(d);
  return a;
}
function bu(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var _u = bu(Object.keys, Object), Nu = Object.prototype, Eu = Nu.hasOwnProperty;
function Cu(e) {
  if (!Vc(e))
    return _u(e);
  var t = [];
  for (var n in Object(e))
    Eu.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function wu(e) {
  return Ac(e) ? yu(e) : Cu(e);
}
var Su = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ou = /^\w*$/;
function Tu(e, t) {
  if (he(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Sr(e) ? !0 : Ou.test(e) || !Su.test(e) || t != null && e in Object(t);
}
var kt = nt(Object, "create");
function xu() {
  this.__data__ = kt ? kt(null) : {}, this.size = 0;
}
function $u(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Du = "__lodash_hash_undefined__", ku = Object.prototype, Iu = ku.hasOwnProperty;
function Au(e) {
  var t = this.__data__;
  if (kt) {
    var n = t[e];
    return n === Du ? void 0 : n;
  }
  return Iu.call(t, e) ? t[e] : void 0;
}
var Pu = Object.prototype, Vu = Pu.hasOwnProperty;
function Lu(e) {
  var t = this.__data__;
  return kt ? t[e] !== void 0 : Vu.call(t, e);
}
var Ru = "__lodash_hash_undefined__";
function Ku(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = kt && t === void 0 ? Ru : t, this;
}
function Ze(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Ze.prototype.clear = xu;
Ze.prototype.delete = $u;
Ze.prototype.get = Au;
Ze.prototype.has = Lu;
Ze.prototype.set = Ku;
function Mu() {
  this.__data__ = [], this.size = 0;
}
function Nn(e, t) {
  for (var n = e.length; n--; )
    if (Tr(e[n][0], t))
      return n;
  return -1;
}
var Fu = Array.prototype, Bu = Fu.splice;
function ju(e) {
  var t = this.__data__, n = Nn(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : Bu.call(t, n, 1), --this.size, !0;
}
function zu(e) {
  var t = this.__data__, n = Nn(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Hu(e) {
  return Nn(this.__data__, e) > -1;
}
function Uu(e, t) {
  var n = this.__data__, r = Nn(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function ve(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ve.prototype.clear = Mu;
ve.prototype.delete = ju;
ve.prototype.get = zu;
ve.prototype.has = Hu;
ve.prototype.set = Uu;
var It = nt(ge, "Map");
function Gu() {
  this.size = 0, this.__data__ = {
    hash: new Ze(),
    map: new (It || ve)(),
    string: new Ze()
  };
}
function qu(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function En(e, t) {
  var n = e.__data__;
  return qu(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Wu(e) {
  var t = En(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Ju(e) {
  return En(this, e).get(e);
}
function Yu(e) {
  return En(this, e).has(e);
}
function Qu(e, t) {
  var n = En(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function me(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
me.prototype.clear = Gu;
me.prototype.delete = Wu;
me.prototype.get = Ju;
me.prototype.has = Yu;
me.prototype.set = Qu;
var Xu = "Expected a function";
function Dr(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Xu);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], s = n.cache;
    if (s.has(o))
      return s.get(o);
    var i = e.apply(this, r);
    return n.cache = s.set(o, i) || s, i;
  };
  return n.cache = new (Dr.Cache || me)(), n;
}
Dr.Cache = me;
var Zu = 500;
function ed(e) {
  var t = Dr(e, function(r) {
    return n.size === Zu && n.clear(), r;
  }), n = t.cache;
  return t;
}
var td = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, nd = /\\(\\)?/g, rd = ed(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(td, function(n, r, o, s) {
    t.push(o ? s.replace(nd, "$1") : r || n);
  }), t;
});
function od(e) {
  return e == null ? "" : Xs(e);
}
function Cn(e, t) {
  return he(e) ? e : Tu(e, t) ? [e] : rd(od(e));
}
var sd = 1 / 0;
function kr(e) {
  if (typeof e == "string" || Sr(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -sd ? "-0" : t;
}
function oi(e, t) {
  t = Cn(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[kr(t[n++])];
  return n && n == r ? e : void 0;
}
function id(e, t, n) {
  var r = e == null ? void 0 : oi(e, t);
  return r === void 0 ? n : r;
}
function si(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var $o = ue ? ue.isConcatSpreadable : void 0;
function ad(e) {
  return he(e) || $r(e) || !!($o && e && e[$o]);
}
function ii(e, t, n, r, o) {
  var s = -1, i = e.length;
  for (n || (n = ad), o || (o = []); ++s < i; ) {
    var a = e[s];
    t > 0 && n(a) ? t > 1 ? ii(a, t - 1, n, r, o) : si(o, a) : r || (o[o.length] = a);
  }
  return o;
}
function ld(e) {
  var t = e == null ? 0 : e.length;
  return t ? ii(e, 1) : [];
}
function cd(e) {
  return wc(kc(e, void 0, ld), e + "");
}
function ud() {
  this.__data__ = new ve(), this.size = 0;
}
function dd(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function fd(e) {
  return this.__data__.get(e);
}
function pd(e) {
  return this.__data__.has(e);
}
var hd = 200;
function gd(e, t) {
  var n = this.__data__;
  if (n instanceof ve) {
    var r = n.__data__;
    if (!It || r.length < hd - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new me(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function De(e) {
  var t = this.__data__ = new ve(e);
  this.size = t.size;
}
De.prototype.clear = ud;
De.prototype.delete = dd;
De.prototype.get = fd;
De.prototype.has = pd;
De.prototype.set = gd;
function vd(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, s = []; ++n < r; ) {
    var i = e[n];
    t(i, n, e) && (s[o++] = i);
  }
  return s;
}
function md() {
  return [];
}
var yd = Object.prototype, bd = yd.propertyIsEnumerable, Do = Object.getOwnPropertySymbols, _d = Do ? function(e) {
  return e == null ? [] : (e = Object(e), vd(Do(e), function(t) {
    return bd.call(e, t);
  }));
} : md;
const Nd = _d;
function Ed(e, t, n) {
  var r = t(e);
  return he(e) ? r : si(r, n(e));
}
function ko(e) {
  return Ed(e, wu, Nd);
}
var Jn = nt(ge, "DataView"), Yn = nt(ge, "Promise"), Qn = nt(ge, "Set"), Io = "[object Map]", Cd = "[object Object]", Ao = "[object Promise]", Po = "[object Set]", Vo = "[object WeakMap]", Lo = "[object DataView]", wd = tt(Jn), Sd = tt(It), Od = tt(Yn), Td = tt(Qn), xd = tt(qn), je = pt;
(Jn && je(new Jn(new ArrayBuffer(1))) != Lo || It && je(new It()) != Io || Yn && je(Yn.resolve()) != Ao || Qn && je(new Qn()) != Po || qn && je(new qn()) != Vo) && (je = function(e) {
  var t = pt(e), n = t == Cd ? e.constructor : void 0, r = n ? tt(n) : "";
  if (r)
    switch (r) {
      case wd:
        return Lo;
      case Sd:
        return Io;
      case Od:
        return Ao;
      case Td:
        return Po;
      case xd:
        return Vo;
    }
  return t;
});
const Ro = je;
var $d = ge.Uint8Array;
const Ko = $d;
var Dd = "__lodash_hash_undefined__";
function kd(e) {
  return this.__data__.set(e, Dd), this;
}
function Id(e) {
  return this.__data__.has(e);
}
function dn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new me(); ++t < n; )
    this.add(e[t]);
}
dn.prototype.add = dn.prototype.push = kd;
dn.prototype.has = Id;
function Ad(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function Pd(e, t) {
  return e.has(t);
}
var Vd = 1, Ld = 2;
function ai(e, t, n, r, o, s) {
  var i = n & Vd, a = e.length, c = t.length;
  if (a != c && !(i && c > a))
    return !1;
  var d = s.get(e), u = s.get(t);
  if (d && u)
    return d == t && u == e;
  var l = -1, f = !0, g = n & Ld ? new dn() : void 0;
  for (s.set(e, t), s.set(t, e); ++l < a; ) {
    var p = e[l], h = t[l];
    if (r)
      var m = i ? r(h, p, l, t, e, s) : r(p, h, l, e, t, s);
    if (m !== void 0) {
      if (m)
        continue;
      f = !1;
      break;
    }
    if (g) {
      if (!Ad(t, function(v, y) {
        if (!Pd(g, y) && (p === v || o(p, v, n, r, s)))
          return g.push(y);
      })) {
        f = !1;
        break;
      }
    } else if (!(p === h || o(p, h, n, r, s))) {
      f = !1;
      break;
    }
  }
  return s.delete(e), s.delete(t), f;
}
function Rd(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
function Kd(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var Md = 1, Fd = 2, Bd = "[object Boolean]", jd = "[object Date]", zd = "[object Error]", Hd = "[object Map]", Ud = "[object Number]", Gd = "[object RegExp]", qd = "[object Set]", Wd = "[object String]", Jd = "[object Symbol]", Yd = "[object ArrayBuffer]", Qd = "[object DataView]", Mo = ue ? ue.prototype : void 0, An = Mo ? Mo.valueOf : void 0;
function Xd(e, t, n, r, o, s, i) {
  switch (n) {
    case Qd:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Yd:
      return !(e.byteLength != t.byteLength || !s(new Ko(e), new Ko(t)));
    case Bd:
    case jd:
    case Ud:
      return Tr(+e, +t);
    case zd:
      return e.name == t.name && e.message == t.message;
    case Gd:
    case Wd:
      return e == t + "";
    case Hd:
      var a = Rd;
    case qd:
      var c = r & Md;
      if (a || (a = Kd), e.size != t.size && !c)
        return !1;
      var d = i.get(e);
      if (d)
        return d == t;
      r |= Fd, i.set(e, t);
      var u = ai(a(e), a(t), r, o, s, i);
      return i.delete(e), u;
    case Jd:
      if (An)
        return An.call(e) == An.call(t);
  }
  return !1;
}
var Zd = 1, ef = Object.prototype, tf = ef.hasOwnProperty;
function nf(e, t, n, r, o, s) {
  var i = n & Zd, a = ko(e), c = a.length, d = ko(t), u = d.length;
  if (c != u && !i)
    return !1;
  for (var l = c; l--; ) {
    var f = a[l];
    if (!(i ? f in t : tf.call(t, f)))
      return !1;
  }
  var g = s.get(e), p = s.get(t);
  if (g && p)
    return g == t && p == e;
  var h = !0;
  s.set(e, t), s.set(t, e);
  for (var m = i; ++l < c; ) {
    f = a[l];
    var v = e[f], y = t[f];
    if (r)
      var V = i ? r(y, v, f, t, e, s) : r(v, y, f, e, t, s);
    if (!(V === void 0 ? v === y || o(v, y, n, r, s) : V)) {
      h = !1;
      break;
    }
    m || (m = f == "constructor");
  }
  if (h && !m) {
    var O = e.constructor, C = t.constructor;
    O != C && "constructor" in e && "constructor" in t && !(typeof O == "function" && O instanceof O && typeof C == "function" && C instanceof C) && (h = !1);
  }
  return s.delete(e), s.delete(t), h;
}
var rf = 1, Fo = "[object Arguments]", Bo = "[object Array]", Ht = "[object Object]", of = Object.prototype, jo = of.hasOwnProperty;
function sf(e, t, n, r, o, s) {
  var i = he(e), a = he(t), c = i ? Bo : Ro(e), d = a ? Bo : Ro(t);
  c = c == Fo ? Ht : c, d = d == Fo ? Ht : d;
  var u = c == Ht, l = d == Ht, f = c == d;
  if (f && Wn(e)) {
    if (!Wn(t))
      return !1;
    i = !0, u = !1;
  }
  if (f && !u)
    return s || (s = new De()), i || ri(e) ? ai(e, t, n, r, o, s) : Xd(e, t, c, n, r, o, s);
  if (!(n & rf)) {
    var g = u && jo.call(e, "__wrapped__"), p = l && jo.call(t, "__wrapped__");
    if (g || p) {
      var h = g ? e.value() : e, m = p ? t.value() : t;
      return s || (s = new De()), o(h, m, n, r, s);
    }
  }
  return f ? (s || (s = new De()), nf(e, t, n, r, o, s)) : !1;
}
function li(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !dt(e) && !dt(t) ? e !== e && t !== t : sf(e, t, n, r, li, o);
}
function af(e, t) {
  return e != null && t in Object(e);
}
function lf(e, t, n) {
  t = Cn(t, e);
  for (var r = -1, o = t.length, s = !1; ++r < o; ) {
    var i = kr(t[r]);
    if (!(s = e != null && n(e, i)))
      break;
    e = e[i];
  }
  return s || ++r != o ? s : (o = e == null ? 0 : e.length, !!o && xr(o) && Or(i, o) && (he(e) || $r(e)));
}
function cf(e, t) {
  return e != null && lf(e, t, af);
}
function uf(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
    var o = e[t];
    r[o[0]] = o[1];
  }
  return r;
}
function df(e, t) {
  return li(e, t);
}
function ff(e) {
  return e == null;
}
function pf(e, t, n, r) {
  if (!cn(e))
    return e;
  t = Cn(t, e);
  for (var o = -1, s = t.length, i = s - 1, a = e; a != null && ++o < s; ) {
    var c = kr(t[o]), d = n;
    if (c === "__proto__" || c === "constructor" || c === "prototype")
      return e;
    if (o != i) {
      var u = a[c];
      d = r ? r(u, c, a) : void 0, d === void 0 && (d = cn(u) ? u : Or(t[o + 1]) ? [] : {});
    }
    Dc(a, c, d), a = a[c];
  }
  return e;
}
function hf(e, t, n) {
  for (var r = -1, o = t.length, s = {}; ++r < o; ) {
    var i = t[r], a = oi(e, i);
    n(a, i) && pf(s, Cn(i, e), a);
  }
  return s;
}
function gf(e, t) {
  return hf(e, t, function(n, r) {
    return cf(e, r);
  });
}
var vf = cd(function(e, t) {
  return e == null ? {} : gf(e, t);
});
const fn = (e) => e === void 0, Xn = (e) => typeof e == "boolean", Zn = (e) => typeof e == "number", pn = (e) => ff(e), mf = (e) => z(e) ? !Number.isNaN(Number(e)) : !1;
class yf extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function ht(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = z(e) ? new yf(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const bf = "utils/dom/style", ci = (e = "") => e.split(" ").filter((t) => !!t.trim()), _f = (e, t) => {
  !e || !t.trim() || e.classList.add(...ci(t));
}, Pn = (e, t) => {
  !e || !t.trim() || e.classList.remove(...ci(t));
};
function Nf(e, t = "px") {
  if (!e)
    return "";
  if (Zn(e) || mf(e))
    return `${e}${t}`;
  if (z(e))
    return e;
  ht(bf, "binding value must be a string or number");
}
/*! Element Plus Icons Vue v2.3.1 */
var Ef = /* @__PURE__ */ J({
  name: "CaretRight",
  __name: "caret-right",
  setup(e) {
    return (t, n) => (I(), q("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      ce("path", {
        fill: "currentColor",
        d: "M384 192v640l384-320.064z"
      })
    ]));
  }
}), Cf = Ef, wf = /* @__PURE__ */ J({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (t, n) => (I(), q("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      ce("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), Sf = wf;
const ui = "__epPropKey", Ir = (e) => e, Of = (e) => L(e) && !!e[ui], di = (e, t) => {
  if (!L(e) || Of(e))
    return e;
  const { values: n, required: r, default: o, type: s, validator: i } = e, c = {
    type: s,
    required: !!r,
    validator: n || i ? (d) => {
      let u = !1, l = [];
      if (n && (l = Array.from(n), R(e, "default") && l.push(o), u || (u = l.includes(d))), i && (u || (u = i(d))), !u && l.length > 0) {
        const f = [...new Set(l)].map((g) => JSON.stringify(g)).join(", ");
        hl(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${f}], got value ${JSON.stringify(d)}.`);
      }
      return u;
    } : void 0,
    [ui]: !0
  };
  return R(e, "default") && (c.default = o), c;
}, fi = (e) => uf(Object.entries(e).map(([t, n]) => [
  t,
  di(n, t)
])), Tf = Ir([
  String,
  Object,
  Function
]), pi = (e, t) => {
  if (e.install = (n) => {
    for (const r of [e, ...Object.values(t ?? {})])
      n.component(r.name, r);
  }, t)
    for (const [n, r] of Object.entries(t))
      e[n] = r;
  return e;
}, hi = (e) => (e.install = Se, e), Me = {
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
}, wn = "update:modelValue", xf = ["", "default", "small", "large"], Vn = ({ from: e, replacement: t, scope: n, version: r, ref: o, type: s = "API" }, i) => {
  Y(() => _(i), (a) => {
    a && ht(n, `[${s}] ${e} is about to be deprecated in version ${r}, please use ${t} instead.
For more detail, please visit: ${o}
`);
  }, {
    immediate: !0
  });
};
var $f = {
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
const Df = (e) => (t, n) => kf(t, n, _(e)), kf = (e, t, n) => id(n, e, e).replace(/\{(\w+)\}/g, (r, o) => {
  var s;
  return `${(s = t == null ? void 0 : t[o]) != null ? s : `{${o}}`}`;
}), If = (e) => {
  const t = k(() => _(e).name), n = H(e) ? e : B(e);
  return {
    lang: t,
    locale: n,
    t: Df(e)
  };
}, Af = Symbol("localeContextKey"), Pf = (e) => {
  const t = e || G(Af, B());
  return If(k(() => t.value || $f));
}, Ln = "el", Vf = "is-", Fe = (e, t, n, r, o) => {
  let s = `${e}-${t}`;
  return n && (s += `-${n}`), r && (s += `__${r}`), o && (s += `--${o}`), s;
}, Lf = Symbol("namespaceContextKey"), gi = (e) => {
  const t = e || (de() ? G(Lf, B(Ln)) : B(Ln));
  return k(() => _(t) || Ln);
}, fe = (e, t) => {
  const n = gi(t);
  return {
    namespace: n,
    b: (h = "") => Fe(n.value, e, h, "", ""),
    e: (h) => h ? Fe(n.value, e, "", h, "") : "",
    m: (h) => h ? Fe(n.value, e, "", "", h) : "",
    be: (h, m) => h && m ? Fe(n.value, e, h, m, "") : "",
    em: (h, m) => h && m ? Fe(n.value, e, "", h, m) : "",
    bm: (h, m) => h && m ? Fe(n.value, e, h, "", m) : "",
    bem: (h, m, v) => h && m && v ? Fe(n.value, e, h, m, v) : "",
    is: (h, ...m) => {
      const v = m.length >= 1 ? m[0] : !0;
      return h && v ? `${Vf}${h}` : "";
    },
    cssVar: (h) => {
      const m = {};
      for (const v in h)
        h[v] && (m[`--${n.value}-${v}`] = h[v]);
      return m;
    },
    cssVarName: (h) => `--${n.value}-${h}`,
    cssVarBlock: (h) => {
      const m = {};
      for (const v in h)
        h[v] && (m[`--${n.value}-${e}-${v}`] = h[v]);
      return m;
    },
    cssVarBlockName: (h) => `--${n.value}-${e}-${h}`
  };
}, vi = (e) => {
  const t = de();
  return k(() => {
    var n, r;
    return (r = (n = t == null ? void 0 : t.proxy) == null ? void 0 : n.$props) == null ? void 0 : r[e];
  });
}, er = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, Rf = Symbol("elIdInjection"), Kf = () => de() ? G(Rf, er) : er, Mf = (e) => {
  const t = Kf();
  !wr && t === er && ht("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const n = gi();
  return k(() => _(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, mi = di({
  type: String,
  values: xf,
  required: !1
}), Ff = Symbol("size"), Bf = () => {
  const e = G(Ff, {});
  return k(() => _(e.size) || "");
};
var Le = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
};
const jf = fi({
  size: {
    type: Ir([Number, String])
  },
  color: {
    type: String
  }
}), zf = /* @__PURE__ */ J({
  name: "ElIcon",
  inheritAttrs: !1
}), Hf = /* @__PURE__ */ J({
  ...zf,
  props: jf,
  setup(e) {
    const t = e, n = fe("icon"), r = k(() => {
      const { size: o, color: s } = t;
      return !o && !s ? {} : {
        fontSize: fn(o) ? void 0 : Nf(o),
        "--color": s
      };
    });
    return (o, s) => (I(), q("i", Nr({
      class: _(n).b(),
      style: _(r)
    }, o.$attrs), [
      et(o.$slots, "default")
    ], 16));
  }
});
var Uf = /* @__PURE__ */ Le(Hf, [["__file", "icon.vue"]]);
const Gf = pi(Uf), Ar = Symbol("formContextKey"), Pr = Symbol("formItemContextKey"), zo = (e, t = {}) => {
  const n = B(void 0), r = t.prop ? n : vi("size"), o = t.global ? n : Bf(), s = t.form ? { size: void 0 } : G(Ar, void 0), i = t.formItem ? { size: void 0 } : G(Pr, void 0);
  return k(() => r.value || _(e) || (i == null ? void 0 : i.size) || (s == null ? void 0 : s.size) || o.value || "");
}, qf = (e) => {
  const t = vi("disabled"), n = G(Ar, void 0);
  return k(() => t.value || _(e) || (n == null ? void 0 : n.disabled) || !1);
}, Vr = () => {
  const e = G(Ar, void 0), t = G(Pr, void 0);
  return {
    form: e,
    formItem: t
  };
}, yi = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: r
}) => {
  n || (n = B(!1)), r || (r = B(!1));
  const o = B();
  let s;
  const i = k(() => {
    var a;
    return !!(!e.label && t && t.inputIds && ((a = t.inputIds) == null ? void 0 : a.length) <= 1);
  });
  return yr(() => {
    s = Y([va(e, "id"), n], ([a, c]) => {
      const d = a ?? (c ? void 0 : Mf().value);
      d !== o.value && (t != null && t.removeInputId && (o.value && t.removeInputId(o.value), !(r != null && r.value) && !c && d && t.addInputId(d)), o.value = d);
    }, { immediate: !0 });
  }), Wa(() => {
    s && s(), t != null && t.removeInputId && o.value && t.removeInputId(o.value);
  }), {
    isLabeledByFormItem: i,
    inputId: o
  };
}, bi = {
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
  size: mi,
  tabindex: [String, Number],
  validateEvent: {
    type: Boolean,
    default: !0
  }
}, _i = {
  [wn]: (e) => z(e) || Zn(e) || Xn(e),
  change: (e) => z(e) || Zn(e) || Xn(e)
}, gt = Symbol("checkboxGroupContextKey"), Wf = ({
  model: e,
  isChecked: t
}) => {
  const n = G(gt, void 0), r = k(() => {
    var s, i;
    const a = (s = n == null ? void 0 : n.max) == null ? void 0 : s.value, c = (i = n == null ? void 0 : n.min) == null ? void 0 : i.value;
    return !fn(a) && e.value.length >= a && !t.value || !fn(c) && e.value.length <= c && t.value;
  });
  return {
    isDisabled: qf(k(() => (n == null ? void 0 : n.disabled.value) || r.value)),
    isLimitDisabled: r
  };
}, Jf = (e, {
  model: t,
  isLimitExceeded: n,
  hasOwnLabel: r,
  isDisabled: o,
  isLabeledByFormItem: s
}) => {
  const i = G(gt, void 0), { formItem: a } = Vr(), { emit: c } = de();
  function d(p) {
    var h, m, v, y;
    return [!0, e.trueValue, e.trueLabel].includes(p) ? (m = (h = e.trueValue) != null ? h : e.trueLabel) != null ? m : !0 : (y = (v = e.falseValue) != null ? v : e.falseLabel) != null ? y : !1;
  }
  function u(p, h) {
    c("change", d(p), h);
  }
  function l(p) {
    if (n.value)
      return;
    const h = p.target;
    c("change", d(h.checked), p);
  }
  async function f(p) {
    n.value || !r.value && !o.value && s.value && (p.composedPath().some((v) => v.tagName === "LABEL") || (t.value = d([!1, e.falseValue, e.falseLabel].includes(t.value)), await xt(), u(t.value, p)));
  }
  const g = k(() => (i == null ? void 0 : i.validateEvent) || e.validateEvent);
  return Y(() => e.modelValue, () => {
    g.value && (a == null || a.validate("change").catch((p) => ht(p)));
  }), {
    handleChange: l,
    onClickRoot: f
  };
}, Yf = (e) => {
  const t = B(!1), { emit: n } = de(), r = G(gt, void 0), o = k(() => fn(r) === !1), s = B(!1), i = k({
    get() {
      var a, c;
      return o.value ? (a = r == null ? void 0 : r.modelValue) == null ? void 0 : a.value : (c = e.modelValue) != null ? c : t.value;
    },
    set(a) {
      var c, d;
      o.value && w(a) ? (s.value = ((c = r == null ? void 0 : r.max) == null ? void 0 : c.value) !== void 0 && a.length > (r == null ? void 0 : r.max.value) && a.length > i.value.length, s.value === !1 && ((d = r == null ? void 0 : r.changeEvent) == null || d.call(r, a))) : (n(wn, a), t.value = a);
    }
  });
  return {
    model: i,
    isGroup: o,
    isLimitExceeded: s
  };
}, Qf = (e, t, { model: n }) => {
  const r = G(gt, void 0), o = B(!1), s = k(() => pn(e.value) ? e.label : e.value), i = k(() => {
    const u = n.value;
    return Xn(u) ? u : w(u) ? L(s.value) ? u.map(S).some((l) => df(l, s.value)) : u.map(S).includes(s.value) : u != null ? u === e.trueValue || u === e.trueLabel : !!u;
  }), a = zo(k(() => {
    var u;
    return (u = r == null ? void 0 : r.size) == null ? void 0 : u.value;
  }), {
    prop: !0
  }), c = zo(k(() => {
    var u;
    return (u = r == null ? void 0 : r.size) == null ? void 0 : u.value;
  })), d = k(() => !!t.default || !pn(s.value));
  return {
    checkboxButtonSize: a,
    isChecked: i,
    isFocused: o,
    checkboxSize: c,
    hasOwnLabel: d,
    actualValue: s
  };
}, Ni = (e, t) => {
  const { formItem: n } = Vr(), { model: r, isGroup: o, isLimitExceeded: s } = Yf(e), {
    isFocused: i,
    isChecked: a,
    checkboxButtonSize: c,
    checkboxSize: d,
    hasOwnLabel: u,
    actualValue: l
  } = Qf(e, t, { model: r }), { isDisabled: f } = Wf({ model: r, isChecked: a }), { inputId: g, isLabeledByFormItem: p } = yi(e, {
    formItemContext: n,
    disableIdGeneration: u,
    disableIdManagement: o
  }), { handleChange: h, onClickRoot: m } = Jf(e, {
    model: r,
    isLimitExceeded: s,
    hasOwnLabel: u,
    isDisabled: f,
    isLabeledByFormItem: p
  });
  return (() => {
    function y() {
      var V, O;
      w(r.value) && !r.value.includes(l.value) ? r.value.push(l.value) : r.value = (O = (V = e.trueValue) != null ? V : e.trueLabel) != null ? O : !0;
    }
    e.checked && y();
  })(), Vn({
    from: "label act as value",
    replacement: "value",
    version: "3.0.0",
    scope: "el-checkbox",
    ref: "https://element-plus.org/en-US/component/checkbox.html"
  }, k(() => o.value && pn(e.value))), Vn({
    from: "true-label",
    replacement: "true-value",
    version: "3.0.0",
    scope: "el-checkbox",
    ref: "https://element-plus.org/en-US/component/checkbox.html"
  }, k(() => !!e.trueLabel)), Vn({
    from: "false-label",
    replacement: "false-value",
    version: "3.0.0",
    scope: "el-checkbox",
    ref: "https://element-plus.org/en-US/component/checkbox.html"
  }, k(() => !!e.falseLabel)), {
    inputId: g,
    isLabeledByFormItem: p,
    isChecked: a,
    isDisabled: f,
    isFocused: i,
    checkboxButtonSize: c,
    checkboxSize: d,
    hasOwnLabel: u,
    model: r,
    actualValue: l,
    handleChange: h,
    onClickRoot: m
  };
}, Xf = ["id", "indeterminate", "name", "tabindex", "disabled", "true-value", "false-value"], Zf = ["id", "indeterminate", "disabled", "value", "name", "tabindex"], ep = /* @__PURE__ */ J({
  name: "ElCheckbox"
}), tp = /* @__PURE__ */ J({
  ...ep,
  props: bi,
  emits: _i,
  setup(e) {
    const t = e, n = Ps(), {
      inputId: r,
      isLabeledByFormItem: o,
      isChecked: s,
      isDisabled: i,
      isFocused: a,
      checkboxSize: c,
      hasOwnLabel: d,
      model: u,
      actualValue: l,
      handleChange: f,
      onClickRoot: g
    } = Ni(t, n), p = fe("checkbox"), h = k(() => [
      p.b(),
      p.m(c.value),
      p.is("disabled", i.value),
      p.is("bordered", t.border),
      p.is("checked", s.value)
    ]), m = k(() => [
      p.e("input"),
      p.is("disabled", i.value),
      p.is("checked", s.value),
      p.is("indeterminate", t.indeterminate),
      p.is("focus", a.value)
    ]);
    return (v, y) => (I(), ae(mr(!_(d) && _(o) ? "span" : "label"), {
      class: M(_(h)),
      "aria-controls": v.indeterminate ? v.controls : null,
      onClick: _(g)
    }, {
      default: at(() => {
        var V, O;
        return [
          ce("span", {
            class: M(_(m))
          }, [
            v.trueValue || v.falseValue || v.trueLabel || v.falseLabel ? Xe((I(), q("input", {
              key: 0,
              id: _(r),
              "onUpdate:modelValue": y[0] || (y[0] = (C) => H(u) ? u.value = C : null),
              class: M(_(p).e("original")),
              type: "checkbox",
              indeterminate: v.indeterminate,
              name: v.name,
              tabindex: v.tabindex,
              disabled: _(i),
              "true-value": (V = v.trueValue) != null ? V : v.trueLabel,
              "false-value": (O = v.falseValue) != null ? O : v.falseLabel,
              onChange: y[1] || (y[1] = (...C) => _(f) && _(f)(...C)),
              onFocus: y[2] || (y[2] = (C) => a.value = !0),
              onBlur: y[3] || (y[3] = (C) => a.value = !1),
              onClick: y[4] || (y[4] = oe(() => {
              }, ["stop"]))
            }, null, 42, Xf)), [
              [ln, _(u)]
            ]) : Xe((I(), q("input", {
              key: 1,
              id: _(r),
              "onUpdate:modelValue": y[5] || (y[5] = (C) => H(u) ? u.value = C : null),
              class: M(_(p).e("original")),
              type: "checkbox",
              indeterminate: v.indeterminate,
              disabled: _(i),
              value: _(l),
              name: v.name,
              tabindex: v.tabindex,
              onChange: y[6] || (y[6] = (...C) => _(f) && _(f)(...C)),
              onFocus: y[7] || (y[7] = (C) => a.value = !0),
              onBlur: y[8] || (y[8] = (C) => a.value = !1),
              onClick: y[9] || (y[9] = oe(() => {
              }, ["stop"]))
            }, null, 42, Zf)), [
              [ln, _(u)]
            ]),
            ce("span", {
              class: M(_(p).e("inner"))
            }, null, 2)
          ], 2),
          _(d) ? (I(), q("span", {
            key: 0,
            class: M(_(p).e("label"))
          }, [
            et(v.$slots, "default"),
            v.$slots.default ? Oe("v-if", !0) : (I(), q(Ve, { key: 0 }, [
              br(sr(v.label), 1)
            ], 64))
          ], 2)) : Oe("v-if", !0)
        ];
      }),
      _: 3
    }, 8, ["class", "aria-controls", "onClick"]));
  }
});
var np = /* @__PURE__ */ Le(tp, [["__file", "checkbox.vue"]]);
const rp = ["name", "tabindex", "disabled", "true-value", "false-value"], op = ["name", "tabindex", "disabled", "value"], sp = /* @__PURE__ */ J({
  name: "ElCheckboxButton"
}), ip = /* @__PURE__ */ J({
  ...sp,
  props: bi,
  emits: _i,
  setup(e) {
    const t = e, n = Ps(), {
      isFocused: r,
      isChecked: o,
      isDisabled: s,
      checkboxButtonSize: i,
      model: a,
      actualValue: c,
      handleChange: d
    } = Ni(t, n), u = G(gt, void 0), l = fe("checkbox"), f = k(() => {
      var p, h, m, v;
      const y = (h = (p = u == null ? void 0 : u.fill) == null ? void 0 : p.value) != null ? h : "";
      return {
        backgroundColor: y,
        borderColor: y,
        color: (v = (m = u == null ? void 0 : u.textColor) == null ? void 0 : m.value) != null ? v : "",
        boxShadow: y ? `-1px 0 0 0 ${y}` : void 0
      };
    }), g = k(() => [
      l.b("button"),
      l.bm("button", i.value),
      l.is("disabled", s.value),
      l.is("checked", o.value),
      l.is("focus", r.value)
    ]);
    return (p, h) => {
      var m, v;
      return I(), q("label", {
        class: M(_(g))
      }, [
        p.trueValue || p.falseValue || p.trueLabel || p.falseLabel ? Xe((I(), q("input", {
          key: 0,
          "onUpdate:modelValue": h[0] || (h[0] = (y) => H(a) ? a.value = y : null),
          class: M(_(l).be("button", "original")),
          type: "checkbox",
          name: p.name,
          tabindex: p.tabindex,
          disabled: _(s),
          "true-value": (m = p.trueValue) != null ? m : p.trueLabel,
          "false-value": (v = p.falseValue) != null ? v : p.falseLabel,
          onChange: h[1] || (h[1] = (...y) => _(d) && _(d)(...y)),
          onFocus: h[2] || (h[2] = (y) => r.value = !0),
          onBlur: h[3] || (h[3] = (y) => r.value = !1),
          onClick: h[4] || (h[4] = oe(() => {
          }, ["stop"]))
        }, null, 42, rp)), [
          [ln, _(a)]
        ]) : Xe((I(), q("input", {
          key: 1,
          "onUpdate:modelValue": h[5] || (h[5] = (y) => H(a) ? a.value = y : null),
          class: M(_(l).be("button", "original")),
          type: "checkbox",
          name: p.name,
          tabindex: p.tabindex,
          disabled: _(s),
          value: _(c),
          onChange: h[6] || (h[6] = (...y) => _(d) && _(d)(...y)),
          onFocus: h[7] || (h[7] = (y) => r.value = !0),
          onBlur: h[8] || (h[8] = (y) => r.value = !1),
          onClick: h[9] || (h[9] = oe(() => {
          }, ["stop"]))
        }, null, 42, op)), [
          [ln, _(a)]
        ]),
        p.$slots.default || p.label ? (I(), q("span", {
          key: 2,
          class: M(_(l).be("button", "inner")),
          style: ft(_(o) ? _(f) : void 0)
        }, [
          et(p.$slots, "default", {}, () => [
            br(sr(p.label), 1)
          ])
        ], 6)) : Oe("v-if", !0)
      ], 2);
    };
  }
});
var Ei = /* @__PURE__ */ Le(ip, [["__file", "checkbox-button.vue"]]);
const ap = fi({
  modelValue: {
    type: Ir(Array),
    default: () => []
  },
  disabled: Boolean,
  min: Number,
  max: Number,
  size: mi,
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
}), lp = {
  [wn]: (e) => w(e),
  change: (e) => w(e)
}, cp = /* @__PURE__ */ J({
  name: "ElCheckboxGroup"
}), up = /* @__PURE__ */ J({
  ...cp,
  props: ap,
  emits: lp,
  setup(e, { emit: t }) {
    const n = e, r = fe("checkbox"), { formItem: o } = Vr(), { inputId: s, isLabeledByFormItem: i } = yi(n, {
      formItemContext: o
    }), a = async (d) => {
      t(wn, d), await xt(), t("change", d);
    }, c = k({
      get() {
        return n.modelValue;
      },
      set(d) {
        a(d);
      }
    });
    return ct(gt, {
      ...vf(gs(n), [
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
    }), Y(() => n.modelValue, () => {
      n.validateEvent && (o == null || o.validate("change").catch((d) => ht(d)));
    }), (d, u) => {
      var l;
      return I(), ae(mr(d.tag), {
        id: _(s),
        class: M(_(r).b("group")),
        role: "group",
        "aria-label": _(i) ? void 0 : d.label || "checkbox-group",
        "aria-labelledby": _(i) ? (l = _(o)) == null ? void 0 : l.labelId : void 0
      }, {
        default: at(() => [
          et(d.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "class", "aria-label", "aria-labelledby"]);
    };
  }
});
var Ci = /* @__PURE__ */ Le(up, [["__file", "checkbox-group.vue"]]);
const dp = pi(np, {
  CheckboxButton: Ei,
  CheckboxGroup: Ci
});
hi(Ei);
hi(Ci);
const fp = /* @__PURE__ */ J({
  name: "ElCollapseTransition"
}), pp = /* @__PURE__ */ J({
  ...fp,
  setup(e) {
    const t = fe("collapse-transition"), n = (o) => {
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
    return (o, s) => (I(), ae(Cr, Nr({
      name: _(t).b()
    }, Ja(r)), {
      default: at(() => [
        et(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["name"]));
  }
});
var Jt = /* @__PURE__ */ Le(pp, [["__file", "collapse-transition.vue"]]);
Jt.install = (e) => {
  e.component(Jt.name, Jt);
};
const hp = Jt, lt = "$treeNodeId", Ho = function(e, t) {
  !t || t[lt] || Object.defineProperty(t, lt, {
    value: e.id,
    enumerable: !1,
    configurable: !1,
    writable: !1
  });
}, Lr = function(e, t) {
  return e ? t[e] : t[lt];
}, tr = (e, t, n) => {
  const r = e.value.currentNode;
  n();
  const o = e.value.currentNode;
  r !== o && t("current-change", o ? o.data : null, o);
}, nr = (e) => {
  let t = !0, n = !0, r = !0;
  for (let o = 0, s = e.length; o < s; o++) {
    const i = e[o];
    (i.checked !== !0 || i.indeterminate) && (t = !1, i.disabled || (r = !1)), (i.checked !== !1 || i.indeterminate) && (n = !1);
  }
  return { all: t, none: n, allWithoutDisable: r, half: !t && !n };
}, Et = function(e) {
  if (e.childNodes.length === 0 || e.loading)
    return;
  const { all: t, none: n, half: r } = nr(e.childNodes);
  t ? (e.checked = !0, e.indeterminate = !1) : r ? (e.checked = !1, e.indeterminate = !0) : n && (e.checked = !1, e.indeterminate = !1);
  const o = e.parent;
  !o || o.level === 0 || e.store.checkStrictly || Et(o);
}, Ut = function(e, t) {
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
let gp = 0;
class Qe {
  constructor(t) {
    this.id = gp++, this.text = null, this.checked = !1, this.indeterminate = !1, this.data = null, this.expanded = !1, this.parent = null, this.visible = !0, this.isCurrent = !1, this.canFocus = !1;
    for (const n in t)
      R(t, n) && (this[n] = t[n]);
    this.level = 0, this.loaded = !1, this.childNodes = [], this.loading = !1, this.parent && (this.level = this.parent.level + 1);
  }
  initialize() {
    const t = this.store;
    if (!t)
      throw new Error("[Node]store is required!");
    t.registerNode(this);
    const n = t.props;
    if (n && typeof n.isLeaf < "u") {
      const s = Ut(this, "isLeaf");
      typeof s == "boolean" && (this.isLeafByUser = s);
    }
    if (t.lazy !== !0 && this.data ? (this.setData(this.data), t.defaultExpandAll && (this.expanded = !0, this.canFocus = !0)) : this.level > 0 && t.lazy && t.defaultExpandAll && this.expand(), Array.isArray(this.data) || Ho(this, this.data), !this.data)
      return;
    const r = t.defaultExpandedKeys, o = t.key;
    o && r && r.includes(this.key) && this.expand(null, t.autoExpandParent), o && t.currentNodeKey !== void 0 && this.key === t.currentNodeKey && (t.currentNode = this, t.currentNode.isCurrent = !0), t.lazy && t._initDefaultCheckedNode(this), this.updateLeafState(), this.parent && (this.level === 1 || this.parent.expanded === !0) && (this.canFocus = !0);
  }
  setData(t) {
    Array.isArray(t) || Ho(this, t), this.data = t, this.childNodes = [];
    let n;
    this.level === 0 && Array.isArray(this.data) ? n = this.data : n = Ut(this, "children") || [];
    for (let r = 0, o = n.length; r < o; r++)
      this.insertChild({ data: n[r] });
  }
  get label() {
    return Ut(this, "label");
  }
  get key() {
    const t = this.store.key;
    return this.data ? this.data[t] : null;
  }
  get disabled() {
    return Ut(this, "disabled");
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
    if (!(t instanceof Qe)) {
      if (!r) {
        const o = this.getChildren(!0);
        o.includes(t.data) || (typeof n > "u" || n < 0 ? o.push(t.data) : o.splice(n, 0, t.data));
      }
      Object.assign(t, {
        parent: this,
        store: this.store
      }), t = ur(new Qe(t)), t instanceof Qe && t.initialize();
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
      Array.isArray(o) && (this.checked ? this.setChecked(!0, !0) : this.store.checkStrictly || Et(this), r());
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
      const { all: i, allWithoutDisable: a } = nr(this.childNodes);
      !this.isLeaf && !i && a && (this.checked = !1, t = !1);
      const c = () => {
        if (n) {
          const d = this.childNodes;
          for (let f = 0, g = d.length; f < g; f++) {
            const p = d[f];
            o = o || t !== !1;
            const h = p.disabled ? p.checked : o;
            p.setChecked(h, n, !0, o);
          }
          const { half: u, all: l } = nr(d);
          l || (this.checked = l, this.indeterminate = u);
        }
      };
      if (this.shouldLoadData()) {
        this.loadData(() => {
          c(), Et(this);
        }, {
          checked: t !== !1
        });
        return;
      } else
        c();
    }
    const s = this.parent;
    !s || s.level === 0 || r || Et(s);
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
      const a = s[lt];
      !!a && n.findIndex((d) => d[lt] === a) >= 0 ? r[a] = { index: i, data: s } : o.push({ index: i, data: s });
    }), this.store.lazy || n.forEach((s) => {
      r[s[lt]] || this.removeChildByData(s);
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
    this.store.checkStrictly || Et(this);
  }
}
class vp {
  constructor(t) {
    this.currentNode = null, this.currentNodeKey = null;
    for (const n in t)
      R(t, n) && (this[n] = t[n]);
    this.nodesMap = {};
  }
  initialize() {
    if (this.root = new Qe({
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
    if (t instanceof Qe)
      return t;
    const n = L(t) ? Lr(this.key, t) : t;
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
    const r = pn(n) ? this.root : this.getNode(n);
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
      R(n, r) && t.push(n[r]);
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
    const o = this._getAllNodes().sort((c, d) => c.level - d.level), s = /* @__PURE__ */ Object.create(null), i = Object.keys(r);
    o.forEach((c) => c.setChecked(!1, !1));
    const a = (c) => {
      c.childNodes.forEach((d) => {
        var u;
        s[d.data[t]] = !0, (u = d.childNodes) != null && u.length && a(d);
      });
    };
    for (let c = 0, d = o.length; c < d; c++) {
      const u = o[c], l = u.data[t].toString();
      if (!i.includes(l)) {
        u.checked && !s[l] && u.setChecked(!1, !1);
        continue;
      }
      if (u.childNodes.length && a(u), u.isLeaf || this.checkStrictly) {
        u.setChecked(!0, !1);
        continue;
      }
      if (u.setChecked(!0, !0), n) {
        u.setChecked(!1, !1);
        const g = function(p) {
          p.childNodes.forEach((m) => {
            m.isLeaf || m.setChecked(!1, !1), g(m);
          });
        };
        g(u);
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
const mp = /* @__PURE__ */ J({
  name: "ElTreeNodeContent",
  props: {
    node: {
      type: Object,
      required: !0
    },
    renderContent: Function
  },
  setup(e) {
    const t = fe("tree"), n = G("NodeInstance"), r = G("RootTree");
    return () => {
      const o = e.node, { data: s, store: i } = o;
      return e.renderContent ? e.renderContent(Gn, { _self: n, node: o, data: s, store: i }) : et(r.ctx.slots, "default", { node: o, data: s }, () => [
        Gn("span", { class: t.be("node", "label") }, [o.label])
      ]);
    };
  }
});
var yp = /* @__PURE__ */ Le(mp, [["__file", "tree-node-content.vue"]]);
function wi(e) {
  const t = G("TreeNodeMap", null), n = {
    treeNodeExpand: (r) => {
      e.node !== r && e.node.collapse();
    },
    children: []
  };
  return t && t.children.push(n), ct("TreeNodeMap", n), {
    broadcastExpanded: (r) => {
      if (e.accordion)
        for (const o of n.children)
          o.treeNodeExpand(r);
    }
  };
}
const Si = Symbol("dragEvents");
function bp({ props: e, ctx: t, el$: n, dropIndicator$: r, store: o }) {
  const s = fe("tree"), i = B({
    showDropIndicator: !1,
    draggingNode: null,
    dropNode: null,
    allowDrop: !0,
    dropType: null
  });
  return ct(Si, {
    treeNodeDragStart: ({ event: u, treeNode: l }) => {
      if (typeof e.allowDrag == "function" && !e.allowDrag(l.node))
        return u.preventDefault(), !1;
      u.dataTransfer.effectAllowed = "move";
      try {
        u.dataTransfer.setData("text/plain", "");
      } catch {
      }
      i.value.draggingNode = l, t.emit("node-drag-start", l.node, u);
    },
    treeNodeDragOver: ({ event: u, treeNode: l }) => {
      const f = l, g = i.value.dropNode;
      g && g.node.id !== f.node.id && Pn(g.$el, s.is("drop-inner"));
      const p = i.value.draggingNode;
      if (!p || !f)
        return;
      let h = !0, m = !0, v = !0, y = !0;
      typeof e.allowDrop == "function" && (h = e.allowDrop(p.node, f.node, "prev"), y = m = e.allowDrop(p.node, f.node, "inner"), v = e.allowDrop(p.node, f.node, "next")), u.dataTransfer.dropEffect = m || h || v ? "move" : "none", (h || m || v) && (g == null ? void 0 : g.node.id) !== f.node.id && (g && t.emit("node-drag-leave", p.node, g.node, u), t.emit("node-drag-enter", p.node, f.node, u)), h || m || v ? i.value.dropNode = f : i.value.dropNode = null, f.node.nextSibling === p.node && (v = !1), f.node.previousSibling === p.node && (h = !1), f.node.contains(p.node, !1) && (m = !1), (p.node === f.node || p.node.contains(f.node)) && (h = !1, m = !1, v = !1);
      const V = f.$el.querySelector(`.${s.be("node", "content")}`).getBoundingClientRect(), O = n.value.getBoundingClientRect();
      let C;
      const T = h ? m ? 0.25 : v ? 0.45 : 1 : -1, X = v ? m ? 0.75 : h ? 0.55 : 0 : 1;
      let x = -9999;
      const b = u.clientY - V.top;
      b < V.height * T ? C = "before" : b > V.height * X ? C = "after" : m ? C = "inner" : C = "none";
      const D = f.$el.querySelector(`.${s.be("node", "expand-icon")}`).getBoundingClientRect(), A = r.value;
      C === "before" ? x = D.top - O.top : C === "after" && (x = D.bottom - O.top), A.style.top = `${x}px`, A.style.left = `${D.right - O.left}px`, C === "inner" ? _f(f.$el, s.is("drop-inner")) : Pn(f.$el, s.is("drop-inner")), i.value.showDropIndicator = C === "before" || C === "after", i.value.allowDrop = i.value.showDropIndicator || y, i.value.dropType = C, t.emit("node-drag-over", p.node, f.node, u);
    },
    treeNodeDragEnd: (u) => {
      const { draggingNode: l, dropType: f, dropNode: g } = i.value;
      if (u.preventDefault(), u.dataTransfer.dropEffect = "move", l && g) {
        const p = { data: l.node.data };
        f !== "none" && l.node.remove(), f === "before" ? g.node.parent.insertBefore(p, g.node) : f === "after" ? g.node.parent.insertAfter(p, g.node) : f === "inner" && g.node.insertChild(p), f !== "none" && (o.value.registerNode(p), o.value.key && l.node.eachNode((h) => {
          var m;
          (m = o.value.nodesMap[h.data[o.value.key]]) == null || m.setChecked(h.checked, !o.value.checkStrictly);
        })), Pn(g.$el, s.is("drop-inner")), t.emit("node-drag-end", l.node, g.node, f, u), f !== "none" && t.emit("node-drop", l.node, g.node, f, u);
      }
      l && !g && t.emit("node-drag-end", l.node, null, f, u), i.value.showDropIndicator = !1, i.value.draggingNode = null, i.value.dropNode = null, i.value.allowDrop = !0;
    }
  }), {
    dragState: i
  };
}
const _p = /* @__PURE__ */ J({
  name: "ElTreeNode",
  components: {
    ElCollapseTransition: hp,
    ElCheckbox: dp,
    NodeContent: yp,
    ElIcon: Gf,
    Loading: Sf
  },
  props: {
    node: {
      type: Qe,
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
    const n = fe("tree"), { broadcastExpanded: r } = wi(e), o = G("RootTree"), s = B(!1), i = B(!1), a = B(null), c = B(null), d = B(null), u = G(Si), l = de();
    ct("NodeInstance", l), o || ht("Tree", "Can not find node's tree."), e.node.expanded && (s.value = !0, i.value = !0);
    const f = o.props.props.children || "children";
    Y(() => {
      const b = e.node.data[f];
      return b && [...b];
    }, () => {
      e.node.updateChildren();
    }), Y(() => e.node.indeterminate, (b) => {
      h(e.node.checked, b);
    }), Y(() => e.node.checked, (b) => {
      h(b, e.node.indeterminate);
    }), Y(() => e.node.childNodes.length, () => e.node.reInitChecked()), Y(() => e.node.expanded, (b) => {
      xt(() => s.value = b), b && (i.value = !0);
    });
    const g = (b) => Lr(o.props.nodeKey, b.data), p = (b) => {
      const D = e.props.class;
      if (!D)
        return {};
      let A;
      if (F(D)) {
        const { data: N } = b;
        A = D(N, b);
      } else
        A = D;
      return z(A) ? { [A]: !0 } : A;
    }, h = (b, D) => {
      (a.value !== b || c.value !== D) && o.ctx.emit("check-change", e.node.data, b, D), a.value = b, c.value = D;
    }, m = (b) => {
      tr(o.store, o.ctx.emit, () => o.store.value.setCurrentNode(e.node)), o.currentNode.value = e.node, o.props.expandOnClickNode && y(), o.props.checkOnClickNode && !e.node.disabled && V(null, {
        target: { checked: !e.node.checked }
      }), o.ctx.emit("node-click", e.node.data, e.node, l, b);
    }, v = (b) => {
      o.instance.vnode.props.onNodeContextmenu && (b.stopPropagation(), b.preventDefault()), o.ctx.emit("node-contextmenu", b, e.node.data, e.node, l);
    }, y = () => {
      e.node.isLeaf || (s.value ? (o.ctx.emit("node-collapse", e.node.data, e.node, l), e.node.collapse()) : (e.node.expand(), t.emit("node-expand", e.node.data, e.node, l)));
    }, V = (b, D) => {
      e.node.setChecked(D.target.checked, !o.props.checkStrictly), xt(() => {
        const A = o.store.value;
        o.ctx.emit("check", e.node.data, {
          checkedNodes: A.getCheckedNodes(),
          checkedKeys: A.getCheckedKeys(),
          halfCheckedNodes: A.getHalfCheckedNodes(),
          halfCheckedKeys: A.getHalfCheckedKeys()
        });
      });
    };
    return {
      ns: n,
      node$: d,
      tree: o,
      expanded: s,
      childNodeRendered: i,
      oldChecked: a,
      oldIndeterminate: c,
      getNodeKey: g,
      getNodeClass: p,
      handleSelectChange: h,
      handleClick: m,
      handleContextMenu: v,
      handleExpandIconClick: y,
      handleCheckChange: V,
      handleChildNodeExpand: (b, D, A) => {
        r(D), o.ctx.emit("node-expand", b, D, A);
      },
      handleDragStart: (b) => {
        o.props.draggable && u.treeNodeDragStart({ event: b, treeNode: e });
      },
      handleDragOver: (b) => {
        b.preventDefault(), o.props.draggable && u.treeNodeDragOver({
          event: b,
          treeNode: { $el: d.value, node: e.node }
        });
      },
      handleDrop: (b) => {
        b.preventDefault();
      },
      handleDragEnd: (b) => {
        o.props.draggable && u.treeNodeDragEnd(b);
      },
      CaretRight: Cf
    };
  }
}), Np = ["aria-expanded", "aria-disabled", "aria-checked", "draggable", "data-key"], Ep = ["aria-expanded"];
function Cp(e, t, n, r, o, s) {
  const i = Be("el-icon"), a = Be("el-checkbox"), c = Be("loading"), d = Be("node-content"), u = Be("el-tree-node"), l = Be("el-collapse-transition");
  return Xe((I(), q("div", {
    ref: "node$",
    class: M([
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
    onClick: t[1] || (t[1] = oe((...f) => e.handleClick && e.handleClick(...f), ["stop"])),
    onContextmenu: t[2] || (t[2] = (...f) => e.handleContextMenu && e.handleContextMenu(...f)),
    onDragstart: t[3] || (t[3] = oe((...f) => e.handleDragStart && e.handleDragStart(...f), ["stop"])),
    onDragover: t[4] || (t[4] = oe((...f) => e.handleDragOver && e.handleDragOver(...f), ["stop"])),
    onDragend: t[5] || (t[5] = oe((...f) => e.handleDragEnd && e.handleDragEnd(...f), ["stop"])),
    onDrop: t[6] || (t[6] = oe((...f) => e.handleDrop && e.handleDrop(...f), ["stop"]))
  }, [
    ce("div", {
      class: M(e.ns.be("node", "content")),
      style: ft({ paddingLeft: (e.node.level - 1) * e.tree.props.indent + "px" })
    }, [
      e.tree.props.icon || e.CaretRight ? (I(), ae(i, {
        key: 0,
        class: M([
          e.ns.be("node", "expand-icon"),
          e.ns.is("leaf", e.node.isLeaf),
          {
            expanded: !e.node.isLeaf && e.expanded
          }
        ]),
        onClick: oe(e.handleExpandIconClick, ["stop"])
      }, {
        default: at(() => [
          (I(), ae(mr(e.tree.props.icon || e.CaretRight)))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : Oe("v-if", !0),
      e.showCheckbox ? (I(), ae(a, {
        key: 1,
        "model-value": e.node.checked,
        indeterminate: e.node.indeterminate,
        disabled: !!e.node.disabled,
        onClick: t[0] || (t[0] = oe(() => {
        }, ["stop"])),
        onChange: e.handleCheckChange
      }, null, 8, ["model-value", "indeterminate", "disabled", "onChange"])) : Oe("v-if", !0),
      e.node.loading ? (I(), ae(i, {
        key: 2,
        class: M([e.ns.be("node", "loading-icon"), e.ns.is("loading")])
      }, {
        default: at(() => [
          ne(c)
        ]),
        _: 1
      }, 8, ["class"])) : Oe("v-if", !0),
      ne(d, {
        node: e.node,
        "render-content": e.renderContent
      }, null, 8, ["node", "render-content"])
    ], 6),
    ne(l, null, {
      default: at(() => [
        !e.renderAfterExpand || e.childNodeRendered ? Xe((I(), q("div", {
          key: 0,
          class: M(e.ns.be("node", "children")),
          role: "group",
          "aria-expanded": e.expanded
        }, [
          (I(!0), q(Ve, null, Is(e.node.childNodes, (f) => (I(), ae(u, {
            key: e.getNodeKey(f),
            "render-content": e.renderContent,
            "render-after-expand": e.renderAfterExpand,
            "show-checkbox": e.showCheckbox,
            node: f,
            accordion: e.accordion,
            props: e.props,
            onNodeExpand: e.handleChildNodeExpand
          }, null, 8, ["render-content", "render-after-expand", "show-checkbox", "node", "accordion", "props", "onNodeExpand"]))), 128))
        ], 10, Ep)), [
          [an, e.expanded]
        ]) : Oe("v-if", !0)
      ]),
      _: 1
    })
  ], 42, Np)), [
    [an, e.node.visible]
  ]);
}
var wp = /* @__PURE__ */ Le(_p, [["render", Cp], ["__file", "tree-node.vue"]]);
function Sp({ el$: e }, t) {
  const n = fe("tree"), r = Gr([]), o = Gr([]);
  yr(() => {
    i();
  }), Ga(() => {
    r.value = Array.from(e.value.querySelectorAll("[role=treeitem]")), o.value = Array.from(e.value.querySelectorAll("input[type=checkbox]"));
  }), Y(o, (a) => {
    a.forEach((c) => {
      c.setAttribute("tabindex", "-1");
    });
  }), Vl(e, "keydown", (a) => {
    const c = a.target;
    if (!c.className.includes(n.b("node")))
      return;
    const d = a.code;
    r.value = Array.from(e.value.querySelectorAll(`.${n.is("focusable")}[role=treeitem]`));
    const u = r.value.indexOf(c);
    let l;
    if ([Me.up, Me.down].includes(d)) {
      if (a.preventDefault(), d === Me.up) {
        l = u === -1 ? 0 : u !== 0 ? u - 1 : r.value.length - 1;
        const g = l;
        for (; !t.value.getNode(r.value[l].dataset.key).canFocus; ) {
          if (l--, l === g) {
            l = -1;
            break;
          }
          l < 0 && (l = r.value.length - 1);
        }
      } else {
        l = u === -1 ? 0 : u < r.value.length - 1 ? u + 1 : 0;
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
    [Me.left, Me.right].includes(d) && (a.preventDefault(), c.click());
    const f = c.querySelector('[type="checkbox"]');
    [Me.enter, Me.space].includes(d) && f && (a.preventDefault(), f.click());
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
const Op = /* @__PURE__ */ J({
  name: "ElTree",
  components: { ElTreeNode: wp },
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
      type: Tf
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
    const { t: n } = Pf(), r = fe("tree"), o = B(new vp({
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
    const s = B(o.value.root), i = B(null), a = B(null), c = B(null), { broadcastExpanded: d } = wi(e), { dragState: u } = bp({
      props: e,
      ctx: t,
      el$: a,
      dropIndicator$: c,
      store: o
    });
    Sp({ el$: a }, o);
    const l = k(() => {
      const { childNodes: E } = s.value;
      return !E || E.length === 0 || E.every(({ visible: P }) => !P);
    });
    Y(() => e.currentNodeKey, (E) => {
      o.value.setCurrentNodeKey(E);
    }), Y(() => e.defaultCheckedKeys, (E) => {
      o.value.setDefaultCheckedKey(E);
    }), Y(() => e.defaultExpandedKeys, (E) => {
      o.value.setDefaultExpandedKeys(E);
    }), Y(() => e.data, (E) => {
      o.value.setData(E);
    }, { deep: !0 }), Y(() => e.checkStrictly, (E) => {
      o.value.checkStrictly = E;
    });
    const f = (E) => {
      if (!e.filterNodeMethod)
        throw new Error("[Tree] filterNodeMethod is required when filter");
      o.value.filter(E);
    }, g = (E) => Lr(e.nodeKey, E.data), p = (E) => {
      if (!e.nodeKey)
        throw new Error("[Tree] nodeKey is required in getNodePath");
      const P = o.value.getNode(E);
      if (!P)
        return [];
      const rt = [P.data];
      let vt = P.parent;
      for (; vt && vt !== s.value; )
        rt.push(vt.data), vt = vt.parent;
      return rt.reverse();
    }, h = (E, P) => o.value.getCheckedNodes(E, P), m = (E) => o.value.getCheckedKeys(E), v = () => {
      const E = o.value.getCurrentNode();
      return E ? E.data : null;
    }, y = () => {
      if (!e.nodeKey)
        throw new Error("[Tree] nodeKey is required in getCurrentKey");
      const E = v();
      return E ? E[e.nodeKey] : null;
    }, V = (E, P) => {
      if (!e.nodeKey)
        throw new Error("[Tree] nodeKey is required in setCheckedNodes");
      o.value.setCheckedNodes(E, P);
    }, O = (E, P) => {
      if (!e.nodeKey)
        throw new Error("[Tree] nodeKey is required in setCheckedKeys");
      o.value.setCheckedKeys(E, P);
    }, C = (E, P, rt) => {
      o.value.setChecked(E, P, rt);
    }, T = () => o.value.getHalfCheckedNodes(), X = () => o.value.getHalfCheckedKeys(), x = (E, P = !0) => {
      if (!e.nodeKey)
        throw new Error("[Tree] nodeKey is required in setCurrentNode");
      tr(o, t.emit, () => o.value.setUserCurrentNode(E, P));
    }, b = (E, P = !0) => {
      if (!e.nodeKey)
        throw new Error("[Tree] nodeKey is required in setCurrentKey");
      tr(o, t.emit, () => o.value.setCurrentNodeKey(E, P));
    }, D = (E) => o.value.getNode(E), A = (E) => {
      o.value.remove(E);
    }, N = (E, P) => {
      o.value.append(E, P);
    }, U = (E, P) => {
      o.value.insertBefore(E, P);
    }, re = (E, P) => {
      o.value.insertAfter(E, P);
    }, Pt = (E, P, rt) => {
      d(P), t.emit("node-expand", E, P, rt);
    }, Vt = (E, P) => {
      if (!e.nodeKey)
        throw new Error("[Tree] nodeKey is required in updateKeyChild");
      o.value.updateChildren(E, P);
    };
    return ct("RootTree", {
      ctx: t,
      props: e,
      store: o,
      root: s,
      currentNode: i,
      instance: de()
    }), ct(Pr, void 0), {
      ns: r,
      store: o,
      root: s,
      currentNode: i,
      dragState: u,
      el$: a,
      dropIndicator$: c,
      isEmpty: l,
      filter: f,
      getNodeKey: g,
      getNodePath: p,
      getCheckedNodes: h,
      getCheckedKeys: m,
      getCurrentNode: v,
      getCurrentKey: y,
      setCheckedNodes: V,
      setCheckedKeys: O,
      setChecked: C,
      getHalfCheckedNodes: T,
      getHalfCheckedKeys: X,
      setCurrentNode: x,
      setCurrentKey: b,
      t: n,
      getNode: D,
      remove: A,
      append: N,
      insertBefore: U,
      insertAfter: re,
      handleNodeExpand: Pt,
      updateKeyChildren: Vt
    };
  }
});
function Tp(e, t, n, r, o, s) {
  const i = Be("el-tree-node");
  return I(), q("div", {
    ref: "el$",
    class: M([
      e.ns.b(),
      e.ns.is("dragging", !!e.dragState.draggingNode),
      e.ns.is("drop-not-allow", !e.dragState.allowDrop),
      e.ns.is("drop-inner", e.dragState.dropType === "inner"),
      { [e.ns.m("highlight-current")]: e.highlightCurrent }
    ]),
    role: "tree"
  }, [
    (I(!0), q(Ve, null, Is(e.root.childNodes, (a) => (I(), ae(i, {
      key: e.getNodeKey(a),
      node: a,
      props: e.props,
      accordion: e.accordion,
      "render-after-expand": e.renderAfterExpand,
      "show-checkbox": e.showCheckbox,
      "render-content": e.renderContent,
      onNodeExpand: e.handleNodeExpand
    }, null, 8, ["node", "props", "accordion", "render-after-expand", "show-checkbox", "render-content", "onNodeExpand"]))), 128)),
    e.isEmpty ? (I(), q("div", {
      key: 0,
      class: M(e.ns.e("empty-block"))
    }, [
      et(e.$slots, "empty", {}, () => {
        var a;
        return [
          ce("span", {
            class: M(e.ns.e("empty-text"))
          }, sr((a = e.emptyText) != null ? a : e.t("el.tree.emptyText")), 3)
        ];
      })
    ], 2)) : Oe("v-if", !0),
    Xe(ce("div", {
      ref: "dropIndicator$",
      class: M(e.ns.e("drop-indicator"))
    }, null, 2), [
      [an, e.dragState.showDropIndicator]
    ])
  ], 2);
}
var Yt = /* @__PURE__ */ Le(Op, [["render", Tp], ["__file", "tree.vue"]]);
Yt.install = (e) => {
  e.component(Yt.name, Yt);
};
const xp = Yt, $p = xp, Dp = /* @__PURE__ */ J({
  name: "FmoneTree",
  props: {
    data: {
      type: Array,
      defalut() {
        return [];
      }
    }
  },
  setup() {
    return {};
  }
});
function kp(e, t, n, r, o, s) {
  const i = $p;
  return I(), q("div", null, [
    ne(i, { data: e.data }, null, 8, ["data"])
  ]);
}
const Ip = /* @__PURE__ */ Ws(Dp, [["render", kp]]), Ap = [$l, Ip], Pp = {
  install(e) {
    Ap.forEach((t) => {
      e.component(t.name, t);
    });
  }
};
export {
  Ip as FmoneTree,
  Pp as default,
  $l as svgIcon
};
//# sourceMappingURL=index.js.map
