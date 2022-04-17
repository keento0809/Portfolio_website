import { Fragment } from "react";
import styled from "styled-components";

const SpecialtyListWrapper = styled.div`
  padding: 20px 0;
`;

const SpecialtyList = (props) => {
  // test
  const list = props.specialties.map((skill, index) => (
    <li key={index}>{skill.name}</li>
  ));

  return (
    <SpecialtyListWrapper className="">
      <h4>{props.title}</h4>
      <ul>{list}</ul>
    </SpecialtyListWrapper>
  );
};

export default SpecialtyList;
