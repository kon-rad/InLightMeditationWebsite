import { objectType } from 'nexus';

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
