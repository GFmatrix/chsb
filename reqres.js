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
    for (let i = 0; i < this.state.items.length; i++) {
      this.state.items[i].name = this.state.items[i].first_name + " " + this.state.items[i].last_name;
    }
    return (
      <>
        <Row>
          {this.state.items.map(item => (
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={item.avatar} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Title>{item.email}</Card.Title>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </>
    );
  }
}
