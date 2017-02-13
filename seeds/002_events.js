
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('events').insert({imageurl:'http://i.huffpost.com/gen/1977217/images/o-COOKING-facebook.jpg', name: 'Chef Boyardee', occupation:'Ravioli Engineer!', title: 'Making the Best Ravioli!', description: ' I am the OG ravioli maker if you ask anyone my ravioli has been keeping children and campers happy for decades. I like making ravioli and spaghetti and putting them in cans children will forever remember.', address: '100 ravioli Ave. Santa Monica', datetime: new Date('2017-04-20 12:30:00'), genre: 'cooking',ownerUserId: 1}),
        knex('events').insert({imageurl: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/1545072_10153744860430623_1596799000_n.jpg?oh=a379b8db94b15962a4320914ebbc5549&oe=590D1DE1',  name: 'Mikey', occupation: 'Web Development Student', title: 'Galvanize Delivers', description: "I am a galvanize student recently attended 6 month web immersive program. I'm presenting my Capstone Proeject February 15th, if your interested in learning about my bootcamp experience feel welcome to join.", address: "145 van ness Blvd San Francisco 95612 ",datetime: new Date('2017-02-15 12:00:00'), genre: 'computer science', ownerUserId: 1}),
        knex('events').insert({imageurl: 'http://bayhillflorist.com/wp-content/uploads/2014/02/Bay-Hill-Florist-620x520.jpg', name: 'Jenny', title: 'Introduction to Floral Artistry', occupation: 'Florist', description: 'I own my own small flower shop in Berkeley I have been in this business for 10 years, I am giving a free introductory class!', address: '1000 big sunflower Ave, San Jose', datetime: new Date('2017-02-15 8:30:00'), genre: 'other', ownerUserId: 2}),
        knex('events').insert({imageurl:'https://c7cf1aee0f9592118cd3-45a8e764187dff1857a6ffe8280848dc.ssl.cf2.rackcdn.com/uploads/images/cropped/688_374/52f517b5f10de_My%20love,%20the%20ribeye-3%20small.jpg', name: 'Jake Quisenberry', title: 'Chillin and Grillin', occupation: 'Celebrity Home Chef', description: 'I cook meat for celebrities ask me anything about how to marinate, satue, grill any meats!', address: '100 Malcom Ave San Jose', datetime: new Date('2017-02-15 8:30:00'), genre: 'cooking', ownerUserId: 2}),
        knex('events').insert({imageurl: 'http://cdn.shopify.com/s/files/1/0806/7725/products/Nutr_TShirt_3.jpg?v=1442808260', name: 'Anthony Bower', title:'My Body Building Journey', occupation: 'Personal Trainer', description: 'Using the perfect mix of clean eating and heavy weight lifting I have transformed from skinny to buff, if your interested in my life changing regimen feel welcome to join.', address: '1000 El Camino, San Mateo', datetime: new Date('2017-02-15 8:30:00'), genre: 'other', ownerUserId:3}),
        knex('events').insert({imageurl: 'http://i.huffpost.com/gen/2395022/images/o-STARGAZING-facebook.jpg', name: 'Eric Gazer', title:'Stargazing When and Where', occupation: 'Chemistry PhD', description: 'I enjoy stargazing I have an Instagram account checkout my pictures at https://www.instagram.com/julesmaclf/ I know the best days and seasons to stargaze', datetime: new Date('2017-02-15 8:30:00'), genre: 'other', ownerUserId:3}),
        knex('events').insert({imageurl: 'http://www.gretchensbakery.com/wp-content/uploads/2013/01/ingrdients-2015.jpg', name: 'Kevin Baker', title:'Baking 101', occupation: 'Stay at Home Dad', description: 'I have three children and they all have a sweet tooth, I may not be a professional but I have a passion to baking simple tasty treats that are fun to eat!', datetime: new Date('2017-02-15 8:30:00'), genre: 'cooking', ownerUserId:3}),
        knex('events').insert({imageurl: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/12650976_10153585312523411_1211338731892105079_n.jpg?oh=1a414050d5f3ff6ea2df392d2f37d917&oe=5946F1B3', name: 'Joey', occupation: 'IOS Engineer LinkedIn', title: 'Linkedin Apprenticeship', description: "I am a software engineer at Linkedin working on Mobile application development looking to increase knowledge of apprenticeship program, and awareness on what software engineers actually do on a day to day basis.", address: "1650 hollywood drive Los Angeles 99240",datetime: new Date('2017-02-15 8:30:00'), genre: 'computer science', ownerUserId: 1}),
        knex('events').insert({imageurl: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/12243187_10208320002697615_1302004387963071523_n.jpg?oh=397fb7ae6f4c1d4e2788a2c7a88342bb&oe=5901D62B', name: 'Christopher Sonada', title:'Keeping the GF happy', occupation: 'IOS engineer Kaiser Permanente', description: 'I work on mobile apps at kaiser permanente recently I developed an apple watch app, most of my time I spend making my girlfriend happy although it takes up a majority and I cant hang out with my guy friends anymore. I can teach you how to survive.' , address: "123 sunnyvale ave", datetime: new Date('2017-02-07 8:30:00'), genre: 'computer science', ownerUserId: 1}),
        knex('events').insert({imageurl: 'https://www.guitar.com/sites/guitar.com/files/styles/two_thirds/public/images/chords.jpg', name: 'Howard Hughes', title:'Guitar Tutorial', occupation: 'street performer' ,description: 'Come join me for a short session on how to pick your first guitar and steps to start learning how to play! I am a street performer who is devoted to my dog, I play on the streets to feed myself', address: 'somewhere on market', datetime: new Date('2017-02-08 8:45:00'), genre: 'music',ownerUserId: 1}),
        knex('events').insert({imageurl: 'http://ralphlauren.scene7.com/is/image/RLContent/20160803_baby_feat_c01?scl=1', name: 'Rachel Laughlin', title: 'Pregnant Woman Tips my Journey!', occupation: 'home mom', description: 'I have ten children ask me anything about babies!', address: '10 Babies making ave San Francisco', datetime: new Date('2017-02-08 8:45:00'), genre: 'wellness', ownerUserId: 1}),
        knex('events').insert({imageurl:'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/1458489_10153053688448265_7788823355413438648_n.jpg?oh=de8e155404d788dc8ec799024925b095&oe=593BA393', name: 'Jeremy Lin', title: 'Overwatch Tips and Guide', occupation: 'Protein engineer Johnson and Johnson', description: 'Been playing overwatch since its beta release, I am currently in the master league I specialize in hardcore heroes like Hanzo and Genji feel free to ask me anything about maps, strategies, and ways to improve.', address: '200 pavel st Arcadia ', datetime: new Date('2017-02-09 12:00:00'), genre: 'other', ownerUserId: 1}),
        knex('events').insert({imageurl: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-1/424736_4559125857176_855703733_n.jpg?oh=28f2e534a80816608b7c76b000c8cce0&oe=593E0AC7', name:'Julian Lee', title: 'Conversational French', occupation: 'funemployed', description: 'As a child I lived in Ivory Coast for 15 years and picked up the West African styled french, I can teach you basic social interactions in french!', address: '827 Oregon Ave San Mateo', datetime: new Date('2017-02-09 12:30:00'), genre: 'other', ownerUserId: 1}),
        knex('events').insert({imageurl:'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/12119142_10153075753656782_2968911861675974193_n.jpg?oh=23fbacb38bd628587bcfc0e29e63d57d&oe=59467847', name: 'Sean Pao', title:'Eating on a budget, Unhealthily!', occupation: 'Process Engineer Intel', description: 'I used to be really skinny in high school but when I went to college money was a problem so I frequented fast food restaurants, I know all the deals and ways to keep a full belly!', address: '100 Pleasanton Ave, Portland', datetime: new Date('2017-02-09 12:00:00'), genre: 'other', ownerUserId: 1}),
        knex('events').insert({imageurl:'https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/13626344_3277902540507_3600989698654341766_n.jpg?oh=77346a76737aad0558ac8a20850193ee&oe=5909EA3E', name:'Ziyi Yang', title: "How to drink responsibly", occupation: 'Sr. Software Engineer', description: "I work on back end databases at IBM I also like to drink wine and socialize, my goal is to start a coding and wine meetup!", address: '1000 sunnyvale rd, San Jose',datetime: new Date('2017-02-15 8:30:00'), genre: 'networking', ownerUserId: 1}),
        knex('events').insert({imageurl: 'https://scontent-atl3-1.xx.fbcdn.net/v/t31.0-8/12628603_10153950620813336_1776196728747549198_o.jpg?oh=45364b82c4d8b03a1dbef641f001c9fe&oe=594BEDC9', name: 'Jonny', occupation: 'Program Coordinator at Apple Inc.', title: 'Recruiting manager', description: "I am a recruiter at Apple looking to broaden public knowledge of interview process and job eligibility.", address: "1760 Wilshire Blvd Los Angeles 99138",datetime: new Date('2017-01-20 12:30:00'), genre: 'networking', ownerUserId: 1}),
        knex('events').insert({imageurl:'https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/1917333_126821811896_904043_n.jpg?oh=f5edd5ccd46a3d9114dbc243dbaf122a&oe=59018D96', name: 'Max Tzeng', title: "mechanical engineering conseling", occupation: 'product management engineer', description: 'Moved to china to facilitate training processes in manufacturing plants, oversee engineers and work crews on small scale projects.', address: "1200 zhencheng blvd alley 405 Taipei",datetime: new Date('2017-02-10 8:30:00'), genre: 'networking', ownerUserId: 1}),
        knex('events').insert({imageurl: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/1238778_10151699659793019_1863377695_n.jpg?oh=2fb62224bd77e5197c74f7dba3ccb8ab&oe=5902D8C8',name: 'Thomas Wang',title: 'SCU masters experience', occupation: 'Data Science Masters', description: 'Currently doing my graduate level studies in software engineering at Santa Clara University, I like to eat alot of adderall', address: ' 4500 Hallman Rd', datetime: new Date('2017-02-10 8:30:00'), genre: 'computer science', ownerUserId: 1})
      ]);
    });
};
