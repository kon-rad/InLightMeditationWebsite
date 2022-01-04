// prisma/seed.ts

import { PrismaClient } from '@prisma/client'
import { users, sessions } from '../src/data/seed'
const prisma = new PrismaClient()

async function main() {

  await prisma.user.createMany({
    data: users,
  })
  
  await prisma.session.createMany({
    data: sessions,
  })
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })