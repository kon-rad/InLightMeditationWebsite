import { objectType, extendType } from 'nexus';

export const Session = objectType({
    name: 'Session',
    definition(t) {
        t.string('id')
        t.string('title')
        t.string('type')
        t.string('note')
        t.string('datetime')
    }
})

// export const UserQuery = extendType({
//     type: 'Query',
//     definition(t) {
//         t.nonNull.session.field('sessions', {
//         type: 'Session',
//         resolve(_parent, _args, ctx) {
//             return ctx.prisma.session.findMany()
//         },
//         })
//     },
// })