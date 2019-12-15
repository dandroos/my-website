import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { FormattedMessage } from "react-intl";
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
          <ContactMethod title="call" icon={faPhone} />
        </NavItem>
        <NavItem>
          <ContactMethod title="email" icon={faEnvelope} />
        </NavItem>
        <NavItem>
          <ContactMethod title="whatsapp" icon={faWhatsapp} />
        </NavItem>
        <NavItem>
          <ContactMethod title="messenger" icon={faFacebookMessenger} />
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
        <small>
          <FormattedMessage id={`footer.${props.title}`} defaultMessage="en" />
        </small>
      </p>
    </NavLink>
  );
};
