import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import Twitter from 'next-auth/providers/twitter';
import CredentialsProvider from 'next-auth/providers/credentials';
import {
  CreateNextUserByEmail,
  GetUserByEmail,
} from '../../../lib/queries/user';
import { hash, compare } from 'bcrypt';
import client from '../../../lib/client';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Email and Password',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'johndoe@example.com',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Password',
        },
      },
      // @ts-ignore
      authorize: async ({ email, password }, req) => {
        try {
          console.log(email, password);

          const { user } = await client.request(GetUserByEmail, {
            email,
          });

          if (!user) {
            const { newUser } = await client.request(CreateNextUserByEmail, {
              email,
              password: await hash(password, 12),
            });

            return {
              id: newUser.id,
              username: email,
              email,
            };
          }

          const isValid = await compare(password, user.password);

          if (!isValid) {
            throw new Error('Wrong credentials. Try again.');
          }

          return {
            id: user.id,
            username: email,
            email,
          };
        } catch (error) {
          console.log(error);
        }
      },
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
