import Head from 'next/head'
import { AppProps } from 'next/app'
import '../styles/index.css'
import Amplify, { Auth } from 'aws-amplify';
// import awsconfig from './aws-exports';
// Amplify.configure(awsconfig);

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

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
    </>
  )
}

export default withAuthenticator(MyApp);