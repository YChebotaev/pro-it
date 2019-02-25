import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";

export const createApolloClient = () => {
  const httpLink = createHttpLink({
    uri: "https://api-euwest.graphcms.com/v1/cjsk8f79u959901ck1ewy69ai/master"
  });

  const authLink = setContext((_, { headers }) => {
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXJzaW9uIjoxLCJ0b2tlbklkIjoiY2Q4OTgyMjctYzBkZS00NTg5LTkxZTktM2ViOTM4OWRkNDMyIn0.jkd4wj8PdKTpbt19JMKS5NyxDVk1s20RsAIE23t7DOA";
    return {
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : ""
      }
    };
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });
};
