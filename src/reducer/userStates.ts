import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { userActions } from '../actions/userActions'

export interface UserState {
    name: string
    email: string
}

const initialState: UserState = {
    name: '',
    email: ''
}

export const userReducer = reducerWithInitialState(initialState)
    .case(userActions.updateName, (state, name) => {
        return Object.assign({}, state, { name })
    })
    .case(userActions.updateEmail, (state, email) => {
        return Object.assign({}, state, { email })
    })