<template>
  <el-tree
    style="max-width: 600px"
    :data="data"
    :props="defaultProps"
    @node-click="handleNodeClick"
  />
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'FmoneTree',

  props: {
    treeData: Array,
  },

  setup() {
    const handleNodeClick = (data) => {
      console.log(data)
    }

    const data = [
      {
        label: 'Level one 1',
        children: [
          {
            label: 'Level two 1-1',
            children: [
              {
                label: 'Level three 1-1-1',
              },
            ],
          },
        ],
      },
      {
        label: 'Level one 2',
        children: [
          {
            label: 'Level two 2-1',
            children: [
              {
                label: 'Level three 2-1-1',
              },
            ],
          },
          {
            label: 'Level two 2-2',
            children: [
              {
                label: 'Level three 2-2-1',
              },
            ],
          },
        ],
      },
      {
        label: 'Level one 3',
        children: [
          {
            label: 'Level two 3-1',
            children: [
              {
                label: 'Level three 3-1-1',
              },
            ],
          },
          {
            label: 'Level two 3-2',
            children: [
              {
                label: 'Level three 3-2-1',
              },
            ],
          },
        ],
      },
    ]

    const defaultProps = {
      children: 'children',
      label: 'label',
    }

    return {
      data,
      defaultProps,
      handleNodeClick
    }
  }
})
</script>
