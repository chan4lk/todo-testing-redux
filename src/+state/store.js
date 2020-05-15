import { createStore } from 'redux';
import { reducer } from './reducer';
import {initailState} from './state';

export const store = createStore(reducer, initailState);
