import Link from 'next/link';

// this was originally going to be the registry of peoples' Public PKM databases (PPKMDBs),
// but this has been underprioritized, or belongs under a different type of myosotis

export default function FirstPost() {
  return (
    <>
      <h1>PPKMDB Registry</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>

      <table>
        <tr>
          <th>Person</th>
          <th>Database</th>
          <th>Link</th>
          <th>Size (S/M/L)</th>
          <th>Subject</th>
        </tr>
        <tr>
        </tr>
      </table>
    </>
  );
}