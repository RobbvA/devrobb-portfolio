"use client";

import NextLink from "next/link";
import { Box, Container, HStack, Text, Link, Icon } from "@chakra-ui/react";
import { FiInstagram, FiGithub, FiLinkedin } from "react-icons/fi";

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/dev.robb/", icon: FiInstagram },
  { label: "GitHub", href: "https://github.com/RobbvA", icon: FiGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/robbert-van-asselt-a79426155/", icon: FiLinkedin },
];

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
          {socialLinks.map(({ label, href, icon }) => (
            <Link
              key={label}
              as={NextLink}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              display="inline-flex"
              alignItems="center"
              _hover={{ textDecoration: "none" }}
            >
              <Icon
                as={icon}
                boxSize="28px"
                color="rgba(255,255,255,0.85)"
                _hover={{ color: "#b5baff", transition: "0.2s ease" }}
              />
            </Link>
          ))}
        </HStack>
      </Container>
    </Box>
  );
}
