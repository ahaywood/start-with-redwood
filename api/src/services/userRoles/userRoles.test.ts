import type { UserRole } from '@prisma/client'

import {
  userRoles,
  userRole,
  createUserRole,
  updateUserRole,
  deleteUserRole,
} from './userRoles'
import type { StandardScenario } from './userRoles.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('userRoles', () => {
  scenario('returns all userRoles', async (scenario: StandardScenario) => {
    const result = await userRoles()

    expect(result.length).toEqual(Object.keys(scenario.userRole).length)
  })

  scenario('returns a single userRole', async (scenario: StandardScenario) => {
    const result = await userRole({ id: scenario.userRole.one.id })

    expect(result).toEqual(scenario.userRole.one)
  })

  scenario('creates a userRole', async () => {
    const result = await createUserRole({
      input: { updatedAt: '2024-06-19T23:21:09.977Z', name: 'String' },
    })

    expect(result.updatedAt).toEqual(new Date('2024-06-19T23:21:09.977Z'))
    expect(result.name).toEqual('String')
  })

  scenario('updates a userRole', async (scenario: StandardScenario) => {
    const original = (await userRole({
      id: scenario.userRole.one.id,
    })) as UserRole
    const result = await updateUserRole({
      id: original.id,
      input: { updatedAt: '2024-06-20T23:21:09.977Z' },
    })

    expect(result.updatedAt).toEqual(new Date('2024-06-20T23:21:09.977Z'))
  })

  scenario('deletes a userRole', async (scenario: StandardScenario) => {
    const original = (await deleteUserRole({
      id: scenario.userRole.one.id,
    })) as UserRole
    const result = await userRole({ id: original.id })

    expect(result).toEqual(null)
  })
})
