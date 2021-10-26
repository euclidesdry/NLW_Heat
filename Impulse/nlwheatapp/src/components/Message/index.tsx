import React from 'react';
import { View, Text } from 'react-native';
import { MotiView } from 'moti';

import { styles } from './styles';

// Components
import { UserPhoto } from '../UserPhoto';

export type MessageProps = {
  id: string;
  text: string;
  user: {
    name: string;
    avatar_url: string;
  }
}

type Props = {
  data: MessageProps;
}

export function Message({ data }: Props) {
  const { id, text, user } = data;

  return (
    <MotiView
      from={{ opacity: 0, translateY: -50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: 'timing', duration: 700 }}
      style={styles.container}
    >
      <Text style={styles.message}>
        {text}
      </Text>

      <View style={styles.footer}>
        <UserPhoto
          imageUri={user.avatar_url}
          sizes="SMALL"
        />

        <Text style={styles.userName}>
          {user.name}
        </Text>
      </View>
    </MotiView>
  );
}
