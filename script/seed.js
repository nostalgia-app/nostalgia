"use strict";

const {
  db,
  models: { User, Community, User_Community, Artifact, Comment, User_Friend },
} = require("../server/db");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating Users
  const users = await Promise.all([
    User.create({
      username: "cody",
      password: "123",
      firstName: "Cody",
      lastName: "Code",
      age: 27,
      location: "New York, NY",
      bio: "Hey man, my name is Cody.",
      profilePic:
        "https://media.istockphoto.com/id/1147289240/photo/portrait-of-a-smiling-student-at-the-city-street.jpg?s=612x612&w=0&k=20&c=9-L5boel1w6eQZsZJDXjXpLMTkCopgSue6vycZzP3r4=",
    }),
    User.create({
      username: "murphy",
      password: "123",
      firstName: "Murphy",
      lastName: "McMurphy",
      age: 98,
      location: "Dublin, Ireland",
      bio: "I'm looking for a guy named Cody. Is he here?",
      profilePic:
        "https://media.istockphoto.com/id/912073272/photo/happy-senior-man-sitting-at-home.jpg?s=612x612&w=0&k=20&c=O_e4_qWJJNvrRzU9pRvI3TiDbxpPUbHQxtA3D6eWZNs=",
    }),
    User.create({
      username: "sally",
      password: "123",
      firstName: "Sally",
      lastName: "Johnson",
      age: 50,
      location: "Raleigh, North Carolina",
      bio: "Hi, I'm Sally!",
      profilePic:
        "https://media.istockphoto.com/id/1199107152/photo/senior-african-american-woman-with-unique-style.jpg?s=612x612&w=0&k=20&c=xcwuBR5QSdbHe5IbDLbfZKBhTegk-4_h0KC4y9prQ-I=",
    }),
    User.create({
      username: "bob",
      password: "123",
      firstName: "Bob",
      lastName: "Smith",
      age: 60,
      location: "Tampa, Florida",
      bio: "Hi, I'm Bob!",
      profilePic:
        "https://media.istockphoto.com/id/915675094/photo/worker-taking-a-selfie.jpg?s=612x612&w=0&k=20&c=lqPtmkqVXbdgE7Hp89G4TL1iFj0iUP_7xqWD30P1keE=",
    }),
    User.create({
      username: "mike",
      password: "123",
      firstName: "Mike",
      lastName: "White",
      age: 30,
      location: "Chicago, Illinois",
      bio: "Hi, I'm Mike!",
      profilePic:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    }),
    User.create({
      username: "sarah",
      password: "123",
      firstName: "Sarah",
      lastName: "Stevens",
      age: 45,
      location: "Atlanta, Georgia",
      bio: "Hi, I'm Sarah!",
      profilePic:
        "https://shotkit.com/wp-content/uploads/2021/06/cool-profile-pic-matheus-ferrero.jpeg",
    }),
  ]);

  // Creating Communities
  const communities = await Promise.all([
    Community.create({
      name: "West Broadway Neighborhood Association",
      bio: "West Broadway Neighborhood Association organizes neighbors and businesses on the West Side of Providence to preserve and promote our diverse, historic, urban community as a safe, vibrant, and sustainable place to be SWELL (Shop, Work, Eat, Live, and Learn locally).",
      address: "1560 Westminster St",
      city: "Providence",
      state: "RI",
      zipCode: "02909",
      category: "Neighborhood",
      imageUrl:
        "https://images.squarespace-cdn.com/content/v1/547486a6e4b081cfb2fbb049/1653424790873-H5ZT92BX336T2MRPK0JH/277988277_7237088149698005_7506566997549425627_n.jpg?format=1500w",
      adminId: users[0].id,
    }),
    Community.create({
      name: "University of Texas, Class of 2021",
      bio: "Alumni from class of 2021",
      address: "110 Inner Campus Drive",
      city: "Austin",
      state: "TX",
      zipCode: "78705",
      category: "Education",
      imageUrl:
        "https://news.utexas.edu/wp-content/uploads/2021/05/Senior_Stories_2021_Header_1500x543_SB-600x0-c-default.gif",
      adminId: users[1].id,
    }),
    Community.create({
      name: "New York Nature and Wildlife Photography",
      bio: "A group of nature enthusiasts - where you can share your love of birds and wildlife. Please share your backyard birds and wildlife.",
      city: "Albany",
      state: "NY",
      category: "Photography",
      imageUrl:
        "https://cdn.thewirecutter.com/wp-content/media/2022/06/bird-photography-2048px-0263-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=1024",
      adminId: users[2].id,
    }),
    Community.create({
      name: "Philly Basketball",
      city: "Philadelphia",
      bio: "Pickup league of basketball in the greater Philadelphia area.",
      state: "PA",
      category: "Fitness & Sports",
      imageUrl:
        "https://philadelphiaweekly.com/wp-content/uploads/2019/12/Cannons1-Akil-Anderson-scaled.jpg",
      adminId: users[3].id,
    }),
    Community.create({
      name: "New England Craft Beer",
      bio: "Welcome to the New England Craft Beer Community. We talk about all craft beer.",
      city: "Boston",
      state: "MA",
      category: "Food & Drink",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTunIQvo8h-vE_8bjS46y_WLTAtzw2wTEMrCr6D_rL8VNf44pSpuWnTmZY8A8SkYwOB_Nw&usqp=CAU",
      adminId: users[4].id,
    }),
    Community.create({
      name: "Atlanta Small Business Network",
      bio: "This group is created to help small businesses to advertise and network other small businesses that is being shadow by they big competitors. By starting this group we hope to reach consumers in all area in and out of Atlanta.",
      city: "Atlanta",
      state: "GA",
      category: "Business & Commerce",
      imageUrl:
        "https://assets3.thrillist.com/v1/image/3124195/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70",
      adminId: users[4].id,
    }),
    Community.create({
      name: "Mariachi San Antonio",
      bio: "Mariachi San Antonio, providing the very best in mariachi entertainment for Central and South Texas.",
      city: "San Antonio",
      state: "TX",
      category: "Music & Audio",
      imageUrl:
        "https://nationaltoday.com/wp-content/uploads/2022/05/Mariachi-Day.jpg",
      adminId: users[4].id,
    }),
    Community.create({
      name: "Pickup Soccer Los Angeles",
      bio: "We offer daily matches, so that you can enjoy the game and meet other people in our community who are passionate about soccer.",
      city: "Los Angeles",
      state: "CA",
      category: "Fitness & Sports",
      imageUrl:
        "https://soccerhandbook.com/wp-content/uploads/2020/06/pickup-soccer-outdoor.jpg",
      adminId: users[4].id,
    }),
    Community.create({
      name: "Hiking Club of Smoky Mountains",
      bio: "Our Club members are passionate about hiking! Our missions also include education about the outdoors and advocacy for crucial conservation issues. In addition, we proudly maintain 102 miles of Appalachian Trail in the Smokies and Nantahala National Forest.",
      city: "Knoxville",
      state: "TN",
      category: "Travel & Leisure",
      imageUrl:
        "https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Article+Image+Update/Outdoors/Smoky+Mountain+Hike/article.jpg",
      adminId: users[4].id,
    }),
    Community.create({
      name: "Bike Utah",
      bio: "We envision a Utah where complete networks of bike lanes, paths, and trails contribute to livable, healthy communities, allowing everyone to ride regardless of age, ability, race, or income.",
      city: "Salt Lake City",
      state: "UT",
      category: "Fitness & Sports",
      imageUrl:
        "https://s3.amazonaws.com/images.gearjunkie.com/uploads/2021/10/MTB-1.jpg",
      adminId: users[4].id,
    }),
    Community.create({
      name: "Classic Cars Michigan",
      bio: "The Classic Car Group Management is designed as a forum for all those interested in classic and modern sport cars and for questions and comments related to classic and modern super cars.",
      city: "Oxford",
      state: "MI",
      category: "Vehicle & Transportation",
      imageUrl:
        "https://www.originalair.com/Content/Images/uploaded/FIRST-PHOTO-CARS.jpg",
      adminId: users[4].id,
    }),
    Community.create({
      name: "New Orleans Jazz Society",
      bio: "Unofficial fan based group for Information / discussion / anything related to the New Orleans Jazz and Heritage Festival.",
      city: "New Orleas",
      state: "LA",
      category: "Music & Audio",
      imageUrl:
        "https://cdn.britannica.com/32/74832-050-A85038D4/Preservation-Hall-Jazz-Band-Dixieland-New-Orleans.jpg",
      adminId: users[4].id,
    }),
    Community.create({
      name: "Seattle Parks & Rec",
      bio: "Seattle Parks and Recreation provides welcoming and safe opportunities to play, learn, contemplate and build community, and promotes responsible stewardship of the land. We promote healthy people, a healthy environment, and strong communities. ",
      city: "Seattle",
      state: "WA",
      category: "Neighborhood",
      imageUrl:
        "https://res.cloudinary.com/sagacity/image/upload/c_crop,h_379,w_570,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/0712-parks-seward3_vzluwv.jpg",
      adminId: users[4].id,
    }),
    Community.create({
      name: "Geocaching of Washington DC",
      bio: "Seattle Parks and Recreation provides welcoming and safe opportunities to play, learn, contemplate and build community, and promotes responsible stewardship of the land. We promote healthy people, a healthy environment, and strong communities. ",
      city: "Washington",
      state: "DC",
      category: "Science & Tech",
      imageUrl: "https://www.geocaching.com/play/Content/images/preview-lg.jpg",
      adminId: users[4].id,
    }),
    Community.create({
      name: "Savannah Backyard Gardenders",
      bio: "Hey guys I know gardening can get expensive I'm creating a group for gardeners to share tips and tricks on how to save a few penny’s please feel free to share all your up cycled garden box’s or any tips and tricks you have for growing anything!! A big example Did you know you can grow vegetables fruits and even some flowers from store bought produce scraps and cuttings?? ",
      city: "Savannah",
      state: "GA",
      category: "Home & Garden",
      imageUrl:
        "https://previews.123rf.com/images/rawpixel/rawpixel1706/rawpixel170619182/80200378-group-of-people-gardening-backyard-together.jpg",
      adminId: users[4].id,
    }),
    Community.create({
      name: "Antique Furniture Restoration",
      bio: "I started this group because no other group out there is dedicated to the restoration of antique furniture of all kinds. This group will encompass the true art of restoration. To take a piece that has seen better days, that would be thrown away by most any other, that would be ruined by chalk paint, that would be distressed, and that no one wants, and to bring it back to life.",
      city: "Chicago",
      state: "IL",
      category: "Home & Garden",
      imageUrl:
        "https://images.squarespace-cdn.com/content/v1/577c1cd7c534a5bc311dc2ef/1608078649453-30RJPQ2FXQKT3X7D68JS/1920+Tudor+Buffet+before+and+after.jpg?format=1000w",
      adminId: users[4].id,
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
      name: "Uncle Jess & Aunt Tammy",
      description:
        "This is my uncle Jess and aunt Tammy, with their dog Gigi. They moved into their first home in the fall of 1957. This was their first Chirstmas as a family",
      fileName: "bostonFamily.jpeg",
    }),
    Artifact.create({
      userId: users[0].id,
      communityId: communities[0].id,
      name: "Charity Race",
      description:
        "We completed the breast cancer race last weekend! Had so much fun and it was for a great cause. If you want to join us next year please contact me!",
      fileName: "charityRace.jpg",
    }),
    Artifact.create({
      userId: users[0].id,
      communityId: communities[0].id,
      name: "Grandpa George",
      description:
        "My grandpa George was an amazingly creative musician. He could write a song on the spot while he played the piano. I cherished Sunday's as a kid becuase we'd have a home cooked meal and he would entertain us all afternoon.",
      fileName: "grandpa.jpeg",
    }),
  ]);

  const users_friends = await Promise.all([
    User_Friend.create({
      userId: users[1].id,
      friendId: users[2].id,
    }),
    User_Friend.create({
      userId: users[1].id,
      friendId: users[4].id,
    }),
    User_Friend.create({
      userId: users[4].id,
      friendId: users[3].id,
    }),
    User_Friend.create({
      userId: users[5].id,
      friendId: users[1].id,
    }),
    User_Friend.create({
      userId: users[1].id,
      friendId: users[5].id,
    }),
    User_Friend.create({
      userId: users[5].id,
      friendId: users[2].id,
    }),
    User_Friend.create({
      userId: users[4].id,
      friendId: users[1].id,
    }),
  ]);

  const artifact = await Promise.all([
    Artifact.create({
      userId: users[0].id,
      communityId: communities[1].id,
      name: "Samuel",
    }),
  ]);

  const comment = await Promise.all([
    Comment.create({
      artifactId: artifact[0].id,
      userId: users[0].id,
      comment: "DEFAULT COMMENT YESSA",
    }),
  ]);

  console.log(`seeded ${users.length} users`);
  console.log(`seeded ${communities.length} communities`);
  console.log(`seeded ${users_communities.length} users communities`);
  console.log(`seeded ${artifacts.length} artifacts`);
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
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
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
