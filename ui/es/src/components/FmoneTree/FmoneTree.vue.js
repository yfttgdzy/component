import "../../../node_modules/.pnpm/registry.npmmirror.com_element-plus@2.7.0_vue@3.4.21/node_modules/element-plus/theme-chalk/base.css.js";
import "../../../node_modules/.pnpm/registry.npmmirror.com_element-plus@2.7.0_vue@3.4.21/node_modules/element-plus/theme-chalk/el-tree.css.js";
import "../../../node_modules/.pnpm/registry.npmmirror.com_element-plus@2.7.0_vue@3.4.21/node_modules/element-plus/theme-chalk/el-checkbox.css.js";
import "../../../node_modules/.pnpm/registry.npmmirror.com_element-plus@2.7.0_vue@3.4.21/node_modules/element-plus/theme-chalk/el-button.css.js";
import "../../../node_modules/.pnpm/registry.npmmirror.com_element-plus@2.7.0_vue@3.4.21/node_modules/element-plus/theme-chalk/el-button-group.css.js";
import "../../../node_modules/.pnpm/registry.npmmirror.com_element-plus@2.7.0_vue@3.4.21/node_modules/element-plus/theme-chalk/el-popper.css.js";
import "../../../node_modules/.pnpm/registry.npmmirror.com_element-plus@2.7.0_vue@3.4.21/node_modules/element-plus/theme-chalk/el-scrollbar.css.js";
import "../../../node_modules/.pnpm/registry.npmmirror.com_element-plus@2.7.0_vue@3.4.21/node_modules/element-plus/theme-chalk/el-dropdown.css.js";
import "../../../node_modules/.pnpm/registry.npmmirror.com_element-plus@2.7.0_vue@3.4.21/node_modules/element-plus/theme-chalk/el-dropdown-menu.css.js";
import "../../../node_modules/.pnpm/registry.npmmirror.com_element-plus@2.7.0_vue@3.4.21/node_modules/element-plus/theme-chalk/el-dropdown-item.css.js";
import "../../../node_modules/.pnpm/registry.npmmirror.com_element-plus@2.7.0_vue@3.4.21/node_modules/element-plus/theme-chalk/el-link.css.js";
import "../../../node_modules/.pnpm/registry.npmmirror.com_element-plus@2.7.0_vue@3.4.21/node_modules/element-plus/theme-chalk/el-input.css.js";
import ee from "../SvgIcon/index.vue.js";
import { defineComponent as le, ref as v, computed as B, watch as ne, nextTick as oe, resolveDirective as te, openBlock as k, createElementBlock as K, createVNode as i, Transition as _, withCtx as m, withDirectives as A, createElementVNode as p, toDisplayString as I, vShow as $, renderSlot as O, createCommentVNode as D, createBlock as z, createTextVNode as F, Fragment as ae, renderList as re } from "vue";
import se from "./defaults.js";
import "./FmoneTree.vue2.js";
import ie from "../../../_virtual/_plugin-vue_export-helper.js";
import { ElInput as de } from "../../../node_modules/.pnpm/registry.npmmirror.com_element-plus@2.7.0_vue@3.4.21/node_modules/element-plus/es/components/input/index.js";
import { ElLink as ue } from "../../../node_modules/.pnpm/registry.npmmirror.com_element-plus@2.7.0_vue@3.4.21/node_modules/element-plus/es/components/link/index.js";
import { ElDropdownItem as ce, ElDropdownMenu as ve, ElDropdown as me } from "../../../node_modules/.pnpm/registry.npmmirror.com_element-plus@2.7.0_vue@3.4.21/node_modules/element-plus/es/components/dropdown/index.js";
import { ElTree as pe } from "../../../node_modules/.pnpm/registry.npmmirror.com_element-plus@2.7.0_vue@3.4.21/node_modules/element-plus/es/components/tree/index.js";
const fe = le({
  name: "FmoneTree",
  components: {},
  props: se,
  setup(e, { emit: a, expose: P }) {
    const f = v(), u = v(), T = v(""), c = v("");
    c.value = e.defaultProps.label;
    const h = v(!1), y = B(() => e.menulist), w = (l) => {
      u.value.filter(l);
    };
    ne(
      () => e.datalist,
      async (l) => {
        T.value !== "" && (await oe(), w(T.value));
      },
      {
        immediate: !0
      }
    );
    const E = (l, n) => l ? n[c.value].includes(l) : !0, s = v({}), r = v({}), b = (l, n) => {
      if (s.value = l, r.value = n, !e.specialKey)
        h.value = !0;
      else {
        let o = y.value.filter((d) => !d.special || e.specialKey && !s.value[e.specialKey]);
        h.value = o.length > 0;
      }
      a("node-click", l, n);
    }, t = () => {
      u.value.setCurrentKey(null), s.value = {}, r.value = {}, a("headerbutton");
    }, C = (l) => {
      a(l, s.value);
    }, L = v(!0), M = () => {
      f.value.classList.contains("tree-expand") ? (f.value.classList.remove("tree-expand"), f.value.classList.add("tree-collapse")) : (f.value.classList.remove("tree-collapse"), f.value.classList.add("tree-expand")), L.value = !L.value, a("showtreeClick", L.value);
    }, j = (l, n) => {
      if (u.value.setCurrentKey(l), n)
        if (s.value = n.data, r.value = n, !e.specialKey)
          h.value = !0;
        else {
          let o = y.value.filter((d) => !d.special || e.specialKey && !s.value[e.specialKey]);
          h.value = o.length > 0;
        }
    }, U = () => {
      u.value.setCurrentKey(), s.value = {}, r.value = {};
    }, N = v([]), q = (l) => {
      N.value.includes(l) || N.value.push(l);
    }, G = (l) => {
      N.value.push(l.nodeKey);
    }, H = (l, n) => {
      S(n);
    }, S = (l) => {
      var n = N.value.indexOf(l.data.nodeKey);
      n != -1 && N.value.splice(n, 1), l.childNodes.forEach((o) => {
        S(o);
      });
    }, J = () => u.value.getCurrentNode(), Q = () => u.value.getCurrentKey(), R = (l) => u.value.getNode(l), W = (l, n, o) => e.internalTree ? l.parent.data[e.nodekey] === dropNode.data[e.nodekey] && o === "inner" || l.parent.data[e.nodekey] === dropNode.parent.data[e.nodekey] && o !== "inner" ? !(l.level > dropNode.level) : !1 : !(e.signLevelTree && o === "inner" || e.doubleLevelTree && dropNode.level === 2 && o == "inner" || e.doubleLevelTree && dropNode.level === 1 && l.childNodes.length != 0 && o == "inner" || e.doubleLevelTree && l.childNodes.length != 0 && dropNode.level === 2 && o != "inner" || e.sameLevelTree && (l.level !== dropNode.level || l.level === dropNode.level && (l.parent.data.id !== dropNode.parent.data.id || o == "inner")) || e.doubleSameLevelTree && (l.level !== dropNode.level || l.level === dropNode.level && o === "inner") || l.data.preset || dropNode.data.preset), X = (l) => e.internalTree ? l.level !== 1 : !0, V = {
      before: "moveBefore",
      after: "moveAfter",
      inner: "appendChild"
    }, Y = (l, n, o) => {
      if (console.log(l, n), o === "inner") {
        const d = n;
        let g = null;
        d.childNodes && d.childNodes.length > 1 && (g = d.childNodes[d.childNodes.length - 2]), console.log(g, d), a("drop-end", l, g, V[o], d);
      } else
        a("drop-end", l, n, V[o]);
    };
    P({
      inputchange: w,
      setCurrentKey: j,
      setExpandedKeys: q,
      getCurrentNode: J,
      getCurrentKey: Q,
      getNode: R,
      removeSelectNode: U,
      handleNodeClick: b
    });
    const Z = (l) => {
      if (l && l.length > 0) {
        const n = l;
        return permissions.includes("*:*:*") ? !0 : permissions.some((o) => n.includes(o));
      }
    }, x = B(() => y.value.filter((n) => Z([n.haspermissionkey]) && (!e.specialKey && e.maxLevel === 1 / 0 || !n.special || e.specialKey && !s.value[e.specialKey] || n.special && e.maxLevel !== 1 / 0 && r.value.level < e.maxLevel) && (!e.internalTree || e.internalTree && n.topLevelOpt && r.value.level === 1 || e.internalTree && n.nextLevelOpt && r.value.level > 1) && (!e.doubleLevelTree || e.doubleLevelTree && n.topLevelOpt && r.value.level === 1 || e.doubleLevelTree && n.nextLevelOpt && r.value.level > 1)).length !== 0);
    return {
      fmoneTree: f,
      eltree: u,
      currentNodeData: s,
      currentNode: r,
      preset: h,
      menuList: y,
      defaultPropLabel: c,
      filterInput: T,
      showtree: L,
      expandedKeys: N,
      headerbutton: t,
      inputchange: w,
      filterNode: E,
      handleNodeClick: b,
      handleCommand: C,
      collapsetree: M,
      handleNodeExpand: G,
      handleNodeCollapse: H,
      allowDrop: W,
      allowDrag: X,
      handleDrop: Y,
      leastOne: x
    };
  }
}), he = {
  class: "fmcoe-tree tree-expand",
  ref: "fmoneTree"
}, ye = { class: "fmcoe-tree-show" }, Ne = { class: "tree-header" }, ke = { class: "titlestyle" }, we = {
  key: 0,
  class: "sub-title"
}, be = { class: "scroll-content" }, Ce = { class: "custom-tree-node" }, Le = ["title"], Te = {
  key: 0,
  style: { margin: "0 18px", width: "12px" }
};
function Ke(e, a, P, f, u, T) {
  const c = ee, h = de, y = ue, w = ce, E = ve, s = me, r = pe, b = te("has-permission");
  return k(), K("div", he, [
    i(_, { name: "el-fade-in" }, {
      default: m(() => [
        A(p("div", ye, [
          p("div", {
            class: "rightsvg",
            onClick: a[0] || (a[0] = (...t) => e.collapsetree && e.collapsetree(...t))
          }, [
            i(c, {
              class: "sub-select-icon",
              "icon-name": "icon-shousuojiantouzuo",
              color: "#A0A0A0"
            })
          ]),
          p("div", Ne, [
            p("span", ke, I(e.title), 1),
            A(i(c, {
              class: "sub-select-icon",
              onClick: e.headerbutton,
              size: "17px",
              "icon-name": e.iconname,
              color: "#A0A0A0"
            }, null, 8, ["onClick", "icon-name"]), [
              [b, [e.savePermission]],
              [$, e.titleshow]
            ])
          ]),
          e.$slots.subTitle ? (k(), K("div", we, [
            O(e.$slots, "subTitle")
          ])) : D("", !0),
          e.onSearch ? O(e.$slots, "treeSearch", { key: 1 }, () => [
            e.onSearch ? (k(), z(h, {
              key: 0,
              modelValue: e.filterInput,
              "onUpdate:modelValue": a[1] || (a[1] = (t) => e.filterInput = t),
              class: "fmone-tree-search",
              placeholder: e.$t("common.placeholder.search"),
              onInput: e.inputchange
            }, {
              prefix: m(() => [
                i(c, {
                  class: "sub-select-icon",
                  "icon-name": "icon-sousuo",
                  color: "#A0A0A0"
                })
              ]),
              _: 1
            }, 8, ["modelValue", "placeholder", "onInput"])) : D("", !0)
          ]) : D("", !0),
          p("div", be, [
            i(r, {
              ref: "eltree",
              data: e.datalist,
              props: e.defaultProps,
              "node-key": e.nodekey,
              "highlight-current": e.highlight,
              "expand-on-click-node": !1,
              "filter-node-method": e.filterNode,
              "current-node-key": e.currentNodeKey,
              "default-expanded-keys": e.expandedKeys,
              draggable: e.draggable,
              "allow-drag": e.allowDrag,
              "allow-drop": e.allowDrop,
              onNodeClick: e.handleNodeClick,
              onNodeExpand: e.handleNodeExpand,
              onNodeCollapse: e.handleNodeCollapse,
              onNodeDrop: e.handleDrop,
              style: { flex: "1" }
            }, {
              default: m(({ node: t }) => [
                p("span", Ce, [
                  p("span", {
                    class: "text-ellipsis",
                    title: t.label,
                    style: { width: "calc(100% - 48px)" }
                  }, [
                    O(e.$slots, "label", { node: t }, () => [
                      F(I(t.label === "All" ? e.$t(t.label) : t.label), 1)
                    ])
                  ], 8, Le),
                  (e.currentNodeData[e.nodekey] && e.currentNodeData[e.nodekey] === t.data[e.nodekey] || e.currentNode.data && t.data.id === e.currentNode.data.id && t.level === e.currentNode.level) && e.menuList.length > 0 && e.preset && e.leastOne ? A((k(), K("span", Te, [
                    i(s, {
                      style: { "line-height": "40px", display: "inline-block" },
                      onCommand: e.handleCommand
                    }, {
                      dropdown: m(() => [
                        i(E, { class: "dropdownmeunstyle" }, {
                          default: m(() => [
                            (k(!0), K(ae, null, re(e.menuList, (C, L) => (k(), z(w, {
                              key: C.clickname,
                              command: C.clickname
                            }, {
                              default: m(() => [
                                F(I(C.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["command"]))), 128))
                          ]),
                          _: 1
                        })
                      ]),
                      default: m(() => [
                        i(y, null, {
                          default: m(() => [
                            i(c, {
                              class: "sub-select-icon",
                              "icon-name": "icon-shufenleicaozuo",
                              color: "#A0A0A0"
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["onCommand"])
                  ])), [
                    [b, [e.savePermission, e.deletePermission]]
                  ]) : D("", !0)
                ])
              ]),
              _: 3
            }, 8, ["data", "props", "node-key", "highlight-current", "filter-node-method", "current-node-key", "default-expanded-keys", "draggable", "allow-drag", "allow-drop", "onNodeClick", "onNodeExpand", "onNodeCollapse", "onNodeDrop"])
          ])
        ], 512), [
          [$, e.showtree]
        ])
      ]),
      _: 3
    }),
    i(_, { name: "el-fade-in" }, {
      default: m(() => [
        A(p("div", {
          class: "collapse",
          onClick: a[2] || (a[2] = (...t) => e.collapsetree && e.collapsetree(...t))
        }, [
          i(c, {
            class: "sub-select-icon",
            "icon-name": "icon-shuangjiantouyou",
            color: "#A0A0A0"
          })
        ], 512), [
          [$, !e.showtree]
        ])
      ]),
      _: 1
    })
  ], 512);
}
const Qe = /* @__PURE__ */ ie(fe, [["render", Ke]]);
export {
  Qe as default
};
//# sourceMappingURL=FmoneTree.vue.js.map
