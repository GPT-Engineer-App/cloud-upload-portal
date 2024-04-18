import { Box, Button, Center, Container, Heading, Input, Text, VStack } from "@chakra-ui/react";
import { FaCloudUploadAlt } from "react-icons/fa";

const Index = () => {
  const handleFileChange = (event) => {
    // Here you would handle file changes
    console.log(event.target.files);
  };

  const handleUpload = () => {
    // Here you would handle the upload logic
    alert("File upload functionality is not implemented in this demo.");
  };

  return (
    <Container maxW="container.md" p={4}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl" textAlign="center">
          Subidor de Archivos a la Nube
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Sube tus archivos de manera segura a la nube con solo unos pocos clics.
        </Text>
        <Box p={4} borderWidth="2px" borderRadius="lg" overflow="hidden">
          <VStack spacing={5}>
            <Input type="file" onChange={handleFileChange} size="lg" placeholder="Select file" variant="flushed" p={1} />
            <Button leftIcon={<FaCloudUploadAlt />} colorScheme="blue" size="lg" onClick={handleUpload}>
              Subir a la Nube
            </Button>
          </VStack>
        </Box>
        <Center>
          <Text fontSize="sm" color="gray.500">
            Tus archivos están protegidos con los más altos estándares de seguridad.
          </Text>
        </Center>
      </VStack>
    </Container>
  );
};

export default Index;
