import React from 'react'
import PropTypes from 'prop-types'

export default function ResponsiveImage({src, webp, alt, className = '', sizes}){
  // Accepts a local src and optional webp path. Falls back to img when picture isn't supported.
  return (
    <picture>
      {webp && <source srcSet={webp} type="image/webp" />}
      <img src={src} alt={alt} loading="lazy" className={`w-full h-full object-cover ${className}`} sizes={sizes} />
    </picture>
  )
}

ResponsiveImage.propTypes = {
  src: PropTypes.string.isRequired,
  webp: PropTypes.string,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  sizes: PropTypes.string
}

