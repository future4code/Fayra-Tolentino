import React from 'react'
// import Axios from 'axios'
// import Styled from 'styled-components' 

export default class App extends React.Components{
  state = {
    singer:'',
    music:''
  }

  handleSinger = (event) => {
    this.setState({singer:event.target.value})
  }

  handleMusic = (event) => {
    this.setState({music:event.target.value})
  }
  
  render(){
  <div>
    <input></input>
    <input></input>
    <button></button>
  </div>
  }
}