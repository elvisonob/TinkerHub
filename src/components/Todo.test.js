import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import Todo from './Todo';

/*Now, when my application loads, I want to see everything on the
 
page including TODO PAGE, Add a Todo and List of todo

A User can type a todo and when they click enter, the list of todo loads*/

test('App loads on page', () => {
  render(<Todo />);
  const todo = screen.getByText(/TODo PAGE/i);
  const addTodo = screen.getByText('Add a Todo');
  const listTodo = screen.getByText('LIST OF TODO');

  expect(todo).toBeInTheDocument();
  expect(addTodo).toBeInTheDocument();
  expect(listTodo).toBeInTheDocument();
});

test('User types on page', async () => {
  // user types and user clicks enter
  //something shows up in the list of todo

  render(<Todo />);

  const input = screen.getByRole('textbox');

  await user.click(input);
  await user.type(input, 'I am a Billionaire');

  const button = screen.getByRole('button');
  await user.click(button);

  const todo = await screen.findByText('I am a Billionaire');

  expect(todo).toBeInTheDocument();
});
