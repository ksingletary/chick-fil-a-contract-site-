import React from 'react';
import LazyLoad from 'react-lazyload';

const LazyImage = ({ src, alt, className, ...otherProps }) => (
  <LazyLoad height={600} once>
    <img src={src} alt={alt} className={className} {...otherProps} />
  </LazyLoad>
);

export default LazyImage;