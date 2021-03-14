import React from 'react';
import { render, screen ,fireEvent, act} from '@testing-library/react';
import {Search} from './SearchBar';
import userEvent from '@testing-library/user-event';

describe('Search', () => {
    test('calls the onChange callback handler', () => {
      const onChange = jest.fn();
   
      render(
        <Search value="" onChange={onChange}>
          Search:
        </Search>
      );
   
      fireEvent.change(screen.getByRole('textbox'), {
        target: { value: 'JavaScript' },
      });
   
      expect(onChange).toHaveBeenCalledTimes(1);
    });

    test('calls the onChange callback', async () => {
        const onChange = jest.fn();
     
        render(
          <Search value="" onChange={onChange}>
            Search:
          </Search>
        );
     
        act(()=>{userEvent.type(screen.getByRole('textbox'), 'JavaScript');}) 
     
        expect(onChange).toHaveBeenCalledTimes(10);
      });
  });