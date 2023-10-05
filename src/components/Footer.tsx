import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <div style={{ width: "100px", height: "80px", margin: "0 auto" }}>
        <img style={{ width: "100%" }} src="./assets/logo.png" />
      </div>
    </Link>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      position={"absolute"}
      bottom={0}
      width={{ base: "100%", md: "calc(100% - 230px)" }}
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Logo />
        <Stack direction={"row"} spacing={6}>
          <Link to="/">
            <Box>Home</Box>
          </Link>
          <Link to="/project">
            <Box>Project</Box>
          </Link>
          <Link to="/blog">
            <Box>Blog</Box>
          </Link>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>Copyright© 2023 minhtrifit</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton
              label={"Facebook"}
              href={"https://www.facebook.com/minhtrifit"}
            >
              <FaFacebook />
            </SocialButton>
            <SocialButton
              label={"YouTube"}
              href={"https://www.youtube.com/@minhtrifit"}
            >
              <FaYoutube />
            </SocialButton>
            <SocialButton
              label={"Linkedin"}
              href={"https://www.linkedin.com/in/lê-minh-trí-89ab94215/"}
            >
              <FaLinkedin />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
