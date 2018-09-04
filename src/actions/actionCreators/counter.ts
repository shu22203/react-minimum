import { Action } from "redux";
import { DECREMENT, INCREMENT } from '../actionType/counter'

export interface IIncrementAction extends Action {
    type: string;
}

export interface IDecrementAction extends Action {
    type: string;
}

export const increment = (): IIncrementAction => {
    return {
        type: INCREMENT
    }
};

export const decrement = (): IDecrementAction => {
    return {
        type: DECREMENT
    }
};

export type CounterActions = IIncrementAction | IDecrementAction
