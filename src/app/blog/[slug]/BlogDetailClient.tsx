"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Flex,
  Text,
  Image,
  Heading,
  IconButton,
  Textarea,
  Button,
  Stack,
  HStack,
  Avatar,
  Separator,
} from "@chakra-ui/react";
import { api } from "@/shared/lib/api";
import { FaArrowLeft, FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";
import { toaster } from "@/components/ui/toaster";
import { useCurrentUser } from "@/shared/lib/useCurrentUser";

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  author?: string;
  tag?: string;
  summary?: string;
  subtitle?: string;
  image_url?: string;
  content?: string;
  likes?: number;
}

interface CommentType {
  id: number;
  content: string;
  created_at: string;
  author?: { id: number; name: string; email?: string };
  replies?: CommentType[];
}

function useDebouncedCallback<T extends (...args: any[]) => void>(fn: T, delay = 400) {
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, []);

  return (...args: Parameters<T>) => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => fn(...args), delay);
  };
}

export default function BlogDetailClient({ post }: { post: BlogPost }) {
  const slug = post.slug;
  const router = useRouter();
  const { data: currentUser } = useCurrentUser();
  const currentUserId = currentUser?.id;
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [commentLoading, setCommentLoading] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likePending, setLikePending] = useState(false);
  const [likes, setLikes] = useState<number>(post.likes ?? 0);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState<CommentType[]>([]);

  const likeKey = useMemo(
    () => `liked:${slug}:${currentUserId ?? "guest"}`,
    [slug, currentUserId]
  );

  useEffect(() => {
    void getComments();
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(likeKey);
      setLiked(saved === "1");
    }
  }, [slug, likeKey]);

  const getComments = async () => {
    try {
      const res = await api.get(`/blog/${slug}/comments`);
      setComments(res.data.data || []);
    } catch (err) {
      console.error("Failed to fetch comments:", err);
    }
  };

  const addComment = async () => {
    const text = commentText.trim();
    if (!text) return;
    setCommentLoading(true);

    try {
      await api.post(`/blog/${slug}/comments`, { content: text });
      setCommentText("");
      await getComments();
    } catch (err) {
      console.error("Failed to post comment:", err);
      toaster.create({ title: "Post failed", type: "error" });
    } finally {
      setCommentLoading(false);
    }
  };

  const deleteComment = async (commentId: number) => {
    setDeletingId(commentId);
    try {
      await api.delete(`/blog/comments/${commentId}`);
      setComments((prev) => prev.filter((c) => c.id !== commentId));
      toaster.create({ title: "Deleted", type: "success", duration: 1800 });
    } catch (err) {
      console.error("Failed to delete comment:", err);
      toaster.create({ title: "Delete failed", type: "error", duration: 2000 });
    } finally {
      setDeletingId(null);
    }
  };

  const likeToggleCore = async () => {
    if (likePending) return;
    if (!currentUserId) {
      toaster.create({ title: "Please sign in to like", type: "warning" });
      return;
    }
    setLikePending(true);

    try {
      const path = liked ? `/blog/${slug}/unlike` : `/blog/${slug}/like`;
      const res = await api.patch(path);

      setLiked(res.data.liked);
      setLikes(res.data.likes);

      if (typeof window !== "undefined") {
        if (res.data.liked) localStorage.setItem(likeKey, "1");
        else localStorage.removeItem(likeKey);
      }

      if (res.data.message === "Already liked") {
        setLiked(true);
        if (typeof window !== "undefined") localStorage.setItem(likeKey, "1");
      }
    } catch (e: any) {
      console.error("Like toggle failed", e);
      const msg =
        e?.response?.status === 403
          ? "Please sign in to like"
          : "Action failed";
      toaster.create({ title: msg, type: "warning" });
    } finally {
      setLikePending(false);
    }
  };

  const handleLikeToggle = useDebouncedCallback(likeToggleCore, 400);

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

        <Flex align="center" gap={2}>
          <Box
            aria-label={liked ? "Unlike" : "Like"}
            title={liked ? "Unlike" : "Like"}
            bg={liked ? "teal.300" : "teal.100"}
            color="black"
            borderRadius="full"
            w={8}
            h={8}
            display="flex"
            alignItems="center"
            justifyContent="center"
            boxShadow="md"
            cursor={likePending ? "not-allowed" : "pointer"}
            opacity={likePending ? 0.6 : 1}
            onClick={handleLikeToggle}
          >
            {liked ? <FaThumbsUp /> : <FaRegThumbsUp />}
          </Box>
          <Text fontSize="sm" color="gray.600">{likes}</Text>
        </Flex>
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
          src={post.image_url || ""}
          alt={post.title}
          w="100%"
          h="auto"
          borderRadius="xl"
          objectFit="cover"
          shadow="md"
        />
      </Box>

      <Text whiteSpace="pre-line" lineHeight="taller" fontSize="md" color="gray.700">
        {post.content ?? "Coming soon..."}
      </Text>

      <Separator my="12" />

      <Heading as="h2" size="md" mb={4}>
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
          disabled={!commentText.trim() || !currentUserId}
          bg="cyan.300"
          color="black"
          borderRadius="full"
          px={6}
          _hover={{ bg: "cyan.400" }}
          loading={commentLoading}
        >
          Add Comment
        </Button>
      </Flex>

      <Stack>
        {comments.length === 0 ? (
          <Text color="gray.500">No comments yet.</Text>
        ) : (
          comments.map((comment, index) => (
            <Box key={comment.id}>
              <HStack align="center" justify="space-between">
                <HStack align="flex-start" gap="4">
                  <Avatar.Root size="md">
                    <Avatar.Fallback name={comment.author?.name || "User"} />
                  </Avatar.Root>

                  <Stack flex="1" gap="1">
                    <Text fontWeight="medium">
                      {comment.author?.name || "Anonymous"}
                    </Text>
                    <Text fontSize="sm" color="gray.500">
                      {new Date(comment.created_at).toLocaleString()}
                    </Text>
                    <Text color="gray.700">{comment.content}</Text>

                    {comment.replies?.length ? (
                      <Stack pl={6} mt={3} borderLeft="2px solid #e2e8f0" gap="3">
                        {comment.replies.map((reply) => (
                          <Box key={reply.id}>
                            <Text fontWeight="medium" fontSize="sm">
                              {reply.author?.name || "Anonymous"}
                            </Text>
                            <Text fontSize="sm" color="gray.600">
                              {reply.content}
                            </Text>
                          </Box>
                        ))}
                      </Stack>
                    ) : null}
                  </Stack>
                </HStack>

                {currentUserId && comment.author?.id === currentUserId && (
                  <Button
                    size="sm"
                    key={`delete-btn-${index}`}
                    colorPalette="red"
                    onClick={() => deleteComment(comment.id)}
                    alignSelf="center"
                    loading={deletingId === comment.id}
                  >
                    Delete
                  </Button>
                )}
              </HStack>
              <Separator mt="4" />
            </Box>
          ))
        )}
      </Stack>
    </Box>
  );
}