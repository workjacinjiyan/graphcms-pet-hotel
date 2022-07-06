import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import Twitter from 'next-auth/providers/twitter';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: 'Email and Password',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'jamie@graphcms.com',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Password',
        },
      },
      authorize: (credentials,req)=>{return null}
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Twitter({
      clientId: process.env.TWITTER_ID as string,
      clientSecret: process.env.TWITTER_SECRET as string,
      version: '2.0',
    }),
  ],
  callbacks: {
    // async jwt(ctx) {
    //   console.count();
    //   console.log('jwt ctx', ctx);
    //   if (ctx.account) {
    //     ctx.token.accessToken = ctx.account.access_token;
    //   }
    //   return ctx.token;
    // },
    // async session(ctx) {
    //   console.count();
    //   console.log('session ctx', ctx);
    //   ctx.session.accessToken = ctx.token.accessToken;
    //   return ctx.session;
    // },
  },
});
