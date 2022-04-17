import { Fragment } from "react";
import styled from "styled-components";

// const UlStyle = styled.ul`
//   color: #;
// `

const SpecialtyList = (props) => {
  // test
  const list = props.specialties.map((skill, index) => (
    <li key={index}>{skill.name}</li>
  ));

  return (
    <Fragment>
      <div className="">
        <h4>{props.title}</h4>
        <ul>{list}</ul>
      </div>
    </Fragment>
  );
};

export default SpecialtyList;
