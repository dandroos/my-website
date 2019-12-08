import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import SocialBar from "./SocialBar"

export default function Nav(props) {
  const Menu = styled.nav`
    position: relative;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0;
    z-index: 500;
  `;
  return (
    <Menu>
      <ul
        style={{
          textAlign: "center",
          fontSize: "3.25rem"
        }}
        className="heading"
      >
        <li>
          <Link to="/" onClick={props.toggle} className="nav-menu-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/services" onClick={props.toggle} className="nav-menu-link">
            Services
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={props.toggle} className="nav-menu-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/portfolio" onClick={props.toggle} className="nav-menu-link"> 
            My Work
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={props.toggle} className="nav-menu-link">
            Contact
          </Link>
        </li>
      </ul>
      <SocialBar />
    </Menu>
  );
}
