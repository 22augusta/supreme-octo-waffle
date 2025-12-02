import React from 'react';
import { View } from 'react-native';
import { Card, Text, Button, Icon } from 'react-native-paper';
import Header from '../components/Header';
import ScreenContainer from '../utils/ScreenContainer';

export default function DetalhesScreen({ route, navigation }: any) {
  const name = route?.params?.from ?? '';
  const [pokemon, setPokemon] = React.useState<any>(null);

  React.useEffect(() => {
    if (name) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
        .then(res => res.json())
        .then(data => setPokemon(data));
    }
  }, [name]);

  return (
    <>
      <Header title="Detalhes do Pokémon" navigation={navigation} />
      <ScreenContainer>
        {pokemon ? (
          <Card>
            <Card.Title title={pokemon.name.toUpperCase()} left={(p) => <Icon source="pokeball" size={24} {...p} />} />
            <Card.Content>
              <View style={{ alignItems: 'center', marginBottom: 16 }}>
                <Icon source={{ uri: pokemon.sprites.front_default }} size={96} />
              </View>
              <Text>Altura: {pokemon.height}</Text>
              <Text>Peso: {pokemon.weight}</Text>
              <Text>Tipos: {pokemon.types.map((t: any) => t.type.name).join(', ')}</Text>
            </Card.Content>
            <Card.Actions>
              <Button onPress={() => navigation.goBack()}>Voltar</Button>
            </Card.Actions>
          </Card>
        ) : (
          <Text>Carregando detalhes...</Text>
        )}
      </ScreenContainer>
    </>
  );
}
