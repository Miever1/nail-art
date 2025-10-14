"use client";
import React, { FunctionComponent, useState } from "react";
import dynamic from "next/dynamic";
import { Box, Image, Float, Drawer, Portal, Avatar, Text, HStack, Stack, Heading, SimpleGrid } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { nailInfo, StructuedNailInfo } from "../../app/static-data/nail-info";

const Masonry = dynamic(() => import('react-layout-masonry'), { ssr: false });

interface MasonrySectionProps {
    reactive?: boolean;
}

const MasonrySection: FunctionComponent<MasonrySectionProps> = ({
    reactive = false
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeInfo, setActiveInfo] = useState<StructuedNailInfo | null>(null);

    const data = nailInfo.map((item, index) => {
        const { title, imagesNum } = item;
        const structuedData = {
            title,
            id: title.replace(/\s+/g, "-"),
            images: Array.from({ length: imagesNum }).map((_, imgIndex) => ({
                src: `https://miever.s3.ap-east-1.amazonaws.com/static/nail-art/types/${title.replace(/\s+/g, "+")}/${imgIndex + 1}.jpg`,
                alt: `${title} Image ${imgIndex + 1}`
            }))
        }
        return structuedData;
    });

    return (
        <Box my={16}>
            <Masonry columns={{ 640: 1, 768: 2, 1024: 3, 1280: 5 }} gap={16}>
            {data.map((item, index) => (
                <Box key={index} mb="4" position="relative" cursor="pointer">
                    <Image
                        src={item.images[0].src}
                        alt={item.title}
                        w="294px"
                        h="294px"
                        onClick={() => {
                            setIsOpen(true);
                            setActiveInfo({ 
                                like: index % 2 === 0,
                                imagesNum: item.images.length,
                                ...item
                            });
                        }}
                    />
                    {
                        reactive ? (
                            <Float right="6" top="6">
                                <Box borderRadius="50%" w={8} h={8} bg="var(--chakra-colors-white)" alignItems="center" justifyContent="center" display="flex" boxShadow="md" cursor="pointer">
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
                                        src={activeInfo?.images[0].src || ''}
                                        alt="Nail Art"
                                        onClick={() => {
                                            setIsOpen(true);
                                        }}
                                    />
                                    <Float right="8" top="8">
                                        <Box borderRadius="50%" w={8} h={8} bg="var(--chakra-colors-white)" alignItems="center" justifyContent="center" display="flex" boxShadow="md" cursor="pointer">
                                            {activeInfo?.like ? <FaHeart /> : <FaRegHeart />}
                                        </Box>
                                    </Float>
                                </Box>
                                <Heading mb="4" size="2xl">
                                    Details
                                </Heading>
                                <SimpleGrid columns={{ base: 1, md: 3 }} gap="4">
                                    {activeInfo?.images.map((image, index) => (
                                        <Box key={index} mb="4" position="relative">
                                            <Image
                                                src={image.src}
                                                alt={image.alt}
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
