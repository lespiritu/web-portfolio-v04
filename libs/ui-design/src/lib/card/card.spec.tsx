import { render, screen } from '@testing-library/react';

import { Card } from './card';

describe('Card', () => {
  const CardShade = {
    id: 1,
    title: 'Title',
    content: 'content',
    footer: ['html', 'css', 'javascript'],
    externalLink: 'https://www.google.com/',
    gitHubLink: 'https://liquipedia.net/',
    isActive: false,
    activeHandler: jest.fn(),
  };

  test('should Render the heading of the card', () => {
    render(<Card {...CardShade} />);

    const cardHeading = screen.getByText(/Title/i);
    expect(cardHeading).toBeTruthy();
  });

  test('should render the paragraph in the card', () => {
    render(<Card {...CardShade} />);
    const cardParagraph = screen.getByText(/content/i);

    expect(cardParagraph).toBeTruthy();
  });
});
