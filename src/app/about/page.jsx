// src/app/about/page.jsx
"use client";

import {
  Box,
  Heading,
  Text,
  VStack,
  Stack,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export default function AboutPage() {
  return (
    <Box
      as="main"
      minH="80dvh"
      bg="#000"
      color="#fff"
      px={{ base: 6, md: 12 }}
      pt={{ base: 10, md: 16 }}
      pb={{ base: 12, md: 20 }}
    >
      <VStack
        align="flex-start"
        spacing={{ base: 10, md: 12 }}
        maxW="6xl"
        mx="auto"
      >
        {/* ABOUT + hero section */}
        <Box w="full">
          <Text
            fontSize={{ base: "sm", md: "md", lg: "lg" }}
            fontWeight="600"
            textTransform="uppercase"
            letterSpacing="0.18em"
            color="rgba(255,255,255,0.55)"
            mb={4}
          >
            About me
          </Text>

          <Flex
            direction={{ base: "column", md: "row" }}
            align="flex-start"
            gap={{ base: 6, md: 12 }}
          >
            {/* Foto links */}
            <Box
              flexShrink={0}
              maxW={{ base: "140px", md: "170px" }}
              w="100%"
              borderRadius="2xl"
              overflow="hidden"
              boxShadow="0 18px 45px rgba(0,0,0,0.65)"
            >
              <Image
                src="/FotoIk.jpg"
                alt="Portrait of Robbert van Asselt"
                width={600}
                height={600}
                priority
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </Box>

            {/* Tekst rechts */}
            <VStack
              align="flex-start"
              spacing={{ base: 3, md: 4 }}
              maxW="40rem"
            >
              <Heading
                as="h1"
                fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                lineHeight={1.2}
                letterSpacing="-0.01em"
                color="#FFFCDD"
                className={playfair.className}
              >
                Robbert van Asselt
              </Heading>

              <Text
                fontSize={{ base: "md", md: "lg" }}
                fontWeight="500"
                color="#b5baff"
              >
                AI-Native Full-Stack Developer
              </Text>

              <Text
                fontSize={{ base: "sm", md: "md" }}
                color="rgba(255,255,255,0.7)"
                maxW="40rem"
                lineHeight={1.8}
              >
                I work with an architecture-first approach, defining structure
                and data flow before writing code. AI accelerates iteration and
                refinement, while system design stays in full control.
              </Text>
            </VStack>
          </Flex>
        </Box>

        {/* Kaarten-grid */}
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          gap={{ base: 6, md: 8, lg: 9 }}
          w="100%"
          mt={{ base: 6, md: 8 }}
        >
          {/* Card 1 — Soft skills */}
          <GlassCard>
            <Text
              fontSize={{ base: "xs", md: "sm" }}
              textTransform="uppercase"
              letterSpacing="0.14em"
              color="rgba(181,186,255,0.7)"
              mb={3}
            >
              Soft skills
            </Text>

            <Heading
              as="h2"
              fontSize={{ base: "lg", md: "xl" }}
              mb={3}
              color="#FFFCDD"
            >
              Clear communication, structured thinking, steady focus.
            </Heading>

            <VStack align="flex-start" spacing={2.5}>
              <Text fontSize="sm" color="rgba(255,255,255,0.8)">
                • I communicate clearly and directly — structure over noise,
                solutions over drama.
              </Text>
              <Text fontSize="sm" color="rgba(255,255,255,0.8)">
                • I explain complex technical ideas in simple language, through
                playbooks and content.
              </Text>
              <Text fontSize="sm" color="rgba(255,255,255,0.8)">
                • I take ownership of my work and keep the process transparent
                and predictable.
              </Text>
              <Text fontSize="sm" color="rgba(255,255,255,0.8)">
                • I stay calm under pressure and break problems into manageable
                layers.
              </Text>
            </VStack>
          </GlassCard>

          {/* Card 2 — Tech stack */}
          <GlassCard>
            <Text
              fontSize={{ base: "xs", md: "sm" }}
              textTransform="uppercase"
              letterSpacing="0.14em"
              color="rgba(181,186,255,0.7)"
              mb={3}
            >
              Tech stack
            </Text>

            <Heading
              as="h2"
              fontSize={{ base: "lg", md: "xl" }}
              mb={3}
              color="#FFFCDD"
            >
              Tools I use inside an architecture-first workflow.
            </Heading>

            <VStack align="flex-start" spacing={3}>
              <Stack direction="row" flexWrap="wrap" gap={2}>
                <SkillTag>React</SkillTag>
                <SkillTag>Next.js</SkillTag>
                <SkillTag>TypeScript</SkillTag>
                <SkillTag>Chakra UI</SkillTag>
              </Stack>

              <Stack direction="row" flexWrap="wrap" gap={2}>
                <SkillTag>Node.js</SkillTag>
                <SkillTag>Express</SkillTag>
                <SkillTag>Prisma</SkillTag>
                <SkillTag>SQLite</SkillTag>
              </Stack>

              <Stack direction="row" flexWrap="wrap" gap={2}>
                <SkillTag>REST APIs</SkillTag>
                <SkillTag>Git &amp; GitHub</SkillTag>
                <SkillTag>Testing basics</SkillTag>
              </Stack>

              <Text fontSize="sm" color="rgba(255,255,255,0.75)" mt={2}>
                I prefer a small, predictable stack so I can focus on
                architecture and problem-solving instead of tooling. React,
                Next.js, Node, and Prisma provide everything I need to build
                clean, maintainable systems.
              </Text>
            </VStack>
          </GlassCard>

          {/* Card 3 — How I work */}
          <GlassCard>
            <Text
              fontSize={{ base: "xs", md: "sm" }}
              textTransform="uppercase"
              letterSpacing="0.14em"
              color="rgba(181,186,255,0.7)"
              mb={3}
            >
              How I work
            </Text>

            <Heading
              as="h2"
              fontSize={{ base: "lg", md: "xl" }}
              mb={3}
              color="#FFFCDD"
            >
              Architecture first. AI for acceleration. Quality by design.
            </Heading>

            <VStack align="flex-start" spacing={2.5}>
              <Text fontSize="sm" color="rgba(255,255,255,0.8)">
                • I start with the system: domain models, data flow, boundaries
                and constraints — before thinking about code.
              </Text>

              <Text fontSize="sm" color="rgba(255,255,255,0.8)">
                • I use AI to explore implementation options, generate
                scaffolding and speed up refactoring — not to replace thinking.
              </Text>

              <Text fontSize="sm" color="rgba(255,255,255,0.8)">
                • I document what works in playbooks so my workflow stays
                consistent across projects.
              </Text>

              <Text fontSize="sm" color="rgba(255,255,255,0.8)">
                • I prefer small, focused commits and clear reasoning so every
                codebase stays understandable.
              </Text>
            </VStack>
          </GlassCard>
        </SimpleGrid>
      </VStack>
    </Box>
  );
}

/**
 * Herbruikbare glassmorphism card
 */
function GlassCard({ children }) {
  return (
    <Box
      borderRadius="2xl"
      borderWidth="1px"
      borderColor="rgba(255,255,255,0.16)"
      bg="linear-gradient(135deg, rgba(255,252,221,0.03), rgba(181,186,255,0.05))"
      boxShadow="0 18px 45px rgba(0,0,0,0.55)"
      backdropFilter="blur(18px)"
      p={{ base: 5, md: 6 }}
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      minH={{ base: "auto", md: "260px" }}
      transition="transform 0.18s ease-out, box-shadow 0.18s ease-out, border-color 0.18s ease-out, background 0.18s ease-out"
      _hover={{
        transform: "translateY(-3px)",
        boxShadow: "0 22px 60px rgba(0,0,0,0.7)",
        borderColor: "rgba(255,255,255,0.26)",
        bg: "linear-gradient(135deg, rgba(255,252,221,0.06), rgba(181,186,255,0.1))",
      }}
    >
      {children}
    </Box>
  );
}

/**
 * Kleine tag-stijl voor skills (eigen Box, geen Chakra Tag)
 */
function SkillTag({ children }) {
  return (
    <Box
      as="span"
      borderRadius="999px"
      px={3}
      py={1}
      fontSize="xs"
      bg="rgba(181,186,255,0.12)"
      color="rgba(255,255,255,0.9)"
      borderWidth="1px"
      borderColor="rgba(181,186,255,0.45)"
      fontWeight={500}
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      lineHeight={1.2}
    >
      {children}
    </Box>
  );
}
