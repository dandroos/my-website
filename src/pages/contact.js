import React, { useEffect } from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";

import BottomPadding from "../components/BottomPadding";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function Contact(props) {

  useEffect(()=>{
    props.isReady()
  }, [])
  
  return (
    <div>
      <h2>Contact</h2>
      <Row>
        <Col>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ea iusto
          consequuntur nihil, quasi animi!
        </Col>
      </Row>
      <Form className="my-3">
        <Row>
          <Col md="6" lg="4">
            <FormGroup>
              <Label for="name">Name:</Label>
              <Input type="text" id="name" />
            </FormGroup>
          </Col>
          <Col md="6" lg="4">
            <FormGroup>
              <Label for="name">Email:</Label>
              <Input type="email" id="email" />
            </FormGroup>
          </Col>
          <Col md="6" lg="4">
            <FormGroup>
              <Label for="name">Phone:</Label>
              <Input type="text" id="name" placeholder="(Optional)" />
            </FormGroup>
          </Col>
          <Col md="6" lg="12">
            <FormGroup tag="fieldset">
              <legend>Preferred contact Method:</legend>
              <FormGroup check inline>
                <Label check>
                  <Input
                    type="radio"
                    name="method"
                    value="email"
                    defaultChecked
                  />{" "}
                  {` `}
                  Email
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type="radio" name="method" value="phone" /> {` `}
                  Phone
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type="radio" name="method" value="whatsapp" /> {` `}
                  WhatsApp
                </Label>
              </FormGroup>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label for="message">Message:</Label>
              <Input type="textarea" id="message" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button color="primary" block>
              Submit
              <FontAwesomeIcon icon={faPaperPlane} onLoad={()=> console.log('helllooooooo')} className="ml-2" />
            </Button>
          </Col>
        </Row>
      </Form>
      <BottomPadding />
    </div>
  );
}
