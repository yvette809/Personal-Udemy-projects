import {createStore,combineReducers,applyMiddleware,compose} from "redux"
import thunk from "redux-thunk"
import postReducer from "../reducers"

const initialState = {
    posts:[],
    newPost:{}
}

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose
const bigReducer = combineReducers({posts:postReducer})


export default function configureStore(){
    return createStore(
       bigReducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk))
    )
}