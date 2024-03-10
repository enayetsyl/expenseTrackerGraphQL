import { mergeTypeDefs } from "@graphql-tools/merge" 


import userTypeDef from './user.typeDefs.js'
import transactionTypeDef from './transaction.typeDefs.js'

const mergedTypeDef = mergeTypeDefs([userTypeDef, transactionTypeDef])

export default mergedTypeDef