export const schema = gql`
  type UserRole {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    name: String!
    users: User
    userId: Int
  }

  type Query {
    userRoles: [UserRole!]! @skipAuth
    userRole(id: Int!): UserRole @skipAuth
  }

  input CreateUserRoleInput {
    name: String!
    userId: Int
  }

  input UpdateUserRoleInput {
    name: String
    userId: Int
  }

  type Mutation {
    createUserRole(input: CreateUserRoleInput!): UserRole! @skipAuth
    updateUserRole(id: Int!, input: UpdateUserRoleInput!): UserRole! @skipAuth
    deleteUserRole(id: Int!): UserRole! @skipAuth
  }
`
