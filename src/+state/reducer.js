import { initailState } from './state';
import { actionsTypes } from './actions';
/**
 * The root reducer.
 * @param {{todos: {label: string, completed: boolean}[]}} state The state
 * @param {{type: string, payload: any}} action The action
 */
export function reducer(state = initailState, action) {
  switch (action.type) {
    case actionsTypes.ADD_TODO:
      return {
        todos: [
          ...state.todos,
          {
            label: action.payload,
            completed: false,
          },
        ],
      };
    case actionsTypes.REMOVE_TODO:
      return {
          todos: [...state.todos].filter((_,index) => index !== action.payload)
      };
    
    case actionsTypes.TOGGLE_COMPLETED:
        return {
            todos: [...state.todos].map((item, index) => {
                const newItem = {...item};
                if(index === action.payload){
                    newItem.completed = !newItem.completed;
                }
                return newItem;
            })
        }

    default:
      return state;
  }
}
