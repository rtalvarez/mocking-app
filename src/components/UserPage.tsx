import { H1, Panel, Text } from '@bigcommerce/big-design';
import React from 'react';

import { useLoginDestroy } from '../hooks';

export const UserPage: React.FC = () => {
  const { mutate } = useLoginDestroy();

  function onClick() {
    console.log('disconnect');
    mutate();
  }

  return (
    <>
      <H1>Channel App</H1>
      <Panel
        action={{ actionType: 'destructive', text: 'Logout', onClick, variant: 'secondary' }}
        header="Channel Settings"
      >
        <Text>Foo</Text>
      </Panel>
    </>
  );
};
