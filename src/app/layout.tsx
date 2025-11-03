import type { Metadata } from "next";
import NextImage from "next/image";
import NextLink from "next/link";
import { Separator } from "@chakra-ui/react"
import { Geist, Geist_Mono } from "next/font/google";
import { Provider } from "@/components/ui/provider";
import { ColorModeButton } from "@/components/ui/color-mode";
import ReactQueryProvider from "@/shared/providers/ReactQueryProvider";
import { Box, Flex, HStack, Text, Container, Field, Input, Group, Button } from "@chakra-ui/react";

import { MenuBar } from "./MenuBar";
import { Toaster } from "@/components/ui/toaster";
import { GlobalLoader } from "@/components/ui/global-loader";
import LoginDialog from "@/components/customize/LoginDialog";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nail Art",
  description: "Your Ultimate Nail Art Resource - Tutorials, Inspiration, and Expert Tips",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Provider>
          <ReactQueryProvider>
            <Box as="header">
              <Container>
                <Flex as="nav" aria-label="Main" h="60px" align="center" justify="space-between">
                  <Box display="flex" alignItems="center" gap={16}>
                    <NextLink href="/" aria-label="Go to home" passHref>
                      <HStack gap={3}>
                        <Box pos="relative" h="40px" w="40px" borderRadius="50%" overflow="hidden">
                          <NextImage
                            src="https://miever.s3.ap-east-1.amazonaws.com/static/nail-art/logo.webp"
                            alt="Nail Art"
                            fill
                            sizes="40px"
                            priority
                            unoptimized
                          />
                        </Box>
                        <Text fontWeight="semibold" display={{ base: "none", md: "block" }}>
                          Nail Art
                        </Text>
                      </HStack>
                    </NextLink>
                    <MenuBar />
                  </Box>
                  <Box>
                    <ColorModeButton />
                    <LoginDialog />
                  </Box>
                </Flex>
              </Container>
              <Separator />
            </Box>

            <Box as="main">
              {children}
            </Box>

            <Box as="footer" mt="20">
              <Separator />
                <Flex justify="space-between" px={24} py={12}>
                  <Flex align="center" gap={3}>
                    <Box pos="relative" h="40px" w="40px" borderRadius="50%" overflow="hidden">
                      <NextImage
                        src="https://miever.s3.ap-east-1.amazonaws.com/static/nail-art/logo.webp"
                        alt="Nail Art"
                        fill
                        sizes="40px"
                        priority
                        unoptimized
                      />
                    </Box>
                    <Text fontWeight="semibold" display={{ base: "none", md: "block" }}>
                      Nail Art
                    </Text>
                  </Flex>
                  <Box>
                    <Field.Root>
                      <Field.Label htmlFor="email">Join the newsletter</Field.Label>
                      <Group w="full" gap={4} maxW="sm">
                        <Input flex="1" placeholder="Enter your email" />
                        <Button colorPalette="cyan" variant="surface">
                          Submit
                        </Button>
                      </Group>
                    </Field.Root>
                  </Box>
                </Flex>
              <Separator />
              <Container maxW="6xl" px={{ base: 4, md: 6 }} py="8">
                <Text fontSize="sm" color="gray.500" textAlign="center">
                  &copy; {new Date().getFullYear()} Nail Art. All rights reserved.
                </Text>
              </Container>
            </Box>
            <Toaster />
            <GlobalLoader />
          </ReactQueryProvider>
        </Provider>
      </body>
    </html>
  );
}
