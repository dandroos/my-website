import React, {useEffect} from "react";
import { Row, Col, Nav, NavItem, NavLink } from "reactstrap";

import Project from "../components/Project";
import PortfolioNavLink from "../components/PortfolioNavLink"
import BottomPadding from "../components/BottomPadding"

import WebIcon from '../images/www.svg'
import DesktopIcon from '../images/workstation.svg'
import MobileIcon from '../images/mobile-app.svg'

//TODO: Add icons
//TODO: Add anchor links (with smooth scrolling)

export default function Portfolio(props) {
  useEffect(()=>{
    props.isReady()
  },[])
  return (
    <div>
      <h2>My Work</h2>
      <Nav justified className="mb-4">
        <PortfolioNavLink title="Web" link="#web" icon={WebIcon} />
        <PortfolioNavLink title="Desktop" link="#desktop" icon={DesktopIcon} />
        <PortfolioNavLink title="Mobile" link="#mobile" icon={MobileIcon} />
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

      <h3 id="desktop">Desktop</h3>
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

      <h3 id="mobile">Mobile</h3>
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
