import React from 'react';
// import ReactDOM from 'react-dom';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { click: 0 };
    this.changeColors = this.changeColors.bind(this);
    this.increment = this.increment.bind(this);
  }

  changeColors() {
    const click = this.state.click;
    if (click <= 3) {
      return 'cold';
    } else if (click > 3 && click <= 6) {
      return 'cool';
    }
  }

  increment() {
    this.setState({ click: this.state.click + 1 });
  }

  render() {
    return (
      // eslint-disable-next-line no-console
      <button className={this.changeColors} onClick={this.increment}>Hot Button</button>
    );
  }
}
