
  const awsconfig = {
    aws_project_region: process.env.VUE_APP_AWS_PROJECT_REGION,
    aws_appsync_graphqlEndpoint: process.env.VUE_APP_AWS_APPSYNC_GRAPHQL_ENDPOINT,
    aws_appsync_region: process.env.VUE_APP_AWS_APPSYNC_REGION,
    aws_appsync_authenticationType: process.env.VUE_APP_AWS_APPSYNC_AUTHENTICATION_TYPE,
    aws_appsync_apiKey: process.env.VUE_APP_AWS_APPSYNC_API_KEY,
  };
  

  
  export default awsconfig;
