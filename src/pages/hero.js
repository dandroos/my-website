import React, { useState } from "react";
import {Link} from "react-router-dom"
import styled from "styled-components";
import { Button } from "reactstrap";
import BackgroundImageOnLoad from "background-image-on-load";

import { FormattedMessage } from 'react-intl';
import LanguageBank from '../text/languages'

import LoadScreen from "../components/LoadScreen";
import BG from "../images/dave1-optimized.jpeg";

export default function Hero(props) {

  const [isReady, setIsReady] = useState(false)

  const Hero = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(
        rgba(255, 255, 255, 0.55),
        rgba(255, 255, 255, 0.75)
      ),
      url(${BG});
    background-size: cover;
    background-position: top center;
    z-index: -50;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const handleClick = (e)=>{
    props.toggle(e, true)
  }

  return (
    <Hero className="hero">
      <BackgroundImageOnLoad
        src={BG}
        onLoadBg={() => {
          props.isReady();
        }}
        onError={err => console.log("error", err)}
      />
      <div className="container">
        <h2
          className="display-3"
          style={{
            marginTop: '5rem',
          }}
        >
          <FormattedMessage id="hero.headline" defaultMessage="en" />
        </h2>
        <p className="lead" style={{
          width: '80%',
          maxWidth: 600
        }}>
          <FormattedMessage id="hero.subheading" defaultMessage="en" />
        </p>
        <Link to="/services" className="btn btn-primary btn-lg" linkclick="true" onClick={handleClick}>
          <FormattedMessage id="hero.cta" defaultMessage="en" />
        </Link>
      </div>
    </Hero>
  );
}
