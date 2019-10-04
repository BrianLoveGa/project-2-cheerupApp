// const Cheers = require('../model/cheerApp');
// const cheer = require('./CheerSeeds.json');

// const People = require('../model/userApp');
// const people = require('./userSeeds.json');

// // clear the database of all records insert original seeds

// People.deleteMany({})
// 	.then(() => {
// 		console.log('old users gone cptn');
// 		return People.insertMany(people);
// 		// create user files from seeds
// 	})
// 	.then(() => {
// 		console.log(' ✄ Dem users ♟ back to da originals now ßóøž ✔ ');
// 		process.exit();
// 	});

// Cheers.deleteMany({})
// 	.then(() => {
// 		console.log('old cheers gone c');
// 		return Cheers.insertMany(cheer);
// 		// create cheerup files from seeds
// 	})
// 	.then(() => {
// 		console.log(' ㋡ CheerUps 💕 back to originals ßóøž ✔ ');
// 		process.exit();
// 	});