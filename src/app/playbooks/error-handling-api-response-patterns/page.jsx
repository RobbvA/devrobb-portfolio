"use client";

import { Box, Text, Code, VStack } from "@chakra-ui/react";
import PlaybookLayout from "../PlaybookLayout";

export default function ErrorHandlingPlaybookPage() {
  return (
    <PlaybookLayout
      title="Error Handling & API Response Patterns"
      subtitle="How I structure API responses and handle errors in a predictable, secure, and developer-friendly way."
    >
      <Text fontSize="sm" color="gray.300">
        This playbook defines how my APIs communicate <strong>success</strong>,{" "}
        <strong>failure</strong>, and <strong>useful errors</strong> — without
        leaking internal details. Consistent error handling makes backends
        easier to debug and frontends easier to build.
      </Text>

      {/* 1. Purpose */}
      <Box>
        <Text fontSize="md" fontWeight="semibold" mb={2}>
          1. Purpose
        </Text>
        <VStack align="flex-start" spacing={1} fontSize="sm" color="gray.300">
          <Text>• Keep API responses consistent across all endpoints.</Text>
          <Text>• Send clear, readable error messages.</Text>
          <Text>• Do NOT expose stack traces or internal logic.</Text>
          <Text>• Simplify frontend error handling.</Text>
        </VStack>
      </Box>

      {/* 2. Core Principles */}
      <Box>
        <Text fontSize="md" fontWeight="semibold" mb={2}>
          2. Core Principles
        </Text>

        {/* 2.1 Predictable response shape */}
        <Box mb={3}>
          <Text fontSize="sm" fontWeight="semibold" color="gray.200" mb={1}>
            2.1 Predictable response shape
          </Text>
          <Text fontSize="sm" color="gray.300" mb={2}>
            Every response — successful or failed — follows the same structure.
          </Text>
          <Box
            as="pre"
            fontSize="xs"
            p={3}
            borderRadius="md"
            bg="#050505"
            border="1px solid #222"
            overflowX="auto"
            mb={2}
          >
            <Code whiteSpace="pre">
              {`{
  "success": true,
  "data": {},
  "error": null
}`}
            </Code>
          </Box>
          <Text fontSize="sm" color="gray.300" mb={1}>
            Errors always follow:
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
    "message": "Something went wrong",
    "code": "INTERNAL_ERROR"
  }
}`}
            </Code>
          </Box>
        </Box>

        {/* 2.2 Correct HTTP status codes */}
        <Box mb={3}>
          <Text fontSize="sm" fontWeight="semibold" color="gray.200" mb={1}>
            2.2 Correct HTTP status codes
          </Text>
          <VStack
            align="flex-start"
            spacing={0.5}
            fontSize="sm"
            color="gray.300"
          >
            <Text>• 200 → OK</Text>
            <Text>• 201 → Created</Text>
            <Text>• 400 → Validation error</Text>
            <Text>• 401 → Not authenticated</Text>
            <Text>• 403 → Not authorized</Text>
            <Text>• 404 → Not found</Text>
            <Text>• 500 → Internal server error</Text>
          </VStack>
        </Box>

        {/* 2.3 Never send stack traces to the client */}
        <Box mb={3}>
          <Text fontSize="sm" fontWeight="semibold" color="gray.200" mb={1}>
            2.3 Never send stack traces to the client
          </Text>
          <Text fontSize="sm" color="gray.300">
            The frontend should <strong>never</strong> see:
          </Text>
          <VStack
            align="flex-start"
            spacing={0.5}
            fontSize="sm"
            color="gray.300"
            mt={1}
          >
            <Text>• stack traces</Text>
            <Text>• Prisma errors</Text>
            <Text>• SQL errors</Text>
            <Text>• Node internals</Text>
          </VStack>
          <Text fontSize="sm" color="gray.300" mt={1}>
            These stay in the server logs.
          </Text>
        </Box>

        {/* 2.4 Validation first, logic second */}
        <Box mb={1}>
          <Text fontSize="sm" fontWeight="semibold" color="gray.200" mb={1}>
            2.4 Validation first, logic second
          </Text>
          <Text fontSize="sm" color="gray.300" mb={2}>
            Request data must be validated at the edge using Zod:
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
              {`import { z } from "zod";

export const createUserSchema = z.object({
  email: z.string().email(),
  name: z.string().optional(),
});`}
            </Code>
          </Box>
        </Box>
      </Box>

      {/* 3. Standard Response Helpers */}
      <Box>
        <Text fontSize="md" fontWeight="semibold" mb={2}>
          3. Standard Response Helpers
        </Text>
        <Text fontSize="sm" color="gray.300" mb={2}>
          I define helper functions to keep controllers clean and consistent:
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
            {`export function success(data, status = 200) {
  return {
    status,
    body: {
      success: true,
      data,
      error: null,
    },
  };
}

export function failure(message, code = "ERROR", status = 400) {
  return {
    status,
    body: {
      success: false,
      data: null,
      error: { message, code },
    },
  };
}`}
          </Code>
        </Box>
      </Box>

      {/* 4. Express Error Handler */}
      <Box>
        <Text fontSize="md" fontWeight="semibold" mb={2}>
          4. Express Error Handler
        </Text>
        <Text fontSize="sm" color="gray.300" mb={2}>
          Every API gets a global error handler:
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
  console.error(err); // Full details in server only

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
        <Text fontSize="sm" color="gray.300" mt={2}>
          This ensures consistency across the entire API.
        </Text>
      </Box>

      {/* 5. Throwing Custom Errors */}
      <Box>
        <Text fontSize="md" fontWeight="semibold" mb={2}>
          5. Throwing Custom Errors
        </Text>
        <Text fontSize="sm" color="gray.300" mb={2}>
          In services, I throw errors with custom codes:
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
            {`function notFound(message = "Resource not found") {
  const err = new Error(message);
  err.statusCode = 404;
  err.code = "NOT_FOUND";
  throw err;
}

// Usage:
if (!user) notFound("User does not exist");`}
          </Code>
        </Box>
      </Box>

      {/* 6. Controller Example (Clean & Predictable) */}
      <Box>
        <Text fontSize="md" fontWeight="semibold" mb={2}>
          6. Controller Example (Clean &amp; Predictable)
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
            {`// src/controllers/userController.js
import { createUserService } from "../services/userService.js";
import { createUserSchema } from "../schemas/userSchemas.js";

export async function createUser(req, res, next) {
  try {
    const parsed = createUserSchema.parse(req.body);
    const user = await createUserService(parsed);

    res.status(201).json({
      success: true,
      data: user,
      error: null,
    });
  } catch (err) {
    next(err);
  }
}`}
          </Code>
        </Box>
      </Box>

      {/* 7. Common Mistakes */}
      <Box>
        <Text fontSize="md" fontWeight="semibold" mb={2}>
          7. Common Mistakes
        </Text>
        <VStack align="flex-start" spacing={1} fontSize="sm" color="gray.300">
          <Text>❌ Sending raw SQL / Prisma errors</Text>
          <Text>❌ Hardcoding inconsistent response shapes</Text>
          <Text>❌ Not using proper status codes</Text>
          <Text>❌ Putting try/catch inside every controller</Text>
          <Text>❌ Sending different error structures per route</Text>
          <Text>❌ Not validating input before using it</Text>
        </VStack>
      </Box>

      {/* 8. Checklist */}
      <Box>
        <Text fontSize="md" fontWeight="semibold" mb={2}>
          8. Checklist
        </Text>
        <VStack align="flex-start" spacing={1} fontSize="sm" color="gray.300">
          <Text>□ Unified response shape implemented</Text>
          <Text>□ Proper status codes used everywhere</Text>
          <Text>□ Global error handler installed</Text>
          <Text>□ No stack traces leak to clients</Text>
          <Text>□ Custom error helpers defined</Text>
          <Text>□ All controllers validated with Zod</Text>
          <Text>□ Errors logged on the server</Text>
        </VStack>
      </Box>

      <Text fontSize="xs" color="gray.500">
        Version 0.1 — This playbook will expand with patterns for authentication
        errors, rate limiting, pagination errors, and more.
      </Text>
    </PlaybookLayout>
  );
}
