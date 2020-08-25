import React, { Fragment } from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import { ButtonContainer2 } from "../../../styles/buttonContainer";
import { Avatar } from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from "react-router-dom";

function Navbar({ value }) {
  return (
    <div className="containerNavBar">
      <div className="container-exact-size">
        <nav className="navbar navbar-light bg-yellow navbar-small">
          <div style={{}}>
            <a target="_top" href="/home">
              <img
                src="https://blog.flamingtext.com/blog/2020/08/11/flamingtext_com_1597158179_591323916.png"
                border={0}
                alt="Logo Design by FlamingText.com"
                title="Logo Design by FlamingText.com"
                className="logo-fluid"
              />
            </a>
          </div>
          <div className="small-tabs-container">
            {value.isTokenValid() ? (
              <Fragment>
                <span
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  {"Hi, "}
                  {value.userDetails.firstName}
                </span>
                <ButtonContainer2>
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Avatar></Avatar>
                  </span>
                </ButtonContainer2>
                <ButtonContainer2>
                  <span>{value.cartTotal ? value.cartTotal : null}</span>
                  <Link to="/user/cart" style={{ color: "black" }}>
                    <ShoppingCartOutlinedIcon
                      style={{
                        margin: 5,
                      }}
                    />
                  </Link>
                </ButtonContainer2>
                <ButtonContainer2 onClick={()=>{
                  value.logoutUser()
                }}><ExitToAppIcon/></ButtonContainer2>
              </Fragment>
            ) : null}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
