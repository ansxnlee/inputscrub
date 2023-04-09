# inputscrub
Sandbox for testing input validation on api endpoints and react input fields with [zod](https://github.com/colinhacks/zod).

Core input validation is done server-side to prevent illegal data from being parsed by mikroORM. Validation on the client will mostly be for user ease of use.

dependencies
---
- postgres service with appropriate database properties set in the `./server/mikro-orm.config.ts` file

Restructuring the server directory
---
Integrating unit testing with jest forced me to restructure how the server initializes itself but the way I've done so may not be ideal.
The main concern is with mikroORM having to fork it's identity maps before using any express router routes.

Ideally, the mikroORM amd express router setups are all done within `./app.ts` but I have no idea how to get the async function wrapped around mikroORM's setup to execute when the app is "required/imported".

My solution to this problem is to setup middleware directly in `./server.ts` which may be unintuitive.
The individual jest files will need to also do these same setups for them to work properly. 

Possible improvements
---
- there are 2 sources of truth for zod validation schemas. we can define 1 and import the other in some way but coupling between the app/server will increase as a result
- i should follow html semantics more and resist the urge to make everything a div for the sake of user accessibiity
- i got lazy piping zod validation errors into custom components that can be displayed on the webapp so maybe i should just use something like formik instead
- I'm practically using pure css to style my compoennts so maybe I should get rid the overhead from emotionJS and just start writing raw css files instead
- it might be worthwhile to separate mikroORM logic from server controllers into it's own middleware functions which increases overall complexity but makes unit testing more efficient
