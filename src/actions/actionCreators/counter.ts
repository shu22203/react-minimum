import { Action } from "redux";
import { ActionNames } from '../actionType/counter'

export interface IIncrementAction extends Action {
    type: ActionNames.INCREMENT;
}

export interface IDecrementAction extends Action {
    type: ActionNames.DECREMENT;
}

export const increment = (): IIncrementAction => {
    return {
        type: ActionNames.INCREMENT
    }
};

export const decrement = (): IDecrementAction => {
    return {
        type: ActionNames.DECREMENT
    }
};

export type CounterActions = IIncrementAction | IDecrementAction
