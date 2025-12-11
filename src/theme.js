import {
    ChakraProvider,
    createSystem,
    defaultConfig,
    defineConfig,
} from "@chakra-ui/react"

import { buttonRecipe } from "./recipe/button.js"

const config = defineConfig({
    globalCss: {
        body: {
            colorPalette: "orange",
            backgroundColor: "#141619",
            color: "#f3f4f6",
        },

    },
    theme: {
        tokens: {
            fonts: {
                body: { value: "ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'" },
                heading: { value: "ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'" },
                mono: { value: "Fira Code, monospace" },
            },
        },
        semanticTokens: {
            radii: {
                l1: { value: 'none' },
                l2: { value: 'none' },
                l3: { value: 'none' },
            },
        },

    },
})

export const system = createSystem(defaultConfig, config)