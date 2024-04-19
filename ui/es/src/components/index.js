import e from "./FmoneTree/FmoneTree.vue.js";
import t from "./SvgIcon/index.vue.js";
const m = [e, t], c = {
  install(n) {
    m.forEach((o) => {
      n.components(o.name || o, o);
    });
  }
};
export {
  c as default,
  e as fmoneTree,
  t as svgIcon
};
//# sourceMappingURL=index.js.map
