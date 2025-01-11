const request = require('supertest');
const express = require('express');

const app = express();
app.get('/health', (req, res) => res.json({ status: 'OK' }));

describe('GET /health', () => {
    it('should return status OK', async () => {
        const response = await request(app).get('/health');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ status: 'OK' });
    });
});
