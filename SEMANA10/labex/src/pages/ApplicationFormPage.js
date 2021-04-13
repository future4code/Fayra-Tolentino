// Para o usuário se candidatar à viagens, página que vai ter o formulário de inscrição
import React from 'react'
import {goBack,goToApplication} from '../components/routes/cordinator'
import { useHistory } from "react-router-dom";

function Application() {
    const history = useHistory()
    return (
        <div className="Application">
            <p>Application page</p>
            <button onClick={history.goBack}>Voltar</button>
            <button onClick={() => goToApplication(history)}> Inscreva-se</button>
        </div>
    );
}

export default Application;