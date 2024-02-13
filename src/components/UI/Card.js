import "./Card.css";
function Card(props) {
  const classes = "Card " + props.className; // to add classname attribute to the custom card
  return <div className={classes}>{props.children}</div>;
}

export default Card;
