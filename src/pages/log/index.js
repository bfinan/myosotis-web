import Link from 'next/link';

export default function LogIndex() {
  return (
    <>
      <h2>
        <Link href="/">Back to home</Link> <br></br>
        <Link href="/log/first-post">First Post</Link>
      </h2>
    </>
  );
}