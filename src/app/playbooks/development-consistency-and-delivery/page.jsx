// src/app/playbooks/development-consistency-and-delivery/page.jsx
"use client";

import { Box, Heading, Text, VStack, Stack, Badge } from "@chakra-ui/react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const BRAND_BLUE = "#b5baff";
const BRAND_YELLOW = "#FFFCDD";

function SectionCard({ label, title, children }) {
  return (
    <Box
      w="full"
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
      gap={3}
    >
      {label && (
        <Text
          fontSize="xs"
          textTransform="uppercase"
          letterSpacing="0.14em"
          color="rgba(181,186,255,0.8)"
        >
          {label}
        </Text>
      )}

      <Heading
        as="h2"
        fontSize={{ base: "lg", md: "xl" }}
        letterSpacing="-0.01em"
        lineHeight={1.2}
        color={BRAND_YELLOW}
      >
        {title}
      </Heading>

      <Box
        w="100%"
        borderTop="1px solid rgba(255,255,255,0.08)"
        mt={1}
        mb={1}
      />

      <VStack align="flex-start" spacing={2.5}>
        {children}
      </VStack>
    </Box>
  );
}

function StepBadge({ children }) {
  return (
    <Badge
      borderRadius="full"
      px={3}
      py={0.5}
      fontSize="0.7rem"
      bg="#111218"
      border="1px solid rgba(181,186,255,0.55)"
      color={BRAND_BLUE}
      textTransform="none"
      fontWeight="500"
      letterSpacing="0.06em"
    >
      {children}
    </Badge>
  );
}

export default function DevelopmentConsistencyAndDeliveryPage() {
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
        {/* Header */}
        <Box w="full">
          <Text
            fontSize={{ base: "sm", md: "md" }}
            fontWeight="600"
            textTransform="uppercase"
            letterSpacing="0.18em"
            color="rgba(255,255,255,0.55)"
            mb={3}
          >
            Playbook · Delivery
          </Text>

          <Heading
            as="h1"
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            lineHeight={1.2}
            letterSpacing="-0.01em"
            color={BRAND_YELLOW}
            className={playfair.className}
            mb={3}
          >
            Development Playbook: Consistency & Delivery
          </Heading>

          <Text
            fontSize={{ base: "sm", md: "md" }}
            color="rgba(255,255,255,0.78)"
            maxW="46rem"
            lineHeight={1.9}
          >
            This playbook describes how I keep projects consistent: folder
            structure, commits, documentation and release habits — so work stays
            understandable, even when AI is involved.
          </Text>
        </Box>

        {/* Project structure */}
        <SectionCard label="Structure" title="Project structure and naming">
          <Text fontSize="sm" color="rgba(255,255,255,0.8)" lineHeight={1.9}>
            I prefer simple, predictable layouts over clever abstractions. A
            typical app is split into clear areas:
          </Text>

          <VStack align="flex-start" spacing={1.5} pl={1}>
            <Text fontSize="sm" color="rgba(255,255,255,0.8)">
              • frontend / app: pages, components, hooks, UI system.
            </Text>
            <Text fontSize="sm" color="rgba(255,255,255,0.8)">
              • backend / api: routes, services, repositories, schemas.
            </Text>
            <Text fontSize="sm" color="rgba(255,255,255,0.8)">
              • shared: types, models, constants and utilities.
            </Text>
          </VStack>

          <Text
            fontSize="sm"
            color="rgba(255,255,255,0.78)"
            lineHeight={1.9}
            mt={2}
          >
            Naming is descriptive and boring on purpose — so future changes are
            easier to reason about.
          </Text>
        </SectionCard>

        {/* Commits */}
        <SectionCard label="Git" title="Commit and branch strategy">
          <Stack spacing={4} w="full">
            <Box>
              <StepBadge>Habit 1 · Small, focused commits</StepBadge>
              <Text
                mt={2}
                fontSize="sm"
                color="rgba(255,255,255,0.8)"
                lineHeight={1.9}
              >
                I try to commit one logical change at a time: a feature slice, a
                refactor, or a bug fix. This makes history easier to read and
                revert when needed.
              </Text>
            </Box>

            <Box>
              <StepBadge>Habit 2 · Clear commit messages</StepBadge>
              <Text
                mt={2}
                fontSize="sm"
                color="rgba(255,255,255,0.8)"
                lineHeight={1.9}
              >
                I use short prefixes like <code>feat</code>, <code>fix</code>,{" "}
                <code>refactor</code> or <code>chore</code> to signal intent.
                The body explains the why when that context matters.
              </Text>
            </Box>

            <Box>
              <StepBadge>Habit 3 · Feature branches where it helps</StepBadge>
              <Text
                mt={2}
                fontSize="sm"
                color="rgba(255,255,255,0.8)"
                lineHeight={1.9}
              >
                For larger changes I branch off main, keep the branch small, and
                merge back once it&apos;s stable. I avoid long-lived feature
                branches when possible.
              </Text>
            </Box>
          </Stack>
        </SectionCard>

        {/* Documentation */}
        <SectionCard
          label="Documentation"
          title="Keeping docs lightweight but useful"
        >
          <Text fontSize="sm" color="rgba(255,255,255,0.8)" lineHeight={1.9}>
            I document just enough to make the next change easier:
          </Text>

          <VStack align="flex-start" spacing={1.5} pl={1}>
            <Text fontSize="sm" color="rgba(255,255,255,0.8)">
              • A short README describing the purpose, stack and how to run it.
            </Text>
            <Text fontSize="sm" color="rgba(255,255,255,0.8)">
              • Notes for tricky parts of the architecture or integrations.
            </Text>
            <Text fontSize="sm" color="rgba(255,255,255,0.8)">
              • Links to relevant playbooks or diagrams when they exist.
            </Text>
          </VStack>
        </SectionCard>

        {/* AI & consistency */}
        <SectionCard label="AI" title="Staying consistent when using AI">
          <Text fontSize="sm" color="rgba(255,255,255,0.8)" lineHeight={1.9}>
            AI can easily introduce inconsistent patterns if each prompt is
            different. To avoid that, I:
          </Text>

          <VStack align="flex-start" spacing={1.5} pl={1}>
            <Text fontSize="sm" color="rgba(255,255,255,0.8)">
              • Reuse the same project description and constraints in prompts.
            </Text>
            <Text fontSize="sm" color="rgba(255,255,255,0.8)">
              • Reference existing files as examples whenever I ask for new
              code.
            </Text>
            <Text fontSize="sm" color="rgba(255,255,255,0.8)">
              • Keep a small &quot;prompt snippet&quot; library for code style,
              folders and conventions.
            </Text>
          </VStack>

          <Text
            fontSize="sm"
            color="rgba(255,255,255,0.78)"
            lineHeight={1.9}
            mt={2}
          >
            The goal is that someone reading the project later cannot see which
            parts were written with AI and which were not — only that the whole
            thing feels consistent.
          </Text>
        </SectionCard>
      </VStack>
    </Box>
  );
}
