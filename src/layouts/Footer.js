import { Fragment } from "react";
import styled from "styled-components";

const FooterStyle = styled.footer`
  padding-top: 0.8rem;
  padding-bottom: 0.5rem;
  text-align: center;
  font-size: 12px;
  letter-spacing: -0.5px;
`;

const Footer = () => {
  return (
    <FooterStyle>
      <div className="copyright">
        <span>©︎ KENTO HONDA 2022. All Rights Reserved.</span>
      </div>
    </FooterStyle>
  );
};

export default Footer;
