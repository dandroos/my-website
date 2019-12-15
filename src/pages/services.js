import React, {useState} from 'react'
import {Row, Col} from 'reactstrap'
import Service from '../components/Service'

import WebGraphic from '../images/www.svg'
import DesktopGraphic from '../images/workstation.svg'
import MobileGraphic from '../images/mobile-app.svg'
import PaddingBottom from '../components/BottomPadding'
import { FormattedMessage } from 'react-intl'

export default function Services(props) {

    const [componentState, setComponentState] = useState({
        ready: false,
        images_loaded: 1
    })

    const imageLoadCheck = ()=>{
        if(componentState.images_loaded < 3){
            setComponentState({
                ...componentState,
                images_loaded: componentState.images_loaded + 1
            })
        }
        else{
            props.isReady()
        }
    }
    return (
        <div className="text-center">
            <h2 className="display-3"><FormattedMessage id="services.title" defaultMessage="My Services" /></h2>
            <p className="display-4">
            <FormattedMessage
              id="services.paragraph_heading"
              defaultMessage="I'm a designer / developer based in Fuerteventura, Canary Islands."
            />
          </p>
            <Row>
                <Col sm={12}>
                    <Service 
                        name="web"
                        graphic={WebGraphic} 
                        load={imageLoadCheck}
                        />
                </Col>
                <Col sm={6}>
                    <Service 
                        name="software"
                        graphic={DesktopGraphic}
                        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo explicabo nemo, molestias ad autem, veniam odio ducimus magni ex quis iure. Consectetur quod ipsum amet ipsa quasi impedit quam architecto."
                        load={imageLoadCheck}
                    />
                </Col>
                <Col sm={6}>
                    <Service 
                        name="mobile"
                        graphic={MobileGraphic}
                        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo explicabo nemo, molestias ad autem, veniam odio ducimus magni ex quis iure. Consectetur quod ipsum amet ipsa quasi impedit quam architecto."
                        load={imageLoadCheck}
                    />
                </Col>
            </Row>
            <PaddingBottom />
        </div>
    )
}
