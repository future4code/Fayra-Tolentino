// Para o usuário escolher entre Área Administrativa e Lista de Viagens
import React from 'react'
import {goToList,goToLogin} from '../components/routes/cordinator'
import { useHistory } from "react-router-dom";

function Home() {
    const history = useHistory();
    return (
        <div className="Home">
            <button onClick={() => goToList(history)}>Ver Viagens</button>
            <button onClick={() => goToLogin(history)}> Administrador</button>
        </div>
    );
}

export default Home;