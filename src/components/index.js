import svgIcon from "./SvgIcon/index.vue";
import FmoneTree from "./Tree/FmoneTree.vue";

export {
  svgIcon,
  FmoneTree
}

const components = [svgIcon, FmoneTree];

const FmoneCoeUi = {
  install(App) {
    components.forEach(item => {
      App.component(item.name, item)
    })
  }
}

export default FmoneCoeUi
