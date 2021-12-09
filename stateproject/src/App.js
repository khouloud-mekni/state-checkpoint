import React, { Component } from 'react';
import "./App.css";
import Profile from './Components/Profil/Profile';
import myImg from './assets/64.jpg'


export default class App extends Component {
  constructor(){
    super()
    this.state={
      person:{
      fullName:"khouloud",
      bio:"FullStack JS",
      profession:"web Devloper",
      imgSrc : myImg ,
      
      
      },
      show : false

    }
  }
  handleClick=()=>{
    this.setState({
    show: !this.state.show
    })
}


  render() {
    const {fullName,bio,profession,imgSrc}=this.state.person
    
    return (
      <div className="App">
        {this.state.show?
        (<Profile
          fullName={fullName}
          bio={bio}
          profession={profession}
          imgSrc = {imgSrc}>
            </Profile>)
            :null}
        
        <button onClick={this.handleClick}>
          {this.state.show ? "hide profile" : "show profile"}
        </button>
        
        
      </div>
    )
  }
}

















//amine
// import React, { Component } from 'react';
// import './App.css';
// import  photo  from "./assets/64.jpg";

// export default class App extends Component {
//   constructor(){
//     super()
//     this.state={
//       person:{
//         fullName:"khouloud",
//         bio:"FullStack JS",
//         profession:"web Devloper",
//         imgSrc:photo
//       },
//       show:false
//     }

//   }

//   handleClick=()=>{
//     this.setState({
//       show:!this.state.show
//     })
//   }
//   render() {

//     return (
//       <div className="App">
//         <button onClick={this.handleClick}> 
//         {this.state.show?"hide profile":"show profile"}</button>
//         {this.state.show?<div><img src={this.state.person.imgSrc} alt="pic"/>
//       <h1>{this.state.person.fullName}</h1>
//       <h2>{this.state.person.bio}</h2>
//       <h3>{this.state.person.profession}</h3></div>:null}
      
      

//       </div>
//     )
//   }
// }



