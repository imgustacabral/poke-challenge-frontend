import { render } from '@testing-library/react';
import { PokemonCard } from "./PokemonCard";

describe('PokemonCard', () => {
    it('should render correctly with name and abilities', () => {
      const name = 'Pikachu';
      const abilities = ['Shokcs', 'dajsdka'];
  
      const { getByText } = render(<PokemonCard name={name} abilities={abilities} />);
  
      expect(getByText(name)).toBeInTheDocument();
      abilities.forEach((ability) => {
        expect(getByText(ability)).toBeInTheDocument();
      });
    });
  });