import React from 'react'

import {FlatList} from 'react-native'
import { TrackT, SeachedTrackT } from '../../@types/lastFM.types'
import Track from '../Track'

type _TrackPropsT = {
    tracks: TrackT[] | SeachedTrackT[]
}


const TrackList: React.FC<_TrackPropsT> = ({tracks}) => {

    return (
        <FlatList<TrackT | SeachedTrackT>
            data={tracks} 
            renderItem={ ({item}) => <Track track={item}/>}
            keyExtractor={ (item, index) => index.toString() }
        />
    )
}

export default TrackList;
