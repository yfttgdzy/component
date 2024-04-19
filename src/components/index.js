import fmoneTree from "./FmoneTree/FmoneTree.vue";

export {
  fmoneTree
}

const components = [fmoneTree];

const CoeComponent = {
  install(App) {
    components.forEach(item => {
      App.components(item.name || item, item)
    })
  }
}

export default CoeComponent