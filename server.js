"use strict";

// Dependencies
import express from 'express';
import schema from './schema';
import { graphql } from 'graphql';
import bodyParser from 'body-parser';

let app  = express();
let PORT = process.env.PORT || 3000;

// Let the body parser parse requests in graphql format
app.use(bodyParser.text({ type: 'application/graphql' }));

// Make sure the server is live
app.get("/", (req, res) => {
    res.json({hello: 'world'});
});

// The route for graphql
app.post('/graphql', (req, res) => {
	graphql(schema, req.body)
	.then((result) => {
		res.send(JSON.stringify(result, null, 2));
	});
});

// Start the server
let server = app.listen(PORT, () => {
  let host = server.address().address;
  let port = server.address().port;

  console.log('GraphQL listening at http://%s:%s', host, port);
});
