import { withAuthenticator } from '@aws-amplify/ui-react';
import React, { Component } from 'react';

class OAuthButton extends React.Component {
  handleClick() {
    // do something meaningful, Promises, if/else, whatever, and then
    window.location.assign('https://weo-dev.auth.ap-southeast-2.amazoncognito.com/oauth2/authorize?identity_provider=AzureAD&redirect_uri=https://testapp.dunlop.geek.nz/&response_type=TOKEN&client_id=IAMANID&scope=aws.cognito.signin.user.admin email openid phone profile');
  }

  render() {
    return (
      <div className='login'>
        <button onClick={this.handleClick}>Log back into application with O365</button>
      </div>
    )
  }
}

//export default OAuthButton;
export default withAuthenticator(OAuthButton);