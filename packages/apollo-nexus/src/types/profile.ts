import { extendType, objectType } from 'nexus';

export const Profile = objectType({
  name: 'Profile',
  definition(t) {
    t.nonNull.int('id');
    t.nonNull.string('bio');
  }
});

export const UserToProfile = extendType({
  type: 'User',
  definition(t) {
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
});
