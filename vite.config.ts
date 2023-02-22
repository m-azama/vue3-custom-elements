import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import unluginAutoImport from 'unplugin-auto-import/vite';
//import unluginVueComponents from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // ダッシュを含むすべてのタグをカスタム要素として扱う
          isCustomElement: (tag) => {
            // console.log(tag);
            if (tag.includes('-')) return true;
          }
        }
      }
    }),
    unluginAutoImport({
      imports: [
        'vue',
        'vue-router',
        'pinia',
      ],
      dts: 'src/auto-import.d.ts',
    }),
    // unluginVueComponents({
    //   dts: 'src/components.d.ts',
    // }),
  ],
})
