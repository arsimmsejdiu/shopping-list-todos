import React, { Component } from "react";
import ShoppingListForm from "./ShoppingListForm";
import "./ShoppingList.css"
import uuid from 'uuid/dist/v4';

class ShoppingList extends Component {
  state = {
    items: [
      {
        name: "Mike",
        quantity: "2 gallons",
        id : uuid()
      },
      {
        name: "Thomas",
        quantity: "2 loaves",
        id: uuid()
      },
    ],
  };

  addItem = (item) => {
    let newItem = {...item, id: uuid()}
    this.setState((state) => ({
      items: [...state.items, newItem],
    }));
  };
  resetState = () => {
    this.setState({
      items: [
        {
          name: "Mike",
          quantity: "2 gallons",
        },
        {
          name: "Thomas",
          quantity: "2 loaves",
        },
      ],
    });
  };

  renderItems = () => {
    return (
      <ul className="ul">
        {this.state.items.map((item) => (
          <li key={item.id}>
            {item.name} : {item.quantity}
          </li>
        ))}
      </ul>
    );
  };

  handleReset = () => {
    this.setState({
      items: [
        {
          name: "Mike",
          quantity: "2 gallons",
        },
        {
          name: "Thomas",
          quantity: "2 loaves",
        },
      ],
    });
  };

  render() {
    return (
      <div className="Shopping-list">
        <h1 className="title">Shopping List</h1>
        {this.renderItems()}
        <ShoppingListForm addItem={this.addItem} resetState={this.resetState} />
      </div>
    );
  }
}

export default ShoppingList;
