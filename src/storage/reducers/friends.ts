const defaultState: User[] = [];

export default (state = defaultState, action: any) => {
  switch(action.type) {
    case 'SET_FRIENDS':
      return action.friends;
    default:
      return state;
  }
}