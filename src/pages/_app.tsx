import Head from 'next/head'
import { AppProps } from 'next/app'
import '../styles/index.css'
import Amplify, { Auth } from 'aws-amplify';
// import awsconfig from './aws-exports';
// Amplify.configure(awsconfig);

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

// Auth.federatedSignIn(
//   domain,
//   {
//       token,
//       identity_id, // Optional
//       expires_at: expiresIn * 1000 + new Date().getTime() // the expiration timestamp
//   },
//   user
// ).then(cred => {
//   // If success, you will get the AWS credentials
//   console.log(cred);
//   return Auth.currentAuthenticatedUser();
// }).then(user => {
//   // If success, the user object you passed in Auth.federatedSignIn
//   console.log(user);
// }).catch(e => {
//   console.log(e)
// });

import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth/lib/types';




function MyApp({ Component, pageProps, signOut, user }) {
  return (
    <>
      <Head>
        <title>NextJS TailwindCSS TypeScript Starter</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
      <button
     type="button"
     onClick={() => Auth.federatedSignIn({provider: CognitoHostedUIIdentityProvider.Cognito})}>
     Sign In with Cognito
    </button>
    </>
  )
}

export default withAuthenticator(MyApp);



// // To derive necessary data from the provider
// const {
//     token, // the token you get from the provider
//     domainOrProviderName, // Either the domain of the provider(e.g. accounts.your-openid-provider.com) or the provider name, for now the library only supports 'google', 'facebook', 'amazon', 'developer'
//     expiresIn, // the time in ms which describes how long the token could live
//     user,  // the user object you defined, e.g. { username, email, phone_number }
//     identity_id // Optional, the identity id specified by the provider
// } = getFromProvider(); // arbitrary function

