import React, { useEffect, useState } from "react";
import ContentWrapper from "../UI/Wrapper/ContentWrapper";
import Title from "../UI/Title/Title";
import Project from "./Project";
import useContentful from "../../hooks/useContentful";

const MyProject = () => {
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

export default MyProject;
