import React from 'react'
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Personagens from '../../components/Personagens';
import Filmes from '../../components/FIlmes';

const Main = ()=>{
    return(
        <>
            <Header/>
            <Banner/>
            <Personagens/>
            <Filmes/>
        </>
    )

}

export default Main;