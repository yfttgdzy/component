# coe-component

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Compile and Minify for Production

```sh
pnpm build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```


### 组件基本结构如下
![alt](/src/assets/img1, 'title')
#### 调用组件可使用  
pnpm add 对应仓库url，如下
```
pnpm add git+https://github.com/your-username/your-repo.git#branch-or-tag
import YourComponent from 'your-component-library';
```
其中调用组件可能会出现调用方面的报错可参考
[参考地址](https://stackoverflow.com/questions/72036673/typeerror-cannot-read-properties-of-null-reading-isce-custom-component-li)

