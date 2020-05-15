import React from 'react';
import { render } from './test-utils';
import {TodoItem} from './TodoItem';

test('renders learn react link', () => {
    const todo = {
        label: 'The test item',
        completed: false
    }
  const { getByText } = render(<TodoItem todo={todo} index={0} />);
  const doneBtn = getByText('Done');
  expect(doneBtn).toBeInTheDocument();
});
