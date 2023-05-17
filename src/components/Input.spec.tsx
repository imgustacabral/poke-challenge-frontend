import { fireEvent, render } from '@testing-library/react';
import { Input } from './Input';


describe('Input', () => {
    it('should render correctly with placeholder and initial value', () => {
      const placeholder = 'Digite aqui';
      const value = 'hello';
  
      const setValue = jest.fn();
  
      const { getByPlaceholderText } = render(
        <Input placeholder={placeholder} value={value} setValue={setValue} />
      );
  
      const input = getByPlaceholderText(placeholder) as HTMLInputElement;
  
      expect(input).toBeInTheDocument();
      expect(input.value).toBe(value);
  
      fireEvent.change(input, { target: { value: 'world' } });
  
      expect(setValue).toHaveBeenCalledWith('world');
    });
  });