import actionCreatorFactory from 'typescript-fsa'

const actionCreator = actionCreatorFactory()

export const userActions = {
    updateName: actionCreator<string>('UPDATE_NAME'),
    updateEmail: actionCreator<string>('UPDATE_EMAIL'),
}
