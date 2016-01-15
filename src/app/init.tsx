import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { AppRouter } from './router';

document.addEventListener("DOMContentLoaded", () => {
  const appContainer = document.createElement("div");
  appContainer.classList.add("cc-root");
  ReactDOM.render(<AppRouter />, appContainer);
  document.body.appendChild(appContainer);
});
