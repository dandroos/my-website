import React from 'react'
import { Link } from 'react-router-dom'
import {FormattedMessage} from 'react-intl'

export default function Service(props) {
    
    return (
        <div className="p-3">
            <img src={props.graphic} onLoad={props.load} alt={props.name} style={{
              width: 120,
              paddingBottom: '.25rem'  
            }}/>
            <h4 >
                <FormattedMessage id={`services.${props.name}`} defaultMessage="en" />
            </h4>
            <p className="text-justify paragraph-text">
               <FormattedMessage id={`services.${props.name}_description`} defaultMessage="en" />
            </p>
            <p>
                <Link to={`/portfolio#${props.name}`}><FormattedMessage id="services.check_out" defaultMessage="Check out my work!" /></Link>
            </p>
        </div>
    )
}
