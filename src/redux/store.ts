import {combineReducers, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import {lastReducers} from './reducers/lastReducer'

export type GlobalState = ReturnType<typeof _rootReducer>

const _rootReducer = combineReducers({
    lastFm: lastReducers
})

export const store = createStore(_rootReducer, applyMiddleware(thunk))
