import React, { useEffect, useState } from 'react';

const StarIcon = ({coinId}) => {
    
    
     // il faut d'abord faire une var pour savoir l'imga est liké ouo non, de base il ne l'est pas donc false
     const [like, setLike] = useState(false);

     useEffect(() => {
        // il faut regarder si dans le localstorage plus particulièrement dans sa boite qu'on a crée(coinList) elle a été stockée, si ça existe on crée une var(array) ou un ajoute une virgule pour les séparer
        if(window.localStorage.coinList){
            let favList = window.localStorage.coinList.split(",");
            // si jamais le coinId qu'on a récupéré en props depuis TableLine est dans le tableau alors le like tu me le passe sur true:
            if(favList.includes(coinId)){
                setLike(true)
            }
        }
     },[])
    
     function idChecker(id){
        let favList = null;
        // on met favList en null et d'abord on demande si il l'a dans coinList, si il l'a on le met dans un tableau
        if(window.localStorage.coinList){
            favList = window.localStorage.coinList.split(",");
        }
        // si favlist est true alors tu supprimes le coin
        if(favList){
            // si il a l'id il faut qu'il le retire vec filter:, il vérifie si le coin n'est pas égal à id sinon il l'enlève et on passe le like a false
            if(favList.includes(id)){
                window.localStorage.coinList = favList.filter((coin) => coin !== id)
                setLike(false);
            } else {
                // si favList est sur true mais que le coin n'est pas dans la liste alors on destructure favList et on ajoute le coin
                window.localStorage.coinList = [...favList, coinId];
                setLike(true);
            }
        } else { 
            // si favlist  sur false (else) alors tu met l'id du coin dans la favList 
            window.localStorage.coinList = coinId;
        }
     }
    return (
        // on affiche une image conditionnal si elle n'est pas dans les favoris(false) elle est vide sinon elle est pleine.(true)
        <img onClick={() => idChecker(coinId)} src={like ? "./assets/star-full.svg" : "./assets/star-empty.svg"} alt="icon-star" />
        // de plus à cette image on lui met une fonction au click idChecker pour le mettre dans la db et l'enlever qd on le unlike
    );
};

export default StarIcon;