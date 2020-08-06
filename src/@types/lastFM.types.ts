export type ArtistT = {
    name: string,
    mbid: string,
    url: string
}

export type TagsT = {
    name: string,
    url: string
}

export type ArtistDetailT = {
    name: string,
    image: ImageT[],
    url: string,
    tags: {tag: TagsT[]},
    bio: {
        summary: string,
        content: string
    }
}

export type ImageT = {
    '#text': string,
    size: string
}

export type TrackT = {
    name: string,
    artist: ArtistT,
    image?: ImageT[],
}

export type SeachedTrackT = {
    name: string,
    artist: string,
    image?: ImageT[],
}