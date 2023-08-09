import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h2>
        <Link href="/">Back to home</Link> <br></br>
        <Link href="/games/tic-tac-toe">Tic Tac Toe </Link>
        <Link href="/games/guessing">Guessing</Link>
      </h2>
    </>
  );
}