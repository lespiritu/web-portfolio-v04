import { queryByAttribute, render, screen } from '@testing-library/react';
import { Section } from './section';

const sectionProps = {
  sectionNumber: '01',
  title: 'Section Heading 2',
  variant: 'primary',
  name: 'experience',
};
describe('Render section component', () => {
  test('render section number', () => {
    render(<Section {...sectionProps}></Section>);

    const sectionNumber = screen.getByText(/01/i);
    expect(sectionNumber).toBeTruthy();
  });

  test('render section heading', () => {
    render(<Section {...sectionProps}></Section>);

    const sectionheading = screen.getByRole('heading');
    expect(sectionheading.textContent).toBe('Section Heading 2');
  });

  test('Render section ID with props name', () => {
    render(<Section {...sectionProps}></Section>);

    const sectionID = queryByAttribute.bind('experience', 'id');
    expect(sectionID).toBeTruthy();
  });

  it('Render section children', () => {
    render(
      <Section {...sectionProps}>
        <h3>hellow</h3>
      </Section>
    );

    const sectionChild = screen.getByText(/hellow/i);
    expect(sectionChild).toBeTruthy();
  });
});
