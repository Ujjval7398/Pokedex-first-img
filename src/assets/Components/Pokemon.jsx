import React from 'react'
import { Link } from 'react-router-dom';

function Pokemon({name, image, id}) {

    return(
        <Link to={`/Pokemon/${id}`}>
        <div className='pokemon'>
            <div className='name' id='name'>{name}</div>
            <div><img src={image}  className='pokeon-img'/></div>
        </div>
        </Link>
        
    )
}
export default Pokemon;