import { objectType, extendType } from 'nexus';

export const User = objectType({
    name: 'User',
    definition(t) {
        t.string('id')
        t.string('name')
        t.string('email')
        t.string('image')
        t.string('password')
    }
})

export const LinksQuery = extendType({
    type: 'Query',
    definition(t) {
      t.nonNull.list.field('users', {
        type: 'User',
        resolve(_parent, _args, ctx) {
          return ctx.prisma.user.findMany()
        },
      })
    },
  })