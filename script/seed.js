'use strict';

const {
  db,
  models: { User, Community, User_Community, Image },
} = require('../server/db');

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log('db synced!');

  // Creating Users
  const users = await Promise.all([
    User.create({
      username: 'cody',
      password: '123',
      firstName: 'Cody',
      lastName: 'Code',
      age: 27,
      location: 'New York, NY',
      bio: 'Hey man, my name is Cody.',
    }),
    User.create({
      username: 'murphy',
      password: '123',
      firstName: 'Murphy',
      lastName: 'McMurphy',
      age: 98,
      location: 'Dublin, Ireland',
      bio: "I'm looking for a guy named Cody. Is he here?",
    }),
  ]);

  // Creating Communities
  const communities = await Promise.all([
    Community.create({
      name: 'West Broadway Neighborhood Association',
      bio: 'West Broadway Neighborhood Association organizes neighbors and businesses on the West Side of Providence to preserve and promote our diverse, historic, urban community as a safe, vibrant, and sustainable place to be SWELL (Shop, Work, Eat, Live, and Learn locally).',
      address: '1560 Westminster St',
      city: 'Providence',
      state: 'RI',
      zipCode: '02909',
      imageUrl:
        'https://images.squarespace-cdn.com/content/v1/547486a6e4b081cfb2fbb049/1653424790873-H5ZT92BX336T2MRPK0JH/277988277_7237088149698005_7506566997549425627_n.jpg?format=1500w',
      adminId: users[0].id,
    }),
    Community.create({
      name: 'The Addams Family',
      bio: 'The Simpsons are a nuclear family consisting of married couple Homer and Marge and their three children, Bart, Lisa, and Maggie',
      address: '21 Chester Place',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90007',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Addams_Family_main_cast_1964.JPG/640px-Addams_Family_main_cast_1964.JPG',
      adminId: users[1].id,
    }),
    Community.create({
      name: 'University of Texas, Class of 2021',
      bio: 'Alumni from class of 2021',
      address: '110 Inner Campus Drive',
      city: 'Austin',
      state: 'TX',
      zipCode: '78705',
      imageUrl:
        'https://news.utexas.edu/wp-content/uploads/2021/05/Senior_Stories_2021_Header_1500x543_SB-600x0-c-default.gif',
      adminId: users[1].id,
    }),
  ]);

  const users_communities = await Promise.all([
    User_Community.create({
      userId: users[0].id,
      communityId: communities[0].id,
    }),
    User_Community.create({
      userId: users[1].id,
      communityId: communities[0].id,
    }),
    User_Community.create({
      userId: users[0].id,
      communityId: communities[1].id,
    }),
    User_Community.create({
      userId: users[1].id,
      communityId: communities[1].id,
    }),
    User_Community.create({
      userId: users[1].id,
      communityId: communities[2].id,
    }),
  ]);

  const images = await Promise.all([
    Image.create({
      title: 'Uncle & Aunt',
      description: 'description of image 1',
      fileName: 'bostonFamily.jpeg',
      likes: 0,
    }),
    Image.create({
      title: 'Charity Race',
      description: 'description of image 2',
      fileName: 'charityRace.jpg',
      likes: 0,
    }),
    Image.create({
      title: 'Grandpa',
      description: 'description of image 3',
      fileName: 'grandpa.jpeg',
      likes: 0,
    }),
  ]);

  console.log(`seeded ${users.length} users`);
  console.log(`seeded successfully`);

  console.log(`seeded ${communities.length} communities`);
  console.log(`seeded successfully`);

  console.log('db synced!');

  console.log(`seeded ${users.length} users`);
  console.log(`seeded successfully`);
  return {
    users: {
      cody: users[0],
      murphy: users[1],
    },
    communities: {
      comm1: communities[0],
      comm2: communities[1],
      comm3: communities[2],
    },
    images: {
      image1: images[0],
      image2: images[1],
      image3: images[3],
    },
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
