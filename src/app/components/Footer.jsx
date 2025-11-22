// src/app/components/Footer.jsx
"use client";

import NextLink from "next/link";
import {
  Box,
  Container,
  Flex,
  HStack,
  Text,
  Link,
  Icon,
} from "@chakra-ui/react";
import { FiInstagram, FiGithub, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box
      as="footer"
      role="contentinfo"
      bg="#0d0d0d"
      color="rgba(255,255,255,0.85)"
      borderTop="1px solid rgba(255,255,255,0.12)"
      mt={24}
      py={{ base: 8, md: 10 }}
    >
      <Container
        maxW="6xl"
        px={{ base: 4, md: 6 }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap={6}
      >
        <Text
          fontSize="sm"
          color="rgba(255,255,255,0.72)"
          letterSpacing="0.6px"
          textAlign="center"
        >
          © {year} — Robbert van Asselt · Fullstack Developer
        </Text>

        <HStack gap="80px" mt={6}>
          <Link
            as={NextLink}
            href="https://instagram.com/dev.robb"
            aria-label="Instagram"
            title="Instagram"
            display="inline-flex"
            alignItems="center"
            _hover={{ textDecoration: "none" }}
          >
            <Icon
              as={FiInstagram}
              boxSize="28px"
              color="rgba(255,255,255,0.85)"
              _hover={{ color: "#b5baff", transition: "0.2s ease" }}
            />
          </Link>

          <Link
            as={NextLink}
            href="https://github.com/RobbvA" // 🔹 hier aangepast
            aria-label="GitHub"
            title="GitHub"
            display="inline-flex"
            alignItems="center"
            _hover={{ textDecoration: "none" }}
          >
            <Icon
              as={FiGithub}
              boxSize="28px"
              color="rgba(255,255,255,0.85)"
              _hover={{ color: "#b5baff", transition: "0.2s ease" }}
            />
          </Link>

          <Link
            as={NextLink}
            href="https://www.linkedin.com/in/dev-robb"
            aria-label="LinkedIn"
            title="LinkedIn"
            display="inline-flex"
            alignItems="center"
            _hover={{ textDecoration: "none" }}
          >
            <Icon
              as={FiLinkedin}
              boxSize="28px"
              color="rgba(255,255,255,0.85)"
              _hover={{ color: "#b5baff", transition: "0.2s ease" }}
            />
          </Link>
        </HStack>
      </Container>
    </Box>
  );
}
