import React, { useEffect } from "react";
// import { Row, Col } from "reactstrap";
import styled from "styled-components";

import DavePhoto from "../images/dave-optimized.jpeg";

export default function About(props) {
    const PicParaWrapper = styled.div`
        display: grid;
        grid-template-columns: auto auto;
        grid-gap: 1rem;
        align-items: center;

        @media (max-width: 768px) {
            grid-template-columns: auto;
            grid-template-rows: auto auto;
            justify-items: center;
        }
    `;

    useEffect(() => {
        props.isReady();
    }, []);
    
    //TODO: More pics
    return (
        <div className="text-center">
            <h2>About</h2>

            <PicParaWrapper>
                <div className="image-wrap">
                    <div
                        style={{
                            display: "inline-block",
                            width: "10rem",
                            height: "10rem",
                            background: `url(${DavePhoto})`,
                            backgroundSize: "cover",
                            clipPath: "circle(50% at 50% 50%)"
                        }}
                    ></div>
                </div>
                <p className="text-justify">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Eos minima repellat assumenda cumque, odio ex quae voluptas
                    molestiae molestias nam a ipsam consequatur consequuntur
                    doloribus tempore impedit excepturi! Pariatur eius
                    recusandae excepturi, dolores aperiam, totam labore quidem
                    sapiente maiores explicabo aspernatur dignissimos deserunt
                    quas, doloremque soluta nobis quaerat dicta. Expedita.
                </p>
            </PicParaWrapper>
        </div>
    );
}
