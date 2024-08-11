export const SET_STABLE_STATE = "SET_STABLE_STATE";

//  c'est une fonction qui va dire au reducer ce qu'il faut faire si on met true or false:
// cette fonction prend un paramètre un boolean 
export const setStableState = (bool) => {
    // tu me return une fonction flechée qui va permettre de dispatch au reducer les infos, mais l'action pourrait gélament communiquer avec la bdd
    return (dispatch) => {
        // le type d'action c'est que l'on va retouver dans le reducer(il faut qu'on l'export)
        return dispatch({type: SET_STABLE_STATE, payload: bool})
    }
}