import React, {useState} from "react";
import styled from "styled-components";
import {Link} from "gatsby";

const MobileMenuStyles = styled.div`
  overflow-x: hidden;
`

const MenuIcon = styled.button`
  position: fixed;
  top: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 10;
  div {
    width: 1.5rem;
    height: .2rem;
    background: black;
    border-radius: 5px;
    transform-origin: 1px;
    position: relative;
    transition: opacity 300ms, transform 300ms;
    :first-child {
      transform: ${({nav}) => nav ? 'rotate(45deg)' : 'rotate(0)'};
    }
    :nth-child(2) {
      opacity: ${({nav}) => nav ? '0' : '1'};
    }
    :nth-child(3) {
      transform: ${({nav}) => nav ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`
const MenuLinks = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 300ms;
  transform: ${({ nav }) => nav ? "translateX(0)" : "translateX(100%)"};
  z-index: 5;

  ul {
    list-style-type: none;
  }

  li {
    margin-top: 1rem;
  }

  a {
    text-decoration: none;
    color: black;
    font-size: 1.5rem;
    transition: color 300ms;

    :hover {
      color: red;
    }
  }
`

export default function BurgerMenu() {

  const [nav, showNav] = useState( false );

  return  (
    <MobileMenuStyles>

      <MenuIcon nav={nav} onClick={()=> showNav(!nav)}>
        <div />
        <div />
        <div />
      </MenuIcon>
      <MenuLinks nav={nav}>
        <ul>
          <li><Link to="https://fienta.com/sv/tedxki" target="_blank" rel="noreferrer">Tickets</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/sponsors">Sponsors</Link></li>
          <li><Link to="/videos">Videos</Link></li>
          <li><Link to="/speakers">Speakers</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/get-involved">Get Involved</Link></li>
        </ul>
      </MenuLinks>
    </MobileMenuStyles>
  );
};
