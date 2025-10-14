// MenuBar.tsx
"use client"
import { usePathname } from "next/navigation";
import NextLink from "next/link";
import { Box, HStack, Text } from "@chakra-ui/react";

const menuItems = [
  { label: "Tutorials", href: "/tutorials" },
  { label: "Blog", href: "/blog" },
  { label: "Inspo", href: "/inspo" },
];

export function MenuBar() {
  const pathname = usePathname();

  return (
    <HStack as="ul" gap={8} listStyleType="none" m={0} display={{ base: "none", md: "flex" }}>
      {menuItems.map((item) => (
        <Box as="li" key={item.href}>
          <NextLink href={item.href} passHref>
            <Text fontWeight={pathname.startsWith(item.href) ? "bold" : "normal"}>
              {item.label}
            </Text>
          </NextLink>
        </Box>
      ))}
    </HStack>
  );
}
