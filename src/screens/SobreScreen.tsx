import React from 'react';
import { Card, Text, Icon } from 'react-native-paper';
import Header from '../components/Header';
import ScreenContainer from '../utils/ScreenContainer';

export default function SobreScreen({ navigation }: any) {
  return (
    <>
      <Header title="Sobre" navigation={navigation} />
      <ScreenContainer>
        <Card>
          <Card.Title title="Sobre o App" left={(p) => <Icon source="information" size={24} {...p} />} />
          <Card.Content>
            <Text>App React Native com Paper + Drawer + Tabs + Stack + PokéAPI.</Text>
          </Card.Content>
        </Card>
      </ScreenContainer>
    </>
  );
}
