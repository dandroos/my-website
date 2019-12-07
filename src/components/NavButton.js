import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

export default function NavButton(props) {
    const Toggler = styled.div`
        position: fixed;
        top: 15px;
        right: 15px;
        z-index: 1000;
        box-shadow: 0 0 .25rem;
        border-radius: 50%;
        height: 3rem;
        width: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: all .25s;

        :hover{
            box-shadow: 0 0 .5rem;
        }
    `
  return (
    <Toggler
      onClick={props.click}
      className="toggler"
    >
      <div>
        {props.isOpen ? (<FontAwesomeIcon icon={faBars} />) : (<FontAwesomeIcon icon={faTimes} />)
        }
      </div>
    </Toggler>
  );
}

const lineStyle = {
  borderBottom: "2px solid",
  display: "block",
  height: 5,
  width: "100%"
};
