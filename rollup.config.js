import typescript from "@rollup/plugin-typescript"
import commonjs from "@rollup/plugin-commonjs"

const plugins = [
    typescript({
        tsconfig: "tsconfig.prod.json",
    }),
    commonjs({ extensions: [".ts"] }), // the ".ts" extension is required
]

/** @type {import('rollup').RollupOptions} */
const config = {
    input: "./src/lib/calculator/WeaponStatsCalculator.ts",
    output: [
        {
            format: "cjs",
            file: "./dist/index.cjs.js",
            exports: "named",
        },
    ],
    plugins: plugins,
}

export default config
