const should = require('chai').should();
const expect = require('chai').expect;
const supertest = require('supertest');
const api = supertest('http://localhost:3000');



/// TESTING 

// 1 GET /cheers which will list out all cheerups / homepage


describe("GET /cheerUps", () => {
    it("should return a 200 response", done => {
      api
        .get("/")
        .set("Accept", "application/json")
        .expect(200, done)
        
    });
  });



// 2. GET /cheerUps/:id which will get a specific cheer up by ID




// 3. GET /cheerUps/user/:id - get user by id




/// 4. POST new cheer




/// 5. POST new user




/// 6. PUT - edit cheer by id




/// 7. PUT - edit user by id




/// 8. Delete - cheer by id




/// 9. Delete - user by id




