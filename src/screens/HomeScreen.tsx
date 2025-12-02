import React from 'react';
import { Card, Text, Button, Icon } from 'react-native-paper';
import ScreenContainer from '../utils/ScreenContainer';

export default function HomeScreen({ navigation }: any) {
  const [pokemons, setPokemons] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then(res => res.json())
      .then(json => {
        setPokemons(json.results);
        setLoading(false);
      });
  }, []);

  return (
    <ScreenContainer>
      <Card mode="elevated">
        <Card.Title title="Pokémons" left={(props) => <Icon source="pokeball" size={24} {...props} />} />
        <Card.Content>
          {loading ? (
            <Text>Carregando...</Text>
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
