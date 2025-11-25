"use client";

import { Box, Text, Code, VStack } from "@chakra-ui/react";
import PlaybookLayout from "../PlaybookLayout";

export default function ReactAppPlaybookPage() {
  return (
    <PlaybookLayout
      title="React App Playbook"
      subtitle="How I structure, plan, and build modern React applications in a consistent way."
    >
      <Text fontSize="sm" color="gray.300">
        The goal: <strong>move fast</strong>, keep the codebase{" "}
        <strong>clean</strong>, and make my workflow{" "}
        <strong>transparent</strong> for clients, collaborators, and anyone
        checking my portfolio.
      </Text>

      {/* 1. Purpose */}
      <Box>
        <Text fontSize="md" fontWeight="semibold" mb={2}>
          1. Purpose
        </Text>
        <VStack align="flex-start" spacing={1} fontSize="sm" color="gray.300">
          <Text>• Provide a repeatable system for any new React project.</Text>
          <Text>• Avoid “spaghetti components” and keep things modular.</Text>
          <Text>
            • Make it easy to understand how I think when I build UIs.
          </Text>
        </VStack>
      </Box>

      {/* 2. When I Use This Playbook */}
      <Box>
        <Text fontSize="md" fontWeight="semibold" mb={2}>
          2. When I Use This Playbook
        </Text>
        <VStack align="flex-start" spacing={1} fontSize="sm" color="gray.300">
          <Text>• Standalone React frontends (Vite).</Text>
          <Text>
            • Frontends talking to APIs (Node/Express, Next.js, etc.).
          </Text>
          <Text>• Prototypes that might grow into production apps.</Text>
        </VStack>
      </Box>

      {/* 3. Core Principles */}
      <Box>
        <Text fontSize="md" fontWeight="semibold" mb={2}>
          3. Core Principles
        </Text>
        <VStack align="flex-start" spacing={1} fontSize="sm" color="gray.300">
          <Text>
            • <strong>UI first, logic second</strong> – shape the interface and
            user flow first.
          </Text>
          <Text>
            • <strong>State lives where it’s needed</strong> – no global state
            until it’s necessary.
          </Text>
          <Text>
            • <strong>Small, focused components</strong> – each component does
            one thing well.
          </Text>
          <Text>
            • <strong>Consistency over cleverness</strong> – readable code over
            “smart” tricks.
          </Text>
        </VStack>
      </Box>

      {/* 4. Project Setup */}
      <Box>
        <Text fontSize="md" fontWeight="semibold" mb={2}>
          4. Project Setup
        </Text>
        <Text fontSize="sm" color="gray.300" mb={2}>
          I typically bootstrap new React apps with Vite:
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
            {`# Create project with Vite
npm create vite@latest my-react-app --template react

cd my-react-app

# Install dependencies
npm install

# Optional: Chakra UI as UI system
npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion

# Start dev server
npm run dev`}
          </Code>
        </Box>
      </Box>

      {/* 5. Default Folder Structure */}
      <Box>
        <Text fontSize="md" fontWeight="semibold" mb={2}>
          5. Default Folder Structure
        </Text>
        <Text fontSize="sm" color="gray.300" mb={2}>
          This is the structure I usually start with:
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
            {`src/
  components/     # Reusable UI building blocks (cards, buttons, forms)
  features/       # Feature-based modules (optional, for larger apps)
  hooks/          # Custom hooks (data fetching, derived state)
  pages/          # Route-level components (if using a router)
  styles/         # Global styles, theme config, tokens
  App.jsx
  main.jsx`}
          </Code>
        </Box>
        <Text fontSize="sm" color="gray.300" mt={2}>
          I adjust this per project, but the idea stays the same:{" "}
          <strong>separate UI, logic, and configuration.</strong>
        </Text>
      </Box>

      {/* 6. Development Workflow */}
      <Box>
        <Text fontSize="md" fontWeight="semibold" mb={2}>
          6. Development Workflow
        </Text>
        <VStack align="flex-start" spacing={2} fontSize="sm" color="gray.300">
          <Text>
            <strong>1. Bootstrap &amp; Run</strong> – project created and dev
            server runs without errors.
          </Text>
          <Text>
            <strong>2. Layout &amp; Structure</strong> – build main layout
            (header, main, footer), sketch sections.
          </Text>
          <Text>
            <strong>3. Components</strong> – extract reusable UI pieces:{" "}
            <Code fontSize="xs">Card</Code>, <Code fontSize="xs">Button</Code>,{" "}
            <Code fontSize="xs">Navbar</Code>, etc.
          </Text>
          <Text>
            <strong>4. State &amp; Hooks</strong> – add{" "}
            <Code fontSize="xs">useState</Code>,{" "}
            <Code fontSize="xs">useEffect</Code> or custom hooks, keep data
            logic in hooks.
          </Text>
          <Text>
            <strong>5. Data Layer</strong> – start with mock data, then connect
            to real APIs, handle loading/errors.
          </Text>
          <Text>
            <strong>6. Polish &amp; UX</strong> – typography, spacing,
            responsive layout, small animations.
          </Text>
        </VStack>
      </Box>

      {/* 7. Simple Component Example */}
      <Box>
        <Text fontSize="md" fontWeight="semibold" mb={2}>
          7. Simple Component Example
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
            {`// src/components/UserCard.jsx
export function UserCard({ name, role }) {
  return (
    <div style={{ padding: "1rem", borderRadius: "0.5rem", border: "1px solid #333" }}>
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}`}
          </Code>
        </Box>
        <Text fontSize="sm" color="gray.300" mt={2}>
          This is the kind of small, focused component I like to reuse across
          pages.
        </Text>
      </Box>

      {/* 8. Checklist */}
      <Box>
        <Text fontSize="md" fontWeight="semibold" mb={2}>
          8. Checklist
        </Text>
        <VStack align="flex-start" spacing={1} fontSize="sm" color="gray.300">
          <Text>□ Project created and running locally</Text>
          <Text>□ Global layout in place (basic structure)</Text>
          <Text>□ First set of reusable UI components extracted</Text>
          <Text>□ Basic state and hooks wired up</Text>
          <Text>□ Mock or real data connected</Text>
          <Text>□ Loading &amp; error states handled in the UI</Text>
          <Text>□ Basic responsive behavior implemented</Text>
        </VStack>
      </Box>

      <Text fontSize="xs" color="gray.500">
        Version 0.1 — This playbook will grow as I build more React projects.
      </Text>
    </PlaybookLayout>
  );
}
