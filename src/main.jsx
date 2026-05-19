import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import IngredientsProvider from '@/context/ingredients-provider.jsx';
import { App } from '@components/app/app';

import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <IngredientsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </IngredientsProvider>
  </StrictMode>
);
