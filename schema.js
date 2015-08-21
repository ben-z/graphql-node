import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt
} from 'graphql/type';

let count = 0;

let schema = new GraphQLSchema({
  // Get the value for "count"
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      count: {
        type: GraphQLInt,
        resolve: function() {
          return count;
        }
      }
    }
  }),
  // Increment "count" by 1
  mutation: new GraphQLObjectType({
    name: 'RootMutationType',
    fields: {
      updateCount: {
	type: GraphQLInt,
	description: 'Updates the count',
	resolve: function() {
	  count+=1;
	  return count;
	}
      }
    }
  })
});

export default schema;
