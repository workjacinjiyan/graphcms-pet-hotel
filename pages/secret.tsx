import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

const Secret = () => {
  const { data: session, status } = useSession();
  const [content, setContent] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/api/secret');
        console.log(res);

        if (!res.ok) {
          throw { status: res.status, statusText: res.statusText };
        }
        const json = await res.json();

        if (json.content) {
          setContent(json.content);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, [session]);

  return status === 'unauthenticated' ? (
    <main>
      <div>
        <h1>You aren&apos;t signed in, please sign in first</h1>
      </div>
    </main>
  ) : status === 'authenticated' ? (
    <main>
      <div>
        <h1>Protected Page</h1>
        <p>{content}</p>
      </div>
    </main>
  ) : null;
};

export default Secret;
