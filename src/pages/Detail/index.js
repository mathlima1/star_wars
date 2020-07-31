import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import api from '../../services/api'


const Detail = () => {
    const [ person, setPerson] = useState([])
    const {id} = useParams()
    useEffect(()=>{
        async function getChars(){
            const chars = await api.get(`/people/${id}`)
            setPerson(chars.data)
        }
        getChars();
    }, [id]);


    if(person.length === 0){
        return <h1>Carregando...</h1>
    }else{
        return(
            <>
                <Link to="/">Voltar</Link>
                <main>
                    <h1>{person.name}</h1>
                    <p>{person.name} nasceu em {person.birth_year} e tem {person.mass}KG</p>
                </main>
            </>
        )
    }
} 

export default Detail;