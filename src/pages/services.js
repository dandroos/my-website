import React from 'react'
import {Row, Col} from 'reactstrap'
import Service from '../components/Service'

import WebGraphic from '../images/www.svg'
import DesktopGraphic from '../images/workstation.svg'
import MobileGraphic from '../images/mobile-app.svg'
import PaddingBottom from '../components/BottomPadding'

export default function services() {
    
    return (
        <div>
            <h2>My Services</h2>
            <Row className="text-center">
                <Col sm={6}>
                    <Service 
                        name="Web"
                        graphic={WebGraphic} 
                        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo explicabo nemo, molestias ad autem, veniam odio ducimus magni ex quis iure. Consectetur quod ipsum amet ipsa quasi impedit quam architecto." />
                </Col>
                <Col sm={6}>
                    <Service 
                        name="Desktop"
                        graphic={DesktopGraphic}
                        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo explicabo nemo, molestias ad autem, veniam odio ducimus magni ex quis iure. Consectetur quod ipsum amet ipsa quasi impedit quam architecto."
                    />
                </Col>
                <Col sm={6}>
                    <Service 
                        name="Mobile"
                        graphic={MobileGraphic}
                        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo explicabo nemo, molestias ad autem, veniam odio ducimus magni ex quis iure. Consectetur quod ipsum amet ipsa quasi impedit quam architecto."
                    />
                </Col>
            </Row>
            <PaddingBottom />
        </div>
    )
}
