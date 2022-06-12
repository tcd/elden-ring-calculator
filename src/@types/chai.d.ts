// eslint-disable-next-line @typescript-eslint/prefer-namespace-keyword
declare module Chai {
    export interface AssertStatic {
        deepEqualInAnyOrder(actual: any, expected: any, message?: string): void
        notDeepEqualInAnyOrder(actual: any, expected: any, message?: string): void
    }
}
