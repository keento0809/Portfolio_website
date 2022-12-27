import styled from "styled-components";
import Backdrop from "../Backdrop/Backdrop";
import useChangeLayoutContext from "../../../hooks/useChangeLayoutContext";

const ContainerWrapperStyle = styled.div`
  padding: 0 24px;
  &.shown {
    opacity: 0.5;
  }
  @media screen and (min-width: 767px) {
    padding: 0 56px;
  }
`;

const ContainerWrapper = ({ children }) => {
  const { isAsideShown, setIsAsideShown } = useChangeLayoutContext();
  return (
    <div>
      <Backdrop isAsideShown={isAsideShown} setIsAsideShown={setIsAsideShown} />
      <ContainerWrapperStyle className={isAsideShown ? "shown" : ""}>
        {children}
      </ContainerWrapperStyle>
    </div>
  );
};

export default ContainerWrapper;
