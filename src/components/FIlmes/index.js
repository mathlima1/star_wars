import React, {useState, useEffect} from 'react';
import api from '../../services/api';
import "./style.css";


const Filmes = ()=>{    
    const [filmes, setFilmes] = useState([]);
//     //AQUI É OQ O NAVEGADOR SUGERIU
//     useEffect(() => {
//         async function fetchData() {
//           // You can await here
//           const movies = await api.get("/films");
//             setFilmes(movies.data.results);
//           // ...
//         }
//         fetchData();
//       }, []); // Or []
// //-----------------------------------------------------------
//     //ESSE AQUI DEU ERRADO, VER O MOTIVO!!!!
//     useEffect(
//         async function setMovies(){
//             const movies = await api.get("/films");
//             setFilmes(movies.data.results);
//         }
//     );

    useEffect(()=>{
        async function getMovies(){
            const movies = await api.get('/films');
            setFilmes(movies.data.results);
        }
        getMovies();
    }, [])
    
    return(
        <div className="filmes">
            <h2 className="Main__title">Filmes</h2>
            <div className="filmeWrap">
                {filmes.map(filme => 
                <div className="filme" key={filme.url}>
                    <h6 className="filme__title">{ filme.title}</h6>
                    <p className="filme__desciption">{filme.opening_crawl}</p>
                </div>)}
            </div>
        </div>
    );
}

export default Filmes;