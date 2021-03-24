import React from 'react'
import CreateUserPage from './pages/CreateUserPage'
import UserListPages from './pages/UsersListPage'

export default class App extends React.Component(){
  // Renderização condicional para renderizar baseado no state.
  state = {
    page: "createUser"
  }
  // Função para mudar de página ao clicar, utilizar o setState e passar a propriedade desejada
  // Condições para alterações de página (se a página for igual ao create user, ela muda para userlist, se a página
  // for igual user list ela mudará para create user)
  changePage = ()=>{
    if(this.state.page ==="createUser"){
      this.setState({page:"userList"})
    }else if (this.state.page ==="userList"){
      this.setState({page:"createUser"})
    }
  }
  
  render(){
    return (
      <div className="App">
        <h1>LaberUsers</h1>
        <CreateUserPage/>
        <button>Ir para a Lista</button>
        <UserListPages/>
      </div>
    );
  }
}

