import React from "react";
import { Route, Switch } from "react-router-dom";
import MyHeader from "./components/Header";
import Home from "./components/Home";
import MyForm from "./components/Form";

const App = () => {
  return (
    <>
      <MyHeader />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/pizza'>
          <MyForm />
        </Route>
      </Switch>
    </>
  );
};
export default App;
