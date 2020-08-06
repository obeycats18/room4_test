import React from 'react'

import { TrackList } from '../../components'
import { TrackT } from '../../@types/lastFM.types'

type _HomePropsT = {
  tracks: TrackT[]
}

export const Home: React.FC<_HomePropsT> = ({tracks}) => {    

    return <TrackList tracks={tracks}/>
}

