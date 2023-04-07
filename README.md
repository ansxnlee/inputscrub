# inputscrub
Sandbox for testing input validation on api endpoints and react input fields with [zod](https://github.com/colinhacks/zod).

Core input validation is done server-side to prevent illegal data from being parsed by mikroORM. Validation on the client will mostly be for ease of use for users.

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
