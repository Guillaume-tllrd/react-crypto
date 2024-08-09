import React, { useState } from 'react';
import PercentChange from './PercentChange';
import StarIcon from './StarIcon';
import CoinChart from './CoinChart';

const Tableline = ({coin, index}) => {
// pour montrer le grapghique on fait un boolean: qd on passe sur(onMouseEnter) true on révéle le composant coinChart
    const [showChart, setShowChart] = useState(false);

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
                <StarIcon  coinId={coin.id} />
               <p>{index + 1}</p>{/* index + 1 car ça commence par 0 */} 
            <div className="img">
                <img src={coin.image} height="20" alt="logo" />
            </div>
            <div className="infos">
                <div className="chart-img" onMouseEnter={() => setShowChart(true)} onMouseLeave={() => setShowChart(false)}>
                    {/* au sruvol de la souris tu me montre le graphique */}
                    <img src="./assets/chart-icon.svg" alt="chart-icon" />
                    <div className="chart-container" id={coin.name}>
                        {/* l'id prend le nom du coin et si il est sur show alors tu l'affiche */}
                        {/* on fait passer en props le nom et l'id */}
                        {showChart && <CoinChart coinId={coin.id} coinName={coin.name}/>}
                    </div>
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
            <PercentChange percent={coin.market_cap_change_percentage_24h}/>
            <PercentChange percent={coin.price_change_percentage_7d_in_currency}/>
            <PercentChange percent={coin.price_change_percentage_30d_in_currency}/>
            <PercentChange percent={coin.price_change_percentage_200d_in_currency}/>
            <PercentChange percent={coin.price_change_percentage_1y_in_currency}/>
            {/* Si l'ath est supp à -3 alors tu me renvoie ath sinon tu me renvoie le percentage avec la couleur de percentchange */}
            {coin.ath_change_percentage > -3 ? (
                <p>ATH !</p>
            ) : (
                <PercentChange percent={coin.ath_change_percentage} />
            )}
        </div>
    );
};

export default Tableline;