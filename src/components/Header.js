import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FormattedMessage } from "react-intl"
import styled from "styled-components"
import UKFlag from "../images/united-kingdom.svg"
import SpanishFlag from "../images/spain.svg"

export default function Header(props) {

  const Flag = styled.img`
    width: 1.5rem;
    cursor: pointer;
    transition: all .25s;
    :not(:last-of-type){
      margin-right: 5px;
    }

    :hover {
      transform: translateY(-4px);
    }
  `
  const current = useLocation();
  const handleClick = (e) => {
    if (current.pathname !== "/") {
      props.toggle(e, true);
    }
  };
  return (
    <div className="p-2" style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr'
    }}>
      <Link to="/" onClick={handleClick} linkclick="true" className="navbar-brand">
        <h1 linkclick="true"
          style={{
            margin: 0
          }}
        >
          David Andrews{" "}
          <span linkclick="true"
            className="text-muted"
            style={{
              fontSize: "1.75rem",
              display: "block"
            }}
          >
            <FormattedMessage id="heading.job_description" defaultMessage="App Developer"/>
          </span>
        </h1>
      </Link>
      <div style={{
        placeSelf: 'flex-start end',
        paddingRight: '.2rem'
      }}>
        <Flag src={UKFlag} alt="UK Flag" id="english" onClick={props.setLang} />
        <Flag src={SpanishFlag} alt="Spanish Flag" id="spanish" onClick={props.setLang}/>
      </div>
    </div>
  );
}
