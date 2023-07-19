import { createStore } from 'redux';
import { userIdReducer } from './Reducers/reducers.js';

const store = createStore(userIdReducer);

export default store;
