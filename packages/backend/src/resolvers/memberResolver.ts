import { Query, Resolver, Mutation, Arg } from 'type-graphql'
import { Member, MemberInput } from '../schemas/Members'

@Resolver((of) => Member)
export class MemberResolver {
  private members: Member[] = []

  @Query((returns) => [Member], { nullable: true })
  async getMembers(): Promise<Member[]> {
    return await this.members
  }

  @Mutation((returns) => Member)
  async addMember(
    @Arg('memberInput') { name, email, bio }: MemberInput
  ): Promise<Member> {
    const member = {
      id: Math.random(), // not really unique
      name,
      email,
      bio,
    }

    await this.members.push(member)
    return member
  }
}