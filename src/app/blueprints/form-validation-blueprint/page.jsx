// src/app/blueprints/form-validation-blueprint/page.jsx
"use client";

import { Box, Heading, Text, VStack, Code } from "@chakra-ui/react";
import BlueprintLayout from "../BlueprintLayout";

export default function FormValidationBlueprintPage() {
  return (
    <BlueprintLayout
      title="Form Validation Blueprint"
      subtitle="Schema-first form validation with Zod and React Hook Form, including UX patterns for errors."
      status="In progress"
    >
      {/* 1. Goals */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          1. Goals
        </Heading>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          This blueprint describes how I handle form validation in React apps
          using Zod and React Hook Form. The main goals are:
        </Text>
        <VStack align="flex-start" spacing={1}>
          <Text fontSize="sm" color="gray.300">
            • Define validation rules once, as schemas.
          </Text>
          <Text fontSize="sm" color="gray.300">
            • Reuse the same schema on the server and the client.
          </Text>
          <Text fontSize="sm" color="gray.300">
            • Provide clear, friendly error messages to users.
          </Text>
          <Text fontSize="sm" color="gray.300">
            • Keep forms easy to maintain as they grow.
          </Text>
        </VStack>
      </VStack>

      {/* 2. Folder structure */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          2. Folder structure
        </Heading>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          I keep schemas and form components separate so that the same schema
          can be imported by both the API route and the React form.
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
  schemas/
    authSchemas.ts
    taskSchemas.ts
    userSchemas.ts
  api/
    routes/
      auth/
      tasks/
  ui/
    components/
      forms/
        LoginForm.tsx
        TaskForm.tsx
        FormField.tsx`}
          </Code>
        </Box>
      </VStack>

      {/* 3. Defining schemas with Zod */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          3. Defining schemas with Zod
        </Heading>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          I define each form as a Zod schema. The schema lives in a shared
          location so it can be reused by both frontend and backend.
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
            {`// src/schemas/taskSchemas.ts
import { z } from "zod";

export const taskStatusEnum = z.enum(["TODO", "IN_PROGRESS", "DONE"]);

export const taskFormSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(200, "Title must be at most 200 characters"),
  description: z
    .string()
    .max(2000, "Description is too long")
    .optional()
    .or(z.literal("")),
  status: taskStatusEnum.default("TODO"),
  dueDate: z
    .string()
    .optional()
    .refine(
      (value) => !value || !Number.isNaN(Date.parse(value)),
      "Due date must be a valid date"
    ),
});`}
          </Code>
        </Box>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          This schema defines both types and error messages in one place.
        </Text>
      </VStack>

      {/* 4. Inferring TypeScript types (optional but nice) */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          4. Inferring TypeScript types
        </Heading>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          In TypeScript projects I infer the form data type from the schema so
          types never go out of sync with validation rules.
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
            {`export type TaskFormValues = z.infer<typeof taskFormSchema>;`}
          </Code>
        </Box>
      </VStack>

      {/* 5. Connecting Zod and React Hook Form */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          5. Connecting Zod and React Hook Form
        </Heading>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          I use the <Code>zodResolver</Code> so that React Hook Form uses the
          Zod schema as its validation source.
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
            {`import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { taskFormSchema, TaskFormValues } from "@/schemas/taskSchemas";

function TaskForm({ defaultValues, onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TaskFormValues>({
    resolver: zodResolver(taskFormSchema),
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* fields here */}
    </form>
  );
}`}
          </Code>
        </Box>
      </VStack>

      {/* 6. Reusable FormField pattern */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          6. Reusable FormField component
        </Heading>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          To keep JSX clean, I like to create a small wrapper that knows how to
          render a label, input and error message. With Chakra UI the pattern
          looks like this:
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
            {`// src/ui/components/forms/FormField.tsx
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";

export function TextField({ label, error, inputProps }) {
  return (
    <FormControl isInvalid={Boolean(error)} mb={3}>
      <FormLabel fontSize="sm">{label}</FormLabel>
      <Input size="sm" {...inputProps} />
      {error && (
        <FormErrorMessage fontSize="xs">
          {error.message}
        </FormErrorMessage>
      )}
    </FormControl>
  );
}`}
          </Code>
        </Box>
      </VStack>

      {/* 7. Using the field component inside a form */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          7. Using the field component inside a form
        </Heading>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          The form component stays focused on structure and submit behaviour,
          not on validation details:
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
            {`import { Button, VStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { taskFormSchema, TaskFormValues } from "@/schemas/taskSchemas";
import { TextField } from "./FormField";

export function TaskForm({ defaultValues, onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TaskFormValues>({
    resolver: zodResolver(taskFormSchema),
    defaultValues,
  });

  return (
    <VStack
      as="form"
      align="stretch"
      spacing={3}
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        label="Title"
        error={errors.title}
        inputProps={register("title")}
      />

      <TextField
        label="Description"
        error={errors.description}
        inputProps={register("description")}
      />

      {/* status and due date would use select / date components */}

      <Button
        type="submit"
        size="sm"
        isLoading={isSubmitting}
        alignSelf="flex-start"
      >
        Save task
      </Button>
    </VStack>
  );
}`}
          </Code>
        </Box>
      </VStack>

      {/* 8. Server-side validation using the same schema */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          8. Server-side validation using the same schema
        </Heading>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          The API endpoint uses the exact same Zod schema to validate incoming
          data. This prevents the classic “frontend and backend disagree” bug.
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
import { taskFormSchema } from "@/schemas/taskSchemas";

export async function createTaskHandler(req, res, next) {
  try {
    const data = taskFormSchema.parse(req.body);

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
}`}
          </Code>
        </Box>
      </VStack>

      {/* 9. API error shape and mapping to the UI */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          9. API error shape and mapping to the UI
        </Heading>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          My Error Handling &amp; API Response Patterns playbook defines a
          standard shape for validation errors. A simplified example looks like
          this:
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
  "error": "ValidationError",
  "message": "Invalid request body",
  "fieldErrors": {
    "title": "Title is required",
    "dueDate": "Due date must be a valid date"
  }
}`}
          </Code>
        </Box>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          On the frontend, I can map these <Code>fieldErrors</Code> back into
          React Hook Form:
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
            {`const {
  register,
  handleSubmit,
  setError,
  formState: { errors },
} = useForm<TaskFormValues>({
  resolver: zodResolver(taskFormSchema),
});

async function onSubmit(values) {
  const res = await fetch("/api/tasks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });

  if (!res.ok) {
    const data = await res.json();

    if (data.fieldErrors) {
      Object.entries(data.fieldErrors).forEach(([field, message]) => {
        setError(field as keyof TaskFormValues, {
          type: "server",
          message: String(message),
        });
      });
    }

    return;
  }

  // success flow...
}`}
          </Code>
        </Box>
      </VStack>

      {/* 10. UX patterns for errors */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          10. UX patterns for errors
        </Heading>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          A few small rules I follow to keep forms friendly:
        </Text>
        <VStack align="flex-start" spacing={1}>
          <Text fontSize="sm" color="gray.300">
            • Show validation errors close to the field, not just as a toast.
          </Text>
          <Text fontSize="sm" color="gray.300">
            • Use short, specific messages (no walls of text).
          </Text>
          <Text fontSize="sm" color="gray.300">
            • Mark invalid fields visually (border color, subtle background).
          </Text>
          <Text fontSize="sm" color="gray.300">
            • Keep previously entered values when the server returns an error.
          </Text>
          <Text fontSize="sm" color="gray.300">
            • For global errors (like network issues), show a single alert at
            the top of the form.
          </Text>
        </VStack>
      </VStack>

      {/* 11. How this connects to other blueprints */}
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" letterSpacing="-0.2px">
          11. How this connects to my other blueprints
        </Heading>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          This form validation blueprint is designed to fit seamlessly into the
          rest of my system:
        </Text>
        <VStack align="flex-start" spacing={1}>
          <Text fontSize="sm" color="gray.300">
            • <strong>CRUD API Blueprint</strong> – uses the same schemas to
            validate create/update operations.
          </Text>
          <Text fontSize="sm" color="gray.300">
            • <strong>Error Handling &amp; API Responses</strong> – defines the
            error format that forms consume.
          </Text>
          <Text fontSize="sm" color="gray.300">
            • <strong>UI Pattern: Lists / Cards / Modals</strong> – often uses
            these forms inside create/edit modals.
          </Text>
        </VStack>
        <Text fontSize="sm" color="gray.300" lineHeight="1.7">
          By treating schemas as a shared contract between frontend and backend,
          I can ship new forms quickly without sacrificing validation quality or
          UX.
        </Text>
      </VStack>
    </BlueprintLayout>
  );
}
