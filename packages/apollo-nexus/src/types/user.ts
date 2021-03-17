import { extendType, objectType } from 'nexus';

export const User = objectType({
  name: 'User',
  definition(t) {
    t.nonNull.int('id');
    t.nonNull.string('name');
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
