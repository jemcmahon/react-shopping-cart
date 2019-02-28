import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import App from "../components/App";
import Shelf from "../components/Shelf";
import FloatCart from "../components/FloatCart";
import Checkbox from "../components/Checkbox";
import Selectbox from "../components/Selectbox";
import Spinner from "../components/Spinner";
import Thumb from "../components/Thumb";
import Corner from "../components/github/Corner.js";
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import combineReducers from '../services/reducers.js';
import { createStore, applyMiddleware } from 'redux'

const store = createStore( combineReducers, applyMiddleware(thunkMiddleware));

const selections = [
  {key: 'a', label:'Select',},
  {key: 'b', label:'Highest to lowest',},
  {key: 'c', label:'Lowest to highest',},
];

storiesOf('Shelf', module)
  .addDecorator((getStory) => (<Provider store={store}>{ getStory() }</Provider>))
  .add('default', () => (<Shelf />))
  ;

storiesOf('FloatCart', module)
  .addDecorator((getStory) => (<Provider store={store}>{ getStory() }</Provider>))
  .add('default', () => <FloatCart />)
  .add('cart open', () => <FloatCart cartOpen={true}/>)
  ;

storiesOf('Selectbox', module)
  .addDecorator((getStory) => (<Provider store={store}>{ getStory() }</Provider>))
  .add('default', () => <Selectbox options={selections} />)
  ;

storiesOf('Corner', module).add('default', () => <Corner />);
storiesOf('Checkbox', module).add('default', () => <Checkbox />);
storiesOf('Spinner', module).add('default', () => <Spinner />);

/*
storiesOf('App', module)
  .addDecorator((getStory) => (<Provider store={store}>{ getStory() }</Provider>))
  .add('default', () => (<App />))
  ;

storiesOf('Thumb', module)
  .addDecorator((getStory) => (<Provider store={store}>{ getStory() }</Provider>))
  .add('default', () => <Thumb />)
  ;
*/

// vim:sw=2 ts=2 sts=0
