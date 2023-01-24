import { render, screen } from '@testing-library/react';
import App from './App';

test('check article count', () => {
  render(<App />);
  const count = screen.getByTestId("articleCount");
  expect(count).toHaveValue(3);
});
