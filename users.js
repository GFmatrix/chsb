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
    fetch("https://reqres.in/api/users/")
      .then(res => res.json())
      .then(result => {
        this.setState({
          items: result.data,
        });
      });
  }

  render() {
    return (
      <>
        <Row>
          {this.state.items.map(item => (
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={item.avatar} />
              <Card.Body>
                <Card.Title>{item.first_name}</Card.Title>
                <Card.Title>{item.last_name}</Card.Title>
                <Card.Title>{item.email}</Card.Title>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </>
    );
  }
}
