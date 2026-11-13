"use client";

import Image from "next/image";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { Box, VStack, Button, Separator } from "@chakra-ui/react";
import { FiHome, FiImage, FiUser, FiMail } from "react-icons/fi";

export const NAV_SIDEBAR_WIDTH = "220px";
export const NAV_BOTTOM_HEIGHT = "64px";

const NAV_ITEMS = [
  { label: "Home", href: "/", icon: FiHome },
  { label: "Projects", href: "/projects", icon: FiImage },
  { label: "About", href: "/about", icon: FiUser },
  { label: "Contact", href: "/contact", icon: FiMail },
];

export default function Nav() {
  const pathname = usePathname();
  const isActive = (href) => pathname === href;

  return (
    <>
      <Box
        as="aside"
        role="navigation"
        aria-label="Primary"
        position="fixed"
        left={0}
        top={0}
        h="100dvh"
        w={NAV_SIDEBAR_WIDTH}
        display={{ base: "none", lg: "flex" }}
        flexDir="column"
        alignItems="flex-start"
        bg="#000"
        borderRightWidth="1px"
        borderColor="rgba(255,255,255,0.12)"
        pt={8}
        pb={8}
        pl={8}
        zIndex={50}
        fontFamily="'Roboto', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
      >
        <Box mb={2} w="100%" display="flex" justifyContent="flex-start" mt="-20px">
          <Image
            src="/logo2.0.png"
            alt="dev.robb logo"
            width={180}
            height={80}
            style={{ width: "180px", height: "auto" }}
          />
        </Box>
        <Separator borderColor="rgba(255,255,255,0.12)" w="85%" mb={10} />
        <VStack as="nav" w="full" align="flex-start" spacing="6px">
          {NAV_ITEMS.map(({ label, href }) => {
            const active = isActive(href);
            return (
              <Button
                key={href}
                as={NextLink}
                href={href}
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
                gap="26px"
                variant="ghost"
                rounded="md"
                w="calc(100% - 8px)"
                ml="2px"
                px={2}
                py={4}
                bg={active ? "rgba(255,255,255,0.06)" : "transparent"}
                color={active ? "#ffffff" : "rgba(255,255,255,0.85)"}
                fontWeight={active ? 600 : 400}
                fontSize="17px"
                letterSpacing="0.4px"
                aria-current={active ? "page" : undefined}
                _hover={{
                  bg: "rgba(255,255,255,0.10)",
                  transform: "translateX(4px)",
                  transition: "0.2s ease",
                }}
              >
                <Box as="span">{label}</Box>
              </Button>
            );
          })}
        </VStack>
        <Box flex="1" />
      </Box>

      <Box
        as="nav"
        aria-label="Mobile primary"
        position="fixed"
        bottom={0}
        left={0}
        right={0}
        h={NAV_BOTTOM_HEIGHT}
        display={{ base: "flex", lg: "none" }}
        alignItems="center"
        justifyContent="space-around"
        bg="#000"
        borderTopWidth="1px"
        borderColor="rgba(255,255,255,0.12)"
        zIndex={100}
        pb="env(safe-area-inset-bottom)"
      >
        {NAV_ITEMS.map(({ label, href, icon: IconCmp }) => {
          const active = isActive(href);
          return (
            <Button
              key={href}
              as={NextLink}
              href={href}
              variant="ghost"
              rounded="full"
              w="44px"
              h="44px"
              bg="#000"
              borderWidth="1px"
              borderColor={active ? "rgba(255,255,255,0.45)" : "rgba(255,255,255,0.18)"}
              color="rgba(255,255,255,0.9)"
              aria-label={label}
              title={label}
              aria-current={active ? "page" : undefined}
              _hover={{ borderColor: "rgba(255,255,255,0.45)" }}
            >
              <IconCmp size={20} aria-hidden />
            </Button>
          );
        })}
      </Box>
    </>
  );
}
