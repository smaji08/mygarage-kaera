import React, { useState, useEffect } from "react";
// import PartsData from '../../utils/partsData.json'
import "./style.css";
import { Container, Row, Col } from "reactstrap";

var PartsData = [
  {
    id: 1,
    sku: "sku_HDjDw3W8GEh72y",
    partName: "Brembo Disc Brake Pad",
    partsCat: "Brakes",
    image: "https://frsport.com/images/detailed_images/1560285_P28035N@2x.jpg",
    make: "Acura",
    model: "Ilx",
    year: "2013",
    price: 7048,
    quantity: 1,
  },
  {
    id: 2,
    sku: "sku_HDjE0UatBr0pMW",
    partName: "Power Stop Z23Evo Sport",
    partsCat: "Brakes",
    image:
      "https://www.stage3motorsports.com/assets/images/ps-z23-1508-2011-2014-explorer-powerstopz-23evolution-sport-front-brakepads(128rotors)0-thumbnail_thumbnail.jpg",
    make: "Ford",
    model: "Flex",
    year: "2014",
    price: 6295,
    quantity: 1,
  },
  {
    id: 3,
    sku: "sku_HDjHnLkxbuk9ZP",
    partName: "Hawk Brake Pads",
    partsCat: "Brakes",
    image:
      "https://www.tirerack.com/images/product_images/brakes/hawk/hawk_hb621b638_600px.jpg",
    make: "Mazda",
    model: "Rx7",
    year: "1990",
    price: 9700,
    quantity: 1,
  },
  {
    id: 4,
    sku: "sku_HDjImSlBrP4g9L",
    partName: "Skunk2 MegaPower RR Cat-Back Muffler",
    partsCat: "Exhaust",
    image:
      "https://www.kseriesparts.com/graphics/00000001/413-05-6050-1_500x500.jpg",
    make: "Acura",
    model: "Ilx",
    year: "2013",
    price: 60999,
    quantity: 1,
  },
  {
    id: 5,
    sku: "sku_HDjJKquOFpYrbn",
    partName: "MagnaFlow Cat-Back Mufflers",
    partsCat: "Exhaust",
    image:
      "https://www.stage3motorsports.com/assets/images/thumbnails/m163952010-2016fordflex35lecoboostmagnaflowcat-backexhaustkit00_thumbnail.jpg",
    make: "Ford",
    model: "Flex",
    year: "2014",
    price: 100010,
    quantity: 1,
  },
  {
    id: 6,
    sku: "sku_HDjJFdhvqUGudb",
    partName: "Racing Beat Power Pulse Exhaust System",
    partsCat: "Exhaust",
    image: "http://www.racingbeat.com/images/items/16418.1.jpg",
    make: "Mazda",
    model: "Rx7",
    year: "1990",
    price: 50999,
    quantity: 1,
  },
  {
    id: 7,
    sku: "sku_HDjKSxEjkDLknr",
    partName: "AEM Cold Air Intake",
    partsCat: "Intake",
    image:
      "https://gr1performance.com/wp-content/uploads/2018/11/AEM-21-716C-1.jpg",
    make: "Acura",
    model: "Ilx",
    year: "2013",
    price: 38499,
    quantity: 1,
  },
  {
    id: 8,
    sku: "sku_HDjLnHsTL07oOJ",
    partName: "K&N Short Ram Air Intake",
    partsCat: "Intake",
    image:
      "https://www.stage3motorsports.com/thumbnail.asp?file=assets/images/69-3531ts.jpg&maxx=700&maxy=0",
    make: "Ford",
    model: "flex",
    year: "2014",
    price: 28099,
    quantity: 1,
  },
  {
    id: 9,
    sku: "sku_HDjLCyZzuSDIPS",
    partName: "Ingen Cold Air Intake",
    partsCat: "Intake",
    image:
      "https://res-2.cloudinary.com/knfilters-com/image/upload/c_lpad,dpr_1.0,f_auto,h_700,q_auto,w_700/v1/media/catalog/product/6/9/69-6540TB_2.jpg",
    make: "Mazda",
    model: "Rx7",
    year: "1990",
    price: 24799,
    quantity: 1,
  },
];

function formatPrice(price) {
  return `$${price * (0.01).toFixed(2)}`;
}

function totalPrice(PartsData) {
  return PartsData.reduce((acc, part) => acc + part.quantity * part.price, 0.0);
}

export default function PartsDetail(props) {
  const [stripe, setStripe] = useState(null);

  useEffect(() => {
    console.log(window.Stripe);
    console.log(props.stripeToken);
    if (window.Stripe) setStripe(window.Stripe(props.stripeToken));
  }, [props.stripeToken]);

  function checkout() {
    console.log(PartsData);

    stripe.redirectToCheckout({
      items: PartsData.map((part) => {
        return {
          quantity: part.quantity,
          sku: part.sku,
        };
      }),
      successUrl: "https://localhost:3000/success",
      cancelUrl: "https://localhost:3000/canceled",
    });
  }

  return (
    <Container>
      <Row>
        <Col>
          <div id="partsDiv" style={getStyle} className="text-center">
            <img
              src={props.image}
              alt={props.partName}
              id="partsImg"
              className="img-fluid"
              style={{ margin: "0 auto" }}
            />
            <p>Make: {props.make}</p>
            <p>Model: {props.model}</p>
            <p>Year: {props.year}</p>
            <p>Parts Category: {props.partsCat}</p>
            <p>Parts Name: {props.partName}</p>
            <p>Price: {formatPrice(props.price)}</p>
            <p>Quantity: {props.quantity}</p>
            <button onClick={() => props.removePart(props.id)} style={btnStyle}>
              x
            </button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div>
            <p style={{ textAlign: "center" }} colSpan={9}>
              Total: {formatPrice(totalPrice(PartsData))}
            </p>
          </div>
        </Col>
        <Col>
          <div>
            <p style={{ textAlign: "right" }} colSpan={4}>
              <button onClick={checkout}>Checkout now with Stripe</button>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  padding: "5px 10px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};

const getStyle = {
  background: "#f4f4f4",
  padding: "10px",
  borderBottom: "3px #black solid",
  marginBottom: "30px",
  alignContent: "left",
};
