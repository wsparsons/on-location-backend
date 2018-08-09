const table = 'photos'
exports.seed = knex => {

  return knex(table).insert([
    {
      id: 1,
      scene_id: 1,
      photo: "https://cdn.vox-cdn.com/thumbor/u9gyQvMSbua9hzebSSgo7cwxPWg=/0x600/cdn.vox-cdn.com/uploads/chorus_asset/file/4803969/houseboatshot-1_600.0.jpg"
    },
    {
      id: 2,
      scene_id: 2,
      photo: "https://s.abcnews.com/images/Entertainment/abc_sleepless_03_jc_150903_16x9_1600.jpg"
    },
    {
      id: 3,
      scene_id: 3,
      photo: "https://i1.wp.com/www.iamnotastalker.com/wp-content/uploads/2010/07/AthenianSleeplessInSeattle14.jpg"
    },
    {
      id: 4,
      scene_id: 4,
      photo: "https://foundroundandabout.files.wordpress.com/2012/07/seattle-029-1.jpg"
    },
    {
      id: 5,
      scene_id: 5,
      photo: "http://www.movie-locations.com/movies/r/Ring-Deception-Pass-Bridge.jpg"
    },
    {
      id: 6,
      scene_id: 6,
      photo: "https://static1.squarespace.com/static/51d4837fe4b0ed5a1e73e54c/t/53422652e4b0600fcd372fbe/1396844146599/"
    },
    {
      id: 7,
      scene_id: 7,
      photo: "http://www.movie-locations.com/movies/r/Ring-Yaquina-Head-Lighthouse.jpg"
    },
    {
      id: 8,
      scene_id: 8,
      photo: "https://i.pinimg.com/originals/84/d5/fc/84d5fc1825526fb24634f2913251b58e.jpg"
    },
    {
      id: 9,
      scene_id: 9,
      photo: "https://imgix.bustle.com/lovelace/uploads/843/e9ab68b0-172b-0133-50b6-0ec273752cbd.jpg?w=646&fit=max&auto=format&q=70"
    },
    {
      id: 10,
      scene_id: 10,
      photo: "http://upload.wikimedia.org/wikipedia/commons/9/9f/Seattle_skyline_from_Lake_Union.jpg"
    },
    {
      id: 11,
      scene_id: 11,
      photo: "https://imgix.bustle.com/lovelace/uploads/843/e9bf96e0-172b-0133-50b8-0ec273752cbd.JPG?w=646&fit=max&auto=format&q=70"
    },
    {
      id: 12,
      scene_id: 12,
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Tacoma_-_Stadium_High_School_03A.jpg/1200px-Tacoma_-_Stadium_High_School_03A.jpg"
    },
    {
      id: 13,
      scene_id: 13,
      photo: "http://www.specialneedstravelmom.com/wp-content/uploads/2012/06/forks-high-school.jpg"
    },
    {
      id: 14,
      scene_id: 14,
      photo: "http://www.specialneedstravelmom.com/wp-content/uploads/2012/06/carver-cafe-front.jpg"
    },
    {
      id: 15,
      scene_id: 15,
      photo: "http://www.specialneedstravelmom.com/wp-content/uploads/2012/06/cullens2.jpg"
    },
    {
      id: 16,
      scene_id: 16,
      photo: "http://www.specialneedstravelmom.com/wp-content/uploads/2012/06/la-push.jpg"
    },
    {
      id: 17,
      scene_id: 17,
      photo: "https://i2.wp.com/globalfilmlocations.net/wp-content/uploads/2016/07/disclosureofficesv.png?resize=780%2C567&ssl=1"
    },
    {
      id: 18,
      scene_id: 18,
      photo: "https://static1.squarespace.com/static/5542dc97e4b03d711b29857e/567a3f6ba128e661e5c82455/567a3f6bbfe8734dc4899124/1457150954710/akp_alissakevin-59.jpg?format=1500w"
    },
    {
      id: 19,
      scene_id: 19,
      photo: "https://cdn.vox-cdn.com/uploads/chorus_image/image/47945571/fiftyshades3.0.jpg"
    },
    {
      id: 20,
      scene_id: 20,
      photo: "https://cdn.vox-cdn.com/uploads/chorus_image/image/47945573/Pike_20Place_20Market.0.png"
    },
    {
      id: 21,
      scene_id: 21,
      photo: "https://media-cdn.tripadvisor.com/media/photo-s/0a/8e/de/64/sakya-monastery-of-tibetan.jpg"
    },
    {
      id: 22,
      scene_id: 22,
      photo: "http://larryspeck.com/wp-content/uploads/2009/11/Seattle-Art-Museum_110.jpg"
    },
    {
      id: 23,
      scene_id: 23,
      photo: 'https://3.bp.blogspot.com/-EibaJ0-CuTg/T40fIQ9fqnI/AAAAAAAAEoY/e3nPsuia_rU/s1600/godzilla+98.jpg'
    },
    {
      id: 24,
      scene_id: 24,
      photo: 'https://sociorocketnewsen.files.wordpress.com/2015/03/gs-1.jpg?w=580&h=546'
    }
  ]).then(() => {
    return knex.raw(`SELECT setval('${table}_id_seq', (SELECT MAX(id) FROM ${table}));`)
  })
}
