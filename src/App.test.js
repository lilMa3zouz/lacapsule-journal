import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

/*
{bonus("3 des nombreuses raisons pour lesquelles Ponto à besoin de la section italienne",amira)}
            {bonus("Au fond de la pénombre - Kaïto Bernhart",kaito)}
            {bonus("Vous n'entrez pas le silence - Romane Ponton",roro)}
*/