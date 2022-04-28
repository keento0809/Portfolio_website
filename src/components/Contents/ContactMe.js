import { Fragment } from "react";
import styled from "styled-components";
import Title from "../UI/Title/Title";
import ContentWrapper from "../UI/Wrapper/ContentWrapper";
import ButtonUI from "../UI/Button/Button";
import ReactTooltip from "react-tooltip";

const UlStyle = styled.ul`
  margin: 0 auto;
  padding: 1rem 0;
  width: 100%;
  max-width: 270px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  line-height: 24px;

  &.lightMode a {
    color: #1b1f29;
  }

  & ion-icon,
  & i {
    transform: none;
    transition: all 0.5s ease;
    display: inline-block;
  }

  & ion-icon:hover,
  & i:hover {
    transform: scale(1.2);
    transition: all 0.5s ease;
  }
`;

const ContactMeDescriptionStyle = styled.div`
  padding: 2rem 0.5rem;
  text-align: center;

  @media screen and (min-width: 617px) {
    width: 60%;
    margin: 0 auto;
  }
`;

const ButtonContainerStyle = styled.div`
  text-align: center;
  padding: 1rem 0;
`;

const ButtonStyle = styled.a`
  display: inline-block;
  background-color: transparent;
  cursor: pointer;
  color: #8bfdfe;
  padding: 0.6rem 1.7rem;
  border: 1px solid #8bfdfe;
  border-radius: 8px;

  &.lightMode {
    color: #1b1f29;
    border-color: #1b1f29;
  }
`;

const ContactMe = (props) => {
  return (
    <div id="contactme">
      <ContentWrapper>
        <section className="contactMe section">
          <Title title="Contact" isLightMode={props.isLightMode} />
          <div className="contactMe__iconsList">
            <UlStyle className={props.isLightMode ? "lightMode" : ""}>
              <li>
                <a href="">
                  <ion-icon name="call-outline"></ion-icon>
                </a>
              </li>
              <li>
                <a href="mailto:kentos1112canada@gmail.com">
                  <ion-icon name="mail-outline"></ion-icon>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/kento-honda-342a7a227/">
                  <i className="devicon-linkedin-plain"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/keento0809">
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
          <ContactMeDescriptionStyle className="contactMe__description">
            <p>
              I'm always looking for opportunities to work as a front-end
              developer. Please free to contact me.
            </p>
          </ContactMeDescriptionStyle>
          <ButtonContainerStyle className="contactMe__mailButton">
            <ButtonUI
              label={"SAY HELLO"}
              url={"mailto:kentos1112canada@gmail.com"}
              isLightMode={props.isLightMode}
            />
          </ButtonContainerStyle>
        </section>
      </ContentWrapper>
      {/* test */}
    </div>
  );
};

export default ContactMe;
