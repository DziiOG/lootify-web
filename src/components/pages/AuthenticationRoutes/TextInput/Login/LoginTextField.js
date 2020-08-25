import React, { Component } from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { ProductConsumer } from "../../../../context";
import Lottie from "react-lottie";
import Loading from "../../assets/loading.json";


export class LoginTextField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {},
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

    let userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData, this.props.history);
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
          marginBottom: 50,
        }}
      >
        <h1
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 52,
            marginLeft: 20,
            justifyContent: "center",
            alignContent: "center",
            color: "#007bff",
          }}
        >
          Sign In to Lootify
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
            <span style={{ margin: 15 }}>or use your email account</span>
          </span>
        </h1>
        <ProductConsumer>
          {(value) => (
            <form onSubmit={this.handleSubmit}>
              <div className="form-column align-items-center">
                <div className="col-auto">
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
                      required
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                      value={this.state.email}
                      onChange={this.handleChange}
                      disabled={this.props.disable_button}
                      name="email"
                    />
                    {}
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
                      id="password"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={this.handleChange}
                      required
                      disabled={this.props.disable_button}
                    />
                  </div>
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
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>

                        <button
                            type="submit"
                            className="btn btn-primary btn-lg btn-size btn-style-auth"
                            disabled={this.props.disable_button}
                        >
                            LOGIN
                        </button>
                        <span style={{
                            marginTop: 15,
                            color: 'red'
                        }}>
                            {this.props.errors.message}
                        </span>
                    </div>

                )}
              </div>
            </form>
          )}
        </ProductConsumer>
      </div>
    );
  }
}

export default LoginTextField;
