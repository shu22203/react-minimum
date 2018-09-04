import { CounterActions } from "../actions/actionCreators/counter";
import { DECREMENT, INCREMENT } from '../actions/actionType/counter'

export interface ICounterState {
    count: number
}

const initialState: ICounterState = {
    count: 0
};

export function counter(state: ICounterState = initialState, action: CounterActions): ICounterState {
    switch (action.type) {
        case INCREMENT:
            return Object.assign({}, state, {
                count: state.count + 1
            });
        case DECREMENT:
            return Object.assign({}, state, {
                count: state.count - 1
            });
        default:
            return state
    }
}
