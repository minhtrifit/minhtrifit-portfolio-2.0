import { Box, Icon } from "@chakra-ui/react";
import { useEffect } from "react";
import { BiLogoReact, BiLogoFirebase, BiLogoPostgresql } from "react-icons/bi";
import { SiExpress, SiMaterialdesignicons, SiNestjs } from "react-icons/si";
import { AiFillHtml5, AiOutlineAntDesign } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";

import ProjectCard from "../components/ProjectCard";

const Project = () => {
  useEffect(() => {
    document.title = "minhtrifit | Project";
    window.scrollTo(0, 0);
  });

  return (
    <Box
      style={{ padding: "20px 20px", marginBottom: "300px" }}
      display={"flex"}
      flexDirection={"column"}
      gap={10}
    >
      <ProjectCard
        name="Slearninglab - Education Training"
        youtube="https://youtu.be/g9WHplySekY"
        github="https://github.com/minhtrifit/slearninglab-client"
        description="Application to support online teaching and study"
        tech={[
          <Icon as={BiLogoReact} color={"blue.500"} w={14} h={14} />,
          <Icon as={AiOutlineAntDesign} color={"red.500"} w={14} h={14} />,
          <Icon as={SiNestjs} color={"pink.500"} w={14} h={14} />,
          <Icon as={BiLogoPostgresql} color={"blue.500"} w={14} h={14} />,
        ]}
        date="27th Aug 2023"
      />
      <ProjectCard
        name="FigureWorld - Shopping & Forum"
        youtube="https://youtu.be/7dAkC-3clqM"
        github="https://github.com/minhtrifit/pern-figure-world-client"
        description="Online application & forum to trading figure"
        tech={[
          <Icon as={BiLogoReact} color={"blue.500"} w={14} h={14} />,
          <Icon
            as={SiMaterialdesignicons}
            color={"purple.500"}
            w={14}
            h={14}
          />,
          <Icon as={BiLogoFirebase} color={"yellow.500"} w={14} h={14} />,
          <Icon as={SiExpress} color={"black.500"} w={14} h={14} />,
          <Icon as={BiLogoPostgresql} color={"blue.500"} w={14} h={14} />,
        ]}
        date="10th May 2023"
      />
      <ProjectCard
        name="VietNam Driving License Quiz"
        youtube="https://youtu.be/VMGRnCaCUBE"
        github="https://github.com/minhtrifit/driving-license-nodejs"
        description="Application to training about driving license quiz"
        tech={[
          <Icon as={AiFillHtml5} color={"red.500"} w={14} h={14} />,
          <Icon as={DiCss3} color={"purple.500"} w={14} h={14} />,
          <Icon as={SiExpress} color={"black.500"} w={14} h={14} />,
          <Icon as={BiLogoPostgresql} color={"blue.500"} w={14} h={14} />,
        ]}
        date="12th Feb 2023"
      />
    </Box>
  );
};

export default Project;
