import { render, screen } from '@testing-library/react';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);

    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting Hi, my name is', () => {
    const { getByText } = render(<App />);

    expect(getByText(/Hi, my name is/i)).toBeTruthy();
  });
});
