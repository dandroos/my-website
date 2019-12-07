import React from 'react'
import { Row, Col } from 'reactstrap'

import DavePhoto from '../images/dave.jpeg'

export default function about() {
    return (
        <div className="text-center">
            <span className="image-wrap" style={{
                filter: 'drop-shadow(0 0rem .1rem black)'
            }}>
                <div style={{
                    display: 'inline-block',
                    width: '10rem',
                    height: '10rem',
                    background: `url(${DavePhoto})`,
                    backgroundSize: 'cover',
                    clipPath: 'circle(50% at 50% 50%)',
                    boxShadow: '0 .5rem 2rem black'  
                }}></div>
            </span>
            <h2>About</h2>
            <Row>
                <Col className="text-justify">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos minima repellat assumenda cumque, odio ex quae voluptas molestiae molestias nam a ipsam consequatur consequuntur doloribus tempore impedit excepturi! Pariatur eius recusandae excepturi, dolores aperiam, totam labore quidem sapiente maiores explicabo aspernatur dignissimos deserunt quas, doloremque soluta nobis quaerat dicta. Expedita.
                </Col>
               
            </Row>
        </div>
    )
}
