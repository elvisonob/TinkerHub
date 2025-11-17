import { render, screen, waitFor, within } from '@testing-library/react';
import user from '@testing-library/user-event';
import Todo from './Todo';

/*Now, when my application loads, I want to see everything on the
 
page including TODO PAGE, Add a Todo and List of todo

A User can type a todo and when they click enter, the list of todo loads*/

test('page opens up', () => {
  render(<Todo />);

  const addTodo = screen.getByText(/Add a todo/i);
  const button = screen.getByRole('button', { name: /enter/i });
  const textHeader = screen.getByText(/Todos page/i);
  const listTodo = screen.getByText(/list of todo/i);

  expect(addTodo).toBeInTheDocument();
  expect(button).toBeInTheDocument();
  expect(textHeader).toBeInTheDocument();
  expect(listTodo).toBeInTheDocument();
});

test('user types and renders on page', async () => {
  /*
  user clicks the input,
  user types on the input
  user clicks enter

  the typed text shows up under the list of todos
  */
  //screen.logTestingPlaygroundURL();
  render(<Todo />);
  const textInput = screen.getByLabelText(/add a todo/i);
  await user.click(textInput);
  await user.type(textInput, 'I am a GBP Billionaire');
  const enterButton = screen.getByRole('button', { name: /enter/i });
  await user.click(enterButton);
  expect(textInput).toHaveValue('');

  expect(screen.getByText(/i am a gbp billionaire/i)).toBeInTheDocument();
});

test('remove a todo', async () => {
  render(<Todo />);
  const textInput = screen.getByLabelText(/add a todo/i);
  await user.click(textInput);
  await user.type(textInput, 'I am a GBP Billionaire');
  const enterButton = screen.getByRole('button', { name: /enter/i });
  await user.click(enterButton);
  const todoList = screen.getByText(/i am a gbp billionaire/i);
  expect(todoList).toBeInTheDocument();

  // user locates the remove button
  const removeButton = screen.getByRole('button', {
    name: /remove/i,
  });
  // user clicks the remove button
  user.click(removeButton);
  // the todo associated with the remove button is taken off the page

  expect(screen.queryByText(todoList)).not.toBeInTheDocument();
});
