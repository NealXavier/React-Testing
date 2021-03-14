import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './app';
import SearchBar from './SearchBar';
import AsyncSearchBar  from './AsyncSearchBar';
// import Async  from './Async';

ReactDOM.render(<AsyncSearchBar />, document.getElementById('root'));
