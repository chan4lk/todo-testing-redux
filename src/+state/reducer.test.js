import { reducer } from './reducer';
import { actionsTypes } from './actions';

test('should use initial state', () => {
  const newState = reducer(undefined, {
    type: actionsTypes.ADD_TODO,
    payload: 'Test item',
  });

  expect(newState.todos[0].label).toBe('Test item');
});

test('should toggle todo', () => {
  const newState = reducer(
    {
      todos: [
        {
          completed: false,
          label: 'Item 1',
        },
        {
          completed: false,
          label: 'Item 2',
        },
      ],
    },
    {
      type: actionsTypes.TOGGLE_COMPLETED,
      payload: 1,
    }
  );

  expect(newState.todos[1].completed).toBe(true);
});
