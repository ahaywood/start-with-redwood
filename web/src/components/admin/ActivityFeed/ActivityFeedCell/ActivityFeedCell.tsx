import type {
  FindActivityFeedQuery,
  FindActivityFeedQueryVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

export const QUERY: TypedDocumentNode<
  FindActivityFeedQuery,
  FindActivityFeedQueryVariables
> = gql`
  query FindActivityFeedQuery($id: Int!) {
    activityFeed: activityFeed(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindActivityFeedQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  activityFeed,
}: CellSuccessProps<FindActivityFeedQuery, FindActivityFeedQueryVariables>) => {
  return <div>{JSON.stringify(activityFeed)}</div>
}
