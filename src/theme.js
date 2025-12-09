import {
    ChakraProvider,
    createSystem,
    defaultConfig,
    defineConfig,
} from "@chakra-ui/react"

const config = defineConfig({
    globalCss: {
        "body": {
            "backgroundColor": "#1a1c21",
            "color": "#fff"
        }
    },
    theme: {
        tokens: {
            colors: {
                brand: {
                    ...defaultConfig.theme.tokens.colors.orange
                }
            },
        },
        semanticTokens: {
            colors: {
                brand: {
                    solid: { value: "{colors.brand.500}" },
                    contrast: { value: "{colors.brand.100}" },
                    fg: { value: "{colors.brand.700}" },
                    muted: { value: "{colors.brand.100}" },
                    subtle: { value: "{colors.brand.200}" },
                    emphasized: { value: "{colors.brand.300}" },
                    focusRing: { value: "{colors.brand.500}" },
                },
            },
        },
    },
})

export const system = createSystem(defaultConfig, config)