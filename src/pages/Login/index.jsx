import { Box, Button, Container, Heading, Input } from '@chakra-ui/react'
import Helmet from "preact-helmet";

export const LogIn = () => {
  return (
    <Container centerContent maxW={"md"} px={4} mt={"25vh"}>
      <Helmet title="Login - PingFox" />
      <Box>
        <Heading mb={6} mt={6} size={"3xl"}>Sign in to your account</Heading>
        <form>
          <Input placeholder="Username" mb={4} type="text" required />
          <Input placeholder="Password" mb={4} type="password" required />
          <Button type="submit" colorPalette={'brand'} w={'full'}>Log In</Button>
        </form>
      </Box>
    </Container>
  )
}
