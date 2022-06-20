import { join, resolve } from "path"
import alias from "@rollup/plugin-alias"
import dts from "rollup-plugin-dts"

const PROJECT_ROOT = "."

/** @type {import('rollup').RollupOptions} */
const config = {
    input: join(PROJECT_ROOT, "etc/build/tsc/index.d.ts"),
    output: [{
        file: join(PROJECT_ROOT, "etc/build/elden-ring-calculator.d.ts"),
        format: "es",
    }],
    plugins: [
        dts(),
        alias({
            resolve: [".ts"],
            entries: { "@/": resolve(PROJECT_ROOT, "etc/build/tsc") }
        }),
    ],
}

export default config
