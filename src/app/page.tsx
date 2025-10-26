"use client";
import React, { useRef } from "react";
import { 
  Box, 
  Flex,
  Stack, 
  Text, 
  Button, 
  Card,
  HStack,
  Badge,
  Image,
  ScrollArea
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import MasonrySection from "@/components/customize/MasonrySection";
import { videoInfo } from "./static-data/nail-info";
import { blogPosts } from "./static-data/nail-info";

export default function Home() {
  const router = useRouter();
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const statsItems = [
    {
      label: "Tutorials",
      description: "100+"
    },
    {
      label: "Experts",
      description: "200"
    },
    {
      label: "Users",
      description: "1K"
    },
    {
      label: "Blogs",
      description: "500"
    }
  ];
  return (
    <Box>
      <Stack>
        <Box
          bgImage="url('https://miever.s3.ap-east-1.amazonaws.com/static/nail-art/hand.webp')"
          bgSize="clamp(400px, 35%, 55%)"
          bgPos="95% bottom"
          h="760px"
          bgRepeat="no-repeat"
          minH={{ base: "400px", md: "520px" }}
          p={24}
          borderRadius="xl"
        >
          <Text fontSize={100} mb={32} fontWeight={600} fontFamily="cursive">
            Creativity at Your Fingertips.
          </Text>
          <Box maxW="600px">
            <Text fontSize={36} mb={16}>
              Easy lessons, expert advice, and endless designs to bring your nail art vision to life.
            </Text>
          </Box>
        </Box>
      </Stack>
      <Stack direction="row" my={6} backgroundColor="#00B1F1" overflow="hidden">
        {statsItems.map((item) => (
          <Box key={item.label} textAlign="center" flex="1" color="var(--chakra-colors-white)" py={6}>
            <Text fontSize="3xl" fontWeight="bold">{item.description}</Text>
            <Text fontSize="lg">{item.label}</Text>
          </Box>
        ))}
        </Stack>
      <Stack p="12">
        <Box>
          <Box >
            <Text textStyle="xl" fontWeight={600}>For you</Text>
          </Box>
          <Box>
            <ScrollArea.Root>
              <ScrollArea.Viewport>
                <ScrollArea.Content py="4">
                    <Flex gap="4" flexWrap="nowrap">
                      {videoInfo.slice(0, 6).map((item, index) => (
                          <Card.Root key={index} minW="400px" maxW="400px">
                            <Card.Body>
                              <video 
                                src={item.url} 
                                controls
                                ref={el => { videoRefs.current[index] = el; }}
                                onPlay={() => {
                                  videoRefs.current.forEach((v, i) => {
                                    if (i !== index && v && !v.paused) v.pause();
                                  });
                                }}
                                style={{ width: '100%', borderRadius: '8px' }} 
                              />
                              <Card.Title mt="2">{item.title}</Card.Title>
                              <Card.Description>
                                {item.description}
                              </Card.Description>
                            </Card.Body>
                          </Card.Root>
                      ))}
                  </Flex>
                </ScrollArea.Content>
              </ScrollArea.Viewport>
              <ScrollArea.Scrollbar orientation="horizontal">
                <ScrollArea.Thumb />
              </ScrollArea.Scrollbar>
              <ScrollArea.Corner />
            </ScrollArea.Root>
          </Box>
        </Box>
      </Stack>
      <Stack p="12">
        <Card.Root flexDirection="row" overflow="hidden" border="none" bg="none">
          <Image
            objectFit="cover"
            maxW="50%"
            src="https://miever.s3.ap-east-1.amazonaws.com/static/nail-art/home-page-1.png"
            alt="Caffe Latte"
          />
          <Box p={12}>
            <Card.Body>
              <Card.Title mb="2">{blogPosts[0].title}</Card.Title>
              <Card.Description>
                {blogPosts[0].summary}
              </Card.Description>
              <HStack mt="4">
                <Badge>{blogPosts[0].author}</Badge>
              </HStack>
            </Card.Body>
            <Card.Footer>
              <Button
                colorPalette="cyan"
                variant="surface"
                onClick={() => {
                  router.push(`/blog/${blogPosts[0].id}`);
                }}
              >
                View
              </Button>
            </Card.Footer>
          </Box>
        </Card.Root>
        <Card.Root flexDirection="row" overflow="hidden" border="none" bg="none">
          <Box p={12}>
            <Card.Body>
              <Card.Title mb="2">{blogPosts[1].title}</Card.Title>
              <Card.Description>
                {blogPosts[1].summary}
              </Card.Description>
              <HStack mt="4">
                <Badge>{blogPosts[1].author}</Badge>
              </HStack>
            </Card.Body>
            <Card.Footer>
              <Button
                colorPalette="cyan"
                variant="surface"
                onClick={() => {
                  router.push(`/blog/${blogPosts[1].id}`);
                }}
              >
                View
              </Button>
            </Card.Footer>
          </Box>
          <Image
            objectFit="cover"
            maxW="50%"
            src="https://miever.s3.ap-east-1.amazonaws.com/static/nail-art/home-page-2.png"
            alt="Caffe Latte"
          />
        </Card.Root>
      </Stack>
      <Stack p="12">
        <MasonrySection maxItemNum={10} />
      </Stack>
    </Box>
  );
}
