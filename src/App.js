import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {
  const config = {
    apiKey: 'AIzaSyAIEB7-kd4JjE4RWT5D7P6Ram9hr9Zb0V8',
    authDomain: 'manager-f20a3.firebaseapp.com',
    databaseURL: 'https://manager-f20a3.firebaseio.com',
    projectId: 'manager-f20a3',
    storageBucket: 'manager-f20a3.appspot.com',
    messagingSenderId: '135905071191'
  };
  firebase.initializeApp(config);
  }
  render() {
    const store = createStore((reducers), {}, applyMiddleware(ReduxThunk));
    return (
    <Provider store={store}>
      <Router />
    </Provider>
    );
  }
}

export default App;
