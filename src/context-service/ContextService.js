import React, { Component } from "react";
const SomeContext = React.createContext("defULT");

const SomeProvider = SomeContext.Provider;
const SomeConsumer = SomeContext.Consumer

class ContextService extends Component {
  state = {
    items: [{ one: 100, id:1 }, { two: 200, id:2 }],
  };

  printOne = (e) => {
    console.log('somedi', e.target)
      this.setState({
        items: [
          ...this.state.items.filter((item) => {
            return item.id !== 1;
          }),
        ],
      });
    };


  render() {
    return (
      <SomeProvider value={{ ...this.state, printOne: this.printOne }}>
        {this.props.children}
      </SomeProvider>
    );
  }
}

export { ContextService };
export { SomeContext, SomeConsumer };
