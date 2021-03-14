import React from 'react';
import { render, screen ,fireEvent} from '@testing-library/react';
import SearchBar from './SearchBar';
 
describe('SearchBar', () => {
//  test('renders SearchBar component', () => {
//    render(<SearchBar />);
 
//     // 1.获取元素  
    // screen.getByText('Search:');

//    expect(screen.getByText(/search/i)).toBeInTheDocument();
//  });

  test('renders App component', () => {
      render(<SearchBar/>);
      expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

});