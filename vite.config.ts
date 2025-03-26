import { defineConfig, InlineConfig, UserConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
        prependData: `@use 'src/styles/index.scss' as *;`,
      }
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    transformMode: {
      web: [/\.[jt]sx?$/],
    },
    setupFiles: './setupVitest.ts',
  },
  build: {
    target: 'esnext',
  },
} as VitestConfigExport);

