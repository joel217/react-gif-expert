import { useEffect, useState } from "react";

import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
    const [images, setimage] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async() => {
        const newImages = await getGifs( category );
        setimage( newImages );
        setIsLoading( false )
    };

    useEffect( () => {
        getImages();
    }, []);

    return {
        images,
        isLoading
    }
}

