import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4nw9cky0wlf01xmadqxg7ri/master',
    cache: new InMemoryCache()
})