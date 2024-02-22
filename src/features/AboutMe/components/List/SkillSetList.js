import styled from "styled-components";
import ProjectSectionWrapper from "../../../../components/Wrapper/ProjectSectionWrapper";
import useContentful from "../../../../hooks/useContentful";
import { useEffect, useState } from "react";

const SkillIconsStyle = styled.div`
  color: #fff;
  font-size: 24px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1rem 0;

  & i {
    padding: 1rem;
    color: #fff;
  }

  &.lightMode i {
    color: #19224e;
  }
`;

const SkillSetList = (props) => {
  const { getSkillSetList } = useContentful();
  const [skillSetList, setSkillSetList] = useState();
  const handleGetSkillSetList = async () => {
    await getSkillSetList()
      .then((res) => setSkillSetList(res[0].skillSetList))
      .catch((err) => console.log(err));
  };
  const skillSetRender = skillSetList?.map((skill, index) => {
    const { name } = skill;
    return <i className={`devicon-${name}`} key={name + index}></i>;
  });
  useEffect(() => {
    handleGetSkillSetList();
  }, []);
  return (
    <ProjectSectionWrapper>
      <h2>SKILL SETS</h2>
      <SkillIconsStyle
        className={`${
          props.isLightMode ? "lightMode" : ""
        } aboutMe__skillicons`}
      >
        {skillSetRender}
      </SkillIconsStyle>
    </ProjectSectionWrapper>
  );
};

export default SkillSetList;
