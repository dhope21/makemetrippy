import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NewApp from './NewApp';
import NewApp2 from './NewApp2';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<NewApp2 />, document.getElementById('root'));
registerServiceWorker();
