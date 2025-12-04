import React from 'react';
import { Card, Text } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../components/Header';
import ScreenContainer from '../utils/ScreenContainer';

export default function SobreScreen({ navigation }: any) {
  return (
    <>
      <Header title="Sobre" navigation={navigation} />
      <ScreenContainer>
        <Card>
          <Card.Title title="Sobre o App" left={() => <MaterialCommunityIcons name="information" size={24} />} />
          <Card.Content>
            <Text>App React Native com Paper + Drawer + Tabs + Stack + PokéAPI.</Text>
          </Card.Content>
        </Card>
      </ScreenContainer>
    </>
  );
}
