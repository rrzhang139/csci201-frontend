import React from "react";
import {Row, InputGroup, FormControl, Button, Col} from "react-bootstrap";
import "../../../styles/chat/Window.css";
import avatar1 from "../../../assets/avatar1.png";
import avatar2 from "../../../assets/avatar2.png";

function Window(){
    return (
      <div>
        <Row>
          <div className="columns">
            <div class="container">
              <img src={avatar1} alt="Avatar"></img>
              <p className="avatar1text">heyyyy lol</p>
              <span class="time-right">9:00AM</span>
            </div>
            <div class="container darker">
              <img src={avatar2} alt="Avatar" class="right"></img>
              <p className="avatar2text">why did u kill our family</p>
              <span class="time-left">10:03AM</span>
            </div>
            <div class="container">
              <img src={avatar1} alt="Avatar"></img>
              <p className="avatar1text">4 fun lol</p>
              <span class="time-right">10:05AM</span>
            </div>
            <div class="container darker">
              <img src={avatar2} alt="Avatar" class="right"></img>
              <p className="avatar2text">pleas</p>
              <span class="time-left">Read</span>
            </div>
          </div>
        </Row>
        <Row className="message">
          <InputGroup>
            <Col className="split1">
              <FormControl
                className="input"
                placeholder="Message..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
            </Col>
            <Col className="split2">
              <InputGroup.Append>
                <Button variant="outline-secondary" className = "send">Send</Button>
              </InputGroup.Append>
            </Col>
          </InputGroup>
        </Row>
      </div>
    );
}

export default Window;