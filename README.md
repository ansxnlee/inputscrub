# inputscrub
Sandbox for testing input validation on api endpoints with [zod](https://github.com/colinhacks/zod) and react input fields with [yup](https://github.com/jquense/yup).

Core input validation is done on server controllers to prevent illegal data from being parsed by mikroORM. Validation on the client is mostly for user convenience.

dependencies
---
- postgres service with appropriate database properties set in the mikro-orm config file
