import { Box, Button, Container, Heading, Input } from '@chakra-ui/react'
import Helmet from "preact-helmet";

export const SignUp = () => {
  return (
    <Container centerContent maxW={"md"} px={4} mt={"25vh"}>
      <Helmet title="SignUp - PingFox" />
      <Box>
        <Heading mb={6} mt={6} size={"3xl"}>Create an Account</Heading>
        <form>
          <Input placeholder="Username" mb={4} type="text" required />
          <Input placeholder="Email" mb={4} type="email" required />
          <Input placeholder="Password" mb={4} type="password" required />
          <Input placeholder="Confirm Password" mb={4} type="password" required />
          <Button type="submit" colorPalette={'brand'} w={'full'}>Sign Up</Button>
        </form>
      </Box>
    </Container>
  )
}
