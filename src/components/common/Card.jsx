import React from 'react'
import PropTypes from 'prop-types'
import ResponsiveImage from './ResponsiveImage'

function Card({title, body, image}){
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden">
      {image && (
        <div className="w-full h-44 lg:h-52">
          <ResponsiveImage src={image} webp={image.replace('.jpg','.webp')} alt={`${title} image`} sizes="(min-width:1024px) 360px, 100vw" />
        </div>
      )}
      <div className="p-6 lg:p-8">
        <h4 className="font-semibold text-lg lg:text-heading-lg">{title}</h4>
        <p className="mt-3 text-neutral-600 text-sm lg:text-base">{body}</p>
      </div>
    </article>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  image: PropTypes.string
}

export default React.memo(Card)
