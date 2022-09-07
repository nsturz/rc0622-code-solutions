import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    const password = this.state.password;
    let firstMessage = 'text';
    let secondMessage = 'text hidden';
    let x = 'fa-solid fa-xmark red';
    let check = 'fa-solid fa-check green hidden';
    if (password.length > 0 && password.length < 8) {
      firstMessage = 'text hidden';
      secondMessage = 'text';
    } else if (password.length >= 8) {
      firstMessage = 'text hidden';
      secondMessage = 'text hidden';
      x = 'fa-solid fa xmark red hidden';
      check = 'fa-solid fa-check green';
    }
    return (
      <div>
        <label htmlFor="password">Password</label>
        <input name="password" type="password" id="password" onChange={this.handleChange} required></input>
        <i className={x}></i>
        <i className={check}></i>
        <p className={firstMessage} onKeyDown={secondMessage}>a password is required</p>
        <p className={secondMessage}>your password is too short</p>
      </div>

    );
  }
}
