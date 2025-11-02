"use client";
import { Box, Center, Spinner } from "@chakra-ui/react";
import { useLoadingStore } from "@/shared/store/useLoadingStore";

export const GlobalLoader = () => {
  const { isLoading } = useLoadingStore();
  if (!isLoading) return null;

  return (
    <Box
      position="fixed"
      inset="0"
      zIndex={999999}
      bg="blackAlpha.400"
      backdropFilter="blur(1px)"
    >
      <Center h="100vh">
        <Spinner size="xl" color="cyan.300" />
      </Center>
    </Box>
  );
};