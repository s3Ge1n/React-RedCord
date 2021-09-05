import { useHistory } from "react-router-dom";

import NewPostForm from "../components/Posts/NewPostForm";

function NewPostPage() {
  const history = useHistory();

  function addPostHandler(postData) {
    fetch("https://react-redcord-default-rtdb.firebaseio.com/posts.json", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace('/');
    });
  }

  return (
    <section>
      <h1>Add New Post</h1>
      <NewPostForm onAddPost={addPostHandler} />
    </section>
  );
}

export default NewPostPage;
