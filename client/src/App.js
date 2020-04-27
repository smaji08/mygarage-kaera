// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import MyForm from './garage/VinForm'

// function App() {
//   return (
//     <MyForm/>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MyForm from "./pages/VinForm";
import AugForm from "./pages/Schedule";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/mygarage-kaera"]}>
            {/* <EricForm /> */}
          </Route>
          <Route exact path={["/vehicle", "/mygarage-kaera/vehicle"]}>
            <MyForm />
          </Route>
          <Route exact path="/schedule">
            <AugForm />
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
