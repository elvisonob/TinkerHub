import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import TodoList from './TodoList';

test('display of todoList', () => {
  render(<TodoList />);
  const button = screen.getByRole('button');
  user.click(button);

  const list = screen.getByRole('div');
  expect(list).toHaveLength(1);
});
