import { renderTheme } from '../../styles/render-theme';
import Home from './index';
import { screen } from '@testing-library/react';


test('renders learn react link', () => {
  renderTheme(<Home />);
  const headingContainer = screen.getByRole('heading', { name: 'Hello' })
    .parentElement;
  expect(headingContainer).toHaveStyle({
    background: theme.colors.secondaryBg,
  });
  expect(headingContainer).toHaveStyleRule('background', 'red');
  expect(headingContainer).toMatchSnapshot();
});
