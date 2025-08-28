import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  if (command === 'build' && mode === 'lib') {
    // Library build for npm publishing
    return {
      plugins: [react()],
      build: {
        lib: {
          entry: 'src/index.ts',
          name: 'QuoteTool',
          fileName: (format) => `quote-tool.${format}.js`,
          formats: ['es', 'umd']
        },
        rollupOptions: {
          external: ['react', 'react-dom', 'three'],
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
              three: 'THREE'
            }
          }
        }
      }
    }
  }
  
  // Default development build
  return {
    plugins: [react()],
  }
})
