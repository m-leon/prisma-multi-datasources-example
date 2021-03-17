import { makeSchema, objectType, queryType } from 'nexus';
import * as path from 'path';

export const schema = makeSchema({
  sourceTypes: {
    modules: [
      {
        alias: 'prismaOne',
        module: '@example/db-one'
      },
      {
        alias: 'prismaTwo',
        module: '@example/db-two'
      }
    ]
  },
  contextType: {
    module: path.join(__dirname, 'context.ts'),
    export: 'Context'
  },
  outputs: {
    typegen: path.join(__dirname, '..', 'node_modules/@types/nexus-typegen/index.d.ts'),
    schema: path.join(__dirname, '..', 'generated/api.graphql')
  },
  types: [
    objectType({
      name: 'User',
      definition(t) {
        t.nonNull.int('id');
        t.nonNull.string('name');
        t.nonNull.list.field('profiles', {
          type: 'Profile',
          resolve(root, _args, ctx) {
            return ctx.prismaTwo.profile.findMany({
              where: {
                userId: root.id
              }
            });
          }
        });
      }
    }),
    objectType({
      name: 'Profile',
      definition(t) {
        t.nonNull.int('id');
        t.nonNull.string('bio');
        t.int('userId');
      }
    }),
    queryType({
      definition(t) {
        t.list.field('users', {
          type: 'User',
          resolve(_root, _args, ctx) {
            return ctx.prismaOne.user.findMany();
          }
        });
      }
    })
  ]
});
