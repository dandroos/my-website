import React from "react";
import { Button, Nav, NavItem, NavLink } from "reactstrap";

export default function Project(props) {
  return (
    <div className="mb-4">
      {/* screenshot */}
      <h4>{props.name}</h4>

      <small>
        <Nav justified>
          <NavItem>
            <NavLink href={props.screenshot}>Zoom image</NavLink>
          </NavItem>
          {props.link ? (
            <NavItem>
              <NavLink href={props.link}>Open site</NavLink>
            </NavItem>
          ) : null}
          <NavItem>
            <NavLink href={props.github}>View code</NavLink>
          </NavItem>
        </Nav>
      </small>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
        earum minima, itaque, illum accusamus ipsam quam voluptatem quo
        assumenda beatae eligendi eos possimus quidem ab molestiae. Debitis
        inventore repellat aspernatur?
      </p>
      <Button color="link" href="#">Back to top</Button>
    </div>
  );
}
