import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppContext from './env';
import angy from './images/angy.png';

// set document title (keeps previous behavior)
document.title = `${AppContext()} complaint portal`;

// swaps the link rel=icon tag, for some reason manifest file no work
(() => {
    const selector = "link[rel~='icon']";
    const existing: HTMLLinkElement | null = document.querySelector(selector);
    if (existing) {
      existing.href = angy;
    } else {
      const link = document.createElement('link');
      link.rel = 'icon';
      link.href = angy;
      document.head.appendChild(link);
    }
})();

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);