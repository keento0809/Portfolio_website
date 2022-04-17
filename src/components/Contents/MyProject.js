import { Fragment } from "react";
import styled from "styled-components";
import classes from "../../styles/NeonText.module.css";
import MyProjectContainer from "../UI/Container/MyProjectContainer";
import ProjectDescription from "../UI/Description/ProjectDescription";

const ContentContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 60px 0;
`;

const ListStyle = styled.li`
  margin-bottom: 16px;
`;

const dummyPoints = [
  { text: "Great UI" },
  { text: "Great UX" },
  { text: "Great Feature" },
  { text: "Great something" },
];

const MyProject = () => {
  return (
    <ContentContainer>
      <section id="myproject" className="myProject section">
        <h4 className={`${classes.flux} section-title`}>My Projects</h4>
        <ul>
          <ListStyle>
            <MyProjectContainer>
              <div className="project-title">
                <h3>FreshMarche</h3>
              </div>
              <ProjectDescription
                summary="Description Summary is here."
                points={dummyPoints}
              />
              <div className="project-image">
                <img src="" alt="" />
              </div>
              <div className="languages">
                <p>Languages</p>
                <div className="skill-icons">
                  <i className="devicon-javascript-plain"></i>
                  <i className="devicon-react-original"></i>
                  <i className="devicon-firebase-plain"></i>
                  <i className="devicon-materialui-plain"></i>
                </div>
              </div>
              <div className="link-icons">
                <p>Links</p>
                <i className="devicon-github-original"></i>
                <ion-icon name="link-outline"></ion-icon>
              </div>
            </MyProjectContainer>
          </ListStyle>
          <ListStyle>
            <MyProjectContainer>
              <div className="project-title">
                <h3>FreshMarche</h3>
              </div>
              <ProjectDescription
                summary="Description Summary is here."
                points={dummyPoints}
              />
              <div className="project-image">
                <img src="" alt="" />
              </div>
              <div className="skillset">
                <p>Languages</p>
                <div className="skill-icons">
                  <i className="devicon-javascript-plain"></i>
                  <i className="devicon-react-original"></i>
                  <i className="devicon-firebase-plain"></i>
                  <i className="devicon-materialui-plain"></i>
                </div>
              </div>
              <div className="link-icons">
                <p>Links</p>
                <i className="devicon-github-original"></i>
                <ion-icon name="link-outline"></ion-icon>
              </div>
            </MyProjectContainer>
          </ListStyle>
          <ListStyle>
            <MyProjectContainer>
              <div className="project-title">
                <h3>FreshMarche</h3>
              </div>
              <ProjectDescription
                summary="Description Summary is here."
                points={dummyPoints}
              />
              <div className="project-image">
                <img src="" alt="" />
              </div>
              <div className="skillset">
                <p>Languages</p>
                <div className="skill-icons">
                  <i className="devicon-javascript-plain"></i>
                  <i className="devicon-react-original"></i>
                  <i className="devicon-firebase-plain"></i>
                  <i className="devicon-materialui-plain"></i>
                </div>
              </div>
              <div className="link-icons">
                <p>Links</p>
                <i className="devicon-github-original"></i>
                <ion-icon name="link-outline"></ion-icon>
              </div>
            </MyProjectContainer>
          </ListStyle>
        </ul>
      </section>
    </ContentContainer>
  );
};

export default MyProject;
