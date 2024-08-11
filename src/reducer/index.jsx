import { combineReducers } from "redux";
import stableReducer from "./stable.reducer";
import listReducer from "./list.reducer";


export default combineReducers({
    // c'est lui qui va combiner tous les différents reducers que l'on va créer et il envoie dans la partie reducer que l'on a créé dans le main.jsx plus particulièment dans la const store que l'on a relié avec le Provider qui englobe toute l'app
    stableReducer,
    listReducer
})