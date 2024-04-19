<template>
  <svg aria-hidden="true" :class="[svgClass, { 'is-disabled': disabled }]" :style="iconSize">
    <use class="svg-use" :xlink:href="iconClassName" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent,toRefs, computed, } from 'vue';

  export default defineComponent({
    name: 'SvgIcon',

    props: {
      iconName: {
        type: String,
        required: true,
      },
      className: {
        type: String,
        default: '',
      },
      color: {
        type: String,
        default: '#fff',
      },
      size: {
        type: String,
        default: '12px',
      },
      disabled: Boolean,
    },

    setup(props) {
      let { iconName, className, size, color } = toRefs(props);
      // 图标在 iconfont 中的名字
      const iconClassName = computed(() => {
        return `#${iconName.value}`;
      });

      // 给图标添加上类名
      const svgClass = computed(() => {
        if (className.value) {
          return `svg-icon ${className.value}`;
        }

        return 'svg-icon';
      });

      const iconSize = computed(() => {
        return {
          width: size.value,
          height: size.value,
          color: color.value,
        };
      });

      return {
        iconClassName,
        svgClass,
        iconSize,
      };
    },
  });
</script>
<style lang="less" scoped>
  .svg-icon {
    width: 12px;
    height: 12px;
    position: relative;
    outline: none;
    cursor: pointer;
    &.is-disabled {
      cursor: not-allowed;
    }
    & use:last-of-type {
      //fill: #fff;
    }
  }
  svg {
    fill: currentColor;
  }
</style>
