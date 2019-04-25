import assert from 'assert';

import isString from '../src/index';

describe('isString', () => {
  it('default string', () => {
    assert.equal(true, isString('hello'));
  });
  it('new string', () => {
    assert.equal(true, isString(new String('hello')));
  });
  it('object', () => {
    assert.equal(false, isString({test: "hello"}));
  });
  it('array', () => {
    assert.equal(false, isString(["hello"]));
  });
  it('bool', () => {
    assert.equal(false, isString(true));
  });
  it('undefined', () => {
    assert.equal(false, isString(undefined));
  });
  it('null', () => {
    assert.equal(false, isString(null));
  });
});
