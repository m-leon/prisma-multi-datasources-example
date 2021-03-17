import { extendType, objectType } from 'nexus';

export const User = objectType({
  name: 'User',
  definition(t) {
    t.nonNull.int('id');
    t.nonNull.string('name');
  }
});

export const ProfileToUser = extendType({
  type: 'Profile',
  definition(t) {
    t.nullable.field('user', {
      type: 'User',
      resolve(root, _args, ctx) {
        if (root.userId === null) {
          return null;
        }

        return ctx.prismaOne.user.findUnique({
          where: {
            id: root.userId
          }
        });
      }
    });
  }
});

export const Query = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('users', {
      type: 'User',
      resolve(_root, _args, ctx) {
        return ctx.prismaOne.user.findMany();
      }
    });
  }
});
