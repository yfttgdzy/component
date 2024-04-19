import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Inspect from 'vite-plugin-inspect'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';


// https://vitejs.dev/config/
export default defineConfig((command)=>{
  return {
    server: {
      port: '3000'
    },
    plugins: [
      vue(),
      vueJsx(),
      AutoImport({
        // Auto import functions from Vue, e.g. ref, reactive, toRef...
        // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        imports: ['vue'],

        // Auto import functions from Element Plus, e.g. ElMessage, ElMessageBox... (with style)
        // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
        resolvers: [
          ElementPlusResolver(),

          // Auto import icon components
          // 自动导入图标组件
          IconsResolver({
            prefix: 'icon',
          }),
        ],
      }),

      Components({
        resolvers: [
          // Auto register icon components
          // 自动注册图标组件
          IconsResolver({
            enabledCollections: ['ep'],
          }),
          // Auto register Element Plus components
          // 自动导入 Element Plus 组件
          ElementPlusResolver(),
        ],
      }),

      Icons({
        autoInstall: true,
      }),

      Inspect(),

      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]',
        svgoOptions: command === 'build',
      })
    ],
    build: {
      target: 'modules',
      // 索引文件
      sourcemap: true,
      //打包文件目录
      outDir: 'es',
      //压缩
      minify: true,
      //css分离
      // cssCodeSplit: true,

      rollupOptions: {
        //忽略打包vue、element-plus
        // external: ['vue', 'element-plus'],

        input: [fileURLToPath(new URL('./src/components/index.js', import.meta.url))],

        output: [
          {
            format: 'es',
            //不用打包成.es.js,这里我们想把它打包成.js
            entryFileNames: '[name].js',
            //让打包目录和我们目录对应
            preserveModules: false,
            exports: 'auto',
            //配置打包根目录
            dir: resolve(__dirname, './fmone-coe-ui/es'),
          },
          {
            // CommonJS，只能在 NodeJS 上运行，使用 require("module") 读取并加载模块。
            format: 'cjs',
            entryFileNames: '[name].js',
            //让打包目录和我们目录对应
            preserveModules: false,
            exports: 'auto',
            //配置打包根目录
            dir: resolve(__dirname, './fmone-coe-ui/lib'),
          },
        ],
      },

      lib: {
        entry: './index.js',
        name: 'fmone',
        formats: ['es', 'cjs'],
      },
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})
