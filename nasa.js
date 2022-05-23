//BOOTSTRAP ULAAAAAAAA

import React, { Component } from "react";
import { Button, Card, Row } from "react-bootstrap";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    fetch("https://api.nasa.gov/planetary/apod?api_key=VSJ1hCW9tGE14u49gZbpLSTmbr9rRZf5FoyR9AXB&start_date=2022-05-16&end_date=2022-05-23")
      .then(res => res.json())
      .then(result => {
        console.log(result);
        this.setState({
          items: result,
        });
      });
  }
  render() {
    return (
      <>
        <Row>
          {this.state.items.map(item => (
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={item.url} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Title>{item.date}</Card.Title>
                <Card.Text>{item.explanation}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </>
    );
  }
}



