import React from 'react';
import logo from './logo.svg';
import Thandava from "./logo/thandava.png"
import Rakshasa from "./logo/rakshasa.png"
import Druva from "./logo/druva.png"
import Samhara from "./logo/samhara.png"
import aryan from "./logo/aryans.jpg"

import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      styl:false
    }
  }

  componentDidMount() {

    setTimeout(() => this.setState({styl:true}),3000)
  }

  render() {
    return (
        <>

          <img src={aryan} className="aryan"  alt=""/>
          <div className="App" style={ this.state.styl ? {opacity:"1"}:null}>
          <div className="mainBox">
            <div className="title">
              Layatharang
            </div>
            <div className="scoreBox">
              <div className="scoreHouse demo" style={{backgroundColor: "#6a1b9a"}}>
                <div className="logoOut">
                  <img src={Samhara} className="logo" alt=""/>
                </div>
                <div className="point">
                  31
                </div>
              </div>
              <div className="scoreHouse demo" style={{backgroundColor: "#1976d2"}}>
                <div className="logoOut">
                  <img src={Rakshasa} className="logo" alt=""/>
                </div>
                <div className="point">
                  31
                </div>
              </div>
              <div className="scoreHouse demo" style={{backgroundColor: "#f57c00"}}>
                <div className="logoOut">
                  <img src={Druva} className="logo" alt=""/>
                </div>
                <div className="point">
                  31
                </div>
              </div>
              <div className="scoreHouse demo" style={{backgroundColor: "#d32f2f"}}>
                <div className="logoOut">
                  <img src={Thandava} className="logo" alt=""/>
                </div>
                <div className="point">
                  31
                </div>
              </div>
            </div>
          </div>
        </div>
          </>
    );
  }
}

export default App;
