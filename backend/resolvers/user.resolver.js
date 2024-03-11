import {users} from '../dummyData/data.js'

const userResolver = {
  Query: {
    users: () => {
      return users
    },
    user: (_, {userId}) => {
      return Users.find((user) => user._id === userId)
    }

  },
  Mutation: {},
}


export default userResolver
