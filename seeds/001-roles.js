
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('roles')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('roles').insert([
        {name: 'PM'},
        {name: 'TA'},
        {name: 'Admin'}
      ]);
    });
};
