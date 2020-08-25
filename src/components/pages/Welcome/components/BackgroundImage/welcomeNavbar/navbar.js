import React from 'react'
import FacebookIcon from "@material-ui/icons/Facebook";
import {ButtonContainer2} from '../../../styles/buttonContainer'


function Navbar(props) {
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
              <ButtonContainer2>HOME</ButtonContainer2>
              <ButtonContainer2>PRODUCT</ButtonContainer2>
              <ButtonContainer2>ABOUT</ButtonContainer2>
              
            </div>
          </nav>
        </div>
      </div>
    )
}


export default Navbar

