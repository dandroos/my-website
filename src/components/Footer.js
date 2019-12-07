import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faFacebookMessenger
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div
      className="footer-bar shadow-lg bg-primary heading"
      style={{
        position: "fixed",
        bottom: 0,
        textAlign: "center",
        width: "100%"
      }}
    >
      <Nav justified pills>
        <NavItem>
          <ContactMethod title="Phone" icon={faPhone} />
        </NavItem>
        <NavItem>
          <ContactMethod title="Email" icon={faEnvelope} />
        </NavItem>
        <NavItem>
          <ContactMethod title="WhatsApp" icon={faWhatsapp} />
        </NavItem>
        <NavItem>
          <ContactMethod title="Messenger" icon={faFacebookMessenger} />
        </NavItem>
      </Nav>
    </div>
  );
}

const ContactMethod = props => {
  return (
    <NavLink href="#" className="btn btn-primary">
      <FontAwesomeIcon icon={props.icon} className="text-center" />
      <p className="mb-0">
        <small>{props.title}</small>
      </p>
    </NavLink>
  );
};
