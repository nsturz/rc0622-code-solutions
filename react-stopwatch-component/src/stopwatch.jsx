import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { timer: 0 };
  }

  render() {
    return (
      <div>
        <div className="container">
          <p className="number">{this.state.timer}</p>
        </div>
        <div className="icon-wrapper">
          <i className="fa-solid fa-play play-button"></i>
          <i className="fa-solid fa-pause pause-button hidden"></i>
        </div>
      </div>
    );
  }
}
