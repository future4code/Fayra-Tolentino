import {useEffect, useState} from 'react'
import axios from 'axios'

const useRequestData = ( initialData, url) =>{
    const [data, setData] = useState(initialData)

    useEffect(() => {
        console.log(window.localStorage.getItem('token'))
        axios
        .get(url,{
            headers:{
                Authorization:window.localStorage.getItem('token')
            }
        })
        .then ((response)=>{
            setData(response.data)
        })
        .catch((err)=>{
            console.log(err)
            alert('Ocorreu um erro, tente novamente')
        })
    }, [url])
    return(data)
}

export default useRequestData;