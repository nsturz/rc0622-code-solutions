import React from 'react';

export default class ToggleSwitch extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // this.state({ button: 'on' });

  // }

  render() {
    return (
      <div className="flex container-on">
        <button className="off hidden">OFF</button>
        <button className="on">ON</button>
      </div>
    );
  }
}
