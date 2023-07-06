import Link from 'next/link';

export default function LogIndex() {
  return (
    <>
      <h2>
        <Link href="/">Back to home</Link> <br></br>
        <Link href="/log/keep-receipts">Keep Receipts</Link>
        <Link href="https://medium.com/@brendanfinan/myosotis-distribution-guide-9239b7b004ef">Distribution Guide</Link>
      </h2>
    </>
  );
}