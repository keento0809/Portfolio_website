import { Fragment } from "react";
import styled from "styled-components";
import classes from "../../styles/NeonText.module.css";
import MyProjectContainer from "../UI/Container/MyProjectContainer";

const ContentContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 60px 0;
`;

const MyProject = () => {
  return (
    <ContentContainer>
      <section id="myproject" className="myProject section">
        <h4 className={`${classes.flux} section-title`}>My Projects</h4>
        <ul>
          <li>
            {/* original code */}
            {/* <div className="myProject__paper first-project"> */}
            <MyProjectContainer>
              <div className="project-title">
                <h3>FreshMarche</h3>
              </div>
              <div className="project-description">
                <p>Fill out the description of my project here.</p>
                <ul>
                  <li>
                    <ion-icon name="checkmark-outline"></ion-icon>Point A
                  </li>
                  <li>
                    <ion-icon name="checkmark-outline"></ion-icon>Point B
                  </li>
                  <li>
                    <ion-icon name="checkmark-outline"></ion-icon>Point C
                  </li>
                  <li>
                    <ion-icon name="checkmark-outline"></ion-icon>Point D
                  </li>
                </ul>
              </div>
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
            {/* </div> */}
          </li>
          <li></li>
          <li></li>
        </ul>
      </section>
    </ContentContainer>
  );
};

export default MyProject;
