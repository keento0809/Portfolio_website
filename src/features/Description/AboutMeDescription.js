import { useEffect, useState } from "react";
import styled from "styled-components";
import useContentful from "../../hooks/useContentful";

const AboutMeDescriptionWrapper = styled.div`
  padding: 20px 0;
  & h2 {
    padding: 1rem 0;
  }
  & p {
    color: #94a3b8;
  }
`;

const DescriptionBodyStyle = styled.div`
  padding: 1rem 0;
  &.lightMode p {
    color: #393e46;
  }
`;

const StrongStyle = styled.strong`
  font-size: 18px;
  color: #cbd5e1;

  &.lightMode {
    color: #393e46;
  }
`;

const AboutMeDescription = (props) => {
  const [desc, setDesc] = useState([]);
  const { getAboutMeDescription } = useContentful();

  const handleSetDescription = async () => {
    await getAboutMeDescription()
      .then((res) => setDesc(res[0].descriptions[0]))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    handleSetDescription();
  }, []);

  return (
    <AboutMeDescriptionWrapper>
      <h2>"Always Be Resilient"</h2>
      <DescriptionBodyStyle
        className={`${props.isLightMode ? "lightMode" : ""} description-body`}
      >
        <p className="description-body__firstParagraph">
          My name is{" "}
          <StrongStyle
            className={`${
              props.isLightMode ? "lightMode" : ""
            } description-body`}
          >
            KENTO HONDA
          </StrongStyle>
          {desc && desc["summary"]}
        </p>
        <br />
        <p>{desc && desc["specialty"]}</p>
        <br />
        <p>{desc && desc["experience"]}</p>
        <br />
        <p className="description-body__secondParagraph">
          My motto is
          <StrongStyle
            className={`${
              props.isLightMode ? "lightMode" : ""
            } description-body`}
          >
            "Always Be Resilient"
          </StrongStyle>
          {desc && desc["motto"]}
        </p>
        <br />
      </DescriptionBodyStyle>
    </AboutMeDescriptionWrapper>
  );
};

export default AboutMeDescription;
