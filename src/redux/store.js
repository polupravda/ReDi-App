import { createStore } from 'redux';
import rootReducer from './rootReducers';

export default function configureStore() {
 return createStore(rootReducer);
}