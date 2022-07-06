import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

import { signIn, signOut, useSession } from 'next-auth/react';

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  return (
    <div className={styles.container}>
      {status === 'unauthenticated' && (
        <>
          <p>Not signed in</p>
          <br />
          <button
            onClick={() => {
              signIn();
            }}
          >
            Sign in
          </button>
        </>
      )}

      {status === 'authenticated' && (
        <>
          <p>Signed in as {session?.user?.email || session?.user?.name}</p>
          <div>You can now access the secret page</div>
          <button>
            <Link href="/secret">To secret page</Link>
          </button>
          <button
            onClick={() => {
              signOut();
            }}
          >
            Sign out
          </button>
        </>
      )}
    </div>
  );
};

export default Home;
