// app/resources/page.jsx
"use client";

import Link from "next/link";
import {
  Box,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Badge,
  Button,
} from "@chakra-ui/react";

export default function ResourcesPage() {
  const playbooks = [
    {
      title: "React App Playbook",
      description:
        "How I structure modern React applications: components, hooks, UI system, and development workflow.",
      href: "/playbooks/react-app-playbook",
      tag: "Core system",
    },
    {
      title: "Full-Stack API Playbook",
      description:
        "Node.js + Express + Prisma setup, clean architecture, validation with Zod, and predictable responses.",
      href: "/playbooks/full-stack-api-playbook",
      tag: "Backend",
    },
    {
      title: "Next.js Application Playbook",
      description:
        "My go-to structure for building full-stack apps with the App Router, server components, and modern data patterns.",
      href: "/playbooks/nextjs-application-playbook",
      tag: "Full stack",
    },
    {
      title: "Database Schema & Design Guide",
      description:
        "How I design relational database schemas: entities, relationships, constraints, and indexing strategy.",
      href: "/playbooks/database-schema-design-guide",
      tag: "Architecture",
    },
    {
      title: "Error Handling & API Response Patterns",
      description:
        "Consistent API response shapes, error handling middleware, HTTP status codes, and custom error patterns.",
      href: "/playbooks/error-handling-api-response-patterns",
      tag: "Reliability",
    },
  ];

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
      <VStack align="flex-start" spacing={3} mb={10}>
        <Heading fontSize={{ base: "2xl", md: "3xl" }} letterSpacing="-0.5px">
          Resources
        </Heading>
        <Text fontSize="sm" color="gray.400">
          A collection of tools, learning materials, and development systems I
          use to build high-quality projects efficiently.
        </Text>
      </VStack>

      <VStack align="flex-start" spacing={12}>
        {/* 1. Project Playbooks */}
        <VStack align="flex-start" spacing={4} w="full">
          <Heading fontSize="xl" letterSpacing="-0.5px">
            Project Playbooks
          </Heading>
          <Text fontSize="sm" color="gray.400" maxW="600px">
            Living documents that describe how I plan, structure, and build
            modern applications. These playbooks make my workflow transparent
            and repeatable across projects.
          </Text>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} w="full">
            {playbooks.map((playbook) => (
              <Box
                key={playbook.title}
                bg="#111"
                border="1px solid #222"
                borderRadius="lg"
                p={4}
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                _hover={{
                  borderColor: "#b5baff",
                  transform: "translateY(-2px)",
                  boxShadow: "0 0 0 1px #1a1a1a",
                }}
                transition="all 0.18s ease-out"
              >
                <Box mb={3}>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    mb={1}
                    gap={2}
                  >
                    <Heading size="sm">{playbook.title}</Heading>
                    {playbook.tag && (
                      <Badge
                        colorScheme="purple"
                        fontSize="0.6rem"
                        borderRadius="full"
                      >
                        {playbook.tag}
                      </Badge>
                    )}
                  </Box>
                  <Text fontSize="xs" color="gray.400">
                    {playbook.description}
                  </Text>
                </Box>

                <Box mt={2}>
                  <Link href={playbook.href}>
                    <Button
                      size="xs"
                      variant="outline"
                      borderColor="#333"
                      _hover={{
                        bg: "#b5baff",
                        color: "#000",
                        borderColor: "#b5baff",
                      }}
                    >
                      View playbook
                    </Button>
                  </Link>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>

        {/* 2. Project Blueprints */}
        <VStack align="flex-start" spacing={4} w="full">
          <Heading fontSize="xl" letterSpacing="-0.5px">
            Project Blueprints
          </Heading>
          <Text fontSize="sm" color="gray.400" maxW="600px">
            Reusable patterns for real-world features. These help me move fast
            when building new applications or experimenting with ideas.
          </Text>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} w="full">
            {[
              "Authentication Flow Blueprint",
              "CRUD API Blueprint",
              "UI Pattern: Lists / Cards / Modals",
              "Filtering & Sorting Logic",
              "Loading Skeleton Patterns",
              "Form Validation with Zod + React Hook Form",
            ].map((title) => (
              <Box
                key={title}
                bg="#111"
                border="1px solid #222"
                borderRadius="lg"
                p={4}
              >
                <Heading size="sm" mb={2}>
                  {title}
                </Heading>
                <Badge colorScheme="purple" mt={2}>
                  Coming soon
                </Badge>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>

        {/* 3. Best Learning Content (Instagram Reels) */}
        <VStack align="flex-start" spacing={4} w="full">
          <Heading fontSize="xl" letterSpacing="-0.5px">
            Best Learning Content
          </Heading>
          <Text fontSize="sm" color="gray.400" maxW="600px">
            A curated selection of my best-performing educational reels that
            helped me learn, teach others, and grow my developer network.
          </Text>

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
                bg="#111"
                border="1px solid #222"
                borderRadius="lg"
                p={4}
              >
                <Heading size="sm" mb={2}>
                  {title}
                </Heading>
                <Text fontSize="xs" color="gray.400">
                  One of my most helpful reels for teaching and learning.
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>

        {/* 4. Tools */}
        <VStack align="flex-start" spacing={4} w="full">
          <Heading fontSize="xl" letterSpacing="-0.5px">
            Tools I Use
          </Heading>

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
                bg="#111"
                border="1px solid #222"
                borderRadius="lg"
                p={3}
              >
                <Text fontSize="sm">{tool}</Text>
              </Box>
            ))}
          </SimpleGrid>

          <Text fontSize="xs" color="gray.500">
            (More tools will be added as my stack grows.)
          </Text>
        </VStack>
      </VStack>
    </Box>
  );
}
