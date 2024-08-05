import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PercentChange from './PercentChange';

const HeaderInfos = () => {

    const [headerData, setHeaderData] = useState([]);

    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/global`).then((res) => setHeaderData(res.data.data))
    },[])

    return (
        <div className='header-container'>
            <ul className="title">
                <li>
                    {/* pour les img on part de public */}
                    <h1><img src="./assets/logo.png" alt="logo" /> Watch Tower</h1>
                </li>
                <li>Crypto-monnaies : {headerData.active_cryptocurrencies && headerData.active_cryptocurrencies.toLocaleString()}</li>
                {/* séparateur de miller: toLocaleStrting */}
                <li>Marchés : {headerData.markets && headerData.markets}</li>
            </ul>
            <ul className="infos-mkt">
                <li className="global-mkt">
                    {/* on crée un composant pour qui va rendre les chiffres positifs en vert et en rouge sinon*/}
                    Global Market Cap:
                    <PercentChange percent={headerData.market_cap_change_percentage_24h_usd} />
                </li>
            </ul>
        </div>
    );
};

export default HeaderInfos;
