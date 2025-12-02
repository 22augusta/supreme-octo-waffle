# supreme-octo-waffle

📱 Desafio Pokémon App
Aplicativo React Native desenvolvido com TypeScript, utilizando:

React Native Paper para UI
React Navigation com Drawer, Tabs e Stack
Consumo da PokéAPI para exibir lista de Pokémon, imagens e detalhes


✅ Funcionalidades

Drawer Navigation: Menu lateral com opções "Principal" e "Sobre"
Tabs Navigation: Alterna entre Home (lista de Pokémon) e Feed (Pokémon com imagens)
Stack Navigation: Navegação para tela de detalhes do Pokémon
React Native Paper: Componentes estilizados (Cards, Buttons, Appbar, Icons)
PokéAPI: Consumo de dados reais (nome, imagem, altura, peso, tipos)


📂 Estrutura do Projeto
DesafioPokemonApp/
├── App.tsx
├── src/
│   ├── components/
│   │   └── Header.tsx
│   ├── screens/
│   │   ├── HomeScreen.tsx
│   │   ├── FeedScreen.tsx
│   │   ├── DetalhesScreen.tsx
│   │   ├── SobreScreen.tsx
│   └── utils/
│       └── ScreenContainer.tsx
└── README.md


🚀 Como Executar
1. Clone o repositório
Shellgit clone https://github.com/seuusuario/DesafioPokemonApp.gitMostrar mais linhas
2. Instale as dependências
Shellnpm installMostrar mais linhas
Dependências principais:
Shellnpm install react-native-paper react-native-vector-iconsnpm install @react-navigation/native @react-navigation/drawer @react-navigation/bottom-tabs @react-navigation/native-stacknpm install react-native-gesture-handler react-native-screens react-native-safe-area-contextMostrar mais linhas
3. Execute o projeto
Para Android:
ShellMostrar mais linhas
Para iOS:
ShellMostrar mais linhas

🖼️ Telas do App

Drawer: Menu lateral com "Principal" e "Sobre"
Tabs: Home (lista de Pokémon) e Feed (Pokémon com imagens)
Detalhes: Mostra imagem, altura, peso e tipos do Pokémon


🔗 API Utilizada
PokéAPI

🛠️ Tecnologias

React Native
TypeScript
React Native Paper
React Navigation
PokéAPI


✨ Melhorias Futuras

Tema customizado com cores Pokémon
Ícones personalizados
Cache local para reduzir requisições
Animações com React Native Reanimated