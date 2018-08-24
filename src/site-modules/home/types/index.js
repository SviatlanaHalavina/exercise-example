//In case of using Flow it is useful to store Data types in one place and use it in components and tests

import PropTypes from 'prop-types';

export const HeroPanelPropTypes = PropTypes.shape({
  title: PropTypes.string,
  description: PropTypes.string,
});

export const ItemsPropTypes = PropTypes.arrayOf(PropTypes.shape({
  imagesrc: PropTypes.string,
}));

export const PackagesPropTypes = PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string,
  price: PropTypes.string,
}));

export const PanelPropTypes = PropTypes.shape({
  paneltype: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  items: ItemsPropTypes,
  packageoptions: PackagesPropTypes
});

export const MarketingModulesPropTypes = PropTypes.shape({
  [PropTypes.string]: PanelPropTypes,
});
