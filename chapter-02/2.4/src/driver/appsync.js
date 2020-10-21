import { Auth, API } from 'aws-amplify';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import AwsExports from '../aws-exports';

API.configure({
  url: AwsExports.aws_appsync_graphqlEndpoint,
  region: AwsExports.aws_appsync_region,
  auth: {
    type: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    jwtToken: async () => (await Auth.currentSession()).getIdToken().getJwtToken(),
  },
});

export const AuthAPI = API;
