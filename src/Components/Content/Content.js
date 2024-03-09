import React from "react";
import Card from "../Card/Card";
import './Content.css';

const Content = ({items}) => {
    return(
        <React.Fragment>
            <div className="card-container">
                {items.map((item) => (
                        <Card 
                            id={item.id}
                            name={item.name}
                            tagline={item.tagline}
                            description={item.description}
                            img={item.image_url}
                        />
                ))}
            </div>
        </React.Fragment>
    )
}

export default Content;