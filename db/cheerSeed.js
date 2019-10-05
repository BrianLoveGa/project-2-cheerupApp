const Cheers = require('../model/cheerApp');
const cheer = require('./CheerSeeds.json');


// clear the database of all cheerups insert original seeds


Cheers.deleteMany({})
	.then(() => {
		console.log('old cheers gone sir');
		return Cheers.insertMany(cheer);
		// create cheerup files from seeds
	})
	.then(() => {
		console.log(' ㋡ CheerUps 💕 back to originals ßóøž ✔ ');
		process.exit();
	});