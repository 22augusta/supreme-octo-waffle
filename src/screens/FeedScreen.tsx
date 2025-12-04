import React from 'react';
import { View, Image } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ScreenContainer from '../utils/ScreenContainer';

export default function FeedScreen({ navigation }: any) {
  const [pokemons, setPokemons] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=5&offset=10')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(async json => {
        const details = await Promise.all(
          json.results.map((p: any) =>
            fetch(p.url)
              .then(r => {
                if (!r.ok) throw new Error(`HTTP ${r.status} for ${p.name}`);
                return r.json();
              })
              .catch(e => {
                console.error('Failed to fetch detail for', p.name, e);
                return null;
              })
          )
        );
        setPokemons(details.filter(Boolean));
        setLoading(false);
      })
      .catch(e => {
        console.error('Failed to load pokemons list', e);
        setError(String(e));
        setLoading(false);
      });
  }, []);

  return (
    <ScreenContainer>
      <Card mode="elevated">
        <Card.Title title="Feed" left={() => <MaterialCommunityIcons name="rss" size={24} />} />
        <Card.Content>
          {loading ? (
            <Text>Carregando...</Text>
          ) : error ? (
            <Text>Erro: {error}</Text>
          ) : (
            pokemons.map((p, index) => (
              <Card key={index} style={{ marginVertical: 8 }}>
                <Card.Title title={p.name.toUpperCase()} />
                <Card.Content>
                  <View style={{ alignItems: 'center' }}>
                    <Image source={{ uri: p.sprites.front_default }} style={{ width: 64, height: 64 }} />
                  </View>
                </Card.Content>
                <Card.Actions>
                  <Button onPress={() => navigation.navigate('Detalhes', { from: p.name })}>
                    Ver Detalhes
                  </Button>
                </Card.Actions>
              </Card>
            ))
          )}
        </Card.Content>
      </Card>
    </ScreenContainer>
  );
}
