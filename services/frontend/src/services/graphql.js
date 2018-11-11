import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'

const client = new ApolloClient({
  uri: `http://localhost:3030/graphql`
})

export const getFeed = () =>
  client
    .query({
      query: gql`
        query AllAssets {
          allAssets(condition: { ownerId: null }) {
            nodes {
              __typename
              id
              displayName
              subtitle
              imageUrl
              ownerId
            }
          }
        }
      `
    })
    .catch(error => console.error(error))

export const getCollection = () =>
  client
    .query({
      query: gql`
        query AllAssets {
          allAssets(condition: { ownerId: 1 }) {
            nodes {
              __typename
              id
              displayName
              subtitle
              imageUrl
              ownerId
              offersByRequestedAssetId {
                nodes {
                  offeredBy: userByOfferedById {
                    displayName
                  }
                  offeredAsset: assetByOfferedAssetId {
                    id
                    displayName
                  }
                  offeredDollarAmount
                }
              }
            }
          }
        }
      `
    })
    .catch(error => console.error(error))

export default client
