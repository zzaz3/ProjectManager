const request = require('supertest');

// Test USER API
describe('The User API', () => {
  it('Returns a list of all users in the database.', async () => {
    const res = await request('http://localhost:3000')
      .get('/users/list')
      .expect(200)
      .expect('Content-Type', /json/);

    // Response should return array.
    expect(Array.isArray(res.body)).toBe(true);
    // List shouldn't be empty.
    expect(res.body.length).toBeGreaterThan(0);
    // First user should be admin.
    expect(res.body[0].username).toBe('zzaz3');
  });
});
