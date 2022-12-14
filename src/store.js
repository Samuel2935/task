

import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";


const reducer = combineReducers({
    task: reducers,
   });


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;