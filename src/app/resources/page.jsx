// src/app/resources/page.jsx
"use client";

import {
  Box,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Badge,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";

function ResourceSection({
  title,
  description,
  defaultOpen = false,
  children,
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <Box w="full" borderTop="1px solid #111" pt={5}>
      {/* Section header (dropdown trigger) */}
      <Box
        as="button"
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        w="100%"
        display="flex"
        alignItems="flex-start"
        justifyContent="space-between"
        textAlign="left"
        mb={isOpen ? 4 : 1}
      >
        <VStack align="flex-start" spacing={1}>
          <Heading
            fontSize={{ base: "lg", md: "xl" }}
            letterSpacing="-0.4px"
            lineHeight="1.3"
          >
            {title}
          </Heading>
          {description && (
            <Text fontSize="sm" color="gray.400" maxW="640px" lineHeight="1.6">
              {description}
            </Text>
          )}
        </VStack>
        <Box fontSize="xl" color="gray.500" pl={4} pt={1} aria-hidden="true">
          {isOpen ? "−" : "+"}
        </Box>
      </Box>

      {isOpen && <Box>{children}</Box>}
    </Box>
  );
}

export default function ResourcesPage() {
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
      {/* Page Header */}
      <VStack align="flex-start" spacing={3} mb={10} maxW="720px">
        <Heading
          fontSize={{ base: "2xl", md: "3xl" }}
          letterSpacing="-0.6px"
          lineHeight="1.2"
        >
          Resources
        </Heading>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          A collection of tools, learning materials, and development systems I
          use to build high-quality projects efficiently.
        </Text>
      </VStack>

      <VStack align="flex-start" spacing={10} maxW="960px">
        {/* 1. Project Playbooks */}
        <ResourceSection
          title="Project Playbooks"
          description="The core systems I use to start projects quickly and keep my workflow consistent — from React frontends to full-stack APIs and database design."
          defaultOpen={true}
        >
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} w="full">
            <Box
              as={Link}
              href="/playbooks/react-app-playbook"
              bg="#0b0b0b"
              border="1px solid #222"
              borderRadius="lg"
              p={4}
              _hover={{
                borderColor: "#444",
                bg: "#101010",
                transform: "translateY(-1px)",
              }}
              transition="all 0.15s ease-out"
            >
              <Heading size="sm" mb={2} letterSpacing="-0.2px">
                React App Playbook
              </Heading>
              <Text fontSize="sm" color="gray.400" lineHeight="1.6">
                My structure for React projects: components, hooks, UI system,
                routing patterns, and state management.
              </Text>
            </Box>

            <Box
              as={Link}
              href="/playbooks/full-stack-api-playbook"
              bg="#0b0b0b"
              border="1px solid #222"
              borderRadius="lg"
              p={4}
              _hover={{
                borderColor: "#444",
                bg: "#101010",
                transform: "translateY(-1px)",
              }}
              transition="all 0.15s ease-out"
            >
              <Heading size="sm" mb={2} letterSpacing="-0.2px">
                Full-Stack API Playbook
              </Heading>
              <Text fontSize="sm" color="gray.400" lineHeight="1.6">
                Node.js + Express + Prisma setup, error handling, validation
                with Zod, and database workflow.
              </Text>
            </Box>

            <Box
              as={Link}
              href="/playbooks/nextjs-application-playbook"
              bg="#0b0b0b"
              border="1px solid #222"
              borderRadius="lg"
              p={4}
              _hover={{
                borderColor: "#444",
                bg: "#101010",
                transform: "translateY(-1px)",
              }}
              transition="all 0.15s ease-out"
            >
              <Heading size="sm" mb={2} letterSpacing="-0.2px">
                Next.js Application Playbook
              </Heading>
              <Text fontSize="sm" color="gray.400" lineHeight="1.6">
                My go-to template for data-driven web apps using the App Router,
                Server Components, and schema-first design.
              </Text>
            </Box>

            <Box
              as={Link}
              href="/playbooks/database-schema-design-guide"
              bg="#0b0b0b"
              border="1px solid #222"
              borderRadius="lg"
              p={4}
              _hover={{
                borderColor: "#444",
                bg: "#101010",
                transform: "translateY(-1px)",
              }}
              transition="all 0.15s ease-out"
            >
              <Heading size="sm" mb={2} letterSpacing="-0.2px">
                Database Schema & Design Guide
              </Heading>
              <Text fontSize="sm" color="gray.400" lineHeight="1.6">
                Principles I follow to design scalable relational database
                schemas before writing backend code.
              </Text>
            </Box>

            <Box
              as={Link}
              href="/playbooks/error-handling-api-response-patterns"
              bg="#0b0b0b"
              border="1px solid #222"
              borderRadius="lg"
              p={4}
              _hover={{
                borderColor: "#444",
                bg: "#101010",
                transform: "translateY(-1px)",
              }}
              transition="all 0.15s ease-out"
            >
              <Heading size="sm" mb={2} letterSpacing="-0.2px">
                Error Handling & API Responses
              </Heading>
              <Text fontSize="sm" color="gray.400" lineHeight="1.6">
                How I keep API responses predictable, secure, and easy to work
                with in frontends.
              </Text>
            </Box>
          </SimpleGrid>
        </ResourceSection>

        {/* 2. Project Blueprints */}
        <ResourceSection
          title="Project Blueprints"
          description="Reusable implementation patterns for real-world features. Each blueprint focuses on one thing — with routes, API shape, and UI behaviour already thought through."
        >
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} w="full">
            {/* Authentication Flow Blueprint */}
            <Box
              as={Link}
              href="/blueprints/authentication-flow-blueprint"
              bg="#0b0b0b"
              border="1px solid #222"
              borderRadius="lg"
              p={4}
              _hover={{
                borderColor: "#444",
                bg: "#101010",
                transform: "translateY(-1px)",
              }}
              transition="all 0.15s ease-out"
            >
              <Heading size="sm" mb={1} letterSpacing="-0.2px">
                Authentication Flow Blueprint
              </Heading>
              <Text fontSize="sm" color="gray.400" lineHeight="1.6" mb={3}>
                A complete login / signup / logout flow with protected routes,
                refresh tokens, and role-based access that I can plug into new
                projects.
              </Text>
              <Badge
                mt={1}
                fontSize="0.7rem"
                borderRadius="full"
                px={2}
                py={0.5}
                bg="#191919"
              >
                Detailed
              </Badge>
            </Box>

            {/* CRUD API Blueprint */}
            <Box
              as={Link}
              href="/blueprints/crud-api-blueprint"
              bg="#0b0b0b"
              border="1px solid #222"
              borderRadius="lg"
              p={4}
              _hover={{
                borderColor: "#444",
                bg: "#101010",
                transform: "translateY(-1px)",
              }}
              transition="all 0.15s ease-out"
            >
              <Heading size="sm" mb={1} letterSpacing="-0.2px">
                CRUD API Blueprint
              </Heading>
              <Text fontSize="sm" color="gray.400" lineHeight="1.6" mb={3}>
                A standard pattern for list / detail / create / update / delete
                endpoints with pagination and predictable responses.
              </Text>
              <Badge
                mt={1}
                fontSize="0.7rem"
                borderRadius="full"
                px={2}
                py={0.5}
                bg="#191919"
              >
                In progress
              </Badge>
            </Box>

            {/* UI Pattern: Lists / Cards / Modals */}
            <Box
              as={Link}
              href="/blueprints/ui-lists-cards-modals-blueprint"
              bg="#0b0b0b"
              border="1px solid #222"
              borderRadius="lg"
              p={4}
              _hover={{
                borderColor: "#444",
                bg: "#101010",
                transform: "translateY(-1px)",
              }}
              transition="all 0.15s ease-out"
            >
              <Heading size="sm" mb={1} letterSpacing="-0.2px">
                UI Pattern: Lists / Cards / Modals
              </Heading>
              <Text fontSize="sm" color="gray.400" lineHeight="1.6" mb={3}>
                A reusable layout for list overviews, detail modals and card
                grids — perfect for dashboards and content-heavy pages.
              </Text>
              <Badge
                mt={1}
                fontSize="0.7rem"
                borderRadius="full"
                px={2}
                py={0.5}
                bg="#191919"
              >
                In progress
              </Badge>
            </Box>

            {/* Filtering & Sorting Logic */}
            <Box
              as={Link}
              href="/blueprints/filtering-and-sorting-logic-blueprint"
              bg="#0b0b0b"
              border="1px solid #222"
              borderRadius="lg"
              p={4}
              _hover={{
                borderColor: "#444",
                bg: "#101010",
                transform: "translateY(-1px)",
              }}
              transition="all 0.15s ease-out"
            >
              <Heading size="sm" mb={1} letterSpacing="-0.2px">
                Filtering &amp; Sorting Logic
              </Heading>
              <Text fontSize="sm" color="gray.400" lineHeight="1.6" mb={3}>
                A pattern for keeping filters, sort state and URL params in sync
                when working with large datasets.
              </Text>
              <Badge
                mt={1}
                fontSize="0.7rem"
                borderRadius="full"
                px={2}
                py={0.5}
                bg="#191919"
              >
                In progress
              </Badge>
            </Box>

            {/* Loading Skeleton Patterns */}
            <Box
              as={Link}
              href="/blueprints/loading-skeleton-patterns-blueprint"
              bg="#0b0b0b"
              border="1px solid #222"
              borderRadius="lg"
              p={4}
              _hover={{
                borderColor: "#444",
                bg: "#101010",
                transform: "translateY(-1px)",
              }}
              transition="all 0.15s ease-out"
            >
              <Heading size="sm" mb={1} letterSpacing="-0.2px">
                Loading Skeleton Patterns
              </Heading>
              <Text fontSize="sm" color="gray.400" lineHeight="1.6" mb={3}>
                Reusable skeleton states for tables, cards and detail views so
                the UI feels fast while data loads.
              </Text>
              <Badge
                mt={1}
                fontSize="0.7rem"
                borderRadius="full"
                px={2}
                py={0.5}
                bg="#191919"
              >
                In progress
              </Badge>
            </Box>

            {/* Form Validation Blueprint */}
            <Box
              as={Link}
              href="/blueprints/form-validation-blueprint"
              bg="#0b0b0b"
              border="1px solid #222"
              borderRadius="lg"
              p={4}
              _hover={{
                borderColor: "#444",
                bg: "#101010",
                transform: "translateY(-1px)",
              }}
              transition="all 0.15s ease-out"
            >
              <Heading size="sm" mb={1} letterSpacing="-0.2px">
                Form Validation Blueprint
              </Heading>
              <Text fontSize="sm" color="gray.400" lineHeight="1.6" mb={3}>
                A schema-first form setup using Zod and React Hook Form with
                predictable error messages and UX patterns.
              </Text>
              <Badge
                mt={1}
                fontSize="0.7rem"
                borderRadius="full"
                px={2}
                py={0.5}
                bg="#191919"
              >
                In progress
              </Badge>
            </Box>
          </SimpleGrid>
        </ResourceSection>

        {/* 3. Best Learning Content (Instagram Reels) */}
        <ResourceSection
          title="Best Learning Content"
          description="A curated selection of my educational reels that helped me learn, teach others, and grow my developer network."
        >
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} w="full">
            {[
              "HTTP Status Codes Explained",
              "React Hooks Breakdown",
              "JavaScript Array Methods",
              "The DOM vs The Shadow DOM",
              "WebGPU in 60 Seconds",
              "API Calls Explained Simply",
            ].map((title) => (
              <Box
                key={title}
                bg="#0b0b0b"
                border="1px solid #222"
                borderRadius="lg"
                p={4}
              >
                <Heading size="sm" mb={2} letterSpacing="-0.2px">
                  {title}
                </Heading>
                <Text fontSize="sm" color="gray.400" lineHeight="1.6">
                  One of my most helpful short-form explanations for teaching
                  and learning.
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </ResourceSection>

        {/* 4. Tools */}
        <ResourceSection
          title="Tools I Use"
          description="The core tools that are almost always open when I'm building or debugging applications."
        >
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4} w="full">
            {[
              "VS Code",
              "Postman",
              "Prisma Studio",
              "Chrome DevTools",
              "GitHub Desktop",
              "Node.js",
            ].map((tool) => (
              <Box
                key={tool}
                bg="#0b0b0b"
                border="1px solid #222"
                borderRadius="lg"
                p={3}
              >
                <Text fontSize="sm" lineHeight="1.5">
                  {tool}
                </Text>
              </Box>
            ))}
          </SimpleGrid>

          <Text fontSize="xs" color="gray.500" mt={3}>
            (More tools will be added as my stack grows.)
          </Text>
        </ResourceSection>
      </VStack>
    </Box>
  );
}
