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
          Cloud Storage File Uploader
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Upload your files securely to the cloud with just a few clicks.
        </Text>
        <Box p={4} borderWidth="2px" borderRadius="lg" overflow="hidden">
          <VStack spacing={5}>
            <Input type="file" onChange={handleFileChange} size="lg" placeholder="Select file" variant="flushed" p={1} />
            <Button leftIcon={<FaCloudUploadAlt />} colorScheme="brand" size="lg" onClick={handleUpload}>
              Upload to Cloud
            </Button>
          </VStack>
        </Box>
        <Center>
          <Text fontSize="sm" color="gray.500">
            Your files are protected with top-notch security standards.
          </Text>
        </Center>
      </VStack>
    </Container>
  );
};

export default Index;
