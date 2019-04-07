import React from "react";
import "./style.css";
// import { FormBtn } from "../Form";

function Card(props) {
    return (
        <div className="card">
            {/* <FormBtn className="card-button text-info bg-dark" {...props}>{props.display}</FormBtn> */}
            <div className="card-body">
                <img className="card-img-top" src={props.image} alt={props.title}></img>
                <h4 className="card-title">{props.title}</h4>
                <h5>Author(s): {props.authors}</h5>
                <p className="card-text">{props.description}</p>
                <a href={props.infoLink} className="card-link text-info bg-dark">See book on Google</a>
            </div>
        </div>
    );
};

export default Card;


