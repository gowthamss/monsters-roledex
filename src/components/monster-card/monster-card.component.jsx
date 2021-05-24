import React from "react";
import "./monster-card.styles.css";

const MonsterCard = (props) => {
    return (
        <div className="card-container">
            <img
                src={`https://robohash.org/${props.monster.id}?set=set2&size=150x150`}
                alt="monster-head"
            />
            <h1>{props.monster.name}</h1>
            <p>{props.monster.email}</p>
        </div>
    );
};

export default MonsterCard;
