import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import Todo from './Todo.js';

test('expect texts to show on page', () => {
  render(<Todo />);
  const text = screen.getByText(/jest test/i);
  const text2 = screen.getByText(/add todo/i);
  const button = screen.getByRole('button');
  expect(text).toBeInTheDocument();
  expect(text2).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});
