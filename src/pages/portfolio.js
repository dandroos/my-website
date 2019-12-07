import React from "react";
import { Row, Col, Nav, NavItem, NavLink } from "reactstrap";

import Project from "../components/Project";
import BottomPadding from "../components/BottomPadding"

export default function portfolio() {
  return (
    <div>
      <h2>My Work</h2>
      <Nav justified>
        <NavItem>
          <NavLink href="#web">Web</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#desktop">Desktop</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#mobile">Mobile</NavLink>
        </NavItem>
      </Nav>
      <h3 id="web">Web</h3>
      <Row className="mb-4">
        <Col sm={6}>
          <Project
            name="Sample project #1"
            screenshot="#"
            screenshotThumb={null}
            link="{null}"
            github="{null}"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, id. Minus non ipsam quia suscipit, qui voluptas commodi quas ab."
          />
        </Col>
        <Col sm={6}>
          <Project
            name="Sample project #2"
            screenshot="#"
            screenshotThumb={null}
            link="{null}"
            github="{null}"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, id. Minus non ipsam quia suscipit, qui voluptas commodi quas ab."
          />
        </Col>
      </Row>

      <h3 id="web">Desktop</h3>
      <Row className="mb-4">
        <Col sm={6}>
          <Project
            name="Sample project #1"
            screenshot="#"
            screenshotThumb={null}
            github="{null}"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, id. Minus non ipsam quia suscipit, qui voluptas commodi quas ab."
          />
        </Col>
        <Col sm={6}>
          <Project
            name="Sample project #2"
            screenshot="#"
            screenshotThumb={null}
            github="{null}"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, id. Minus non ipsam quia suscipit, qui voluptas commodi quas ab."
          />
        </Col>
      </Row>

      <h3 id="web">Mobile</h3>
      <Row>
        <Col sm={6}>
          <Project
            name="Sample project #1"
            screenshot="#"
            screenshotThumb={null}
            github="{null}"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, id. Minus non ipsam quia suscipit, qui voluptas commodi quas ab."
          />
        </Col>
        <Col sm={6}>
          <Project
            name="Sample project #2"
            screenshot="#"
            screenshotThumb={null}
            github="{null}"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, id. Minus non ipsam quia suscipit, qui voluptas commodi quas ab."
          />
        </Col>
      </Row>
      <BottomPadding />
    </div>
  );
}
