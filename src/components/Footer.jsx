import React from 'react';
import {
    Box,
    Text,
    Container,
} from '@chakra-ui/react';

function Footer() {
    return (
        <Box bg="white" boxShadow="sm" mt={8}>
            <Container maxW="7xl" py={4}>
                <Text textAlign="center" color="gray.500">Copyright, etc...</Text>
            </Container>
        </Box>
    );
}

export default Footer;