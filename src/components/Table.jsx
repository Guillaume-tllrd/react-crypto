import React, { useState } from 'react';
import Tableline from './TableLine';
import ToTop from './ToTop';



const Table = ({coinsData}) => {
    const [rangeNumber, setrangeNumber] = useState(100);
    // on créer une var pour trier, qd on clique sur un bouton on aura le nom du tri que l'on souhaite
    const [orderBy, setOrderBy] = useState("");
    // on va map tous les header du tabeau(qui seront des input de type radio) donc on les mets dans un array:
    const tableHeader = ["Prix", "MarketCap", "Volume", "1h", "1j", "1s", "1m", "6m", "1a", "ATH"]
    
    return (
        <div className='table-container'>
            <ul className="table-header">
                <div className="range-container">
                    <span>Top{" "} <input type="text"value={rangeNumber} onChange={(e) => setrangeNumber(e.target.value)}/>
                    </span>
                    <input type="range" min="1" max="250" value={rangeNumber} onChange={(e) => setrangeNumber(e.target.value)}/>
                    <ToTop /> {/* de base la flèche est en display none et qd on scroll elle apparait */} 
                </div>
                {tableHeader.map((element) => (
                    <li key={element}>
                        <input type="radio" name="header-el" id={element} defaultChecked={element === orderBy || element === orderBy + "reverse" ? true : false} onClick={() => {
                            if(orderBy === element){
                                // qd on clique une 2eme fois on a reverse
                                setOrderBy(element + "reverse")
                            } else {
                                setOrderBy(element)
                            }
                        }}/>
                        {/* pour les faire apparaitre il ne faut pas oublier le label */}
                        <label htmlFor={element}>{element}</label>
                    </li>
                ))}
            </ul>
            {/* Pour le tri on fait avec switch en fonction de la var qu'on a créé(orderBy) dans le cas du prix par ex tu me return du + grd au + petit et si tu reclique dessus tu as Prixreverse donc tu m'affiches l'inverse */}
            {coinsData && coinsData.slice(0, rangeNumber).sort((a,b) => {
                switch (orderBy) {
                    case "Prix":
                      return b.current_price - a.current_price;
                    case "Volume":
                      return b.total_volume - a.total_volume;
                    case "MarketCap":
                      return b.market_cap - a.market_cap;
                    case "1h":
                      return (
                        b.price_change_percentage_1h_in_currency -
                        a.price_change_percentage_1h_in_currency
                      );
                    case "1j":
                      return (
                        b.market_cap_change_percentage_24h -
                        a.market_cap_change_percentage_24h
                      );
                    case "1s":
                      return (
                        b.price_change_percentage_7d_in_currency -
                        a.price_change_percentage_7d_in_currency
                      );
                    case "1m":
                      return (
                        b.price_change_percentage_30d_in_currency -
                        a.price_change_percentage_30d_in_currency
                      );
                    case "6m":
                      return (
                        b.price_change_percentage_200d_in_currency -
                        a.price_change_percentage_200d_in_currency
                      );
                    case "1a":
                      return (
                        b.price_change_percentage_1y_in_currency -
                        a.price_change_percentage_1y_in_currency
                      );
                    case "ATH":
                      return b.ath_change_percentage - a.ath_change_percentage;
                    case "#reverse":
                      return a.market_cap - b.market_cap;
                    case "Prixreverse":
                      return a.current_price - b.current_price;
                    case "Volumereverse":
                      return a.total_volume - b.total_volume;
                    case "MarketCapreverse":
                      return a.market_cap - b.market_cap;
                    case "1hreverse":
                      return (
                        a.price_change_percentage_1h_in_currency -
                        b.price_change_percentage_1h_in_currency
                      );
                    case "1jreverse":
                      return (
                        a.market_cap_change_percentage_24h -
                        b.market_cap_change_percentage_24h
                      );
                    case "1sreverse":
                      return (
                        a.price_change_percentage_7d_in_currency -
                        b.price_change_percentage_7d_in_currency
                      );
                    case "1mreverse":
                      return (
                        a.price_change_percentage_30d_in_currency -
                        b.price_change_percentage_30d_in_currency
                      );
                    case "6mreverse":
                      return (
                        a.price_change_percentage_200d_in_currency -
                        b.price_change_percentage_200d_in_currency
                      );
                    case "1areverse":
                      return (
                        a.price_change_percentage_1y_in_currency -
                        b.price_change_percentage_1y_in_currency
                      );
                    case "ATHreverse":
                      return a.ath_change_percentage - b.ath_change_percentage;
                    default:
                      null;
                  }
            }).map((coin, index) => <Tableline index={index} coin={coin}/>)}
        </div>
    );
};

export default Table;