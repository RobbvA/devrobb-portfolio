"use client";
import createCache from "@emotion/cache";

export default function createEmotionCache() {
  let insertionPoint;

  if (typeof document !== "undefined") {
    insertionPoint =
      document.querySelector('meta[name="emotion-insertion-point"]') ??
      undefined;
  }

  return createCache({ key: "chakra", insertionPoint });
}
