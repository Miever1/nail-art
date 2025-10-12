import { 
  Box, 
  Flex,
  Stack, 
  Heading, 
  Text, 
  Button, 
  Card,
  HStack,
  Badge,
  Image,
  ScrollArea
} from "@chakra-ui/react";
import MasonrySection from "@/components/customize/MasonrySection";


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
      <Stack>
        <Box p="24">
          <Text fontSize={100} mb={32} fontWeight={600} fontFamily="cursive">
            Creativity at Your Fingertips.
          </Text>
          <Box display="flex">
            <Box minW="360px">
              <Text fontSize={36} mb={64}>
                Easy lessons, expert advice, and endless designs to bring your nail art vision to life.
              </Text>
              <Button colorPalette="cyan" variant="surface">
                View More
              </Button>
            </Box>
            <Image src="https://miever.s3.ap-east-1.amazonaws.com/static/nail-art/hand.webp" alt="Nail Art" minW="360px"/>
          </Box>
        </Box>
        
      </Stack>
      <Stack direction="row" backgroundColor="#00B1F1">
        {statsItems.map((item) => (
          <Box key={item.label} textAlign="center" flex="1" color={"white"} py={6}>
            <Text fontSize="3xl" fontWeight="bold">{item.description}</Text>
            <Text fontSize="lg">{item.label}</Text>
          </Box>
        ))}
        </Stack>
      <Stack p="24">
        <Box>
          <Box >
            <Text textStyle="xl">For you</Text>
          </Box>
          <Box>
            <ScrollArea.Root>
              <ScrollArea.Viewport>
                <ScrollArea.Content py="4">
                    <Flex gap="4" flexWrap="nowrap">
                      {Array.from({ length: 6 }).map((_, index) => (
                          <Card.Root key={index} minW="400px" maxW="400px">
                            <Card.Body>
                              <Image src="https://miever.s3.ap-east-1.amazonaws.com/static/nail-art/hand.webp" alt="Nail Art" width={400} height={300} />
                              <Card.Title mt="2">Nue Camp</Card.Title>
                              <Card.Description>
                                This is the card body. Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Curabitur nec odio vel dui euismod fermentum.
                                Curabitur nec odio vel dui euismod fermentum.
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
      <Stack p="24">
        <Card.Root flexDirection="row" overflow="hidden" border="none" bg="none">
          <Image
            objectFit="cover"
            maxW="50%"
            src="https://miever.s3.ap-east-1.amazonaws.com/static/nail-art/home-page-1.png"
            alt="Caffe Latte"
          />
          <Box p={12}>
            <Card.Body>
              <Card.Title mb="2">Top Techniques of 2025</Card.Title>
              <Card.Description>
                Discover the hottest nail art techniques taking 2025 by storm, from futuristic chrome finishes to playful 3D accents. This year’s trends balance bold creativity with simple, at-home-friendly methods that anyone can try.
              </Card.Description>
              <HStack mt="4">
                <Badge>Sabrina Smith</Badge>
              </HStack>
            </Card.Body>
            <Card.Footer>
              <Button>View</Button>
            </Card.Footer>
          </Box>
        </Card.Root>
        <Card.Root flexDirection="row" overflow="hidden" border="none" bg="none">
          <Box p={12}>
            <Card.Body>
              <Card.Title mb="2">Caring for your Cuticles</Card.Title>
              <Card.Description>
                Healthy cuticles are the foundation of strong, beautiful nails, yet they’re often overlooked in nail care routines. In this post, we’ll share why cuticle care matters and the simple steps you can take to protect them.
              </Card.Description>
              <HStack mt="4">
                <Badge>Sabrina Smith</Badge>
              </HStack>
            </Card.Body>
            <Card.Footer>
              <Button>View</Button>
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
      <Stack p="24">
        <MasonrySection />
      </Stack>
    </Box>
  );
}
