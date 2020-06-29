import React, { Component } from "react";
import "./ShoppingForm.css";

class ShoppingListForm extends Component {
  state = {
    name: "",
    quantity: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleReset = (event) => {
    const { resetState } = this.props;
    resetState();
  };

  handleSubmit = (event) => {
    const { addItem } = this.props;
    addItem(this.state);
    event.preventDefault();
    this.setState({ name: "", quantity: "" });
  };

  render() {
    return (
      <div className="Shopping-form">
        <form onSubmit={this.handleSubmit}>
          <div className="name">
            <label htmlFor="name"> Name: </label>
            <input
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="quantity">
            <label htmlFor="quantity"> Quantity: </label>
            <input
              id="quantity"
              name="quantity"
              value={this.state.quantity}
              onChange={this.handleChange}
            />
          </div>

          <br />
          <br />
          <button>Submit !!!</button>
        </form>
        <button onClick={this.handleReset}>Reset !!!</button>
      </div>
    );
  }
}

export default ShoppingListForm;
