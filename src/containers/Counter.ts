import { connect } from 'react-redux'
import { Dispatch } from "redux";
import { decrement, increment } from '../actions/actionCreators/counter'
import Counter from "../components/Counter";
import { IReduxState, ReduxAction } from "../store";

const mapStateToProps = (state: IReduxState) => {
    return {
        count: state.counter.count
    }
};

const mapDispatchToProps = (dispatch: Dispatch<ReduxAction>) => {
    return {
        decrement: () => {
            dispatch(decrement())
        },
        increment: () => {
            dispatch(increment())
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
