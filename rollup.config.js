import typescript from "@rollup/plugin-typescript"
import commonjs from "@rollup/plugin-commonjs"
// import pkg from "./package.json";

const plugins = [
    typescript({
        tsconfig: "tsconfig.prod.json",
        // inlineSources: true,
    }),
    commonjs({ extensions: [".ts"] }) // the ".ts" extension is required

]

/** @type {import('rollup').RollupOptions} */
const config = {
    input: "./src/lib/calculator/WeaponStatsCalculator.ts",
    output: [
        {
            format: "cjs",
            file: "./dist/index.cjs.js",
            // inlineDynamicImports: true,
            exports: "named",
        },
        // {
        //     // dir: "dist",
        //     format: "esm",
        //     file: "./dist/rollup/elden-ring-calculator.mjs",
        //     // inlineDynamicImports: true,
        // },
    ],
    plugins: plugins,
}
export default config
