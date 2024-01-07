const { default: Router } = require('@router');
const { default: MockApp } = require('@test/tools/mockapp');
const { default: TestRouter } = require('@test/tools/testrouter');

TestRouter(
    Router(
        new MockApp(),
        {
            include: ['resources'],
            load: ['api.js']
        }
    )
);

console.log('Mocha setup done✅. Unit test running now 🏃‍♂️');
