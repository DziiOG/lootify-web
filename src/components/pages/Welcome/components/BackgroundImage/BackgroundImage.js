import React from 'react';
import Background from "../../assets/preview_1d.png";
import { motion } from 'framer-motion';


const BackgroundImage = () => {
    
    return (
        <motion.div
       
        className="welcomeImageContainer"
        style={{
          backgroundImage: `url(${Background})`,
        }}
      >
          
      </motion.div>
    );
};




export default BackgroundImage;
