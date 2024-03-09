import React from "react";
import "./Card.css";

const Card = ({id, name, tagline, description, img}) => {
    return(
        <React.Fragment>
                <div className={`card${id}`}>
                    <div className="card-image">
                        <img src={img} alt="" className="card-img" />
                    </div>
                    <div className="card-body">
                        <h1>{name}</h1>
                        <h5>{tagline}</h5>
                        <span>{description}</span>
                    </div>
                </div>
        </React.Fragment>
    )
}

export default Card;