import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function SocialBar() {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 60
      }}
    >
      <Nav>
        <NavItem>
          <NavLink href="#">
            <FontAwesomeIcon icon={faFacebook} />
            <div>
                Facebook
            </div>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <FontAwesomeIcon icon={faInstagram} />
            <div>
                Instagram
            </div>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <FontAwesomeIcon icon={faGithub} />
            <div>
                Github
            </div>
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}
