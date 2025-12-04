import React from 'react';
import { Card, Text, Button } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ScreenContainer from '../utils/ScreenContainer';

export default function HomeScreen({ navigation }: any) {
  const [pokemons, setPokemons] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(json => {
        setPokemons(json.results);
        setLoading(false);
      })
      .catch(e => {
        console.error('Failed to load pokemons', e);
        setError(String(e));
        setLoading(false);
      });
  }, []);

  return (
    <ScreenContainer>
      <Card mode="elevated">
        <Card.Title title="Pokémons" left={(props) => <MaterialCommunityIcons name="pokeball" size={24} />} />
        <Card.Content>
          {loading ? (
            <Text>Carregando...</Text>
          ) : error ? (
            <Text>Erro: {error}</Text>
          ) : (
            pokemons.map((p, index) => (
              <Button
                key={index}
                mode="contained"
                style={{ marginVertical: 4 }}
                onPress={() => navigation.navigate('Detalhes', { from: p.name })}
              >
                {p.name.toUpperCase()}
              </Button>
            ))
          )}
        </Card.Content>
      </Card>
    </ScreenContainer>
  );
}
