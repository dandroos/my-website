import React from "react";
import styled from "styled-components";
import { Button } from "reactstrap";
import BackgroundImageOnLoad from 'background-image-on-load'

import BG from '../images/dave1-optimized.jpeg'

export default function hero() {
  const Hero = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(rgba(255, 255, 255, 0.55), rgba(255, 255, 255, 0.75)), url(${BG});
    background-size: cover;
    background-position: top center;
    z-index: -50;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const fire = (e)=>{
    console.log('here')
  }
  return (
    <Hero className="hero">
      <BackgroundImageOnLoad
      src="https://unsplash.it/1200/310?random"
      onLoadBg={()=>{
        //TODO: Trigger an animation to reveal
        console.log('oiiii!')
      }}
      onError={err => console.log('error', err)} />
      <div className="container">
        
        <p className="lead heading" style={{
          fontSize: '2.5rem'
        }}>
          Lorem ipsum dolor sit.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ad magnam consequatur excepturi laborum!</p>
        <Button color="primary" size="lg">Find out more</Button>
      </div>
    </Hero>
  );
}
