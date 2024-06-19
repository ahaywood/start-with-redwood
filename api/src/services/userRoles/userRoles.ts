import type {
  QueryResolvers,
  MutationResolvers,
  UserRoleRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const userRoles: QueryResolvers['userRoles'] = () => {
  return db.userRole.findMany()
}

export const userRole: QueryResolvers['userRole'] = ({ id }) => {
  return db.userRole.findUnique({
    where: { id },
  })
}

export const createUserRole: MutationResolvers['createUserRole'] = ({
  input,
}) => {
  return db.userRole.create({
    data: input,
  })
}

export const updateUserRole: MutationResolvers['updateUserRole'] = ({
  id,
  input,
}) => {
  return db.userRole.update({
    data: input,
    where: { id },
  })
}

export const deleteUserRole: MutationResolvers['deleteUserRole'] = ({ id }) => {
  return db.userRole.delete({
    where: { id },
  })
}

export const UserRole: UserRoleRelationResolvers = {
  users: (_obj, { root }) => {
    return db.userRole.findUnique({ where: { id: root?.id } }).users()
  },
}
