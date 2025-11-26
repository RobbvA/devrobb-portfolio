// src/app/blueprints/loading-skeleton-patterns-blueprint/page.jsx
"use client";

import { Box, Heading, Text, VStack, Code } from "@chakra-ui/react";
import BlueprintLayout from "../BlueprintLayout";

export default function LoadingSkeletonPatternsBlueprintPage() {
  return (
    <BlueprintLayout
      title="Loading Skeleton Patterns Blueprint"
      subtitle="Reusable skeleton states for tables, cards and detail views so apps feel fast while data loads."
      status="In progress"
    >
      {/* 1. Goals */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          1. Goals
        </Heading>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          This blueprint describes how I design loading states with skeletons
          instead of spinners. The main goals:
        </Text>
        <VStack align="flex-start" spacing={1}>
          <Text fontSize="sm" color="gray.300">
            • Make apps feel fast, even when data is slow.
          </Text>
          <Text fontSize="sm" color="gray.300">
            • Avoid layout jumps when content appears.
          </Text>
          <Text fontSize="sm" color="gray.300">
            • Reuse the same skeleton patterns across pages.
          </Text>
        </VStack>
      </VStack>

      {/* 2. When to use skeletons vs spinners */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          2. Skeletons vs spinners
        </Heading>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          I use skeletons for views where the layout is known and repeated
          (lists, cards, detail panels) and spinners only for short actions or
          very small UI elements.
        </Text>
        <VStack align="flex-start" spacing={1}>
          <Text fontSize="sm" color="gray.300">
            • <strong>Skeletons</strong>: page-level content, cards, tables,
            detail pages.
          </Text>
          <Text fontSize="sm" color="gray.300">
            • <strong>Spinners</strong>: small buttons, inline actions, “Save”
            states.
          </Text>
        </VStack>
      </VStack>

      {/* 3. General pattern for loading states */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          3. General pattern
        </Heading>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          I treat list pages and detail pages the same way:
        </Text>
        <VStack align="flex-start" spacing={1}>
          <Text fontSize="sm" color="gray.300">
            1) Show skeletons on first load.
          </Text>
          <Text fontSize="sm" color="gray.300">
            2) Show previous data + subtle inline loader on refetch.
          </Text>
          <Text fontSize="sm" color="gray.300">
            3) Show an error state if the request fails.
          </Text>
        </VStack>
      </VStack>

      {/* 4. Basic React pattern for data fetching */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          4. Basic React pattern (list page)
        </Heading>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          A simple React pattern with three states: loading, error, data.
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
            {`function useTasks() {
  const [state, setState] = useState({
    isLoading: true,
    isError: false,
    tasks: [],
  });

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch("/api/tasks");
        if (!res.ok) throw new Error("Failed to load tasks");
        const data = await res.json();
        if (!cancelled) {
          setState({ isLoading: false, isError: false, tasks: data.items });
        }
      } catch (err) {
        if (!cancelled) {
          setState({ isLoading: false, isError: true, tasks: [] });
        }
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}

function TaskListPage() {
  const { isLoading, isError, tasks } = useTasks();

  if (isLoading) return <TaskListSkeleton />;
  if (isError) return <TaskListError />;

  return <TaskList items={tasks} />;
}`}
          </Code>
        </Box>
      </VStack>

      {/* 5. Skeleton layout rules */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          5. Skeleton layout rules
        </Heading>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          My rules for designing skeletons:
        </Text>
        <VStack align="flex-start" spacing={1}>
          <Text fontSize="sm" color="gray.300">
            • The skeleton shape should closely match the final layout.
          </Text>
          <Text fontSize="sm" color="gray.300">
            • Use fewer elements than the real UI (suggest structure, not
            detail).
          </Text>
          <Text fontSize="sm" color="gray.300">
            • Keep colors subtle and slightly lighter than the background.
          </Text>
          <Text fontSize="sm" color="gray.300">
            • Use the same spacing and grid as the real components.
          </Text>
        </VStack>
      </VStack>

      {/* 6. Card grid skeleton (Chakra-style example) */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          6. Card grid skeleton
        </Heading>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          A typical card grid skeleton for dashboards or overview pages. This is
          how I would structure it with Chakra&apos;s <Code>Skeleton</Code>{" "}
          components.
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
            {`import { SimpleGrid, Box, Skeleton, SkeletonText } from "@chakra-ui/react";

function TaskListSkeleton() {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
      {Array.from({ length: 6 }).map((_, index) => (
        <Box
          key={index}
          bg="#0b0b0b"
          border="1px solid #222"
          borderRadius="lg"
          p={4}
        >
          <Skeleton height="16px" width="60%" mb={3} />
          <SkeletonText
            noOfLines={3}
            spacing={2}
            skeletonHeight="10px"
          />
        </Box>
      ))}
    </SimpleGrid>
  );
}`}
          </Code>
        </Box>
      </VStack>

      {/* 7. Table skeleton pattern */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          7. Table skeleton
        </Heading>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          For tables, I keep the header visible and only skeleton the rows. This
          helps users understand what kind of data is coming.
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
            {`import { Table, Thead, Tbody, Tr, Th, Td, Skeleton } from "@chakra-ui/react";

function TaskTableSkeleton() {
  const rows = Array.from({ length: 5 });

  return (
    <Table size="sm" variant="simple">
      <Thead>
        <Tr>
          <Th>Title</Th>
          <Th>Status</Th>
          <Th>Created</Th>
          <Th isNumeric>Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        {rows.map((_, index) => (
          <Tr key={index}>
            <Td>
              <Skeleton height="12px" width="80%" />
            </Td>
            <Td>
              <Skeleton height="12px" width="60%" />
            </Td>
            <Td>
              <Skeleton height="12px" width="50%" />
            </Td>
            <Td isNumeric>
              <Skeleton height="12px" width="40px" ml="auto" />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}`}
          </Code>
        </Box>
      </VStack>

      {/* 8. Detail view skeleton */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          8. Detail view skeleton
        </Heading>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          For detail pages or side panels, I copy the overall layout but replace
          content with blocks:
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
            {`import { Box, Skeleton, SkeletonText, VStack } from "@chakra-ui/react";

function TaskDetailSkeleton() {
  return (
    <Box
      bg="#0b0b0b"
      border="1px solid #222"
      borderRadius="lg"
      p={4}
      maxW="480px"
    >
      <Skeleton height="20px" width="70%" mb={3} />
      <Skeleton height="12px" width="40%" mb={4} />

      <SkeletonText
        noOfLines={5}
        spacing={2}
        skeletonHeight="10px"
        mb={4}
      />

      <VStack align="flex-start" spacing={2}>
        <Skeleton height="12px" width="50%" />
        <Skeleton height="12px" width="30%" />
      </VStack>
    </Box>
  );
}`}
          </Code>
        </Box>
      </VStack>

      {/* 9. Perceived performance tricks */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          9. Perceived performance tricks
        </Heading>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          A few small UX tricks I use to make loading feel smoother:
        </Text>
        <VStack align="flex-start" spacing={1}>
          <Text fontSize="sm" color="gray.300">
            • Keep the page header visible while the body skeleton loads.
          </Text>
          <Text fontSize="sm" color="gray.300">
            • Don&apos;t show skeletons for extremely fast loads (&lt; 150ms) to
            avoid flicker.
          </Text>
          <Text fontSize="sm" color="gray.300">
            • Use subtle shimmer (if available) but avoid overly bright effects.
          </Text>
          <Text fontSize="sm" color="gray.300">
            • On refetch, keep old data and show a tiny inline loader instead of
            resetting to skeleton.
          </Text>
        </VStack>
      </VStack>

      {/* 10. Error & empty states alongside skeletons */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          10. Error &amp; empty states
        </Heading>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          Skeletons are only one part of the loading story. I also keep a clear
          separation between:
        </Text>
        <VStack align="flex-start" spacing={1}>
          <Text fontSize="sm" color="gray.300">
            • <strong>Loading state</strong> – show skeletons.
          </Text>
          <Text fontSize="sm" color="gray.300">
            • <strong>Error state</strong> – show a retry CTA.
          </Text>
          <Text fontSize="sm" color="gray.300">
            • <strong>Empty state</strong> – show a friendly message and a
            primary action (e.g. “Create first task”).
          </Text>
        </VStack>
      </VStack>

      {/* 11. How this connects to other blueprints */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          11. How this connects to my other blueprints
        </Heading>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          These loading skeleton patterns are designed to work with:
        </Text>
        <VStack align="flex-start" spacing={1}>
          <Text fontSize="sm" color="gray.300">
            • <strong>CRUD API Blueprint</strong> – provides predictable{" "}
            <Code>{`{ items, pagination }`}</Code> list responses that skeletons
            mirror.
          </Text>
          <Text fontSize="sm" color="gray.300">
            • <strong>Filtering &amp; Sorting Logic Blueprint</strong> – list
            refetch behaviour defines when to show skeletons vs keep old data.
          </Text>
          <Text fontSize="sm" color="gray.300">
            • <strong>UI Pattern: Lists / Cards / Modals</strong> – uses the
            card, table and detail skeletons as drop-in placeholders.
          </Text>
        </VStack>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          By treating loading states as first-class UI, I can make even slow
          APIs feel responsive and polished.
        </Text>
      </VStack>
    </BlueprintLayout>
  );
}
