// 9.2.22 - need to figure out why the cosole doesnt like the setState method
// on line 13
import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { timer: 0, click: 1 };
    this.state.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({ click: this.state.click + 1 });
  }

  render() {
    const click = this.state.click;
    // eslint-disable-next-line no-console
    console.log(click);
    let playButton = 'fa solid fa-play play-button';
    let pauseButton = 'fa-solid fa-pause pause-button hidden';
    if (click % 2 === 0) {
      playButton = 'fa-solid fa-play play-button hidden';
      pauseButton = 'fa-solid fa-pause pause-button';

    }
    return (
      <div>
        <div className="container">
          <p className="number">{this.state.timer}</p>
        </div>
        <div className="icon-wrapper">
          <i className={playButton} onClick={this.increment}></i>
          <i className={pauseButton} onClick={this.increment}></i>
        </div>
      </div>
    );
  }
}
