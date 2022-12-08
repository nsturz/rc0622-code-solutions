import React from 'react';
export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { timer: 0, click: 1 };
    this.incrementClick = this.incrementClick.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetCount = this.resetCount.bind(this);
    this.tick = this.tick.bind(this);
  }

  startTimer() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  stopTimer() {
    clearInterval(this.timerID);
  }

  incrementClick() {
    this.setState({ click: this.state.click + 1 });
  }

  resetCount() {
    if (this.state.click % 2 === 1) {
      this.setState({ timer: 0 });
    }
  }

  tick() {
    this.setState({
      timer: this.state.timer + 1
    });
  }

  render() {
    const click = this.state.click;
    let playButton = 'fa solid fa-play play-button';
    let pauseButton = 'fa-solid fa-pause pause-button hidden';
    this.stopTimer();
    if (click % 2 === 0) {
      playButton = 'fa-solid fa-play play-button hidden';
      pauseButton = 'fa-solid fa-pause pause-button';
      this.startTimer();
    }
    return (
      <div>
        <div className="container" onClick={this.resetCount}>
          <p className="number" id="number">{this.state.timer}</p>
        </div>
        <div className="icon-wrapper">
          <i className={playButton} onClick={this.incrementClick}></i>
          <i className={pauseButton} onClick={this.incrementClick}></i>
        </div>
      </div>
    );
  }
}
