import { render } from '@testing-library/react';
import React from 'react';

import Typography from './typography';

describe('Typography', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Typography variant="paragraph">Testing</Typography>);
    expect(baseElement).toBeTruthy();
  });
});
