import { /*secret,*/ defineAuth } from "@aws-amplify/backend";

export const auth = defineAuth({
  loginWith: {
   // externalProviders: {
      // google: {
      //   clientId: secret('GOOGLE_CLIENT_ID'),
      //   clientSecret: secret('GOOGLE_CLIENT_SECRET'),
      // },
      // callbackUrls: [
      //   'http://localhost:3000',
      //   // 'https://mywebsite.com/profile'
      // ],
      // logoutUrls: ['http://localhost:3000/', 
      // //  'https://mywebsite.com'
      // ],
    //},
    email: {
      verificationEmailStyle: "CODE",
      verificationEmailSubject: "Welcome to the AI-Powered Recipe Generator!",
      verificationEmailBody: (createCode) =>
        `Use this code to confirm your account: ${createCode()}`,
    },
  },
});