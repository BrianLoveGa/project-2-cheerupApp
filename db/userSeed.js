const People = require('../model/userApp');
const peeps = require('./UserSeeds.json');


// clear the database of all user records insert original seeds


People.deleteMany({})
	.then(() => {
		console.log('old users gone cptn');
		return People.insertMany(peeps);
		// create user files from seeds
	})
	.then(() => {
		console.log(' ✄ Dem users ♟ back to da originals now ßóøž ✔ ');
		process.exit();
	});