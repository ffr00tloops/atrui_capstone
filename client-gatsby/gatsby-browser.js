import './src/styles/global.css'
//gatsby-browser.js
import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { navigate } from 'gatsby';

const onRedirectCallback = (appState) => {
 // Use Gatsby's navigate method to replace the url
 navigate(appState?.returnTo || '/', { replace: true });
};

export const wrapRootElement = ({ element }) => {
 return (
  <Auth0Provider
   domain="dev--fvxeza3.us.auth0.com"
   clientId="sENW1u750k2VFWbAbBX5J1MIqnGv3wgD"
   redirectUri={window.location.origin}
   onRedirectCallback="https://atrui-ffr00tloops.vercel.app/"
   >
    {element}
 </Auth0Provider>
 );
};