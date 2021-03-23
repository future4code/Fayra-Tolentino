import React from "react";
import axios from "axios";

export default class App extends React.Component{
  state ={
    userList:[],
    inputValueName:"",
    inputValueEmail:""
  };

  componentDidMount(){
    this.getUsers();
  }

  handleInputChangeName = (eName)=>{
    this.setState({inputValueName: eName.target.value});
  };

  handleInputChangeEmail = (eEmail)=>{
    this.setState({inputValueEmail: eEmail.target.value});
  };

  getUsers =()=>{
    axios
      .get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      {
        headers:{
          Authorization: "fayra-miranda-cruz"
        }
      }
      )
      .then((res)=>{
        this.setState({userList:res.data.result.list});
        console.log(res.data.result.list);
      })
      .catch(err =>{
        console.log(err);
      });
  };

  createUser =()=>{
    const body = {
      "name": this.state.inputValueName,
      "email": this.state.inputValueEmail
  };
    axios
      .post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      body,
        {
          headers:{
            Authorization: "fayra-miranda-cruz"
          }
        }
      )
      .then((res)=>{
        this.setState({inputValueName:''});
        this.setState({inputValueEmail:''});
        this.getUsers()
      })
      .catch((err)=>{
        console.log(err);
      });
  };

  render(){
    const usersListList = this.state.userList.map((userList)=> (
      <li key = {userList.email}>{userList.name}</li>
    ));
    return(
      <div className = "App">
        <input
          placeholder={"Digite seu nome"}
          value={this.state.inputValueName}
          onChange={this.handleInputChangeName}
        />
        <input
          placeholder={"Digite seu e-mail"}
          value={this.state.inputValueEmail}
          onChange={this.handleInputChangeEmail}
        />
        <button onClick={this.createUser}>Salvar</button>
        {this.state.userList.length>0?(
          <ul>{usersListList}</ul>
        ):(
          <p>Carregando...</p>
        )}
      </div>
    );
  }
}
