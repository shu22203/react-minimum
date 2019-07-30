import { createStore, combineReducers } from 'redux';
import { userReducer, UserState } from "./reducer/userStates";

export interface AppState {
    user: UserState
}

const store = createStore(
    combineReducers<AppState>({
        user: userReducer
    })
)

export default store
