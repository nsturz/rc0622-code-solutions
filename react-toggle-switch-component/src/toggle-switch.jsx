import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { click: 1 };
    this.increment = this.increment.bind(this);

  }

  increment() {
    this.setState({ click: this.state.click + 1 });
  }

  render() {
    let offButton = 'hidden';
    let onButton = 'on-button relative';
    let containerStatus = 'delay container-on';
    const click = this.state.click;
    if (click % 2 === 0) {
      offButton = '';
      onButton = 'on-button relative hidden';
      containerStatus = 'delay container-off';
    }

    return (
      <div className={containerStatus}>
        <button className={offButton} onClick={this.increment}>OFF</button>
        <button className={onButton} onClick={this.increment}>ON</button>
      </div>
    );
  }
}
