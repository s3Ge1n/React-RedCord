import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./NewPostForm.module.css";

function NewPostForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const descriptionInputRef = useRef();
  const userInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredUsername = userInputRef.current.value;

    const postData = {
      title: enteredTitle,
      image: enteredImage,
      description: enteredDescription,
      username: enteredUsername,
    };

    props.onAddPost(postData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Post Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="image">Post Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="description">Post Description</label>
          <textarea
            rows="5"
            required
            id="description"
            ref={descriptionInputRef}
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="username">Username</label>
          <input type="text" required id="username" ref={userInputRef} />
        </div>

        <div className={classes.actions}>
          <button>Add Post</button>
        </div>
      </form>
    </Card>
  );
}

export default NewPostForm;
