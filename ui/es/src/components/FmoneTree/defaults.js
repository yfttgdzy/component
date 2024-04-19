import "vue";
const t = {
  currentNodeKey: {
    type: String,
    default: ""
  },
  menulist: {
    // {
    // clickname  点击方法
    // name       按钮名字
    // haspermissionkey   权限字符串
    // }
    type: Array,
    default() {
      return [];
    }
  },
  //对应的节点props
  defaultProps: {
    type: Object,
    default() {
      return {
        label: "label",
        children: "children"
      };
    }
  },
  nodekey: {
    type: String,
    default: "id"
  },
  // tree 的数据
  datalist: {
    type: Array,
    default() {
      return [];
    }
  },
  onSearch: {
    type: Boolean,
    default() {
      return !1;
    }
  },
  iconname: {
    type: String,
    default() {
      return "icon-tianjiadingji";
    }
  },
  title: {
    type: String,
    default() {
      return "";
    }
  },
  titleshow: {
    type: Boolean,
    default() {
      return !0;
    }
  },
  // 权限字符串保存
  savePermission: {
    require: !0,
    type: String,
    default() {
      return "";
    }
  },
  // 权限字符串删除
  deletePermission: {
    require: !0,
    type: String,
    default() {
      return "";
    }
  },
  // 特殊字段用于判断是否拥有添加或者删除功能(常用于内置字符preset)
  specialKey: {
    type: String,
    default: ""
  },
  maxLevel: {
    type: Number,
    default: 1 / 0
  },
  highlight: {
    type: Boolean,
    default: !1
  },
  // 内置固定的数据结构顶级不可删除，最后一级不可新增
  internalTree: {
    type: Boolean,
    default: !1
  },
  // 开启拖动
  draggable: {
    type: Boolean,
    default: !1
  },
  // 单层级拖拽
  signLevelTree: {
    type: Boolean,
    default: !1
  },
  // 双层级拖拽
  doubleLevelTree: {
    type: Boolean,
    default: !1
  },
  // 相同节点内拖拽自由拖拽
  sameLevelTree: {
    type: Boolean,
    default: !1
  },
  // 双层节点，以及只允许同级排序，二级允许再不同一级内拖动排序
  doubleSameLevelTree: {
    type: Boolean,
    default: !1
  }
};
export {
  t as default
};
//# sourceMappingURL=defaults.js.map
