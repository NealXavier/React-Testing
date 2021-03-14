# React Testing

## How to run

```
// or npm run start
yarn start 
```



## Why to upload the demo

About React testing example too much enzyme and less use React-Testing-Library, but enzyme has a lot of limitations.But when i use React-Testing-Library find some problem about test environment, something not compatible.

And i prepare the environment too much time to solve compatible problems, help guy to focus on the testing but enviornment.



## How to use

There are 3 components,e.g Async,SearchBar,AsyncSearchBar.

You can replace components name on /src/index.tsx, and you will find out what components display.

```javascript
// src/index.tsx
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './app';
import SearchBar from './SearchBar';
import AsyncSearchBar  from './AsyncSearchBar';
// import Async  from './Async';

// replace it components name
ReactDOM.render(<AsyncSearchBar />, document.getElementById('root'));
```



## Contact me

Please put issue to let me know when you find some problem that you can't solve.



