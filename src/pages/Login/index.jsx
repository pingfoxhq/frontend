import { useAuth } from "../../auth/useAuth.js";
import { toaster } from '../../components/ui/toaster.jsx';
import { Box, Button, Checkbox, Container, Field, Flex, Heading, Input, Link, Text } from '@chakra-ui/react'
import Helmet from "preact-helmet";
import { useLocation } from 'preact-iso';

export const LogIn = () => {
  const { route } = useLocation();
  const { login } = useAuth();

  const signIn = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    try {
      await login(
        formData.get("username"),
        formData.get("password")
      );

      toaster.success({
        title: "Logged in successfully!",
        description: "You have been logged in.",
        closable: true,
      });

      route("/");
    } catch (error) {
      toaster.error({
        title: "Login failed",
        description:
          error.response?.data?.detail ||
          "An error occurred during login.",
        closable: true,
      });
    }
  };

  return (
    <Container centerContent mt={"25vh"} maxW={"2Xl"}>
      <Helmet title="Login - PingFox" />
      <Box w={"full"} maxW={"md"}>
        <Heading mb={2} mt={6} fontSize={"3xl"} textAlign={'center'}>Sign in to your account</Heading>
        <form onSubmit={signIn}>
          <Field.Root>
            <Field.Label mb={1} htmlFor="username">Username</Field.Label>
            <Input name={"username"} placeholder="Username" mb={4} type="text" required bg={'#1e2939'} borderColor={'gray.700'} size={'xl'} />
          </Field.Root>
          <Field.Root>
            <Field.Label mb={1} htmlFor="password">Password</Field.Label>
            <Input name={"password"} placeholder="Password" mb={4} type="password" required bg={'#1e2939'} borderColor={'gray.700'} size={'xl'} />
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
