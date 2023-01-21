import { render } from '@testing-library/react';
import { Navigation } from './navigation';

describe('Navigation component', () => {
  const { getByText } = render(<Navigation />);

  it('should render navigation menus', () => {
    expect(getByText(/about/i)).toBeTruthy();
    expect(getByText(/experience/i)).toBeTruthy();
    expect(getByText(/work/i)).toBeTruthy();
    expect(getByText(/contact/i)).toBeTruthy();
  });
});
