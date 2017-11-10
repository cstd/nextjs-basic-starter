// const { createServer } = require('http');
const express = require('express');
const path = require('path');
const next = require('next');

// const helmet = require('helmet');
const router = require('./routes');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: '.', dev });
// const handle = app.getRequestHandler();
const handle = router.getRequestHandler(
  app
);

const PORT = process.env.PORT || 3000;

app.prepare().then(_ => {
	// const server = createServer((req, res) => {
	// 	if (req.url === '/sw.js') {
	// 		app.serveStatic(req, res, path.resolve('./static/sw.js'));
	// 	} else {
	// 		handle(req, res);
	// 	}
	// });
	
	const server = express();
	
	// server.use(helmet());
	server.use(handle);
	
	server.get(`/favicon.ico`, (req, res) =>
    app.serveStatic(req, res, path.resolve('./static/icons/favicon.ico'))
  );
	server.get('/sw.js', (req, res) =>
    app.serveStatic(req, res, path.resolve('./.next/sw.js'))
  );
	
	server.get('*', (req, res) => handle(req, res));

	server.listen(PORT, err => {
		if (err) throw err;

		console.log(`> App running on port ${PORT}`);
	});
});
