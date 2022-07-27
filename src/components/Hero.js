import React from "react";
import styled from "styled-components";
import Typed from "react-typed";

import profile from "../images/profile.png";

function Hero() {
  return (
    <Wrapper>
      <div>
        {" "}
        <Title>
          {" "}
          <Typed
            strings={["Hello, I'm Rendani"]}
            typeSpeed={40}
            backSpeed={50}
            showCursor={false}
          />
        </Title>
        <p>
          I am Technical writer with software development background. I use
          technical writing to help user under. I'm a Technical writer with 2
          years experience of frontend development. I use technical writing to
          solve challenging problems for users and companies. You can check out
          my work below:
        </p>
      </div>
      <img src={profile} alt="Profile" width="500px" />
    </Wrapper>
  );
}

export default Hero;

const Title = styled.h1`
  color: #D66777;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin-right: auto;
  margin-left: auto;
  width: 100%;
 
`;
