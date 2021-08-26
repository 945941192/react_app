import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { LocaleProvider } from 'antd'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App'
// import * as serviceWorker from './serviceWorker';
import indexReducer from './reducer'

const store = createStore(indexReducer)

ReactDOM.render(
  <Provider store={store}>
  {/* <Provider> */}
    <LocaleProvider locale={zhCN}>
      <App />
    </LocaleProvider>
  </Provider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// // import './index.css';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
