import { createYoga } from "graphql-yoga";
import {
  InvocationContext,
  HttpRequest,
  HttpResponseInit,
  app,
} from "@azure/functions";
import { builder } from "../helper/schema/builder";
import loadFiles from "../helper/loadFiles";

//  Load all the schema
loadFiles("../schema");

/**
 * Create the Graphql-Yoga server
 */
const yoga = createYoga({
  graphqlEndpoint: "/graphql",
  schema: builder.toSchema(),
  graphiql: true,
});

/**
 * Create the handler for Azure function
 * @param req The request object
 * @param context The context object
 * @returns The response object
 */
export async function graphql(
  req: HttpRequest,
  context: InvocationContext,
): Promise<HttpResponseInit> {
  context.log("HTTP trigger function processed a request.");

  //  Invoke the Graphql server
  const response = await yoga.fetch(req.url, {
    method: req.method.toString(),
    body: req.body,
    headers: req.headers as HeadersInit,
  });

  const responseHeaders = Object.fromEntries(response.headers.entries());

  context.log("GraphQL Yoga response headers:", responseHeaders);

  const responseText = await response.text();

  //  Prepare the response object and send back
  return {
    status: response.status,
    body: responseText,
    headers: responseHeaders,
  };
}

/**
 * Set the configuration for the Azure function
 */
app.http("graphql", {
  methods: ["POST", "GET"],
  authLevel: "anonymous",
  handler: graphql,
});
