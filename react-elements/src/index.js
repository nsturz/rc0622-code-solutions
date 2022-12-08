import React from 'react';

import ReactDOM from 'react-dom/client';

const h1 = React.createElement(
  'h1',
  null,

  'Hello, react!'
);

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container);

root.render(h1);
