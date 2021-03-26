import React from 'react'


export default class App extends React.Component{
  render(){
    return(
      <div>
        <div className= "header"></div>
        <div className= "form">
        <h1>Labefy</h1>
        <input
            // onChange={this.handleName}
            // value={this.state.name}
            placeholder="Nome da Playlist"
          />
          <button>Criar Playlist</button>
        </div>
        <div className= "footer"></div>
      </div>
    )
  }
}