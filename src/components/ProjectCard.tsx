import { ReactElement } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Button,
  Box,
  Icon,
} from "@chakra-ui/react";
import { AiFillCalendar } from "react-icons/ai";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { v4 } from "uuid";

interface PropType {
  name: string;
  youtube?: string;
  github: string;
  description: string;
  tech?: ReactElement[];
  date: string;
}

const ProjectCard = (props: PropType) => {
  const { name, youtube, github, description, tech, date } = props;

  return (
    <div>
      <Card
        direction={{ base: "column", lg: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Box minWidth={{ base: "100%", lg: "400px", xl: "600px" }}>
          <ReactPlayer width="100%" url={youtube} />
        </Box>
        <Stack>
          <CardBody>
            <Heading size="md">{name}</Heading>
            <Text fontWeight={"bold"} py="2" color="#1a75eb">
              Description: {description}
            </Text>
            <Box mt={3} display={"flex"} gap={5} flexWrap={"wrap"}>
              {tech?.map((item) => {
                const uid = v4();
                return <Box key={uid}>{item}</Box>;
              })}
            </Box>
            <Box mt={10} display={"flex"} gap={3} alignItems={"center"}>
              <Icon as={AiFillCalendar} color={"black.500"} w={8} h={8} />
              <Text>{date}</Text>
            </Box>
          </CardBody>

          <CardFooter>
            <Link to={github}>
              <Button variant="solid" colorScheme="cyan">
                Source Code
              </Button>
            </Link>
          </CardFooter>
        </Stack>
      </Card>
    </div>
  );
};

export default ProjectCard;
