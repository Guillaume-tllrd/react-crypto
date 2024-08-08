import React from 'react';
import PercentChange from './PercentChange';

const Tableline = ({coin, index}) => {

    function priceFormater(number){
        // si la longueur est inf à 4  alors tu me le return avec 2 à 7 digit en + sinon tu me return number
        // on ne connait pas la longuer d'un nombre donc on le transforme en string
    // Récupérer la partie entière du nombre
    const integerPartLength = Math.floor(number).toString().length;
    
    // Vérifier si la longueur de la partie entière est inférieure à 4
    if (integerPartLength < 4) {
        return new Intl.NumberFormat("us-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 7,
        }).format(number);
    } else {
        // Sinon, formater le nombre sans changer la longueur
        return new Intl.NumberFormat("us-US").format(number);
    }
}
    function mktCapFormater(number){
        // prend un number à traiter
        let newNum= String(number).split("").slice(0, -6)
        // le split permet de split chaque chiffre en un tableau et le slice d'enelver les 6 derniers chiffre si c'était 0,6 cela aurait été les 6 1er chiffres
        // on est obligé de joindre les charactères puis de les transformer en number pour le séparateur de milliers(toLocaleString())
        return Number(newNum.join(""));
    }
    return (
        <div className="table-line">
            <div className="infos-container">
                <span>*</span>
               <p>{index + 1}</p>{/* index + 1 car ça commence par 0 */} 
            <div className="img">
                <img src={coin.image} height="20" alt="logo" />
            </div>
            <div className="infos">
                <div className="chart-img">
                    <img src="./assets/chart-icon.svg" alt="chart-icon" />
                </div>
                <h4>{coin.name}</h4>
                <span>- {coin.symbol.toUpperCase()}</span>
                <a target="_blank" href={"https://www.coingecko.com/fr/pi%C3%A8ces/" + coin.name.toLowerCase().replace(" ", "-").replace(" ", "-")}>
                {/* le target blank permet d'ouvrir le lien dans un nouvel onglet */}
                <img src="./assets/info-icon.svg" alt="info-icon" />
                </a>
                {/* on met replace car il y a certain nom de coin en plusieur mot donc on doit remplacer les espace par des tirets pour les trouver dans l'url */}
            </div> 
            
            </div>
            <p>{priceFormater(coin.current_price).toLocaleString()} $</p>
            {/* toLocastring pour séparer les milliers mais il faut qd mm faire une fonction pours les coins en centimes */}
            <p className="mktcap">{mktCapFormater(coin.market_cap).toLocaleString()} M $</p>
            <p className="volume">{coin.total_volume.toLocaleString()} $</p>
            <PercentChange percent={coin.price_change_percentage_1h_in_currency} />
            {/* on retourne chercher la couleur avec notre composant PercentChange en récupérant avec les props*/}
        </div>
    );
};

export default Tableline;