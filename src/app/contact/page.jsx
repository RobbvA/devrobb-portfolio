// src/app/contact/page.jsx
"use client";

import {
  Box,
  Heading,
  Text,
  VStack,
  Stack,
  SimpleGrid,
  Flex,
  Input,
  Textarea,
  Button,
  Link,
} from "@chakra-ui/react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export default function ContactPage() {
  return (
    <Box
      as="main"
      minH="80dvh"
      bg="#000"
      color="#fff"
      px={{ base: 6, md: 12 }}
      pt={{ base: 10, md: 16 }}
      pb={{ base: 12, md: 20 }}
    >
      <VStack
        align="flex-start"
        spacing={{ base: 10, md: 12 }}
        maxW="6xl"
        mx="auto"
      >
        {/* CONTACT + hero section */}
        <Box w="full">
          <Text
            fontSize={{ base: "sm", md: "md", lg: "lg" }}
            fontWeight="600"
            textTransform="uppercase"
            letterSpacing="0.18em"
            color="rgba(255,255,255,0.55)"
            mb={4}
          >
            Contact
          </Text>

          <Flex
            direction={{ base: "column", md: "row" }}
            align="flex-start"
            gap={{ base: 6, md: 12 }}
          >
            {/* Intro tekst links */}
            <VStack
              align="flex-start"
              spacing={{ base: 3, md: 4 }}
              maxW="40rem"
            >
              <Heading
                as="h1"
                fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                lineHeight={1.2}
                letterSpacing="-0.01em"
                color="#FFFCDD"
                className={playfair.className}
              >
                Let&apos;s build something together.
              </Heading>

              <Text
                fontSize={{ base: "md", md: "lg" }}
                fontWeight="500"
                color="#b5baff"
              >
                Open for junior roles, freelance work and collabs.
              </Text>

              <Text
                fontSize={{ base: "sm", md: "md" }}
                color="rgba(255,255,255,0.7)"
                maxW="40rem"
                lineHeight={1.8}
              >
                Whether it&apos;s a web app idea, a long-term product, or a
                single feature you want to ship faster — tell me what you have
                in mind. I like clear expectations, small iterations, and code
                that feels calm to work in.
              </Text>
            </VStack>
          </Flex>
        </Box>

        {/* Grid met formulier + contact info */}
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          gap={{ base: 6, md: 8, lg: 9 }}
          w="100%"
          mt={{ base: 2, md: 4 }}
        >
          {/* Card 1 — Contact form */}
          <GlassCard>
            <Text
              fontSize={{ base: "xs", md: "sm" }}
              textTransform="uppercase"
              letterSpacing="0.14em"
              color="rgba(181,186,255,0.7)"
              mb={3}
            >
              Contact form
            </Text>

            <Heading
              as="h2"
              fontSize={{ base: "lg", md: "xl" }}
              mb={4}
              color="#FFFCDD"
            >
              Send me a message.
            </Heading>

            <VStack align="flex-start" spacing={4} w="full" as="form">
              {/* Name */}
              <Box w="full">
                <Text
                  as="label"
                  htmlFor="name"
                  fontSize="sm"
                  color="rgba(255,255,255,0.8)"
                  mb={1.5}
                  display="block"
                >
                  Name
                </Text>
                <Input
                  id="name"
                  placeholder="Your name"
                  bg="#111111"
                  border="1px solid #222222"
                  borderRadius="lg"
                  fontSize="sm"
                  _placeholder={{ color: "rgba(255,255,255,0.45)" }}
                  _focus={{
                    borderColor: "#b5baff",
                    boxShadow: "0 0 0 1px rgba(181,186,255,0.5)",
                    bg: "#121212",
                  }}
                />
              </Box>

              {/* Email */}
              <Box w="full">
                <Text
                  as="label"
                  htmlFor="email"
                  fontSize="sm"
                  color="rgba(255,255,255,0.8)"
                  mb={1.5}
                  display="block"
                >
                  Email
                </Text>
                <Input
                  id="email"
                  placeholder="you@example.com"
                  type="email"
                  bg="#111111"
                  border="1px solid #222222"
                  borderRadius="lg"
                  fontSize="sm"
                  _placeholder={{ color: "rgba(255,255,255,0.45)" }}
                  _focus={{
                    borderColor: "#b5baff",
                    boxShadow: "0 0 0 1px rgba(181,186,255,0.5)",
                    bg: "#121212",
                  }}
                />
              </Box>

              {/* Message */}
              <Box w="full">
                <Text
                  as="label"
                  htmlFor="message"
                  fontSize="sm"
                  color="rgba(255,255,255,0.8)"
                  mb={1.5}
                  display="block"
                >
                  Project / message
                </Text>
                <Textarea
                  id="message"
                  placeholder="Share a bit about your project, timeline, or idea..."
                  rows={5}
                  bg="#111111"
                  border="1px solid #222222"
                  borderRadius="lg"
                  fontSize="sm"
                  _placeholder={{ color: "rgba(255,255,255,0.45)" }}
                  _focus={{
                    borderColor: "#b5baff",
                    boxShadow: "0 0 0 1px rgba(181,186,255,0.5)",
                    bg: "#121212",
                  }}
                />
              </Box>

              <Button
                mt={2}
                w="full"
                size="md"
                bg="#b5baff"
                color="#000"
                borderRadius="lg"
                fontWeight="600"
                _hover={{
                  bg: "#cac4ff",
                  transform: "translateY(-1px)",
                }}
                _active={{
                  bg: "#a19bff",
                  transform: "translateY(0)",
                }}
                transition="all 0.16s ease-out"
                type="button"
              >
                Send message
              </Button>

              <Text
                fontSize="xs"
                color="rgba(255,255,255,0.55)"
                mt={1}
                lineHeight={1.6}
              >
                This form is currently frontend-only. For production use I would
                connect it to an email service or API endpoint.
              </Text>
            </VStack>
          </GlassCard>

          {/* Card 2 — Direct contact / links */}
          <GlassCard>
            <Text
              fontSize={{ base: "xs", md: "sm" }}
              textTransform="uppercase"
              letterSpacing="0.14em"
              color="rgba(181,186,255,0.7)"
              mb={3}
            >
              Direct contact
            </Text>

            <Heading
              as="h2"
              fontSize={{ base: "lg", md: "xl" }}
              mb={3}
              color="#FFFCDD"
            >
              Prefer a direct message?
            </Heading>

            <VStack align="flex-start" spacing={3}>
              <Text fontSize="sm" color="rgba(255,255,255,0.8)">
                I&apos;m most active on GitHub and Instagram. Feel free to reach
                out if you:
              </Text>

              <VStack align="flex-start" spacing={1.5}>
                <Text fontSize="sm" color="rgba(255,255,255,0.8)">
                  • want to collaborate on a project or idea
                </Text>
                <Text fontSize="sm" color="rgba(255,255,255,0.8)">
                  • are looking for a junior fullstack dev
                </Text>
                <Text fontSize="sm" color="rgba(255,255,255,0.8)">
                  • have feedback on my content or portfolio
                </Text>
              </VStack>

              <Stack spacing={2} mt={3}>
                <ContactLink label="Email" href="mailto:your-email@example.com">
                  your-email@example.com
                </ContactLink>

                <ContactLink
                  label="GitHub"
                  href="https://github.com/your-github"
                >
                  github.com/your-github
                </ContactLink>

                <ContactLink
                  label="Instagram"
                  href="https://instagram.com/dev.robb"
                >
                  instagram.com/dev.robb
                </ContactLink>
              </Stack>

              <Text
                fontSize="xs"
                color="rgba(255,255,255,0.6)"
                mt={3}
                lineHeight={1.7}
              >
                In general I reply within a day. If it&apos;s time-sensitive,
                mention your deadline in the first message so I can be clear
                about what&apos;s realistic.
              </Text>
            </VStack>
          </GlassCard>
        </SimpleGrid>
      </VStack>
    </Box>
  );
}

/**
 * Herbruikbare glassmorphism card — matcht de About-page
 */
function GlassCard({ children }) {
  return (
    <Box
      borderRadius="2xl"
      borderWidth="1px"
      borderColor="rgba(255,255,255,0.16)"
      bg="linear-gradient(135deg, rgba(255,252,221,0.03), rgba(181,186,255,0.05))"
      boxShadow="0 18px 45px rgba(0,0,0,0.55)"
      backdropFilter="blur(18px)"
      p={{ base: 5, md: 6 }}
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      minH={{ base: "auto", md: "260px" }}
      transition="transform 0.18s ease-out, box-shadow 0.18s ease-out, border-color 0.18s ease-out, background 0.18s ease-out"
      _hover={{
        transform: "translateY(-3px)",
        boxShadow: "0 22px 60px rgba(0,0,0,0.7)",
        borderColor: "rgba(255,255,255,0.26)",
        bg: "linear-gradient(135deg, rgba(255,252,221,0.06), rgba(181,186,255,0.1))",
      }}
    >
      {children}
    </Box>
  );
}

/**
 * Kleine helper voor contact-links
 */
function ContactLink({ label, href, children }) {
  return (
    <Box>
      <Text
        fontSize="xs"
        textTransform="uppercase"
        letterSpacing="0.16em"
        color="rgba(181,186,255,0.8)"
        mb={0.5}
      >
        {label}
      </Text>
      <Link
        href={href}
        fontSize="sm"
        color="#FFFCDD"
        isExternal
        _hover={{ textDecoration: "underline", color: "#b5baff" }}
      >
        {children}
      </Link>
    </Box>
  );
}
