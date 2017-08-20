import React from 'react';
import ReactDOM from 'react-dom';
import ListPosts from './Containers/ListPosts';
import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './Reducers/index';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Containers/Login';
import CreateAccount from './Containers/CreateAccount';
import AuthenticatedComponent from './Containers/AuthenticatedComponent';
import LoadingComponent from './Containers/LoadingComponent';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <LoadingComponent>
        <Switch>
          <Route path="/CreateAccount" component={CreateAccount}/>
          <Route path="/Login" component={Login}/>
          <AuthenticatedComponent>
            <Route path="/" component={ListPosts}/>
          </AuthenticatedComponent>
        </Switch>
      </LoadingComponent>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
