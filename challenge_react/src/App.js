import React, { Component } from 'react';
import './App.css';
import './style/css-final.css';
import "./style/bootstrap.min.css";
// import Home from './page/home';
// import AboutMe from './page/about_me';
// import Registration from './page/registration'
import Experience from './page/experience'

class App extends Component {
  render() {
    return (
      <div>
          {/* <AboutMe/> */}
          {/* <Home/> */}
          {/* <Registration/> */}
          <Experience/>
      </div>
    );
  }
}

export default App;
