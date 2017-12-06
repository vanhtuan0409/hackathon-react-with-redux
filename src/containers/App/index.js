import React, { PureComponent } from "react";
import OrderForm from "@containers/OrderForm";
import LoginButton from "@containers/LoginButton";
import "./style.styl";

class App extends PureComponent {
  render() {
    return (
      <div className="coffee-app">
        <OrderForm />
        <LoginButton />
      </div>
    );
  }
}

export default App;
