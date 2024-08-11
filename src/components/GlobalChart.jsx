import React, { useEffect, useState } from 'react';
import { Tooltip, Treemap } from 'recharts';

const GlobalChart = ({coinsdata}) => {
// on va faire un graphic de type treeMap qu'on récupère sur une librairie(recharts) il faut la télécharger(npm i recharts)
const [dataArray, setDataArray] = useState([]);

// on fait une function pour les culeurs en fonction des résultats des crypto, finalement pas besoin de déclaré une var à cause de l'async on retourne directement la couleur
function colorPicker(number){
    if(number >= 20){
        return "rgb(0, 183, 179)";
    } else if(number >= 5){
        return "rgb(0, 253, 148)";
    } else if(number >=0){
        return "rgb(2, 172, 81)";
    } else if(number >+ -5){
        return "rgb(255, 111, 86)";
    } else if(number>= -20){
        return "rgb(251, 69, 63)";
    } else {
        return "rgb(10, 10, 10)";
    }
}
// on fait une function en boulean pour exclure les stablecoin:
// et on va la jouer avant de push la data 
function excludeCoin(coin){
    if(
        coin === "usdt" ||
        coin === "usdc" ||
        coin === "busd" ||
        coin === "dai" ||
        coin === "ust" ||
        coin === "mim"
        ) {
            return false;
        } else {
            return true;
        }
}
useEffect(() => {
    let chartData = [];
// on récup la data , on instancie un tableau et on va lui push la data si il y en + que 0 et ensuite jusqu'à 45. On récupère son symbol en MAJ etc..
    if(coinsdata.length > 0){
        for(let i = 0; i<45; i++){
            if(excludeCoin(coinsdata[i].symbol)){
              chartData.push({
                name: coinsdata[i].symbol.toUpperCase() + " " + coinsdata[i].market_cap_change_percentage_24h.toFixed(1) + "%",
                size: coinsdata[i].market_cap,
                fill: colorPicker(coinsdata[i].market_cap_change_percentage_24h)
            });   
            }
           
        }
    }
    setDataArray(chartData);
},[coinsdata])
// tu relances le useeffect qd coinsdata évolue

// pour faire un hover au survoles des crypto: il faut déclarer une fonction: 
// si tu es actif cad qu'on te survole et que tu as les info(payload) et sa longueur alors on se code le petit carré(custom-tooltip) et on lui donne les infos: nom. Ensuite on va l'insérer dans le composant Treemap
const TreemapToolTip = ({active, payload}) => {
    if(active && payload && payload.length){
        // ne pas oublier le return
       return(
       <div className="custom-tooltip">
        <p className="label">{payload[0].payload.name}</p>
        </div>
        ) 
    }
    return null
}

    return (
        <div className='global-chart'>
            {/* comme on install recharts on appelle treemap(il auto-import recharts) puis on définit ses coordonnées: dataKey: représente la taille des boites(grâce à la data récup au dessus), stroke c'est les border, fill couleur des lettres */}
            <Treemap width={730} height={181} data={dataArray} dataKey="size" stroke="rgb(51,51,51)" fill="black" aspectRatio="1" >
                <Tooltip content={<TreemapToolTip/>} />
            </Treemap>
        </div>
    );
};

export default GlobalChart;