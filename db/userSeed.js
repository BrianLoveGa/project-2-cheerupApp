const People = require('../model/userApp');
const people = require('./userSeeds.json');


// clear the database of all user records insert original seeds


People.deleteMany({})
	.then(() => {
		console.log('old users gone cptn');
		return People.insertMany(people);
		// create user files from seeds
	})
	.then(() => {
		console.log(' ✄ Dem users ♟ back to da originals now ßóøž ✔ ');
		process.exit();
	});