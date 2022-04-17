import { Fragment } from "react";
import styled from "styled-components";

const ContainerWrapperStyle = styled.div`
  padding: 0 24px;
`;

const ContainerWrapper = (props) => {
  return <ContainerWrapperStyle>{props.children}</ContainerWrapperStyle>;
};

export default ContainerWrapper;
