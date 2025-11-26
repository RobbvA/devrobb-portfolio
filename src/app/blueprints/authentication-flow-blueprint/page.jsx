// src/app/blueprints/authentication-flow-blueprint/page.jsx
"use client";

import { Box, Heading, Text, VStack, Code } from "@chakra-ui/react";
import BlueprintLayout from "../BlueprintLayout";

export default function AuthenticationFlowBlueprintPage() {
  return (
    <BlueprintLayout
      title="Authentication Flow Blueprint"
      subtitle="A complete login / signup / logout flow with protected routes, refresh tokens, and role-based access that I can reuse across projects."
      status="Detailed blueprint"
    >
      {/* 1. Goals */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          1. Goals
        </Heading>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          This blueprint describes a modern authentication setup for full-stack
          apps: email/password auth, protected routes, short-lived access
          tokens, long-lived refresh tokens, and role-based access control.
        </Text>
      </VStack>

      {/* 2. Folder structure */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          2. Backend folder structure
        </Heading>
        <Text fontSize="sm" color="gray.300">
          A clean folder structure makes it easy to extend auth without touching
          business logic everywhere.
        </Text>
        <Box
          as="pre"
          fontSize="xs"
          bg="#0b0b0b"
          borderRadius="md"
          p={3}
          border="1px solid #222"
          overflowX="auto"
        >
          <Code whiteSpace="pre">
            {`src/
  auth/
    auth.controller.js
    auth.service.js
    auth.routes.js
    auth.schema.js
    auth.utils.js
  middlewares/
    requireAuth.js
    requireRole.js
  users/
    user.model.js
    user.repository.js`}
          </Code>
        </Box>
      </VStack>

      {/* 3. Prisma models */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          3. Database models (Prisma)
        </Heading>
        <Text fontSize="sm" color="gray.300">
          A <Code>User</Code> has one or more <Code>Session</Code> records. Each
          session stores a refresh token and expiry date.
        </Text>
        <Box
          as="pre"
          fontSize="xs"
          bg="#0b0b0b"
          borderRadius="md"
          p={3}
          border="1px solid #222"
          overflowX="auto"
        >
          <Code whiteSpace="pre">
            {`model User {
  id        String   @id @default(cuid())
  email     String   @unique
  password  String
  name      String?
  role      String   @default("user")
  sessions  Session[]
}

model Session {
  id           String   @id @default(cuid())
  userId       String
  user         User     @relation(fields: [userId], references: [id])
  refreshToken String   @unique
  createdAt    DateTime @default(now())
  expiresAt    DateTime
}`}
          </Code>
        </Box>
      </VStack>

      {/* 4. Validation */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          4. Input validation (Zod)
        </Heading>
        <Text fontSize="sm" color="gray.300">
          All auth endpoints validate input with Zod before hitting the
          database.
        </Text>
        <Box
          as="pre"
          fontSize="xs"
          bg="#0b0b0b"
          borderRadius="md"
          p={3}
          border="1px solid #222"
          overflowX="auto"
        >
          <Code whiteSpace="pre">
            {`export const signupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().optional(),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});`}
          </Code>
        </Box>
      </VStack>

      {/* 5. Routes */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          5. Auth routes
        </Heading>
        <Text fontSize="sm" color="gray.300">
          The API surface is small on purpose. Most apps only need these
          endpoints:
        </Text>
        <Box
          as="pre"
          fontSize="xs"
          bg="#0b0b0b"
          borderRadius="md"
          p={3}
          border="1px solid #222"
        >
          <Code whiteSpace="pre">
            {`POST   /auth/signup   -> create account
POST   /auth/login    -> authenticate and start session
POST   /auth/logout   -> revoke refresh token
POST   /auth/refresh  -> issue new access token
GET    /auth/me       -> return current user`}
          </Code>
        </Box>
      </VStack>

      {/* 6. Token strategy */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          6. Token strategy
        </Heading>
        <Text fontSize="sm" color="gray.300">
          I separate short-lived access tokens from long-lived refresh tokens:
        </Text>
        <VStack align="flex-start" spacing={1}>
          <Text fontSize="sm" color="gray.300">
            • <strong>Access token</strong>: JWT, ~15 minutes, stored in memory
            on the frontend.
          </Text>
          <Text fontSize="sm" color="gray.300">
            • <strong>Refresh token</strong>: random string, stored in an
            httpOnly cookie and in the <Code>Session</Code> table.
          </Text>
          <Text fontSize="sm" color="gray.300">
            • Tokens are rotated when calling <Code>/auth/refresh</Code>.
          </Text>
        </VStack>
      </VStack>

      {/* 7. Example login controller */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          7. Example login controller
        </Heading>
        <Text fontSize="sm" color="gray.300">
          The login endpoint validates input, checks credentials, creates a
          session and returns an access token.
        </Text>
        <Box
          as="pre"
          fontSize="xs"
          bg="#0b0b0b"
          borderRadius="md"
          p={3}
          border="1px solid #222"
          overflowX="auto"
        >
          <Code whiteSpace="pre">
            {`export async function login(req, res) {
  const { email, password } = loginSchema.parse(req.body);

  const user = await userRepo.findByEmail(email);
  if (!user || !(await compare(password, user.password))) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const { accessToken, refreshToken } =
    await authService.createSession(user.id);

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
  });

  return res.json({ accessToken, user });
}`}
          </Code>
        </Box>
      </VStack>

      {/* 8. Role-based access */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          8. Role-based access
        </Heading>
        <Text fontSize="sm" color="gray.300">
          API routes can be protected by both authentication and a required
          role:
        </Text>
        <Box
          as="pre"
          fontSize="xs"
          bg="#0b0b0b"
          borderRadius="md"
          p={3}
          border="1px solid #222"
          overflowX="auto"
        >
          <Code whiteSpace="pre">
            {`export function requireRole(role) {
  return (req, res, next) => {
    if (!req.user || req.user.role !== role) {
      return res.status(403).json({ error: "Forbidden" });
    }
    next();
  };
}

// Usage:
// router.get("/admin/stats", requireAuth, requireRole("admin"), statsHandler);`}
          </Code>
        </Box>
      </VStack>

      {/* 9. Frontend notes */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          9. Frontend integration notes
        </Heading>
        <VStack align="flex-start" spacing={1}>
          <Text fontSize="sm" color="gray.300">
            • Store the access token in React state (or a context), not in
            localStorage.
          </Text>
          <Text fontSize="sm" color="gray.300">
            • Call <Code>/auth/refresh</Code> on app load to silently restore a
            session if the refresh cookie is valid.
          </Text>
          <Text fontSize="sm" color="gray.300">
            • Use a simple <Code>&lt;ProtectedRoute /&gt;</Code> wrapper or
            layout to guard private pages.
          </Text>
        </VStack>
      </VStack>
    </BlueprintLayout>
  );
}
