import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import './styles/tailwind.css';
import './styles/style.css';
import './styles/components.css';
import './styles/animations.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
