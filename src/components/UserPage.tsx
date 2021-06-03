import { Panel, Text } from '@bigcommerce/big-design';
import React from 'react';

export const UserPage: React.FC = () => {
  function onClick() {
    console.log('disconnect');
  }

  return (
    <Panel action={{ text: 'Logout', onClick }} header="Channel Settings">
      <Text>Foo</Text>
    </Panel>
  );
};
