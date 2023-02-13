import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
//import initialState from './utils/constants';

const initialState = {
  reduxCards: [

    {
      title: 'продукт1',
      amount: '5 штук',
      id: 1
    },
    {
      title: 'продукт2',
      amount: '7 штук',
      id: 2,
    },
    {
      title: 'продукт3',
      amount: '8 штук',
      id: 3,
    },

  ]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case "ADD_CARD":
      return {
        ...state,
        reduxCards: [...state.reduxCards, action.payload]
      }

    
  case "DELETE_CARD":

    /*return {
      ...state,
      reduxCards: state.reduxCards.filter(({id}) => id !== action.payload.id)
    } */

    return {
      ...state,
      reduxCards: state.reduxCards.filter(el => el.id !== action.payload.id)
    
    }

    default:
      return state
  }
}

const store = createStore(reducer, composeWithDevTools())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
