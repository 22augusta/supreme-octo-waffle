
import React from 'react';
import { Appbar } from 'react-native-paper';
import { useDrawer } from './DrawerProvider';

export default function Header({ title, navigation }: any) {
  const { toggle } = useDrawer();

  return (
    <Appbar.Header mode="center-aligned">
      <Appbar.Action icon="menu" onPress={toggle} />
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
}
