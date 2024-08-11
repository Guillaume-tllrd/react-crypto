export const SET_LIST_DISPLAY = "SET_LIST_DISPLAY";

//  c'est une fonction qui prend en charge la list
export const setListDisplay = (bool) => {
    // tu me return une fonction flechée qui va permettre de dispatch au reducer les infos, mais l'action pourrait gélament communiquer avec la bdd
    return (dispatch) => {
        // le type d'action c'est que l'on va retouver dans le reducer(il faut qu'on l'export)
        return dispatch({type: SET_LIST_DISPLAY, payload: bool})
        // qd on va dispacther cette fonction il va récup le boolean
    }
}