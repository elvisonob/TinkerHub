import { render, screen, waitFor } from '@testing-library/react';
import Todo from './Todo.js';

test('expect texts to show on page', () => {
  render(<Todo />);
  const text = screen.getByText(/Jest test/i);
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
});
