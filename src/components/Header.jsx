import { Avatar, AvatarGroup, Box, Button, Flex, Group, Heading, IconButton, Image, Link, Spacer, Text } from '@chakra-ui/react';
import { useLocation } from 'preact-iso';

import logo from "../assets/images/logo.png"
import { FaHome, FaRocket } from 'react-icons/fa';
import { MdOutlineLogin } from 'react-icons/md';

export function Header({ user }) {
	const { url, route } = useLocation();

	return (
		<Box
			background={"transparent"}
			px={30}
			py={4}
			top={0}
			mb={0}
			position={"static"}
			boxSize={"full"}
			pos={"relative"}
			borderBottomColor={'gray.800'}
			borderBottomWidth={'1px'}
		>
			<Flex minWidth={"max-content"} alignItems={"center"} spaceX={"1"}>
				<Link href={"/"}>
					<Image
						src={logo}
						w={10}
						_dark={{ display: "none" }}
						objectFit={"contain"}
						alt={"PingFox Logo"}
					/>
					<Heading size={'2xl'} fontWeight={'bold'} color={'orange.500'}>PingFox</Heading>
					<Text fontSize={'sm'} color={'gray.500'}>Alpha</Text>
				</Link>
				<Spacer />
				<Group>
					{user ? (
						<>
							<IconButton asChild aria-label="User Profile" variant={'ghost'} borderRadius={"100%"}>
								<AvatarGroup>
									<Avatar.Root>
										<Avatar.Fallback name={user.username} />
										<Avatar.Image src={"http://localhost:8000" + user.userprofile.avatar} alt={user.username} />
									</Avatar.Root>
								</AvatarGroup>
							</IconButton>
							<Button asChild bgGradient={'to-t'} gradientFrom={'orange.600'} gradientTo={'orange.500'}>
								<a href="/dashboard" class={url == '/dashboard' && 'active'}>
									<FaRocket /> Dashboard
								</a>
							</Button>
							<Button asChild bgGradient={'to-t'} gradientFrom={'black'} gradientTo={'gray.950'}>
								<a href="/auth/log-out">
									<MdOutlineLogin /> Log Out
								</a>
							</Button>
						</>
					) : (
						<>
							<Button asChild bgGradient={'to-t'} gradientFrom={'orange.600'} gradientTo={'orange.500'}>
								<a href="/auth/sign-up" class={url == '/auth/sign-up' && 'active'}>
									<FaRocket /> SignUp
								</a>
							</Button>
							<Button asChild bgGradient={'to-t'} gradientFrom={'black'} gradientTo={'gray.950'}>
								<a href="/auth/log-in" class={url == '/auth/log-in' && 'active'}>
									<MdOutlineLogin /> Login

								</a>
							</Button>
						</>
					)}
				</Group>
			</Flex>
		</Box>
	);
}
