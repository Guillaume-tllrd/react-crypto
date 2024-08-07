import React, { useState } from 'react';

const Table = ({coinsData}) => {
    const [rangeNumber, setrangeNumber] = useState(100);
    // on créer une var pour trier, qd on clique sur un bouton on aura le nom du tri que l'on souhaite
    const [orderBy, setOrderBy] = useState("");
    // on va map tous les header du tabeau(qui seront des input de type radio) donc on les mets dans un array:
    const tableHeader = ["Prix", "MarketCap", "Volume", "1h", "1j", "1m", "6m", "1a", "ATH"]
    
    return (
        <div className='table-container'>
            <div className="table-header">
                <div className="range-container">
                    <span>Top{" "} <input type="text"value={rangeNumber} onChange={(e) => setrangeNumber(e.target.value)}/>
                    </span>
                    <input type="range" min="1" max="250" value={rangeNumber} onChange={(e) => setrangeNumber(e.target.value)}/>
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
            </div>
        </div>
    );
};

export default Table;