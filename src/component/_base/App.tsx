import React from 'react';
import '../../assets/css/_base/App.css';
import Landing from "../landing/Landing";
import '../../assets/css/_base/App.css';
import Starting from "../starting/Starting";
import {BrowserRouter, Route} from "react-router-dom"
import ScrollToTop from "./ScrollToTop";
import Poman from "./_poman/Poman";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ScrollToTop />
        <Route path="/" component={Landing} exact />
        <Route path="/start" component={Starting} />

        <Route path="/nteve" component={() => <Poman who="nteve" />} />

      </div>
    </BrowserRouter>
  );
}

export default App;
