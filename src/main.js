import { createApp } from "vue";
import App from "./App.vue";
import { Amplify } from "aws-amplify";

Amplify.configure({
  API: {
    GraphQL: {
      endpoint: process.env.VUE_APP_AWS_APPSYNC_GRAPHQL_ENDPOINT,
      region: process.env.VUE_APP_AWS_PROJECT_REGION,
      defaultAuthMode: process.env.VUE_APP_AWS_APPSYNC_AUTHENTICATION_TYPE,
      apiKey: process.env.VUE_APP_AWS_APPSYNC_API_KEY,
    },
  },
});
console.log(process.env.VUE_APP_AWS_APPSYNC_GRAPHQL_ENDPOINT);

createApp(App).mount("#app");
