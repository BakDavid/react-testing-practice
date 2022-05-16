import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('renders Hello World as a text', () => {
  // Arrange
  render(<Greeting />);

  // Act  here is nothing

  // Assert
  const linkElement = screen.getByText(/hello world/i);
  expect(linkElement).toBeInTheDocument();
});
