import { useEffect } from "react";

const Project = () => {
  useEffect(() => {
    document.title = "minhtrifit | Project";
  });

  return <div style={{ padding: "20px 20px" }}>Project</div>;
};

export default Project;
