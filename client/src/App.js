import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieForm from "./pages/OmdbContainer";
import PartsForm from "./pages/PartsCatalogJSON";
import LoginForm from "./pages/SignIn";
import SignUpForm from "./pages/SignUp";
import VinForm from "./pages/VinForm";
import ScheduleForm from "./pages/Schedule";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/login", "/mygarage-kaera", "/logout"]}>
            <LoginForm />
          </Route>
          <Route exact path={["/signup", "/mygarage-kaera/signup"]}>
            <SignUpForm />
          </Route>

          <Route exact path={["/vehicle", "/mygarage-kaera/vehicle"]}>
            <VinForm />
          </Route>
          <Route exact path={["/schedule", "/mygarage-kaera/schedule"]}>
            <ScheduleForm />
          </Route>
          <Route exact path={["/movie", "/mygarage-kaera/movie"]}>
            <MovieForm />
          </Route>
          <Route exact path={["/parts", "/mygarage-kaera/parts"]}>
            <PartsForm />
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
