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
                Fullstack Developer
              </Text>

              <Text
                fontSize={{ base: "sm", md: "md" }}
                color="rgba(255,255,255,0.7)"
                maxW="40rem"
                lineHeight={1.8}
              >
                I moved into web development after years in a different
                industry. The work taught me structure, responsibility, and a
                calm mindset — qualities I now bring into my code. Today I focus
                on building clear, practical web apps and explaining the deeper
                tech in simple terms.
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
              Communication, ownership, calm focus.
            </Heading>

            <VStack align="flex-start" spacing={2.5}>
              <Text fontSize="sm" color="rgba(255,255,255,0.8)">
                • I like clear, honest communication — structured, to the point,
                without drama.
              </Text>
              <Text fontSize="sm" color="rgba(255,255,255,0.8)">
                • I enjoy explaining what I learn in simple language, through
                short web dev content and playbooks.
              </Text>
              <Text fontSize="sm" color="rgba(255,255,255,0.8)">
                • I take responsibility for my work and follow through on what I
                commit to.
              </Text>
              <Text fontSize="sm" color="rgba(255,255,255,0.8)">
                • I treat every project as a chance to grow — in both code and
                workflow.
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
              The tools I like to build with.
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
                I prefer a small, predictable stack so I can focus on solving
                real problems instead of fighting tooling.
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
              Work in clear layers. Keep it practical.
            </Heading>

            <VStack align="flex-start" spacing={2.5}>
              <Text fontSize="sm" color="rgba(255,255,255,0.8)">
                • I like to start with a simple plan: what we&apos;re building,
                which stack we use, and how to structure it.
              </Text>

              <Text fontSize="sm" color="rgba(255,255,255,0.8)">
                • I work in small, focused steps — one layer at a time, instead
                of trying to build everything at once.
              </Text>

              <Text fontSize="sm" color="rgba(255,255,255,0.8)">
                • I write my own playbooks for debugging and workflows so I can
                reuse what works.
              </Text>

              <Text fontSize="sm" color="rgba(255,255,255,0.8)">
                • In Git I prefer small, clear commits to keep the project
                history clean and easy to understand.
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
