import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

export default async function secret(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });

  if (session) {
    res.send({
      content: 'Welcome to the secret page',
    });
  } else {
    res.send({
      error: 'You need to be signed in',
    });
  }
}
