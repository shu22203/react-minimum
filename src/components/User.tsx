import * as React from 'react';
import { UserState } from "../reducer/userStates";
import { UserActions } from "../containers/userContainer";

interface OwnProps {}

type UserProps = OwnProps & UserState & UserActions

export const User: React.SFC<UserProps> = (props: UserProps) => {
    return (
        <div>
            <div className="field">
                <input
                    type="text"
                    placeholder="name"
                    value={props.name}
                    onChange={(e) => props.updateName(e.target.value)}
                />
            </div>
            <div className="field">
                <input
                    type="email"
                    placeholder="email"
                    value={props.email}
                    onChange={(e) => props.updateEmail(e.target.value)}
                />
            </div>
        </div>
    )
}
