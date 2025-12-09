// src/app/playbooks/data-modeling-and-flow-design/page.jsx
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

export default function DataModelingAndFlowDesignPage() {
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
            Playbook · Data
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
            Data Modeling & Flow Design Handbook
          </Heading>

          <Text
            fontSize={{ base: "sm", md: "md" }}
            color="rgba(255,255,255,0.78)"
            maxW="46rem"
            lineHeight={1.9}
          >
            This playbook captures how I think about data: entities, relations
            and flows between frontend, API and database. The goal is to make
            data structures predictable so features are easier to build and
            change.
          </Text>
        </Box>

        {/* Entities & relations */}
        <SectionCard label="Modeling" title="Entities and relations first">
          <Text fontSize="sm" color="rgba(255,255,255,0.8)" lineHeight={1.9}>
            Before I touch Prisma, SQL or API contracts, I try to understand the
            domain in terms of entities and relations:
          </Text>

          <VStack align="flex-start" spacing={1.5} pl={1}>
            <Text fontSize="sm" color="rgba(255,255,255,0.8)">
              • What are the core objects? (Task, User, Project, Repository,
              Issue, Session, etc.)
            </Text>
            <Text fontSize="sm" color="rgba(255,255,255,0.8)">
              • How do they relate? (one-to-many, many-to-many, ownership)
            </Text>
            <Text fontSize="sm" color="rgba(255,255,255,0.8)">
              • Which fields are essential for the first version? Which can
              wait?
            </Text>
          </VStack>

          <Text
            fontSize="sm"
            color="rgba(255,255,255,0.78)"
            lineHeight={1.9}
            mt={2}
          >
            I often write this down as a short list or a rough diagram before I
            start writing any schema code.
          </Text>
        </SectionCard>

        {/* Flows */}
        <SectionCard label="Flows" title="Request → processing → persistence">
          <Stack spacing={4} w="full">
            <Box>
              <StepBadge>Flow 1 · From UI to API</StepBadge>
              <Text
                mt={2}
                fontSize="sm"
                color="rgba(255,255,255,0.8)"
                lineHeight={1.9}
              >
                For each important action in the UI, I describe what data moves
                across the network: which fields are sent, what is validated,
                and what comes back. This helps me design slim, focused API
                endpoints instead of dumping entire objects everywhere.
              </Text>
            </Box>

            <Box>
              <StepBadge>Flow 2 · Inside the backend</StepBadge>
              <Text
                mt={2}
                fontSize="sm"
                color="rgba(255,255,255,0.8)"
                lineHeight={1.9}
              >
                I separate responsibilities into layers: route/controller →
                service → repository/data access. Each layer receives and
                returns clear shapes, which I later turn into types.
              </Text>
            </Box>

            <Box>
              <StepBadge>Flow 3 · To the database and back</StepBadge>
              <Text
                mt={2}
                fontSize="sm"
                color="rgba(255,255,255,0.8)"
                lineHeight={1.9}
              >
                I clarify how incoming data is mapped into tables/collections
                and how it comes back into the application as models or DTOs.
                This mapping step is where bugs often hide if it&apos;s not
                thought through.
              </Text>
            </Box>
          </Stack>
        </SectionCard>

        {/* Frontend state */}
        <SectionCard
          label="Frontend"
          title="Mapping data models to frontend state"
        >
          <Text fontSize="sm" color="rgba(255,255,255,0.8)" lineHeight={1.9}>
            On the frontend I try to keep state as close as possible to the
            backend models, with a few UI-only fields where needed (loading,
            error, selection). This helps:
          </Text>

          <VStack align="flex-start" spacing={1.5} pl={1}>
            <Text fontSize="sm" color="rgba(255,255,255,0.8)">
              • Reduce translation logic between API responses and UI state.
            </Text>
            <Text fontSize="sm" color="rgba(255,255,255,0.8)">
              • Make it easier to reason about where a value ultimately comes
              from.
            </Text>
            <Text fontSize="sm" color="rgba(255,255,255,0.8)">
              • Keep caching, pagination and filtering logic predictable.
            </Text>
          </VStack>
        </SectionCard>

        {/* AI usage */}
        <SectionCard
          label="AI"
          title="Using AI to validate data models and flows"
        >
          <Text fontSize="sm" color="rgba(255,255,255,0.8)" lineHeight={1.9}>
            I often use AI as a second pair of eyes on my data model and flows.
            I describe entities, relations and example actions, then ask:
          </Text>

          <VStack align="flex-start" spacing={1.5} pl={1}>
            <Text fontSize="sm" color="rgba(255,255,255,0.8)">
              • Are there obvious missing entities or relations?
            </Text>
            <Text fontSize="sm" color="rgba(255,255,255,0.8)">
              • Are there normalization or duplication issues I&apos;m not
              seeing?
            </Text>
            <Text fontSize="sm" color="rgba(255,255,255,0.8)">
              • What edge cases would likely break this flow?
            </Text>
          </VStack>

          <Text
            fontSize="sm"
            color="rgba(255,255,255,0.78)"
            lineHeight={1.9}
            mt={2}
          >
            I treat the feedback as suggestions, not truth — but it often helps
            me catch structural issues earlier.
          </Text>
        </SectionCard>
      </VStack>
    </Box>
  );
}
