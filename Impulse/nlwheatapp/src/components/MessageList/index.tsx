import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { styles } from './styles';

import { Message } from '../Message';

export function MessageList() {

  const message = {
    id: '12te35y4-5wrt48-212da12-3266dg',
    text: 'Algum texto na menssagem',
    user: {
      name: 'Euclides Dry\'C',
      avatar_url: 'https://github.com/euclidesdry.png',
    }
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      <Message data={message}/>
      <Message data={message}/>
      <Message data={message}/>
    </ScrollView>
  );
}
