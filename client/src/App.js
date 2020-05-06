import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieForm from "./pages/OmdbContainer";
import PartsForm from "./pages/PartsCatalogJSON";
import EricForm from "./pages/SignIn";
import SignUpForm from "./pages/SignUp";
import RekhaForm from "./pages/VinForm";
import AugForm from "./pages/Schedule";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/login", "/mygarage-kaera", "/logout"]}>
            <EricForm />
          </Route>
          <Route exact path={["/signup", "/mygarage-kaera/signup"]}>
            <SignUpForm />
          </Route>
          {/* <Route exact path={["/login", "/mygarage-kaera/login"]}>
            <loginForm />
          </Route> */}
          <Route exact path={["/vehicle", "/mygarage-kaera/vehicle"]}>
            <RekhaForm />
          </Route>
          <Route exact path={["/schedule", "/mygarage-kaera/schedule"]}>
            <AugForm />
          </Route>
          <Route exact path={["/movie", "/mygarage-kaera/movie"]}>
            <MovieForm />
          </Route>
          <Route exact path={["/parts", "/mygarage-kaera/parts"]}>
            <PartsForm />
          </Route>
          <Route exact path="/vehicle/:id">
            {/* <Detail /> */}
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
