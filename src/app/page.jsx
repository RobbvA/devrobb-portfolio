// src/app/page.jsx
"use client";

import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Stack,
  Flex,
} from "@chakra-ui/react";

import { motion, MotionConfig } from "framer-motion";
import NextLink from "next/link";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";

// 🎨 Elegante serif font voor je naam
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

// Framer Motion-variant van Chakra's Box
const MotionBox = motion.create(Box);

export default function HomePage() {
  return (
    <MotionConfig reducedMotion="user">
      <Box
        as="main"
        minH="80dvh"
        bg="#000"
        color="#fff"
        display="flex"
        alignItems="center"
        justifyContent="center"
        px={{ base: 6, md: 12 }}
        pl={{ lg: "0px" }} // ruimte voor sidebar
        pt={{ base: 8, md: 12 }} // top padding
        pb={{ base: 10, md: 16 }} // ruimte onderaan
      >
        <Flex
          align={{ base: "center", md: "flex-start" }}
          justify={{ base: "center", md: "space-between" }}
          direction={{ base: "column", md: "row" }}
          gap={{ base: 12, md: 20 }}
          maxW="6xl"
          w="full"
        >
          {/* ————————————————
              LINKERKOLOM — Tekst 
              ———————————————— */}
          <VStack
            align="flex-start"
            spacing={{ base: 9, md: 12 }}
            maxW={{ base: "100%", md: "64%" }}
            textAlign="left"
            pb={{ base: 4, md: 10 }}
          >
            {/* Naam + subtitel */}
            <MotionBox
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: "14px" }}
            >
              <Text
                fontSize={{ base: "sm", md: "md", lg: "lg" }}
                fontWeight="600"
                textTransform="uppercase"
                letterSpacing="0.18em"
                color="rgba(255,255,255,0.55)"
                mb={4}
              >
                Full-Stack Developer • AI-Driven Architecture Workflow
              </Text>

              <Heading
                as="h1"
                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                lineHeight={1.2}
                letterSpacing="0.025em"
                color="#FFFCDD"
                mb={4}
                fontWeight="200"
                className={playfair.className}
              >
                Robbert van Asselt
              </Heading>

              <Text
                fontSize={{ base: "xs", md: "sm" }}
                fontWeight="500"
                color="rgba(181,186,255,0.55)"
                textTransform="uppercase"
                letterSpacing="0.18em"
                mb={10}
              >
                dev.robb · Software engineering
              </Text>
            </MotionBox>

            {/* Introductie */}
            <MotionBox
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              mt={{ base: 1, md: 2 }}
            >
              <Text
                fontSize={{ base: "sm", md: "md" }}
                color="rgba(255,255,255,0.78)"
                maxW="70ch"
                lineHeight={1.9}
                letterSpacing="0.01em"
                mb={5}
              >
                I work with an AI-driven development workflow: designing modular
                system architecture, defining data models and flows, and then
                using AI to accelerate implementation while maintaining clean,
                scalable code. The stack I use is modern and predictable —
                React, Next.js, Node, Express and Prisma — but the
                architecture-first approach is what keeps everything structured
                and maintainable.
              </Text>
            </MotionBox>

            {/* Tech stack regel */}
            <MotionBox
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.45 }}
              mt={{ base: 2, md: 3 }}
            >
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                color="rgba(255, 255, 255, 0.32)"
                lineHeight={1.6}
              >
                React · Next.js · Node.js · Express · Prisma · SQLite · REST
                APIs · TypeScript · Git · Chakra UI
              </Text>
            </MotionBox>
          </VStack>

          {/* ————————————————
              RECHTERKOLOM — Illustratie + CTA's
              ———————————————— */}
          <VStack
            align="center"
            spacing={{ base: 6, md: 8 }}
            maxW={{ base: "70%", md: "220px", lg: "320px" }}
            w="full"
          >
            <MotionBox
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              w="full"
            >
              <Image
                src="/drawme.png"
                alt="Illustration of Robbert van Asselt"
                width={600}
                height={600}
                priority
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: "999px",
                }}
              />
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              w="full"
            >
              <Stack
                direction={{ base: "column", sm: "column" }}
                spacing={4}
                align="stretch"
              >
                <Button
                  as={NextLink}
                  href="/gallery"
                  bg="#b5baff"
                  color="#000"
                  fontWeight="600"
                  px={{ base: 6, md: 7 }}
                  py={{ base: 5, md: 5 }}
                  rounded="xl"
                  _hover={{ bg: "#c7caff", transform: "translateY(-1px)" }}
                  _active={{ transform: "translateY(0)" }}
                  w="full"
                >
                  Explore projects
                </Button>

                <Button
                  as={NextLink}
                  href="/contact"
                  variant="outline"
                  borderColor="rgba(181,186,255,0.6)"
                  color="#b5baff"
                  px={{ base: 6, md: 7 }}
                  py={{ base: 5, md: 5 }}
                  rounded="xl"
                  _hover={{
                    bg: "rgba(181,186,255,0.08)",
                    transform: "translateY(-1px)",
                  }}
                  _active={{ transform: "translateY(0)" }}
                  w="full"
                >
                  Contact
                </Button>
              </Stack>
            </MotionBox>
          </VStack>
        </Flex>
      </Box>
    </MotionConfig>
  );
}
