import React, { useState } from "react";


export default function PartsDetail(props) {
    return (
        <>
        <div className="text-center">
            <img alt={props.partImg} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
            <ul>
            <li>Make: {props.make}</li>
            <li>Model: {props.model}</li>
            <li>Year: {props.year}</li>
            <li>Parts Category: {props.partsCat}</li>
            <li>Parts Name: {props.partName}</li>
            <li>Price: {props.price}</li>
            </ul>
        </div>
        </>
    )
}