import { createStore } from 'redux';
import reducer from '../reducers/shovel';

import * as Constants from '../constants/shovel';


const initialState = { 
    value: Constants.TEXTAREA_INIT_VALUE,
    rows: Constants.TEXTAREA_ROWS,
    minRows: Constants.TEXTAREA_MIN_ROWS,
    maxRows: Constants.TEXTAREA_MAX_ROWS,
    placeholder: Constants.LB_PLACEHOLDER,
    className: Constants.LB_CLASSNAME,
 };

 
export const store = createStore(reducer, initialState);