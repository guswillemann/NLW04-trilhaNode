import request from 'supertest';
import { getConnection } from 'typeorm';
import { app } from '../app';
import createConnection from '../database';


describe("Surveys", () => {
  beforeAll(async () => {
    const connection = await createConnection()
    await connection.runMigrations();
  });
  
  afterAll(async () => {
    const connection = getConnection()
    await connection.dropDatabase();
    await connection.close();
  });

  it ('Should be able to creeate a new survey', async () => {
    const response = await request(app).post('/surveys').send({
      title: 'Title example',
      description: 'Desciption example',
    });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
  });

  it ('Should be albe to get all surveys', async () => {
    await request(app).post('/surveys').send({
      title: 'Title example2',
      description: 'Desciption example2',
    });
    const response = await request(app).get('/surveys');
    expect(response.body.length).toBe(2);
  });
});