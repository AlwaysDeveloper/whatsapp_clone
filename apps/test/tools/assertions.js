import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import expectjs from 'expect.js';

export const expect = expectjs;

export const sandbox = sinon.createSandbox;

export const sub = sinon.createStubInstance;
