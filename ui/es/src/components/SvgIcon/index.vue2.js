import { defineComponent as u, toRefs as c, computed as e } from "vue";
const p = u({
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
  setup(n) {
    let { iconName: r, className: t, size: o, color: a } = c(n);
    const s = e(() => `#${r.value}`), i = e(() => t.value ? `svg-icon ${t.value}` : "svg-icon"), l = e(() => ({
      width: o.value,
      height: o.value,
      color: a.value
    }));
    return {
      iconClassName: s,
      svgClass: i,
      iconSize: l
    };
  }
});
export {
  p as default
};
//# sourceMappingURL=index.vue2.js.map
