import styled from "styled-components";
import Title from "../components/Title/Title";
import ContentWrapper from "../components/Wrapper/ContentWrapper";
import ButtonUI from "../components/Button/Button";
import useToggleModeContext from "../hooks/useToggleModeContext";

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

const ContactMe = () => {
  const { isLightMode } = useToggleModeContext();
  return (
    <div id="contactme">
      <ContentWrapper>
        <section className="contactMe section">
          <Title title="Contact" isLightMode={isLightMode} />
          <div className="contactMe__iconsList">
            <UlStyle className={isLightMode ? "lightMode" : ""}>
              <li>
                <a href={`tel:${process.env.REACT_APP_MY_PHONE}`}>
                  <ion-icon name="call-outline"></ion-icon>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${process.env.REACT_APP_MY_EMAIL}`}
                  target="_blank"
                >
                  <ion-icon name="mail-outline"></ion-icon>
                </a>
              </li>
              <li>
                <a
                  href={`${process.env.REACT_APP_MY_LINKEDIN}`}
                  target="_blank"
                >
                  <i className="devicon-linkedin-plain"></i>
                </a>
              </li>
              <li>
                <a href={`${process.env.REACT_APP_MY_GITHUB}`} target="_blank">
                  <i className="devicon-github-original"></i>
                </a>
              </li>
              <li>
                <a href={`${process.env.REACT_APP_MY_TWITTER}`} target="_blank">
                  <i className="devicon-twitter-original"></i>
                </a>
              </li>
            </UlStyle>
          </div>
          <ContactMeDescriptionStyle className="contactMe__description">
            <p>
              I'm always looking for opportunities to work as a web developer.
              Please free to contact me.
            </p>
          </ContactMeDescriptionStyle>
          <ButtonContainerStyle className="contactMe__mailButton">
            <ButtonUI
              label={"SAY HELLO"}
              url={`mailto:${process.env.REACT_APP_MY_EMAIL}`}
              isLightMode={isLightMode}
            />
          </ButtonContainerStyle>
        </section>
      </ContentWrapper>
    </div>
  );
};

export default ContactMe;
