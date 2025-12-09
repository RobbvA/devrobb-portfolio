// src/app/playbooks/architecture-first-workflow/page.jsx
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

/**
 * Kleine helper voor sectie-kaarten
 */
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

      {/* pseudo-divider */}
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

/**
 * Kleine badge voor stappen
 */
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

export default function ArchitectureFirstWorkflowPage() {
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
            Playbook · Architecture
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
            Architecture-First Workflow
          </Heading>

          <Text
            fontSize={{ base: "sm", md: "md" }}
            color="rgba(255,255,255,0.78)"
            maxW="46rem"
            lineHeight={1.9}
          >
            A practical workflow I use to design systems before any code is
            written. The goal is simple: define the problem, the data and the
            structure up front — then use AI to accelerate implementation
            without losing control over the architecture.
          </Text>
        </Box>

        {/* Overview */}
        <SectionCard label="Overview" title="What this playbook is for">
          <Text fontSize="sm" color="rgba(255,255,255,0.8)" lineHeight={1.9}>
            This playbook is meant for new features or projects where I would
            normally jump straight into coding. Instead, it gives me a short,
            repeatable process to design the system first and only then move
            into implementation — with or without AI tools.
          </Text>

          <Text fontSize="sm" color="rgba(255,255,255,0.8)" lineHeight={1.9}>
            I use it for:
          </Text>

          <VStack align="flex-start" spacing={1.5} pl={1}>
            <Text fontSize="sm" color="rgba(255,255,255,0.8)">
              • New full-stack apps (like CalmHub or an AI-driven task manager).
            </Text>
            <Text fontSize="sm" color="rgba(255,255,255,0.8)">
              • Bigger features inside existing projects (authentication flow,
              dashboards, integrations).
            </Text>
            <Text fontSize="sm" color="rgba(255,255,255,0.8)">
              • Refactors where the current structure feels messy or accidental.
            </Text>
          </VStack>
        </SectionCard>

        {/* Core steps */}
        <SectionCard
          label="Process"
          title="Core steps in the architecture-first workflow"
        >
          <Stack spacing={4} w="full">
            <Box>
              <StepBadge>Step 1 · Define the problem space</StepBadge>
              <Text
                mt={2}
                fontSize="sm"
                color="rgba(255,255,255,0.8)"
                lineHeight={1.9}
              >
                I write 3–5 short sentences that describe what we are actually
                trying to solve. Who is this for? What changes for them? What
                counts as “done”? This is not marketing copy — it&apos;s a
                technical summary I can refer back to when decisions get noisy.
              </Text>
            </Box>

            <Box>
              <StepBadge>Step 2 · Constraints & requirements</StepBadge>
              <Text
                mt={2}
                fontSize="sm"
                color="rgba(255,255,255,0.8)"
                lineHeight={1.9}
              >
                I list the constraints: time, stack, performance expectations,
                security concerns, data limits, devices, and anything that is
                already fixed. Then I list a few non-negotiable requirements
                (for example: must support pagination, must handle auth, must be
                deployable on service X).
              </Text>
            </Box>

            <Box>
              <StepBadge>Step 3 · Actors & interactions</StepBadge>
              <Text
                mt={2}
                fontSize="sm"
                color="rgba(255,255,255,0.8)"
                lineHeight={1.9}
              >
                I write down the actors: user types, background jobs, external
                services (like GitHub, Stripe, mail). For each actor, I define
                what they do in the system in 1–2 lines: “user creates task”,
                “cron job sends digest email”, “GitHub webhook triggers sync”.
              </Text>
            </Box>

            <Box>
              <StepBadge>Step 4 · Data modeling</StepBadge>
              <Text
                mt={2}
                fontSize="sm"
                color="rgba(255,255,255,0.8)"
                lineHeight={1.9}
              >
                I sketch the core entities and how they relate: Task, Project,
                User, Repository, Issue, etc. At this stage I focus on names,
                relations and a few key fields. The goal is to see the shape of
                the data before thinking about tables, Prisma schema or API
                details.
              </Text>
            </Box>

            <Box>
              <StepBadge>Step 5 · System boundaries & modules</StepBadge>
              <Text
                mt={2}
                fontSize="sm"
                color="rgba(255,255,255,0.8)"
                lineHeight={1.9}
              >
                I split the system into modules that make sense: for example
                &quot;auth&quot;, &quot;tasks&quot;, &quot;notifications&quot;,
                &quot;integrations&quot;. Each module gets a short description
                of what it owns and what it should NOT own. This makes it easier
                to keep responsibilities clear when the code starts to grow.
              </Text>
            </Box>

            <Box>
              <StepBadge>Step 6 · Interfaces & API surface</StepBadge>
              <Text
                mt={2}
                fontSize="sm"
                color="rgba(255,255,255,0.8)"
                lineHeight={1.9}
              >
                I define how the modules talk to each other and to the outside
                world: HTTP endpoints, internal service functions, events,
                webhooks. I focus on input and output shapes, not on
                implementation. This step often prevents accidental tight
                coupling later.
              </Text>
            </Box>

            <Box>
              <StepBadge>Step 7 · Implementation plan</StepBadge>
              <Text
                mt={2}
                fontSize="sm"
                color="rgba(255,255,255,0.8)"
                lineHeight={1.9}
              >
                Only after the structure is clear, I write a short
                implementation plan: which slice to build first, which API
                routes to add, what a minimal UI looks like. I keep this
                realistic — something I can actually finish and ship.
              </Text>
            </Box>
          </Stack>
        </SectionCard>

        {/* AI usage */}
        <SectionCard
          label="AI in the workflow"
          title="How AI fits into the architecture-first approach"
        >
          <Text fontSize="sm" color="rgba(255,255,255,0.8)" lineHeight={1.9}>
            AI is not the starting point in this workflow. It comes in after I
            have a clear picture of the system: modules, data, flows and
            constraints. From there I use AI as an accelerator, not as a
            decision-maker.
          </Text>

          <VStack align="flex-start" spacing={2} pl={1}>
            <Text fontSize="sm" color="rgba(255,255,255,0.8)">
              • I let AI generate scaffolding: route handlers, basic components,
              types and boilerplate.
            </Text>
            <Text fontSize="sm" color="rgba(255,255,255,0.8)">
              • I use AI to propose alternative implementations and compare
              trade-offs — especially around data flow and state management.
            </Text>
            <Text fontSize="sm" color="rgba(255,255,255,0.8)">
              • I refactor with AI, but always review changes like a code
              reviewer: checking structure, naming, and invariants.
            </Text>
            <Text fontSize="sm" color="rgba(255,255,255,0.8)">
              • I generate tests, docs and small utilities with AI once the core
              architecture is stable.
            </Text>
          </VStack>

          <Text
            fontSize="sm"
            color="rgba(255,255,255,0.8)"
            lineHeight={1.9}
            mt={2}
          >
            The main rule: if I cannot explain the architecture in plain words,
            I am not ready to ask AI for code.
          </Text>
        </SectionCard>

        {/* Checklist */}
        <SectionCard label="Checklist" title="Before I start writing code">
          <Text fontSize="sm" color="rgba(255,255,255,0.8)" lineHeight={1.9}>
            I use this checklist to keep myself honest. If I cannot tick most of
            these boxes, I know I am rushing into implementation too early.
          </Text>

          <VStack align="flex-start" spacing={1.5} pl={1}>
            <Text fontSize="sm" color="rgba(255,255,255,0.8)">
              ✓ I can summarise the problem in 3–5 sentences.
            </Text>
            <Text fontSize="sm" color="rgba(255,255,255,0.8)">
              ✓ I wrote down the main constraints and non-negotiable
              requirements.
            </Text>
            <Text fontSize="sm" color="rgba(255,255,255,0.8)">
              ✓ I know who the main actors are and what they do in the system.
            </Text>
            <Text fontSize="sm" color="rgba(255,255,255,0.8)">
              ✓ I have a first version of the core data model (entities and
              relations).
            </Text>
            <Text fontSize="sm" color="rgba(255,255,255,0.8)">
              ✓ I have split the system into a few modules with clear
              responsibilities.
            </Text>
            <Text fontSize="sm" color="rgba(255,255,255,0.8)">
              ✓ I defined the main interfaces or API endpoints between modules.
            </Text>
            <Text fontSize="sm" color="rgba(255,255,255,0.8)">
              ✓ I have a realistic first implementation slice I can actually
              ship.
            </Text>
          </VStack>

          <Text
            fontSize="sm"
            color="rgba(255,255,255,0.7)"
            lineHeight={1.9}
            mt={3}
          >
            From here I move into implementation — often with AI as a
            pair-programmer — but the architecture stays the reference point for
            every decision.
          </Text>
        </SectionCard>
      </VStack>
    </Box>
  );
}
