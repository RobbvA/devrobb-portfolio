// src/app/about/page.jsx
"use client";

import {
  Box,
  Heading,
  Text,
  VStack,
  Stack,
  SimpleGrid,
} from "@chakra-ui/react";

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
        spacing={{ base: 8, md: 10 }}
        maxW="6xl"
        mx="auto"
      >
        {/* Titel + intro */}
        <Box>
          <Text
            fontSize={{ base: "xs", md: "sm" }}
            textTransform="uppercase"
            letterSpacing="0.18em"
            color="rgba(255,255,255,0.55)"
            mb={2}
          >
            About me
          </Text>

          <Heading
            as="h1"
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            lineHeight={1.2}
            letterSpacing="0.02em"
            color="#FFFCDD"
            mb={3}
          >
            A developer who likes to build — and explain.
          </Heading>

          <Text
            fontSize={{ base: "sm", md: "md" }}
            color="rgba(255,255,255,0.75)"
            maxW="70ch"
            lineHeight={1.7}
          >
            I&apos;m a full-stack developer who enjoys turning ideas into
            working products, and explaining the “why” behind the code. On this
            page you&apos;ll find a snapshot of my soft skills, the tools I work
            with, and how I approach projects and collaboration.
          </Text>
        </Box>

        {/* Kaarten-grid */}
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          gap={{ base: 6, md: 7, lg: 8 }}
          w="100%"
          mt={{ base: 4, md: 6 }}
        >
          {/* Card 1 — Soft skills */}
          <GlassCard>
            <Text
              fontSize={{ base: "sm", md: "sm" }}
              textTransform="uppercase"
              letterSpacing="0.16em"
              color="rgba(181,186,255,0.7)"
              mb={3}
            >
              Soft skills
            </Text>

            <Heading
              as="h2"
              fontSize={{ base: "lg", md: "xl" }}
              mb={4}
              color="#FFFCDD"
            >
              Communication, teaching, ownership.
            </Heading>

            <VStack align="flex-start" spacing={2}>
              <Text fontSize="sm" color="rgba(255,255,255,0.78)">
                • Clear communication — I like to keep things structured, honest
                and to the point.
              </Text>
              <Text fontSize="sm" color="rgba(255,255,255,0.78)">
                • Teaching mindset — I create short, practical web dev content
                to help others understand complex topics.
              </Text>
              <Text fontSize="sm" color="rgba(255,255,255,0.78)">
                • Ownership — if I commit to a task or project, I take
                responsibility for the result.
              </Text>
              <Text fontSize="sm" color="rgba(255,255,255,0.78)">
                • Growth-focused — I treat every project as a chance to improve
                both my code and my workflow.
              </Text>
            </VStack>
          </GlassCard>

          {/* Card 2 — Tech stack */}
          <GlassCard>
            <Text
              fontSize={{ base: "sm", md: "sm" }}
              textTransform="uppercase"
              letterSpacing="0.16em"
              color="rgba(181,186,255,0.7)"
              mb={3}
            >
              Tech stack
            </Text>

            <Heading
              as="h2"
              fontSize={{ base: "lg", md: "xl" }}
              mb={4}
              color="#FFFCDD"
            >
              The tools I build with.
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

              <Text fontSize="sm" color="rgba(255,255,255,0.7)" mt={2}>
                I like a lean, predictable stack so I can focus on solving real
                problems instead of fighting tooling.
              </Text>
            </VStack>
          </GlassCard>

          {/* Card 3 — How I work */}
          <GlassCard>
            <Text
              fontSize={{ base: "sm", md: "sm" }}
              textTransform="uppercase"
              letterSpacing="0.16em"
              color="rgba(181,186,255,0.7)"
              mb={3}
            >
              How I work
            </Text>

            <Heading
              as="h2"
              fontSize={{ base: "lg", md: "xl" }}
              mb={4}
              color="#FFFCDD"
            >
              Clear structure. Practical steps. Strong foundations.
            </Heading>

            <VStack align="flex-start" spacing={2}>
              <Text fontSize="sm" color="rgba(255,255,255,0.78)">
                • I start every project with a clear plan: what I want to build,
                which stack fits best and how to structure the project from the
                ground up.
              </Text>

              <Text fontSize="sm" color="rgba(255,255,255,0.78)">
                • For debugging I use my own playbooks — step-by-step guides
                I’ve written to keep the process structured and solve issues
                efficiently.
              </Text>

              <Text fontSize="sm" color="rgba(255,255,255,0.78)">
                • In version control I prefer small commits with clear messages
                to keep collaboration simple and project history clean.
              </Text>

              <Text fontSize="sm" color="rgba(255,255,255,0.78)">
                • I combine clean UI with logical, maintainable code and a
                predictable backend — good UX on the surface, solid engineering
                underneath.
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
      minH={{ base: "auto", md: "280px" }}
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
