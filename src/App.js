import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Root from './components/main';
import axios from 'axios'



function App(props) {
  return (
    <div className="App">
     <Root {...props}/>
    </div>
  );
}

export default App;

axios.defaults.baseURL = "http://localhost:3000/";