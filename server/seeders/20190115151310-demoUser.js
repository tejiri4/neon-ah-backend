export default {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', [{
    id: '45745c60-7b1a-11e8-9c9c-2d42b21b1a3e',
    fullName: 'Jesse',
    userName: 'jesseinit',
    email: 'jesseinit@now.com',
    bio: 'Gitting Started',
    password: '$2y$10$z7F4f33h3XJvw/ke6ncO3uY1KdFQJb0.pcwhVh5BRgdfyc0Itlz/i',
    authTypeId: '15745c60-7b1a-11e8-9c9c-2d42b21b1a3e'
  }, {
    id: 'aba396bd-7ac4-42c3-b442-cf10dd73e4f4',
    fullName: 'Kabir Alausa',
    userName: 'kabir',
    email: 'kabir@now.com',
    bio: 'Learning life now',
    password: '$2y$10$QCQ1uW0OWH7xKOvJ9gNWsewzoXSjvAmXw21mcZBEB52TN6T/f2Xfy',
    authTypeId: '15745c60-7b1a-11e8-9c9c-2d42b21b1a3e'
  },
  {
    id: '92745c78-7b1a-81e8-9c9c-9d42b21b1a3e',
    fullName: 'Steve',
    userName: 'steve',
    email: 'steve@now.com',
    bio: 'Gitting Started',
    password: '$2y$10$5hj02gtnG2xxYHqpkrqeXOs3kj0t3uTKUMqdKBYGeHOKRNrZdTT9O',
    authTypeId: '15745c60-7b1a-11e8-9c9c-2d42b21b1a3e'
  }
  ], {}),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {})
};
