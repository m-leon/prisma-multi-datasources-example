import faker from "faker";

import { PrismaClient as PrismaOneClient } from "@example/db-one";
import { PrismaClient as PrismaTwoClient } from "@example/db-two";

process.env.DB_ONE_URL = "file:../../db-one/prisma/db-one.db";
process.env.DB_TWO_URL = "file:../../db-two/prisma/db-two.db";
const prismaOne = new PrismaOneClient();
const prismaTwo = new PrismaTwoClient();

const createUser = async (name: string, bio: string) => {
  const user = await prismaOne.user.create({
    data: {
      name,
    },
  });

  const profile = await prismaTwo.profile.create({
    data: {
      userId: user.id,
      bio,
    },
  });

  return {
    user,
    profile,
  };
};

(async () => {
  for (let i = 0; i <= 5; i++) {
    const name = faker.name.findName();
    const bio = faker.lorem.sentence();
    const result = await createUser(name, bio);

    console.log(result);
  }
})();
