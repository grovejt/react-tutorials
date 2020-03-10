import React from "react";
import { useStyles } from "./card.styles";

const Card = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.card}>{children}</div>;
};

export default Card;
