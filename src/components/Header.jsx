import React from 'react';
import {
    Box,
    Flex,
    Heading,
    Button,
    Avatar,
    Container,
} from '@chakra-ui/react';

function Header() {
    return (
        <Box bg="white" boxShadow="sm">
            <Container maxW="7xl" py={4}>
                <Flex justifyContent="space-between" alignItems="center">
                    <Heading as="h1" size="lg">Logo</Heading>
                    <Flex alignItems="center" gap={4}>
                        <Button leftIcon={<>+</>} variant="outline">Project</Button>
                        <Avatar name="User Name" src="https://bit.ly/broken-link" />
                    </Flex>
                </Flex>
            </Container>
        </Box>
    );
}

export default Header;