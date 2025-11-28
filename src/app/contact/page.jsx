// src/app/contact/page.jsx
"use client";

import React, { useState } from "react";
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
  const [status, setStatus] = useState(null); // "success" | "error" | "submitting" | null

  async function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
      setStatus("submitting");

      await fetch("https://formspree.io/f/mnnkwqkg", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
    }
  }

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
                Reach out for junior roles, freelance work or a small collab.
              </Text>

              <Text
                fontSize={{ base: "sm", md: "md" }}
                color="rgba(255,255,255,0.7)"
                maxW="40rem"
                lineHeight={1.8}
              >
                I like clear communication, realistic scope and simple planning.
                If that matches how you work, send me a message and I&apos;ll
                get back to you soon.
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
              mb={3}
              color="#FFFCDD"
            >
              Send a short message.
            </Heading>

            <Text
              fontSize="sm"
              color="rgba(255,255,255,0.78)"
              mb={4}
              lineHeight={1.7}
            >
              A few lines about your idea, project or question is enough.
              I&apos;ll reply by email.
            </Text>

            {/* Form zonder action/method → we gebruiken handleSubmit */}
            <Box as="form" onSubmit={handleSubmit} w="full">
              {/* Hidden subject voor in je inbox */}
              <input
                type="hidden"
                name="_subject"
                value="New message from dev.robb portfolio"
              />

              <VStack align="flex-start" spacing={4} w="full">
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
                    name="name"
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
                    required
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
                    name="email"
                    type="email"
                    placeholder="you@example.com"
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
                    required
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
                    name="message"
                    placeholder="Share a bit about your project, idea, or question..."
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
                    required
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
                    bg: status === "submitting" ? "#b5baff" : "#cac4ff",
                    transform:
                      status === "submitting" ? "none" : "translateY(-1px)",
                  }}
                  _active={{
                    bg: "#a19bff",
                    transform: "translateY(0)",
                  }}
                  transition="all 0.16s ease-out"
                  type="submit"
                  isDisabled={status === "submitting"}
                >
                  {status === "submitting" ? "Sending..." : "Send message"}
                </Button>

                {/* Status feedback onder het formulier */}
                {status === "success" && (
                  <Text
                    fontSize="xs"
                    color="rgba(144,238,144,0.9)"
                    mt={1}
                    lineHeight={1.6}
                  >
                    Thanks for your message — I’ll reach out soon.
                  </Text>
                )}

                {status === "error" && (
                  <Text
                    fontSize="xs"
                    color="rgba(255,120,120,0.9)"
                    mt={1}
                    lineHeight={1.6}
                  >
                    Something went wrong while sending your message. Please try
                    again later.
                  </Text>
                )}

                {status === null && (
                  <Text
                    fontSize="xs"
                    color="rgba(255,255,255,0.55)"
                    mt={1}
                    lineHeight={1.6}
                  >
                    This form uses Formspree to send your message directly to my
                    inbox.
                  </Text>
                )}
              </VStack>
            </Box>
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
              Other ways to reach me
            </Text>

            <Heading
              as="h2"
              fontSize={{ base: "lg", md: "xl" }}
              mb={3}
              color="#FFFCDD"
            >
              Pick whatever channel fits best.
            </Heading>

            <VStack align="flex-start" spacing={3}>
              <Text fontSize="sm" color="rgba(255,255,255,0.8)">
                You can contact me directly if you prefer not to use the form:
              </Text>

              <VStack align="flex-start" spacing={2}>
                <Text fontSize="sm" color="rgba(255,255,255,0.8)">
                  • Email for jobs, collabs or project ideas.
                </Text>
                <Text fontSize="sm" color="rgba(255,255,255,0.8)">
                  • GitHub if you want to look at my code or open an issue.
                </Text>
                <Text fontSize="sm" color="rgba(255,255,255,0.8)">
                  • Instagram for quick questions or content-related chat.
                </Text>
              </VStack>

              <Stack spacing={2} mt={3}>
                <ContactLink
                  label="Email"
                  href="mailto:robbertasselt@gmail.com"
                >
                  robbertasselt@gmail.com
                </ContactLink>

                <ContactLink label="GitHub" href="https://github.com/dev-robb">
                  github.com/dev-robb
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
                I usually respond within a day. If something is time-sensitive,
                it helps if you mention your timeline in the first message.
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
