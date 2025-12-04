import React from 'react';
import { View, Image } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../components/Header';
import ScreenContainer from '../utils/ScreenContainer';

export default function DetalhesScreen({ route, navigation }: any) {
  const name = route?.params?.from ?? '';
  const [pokemon, setPokemon] = React.useState<any>(null);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (name) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
        .then(res => {
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          return res.json();
        })
        .then(data => setPokemon(data))
        .catch(e => {
          console.error('Failed to load pokemon details', e);
          setError(String(e));
        });
    }
  }, [name]);

  return (
    <>
      <Header title="Detalhes do Pokémon" navigation={navigation} />
      <ScreenContainer>
        {error ? (
          <Text>Erro: {error}</Text>
        ) : pokemon ? (
            <Card>
            <Card.Title title={pokemon.name.toUpperCase()} left={() => <MaterialCommunityIcons name="pokeball" size={24} />} />
            <Card.Content>
              <View style={{ alignItems: 'center', marginBottom: 16 }}>
                <Image source={{ uri: pokemon.sprites.front_default }} style={{ width: 96, height: 96 }} />
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
