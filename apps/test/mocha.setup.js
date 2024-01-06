const { default: Router } = require('@router');
const { default: MockApp } = require('@test/tools/mockapp');
const { default: TestRouter } = require('@test/tools/testrouter');

console.log("HERE")

TestRouter(
    Router(
        new MockApp(),
        {
            include: ['resources'],
            load: ['api.js']
        }
    )
)
