import React from 'react';
import '../../assets/css/_base/App.css';
import Landing from "../landing/Landing";
import '../../assets/css/_base/App.css';
import Starting from "../starting/Starting";
import {BrowserRouter, Route} from "react-router-dom"
import ScrollToTop from "./utils/ScrollToTop";
import Poman from "./_poman/Poman";
import Payment from "../payment/Payment";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ScrollToTop />
        <Route path="/" component={Landing} exact />
        <Route path="/start" component={Starting} />
        <Route path="/payment" component={Payment} />

        <Route path="/nteve" component={() => <Poman who="nteve" />} />
        <Route path="/eunstar" component={() => <Poman who="eunstar" />} />
        <Route path="/jhkona" component={() => <Poman who="jhkona" />} />
        <Route path="/zorouhn" component={() => <Poman who="zorouhn" />} />
        <Route path="/vs88929" component={() => <Poman who="vs88929" />} />

      </div>
    </BrowserRouter>
  );
}

export default App;
