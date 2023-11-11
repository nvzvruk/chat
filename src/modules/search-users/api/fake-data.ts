import { faker } from '@faker-js/faker'

const createUser = () => {
  const firstName = faker.person.firstName()
  const lastName = faker.person.lastName()
  const fullName = `${firstName} ${lastName}`

  return {
    id: faker.database.mongodbObjectId(),
    firstName,
    lastName,
    fullName,
  }
}
export const fakeUsers = faker.helpers.multiple(createUser, { count: 200 })
