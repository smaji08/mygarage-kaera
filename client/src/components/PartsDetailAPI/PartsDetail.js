import React, { useState } from "react";


export default function PartsDetail(props) {
    return (
        <>
        <div className="text-center">
            <img alt={props.partImg} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
            <h3>Make: {props.make}</h3>
            <h3>Model: {props.model}</h3>
            <h3>Year: {props.year}</h3>
            <h3>Parts Category: {props.partsCat}</h3>
            <h3>Parts Name: {props.partName}</h3>
        </div>
        </>
    )
}