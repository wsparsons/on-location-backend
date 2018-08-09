const table = 'locations'
exports.seed = knex => {
// Deletes ALL existing entries
return knex(table).insert([
  {
    id: 1,
    lat: "47.641121",
    long: "-122.341951",
    address: "2450 Westlake Ave N, Seattle, WA 98109"
  },
  {
    id: 2,
    lat: "47.610577",
    long: "-122.341211",
    address: "86 Pine St, Seattle, WA 98101"
  },
  {
    id: 3,
    lat: "47.608941",
    long: "-122.341024",
    address: "1517 Pike Pl, Seattle, WA 98101"
  },
  {
    id: 4,
    lat: "47.608802",
    long: "-122.340661",
    address: "Pike Place Market, Seattle, WA 98101"
  },
  {
    id: 5,
    lat: "48.406400",
    long: "-122.644553",
    address: "North Whidbey, Oak Harbor, WA 98277"
  },
  {
    id: 6,
    lat: "47.975141",
    long: "-122.349819",
    address: "64 S Ferry Dock Rd, Clinton, WA 98236"
  },
  {
    id: 7,
    lat: "44.676942",
    long: "-124.079343",
    address: "750 NW Lighthouse Dr, Newport, OR 97365"
  },
  {
    id: 8,
    lat: "47.606511",
    long: "-122.338213",
    address: "1221 1st Ave, Seattle, WA 98101"
  },
  {
    id: 9,
    lat: "47.650988",
    long: "-122.347260",
    address: "Troll Ave N, Seattle, WA 98103"
  },
  {
    id: 10,
    lat: "47.639938",
    long: "-122.334093",
    address: "Lake Union, Seattle, WA 98103"
  },
  {
    id: 11,
    lat: "47.613279",
    long: "-122.331299",
    address: "911 Pine St, Seattle, WA 98101"
  },
  {
    id: 12,
    lat: "47.266074",
    long: "-122.448535",
    address: "111 N E St, Tacoma, WA 98403"
  },
  {
    id: 13,
    lat: "46.008449",
    long: "-122.839258",
    address: "548 China Garden Rd, Kalama, WA 98625"
  },
  {
    id: 14,
    lat: "45.394379",
    long: "-122.494065",
    address: "16471 OR-224, Damascus, OR 97089"
  },
  {
    id: 15,
    lat: "45.533508",
    long: "-122.715920",
    address: "3333 NW Quimby St, Portland, OR 97210"
  },
  {
    id: 16,
    lat: "45.930956",
    long: "-123.978491",
    address: "Indian Beach, Ecola Park Rd, Seaside, OR 97138"
  },
  {
    id: 17,
    lat: "47.601485",
    long: "-122.332572",
    address: "102 Occidental Avenue Southwest, Seattle, Washington"
  },
  {
    id: 18,
    lat: "47.632172",
    long: "-122.315500",
    address: "1400 E Galer St, Seattle, WA 98112"
  },
  {
    id: 19,
    lat: "47.613103",
    long: "-122.339392",
    address: "1920 4th Ave, Seattle, WA 98101"
  },
  {
    id: 20,
    lat: "47.689412",
    long: "-122.358227",
    address: "3042, 108 NW 83rd St, Seattle, WA 98117"
  },
  {
    id: 21,
    lat: "47.607352",
    long: "-122.338101",
    address: "1300 1st Ave, Seattle, WA 98101"
  },
  {
    id: 22,
    lat: '40.701870',
    long: '-74.018584',
    address: 'Battery Park, New York, NY'
  },
  {
    id: 23,
    lat: '35.6945174',
    long: '139.7018175',
    address: 'Godzilla Head, 1 Chome-18 Kabukicho, Shinjuku, Tokyo, Japan'
  }
]).then(() => {
  return knex.raw(`SELECT setval('${table}_id_seq', (SELECT MAX(id) FROM ${table}));`)
})
}
