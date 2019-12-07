import React from "react";
import styled from "styled-components";
import { Button } from "reactstrap";
import Img from 'react-image'

export default function hero() {
  const Hero = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    // background: silver;
    z-index: -50;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  return (
    <Hero className="hero">
      <div className="container">
        
        <p className="lead">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ad magnam consequatur excepturi laborum!</p>
        <Button color="primary" size="lg">Find out more</Button>
      </div>
    </Hero>
  );
}
