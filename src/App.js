import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';


import {
  PetCollection 
 } from './ui-components';

function App() {
  return (
    <div className="App">
     <h1>Produção</h1>
    </div>
  );
}

export default withAuthenticator(App);
