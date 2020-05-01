import React from "react";
import "./style.css"


export default function PartsDetail(props) {
    return (
        <>
        <div id="partsDiv" className="text-center">
            <img alt={props.partName} className="img-fluid" src={props.image} style={{ margin: "0 auto" }} />
            <p>Make: {props.make}</p>
            <p>Model: {props.model}</p>
            <p>Year: {props.year}</p>
            <p>Parts Category: {props.partsCat}</p>
            <p>Parts Name: {props.partName}</p>
            <p>Price: {props.price}</p>
            <span onClick={() => props.removePart(props.id)} className="remove">
                𝘅
            </span>
        </div>
        </>
    )
}