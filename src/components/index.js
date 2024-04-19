import svgIcon from "./SvgIcon/index.vue";

export {
  svgIcon
}

const components = [svgIcon];

const FmoneCoeUi = {
  install(App) {
    components.forEach(item => {
      App.component(item.name, item)
    })
  }
}

export default FmoneCoeUi
