# graphql-node
A (very) simple node implmentation of [GraphQL](https://facebook.github.io/graphql/).

###  Get Started

```
$ npm install
$ npm start
```
Head over to [http://localhost:3000](http://localhost:3000) and check if `{"hello":"world"}` is present.

To view the counter:

```
$ curl -XPOST -H "Content-Type:application/graphql"  -d 'query RootQueryType { count }' http://localhost:3000/graphql
```
To increment the counter:

```
$ curl -XPOST -H 'Content-Type:application/graphql' -d 'mutation RootMutationType { updateCount }' http://localhost:3000/graphql
```

This project is based almost entirely on Clay's wonderful blog post: [Your First GraphQL Server](https://medium.com/@clayallsopp/your-first-graphql-server-3c766ab4f0a2)

### License
MIT
