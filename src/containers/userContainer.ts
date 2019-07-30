import { Dispatch } from "redux";
import { connect } from "react-redux";
import { Action } from "typescript-fsa";

import { userActions } from "../actions/userActions";
import { User } from "../components/User";
import { AppState } from "../store";

export interface UserActions {
    updateName: (v: string) => Action<string>
    updateEmail: (v: string) => Action<string>
}

function mapDispatchToProps(dispatch: Dispatch<Action<string>>) {
    return {
        updateName: (v: string) => dispatch(userActions.updateName(v)),
        updateEmail: (v: string) => dispatch(userActions.updateEmail(v))
    };
}

function mapStateToProps(appState: AppState) {
    return Object.assign({}, appState.user);
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
