import { createStore } from 'redux';
import reducer from '../reducers/navigation';


const initialState = { 
    indicatorState: "/simple",
 };

 
export const store = createStore(reducer, initialState);