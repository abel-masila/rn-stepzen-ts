import { TailwindProvider } from "tailwind-rn";
import { NavigationContainer } from "@react-navigation/native";

import utilities from "./tailwind.json";
import RootNavigator from "./navigator/RootNavigator";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const link = createHttpLink({
  uri: "https://parksville.stepzen.net/api/winsome-skunk/__graphql",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization:
        "Apikey parksville::stepzen.net+1000::0e2718278be338347e5d63c737b1e6294fae195bc9d624b133657bb6d6475d73",
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(link),
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    // @ts-ignore
    <TailwindProvider utilities={utilities}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ApolloProvider>
    </TailwindProvider>
  );
}
