import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
  userEvent.click(textInput);
  userEvent.type(textInput, 'I am a GBP Billionaire');
  const enterButton = screen.getByRole('button', { name: /enter/i });
  userEvent.click(enterButton);

  expect(screen.getByText(/i am a gbp billionaire/i)).toBeInTheDocument();
});
