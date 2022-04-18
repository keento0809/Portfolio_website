import { Fragment } from "react";
import styled from "styled-components";
import ProjectSectionWrapper from "../Wrapper/ProjectSectionWrapper";

const UlStyle = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const ContactIconsList = (props) => {
  //   const ionIconsList =

  const devIconsList = props.languages.map((lan, index) => {
    return (
      <li key={index}>
        <i
          className={`devicon-${lan.name}-${
            lan.type === "original" ? "original" : "plain"
          }`}
        ></i>
      </li>
    );
  });

  return (
    <ProjectSectionWrapper>
      <div className="contactIcons">
        <UlStyle className="skill-icons">
          {/* <li>
            <a href="">
              <ion-icon name="call-outline"></ion-icon>
            </a>
          </li>
          <li>
            <a href="">
              <ion-icon name="mail-outline"></ion-icon>
            </a>
          </li> */}
          {devIconsList}
        </UlStyle>
      </div>
    </ProjectSectionWrapper>
  );
};

export default ContactIconsList;
