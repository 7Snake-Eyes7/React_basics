import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import HelloRcE from "./components/HelloRcE";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ParentComponent from "./components/ParentComponent";
import Login from "./components/login";
import NameList from "./components/NameList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NameList />
        {/* <Login /> */}
        {/* <ParentComponent /> */}
        {/* <Counter />
        <FunctionClick /> */}
        {/* <Greet name="bruce" heroName="batsy">
          <p>this is children props</p>
        </Greet>
        <Greet name="clark" heroName="supes">
          <button>fly</button>
        </Greet>
        <Greet name="diana" heroName="ww"/>
        <Welcome name="bruce" heroName="batsy"><button>glide</button></Welcome>
        <Welcome name="clark" heroName="supes"><button>fly</button></Welcome>
        <Welcome name="diana" heroName="ww"><button>blitz</button></Welcome>
        <Hello/>
        <HelloRcE/> */}
        {/* <Message></Message> */}
      </div>
    );
  }
}

export default App;
