"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Box, Text, Tag, Card, Image, SimpleGrid } from "@chakra-ui/react";
import PageHero from "@/components/customize/PageHero";

import { api } from "@/shared/lib/api";
import { toaster } from "@/components/ui/toaster";
import { useLoadingStore } from "@/shared/store/useLoadingStore";
import { BlogPost } from "@/app/blog/[slug]/BlogDetailClient";

export default function BlogPage() {
    const { setLoading } = useLoadingStore();
    const [posts, setPosts] = useState<BlogPost[]>([]);

    const getBlogPosts = () => {
        setLoading(true);
        api.get("/blog").then((response) => {
            console.log("Blog posts:", response.data);
            setPosts(response.data);
            setLoading(false);
        }).catch(() => {
            setLoading(false);
            setPosts([]);
            toaster.create({
                title: "Failed to load blog posts",
                description: "Please try again later",
                type: "error",
            });
        });
    }

    useEffect(() => {
        getBlogPosts();
    }, []);

  return (
    <Box p={24}>
      <PageHero
        label="Blog"
        title="Nail Talk"
        subtitle="Trends, tips, and insights from the experts"
      />
      <SimpleGrid gap={2} columns={{ base: 1, sm: 2, md: 3, lg: 4 }}>
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`}>
            <Card.Root overflow="hidden" size="lg">
              <Card.Body>
                <Box position="relative">
                  <Image
                    src={post.image_url || ""}
                    alt={post.title}
                    w={320}
                    h={320}
                    objectFit="cover"
                  />
                  {post.tag && (
                    <Box position="absolute" top={4} left={4}>
                      <Tag.Root size="sm" colorPalette="cyan">
                        <Tag.Label>{post.tag}</Tag.Label>
                      </Tag.Root>
                    </Box>
                  )}
                </Box>
                <Card.Title mt="2">{post.title}</Card.Title>
                {post.summary && <Text mb={4}>{post.summary}</Text>}
              </Card.Body>
            </Card.Root>
          </Link>
        ))}
      </SimpleGrid>
    </Box>
  );
}
