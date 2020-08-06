import actions from '../actions/lastActions'
import {InferActions} from '../../@types/redux.types'

export type ActionsT = ReturnType<InferActions<typeof actions>>

type InititalStateT = {
    artists: any[]
}

const initialState: InititalStateT = {
    artists: []
}

export const lastReducers = (state = initialState, action: ActionsT): InititalStateT => {
    switch(action.type) {
        case 'GET_CHART_ARTIST': return {
            ...state,
            artists: action.artists
        }
        default: return state
    }
}