import React, { Component } from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import Lottie from "react-lottie";
import Loading from "../../assets/loading.json";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import AccountCircle from "@material-ui/icons/AccountCircle";

export class RegisterTextField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      confirmPassword: "",
      phone: "",
      isStopped: false,
      isPaused: false,
    };
  }

  handleChange = (event) => {
    //console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });

    // console.log(this.state.password + " " + "This is from PASSWORD");
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let newUserData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phone: this.state.phone,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
    };
   // console.log(newUserData)
    this.props.signupUser(newUserData, this.props.history);
  };

  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: Loading,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
    return (
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 62,
            marginLeft: 20,
            justifyContent: "center",
            alignContent: "center",
            color: "#007bff",
          }}
        >
          Create Account
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 18,
              marginTop: 25,
              color: "#000",
              flexDirection: "column",
            }}
          >
            <FacebookIcon />
            <span style={{ margin: 15 }}>
              or using your email for registration
            </span>
          </span>
        </h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-column align-items-center">
            <div className="col-auto">
              <label className="sr-only" htmlFor="firstName">
                First Name
              </label>
              <input
                name="firstName"
                type="text"
                className="form-control mb-2"
                id="firstName"
                placeholder="First Name"
                value={this.state.firstName}
                onChange={this.handleChange}
                disabled={this.props.disable_button}
                required
              />
              <label className="sr-only" htmlFor="lastName">
                Last Name
              </label>
              <input
                name="lastName"
                type="text"
                className="form-control mb-2"
                id="lastName"
                placeholder="Last Name"
                value={this.state.lastName}
                onChange={this.handleChange}
                disabled={this.props.disable_button}
                required
              />
              <label className="sr-only" htmlFor="phone">
                Phone Number
              </label>
              <input
                name="phone"
                type="number"
                className="form-control mb-2"
                id="phone"
                placeholder="Phone Number"
                required
                value={this.state.phone}
                onChange={this.handleChange}
                disabled={this.props.disable_button}
              />
              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <AccountCircle></AccountCircle>
                  </div>
                </div>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="email-auth"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  disabled={this.props.disable_button}
                  required
                />
              </div>
            </div>
            <div className="col-auto">
              <label className="sr-only" htmlFor="inlineFormInputGroup">
                Password
              </label>
              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <LockOutlinedIcon />
                  </div>
                </div>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  id="password-auth"
                  placeholder="Password"
                  required
                  value={this.state.password}
                  onChange={this.handleChange}
                  disabled={this.props.disable_button}
                />
              </div>
              <label className="sr-only" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                name="confirmPassword"
                type="password"
                className="form-control mb-2"
                id="confirmPassword"
                placeholder="Confirm Password"
                required
                value={this.state.confirmPassword}
                onChange={this.handleChange}
                disabled={this.props.disable_button}
              />
            </div>
            {this.props.data_loading ? (
              <Lottie
                options={defaultOptions}
                height={100}
                width={100}
                isStopped={this.state.isStopped}
                isPaused={this.state.isPaused}
              ></Lottie>
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-size btn-style-auth"
                  disabled={this.props.disable_button}
                >
                  SIGN UP
                </button>
                <span
                  style={{
                    marginTop: 15,
                    color: "red",
                  }}
                >
                  {this.props.errors.message}
                </span>
              </div>
            )}
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterTextField;
