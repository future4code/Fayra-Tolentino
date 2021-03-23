import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [
        {
          id: Date.now(),
          texto: 'Finalizar Exercicios',
          completa: false 
        },
        {
          id: Date.now(),
          texto: 'Plantão',
          completa: true
        }
      ],
      inputValue: '',
      filtro: 'pendentes'
    }
// Filtro vazio, aparecem todas as tarefas, quando põe o valor completas ele filtra as tarefas completas, quando põe pendentes filtra tarefas 
// pendentes

  componentDidUpdate() {

  };

  componentDidMount() {

  };

  onChangeInput = (event) => {

  }

  criaTarefa = () => {
    console.log(this.state.inputValue)
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }
    const novaListadeTarefa = [... this.state.tarefas, novaTarefa]
    // novaListadeTarefa.push(novaTarefa)
    this.setState({tarefas:novaListadeTarefa})
  }

  selectTarefa = (id) => {

  }

  onChangeFilter = (event) => {

  }
// Filtrar as tarefas, para ser pendente, será o oposto de completa.Muda o estado.
  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
