"use client";
import React, { useRef } from "react";
import { videoInfo } from "../static-data/nail-info";
import { Card } from "@chakra-ui/react";

const TutorialsList = () => {
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
    
    return (
        <>
            {videoInfo.map((item, index) => (
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
        </>
    );
};

export default TutorialsList;