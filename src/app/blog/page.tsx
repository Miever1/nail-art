import {
    Box,
    Text,
    Tag,
    Card,
    Image,
    SimpleGrid,
    Float
} from "@chakra-ui/react";
import PageHero from "@/components/customize/PageHero";

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
                Array.from({ length: 6 }).map((_, index) => (
                    <Card.Root key={index} overflow="hidden" size="lg">
                        <Card.Body>
                            <Box position="relative">
                                <Image src="https://miever.s3.ap-east-1.amazonaws.com/static/nail-art/hand.webp" alt="Nail Art" width={400} height={300} />
                                <Float right="2" top="-4">
                                    <Tag.Root size="sm" colorPalette="cyan">
                                        <Tag.Label>Category</Tag.Label>
                                    </Tag.Root>
                                </Float>
                            </Box>
                            <Card.Title mt="2">Nue Camp</Card.Title>
                            <Text mb={4}>This is a brief summary of the blog post content. It provides an overview of what the post is about.</Text>
                        </Card.Body>
                    </Card.Root>
                ))
            }
        </SimpleGrid>
    </Box>
  );
}
