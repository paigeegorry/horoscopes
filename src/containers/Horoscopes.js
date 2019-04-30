import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import HoroscopeList from '../components/horoscopes/HoroscopeList';
import PropTypes from 'prop-types';
import { fetchScopes, updateSign, updateTime } from '../actions/horoscopes';
import { getHoroscopes, getSign, getTime } from '../selectors/horoscopes';
import HoroscopeForm from '../components/horoscopes/HoroscopeForm';

class Horoscopes extends PureComponent {
  static propTypes = {
    horoscopes: PropTypes.object,
    fetch: PropTypes.func.isRequired,
    handleSignChange: PropTypes.func.isRequired,
    handleTimeChange: PropTypes.func.isRequired,
    time: PropTypes.string.isRequired,
    sign: PropTypes.string.isRequired
  }

  componentDidMount() {
    if(this.props.time && this.props.sign) {
      this.props.fetch(this.props.time, this.props.sign);
    }
    else console.log('nope');
  }

  componentDidUpdate(prevProps) {
    const { fetch, time, sign } = this.props;
    if(prevProps.time !== time || prevProps.sign !== sign) {
      fetch(this.props.time, this.props.sign);
    }
  }

  render() {
    return (
      <>
      <HoroscopeForm 
        onSignChange={this.props.handleSignChange}
        onTimeChange={this.props.handleTimeChange}
      />
      {this.props.horoscopes.horoscope && <HoroscopeList horoscope={this.props.horoscopes} />}
      </>
    );
  }
}

const mapStateToProps = state => ({
  horoscopes: getHoroscopes(state),
  sign: getSign(state),
  time: getTime(state)
});

const mapDispatchToProps = dispatch => ({
  fetch(time, sign) {
    dispatch(fetchScopes(time, sign));
  },
  handleSignChange({ target }) {
    dispatch(updateSign(target.value));
  },
  handleTimeChange({ target }) {
    return dispatch(updateTime(target.value));
  }
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Horoscopes);


