import React from 'react';

const Register = ({changeOrientation}) => {
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
        {" "}
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
          Hello, Friend!
          <span
            style={{
                display :'flex',
              fontSize: 18,
              marginTop: 25,
              color: "#000",
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
              <span  style={{
                  display: 'flex',
              fontSize: 18,
              
              color: "#000",
              justifyContent: 'center',
              alignItems: 'center'
            }}>

                    Enter your personal details <br/> and start your journey with us
              </span>
          </span>
        </h1> 
        <button
          type="button"
          className="btn btn-primary btn-lg btn-size btn-style"
          onClick={()=>{
            changeOrientation(0);
        }}
        >
          SIGN UP
        </button>
      </div>
    );
}

export default Register;
