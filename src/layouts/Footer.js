import { Fragment } from "react";
import styled from "styled-components";

const FooterStyle = styled.footer`
  padding: 0.5rem 0;
  text-align: center;
  font-size: 12px;
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
