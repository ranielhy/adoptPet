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
      <p>Teste</p>
     <PetCollection />
    </div>
  );
}

export default withAuthenticator(App);
