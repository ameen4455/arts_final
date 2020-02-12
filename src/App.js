import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import Thandava from "./logo/thandava.png"
import Rakshasa from "./logo/rakshasa.png"
import Druva from "./logo/druva.png"
import Samhara from "./logo/samhara.png"
import aryan from "./logo/aryans.jpg"
import Card from "./Card";

import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      styl:false,
      samhara : 0,
      rakshasa : 0,
      dhruva : 0,
      thandava : 0
    }
  }

  componentDidMount() {
    setInterval(()=>{
      let score = {};
      axios.get("http://13.233.96.106/scores")
      .then(function (response) {
        score = response.data;
        console.log(response.data);
      })
      .catch(function (error) {
        alert(error);
      });
      setTimeout(() => {
        const {thandava, dhruva, rakshasa, samhara} = score.chakravyuh;
        this.setState({
          samhara : samhara,
          rakshasa : rakshasa,
          dhruva : dhruva,
          thandava : thandava
        })
        setTimeout(() => {
          const {thandava, dhruva, rakshasa, samhara} = score.layatharang;
          this.setState({
            samhara : samhara,
            rakshasa : rakshasa,
            dhruva : dhruva,
            thandava : thandava
          })
          setTimeout(() => {
            const {thandava, dhruva, rakshasa, samhara} = score.overall_score;
            this.setState({
              samhara : samhara,
              rakshasa : rakshasa,
              dhruva : dhruva,
              thandava : thandava
            })
          }, 30000);
        }, 30000);
      }, 30000);
    }, 30000);
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
              <Card hname={Samhara} hcolor="#6a1b9a" hpoint={this.state.samhara} />
              <Card hname={Rakshasa} hcolor="#1976d2" hpoint={this.state.rakshasa} />
              <Card hname={Druva} hcolor="#f57c00" hpoint={this.state.dhruva} />
              <Card hname={Thandava} hcolor="#d32f2f" hpoint={this.state.thandava} />
            </div>
          </div>
        </div>
          </>
    );
  }
}

export default App;
