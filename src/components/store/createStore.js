
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import makeRootReducer from './reducers';
import { createLogger } from 'redux-logger';
import storage from 'redux-persist/lib/storage';


const log = createLogger({
    diff: true,
    collapsed: true,
});

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['Data',],
    blacklist: []
  }

  const persistedReducer = persistReducer(persistConfig, makeRootReducer())

export default (initialState = {}) => {
    const middleware = [thunk, log];

    const enhancers = [];

    
  

    const store = createStore(
       persistedReducer,
       initialState,
        compose(applyMiddleware(...middleware), ...enhancers),
    );

    const persistor = persistStore(store)

    return {store, persistor};
};

