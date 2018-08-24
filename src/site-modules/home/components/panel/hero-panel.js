import React from 'react'
import { HeroPanelPropTypes } from '../../types/index'

export function HeroPanel({ data: { title, description } }){
  return (
    <div className="hero-panel">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

HeroPanel.propTypes = {
  data: HeroPanelPropTypes,
};

