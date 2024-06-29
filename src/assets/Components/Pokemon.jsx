import React from 'react'

function Pokemon(name, image) {

    return(
        <div className='pokemon'>
            <div className='name' id='name'>{name}</div>
            <div><img src={image}  className='pokeon-img'/></div>
        </div>
        
    )
}
export default Pokemon;