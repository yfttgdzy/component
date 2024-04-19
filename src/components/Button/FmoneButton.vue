<template>
  <el-button :type="type">
    <slot></slot>
  </el-button>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'FmoneButton',

  props: {
    type: String
  },

  setup() {
    return {}
  }
})
</script>

<style scoped>

</style>
