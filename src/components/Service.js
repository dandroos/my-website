import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'

export default function Service(props) {
    return (
        <div className="p-3">
            <img src={props.graphic} alt={props.name} style={{
              width: 120,
              paddingBottom: '.25rem'  
            }}/>
            <h4 >
                {props.name}
            </h4>
            <p className="m-0">
                {props.content}
            </p>
        </div>
    )
}
