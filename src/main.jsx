import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'normalize.css';
import './index.css';
import Homepage from './Homepage/Homepage';
import Shoppage from './Shoppage/Shoppage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Shoppage />
  </StrictMode>
);
