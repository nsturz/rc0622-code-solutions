import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    if (this.state.isClicked) {
      return <button>Thanks!</button>;
    }
    return <button onClick={this.handleClick}>Click Me!</button>;
  }

}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(<CustomButton />);
