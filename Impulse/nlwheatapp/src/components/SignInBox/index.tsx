import React from 'react';
import { View, Text } from 'react-native';

import { COLORS } from '../../theme';

import { styles } from './styles';

import { Button } from '../Button';

export function SignInBox() {
  return (
    <View>
      <Button
        title="ENTRAR COM O GITHUB"
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
        icon="github"
      />
     </View>
  );
}
