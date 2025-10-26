import React, { FunctionComponent } from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import PageHero from "@/components/customize/PageHero";
import TutorialsList from "./tutorials-list";

const TutorialsPage: FunctionComponent = () => {
    return (
        <Box p={24}>
            <PageHero
                label="Tutorials"
                title="Learn the Looks"
                subtitle="Step-by-step videos to master nail art"
            />
            <SimpleGrid gap={2} columns={{ base: 1, sm: 2, md: 3, lg: 4 }}>
                <TutorialsList />
            </SimpleGrid>
        </Box>
    );
};

export default TutorialsPage;