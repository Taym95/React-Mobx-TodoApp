import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'mobx-react';
import TodoStore from './store/TodoStore';
import registerServiceWorker from './registerServiceWorker';


const Root = (
  <Provider TodoStore={TodoStore}>
      <App/>
  </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
registerServiceWorker();
