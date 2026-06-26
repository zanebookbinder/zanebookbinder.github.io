import { render, screen } from '@testing-library/react';
import App from './components/App';

test('renders the experience nav link', () => {
  render(<App />);
  const experienceLinks = screen.getAllByRole('link', { name: /experience/i });
  expect(experienceLinks.length).toBeGreaterThan(0);
});

test('renders the name somewhere on the home page', () => {
  render(<App />);
  expect(screen.getAllByText(/zane/i).length).toBeGreaterThan(0);
});
