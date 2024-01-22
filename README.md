# WhatsApp Clone
This WhatsApp clone is essential to developing a framework and learning to create a large-scale system from scratch.

# Table of Contents

- [Apps](#apps)
- [Backend](#backend)
- [Frontends](#frontends)
- [Infrastructure](#infrastructure)
- [Bin](#bin)

## Apps
Apps contain all the microservices code written in Node.js. Currently, it has simple code that is written to develop a lightweight framework.

### How to run an App
To run the app :
```shell 
run.sh <environment>
```

### Import and Export
The file type for Node.js apps is a module. Hence, the project uses "Import" and "Export".

#### Babel for Building
For simplicity and ease of use, Babel is employed as a building tool. It allows for the use of modern JavaScript features and ensures compatibility across different environments.

#### Example Usage with Router Module
To demonstrate the usage of the "Import" and "Export" features, consider the following code snippet:

```javascript
// Importing the Router module using the defined alias
import Router from '@Router';

const app = new Router();
```
### To create a new endpoint
To create a new endpoint you need to import GetRoute, PostRoute, PutRoute, or DeleteRoute from @Route to a controller, consider the following code snippet:

```javascript
import { GetRoute } from "@lib/router";
import response from "@utils/response";
export default class UserController {
    constructor() {}

    get = new GetRoute('/v1/user/create', async (req) => {
        return response('Hello World !', 'Successfully create a new test user for now.');
    });
}
```


### To create a Repository
To create a new model repository, consider the following code snippet:

```javascript
import Repository from '@models';

export default class UserRepository extends Repository {
    constructor() {
        super('User');
    }
} 
```
