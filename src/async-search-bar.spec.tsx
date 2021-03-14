import React from 'react';
import { render, screen ,fireEvent,act} from '@testing-library/react';
 
import AsyncSearchBar from './AsyncSearchBar';
 
describe('AsyncSearchBar', () => {
    test('renders AsyncSearchBar component',async () => {
        render(<AsyncSearchBar />);
    
        expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();
    });
    
    test('renders AsyncSearchBar component', async() => {
        render(<AsyncSearchBar />);

        await screen.findByText(/Signed in as/);
 
        expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();

        act(()=>{fireEvent.change(screen.getByRole('textbox'), { target: { value: 'JavaScript' }});})

        expect(screen.getByText(/Searches for JavaScript/)).toBeInTheDocument();

    });
});