import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

import { COLORS } from '../../theme';

import { styles } from './styles';

import { Button } from '../Button';

export function SendMessageForm() {
  const [message, setMessage] = useState<string>('');
  const [sendingMessage, setSendingMessage] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <TextInput
        keyboardAppearance="dark"
        placeholder="Qual é a sua expectativa para o evento?"
        placeholderTextColor={COLORS.GRAY_PRIMARY}
        multiline
        maxLength={140}
        style={styles.input}
        onChangeText={setMessage}
        value={message}
        editable={!sendingMessage}
      />

      <Button
        title="ENVIAR MENSAGEM"
        backgroundColor={COLORS.PINK}
        color={COLORS.WHITE}
      />
     </View>
  );
}
