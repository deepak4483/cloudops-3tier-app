// Simple Express.js server for cloudops-3tier-app
const express = require('express');
const os = require('os');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.send({message: 'Welcome to cloudops-3tier-app', hostname: os.hostname()});
});

app.get('/health', (req, res) => {
	res.json({status: 'ok', uptime: process.uptime()});
});

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
