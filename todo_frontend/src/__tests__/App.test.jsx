import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App.jsx';

// PUBLIC_INTERFACE
// Sample test to verify app renders a basic element.
/** Ensures the heading renders */
it('renders the app heading', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /daily task manager/i })).toBeInTheDocument();
});
