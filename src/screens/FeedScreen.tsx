import React from 'react';
import { View } from 'react-native';
import { Card, Text, Button, Icon } from 'react-native-paper';
import ScreenContainer from '../utils/ScreenContainer';

export default function FeedScreen({ navigation }: any) {
  const [pokemons, setPokemons] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=5&offset=10')
      .then(res => res.json())
      .then(async json => {
        const details = await Promise.all(
          json.results.map((p: any) => fetch(p.url).then(r => r.json()))
        );
        setPokemons(details);
        setLoading(false);
      });
  }, []);

  return (
    <ScreenContainer>
      <Card mode="elevated">
       <Card.Title title="Feed" left={() => <Icon source="rss" size={24} />} />
        <Card.Content>
          {loading ? (
            <Text>Carregando...</Text>
          ) : (
            pokemons.map((p, index) => (
              <Card key={index} style={{ marginVertical: 8 }}>
                <Card.Title title={p.name.toUpperCase()} />
                <Card.Content>
                  <View style={{ alignItems: 'center' }}>
                    <Icon source={{ uri: p.sprites.front_default }} size={64} />
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
