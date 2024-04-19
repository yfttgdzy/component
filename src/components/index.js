import svgIcon from "./SvgIcon/index.vue";
import FmoneTree from "./Tree/FmoneTree.vue";
import FmoneButton from "./Button/FmoneButton.vue";

export {
  svgIcon,
  FmoneTree,
  FmoneButton
}

const components = [svgIcon, FmoneTree, FmoneButton];

const FmoneCoeUi = {
  install(App) {
    components.forEach(item => {
      App.component(item.name, item)
    })
  }
}

export default FmoneCoeUi
