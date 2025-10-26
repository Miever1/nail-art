"use client";
import React, { useState } from "react";
import {
    Box,
    Heading,
    Flex,
    IconButton,
    Tabs,
    Text,
    SimpleGrid
} from "@chakra-ui/react";
import { FaArrowLeft, FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";
import { useRouter } from "next/navigation";
import TutorialsList from "../tutorials-list";

import { TutorialVideo } from "../../static-data/nail-info";

export default function TutorialDetailClient({ video }: { video: TutorialVideo }) {
  const [liked, setLiked] = useState(false);
  const router = useRouter();

  return (
    <Box maxW="1000px" mx="auto" px={{ base: 4, md: 8 }} py={{ base: 12, md: 20 }}>
      <Flex align="center" justify="space-between" mb={6}>
        <IconButton
          aria-label="Back"
          bg="none"
          size="lg"
          color="black"
          onClick={() => router.back()}
        >
          <FaArrowLeft />
        </IconButton>
        <Box
            bg="teal.100"
            color="black"
            borderRadius="full"
            w={8}
            h={8}
            display="flex"
            alignItems="center"
            justifyContent="center"
            boxShadow="md"
            cursor="pointer"
            onClick={() => setLiked(!liked)}
        >
            {liked ? <FaThumbsUp /> : <FaRegThumbsUp />}
        </Box>
      </Flex>
      <Box mb={8}>
        <video
          src={video.url}
          controls
          style={{
            width: "100%",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          }}
        />
      <Heading my={6} size="4xl" >{video.title}</Heading>
      <Tabs.Root defaultValue="summary">
        <Tabs.List>
            <Tabs.Trigger value="summary">Summary</Tabs.Trigger>
            <Tabs.Trigger value="materials">Materials</Tabs.Trigger>
            <Tabs.Trigger value="transcript">Transcript</Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="summary">
            <Box>
                <Box whiteSpace="pre-line" color="gray.700">{video.summary}</Box>
            </Box>
        </Tabs.Content>

        <Tabs.Content value="materials">
            <Box p={4}>
            <Heading as="h3" size="sm" mb={2}>What You Will Need</Heading>
            <ul>
                {video.materials?.map((item: string, index: number) => (
                <li key={index}>
                    <Text color="gray.700">• {item}</Text>
                </li>
                ))}
            </ul>
            </Box>
        </Tabs.Content>

        <Tabs.Content value="transcript">
            <Box p={4}>
            <Heading as="h3" size="sm" mb={2}>Full Transcript</Heading>
            <Box whiteSpace="pre-line" color="gray.700">{video.transcript}</Box>
            </Box>
        </Tabs.Content>
        </Tabs.Root>
      </Box>

      <Heading as="h2" size="md" mt={12} mb={4}>
        Related Videos
      </Heading>
        <SimpleGrid columns={2}>
            <TutorialsList
                relatedNumbers={2}
            />
        </SimpleGrid>
    </Box>
  );
}