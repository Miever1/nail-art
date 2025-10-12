import React, { FunctionComponent } from "react";
import { Box, Container, Button } from "@chakra-ui/react";
import PageHero from "@/components/customize/PageHero";
import MasonrySection from "@/components/customize/MasonrySection";

const InspoPage: FunctionComponent = () => {
    return (
        <Box p={24}>
            <PageHero
                label="Inspo"
                title="Inspo Corner"
                subtitle="Styles to spark your next creation"
            />
            <MasonrySection reactive={true} />
            <Container centerContent>
                <Button colorPalette="cyan" variant="surface">
                    View More
                </Button>
            </Container>
        </Box>
    );
};

export default InspoPage;