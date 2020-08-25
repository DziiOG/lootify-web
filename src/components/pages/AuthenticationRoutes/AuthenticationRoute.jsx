import React, { Component } from "react";
import Navbar from "../Welcome/components/BackgroundImage/welcomeNavbar/navbar";
import Background from "../AuthenticationRoutes/assets/paper.jpg";
import { motion } from "framer-motion";

import InputWithIcon from "./TextInput/Input";
import Login from "./Login/Login";
import Register from "./SignUp/Register";

export class AuthenticationRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
      width: 0,
      index: 0,
      login: true,
      firstDiv: {
        x: 480,y: 0
      },
      secondDiv: {
        x: -480, y: 0
      }
    };
  }

    componentDidMount(){
      this.setState({
        firstDiv: {
          x: 0,
          y:0
        },
        secondDiv: {
          x: 0,
          y: 0
        }
      })
    }

  


  changeOrientation = (type) => {
    var width = window.innerWidth;
    if(type === 1){

      if(parseFloat(width) <= 575){
        this.setState({
          index: 1,
          login: false,
          secondDiv: {
            x: 0,
            y: -802.5,
          },
          firstDiv: {
            x: 0,
            y: 802.5
          }
        })
      }else{

        this.setState({
          index: 1,
          login: false,
          secondDiv: {
            x: -570,
            y: 0
          },
          firstDiv: {
            x: 570,
            y: 0
          }
        })
      }

      


    } else {
      if(parseFloat(width) <= 575){
        this.setState({
          index: 0,
          login: true,
          secondDiv: {
            x: 0,
            y: 0
          },
          firstDiv: {
            x: 0,
            y: 0
          }
        })
      }else {

        this.setState({
          index: 0,
          login: true,
          secondDiv: {
            x: 0,
            y: 0
          },
          firstDiv: {
            x: 0,
            y: 0
          }
        })
      }
    }
  }

 
  render() {
   // console.log(this.animate("signup"));
    return (
      <div className="welcomeContainer">
        <div className="container" style={{ marginTop: 50 }}>
          <div className="row">
            <motion.div animate={this.state.firstDiv} transition={{ ease: "easeOut", duration: 2 }} className="col-sm-6">
              <div className="card">
                <div
                  className="card-body"
                  style={{
                    display: "flex",
                    height: 800,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundImage: `url(${Background})`,
                    backgroundSize: "cover",
                  }}
                >
                  {
                    this.state.login ? <Login changeOrientation={this.changeOrientation} /> :  <Register changeOrientation={this.changeOrientation}/>
                  }
                
                </div>
              </div>
            </motion.div>
            <motion.div animate={this.state.secondDiv} transition={{ ease: "easeOut", duration: 2 }} className="col-sm-6">
              <div className="card card-rules">
                <div
                  className="card-body"
                  style={{
                    display: "flex",
                    height: 800,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                 <InputWithIcon errors={this.props.errors} disable_button={this.props.disable_button} loginUser={this.props.loginUser} signupUser={this.props.signupUser} data_loading={this.props.data_loading} history={this.props.history} index={this.state.index}/>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthenticationRoute;
