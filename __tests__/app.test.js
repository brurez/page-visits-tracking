const request = require('supertest');
const app = require('../app');

describe('Test static server', () => {
  test('It should return the index.html file', done => {
    request(app)
      .get('/')
      .then(res => {
        expect(res.statusCode).toBe(200);
        expect(res.text).toContain('<div id="root"></div>');
        done();
      });
  });
  test('It should return the bundle.js file', done => {
    request(app)
      .get('/bundle.js')
      .then(res => {
        expect(res.statusCode).toBe(200);
        done();
      });
  });
});
