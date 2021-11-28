import { Field, ObjectType, InputType } from 'type-graphql'

@ObjectType()
export class Member {
  @Field()
  id!: number

  @Field()
  name!: string

  @Field()
  email!: string

  @Field()
  bio!: string
}

@InputType()
export class MemberInput implements Partial<Member> {
  @Field()
  name!: string

  @Field()
  email!: string

  @Field()
  bio!: string
}

// type Member {
//     id: ID!
//     name: String!
//     email: String!
//     bio: String!
//   }