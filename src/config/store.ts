import { combineReducers, createStore } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';

const rootReducer = combineReducers ({
  perfil: () => {
    return{
      name: 'karen',
      lastName: 'ramirez',
    }
  }
});


export type AppState = ReturnType <typeof rootReducer>;

export default createStore ( rootReducer, composeWithDevTools());