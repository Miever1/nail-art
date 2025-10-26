"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Flex,
  Text,
  Image,
  Heading,
  IconButton,
  Separator,
  Textarea,
  Button,
  Stack,
  HStack,
  Avatar,
} from "@chakra-ui/react";
import { FaArrowLeft, FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";

export interface BlogPost {
  id: string;
  title: string;
  author?: string;
  tag?: string;
  summary: string;
  subtitle?: string;
  imageUrl: string;
  content?: string;
}

export type Comment = { id: string; name: string; text: string };

export default function BlogDetailClient({ post }: { post: BlogPost }) {
  const router = useRouter();
  const [liked, setLiked] = useState(false);

  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([
    {
      id: "1",
      name: "Samantha R.",
      email: "samantha@example.com",
      avatar: "https://i.pravatar.cc/150?img=47",
      text:
        "Love the chrome trend! I've been experimenting with silver shades and they instantly make my nails feel futuristic.",
    },
    {
      id: "2",
      name: "Jade M.",
      email: "jade@example.com",
      avatar: "https://i.pravatar.cc/150?img=58",
      text:
        "So glad you mentioned nail health—finally trends that look good AND keep nails strong. Can’t wait to try breathable polish!",
    },
  ]);


  const addComment = () => {
    const text = commentText.trim();
    if (!text) return;
    setComments((prev) => [
      ...prev,
      {
        id: String(prev.length + 1),
        name: "You",
        email: "grace@aalto.fi",
        avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04",
        text,
      },
    ]);
    setCommentText("");
  };

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

      <Box textAlign="center" mb={8}>
        {post.author && (
          <Text fontSize="sm" color="gray.500" mb={1}>
            {post.author}
          </Text>
        )}
        <Heading as="h1" size="2xl" mb={2}>
          {post.title}
        </Heading>
        {post.subtitle && (
          <Text fontSize="md" color="gray.600" maxW="700px" mx="auto">
            {post.subtitle}
          </Text>
        )}
      </Box>

      <Box mb={10}>
        <Image
          src={post.imageUrl}
          alt={post.title}
          w="100%"
          h="auto"
          borderRadius="xl"
          objectFit="cover"
          shadow="md"
        />
      </Box>

      <Text
        whiteSpace="pre-line"
        lineHeight="taller"
        fontSize="md"
        color="gray.700"
      >
        {post.content ?? "Coming soon..."}
      </Text>

      <Separator my="12" />
      <Heading as="h2" size="md" mt={12} mb={4}>
        Comments
      </Heading>

      <Flex
        gap={4}
        align={{ base: "stretch", md: "flex-start" }}
        direction={{ base: "column", md: "row" }}
        mb={6}
      >
        <Textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Add a comment…"
          flex="1"
          minH="120px"
          borderRadius="lg"
        />
        <Button
          onClick={addComment}
          alignSelf={{ base: "flex-end", md: "auto" }}
          bg="cyan.300"
          color="black"
          borderRadius="full"
          px={6}
          _hover={{ bg: "cyan.400" }}
        >
          Add comment
        </Button>
      </Flex>

      <Stack >
        {comments.map((user) => (
          <Box key={user.id}>
            <HStack align="flex-start" gap="4">
              <Avatar.Root size="md">
                <Avatar.Fallback name={user.name} />
                <Avatar.Image src={user.avatar} />
              </Avatar.Root>
              <Stack gap="1" flex="1">
                <Text fontWeight="medium">{user.name}</Text>
                {user.email && (
                  <Text color="gray.500" fontSize="sm">{user.email}</Text>
                )}
                <Text mt="1" color="gray.700">{user.text}</Text>
              </Stack>
            </HStack>
            <Box as="hr" borderColor="gray.200" mt={4} />
          </Box>
        ))}
      </Stack>
    </Box>
  );
}