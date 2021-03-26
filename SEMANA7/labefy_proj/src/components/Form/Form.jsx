import React from 'react'

export default class Form extends React.Component{
    render(){
        return(
            <div className= "form">
                <h1>Labefy</h1>
                <input
                    // onChange={this.handleName}
                    // value={this.state.name}
                    placeholder="Nome da Playlist"
                />
                <button>Criar Playlist</button>
            </div>
        )
    }
}




