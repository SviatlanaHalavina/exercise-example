import React, { Fragment }  from 'react'
import { ItemsPropTypes } from '../../types/index'

export function ImageGrid({ data }){
  return (
    <Fragment>
      {data.map(({ imagesrc }, index) => (
        // should be img tag instead
        <div className="image-grid" key={`image-${index}`}>
          {imagesrc}
        </div>
      ))}
    </Fragment>
  )
}

ImageGrid.propTypes = {
  data: ItemsPropTypes,
};

