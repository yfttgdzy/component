<template>
  <div>
    <el-tree :data="data"></el-tree>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'FmoneTree',

  props: {
    data: {
      type: Array,
      defalut(){
        return  []
      }
    }
  },

  setup() {
    return {

    }
  }
})
</script>

<style scoped>

</style>
