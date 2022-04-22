import React from 'react';
import ReactDOM from 'react-dom/client';

import Tools from './modules/tools';

import './styles/index.css';

import App from './components/App';

//Zone d'affichage de notre calendrier
const start = Tools.convertHourStrToMinutes('09:00'),
      end = Tools.convertHourStrToMinutes('21:00');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App start={start} end={end}/>
  </React.StrictMode>
);

