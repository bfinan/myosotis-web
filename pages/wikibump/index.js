import Link from 'next/link';
import bumplink, { BumpLink } from './bumplink'


export default function WikibumpPage() {
  return (
    <>
      <h2>
        <Link href="/">Back to home</Link> <br></br>
        <BumpLink title="Running" wikititle='https://www.wikipedia.org/wiki/Running'></BumpLink>
        <BumpLink title="Boston Marathon" wikititle='https://www.wikipedia.org/wiki/Boston_Marathon'></BumpLink>

      </h2>
    </>
  );
}