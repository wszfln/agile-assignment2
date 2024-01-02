import chai from "chai";
import request from "supertest";
const mongoose = require("mongoose");
import Movie from "../../../../api/movies/movieModel";
import api from "../../../../index";
import movies from "../../../../seedData/movies";

const expect = chai.expect;
let db;

describe("Genres endpoint", () => {
    before(() => {
        mongoose.connect(process.env.MONGO_DB, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        db = mongoose.connection;
      });
    
      after(async () => {
        try {
          await db.dropDatabase();
        } catch (error) {
          console.log(error);
        }
      });
    
      beforeEach(async () => {
        try {
          await Movie.deleteMany();
          await Movie.collection.insertMany(movies);
        } catch (err) {
          console.error(`failed to Load user Data: ${err}`);
        }
      });
  afterEach(() => {
    api.close(); // Release PORT 8080
  });
  describe("GET /api/genres ", () => {
    it("should return 19 genres and a status 200", (done) => {
      request(api)
        .get("/api/genres")
        .set("Accept", "application/json")
        .expect(200)
        .end((err, res) => {
          expect(res.body.genres).to.be.a("array");
          expect(res.body.genres.length).to.equal(19);
          done();
        });
    });
  });
});