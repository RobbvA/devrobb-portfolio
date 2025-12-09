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
import Image from "next/image";
import { useState } from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const BRAND_BLUE = "#b5baff";
const BRAND_YELLOW = "#FFFCDD";

/**
 * Glasachtige section met dropdown
 */
function ResourceSection({
  title,
  label,
  description,
  defaultOpen = false,
  children,
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

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
      transition="transform 0.18s ease-out, box-shadow 0.18s ease-out, border-color 0.18s ease-out, background 0.18s ease-out"
      _hover={{
        transform: "translateY(-3px)",
        boxShadow: "0 22px 60px rgba(0,0,0,0.7)",
        borderColor: "rgba(255,255,255,0.26)",
        bg: "linear-gradient(135deg, rgba(255,252,221,0.06), rgba(181,186,255,0.1))",
      }}
    >
      {/* Header / dropdown trigger */}
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
          {label && (
            <Text
              fontSize={{ base: "xs", md: "xs" }}
              textTransform="uppercase"
              letterSpacing="0.14em"
              color="rgba(181,186,255,0.8)"
            >
              {label}
            </Text>
          )}

          <Heading
            fontSize={{ base: "lg", md: "xl" }}
            letterSpacing="-0.01em"
            lineHeight={1.2}
            color={BRAND_YELLOW}
          >
            {title}
          </Heading>

          {description && (
            <Text
              fontSize="sm"
              color="rgba(255,255,255,0.78)"
              maxW="40rem"
              lineHeight={1.9}
            >
              {description}
            </Text>
          )}
        </VStack>

        <Box
          fontSize="xl"
          color={isOpen ? BRAND_BLUE : "rgba(255,255,255,0.6)"}
          pl={4}
          pt={label ? 5 : 3}
          aria-hidden="true"
        >
          {isOpen ? "−" : "+"}
        </Box>
      </Box>

      {isOpen && (
        <Box borderTop="1px solid rgba(255,255,255,0.08)" pt={4}>
          {children}
        </Box>
      )}
    </Box>
  );
}

/**
 * Kleinere kaart voor links / patterns (binnen sections)
 */
function ResourceCard({ href, title, children, badge }) {
  const content = (
    <Box
      bg="#050509"
      borderRadius="xl"
      borderWidth="1px"
      borderColor="rgba(255,255,255,0.16)"
      p={4}
      transition="all 0.16s ease-out"
      _hover={{
        borderColor: "rgba(181,186,255,0.7)",
        bg: "#0b0b12",
        transform: "translateY(-2px)",
      }}
    >
      <Heading
        size="sm"
        mb={badge ? 1 : 2}
        letterSpacing="-0.01em"
        color={BRAND_YELLOW}
      >
        {title}
      </Heading>
      {badge && (
        <Badge
          mt={0}
          mb={2}
          fontSize="0.7rem"
          borderRadius="full"
          px={2}
          py={0.5}
          bg="#191919"
          color="gray.200"
        >
          {badge}
        </Badge>
      )}
      <Text fontSize="sm" color="rgba(255,255,255,0.8)" lineHeight={1.9}>
        {children}
      </Text>
    </Box>
  );

  if (!href) return content;

  return (
    <Box as={Link} href={href}>
      {content}
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
      <VStack
        align="flex-start"
        spacing={{ base: 10, md: 12 }}
        maxW="6xl"
        mx="auto"
      >
        {/* Header / intro */}
        <Box w="full">
          <Text
            fontSize={{ base: "sm", md: "md" }}
            fontWeight="600"
            textTransform="uppercase"
            letterSpacing="0.18em"
            color="rgba(255,255,255,0.55)"
            mb={3}
          >
            Resources
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
            Architecture, AI-driven playbooks & learning notes.
          </Heading>

          <Text
            fontSize={{ base: "sm", md: "md" }}
            color="rgba(255,255,255,0.78)"
            maxW="42rem"
            lineHeight={1.9}
          >
            I document the systems, patterns and AI-assisted workflows that help
            me design and build full-stack applications in an architecture-first
            way. These notes keep my process calm, structured and repeatable.
          </Text>
        </Box>

        {/* 0. AI-Driven Development Playbooks */}
        <ResourceSection
          label="Workflow"
          title="AI-Driven Development Playbooks"
          description="How I use an architecture-first workflow with AI to design, implement and debug modern web systems."
          defaultOpen={true}
        >
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} w="full">
            <ResourceCard
              href="/playbooks/architecture-first-workflow"
              title="Architecture-First Workflow"
            >
              A structured method for planning any project: problem space,
              constraints, data models, system boundaries and modules — before
              writing code.
            </ResourceCard>

            <ResourceCard
              href="/playbooks/ai-assisted-implementation-guide"
              title="AI-Assisted Implementation Guide"
            >
              How I use AI to generate scaffolding, explore implementation
              options and refactor code while staying in control of the system
              design.
            </ResourceCard>

            <ResourceCard
              href="/playbooks/data-modeling-and-flow-design"
              title="Data Modeling & Flow Design Handbook"
            >
              Principles and patterns for designing clean data models and flows
              that connect frontend state, APIs and the database in a
              predictable way.
            </ResourceCard>

            <ResourceCard
              href="/playbooks/system-debugging-and-architecture-repair"
              title="System Debugging & Architecture Repair"
            >
              A step-by-step approach to finding root causes, repairing broken
              flows and using AI safely to validate hypotheses instead of
              guessing.
            </ResourceCard>

            <ResourceCard
              href="/playbooks/development-consistency-and-delivery"
              title="Development Playbook: Consistency & Delivery"
            >
              Standards for project structure, commits, documentation and
              release habits so every project feels coherent — with or without
              AI tools.
            </ResourceCard>
          </SimpleGrid>
        </ResourceSection>

        {/* 1. Project Playbooks */}
        <ResourceSection
          label="Systems"
          title="Project Playbooks"
          description="The core systems I use to start projects quickly and keep my workflow consistent — from React frontends to full-stack APIs and database design."
        >
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} w="full">
            <ResourceCard
              href="/playbooks/react-app-playbook"
              title="React App Playbook"
            >
              My structure for React projects: components, hooks, UI system,
              routing patterns, and state management.
            </ResourceCard>

            <ResourceCard
              href="/playbooks/full-stack-api-playbook"
              title="Full-Stack API Playbook"
            >
              Node.js + Express + Prisma setup, error handling, validation with
              Zod, and database workflow.
            </ResourceCard>

            <ResourceCard
              href="/playbooks/nextjs-application-playbook"
              title="Next.js Application Playbook"
            >
              My go-to template for data-driven web apps using the App Router,
              Server Components, and schema-first design.
            </ResourceCard>

            <ResourceCard
              href="/playbooks/database-schema-design-guide"
              title="Database Schema & Design Guide"
            >
              Principles I follow to design scalable relational database schemas
              before writing backend code.
            </ResourceCard>

            <ResourceCard
              href="/playbooks/error-handling-api-response-patterns"
              title="Error Handling & API Responses"
            >
              How I keep API responses predictable, secure, and easy to work
              with in frontends.
            </ResourceCard>
          </SimpleGrid>
        </ResourceSection>

        {/* 2. Project Blueprints */}
        <ResourceSection
          label="Patterns"
          title="Project Blueprints"
          description="Reusable implementation patterns for real-world features. Each blueprint focuses on one thing — with routes, API shape, and UI behaviour already thought through."
        >
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} w="full">
            <ResourceCard
              href="/blueprints/authentication-flow-blueprint"
              title="Authentication Flow Blueprint"
              badge="Detailed"
            >
              A complete login / signup / logout flow with protected routes,
              refresh tokens, and role-based access that I can plug into new
              projects.
            </ResourceCard>

            <ResourceCard
              href="/blueprints/crud-api-blueprint"
              title="CRUD API Blueprint"
              badge="In progress"
            >
              A standard pattern for list / detail / create / update / delete
              endpoints with pagination and predictable responses.
            </ResourceCard>

            <ResourceCard
              href="/blueprints/ui-lists-cards-modals-blueprint"
              title="UI Pattern: Lists / Cards / Modals"
              badge="In progress"
            >
              A reusable layout for list overviews, detail modals and card grids
              — perfect for dashboards and content-heavy pages.
            </ResourceCard>

            <ResourceCard
              href="/blueprints/filtering-and-sorting-logic-blueprint"
              title="Filtering & Sorting Logic"
              badge="In progress"
            >
              A pattern for keeping filters, sort state and URL params in sync
              when working with large datasets.
            </ResourceCard>

            <ResourceCard
              href="/blueprints/loading-skeleton-patterns-blueprint"
              title="Loading Skeleton Patterns"
              badge="In progress"
            >
              Reusable skeleton states for tables, cards and detail views so the
              UI feels fast while data loads.
            </ResourceCard>

            <ResourceCard
              href="/blueprints/form-validation-blueprint"
              title="Form Validation Blueprint"
              badge="In progress"
            >
              A schema-first form setup using Zod and React Hook Form with
              predictable error messages and UX patterns.
            </ResourceCard>
          </SimpleGrid>
        </ResourceSection>

        {/* 3. Best Learning Content (Instagram Reels) */}
        <ResourceSection
          label="Learning"
          title="Best Learning Content"
          description="Short, visual explanations that helped me understand core concepts — and teach them back to other developers."
        >
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} w="full">
            {[
              {
                title: "React Hooks — Part 2",
                desc: "A simple visual breakdown of advanced React hooks.",
                img: "/learning/react-hooks-part-2.png",
                url: "https://www.instagram.com/reel/DRZPxZGDCG4/",
              },
              {
                title: "GitHub Collab",
                desc: "How to actually collaborate as a developer using GitHub.",
                img: "/learning/github-collab.png",
                url: "https://www.instagram.com/reel/DRC6cwWDCw4/",
              },
              {
                title: "401 ≠ 403 — Know the Difference",
                desc: "Both mean ‘access denied’ — but for different reasons.",
                img: "/learning/know-the-difference.png",
                url: "https://www.instagram.com/reel/DQKAxeQjP78/",
              },
              {
                title: "Master the Terminal",
                desc: "The 5 essential commands every developer should know.",
                img: "/learning/master-the-terminal.png",
                url: "https://www.instagram.com/p/DPGX1S0DRSs/?img_index=1",
              },
            ].map((item) => (
              <Box
                key={item.title}
                as={Link}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                bg="#050509"
                border="1px solid rgba(255,255,255,0.16)"
                borderRadius="xl"
                overflow="hidden"
                transition="all 0.18s ease-out"
                _hover={{
                  borderColor: "rgba(181,186,255,0.7)",
                  transform: "translateY(-2px)",
                  bg: "#0b0b12",
                }}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={600}
                  height={340}
                  style={{
                    width: "100%",
                    height: "140px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                <Box p={3}>
                  <Heading
                    size="sm"
                    mb={1}
                    letterSpacing="-0.01em"
                    color={BRAND_YELLOW}
                  >
                    {item.title}
                  </Heading>
                  <Text
                    fontSize="xs"
                    color="rgba(255,255,255,0.8)"
                    lineHeight={1.9}
                  >
                    {item.desc}
                  </Text>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </ResourceSection>
      </VStack>
    </Box>
  );
}
