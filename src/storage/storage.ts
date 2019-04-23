import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import playersReducer from './reducers/players';
// import expensesReducer from '../reducers/expenses';
// import filtersReducer from '../reducers/filters';
// import authReducer from '../reducers/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Store creation
export default () => {
  const store = createStore(
    combineReducers({
      players: playersReducer
    }), 
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
