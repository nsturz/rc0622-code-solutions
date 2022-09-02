import React from 'react';

import ReactDOM from 'react-dom';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserNameChange(event) {
    const value = event.target.value;
    this.setState({ userName: value });
  }

  handlePasswordChange(event) {
    const value = event.target.value;
    this.setState({ password: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('CURRENT STATE (submit handler):', this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">UserName</label>
        <input
          name="username"
          type="text"
          value={this.state.userName}
          onChange={this.handleUserNameChange} />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={this.state.password}
          onChange={this.handlePasswordChange} />
        <button>Submit</button>
      </form>
    );
  }
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(<RegistrationForm />);
