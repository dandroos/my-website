import React from 'react'
import { Row, Col } from 'reactstrap'

import DavePhoto from '../images/dave-optimized.jpeg'

export default function about() {

    //TODO: Move 'About' above img
    //TODO: Grid it up so that the image goes left on big screens
    //TODO: More pics
    return (
        <div className="text-center">
            <div className="image-wrap">
                {/* height: 12rem;
    width: 12rem;
    border: 1rem solid black;
    display: inline-block;
    border-radius: 50%; */}
                <div style={{
                    display: 'inline-block',
                    width: '10rem',
                    height: '10rem',
                    background: `url(${DavePhoto})`,
                    backgroundSize: 'cover',
                    clipPath: 'circle(50% at 50% 50%)',
                }}></div>
            </div>
            <h2>About</h2>
            <Row>
                <Col className="text-justify">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos minima repellat assumenda cumque, odio ex quae voluptas molestiae molestias nam a ipsam consequatur consequuntur doloribus tempore impedit excepturi! Pariatur eius recusandae excepturi, dolores aperiam, totam labore quidem sapiente maiores explicabo aspernatur dignissimos deserunt quas, doloremque soluta nobis quaerat dicta. Expedita.
                </Col>
               
            </Row>
        </div>
    )
}
