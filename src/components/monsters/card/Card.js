import React from "react";

import { useStyles } from "./card.styles";

const Card = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
      <h2> {props.monster.name} </h2>
      <p> {props.monster.email} </p>
    </div>
  );
};
export default Card;
