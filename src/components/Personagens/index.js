import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import api from '../../services/api';
import './style.css';

var pagina = Number(1);
const Personagens = ()=>{
    
    let [page, setPage] = useState(1);
    const [ characteres, setCharacters ] = useState([]);

    useEffect(()=>{
        async function getChars(){
            const chars = await api.get(`/people/?page=${page}`)
            setCharacters(chars.data.results)
        }
        getChars();
    }, [page]);

    
    let nextPage = () => {
        setPage(()=>{
            pagina= pagina + 1;
            return pagina
        });
    }
    let prevPage = () => {
        setPage(()=>{
            pagina= pagina - 1;
            return pagina
        });
    }
    
    const getID = (url)=>{
        let param = url.match(/\/([1-9]{1,})\//);
        return param && param[1] ? param[1] : null;
    }
    const personagem = characteres.map((personagem)=>{
        const id = getID(personagem.url);
        return(
            <Link to={`/detail/${id}`} className="personagem" key={personagem.url}>
                <h1 className="personagem__nome">{personagem.name}</h1>
            </Link>    
        )
    })

    return(
        <section className="personagens">
            <div className="personagem__wrap">
                {personagem}
            </div>
            <div className="paginador__wrap">
                <button className="paginadorBTN" onClick={prevPage}>Previous</button>
                <button className="paginadorBTN" onClick={nextPage}>Next</button>
            </div>
        </section>
    )
}

export default Personagens