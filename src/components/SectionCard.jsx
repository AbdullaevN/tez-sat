import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useSelector } from "react-redux";

const SectionCard = () => {
  const productList = useSelector((state) => state.users.value);
  return (
    <div className="container section-card">
      <div>
        <h3>Новые объявления</h3>
        <input type="checkbox" name="" id="" />
      </div>

      <div className="cards">
        {productList.map((product) => {
          return (
            <Card style={{ width: "16rem", margin: " 0 5px 15px 0" }}>
              <Card.Img variant="top" src={product.photo} />
              <Card.Body>
                <Card.Title>{product.price}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default SectionCard;
