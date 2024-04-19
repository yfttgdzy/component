import fmoneTree from "./FmoneTree/FmoneTree.vue";
import svgIcon from "./SvgIcon/index.vue";

export {
  fmoneTree,
  svgIcon
}

const components = [fmoneTree, svgIcon];

const CoeComponent = {
  install(App) {
    components.forEach(item => {
      App.component(item.name, item)
    })
  }
}

export default CoeComponent
