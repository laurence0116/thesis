import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import ImageQuiz from './imagequiz';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ImageQuiz />, document.getElementById('root'));
registerServiceWorker();