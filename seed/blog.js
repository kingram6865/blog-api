const LoremIpsum = require("lorem-ipsum").LoremIpsum; //Generates filler text
const { v4: uuidv4 } = require('uuid'); // Generates a unique id
const { Picsum } = require('picsum-photos'); // Generates a random image link
const faker = require('faker'); // Generates a random name
const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 4,
    min: 2
  },
  wordsPerSentence: {
    max: 10,
    min: 5
  }
});

const db = require('../db/connection')
const Post = require('../models/post') 
//const User = require('../models/user') 

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

async function generateData(n){

  for (let i=0; i < n; i++){
    let record = {}
    const image = await Picsum.random();
    record._id = uuidv4();
    record.title = `Test ${i} ${lorem.generateWords(5)}`;
    record.imgURL = image.url;
    record.content = lorem.generateSentences(5);
    record.author = faker.name.firstName();
    posts.push(record);
  }
}

generateData(10);