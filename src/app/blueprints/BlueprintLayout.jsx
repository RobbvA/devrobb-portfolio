// src/app/blueprints/BlueprintLayout.jsx
"use client";

import { Box, Heading, Text, VStack, Badge } from "@chakra-ui/react";

export default function BlueprintLayout({ title, subtitle, status, children }) {
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
      <VStack align="flex-start" spacing={3} mb={10} maxW="720px">
        <Heading
          fontSize={{ base: "2xl", md: "3xl" }}
          letterSpacing="-0.6px"
          lineHeight="1.2"
        >
          {title}
        </Heading>

        {subtitle && (
          <Text fontSize="sm" color="gray.300" lineHeight="1.7">
            {subtitle}
          </Text>
        )}

        {status && (
          <Badge
            mt={1}
            fontSize="0.7rem"
            borderRadius="full"
            px={3}
            py={0.5}
            bg="#111"
            border="1px solid #333"
            textTransform="none"
            color="gray.200"
          >
            {status}
          </Badge>
        )}
      </VStack>

      <VStack align="flex-start" spacing={8} maxW="960px">
        {children}
      </VStack>
    </Box>
  );
}
