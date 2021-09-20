import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "../components/header";
import Footer from "../components/footer";
import Home from "../pages/Home";
import About from "../pages/About";
import Menu from "../pages/Menu";
import Contact from "../pages/Contact";
import Opportunity from "../pages/Opportunity";
import Events from "../pages/Events";
import FunBox from "../pages/FunBox";

// stateless function component
const AppRouter = () => (
  <BrowserRouter>
    <div className="container bg-color">
      <Header />
      <div className="content">
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/about" component={About} exact={true} />
          <Route path="/menu" component={Menu} exact={true} />
          <Route path="/contact" component={Contact} exact={true}></Route>
          <Route
            path="/opportunity"
            component={Opportunity}
            exact={true}
          ></Route>
          <Route path="/events" component={Events} exact={true}></Route>
          <Route path="/funbox" component={FunBox} exact={true}></Route>
        </Switch>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;
