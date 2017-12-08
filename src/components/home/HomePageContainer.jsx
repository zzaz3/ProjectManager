import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { incrementProgress, decrementProgress, testo } from '../../actions/progress';
import HomePage from './HomePage';

export function HomePageContainer(props) {
  const { incrementProgressAction, decrementProgressAction, testoAction } = props;
  return (
    <HomePage
      testoFunction={testoAction}
      incrementFunction={incrementProgressAction}
      decrementFunction={decrementProgressAction}
    />
  );
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    testoAction: testo,
    incrementProgressAction: incrementProgress,
    decrementProgressAction: decrementProgress,
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(HomePageContainer);
