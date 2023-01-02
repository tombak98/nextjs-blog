import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import React from 'react';

export default function FirstPost() {

  const [counter, setCounter] = React.useState(0)

  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <button onClick={()=>setCounter(counter+1)}>Click Me</button>
      <h3>{counter}</h3>
    </Layout>
  );
}