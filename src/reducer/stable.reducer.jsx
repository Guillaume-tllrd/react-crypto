import { SET_STABLE_STATE } from "../action/stable.action";

// de base on crée un objet et on va lui mettre un élément qui de base est sur true
const initialeState = {showStable: true};

// il faut qu'on l'import dans l'index qui regroupe tous nos reducer
// cette fonction prend 2 paramètres de base: un state qui qui représente showStable en true et puis une action
export default function stableReducer(state = initialeState, action){
    // on fait un switch entre le type d'action que l'on va recevoir. si jamais tu recois une ACTION qui s'appelle SET_STABLE_STATE tu vas me return shhowstable et son action qui un boolean placé en paramètre
    switch(action.type){
        case SET_STABLE_STATE:
            return {showStable: action.payload}
        default:
            return state; 
            // pour le default on return un cas par f=défault
    }
}
// On va aller incrémenter cette fonction dans tableFilters 