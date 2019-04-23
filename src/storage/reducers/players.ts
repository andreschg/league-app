const defaultState: Array<Player> = [];

export default (state = defaultState, action: any): any => {
  switch(action.type) {
    case 'ADD_NEW_PLAYER': 
      return [
        ...state,
        action.player
      ];
    default:
      return state;
  }
}