import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import HoroscopeList from '../components/horoscopes/HoroscopeList';
import PropTypes from 'prop-types';
import { fetchScopes } from '../actions/horoscopes';
import { getHoroscopes } from '../selectors/horoscopes';

class Horoscopes extends PureComponent {
  static propTypes = {
    horoscopes: PropTypes.object,
    fetch: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
      <p>{this.props.horoscopes && this.props.horoscopes.horoscope}</p>
    );
  }
}

const mapStateToProps = state => ({
  horoscopes: getHoroscopes(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchScopes());
  }
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Horoscopes);


