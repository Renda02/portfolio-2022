import React from "react";
import styled from "styled-components";

function Nav() {
  return (
    <NavWrapper>
      <Navigation>
        <Logo className="logo-name">Renda-ni</Logo>
        <NavMenu className="nav-list">
          <NavItems>
            <a href="/">Home</a>
          </NavItems>
          <NavItems>
            <a href="/">Portfolio</a>
          </NavItems>
          <NavItems>
            <a href="/">About Me</a>
          </NavItems>
        </NavMenu>
      </Navigation>
    </NavWrapper>
  );
}

export default Nav;

const NavWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 5;
  width: 100%;
  display: flex;
  justify-content: center;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.12);
`;

const Logo = styled.h2`
  font-size: 2em;
  color: #5c31ac;
`;

const Navigation = styled.nav`
  width: 100%;
  padding: 1em 0;

  display: flex;
  justify-content: space-between;

  z-index: 1;
`;

const NavMenu = styled.ul`
  display: flex;

  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavItems = styled.li`
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 18px;
  text-decoration: none;
  font-weight: 400;
  padding: 10px;
  text-align: center;
  transition: all 0.3s ease;
`;
