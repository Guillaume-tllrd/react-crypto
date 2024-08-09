import React, { useEffect, useState } from 'react';
import HeaderInfos from './components/HeaderInfos';
import GlobalChart from './components/GlobalChart';
import axios from 'axios';
import Table from './components/Table';
import ToTop from './components/ToTop';

const App = () => {
    const [coinsData, setCoinsData] = useState([])
    // on fait notre fetch dans app car on pourra le passer directement aux autres composants
    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C200d%2C1y").then((res) => setCoinsData(res.data))

        // comme on fait un evenment à la fenêtre on se met au plus haut point dans l'app donc dans le useEffect:
        // si le scroll est supp a 145px alors tu ajoutes une classe au table header qui mettre sa position en fixed
        // ne pas oublier de remove sinon la nav va jusqu'au dessus
        window.addEventListener("scroll", () => {
            if(window.scrollY > 145){
                document.querySelector(".table-header").classList.add("active")
            } else {
                document.querySelector(".table-header").classList.remove("active")
            }
        })
    },[])
    return (
        <div className='app-container'>
            <header>
                <HeaderInfos/>
                {/* on se passe la data en props avec coinsdata en récupérant la veleur de coinsData */}
                <GlobalChart coinsdata={coinsData}/>
            </header>
            <Table coinsData={coinsData}/>
            <ToTop />
        </div>
    );
};

export default App;