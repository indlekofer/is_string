export default (data) => typeof data === 'string' || ((!!data && typeof data === 'object') && Object.prototype.toString.call(data) === '[object String]');

