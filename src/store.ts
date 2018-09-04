import { Action, createStore } from 'redux';
import { CounterActions } from "./actions/actionCreators/counter";
import reducers from './reducer'
import { ICounterState } from "./reducer/counter";

export const store = createStore(
    reducers
);

export interface IReduxState {
    counter: ICounterState
}

export type ReduxAction = CounterActions | Action

