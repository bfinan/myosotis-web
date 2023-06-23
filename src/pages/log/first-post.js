import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h1>A new blog</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      

      <body>
        Hello world!
      </body>
    </>
  );
}