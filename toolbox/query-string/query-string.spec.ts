/* eslint-disable no-undef */
import { queryString } from './query-string';

describe('queryString()', () => {
  it('should serialize an object with {foo: bar} to a query string', () => {
    const str = queryString({
      foo: 'bar',
    });

    // @ts-ignore
    expect(str).toEqual('foo=bar');
  });

  it('should serialize an object with multiple entries to a query string', () => {
    const str = queryString({
      foo: 'bar',
      boo: 'app',
    });

    // @ts-ignore
    expect(str).toEqual('foo=bar&boo=app');
  });

  it('should stringify a boolean value into a string if exists', () => {
    const str = queryString({
      foo: 'bar',
      boo: false,
    });

    expect(str).toEqual('foo=bar&boo=false');
  });
});
