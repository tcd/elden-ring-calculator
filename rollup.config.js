import typescript from "@rollup/plugin-typescript"
// import commonjs from "@rollup/plugin-commonjs"

/** @type {import('typescript').CompilerOptions} */
const tsOptions = {
    downlevelIteration: true,
}

/** @type {import('rollup').RollupOptions} */
const config = {
    input: "./src/lib/calculator/WeaponStatsCalculator.ts",
    output: [
        // {
        //     // dir: "dist",
        //     format: "cjs",
        //     file: "./dist/cjs/elden-ring-calculator.js",
        //     inlineDynamicImports: true,
        // },
        {
            // dir: "dist",
            format: "esm",
            file: "./dist/rollup/elden-ring-calculator.mjs",
            // inlineDynamicImports: true,
        },
    ],
    // external: [

    // ],
    plugins: [
        typescript({
            tsconfig: "tsconfig.prod.json",
            // inlineSources: true,
        }),
        // commonjs({ extensions: [".js", ".ts"] }) // the ".ts" extension is required
    ],
}

export default config
