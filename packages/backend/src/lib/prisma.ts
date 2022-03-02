import { PrismaClient } from '@prisma/client'

// attach PrismaClient to Global object to prevent
// exhausting database connection limit

let prisma: PrismaClient

if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient()
} else {
    if (!global.prisma) {
        global.prisma = new PrismaClient()
    }
    prisma = global.prisma
}
export default prisma
