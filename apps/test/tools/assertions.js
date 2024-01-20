import sinon from 'sinon';
import expectjs from 'expect.js';

export const expect = expectjs;

export const sandbox = sinon.createSandbox;

export const sub = sinon.createStubInstance;
