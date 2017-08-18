
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          uid: 1,
          username: 'rowValue1',
          password: 'test',
          name: 'Nick McKendry',
          email: 'nickmckendry@gmail.com',
          vehicle: '2001 Subaru Forester'
        }
      ]);
    });
};
