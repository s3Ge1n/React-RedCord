import Card from "../ui/Card";
import classes from "./PostItem.module.css";

function PostItem(props) {
  return (
    <li className={classes.item}>
      <Card>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <h5>{props.username}</h5>
      </div>
      <div className={classes.actions}>
        <button>To Favorites</button>
      </div>
      </Card>
    </li>
  );
}

export default PostItem;
