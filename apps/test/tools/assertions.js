import sinon from 'sinon';
import chai from 'chai';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);
const { expect, should, assert, version, util } = chai;

export default {
    expect, 
    should, 
    assert,
    version,
    util,
    sandbox: sinon.createSandbox,
    sub: sinon.createStubInstance
};
