import s from "./index.vue2.js";
import { openBlock as o, createElementBlock as r, normalizeClass as a, normalizeStyle as n, createElementVNode as i } from "vue";
import "./index.vue3.js";
import l from "../../../_virtual/_plugin-vue_export-helper.js";
const t = ["xlink:href"];
function c(e, d, m, p, f, u) {
  return o(), r("svg", {
    "aria-hidden": "true",
    class: a([e.svgClass, { "is-disabled": e.disabled }]),
    style: n(e.iconSize)
  }, [
    i("use", {
      class: "svg-use",
      "xlink:href": e.iconClassName
    }, null, 8, t)
  ], 6);
}
const k = /* @__PURE__ */ l(s, [["render", c], ["__scopeId", "data-v-50f4cb14"]]);
export {
  k as default
};
//# sourceMappingURL=index.vue.js.map
