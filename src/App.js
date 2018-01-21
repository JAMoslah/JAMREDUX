import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import Router from './Router';

class App extends Component {
componentWillMount(){
  const config = {
    apiKey: "AIzaSyCEZPebXahgejlwftQwuBT2jPQPSoTrvsk",
    authDomain: "jami-73236.firebaseapp.com",
    databaseURL: "https://jami-73236.firebaseio.com",
    projectId: "jami-73236",
    storageBucket: "jami-73236.appspot.com",
    messagingSenderId: "1047089498987"

  };
  firebase.initializeApp(config);

}
render(){
  const store = createStore(reducers, {},applyMiddleware(ReduxThunk));
  return (
  <Provider store={store}>
    <Router/>
  </Provider>
        );
}
}

export default App;
