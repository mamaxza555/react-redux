import React, { Component } from "react";
import { connect } from "react-redux";
import Action from "./actions";
import Counter from "./components/counter";
import InputForm from "./components/inputForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter
          value={this.props.counter}
          onIncrement={() => this.props.increment()}
          onDecrement={() => this.props.decrement()}
        />

        <InputForm />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.counter
});

const mapDispatchToProps = dispatch => ({
  increment: () =>
    dispatch({ type: Action.INCREMENT, text: "INCREMENT Redux" }),
  decrement: () => dispatch({ type: Action.DECREMENT, text: "DECREMENT Redux" })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
