import React, { PureComponent } from "react";
import LoginButton from "@containers/LoginButton";
import "./style.styl";

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
