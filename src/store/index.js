import { createStore,applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './rootReducer'

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware( createSagaMiddleware ))
)

export default store 