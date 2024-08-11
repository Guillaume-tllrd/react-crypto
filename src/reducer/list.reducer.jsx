// on peut copier/coller du premier reducer et changer les paramètres: 

import { SET_LIST_DISPLAY } from "../action/list.action";



// de base on crée un objet et on va lui mettre un élément qui de base est sur false car on ne veut pas la montrer
const initialeState = {showList: false};

// il faut qu'on l'import dans l'index qui regroupe tous nos reducer
// cette fonction prend 2 paramètres de base: un state qui qui représente showStable en true et puis une action
export default function listReducer(state = initialeState, action){
    // on fait un switch entre le type d'action que l'on va recevoir. si jamais tu recois une ACTION qui s'appelle SET_STABLE_STATE tu vas me return shhowstable et son action qui un boolean placé en paramètre
    switch(action.type){
        case SET_LIST_DISPLAY:
            return {showList: action.payload}
        default:
            return state; 
            // pour le default on return un cas par f=défault
    }
}
// Ne pas loublier d' incrémenter cette fonction dans tableFilters 