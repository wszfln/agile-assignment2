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

e.g. 
~~~
  Users endpoint
    GET /api/users 
      ✓ should return all the users and a status 200 (183ms)
    POST /api/users 
      For the register action
        when the payload is correct
          ✓ should return a 201 status and the confirmation message (368ms)
      For the authenticate action
        when the payload is correct
          ✓ should return a 200 status and a generated token (340ms)

  Movies endpoint
    GET /api/movies 
      ✓ should return 20 movies and a status 200 (113ms)
    GET /api/movies/:id
      when the id is valid
        ✓ should return the matching movie (53ms)
      when the id is invalid
        ✓ should return the NOT found message (55ms)


  6 passing (6s)
~~~

[ Markdown Tip: By wrapping the test results in fences (~~~), GitHub will display it in a 'box' and preserve any formatting.]

NOTE: Your test code should only contain the test cases you implemented. Your assignment submission  must remove the test cases (it blocks) developed in the labs.

## Deployments.

Specify the URLs of your deployments, both staging and production, e.g.

https://movies-api-staging-doc-9200283e0b04.herokuapp.com/api/movies

[ I do NOT need the URL of the app on your Heroku dashboard as this is private, e.g.

https://dashboard.heroku.com/apps/movies-api-staging-doc ]

## Independent Learning (if relevant)

Sspecify the URL of the Coveralls webpage that contains your tests' code coverage metrics.

State any other independent learning you achieved while completing this assignment.