export const actionsTypes = {
  ADD_TODO: '[Todo] Add',
  REMOVE_TODO: '[Todo] Remove',
  TOGGLE_COMPLETED: '[Todo] Toggle completed',
};

export const addTodo = (label) => ({
  type: actionsTypes.ADD_TODO,
  payload: label,
});

export const removeTodo = (index) => ({
  type: actionsTypes.REMOVE_TODO,
  payload: index,
});

export const toggleCompleted = (index) => ({
  type: actionsTypes.TOGGLE_COMPLETED,
  payload: index,
});
