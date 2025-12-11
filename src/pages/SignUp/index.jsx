// @ts-nocheck
import { Box, Button, Checkbox, Container, Field, Flex, Heading, Input, Link, List, Stack, Text } from '@chakra-ui/react'
import Helmet from "preact-helmet";
import { PasswordInput, passwordStrength, PasswordStrengthMeter } from '../../components/ui/password-input.jsx';
import { useMemo, useRef, useState } from 'preact/hooks';
import { toaster } from '../../components/ui/toaster.jsx';

const strengthOptions = [
  { id: 1, value: "weak", minDiversity: 0, minLength: 0 },
  { id: 2, value: "medium", minDiversity: 2, minLength: 6 },
  { id: 3, value: "strong", minDiversity: 3, minLength: 8 },
  { id: 4, value: "very-strong", minDiversity: 4, minLength: 10 },
]




export const SignUp = () => {
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null)
  const strength = useMemo(() => {
    if (!password) return 0
    const result = passwordStrength(password, strengthOptions)
    return result.id
  }, [password])

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const password1 = formData.get("password");
    const password2 = formData.get("password2");
    console.log(formData.get("email"), formData.get("username"), formData.get("password"), formData.get("password2"));
    if (password1 !== password2) {
      toaster.error({
        title: "Password Mismatch",
        description: "The passwords you entered do not match. Please try again.",
        closable: true,
      });
      passwordRef.current.focus();
      return;
    }


  };

  return (
    <Container centerContent mt={"10vh"} maxW={"2xl"}>
      <Helmet title="SignUp - PingFox" />
      <Box w={"full"} maxW={"md"}>
        <Heading mb={2} mt={6} fontSize={"3xl"} textAlign={'center'}>Create an account</Heading>
        <form onSubmit={onSubmit}>
          <Field.Root mb={4}>
            <Field.Label htmlFor="username">Email <Field.RequiredIndicator /> </Field.Label>
            <Input autoComplete={'email'} name={'email'} placeholder="Username" type="email" required bg={'#1e2939'} borderColor={'gray.700'} size={'xl'} />
            <Field.HelperText>We'll never share your email.</Field.HelperText>
          </Field.Root>
          <Field.Root mb={4}>
            <Field.Label htmlFor="username">Username</Field.Label>
            <Input name={'username'} autoComplete={'username'} placeholder="Username" type="text" required bg={'#1e2939'} borderColor={'gray.700'} size={'xl'} />
            <Field.HelperText>Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.</Field.HelperText>
          </Field.Root>
          <Field.Root mb={4}>
            <Field.Label htmlFor="password">Password</Field.Label>
            <Stack w={'full'} gap="3">
              <PasswordInput name={'password'} ref={passwordRef} autoComplete={'password'} onChange={(e) => setPassword(e.currentTarget.value)} placeholder="Password" type="password" required bg={'#1e2939'} borderColor={'gray.700'} size={'xl'} />
              <PasswordStrengthMeter value={strength} />
            </Stack>

            <Field.HelperText>
              <Stack>
                <Text>
                  Your password can't be too similar to your other personal information.
                </Text>
                <Text>
                  Your password must contain at least 8 characters.
                </Text>
                <Text>
                  Your password can't be a commonly used password.
                </Text>
                <Text>
                  Your password can't be entirely numeric.
                </Text>
              </Stack>
            </Field.HelperText>
          </Field.Root>
          <Field.Root mb={4}>
            <Field.Label htmlFor="password2">Confirm Password</Field.Label>
            <PasswordInput name={'password2'} autoComplete={'password'} placeholder="Confirm Password" type="password" required bg={'#1e2939'} borderColor={'gray.700'} size={'xl'} />
            <Field.HelperText>Enter the same password as before, for verification.</Field.HelperText>
          </Field.Root>
          {/* <Flex justifyContent={'space-between'} mb={4} alignItems={'center'}>
            <Checkbox.Root>
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label>
                Remember me
              </Checkbox.Label>
            </Checkbox.Root>
            <Link href="#" fontSize={'sm'} color={'orange.500'}>Forgot password?</Link>
          </Flex> */}
          <Button type="submit" colorPalette={'brand'} w={'full'}>Log In</Button>
        </form>
        <Text mt={4} textAlign={'center'} fontSize={'sm'} color={'gray.400'}>
          Already have an account? <Link href="/auth/log-in" fontWeight={'bold'} color={'orange.500'}>Log In</Link>
        </Text>
      </Box>
    </Container>
  )
}
