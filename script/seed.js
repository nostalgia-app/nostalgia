'use strict';

const {
  db,
  models: {
    User,
    Community,
    User_Community,
    Artifact,
    Comment,
    ProfilePic,
    User_Friend,
  },
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
    // User.create({
    //   username: 'cody',
    //   password: '123',
    //   firstName: 'Cody',
    //   lastName: 'Code',
    //   age: 27,
    //   location: 'New York, NY',
    //   bio: 'Hey man, my name is Cody.',
    //   profilePic:
    //     'https://media.istockphoto.com/id/1147289240/photo/portrait-of-a-smiling-student-at-the-city-street.jpg?s=612x612&w=0&k=20&c=9-L5boel1w6eQZsZJDXjXpLMTkCopgSue6vycZzP3r4=',
    // }),
    // User.create({
    //   username: 'murphy',
    //   password: '123',
    //   firstName: 'Murphy',
    //   lastName: 'McMurphy',
    //   age: 98,
    //   location: 'Dublin, Ireland',
    //   bio: "I'm looking for a guy named Cody. Is he here?",
    //   profilePic:
    //     'https://media.istockphoto.com/id/912073272/photo/happy-senior-man-sitting-at-home.jpg?s=612x612&w=0&k=20&c=O_e4_qWJJNvrRzU9pRvI3TiDbxpPUbHQxtA3D6eWZNs=',
    // }),
    // User.create({
    //   username: 'sally',
    //   password: '123',
    //   firstName: 'Sally',
    //   lastName: 'Johnson',
    //   age: 50,
    //   location: 'Raleigh, North Carolina',
    //   bio: "Hi, I'm Sally!",
    //   profilePic:
    //     'https://media.istockphoto.com/id/1199107152/photo/senior-african-american-woman-with-unique-style.jpg?s=612x612&w=0&k=20&c=xcwuBR5QSdbHe5IbDLbfZKBhTegk-4_h0KC4y9prQ-I=',
    // }),
    // User.create({
    //   username: 'bob',
    //   password: '123',
    //   firstName: 'Bob',
    //   lastName: 'Smith',
    //   age: 60,
    //   location: 'Tampa, Florida',
    //   bio: "Hi, I'm Bob!",
    //   profilePic:
    //     'https://media.istockphoto.com/id/915675094/photo/worker-taking-a-selfie.jpg?s=612x612&w=0&k=20&c=lqPtmkqVXbdgE7Hp89G4TL1iFj0iUP_7xqWD30P1keE=',
    // }),
    // User.create({
    //   username: 'mike',
    //   password: '123',
    //   firstName: 'Mike',
    //   lastName: 'White',
    //   age: 30,
    //   location: 'Chicago, Illinois',
    //   bio: "Hi, I'm Mike!",
    //   profilePic:
    //     'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    // }),
    // User.create({
    //   username: 'sarah',
    //   password: '123',
    //   firstName: 'Sarah',
    //   lastName: 'Stevens',
    //   age: 45,
    //   location: 'Atlanta, Georgia',
    //   bio: "Hi, I'm Sarah!",
    //   profilePic:
    //     'https://shotkit.com/wp-content/uploads/2021/06/cool-profile-pic-matheus-ferrero.jpeg',

    User.create({
      username: 'hBoyardee',
      password: '123',
      firstName: 'Hector',
      lastName: 'Boyardee',
      age: 64,
      location: 'New York, NY',
      bio: 'I love all things food. I create and I eat! I joined nostalgia to share my experiences and connect with people who love what I love!',
      profilePic: 'pexels-alena-darmel-7322232.jpeg',
    }),
    User.create({
      username: 'aCollins',
      password: '123',
      firstName: 'Alicia',
      lastName: 'Collins',
      age: 28,
      location: 'Ann Arbor, MI',
      bio: "Michigan Grad. I'm a fasion designer by day, a wine connoisseur in the evenings. I joined nostalgia to be inspired and make some inspriing people.",
      profilePic: 'pexels-masha-raymers-2726111.jpeg',
    }),
    User.create({
      username: 'aYankovich',
      password: '123',
      firstName: 'Al',
      lastName: 'Yankovich',
      age: 68,
      location: 'Boston, MA',
      bio: "What can I say? I'm a weird guy but I love to learn about the diversity of our workd and all that each culture has to offer. Been a world traveler my whole life. Joined nastalgia to meet others who may have crossed my many paths.",
      profilePic: 'pexels-arthouse-studio-4571943.jpeg',
    }),
    User.create({
      username: 'mSimmons',
      password: '123',
      firstName: 'Mandy',
      lastName: 'Simmons',
      age: 22,
      location: 'Philadelphia, PA',
      bio: 'I recently moved to Phila and I love it! Originally from FL and Graduated from NYU last year. Looking to connect with good people who enjoy art, music and some nightlife!',
      profilePic: 'pexels-miriam-alonso-7585607.jpeg',
    }),
    User.create({
      username: 'sYin',
      password: '123',
      firstName: 'Steve',
      lastName: 'Yin',
      age: 26,
      location: 'Los Angeles, CA',
      bio: "I love to skate and I live to draw. I'm a passionate artist who works primarily with canvas oil paints, as well as urban graffiti art. I love all things west coast but looking to connect with good poeple and fellow artists who can inspire me with their life experience!",
      profilePic: 'pexels-monstera-5384429.jpeg',
    }),
    User.create({
      username: 'jLewis',
      password: '123',
      firstName: 'Jalen',
      lastName: 'Lewis',
      age: 31,
      location: 'Kansas City, MO',
      bio: "I'm an aspiring writer and avid traveler. Hoping nostalgia will inspire me by learning about others culture and passions. I've got great stories to tell and I'd love to hear yours!",
      profilePic: 'pexels-philip-boakye-2698918.jpeg',
    }),
    User.create({
      username: 'tHipp',
      password: '123',
      firstName: 'Tim',
      lastName: 'Hipp',
      age: 32,
      location: 'Des Moines, IA',
      bio: "I'm a software developer and baseball enthusiast. I've lived in the midwest my whole life but love to travel. I joined nostalgia to learn about cool places and experiences to check out when I'm on the road.",
      profilePic: 'pexels-pixabay-220453.jpeg',
    }),
    User.create({
      username: 'hFalcone',
      password: '123',
      firstName: 'Helen',
      lastName: 'Falcone',
      age: 71,
      location: 'San Francisco, CA',
      bio: "I taught art history at UC Santa Barbara for 33 years. My grandson told me about nostalgia and I'd love to contrubute to sharing fun life expreience. We can always be inspried by someone who has traveled a different path. Hoping to read great stories and always appreciate sharing wonderful art!",
      profilePic: 'pexels-rodnae-productions-7020543.jpeg',
    }),
    User.create({
      username: 'tNguyen',
      password: '123',
      firstName: 'Travis',
      lastName: 'Nguyen',
      age: 26,
      location: 'Phoenix, AZ',
      bio: "Born and raised in the desert. ASU class of 2018. I love outdoor music festivals, good food and craft beers. I travel a lot so always down to learn the 'must see' places wherever I'm at.",
      profilePic: 'pexels-ron-lach-8159657.jpeg',
    }),
    User.create({
      username: 'oNeilson',
      password: '123',
      firstName: 'Olrich',
      lastName: 'Neilson',
      age: 28,
      location: 'Boston, MA',
      bio: 'Originally from Berlin. I studied music at Columbia. I currently live in Boston and love the music scene. Hoping to meet some great people, share some German culture and make great music!',
      profilePic: 'pexels-sinitta-leunen-6652928.jpeg',
    }),
    User.create({
      username: 'tJohnson',
      password: '123',
      firstName: 'Tamara',
      lastName: 'Johnson',
      age: 27,
      location: 'St. Louis, MO',
      bio: 'Mizzou class of 2018. I currently work as nurse but hoping to go to PA school next fall. I love the theatre and live shows. I joined nostalgia to share some stories and meet interesting people.',
      profilePic: 'pexels-stephen-chabala-3774071.jpeg',
    }),
    User.create({
      username: 'aBergman',
      password: '123',
      firstName: 'Abby',
      lastName: 'Bergman',
      age: 24,
      location: 'Austin, TX',
      bio: "UT grad. Aspiring chef. I love to cook and learn tricks of the trade from other passionate foodies. I joined nostalgia to inspire and be inspired. Tell me about your recipes and let's eat!",
      profilePic: 'pexels-tim-douglas-6205509.jpeg',
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

  const artifacts = await Promise.all([
    Artifact.create({
      userId: users[0].id,
      communityId: communities[0].id,
      name: 'Uncle Jess & Aunt Tammy',
      description:
        'This is my uncle Jess and aunt Tammy, with their dog Gigi. They moved into their first home in the fall of 1957. This was their first Chirstmas as a family',
      fileName: 'bostonFamily.jpeg',
    }),
    Artifact.create({
      userId: users[0].id,
      communityId: communities[0].id,
      name: 'Charity Race',
      description:
        'We completed the breast cancer race last weekend! Had so much fun and it was for a great cause. If you want to join us next year please contact me!',
      fileName: 'charityRace.jpg',
    }),
    Artifact.create({
      userId: users[0].id,
      communityId: communities[0].id,
      name: 'Grandpa George',
      description:
        "My grandpa George was an amazingly creative musician. He could write a song on the spot while he played the piano. I cherished Sunday's as a kid becuase we'd have a home cooked meal and he would entertain us all afternoon.",
      fileName: 'grandpa.jpeg',
    }),
  ]);

  // const users_friends = await Promise.all([
  //   User_Friend.create({
  //     userId: users[1].id,
  //     friendId: users[2].id,
  //   }),
  //   User_Friend.create({
  //     userId: users[1].id,
  //     friendId: users[4].id,
  //   }),
  //   User_Friend.create({
  //     userId: users[4].id,
  //     friendId: users[3].id,
  //   }),
  //   User_Friend.create({
  //     userId: users[5].id,
  //     friendId: users[1].id,
  //   }),
  //   User_Friend.create({
  //     userId: users[1].id,
  //     friendId: users[5].id,
  //   }),
  //   User_Friend.create({
  //     userId: users[5].id,
  //     friendId: users[2].id,
  //   }),
  //   User_Friend.create({
  //     userId: users[4].id,
  //     friendId: users[1].id,
  //   }),
  // ]);

  const artifact = await Promise.all([
    Artifact.create({
      userId: users[0].id,
      communityId: communities[1].id,
      name: 'Samuel',
    }),
  ]);

  const comment = await Promise.all([
    Comment.create({
      artifactId: artifact[0].id,
      userId: users[0].id,
      comment: 'DEFAULT COMMENT YESSA',
    }),
  ]);

  console.log(`seeded ${users.length} users`);
  console.log(`seeded ${communities.length} communities`);
  console.log(`seeded ${users_communities.length} users communities`);
  console.log(`seeded ${artifacts.length} artifacts`);
  console.log(`seeded successfully`);

  return {
    users: {
      hBoyardee: users[0],
      aCollins: users[1],
      aYankovich: users[2],
      mSimmons: users[3],
      sYin: users[4],
      jLewis: users[5],
      tHipp: users[6],
      hFalcone: users[7],
      tNguyen: users[8],
      oNeilson: users[9],
      tJohnson: users[10],
      aBergman: users[11],
    },
    communities: {
      comm1: communities[0],
      comm2: communities[1],
      comm3: communities[2],
    },
    artifacts: {
      artifact1: artifacts[0],
      artifact2: artifacts[1],
      artifact3: artifacts[2],
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
