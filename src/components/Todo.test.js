import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Todo from './Todo';

/*Now, when my application loads, I want to see everything on the
 
page including TODO PAGE, Add a Todo and List of todo

A User can type a todo and when they click enter, the list of todo loads*/

test('App loads on page', () => {
  render(<Todo />);
  const todo = screen.getByText(/Todo PAGE/i);
  const addTodo = screen.getByText('Add a Todo');
  const listTodo = screen.getByText('LIST OF TODO');

  expect(todo).toBeInTheDocument();
  expect(addTodo).toBeInTheDocument();
  expect(listTodo).toBeInTheDocument();
});

test('User types on page', async () => {
  render(<Todo />);
  const labelText = screen.getByLabelText(/add a todo/i);
  userEvent.click(labelText);
  userEvent.keyboard('hello motor');
  const button = screen.getByRole('button', { name: /enter/i });
  userEvent.click(button);

  await screen.findByText('hello motor');

  const listTodo = screen.getByTestId('listOfTodo');
  expect(listTodo).toHaveTextContent('hello motor');
});

test('Remove todo in page', async () => {
  render(<Todo />);

  const labelText = screen.getByLabelText(/add a todo/i);
  userEvent.click(labelText);
  userEvent.keyboard('hello motor');
  const button = screen.getByRole('button', { name: /enter/i });
  userEvent.click(button);

  const todo = await screen.findByText('hello motor');

  // User should click a remove button

  const removeButton = screen.getByRole('button', { name: /remove/i });
  userEvent.click(removeButton);

  // After clicking, the todo should be removed from page
  await waitFor(() =>
    expect(screen.queryByText('hello motor')).not.toBeInTheDocument()
  );
});
