const request = require('supertest')
const app = require('./server.js')
const {Soup, Main, Salad} = require('./models/model.js')

    let server;

    beforeAll(async () => {
      server = app.listen(3000); // Start the server on a specific port
    });
  
    afterAll(async () => {
      await server.close();
})



describe('/soup', () => {
    it('GET 200: should respond with an array of soups, each of which should have 5 properties, name, ingredients, instructions, hints and image', async () => {
        const mockSoups = [{ name: 'Soup 1' }, { name: 'Soup 2' }];
    jest.spyOn(Soup, 'find').mockResolvedValue(mockSoups);

    // Send a GET request to the /soup endpoint
    const response = await request(app).get('/soup');

    // Assert the response status code and body
    expect(response.status).toBe(200);
    
    });
  
})
