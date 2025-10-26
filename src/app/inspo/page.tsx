import React, { FunctionComponent } from "react";
import { Box } from "@chakra-ui/react";
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
        </Box>
    );
};

export default InspoPage;