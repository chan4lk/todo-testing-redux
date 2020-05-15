import React from 'react';
import { render, fireEvent } from './test-utils';
import { TodoItem } from './TodoItem';
import { createStore } from 'redux';
import { reducer } from './+state/reducer';

test('renders done button', () => {
  const todo = {
    label: 'The test item',
    completed: false,
  };
  const { getByText } = render(<TodoItem todo={todo} index={0} />, {
    initialState: {
      todos: [todo],
    },
  });
  const doneBtn = getByText('Done');
  expect(doneBtn).toBeInTheDocument();
});

test('should toggle done button', () => {
  const todo = {
    label: 'The test item',
    completed: false,
  };
  const store = createStore(reducer, {
    todos: [todo],
  });
  const { getByText } = render(<TodoItem todo={todo} index={0} />, {
    store,
  });
  const doneBtn = getByText('Done');
  fireEvent.click(doneBtn);
  expect(store.getState().todos[0].label).toBe('The test item');
  expect(store.getState().todos[0].completed).toBe(true);
});


test('should remove item from store', () => {
    const todo = {
      label: 'The test item',
      completed: false,
    };
    const store = createStore(reducer, {
      todos: [todo],
    });
    const { getByText } = render(<TodoItem todo={todo} index={0} />, {
      store,
    });
    const removeBtn = getByText('Remove');
    fireEvent.click(removeBtn);
    expect(store.getState().todos.length).toBe(0);
  });
