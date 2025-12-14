import { Flex, VStack, Text, Progress } from "@chakra-ui/react";

export function FullPageLoader() {
    return (
        <Flex
            minH="100vh"
            align="center"
            justify="center"
            bg="#141619"
        >
            <VStack h={6}>
                <Text fontWeight="bold" color="orange.400">
                    PingFox
                </Text>

                <Text
                    fontSize="lg"
                    fontWeight="semibold"
                    color="gray.200"
                    letterSpacing="wide"
                >
                    Loading
                </Text>

                <Progress.Root
                    value={null}
                    maxW="240px"
                    w="240px"

                >
                    <Progress.Track bg="gray.700">
                        <Progress.Range bg="orange.400" />
                    </Progress.Track>
                </Progress.Root>

                <Text
                    fontSize="sm"
                    color="gray.400"
                >
                    Preparing your workspace
                </Text>
            </VStack>
        </Flex>
    );
}
