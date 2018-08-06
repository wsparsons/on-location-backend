
exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        {id: 1, lat: '-71.907955', long: ' -0.134133', address: 'South Pole, Antarctica'},
        {id: 2, lat: '48.873834', long: '2.295038', address: 'Arch de Triomphe, Paris, France'},
        {id: 3, lat: '35.6945174', long: '139.7018175', address: 'Godzilla Head, 1 Chome-18 Kabukicho, Shinjuku, Tokyo, Japan'}      
      ]);
    });
};
