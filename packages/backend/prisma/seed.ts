// prisma/seed.ts

import { PrismaClient } from '@prisma/client'
import { data } from '../src/data/users'
const prisma = new PrismaClient()

async function main() {
  await prisma.user.createMany({
    data: data,
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