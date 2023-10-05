import { ReactText } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";
import {
  Button,
  Flex,
  useColorMode,
  Box,
  CloseButton,
  Icon,
  useColorModeValue,
  useDisclosure,
  BoxProps,
  FlexProps,
} from "@chakra-ui/react";
import { FiHome, FiGrid, FiBook } from "react-icons/fi";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";

interface LinkItemProps {
  name: string;
  icon: IconType;
}

const LinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: FiHome },
  { name: "Project", icon: FiGrid },
  { name: "Blog", icon: FiBook },
];

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
}

const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  const url = children.toString().toLowerCase();

  return (
    <Link to={url === "home" ? "/" : url}>
      <Box style={{ textDecoration: "none" }} _focus={{ boxShadow: "none" }}>
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: "cyan.400",
            color: "white",
          }}
          {...rest}
        >
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: "white",
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </Box>
    </Link>
  );
};

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      style={{ width: "230px" }}
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      // w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex
        h="20"
        alignItems="center"
        mx="8"
        style={{ marginTop: "50px", marginBottom: "20px" }}
        justifyContent="space-between"
      >
        <Link to="/">
          <div style={{ width: "150px", height: "150px", margin: "0 auto" }}>
            <img style={{ width: "100%" }} src="./assets/logo.png" />
          </div>
        </Link>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

import Home from "./pages/Home";

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { onClose } = useDisclosure();

  return (
    <div style={{ display: "flex" }}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Box
        width={{ base: "100%", md: "calc(100vw - 230px)" }}
        marginLeft={{ md: "230px" }}
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 10,
            padding: "20px 20px",
          }}
        >
          <Button
            aria-label="Toggle Color Mode"
            onClick={toggleColorMode}
            _focus={{ boxShadow: "none" }}
            w="fit-content"
          >
            {colorMode === "light" ? <BsMoonStarsFill /> : <BsSun />}
          </Button>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Box>
    </div>
  );
};

export default App;
