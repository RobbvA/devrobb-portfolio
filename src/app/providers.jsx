"use client";

import * as React from "react";
import { CacheProvider } from "@emotion/react";
import { useServerInsertedHTML } from "next/navigation";
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

export default function Providers({ children }) {
  // Create a fresh cache instance (stable for this render tree)
  const [cache] = React.useState(() => {
    const c = createEmotionCache();

    // Track inserted styles so we can flush them during SSR
    c.__inserted = new Set();

    const prevInsert = c.insert;
    c.insert = (...args) => {
      const serialized = args[1];
      if (serialized?.name) c.__inserted.add(serialized.name);
      return prevInsert(...args);
    };

    return c;
  });

  useServerInsertedHTML(() => {
    const names = Array.from(cache.__inserted);
    if (names.length === 0) return null;

    let styles = "";
    for (const name of names) {
      const style = cache.inserted[name];
      if (style) styles += style;
    }

    return (
      <style
        data-emotion={`${cache.key} ${names.join(" ")}`}
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <ChakraProvider value={system}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
