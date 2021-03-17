import { PrismaClient as PrismaOneClient } from '@example/db-one';
import { PrismaClient as PrismaTwoClient } from '@example/db-two';

const prismaOne = new PrismaOneClient({
  datasources: {
    db: {
      url: 'file:../../db-one/prisma/db-one.db'
    }
  }
});
const prismaTwo = new PrismaTwoClient({
  datasources: {
    db: {
      url: 'file:../../db-two/prisma/db-two.db'
    }
  }
});

export const configureContext = () => ({
  prismaOne,
  prismaTwo
});

export type Context = ReturnType<typeof configureContext>;
