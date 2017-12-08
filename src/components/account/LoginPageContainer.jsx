import React from 'react';
import 'whatwg-fetch';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { incrementProgress, decrementProgress } from '../../actions/progress';

import LoginPage from './LoginPage';

export class LoginPageContainer extends React.Component {
  constructor(props) {
    super(props);

    this.attemptLogIn = this.attemptLogIn.bind(this);
  }

  async attemptLogIn(userData) {
    const { decrementProgressAction, incrementProgressAction } = this.props;

    incrementProgressAction();

    const loginResponse = await fetch(
      '/api/authentication/login',
      {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'same-origin',
      },
    );

    console.log(loginResponse);

    decrementProgressAction();
  }

  render() {
    return (
      <div>
        <LoginPage loginFunction={this.attemptLogIn} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    incrementProgressAction: incrementProgress,
    decrementProgressAction: decrementProgress,
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(LoginPageContainer);
