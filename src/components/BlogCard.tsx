import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Image,
  Box,
  Heading,
  Text,
  Button,
  Icon,
} from "@chakra-ui/react";
import { AiFillRead, AiFillCalendar } from "react-icons/ai";
import { Link } from "react-router-dom";

interface PropType {
  id: string;
  date: string;
  title: string;
  author: string;
  image: string;
  content: string;
}

const BlogCard = (props: PropType) => {
  const { id, date, title, author, image, content } = props;
  return (
    <Card maxW="md">
      <CardHeader>
        <Flex>
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Box>
              <Heading size="sm">
                Blog {id}: {title}
              </Heading>
              <Text mt={2}>Author: {author}</Text>
              <Box mt={5} display={"flex"} alignItems={"center"}>
                <Icon as={AiFillCalendar} color={"white.500"} w={5} h={5} />
                <Text ml={2}>{date}</Text>
              </Box>
            </Box>
          </Flex>
          {/* <IconButton
            variant="ghost"
            colorScheme="gray"
            aria-label="See menu"
            icon={<BsThreeDotsVertical />}
          /> */}
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>{content.slice(0, 50)}...</Text>
      </CardBody>
      <Image objectFit="cover" src={image} alt="image" />
      <CardFooter
        justify="space-between"
        flexWrap="wrap"
        sx={{
          "& > button": {
            minW: "136px",
          },
        }}
      >
        <Link to={`/blog/${id}`}>
          <Button flex="1" variant="ghost" leftIcon={<AiFillRead />}>
            View Detail
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
