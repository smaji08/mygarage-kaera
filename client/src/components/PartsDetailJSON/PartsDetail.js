import React, { useState, useEffect } from "react";
import PartsData from '../../utils/partsData.json'
import "./style.css"
import { Container, Row, Col } from "reactstrap";

function formatPrice(price) {
    return `$${(price * 0.01.toFixed(2))}`
}

function totalPrice(PartsData) {
    return PartsData.reduce((acc, part) => acc + part.quantity * part.price, 0.0)
}

export default function PartsDetail( props) {

    const[stripe, setStripe] = useState(null)

    useEffect(() => {
       console.log(window.Stripe)
       console.log(props.stripeToken)
        if(window.Stripe) setStripe(window.Stripe(props.stripeToken))
    })
    
    function checkout(PartsData) {
        stripe.redirectToCheckout({
            PartsData: PartsData.map(part => {
                return {
                    quantity: part.quantity,
                    sku: part.sku
                }
            }),
            successUrl: 'https://your-website.com/success',
            cancelUrl: 'https://your-website.com/canceled',
        })
    }

    return (
        <Container>
            <Row>
                <Col>
                    <div id="partsDiv" style={getStyle} className="text-center">
                        <img src={props.image} alt={props.partName} className="img-fluid" style={{ margin: "0 auto" }} />
                        <p>Make: {props.make}</p>
                        <p>Model: {props.model}</p>
                        <p>Year: {props.year}</p>
                        <p>Parts Category: {props.partsCat}</p>
                        <p>Parts Name: {props.partName}</p>
                        <p>Price: {formatPrice(props.price)}</p>
                        <p>Quantity: {props.quantity}</p>
                        <button onClick={() => props.removePart(props.id)} style={btnStyle}>x</button>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div>
                        <p style={{textAlign:"center"}} colspan={9}>
                            Total: {formatPrice(totalPrice(PartsData))}
                        </p> 
                    </div>
                </Col>
                <Col>
                    <div>
                    <p style={{textAlign:"right"}} colspan={4}>
                        <button onClick={checkout}>Checkout now with Stripe</button>
                    </p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}



const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}


const getStyle = {
    background: '#f4f4f4',
    padding: '10px',
    borderBottom: '3px #black solid',
    marginBottom: '30px',
    alignContent: 'left'
}


