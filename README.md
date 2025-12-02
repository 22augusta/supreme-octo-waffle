# supreme-octo-waffle

Aplicativo móvel exemplo em React Native (TypeScript) que consome a PokéAPI e demonstra um fluxo de navegação com Drawer, Tabs e Stack, além de componentes do React Native Paper.

**Visão geral**

- **Objetivo:** mostrar lista de Pokémon, exibir imagens e tela de detalhes (altura, peso, tipos).
- **Navegação:** Drawer principal (Principal, Sobre) → tela principal com Tabs (Home, Feed) → detalhe via Stack.

**Tecnologias**

- React Native
- TypeScript
- React Navigation (Drawer, Bottom Tabs, Native Stack)
- React Native Paper
- PokéAPI

**Estrutura do projeto (resumida)**

```
App.tsx
src/
├─ components/
│  └─ Header.tsx
├─ screens/
│  ├─ HomeScreen.tsx
│  ├─ FeedScreen.tsx
│  ├─ DetalhesScreen.tsx
│  └─ SobreScreen.tsx
└─ utils/
	└─ ScreenContainer.tsx
```

**Pré-requisitos**

- Node.js (versão atual LTS)
- Java JDK + Android SDK (para Android)
- Xcode (para iOS, macOS)
- React Native CLI ou ambiente compatível (dependendo do fluxo de execução)

Se estiver usando Expo, ajuste os comandos conforme necessário.

**Instalação**

```bash
# clonar
git clone <URL-do-repositório>
cd supreme-octo-waffle

# instalar dependências
npm install
# ou
yarn install
```

**Executando o app**

```bash
# Android (React Native CLI)
npx react-native run-android

# iOS (React Native CLI, macOS)
npx react-native run-ios

# Caso use Expo
expo start
```

Observação: o repositório contém dependências como `react-native-paper`, `react-native-vector-icons` e os pacotes do `@react-navigation` listados no `package.json`. Instale links nativos conforme a sua configuração (p.ex. `npx pod-install` para iOS após instalar dependências).

**Scripts úteis (exemplos)**

- `npm install` — instala dependências
- `npx react-native run-android` — roda no emulador/ dispositivo Android
- `npx react-native run-ios` — roda no simulador iOS (macOS)

**Navegação**

- `Drawer` — menu lateral com as rotas `Principal` e `Sobre`.
- `Tabs` — na rota `Principal`, duas tabs: `Home` (lista) e `Feed` (imagens).
- `Stack` — empilha telas, usado para abrir `Detalhes` a partir de listas.

**Contribuição**

- Sinta-se à vontade para abrir issues ou pull requests.
- Para mudanças de UI/UX, envie uma descrição da proposta e screenshots.

**Contato**

- Mantenha o `README.md` atualizado com informações de deploy/CI se houver integração contínua.

**Licença**

- Este repositório não contém uma licença explícita. Adicione um arquivo `LICENSE` se desejar publicar com termos específicos.

---

Se quiser, eu posso:

- adicionar badges (build, license),
- inserir instruções específicas para Expo ou React Native CLI, ou
- gerar um `CONTRIBUTING.md` básico.