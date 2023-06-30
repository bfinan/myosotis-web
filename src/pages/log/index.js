import Link from 'next/link';

export default function LogIndex() {
  return (
    <>
      <h2>
        <Link href="/">Back to home</Link> <br></br>
        <Link href="/log/keep-receipts">Keep Receipts</Link>
      </h2>
    </>
  );
}