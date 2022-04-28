import styled from "styled-components";
import AnchorLink from "react-anchor-link-smooth-scroll";

// original code
const ButtonStyle = styled.a`
  display: inline-block;
  background-color: transparent;
  cursor: pointer;
  color: #8bfdfe;
  padding: 0.6rem 1.7rem;
  border: 1px solid #8bfdfe;
  border-radius: 8px;
  transition: all 0.5s ease;
  transform: none;

  &:hover {
    transform: scale(1.1);
  }

  &.lightMode {
    color: #1b1f29;
    border-color: #1b1f29;
  }
`;
const ButtonWrapperStyle = styled.div`
  & a {
    display: inline-block;
    background-color: transparent;
    cursor: pointer;
    color: #8bfdfe;
    padding: 0.6rem 1.7rem;
    border: 1px solid #8bfdfe;
    border-radius: 8px;
    transition: all 0.5s ease;
    transform: none;

    &:hover {
      transform: scale(1.1);
    }

    &.lightMode {
      color: #1b1f29;
      border-color: #1b1f29;
    }
  }
`;

const ButtonUI = (props) => {
  return (
    <ButtonWrapperStyle>
      {props.label === "SAY HELLO" && (
        <a href={props.url} className={props.isLightMode ? "lightMode" : ""}>
          {props.label}
        </a>
      )}
      {props.label !== "SAY HELLO" && (
        <AnchorLink
          href={props.url}
          className={props.isLightMode ? "lightMode" : ""}
        >
          {props.label}
        </AnchorLink>
      )}
    </ButtonWrapperStyle>
  );
};

export default ButtonUI;
