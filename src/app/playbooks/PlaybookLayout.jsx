"use client";

import { Box, Heading, Text, VStack } from "@chakra-ui/react";

export default function PlaybookLayout({ title, subtitle, children }) {
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
      <Box maxW="900px" mx="auto">
        <VStack align="flex-start" spacing={6}>
          <Box>
            <Heading
              fontSize={{ base: "2xl", md: "3xl" }}
              mb={2}
              letterSpacing="-0.5px"
            >
              {title}
            </Heading>
            {subtitle && (
              <Text fontSize="sm" color="gray.400">
                {subtitle}
              </Text>
            )}
          </Box>

          {children}
        </VStack>
      </Box>
    </Box>
  );
}
