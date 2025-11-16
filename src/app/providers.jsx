"use client";

import { CacheProvider } from "@emotion/react";
import createEmotionCache from "./emotion-cache";

import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";

const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        brandYellow: { value: "#FFFCDD" },
        brandBlue: { value: "#b5baff" },
        ink: { value: "#000000" },
      },
    },
  },
});

const clientEmotionCache = createEmotionCache();

export default function Providers({ children }) {
  return (
    <CacheProvider value={clientEmotionCache}>
      <ChakraProvider value={system}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
