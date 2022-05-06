import styled from "styled-components";
import ProjectSectionWrapper from "../Wrapper/ProjectSectionWrapper";

const ProjectSummaryWrapper = styled.div`
  padding-bottom: 1rem;

  & p {
    color: #94a3b8;
  }

  &.lightMode p {
    color: #656e7b;
  }
`;

const ImageDivStyle = styled.div`
  position: relative;
  margin: 0.1rem 0 1rem;
  width: 302px;
  height: 220px;

  & .imageBackdrop {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(5, 7, 16, 0.2);
    z-index: 4;
    border-radius: 8px;

    &.lightMode {
      background-color: rgb(187 189 194 / 30%);
    }
  }

  & img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    object-fit: contain;
  }

  @media screen and (min-width: 768px) {
    width: 592px;
    height: 320px;
  }
  @media screen and (min-width: 1023px) {
    width: 848px;
    height: 400px;
  }
  @media screen and (min-width: 1300px) {
    /* width: 1124px; */
    /* height: 340px; */
  }
`;

const LiStyle = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 0.5rem;

  & ion-icon {
    padding-right: 0.5rem;
  }

  & span {
    font-size: 18px;
    line-height: 26px;
  }
`;

const ProjectDescription = (props) => {
  const pointsList = props.points.map((point, index) => {
    return (
      <LiStyle key={index}>
        <ion-icon name="checkmark-outline"></ion-icon>
        <span>{point.text}</span>
      </LiStyle>
    );
  });

  return (
    <ProjectSectionWrapper>
      <div className="とりまっか">
        {/* test */}
        <ImageDivStyle className="">
          <div
            className={`${props.isLightMode ? "lightMode" : ""} imageBackdrop`}
          ></div>
          <img src={`${props.imageUrl}`} alt="" width="300px" height="250px" />
        </ImageDivStyle>
        <ProjectSummaryWrapper
          className={`${
            props.isLightMode ? "lightMode" : ""
          } MyProjectDescription-summary`}
        >
          <p>{props.summary}</p>
        </ProjectSummaryWrapper>

        <div className="MyProjectDescription-body">
          <ul>{pointsList}</ul>
        </div>
      </div>
    </ProjectSectionWrapper>
  );
};

export default ProjectDescription;
