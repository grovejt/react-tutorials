import React from "react";
import { useStyles } from "./card.styles";

interface Monster {
  name: string;
  email: string;
  id: string;
}
interface Props {
  monster: Monster;
}

const Card: React.FC<Props> = (props) => {
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
