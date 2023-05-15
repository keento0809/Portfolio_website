import { useEffect, useState } from "react";
import ContentWrapper from "../../components/Wrapper/ContentWrapper";
import Title from "../../components/Title/Title";
import Project from "../Project";
import useContentful from "../../hooks/useContentful";

const Projects = () => {
  const [projectImages, setProjectImages] = useState({});
  const [projectInfoArray, setProjectInfoArray] = useState([]);
  const { getProjectImages, getProjectInfo } = useContentful();
  const handleSetProjectImages = async () => {
    await getProjectImages()
      .then((res) => {
        setProjectImages(res);
      })
      .catch((err) => console.log(err));
    await getProjectInfo()
      .then((res) => setProjectInfoArray(res))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    handleSetProjectImages();
  }, []);
  return (
    <div id="myproject">
      <ContentWrapper>
        <section className="myProject section">
          <Title title="Project" />
          <ul>
            {projectInfoArray &&
              projectInfoArray.map((project, index) => {
                const {
                  projectTitle,
                  summary,
                  points,
                  languages,
                  gitHubUrl,
                  linkUrl,
                } = project;
                return (
                  <Project
                    key={index + project.projectTitle}
                    projectTitle={projectTitle}
                    summary={summary}
                    points={points}
                    languages={languages}
                    gitHubUrl={gitHubUrl}
                    linkUrl={linkUrl}
                    imageUrl={projectImages && projectImages[projectTitle]}
                  />
                );
              })}
          </ul>
        </section>
      </ContentWrapper>
    </div>
  );
};

export default Projects;
