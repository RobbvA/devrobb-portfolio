"use client";

import { useEffect, useMemo, useState } from "react";
import { Box, Flex, Text, Button, VStack } from "@chakra-ui/react";
import Image from "next/image";

export default function ProjectCarousel({
  images = [],
  altBase = "Project screenshot",
}) {
  const safeImages = useMemo(
    () => images.filter((img) => img && img.src),
    [images]
  );

  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const hasImages = safeImages.length > 0;
  const current = hasImages ? safeImages[index] : null;

  function prev() {
    if (!hasImages) return;
    setIndex((i) => (i - 1 + safeImages.length) % safeImages.length);
  }

  function next() {
    if (!hasImages) return;
    setIndex((i) => (i + 1) % safeImages.length);
  }

  function open() {
    if (!current) return;
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  // Keyboard UX: Esc closes, arrows navigate (when open)
  useEffect(() => {
    if (!isOpen) return;

    function onKeyDown(e) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, hasImages, safeImages.length]);

  // Prevent background scroll when lightbox open
  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  return (
    <>
      <Box
        w="full"
        borderRadius="2xl"
        borderWidth="1px"
        borderColor="rgba(255,255,255,0.14)"
        bg="rgba(0,0,0,0.18)"
        boxShadow="0 18px 45px rgba(0,0,0,0.55)"
        overflow="hidden"
      >
        <VStack align="stretch" spacing={0}>
          {/* Image (clickable) */}
          <Box
            position="relative"
            w="100%"
            h={{ base: "240px", md: "300px", lg: "340px" }}
            bg="#050509"
            cursor={current ? "zoom-in" : "default"}
            onClick={open}
            role={current ? "button" : undefined}
            aria-label={current ? "Open screenshot fullscreen" : undefined}
            transition="transform 0.18s ease-out"
            _hover={current ? { transform: "translateY(-1px)" } : undefined}
          >
            {current ? (
              <Image
                src={current.src}
                alt={`${altBase} ${index + 1}`}
                fill
                priority={index === 0}
                style={{
                  objectFit: "contain",
                  padding: "16px",
                }}
              />
            ) : (
              <Flex w="100%" h="100%" align="center" justify="center" px={6}>
                <Text
                  fontSize={{ base: "sm", md: "md" }}
                  color="rgba(255,255,255,0.75)"
                  lineHeight={1.8}
                  textAlign="center"
                >
                  No screenshots found. Place images in <b>/public/projects</b>{" "}
                  and ensure your carousel receives objects with <b>src</b>.
                </Text>
              </Flex>
            )}
          </Box>

          {/* Caption */}
          <Box
            px={{ base: 4, md: 5 }}
            py={{ base: 3, md: 4 }}
            borderTop="1px solid rgba(255,255,255,0.08)"
            bg="rgba(0,0,0,0.10)"
          >
            <Text
              fontSize={{ base: "md", md: "md", lg: "lg" }}
              color="rgba(255,255,255,0.86)"
              lineHeight={1.85}
            >
              {current?.caption ? (
                current.caption
              ) : (
                <span style={{ opacity: 0.85 }}>
                  Add a caption per screenshot to explain what the viewer is
                  seeing.
                </span>
              )}
            </Text>

            {/* Controls */}
            <Flex
              align="center"
              justify="space-between"
              mt={{ base: 3, md: 4 }}
            >
              <Button
                onClick={prev}
                size="sm"
                variant="ghost"
                color="rgba(255,255,255,0.78)"
                _hover={{ bg: "rgba(255,255,255,0.06)" }}
              >
                Prev
              </Button>

              <Text
                fontSize="xs"
                color="rgba(255,255,255,0.58)"
                letterSpacing="0.14em"
              >
                {hasImages ? `${index + 1} / ${safeImages.length}` : "0 / 0"}
              </Text>

              <Button
                onClick={next}
                size="sm"
                variant="ghost"
                color="rgba(255,255,255,0.78)"
                _hover={{ bg: "rgba(255,255,255,0.06)" }}
              >
                Next
              </Button>
            </Flex>

            {/* Hint */}
            {current ? (
              <Text
                mt={2}
                fontSize="xs"
                color="rgba(255,255,255,0.55)"
                lineHeight={1.7}
              >
                Tip: click the screenshot to view it fullscreen. (Esc to close)
              </Text>
            ) : null}
          </Box>
        </VStack>
      </Box>

      {/* Lightbox overlay */}
      {isOpen && current ? (
        <Box
          position="fixed"
          inset={0}
          zIndex={9999}
          bg="rgba(0,0,0,0.82)"
          backdropFilter="blur(10px)"
          display="flex"
          alignItems="center"
          justifyContent="center"
          px={{ base: 4, md: 8 }}
          py={{ base: 6, md: 10 }}
          onClick={close} // click outside closes
          // Smoothness
          style={{
            animation: "overlayFade 140ms ease-out",
          }}
        >
          <Box
            position="relative"
            w="min(1100px, 96vw)"
            h="min(80vh, 720px)"
            borderRadius="2xl"
            border="1px solid rgba(255,255,255,0.14)"
            bg="rgba(5,5,9,0.85)"
            boxShadow="0 24px 90px rgba(0,0,0,0.75)"
            overflow="hidden"
            onClick={(e) => e.stopPropagation()} // prevent close when clicking image area
            style={{
              animation: "panelPop 160ms ease-out",
            }}
          >
            <Image
              src={current.src}
              alt={`${altBase} fullscreen ${index + 1}`}
              fill
              style={{
                objectFit: "contain",
                padding: "20px",
              }}
              sizes="(max-width: 768px) 96vw, 1100px"
              priority
            />

            {/* Top bar */}
            <Flex
              position="absolute"
              top={0}
              left={0}
              right={0}
              align="center"
              justify="space-between"
              px={4}
              py={3}
              bg="linear-gradient(180deg, rgba(0,0,0,0.60), rgba(0,0,0,0))"
            >
              <Text
                fontSize="xs"
                color="rgba(255,255,255,0.70)"
                letterSpacing="0.14em"
              >
                {index + 1} / {safeImages.length}
              </Text>

              <Button
                onClick={close}
                size="sm"
                variant="ghost"
                color="rgba(255,255,255,0.85)"
                _hover={{ bg: "rgba(255,255,255,0.08)" }}
              >
                Close
              </Button>
            </Flex>

            {/* Left/Right controls */}
            <Flex
              position="absolute"
              inset={0}
              align="center"
              justify="space-between"
              px={2}
              pointerEvents="none"
            >
              <Button
                onClick={prev}
                size="sm"
                variant="ghost"
                color="rgba(255,255,255,0.85)"
                _hover={{ bg: "rgba(255,255,255,0.08)" }}
                pointerEvents="auto"
              >
                ←
              </Button>

              <Button
                onClick={next}
                size="sm"
                variant="ghost"
                color="rgba(255,255,255,0.85)"
                _hover={{ bg: "rgba(255,255,255,0.08)" }}
                pointerEvents="auto"
              >
                →
              </Button>
            </Flex>

            {/* Caption */}
            <Box
              position="absolute"
              left={0}
              right={0}
              bottom={0}
              px={{ base: 4, md: 5 }}
              py={{ base: 3, md: 4 }}
              bg="linear-gradient(0deg, rgba(0,0,0,0.72), rgba(0,0,0,0))"
            >
              <Text
                fontSize={{ base: "sm", md: "md" }}
                color="rgba(255,255,255,0.90)"
                lineHeight={1.85}
              >
                {current.caption}
              </Text>
              <Text
                mt={1}
                fontSize="xs"
                color="rgba(255,255,255,0.60)"
                lineHeight={1.7}
              >
                Use ← / → to navigate, Esc to close.
              </Text>
            </Box>

            {/* Keyframes (scoped via global style) */}
            <style jsx global>{`
              @keyframes overlayFade {
                from {
                  opacity: 0;
                }
                to {
                  opacity: 1;
                }
              }
              @keyframes panelPop {
                from {
                  opacity: 0;
                  transform: translateY(6px) scale(0.985);
                }
                to {
                  opacity: 1;
                  transform: translateY(0) scale(1);
                }
              }
            `}</style>
          </Box>
        </Box>
      ) : null}
    </>
  );
}
