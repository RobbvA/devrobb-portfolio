// src/app/blueprints/filtering-and-sorting-logic-blueprint/page.jsx
"use client";

import { Box, Heading, Text, VStack, Code } from "@chakra-ui/react";
import BlueprintLayout from "../BlueprintLayout";

export default function FilteringAndSortingLogicBlueprintPage() {
  return (
    <BlueprintLayout
      title="Filtering & Sorting Logic Blueprint"
      subtitle="A pattern for keeping filters, sort state and URL params in sync on data-heavy pages."
      status="In progress"
    >
      {/* 1. Goals */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          1. Goals
        </Heading>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          This blueprint describes how I handle filtering, sorting and
          pagination for list pages. The main goals are:
        </Text>
        <VStack align="flex-start" spacing={1}>
          <Text fontSize="sm" color="gray.300">
            • Keep the UI, URL and backend query in sync.
          </Text>
          <Text fontSize="sm" color="gray.300">
            • Make list pages shareable (filters encoded in the URL).
          </Text>
          <Text fontSize="sm" color="gray.300">
            • Reuse the same pattern across different resources (tasks, posts,
            issues, etc.).
          </Text>
        </VStack>
      </VStack>

      {/* 2. Example route & query params */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          2. Example route &amp; query params
        </Heading>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          I use query parameters to represent the current state of the list.
          Example for a task list:
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
            {`GET /api/tasks?status=IN_PROGRESS&search=api&sortBy=createdAt&sortDir=desc&page=2&pageSize=20`}
          </Code>
        </Box>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          Typical parameters I support:
        </Text>
        <VStack align="flex-start" spacing={1}>
          <Text fontSize="sm" color="gray.300">
            • <Code>status</Code> – filter by enum field.
          </Text>
          <Text fontSize="sm" color="gray.300">
            • <Code>search</Code> – full-text or simple contains filter.
          </Text>
          <Text fontSize="sm" color="gray.300">
            • <Code>sortBy</Code> – which column to sort on.
          </Text>
          <Text fontSize="sm" color="gray.300">
            • <Code>sortDir</Code> – <Code>asc</Code> or <Code>desc</Code>.
          </Text>
          <Text fontSize="sm" color="gray.300">
            • <Code>page</Code> &amp; <Code>pageSize</Code> – pagination.
          </Text>
        </VStack>
      </VStack>

      {/* 3. Zod validation for query params */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          3. Validating query params with Zod
        </Heading>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          I parse and validate query parameters before building the Prisma
          query. This keeps controllers clean and prevents weird inputs.
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

const sortByEnum = z.enum(["createdAt", "updatedAt", "title", "status"]);
const sortDirEnum = z.enum(["asc", "desc"]);

export const listTasksQuerySchema = z.object({
  status: z.enum(["TODO", "IN_PROGRESS", "DONE"]).optional(),
  search: z.string().min(1).max(200).optional(),
  sortBy: sortByEnum.default("createdAt"),
  sortDir: sortDirEnum.default("desc"),
  page: z.coerce.number().int().min(1).default(1),
  pageSize: z.coerce.number().int().min(1).max(100).default(20),
});`}
          </Code>
        </Box>
      </VStack>

      {/* 4. Building the Prisma query */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          4. Building the Prisma query
        </Heading>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          The controller parses the query params and builds a <Code>where</Code>{" "}
          and <Code>orderBy</Code> object that can be reused across endpoints if
          needed.
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
            {`// GET /api/tasks
export async function listTasks(req, res, next) {
  try {
    const {
      status,
      search,
      sortBy,
      sortDir,
      page,
      pageSize,
    } = listTasksQuerySchema.parse(req.query);

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

    const orderBy = { [sortBy]: sortDir };

    const [items, total] = await Promise.all([
      prisma.task.findMany({
        where,
        skip: (page - 1) * pageSize,
        take: pageSize,
        orderBy,
      }),
      prisma.task.count({ where }),
    });

    return res.json({
      items,
      pagination: {
        page,
        pageSize,
        total,
        totalPages: Math.ceil(total / pageSize),
      },
      sorting: { sortBy, sortDir },
      filters: { status, search },
    });
  } catch (err) {
    next(err);
  }
}`}
          </Code>
        </Box>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          Note how the response includes <Code>pagination</Code>,{" "}
          <Code>sorting</Code> and <Code>filters</Code>. This makes it easy for
          the frontend to show the current state.
        </Text>
      </VStack>

      {/* 5. Standard response shape for lists */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          5. Standard response shape for lists
        </Heading>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          I reuse the same JSON structure for all list endpoints so my UI
          components can be generic:
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
            {`{
  "items": [...],
  "pagination": {
    "page": 1,
    "pageSize": 20,
    "total": 57,
    "totalPages": 3
  },
  "sorting": {
    "sortBy": "createdAt",
    "sortDir": "desc"
  },
  "filters": {
    "status": "TODO",
    "search": "api"
  }
}`}
          </Code>
        </Box>
      </VStack>

      {/* 6. Frontend pattern – syncing with the URL */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          6. Frontend pattern: keep state in the URL
        </Heading>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          On the frontend (React / Next.js) I treat the URL as the single source
          of truth for list state: filters, sorting and pagination all live in{" "}
          <Code>searchParams</Code>. UI controls update the URL, not local
          state.
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
            {`// Example (Next.js App Router, client component)
"use client";

import { useSearchParams, useRouter } from "next/navigation";

function useTaskListParams() {
  const searchParams = useSearchParams();
  const router = useRouter();

  function updateParams(newParams) {
    const sp = new URLSearchParams(searchParams.toString());

    Object.entries(newParams).forEach(([key, value]) => {
      if (value === undefined || value === null || value === "") {
        sp.delete(key);
      } else {
        sp.set(key, String(value));
      }
    });

    // Reset page when filters or sorting change
    if ("status" in newParams || "search" in newParams || "sortBy" in newParams || "sortDir" in newParams) {
      sp.set("page", "1");
    }

    router.push(\`/tasks?\${sp.toString()}\`);
  }

  return { searchParams, updateParams };
}`}
          </Code>
        </Box>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          With this hook, any filter component can call{" "}
          <Code>updateParams()</Code> and the list will update via the URL.
        </Text>
      </VStack>

      {/* 7. Hooking up controls: filters & sorting */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          7. Hooking up UI controls: filters &amp; sorting
        </Heading>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          A status filter dropdown can simply update the <Code>status</Code>{" "}
          param:
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
            {`function StatusFilter() {
  const { searchParams, updateParams } = useTaskListParams();
  const current = searchParams.get("status") ?? "ALL";

  return (
    <select
      value={current}
      onChange={(e) =>
        updateParams({
          status: e.target.value === "ALL" ? undefined : e.target.value,
        })
      }
    >
      <option value="ALL">All</option>
      <option value="TODO">Todo</option>
      <option value="IN_PROGRESS">In progress</option>
      <option value="DONE">Done</option>
    </select>
  );
}`}
          </Code>
        </Box>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          For sorting, I use a simple toggle pattern on table headers:
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
            {`function SortableHeader({ field, label }) {
  const { searchParams, updateParams } = useTaskListParams();
  const sortBy = searchParams.get("sortBy") ?? "createdAt";
  const sortDir = searchParams.get("sortDir") ?? "desc";

  const isActive = sortBy === field;
  const nextDir =
    !isActive ? "asc" : sortDir === "asc" ? "desc" : "asc";

  return (
    <button
      onClick={() =>
        updateParams({
          sortBy: field,
          sortDir: nextDir,
        })
      }
    >
      {label} {isActive ? (sortDir === "asc" ? "↑" : "↓") : ""}
    </button>
  );
}`}
          </Code>
        </Box>
      </VStack>

      {/* 8. Debounced search input */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          8. Debounced search input
        </Heading>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          For search fields I debounce updates to avoid firing a request on
          every keystroke. The debounced value is the one written to the URL.
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
            {`import { useEffect, useState } from "react";

function SearchInput() {
  const { searchParams, updateParams } = useTaskListParams();
  const initial = searchParams.get("search") ?? "";
  const [value, setValue] = useState(initial);

  useEffect(() => {
    const handle = setTimeout(() => {
      updateParams({ search: value || undefined });
    }, 300);

    return () => clearTimeout(handle);
  }, [value, updateParams]);

  return (
    <input
      placeholder="Search tasks..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}`}
          </Code>
        </Box>
      </VStack>

      {/* 9. Pagination controls */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          9. Pagination controls
        </Heading>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          Pagination buttons just increment or decrement the <Code>page</Code>{" "}
          param. When filters or sorting change, I reset <Code>page</Code> to{" "}
          <Code>1</Code> in the <Code>updateParams</Code> helper (see above).
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
            {`function Pagination({ totalPages }) {
  const { searchParams, updateParams } = useTaskListParams();
  const page = Number(searchParams.get("page") ?? 1);

  return (
    <div>
      <button
        disabled={page <= 1}
        onClick={() => updateParams({ page: page - 1 })}
      >
        Previous
      </button>
      <span>
        Page {page} of {totalPages}
      </span>
      <button
        disabled={page >= totalPages}
        onClick={() => updateParams({ page: page + 1 })}
      >
        Next
      </button>
    </div>
  );
}`}
          </Code>
        </Box>
      </VStack>

      {/* 10. How this connects to other blueprints */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          10. How this connects to my other blueprints
        </Heading>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          This filtering &amp; sorting pattern is designed to work together with
          several of my other playbooks and blueprints:
        </Text>
        <VStack align="flex-start" spacing={1}>
          <Text fontSize="sm" color="gray.300">
            • <strong>CRUD API Blueprint</strong> – reuses the same{" "}
            <Code>{`{ items, pagination }`}</Code> response shape.
          </Text>
          <Text fontSize="sm" color="gray.300">
            • <strong>Authentication Flow Blueprint</strong> – provides{" "}
            <Code>req.user</Code> for resource ownership checks in filters.
          </Text>
          <Text fontSize="sm" color="gray.300">
            • <strong>UI Pattern: Lists / Cards / Modals</strong> – uses the
            URL-driven state to render filters, tables and modals.
          </Text>
        </VStack>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          By keeping this pattern consistent, I can build data-heavy pages
          (dashboards, admin views, issue trackers) very quickly without
          re-inventing filtering and sorting logic each time.
        </Text>
      </VStack>
    </BlueprintLayout>
  );
}
