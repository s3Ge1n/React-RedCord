import { Route, Switch } from "react-router";
import Layout from "./components/layout/Layout";
import HomePage from "./page/Home";
import LoginPage from "./page/Login";
import NewPostPage from "./page/NewPost";
import ProfilePage from "./page/Profile";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/login">
          <LoginPage />
        </Route>

        <Route path="/post">
          <NewPostPage />
        </Route>

        <Route path="/profile">
          <ProfilePage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
