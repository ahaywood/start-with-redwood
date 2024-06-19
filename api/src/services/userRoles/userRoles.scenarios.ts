import type { Prisma, UserRole } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserRoleCreateArgs>({
  userRole: {
    one: { data: { updatedAt: '2024-06-19T23:21:09.989Z', name: 'String' } },
    two: { data: { updatedAt: '2024-06-19T23:21:09.989Z', name: 'String' } },
  },
})

export type StandardScenario = ScenarioData<UserRole, 'userRole'>
