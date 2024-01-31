import React from "react";
import propTypes from 'prop-types';

class ClassComponents extends React.Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       value: 0,
  //     };

  //     this.handlePlus = this.handlePlus.bind(this);
  //     this.handleMin = this.handleMin.bind(this);
  //   }

  state = {
    value: 0,
  };

  handlePlus = () => {
    this.setState({ value: this.state.value + 1 });
  }

  handleMin = () => {
    if (this.state.value > 0) {
      this.setState({ value: this.state.value - 1 });
    } else {
      this.setState({ value: "Stoppp" });
    }
  }

  render() {
    return (
      <div>
        <h1>Hi {this.props.nama}, welcome to my website 🪽</h1>
        <p>This component is created with a Class Component</p>
        <button onClick={this.handleMin}>-</button>
        <span> {this.state.value} </span>
        <button onClick={this.handlePlus}>+</button>
      </div>
    );
  }
}

ClassComponents.propTypes = {
    nama : propTypes.string.isRequired
}

export default ClassComponents;
