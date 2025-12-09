// src/app/playbooks/ai-assisted-implementation-guide/page.jsx
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

export default function AiAssistedImplementationGuidePage() {
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
            Playbook · AI Implementation
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
            AI-Assisted Implementation Guide
          </Heading>

          <Text
            fontSize={{ base: "sm", md: "md" }}
            color="rgba(255,255,255,0.78)"
            maxW="46rem"
            lineHeight={1.9}
          >
            This playbook describes how I use AI during implementation:
            generating scaffolding, exploring options and refactoring — while
            keeping control over architecture, quality and consistency.
          </Text>
        </Box>

        {/* When to use AI */}
        <SectionCard
          label="When to use AI"
          title="Where AI helps in implementation"
        >
          <Text fontSize="sm" color="rgba(255,255,255,0.8)" lineHeight={1.9}>
            I use AI to speed up repetitive or boilerplate work, not to design
            systems for me. That means:
          </Text>

          <VStack align="flex-start" spacing={1.5} pl={1}>
            <Text fontSize="sm" color="rgba(255,255,255,0.8)">
              • Generating route handlers, controllers and DTOs from a clear API
              specification.
            </Text>
            <Text fontSize="sm" color="rgba(255,255,255,0.8)">
              • Scaffolding React components based on a known layout and props.
            </Text>
            <Text fontSize="sm" color="rgba(255,255,255,0.8)">
              • Creating repetitive mapping / transformation logic from
              described input → output shapes.
            </Text>
            <Text fontSize="sm" color="rgba(255,255,255,0.8)">
              • Producing initial tests, fixtures and mocks once contracts are
              defined.
            </Text>
          </VStack>
        </SectionCard>

        {/* Prompt patterns */}
        <SectionCard
          label="Prompt patterns"
          title="Prompting patterns that keep code predictable"
        >
          <Stack spacing={4} w="full">
            <Box>
              <StepBadge>Pattern 1 · Give the structure first</StepBadge>
              <Text
                mt={2}
                fontSize="sm"
                color="rgba(255,255,255,0.8)"
                lineHeight={1.9}
              >
                I always describe the file structure, module boundaries and
                input/output shapes before I ask for any code. This prevents AI
                from inventing random patterns and keeps the result aligned with
                the existing architecture.
              </Text>
            </Box>

            <Box>
              <StepBadge>Pattern 2 · Ask for small, focused outputs</StepBadge>
              <Text
                mt={2}
                fontSize="sm"
                color="rgba(255,255,255,0.8)"
                lineHeight={1.9}
              >
                Instead of asking for &quot;build the whole feature&quot;, I
                request one file, one function or one slice of UI at a time.
                Smaller outputs are easier to review, test and adapt.
              </Text>
            </Box>

            <Box>
              <StepBadge>Pattern 3 · Reuse my own style</StepBadge>
              <Text
                mt={2}
                fontSize="sm"
                color="rgba(255,255,255,0.8)"
                lineHeight={1.9}
              >
                I often paste in a small, existing example from the same
                codebase and ask AI to follow that pattern. This helps keep
                naming, error handling and structure consistent across files.
              </Text>
            </Box>

            <Box>
              <StepBadge>
                Pattern 4 · Ask for explanation, not just code
              </StepBadge>
              <Text
                mt={2}
                fontSize="sm"
                color="rgba(255,255,255,0.8)"
                lineHeight={1.9}
              >
                When the implementation is non-trivial, I ask AI to briefly
                explain its reasoning. This makes it easier to spot mistakes and
                update the solution later.
              </Text>
            </Box>
          </Stack>
        </SectionCard>

        {/* Review & refactor */}
        <SectionCard
          label="Review"
          title="Reviewing and refactoring AI-generated code"
        >
          <Text fontSize="sm" color="rgba(255,255,255,0.8)" lineHeight={1.9}>
            I treat AI like a fast junior developer: helpful, but not allowed to
            merge directly. Every non-trivial change goes through a quick review
            in my head (or as comments to AI).
          </Text>

          <VStack align="flex-start" spacing={1.5} pl={1}>
            <Text fontSize="sm" color="rgba(255,255,255,0.8)">
              • I check structure: does this match the module boundaries and
              data flow I designed earlier?
            </Text>
            <Text fontSize="sm" color="rgba(255,255,255,0.8)">
              • I check naming: are functions, variables and files named in a
              way that fits the project language?
            </Text>
            <Text fontSize="sm" color="rgba(255,255,255,0.8)">
              • I check invariants: are important constraints actually enforced
              (types, validation, permissions)?
            </Text>
            <Text fontSize="sm" color="rgba(255,255,255,0.8)">
              • I check failure modes: what happens when APIs fail, data is
              missing or inputs are invalid?
            </Text>
          </VStack>
        </SectionCard>

        {/* Limits */}
        <SectionCard label="Limits" title="Things I don’t delegate to AI">
          <Text fontSize="sm" color="rgba(255,255,255,0.8)" lineHeight={1.9}>
            There are a few areas where I rarely trust AI to decide for me:
          </Text>

          <VStack align="flex-start" spacing={1.5} pl={1}>
            <Text fontSize="sm" color="rgba(255,255,255,0.8)">
              • System boundaries and ownership of data.
            </Text>
            <Text fontSize="sm" color="rgba(255,255,255,0.8)">
              • Security-critical logic (auth, permissions, secrets handling).
            </Text>
            <Text fontSize="sm" color="rgba(255,255,255,0.8)">
              • Business rules that must be correct and auditable.
            </Text>
            <Text fontSize="sm" color="rgba(255,255,255,0.8)">
              • Architectural decisions that affect performance and cost.
            </Text>
          </VStack>

          <Text
            fontSize="sm"
            color="rgba(255,255,255,0.75)"
            lineHeight={1.9}
            mt={3}
          >
            AI is an accelerator, not a replacement for thinking. If I cannot
            explain why the code is correct, I treat it as untrusted until I
            can.
          </Text>
        </SectionCard>
      </VStack>
    </Box>
  );
}
