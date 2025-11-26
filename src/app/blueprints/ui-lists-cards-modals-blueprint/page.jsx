// src/app/blueprints/ui-lists-cards-modals-blueprint/page.jsx
"use client";

import { Box, Heading, Text, VStack, Code } from "@chakra-ui/react";
import BlueprintLayout from "../BlueprintLayout";

export default function UiListsCardsModalsBlueprintPage() {
  return (
    <BlueprintLayout
      title="UI Pattern: Lists / Cards / Modals"
      subtitle="A reusable layout for list overviews, detail modals and responsive card grids."
      status="In progress"
    >
      {/* 1. Goals */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          1. Goals
        </Heading>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          This blueprint describes my standard UI pattern for data-heavy pages:
          a list or grid of items, with filters on top and a detail view in a
          modal or side panel. The goals:
        </Text>
        <VStack align="flex-start" spacing={1}>
          <Text fontSize="sm" color="gray.300">
            • Reuse the same layout across dashboards and apps.
          </Text>
          <Text fontSize="sm" color="gray.300">
            • Keep lists, filters and details consistent.
          </Text>
          <Text fontSize="sm" color="gray.300">
            • Make it easy to plug in CRUD APIs and filtering logic.
          </Text>
        </VStack>
      </VStack>

      {/* 2. High-level layout */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          2. High-level layout
        </Heading>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          Most list pages follow this structure:
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
            {`Page
├── Header (title, primary action)
├── Filters row (search, status, sort)
└── Content area
    ├── List / grid / table
    └── Detail modal or side panel`}
          </Code>
        </Box>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          The idea: the user can quickly scan a list, filter it, and inspect or
          edit a single item without leaving the page.
        </Text>
      </VStack>

      {/* 3. Basic page shell (Chakra) */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          3. Page shell with header and filters
        </Heading>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          This is a generic page shell I reuse across list pages:
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
            {`import { Box, Heading, Button, Flex, HStack } from "@chakra-ui/react";

function TaskPageShell({ title, onCreate, filters, children }) {
  return (
    <Box>
      {/* Header */}
      <Flex
        justify="space-between"
        align={{ base: "flex-start", md: "center" }}
        mb={4}
        gap={3}
      >
        <Heading
          fontSize={{ base: "lg", md: "xl" }}
          letterSpacing="-0.3px"
        >
          {title}
        </Heading>
        <Button size="sm" onClick={onCreate}>
          New task
        </Button>
      </Flex>

      {/* Filters row */}
      <HStack spacing={3} mb={4} flexWrap="wrap">
        {filters}
      </HStack>

      {/* Main content */}
      <Box>{children}</Box>
    </Box>
  );
}`}
          </Code>
        </Box>
      </VStack>

      {/* 4. Card list pattern (overview) */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          4. Card list/grid pattern
        </Heading>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          For many apps a responsive grid of cards works better than a table.
          This is my default pattern for “task / project / item” overviews:
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
            {`import { SimpleGrid, Box, Text, Badge } from "@chakra-ui/react";

function TaskGrid({ items, onSelect }) {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
      {items.map((task) => (
        <Box
          key={task.id}
          bg="#0b0b0b"
          border="1px solid #222"
          borderRadius="lg"
          p={4}
          _hover={{
            borderColor: "#444",
            bg: "#101010",
            cursor: "pointer",
            transform: "translateY(-1px)",
          }}
          transition="all 0.15s ease-out"
          onClick={() => onSelect(task)}
        >
          <Flex justify="space-between" mb={2} align="center">
            <Text fontSize="sm" fontWeight="semibold">
              {task.title}
            </Text>
            <Badge
              fontSize="0.7rem"
              borderRadius="full"
              px={2}
              py={0.5}
              bg="#111"
              border="1px solid #333"
            >
              {task.status}
            </Badge>
          </Flex>
          <Text fontSize="xs" color="gray.400" noOfLines={3}>
            {task.description || "No description"}
          </Text>
        </Box>
      ))}
    </SimpleGrid>
  );
}`}
          </Code>
        </Box>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          The <Code>onSelect</Code> handler is used to open a detail view
          (modal, drawer, or route).
        </Text>
      </VStack>

      {/* 5. Detail modal pattern */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          5. Detail modal pattern
        </Heading>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          For reading/updating a single item I like a centered modal for simple
          apps, or a side drawer for more complex ones. This example uses a
          modal with a form inside:
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
            {`import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import { TaskForm } from "./TaskForm";

function TaskModal({ isOpen, onClose, task, onSave }) {
  if (!task) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent bg="#050505" border="1px solid #222">
        <ModalHeader fontSize="md">Edit task</ModalHeader>
        <ModalBody>
          <TaskForm
            defaultValues={task}
            onSubmit={async (values) => {
              await onSave(values);
              onClose();
            }}
          />
        </ModalBody>
        <ModalFooter>
          <Button size="sm" variant="ghost" mr={2} onClick={onClose}>
            Cancel
          </Button>
          {/* Save button is inside TaskForm */}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}`}
          </Code>
        </Box>
      </VStack>

      {/* 6. Wiring the page together: list + modal + filters */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          6. Wiring it together: page + list + modal
        </Heading>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          A full page that ties together:
          <br />
          • the shell
          <br />
          • filters (using my filtering blueprint)
          <br />
          • the card grid
          <br />• the detail modal
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
            {`import { useState } from "react";
import { useTaskListParams } from "./useTaskListParams"; // from filtering blueprint
import { StatusFilter } from "./StatusFilter";
import { SearchInput } from "./SearchInput";
import TaskPageShell from "./TaskPageShell";
import TaskGrid from "./TaskGrid";
import TaskModal from "./TaskModal";

function TasksPage() {
  const { data, isLoading, isError } = useTasksQuery(); // could be React Query / SWR
  const [selectedTask, setSelectedTask] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleSelect(task) {
    setSelectedTask(task);
    setIsModalOpen(true);
  }

  function handleCreate() {
    setSelectedTask({
      title: "",
      description: "",
      status: "TODO",
    });
    setIsModalOpen(true);
  }

  if (isLoading) return <TaskListSkeleton />;
  if (isError) return <TaskListError />;

  return (
    <>
      <TaskPageShell
        title="Tasks"
        onCreate={handleCreate}
        filters={
          <>
            <SearchInput />
            <StatusFilter />
          </>
        }
      >
        <TaskGrid items={data.items} onSelect={handleSelect} />
      </TaskPageShell>

      <TaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        task={selectedTask}
        onSave={async (values) => {
          // call API and refetch list
        }}
      />
    </>
  );
}`}
          </Code>
        </Box>
      </VStack>

      {/* 7. Cards vs tables decision rule */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          7. When to use cards vs tables
        </Heading>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          Simple rule of thumb I follow:
        </Text>
        <VStack align="flex-start" spacing={1}>
          <Text fontSize="sm" color="gray.300">
            • <strong>Cards/grid</strong>: for content with descriptions, status
            badges, tags, and actions – more visual.
          </Text>
          <Text fontSize="sm" color="gray.300">
            • <strong>Tables</strong>: for highly structured data with lots of
            numeric / sortable columns.
          </Text>
        </VStack>
      </VStack>

      {/* 8. Mobile behaviour */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          8. Mobile behaviour
        </Heading>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          On mobile I avoid complex tables and prefer stacked cards:
        </Text>
        <VStack align="flex-start" spacing={1}>
          <Text fontSize="sm" color="gray.300">
            • Grid collapses to 1 column.
          </Text>
          <Text fontSize="sm" color="gray.300">
            • Filters wrap onto multiple lines using <Code>flexWrap</Code>.
          </Text>
          <Text fontSize="sm" color="gray.300">
            • Modals use full-screen mode when possible.
          </Text>
        </VStack>
      </VStack>

      {/* 9. Empty states inside list layouts */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          9. Empty states inside list layouts
        </Heading>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          When there are no items, I still reuse the same shell but render an
          empty state in the content area:
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
            {`function TaskListContent({ items, onCreate }) {
  if (!items.length) {
    return (
      <Box
        border="1px dashed #333"
        borderRadius="lg"
        p={6}
        textAlign="center"
      >
        <Heading fontSize="md" mb={2}>
          No tasks yet
        </Heading>
        <Text fontSize="sm" color="gray.400" mb={3}>
          Create your first task to get started.
        </Text>
        <Button size="sm" onClick={onCreate}>
          Create task
        </Button>
      </Box>
    );
  }

  return <TaskGrid items={items} onSelect={() => {}} />;
}`}
          </Code>
        </Box>
      </VStack>

      {/* 10. How this ties into other blueprints */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          10. How this ties into my other blueprints
        </Heading>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          This UI pattern is designed to sit on top of the backend and state
          patterns described in my other playbooks:
        </Text>
        <VStack align="flex-start" spacing={1}>
          <Text fontSize="sm" color="gray.300">
            • <strong>CRUD API Blueprint</strong> – provides the{" "}
            <Code>{`{ items, pagination }`}</Code> structure that the list
            components consume.
          </Text>
          <Text fontSize="sm" color="gray.300">
            • <strong>Filtering &amp; Sorting Logic Blueprint</strong> – powers
            the filters and sorting controls in the header.
          </Text>
          <Text fontSize="sm" color="gray.300">
            • <strong>Form Validation Blueprint</strong> – is used inside the
            create/edit modal forms.
          </Text>
          <Text fontSize="sm" color="gray.300">
            • <strong>Loading Skeleton Patterns Blueprint</strong> – provides
            the skeleton components for the loading state of these views.
          </Text>
        </VStack>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          Together, these patterns give me a repeatable way to build polished
          list pages that feel consistent across projects.
        </Text>
      </VStack>
    </BlueprintLayout>
  );
}
