import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import ReactDOM from 'react-dom';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/sing/i);
  expect(linkElement).toBeInTheDocument();
});

it('renders without crashing',() => {
  const div = document.createElement('div');
  ReactDOM.render(<App/>,div);
})