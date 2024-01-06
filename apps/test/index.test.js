import ValidationError from "../utils/errors/validationerror";
import { CreateUserDummyDTO } from "./data/DTO";
import { expect, sandbox } from "./tools/assertions";
import Request from './tools/request';
import response from "./tools/response";
import { TestPostRoute } from "./tools/testrouter";

describe('Test index', async() => {
    const _sandbox = sandbox();
    let req;
    let res;

    beforeEach(() => {
        req = new Request();
        res = response(_sandbox, res);
    });

    it('should run', async() => {
        req.setBody(CreateUserDummyDTO());
        const result = await new TestPostRoute('/v1/user/create').execute(req, res);   
        expect(result).to.not.be(undefined);
    });

    afterEach(() => {
        _sandbox.verifyAndRestore();
    });
});