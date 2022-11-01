import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import GameComponent from './GameComponent.js';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <GameComponent />
  </StrictMode>
);
