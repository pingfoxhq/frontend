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
            backgroundColor: "black",
            color: "white",
        },

    },
    theme: {
        tokens: {
            fonts: {
                body: { value: "Roboto, sans-serif" },
                heading: { value: "Poppins, sans-serif" },
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