import React, { useEffect, useContext, createContext, useReducer } from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import produce from 'immer';

import Head from 'next/head';
import Amplify, { API, Storage, Auth, Hub, withSSRContext } from 'aws-amplify';


import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


// https://github.com/aws-amplify/amplify-js/issues/222
// import awsExports from '../aws-exports';
// Amplify.configure(awsExports);

import config from '../aws-exports';
// import './globals.scss';
import awsconfig from '../aws-config/awsconfig.json'
import awsauth from '../aws-config/awsauth.json'

Amplify.configure({
  ...config,
  ssr: true,
});

import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth/lib/types';


function App({ isPassedToWithAuthenticator, signOut, user }) {
  if (!isPassedToWithAuthenticator) {
    console.log(`isPassedToWithAuthenticator was not provided`);
  }


  return (
    <>
      {/* <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button> */}

      {/* <button
          type="button"
          onClick={() => Auth.federatedSignIn({provider: CognitoHostedUIIdentityProvider.Cognito})}>
          Sign In with Cognito
      </button> */}
      <button onClick={() => Auth.federatedSignIn()}>Open Hosted UI</button>
    </>
  );
}

export default App;

export async function getStaticProps() {
  return {
    props: {
      isPassedToWithAuthenticator: true,
    },
  };
}

// Auth.currentAuthenticatedUser().then(user => {
//   console.log('currentAuthenticatedUser', user)
//   this.setState({ user})
// }).catch(() => console.log('Not signed in'))

export async function componentDidMount () {
  Amplify.configure(awsconfig)
  Auth.configure({ oauth: awsauth })
  Hub.listen('auth', ({ payload: { event, data } }) => {
    switch (event) {
      case 'signIn':
        console.log('sign in', event, data)
        // this.setState({ user: data})
        break
      case 'signOut':
        console.log('sign out')
        // this.setState({ user: null })
        break
    }
  })
}




// // To derive necessary data from the provider
// const {
//     token, // the token you get from the provider
//     domainOrProviderName, // Either the domain of the provider(e.g. accounts.your-openid-provider.com) or the provider name, for now the library only supports 'google', 'facebook', 'amazon', 'developer'
//     expiresIn, // the time in ms which describes how long the token could live
//     user,  // the user object you defined, e.g. { username, email, phone_number }
//     identity_id // Optional, the identity id specified by the provider
// } = getFromProvider(); // arbitrary function

