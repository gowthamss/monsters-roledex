import React from "react";
import "./monster-cardlist.styles.css";
import MonsterCard from "../monster-card/monster-card.component";

const MonsterCardList = (props) => {
    console.log(props);
    return (
        <div className="card-list">
            {props.monsters.map((monster) => (
                <MonsterCard key={monster.id} monster={monster} />
            ))}
        </div>
    );
};

export default MonsterCardList;
