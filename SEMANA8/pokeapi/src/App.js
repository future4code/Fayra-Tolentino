import React, {useEffect, useState} from "react";
import axios from "axios";
import PokeCard from './components/PokeCard'

const App =()=>{
  const [pokeList,setPokemonList]= useState([])
  const [pokeName,setPokemonName] = useState('')

  useEffect(()=>{
    const getPokemonList = () => {
      axios
        .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
        .then((response)=>setPokemonList(response.data))
        .catch((error) => console.log(error))
    }
    getPokemonList()
  }, [setPokemonList])

  useEffect(()=>{
    const getPokemonName = async ()=>{
      try{
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
        setPokemonName(res.data.name)
      }catch(err){
        console.log(err)
      }
    }
    getPokemonName()
  },[setPokemonName])

  return(
    <div>
      
    </div>
  )
}
