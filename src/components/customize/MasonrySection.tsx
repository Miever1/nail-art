"use client";
import React, { FunctionComponent, useState } from "react";
import dynamic from "next/dynamic";
import { Box, Image, Float, Drawer, Portal, Avatar, Text, HStack, Stack, Heading, SimpleGrid } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const Masonry = dynamic(() => import('react-layout-masonry'), { ssr: false });

interface MasonrySectionProps {
    reactive?: boolean;
}

const MasonrySection: FunctionComponent<MasonrySectionProps> = ({
    reactive = false
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeInfo, setActiveInfo] = useState<{ like: boolean;  } | null>(null);
    console.log(activeInfo);
    return (
        <Box my={16}>
            <Masonry columns={{ 640: 1, 768: 2, 1024: 3, 1280: 5 }} gap={16}>
            {Array.from({ length: 9 }).map((_, index) => (
                <Box key={index} mb="4" position="relative">
                    <Image
                        src="https://miever.s3.ap-east-1.amazonaws.com/static/nail-art/hand.webp"
                        alt="Nail Art"
                        onClick={() => {
                            setIsOpen(true);
                            setActiveInfo({ 
                                like: index % 2 === 0
                            });
                        }}
                    />
                    {
                        reactive ? (
                            <Float right="2" top="-4">
                                <Box borderRadius="50%" w={8} h={8} bg="var(--mix-background)" alignItems="center" justifyContent="center" display="flex" boxShadow="md" cursor="pointer">
                                    {index % 2 === 0 ? <FaHeart /> : <FaRegHeart />}
                                </Box>
                            </Float>
                        ) : null
                    }
                </Box>
            ))}
            </Masonry>
            <Drawer.Root
                size="xl"
                open={isOpen}
                onOpenChange={(e) => {
                    setIsOpen(e.open);
                    if (!e.open) {
                        setActiveInfo(null);
                    }
                }}
            >
                <Portal>
                    <Drawer.Backdrop />
                    <Drawer.Positioner>
                        <Drawer.Content>
                            <Drawer.Header>
                               <HStack gap="4">
                                    <Avatar.Root>
                                        <Avatar.Fallback name="Sarah Williams" />
                                        <Avatar.Image src="https://i.pravatar.cc/300?u=po" />
                                    </Avatar.Root>
                                    <Stack gap="0">
                                        <Text fontWeight="medium">Sarah Williams</Text>
                                        <Text color="fg.muted" textStyle="sm">
                                            Creative Nail Artist
                                        </Text>
                                    </Stack>
                                </HStack>
                            </Drawer.Header>
                            <Drawer.Body>
                                <Box mb="4" position="relative">
                                    <Image
                                        src="https://miever.s3.ap-east-1.amazonaws.com/static/nail-art/hand.webp"
                                        alt="Nail Art"
                                        onClick={() => {
                                            setIsOpen(true);
                                        }}
                                    />
                                    <Float right="2">
                                        <Box borderRadius="50%" w={8} h={8} bg="var(--mix-background)" alignItems="center" justifyContent="center" display="flex" boxShadow="md" cursor="pointer">
                                            {activeInfo?.like ? <FaHeart /> : <FaRegHeart />}
                                        </Box>
                                    </Float>
                                </Box>
                                <Heading mb="4" size="2xl">
                                    Related Inspo
                                </Heading>
                                <SimpleGrid columns={{ base: 1, md: 3 }} gap="4">
                                    {Array.from({ length: 3 }).map((_, index) => (
                                        <Box key={index} mb="4" position="relative">
                                            <Image
                                                src="https://miever.s3.ap-east-1.amazonaws.com/static/nail-art/hand.webp"
                                                alt="Nail Art"
                                            />
                                        </Box>
                                    ))}
                                </SimpleGrid>
                            </Drawer.Body>
                        </Drawer.Content>
                    </Drawer.Positioner>
                </Portal>
            </Drawer.Root>
        </Box>
    );
}

export default MasonrySection;
