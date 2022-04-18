import { Fragment } from "react";
import styled from "styled-components";
import Title from "../UI/Title/Title";
import ContentWrapper from "../UI/Wrapper/ContentWrapper";

const UlStyle = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const ButtonStyle = styled.button`
  background-color: transparent;
  color: #8bfdfe;
  border: none;
  cursor: pointer;
  border: 1px solid #8bfdfe;
  border-radius: 4px;
  padding: 0;
`;

const ContactMe = () => {
  return (
    <ContentWrapper>
      <section id="contactme" className="contactMe section">
        <Title title="Contact Me" />
        <div className="contactMe__iconsList">
          <UlStyle>
            <li>
              <a href="">
                <ion-icon name="call-outline"></ion-icon>
              </a>
            </li>
            <li>
              <a href="">
                <ion-icon name="mail-outline"></ion-icon>
              </a>
            </li>
            <li>
              <a href="">
                <i className="devicon-linkedin-plain"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="devicon-github-original"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="devicon-twitter-original"></i>
              </a>
            </li>
          </UlStyle>
        </div>
        <div className="contactMe__description">
          <p>
            I'm always looking for opportunities to work as a front-end
            developer around Vancouver. Please free to contact me.
          </p>
        </div>
        <div className="contactMe__mailButton">
          <ButtonStyle>SAY HELLO</ButtonStyle>
        </div>
      </section>
    </ContentWrapper>
  );
};

export default ContactMe;
