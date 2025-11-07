import { render, screen, waitFor, within } from '@testing-library/react';
//import user from '@testing-library/user-event';
import userEvent from '@testing-library/user-event';
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
  render(<Todo />);
  const list = screen.getByTestId('listOfTodo');
  expect(
    within(list).queryByText('I am a Billionaire')
  ).not.toBeInTheDocument();
  const input = screen.getByRole('textbox', { name: /add a todo/i });
  userEvent.click(input);
  userEvent.type(input, 'I am a Billionaire');
  userEvent.click(screen.getByRole('button', { name: /enter/i }));

  const todo = await within(list).findByText('I am a Billionaire');
  expect(todo).toBeInTheDocument();
});
