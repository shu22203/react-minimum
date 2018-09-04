import { CounterActions } from "../actions/actionCreators/counter";
import { ActionNames } from "../actions/actionType/counter";

export interface ICounterState {
    count: number
}

const initialState: ICounterState = {
    count: 0
};

export function counter(state: ICounterState = initialState, action: CounterActions): ICounterState {
    switch (action.type) {
        case ActionNames.INCREMENT:
            return Object.assign({}, state, {
                count: state.count + 1
            });
        case ActionNames.DECREMENT:
            return Object.assign({}, state, {
                count: state.count - 1
            });
        default:
            return state
    }
}
