import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux"//storeを作成してくれる関数
import { Provider } from "react-redux"//全てのcompnentから参照できるようにする特殊なcomponent

import './index.css';
import reducer from "./reducers"

import App from './components/App';
import reportWebVitals from './reportWebVitals';

const store = createStore(reducer)//全てのstateはこのstoreに集約されている

// a既存のコンポーネントをProviderコンポーネントでラップして,store属性に作成したstoreを渡すだけ　
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
