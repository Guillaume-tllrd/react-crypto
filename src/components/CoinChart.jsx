import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
// ce coin chart doit récupérer l'id du coin avec le props:
const CoinChart = ({coinId, coinName}) => {
    const [coinData, setCoinData] = useState()
    // on établie une var duration en le mettant à defaut sur 30j(1mois) pour que le btn reste automatiquement sur 1 mois
    const [duration, setDuration] = useState(30);
    const headerData = [
        [1, "1 jour"],
        [3, "3 jour"],
        [7, "7 jour"],
        [30, "1 mois"],
        [91, "3 mois"],
        [181, "6 mois"],
        [365, "1 an"],
        [3000, "Max"],
    ]
    useEffect(() => {
        // on fait un tableau provisoire et apres on passera ses données à coindata
        let dataArray = []
        // il faut lui préciser l'id du coin avec coinId et la durée et on peut lui rajouter un interval si il est supp à 32j il va rajouter interval daily
        axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${duration}${duration > 32 ? "&interval=daily" : ""}`).then((res) => {
            for(let i = 0; i < res.data.prices.length; i++){
                let price = res.data.prices[i][1]
                dataArray.push({
                    date: new Date(res.data.prices[i][0]).toLocaleDateString(),
                price: price < "50" ? price : parseInt(price) 
            })
            }
            setCoinData(dataArray);
        })
        // on boucle sur toues les données(des prix) que l'on reçoit tant qu'elle sont inf à tt les données au lieu de les atribuer directmnt à une var puis on les push dans le tableau. Mais avant on destrure en prenant le 2eme élèments([1]) des prix (le 1er était un Timestamp) car si il est supp à 50 on doit le mettre en parseInt car rechart à besoin d'avoir des nbre. Et ensiute on passe toutes les data à coinData qu'on donnera au graphique
    }, [coinId, duration])
    // ne pas oublier de mettre duration dans les dependencies comme ça a chaque fois qu'il change (cad qd on appuyi sur un btn) le useEffect se rejoue. on peut également mettre le coinId
    return (
        <div className="coin-chart">
            <p>{coinName}</p>
            <div className="btn-container">
                {headerData.map((el) => {
                    return (
                        // on map en mettant dans une div et on récupère leur nom avec l'index[0] pour récup uniquement le chiffre et pas le string car il y a un espace et ce n'est pas possible pour un id. on met el[1] pour récup le mot. au clique on maj la var duration en prenant le nombre de radio (index[0]). Pour savoir sur quel btn on est on utilise le className en disant si le el de 0 est égal à duration? si oui tu met la classe active pour mettre en valeur le btn sinon tu met rien
                        <div key={el[0]} htmlFor={"btn" + el[0]} onClick={() => setDuration(el[0])} className={el[0] === duration ? "active-btn" : ""}>
                            {el[1]}
                        </div>
                    )
                })}
            </div>
            {/* pour le graphique on appelle AreaChart de recharts et on lui défini des caractéristique ici et pas en css car ça peut bug 
            Ensuite on reste dans les balises de areaChart et on lui importe les points graohiques*/}
            <AreaChart width={680} height={250} data={coinData} margin={{ top: 10, right: 0, left: 100, bottom: 0}}>
                {/* possibilité de mettre un linear gradient */}
                <XAxis dataKey="date" />
                <YAxis domain={["auto", "auto"]} />
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip />
                <Area type="monotone" dataKey="price" strokes="rgb(0, 183, 179)" fillOppacity={1} full="url(#colorUv)" />
            </AreaChart>
        </div>
    );
};

export default CoinChart;