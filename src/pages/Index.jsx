import { useState } from "react";
import { Container, VStack, Text, Input, Button, HStack, IconButton, useToast } from "@chakra-ui/react";
import { FaPlay, FaStop } from "react-icons/fa";

const Index = () => {
  const [apiKey, setApiKey] = useState("");
  const [apiSecret, setApiSecret] = useState("");
  const [isBotRunning, setIsBotRunning] = useState(false);
  const toast = useToast();

  const handleStartBot = () => {
    if (!apiKey || !apiSecret) {
      toast({
        title: "Error",
        description: "API Key and Secret are required.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    setIsBotRunning(true);
    toast({
      title: "Bot Started",
      description: "Your Binance Futures bot is now running.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleStopBot = () => {
    setIsBotRunning(false);
    toast({
      title: "Bot Stopped",
      description: "Your Binance Futures bot has been stopped.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Binance Futures Bot</Text>
        <Input placeholder="API Key" value={apiKey} onChange={(e) => setApiKey(e.target.value)} />
        <Input placeholder="API Secret" type="password" value={apiSecret} onChange={(e) => setApiSecret(e.target.value)} />
        <HStack spacing={4}>
          <IconButton aria-label="Start Bot" icon={<FaPlay />} size="lg" colorScheme="green" onClick={handleStartBot} isDisabled={isBotRunning} />
          <IconButton aria-label="Stop Bot" icon={<FaStop />} size="lg" colorScheme="red" onClick={handleStopBot} isDisabled={!isBotRunning} />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
