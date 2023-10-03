import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { ContactsProvider } from 'context/ContactsContex';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContactsProvider>
    <App />
    </ContactsProvider>
  </React.StrictMode>
);
