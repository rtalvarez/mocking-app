import { Flex, FlexItem, H1, Panel, Text } from '@bigcommerce/big-design';
import React from 'react';

import { useLoginDestroy } from '../hooks';

export const UserPage: React.FC = () => {
  const { mutate } = useLoginDestroy();

  function onClick() {
    mutate();
  }

  return (
    <>
      <H1>Channel App</H1>
      <Panel
        action={{ actionType: 'destructive', text: 'Logout', onClick, variant: 'secondary' }}
        header="Channel Settings"
      >
        <Flex alignItems="center" marginBottom="medium">
          <img alt="user" src="https://via.placeholder.com/36" style={{ borderRadius: '50%' }} />
          <FlexItem flexGrow={1} marginLeft="medium">
            <Text>john@example.com</Text>
          </FlexItem>
        </Flex>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, quaerat, iste, eos
          tempora debitis laudantium praesentium veniam repellendus dolorum error ipsam? Eos totam
          perferendis accusantium numquam magni sed facere ad?
        </Text>
      </Panel>
    </>
  );
};
