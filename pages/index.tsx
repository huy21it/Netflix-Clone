import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Home - Netflix</title>
        <link rel="icon" href="/favion.ico" />
      </Head>
      <main>
        <div>Netflix-Clone</div>
      </main>
    </div>
  );
}
