import React from 'react';
import ReactDOM from 'react-dom';
import ListPosts from './Containers/ListPosts';
import Login from './Containers/Login';
import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './Reducers/index';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CreateAccount from './Containers/CreateAccount';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path="/Login" component={Login}/>
        <Route path="/CreateAccount" component={CreateAccount}/>
        <Route path="/" component={ListPosts}/>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
