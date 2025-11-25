"use client";

import { Box, Text, Code, VStack } from "@chakra-ui/react";
import PlaybookLayout from "../PlaybookLayout";

export default function DatabaseSchemaDesignGuidePage() {
  return (
    <PlaybookLayout
      title="Database Schema & Design Guide"
      subtitle="The principles, patterns, and mental models I use to design clean, scalable relational database schemas."
    >
      {/* Intro */}
      <Text fontSize="sm" color="gray.300">
        This guide documents how I design relational database schemas before
        writing backend code. The goal: <strong>clarity</strong>,{" "}
        <strong>scalability</strong>, and{" "}
        <strong>a structure that matches real-world behavior</strong>.
      </Text>

      {/* 1. Purpose */}
      <Box>
        <Text fontSize="md" fontWeight="semibold" mb={2}>
          1. Purpose
        </Text>
        <VStack align="flex-start" spacing={1} fontSize="sm" color="gray.300">
          <Text>• Provide a clear system for designing database schemas.</Text>
          <Text>• Think in entities, relationships, and constraints.</Text>
          <Text>• Avoid costly refactors later in the project.</Text>
          <Text>
            • Make sure the frontend + backend logic map cleanly to the data
            model.
          </Text>
        </VStack>
      </Box>

      {/* 2. Core Principles */}
      <Box>
        <Text fontSize="md" fontWeight="semibold" mb={2}>
          2. Core Principles
        </Text>

        {/* 2.1 Entities are nouns */}
        <Box mb={3}>
          <Text fontSize="sm" fontWeight="semibold" color="gray.200" mb={1}>
            2.1 Entities are nouns
          </Text>
          <Text fontSize="sm" color="gray.300" mb={1}>
            If it represents a real object in the system, it should be a model:
          </Text>
          <VStack
            align="flex-start"
            spacing={0.5}
            fontSize="sm"
            color="gray.300"
          >
            <Text>• User</Text>
            <Text>• Project</Text>
            <Text>• Task</Text>
            <Text>• Comment</Text>
            <Text>• Session</Text>
          </VStack>
        </Box>

        {/* 2.2 Relationships define behavior */}
        <Box mb={3}>
          <Text fontSize="sm" fontWeight="semibold" color="gray.200" mb={1}>
            2.2 Relationships define behavior
          </Text>
          <VStack
            align="flex-start"
            spacing={0.5}
            fontSize="sm"
            color="gray.300"
          >
            <Text>
              • <strong>1:1</strong> — “belongs to exactly one”
            </Text>
            <Text>
              • <strong>1:N</strong> — “has many”
            </Text>
            <Text>
              • <strong>M:N</strong> — “many-to-many with pivot table”
            </Text>
          </VStack>
          <Text fontSize="sm" color="gray.300" mt={1}>
            Always map relationships explicitly.
          </Text>
        </Box>

        {/* 2.3 Add timestamps everywhere */}
        <Box mb={3}>
          <Text fontSize="sm" fontWeight="semibold" color="gray.200" mb={1}>
            2.3 Add timestamps everywhere
          </Text>
          <Text fontSize="sm" color="gray.300" mb={2}>
            I always add <Code fontSize="xs">createdAt</Code> and{" "}
            <Code fontSize="xs">updatedAt</Code> fields:
          </Text>
          <Box
            as="pre"
            fontSize="xs"
            p={3}
            borderRadius="md"
            bg="#050505"
            borderWidth="1px"
            borderColor="#222"
            overflowX="auto"
          >
            <Code whiteSpace="pre">
              {`createdAt DateTime @default(now())
updatedAt DateTime @updatedAt`}
            </Code>
          </Box>
        </Box>

        {/* 2.4 Use enums for states */}
        <Box mb={3}>
          <Text fontSize="sm" fontWeight="semibold" color="gray.200" mb={1}>
            2.4 Use enums for states
          </Text>
          <Text fontSize="sm" color="gray.300" mb={2}>
            Enums create clarity and avoid “magic strings”.
          </Text>
          <Box
            as="pre"
            fontSize="xs"
            p={3}
            borderRadius="md"
            bg="#050505"
            borderWidth="1px"
            borderColor="#222"
            overflowX="auto"
          >
            <Code whiteSpace="pre">
              {`enum TaskStatus {
  TODO
  IN_PROGRESS
  DONE
}`}
            </Code>
          </Box>
        </Box>

        {/* 2.5 Use unique constraints wisely */}
        <Box mb={3}>
          <Text fontSize="sm" fontWeight="semibold" color="gray.200" mb={1}>
            2.5 Use unique constraints wisely
          </Text>
          <Text fontSize="sm" color="gray.300" mb={1}>
            Typical candidates for uniqueness:
          </Text>
          <VStack
            align="flex-start"
            spacing={0.5}
            fontSize="sm"
            color="gray.300"
          >
            <Text>• Emails</Text>
            <Text>• Usernames</Text>
            <Text>• Slugs</Text>
            <Text>• External IDs</Text>
          </VStack>
        </Box>

        {/* 2.6 Think about reads first */}
        <Box>
          <Text fontSize="sm" fontWeight="semibold" color="gray.200" mb={1}>
            2.6 Think about reads first (not writes)
          </Text>
          <Text fontSize="sm" color="gray.300">
            Design your schema around:
          </Text>
          <VStack
            align="flex-start"
            spacing={0.5}
            fontSize="sm"
            color="gray.300"
            mt={1}
          >
            <Text>• What data the UI needs</Text>
            <Text>• How often certain queries run</Text>
            <Text>• How lists are filtered, searched, paginated</Text>
          </VStack>
          <Text fontSize="sm" color="gray.300" mt={1}>
            This makes the app feel faster and easier to work with.
          </Text>
        </Box>
      </Box>

      {/* 3. Schema Design Process (step-by-step) */}
      <Box>
        <Text fontSize="md" fontWeight="semibold" mb={2}>
          3. Schema Design Process (step-by-step)
        </Text>
        <VStack align="flex-start" spacing={2} fontSize="sm" color="gray.300">
          <Text>
            <strong>Step 1 — Identify entities</strong> – look at your app and
            write down all nouns.
          </Text>
          <Text>
            <strong>Step 2 — Define relationships</strong> – draw 1:1, 1:N, M:N
            connections.
          </Text>
          <Text>
            <strong>Step 3 — Decide required vs optional fields</strong> – e.g.{" "}
            <Code fontSize="xs">email</Code> is required,{" "}
            <Code fontSize="xs">name</Code> optional,{" "}
            <Code fontSize="xs">profileImage</Code> optional.
          </Text>
          <Text>
            <strong>Step 4 — Add constraints</strong> – unique fields, indexes,
            foreign keys.
          </Text>
          <Text>
            <strong>Step 5 — Add timestamps</strong> – always.
          </Text>
          <Text>
            <strong>Step 6 — Review schema with real scenarios</strong> – ask:
            How does the frontend fetch this? Can I get a list of items easily?
            Does this scale to more users/projects/tasks?
          </Text>
        </VStack>
      </Box>

      {/* 4. Example Schema (Project Management App) */}
      <Box>
        <Text fontSize="md" fontWeight="semibold" mb={2}>
          4. Example Schema (Project Management App)
        </Text>
        <Box
          as="pre"
          fontSize="xs"
          p={3}
          borderRadius="md"
          bg="#050505"
          borderWidth="1px"
          borderColor="#222"
          overflowX="auto"
        >
          <Code whiteSpace="pre">
            {`model User {
  id        Int       @id @default(autoincrement())
  email     String    @unique
  name      String?
  projects  Project[]
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt
}

model Project {
  id        Int       @id @default(autoincrement())
  name      String
  owner     User      @relation(fields: [ownerId], references: [id])
  ownerId   Int
  tasks     Task[]
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt
}

model Task {
  id        Int        @id @default(autoincrement())
  title     String
  status    TaskStatus @default(TODO)
  project   Project    @relation(fields: [projectId], references: [id])
  projectId Int
  createdAt DateTime   @default(now())
  updatedAt DateTime   @updatedAt
}

enum TaskStatus {
  TODO
  IN_PROGRESS
  DONE
}`}
          </Code>
        </Box>
      </Box>

      {/* 5. Indexing Strategy */}
      <Box>
        <Text fontSize="md" fontWeight="semibold" mb={2}>
          5. Indexing Strategy
        </Text>
        <Text fontSize="sm" color="gray.300" mb={2}>
          Add indexes for fields that are:
        </Text>
        <VStack align="flex-start" spacing={0.5} fontSize="sm" color="gray.300">
          <Text>• Queried often</Text>
          <Text>• Used for filtering</Text>
          <Text>• Used for sorting</Text>
          <Text>• Part of authentication or lookups</Text>
        </VStack>
        <Text fontSize="sm" color="gray.300" mt={2} mb={1}>
          Example:
        </Text>
        <Box
          as="pre"
          fontSize="xs"
          p={3}
          borderRadius="md"
          bg="#050505"
          borderWidth="1px"
          borderColor="#222"
          overflowX="auto"
        >
          <Code whiteSpace="pre">
            {`@@index([status])
@@index([ownerId])`}
          </Code>
        </Box>
      </Box>

      {/* 6. Common Mistakes */}
      <Box>
        <Text fontSize="md" fontWeight="semibold" mb={2}>
          6. Common Mistakes
        </Text>
        <VStack align="flex-start" spacing={1} fontSize="sm" color="gray.300">
          <Text>❌ Storing everything in one table</Text>
          <Text>❌ Not adding timestamps</Text>
          <Text>❌ No unique constraints</Text>
          <Text>❌ Over-normalizing</Text>
          <Text>❌ Under-normalizing</Text>
          <Text>❌ Not thinking about how the frontend queries data</Text>
        </VStack>
      </Box>

      {/* 7. Checklist */}
      <Box>
        <Text fontSize="md" fontWeight="semibold" mb={2}>
          7. Checklist
        </Text>
        <VStack align="flex-start" spacing={1} fontSize="sm" color="gray.300">
          <Text>□ Entities identified</Text>
          <Text>□ Relationships mapped</Text>
          <Text>□ Required/optional fields defined</Text>
          <Text>□ Unique constraints added</Text>
          <Text>□ Enums defined for states</Text>
          <Text>□ Timestamps included</Text>
          <Text>□ Indexes added where needed</Text>
          <Text>□ Schema reviewed with frontend scenarios</Text>
        </VStack>
      </Box>

      <Text fontSize="xs" color="gray.500">
        Version 0.1 — This guide will expand with patterns for auth,
        notifications, analytics, and more.
      </Text>
    </PlaybookLayout>
  );
}
