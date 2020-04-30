import React from "react";
import "./style.css"


export default function PartsDetail(props) {
    return (
        <>
        <div className="text-center">
            <img alt={props.partName} className="img-fluid" src={props.image} style={{ margin: "0 auto" }} />
            <h3>Make: {props.make}</h3>
            <h3>Model: {props.model}</h3>
            <h3>Year: {props.year}</h3>
            <h3>Parts Category: {props.partsCat}</h3>
            <h3>Parts Name: {props.partName}</h3>
            <h3>Price: {props.price}</h3>
            <span onClick={() => props.removePart(props.id)} className="remove">
                𝘅
            </span>
        </div>
        </>
    )
}