import { Box, Button, Checkbox, Container, Field, Flex, Heading, Input, Link, Text } from '@chakra-ui/react'
import Helmet from "preact-helmet";

export const LogIn = () => {
  return (
    <Container centerContent mt={"25vh"} maxW={"2Xl"}>
      <Helmet title="Login - PingFox" />
      <Box w={"full"} maxW={"md"}>
        <Heading mb={2} mt={6} fontSize={"3xl"} textAlign={'center'}>Sign in to your account</Heading>
        <form>
          <Field.Root>
            <Field.Label mb={1} htmlFor="username">Username</Field.Label>
            <Input placeholder="Username" mb={4} type="text" required bg={'#1e2939'} borderColor={'gray.700'} size={'xl'} />
          </Field.Root>
          <Field.Root>
            <Field.Label mb={1} htmlFor="password">Password</Field.Label>
            <Input placeholder="Password" mb={4} type="password" required bg={'#1e2939'} borderColor={'gray.700'} size={'xl'} />
          </Field.Root>
          <Flex justifyContent={'space-between'} mb={4} alignItems={'center'}>
            <Checkbox.Root>
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label>
                Remember me
              </Checkbox.Label>
            </Checkbox.Root>
            <Link href="#" fontSize={'sm'} color={'orange.500'}>Forgot password?</Link>
          </Flex>
          <Button type="submit" colorPalette={'brand'} w={'full'}>Log In</Button>
        </form>
        <Text mt={4} textAlign={'center'} fontSize={'sm'} color={'gray.400'}>
          Don't have an account? <Link href="/auth/sign-up" fontWeight={'bold'} color={'orange.500'}>Sign Up</Link>
        </Text>
      </Box>
    </Container>
  )
}
