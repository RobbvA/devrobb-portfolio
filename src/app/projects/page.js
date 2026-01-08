// src/app/projects/page.js
"use client";

import { useMemo, useState } from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Stack,
  Button,
  Flex,
} from "@chakra-ui/react";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import ProjectCarousel from "../components/ProjectCarousel";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const BRAND_BLUE = "#b5baff";
const BRAND_YELLOW = "#FFFCDD";

function ProjectDropdownCard({
  label,
  title,
  subtitle,
  summary,
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
      overflow="hidden"
      transition="transform 0.18s ease-out, box-shadow 0.18s ease-out, border-color 0.18s ease-out"
      _hover={{
        transform: "translateY(-2px)",
        boxShadow: "0 22px 60px rgba(0,0,0,0.7)",
        borderColor: "rgba(255,255,255,0.24)",
      }}
    >
      {/* Header trigger */}
      <Box
        as="button"
        type="button"
        onClick={() => setIsOpen((p) => !p)}
        w="100%"
        textAlign="left"
        px={{ base: 5, md: 6 }}
        py={{ base: 5, md: 6 }}
      >
        <Flex align="flex-start" justify="space-between" gap={4}>
          <Box>
            {label ? (
              <Text
                fontSize="xs"
                textTransform="uppercase"
                letterSpacing="0.14em"
                color="rgba(181,186,255,0.8)"
                mb={2}
              >
                {label}
              </Text>
            ) : null}

            <Heading
              as="h2"
              fontSize={{ base: "xl", md: "2xl" }}
              letterSpacing="-0.01em"
              color={BRAND_YELLOW}
              mb={2}
            >
              {title}
            </Heading>

            {subtitle ? (
              <Text
                fontSize={{ base: "sm", md: "md" }}
                color={BRAND_BLUE}
                fontWeight="500"
                mb={3}
              >
                {subtitle}
              </Text>
            ) : null}

            {summary ? (
              <Text
                fontSize={{ base: "sm", md: "md" }}
                color="rgba(255,255,255,0.78)"
                lineHeight={1.9}
                maxW="70ch"
              >
                {summary}
              </Text>
            ) : null}
          </Box>

          <Box
            fontSize="xl"
            color={isOpen ? BRAND_BLUE : "rgba(255,255,255,0.6)"}
            pt={label ? 6 : 2}
            aria-hidden="true"
          >
            {isOpen ? "−" : "+"}
          </Box>
        </Flex>
      </Box>

      {/* Content */}
      {isOpen ? (
        <Box
          px={{ base: 5, md: 6 }}
          pb={{ base: 6, md: 7 }}
          pt={0}
          borderTop="1px solid rgba(255,255,255,0.10)"
        >
          <Box pt={6}>{children}</Box>
        </Box>
      ) : null}
    </Box>
  );
}

export default function ProjectsPage() {
  // Project 1 — AI Task Manager
  const aiLiveDemoUrl = "https://ai-driven-task-manager-v2.vercel.app/";
  const aiRepoUrl = "https://github.com/RobbvA/ai-driven-task-manager-v2";

  const aiScreenshots = useMemo(
    () => [
      {
        src: "/projects/LogoHero.jpg",
        caption:
          "Surface-level UI entry point. Establishes the main navigation and the user-facing decision flow (plan → tasks) without hiding system behavior behind automation.",
      },
      {
        src: "/projects/TaskList.jpg",
        caption:
          "Task list boundary: stable data-to-UI mapping with predictable rendering. This is where the user can scan outcomes and validate that the system stays consistent over time.",
      },
      {
        src: "/projects/exPriority.jpg",
        caption:
          "Explainability view: exposes the scoring factors and the exact rationale behind the final priority. This makes the decision engine debuggable and defensible (not a black box).",
      },
      {
        src: "/projects/NextTask.jpg",
        caption:
          "Next-task suggestion: deterministic recommendation based on explicit rules. Designed as an assistive layer, with a clear override path to keep the user in control.",
      },
    ],
    []
  );

  // Project 2 — CalmHub
  const calmHubLiveUrl = "https://collab-app-phi.vercel.app/";
  const calmHubRepoUrl = "https://github.com/RobbvA/collab-app";

  const calmHubScreenshots = useMemo(
    () => [
      {
        src: "/projects/landingspage.jpg",
        caption:
          "Authentication entry point: custom sign-in flow built on NextAuth. Production OAuth configuration (secret, URL, callback) with scopes explicitly requested for real GitHub workflows.",
      },
      {
        src: "/projects/dashboard.jpg",
        caption:
          "Protected dashboard: server-rendered data gated by getServerSession + redirect. GitHub reads are executed server-side; tokens never reach the browser.",
      },
      {
        src: "/projects/dashboard2.jpg",
        caption:
          "Action-first UX: focused lists and contextual actions designed to reduce GitHub noise. Extensible structure for future dashboard actions (filters, repo-scoping, write operations).",
      },
    ],
    []
  );

  return (
    <Box as="main" minH="80dvh" bg="#000" color="#fff">
      {/* Stable page shell: prevents wide-monitor stretch differences */}
      <Box
        w="full"
        px={{ base: 4, md: 6 }}
        pt={{ base: 10, md: 16 }}
        pb={{ base: 12, md: 20 }}
      >
        <Box w="full" maxW="1100px" mx="auto">
          <VStack align="flex-start" spacing={{ base: 10, md: 12 }} w="full">
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
                Projects
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
                Featured work.
              </Heading>

              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="rgba(255,255,255,0.85)"
                maxW="48rem"
                lineHeight={1.75}
              >
                A small selection of projects that represent how I think:
                architecture first, predictable systems, and clean delivery.
              </Text>
            </Box>

            {/* Projects list */}
            <Stack spacing={6} w="full">
              {/* Project 1 */}
              <ProjectDropdownCard
                label="Anchor project"
                title="Explainable AI Task Manager"
                subtitle="Deterministic decision-making · No black-box models"
                summary="A task manager that assigns priority using a deterministic scoring engine and shows exactly why each task gets its result. Built for clarity, debuggability and full user control — without relying on external AI APIs."
                defaultOpen={false}
              >
                <Stack spacing={6} w="full">
                  {/* System design snapshot */}
                  <Box
                    w="full"
                    borderRadius="2xl"
                    borderWidth="1px"
                    borderColor="rgba(255,255,255,0.14)"
                    bg="rgba(0,0,0,0.18)"
                    p={{ base: 5, md: 6 }}
                  >
                    <Text
                      fontSize="xs"
                      textTransform="uppercase"
                      letterSpacing="0.14em"
                      color="rgba(181,186,255,0.8)"
                      mb={3}
                    >
                      System design snapshot
                    </Text>

                    <VStack align="flex-start" spacing={2} mb={5}>
                      <Text fontSize="sm" color="rgba(255,255,255,0.82)">
                        • Rule-based scoring engine drives priority
                        (deterministic, testable behavior)
                      </Text>
                      <Text fontSize="sm" color="rgba(255,255,255,0.82)">
                        • Explainability layer exposes factors and outcomes
                        (debug surface for decisions)
                      </Text>
                      <Text fontSize="sm" color="rgba(255,255,255,0.82)">
                        • Manual override path keeps the user in control (no
                        forced automation)
                      </Text>
                      <Text fontSize="sm" color="rgba(255,255,255,0.82)">
                        • Separation of concerns: UI, decision logic, and task
                        data remain cleanly separated
                      </Text>
                      <Text fontSize="sm" color="rgba(255,255,255,0.82)">
                        • No external AI calls: privacy-friendly and cost-stable
                        by default
                      </Text>
                    </VStack>

                    <Text fontSize="sm" color="rgba(255,255,255,0.70)" mb={5}>
                      Tech: Next.js · Chakra UI · Prisma · SQLite
                      (Postgres-ready)
                    </Text>

                    <Flex gap={3} flexWrap="wrap">
                      <Button
                        as={Link}
                        href={aiLiveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        bg="rgba(181,186,255,0.16)"
                        border="1px solid rgba(181,186,255,0.45)"
                        color="rgba(255,255,255,0.95)"
                        _hover={{ bg: "rgba(181,186,255,0.22)" }}
                      >
                        Live demo
                      </Button>

                      <Button
                        as={Link}
                        href={aiRepoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outline"
                        borderColor="rgba(255,255,255,0.22)"
                        color="rgba(255,255,255,0.9)"
                        _hover={{
                          bg: "rgba(255,255,255,0.06)",
                          borderColor: "rgba(255,255,255,0.32)",
                        }}
                      >
                        GitHub repo
                      </Button>
                    </Flex>
                  </Box>

                  <ProjectCarousel
                    images={aiScreenshots}
                    altBase="Explainable AI Task Manager screenshot"
                  />

                  <Text
                    fontSize="sm"
                    color="rgba(255,255,255,0.65)"
                    lineHeight={1.9}
                  >
                    More projects are in progress. Next up: a technically
                    contrasting project focused on APIs, auth/permissions and
                    multi-user workflows.
                  </Text>
                </Stack>
              </ProjectDropdownCard>

              {/* Project 2 */}
              <ProjectDropdownCard
                label="Production MVP"
                title="CalmHub — GitHub Dashboard"
                subtitle="Server-side GitHub actions · OAuth done right"
                summary="A minimalist GitHub dashboard focused on actionable work. Built as a production MVP with NextAuth OAuth, server-side GitHub data flows, and a secure path for write actions (comments) without exposing tokens to the client."
                defaultOpen={false}
              >
                <Stack spacing={6} w="full">
                  {/* System design snapshot */}
                  <Box
                    w="full"
                    borderRadius="2xl"
                    borderWidth="1px"
                    borderColor="rgba(255,255,255,0.14)"
                    bg="rgba(0,0,0,0.18)"
                    p={{ base: 5, md: 6 }}
                  >
                    <Text
                      fontSize="xs"
                      textTransform="uppercase"
                      letterSpacing="0.14em"
                      color="rgba(181,186,255,0.8)"
                      mb={3}
                    >
                      System design snapshot
                    </Text>

                    <VStack align="flex-start" spacing={2} mb={5}>
                      <Text fontSize="sm" color="rgba(255,255,255,0.82)">
                        • OAuth via NextAuth with repo + read:user scopes;
                        provider token persisted server-side (JWT/session)
                      </Text>
                      <Text fontSize="sm" color="rgba(255,255,255,0.82)">
                        • Protected dashboard rendered server-side using
                        getServerSession + redirect gating
                      </Text>
                      <Text fontSize="sm" color="rgba(255,255,255,0.82)">
                        • Central GitHub client enforces headers, no-store
                        caching, and uniform error handling
                      </Text>
                      <Text fontSize="sm" color="rgba(255,255,255,0.82)">
                        • Search API queries expressed as explicit functions
                        (PRs to review, assigned issues, recently merged)
                      </Text>
                      <Text fontSize="sm" color="rgba(255,255,255,0.82)">
                        • Action flow for comments: UI → internal API route →
                        GitHub API (server-side write; no client tokens)
                      </Text>
                      <Text fontSize="sm" color="rgba(255,255,255,0.82)">
                        • Tooling: Husky + secret scanning + Vitest coverage for
                        helpers and routes
                      </Text>
                    </VStack>

                    <Text fontSize="sm" color="rgba(255,255,255,0.70)" mb={5}>
                      Tech: Next.js App Router · NextAuth · GitHub API ·
                      TypeScript · Vitest · Husky
                    </Text>

                    <Flex gap={3} flexWrap="wrap">
                      <Button
                        as={Link}
                        href={calmHubLiveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        bg="rgba(181,186,255,0.16)"
                        border="1px solid rgba(181,186,255,0.45)"
                        color="rgba(255,255,255,0.95)"
                        _hover={{ bg: "rgba(181,186,255,0.22)" }}
                      >
                        Live demo
                      </Button>

                      <Button
                        as={Link}
                        href={calmHubRepoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outline"
                        borderColor="rgba(255,255,255,0.22)"
                        color="rgba(255,255,255,0.9)"
                        _hover={{
                          bg: "rgba(255,255,255,0.06)",
                          borderColor: "rgba(255,255,255,0.32)",
                        }}
                      >
                        GitHub repo
                      </Button>
                    </Flex>
                  </Box>

                  <ProjectCarousel
                    images={calmHubScreenshots}
                    altBase="CalmHub screenshot"
                  />

                  <Text
                    fontSize="sm"
                    color="rgba(255,255,255,0.65)"
                    lineHeight={1.9}
                  >
                    Roadmap: extendable towards dashboard actions (repo scoping,
                    filters, and additional server-side write capabilities).
                  </Text>
                </Stack>
              </ProjectDropdownCard>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
}
