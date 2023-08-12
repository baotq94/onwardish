import { PrismaClient } from '@prisma/client';

// declare global {
//   var prisma: PrismaClient | undefined;
// }
// const prisma = global.prisma || new PrismaClient();

// export default prisma;

export const prisma = new PrismaClient();
