import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./styles/index.scss"

// Redux
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from "./reducer";
// on peut importer directement depuis un dossier

const store = configureStore({
    reducer: rootReducer,
    //  c'est lui qui va alimenter notre store, il faut lui créer un dossier dans src
    devTools: true
}
)

ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}><App /></Provider>

)
