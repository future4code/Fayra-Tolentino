import React from 'react'
import Header from './components/Header/Header'
import Form from './components/Form/Form'
import Footer from './components/Footer/Footer'




export default class App extends React.Component{
  render(){
    return(
      <div>
        <Header/>
        <Form/>
        <Footer/>
      </div>
    )
  }
}