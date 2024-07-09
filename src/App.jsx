import React from 'react';
import {
    ChakraProvider,
    Box,
    Heading,
    Text,
    VStack,
    Card,
    CardHeader,
    CardBody,
    Container,
} from '@chakra-ui/react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <ChakraProvider>
            <Box minHeight="100vh" bg="gray.100">
                <Header />
                <Container maxW="7xl" py={8}>
                    <Card>
                        <CardHeader>
                            <Heading size="md">Learning Projects</Heading>
                            <Text>Your current learning projects</Text>
                        </CardHeader>
                        <CardBody>
                            <VStack align="stretch" spacing={2}>
                                <Text>Project 1</Text>
                                <Text>Project 2</Text>
                            </VStack>
                        </CardBody>
                    </Card>
                </Container>

                <Footer />
            </Box>
        </ChakraProvider>
    );
}

export default App;