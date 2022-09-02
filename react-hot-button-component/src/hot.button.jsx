import React from 'react';
// import ReactDOM from 'react-dom';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { click: 0 };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({ click: this.state.click + 1 });
  }

  render() {
    let className = 'dead';
    const click = this.state.click;
    if (click > 2 && click <= 5) {
      className = 'cold';
    } else if (click > 5 && click <= 8) {
      className = 'cool';
    } else if (click > 8 && click <= 11) {
      className = 'warm';
    } else if (click > 11 && click <= 14) {
      className = 'hot';
    } else if (click > 14 && click <= 17) {
      className = 'very-hot';
    } else if (click > 17) {
      className = 'insane';
    }
    return (
        <button className={className} onClick={this.increment}>Hot Button</button>
    );

  }
}
