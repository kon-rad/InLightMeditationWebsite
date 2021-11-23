import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient();
} else {
    if (!global.prisma) {
        global.prisma = new PrismaClient();
    }
    prisma = global.prisma;
}

// todo: finish tutorial from here: https://vercel.com/guides/nextjs-prisma-postgres#step-4.-update-the-existing-views-to-load-data-from-the-database



