import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { MarketingModulesPropTypes } from '../types/index'
import { Panels } from '../components/panel/panels'
import {
  fetchMarketingsData,
} from '../../../actions/marketing-actions'

export class HomeUI extends Component {
  static propTypes = {
    items: MarketingModulesPropTypes,
  };

  componentDidMount() {
    if (!this.props.items) {
      this.props.fetchMarketingsData();
    }
  }

  render() {
    const { items } = this.props;
    if (!items) {
      return (
        <div>smth went wrong</div>
      )
    }
    return (
      <div className="marketing-content">
        <Panels items={items} />
      </div>
    )
  }
};


const mapStateToProps = (state) => ({
  items: state.marketingData.items,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchMarketingsData,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeUI);