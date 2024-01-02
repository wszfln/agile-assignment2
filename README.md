# Assignment 2 - Agile Software Practice.

Name: Yingying Lu

## API endpoints.

[List the Web API's endpoints and state the purpose of each one. Indicate those that require authentication.]
 

+ GET /api/movies/tmdb/discover - get discover movies from tmdb .
+ GET /api/movies/tmdb/upcoming - get /api/movies/tmdb/upcoming.
+ GET /api/movies/:id - get the details of a specific movie.  
+ GET /api/movies/tmdb/movie/:id/similar - get similar movies from tmdb.
+ GET /api/movies/tmdb/movie/:id/credits - get movies credits from tmdb. 
+ GET /api/genres - gets genres from tmdb
+ GET /api/actors/tmdb/popular - gets popular actors from tmdb
+ GET /api/actors/tmdb/actor/:id - get the details of a specific actor
+ GET /api/actors/tmdb/actor/:id/movie-credits - gets movie credits for an actor from tmdb
+ GET /api/reviews/movie/:id/reviews - gets movie reviews
+ POST /api/reviews/:username/movie/:id/reviews - creates/updates a movie review
+ GET /api/users - get user information
+ POST /api/users - Registers/authenticates a user
+ GET /api/users/:userName/favourites - get user's favourite movies
+ POST /api/users/:userName/favourites - add user's favourite movies
+ POST /api/users/:userName/movie/:id/favourites - remove user's favourite movies

## Automated Testing.

[In this section, include a listing of the response from running your tests locally (npm run test). Simply copy the output from your terminal and paste it into a fenced block (the triple tilda markup, i.e. ~~~ ), as shown below - do not use a screenshot.]
 
~~~
Users endpoint
    GET /api/users
      √ should return the 2 users and a status 200
    POST /api/users
      For a register action
        when the payload is correct
          √ should return a 201 status and the confirmation message
        when the password is not valid
          √ should return a 401 status and the error message
      For an authenticate action
        when the payload is correct
          √ should return a 200 status and a generated token
        when the username does not exist
          √ should return a 401 status and an error message
        when the password is incorrect
          √ should return a 401 status and an error message
        when no username or password are passed
          √ should return a 401 status and an error message
    GET /api/users/:userName/favourites
      √ should return user1's favourites and status 200
    POST /api/users/:userName/favourites
      1) should add a movie id to user2's favourites and status 201
    POST /api/users/:userName/movie/:id/favourites
      2) should remove a movie id from user1's favourites and status 201
      
  Movies endpoint
    GET /api/movies/tmdb/discover
      √ should return 20 movies and a status 200 (820ms)
    GET /api/movies/tmdb/upcoming 
      √ should return 20 movies and a status 200 (205ms)
    GET /api/movies/:id
      when the id is valid
        √ should return the matching movie
      when the id is invalid
        √ should return the NOT found message
    GET /api/movies/tmdb/movie/:id/similar
      √ should return similar movies
    GET /api/movies/tmdb/movie/:id/credits
      √ should return the list of actors assosiated with a movie

  Genres endpoint
    GET /api/genres
      √ should return 19 genres and a status 200

  Actors endpoint
    GET /api/actors/tmdb/popular
      √ should return 20 actors and a status 200
    GET /api/actors/tmdb/actor/:id 
      √ should return the actor Jason Statham and a status 200
    GET /api/actors/tmdb/actor/:id/movie-credits 
      √ should return movies Jason Statham has a credit in and a status 200


  18 passing (14s)
  2 failing

  1) Users endpoint
       POST /api/users/:userName/favourites
         should add a movie id to user2's favourites and status 201:
     Error: expected 201 "Created", got 404 "Not Found"
      at Test._assertStatus (node_modules/supertest/lib/test.js:268:12)
      at Test._assertFunction (node_modules/supertest/lib/test.js:283:11)
      at Test.assert (node_modules/supertest/lib/test.js:173:18)
      at Server.localAssert (node_modules/supertest/lib/test.js:131:12)
      at Object.onceWrapper (node:events:633:28)
      at Server.emit (node:events:519:28)
      at emitCloseNT (node:net:2279:8)
      at processTicksAndRejections (node:internal/process/task_queues:81:21)
  2) Users endpoint
       POST /api/users/:userName/movie/:id/favourites
         should remove a movie id from user1's favourites and status 201:
     Error: expected 201 "Created", got 404 "Not Found"
      at Test._assertStatus (node_modules/supertest/lib/test.js:268:12)
      at Test._assertFunction (node_modules/supertest/lib/test.js:283:11)
      at Test.assert (node_modules/supertest/lib/test.js:173:18)
      at Server.localAssert (node_modules/supertest/lib/test.js:131:12)
      at Object.onceWrapper (node:events:633:28)
      at Server.emit (node:events:519:28)
      at emitCloseNT (node:net:2279:8)
      at processTicksAndRejections (node:internal/process/task_queues:81:21)
~~~

[ Markdown Tip: By wrapping the test results in fences (~~~), GitHub will display it in a 'box' and preserve any formatting.]

NOTE: Your test code should only contain the test cases you implemented. Your assignment submission  must remove the test cases (it blocks) developed in the labs.

## Deployments.

Specify the URLs of your deployments, both staging and production, 

I tried to make the deployment but failed.

https://git.heroku.com/movie-api-staging-lyy.git

GitLab: https://gitlab.com/yingyinglu1/agileassignment2-ci.git

GitHub: https://github.com/wszfln/agile-assignment2.git


## Independent Learning (if relevant)

Try out continuous delivery and deployment and learn about Heroku hosting.