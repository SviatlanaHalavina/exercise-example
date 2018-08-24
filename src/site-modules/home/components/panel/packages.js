import React, { Fragment }  from 'react'
import { PackagesPropTypes } from '../../types/index'

export function Packages({ data }){
  return (
    <Fragment>
      {data.map(({ name, price }, index) => (
        <div className="packages" key={name}>
          <h3>{name}</h3>
          <p>{price}</p>
        </div>
      ))}
    </Fragment>
  )
}

Packages.propTypes = {
  data: PackagesPropTypes,
};

