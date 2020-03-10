import React from "react";
import { useStyles } from "./cardList.styles";
import Card from "../card/Card";

const CardList = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.cardList}>
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default CardList;
