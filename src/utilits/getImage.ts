import { ImageT } from "../@types/lastFM.types";

export const getImage = (size: string, images?: ImageT[]) => {
    if(images) {
        return images.find( img => img.size === size )
    }
    
}