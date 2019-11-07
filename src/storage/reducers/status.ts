interface StatusActionObj {
  type: string,
  isLoading?: boolean,
  message?: string 
}

const defaultState = {
  isLoading: true,
  infoMessage: '',
  errorMessage: ''
}

export default (state = defaultState, action: StatusActionObj) => {
  switch(action.type) {
    case 'START_LOADING':
      return {
        ...state,
        isLoading: true 
      };
    case 'STOP_LOADING':
      return { 
        ...state,
        isLoading: false
      };
    case 'SET_INFO_MESSAGE': 
      return {
        ...state,
        infoMessage: action.message
      };
    default:
      return state;  
  }
}