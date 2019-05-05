const defaultState: User[] = [];

export default (state = defaultState, action: any) => {
  switch (action.type) {
    case 'NEW_USER':
      return state;
    default:
      return state;
  }
};