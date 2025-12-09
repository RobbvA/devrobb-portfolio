// src/app/playbooks/system-debugging-and-architecture-repair/page.jsx
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

export default function SystemDebuggingAndArchitectureRepairPage() {
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
            Playbook · Debugging
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
            System Debugging & Architecture Repair
          </Heading>

          <Text
            fontSize={{ base: "sm", md: "md" }}
            color="rgba(255,255,255,0.78)"
            maxW="46rem"
            lineHeight={1.9}
          >
            This playbook describes how I approach bugs and broken features at
            the system level: reproduce reliably, narrow down, repair structure,
            then harden the fix — with AI as a helper, not a guess engine.
          </Text>
        </Box>

        {/* Process */}
        <SectionCard label="Process" title="Debugging workflow">
          <Stack spacing={4} w="full">
            <Box>
              <StepBadge>Step 1 · Reproduce the issue</StepBadge>
              <Text
                mt={2}
                fontSize="sm"
                color="rgba(255,255,255,0.8)"
                lineHeight={1.9}
              >
                I write down the exact steps to trigger the bug: inputs, user
                actions, environment. If I cannot reproduce it consistently, I
                focus on that first — otherwise I will keep chasing ghosts.
              </Text>
            </Box>

            <Box>
              <StepBadge>Step 2 · Narrow the problem area</StepBadge>
              <Text
                mt={2}
                fontSize="sm"
                color="rgba(255,255,255,0.8)"
                lineHeight={1.9}
              >
                I decide whether the bug is likely in the UI, API, data layer,
                external integration, or in the way components talk to each
                other. Logs, network calls and simple console output usually
                help here.
              </Text>
            </Box>

            <Box>
              <StepBadge>Step 3 · Check invariants and assumptions</StepBadge>
              <Text
                mt={2}
                fontSize="sm"
                color="rgba(255,255,255,0.8)"
                lineHeight={1.9}
              >
                I list what must be true for this feature to work: &quot;user
                must be authenticated&quot;, &quot;task must belong to this
                project&quot;, &quot;GitHub webhook payload must contain
                X&quot;. Then I verify these one by one.
              </Text>
            </Box>
          </Stack>
        </SectionCard>

        {/* Architecture repair */}
        <SectionCard
          label="Repair"
          title="Fixing structural issues, not just symptoms"
        >
          <Text fontSize="sm" color="rgba(255,255,255,0.8)" lineHeight={1.9}>
            When a bug reveals a deeper architecture problem — for example,
            tight coupling or unclear ownership — I treat it as a chance to
            repair the structure:
          </Text>

          <VStack align="flex-start" spacing={1.5} pl={1}>
            <Text fontSize="sm" color="rgba(255,255,255,0.8)">
              • Split responsibilities into clearer modules or services.
            </Text>
            <Text fontSize="sm" color="rgba(255,255,255,0.8)">
              • Introduce stricter types or schemas where data was too loose.
            </Text>
            <Text fontSize="sm" color="rgba(255,255,255,0.8)">
              • Add missing validation or permission checks at the right layer.
            </Text>
            <Text fontSize="sm" color="rgba(255,255,255,0.8)">
              • Remove unnecessary indirect calls or magic behaviour.
            </Text>
          </VStack>
        </SectionCard>

        {/* AI usage */}
        <SectionCard label="AI" title="Using AI safely in debugging">
          <Text fontSize="sm" color="rgba(255,255,255,0.8)" lineHeight={1.9}>
            AI can be useful during debugging, but only if I own the reasoning.
            I use it for:
          </Text>

          <VStack align="flex-start" spacing={1.5} pl={1}>
            <Text fontSize="sm" color="rgba(255,255,255,0.8)">
              • Explaining complex stack traces or error messages in simpler
              terms.
            </Text>
            <Text fontSize="sm" color="rgba(255,255,255,0.8)">
              • Suggesting likely root causes based on a clear description of
              the system and symptoms.
            </Text>
            <Text fontSize="sm" color="rgba(255,255,255,0.8)">
              • Proposing refactor options when a function or module is too
              tangled.
            </Text>
          </VStack>

          <Text
            fontSize="sm"
            color="rgba(255,255,255,0.78)"
            lineHeight={1.9}
            mt={2}
          >
            I avoid asking AI &quot;why doesn&apos;t this work?&quot; when I
            haven&apos;t done any investigation myself — that usually leads to
            noise, not insight.
          </Text>
        </SectionCard>
      </VStack>
    </Box>
  );
}
