import React from "react";
import { Card, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import like from "../assets/like.png";
import map from "../assets/map.svg";

const SectionCard = () => {
  const productList = useSelector((state) => state.users.value);
  return (
    <>
      {productList ? (
        <div className="container section-card">
          <div className="section-card-wrap">
            <h3>Новые объявления</h3>
            <Form.Check
              type="switch"
              id="custom-switch"
              label="Check this switch"
            />
          </div>

          <div className="cards">
            {productList.map((product) => {
              return (
                <Card style={{ width: "16rem", margin: " 0 5px 15px 0" }}>
                  <Card.Img variant="top" src={product.photo} />
                  <Card.Body
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Card.Title>{product.price}</Card.Title>
                    <Card.Title>
                      <img src={like} alt="" />
                    </Card.Title>
                  </Card.Body>
                  <Card.Body>
                    <Card.Text>{product.description}</Card.Text>
                  </Card.Body>

                  <Card.Body>
                    <Card.Link href="#">
                      <img src={map} alt="" />
                    </Card.Link>
                    <Card.Link style={{ fontSize: "12px" }} href="#">
                      г. Бишкек, Чуйская область
                    </Card.Link>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
};

export default SectionCard;
