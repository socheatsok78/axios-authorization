import pkg from './package.json'
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';

import typescript from "rollup-plugin-typescript2";
import json from '@rollup/plugin-json';
import { terser } from "rollup-plugin-terser";

function config({ name, input, format, minify, ext = "js" }) {
  const dir = `dist/${format}`;
  const minifierSuffix = minify ? ".min" : "";

  return {
    input: `src/${input}.ts`,
    output: {
      file: `${dir}/${input}${minifierSuffix}.${ext}`,
      name,
      format,
      sourcemap: true,
    },
    plugins: [
      json(),
      commonjs(),
      nodeResolve(),
      typescript({
        clean: true,
        typescript: require("typescript"),
        tsconfigOverride: {
          compilerOptions: {
            sourceMap: true,
          },
          // Don’t ask. Without this, the typescript plugin is convinced
          // to create subfolders and misplace the .d.ts files.
          files: [`src/${input}.ts`],
        },
      }),
      minify
        ? terser({
          compress: true,
          mangle: true,
        })
        : undefined
    ].filter(Boolean),
  };
}

function mapConfigs({name, input}) {
  return [
    // { name, input, format: "esm", minify: false, ext: 'mjs' },
    // { name, input, format: "esm", minify: true, ext: 'mjs' },
    // { name, input, format: "esm", minify: false },
    // { name, input, format: "esm", minify: true },
    { name, input, format: "umd", minify: false },
    { name, input, format: "umd", minify: true },
  ]
}

export default [
  ...mapConfigs({ name: pkg.name, input: 'index' })
].map(config)
