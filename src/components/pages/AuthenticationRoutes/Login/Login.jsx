import React from 'react';

const Login = ({changeOrientation}) => {
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
          Welcome Back!
          <span
            style={{
              fontSize: 18,
              marginTop: 25,
              color: "#000",
            }}
          >
            Make the new experience in shopping, get the high
            quality products from your favorite brands
          </span>
        </h1>
        <button
          type="button"
          className="btn btn-primary btn-lg btn-size btn-style"
          onClick={()=>{
              changeOrientation(1);
          }}
        >
          LOGIN
        </button>
      </div>
    );
}

export default Login;
