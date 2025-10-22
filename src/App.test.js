import { render, screen, waitFor } from '@testing-library/react';
import App from './App.js';

test('App should render on page', () => {
  render(<App />);
});
