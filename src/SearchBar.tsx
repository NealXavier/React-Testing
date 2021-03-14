import React from 'react';

function SearchBar() {
  const [search, setSearch] = React.useState('');
 
  function handleChange(event) {
    setSearch(event.target.value);
  }
 
  return (
    <div>
      <Search value={search} onChange={handleChange}>
        search for:
      </Search>
      <p>Searches for {search ? search : '...'}</p>
    </div>
  );
}
 
export function Search({ value, onChange, children }) {
  return (
    <div>
      <label htmlFor="search">{children}</label>
      <input
        id="search"
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
 
export default SearchBar;
