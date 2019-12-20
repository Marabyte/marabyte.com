import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

const extensions = ['.js', '.ts'];

export default function({ watch }) {
  return {
    input: 'site/_assets/scripts/main.ts',
    output: {
      file: '_site/assets/scripts/main.js',
      format: 'esm',
      assetFileNames: '[name]-[hash][extname]'
    },
    watch: {
      clearScreen: false,
      // Avoid watching intermediate files, else watch gets stuck in a loop.
      // 11ty source files are watched by eleventyPlugin.
      exclude: '_site/**/*.html'
    },
    plugins: [
      resolve({ extensions }),
      babel({
        extensions,
        exclude: 'node_modules/**' // only transpile our source code
      }),
      terser({ ecma: 8, module: true })
    ]
  };
}
