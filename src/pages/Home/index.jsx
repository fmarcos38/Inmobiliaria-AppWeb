import React from 'react';
import './styles.css';
import ListaPropiedades from '../../components/ListaPropiedades';
import LandingPage from '../../components/LandingPage';

function Home() {
    return (
        <div className='contHome'>
            <LandingPage/>
            <ListaPropiedades/>
        </div>
    )
}

export default Home