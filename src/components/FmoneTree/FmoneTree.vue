<template>
  <div class="fmcoe-tree tree-expand" ref="fmoneTree">
    <transition name="el-fade-in">
      <div class="fmcoe-tree-show" v-show="showtree">
        <div class="rightsvg" @click="collapsetree">
          <svg-icon class="sub-select-icon" icon-name="icon-shousuojiantouzuo" color="#A0A0A0" />
        </div>
        <div class="tree-header">
          <span class="titlestyle">{{ title }}</span>
          <svg-icon
            class="sub-select-icon"
            @click="headerbutton"
            v-has-permission="[savePermission]"
            size="17px"
            :icon-name="iconname"
            color="#A0A0A0"
            v-show="titleshow"
          />
        </div>
        <div class="sub-title" v-if="$slots.subTitle">
          <slot name="subTitle"></slot>
        </div>
        <slot name="treeSearch" v-if="onSearch">
          <el-input
            v-if="onSearch"
            v-model="filterInput"
            class="fmone-tree-search"
            :placeholder="$t('common.placeholder.search')"
            @input="inputchange"
          >
            <template #prefix>
              <svg-icon class="sub-select-icon" icon-name="icon-sousuo" color="#A0A0A0" />
            </template>
          </el-input>
        </slot>

        <div class="scroll-content">
          <!--<el-scrollbar>-->
          <el-tree
            ref="eltree"
            :data="datalist"
            :props="defaultProps"
            :node-key="nodekey"
            :highlight-current="highlight"
            :expand-on-click-node="false"
            :filter-node-method="filterNode"
            :current-node-key="currentNodeKey"
            :default-expanded-keys="expandedKeys"
            :draggable="draggable"
            :allow-drag="allowDrag"
            :allow-drop="allowDrop"
            @node-click="handleNodeClick"
            @node-expand="handleNodeExpand"
            @node-collapse="handleNodeCollapse"
            @node-drop="handleDrop"
            style="flex: 1"
          >
            <template #default="{ node }">
              <span class="custom-tree-node">
                <span class="text-ellipsis" :title="node.label" style="width: calc(100% - 48px)">
                  <slot name="label" :node="node">{{ node.label === 'All' ? $t(node.label) : node.label }}</slot>
                </span>
                <span
                  v-if="
                    ((currentNodeData[nodekey] && currentNodeData[nodekey] === node.data[nodekey]) ||
                      (currentNode.data && node.data.id === currentNode.data.id && node.level === currentNode.level)) &&
                    menuList.length > 0 &&
                    preset &&
                    leastOne
                  "
                  v-has-permission="[savePermission, deletePermission]"
                  style="margin: 0 18px; width: 12px"
                >
                  <el-dropdown style="line-height: 40px; display: inline-block" @command="handleCommand">
                    <el-link>
                      <svg-icon class="sub-select-icon" icon-name="icon-shufenleicaozuo" color="#A0A0A0" />
                    </el-link>
                    <template #dropdown>
                      <el-dropdown-menu class="dropdownmeunstyle">
                        <!-- 展示tree右测...的按钮 -->
                        <template v-for="(item, index) in menuList" :key="item.clickname">
                          <el-dropdown-item
                            :command="item.clickname"
                          >
                            {{ item.name }}
                          </el-dropdown-item>
                        </template>
                      </el-dropdown-menu>
                    </template>
                  </el-dropdown>
                </span>
              </span>
            </template>
          </el-tree>
          <!--</el-scrollbar>-->
        </div>
      </div>
    </transition>

    <transition name="el-fade-in">
      <div class="collapse" v-show="!showtree" @click="collapsetree">
        <svg-icon class="sub-select-icon" icon-name="icon-shuangjiantouyou" color="#A0A0A0" />
      </div>
    </transition>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import defaultProps from './defaults';
export default defineComponent({
  name: 'FmoneTree',

  components: {},

  props: defaultProps,

  setup(props, { emit, expose }) {
    const fmoneTree = ref();
    const eltree = ref();
    const filterInput = ref(''); //查询数据
    const defaultPropLabel = ref(''); // 默认prop限制字段
    defaultPropLabel.value = props.defaultProps.label;
    // 是否是内置
    const preset = ref(false);
    // 当前层级操作按钮
    const menuList = computed(() => {
      return props.menulist;
    });
    // 输入框输入
    const inputchange = (val) => {
      eltree.value.filter(val);
    };

    watch(
      () => props.datalist,
      async (val) => {
        if (filterInput.value !== '') {
          await nextTick();
          inputchange(filterInput.value);
        }
      },
      {
        immediate: true,
      },
    );

    // 过滤树值
    const filterNode = (value, data) => {
      if (!value) return true;
      return data[defaultPropLabel.value].includes(value);
    };
    // 点击后获取到的当前选中节点数据
    const currentNodeData = ref({});
    // 当前选中节点
    const currentNode = ref({});
    // 节点点击
    const handleNodeClick = (data, node) => {
      currentNodeData.value = data;
      currentNode.value = node;
      // 默认数据不可编辑修改
      if (!props.specialKey) {
        preset.value = true;
      } else {
        let normalMenu = menuList.value.filter((item) => {
          return !item.special || (props.specialKey && !currentNodeData.value[props.specialKey]);
        });
        preset.value = normalMenu.length > 0;
      }

      emit('node-click', data, node);
    };
    // 点击头部按钮加号
    const headerbutton = () => {
      // 清空高亮选中
      eltree.value.setCurrentKey(null);
      currentNodeData.value = {};
      currentNode.value = {};
      emit('headerbutton');
    };
    // 点击tree按钮之后触发的按钮信息
    const handleCommand = (data) => {
      emit(data, currentNodeData.value);
    };
    // 收起展开树
    const showtree = ref(true);
    const collapsetree = () => {
      if (fmoneTree.value.classList.contains('tree-expand')) {
        fmoneTree.value.classList.remove('tree-expand');
        fmoneTree.value.classList.add('tree-collapse');
      } else {
        fmoneTree.value.classList.remove('tree-collapse');
        fmoneTree.value.classList.add('tree-expand');
      }

      showtree.value = !showtree.value;
      emit('showtreeClick', showtree.value);
    };

    const setCurrentKey = (key, node) => {
      eltree.value.setCurrentKey(key);
      if (node) {
        currentNodeData.value = node.data;
        currentNode.value = node;
        // 默认数据不可编辑修改
        if (!props.specialKey) {
          preset.value = true;
        } else {
          let normalMenu = menuList.value.filter((item) => {
            return !item.special || (props.specialKey && !currentNodeData.value[props.specialKey]);
          });
          preset.value = normalMenu.length > 0;
        }
      }
    };

    const removeSelectNode = () => {
      eltree.value.setCurrentKey();
      currentNodeData.value = {};
      currentNode.value = {};
    };

    const expandedKeys = ref([]);
    const setExpandedKeys = (key) => {
      if (!(expandedKeys.value).includes(key)) {
        (expandedKeys.value).push(key);
      }
    };

    // 节点被展开时触发的事件
    const handleNodeExpand = (data) => {
      (expandedKeys.value).push(data.nodeKey);
    };

    // 节点被关闭时触发的事件
    const handleNodeCollapse = (_data, node) => {
      recursiveNode(node);
    };

    // 递归遍历当前节点
    const recursiveNode = (node) => {
      var index = (expandedKeys.value).indexOf(node.data.nodeKey);
      if (index != -1) {
        expandedKeys.value.splice(index, 1);
      }
      node.childNodes.forEach((childNode) => {
        recursiveNode(childNode);
      });
    };

    const getCurrentNode = () => {
      return eltree.value.getCurrentNode();
    };
    const getCurrentKey = () => {
      return eltree.value.getCurrentKey();
    };
    const getNode = (key) => {
      return eltree.value.getNode(key);
    };

    const allowDrop = (draggingNode, dropNodee, type) => {
      if (!props.internalTree) {
        // 单节点只允许拖动排序
        if (props.signLevelTree && type === 'inner') {
          return false;
        }
        /*
        双节点并且目标节点是二级并且是inner操作;
        双节点并且目标节点是一级并且拖动节点有子节点并且是inner操作;
        双节点并且目标节点是二级并且拖动节点有子节点并且不是inner操作;
        以上情况不允许拖动
        */
        if (
          (props.doubleLevelTree && dropNode.level === 2 && type == 'inner') ||
          (props.doubleLevelTree && dropNode.level === 1 && draggingNode.childNodes.length != 0 && type == 'inner') ||
          (props.doubleLevelTree && draggingNode.childNodes.length != 0 && dropNode.level === 2 && type != 'inner')
        ) {
          return false;
        }

        /*
        相同节点内拖动
        判断一：拖动节点和目标节点层级不一致
        判断二：拖动节点和目标节点层级一致且(拖动节点和目标节点的父节点不是同一个||是inner操作)
        那么不允许拖动
        */
        if (
          props.sameLevelTree &&
          (draggingNode.level !== dropNode.level ||
            (draggingNode.level === dropNode.level && (draggingNode.parent.data.id !== dropNode.parent.data.id || type == 'inner')))
        ) {
          return false;
        }

        /*
        双层节点，以及只允许同级排序，二级允许再不同一级内拖动排序
        判断一：拖动节点和目标节点层级不一致
        判断二：拖动节点和目标节点层级一致且(拖动节点和目标节点的父节点不是同一个||是inner操作)
        那么不允许拖动
        */
        if (
          props.doubleSameLevelTree &&
          (draggingNode.level !== dropNode.level || (draggingNode.level === dropNode.level && type === 'inner'))
        ) {
          return false;
        }
        // 如果时内置节点，不允许任何关于拖拽的操作
        if (draggingNode.data.preset || dropNode.data.preset) {
          return false;
        }

        return true;
      } else {
        // 如果是内置节点树
        if (
          (draggingNode.parent.data[props.nodekey] === dropNode.data[props.nodekey] && type === 'inner') ||
          (draggingNode.parent.data[props.nodekey] === dropNode.parent.data[props.nodekey] && type !== 'inner')
        ) {
          // 无法单纯通过节点以及type之间的关系进行完全阻止
          if (draggingNode.level > dropNode.level) {
            return false;
          }
          return true;
        }
        return false;
      }
    };
    const allowDrag = (draggingNode) => {
      if (!props.internalTree) {
        return true;
      } else {
        if (draggingNode.level === 1) {
          return false;
        }
        return true;
      }
    };
    const action = {
      before: 'moveBefore',
      after: 'moveAfter',
      inner: 'appendChild',
    };
    const handleDrop = (draggingNode, dropNode, dropType) => {
      console.log(draggingNode, dropNode);
      // 当时inner操作时，父级节点必须，最后一个子节点不一定存在
      if (dropType === 'inner') {
        const parentNode = dropNode;
        let targetNode = null;
        if (parentNode.childNodes && parentNode.childNodes.length > 1) {
          targetNode = parentNode.childNodes[parentNode.childNodes.length - 2];
        }
        console.log(targetNode, parentNode);
        emit('drop-end', draggingNode, targetNode, action[dropType], parentNode);
      } else {
        emit('drop-end', draggingNode, dropNode, action[dropType]);
      }
    };

    expose({
      inputchange,
      setCurrentKey,
      setExpandedKeys,
      getCurrentNode,
      getCurrentKey,
      getNode,
      removeSelectNode,
      handleNodeClick,
    });

    const hasPermission = (permission) => {
      //获取这个客户的所有的权限信息
      if (permission && permission.length > 0) {
        const permissionFlag = permission; //传过来的值

        if (permissions.includes('*:*:*')) {
          return true;
        }

        // 判断
        return permissions.some((permission) => {
          return permissionFlag.includes(permission);
        });
      }
    };

    // 至少有一条数据才展示...
    const leastOne = computed(() => {
      let showOptList = menuList.value.filter((item) => {
        return (
          hasPermission([item.haspermissionkey]) &&
          ((!props.specialKey && props.maxLevel === Infinity) ||
            !item.special ||
            (props.specialKey && !currentNodeData.value[props.specialKey]) ||
            (item.special && props.maxLevel !== Infinity && (currentNode.value).level < props.maxLevel)) &&
          (!props.internalTree ||
            (props.internalTree && item.topLevelOpt && (currentNode.value).level === 1) ||
            (props.internalTree && item.nextLevelOpt && (currentNode.value).level > 1)) &&
          (!props.doubleLevelTree ||
            (props.doubleLevelTree && item.topLevelOpt && (currentNode.value).level === 1) ||
            (props.doubleLevelTree && item.nextLevelOpt && (currentNode.value).level > 1))
        );
      });
      if (showOptList.length === 0) {
        return false;
      }

      return true;
    });

    return {
      fmoneTree,
      eltree,
      currentNodeData,
      currentNode,
      preset,
      menuList,
      defaultPropLabel,
      filterInput,
      showtree,
      expandedKeys,
      headerbutton,
      inputchange,
      filterNode,
      handleNodeClick,
      handleCommand,
      collapsetree,
      handleNodeExpand,
      handleNodeCollapse,
      allowDrop,
      allowDrag,
      handleDrop,
      leastOne,
    };
  },
});
</script>
<style lang="less">
.fmcoe-tree {
  display: inline-block;
  // padding: 36px 32px;
  .fmcoe-tree-show {
    display: flex;
    flex-direction: column;
    width: 21vw;
    position: relative;
    height: calc(100vh - var(--header-height) - 20px);
    padding: 36px 32px;
    background-color: var(--coe-content-bg-color);
    border-radius: 21px;
    .titlestyle {
      line-height: 1;
      font-size: 24px;
      font-family: OPPOSans-B;
      font-weight: 500;
      color: var(--text-level-one);
    }
    .el-input {
      height: 40px;
      margin-bottom: 26px;
    }
    .el-input__wrapper {
      border-radius: 17px;
    }
    .fmone-tree-search + .scroll-content {
      height: calc(100% - 65px - 58px);
    }
    .scroll-content {
      flex: 1;
      display: flex;
      overflow: auto;
      height: calc(100% - 65px);
    }
    .el-tree {
      //overflow: auto;
      .el-tree-node__content {
        //display: inline-block;
        margin-bottom: 8px;
        height: 40px;
        line-height: 40px;
        width: 100%;
        border-radius: 20px;
      }
    }
  }
  .tree-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 34px;
  }
  &:hover {
    .rightsvg {
      display: inline-block;
    }
  }
  .sub-title{
    margin:  -10px 0 14px;
  }
}
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  width: calc(100% - 36px)
  //vertical-align: middle;
}
.rightsvg {
  width: 24px;
  height: 72px;
  position: absolute;
  right: -12px;
  top: 145px;
  display: none;
  line-height: 72px;
  text-align: center;
  background-color: var(--content-bg-color);
  border: 1px solid var(--bg-color);
  cursor: pointer;
  box-shadow: 0px 1px 14px 0px rgba(179, 179, 179, 0.18);
  border-radius: 12px;
}
.collapse {
  width: 66px;
  height: 66px;
  text-align: center;
  background-color: var(--coe-content-bg-color);
  display: inline-block;
  cursor: pointer;
  line-height: 66px;
  border-radius: 50% !important;
}
.el-dropdown-menu__item {
  height: 40px;
}
.el-dropdown-menu__item:not(.is-disabled):focus {
  border-radius: 20px !important;
  background: #f2f2f2 !important;
  color: var(--text-level-one);
}
.dropdownmeunstyle {
  background: #ffffff;
  box-shadow: 0px 0px 10px 0px rgba(179, 179, 179, 0.3);
  border-radius: 14px;
  padding: 12px 11px;
  min-width: 140px;
}
.el-popper__arrow {
  display: none;
}

.fmone-tree-search{
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 26px;
  background-color: var(--el-fill-color-light);
  border-radius: 20px;
  &.more-search:after{
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 1px;
    height: 18px;
    background-color: var(--el-tree-active);
    transform: translate(-50%, -50%);
  }
  >*{
    flex: 1;
  }
  .el-input{
    margin-bottom: 0 !important;
  }
  .el-input__wrapper{
    box-shadow: none !important;
    background-color: var(--el-fill-color-light);
  }
}
</style>
