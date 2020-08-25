import React, { Component } from 'react';

import AppContainer from "./AppContainer";
import createStore from './store/createStore';



export default class Root extends Component {
    renderApp(){
        const initialState = window.__INITIAL_STATE__;
        const store = createStore(initialState);

        return (
           <AppContainer store={store.store}  persistor={store.persistor}>
               
           </AppContainer>
        )
    }

    render(){
        return this.renderApp();
    }
}