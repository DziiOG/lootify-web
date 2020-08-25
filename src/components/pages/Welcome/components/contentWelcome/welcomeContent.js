import React from 'react';
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'

const WelcomeContent = () => {
    return (
     
        <motion.div  className="welcomeMessageContainer">
              <div className="containerContent">
              <div className="container">
              <h1 style={{
                  display: 'flex',
                  flexDirection: 'column',
                  fontSize: 62,
                  marginLeft: 10,
                  color: "#000"
                }}>
                Better <br/>Way to Start <br/>the Shopping
                <span style={{fontSize: 28, marginTop: 25, color: "#d2d2d2"}}>
                  Make the new experience in shopping, get the high quality
                  products from your favorite brands
                </span>
              </h1>
              <Link to="/authenticate">
                 <button type="button" className="btn btn-primary btn-lg btn-size">SHOP NOW</button>
              </Link>
                </div>
              </div>
            
          </motion.div>
    );
}

export default WelcomeContent;
