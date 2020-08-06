import { Dispatch } from 'react'

import actions from '../actions/lastActions'
import {lastAPI} from '../../api'
import { ActionsT } from '../reducers/lastReducer'

const {getChartArtistAction} = actions

const getChartArtists = () => async (dispath: Dispatch<ActionsT>) => {
    const response = await lastAPI.getCharArtist()
        
    if(response) {
        dispath(getChartArtistAction(response))
    }
}

export default {getChartArtists}

