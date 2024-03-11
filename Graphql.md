  # NOTE TOPIC

- Card Design at Card.tsx
- Heading gradient color
- Transaction form formData.get method.





### How to create a typeDef

- Create a js file 

- Write const ...TypeDef = `

`
- In the place of ... write the name of type. e.g. userTypeDef, transactionTypeDef, messageTypeDef etc.

- Inside the `

` the definition will be written.

- The definition will be like typescript types. It will define the type of each item and whether it is required or not.

- Check the following definition
```javascript
type User {
  _id: ID!
  username: String!
  password: String!
  profilePicture: String
  gender: String!
}
```

- Here the name of the definition is User. It has five properties _id, username, password, profilePicture, gender. Type fo first one is ID and rest are string. ! means it is a required field.

- Let's see another

```javascript
type Query {
  users: [User!]
  authUser: User
  user(userID: ID!): User
}
```
- In the first field user the earlier defined User type is assigned and it is required and it will return and array of User.
- authUser will also have have User type but one not and array.
- user will take ID as input and will return User that match with the ID.

- Now we will check Mutation. 

```javascript
type Mutation {
  signUp(input: SignUpInput!): User
  login(input: LoginInput!): User
  logout: LogoutResponse
}
```

- Here there are three types of mutation. signUp, login, logout. Post, Put, Patch and Delete fall under mutation. So they receive data from frontend. It is called input.

- signUp function will take SignUpInput which will be explained later. And it is required and it will return User.

- login function will take LoginInput which will be explained later. And it is required and it will return User.

- logout will not take any input but will send a response and its type will be defined later.

- Let's check the SignUp and Login Input and LogoutResponse

```javascript
input SignUpInput {
  username: String!
  name: String!
  password: String!
  gender: String!
}

input LoginInput {
  username: String!
  password: String!
}

type LogoutResponse {
  message: String!
}
```

- SignUpInput will take four items from frontend all are string and all are required.

- LoginInput will take two items from frontend all are string and all are required.

- LogoutResponse will send a message to the frontend and its type is string and it is required. 

