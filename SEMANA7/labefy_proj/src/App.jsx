import React from 'react'
import Form from './components/Form/Form'



export default class App extends React.Component{
  render(){
    return(
      <div>
        <div className= "header"></div>
        <Form/>
        <div className= "footer"></div>
      </div>
    )
  }
}