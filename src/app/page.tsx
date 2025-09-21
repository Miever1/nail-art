import Image from "next/image";
import { Box, Stack, Heading, Text, Button } from "@chakra-ui/react";

export default function Home() {
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
      <Stack h="600px" position="relative">
       <Box p="100px 0 300px 100px">
        <Heading size="5xl">
          Creativity at Your Fingertips.
        </Heading>
        <Text>
          Easy lessons, expert advice, and endless designs to bring your nail art vision to life.
        </Text>
        <Button colorPalette="cyan" variant="surface">
          View More
        </Button>
        <Box position="absolute" bottom="100px" right="0" zIndex={-1}>
          <Image src="https://miever.s3.ap-east-1.amazonaws.com/static/nail-art/hand.webp" alt="Nail Art" width={480} height={360} unoptimized />
        </Box>
       </Box>

       <Stack direction="row" backgroundColor="#00B1F1">
        {statsItems.map((item) => (
          <Box key={item.label} textAlign="center" flex="1" color={"white"} py={6}>
            <Text fontSize="3xl" fontWeight="bold">{item.description}</Text>
            <Text fontSize="lg">{item.label}</Text>
          </Box>
        ))}
       </Stack>
      </Stack>
      <Stack>
        Stack 2
      </Stack>
      <Stack>
        Stack 3
      </Stack>
    </Box>
  );
}
