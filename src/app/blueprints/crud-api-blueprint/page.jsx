// src/app/blueprints/crud-api-blueprint/page.jsx
"use client";

import { Box, Heading, Text, VStack, Code } from "@chakra-ui/react";
import BlueprintLayout from "../BlueprintLayout";

export default function CrudApiBlueprintPage() {
  return (
    <BlueprintLayout
      title="CRUD API Blueprint"
      subtitle="A consistent pattern for list, detail, create, update and delete endpoints with pagination and predictable responses."
      status="In progress"
    >
      {/* 1. Goals */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          1. Goals
        </Heading>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          This blueprint defines how I usually design CRUD APIs for a single
          resource. The goal is to keep naming, HTTP methods, response shapes
          and error handling consistent across projects so I can move fast
          without thinking about the basics every time.
        </Text>
      </VStack>

      {/* 2. Example resource: Task */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          2. Example resource: Task
        </Heading>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          In this blueprint I use a <Code>Task</Code> resource as an example.
          The same pattern can be reused for any entity: projects, posts,
          comments, tickets, etc.
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
            {`/api/tasks
/api/tasks/:id`}
          </Code>
        </Box>
      </VStack>

      {/* 3. Prisma model */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          3. Database model (Prisma)
        </Heading>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          A simple <Code>Task</Code> model with ownership and timestamps. The
          <Code>status</Code> field is an enum so the UI can rely on a small set
          of values.
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
            {`model Task {
  id          String   @id @default(cuid())
  title       String
  description String?
  status      TaskStatus @default(TODO)
  userId      String
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

enum TaskStatus {
  TODO
  IN_PROGRESS
  DONE
}`}
          </Code>
        </Box>
      </VStack>

      {/* 4. Zod schemas */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          4. Validation with Zod
        </Heading>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          All write operations (create/update) go through Zod schemas. This
          keeps validation logic out of controllers and makes it reusable.
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
            {`import { z } from "zod";

export const taskStatusEnum = z.enum(["TODO", "IN_PROGRESS", "DONE"]);

export const createTaskSchema = z.object({
  title: z.string().min(1).max(200),
  description: z.string().max(2000).optional(),
  status: taskStatusEnum.optional(),
});

export const updateTaskSchema = createTaskSchema.partial();`}
          </Code>
        </Box>
      </VStack>

      {/* 5. REST routes */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          5. REST routes for a single resource
        </Heading>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          I keep CRUD routes predictable and resource-focused. No verbs in the
          path, only nouns:
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
            {`GET    /api/tasks        -> list tasks (with pagination & filters)
GET    /api/tasks/:id     -> get a single task
POST   /api/tasks        -> create a task
PATCH  /api/tasks/:id     -> update a task
DELETE /api/tasks/:id     -> delete a task`}
          </Code>
        </Box>
      </VStack>

      {/* 6. Pagination & filtering */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          6. Pagination &amp; filtering
        </Heading>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          For list endpoints I almost always support pagination and some basic
          filters. The client controls these through query parameters:
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
            {`GET /api/tasks?status=TODO&search=api&page=1&pageSize=20`}
          </Code>
        </Box>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          A typical handler will parse the query params, apply them to Prisma
          and return both <Code>items</Code> and pagination metadata.
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
            {`const page = Number(req.query.page ?? 1);
const pageSize = Number(req.query.pageSize ?? 20);
const status = req.query.status;
const search = req.query.search;

const where = {
  userId: req.user.id,
  ...(status ? { status } : {}),
  ...(search
    ? {
        OR: [
          { title: { contains: search, mode: "insensitive" } },
          { description: { contains: search, mode: "insensitive" } },
        ],
      }
    : {}),
};

const [items, total] = await Promise.all([
  prisma.task.findMany({
    where,
    skip: (page - 1) * pageSize,
    take: pageSize,
    orderBy: { createdAt: "desc" },
  }),
  prisma.task.count({ where }),
]);`}
          </Code>
        </Box>
      </VStack>

      {/* 7. Standard response shape */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          7. Standard response shape
        </Heading>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          To keep frontends simple, I reuse the same response shape for all list
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
            {`return res.json({
  items,
  pagination: {
    page,
    pageSize,
    total,
    totalPages: Math.ceil(total / pageSize),
  },
});`}
          </Code>
        </Box>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          With this pattern, any React table or list component can be reused
          across different resources because the JSON shape stays the same.
        </Text>
      </VStack>

      {/* 8. Create & update handlers */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          8. Create &amp; update handlers
        </Heading>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          Write operations validate input, attach the authenticated{" "}
          <Code>userId</Code> and return the created/updated entity. Error
          handling plugs into my global error middleware.
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
            {`// POST /api/tasks
export async function createTask(req, res, next) {
  try {
    const data = createTaskSchema.parse(req.body);

    const task = await prisma.task.create({
      data: {
        ...data,
        userId: req.user.id,
      },
    });

    return res.status(201).json({ task });
  } catch (err) {
    next(err);
  }
}

// PATCH /api/tasks/:id
export async function updateTask(req, res, next) {
  try {
    const id = req.params.id;
    const data = updateTaskSchema.parse(req.body);

    const task = await prisma.task.update({
      where: {
        id,
        userId: req.user.id,
      },
      data,
    });

    return res.json({ task });
  } catch (err) {
    next(err);
  }
}`}
          </Code>
        </Box>
      </VStack>

      {/* 9. Delete & error behaviour */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          9. Delete &amp; error behaviour
        </Heading>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          Deleting a resource should be simple and predictable. I usually return{" "}
          <Code>204 No Content</Code> when a delete succeeds.
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
            {`// DELETE /api/tasks/:id
export async function deleteTask(req, res, next) {
  try {
    const id = req.params.id;

    await prisma.task.delete({
      where: {
        id,
        userId: req.user.id,
      },
    });

    return res.status(204).send();
  } catch (err) {
    next(err);
  }
}`}
          </Code>
        </Box>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          Prisma errors (like trying to delete a non-existing task) are turned
          into structured API errors by my global error handler, as described in
          my Error Handling &amp; API Response Patterns playbook.
        </Text>
      </VStack>

      {/* 10. How this connects to the rest of the system */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          10. How this connects to the rest of my system
        </Heading>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          This CRUD API blueprint is designed to work together with my other
          playbooks and blueprints:
        </Text>
        <VStack align="flex-start" spacing={1}>
          <Text fontSize="sm" color="gray.300">
            • <strong>Authentication Flow Blueprint</strong>: provides{" "}
            <Code>req.user</Code> and ownership checks.
          </Text>
          <Text fontSize="sm" color="gray.300">
            • <strong>Error Handling &amp; API Responses</strong>: turns thrown
            errors into clean JSON responses.
          </Text>
          <Text fontSize="sm" color="gray.300">
            • <strong>UI Pattern: Lists / Cards / Modals</strong>: consumes the{" "}
            <Code>{`{ items, pagination }`}</Code> response format on the
            frontend.
          </Text>
        </VStack>
      </VStack>
    </BlueprintLayout>
  );
}
