
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('favorites').del()
    .then(function () {
      // Inserts seed entries
      return knex('favorites').insert([
        {
          id: 100,
          title: 'Borla Catback Exhaust',
          price: 700,
          url: 'http://www.carid.com/images/borla/exhaust-systems/borla-transverse-flow-oval-muffler.jpg',
          image: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.carid.com%2Fimages%2Fborla%2Fexhaust-systems%2Fborla-transverse-flow-oval-muffler.jpg&f=1',
          userid: 1,
        }
      ]);
    });
};
