import React from 'react'

const GifGridItem = ({img}) => {

    return (
        <div className='card animate__fadeIn'>
            <p>{img.title}</p>
            <img src={img.url} alt={img.title} />
        </div>
    )
}

export default GifGridItem
