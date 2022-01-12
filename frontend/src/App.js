import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

//Header
import Header from "./components/header/Header";

//Footer
import Footer from "./components/footer/Footer";

//Routes
//import Table from "./Routes/Table";
//import community from "./Routes/community";
import community2 from "./components/board/getboard";
import Home from "./Routes/Home";
import insertcnt from "./Routes/insertcnt";
import result_today from "./Routes/result_today";
import result_yesterday from "./Routes/result_yesterday";

// import test from "./Routes/test";

//Routes/board
import insertboard from "./components/board/insertboard";
import boarddetail from "./components/board/boardview";
//import adminHeader from "./components/adminHeader";
// import Graph from "./Routes/Graph";

//import Sidebar from "./components/Sidebar/Sidebar";

//css
import "./source/css/style.css";
//import "./source/css/bootstrap.min.css";
import "./source/css/elegant-icons.css";
import "./source/css/font-awesome.min.css";
import "./source/css/nice-select.css";
//import "./source/css/owl.carousel.min.css";
import "./source/css/plyr.css";
import "./source/css/slicknav.min.css";

function Main() {
  return (
    <>
      <Router>
        <Header />
        <Route exact path="/community2" component={community2} />
        <Route exact path="/community2/Insert" component={insertboard} />
        <Route
          exact
          path="/community2/boarddetail/:id"
          component={boarddetail}
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/insertcnt" component={insertcnt} />
          <Route path="/result_today" component={result_today} />
          <Route path="/result_yesterday" component={result_yesterday} />

          <Route render={() => <div className="error">Error</div>} />
          <Route
            exact
            path="/community2/boarddetail/:id"
            component={boarddetail}
          />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default Main;
