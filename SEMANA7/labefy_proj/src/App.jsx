import React from 'react'
import Header from './components/Header/Header'
import Form from './components/Form/Form'
import Footer from './components/Footer/Footer'
import List from './components/List/List'

export default class App extends React.Component{
  state={
    page:"form"
  }

  changePage = () => {
    if(this.state.page ==="form"){
      this.setState({page:"list"})
    } else if(this.state.page === "list"){
      this.setState({page:"form"})
    }
  }

  renderPage =()=>{
    switch(this.state.page){
      case "form": 
        return <Form/>;
      case "list":
        return <List/>
      default:
        <div></div>
    }
  }
  render(){
    return(
      <div className ="App">
        <Header
          changePage = {()=>this.changePage()}
        />
        {this.renderPage()}
        <Footer/>
      </div>
    )
  }
}