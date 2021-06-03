import { H1, Panel, Text } from '@bigcommerce/big-design';
import React from 'react';

import { useLoginMutate } from '../hooks';

export const LoginPage: React.FC = () => {
  const { mutate } = useLoginMutate();

  function onClick() {
    console.log('login');
    mutate();
  }

  return (
    <>
      <H1>Channel App</H1>
      <Panel action={{ text: 'Login', onClick }} header="Not logged in">
        <Text>
          It looks like you are not logged in. Please login in order to access your user profile.
        </Text>
      </Panel>
    </>
  );
};
