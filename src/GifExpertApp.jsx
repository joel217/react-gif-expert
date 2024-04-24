import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState( [ 'One Punch' ] );

    console.log(categories)

    const onAddCategory = ( value ) => {
        if( categories.includes(value) ){
            return
        }
        console.log('object')
        setCategories( [ ...categories, value ] )
        //setCategories( cat => [ ...cat, 'Valorant' ] )
    }

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
            // setCategories={ setCategories }
                onNewCategory = { event => onAddCategory(event) } 
            />

            {/* Listado de GIF's */}
           
            { categories.map( category => (
                <GifGrid 
                    key={ category } 
                    category={ category }
                />
            )) 
            }
            
        </>
    )
}