import React from "react";
import { Flex, Heading, Text, Group, Input, Tag } from "@chakra-ui/react";


interface PageHeroProps {
    title: string;
    subtitle: string;
    label: string;
}

const PageHero: React.FC<PageHeroProps> = ({
    title,
    subtitle,
    label
}) => {
    return (
        <Flex align="center" justify="center" direction="column">
            <Tag.Root size="lg" colorPalette="cyan">
                <Tag.Label>{label}</Tag.Label>
            </Tag.Root>
            <Heading size="6xl" py={4}>
                {title}
            </Heading>
            <Text fontSize="xl" color="gray.600">
                {subtitle}
            </Text>
            <Group w="full" maxW="sm" gap={4} py={8}>
                <Input flex="1" placeholder="Search..." />
            </Group>
        </Flex>
    );
}

export default PageHero;