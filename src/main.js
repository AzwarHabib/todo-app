import { createApp } from 'vue';
import App from './App.vue';
import {Amplify} from 'aws-amplify';


Amplify.configure({
    API: {
        GraphQL: {
            endpoint: 'https://rymsdnzmenax3p5uufxxfm6rum.appsync-api.ap-south-1.amazonaws.com/graphql',
            region: 'ap-south-1',
            defaultAuthMode: 'apiKey',
            apiKey: 'da2-p7unb63g6vauthbrfxoyt4oycy'
          }
    }
  });

   



createApp(App).mount('#app');
