import typescript from "@rollup/plugin-typescript"
import commonjs from "@rollup/plugin-commonjs"
import babel from "@rollup/plugin-babel"
import dts from "rollup-plugin-dts"
import { terser } from "rollup-plugin-terser"

const shared = {
    input: "src/main.ts",
    plugins: [
        typescript({
            tsconfig: "tsconfig.prod.json",
            // inlineSources: true,
        }),
        // commonjs({ extensions: [".ts"] }), // the ".ts" extension is required
        babel({ extensions: [".ts"], exclude: "node_modules/**" }),
        // terser(),
        // dts(),
    ],
}

/** @type {import('rollup').RollupOptions} */
const config = [
    // =====================================================================
    // CJS
    // =====================================================================
    {
        ...shared,
        format: "cjs",
        file: "./dist/index.cjs.min.js",
        inlineDynamicImports: true,
        // exports: "named",
        plugins: [
            ...shared.plugins,
            commonjs({ extensions: [".ts"] }), // the ".ts" extension is require d
        ],
    },
    // =====================================================================
    // ESM
    // =====================================================================
    {
        ...shared,
        format: "es",
        file: "./dist/index.es.js",
        // inlineDynamicImports: true,
    },
    {
        ...shared,
        format: "esm",
        file: "./dist/index.esm.js",
        // inlineDynamicImports: true,
    },
    // =====================================================================
    // UMD
    // =====================================================================
    {
        ...shared,
        file: "dist/index.umd.min.js",
        format: "umd",
        // name: "elden-ring-calculator",
        indent: false,
    },
    // =====================================================================
    // Types
    // =====================================================================
    {
        ...shared,
        file: "./dist/index.d.ts",
        format: "es",
        // name: "elden-ring-calculator",
        plugins: [
            ...shared.plugins,
            dts(),
        ],
    },
]

export default config
