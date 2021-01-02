import { User } from '@models/User'

test('it should be ok', () => {
  const user = new User()

  user.name = 'ALEXANDER ROJAS'

  expect(user.name).toEqual('ALEXANDER ROJAS');
})
