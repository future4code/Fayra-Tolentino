// Para vermos todas as viagens

import React from 'react'
import {goBack,goToApplication} from '../components/routes/cordinator'
import { useHistory } from "react-router-dom";
import {useProtectedPage} from '../hooks/useProtectedPage'

function List() {
    useProtectedPage ()
    const history = useHistory()
    return (
        <div className="List">
            <p>List trip page</p>
            <button onClick={history.goBack}>Voltar</button>
            <button onClick={() => goToApplication(history)}> Inscreva-se</button>
        </div>
    )
}

export default List;