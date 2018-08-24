import React, { Fragment }  from 'react'
import { MarketingModulesPropTypes } from '../../types/index'
import { PANELS_ORDER } from '../../constants/constants'
import { HeroPanel } from './hero-panel'
import { Packages } from './packages'
import { ImageGrid } from './image-grid'

export function Panels(props){
  return (
    <Fragment>
      {PANELS_ORDER.map((panelType) => {
        const {
          paneltype,
          title,
          description,
          items,
          packageoptions
        } = props.items[panelType];
        return (
          <section className={`panel panel-${paneltype}`} key={paneltype}>
            {title && <HeroPanel data={{title, description}}/>}
            {items && <ImageGrid data={items}/>}
            {packageoptions && <Packages data={packageoptions}/>}
          </section>)
      })}
    </Fragment>
  )
}

Panels.propTypes = {
  items: MarketingModulesPropTypes,
};

Panels.defaultProps = {};

