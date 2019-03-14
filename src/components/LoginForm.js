import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''

    };
  }

  handleUsername = (e) => {
    this.setState({
      username: e.target.value,
      password: this.state.password
    })
  }

  handlePassword = (e) => {
    this.setState({
      username: this.state.username,
      password: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.handleUsername}
              />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handlePassword}
              />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
