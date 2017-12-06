import React, { PureComponent } from "react";
import LoginButton from "@components/LoginButton";
import "./App.styl";

class App extends PureComponent {
  render() {
    return (
      <div className="coffee-app">
        App
        <LoginButton />
      </div>
    );
  }
}

export default App;
