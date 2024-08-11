import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setStableState } from '../action/stable.action';
import { setListDisplay } from '../action/list.action';

const TableFilters = () => {
    const [showFavList, setShowFavList] = useState(false); 
    // on peut également le mettre dans le useEffect
    const [showStable, setShowStable] = useState(true);
    const dispatch = useDispatch();
    // on a notre bolean qd on clicke dessus ca fait true=>false false=>true mtn il faut envoyer l'action et on peut utiliser un useEffect. Ppour envoyer une action en utilisant Redux il faut définir un hook (useDispatch) qui va servir a dispatcher setStableState qui prend en paramètre un boolean donc on lui passe showStable. le useEffect sera relancé à chaque fois que showStable évolue
    useEffect(() => {
        dispatch(setStableState(showStable))
        dispatch(setListDisplay(showFavList))
    }, [showStable, showFavList])
    return (
        <div className='table-filters'>
            <div className="table-filters-container">
                {/* on met un checkbox qu'on ne voit mais qui est permet de faire un boulean (true or false) */}
                <div className="stable-checkbox-container">
                    <input type="checkbox" id='stableCoin' defaultChecked={true} onChange={() => setShowStable(!showStable)}/>
                    {/* si on veut que ce soit comme un toggle si t'es false tu met true et si t'es true tu mets false alors tu set l'inverse de showStable  */}
                    <label htmlFor="stableCoin" >{showStable ? "Avec stable coin" : "Sans stable coin"}</label>
                    {/* si showStable est sur true alors tu m'écris avec stable coin */}
                </div>
                {/* on fait une ternaire pour la div si showFavList est sur true alors tu me montre no-listbtn sinon la classe active */}
                <div className={showFavList ? "no-list-btn" : "no-list-btn active"} onClick={() => setShowFavList(false)}>
                    {/* qd je clique sur aucune liste j'aimerais que tu me montre pas de liste */}
                    <p>Aucune liste</p>
                </div>
                <div className={showFavList ? "fav-list active" : "fav-list"} onClick={() => setShowFavList(true)}>
                    <p>Liste des favoris</p>
                    <img src="./assets/star-full.svg" alt="icon star" />
                </div>  
            </div>
        </div>
    );
};

export default TableFilters;