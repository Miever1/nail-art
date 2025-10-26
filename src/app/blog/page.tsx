import Link from "next/link";
import {
    Box,
    Text,
    Tag,
    Card,
    Image,
    SimpleGrid,
} from "@chakra-ui/react";
import PageHero from "@/components/customize/PageHero";
import { blogPosts } from "../static-data/nail-info";

export default function BlogPage() {
  return (
    <Box p={24}>
        <PageHero
            label="Blog"
            title="Nail Talk"
            subtitle="Trends, tips, and insights from the experts"
        />
        <SimpleGrid gap={2} columns={{ base: 1, sm: 2, md: 3, lg: 4 }}>
            {
                blogPosts.map((post, index) => (
                    <Link key={index} href={`/blog/${post.id}`}>
                        <Card.Root key={index} overflow="hidden" size="lg">
                            <Card.Body>
                                <Box position="relative">
                                <Image
                                    src={post.imageUrl} alt={post.title} w={320} h={320}  />
                                <Box 
                                    position="absolute" 
                                    top={4} 
                                    left={4} 
                                >
                                    <Tag.Root size="sm" colorPalette="cyan">
                                        <Tag.Label>{post.tag}</Tag.Label>
                                    </Tag.Root>
                                </Box>
                                </Box>
                                <Card.Title mt="2">{post.title}</Card.Title>
                                <Text mb={4}>{post.summary}</Text>
                            </Card.Body>
                        </Card.Root>
                    </Link>
                ))
            }
        </SimpleGrid>
    </Box>
  );
}
