// prisma/seed.ts

import { PrismaClient } from '@prisma/client'
import { data } from '../src/data/members'
const prisma = new PrismaClient()

async function main() {
  await prisma.member.createMany({
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