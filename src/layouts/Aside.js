import { Fragment } from "react";
import styled from "styled-components";

const AsideStyle = styled.aside`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: min(68vw, 400px);
  background-color: #0e1b35;
  transform: translateX(100%);
  transition: all 0.3s ease;
  z-index: 8;

  &.show {
    transform: none;
    transition: all 0.3s ease;
  }
`;

const Aside = (props) => {
  const shown = props.isAsideShown ? "show" : "";
  return (
    <AsideStyle className={shown}>
      <div className="aside-container">
        <div class="">
          <h4>Menu</h4>
        </div>
        <ul class="aside-container__menuList">
          <li className="menuBtns">
            <a href="#home">Home</a>
          </li>
          <li className="menuBtns">
            <a href="#aboutme">About me</a>
          </li>
          <li className="menuBtns">
            <a href="#myproject">My project</a>
          </li>
          <li className="menuBtns">
            <a href="#contactme">Contact</a>
          </li>
        </ul>
        <div className="">
          <a href="" className="resumeLink">
            Resume
          </a>
        </div>
      </div>
    </AsideStyle>
  );
};

export default Aside;
