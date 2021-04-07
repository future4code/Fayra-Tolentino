import React from 'react'
import axios from 'axios'
// import Styled from 'styled-components' 

export default class App extends React.Component{
  state = {
    singer:'',
    music:'',
    lyrics:''
  }

  handleSinger = (event) => {
    this.setState({singer:event.target.value})
  }

  handleMusic = (event) => {
    this.setState({music:event.target.value})
  }

  findLyrics = () =>{
    axios.get(`https://api.lyrics.ovh/v1/${this.state.singer}/${this.state.music}`)
    .then((response) => {
      console.log(response);
      this.setState({ lyrics:response.data.lyrics })

    })
    .catch((error) => {
      this.setState({ lyrics:''})
      console.log(error);
    })
  }

  render(){
    console.log(this.state)
    return(
      <div>
        <input
          onChange={this.handleSinger}
          value={this.state.singer}
          placeholder="Artista"
        />
        <input
          onChange={this.handleMusic}
          value={this.state.music}
          placeholder="Digite a Música"
        />
        <p>{this.state.lyrics}</p>
        <button onClick={this.findLyrics}>Buscar Hit</button>
      </div>
    )
  
  }
}