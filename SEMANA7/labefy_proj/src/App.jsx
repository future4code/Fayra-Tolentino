import React from 'react'
import Form from './components/Form/Form'
import Header from './components/Header/Header'




export default class App extends React.Component{
  render(){
    return(
      <div>
        <Header/>
        <Form/>
      </div>
    )
  }
}