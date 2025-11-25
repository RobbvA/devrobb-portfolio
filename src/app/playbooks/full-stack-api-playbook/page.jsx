"use client";

import { Box, Text, Code, VStack } from "@chakra-ui/react";
import PlaybookLayout from "../PlaybookLayout";

export default function FullStackApiPlaybookPage() {
  return (
    <PlaybookLayout
      title="Full-Stack API Playbook (Node + Express + Prisma)"
      subtitle="How I set up Node + Express + Prisma APIs with clean architecture, validation, and consistent response patterns."
    >
      <Text fontSize="sm" color="gray.300">
        This playbook describes how I design and build backend APIs that power
        my frontend applications. The goal: <strong>clean structure</strong>,{" "}
        <strong>predictable behavior</strong>, and{" "}
        <strong>easy collaboration</strong>.
      </Text>

      {/* 1. Purpose */}
      <Box>
        <Text fontSize="md" fontWeight="semibold" mb={2}>
          1. Purpose
        </Text>
        <VStack align="flex-start" spacing={1} fontSize="sm" color="gray.300">
          <Text>
            • Provide a repeatable setup for Node + Express + Prisma projects.
          </Text>
          <Text>
            • Separate concerns: routing, controllers, services, and database.
          </Text>
          <Text>
            • Make error handling and API responses consistent across endpoints.
          </Text>
        </VStack>
      </Box>

      {/* 2. When I Use This Playbook */}
      <Box>
        <Text fontSize="md" fontWeight="semibold" mb={2}>
          2. When I Use This Playbook
        </Text>
        <VStack align="flex-start" spacing={1} fontSize="sm" color="gray.300">
          <Text>• REST APIs for React / Next.js frontends.</Text>
          <Text>• Dashboards, task managers, or internal tools.</Text>
          <Text>
            • Any project where I need a real database and clean API design.
          </Text>
        </VStack>
      </Box>

      {/* 3. Core Principles */}
      <Box>
        <Text fontSize="md" fontWeight="semibold" mb={2}>
          3. Core Principles
        </Text>
        <VStack align="flex-start" spacing={1} fontSize="sm" color="gray.300">
          <Text>
            • <strong>Thin controllers, rich services</strong> – controllers
            handle HTTP details, services handle business logic.
          </Text>
          <Text>
            • <strong>Validation at the edges</strong> – all incoming data is
            validated before it reaches core logic.
          </Text>
          <Text>
            • <strong>Single source of truth for DB access</strong> – Prisma
            client is shared and not recreated everywhere.
          </Text>
          <Text>
            • <strong>Consistent response shape</strong> – the frontend can
            always expect the same structure.
          </Text>
        </VStack>
      </Box>

      {/* 4. Initial Setup */}
      <Box>
        <Text fontSize="md" fontWeight="semibold" mb={2}>
          4. Initial Setup
        </Text>
        <Text fontSize="sm" color="gray.300" mb={2}>
          Basic setup for a Node + Express + Prisma backend:
        </Text>
        <Box
          as="pre"
          fontSize="xs"
          p={3}
          borderRadius="md"
          bg="#050505"
          border="1px solid #222"
          overflowX="auto"
        >
          <Code whiteSpace="pre">
            {`# Create server folder
mkdir server
cd server

# Initialize Node project
npm init -y

# Install core dependencies
npm install express cors dotenv

# Validation
npm install zod

# Prisma
npm install prisma --save-dev
npx prisma init`}
          </Code>
        </Box>
      </Box>

      {/* 5. Folder Structure */}
      <Box>
        <Text fontSize="md" fontWeight="semibold" mb={2}>
          5. Folder Structure
        </Text>
        <Text fontSize="sm" color="gray.300" mb={2}>
          This is my default starting point:
        </Text>
        <Box
          as="pre"
          fontSize="xs"
          p={3}
          borderRadius="md"
          bg="#050505"
          border="1px solid #222"
          overflowX="auto"
        >
          <Code whiteSpace="pre">
            {`server/
  src/
    index.js           # Server entry point
    config/            # Env loading, config helpers
    routes/            # Route definitions (grouped per resource)
    controllers/       # HTTP controllers (req/res)
    services/          # Business logic
    db/                # Prisma client setup
    middleware/        # Error handler, auth, logging
    schemas/           # Zod schemas for validation
  prisma/
    schema.prisma
  .env
  .env.example`}
          </Code>
        </Box>
        <Text fontSize="sm" color="gray.300" mt={2}>
          I can adjust this later per project, but the separation stays the
          same.
        </Text>
      </Box>

      {/* 6. Basic Express Server */}
      <Box>
        <Text fontSize="md" fontWeight="semibold" mb={2}>
          6. Basic Express Server
        </Text>
        <Box
          as="pre"
          fontSize="xs"
          p={3}
          borderRadius="md"
          bg="#050505"
          border="1px solid #222"
          overflowX="auto"
        >
          <Code whiteSpace="pre">
            {`// src/index.js
import express from "express";
import cors from "cors";
import "dotenv/config";
import { router as apiRouter } from "./routes/apiRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

app.use(cors());
app.use(express.json());

// Healthcheck
app.get("/health", (req, res) => {
  res.json({ success: true, data: { status: "ok" }, error: null });
});

// API routes
app.use("/api", apiRouter);

// Global error handler
app.use(errorHandler);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("API running on port " + PORT);
});`}
          </Code>
        </Box>
      </Box>

      {/* 7. Prisma Schema (Example) */}
      <Box>
        <Text fontSize="md" fontWeight="semibold" mb={2}>
          7. Prisma Schema (Example)
        </Text>
        <Box
          as="pre"
          fontSize="xs"
          p={3}
          borderRadius="md"
          bg="#050505"
          border="1px solid #222"
          overflowX="auto"
        >
          <Code whiteSpace="pre">
            {`// prisma/schema.prisma
datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?
  createdAt DateTime @default(now())
}`}
          </Code>
        </Box>
        <Text fontSize="sm" color="gray.300" mt={2}>
          After defining the schema:
        </Text>
        <Box
          as="pre"
          fontSize="xs"
          p={3}
          borderRadius="md"
          bg="#050505"
          border="1px solid #222"
          overflowX="auto"
        >
          <Code whiteSpace="pre">
            {`npx prisma migrate dev --name init
npx prisma generate`}
          </Code>
        </Box>
      </Box>

      {/* 8. Unified Response Pattern */}
      <Box>
        <Text fontSize="md" fontWeight="semibold" mb={2}>
          8. Unified Response Pattern
        </Text>
        <Text fontSize="sm" color="gray.300" mb={2}>
          I use the same shape for all responses:
        </Text>
        <Box
          as="pre"
          fontSize="xs"
          p={3}
          borderRadius="md"
          bg="#050505"
          border="1px solid #222"
          overflowX="auto"
        >
          <Code whiteSpace="pre">
            {`{
  "success": true,
  "data": {},
  "error": null
}`}
          </Code>
        </Box>
        <Text fontSize="sm" color="gray.300" mt={2} mb={2}>
          Error example:
        </Text>
        <Box
          as="pre"
          fontSize="xs"
          p={3}
          borderRadius="md"
          bg="#050505"
          border="1px solid #222"
          overflowX="auto"
        >
          <Code whiteSpace="pre">
            {`{
  "success": false,
  "data": null,
  "error": {
    "message": "User not found",
    "code": "NOT_FOUND"
  }
}`}
          </Code>
        </Box>
      </Box>

      {/* 9. Error Handler Middleware */}
      <Box>
        <Text fontSize="md" fontWeight="semibold" mb={2}>
          9. Error Handler Middleware
        </Text>
        <Box
          as="pre"
          fontSize="xs"
          p={3}
          borderRadius="md"
          bg="#050505"
          border="1px solid #222"
          overflowX="auto"
        >
          <Code whiteSpace="pre">
            {`// src/middleware/errorHandler.js
export function errorHandler(err, req, res, next) {
  console.error(err);

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    data: null,
    error: {
      message: err.message || "Something went wrong",
      code: err.code || "INTERNAL_ERROR",
    },
  });
}`}
          </Code>
        </Box>
      </Box>

      {/* 10. Checklist */}
      <Box>
        <Text fontSize="md" fontWeight="semibold" mb={2}>
          10. Checklist
        </Text>
        <VStack align="flex-start" spacing={1} fontSize="sm" color="gray.300">
          <Text>□ Node + Express project initialized</Text>
          <Text>□ Prisma set up and first migration applied</Text>
          <Text>□ /health endpoint working</Text>
          <Text>□ Basic folder structure in place</Text>
          <Text>□ Global error handler added</Text>
          <Text>□ Response shape is consistent (success, data, error)</Text>
          <Text>□ .env.example documents required environment variables</Text>
        </VStack>
      </Box>

      <Text fontSize="xs" color="gray.500">
        Version 0.1 — This playbook will grow as I add authentication,
        pagination, and more advanced patterns.
      </Text>
    </PlaybookLayout>
  );
}
