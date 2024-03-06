import { Outlet } from "react-router-dom";
import NavBar from "./components/Nav/NavBar/NavBar";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// Create URL for GraphQL server.
const httpLink = createHttpLink({
  uri: "/graphql"
});

// Create auth link using setContext.
const authLink = setContext((_, { headers }) => {
  // Retrieve auth token from localStorage.
  const token = localStorage.getItem("id_token");
  // Set authorization header.
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ""
    }
  };
});

// Create new instance of ApollpClient.
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <NavBar />
        <Outlet />
      </div>
    </ApolloProvider>
  );
}

export default App;
