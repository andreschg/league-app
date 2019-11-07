export const startLoading = () => ({
  type: 'START_LOADING'
});

export const stopLoading = () => ({
  type: 'STOP_LOADING'
});

export const setInfoMessage = (message: string) => ({
  type: 'SET_INFO_MESSAGE',
  message
});