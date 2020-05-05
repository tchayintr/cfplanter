import { createStore } from 'redux';
import reducer from '../reducers/settings';


const initialState = { 
    alignment: true,
    colour: true,
    subscript: true,
    triangles: false,
    enlarge: false,
};

 
export const store = createStore(reducer, initialState);