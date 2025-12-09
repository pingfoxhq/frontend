import { Box, Button, Flex, Group, Heading, Image, Link, Spacer } from '@chakra-ui/react';
import { useLocation } from 'preact-iso';

import logo from "../assets/images/logo.png"
import { FaHome, FaRocket } from 'react-icons/fa';
import { MdOutlineLogin } from 'react-icons/md';

export function Header() {
	const { url } = useLocation();

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
				<Image
					src={logo}
					w={10}
					_dark={{ display: "none" }}
					objectFit={"contain"}
					alt={"PingFox Logo"}
				/>
				<Heading fontSize={'2xl'} fontWeight={'bold'} color={'brand.500'}>PingFox</Heading>
				<Spacer />
				<Group>

				<Button asChild colorPalette={'brand'}>
					<a href="/" class={url == '/' && 'active'}>
						<FaRocket /> SignUp
					</a>
				</Button>
				<Button asChild bgGradient={'to-t'} gradientFrom={'black'} gradientTo={'gray.950'}>
					<a href="/" class={url == '/' && 'active'}>
						<MdOutlineLogin /> Login

					</a>
				</Button>
				</Group>
			</Flex>
		</Box>
	);
}
