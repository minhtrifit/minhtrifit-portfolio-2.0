import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Box,
  HStack,
  VStack,
  Wrap,
  WrapItem,
  Button,
  FormControl,
  Input,
  InputGroup,
  IconButton,
  FormLabel,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import {
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { IoSchool } from "react-icons/io5";
import {
  BiCodeAlt,
  BiLogoReact,
  BiLogoCss3,
  BiLogoSass,
  BiLogoTailwindCss,
  BiLogoFigma,
  BiLogoFirebase,
  BiLogoPostgresql,
} from "react-icons/bi";
import {
  AiFillGithub,
  AiOutlineAntDesign,
  AiOutlineCheck,
  AiFillInstagram,
} from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import {
  SiMaterialdesign,
  SiChakraui,
  SiExpress,
  SiNestjs,
} from "react-icons/si";
import {
  FaHtml5,
  FaPaintBrush,
  FaServer,
  FaTools,
  FaSlack,
  FaBootstrap,
} from "react-icons/fa";
import { MdMilitaryTech } from "react-icons/md";
import { ReactElement, useEffect } from "react";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

interface FeatureProps2 {
  title: string;
  tech: ReactElement;
  icon: ReactElement;
}

const Feature2 = ({ title, tech, icon }: FeatureProps2) => {
  return (
    <Stack
      p={5}
      w={"300px"}
      borderWidth="1px"
      borderRadius="lg"
      minHeight={400}
    >
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"black"}
        rounded={"full"}
        bg={"gray.100"}
        m={"0 auto"}
      >
        {icon}
      </Flex>
      <Text textAlign={"center"} fontWeight={600}>
        {title}
      </Text>
      {tech}
    </Stack>
  );
};

const features = Array.apply(null, [
  {
    id: 1,
    title: "Peronal Profile",
    text: "All informations and facts about me.",
  },
  {
    id: 2,
    title: "Project Showcase",
    text: "All my projects with source codes and demo videos.",
  },
  {
    id: 3,
    title: "Personal Blog",
    text: "I share my coding knowledge and life experience with shorting blog.",
  },
  {
    id: 4,
    title: "Teaching Courses",
    text: "I will tryhard with this in the future.",
  },
]);

const Home = () => {
  useEffect(() => {
    document.title = "minhtrifit | Home";
    window.scrollTo(0, 0);
  });

  return (
    <div style={{ padding: "20px 20px", marginBottom: "300px" }}>
      <Container maxW={"5xl"} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={"uppercase"}
              color={"blue.400"}
              fontWeight={600}
              fontSize={"sm"}
              bg={useColorModeValue("blue.50", "blue.900")}
              p={2}
              alignSelf={"flex-start"}
              rounded={"md"}
            >
              Profile
            </Text>
            <Heading>LÊ MINH TRÍ</Heading>
            <Text color={"gray.500"} fontSize={"lg"}>
              Web Application Fullstack Developer
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.100", "gray.700")}
                />
              }
            >
              <Feature
                icon={<Icon as={IoSchool} color={"yellow.500"} w={5} h={5} />}
                iconBg={useColorModeValue("yellow.100", "yellow.900")}
                text={"University of Science - VNU HCM"}
              />
              <Feature
                icon={
                  <Icon as={MdMilitaryTech} color={"green.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("green.100", "green.900")}
                text={"Information of Technology - Software Engineering"}
              />
              <Feature
                icon={<Icon as={BiCodeAlt} color={"purple.500"} w={5} h={5} />}
                iconBg={useColorModeValue("purple.100", "purple.900")}
                text={"Fullstack Developer"}
              />
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={"md"}
              alt={"feature image"}
              src={"./assets/avatar.png"}
              objectFit={"cover"}
            />
          </Flex>
        </SimpleGrid>
      </Container>
      <Box margin={"100px auto"} p={4}>
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading>Quick Start</Heading>
          <Text color={"gray.600"} fontSize={"xl"}>
            Some exciting things that you will have.
          </Text>
        </Stack>
        <Container maxW={"6xl"} mt={10}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
            {features.map((feature: any) => (
              <HStack key={feature.id} align={"top"}>
                <Box color={"green.400"} px={2}>
                  <Icon as={AiOutlineCheck} />
                </Box>
                <VStack align={"start"}>
                  <Text fontWeight={600}>{feature.title}</Text>
                  <Text color={"gray.600"}>{feature.text}</Text>
                </VStack>
              </HStack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
      <Box p={4} margin={"100px auto"} width={"100%"} gap={20}>
        <Heading textAlign={"center"}>Technology Stack</Heading>
        <Box
          p={4}
          margin={"50px auto 0 auto"}
          width={"100%"}
          display={"flex"}
          flexWrap={"wrap"}
          // flexDirection={{ base: "column", xl: "row" }}
          justifyContent={"space-around"}
          gap={5}
        >
          <Feature2
            icon={<Icon as={BsFillPencilFill} w={10} h={10} />}
            title={"Front End"}
            tech={
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: 20,
                  gap: 20,
                }}
              >
                <Feature
                  icon={<Icon as={FaHtml5} color={"red.500"} w={5} h={5} />}
                  iconBg={useColorModeValue("red.100", "red.900")}
                  text={"HTML"}
                />
                <Feature
                  icon={
                    <Icon as={BiLogoCss3} color={"purple.500"} w={5} h={5} />
                  }
                  iconBg={useColorModeValue("purple.100", "purple.900")}
                  text={"CSS"}
                />
                <Feature
                  icon={<Icon as={BiLogoSass} color={"pink.500"} w={5} h={5} />}
                  iconBg={useColorModeValue("pink.100", "pink.900")}
                  text={"SASS"}
                />
                <Feature
                  icon={
                    <Icon
                      as={BiLogoTailwindCss}
                      color={"green.500"}
                      w={5}
                      h={5}
                    />
                  }
                  iconBg={useColorModeValue("green.100", "green.900")}
                  text={"Tailwindcss"}
                />
                <Feature
                  icon={
                    <Icon as={BiLogoReact} color={"blue.500"} w={5} h={5} />
                  }
                  iconBg={useColorModeValue("blue.100", "blue.900")}
                  text={"ReactJS"}
                />
              </div>
            }
          />
          <Feature2
            icon={<Icon as={FaPaintBrush} w={10} h={10} />}
            title={"UI Framework"}
            tech={
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: 20,
                  gap: 20,
                }}
              >
                <Feature
                  icon={
                    <Icon as={FaBootstrap} color={"purple.500"} w={5} h={5} />
                  }
                  iconBg={useColorModeValue("purple.100", "purple.900")}
                  text={"Bootstrap 5"}
                />
                <Feature
                  icon={
                    <Icon
                      as={SiMaterialdesign}
                      color={"white.500"}
                      w={5}
                      h={5}
                    />
                  }
                  iconBg={useColorModeValue("white.100", "white.900")}
                  text={"Material UI"}
                />

                <Feature
                  icon={
                    <Icon
                      as={AiOutlineAntDesign}
                      color={"blue.500"}
                      w={5}
                      h={5}
                    />
                  }
                  iconBg={useColorModeValue("blue.100", "blue.900")}
                  text={"AntDesign"}
                />
                <Feature
                  icon={
                    <Icon as={SiChakraui} color={"green.500"} w={5} h={5} />
                  }
                  iconBg={useColorModeValue("green.100", "green.900")}
                  text={"Chakra UI"}
                />
              </div>
            }
          />
          <Feature2
            icon={<Icon as={FaServer} w={10} h={10} />}
            title={"Back End"}
            tech={
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: 20,
                  gap: 20,
                }}
              >
                <Feature
                  icon={<Icon as={SiExpress} color={"white.500"} w={5} h={5} />}
                  iconBg={useColorModeValue("white.100", "white.900")}
                  text={"Express"}
                />
                <Feature
                  icon={<Icon as={SiNestjs} color={"pink.500"} w={5} h={5} />}
                  iconBg={useColorModeValue("pink.100", "pink.900")}
                  text={"NestJS"}
                />
                <Feature
                  icon={
                    <Icon
                      as={BiLogoPostgresql}
                      color={"blue.500"}
                      w={5}
                      h={5}
                    />
                  }
                  iconBg={useColorModeValue("blue.100", "blue.900")}
                  text={"Postgresql"}
                />
                <Feature
                  icon={
                    <Icon
                      as={BiLogoFirebase}
                      color={"yellow.500"}
                      w={5}
                      h={5}
                    />
                  }
                  iconBg={useColorModeValue("yellow.100", "yellow.900")}
                  text={"Firebase"}
                />
              </div>
            }
          />
          <Feature2
            icon={<Icon as={FaTools} w={10} h={10} />}
            title={"Tools"}
            tech={
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: 20,
                  gap: 20,
                }}
              >
                <Feature
                  icon={
                    <Icon as={AiFillGithub} color={"white.500"} w={5} h={5} />
                  }
                  iconBg={useColorModeValue("white.100", "white.900")}
                  text={"Github"}
                />
                <Feature
                  icon={<Icon as={FaSlack} color={"yellow.500"} w={5} h={5} />}
                  iconBg={useColorModeValue("yellow.100", "yellow.900")}
                  text={"Slack"}
                />
                <Feature
                  icon={<Icon as={BiLogoFigma} color={"red.500"} w={5} h={5} />}
                  iconBg={useColorModeValue("red.100", "red.900")}
                  text={"Figma"}
                />
              </div>
            }
          />
        </Box>
      </Box>
      <Container
        // bg="#9DC4FB"
        maxW="full"
        centerContent
        overflow="hidden"
      >
        <Flex>
          <Box
            bg="#78c6e3"
            color="white"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}
          >
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box>
                    <Heading>Contact</Heading>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.100">
                      Fill up the form below to contact
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="white"
                          _hover={{ border: "2px solid #1C6FEB" }}
                          w={300}
                          leftIcon={<MdEmail color="#1970F1" size="20px" />}
                        >
                          minhtri.fit@gmail.com
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="white"
                          _hover={{ border: "2px solid #1C6FEB" }}
                          w={300}
                          leftIcon={
                            <MdLocationOn color="#1970F1" size="20px" />
                          }
                        >
                          Ho Chi Minh city, VietNam
                        </Button>
                      </VStack>
                    </Box>
                    <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={5}
                      alignItems="flex-start"
                    >
                      <IconButton
                        aria-label="facebook"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "#0D74FF" }}
                        icon={<MdFacebook size="28px" />}
                      />
                      <IconButton
                        aria-label="instagram"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "#0D74FF" }}
                        icon={<AiFillInstagram size="28px" />}
                      />
                      <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "#0D74FF" }}
                        icon={<AiFillGithub size="28px" />}
                      />
                    </HStack>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box bg="white" borderRadius="lg">
                    <Box m={8} color="#0B0E3F">
                      <VStack spacing={5}>
                        <FormControl id="name">
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <BsPerson color="gray.800" />
                            </InputLeftElement>
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Email</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <MdOutlineEmail color="gray.800" />
                            </InputLeftElement>
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: "gray.300",
                            }}
                            placeholder="message"
                          />
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button
                            variant="solid"
                            bg="#0D74FF"
                            color="white"
                            _hover={{}}
                          >
                            Send Message
                          </Button>
                        </FormControl>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
    </div>
  );
};

export default Home;
