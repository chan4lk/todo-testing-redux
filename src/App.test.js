import React from 'react';
import { render, fireEvent } from './test-utils';
import App from './App';

test('should render app title', () => {
  const { getByText } = render(<App />);
  const title = getByText(/Todo List/i);
  expect(title).toBeInTheDocument();
});

test('should add item', () => {
  const { getByText, getByTestId } = render(<App />);
  const input = getByTestId('todo-input');
  fireEvent.change(input, {
    target: { value: 'Todo item 1' },
  });

  fireEvent.click(getByText('Add'));

  const doneBtn = getByText('Done');
  expect(doneBtn).toBeInTheDocument();
});

test('should remove item', () => {
  const { getByText } = render(<App />, {
    initialState: {
      todos: [
        {
          label: 'Todo Item 0',
          completed: true,
        },
      ],
    },
  });

  const doneBtn = getByText('Undone');
  expect(doneBtn).toBeInTheDocument();
  fireEvent.click(getByText('Remove'));
  expect(doneBtn).not.toBeInTheDocument();

});

test('should toggle item', () => {
  const { getByText } = render(<App />, {
    initialState: {
      todos: [
        {
          label: 'Todo Item 0',
          completed: false,
        },
      ],
    },
  });

  const doneBtn = getByText('Done');
  fireEvent.click(doneBtn);

  const undoneBtn = getByText('Undone');
  expect(undoneBtn).toBeInTheDocument();
});
