import styled from "styled-components";

const PaperStyle = styled.div`
  width: 100%;
  min-height: 900px;
  padding: 0rem 2rem;
  border-radius: 8px;
  &.lightMode {
    background-color: #e7edff;
  }
`;

const MyProjectContainer = (props) => {
  return (
    <PaperStyle className={props.isLightMode ? "lightMode" : ""}>
      {props.children}
    </PaperStyle>
  );
};

export default MyProjectContainer;
