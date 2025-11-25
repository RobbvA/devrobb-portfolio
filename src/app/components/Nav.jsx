// src/app/components/Nav.jsx
"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { Box, VStack, Button, Separator, Icon } from "@chakra-ui/react";
import { FiHome, FiUser, FiImage, FiMail, FiInstagram } from "react-icons/fi";
import { motion, useReducedMotion } from "framer-motion";

export const NAV_SIDEBAR_WIDTH = "220px";
export const NAV_BOTTOM_HEIGHT = "64px";

const NAV_ITEMS = [
  { label: "Home", href: "/", icon: FiHome },
  { label: "About", href: "/about", icon: FiUser },
  { label: "Projects", href: "/gallery", icon: FiImage }, // was: Gallery
  { label: "Resources", href: "/resources", icon: FiInstagram }, // now points to /resources
];

const MotionBox = motion.create(Box);

export default function Nav() {
  const pathname = usePathname();
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  const prefersReduced = mounted ? reduced : false;

  const isActive = (href) => pathname === href;

  return (
    <>
      {/* Desktop sidebar */}
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
        {/* Logo */}
        <Box
          mb={2}
          w="100%"
          display="flex"
          justifyContent="flex-start"
          mt="-20px"
        >
          <Image
            src="/logo2.0.png"
            alt="dev.robb logo"
            width={180}
            height={80}
            style={{
              width: "180px",
              height: "auto",
            }}
          />
        </Box>

        <Separator borderColor="rgba(255,255,255,0.12)" w="85%" mb={10} />

        {/* NAV clean look, iets smallere hover-zone */}
        <VStack as="nav" w="full" align="flex-start" spacing="6px">
          {NAV_ITEMS.map(({ label, href, icon }) => {
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
                // hover iets smaller: marge rechts + kleinere breedte
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
                  ...(prefersReduced
                    ? {}
                    : {
                        transform: "translateX(4px)",
                        transition: "0.2s ease",
                      }),
                }}
              >
                {/* Icoon verbergen op desktop, zichtbaar op mobile */}
                <Icon
                  as={icon}
                  boxSize="22px"
                  aria-hidden
                  display={{ base: "inline-flex", lg: "none" }}
                />
                <Box as="span">{label}</Box>
              </Button>
            );
          })}

          <Button
            as={NextLink}
            href="/contact"
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
            bg={isActive("/contact") ? "rgba(255,255,255,0.06)" : "transparent"}
            color={isActive("/contact") ? "#ffffff" : "rgba(255,255,255,0.85)"}
            fontWeight={isActive("/contact") ? 600 : 400}
            fontSize="17px"
            letterSpacing="0.4px"
            aria-current={isActive("/contact") ? "page" : undefined}
            _hover={{
              bg: "rgba(255,255,255,0.10)",
              ...(prefersReduced
                ? {}
                : { transform: "translateX(4px)", transition: "0.2s ease" }),
            }}
          >
            <Icon
              as={FiMail}
              boxSize="22px"
              aria-hidden
              display={{ base: "inline-flex", lg: "none" }}
            />
            <Box as="span">Contact</Box>
          </Button>
        </VStack>

        <Box flex="1" />
      </Box>

      {/* Mobile bottom bar ongewijzigd */}
      <Box
        as="nav"
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
              borderColor={
                active ? "rgba(255,255,255,0.45)" : "rgba(255,255,255,0.18)"
              }
              color="rgba(255,255,255,0.9)"
              aria-label={label}
              title={label}
              aria-current={active ? "page" : undefined}
              _hover={{
                borderColor: "rgba(255,255,255,0.45)",
                ...(prefersReduced
                  ? {}
                  : {
                      transform: "translateY(-1px)",
                      transition: "0.15s ease",
                    }),
              }}
            >
              <IconCmp size={20} aria-hidden />
            </Button>
          );
        })}

        <Button
          as={NextLink}
          href="/contact"
          variant="ghost"
          rounded="full"
          w="44px"
          h="44px"
          bg="#000"
          borderWidth="1px"
          borderColor={
            isActive("/contact")
              ? "rgba(255,255,255,0.45)"
              : "rgba(255,255,255,0.18)"
          }
          color="rgba(255,255,255,0.9)"
          aria-label="Contact"
          title="Contact"
          aria-current={isActive("/contact") ? "page" : undefined}
          _hover={{
            borderColor: "rgba(255,255,255,0.45)",
            ...(prefersReduced
              ? {}
              : { transform: "translateY(-1px)", transition: "0.15s ease" }),
          }}
        >
          <FiMail size={20} aria-hidden />
        </Button>
      </Box>
    </>
  );
}
