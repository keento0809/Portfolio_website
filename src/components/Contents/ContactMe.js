import { Fragment } from "react";
import styled from "styled-components";
import Title from "../UI/Title/Title";
import ContentWrapper from "../UI/Wrapper/ContentWrapper";

const ContactMe = () => {
  return (
    <ContentWrapper>
      <section className="contactMe section">
        <Title title="Contact Me" />
        <div className="contactMe__iconsList">
          <ul>
            <li>
              <a href="">
                <ion-icon name="call-outline"></ion-icon>
              </a>
            </li>
            <li>
              <a href="">
                <ion-icon name="mail-outline"></ion-icon>
              </a>
            </li>
            <li>
              <a href="">
                <i className="devicon-linkedin-plain"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="devicon-github-original"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="devicon-twitter-original"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="contactMe__description">
          <p>
            I'm always looking for opportunities to work as a front-end
            developer around Vancouver. Please free to contact me.
          </p>
        </div>
        <div className="contactMe__mailButton">
          <button>SAY HELLO</button>
        </div>
      </section>
    </ContentWrapper>
  );
};

export default ContactMe;
