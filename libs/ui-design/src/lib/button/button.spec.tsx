import { render } from '@testing-library/react';
import React from 'react';

import { Button } from './button';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button variant="primary" label="Hello World" />);
    expect(baseElement).toBeTruthy();
  });
});
