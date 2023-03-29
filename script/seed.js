'use strict';

const {
  db,
  models: { User, Community, User_Community, Artifact, Comment, User_Friend },
} = require('../server/db');

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables

  // Creating Users
  const users = await Promise.all([
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
      name: 'University of Texas, Current and Former Students',
      bio: 'Alumni from class of 2021',
      address: '110 Inner Campus Drive',
      city: 'Austin',
      state: 'TX',
      zipCode: '78705',
      category: 'Education',
      imageUrl:
        'https://news.utexas.edu/wp-content/uploads/2021/05/Senior_Stories_2021_Header_1500x543_SB-600x0-c-default.gif',
      adminId: users[1].id,
    }),
    Community.create({
      name: 'West Broadway Neighborhood Association',
      bio: 'West Broadway Neighborhood Association organizes neighbors and businesses on the West Side of Providence to preserve and promote our diverse, historic, urban community as a safe, vibrant, and sustainable place to be SWELL (Shop, Work, Eat, Live, and Learn locally).',
      address: '1560 Westminster St',
      city: 'Providence',
      state: 'RI',
      zipCode: '02909',
      category: 'Neighborhood',
      imageUrl:
        'https://images.squarespace-cdn.com/content/v1/547486a6e4b081cfb2fbb049/1653424790873-H5ZT92BX336T2MRPK0JH/277988277_7237088149698005_7506566997549425627_n.jpg?format=1500w',
      adminId: users[0].id,
    }),
    Community.create({
      name: 'New York Nature and Wildlife Photography',
      bio: 'A group of nature enthusiasts - where you can share your love of birds and wildlife. Please share your backyard birds and wildlife.',
      city: 'Albany',
      state: 'NY',
      category: 'Photography',
      imageUrl:
        'https://cdn.thewirecutter.com/wp-content/media/2022/06/bird-photography-2048px-0263-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=1024',
      adminId: users[2].id,
    }),
    Community.create({
      name: 'Philly Basketball',
      city: 'Philadelphia',
      bio: 'Pickup league of basketball in the greater Philadelphia area.',
      state: 'PA',
      category: 'Fitness & Sports',
      imageUrl:
        'https://philadelphiaweekly.com/wp-content/uploads/2019/12/Cannons1-Akil-Anderson-scaled.jpg',
      adminId: users[3].id,
    }),
    Community.create({
      name: 'New England Craft Beer',
      bio: 'Welcome to the New England Craft Beer Community. We talk about all craft beer.',
      city: 'Boston',
      state: 'MA',
      category: 'Food & Drink',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTunIQvo8h-vE_8bjS46y_WLTAtzw2wTEMrCr6D_rL8VNf44pSpuWnTmZY8A8SkYwOB_Nw&usqp=CAU',
      adminId: users[4].id,
    }),
    Community.create({
      name: 'Atlanta Small Business Network',
      bio: 'This group is created to help small businesses to advertise and network other small businesses that is being shadow by they big competitors. By starting this group we hope to reach consumers in all area in and out of Atlanta.',
      city: 'Atlanta',
      state: 'GA',
      category: 'Business & Commerce',
      imageUrl:
        'https://assets3.thrillist.com/v1/image/3124195/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70',
      adminId: users[4].id,
    }),
    Community.create({
      name: 'Mariachi San Antonio',
      bio: 'Mariachi San Antonio, providing the very best in mariachi entertainment for Central and South Texas.',
      city: 'San Antonio',
      state: 'TX',
      category: 'Music & Audio',
      imageUrl:
        'https://nationaltoday.com/wp-content/uploads/2022/05/Mariachi-Day.jpg',
      adminId: users[4].id,
    }),
    Community.create({
      name: 'Pickup Soccer Los Angeles',
      bio: 'We offer daily matches, so that you can enjoy the game and meet other people in our community who are passionate about soccer.',
      city: 'Los Angeles',
      state: 'CA',
      category: 'Fitness & Sports',
      imageUrl:
        'https://soccerhandbook.com/wp-content/uploads/2020/06/pickup-soccer-outdoor.jpg',
      adminId: users[4].id,
    }),
    Community.create({
      name: 'Hiking Club of Smoky Mountains',
      bio: 'Our Club members are passionate about hiking! Our missions also include education about the outdoors and advocacy for crucial conservation issues. In addition, we proudly maintain 102 miles of Appalachian Trail in the Smokies and Nantahala National Forest.',
      city: 'Knoxville',
      state: 'TN',
      category: 'Travel & Leisure',
      imageUrl:
        'https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Article+Image+Update/Outdoors/Smoky+Mountain+Hike/article.jpg',
      adminId: users[4].id,
    }),
    Community.create({
      name: 'Bike Utah',
      bio: 'We envision a Utah where complete networks of bike lanes, paths, and trails contribute to livable, healthy communities, allowing everyone to ride regardless of age, ability, race, or income.',
      city: 'Salt Lake City',
      state: 'UT',
      category: 'Fitness & Sports',
      imageUrl:
        'https://s3.amazonaws.com/images.gearjunkie.com/uploads/2021/10/MTB-1.jpg',
      adminId: users[4].id,
    }),
    Community.create({
      name: 'Classic Cars Michigan',
      bio: 'The Classic Car Group Management is designed as a forum for all those interested in classic and modern sport cars and for questions and comments related to classic and modern super cars.',
      city: 'Oxford',
      state: 'MI',
      category: 'Vehicle & Transportation',
      imageUrl:
        'https://www.originalair.com/Content/Images/uploaded/FIRST-PHOTO-CARS.jpg',
      adminId: users[4].id,
    }),
    Community.create({
      name: 'Seattle Parks & Rec',
      bio: 'Seattle Parks and Recreation provides welcoming and safe opportunities to play, learn, contemplate and build community, and promotes responsible stewardship of the land. We promote healthy people, a healthy environment, and strong communities. ',
      city: 'Seattle',
      state: 'WA',
      category: 'Neighborhood',
      imageUrl:
        'https://res.cloudinary.com/sagacity/image/upload/c_crop,h_379,w_570,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/0712-parks-seward3_vzluwv.jpg',
      adminId: users[4].id,
    }),
    // Community.create({
    //   name: 'New Orleans Jazz Society',
    //   bio: 'Unofficial fan based group for Information / discussion / anything related to the New Orleans Jazz and Heritage Festival.',
    //   city: 'New Orleas',
    //   state: 'LA',
    //   category: 'Music & Audio',
    //   imageUrl:
    //     'https://cdn.britannica.com/32/74832-050-A85038D4/Preservation-Hall-Jazz-Band-Dixieland-New-Orleans.jpg',
    //   adminId: users[4].id,
    // }),

    // Community.create({
    //   name: 'Geocaching of Washington DC',
    //   bio: 'Seattle Parks and Recreation provides welcoming and safe opportunities to play, learn, contemplate and build community, and promotes responsible stewardship of the land. We promote healthy people, a healthy environment, and strong communities. ',
    //   city: 'Washington',
    //   state: 'DC',
    //   category: 'Science & Tech',
    //   imageUrl: 'https://www.geocaching.com/play/Content/images/preview-lg.jpg',
    //   adminId: users[4].id,
    // }),
    // Community.create({
    //   name: 'Savannah Backyard Gardenders',
    //   bio: "Hey guys I know gardening can get expensive I'm creating a group for gardeners to share tips and tricks on how to save a few penny’s please feel free to share all your up cycled garden box’s or any tips and tricks you have for growing anything!! A big example Did you know you can grow vegetables fruits and even some flowers from store bought produce scraps and cuttings?? ",
    //   city: 'Savannah',
    //   state: 'GA',
    //   category: 'Home & Garden',
    //   imageUrl:
    //     'https://previews.123rf.com/images/rawpixel/rawpixel1706/rawpixel170619182/80200378-group-of-people-gardening-backyard-together.jpg',
    //   adminId: users[4].id,
    // }),
    // Community.create({
    //   name: 'Antique Furniture Restoration',
    //   bio: 'I started this group because no other group out there is dedicated to the restoration of antique furniture of all kinds. This group will encompass the true art of restoration. To take a piece that has seen better days, that would be thrown away by most any other, that would be ruined by chalk paint, that would be distressed, and that no one wants, and to bring it back to life.',
    //   city: 'Chicago',
    //   state: 'IL',
    //   category: 'Home & Garden',
    //   imageUrl:
    //     'https://images.squarespace-cdn.com/content/v1/577c1cd7c534a5bc311dc2ef/1608078649453-30RJPQ2FXQKT3X7D68JS/1920+Tudor+Buffet+before+and+after.jpg?format=1000w',
    //   adminId: users[4].id,
    // }),
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
      name: "Fall Festival 22'",
      description:
        "An unreal weekend! 10 bands in 3 nights. Our biggest turnout since the festival started. Thanks to all who came out. Get some rest! We'll see you back in class after fall break!",
      fileName: 'concert.jpeg',
      likes: 311,
    }),
    Artifact.create({
      userId: users[0].id,
      communityId: communities[0].id,
      name: 'Poetry 305 Club',
      description:
        "If you're interested in collaborting, or would like to share your work, we'd love to have you! We meet every Saturday on the hill at 3pm. Great way to meet new friends!",
      fileName: 'pexels-keira-burton-6146971.jpeg',
      likes: 13,
    }),
    Artifact.create({
      userId: users[0].id,
      communityId: communities[0].id,
      name: 'UT Class of 2021',
      description:
        "HOOK EM HORNS! Congradulations to the class of 2021! We all did this togehter! Keep in touch with classemates and faculty. Let us know what's next on your journey!",
      fileName: 'pexels-stanley-morales-3186386 (1).jpeg',
      likes: 156,
    }),
    Artifact.create({
      userId: users[0].id,
      communityId: communities[8].id,
      name: 'Spring Hike',
      description:
        'I went out the weekend of 4/11/22 and got some epic pictures. I love the east meadow this time of year. Teeming with new life and the perfect getaway from the city.',
      fileName: 'pexels-eberhard-grossgasteiger-568236.jpeg',
      likes: 6,
    }),
    Artifact.create({
      userId: users[0].id,
      communityId: communities[4].id,
      name: 'Bouleverdia 2021',
      description:
        "Such a great festival! We'll be back next year for sure! We've heard about it for years but finally got out there and it did not disappoint!",
      fileName: 'pexels-elevate-1267351.jpeg',
      likes: 71,
    }),
    Artifact.create({
      userId: users[0].id,
      communityId: communities[4].id,
      name: "Summer BearFest 22'",
      description:
        'Another great time in the heat with some of the best local breweries! Thanks to all the vendors who make this such a great event!',
      fileName: 'pexels-jose-antonio-gallego-vázquez-2453312.jpeg',
      likes: 53,
    }),
    Artifact.create({
      userId: users[0].id,
      communityId: communities[9].id,
      name: 'Weekend Getaway',
      description:
        "My wife and I love getting up to Canyonland Plateau on long weekends. And my dog Mahomes doesn't mind it either!",
      fileName: 'pexels-jenny-uhling-6332531.jpeg',
      likes: 13,
    }),
    Artifact.create({
      userId: users[0].id,
      communityId: communities[9].id,
      name: "Devil's Backbone Open",
      description:
        "One of the more dangerous races in Utah, but if you can brave it, you will be rewarded. Going on our 7th year now. 23' registration starts 5/11!",
      fileName: 'pexels-pixabay-71104.jpeg',
      likes: 42,
    }),
    Artifact.create({
      userId: users[0].id,
      communityId: communities[6].id,
      name: 'San Antonio Cinco De Mayo',
      description:
        "Come out and join us for Cinco De Mayo on the riverwalk! Tickets on sale now. You've only got 6 weeks! See you there!",
      fileName: 'pexels-los-muertos-crew-7772333.jpeg',
      likes: 17,
    }),
    Artifact.create({
      userId: users[0].id,
      communityId: communities[10].id,
      name: "Henderson's 21' T3",
      description:
        "Doug Henderson's 1921 Ford T3. A real showstopper. Won first place in Ann Arbor last year. You can't miss that Orange!",
      fileName: 'pexels-pixabay-163677.jpeg',
      likes: 17,
    }),
    Artifact.create({
      userId: users[0].id,
      communityId: communities[10].id,
      name: 'Mercedes Night',
      description:
        "If you'd like to come out and show off your classic Benz, this year's show begins on 4/23. Contact Doug Henderson for details.",
      fileName: 'pexels-vitali-adutskevich-14065118.jpeg',
      likes: 39,
    }),
    Artifact.create({
      userId: users[0].id,
      communityId: communities[3].id,
      name: "Open Play Saturday's",
      description:
        'Come out and ball if you got what it takes. Open saturdays welcomes all 3 on 3 teams, and singles looking to join the league.',
      fileName: 'pexels-pnw-production-8980684.jpeg',
      likes: 17,
    }),
    Artifact.create({
      userId: users[0].id,
      communityId: communities[5].id,
      name: "Henderson's Artifact's",
      description:
        "Owner Doug Henderson has curated a great collection of books, stamps and collectables. Come see what all the fun is about the next time you're in the Henderson District.",
      fileName: 'pexels-rachel-claire-5490916.jpeg',
      likes: 112,
    }),
    Artifact.create({
      userId: users[0].id,
      communityId: communities[11].id,
      name: 'Fall Hikes',
      description:
        'Fall just might be the best time to be out here. Come join us! We have hiking groups on Satuday mornings, and the Audubon society on Sunday. Email seattleParksClub@gmail.com for more info.',
      fileName: 'pexels-władysław-starzec-14180230.jpeg',
      likes: 87,
    }),
    Artifact.create({
      userId: users[0].id,
      communityId: communities[11].id,
      name: 'Hadley Pass',
      description:
        "There's many picturesque spots on the East Inlet trail. The Hadley Pass is a popular one among phtographers.",
      fileName: 'pexels-zhengdong-hu-14194280.jpeg',
      likes: 72,
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
      UT: communities[0],
      WBNA: communities[1],
      NYNWP: communities[2],
      PB: communities[3],
      NECB: communities[4],
      ASBN: communities[5],
      MSA: communities[6],
      PSLA: communities[7],
      HCSM: communities[8],
      BU: communities[9],
      CCM: communities[10],
      SPR: communities[11],
    },
    artifacts: {
      artifact1: artifacts[0],
      artifact2: artifacts[1],
      artifact3: artifacts[2],
      artifact3: artifacts[3],
      artifact3: artifacts[4],
      artifact3: artifacts[5],
      artifact3: artifacts[6],
      artifact3: artifacts[7],
      artifact3: artifacts[8],
      artifact3: artifacts[9],
      artifact3: artifacts[10],
      artifact3: artifacts[11],
      artifact3: artifacts[12],
      artifact3: artifacts[13],
      artifact3: artifacts[14],
    },
  };
}

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

if (module === require.main) {
  runSeed();
}

module.exports = seed;
