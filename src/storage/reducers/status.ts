interface StatusActionObj {
  type: string
}

const defaultState = {
  isLoading: true
}

export default (state = defaultState, action: StatusActionObj) => {
  switch(action.type) {
    case 'START_LOADING':
      return { isLoading: true };
    case 'STOP_LOADING':
      return { isLoading: false};
    default:
      return state;  
  }
}