import Home from "./components/Home";
import CartContext from "./context/CartContext";
import { Component } from "react";
import "./App.css";

class App extends Component {
  state = { cartList: [] };

  addCartItem = (data) => {
    this.setState((prevState) => ({
      cartList: [...prevState.cartList, data],
    }));
  };

  removeCartItem = (data) => {
    const { cartList } = this.state;
    const index = cartList.indexOf(data);
    const finalCartList = cartList.splice(index, 1);
    // console.log(cartList);
    this.setState({ cartList: cartList });
  };

  render() {
    const { cartList } = this.state;
    return (
      <CartContext.Provider
        value={{
          cartList,
          addCartItem: this.addCartItem,
          removeCartItem: this.removeCartItem,
        }}
      >
        <Home />
      </CartContext.Provider>
    );
  }
}

export default App;
